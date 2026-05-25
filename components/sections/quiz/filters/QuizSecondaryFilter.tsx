// PATH: components/sections/quiz/filters/QuizSecondaryFilter.tsx
'use client';

import { memo } from 'react';
import { Search, X, ChevronDown, Unlock } from 'lucide-react';
import type { ExamFilter, LevelFilter, SortOption } from '@/types/quiz';

const EXAM_TABS: { label: ExamFilter; activeStyle?: string }[] = [
  { label: 'All' },
  { label: 'SBI-PO',  activeStyle: 'bg-blue-600 text-white border-blue-600' },
  { label: 'IBPS-PO', activeStyle: 'bg-[var(--color-gold)] text-white border-[var(--color-gold)]' },
];

const DIFFICULTY_OPTS: { label: LevelFilter; textCls: string }[] = [
  { label: 'All',    textCls: '' },
  { label: 'Easy',   textCls: 'text-emerald-700' },
  { label: 'Medium', textCls: 'text-amber-700' },
  { label: 'Hard',   textCls: 'text-red-700' },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'most-attempted', label: 'Most Attempted' },
  { value: 'highest-rated',  label: 'Highest Rated'  },
  { value: 'most-free',      label: 'Most Free Qs'   },
  { value: 'newest',         label: 'Newest First'   },
];

interface Props {
  examFilter:  ExamFilter;
  levelFilter: LevelFilter;
  freeOnly:    boolean;
  sortBy:      SortOption;
  search:      string;
  totalCount:  number;
  hasActive:   boolean;
  onExam:      (v: ExamFilter)  => void;
  onLevel:     (v: LevelFilter) => void;
  onFreeOnly:  () => void;
  onSort:      (v: SortOption)  => void;
  onSearch:    (v: string)      => void;
  onReset:     () => void;
}

function QuizSecondaryFilter({
  examFilter, levelFilter, freeOnly, sortBy, search,
  totalCount, hasActive,
  onExam, onLevel, onFreeOnly, onSort, onSearch, onReset,
}: Props) {
  return (
    <div className="bg-[var(--color-off-white)] border-b border-[var(--color-gray-100)]">
      <div className="container-custom py-3">

        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-2.5">

          {/* Exam pills */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-400)] mr-0.5 hidden sm:block">Exam</span>
            {EXAM_TABS.map(({ label, activeStyle }) => {
              const isActive = examFilter === label;
              return (
                <button
                  key={label}
                  onClick={() => onExam(label)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 ${
                    isActive
                      ? (activeStyle ?? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]')
                      : 'border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-[var(--color-gray-200)] hidden sm:block flex-shrink-0" />

          {/* Difficulty pills */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-400)] mr-0.5 hidden sm:block">Level</span>
            {DIFFICULTY_OPTS.map(({ label, textCls }) => {
              const isActive = levelFilter === label;
              return (
                <button
                  key={label}
                  onClick={() => onLevel(label)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                      : `border-[var(--color-gray-200)] bg-white hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)] ${textCls || 'text-[var(--color-gray-600)]'}`
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-[var(--color-gray-200)] hidden sm:block flex-shrink-0" />

          {/* Free Only toggle */}
          <button
            onClick={onFreeOnly}
            className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 ${
              freeOnly
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <Unlock className="w-3.5 h-3.5" />
            Free Only
          </button>

          {/* Spacer */}
          <div className="flex-1 hidden sm:block" />

          {/* Search */}
          <div className="relative flex items-center flex-shrink-0">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--color-gray-400)] pointer-events-none" />
            <input
              value={search}
              onChange={e => onSearch(e.target.value)}
              placeholder="Search tests…"
              className="pl-8 pr-8 py-1.5 text-xs border border-[var(--color-gray-200)] rounded-full bg-white focus:outline-none focus:ring-1 focus:ring-[var(--color-blue)] focus:border-[var(--color-blue)] w-36 sm:w-48 text-[var(--color-navy)] placeholder:text-[var(--color-gray-400)] transition-all"
            />
            {search && (
              <button
                onClick={() => onSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] hover:text-[var(--color-navy)]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative flex-shrink-0">
            <select
              value={sortBy}
              onChange={e => onSort(e.target.value as SortOption)}
              className="appearance-none pl-3 pr-7 py-1.5 text-xs font-semibold border border-[var(--color-gray-200)] rounded-full bg-white text-[var(--color-navy)] focus:outline-none focus:ring-1 focus:ring-[var(--color-blue)] cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[var(--color-gray-400)] pointer-events-none" />
          </div>
        </div>

        {/* Results meta row */}
        <div className="mt-2.5 flex items-center gap-2">
          <p className="text-xs text-[var(--color-gray-400)]">
            <span className="font-bold text-[var(--color-navy)]">{totalCount}</span>
            {' '}quiz series found
          </p>
          {hasActive && (
            <button
              onClick={onReset}
              className="text-[11px] font-semibold text-[var(--color-blue)] hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default memo(QuizSecondaryFilter);