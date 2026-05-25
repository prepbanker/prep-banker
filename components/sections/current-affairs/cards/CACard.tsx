// PATH: components/sections/current-affairs/cards/CACard.tsx
'use client';

import { memo } from 'react';
import { Clock, ArrowRight, Flame, AlertCircle, CheckCircle2, Star } from 'lucide-react';
import type { CurrentAffair, ImportanceLevel } from '../../../../types/current-affairs';
import { getCategoryStyle } from '../../../../lib/data/current-affairs/categories';

// ─── Helpers ──────────────────────────────
function importanceMeta(level: ImportanceLevel) {
  const map = {
    High:   { cls: 'bg-red-50 text-red-600 border border-red-100',      Icon: Flame,        label: 'High'   },
    Medium: { cls: 'bg-amber-50 text-amber-600 border border-amber-100', Icon: AlertCircle,  label: 'Medium' },
    Low:    { cls: 'bg-emerald-50 text-emerald-600 border border-emerald-100', Icon: CheckCircle2, label: 'Low'    },
  } as const;
  return map[level];
}

// ─── Props ────────────────────────────────
interface CACardProps {
  ca:         CurrentAffair;
  featured?:  boolean;
  onReadMore: () => void;
}

// ─── Component ────────────────────────────
function CACard({ ca, featured = false, onReadMore }: CACardProps) {
  const imp    = importanceMeta(ca.importance);
  const ImpIcon = imp.Icon;

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Read more about ${ca.title}`}
      onClick={onReadMore}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onReadMore()}
      className={`group bg-white rounded-xl flex flex-col transition-all duration-200
                  hover:-translate-y-0.5 cursor-pointer outline-none
                  focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)] focus-visible:ring-offset-1
                  ${featured
                    ? 'border-2 border-[rgba(212,160,23,0.25)]'
                    : 'border border-gray-100'
                  }`}
      style={{ boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-hover)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)'; }}
    >
      {/* Featured accent bar */}
      {featured && (
        <div
          className="h-0.5 w-full rounded-t-xl"
          style={{ background: 'linear-gradient(90deg, var(--color-gold), var(--color-blue))' }}
        />
      )}

      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Category badge + date */}
        <div className="flex items-start justify-between gap-2">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px]
                            font-bold uppercase tracking-wide leading-tight ${getCategoryStyle(ca.category)}`}>
            {featured && <Star className="w-2.5 h-2.5" fill="currentColor" />}
            {ca.category}
          </span>
          <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap mt-0.5 flex-shrink-0">
            {ca.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[13px] font-bold leading-snug text-[var(--color-navy)] line-clamp-2
                       group-hover:text-[var(--color-blue)] transition-colors duration-200">
          {ca.title}
        </h3>

        {/* Summary */}
        <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-3 flex-1">
          {ca.summary}
        </p>

        {/* Quick fact pills (show 2) */}
        {ca.quickFacts.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {ca.quickFacts.slice(0, 2).map((fact, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md
                           bg-[var(--color-sky)] text-[var(--color-blue)] border border-gray-100"
              >
                {fact}
              </span>
            ))}
            {ca.quickFacts.length > 2 && (
              <span className="text-[10px] text-gray-400 self-center">
                +{ca.quickFacts.length - 2} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 pt-2 flex items-center justify-between
                      border-t border-gray-50 mt-auto">
        <div className="flex items-center gap-2.5">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${imp.cls}`}>
            <ImpIcon className="w-3 h-3" />
            {imp.label}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
            <Clock className="w-3 h-3" />
            {ca.readTime}m read
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--color-blue)]
                         group-hover:text-[var(--color-navy)] transition-colors">
          Read More
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </article>
  );
}

export default memo(CACard);