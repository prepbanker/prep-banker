// PATH: components/sections/quiz/cards/QuizCard.tsx
'use client';

import { memo } from 'react';
import { BookOpen, Users, Clock, Unlock, Star, ShieldCheck, ChevronRight, Download } from 'lucide-react';
import type { QuizSeries } from '@/types/quiz';

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K+`;
  return `${n}+`;
}

function categoryBadgeText(cat: string): string {
  if (cat.includes('Quantitative')) return 'Quant';
  if (cat.includes('Reasoning')) return 'Reasoning';
  if (cat.includes('English')) return 'English';
  if (cat.includes('Banking')) return 'Banking';
  if (cat.includes('General')) return 'GA';
  if (cat.includes('Current')) return 'Current CA';
  if (cat.includes('Data')) return 'DI';
  return cat;
}

interface Props {
  quiz: QuizSeries;
}

function QuizCard({ quiz }: Props) {
  const isFree = quiz.freeQuestions > 0;

  return (
    <article
      className="group relative bg-white rounded-xl flex flex-col overflow-hidden border border-slate-150 transition-all duration-300 hover:shadow-md hover:border-slate-300"
    >
      {/* ── Header: Badges & Ratings ── */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Category Pill */}
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded text-xs font-bold bg-[#E8F4FD] text-[var(--color-blue)] tracking-wide">
            {categoryBadgeText(quiz.category)}
          </span>

          {/* Rating */}
          <span className="inline-flex items-center gap-0.5 text-xs font-bold text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            {quiz.rating.toFixed(1)}
          </span>
        </div>

        {/* Free / Premium Badge & Download button */}
        <div className="flex items-center gap-2">
          {isFree ? (
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-[#16A34A] text-white tracking-wide">
              Free
            </span>
          ) : (
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-[#D4A017] text-white tracking-wide">
              Premium
            </span>
          )}

          <a
            href="https://app.prepgrind.com/signup/banking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-1.5 rounded-full border border-slate-200 text-slate-500 hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] hover:bg-[#E8F4FD]/50 transition-all cursor-pointer"
            title="Download PDF"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── Title ── */}
      <div className="px-4 pb-3 flex-grow">
        <h3 className="text-[13.5px] font-bold leading-snug text-slate-800 line-clamp-2 min-h-[38px] group-hover:text-[var(--color-blue)] transition-colors">
          {quiz.title}
        </h3>
      </div>

      {/* ── Double-Column Meta Grid ── */}
      <div className="px-4 pb-4 border-t border-slate-100 pt-3">
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 text-xs text-slate-500">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{quiz.duration} Minutes</span>
          </div>

          {/* Questions */}
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{quiz.totalQuestions} Questions</span>
          </div>

          {/* Free questions available */}
          <div className="flex items-center gap-1.5">
            <Unlock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">
              {isFree ? `${quiz.freeQuestions} Free Qs` : 'Premium Only'}
            </span>
          </div>

          {/* Attempts count */}
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{formatCount(quiz.totalAttempts)} Attempts</span>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-1.5 col-span-2">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="uppercase tracking-wider font-semibold text-slate-600">
              {quiz.difficulty} Level
            </span>
          </div>
        </div>
      </div>

      {/* ── Quiz Practice Bar ── */}
      <div className="text-center py-2 bg-[#E8F4FD]/50 border-t border-slate-100 text-xs font-bold text-[var(--color-blue)] flex items-center justify-center gap-1">
        <span>🎯</span>
        <span>Self-Paced Practice Quiz</span>
      </div>

      {/* ── Start Practice CTA Button ── */}
      <div className="p-4 bg-white border-t border-slate-100">
        <a
          href="https://app.prepgrind.com/signup/banking"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-navy)] hover:opacity-95 active:scale-[0.98] transition-all text-center"
          style={{
            boxShadow: '0 2px 4px rgba(27, 110, 181, 0.15)',
          }}
        >
          {isFree ? 'Start Free Practice' : 'Attempt Premium Quiz'}
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

export default memo(QuizCard);