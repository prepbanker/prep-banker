// PATH: components/sections/quiz/steps/ResultsPage.tsx
'use client';

import { Lock, RefreshCw, BarChart2, CheckCircle2, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { QuizResult, QuizQuestion, UserAnswer, Language } from '@/types/quiz.types';

interface ResultsPageProps {
  result: QuizResult;
  questions: QuizQuestion[];
  answers: Record<string, UserAnswer>;
  language: Language;
  onRetake: () => void;
}

export default function ResultsPage({ result, questions, answers, language, onRetake }: ResultsPageProps) {
  const {
    totalQuestions,
    correct,
    wrong,
    unattempted,
    scorePercent,
    accuracyPercent,
    timeTakenSeconds,
    topicBreakdown,
    weakAreas
  } = result;

  // Format seconds to mm:ss
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}m ${secs}s`;
  };

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

  // SVG Circular Gauge configurations
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const scoreOffset = circumference - (scorePercent / 100) * circumference;
  const accuracyOffset = circumference - (accuracyPercent / 100) * circumference;

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 flex flex-col gap-8">
      {/* Blinking Animation & Custom Grid Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes btn-blink {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.88;
            transform: scale(1.025);
          }
        }
        .active-btn-blink {
          animation: btn-blink 1.4s ease-in-out infinite;
        }
        @media (min-width: 1024px) {
          .results-split-container {
            display: grid !important;
            grid-template-columns: 6fr 4fr !important;
            gap: 2rem !important;
            align-items: start !important;
          }
        }
      `}} />
      
      {/* ── STEP PROGRESS TRACKER ── */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">✓</span>
          <span className="text-xs font-bold text-emerald-600">Exam Type</span>
          <span className="w-12 h-0.5 bg-emerald-500" />
          <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">✓</span>
          <span className="text-xs font-bold text-emerald-600">Topic Selection</span>
          <span className="w-12 h-0.5 bg-emerald-500" />
          <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">✓</span>
          <span className="text-xs font-bold text-emerald-600">Quiz Completed</span>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)]">Quiz Performance Report</h2>
        <p className="text-sm text-slate-500 mt-2">Here is your analysis report for the mock test. Review your score and register to unlock full details.</p>
      </div>

      {/* ── TWO COLUMN RESPONSIVE SPLIT (60% / 40%) ── */}
      <div className="results-split-container w-full flex flex-col gap-6">
        
        {/* LEFT COLUMN: Quiz Performance Report (60%) */}
        <div className="flex flex-col gap-6">
          
          {/* Hero score blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm items-center">
            {/* Score Ring */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
              <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    className="stroke-slate-100 fill-none"
                    strokeWidth="8"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    className="stroke-[var(--color-gold)] fill-none transition-all duration-1000"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={scoreOffset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-xl sm:text-2xl font-black text-[var(--color-navy-deep)]">{correct}</span>
                  <span className="text-xs font-bold text-slate-400 block">/ {totalQuestions}</span>
                </div>
              </div>
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-sm font-extrabold text-[var(--color-navy)] uppercase tracking-wider">Total Score</h3>
                <p className="text-xs text-slate-450 leading-relaxed font-semibold">
                  You scored {correct} marks out of {totalQuestions}. Negative scoring applies to wrong attempts.
                </p>
              </div>
            </div>

            {/* Accuracy Ring */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 md:pt-0 md:pl-6">
              <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    className="stroke-slate-100 fill-none"
                    strokeWidth="8"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    className="stroke-[var(--color-blue)] fill-none transition-all duration-1000"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={accuracyOffset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-xl sm:text-2xl font-black text-[var(--color-navy-deep)]">{accuracyPercent}%</span>
                  <span className="text-[10px] font-bold text-slate-450 block uppercase tracking-wider">Accuracy</span>
                </div>
              </div>
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-sm font-extrabold text-[var(--color-navy)] uppercase tracking-wider">Accuracy Rate</h3>
                <p className="text-xs text-slate-450 leading-relaxed font-semibold">
                  {accuracyPercent >= 80 ? 'Excellent accuracy! You avoided traps.' : accuracyPercent >= 50 ? 'Good precision. Optimize guessing.' : 'Accuracy needs work. Focus on precision.'}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Total Questions', val: totalQuestions, color: 'text-[var(--color-navy)]' },
              { label: 'Correct Answers', val: correct, color: 'text-[var(--color-success)]' },
              { label: 'Wrong Answers', val: wrong, color: 'text-[var(--color-danger)]' },
              { label: 'Unattempted', val: unattempted, color: 'text-slate-455' },
              { label: 'Accuracy %', val: `${accuracyPercent}%`, color: 'text-[var(--color-blue)]' },
              { label: 'Time Taken', val: formatTime(timeTakenSeconds), color: 'text-[var(--color-navy-deep)]' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-3 rounded-xl shadow-xs text-center flex flex-col gap-1 card-hover"
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-snug">{stat.label}</span>
                <span className={`text-sm sm:text-base font-black ${stat.color}`}>{stat.val}</span>
              </div>
            ))}
          </div>

          {/* Topic-wise Performance breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-xs font-extrabold text-[var(--color-navy)] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4 text-[var(--color-blue)]" />
              Topic-wise Performance Breakdown
            </h3>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-150 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Subject Section</th>
                    <th className="py-2.5 px-3">Subtopic Practiced</th>
                    <th className="py-2.5 px-3 text-center">Total Qs</th>
                    <th className="py-2.5 px-3 text-center">Correct</th>
                    <th className="py-2.5 px-3 text-center">Wrong</th>
                    <th className="py-2.5 px-3 text-center">Unattempted</th>
                    <th className="py-2.5 px-3 text-right">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {topicBreakdown.map((row, idx) => {
                    const displaySection = row.topicName.toUpperCase().replace('-', ' ');
                    const displaySubtopic = row.subtopicName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

                    return (
                      <tr key={idx} className="border-b border-slate-100 last:border-0 font-semibold text-slate-700">
                        <td className="py-3 px-3 uppercase text-[10px] text-slate-500 font-bold">{displaySection}</td>
                        <td className="py-3 px-3 text-[var(--color-navy)]">{displaySubtopic}</td>
                        <td className="py-3 px-3 text-center">{row.totalQuestions}</td>
                        <td className="py-3 px-3 text-center text-[var(--color-success)]">{row.correct}</td>
                        <td className="py-3 px-3 text-center text-[var(--color-danger)]">{row.wrong}</td>
                        <td className="py-3 px-3 text-center text-slate-400">{row.unattempted}</td>
                        <td className="py-3 px-3 text-right text-[var(--color-blue)] font-bold">{row.accuracyPercent}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weak areas callout */}
          {weakAreas.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3.5 shadow-xs">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider">Suggested Improvement Areas</h4>
                <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                  Based on your score, your accuracy in <span className="font-extrabold uppercase">{weakAreas.map(w => w.replace(/-/g, ' ')).join(', ')}</span> falls below 50%. We recommend reviewing these core conceptual rules and formulas prior to taking another mock exam.
                </p>
              </div>
            </div>
          )}

          {/* Gated Answer Key Preview (First 4 Questions) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-xs font-extrabold text-[var(--color-navy)] uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Answer Key &amp; Solutions Preview
            </h3>
            <div className="space-y-4">
              {questions.slice(0, 4).map((q, idx) => {
                const userAns = answers[q.id];
                const selectedOptIdx = userAns?.selectedOption;
                const isCorrect = selectedOptIdx === q.correctOption;
                const optionsList = getLangOptions(q.options);

                const selectedText = selectedOptIdx !== null && selectedOptIdx !== undefined 
                  ? `${String.fromCharCode(65 + selectedOptIdx)}. ${optionsList[selectedOptIdx] || ''}` 
                  : 'Not Attempted';

                const correctText = `${String.fromCharCode(65 + q.correctOption)}. ${optionsList[q.correctOption] || ''}`;

                return (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-150 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[var(--color-navy-deep)]">Question {idx + 1}</span>
                      {selectedOptIdx === null || selectedOptIdx === undefined ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-650 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                          Unattempted
                        </span>
                      ) : isCorrect ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Correct
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-755 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          Incorrect
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">{getLangText(q.question)}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 pt-2 border-t border-slate-200/60 text-xs">
                      <div>
                        <span className="text-slate-450 font-bold block uppercase text-[10px] tracking-wide">Your Selected Answer:</span>
                        <span className={`font-bold ${isCorrect ? 'text-emerald-600' : selectedOptIdx === null || selectedOptIdx === undefined ? 'text-slate-500' : 'text-rose-600'}`}>
                          {selectedText}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-450 font-bold block uppercase text-[10px] tracking-wide">Correct Answer Key:</span>
                        <span className="font-bold text-emerald-600">
                          {correctText}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gated See More CTA */}
            <div className="mt-5">
              <a
                href="https://prepgrind.com/register"
                className="w-full text-center px-6 py-3.5 rounded-xl text-xs font-black text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 active-btn-blink"
                style={{
                  boxShadow: '0 4px 15px rgba(27, 110, 181, 0.35)'
                }}
              >
                <span>See More Solutions &amp; Explanations</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Unlock Detailed Solutions & Analytics Paywall (40%) */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-6">
          <div className="relative bg-slate-100/30 border border-slate-200 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xs min-h-[455px] flex flex-col justify-between">
            
            {/* Blurred skeleton content overlay */}
            <div className="filter blur-sm select-none pointer-events-none opacity-40 space-y-6">
              <h4 className="text-sm font-extrabold text-[var(--color-navy)] border-b pb-2">Detailed Solution Analysis</h4>
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 bg-white border rounded-xl flex flex-col gap-2">
                    <div className="h-3 w-1/3 bg-slate-250 rounded" />
                    <div className="h-3.5 w-full bg-slate-200 rounded" />
                    <div className="h-3.5 w-4/5 bg-slate-200 rounded" />
                    <div className="h-3 w-1/4 bg-emerald-100 rounded mt-2" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border p-4 rounded-xl h-24" />
                <div className="bg-white border p-4 rounded-xl h-24" />
              </div>
            </div>

            {/* Floating absolute locker mask over preview */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="p-3 rounded-full bg-[var(--color-navy-deep)] text-white mb-3 shadow-md">
                <Lock className="w-5 h-5 text-[var(--color-gold-bright)]" />
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-navy-deep)] tracking-tight">
                Unlock Detailed Solutions &amp; Analytics
              </h3>
              <p className="text-[11px] text-slate-500 max-w-xs mt-1.5 leading-relaxed font-semibold">
                Get step-by-step mathematical explanations, all-India percentile ranking, speed comparisons, and access to 400+ full-length bank mock tests.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 w-full">
                <a
                  href="https://prepgrind.com/register"
                  className="w-full text-center px-5 py-3.5 rounded-xl text-xs font-black text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 active-btn-blink"
                  style={{
                    boxShadow: '0 4px 15px rgba(27, 110, 181, 0.35)'
                  }}
                >
                  <span>Unlock Full Analysis &amp; Mock Tests</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onRetake}
                  className="w-full text-center px-5 py-3 rounded-xl text-xs font-bold border border-slate-200 hover:border-slate-350 bg-white text-slate-650 hover:text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake a Different Topic</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
