    // PATH: components/sections/quiz/hooks/useQuizFilters.ts
'use client';

import { useState, useMemo, useCallback } from 'react';
import { quizSeries } from '@/lib/data/quiz';
import type {
  ExamFilter, TypeFilter, LevelFilter, SortOption,
} from '@/types/quiz';

export const ITEMS_PER_PAGE = 12;

export function useQuizFilters() {
  const [examFilter,  setExamFilter]  = useState<ExamFilter>('All');
  const [typeFilter,  setTypeFilter]  = useState<TypeFilter>('All');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('All');
  const [freeOnly,    setFreeOnly]    = useState(false);
  const [sortBy,      setSortBy]      = useState<SortOption>('most-attempted');
  const [search,      setSearch]      = useState('');
  const [page,        setPage]        = useState(1);

  // ── Derived filter counts for tabs ──────────────────────────
  const typeCounts = useMemo(() => {
    const allTypes = ['All', 'Full Mock', 'Prelims', 'Mains', 'Sectional', 'Topic Wise'] as const;
    return Object.fromEntries(
      allTypes.map(t => [
        t,
        t === 'All'
          ? quizSeries.length
          : quizSeries.filter(q => q.type === t).length,
      ]),
    ) as Record<string, number>;
  }, []);

  // ── Filtered + sorted list ───────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...quizSeries];

    if (examFilter  !== 'All') list = list.filter(q => q.exam === examFilter || q.exam === 'Both');
    if (typeFilter  !== 'All') list = list.filter(q => q.type === typeFilter);
    if (levelFilter !== 'All') list = list.filter(q => q.difficulty === levelFilter);
    if (freeOnly)              list = list.filter(q => q.freeQuestions > 0);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some(tag => tag.toLowerCase().includes(q)) ||
        (s.subject ?? '').toLowerCase().includes(q),
      );
    }

    list.sort((a, b) => {
      if (sortBy === 'most-attempted') return b.totalAttempts - a.totalAttempts;
      if (sortBy === 'highest-rated')  return b.rating        - a.rating;
      if (sortBy === 'newest')         return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return b.freeQuestions - a.freeQuestions;
    });

    return list;
  }, [examFilter, typeFilter, levelFilter, freeOnly, sortBy, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // ── Setters that also reset page ────────────────────────────
  const setExamFilterAndReset = useCallback((v: ExamFilter) => {
    setExamFilter(v); setPage(1);
  }, []);
  const setTypeFilterAndReset = useCallback((v: TypeFilter) => {
    setTypeFilter(v); setPage(1);
  }, []);
  const setLevelFilterAndReset = useCallback((v: LevelFilter) => {
    setLevelFilter(v); setPage(1);
  }, []);
  const toggleFreeOnly = useCallback(() => {
    setFreeOnly(p => !p); setPage(1);
  }, []);
  const setSearchAndReset = useCallback((v: string) => {
    setSearch(v); setPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setExamFilter('All');
    setTypeFilter('All');
    setLevelFilter('All');
    setFreeOnly(false);
    setSearch('');
    setPage(1);
  }, []);

  const hasActiveFilters =
    examFilter !== 'All' ||
    typeFilter !== 'All' ||
    levelFilter !== 'All' ||
    freeOnly ||
    search.trim() !== '';

  const trendingCount = useMemo(
    () => quizSeries.filter(q => q.isTrending).length,
    [],
  );

  return {
    // State
    examFilter,  setExamFilter:  setExamFilterAndReset,
    typeFilter,  setTypeFilter:  setTypeFilterAndReset,
    levelFilter, setLevelFilter: setLevelFilterAndReset,
    freeOnly,    toggleFreeOnly,
    sortBy,      setSortBy,
    search,      setSearch: setSearchAndReset,
    page,        setPage,

    // Derived
    filtered,
    paginated,
    totalPages,
    totalCount: filtered.length,
    typeCounts,
    trendingCount,
    hasActiveFilters,
    resetFilters,
  };
}