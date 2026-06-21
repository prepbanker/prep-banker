// PATH: components/sections/current-affairs/cards/CAActionCard.tsx
'use client';

import { memo } from 'react';
import { Clock, BookOpen } from 'lucide-react';
import type { CAQuiz } from '@/lib/data/current-affairs/quizzes';

interface Props {
  quiz: CAQuiz;
}

function CAActionCard({ quiz }: Props) {
  const getDifficultyColor = (diff: CAQuiz['difficulty']) => {
    switch (diff) {
      case 'EASY':
        return 'text-emerald-700 bg-emerald-50 border border-emerald-100';
      case 'MEDIUM':
        return 'text-amber-700 bg-amber-50 border border-amber-100';
      case 'HARD':
        return 'text-rose-700 bg-rose-50 border border-rose-100';
      default:
        return 'text-slate-700 bg-slate-50 border border-slate-100';
    }
  };

  const getShortAttempts = (attemptsStr: string) => {
    const match = attemptsStr.match(/(\d+(\.\d+)?[kM]?)/);
    if (match) {
      return `${match[1]} attempts`;
    }
    return attemptsStr;
  };

  return (
    <article
      className="group bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-slate-350"
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)' }}
    >
      <div>
        {/* ── Top Bar: Free Badge, Difficulty & Attempts ── */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-1.5 min-w-0">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[14px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white">
              Free
            </span>
            <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[14px] font-extrabold uppercase tracking-wider ${getDifficultyColor(quiz.difficulty)}`}>
              {quiz.difficulty}
            </span>
          </div>
          
          <span className="text-[14px] font-semibold text-slate-500 whitespace-nowrap mt-0.5 flex-shrink-0">
            {getShortAttempts(quiz.attempts)}
          </span>
        </div>

        {/* ── Title ── */}
        <h3 className="text-[15px] font-extrabold leading-snug text-slate-900 group-hover:text-[var(--color-blue)] transition-colors min-h-[44px] line-clamp-2 mb-4">
          {quiz.title}
        </h3>

        {/* ── Meta Fields: Duration and Questions ── */}
        <div className="flex items-center gap-4 border-t border-slate-100 pt-4 pb-4 text-[14px] text-slate-500 font-semibold">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-4.5 h-4.5 text-slate-450 flex-shrink-0" />
            <span>{quiz.duration} Min</span>
          </div>

          {/* Questions */}
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4.5 h-4.5 text-slate-455 flex-shrink-0" />
            <span>{quiz.questions} Qs</span>
          </div>
        </div>
      </div>

      <div>
        {/* ── Start Now Yellow CTA Button ── */}
        <a
          href="https://app.prepgrind.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-[14px] font-black text-slate-900 bg-[#FBBF24] hover:bg-[#F59E0B] active:scale-[0.98] transition-all text-center uppercase tracking-wider"
          style={{
            boxShadow: '0 2px 4px rgba(245, 158, 11, 0.2)',
          }}
        >
          Start Now
        </a>
      </div>
    </article>
  );
}

export default memo(CAActionCard);

