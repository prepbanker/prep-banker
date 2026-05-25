// PATH: components/sections/quiz/filters/QuizTypeFilter.tsx
'use client';

import { memo } from 'react';
import {
  Globe, BarChart2, Zap, Target, BookOpen, TrendingUp,
} from 'lucide-react';
import type { TypeFilter } from '@/types/quiz';

const TYPE_TABS: { label: TypeFilter; Icon: React.ElementType }[] = [
  { label: 'All',        Icon: Globe    },
  { label: 'Full Mock',  Icon: BarChart2 },
  { label: 'Prelims',    Icon: Zap       },
  { label: 'Mains',      Icon: Target    },
  { label: 'Sectional',  Icon: BarChart2 },
  { label: 'Topic Wise', Icon: BookOpen  },
];

interface Props {
  active: TypeFilter;
  onChange: (v: TypeFilter) => void;
  typeCounts: Record<string, number>;
  trendingCount: number;
}

function QuizTypeFilter({ active, onChange, typeCounts, trendingCount }: Props) {
  return (
    <div className="bg-white border-b-2 border-[var(--color-gray-100)]"
      style={{ boxShadow: '0 2px 8px rgba(13,27,62,0.07)' }}
    >
      <div className="container-custom">
        <div className="flex items-center gap-2 py-3 overflow-x-auto scroll-hide">

          {/* Trending pill */}
          {trendingCount > 0 && (
            <>
              <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[11px] font-bold text-amber-600 whitespace-nowrap">
                <TrendingUp className="w-3 h-3" />
                {trendingCount} Trending
              </span>
              <div className="w-px h-5 bg-[var(--color-gray-200)] flex-shrink-0 mx-0.5" />
            </>
          )}

          {/* Type filter tabs */}
          {TYPE_TABS.map(({ label, Icon }) => {
            const isActive = active === label;
            const count = typeCounts[label] ?? 0;

            return (
              <button
                key={label}
                onClick={() => onChange(label)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'border border-[var(--color-gray-200)] text-[var(--color-gray-600)] bg-white hover:text-[var(--color-navy)] hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]'
                }`}
                style={isActive ? {
                  background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)',
                } : {}}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                {label}
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                  isActive
                    ? 'bg-white/25 text-white'
                    : 'bg-[var(--color-gray-100)] text-[var(--color-gray-400)]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(QuizTypeFilter);