// PATH: components/sections/quiz/QuizSection.tsx
'use client';

import { useReducer, useMemo, useEffect } from 'react';
import { QuizState, ExamType, Language, QuestionStatus, QuizResult, QuestionSet, UserAnswer } from '@/types/quiz.types';
import { mockQuizData } from '@/lib/data/quiz/mockQuizData';
import ExamTypeSelection from './steps/ExamTypeSelection';
import SubjectTopicSelection from './steps/SubjectTopicSelection';
import TestRunner from './steps/TestRunner';
import ResultsPage from './steps/ResultsPage';

const DURATION_SECONDS = 600; // 10 minutes

const initialState: QuizState = {
  step: 'exam-select',
  examType: null,
  subtopicId: null,
  language: 'en',
  currentQuestionIndex: 0,
  answers: {},
  secondsRemaining: DURATION_SECONDS,
  testStartedAt: null,
  isSubmitted: false
};

type QuizAction =
  | { type: 'SELECT_EXAM_TYPE'; examType: ExamType }
  | { type: 'CONTINUE_TO_TOPIC_SELECT' }
  | { type: 'SELECT_SUBTOPIC'; subtopicId: string }
  | { type: 'START_TEST'; durationSeconds: number }
  | { type: 'SELECT_OPTION'; questionId: string; optionIndex: number }
  | { type: 'CLEAR_RESPONSE'; questionId: string }
  | { type: 'MARK_FOR_REVIEW'; questionId: string }
  | { type: 'GOTO_QUESTION'; index: number }
  | { type: 'TICK' }
  | { type: 'SUBMIT_TEST' }
  | { type: 'SET_LANGUAGE'; language: Language }
  | { type: 'RESET_TO_TOPIC_SELECT' };

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SELECT_EXAM_TYPE':
      return {
        ...state,
        examType: action.examType
      };

    case 'CONTINUE_TO_TOPIC_SELECT':
      return {
        ...state,
        step: 'topic-select'
      };

    case 'SELECT_SUBTOPIC':
      return {
        ...state,
        subtopicId: action.subtopicId
      };

    case 'START_TEST': {
      const subtopicId = state.subtopicId;
      if (!subtopicId) return state;
      const activeSet = mockQuizData.questionSets[subtopicId];
      if (!activeSet) return state;

      const initialAnswers: Record<string, any> = {};
      activeSet.questions.forEach((q, idx) => {
        initialAnswers[q.id] = {
          questionId: q.id,
          selectedOption: null,
          status: idx === 0 ? 'not-answered' : 'not-visited',
          timeSpentSeconds: 0
        };
      });

      return {
        ...state,
        step: 'live-test',
        currentQuestionIndex: 0,
        answers: initialAnswers,
        secondsRemaining: action.durationSeconds,
        testStartedAt: Date.now(),
        isSubmitted: false
      };
    }

    case 'SELECT_OPTION': {
      const { questionId, optionIndex } = action;
      const currentAnswer = state.answers[questionId];
      if (!currentAnswer) return state;

      const newStatus: QuestionStatus = currentAnswer.status === 'marked' ? 'marked' : 'answered';

      return {
        ...state,
        answers: {
          ...state.answers,
          [questionId]: {
            ...currentAnswer,
            selectedOption: optionIndex,
            status: newStatus
          }
        }
      };
    }

    case 'CLEAR_RESPONSE': {
      const { questionId } = action;
      const currentAnswer = state.answers[questionId];
      if (!currentAnswer) return state;

      return {
        ...state,
        answers: {
          ...state.answers,
          [questionId]: {
            ...currentAnswer,
            selectedOption: null,
            status: 'not-answered'
          }
        }
      };
    }

    case 'MARK_FOR_REVIEW': {
      const { questionId } = action;
      const currentAnswer = state.answers[questionId];
      if (!currentAnswer) return state;

      return {
        ...state,
        answers: {
          ...state.answers,
          [questionId]: {
            ...currentAnswer,
            status: 'marked'
          }
        }
      };
    }

    case 'GOTO_QUESTION': {
      const targetIndex = action.index;
      const subtopicId = state.subtopicId;
      if (!subtopicId) return state;
      const activeSet = mockQuizData.questionSets[subtopicId];
      if (!activeSet) return state;

      const targetQ = activeSet.questions[targetIndex];
      if (!targetQ) return state;

      const updatedAnswers = { ...state.answers };
      const currentAns = updatedAnswers[targetQ.id];
      if (currentAns && currentAns.status === 'not-visited') {
        updatedAnswers[targetQ.id] = {
          ...currentAns,
          status: 'not-answered'
        };
      }

      return {
        ...state,
        currentQuestionIndex: targetIndex,
        answers: updatedAnswers
      };
    }

    case 'TICK': {
      if (state.isSubmitted || state.step !== 'live-test') return state;
      const nextSeconds = Math.max(0, state.secondsRemaining - 1);
      const isZero = nextSeconds === 0;

      const subtopicId = state.subtopicId;
      const updatedAnswers = { ...state.answers };

      if (subtopicId) {
        const activeSet = mockQuizData.questionSets[subtopicId];
        if (activeSet) {
          const currentQ = activeSet.questions[state.currentQuestionIndex];
          if (currentQ && updatedAnswers[currentQ.id]) {
            updatedAnswers[currentQ.id] = {
              ...updatedAnswers[currentQ.id],
              timeSpentSeconds: updatedAnswers[currentQ.id].timeSpentSeconds + 1
            };
          }
        }
      }

      return {
        ...state,
        secondsRemaining: nextSeconds,
        answers: updatedAnswers,
        step: isZero ? 'results' : state.step,
        isSubmitted: isZero ? true : state.isSubmitted
      };
    }

    case 'SUBMIT_TEST':
      return {
        ...state,
        step: 'results',
        isSubmitted: true
      };

    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language
      };

    case 'RESET_TO_TOPIC_SELECT':
      return {
        ...initialState,
        step: 'topic-select',
        examType: state.examType,
        language: state.language
      };

    default:
      return state;
  }
}

function calculateResult(
  questionSet: QuestionSet,
  answers: Record<string, UserAnswer>,
  timeTakenSeconds: number
): QuizResult {
  let correct = 0, wrong = 0, unattempted = 0;
 
  questionSet.questions.forEach(q => {
    const a = answers[q.id];
    if (!a || a.selectedOption === null) {
      unattempted++;
    } else if (a.selectedOption === q.correctOption) {
      correct++;
    } else {
      wrong++;
    }
  });
 
  const total = questionSet.questions.length;
  const attempted = correct + wrong;
  const scorePercent = Math.round((correct / total) * 100);
  const accuracyPercent = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
 
  const topicBreakdown = [{
    topicName: questionSet.topicId,
    subtopicName: questionSet.subtopicId,
    totalQuestions: total,
    correct,
    wrong,
    unattempted,
    accuracyPercent,
  }];
 
  const weakAreas = topicBreakdown
    .filter(t => t.accuracyPercent < 50)
    .map(t => t.subtopicName);
 
  return {
    totalQuestions: total,
    correct,
    wrong,
    unattempted,
    scorePercent,
    accuracyPercent,
    timeTakenSeconds,
    topicBreakdown,
    weakAreas
  };
}

export default function QuizSection() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const activeQuestionSet = useMemo(() => {
    if (!state.subtopicId) return null;
    return mockQuizData.questionSets[state.subtopicId] || null;
  }, [state.subtopicId]);

  const quizResult = useMemo(() => {
    if (state.step !== 'results' || !activeQuestionSet) return null;
    const timeTaken = DURATION_SECONDS - state.secondsRemaining;
    return calculateResult(activeQuestionSet, state.answers, timeTaken);
  }, [state.step, activeQuestionSet, state.answers, state.secondsRemaining]);

  const handleSelectExamType = (exam: ExamType) => {
    dispatch({ type: 'SELECT_EXAM_TYPE', examType: exam });
  };

  const handleContinueToTopicSelect = () => {
    dispatch({ type: 'CONTINUE_TO_TOPIC_SELECT' });
  };

  const handleSelectSubtopic = (subtopicId: string) => {
    dispatch({ type: 'SELECT_SUBTOPIC', subtopicId });
  };

  const handleStartTest = () => {
    dispatch({ type: 'START_TEST', durationSeconds: DURATION_SECONDS });
  };

  const handleRetake = () => {
    dispatch({ type: 'RESET_TO_TOPIC_SELECT' });
  };

  // Toggle fullscreen layout style on live-test step
  useEffect(() => {
    if (state.step === 'live-test') {
      document.body.classList.add('live-test-active');
    } else {
      document.body.classList.remove('live-test-active');
    }
    return () => {
      document.body.classList.remove('live-test-active');
    };
  }, [state.step]);

  // Scroll to reports section upon quiz submission
  useEffect(() => {
    if (state.step === 'results') {
      const timer = setTimeout(() => {
        const element = document.getElementById('quiz-module-root');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [state.step]);

  return (
    <section id="quiz-module-root" className="bg-[var(--color-off-white)] border-t border-slate-200 scroll-mt-20">
      <style dangerouslySetInnerHTML={{ __html: `
        body.live-test-active {
          overflow: hidden !important;
          height: 100vh !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        body.live-test-active header,
        body.live-test-active footer,
        body.live-test-active section:not(#quiz-module-root),
        body.live-test-active div.fixed.bottom-0 {
          display: none !important;
        }
      `}} />
      {state.step === 'exam-select' && (
        <ExamTypeSelection
          initialSelection={state.examType}
          onSelect={handleSelectExamType}
          onContinue={handleContinueToTopicSelect}
        />
      )}

      {state.step === 'topic-select' && (
        <SubjectTopicSelection
          examType={state.examType!}
          sections={mockQuizData.sections}
          selectedSubtopicId={state.subtopicId}
          onSelectSubtopic={handleSelectSubtopic}
          onBack={() => dispatch({ type: 'RESET_TO_TOPIC_SELECT' })}
          onStartTest={handleStartTest}
        />
      )}

      {state.step === 'live-test' && activeQuestionSet && (
        <TestRunner
          questionSet={activeQuestionSet}
          state={state}
          dispatch={dispatch}
        />
      )}

      {state.step === 'results' && quizResult && activeQuestionSet && (
        <ResultsPage
          result={quizResult}
          questions={activeQuestionSet.questions}
          answers={state.answers}
          language={state.language}
          onRetake={handleRetake}
        />
      )}
    </section>
  );
}
