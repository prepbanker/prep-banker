// PATH: components/steps/TestRunner.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, Globe, User, FileText, Info, AlertTriangle, AlertCircle, X, ChevronRight, Check } from 'lucide-react';
import { QuestionSet, QuizQuestion, QuizState, UserAnswer, Language, QuestionStatus } from '@/types/quiz.types';
import DiagramRenderer from './DiagramRenderer';

interface TestRunnerProps {
  questionSet: QuestionSet;
  state: QuizState;
  dispatch: (action: any) => void;
}

export default function TestRunner({ questionSet, state, dispatch }: TestRunnerProps) {
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState(false);
  const [showReportIssueModal, setShowReportIssueModal] = useState(false);
  const [issueText, setIssueText] = useState('');
  const [issueSubmitted, setIssueSubmitted] = useState(false);

  const ariaLiveTimerRef = useRef<HTMLDivElement>(null);
  const { currentQuestionIndex, answers, secondsRemaining, language, isSubmitted } = state;
  const questions = questionSet.questions;
  const currentQuestion = questions[currentQuestionIndex];

  // Helper to get text by language
  const getLangText = (textObj: any): string => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    return textObj[language] || textObj['en'] || '';
  };

  // Helper to get options
  const getLangOptions = (optionsObj: any): string[] => {
    if (!optionsObj) return [];
    if (Array.isArray(optionsObj)) return optionsObj;
    return optionsObj[language] || optionsObj['en'] || [];
  };

  // Timer Tick Trigger
  useEffect(() => {
    if (isSubmitted || state.step !== 'live-test') return;
    const timer = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, state.step, dispatch]);

  // Accessibility Announcements
  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const minutes = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;

    let announce = '';
    if (secondsRemaining > 60 && secs === 0) {
      announce = `${minutes} minutes remaining`;
    } else if (secondsRemaining === 60) {
      announce = '1 minute remaining';
    } else if (secondsRemaining < 60 && secondsRemaining % 10 === 0) {
      announce = `${secondsRemaining} seconds remaining`;
    }

    if (announce && ariaLiveTimerRef.current) {
      ariaLiveTimerRef.current.textContent = announce;
    }
  }, [secondsRemaining]);

  // Format seconds -> mm:ss
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const timerWarning = secondsRemaining <= 60;

  // Handle MCQ Option Selection
  const handleSelectOption = (index: number) => {
    if (!currentQuestion) return;
    dispatch({
      type: 'SELECT_OPTION',
      questionId: currentQuestion.id,
      optionIndex: index
    });
  };

  // Footer Navigation Action Handlers
  const handleSaveNext = () => {
    // Persists selection and goes to next
    if (currentQuestionIndex < questions.length - 1) {
      dispatch({ type: 'GOTO_QUESTION', index: currentQuestionIndex + 1 });
    } else {
      setShowConfirmSubmit(true);
    }
  };

  const handleNextOnly = () => {
    // Skip saving option, just go to next question
    if (currentQuestionIndex < questions.length - 1) {
      dispatch({ type: 'GOTO_QUESTION', index: currentQuestionIndex + 1 });
    } else {
      setShowConfirmSubmit(true);
    }
  };

  const handleMarkReview = () => {
    if (!currentQuestion) return;
    dispatch({ type: 'MARK_FOR_REVIEW', questionId: currentQuestion.id });
    if (currentQuestionIndex < questions.length - 1) {
      dispatch({ type: 'GOTO_QUESTION', index: currentQuestionIndex + 1 });
    } else {
      setShowConfirmSubmit(true);
    }
  };

  const handleClearResponse = () => {
    if (!currentQuestion) return;
    dispatch({ type: 'CLEAR_RESPONSE', questionId: currentQuestion.id });
  };

  const handleGotoQuestion = (index: number) => {
    dispatch({ type: 'GOTO_QUESTION', index });
  };

  const handleManualSubmit = () => {
    dispatch({ type: 'SUBMIT_TEST' });
    setShowConfirmSubmit(false);
  };

  // Stats calculation
  const totalQuestions = questions.length;
  const attemptedCount = Object.values(answers).filter(a => a.selectedOption !== null).length;
  const unansweredCount = totalQuestions - attemptedCount;

  const instructionsText = getLangText(questionSet.instructions);
  const passageText = questionSet.passage ? getLangText(questionSet.passage) : null;
  const sharedDiagram = questionSet.sharedDiagram || null;

  // Section Headers corresponding to the current section
  const sectionName = questionSet.sectionId === 'quant'
    ? 'Quantitative Aptitude'
    : questionSet.sectionId === 'reasoning'
    ? 'Reasoning Ability'
    : 'English Language';

  return (
    <div className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-[#E9ECF2] select-none text-[var(--color-navy)] font-sans">
      {/* Accessibility announcer */}
      <div
        ref={ariaLiveTimerRef}
        className="sr-only"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }}
        aria-live="polite"
        aria-atomic="true"
      />

      {/* ── TOP HEADER BAR (AUTHENTIC BANKING PANEL STYLE) ── */}
      <div className="h-[44px] min-h-[44px] bg-[var(--color-navy)] text-white px-4 flex items-center justify-between shadow-md z-30">
        <div className="flex items-center gap-3">
          {/* Logo Badge */}
          <div className="bg-[var(--color-gold)] text-[var(--color-navy-deep)] px-1.5 py-0.5 rounded font-black text-[10px] sm:text-[11px] tracking-wider uppercase">
            PB EXAM
          </div>
          <span className="text-slate-500">|</span>
          <h1 className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide uppercase truncate">
            {state.examType} ONLINE PORTAL
          </h1>
        </div>

        {/* Center: System Alert banner */}
        <div className="hidden md:flex items-center bg-black/20 text-slate-350 text-[11.5px] sm:text-xs font-bold px-3 py-1 rounded border border-slate-700/50">
          📍 Free Mock Trial — Full Screen Mode
        </div>

        {/* Right: Language switch and live timer */}
        <div className="flex items-center gap-2.5">
          {/* Language Switch */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-md px-1.5 py-0.5">
            <Globe className="w-3 h-3 text-slate-400" />
            <select
              value={language}
              onChange={(e) => dispatch({ type: 'SET_LANGUAGE', language: e.target.value as Language })}
              className="bg-transparent border-0 text-white text-[10px] sm:text-xs font-bold focus:outline-none focus:ring-0 cursor-pointer p-0"
            >
              <option value="en" className="bg-[var(--color-navy)] text-white">English</option>
              {(questionSet.subtopicId === 'syllogism' || questionSet.subtopicId === 'coding-decoding-sub') && (
                <option value="hi" className="bg-[var(--color-navy)] text-white">Hindi / हिंदी</option>
              )}
            </select>
          </div>

          {/* Time Counter */}
          <div className={`flex items-center gap-1 px-2.5 py-0.5 bg-black/30 rounded border ${
            timerWarning ? 'border-red-500 text-red-500 font-bold animate-pulse' : 'border-slate-700 text-white'
          } font-mono text-[11px] sm:text-xs font-black`}>
            <Clock className="w-3 h-3" />
            <span className="tracking-wide">Time Left: {formatTime(secondsRemaining)}</span>
          </div>
        </div>
      </div>

      {/* ── SECTION NAVIGATION TABS SUBBAR (REAL SBI/IBPS LOOK) ── */}
      <div className="h-[32px] min-h-[32px] bg-slate-200 border-b border-slate-300 flex items-center px-2 sm:px-4 gap-1.5 shadow-2xs z-20">
        <span className="text-[10px] sm:text-xs font-black text-slate-500 tracking-wider uppercase mr-1.5">
          Sections:
        </span>
        {/* Render a tab list where only the current section is active, others are greyed/disabled to resemble sectional gating */}
        {['Quantitative Aptitude', 'Reasoning Ability', 'English Language'].map((name) => {
          const isActive = name === sectionName;
          const shortName = name === 'Quantitative Aptitude'
            ? 'Quant'
            : name === 'Reasoning Ability'
            ? 'Reasoning'
            : 'English';
          return (
            <div
              key={name}
              className={`px-2 sm:px-4 h-full flex items-center text-[9px] sm:text-[11px] md:text-[12.5px] font-extrabold uppercase tracking-wide border-r border-slate-300 transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#E9ECF2] border-t-2 border-t-[var(--color-blue)] text-[var(--color-blue)] font-black'
                  : 'text-slate-400 cursor-not-allowed bg-slate-100/50'
              }`}
            >
              <span className="hidden sm:inline">{name}</span>
              <span className="sm:hidden">{shortName}</span>
            </div>
          );
        })}
      </div>

      {/* ── MAIN SPLIT-SCREEN WORKSPACE ── */}
      <div className="flex-grow flex flex-row overflow-hidden relative">
        
        {/* LEFT PANEL: QUESTION WORKSPACE (SCROLLS INDEPENDENTLY) */}
        <div className="flex-grow flex flex-col overflow-y-auto p-3 pb-20 bg-[#E9ECF2]">
          
          {/* MOBILE/TABLET RESPONSIVE PALETTE STRIP (Pill strip visible under 1024px) */}
          <div className="lg:hidden bg-white border border-slate-200 p-2 rounded-xl shadow-xs flex flex-col gap-1.5 mb-3 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                Question Panel (Tap to Jump)
              </span>
              <span className="text-[9px] font-bold text-slate-600">
                Attempted: <span className="text-[var(--color-success)]">{attemptedCount}</span> / {totalQuestions}
              </span>
            </div>
            {/* Scrollable Palette Row */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin scroll-smooth scroll-hide">
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                const status = userAns?.status || 'not-visited';
                const hasAns = userAns?.selectedOption !== null && userAns?.selectedOption !== undefined;
                const isCurrent = idx === currentQuestionIndex;

                let bgClass = 'bg-white border-slate-200 text-slate-700';
                if (status === 'answered') {
                  bgClass = 'bg-[var(--color-success)] border-[var(--color-success)] text-white';
                } else if (status === 'not-answered') {
                  bgClass = 'bg-[var(--color-danger)] border-[var(--color-danger)] text-white';
                } else if (status === 'marked') {
                  bgClass = 'bg-[var(--color-gold-bright)] border-[var(--color-gold-bright)] text-white';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleGotoQuestion(idx)}
                    className={`w-7.5 h-7.5 rounded-md border font-mono text-[11px] font-bold flex items-center justify-center shrink-0 relative transition-all active:scale-90 cursor-pointer ${bgClass} ${
                      isCurrent ? 'ring-2 ring-[var(--color-blue)] ring-offset-1 scale-105' : ''
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {status === 'marked' && hasAns && (
                      <span className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exam Instructions Panel */}
          <div className="bg-white p-3 sm:p-4 md:p-5 rounded-xl border border-slate-200 shadow-2xs text-[10px] sm:text-[11.5px] md:text-[13px] text-slate-600 leading-relaxed shrink-0 mb-3">
            <span className="font-extrabold text-[var(--color-navy-deep)] uppercase mr-1.5 text-[10px] sm:text-[12px] md:text-[13.5px]">Directions:</span>
            {instructionsText}
            {questionSet.note && (
              <div className="mt-1.5 p-1.5 sm:p-2 bg-slate-50 rounded border border-slate-150 text-[9px] sm:text-[10px] md:text-[11.5px] font-medium text-slate-600">
                <span className="font-bold text-[var(--color-navy)]">Note:</span> {questionSet.note}
              </div>
            )}
          </div>

          {/* Reading Comprehension Scrollbox */}
          {passageText && (
            <div className="bg-white p-3 sm:p-4 md:p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col max-h-[140px] sm:max-h-[180px] md:max-h-[220px] shrink-0 overflow-hidden mb-3">
              <div className="text-[9.5px] sm:text-[11px] md:text-[12px] font-black uppercase text-slate-450 tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[var(--color-blue)]" />
                Passage (Scroll to Read)
              </div>
              <div className="overflow-y-auto text-[11px] sm:text-[12.5px] md:text-[13.5px] text-slate-700 leading-relaxed pr-1.5 font-serif border border-slate-100 p-2.5 rounded-lg bg-slate-50">
                {passageText}
              </div>
            </div>
          )}

          {/* Diagram Layout */}
          {sharedDiagram && (
            <div className="w-full shrink-0 mb-3">
              <DiagramRenderer diagram={sharedDiagram} />
            </div>
          )}

          {/* Main Question Panel */}
          {currentQuestion ? (
            <div className="bg-white p-3.5 sm:p-5 md:p-7 rounded-xl border border-slate-200 shadow-2xs flex flex-col gap-3.5 sm:gap-5 md:gap-6 shrink-0">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-[10.5px] sm:text-[12px] md:text-[13.5px] font-black text-[var(--color-navy-deep)] uppercase tracking-wider">
                  Question No. {currentQuestionIndex + 1}
                </span>
                <span className={`px-2 py-0.5 rounded text-[8px] sm:text-[9.5px] md:text-[10.5px] font-black uppercase tracking-wider border ${
                  currentQuestion.difficulty === 'easy'
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-700'
                    : currentQuestion.difficulty === 'medium'
                    ? 'bg-amber-50 border-amber-100 text-amber-700'
                    : 'bg-rose-50 border-rose-100 text-rose-700'
                }`}>
                  {currentQuestion.difficulty}
                </span>
              </div>

              {/* Question text */}
              <div className="text-[12px] sm:text-[13.5px] md:text-[15.5px] font-semibold leading-relaxed text-slate-800 whitespace-pre-line font-sans">
                {getLangText(currentQuestion.question)}
              </div>

              {/* MCQ Options List */}
              <div className="flex flex-col gap-2 md:gap-3" role="radiogroup" aria-label="Question Options">
                {getLangOptions(currentQuestion.options).map((optionText, optIdx) => {
                  const optChar = String.fromCharCode(65 + optIdx);
                  const userAnsObj = answers[currentQuestion.id];
                  const isSelected = userAnsObj?.selectedOption === optIdx;

                  return (
                    <label
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full flex items-center p-2.5 sm:p-3.5 md:p-4.5 rounded-lg border text-[11px] sm:text-[12.5px] md:text-[14px] font-bold transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'border-[var(--color-blue)] bg-[var(--color-sky)] text-[var(--color-navy)] shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${currentQuestion.id}`}
                        checked={isSelected}
                        onChange={() => {}}
                        className="sr-only"
                      />
                      <div className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 rounded-full border flex items-center justify-center mr-3 transition-all shrink-0 ${
                        isSelected ? 'border-[var(--color-blue)] bg-[var(--color-blue)]' : 'border-slate-350 bg-white'
                      }`}>
                        {isSelected ? (
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                        ) : (
                          <span className="text-[7.5px] sm:text-[9px] font-black text-slate-400">{optChar}</span>
                        )}
                      </div>
                      <span className="leading-normal">{optionText}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
              <AlertCircle className="w-8 h-8 text-[var(--color-danger)] mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-500">Question data is empty.</p>
            </div>
          )}

        </div>

        {/* RIGHT SIDEBAR PANEL: FIXED GRID (SHOWN ON LG DESKTOPS ONLY) */}
        <div className="hidden lg:flex w-[240px] border-l border-slate-350 bg-white flex-col p-4 overflow-y-auto shrink-0 z-10">
          
          {/* Guest Identity Card */}
          <div className="flex items-center gap-3 pb-3 border-b border-slate-150 mb-5">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-455 font-bold shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11.5px] sm:text-xs font-black text-[var(--color-navy-deep)] truncate">Guest Candidate</div>
              <p className="text-[9.5px] sm:text-[10px] text-slate-400 font-black tracking-wider uppercase">Free Mock Session</p>
            </div>
          </div>

          {/* Palette Grid */}
          <div className="mb-5">
            <div className="text-[10px] sm:text-[11px] font-black text-slate-450 uppercase tracking-widest mb-3">
              Question Palette
            </div>
            <div className="grid grid-cols-4 gap-2">
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                const status = userAns?.status || 'not-visited';
                const hasAns = userAns?.selectedOption !== null && userAns?.selectedOption !== undefined;
                const isCurrent = idx === currentQuestionIndex;

                let bgClass = 'bg-white border-slate-200 text-slate-700 hover:border-slate-400';
                if (status === 'answered') {
                  bgClass = 'bg-[var(--color-success)] border-[var(--color-success)] text-white';
                } else if (status === 'not-answered') {
                  bgClass = 'bg-[var(--color-danger)] border-[var(--color-danger)] text-white';
                } else if (status === 'marked') {
                  bgClass = 'bg-[var(--color-gold-bright)] border-[var(--color-gold-bright)] text-white';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleGotoQuestion(idx)}
                    aria-label={`Question ${idx + 1}, ${status}${hasAns ? ' and answered' : ''}`}
                    className={`w-9.5 h-9.5 rounded-md border font-mono text-[11.5px] sm:text-xs font-bold flex items-center justify-center relative transition-all cursor-pointer ${bgClass} ${
                      isCurrent ? 'ring-2 ring-[var(--color-blue)] ring-offset-1 scale-102' : ''
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {status === 'marked' && hasAns && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white flex items-center justify-center shadow-xs">
                        <Check className="w-1.5 h-1.5 text-[var(--color-gold-bright)] stroke-[4]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Legend */}
          <div className="border-t border-slate-100 pt-5 flex flex-col gap-3 mb-6">
            <div className="text-[10px] sm:text-[11px] font-black text-slate-450 uppercase tracking-widest">
              Legend Status
            </div>
            <div className="flex flex-col gap-2.5 text-[11px] sm:text-xs font-bold text-slate-650">
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded bg-[var(--color-success)]" />
                <span>Answered ({attemptedCount})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded bg-[var(--color-danger)]" />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded bg-[var(--color-gold-bright)]" />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded border border-slate-350 bg-white" />
                <span>Not Visited ({unansweredCount})</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="border-t border-slate-150 pt-4 grid grid-cols-2 gap-2 mt-auto">
            <button
              onClick={() => setShowQuestionPaperModal(true)}
              className="px-1.5 py-1.5 border border-slate-250 hover:border-slate-350 hover:bg-slate-50 text-[10px] sm:text-xs font-extrabold text-slate-650 rounded-md transition-colors cursor-pointer text-center"
            >
              Paper
            </button>
            <button
              onClick={() => setShowInstructionsModal(true)}
              className="px-1.5 py-1.5 border border-slate-250 hover:border-slate-350 hover:bg-slate-50 text-[10px] sm:text-xs font-extrabold text-slate-650 rounded-md transition-colors cursor-pointer text-center"
            >
              Rules
            </button>
          </div>
        </div>

      </div>

      {/* ── FIXED BOTTOM ACTION BAR (PINNED TO BOTTOM ALWAYS) ── */}
      <div className="h-[40px] sm:h-[48px] min-h-[40px] sm:min-h-[48px] bg-slate-150 border-t border-slate-300 px-2 sm:px-4 flex items-center justify-between shadow-lg z-35">
        {/* Left Side Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={handleMarkReview}
            className="h-7.5 sm:h-9 px-1.5 sm:px-4 border border-amber-600 hover:bg-amber-50 rounded-lg text-[9px] sm:text-[11.5px] md:text-xs font-black text-amber-700 bg-white transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Mark for Review</span>
            <span className="sm:hidden">Review</span>
          </button>
          <button
            onClick={handleClearResponse}
            className="h-7.5 sm:h-9 px-1.5 sm:px-3 border border-slate-300 bg-white hover:bg-slate-50 rounded-lg text-[9px] sm:text-[11.5px] md:text-xs font-bold text-slate-650 transition-all active:scale-95 cursor-pointer"
          >
            <span className="hidden sm:inline">Clear Response</span>
            <span className="sm:hidden">Clear</span>
          </button>
        </div>

        {/* Center: Report Issue Ghost Link */}
        <button
          onClick={() => setShowReportIssueModal(true)}
          className="hidden md:inline text-[10px] sm:text-[11px] font-bold text-slate-450 hover:text-slate-655 hover:underline cursor-pointer"
        >
          Report an Issue
        </button>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Simple skip button */}
          <button
            onClick={handleNextOnly}
            className="h-7.5 sm:h-9 px-1.5 sm:px-3 border border-slate-300 bg-white hover:bg-slate-50 rounded-lg text-[9px] sm:text-[11.5px] md:text-xs font-bold text-slate-650 transition-all active:scale-95 cursor-pointer"
          >
            Next
          </button>
          <button
            onClick={handleSaveNext}
            className="h-7.5 sm:h-9 px-2 sm:px-4 bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 rounded-lg text-[9px] sm:text-[11.5px] md:text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-sm"
          >
            Save &amp; Next
          </button>
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="h-7.5 sm:h-9 px-2 sm:px-3.5 bg-[var(--color-gold-bright)] hover:brightness-105 rounded-lg text-[9px] sm:text-[11.5px] md:text-xs font-black text-[var(--color-navy-deep)] transition-all active:scale-95 cursor-pointer shadow-sm cta-glow-effect"
          >
            <span className="hidden sm:inline">Submit Test</span>
            <span className="sm:hidden">Submit</span>
          </button>
        </div>
      </div>

      {/* ── MODAL UTILITIES ── */}

      {/* 1. Submit Confirm Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowConfirmSubmit(false)} />
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full relative z-10 shadow-2xl animate-in scale-in duration-200">
            <h3 className="text-base font-extrabold text-[var(--color-navy-deep)] flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-gold-bright)]" />
              Final Submission
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              Are you sure you want to end the test? Once submitted, your answers will be locked for grading.
            </p>

            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 flex flex-col gap-2 mb-5 text-xs font-semibold text-slate-600">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <span className="text-[var(--color-navy)] font-bold">{totalQuestions}</span>
              </div>
              <div className="flex justify-between text-[var(--color-success)]">
                <span>Attempted Answers:</span>
                <span className="font-bold">{attemptedCount}</span>
              </div>
              <div className="flex justify-between text-[var(--color-danger)]">
                <span>Unanswered Sets:</span>
                <span className="font-bold">{unansweredCount}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3.5">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4.5 py-2.5 rounded-xl text-xs font-bold border border-slate-200 hover:bg-slate-50 cursor-pointer"
              >
                Go Back
              </button>
              <button
                onClick={handleManualSubmit}
                className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-navy)] hover:opacity-95 shadow-md cursor-pointer"
              >
                Submit Answers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Instructions Modal */}
      {showInstructionsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowInstructionsModal(false)} />
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full relative z-10 shadow-2xl max-h-[80vh] flex flex-col animate-in scale-in duration-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-extrabold text-[var(--color-navy-deep)] flex items-center gap-2">
                <Info className="w-4.5 h-4.5 text-[var(--color-blue)]" />
                Exam portal Instructions
              </h3>
              <button onClick={() => setShowInstructionsModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto text-xs text-slate-600 space-y-3.5 pr-1 leading-relaxed">
              <p className="font-bold text-slate-800 uppercase text-[10px] tracking-wider">Exam Rules Summary:</p>
              <ul className="list-disc pl-4 space-y-2 font-medium">
                <li>Total mock quiz duration is 10 minutes.</li>
                <li>Questions are single select MCQs. Jumping between questions via the palette does not erase selected options.</li>
                <li>Clicking <span className="font-bold text-emerald-600">Save &amp; Next</span> saves option and advances index.</li>
                <li>Clicking <span className="font-bold text-slate-600">Next</span> skips without saving.</li>
                <li>Clicking <span className="font-bold text-amber-600">Mark for Review</span> flags the question to revisit.</li>
              </ul>
            </div>
            <div className="flex justify-end pt-4 border-t border-slate-100 mt-5">
              <button
                onClick={() => setShowInstructionsModal(false)}
                className="px-5 py-2 bg-[var(--color-navy)] text-white text-xs font-bold rounded-lg hover:opacity-90 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Question Paper Modal */}
      {showQuestionPaperModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowQuestionPaperModal(false)} />
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-2xl w-full relative z-10 shadow-2xl max-h-[80vh] flex flex-col animate-in scale-in duration-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-extrabold text-[var(--color-navy-deep)] flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-[var(--color-blue)]" />
                Entire Question Paper
              </h3>
              <button onClick={() => setShowQuestionPaperModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto space-y-5 pr-2">
              {questions.map((q, qidx) => (
                <div key={q.id} className="pb-4 border-b border-slate-100 last:border-0 text-xs flex flex-col gap-2 font-medium">
                  <div className="font-bold text-[var(--color-navy-deep)]">
                    Q{qidx + 1}: {getLangText(q.question)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                    {getLangOptions(q.options).map((opt, oidx) => (
                      <div key={oidx} className="text-slate-500 flex gap-1.5">
                        <span className="text-[var(--color-blue)] font-bold">{String.fromCharCode(65 + oidx)}.</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end pt-4 border-t border-slate-100 mt-5">
              <button
                onClick={() => setShowQuestionPaperModal(false)}
                className="px-5 py-2 bg-[var(--color-navy)] text-white text-xs font-bold rounded-lg hover:opacity-90 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Report Issue Modal */}
      {showReportIssueModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowReportIssueModal(false)} />
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full relative z-10 shadow-2xl animate-in scale-in duration-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-extrabold text-[var(--color-navy-deep)] flex items-center gap-2">
                <AlertCircle className="w-4.5 h-4.5 text-slate-500" />
                Report Question Discrepancy
              </h3>
              <button onClick={() => setShowReportIssueModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            {issueSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-500 mx-auto flex items-center justify-center">
                  ✓
                </div>
                <div className="text-xs font-black text-[var(--color-navy)]">Report Filed!</div>
                <p className="text-[10px] text-slate-500">Thank you. The issue has been registered for auditing.</p>
                <button
                  onClick={() => { setIssueSubmitted(false); setShowReportIssueModal(false); setIssueText(''); }}
                  className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  Spotted an error in Question No. {currentQuestionIndex + 1}? Let us know the details:
                </p>
                <textarea
                  value={issueText}
                  onChange={(e) => setIssueText(e.target.value)}
                  placeholder="Describe details (e.g. spelling error, incorrect option answer)..."
                  className="w-full h-24 p-3 text-xs border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[var(--color-blue)] resize-none"
                />
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setShowReportIssueModal(false)}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIssueSubmitted(true)}
                    disabled={!issueText.trim()}
                    className={`px-5 py-2 rounded-lg text-xs font-bold text-white transition-colors ${
                      issueText.trim()
                        ? 'bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 cursor-pointer'
                        : 'bg-slate-350 cursor-not-allowed opacity-60'
                    }`}
                  >
                    Submit Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
