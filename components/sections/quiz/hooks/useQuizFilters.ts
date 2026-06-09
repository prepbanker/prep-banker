// PATH: components/sections/quiz/hooks/useQuizFilters.ts
'use client';

import { useState, useMemo, useCallback } from 'react';
import { quizSeries } from '@/lib/data/quiz';
import type { QuizSeries, SortOption } from '@/types/quiz';

export const ITEMS_PER_PAGE = 12;

interface UseQuizFiltersReturn {
  selectedExams: string[];
  toggleExam: (exam: string) => void;
  selectedTypes: string[];
  toggleType: (type: string) => void;
  selectedLevels: string[];
  toggleLevel: (level: string) => void;
  freeOnly: boolean;
  toggleFreeOnly: () => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  search: string;
  setSearch: (search: string) => void;
  page: number;
  setPage: (page: number) => void;
  filtered: QuizSeries[];
  paginated: QuizSeries[];
  totalPages: number;
  totalCount: number;
  hasActiveFilters: boolean;
  resetFilters: () => void;
}

export function useQuizFilters(): UseQuizFiltersReturn {
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [freeOnly, setFreeOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('most-attempted');
  const [search, setSearchState] = useState('');
  const [page, setPage] = useState(1);

  // Filter and sort logic
  const filtered = useMemo(() => {
    let list = [...quizSeries];

    // 1. Exam Checklist: 'SBI-PO' | 'IBPS-PO'
    if (selectedExams.length > 0) {
      list = list.filter(q => {
        if (q.exam === 'Both') return true;
        return selectedExams.includes(q.exam);
      });
    }

    // 2. Quiz Type Checklist: 'Full Mock' | 'Sectional' | 'Topic Wise' etc
    if (selectedTypes.length > 0) {
      list = list.filter(q => selectedTypes.includes(q.type));
    }

    // 3. Difficulty Level Checklist: 'Easy' | 'Medium' | 'Hard'
    if (selectedLevels.length > 0) {
      list = list.filter(q => selectedLevels.includes(q.difficulty));
    }

    // 4. Free Only
    if (freeOnly) {
      list = list.filter(q => q.freeQuestions > 0);
    }

    // 5. Search Query
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some(tag => tag.toLowerCase().includes(q)) ||
        (s.subject ?? '').toLowerCase().includes(q)
      );
    }

    // Sort order
    list.sort((a, b) => {
      if (sortBy === 'most-attempted') return b.totalAttempts - a.totalAttempts;
      if (sortBy === 'highest-rated')  return b.rating - a.rating;
      if (sortBy === 'newest')         return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return b.freeQuestions - a.freeQuestions;
    });

    return list;
  }, [selectedExams, selectedTypes, selectedLevels, freeOnly, sortBy, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  // Actions
  const toggleExam = useCallback((v: string) => {
    setSelectedExams(prev =>
      prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]
    );
    setPage(1);
  }, []);

  const toggleType = useCallback((v: string) => {
    setSelectedTypes(prev =>
      prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]
    );
    setPage(1);
  }, []);

  const toggleLevel = useCallback((v: string) => {
    setSelectedLevels(prev =>
      prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]
    );
    setPage(1);
  }, []);

  const toggleFreeOnly = useCallback(() => {
    setFreeOnly(prev => !prev);
    setPage(1);
  }, []);

  const setSearch = useCallback((v: string) => {
    setSearchState(v);
    setPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedExams([]);
    setSelectedTypes([]);
    setSelectedLevels([]);
    setFreeOnly(false);
    setSearchState('');
    setPage(1);
  }, []);

  const hasActiveFilters =
    selectedExams.length > 0 ||
    selectedTypes.length > 0 ||
    selectedLevels.length > 0 ||
    freeOnly ||
    search.trim() !== '';

  return {
    selectedExams,
    toggleExam,
    selectedTypes,
    toggleType,
    selectedLevels,
    toggleLevel,
    freeOnly,
    toggleFreeOnly,
    sortBy,
    setSortBy,
    search,
    setSearch,
    page,
    setPage,
    filtered,
    paginated,
    totalPages,
    totalCount: filtered.length,
    hasActiveFilters,
    resetFilters,
  };
}