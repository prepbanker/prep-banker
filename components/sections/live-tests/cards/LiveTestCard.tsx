// PATH: components/live-tests/cards/LiveTestCard.tsx
// Pure presentational card — receives test data + timeLeft, emits nothing.
// Memoized: only re-renders when timeLeft or test reference changes.

import { memo } from 'react';
import {
  Play, CheckCircle2, Unlock, Lock, ChevronRight, Users,
} from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import type { LiveTest } from '@/types/live-tests';

// ─── Helpers ──────────────────────────────────────────────────
function difficultyStyle(d: string) {
  if (d === 'Easy') return 'bg-emerald-50 text-emerald-700 border-emerald-100';
  if (d === 'Hard') return 'bg-red-50 text-red-700 border-red-100';
  return 'bg-amber-50 text-amber-700 border-amber-100';
}

function examBadgeStyle(exam: string) {
  return exam === 'SBI-PO'
    ? 'bg-blue-600 text-white'
    : 'bg-[var(--color-gold)] text-white';
}

interface Props {
  test: LiveTest;
  timeLeft: number;  // seconds
}

const LiveTestCard = memo(function LiveTestCard({ test, timeLeft }: Props) {
  const isExpired = timeLeft <= 0;
  const isUrgent  = timeLeft < 3600 && timeLeft > 0;

  const borderColor = isExpired
    ? 'var(--color-gray-100)'
    : isUrgent
    ? 'rgba(239,68,68,0.25)'
    : 'rgba(27,110,181,0.2)';

  const topBorderColor = isExpired
    ? 'var(--color-gray-200)'
    : isUrgent
    ? '#ef4444'
    : 'var(--color-blue)';

  return (
    <article
      className={`group relative bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-250 ${
        isExpired ? 'opacity-60' : 'hover:-translate-y-1'
      }`}
      style={{
        border: `1px solid ${borderColor}`,
        borderTop: `3px solid ${topBorderColor}`,
        boxShadow: isExpired ? 'none' : 'var(--shadow-card)',
      }}
      onMouseEnter={e => {
        if (!isExpired)
          (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-hover)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          isExpired ? 'none' : 'var(--shadow-card)';
      }}
    >
      {/* ── Header ── */}
      <div className="p-4 pb-3">

        {/* Badge row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {/* Exam */}
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${examBadgeStyle(test.exam)}`}>
            {test.exam}
          </span>

          {/* Live / Completed */}
          {!isExpired ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-600 border border-red-100">
              <span className="ltc-dot" aria-hidden /> LIVE
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-gray-100)] text-[var(--color-gray-400)]">
              <CheckCircle2 className="w-3 h-3" aria-hidden /> COMPLETED
            </span>
          )}

          {/* Free / Premium */}
          {test.isFree ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
              <Unlock className="w-3 h-3" aria-hidden /> FREE
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-gray-50)] text-[var(--color-gray-400)] border border-[var(--color-gray-200)]">
              <Lock className="w-3 h-3" aria-hidden /> PREMIUM
            </span>
          )}

          {/* Type */}
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
            {test.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[13.5px] font-bold leading-snug text-[var(--color-navy)] line-clamp-2 group-hover:text-[var(--color-blue)] transition-colors duration-200 mb-2">
          {test.title}
        </h3>

        {/* Description */}
        <p className="text-[11.5px] leading-relaxed text-[var(--color-gray-600)] line-clamp-2 mb-2">
          {test.description}
        </p>

        {/* Difficulty + languages + participants */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${difficultyStyle(test.difficulty)}`}>
            {test.difficulty}
          </span>
          {test.languages.map(l => (
            <span
              key={l}
              className="text-[10px] text-[var(--color-gray-500)] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-md px-2 py-0.5"
            >
              {l}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-[var(--color-gray-400)]">
            <Users className="w-3 h-3" aria-hidden />
            {test.participants.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div
        className="grid grid-cols-3 border-y border-[var(--color-gray-100)]"
        style={{ background: 'var(--color-gray-50)' }}
      >
        {[
          { label: 'Duration',  value: `${test.duration}m`   },
          { label: 'Questions', value: test.totalQuestions    },
          { label: 'Marks',     value: test.totalMarks        },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center py-2.5 ${i < 2 ? 'border-r border-[var(--color-gray-100)]' : ''}`}
          >
            <span
              className="text-base font-extrabold leading-none"
              style={{ color: 'var(--color-gold)' }}
            >
              {s.value}
            </span>
            <span className="text-[9px] text-[var(--color-gray-400)] mt-0.5 uppercase tracking-wide">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Countdown Timer ── */}
      <div className="px-4 py-3">
        <CountdownTimer timeLeft={timeLeft} />
      </div>

      {/* ── CTA ── */}
      <div className="px-4 pb-4 mt-auto">
        {isExpired ? (
          <div
            aria-disabled="true"
            className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-bold bg-[var(--color-gray-100)] text-[var(--color-gray-400)] cursor-not-allowed"
          >
            Test Ended
          </div>
        ) : (
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: isUrgent
                ? 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)'
                : 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-navy) 100%)',
              boxShadow: isUrgent
                ? '0 4px 14px rgba(239,68,68,0.3)'
                : '0 4px 14px rgba(27,110,181,0.3)',
            }}
          >
            <Play className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} aria-hidden />
            {test.isFree ? 'Start Free Test' : 'Join Now'}
            <ChevronRight className="w-3.5 h-3.5" aria-hidden />
          </a>
        )}
      </div>

      <style>{`
        .ltc-dot {
          display: inline-block;
          width: 5px; height: 5px;
          background: #ef4444;
          border-radius: 50%;
          animation: ltc-pulse 1.5s ease-in-out infinite;
        }
        @keyframes ltc-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .5; transform: scale(1.5); }
        }
      `}</style>
    </article>
  );
});

export default LiveTestCard;