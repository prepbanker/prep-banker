// PATH: components/sections/quiz/cards/QuizCard.tsx
'use client';

import { memo } from 'react';
import {
  BookOpen, Users, Clock, ArrowRight, Play, Unlock, Star,
} from 'lucide-react';
import type { QuizSeries, DifficultyLevel, TestType } from '@/types/quiz';

// ─── Helpers ──────────────────────────────────────────────────
function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000)     return `${Math.round(n / 1_000)}K+`;
  return `${n}+`;
}

function difficultyMeta(d: DifficultyLevel) {
  if (d === 'Easy') return { cls: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
  if (d === 'Hard') return { cls: 'bg-red-50 text-red-700 border-red-100' };
  return               { cls: 'bg-amber-50 text-amber-700 border-amber-100' };
}

function examBadgeCls(exam: string) {
  if (exam === 'Both') return 'bg-gradient-to-r from-blue-600 to-[var(--color-gold)] text-white';
  return exam === 'SBI-PO' ? 'bg-blue-600 text-white' : 'bg-[var(--color-gold)] text-white';
}

function typeBadgeCls(type: TestType) {
  const map: Record<string, string> = {
    'Full Mock':  'bg-[var(--color-navy)] text-white',
    'Prelims':    'bg-blue-50 text-blue-700 border border-blue-100',
    'Mains':      'bg-purple-50 text-purple-700 border border-purple-100',
    'Sectional':  'bg-cyan-50 text-cyan-700 border border-cyan-100',
    'Topic Wise': 'bg-[var(--color-sky)] text-[var(--color-blue)] border border-blue-100',
  };
  return map[type] ?? 'bg-gray-50 text-gray-600';
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-[var(--color-gold)]">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="w-3 h-3"
          fill={i < Math.round(rating) ? 'currentColor' : 'none'}
        />
      ))}
      <span className="ml-1 text-xs font-bold text-[var(--color-navy)]">{rating}</span>
    </span>
  );
}

// ─── QuizCard ──────────────────────────────────────────────────
interface Props { quiz: QuizSeries }

function QuizCard({ quiz }: Props) {
  const dm = difficultyMeta(quiz.difficulty);

  return (
    <article
      className="group bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 relative"
      style={{
        border: quiz.isPremium ? '1.5px solid rgba(212,160,23,0.3)' : '1px solid var(--color-gray-100)',
        borderTop: `3px solid ${quiz.isPremium ? 'var(--color-gold)' : 'var(--color-blue)'}`,
        boxShadow: 'var(--shadow-card)',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-hover)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)'; }}
    >
      {/* Premium ribbon */}
      {quiz.isPremium && (
        <div
          className="absolute top-3.5 right-0 px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-white rounded-l-full z-10"
          style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-bright))' }}
        >
          Premium
        </div>
      )}

      <div className="p-4 pb-3 flex flex-col gap-3 flex-1">

        {/* Badge row */}
        <div className="flex flex-wrap gap-1.5 pr-14">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide ${examBadgeCls(quiz.exam)}`}>
            {quiz.exam}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${typeBadgeCls(quiz.type)}`}>
            {quiz.type}
          </span>
          {quiz.isNew && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
              NEW
            </span>
          )}
          {quiz.isTrending && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-100">
              🔥 Trending
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[13px] font-bold leading-snug text-[var(--color-navy)] line-clamp-2 group-hover:text-[var(--color-blue)] transition-colors duration-200">
          {quiz.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] text-[var(--color-gray-600)] leading-relaxed line-clamp-2">
          {quiz.description}
        </p>

        {/* Subject chip */}
        {quiz.subject && (
          <span className="self-start inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--color-sky)] text-[var(--color-blue)] border border-blue-100">
            <BookOpen className="w-3 h-3" />
            {quiz.subject}
          </span>
        )}

        {/* Rating + Attempts */}
        <div className="flex items-center gap-3 flex-wrap">
          <Stars rating={quiz.rating} />
          <span className="inline-flex items-center gap-1 text-[11px] text-[var(--color-gray-400)]">
            <Users className="w-3 h-3" />
            {formatCount(quiz.totalAttempts)}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {quiz.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[9px] font-semibold text-[var(--color-gray-400)] bg-[var(--color-gray-50)] border border-[var(--color-gray-100)] rounded px-1.5 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="grid grid-cols-3 border-y border-[var(--color-gray-100)]"
        style={{ background: 'var(--color-gray-50)' }}
      >
        {[
          { Icon: BookOpen, label: 'Questions', value: quiz.totalQuestions },
          { Icon: Clock,    label: 'Duration',  value: `${quiz.duration}m` },
          {
            Icon: Unlock,
            label: 'Free Qs',
            value: quiz.freeQuestions > 0 ? `${quiz.freeQuestions}` : 'Premium',
          },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center py-2.5 gap-0.5 ${i < 2 ? 'border-r border-[var(--color-gray-100)]' : ''}`}
          >
            <span className="text-sm font-extrabold leading-none text-[var(--color-gold)]">
              {s.value}
            </span>
            <span className="text-[9px] text-[var(--color-gray-400)] uppercase tracking-wide">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Difficulty + Year + Languages */}
      <div className="px-4 py-2.5 flex items-center gap-2 flex-wrap">
        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${dm.cls}`}>
          {quiz.difficulty}
        </span>
        <span className="text-[10px] text-[var(--color-gray-400)]">{quiz.year}</span>
        {quiz.languages.map(l => (
          <span key={l} className="text-[10px] text-[var(--color-gray-400)] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded px-1.5 py-0.5">
            {l}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="px-4 pb-4 flex gap-2">
        {quiz.freeQuestions > 0 && (
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-navy) 100%)',
              boxShadow: '0 4px 14px rgba(27,110,181,0.3)',
            }}
          >
            <Play className="w-3 h-3" fill="currentColor" strokeWidth={0} />
            Start Free
          </a>
        )}
        <a
          href="/quiz"
          className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 hover:bg-[var(--color-sky)] active:scale-[0.98] ${
            quiz.freeQuestions > 0
              ? 'px-3 border border-[var(--color-gray-200)] text-[var(--color-navy)]'
              : 'flex-1 border border-[var(--color-gray-200)] text-[var(--color-navy)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]'
          }`}
        >
          {quiz.freeQuestions > 0
            ? <ArrowRight className="w-3.5 h-3.5" />
            : <><span>View Quiz</span><ArrowRight className="w-3 h-3" /></>
          }
        </a>
      </div>
    </article>
  );
}

export default memo(QuizCard);