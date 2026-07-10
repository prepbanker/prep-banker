// PATH: app/quiz/practice/[exam]/[subject]/[topic]/[subtopic]/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Maximize2, Minimize2, Bookmark, BookmarkCheck, Flag, 
  HelpCircle, ChevronLeft, ChevronRight, AlertTriangle, CheckCircle2, 
  XCircle, Clock, Check, RefreshCw, Lightbulb, Menu, X, Star, 
  TrendingUp, ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mcqManifest } from '@/lib/data/mcq';

interface Option {
  label: string;
  text: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  diagram?: string;
}

interface Group {
  directions?: string;
  diagram?: string;
  questions: Question[];
}

interface Section {
  level: 'easy' | 'medium' | 'hard';
  range: string;
  groups: Group[];
}

interface MCQSet {
  exam: string;
  subject: string;
  topic: string;
  subtopic: string;
  totalQuestions: number;
  sections: Section[];
}

const difficultyColors = {
  easy: 'bg-emerald-50 text-emerald-705 border-emerald-100',
  medium: 'bg-amber-50 text-amber-705 border-amber-100',
  hard: 'bg-rose-50 text-rose-705 border-rose-100'
};

export default function PracticeTestPage() {
  const params = useParams();
  const router = useRouter();
  
  const exam = params?.exam as string;
  const subject = params?.subject as string;
  const topic = params?.topic as string;
  const subtopic = params?.subtopic as string;

  const backUrl = exam === 'sbi-po' ? '/sbi-po-quiz' : exam === 'ibps-po' ? '/ibps-po-quiz' : '/quiz';

  const [mcqData, setMcqData] = useState<MCQSet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Practice state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, { selected: string; isCorrect: boolean }>>({});
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [questionTimes, setQuestionTimes] = useState<Record<number, number>>({});
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  // Step 4 completes quiz state
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isPremiumUser, setIsPremiumUser] = useState<boolean>(false); // Simulated billing tier state
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'bookmarked'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  // Dynamic titles formatted nicely
  const subtopicTitle = useMemo(() => {
    if (!subtopic) return '';
    return subtopic
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [subtopic]);

  const topicTitle = useMemo(() => {
    if (!topic) return '';
    return topic
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [topic]);

  // Dynamic import resolver
  useEffect(() => {
    async function loadMCQData() {
      if (!exam || !subject || !topic || !subtopic) return;
      
      const manifestKey = `${exam}/${subject}/${topic}/${subtopic}`;
      const loader = mcqManifest[manifestKey];
      
      if (!loader) {
        setError(`No practice test data found for ${exam} > ${subject} > ${topic} > ${subtopic}.`);
        setLoading(false);
        return;
      }

      try {
        const module = await loader();
        setMcqData(module.default);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load practice test questions. Please try again.');
        setLoading(false);
      }
    }

    loadMCQData();
  }, [exam, subject, topic, subtopic]);

  // Flatten sections -> groups -> questions for linear index
  const flatQuestions = useMemo(() => {
    if (!mcqData) return [];
    
    const list: (Question & { directions?: string; groupDiagram?: string })[] = [];
    for (const sec of mcqData.sections) {
      for (const group of sec.groups) {
        for (const q of group.questions) {
          list.push({
            ...q,
            directions: group.directions,
            groupDiagram: group.diagram
          });
        }
      }
    }
    return list.sort((a, b) => a.id - b.id);
  }, [mcqData]);

  const totalQuestions = flatQuestions.length;
  const currentQuestion = flatQuestions[currentIndex];

  // running stats
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(a => a.isCorrect).length;
  const incorrectCount = answeredCount - correctCount;
  const skippedCount = totalQuestions - answeredCount;
  const runningAccuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // localStorage persistence
  const storageKey = `practice-test:${exam}:${subject}:${topic}:${subtopic}`;
  
  useEffect(() => {
    if (!loading && mcqData) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.currentIndex !== undefined) setCurrentIndex(parsed.currentIndex);
          if (parsed.answers !== undefined) setAnswers(parsed.answers);
          if (parsed.bookmarked !== undefined) setBookmarked(new Set(parsed.bookmarked));
          if (parsed.elapsedTime !== undefined) setElapsedTime(parsed.elapsedTime);
          if (parsed.questionTimes !== undefined) setQuestionTimes(parsed.questionTimes);
          if (parsed.isCompleted !== undefined) setIsCompleted(parsed.isCompleted);
        } catch (e) {
          console.error('Error parsing localStorage state:', e);
        }
      }
    }
  }, [loading, mcqData]);

  useEffect(() => {
    if (!loading && mcqData) {
      localStorage.setItem(storageKey, JSON.stringify({
        currentIndex,
        answers,
        bookmarked: Array.from(bookmarked),
        elapsedTime,
        questionTimes,
        isCompleted
      }));
    }
  }, [currentIndex, answers, bookmarked, elapsedTime, questionTimes, isCompleted, loading, mcqData]);

  // Elapsed Timer - Active per question & global timer
  useEffect(() => {
    if (isCompleted || loading || !mcqData) return;

    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
      if (currentQuestion) {
        setQuestionTimes(prev => ({
          ...prev,
          [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1
        }));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion, isCompleted, loading, mcqData]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (label: string) => {
    if (answers[currentQuestion.id]) return;
    
    const isCorrect = label === currentQuestion.correctAnswer;
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: { selected: label, isCorrect }
    }));
  };

  const handleToggleBookmark = (id: number) => {
    setBookmarked(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleResetQuiz = () => {
    if (confirm('Are you sure you want to reset all answers and restart this practice test?')) {
      setAnswers({});
      setCurrentIndex(0);
      setBookmarked(new Set());
      setElapsedTime(0);
      setQuestionTimes({});
      setIsCompleted(false);
      localStorage.removeItem(storageKey);
    }
  };

  const handleSubmitQuiz = () => {
    setIsCompleted(true);
    const autoExpand: Record<number, boolean> = {};
    flatQuestions.forEach(q => {
      if (!answers[q.id] || !answers[q.id].isCorrect) {
        autoExpand[q.id] = true;
      }
    });
    setExpandedQuestions(autoExpand);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleQuestionExpanded = (id: number) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const difficultyStats = useMemo(() => {
    const stats = {
      easy: { total: 0, correct: 0, answered: 0 },
      medium: { total: 0, correct: 0, answered: 0 },
      hard: { total: 0, correct: 0, answered: 0 }
    };
    
    for (const q of flatQuestions) {
      const difficulty = q.difficulty;
      if (stats[difficulty]) {
        stats[difficulty].total++;
        if (answers[q.id]) {
          stats[difficulty].answered++;
          if (answers[q.id].isCorrect) {
            stats[difficulty].correct++;
          }
        }
      }
    }
    return stats;
  }, [flatQuestions, answers]);

  const qualitativeResult = useMemo(() => {
    if (runningAccuracy >= 75) {
      return {
        label: 'Excellent',
        class: 'text-emerald-600 bg-emerald-50 border-emerald-250',
        desc: "Sensational performance! You're ready to dominate this topic in the actual exam."
      };
    } else if (runningAccuracy >= 50) {
      return {
        label: 'Good',
        class: 'text-amber-600 bg-amber-50 border-amber-250',
        desc: "Great effort! You've got a solid foundation. Adjust details on weaker items to improve speed."
      };
    } else {
      return {
        label: 'Needs Work',
        class: 'text-rose-600 bg-rose-50 border-rose-250',
        desc: 'Keep practicing! Review standard explanations and practice additional drills on this subtopic.'
      };
    }
  }, [runningAccuracy]);

  const ctaContent = useMemo(() => {
    const easyAcc = difficultyStats.easy.total > 0 ? Math.round((difficultyStats.easy.correct / difficultyStats.easy.total) * 100) : 0;
    const medAcc = difficultyStats.medium.total > 0 ? Math.round((difficultyStats.medium.correct / difficultyStats.medium.total) * 100) : 0;
    const hardAcc = difficultyStats.hard.total > 0 ? Math.round((difficultyStats.hard.correct / difficultyStats.hard.total) * 100) : 0;

    if (hardAcc < 50 && difficultyStats.hard.total > 0) {
      return {
        weakness: true,
        header: `Your Hard-level accuracy was ${hardAcc}%`,
        body: 'Sharpen your analytical speed with structured, high-difficulty mocks and step explanations.',
        btnText: 'Unlock Full Topic Practice',
        slug: 'hard-drill'
      };
    } else if (medAcc < 60 && difficultyStats.medium.total > 0) {
      return {
        weakness: true,
        header: `Your Medium-level accuracy was ${medAcc}%`,
        body: 'Strengthen core logic templates before jumping into timed high-difficulty questions.',
        btnText: 'Unlock Full Topic Practice',
        slug: 'med-drill'
      };
    } else {
      return {
        weakness: false,
        header: `You're acing ${subtopic.replace(/-/g, ' ')}!`,
        body: 'Excellent score. Keep the momentum going. Practice complete section mocks to lock in your score.',
        btnText: 'Start Full Mock Test',
        slug: 'mock-test'
      };
    }
  }, [difficultyStats, subtopic]);

  const currentAnswer = answers[currentQuestion?.id];
  const isQuestionAnswered = !!currentAnswer;

  const filteredQuestions = flatQuestions.filter(q => {
    if (reviewFilter === 'incorrect') {
      return !answers[q.id] || !answers[q.id].isCorrect;
    }
    if (reviewFilter === 'bookmarked') {
      return bookmarked.has(q.id);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      <Header />
      
      <main className="flex-grow pb-16">
        
        {/* ── CONDITIONAL RENDER: RESULT SCREEN ── */}
        {isCompleted ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8 animate-in fade-in duration-300">
            
            {/* Simulation Controller Topbar */}
            <div className="bg-slate-900 text-white rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-350">
                  PrepBanker Funnel Simulator
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-bold">Simulate Current User tier:</span>
                <button
                  onClick={() => setIsPremiumUser(!isPremiumUser)}
                  className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    isPremiumUser 
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-sm'
                      : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-705'
                  }`}
                >
                  {isPremiumUser ? '👑 Paid/Premium Tier' : '🔓 Free Tier'}
                </button>
              </div>
            </div>

            {/* 1. HERO RESULT BANNER */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-sm flex flex-col items-center text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-[var(--color-blue)]/5 to-transparent pointer-events-none" />
              
              {runningAccuracy >= 75 && (
                <div className="w-16 h-16 rounded-full bg-amber-55 border-2 border-amber-200 flex items-center justify-center shadow-md animate-bounce">
                  <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
                </div>
              )}

              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-slate-400 tracking-widest">{subtopicTitle} Completion</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[var(--color-navy-deep)] leading-tight">
                  {correctCount} <span className="text-lg sm:text-2xl text-slate-400 font-extrabold">/ {totalQuestions}</span>
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${qualitativeResult.class}`}>
                    {qualitativeResult.label} Accuracy: {runningAccuracy}%
                  </span>
                </div>
                <p className="max-w-lg text-slate-500 text-xs sm:text-sm leading-relaxed pt-2 font-medium">
                  {qualitativeResult.desc}
                </p>
              </div>

              {/* Stats Pills row */}
              <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-5 gap-3.5 pt-4">
                <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl flex flex-col items-center justify-center shadow-3xs">
                  <Clock className="w-4 h-4 text-slate-400 mb-1" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Time Taken</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">{formatTime(elapsedTime)}</span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl flex flex-col items-center justify-center shadow-3xs">
                  <Clock className="w-4 h-4 text-slate-400 mb-1" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Avg. Time/Q</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">
                    {answeredCount > 0 ? `${Math.round(elapsedTime / answeredCount)}s` : '0s'}
                  </span>
                </div>
                <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-2xl flex flex-col items-center justify-center shadow-3xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1" />
                  <span className="text-[10px] font-black uppercase text-emerald-600">Correct</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-700 mt-1">{correctCount}</span>
                </div>
                <div className="bg-rose-50/40 border border-rose-100 p-4 rounded-2xl flex flex-col items-center justify-center shadow-3xs">
                  <XCircle className="w-4 h-4 text-rose-500 mb-1" />
                  <span className="text-[10px] font-black uppercase text-rose-600">Incorrect</span>
                  <span className="text-xs sm:text-sm font-black text-rose-700 mt-1">{incorrectCount}</span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl col-span-2 sm:col-span-1 flex flex-col items-center justify-center shadow-3xs">
                  <HelpCircle className="w-4 h-4 text-slate-400 mb-1" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Skipped</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">{skippedCount}</span>
                </div>
              </div>
            </div>

            {/* 2. PERFORMANCE GRAPHS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Donut & Percentile Comparison */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
                <div>
                  <h3 className="text-sm font-black text-[var(--color-navy-deep)] uppercase tracking-wider">
                    Drill Accuracy Breakdown
                  </h3>
                  <p className="text-[11px] text-slate-400 font-bold mt-1">Visual segments of final mock answers</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-4">
                  <div className="relative w-36 h-36 shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F1F5F9" strokeWidth="2.5" />
                      <circle 
                        cx="18" cy="18" r="15.915" fill="none" 
                        stroke="#10B981" strokeWidth="2.5" 
                        strokeDasharray={`${(correctCount / totalQuestions) * 100} 100`}
                        className="transition-all duration-1000"
                      />
                      <circle cx="18" cy="18" r="12.5" fill="none" stroke="#F1F5F9" strokeWidth="2.5" />
                      <circle 
                        cx="18" cy="18" r="12.5" fill="none" 
                        stroke="#EF4444" strokeWidth="2.5" 
                        strokeDasharray={`${(incorrectCount / totalQuestions) * 100} 100`}
                        className="transition-all duration-1000"
                      />
                      <circle cx="18" cy="18" r="9" fill="none" stroke="#F1F5F9" strokeWidth="2.5" />
                      <circle 
                        cx="18" cy="18" r="9" fill="none" 
                        stroke="#94A3B8" strokeWidth="2.5" 
                        strokeDasharray={`${(skippedCount / totalQuestions) * 100} 100`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-black text-slate-800">{runningAccuracy}%</span>
                      <span className="text-[9px] uppercase font-black text-slate-400">Score</span>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded bg-emerald-500 shrink-0" />
                      <div>
                        <span className="text-xs text-slate-700 font-extrabold block">Correct ({correctCount})</span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {Math.round((correctCount / totalQuestions) * 100)}% of drill
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded bg-rose-500 shrink-0" />
                      <div>
                        <span className="text-xs text-slate-700 font-extrabold block">Incorrect ({incorrectCount})</span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {Math.round((incorrectCount / totalQuestions) * 100)}% of drill
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded bg-slate-400 shrink-0" />
                      <div>
                        <span className="text-xs text-slate-700 font-extrabold block">Skipped ({skippedCount})</span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {Math.round((skippedCount / totalQuestions) * 100)}% of drill
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-3">
                  <div className="flex justify-between items-center text-xs font-extrabold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[var(--color-blue)]" />
                      Percentile Rank
                    </span>
                    <span className="text-emerald-600 font-black">{runningAccuracy >= 50 ? '84th Percentile' : '36th Percentile'}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full relative overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000"
                      style={{ width: runningAccuracy >= 50 ? '84%' : '36%' }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold leading-normal">
                    You performed better than {runningAccuracy >= 50 ? '84%' : '36%'} of candidates who solved this specific test. 
                    {!isPremiumUser && (
                      <Link href="/pricing" className="text-[var(--color-blue)] ml-1 hover:underline">
                        Unlock Premium to see exact comparison data.
                      </Link>
                    )}
                  </p>
                </div>
              </div>

              {/* Card 2: Difficulty breakdown bar chart */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-sm font-black text-[var(--color-navy-deep)] uppercase tracking-wider">
                    Syllabus Difficulty Analysis
                  </h3>
                  <p className="text-[11px] text-slate-400 font-bold mt-1">Accuracy split by difficulty tiers</p>
                </div>

                <div className="space-y-5">
                  {difficultyStats.easy.total > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Easy Segment
                        </span>
                        <span>{difficultyStats.easy.correct}/{difficultyStats.easy.total} Correct ({Math.round((difficultyStats.easy.correct / difficultyStats.easy.total) * 100)}%)</span>
                      </div>
                      <div className="w-full h-4 bg-slate-100 rounded-xl overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-xl transition-all"
                          style={{ width: `${(difficultyStats.easy.correct / difficultyStats.easy.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {difficultyStats.medium.total > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500" /> Medium Segment
                        </span>
                        <span>{difficultyStats.medium.correct}/{difficultyStats.medium.total} Correct ({Math.round((difficultyStats.medium.correct / difficultyStats.medium.total) * 100)}%)</span>
                      </div>
                      <div className="w-full h-4 bg-slate-100 rounded-xl overflow-hidden">
                        <div 
                          className="h-full bg-amber-500 rounded-xl transition-all"
                          style={{ width: `${(difficultyStats.medium.correct / difficultyStats.medium.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {difficultyStats.hard.total > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500" /> Hard Segment
                        </span>
                        <span>{difficultyStats.hard.correct}/{difficultyStats.hard.total} Correct ({Math.round((difficultyStats.hard.correct / difficultyStats.hard.total) * 100)}%)</span>
                      </div>
                      <div className="w-full h-4 bg-slate-100 rounded-xl overflow-hidden">
                        <div 
                          className="h-full bg-rose-500 rounded-xl transition-all"
                          style={{ width: `${(difficultyStats.hard.correct / difficultyStats.hard.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-slate-50 p-4 border border-slate-150 rounded-2xl text-[10px] sm:text-xs text-slate-550 leading-relaxed font-medium">
                  💡 <strong>Study Strategy:</strong> Focus heavily on the {
                    (difficultyStats.hard.correct / difficultyStats.hard.total) < (difficultyStats.medium.correct / difficultyStats.medium.total)
                      ? 'Hard difficulty'
                      : 'Medium difficulty'
                  } questions in reviews to push your overall exam cutoff scores past the benchmark.
                </div>
              </div>
            </div>

            {/* Card 3: Time Spent per question */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <h3 className="text-sm font-black text-[var(--color-navy-deep)] uppercase tracking-wider">
                  Question Response Speed Metrics
                </h3>
                <p className="text-[11px] text-slate-400 font-bold mt-1">Time spent in seconds per question. Red columns flag outliers (&gt;45s).</p>
              </div>

              <div className="pt-4">
                <div className="h-44 w-full flex items-end justify-between gap-1 sm:gap-2.5 px-2 border-b border-slate-200 pb-2">
                  {flatQuestions.map((q, idx) => {
                    const seconds = questionTimes[q.id] || 0;
                    const maxTimeHeight = Math.max(...flatQuestions.map(f => questionTimes[f.id] || 0), 60);
                    const percentHeight = Math.min((seconds / maxTimeHeight) * 105, 100);
                    const isCorrect = answers[q.id]?.isCorrect;
                    const isOutlier = seconds > 45;

                    return (
                      <div key={`time-q-${q.id}-${idx}`} className="flex-1 flex flex-col items-center group relative">
                        <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                          Q{q.id}: {seconds}s ({isCorrect ? 'Correct' : 'Incorrect'})
                        </div>
                        <div 
                          className={`w-full rounded-t-sm sm:rounded-t-md transition-all duration-700 ${
                            isOutlier 
                              ? 'bg-rose-500 hover:bg-rose-600' 
                              : isCorrect 
                              ? 'bg-emerald-400 hover:bg-emerald-500' 
                              : 'bg-slate-300 hover:bg-slate-400'
                          }`}
                          style={{ height: `${percentHeight}%`, minHeight: '6px' }}
                        />
                        <span className="text-[9px] font-black text-slate-400 mt-2 block sm:hidden">Q{q.id}</span>
                        <span className="text-[10px] font-bold text-slate-500 mt-2 hidden sm:block">Q{q.id}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-550 font-bold justify-center pt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-2 rounded bg-emerald-400" />
                  <span>Optimal & Correct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-2 rounded bg-slate-300" />
                  <span>Optimal & Incorrect</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-2 rounded bg-rose-500" />
                  <span>Time Outliers (&gt;45s)</span>
                </div>
              </div>
            </div>

            {/* 3. CTA UPSELL CARD SECTION */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-1 shadow-xs">
              <div className={`p-6 sm:p-8 rounded-[28px] flex flex-col md:flex-row items-center justify-between gap-8 border relative overflow-hidden ${
                isPremiumUser 
                  ? 'bg-slate-50 border-slate-200' 
                  : 'bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-white border-amber-200'
              }`}>
                {!isPremiumUser && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient from-amber-400/10 to-transparent pointer-events-none" />
                )}

                <div className="space-y-3.5 text-center md:text-left max-w-xl">
                  {isPremiumUser ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-indigo-50 border border-indigo-150 text-[10px] font-black text-indigo-700 uppercase tracking-wider">
                      👑 Premium Progression
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 border border-amber-150 text-[10px] font-black text-amber-700 uppercase tracking-wider">
                      🚀 Recommended Next Action
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-[var(--color-navy-deep)] leading-snug">
                    {isPremiumUser 
                      ? 'Next Recommended Subtopic: Linear Arrangement' 
                      : ctaContent.header}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {isPremiumUser 
                      ? 'Based on your puzzle diagnostic performance, practicing Linear Arrangements will help stabilize reasoning cutoffs.' 
                      : ctaContent.body}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col items-center gap-2">
                  {isPremiumUser ? (
                    <Link
                      href="/quiz/practice/sbi-po/reasoning-ability/linear-arrangement/linear-arrangement-double-row"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-black text-white bg-indigo-650 hover:bg-indigo-700 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer no-underline"
                    >
                      <span>Start Recommended Topic</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer no-underline"
                    >
                      <span>{ctaContent.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {!isPremiumUser && (
                    <span className="text-[10px] text-slate-400 font-bold">Includes 25+ Sectional Mock Series</span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-6 bg-slate-50 border-t border-slate-100 rounded-b-[32px]">
                <button
                  onClick={handleResetQuiz}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-550 hover:text-[var(--color-navy)] bg-white border border-slate-200 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry this Test</span>
                </button>
                <Link
                  href={backUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-550 hover:text-[var(--color-navy)] bg-white border border-slate-205 transition-colors no-underline"
                >
                  <span>Next Subtopic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={backUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-550 hover:text-[var(--color-navy)] bg-white border border-slate-205 transition-colors no-underline"
                >
                  <span>Back to Topics</span>
                </Link>
              </div>
            </div>

            {/* 4. QUESTION-BY-QUESTION REVIEW LIST */}
            <div id="review-list" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-black text-[var(--color-navy-deep)] uppercase tracking-wider">
                    Question & Explanation Review
                  </h3>
                  <p className="text-[11px] text-slate-400 font-bold mt-1">Examine step solutions and correct mistake categories</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      reviewFilter === 'all'
                        ? 'bg-[var(--color-navy)] text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-500'
                    }`}
                  >
                    All ({totalQuestions})
                  </button>
                  <button
                    onClick={() => setReviewFilter('incorrect')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      reviewFilter === 'incorrect'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-rose-600'
                    }`}
                  >
                    Incorrect ({incorrectCount})
                  </button>
                  <button
                    onClick={() => setReviewFilter('bookmarked')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      reviewFilter === 'bookmarked'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-amber-600'
                    }`}
                  >
                    Bookmarked ({bookmarked.size})
                  </button>
                </div>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <HelpCircle className="w-10 h-10 text-slate-350 mx-auto mb-2" />
                  <p className="text-xs text-slate-400 font-extrabold">No questions found matching the filter selection.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((q, idx) => {
                    const ans = answers[q.id];
                    const isCorrect = ans?.isCorrect;
                    const isExpanded = !!expandedQuestions[q.id];

                    return (
                      <div 
                        key={`review-q-${q.id}-${idx}`}
                        className={`border rounded-2xl overflow-hidden transition-all ${
                          isExpanded 
                            ? 'border-slate-350 shadow-2xs' 
                            : 'border-slate-200 bg-slate-50/20'
                        }`}
                      >
                        <div 
                          onClick={() => toggleQuestionExpanded(q.id)}
                          className="p-4 sm:px-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 select-none"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            {ans ? (
                              isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                              ) : (
                                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                              )
                            ) : (
                              <HelpCircle className="w-5 h-5 text-slate-405 shrink-0" />
                            )}

                            <span className="text-xs sm:text-sm font-black text-slate-800 shrink-0">Q{q.id}</span>
                            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider shrink-0 border ${difficultyColors[q.difficulty]}`}>
                              {q.difficulty}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-655 truncate font-semibold">
                              {q.text}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            {bookmarked.has(q.id) && (
                              <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                            )}
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="p-4 sm:p-6 bg-white border-t border-slate-150 space-y-6">
                            {q.directions && (
                              <div className="bg-blue-50/40 border border-blue-100/60 p-4 rounded-xl text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                                <span className="font-black text-blue-700 uppercase tracking-widest text-[9px] block mb-1">Directions:</span>
                                {q.directions}
                                
                                {q.groupDiagram && (
                                  <div className="mt-4 border border-slate-100 bg-white p-2 rounded-xl max-w-sm">
                                    <img 
                                      src={q.groupDiagram} 
                                      alt={`${subtopicTitle} Group Diagram Context`}
                                      loading="lazy"
                                      className="max-w-full h-auto rounded-lg" 
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {q.diagram && (
                              <div className="border border-slate-100 bg-white p-2 rounded-xl max-w-sm my-2">
                                <img 
                                  src={q.diagram} 
                                  alt={`${subtopicTitle} Question ${q.id} Diagram`}
                                  loading="lazy"
                                  className="max-w-full h-auto rounded-lg" 
                                />
                              </div>
                            )}

                            <div className="space-y-4">
                              <p className="text-xs sm:text-sm font-extrabold text-slate-800 leading-relaxed whitespace-pre-line">
                                {q.text}
                              </p>

                              <div className="grid grid-cols-1 gap-2.5">
                                {q.options.map(option => {
                                  const isUserSelection = ans?.selected === option.label;
                                  const isCorrectAnswer = option.label === q.correctAnswer;
                                  
                                  let optionStyle = 'border-slate-100 text-slate-500';
                                  if (isCorrectAnswer) {
                                    optionStyle = 'border-emerald-500 bg-emerald-50/40 text-emerald-950 font-bold';
                                  } else if (isUserSelection) {
                                    optionStyle = 'border-rose-505 bg-rose-50/40 text-rose-950 font-bold';
                                  }

                                  return (
                                    <div 
                                      key={option.label}
                                      className={`p-3.5 rounded-xl border text-xs flex gap-3 ${optionStyle}`}
                                    >
                                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border text-[10px] font-black ${
                                        isUserSelection && isCorrectAnswer
                                          ? 'bg-emerald-500 text-white border-emerald-500'
                                          : isUserSelection
                                          ? 'bg-rose-550 text-white border-rose-500'
                                          : isCorrectAnswer
                                          ? 'bg-emerald-500 text-white border-emerald-500'
                                          : 'bg-slate-50 text-slate-550 border-slate-200'
                                      }`}>
                                        {option.label}
                                      </span>
                                      <span>{option.text}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {q.explanation && (
                              <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl space-y-2">
                                <h5 className="text-[10px] font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                                  Explanation Details
                                </h5>
                                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                                  {q.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        ) : (
          
          /* ── PLAY TEST PRACTICE SCREEN ── */
          <div>
            <div className="sticky top-16 left-0 right-0 bg-white border-b border-slate-200 z-40 shadow-xs">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <Link 
                    href={backUrl} 
                    className="p-2 hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:text-[var(--color-navy)] transition-colors shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">{topicTitle} Drill</span>
                    <h1 className="text-sm sm:text-base font-extrabold text-[var(--color-navy-deep)] leading-tight">{subtopicTitle}</h1>
                  </div>
                  <button 
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-slate-50 text-slate-400 hover:text-[var(--color-navy)] transition-colors shrink-0 ml-1 rounded-xl border border-slate-100"
                    title="Toggle Fullscreen"
                  >
                    {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/70 border border-slate-200/60 text-slate-655 text-xs font-bold shadow-2xs">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{formatTime(elapsedTime)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/70 border border-slate-200/60 text-slate-655 text-xs font-bold shadow-2xs">
                    <span className="text-[10px] uppercase font-black text-slate-400">Progress</span>
                    <span>{currentIndex + 1}/{totalQuestions}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/70 border border-slate-200/60 text-slate-655 text-xs font-bold shadow-2xs">
                    <span className="text-[10px] uppercase font-black text-slate-400">Accuracy</span>
                    <span className={runningAccuracy >= 75 ? 'text-emerald-600 font-extrabold' : 'text-slate-700'}>
                      {runningAccuracy}%
                    </span>
                  </div>
                  <button
                    onClick={handleSubmitQuiz}
                    className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-black uppercase tracking-wider transition-colors shadow-sm ml-1 cursor-pointer"
                  >
                    Submit Test
                  </button>

                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex lg:hidden p-2 hover:bg-slate-50 text-slate-500 hover:text-[var(--color-navy)] rounded-xl border border-slate-200 transition-all shrink-0 ml-1"
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="w-full h-1 bg-slate-100">
                <div 
                  className="h-full bg-gradient-to-r from-[var(--color-blue)] to-indigo-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-6">
                  {currentQuestion?.directions && (
                    <div className="bg-blue-50/40 border border-blue-100/70 p-5 sm:p-6 rounded-3xl shadow-2xs relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-radial-gradient from-[var(--color-blue)]/5 to-transparent pointer-events-none" />
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-50 text-[10px] font-black text-[var(--color-blue)] uppercase tracking-wider mb-3 border border-blue-150">
                        Directions Setup
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                        {currentQuestion.directions}
                      </p>
                      
                      {currentQuestion.groupDiagram && (
                        <div className="mt-5 border border-slate-100 bg-white p-3 rounded-2xl max-w-md">
                          <img 
                            src={currentQuestion.groupDiagram} 
                            alt={`${subtopicTitle} Group Diagram Context`}
                            loading="lazy"
                            className="max-w-full h-auto rounded-lg mx-auto" 
                          />
                          <span className="text-[10px] text-slate-400 font-bold block text-center mt-2">Diagram: Question Context</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs sm:text-sm font-black text-[var(--color-navy-deep)] uppercase tracking-wide">
                          Question {currentIndex + 1}
                        </span>
                        {currentQuestion && (
                          <span className={`px-2.5 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-wider ${difficultyColors[currentQuestion.difficulty]}`}>
                            {currentQuestion.difficulty}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-slate-400">
                        {currentQuestion && (
                          <button 
                            onClick={() => handleToggleBookmark(currentQuestion.id)}
                            className={`p-2 rounded-xl border hover:bg-slate-50 transition-colors ${
                              bookmarked.has(currentQuestion.id)
                                ? 'border-amber-200 text-[var(--color-gold)] bg-amber-50/40'
                                : 'border-slate-100 hover:text-slate-650'
                            }`}
                            title="Bookmark Question"
                          >
                            {bookmarked.has(currentQuestion.id) ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                          </button>
                        )}
                        <button 
                          className="p-2 rounded-xl border border-slate-100 hover:bg-slate-50 hover:text-slate-655 transition-colors"
                          title="Report an Issue"
                          onClick={() => alert('Issue reported successfully. Thank you for flagging!')}
                        >
                          <Flag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {currentQuestion?.diagram && (
                      <div className="border border-slate-100 bg-white p-3 rounded-2xl max-w-md my-4">
                        <img 
                          src={currentQuestion.diagram} 
                          alt={`${subtopicTitle} Question ${currentQuestion.id} Diagram`}
                          loading="lazy"
                          className="max-w-full h-auto rounded-lg mx-auto" 
                        />
                        <span className="text-[10px] text-slate-405 font-bold block text-center mt-2">Diagram: Q{currentQuestion.id} Setup</span>
                      </div>
                    )}

                    <div className="space-y-4">
                      {currentQuestion && (
                        <p className="text-sm sm:text-base text-slate-800 font-extrabold leading-relaxed whitespace-pre-line">
                          {currentQuestion.text}
                        </p>
                      )}

                      <div className="grid grid-cols-1 gap-3.5">
                        {currentQuestion?.options.map(option => {
                          const isPicked = currentAnswer?.selected === option.label;
                          const isCorrectAnswer = option.label === currentQuestion.correctAnswer;
                          
                          let optionStyle = 'border-slate-200 hover:border-slate-400 bg-white text-slate-700';
                          if (isQuestionAnswered) {
                            if (isCorrectAnswer) {
                              optionStyle = 'border-emerald-500 bg-emerald-50/50 text-emerald-950 font-bold';
                            } else if (isPicked) {
                              optionStyle = 'border-rose-500 bg-rose-50/50 text-rose-950 font-bold';
                            } else {
                              optionStyle = 'border-slate-100 bg-slate-50/20 text-slate-400 opacity-60';
                            }
                          } else if (isPicked) {
                            optionStyle = 'border-[var(--color-blue)] bg-blue-50/30 text-[var(--color-navy)] font-bold';
                          }

                          return (
                            <button
                              key={option.label}
                              disabled={isQuestionAnswered}
                              onClick={() => handleSelectOption(option.label)}
                              className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all duration-200 flex items-start gap-3.5 relative ${optionStyle} ${
                                !isQuestionAnswered && 'cursor-pointer'
                              }`}
                            >
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border text-[11px] font-black ${
                                isPicked 
                                  ? 'bg-[var(--color-blue)] text-white border-[var(--color-blue)]' 
                                  : isQuestionAnswered && isCorrectAnswer
                                  ? 'bg-emerald-500 text-white border-emerald-500'
                                  : isQuestionAnswered && isPicked
                                  ? 'bg-rose-500 text-white border-rose-500'
                                  : 'bg-slate-50 text-slate-550 border-slate-200'
                              }`}>
                                {option.label}
                              </span>
                              <span className="leading-relaxed">{option.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {isQuestionAnswered && (
                      <div className="space-y-4 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {currentAnswer.isCorrect ? (
                          <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-850 text-xs sm:text-sm font-extrabold shadow-3xs">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <span>Correct! Excellent answer.</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-850 text-xs sm:text-sm font-extrabold shadow-3xs">
                            <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                            <span>Incorrect. The correct answer was option ({currentQuestion.correctAnswer}).</span>
                          </div>
                        )}

                        {currentQuestion.explanation && (
                          <div className="bg-slate-50/70 border border-slate-150 p-5 rounded-2xl space-y-3">
                            <h4 className="text-xs font-black text-[var(--color-navy-deep)] uppercase tracking-wider flex items-center gap-1.5">
                              <Lightbulb className="w-4 h-4 text-[var(--color-gold-bright)]" />
                              Explanation Details
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                              {currentQuestion.explanation}
                            </p>
                          </div>
                        )}

                        <div className="flex justify-end pt-2">
                          {currentIndex < totalQuestions - 1 ? (
                            <button
                              onClick={() => setCurrentIndex(prev => prev + 1)}
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-black text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 shadow-md cursor-pointer transition-transform hover:scale-101"
                            >
                              <span>Continue to Next Question</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <div className="space-x-3">
                              <button
                                onClick={handleResetQuiz}
                                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs font-black text-slate-550 hover:text-[var(--color-navy)] bg-white border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer"
                              >
                                <RefreshCw className="w-4 h-4" />
                                <span>Restart Quiz</span>
                              </button>
                              <button
                                onClick={handleSubmitQuiz}
                                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs font-black text-white bg-rose-600 hover:bg-rose-700 shadow-md cursor-pointer transition-all hover:scale-101"
                              >
                                <Check className="w-4 h-4" />
                                <span>Finish Test and View Results</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between px-2 pt-2">
                    <button
                      disabled={currentIndex === 0}
                      onClick={() => setCurrentIndex(prev => prev - 1)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        currentIndex === 0
                          ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50/20'
                          : 'border-slate-200 hover:bg-white hover:shadow-xs text-slate-500 hover:text-[var(--color-navy)] cursor-pointer'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    
                    <button
                      disabled={currentIndex === totalQuestions - 1}
                      onClick={() => setCurrentIndex(prev => prev + 1)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        currentIndex === totalQuestions - 1
                          ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50/20'
                          : 'border-slate-200 hover:bg-white hover:shadow-xs text-slate-500 hover:text-[var(--color-navy)] cursor-pointer'
                      }`}
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm sticky top-[160px]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Question Palette
                    </h3>
                    <button 
                      onClick={handleResetQuiz}
                      className="text-[10px] font-black uppercase text-slate-400 hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                    >
                      Reset All
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-3.5">
                    {flatQuestions.map((q, idx) => {
                      const ans = answers[q.id];
                      const isCurrent = currentIndex === idx;
                      const isBookmarked = bookmarked.has(q.id);
                      
                      let cellStyle = 'border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-650 bg-white';
                      if (ans) {
                        if (ans.isCorrect) {
                          cellStyle = 'bg-emerald-500 border-emerald-550 text-white font-extrabold';
                        } else {
                          cellStyle = 'bg-rose-500 border-rose-550 text-white font-extrabold';
                        }
                      } else if (isCurrent) {
                        cellStyle = 'border-[var(--color-navy)] ring-2 ring-[var(--color-navy)] text-[var(--color-navy-deep)] font-black bg-slate-50';
                      }

                      return (
                        <button
                          key={`palette-desktop-q-${q.id}-${idx}`}
                          onClick={() => {
                            setCurrentIndex(idx);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full aspect-square rounded-xl border text-xs font-extrabold flex flex-col items-center justify-center relative transition-all cursor-pointer hover:scale-105 ${cellStyle}`}
                        >
                          <span>{q.id}</span>
                          {isBookmarked && (
                            <span className={`absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full ${ans ? 'bg-white' : 'bg-amber-500'}`} />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 space-y-2.5">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                      Legend
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-bold">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded bg-emerald-500 flex-shrink-0" />
                        <span>Correct</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded bg-rose-500 flex-shrink-0" />
                        <span>Incorrect</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded border border-slate-350 bg-slate-50 flex-shrink-0" />
                        <span>Unanswered</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded border border-amber-400 bg-white flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        </div>
                        <span>Bookmarked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300" 
            />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-xs transform bg-white p-6 shadow-2xl transition-transform duration-300 border-l border-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-xs font-black text-slate-405 uppercase tracking-widest">
                    Question Palette
                  </h3>
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-3">
                  {flatQuestions.map((q, idx) => {
                    const ans = answers[q.id];
                    const isCurrent = currentIndex === idx;
                    const isBookmarked = bookmarked.has(q.id);
                    
                    let cellStyle = 'border-slate-200 text-slate-600 bg-white';
                    if (ans) {
                      if (ans.isCorrect) {
                        cellStyle = 'bg-emerald-500 border-emerald-500 text-white font-extrabold';
                      } else {
                        cellStyle = 'bg-rose-500 border-rose-500 text-white font-extrabold';
                      }
                    } else if (isCurrent) {
                      cellStyle = 'border-[var(--color-navy)] ring-2 ring-[var(--color-navy)] text-[var(--color-navy-deep)] font-black bg-slate-50';
                    }

                    return (
                      <button
                        key={`palette-mobile-q-${q.id}-${idx}`}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full aspect-square rounded-xl border text-xs font-bold flex flex-col items-center justify-center relative transition-all ${cellStyle}`}
                      >
                        <span>{q.id}</span>
                        {isBookmarked && (
                          <span className={`absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full ${ans ? 'bg-white' : 'bg-amber-500'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 space-y-2.5">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                    Legend
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-550 font-bold">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-emerald-500 flex-shrink-0" />
                      <span>Correct</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-rose-500 flex-shrink-0" />
                      <span>Incorrect</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded border border-slate-350 bg-slate-50 flex-shrink-0" />
                      <span>Unanswered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded border border-amber-400 bg-white flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      </div>
                      <span>Bookmarked</span>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-center">
                    <button 
                      onClick={handleResetQuiz}
                      className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-xs font-black text-slate-555 hover:text-[var(--color-navy)] bg-slate-50/50 cursor-pointer"
                    >
                      Reset All Progress
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
