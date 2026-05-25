// PATH: components/sections/current-affairs/filters/CAFilters.tsx
'use client';

import {
  Globe, Building2, Landmark, TrendingUp, Flag, Award,
  BookOpen, BarChart2, Calendar, Search, X,
} from 'lucide-react';
import type { CACategory } from '../../../../types/current-affairs';
import { CA_CATEGORIES } from '../../../../lib/data/current-affairs/categories';
import { CA_ARTICLES } from '../../../../lib/data/current-affairs/articles';

// ─── Icon map ─────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Globe:      Globe,
  Globe2:     Globe,
  Building2:  Building2,
  Landmark:   Landmark,
  TrendingUp: TrendingUp,
  Flag:       Flag,
  Award:      Award,
  BookOpen:   BookOpen,
  BarChart2:  BarChart2,
  Calendar:   Calendar,
};

// ─── Helpers ──────────────────────────────
function getCount(label: CACategory): number {
  if (label === 'All Updates') return CA_ARTICLES.length;
  return CA_ARTICLES.filter(ca => ca.category === label).length;
}

// ─── Props ────────────────────────────────
interface CAFiltersProps {
  activeCategory: CACategory;
  search:         string;
  onCategory:     (cat: CACategory) => void;
  onSearch:       (q: string) => void;
  onClearSearch:  () => void;
}

// ─── Component ────────────────────────────
export default function CAFilters({
  activeCategory,
  search,
  onCategory,
  onSearch,
  onClearSearch,
}: CAFiltersProps) {
  return (
    <div
      className="sticky top-[64px] z-30 bg-white border-b border-gray-100"
      style={{ boxShadow: '0 2px 12px rgba(13,27,62,0.06)' }}
    >
      <div className="container-custom">
        <div className="flex items-center gap-2.5 py-3 overflow-x-auto scroll-hide">

          {/* Search input (desktop) */}
          <div className="relative flex-shrink-0 hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            <input
              value={search}
              onChange={e => onSearch(e.target.value)}
              placeholder="Search updates…"
              aria-label="Search current affairs"
              className="pl-8 pr-8 py-1.5 text-xs border border-gray-200 rounded-full bg-gray-50
                         focus:outline-none focus:ring-1 focus:ring-[var(--color-blue)]
                         focus:border-[var(--color-blue)] w-44 text-[var(--color-navy)]
                         placeholder:text-gray-400 transition-all"
            />
            {search && (
              <button
                onClick={onClearSearch}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-navy)] transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-5 bg-gray-200 flex-shrink-0" />

          {/* Category pills */}
          {CA_CATEGORIES.map(({ label, iconName }) => {
            const Icon     = ICON_MAP[iconName] ?? Globe;
            const isActive = activeCategory === label;
            const count    = getCount(label);

            return (
              <button
                key={label}
                onClick={() => onCategory(label)}
                aria-pressed={isActive}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                            text-[11px] font-semibold whitespace-nowrap transition-all duration-200
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)]
                            ${isActive
                              ? 'text-white shadow-sm'
                              : 'border border-gray-200 text-gray-600 hover:text-[var(--color-navy)] hover:border-gray-300 hover:bg-gray-50'
                            }`}
                style={isActive
                  ? { background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)' }
                  : {}}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
                {count > 0 && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}