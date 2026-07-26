// PATH: components/sections/LiveTestsSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { liveTestsData } from '@/lib/data';
import { formatTimer, randomCountdown } from '@/lib/utils';

// ─────────────────────────────────────────
// Types & Constants
// ─────────────────────────────────────────
// Module-scoped initial timers (stable across re-renders)
const INITIAL_TIMERS: Record<string, number> = {};
liveTestsData.forEach((t, i) => {
  if (i === 2) {
    // 3rd card: Test ended
    INITIAL_TIMERS[t.id] = 0;
  } else if (i === 0) {
    // 1st card: Increased timing (18 to 36 hours)
    INITIAL_TIMERS[t.id] = randomCountdown(18, 36);
  } else {
    // Other cards: Active timer (2 to 8 hours)
    INITIAL_TIMERS[t.id] = randomCountdown(2, 8);
  }
});

// ─────────────────────────────────────────
// Helper: difficulty badge colours
// ─────────────────────────────────────────
function difficultyClasses(difficulty: string): {
  bg: string;
  text: string;
  border: string;
} {
  if (difficulty === 'Easy')
    return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
  if (difficulty === 'Hard')
    return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
  return { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200' };
}

// ─────────────────────────────────────────
// LiveTestsSection
// ─────────────────────────────────────────
export default function LiveTestsSection() {
  const [timers, setTimers] = useState<Record<string, number>>({});
  const sliderRef = useRef<HTMLUListElement>(null);

  // Persist / restore timers
  useEffect(() => {
    let initial: Record<string, number> = {};
    try {
      const saved = localStorage.getItem('pb_live_timers_light_v2');
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, number>;
        if (liveTestsData.every((t) => parsed[t.id] >= 0)) {
          initial = parsed;
        }
      }
    } catch {
      /* ignore */
    }

    if (Object.keys(initial).length === 0) {
      initial = { ...INITIAL_TIMERS };
    }
    setTimers(initial);
  }, []);

  // Countdown tick
  useEffect(() => {
    const id = setInterval(() => {
      setTimers((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          if (next[k] > 0) next[k]--;
        });
        try {
          localStorage.setItem('pb_live_timers_light_v2', JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    sliderRef.current?.scrollBy({
      left: dir === 'right' ? 300 : -300,
      behavior: 'smooth',
    });
  };

  return (
    <section
      aria-label="Live Mock Tests"
      className="py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #f0f5ff 0%, #e8f0fb 50%, #f5f7ff 100%)',
      }}
    >
      <div className="max-w-[1350px] mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            {/* Live Now pill */}
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1 text-xs font-bold text-red-500 uppercase tracking-wider mb-3 shadow-sm">
              <span className="live-dot" />
              Live Now
            </span>

            <h2
              className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-tight text-[#0D1B3E] mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Live Mock Tests{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #D4A017, #F0B429)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Running Now
              </span>
            </h2>

            {/* Gold–blue underline */}
            <div
              className="w-14 h-1 rounded-full mb-2"
              style={{
                background: 'linear-gradient(90deg, #D4A017, #1B6EB5)',
              }}
            />

            <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
              Join live SBI PO and IBPS PO mock tests, compete with fellow banking aspirants, and assess your
              performance in a real exam-like environment.
            </p>
          </div>

          {/* Scroll arrows */}
          <div className="flex gap-2">
            {(['left', 'right'] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className="w-9 h-9 flex items-center justify-center bg-white border border-slate-200 rounded-[10px] text-[#0D1B3E] shadow-sm hover:bg-[#1B6EB5] hover:text-white hover:border-[#1B6EB5] transition-all duration-200"
              >
                {dir === 'left' ? (
                  <ChevronLeft size={16} strokeWidth={2.5} />
                ) : (
                  <ChevronRight size={16} strokeWidth={2.5} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards Slider ── */}
        <ul
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pt-4 pb-6 scroll-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {liveTestsData.map((test) => {
            const timeLeft = timers[test.id] ?? 0;
            const isExpired = timeLeft <= 0;
            const isUrgent = timeLeft < 3600 && timeLeft > 0;
            const dc = difficultyClasses(test.difficulty);

            return (
              <li
                key={test.id}
                className="flex-shrink-0 rounded-[14px] overflow-hidden transition-all duration-250 hover:-translate-y-1"
                style={{
                  width: 'clamp(255px, 28vw, 285px)',
                  scrollSnapAlign: 'start',
                  background: isExpired ? '#f8fafc' : '#ffffff',
                  border: `1px solid ${
                    isExpired
                      ? '#e2e8f0'
                      : isUrgent
                      ? 'rgba(239,68,68,.25)'
                      : 'rgba(27,110,181,.2)'
                  }`,
                  borderTop: `3px solid ${
                    isExpired
                      ? '#e2e8f0'
                      : isUrgent
                      ? '#ef4444'
                      : '#1B6EB5'
                  }`,
                  boxShadow: isExpired
                    ? 'none'
                    : '0 4px 20px rgba(13,27,62,.08)',
                  opacity: isExpired ? 0.65 : 1,
                }}
              >
                {/* Top Badges */}
                <div className="flex gap-1.5 flex-wrap p-[0.85rem] pb-0">
                  {test.isFree && (
                    <span className="bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold px-2 py-0.5 tracking-wide uppercase">
                      FREE
                    </span>
                  )}
                  {!isExpired ? (
                    <span className="bg-red-50 text-red-700 border border-red-200 rounded-full text-xs font-bold px-2 py-0.5 flex items-center gap-1 uppercase">
                      <span className="live-dot" style={{ width: 5, height: 5 }} />
                      LIVE
                    </span>
                  ) : (
                    <span className="bg-slate-100 text-slate-500 border border-slate-200 rounded-full text-xs font-bold px-2 py-0.5 uppercase">
                      COMPLETED
                    </span>
                  )}
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold px-2 py-0.5 uppercase">
                    {test.type}
                  </span>
                </div>

                {/* Title */}
                <div className="px-[0.85rem] pt-[0.6rem]">
                  <h3
                    className="text-[#0D1B3E] font-bold text-xs leading-[1.35]"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {test.title}
                  </h3>
                </div>

                {/* Stats grid */}
                <ul
                  className="grid grid-cols-3 my-3"
                  style={{ gap: '1px', background: '#e2e8f0' }}
                >
                  {[
                    { label: 'Duration', value: `${test.duration}m` },
                    { label: 'Questions', value: test.totalQuestions },
                    { label: 'Marks', value: test.totalMarks },
                  ].map((s) => (
                    <li
                      key={s.label}
                      className="bg-slate-50 py-2 text-center"
                    >
                      <div
                        className="font-extrabold text-[0.92rem]"
                        style={{ color: '#D4A017' }}
                      >
                        {s.value}
                      </div>
                      <div className="text-slate-400 text-xs mt-0.5">
                        {s.label}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Timer */}
                <div className="px-[0.85rem]">
                  {!isExpired ? (
                    <div
                      className="flex items-center justify-between rounded-[10px] p-2.5"
                      style={{
                        background: isUrgent ? '#fff5f5' : '#f0f7ff',
                        border: `1px solid ${
                          isUrgent
                            ? 'rgba(239,68,68,.25)'
                            : 'rgba(27,110,181,.2)'
                        }`,
                      }}
                    >
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                          Ends In
                        </div>
                        <div
                          className="font-bold text-[1.15rem] tracking-[0.04em]"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: isUrgent ? '#ef4444' : '#1B6EB5',
                          }}
                        >
                          {formatTimer(timeLeft)}
                        </div>
                      </div>
                      <div
                        className="w-8 h-8 rounded-[8px] flex items-center justify-center"
                        style={{
                          background: isUrgent ? '#fee2e2' : '#dbeafe',
                        }}
                      >
                        <Clock
                          size={15}
                          color={isUrgent ? '#ef4444' : '#1B6EB5'}
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs py-2">
                      <CheckCircle2 size={13} strokeWidth={2} />
                      Test Completed
                    </div>
                  )}
                </div>

                {/* Difficulty + Languages */}
                <div className="px-[0.85rem] py-2 flex gap-1.5 flex-wrap items-center">
                  <span
                    className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full border ${dc.bg} ${dc.text} ${dc.border}`}
                  >
                    {test.difficulty}
                  </span>
                  <ul className="flex gap-1.5 flex-wrap items-center">
                    {test.languages.map((l) => (
                      <li
                        key={l}
                        className="text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="px-[0.85rem] pb-[0.85rem]">
                  <a
                    href={isExpired ? undefined : 'https://app.prepgrind.com/signup/banking'}
                    target={isExpired ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-disabled={isExpired}
                    className={[
                      'flex items-center justify-center gap-1.5 w-full py-2.5 rounded-[9px] text-xs font-bold transition-all duration-200',
                      isExpired
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
                        : 'text-slate-900 hover:brightness-95 hover:-translate-y-0.5',
                    ].join(' ')}
                    style={
                      !isExpired
                        ? {
                            background: 'var(--color-gold-bright)',
                            boxShadow: '0 4px 14px rgba(240, 180, 41, 0.3)',
                          }
                        : undefined
                    }
                  >
                    {isExpired ? (
                      'Test Ended'
                    ) : (
                      <>
                        <Play size={12} fill="currentColor" strokeWidth={0} />
                        Start Now
                      </>
                    )}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ── View All ── */}
        <div className="text-center mt-8">
          <a
            href="/live-tests"
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border-[1.5px] border-[#1B6EB5] text-[#1B6EB5] text-xs font-bold transition-all duration-200 hover:bg-[#1B6EB5] hover:text-white"
          >
            View All Live Tests
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

      </div>

      {/* ── Scoped styles for live-dot animation ── */}
      <style>{`
        .live-dot {
          display: inline-block;
          width: 7px; height: 7px;
          background: #ef4444;
          border-radius: 50%;
          animation: pulse-live 1.5s ease-in-out infinite;
        }
        @keyframes pulse-live {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .5; transform: scale(1.5); }
        }
        .scroll-hide::-webkit-scrollbar { display: none; }
        .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}