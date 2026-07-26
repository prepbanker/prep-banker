'use client';

import { useRef } from 'react';
import {
  ChevronLeft, ChevronRight, ClipboardList,
  Zap, Target, Bookmark, BookOpen, Play,
  Star, Users, FileText,
} from 'lucide-react';
import { trendingTests } from '@/lib/data';
import { formatCount, difficultyColor } from '@/lib/utils';
import type { ExamType } from '@/types';

// ─────────────────────────────────────────
// TrendingTestsSection — white theme
// ─────────────────────────────────────────

// Type → lucide icon
function TypeIcon({ type }: { type: string }) {
  const cls = 'h-5 w-5';
  switch (type) {
    case 'Full Mock':  return <ClipboardList className={cls} />;
    case 'Prelims':    return <Zap className={cls} />;
    case 'Mains':      return <Target className={cls} />;
    case 'Sectional':  return <Bookmark className={cls} />;
    case 'Topic Wise': return <BookOpen className={cls} />;
    default:           return <FileText className={cls} />;
  }
}

// Difficulty pill styles
const DIFF_CLASS: Record<string, string> = {
  Easy:   'bg-emerald-50 text-emerald-700 border-emerald-200',
  Medium: 'bg-amber-50  text-amber-700  border-amber-200',
  Hard:   'bg-red-50    text-red-700    border-red-200',
};

// Type pill styles
const TYPE_CLASS: Record<string, string> = {
  'Full Mock':  'bg-blue-50  text-blue-700  border-blue-200',
  'Prelims':    'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Mains':      'bg-violet-50 text-violet-700 border-violet-200',
  'Sectional':  'bg-sky-50   text-sky-700   border-sky-200',
  'Topic Wise': 'bg-teal-50  text-teal-700  border-teal-200',
};

// Star rating
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3 w-3"
          fill={i < Math.round(rating) ? '#F0B429' : 'none'}
          stroke={i < Math.round(rating) ? '#F0B429' : '#CBD5E1'}
          strokeWidth={1.5}
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-slate-400">{rating}</span>
    </div>
  );
}

export default function TrendingTestsSection() {
  const sliderRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === 'right' ? 300 : -300,
      behavior: 'smooth',
    });
  };

  return (
    <section aria-label="Trending Mock Tests for Banking Exams" className="section-padding overflow-hidden bg-white">
      <div className="container-custom">

        {/* ── Header row ── */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            {/* Label pill */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Test Series
              </span>
            </div>

            <h2
              className="text-3xl font-extrabold text-slate-800 sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Trending Mock Tests for Banking Exams
            </h2>

            {/* Gold underline */}
            <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-amber-400 to-blue-500" />

            <p className="mt-3 text-sm text-slate-500">
              Explore the most popular SBI PO and IBPS PO mock tests, sectional tests, and quizzes chosen by banking aspirants this week.
            </p>
          </div>

          {/* Scroll arrows */}
          <div className="flex gap-2 self-end">
            {(['left', 'right'] as const).map(dir => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600"
              >
                {dir === 'left'
                  ? <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
                  : <ChevronRight className="h-4 w-4" strokeWidth={2.5} />}
              </button>
            ))}
          </div>
        </div>

        {/* ── Slider ── */}
        <ul
          ref={sliderRef}
          className="scroll-hide flex gap-4 overflow-x-auto pb-2 pt-2 list-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingTests.map(test => (
            <li
              key={test.id}
              className="group flex w-[clamp(250px,28vw,290px)] flex-shrink-0 flex-col rounded-2xl border border-slate-100 bg-white shadow-[0_2px_16px_rgba(13,27,62,0.07)] transition-all duration-200 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_8px_32px_rgba(13,27,62,0.12)]"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Card top coloured strip */}
              <div className="relative rounded-t-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-4 pt-4 pb-3">
                {/* Live dot */}
                {test.isLive && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-400">
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-red-400" />
                    LIVE
                  </span>
                )}

                {/* Exam badge + type icon */}
                <div className="mb-2.5 flex items-center justify-between">
                  <span
                    className={[
                      'rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide',
                      test.exam === 'SBI-PO'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-amber-500/20 text-amber-300',
                    ].join(' ')}
                  >
                    {test.exam}
                  </span>
                  <span className="text-slate-400">
                    <TypeIcon type={test.type} />
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mb-2 line-clamp-2 text-[0.88rem] font-bold leading-snug text-white"
                  style={{ minHeight: '2.5rem' }}
                >
                  {test.title}
                </h3>

                {/* Stars */}
                <Stars rating={test.rating} />
              </div>

              {/* Stats row */}
              <ul className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 list-none">
                {[
                  { label: 'Questions', value: test.totalQuestions.toString(), icon: <FileText className="h-3 w-3" /> },
                  { label: 'Free Tests', value: test.freeTests.toString(),        icon: <BookOpen  className="h-3 w-3" /> },
                  { label: 'Attempts',  value: formatCount(test.totalAttempts),  icon: <Users     className="h-3 w-3" /> },
                ].map(s => (
                  <li key={s.label} className="flex flex-col items-center py-3 px-1">
                    <span className="text-base font-extrabold text-amber-500">{s.value}</span>
                    <span className="mt-0.5 text-center text-xs font-medium uppercase tracking-wide text-slate-400">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tags & hashtags */}
              <div className="flex flex-1 flex-col gap-2.5 px-4 py-3">
                {/* Difficulty + type pills */}
                <ul className="flex flex-wrap gap-1.5 list-none">
                  <li>
                    <span
                      className={[
                        'rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide',
                        DIFF_CLASS[test.difficulty] ?? 'bg-slate-50 text-slate-600 border-slate-200',
                      ].join(' ')}
                    >
                      {test.difficulty}
                    </span>
                  </li>
                  <li>
                    <span
                      className={[
                        'rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide',
                        TYPE_CLASS[test.type] ?? 'bg-slate-50 text-slate-600 border-slate-200',
                      ].join(' ')}
                    >
                      {test.type}
                    </span>
                  </li>
                </ul>

                {/* Languages */}
                <ul className="flex flex-wrap gap-1.5 list-none">
                  {test.languages.map(l => (
                    <li key={l}>
                      <span
                        className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500"
                      >
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hashtags */}
                <ul className="flex flex-wrap gap-1 list-none">
                  {test.tags.slice(0, 2).map(tag => (
                    <li key={tag}>
                      <span
                        className="text-xs font-semibold text-amber-500"
                      >
                        #{tag.replace(/^#/, '').replace(/\s/g, '')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-4 pb-4">
                <a
                  href="https://app.prepgrind.com/signup/banking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-gold-bright)] py-2.5 text-sm font-bold text-slate-900 shadow-sm shadow-amber-200/50 transition-all hover:bg-[var(--color-gold)] hover:shadow-md"
                >
                  <Play className="h-3.5 w-3.5 fill-slate-900 text-slate-900" />
                  Start Practicing
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* View All */}
        <div className="mt-8 text-center">
          <a
            href="/live-tests"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition-all hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
          >
            View All Test Series
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}