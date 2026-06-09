// PATH: components/sections/live-tests/hooks/useLiveTestFilters.ts
// PrepBanker — Filter + Pagination state for Live Tests
// Single responsibility: derive the visible page of tests from checkboxes + search + page.

'use client';

import { useState, useMemo, useCallback } from 'react';
import { liveTests, PAGE_SIZE } from '@/lib/data/live-tests';
import type { LiveTest, PaginationState } from '@/types/live-tests';

// Mapping from UI filter category names to exam values in mock data
export const CATEGORY_EXAM_MAPPING: Record<string, string[]> = {
  'SBI PO': ['SBI-PO'],
  'IBPS PO': ['IBPS-PO'],
};

export const CATEGORIES_LIST = [
  'SBI PO',
  'IBPS PO',
];

interface UseLiveTestFiltersReturn {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  toggleCategory: (category: string) => void;
  clearCategories: () => void;
  categorySearchQuery: string;
  setCategorySearchQuery: (query: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentPage: number;
  setPage: (page: number) => void;
  visibleTests: LiveTest[];
  pagination: PaginationState;
  filteredTotal: number;
}

export function useLiveTestFilters(): UseLiveTestFiltersReturn {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categorySearchQuery, setCategorySearchQuery] = useState<string>('');
  const [searchQuery, setSearchQueryState] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories(prev => {
      const next = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      return next;
    });
    setCurrentPage(1); // reset to page 1
  }, []);

  const clearCategories = useCallback(() => {
    setSelectedCategories([]);
    setCurrentPage(1);
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setSearchQueryState(query);
    setCurrentPage(1); // reset to page 1
  }, []);

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to grid top smoothly
    if (typeof window !== 'undefined') {
      const el = document.getElementById('live-tests-grid');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Filter helper matching search queries and categories
  const filtered = useMemo(() => {
    return liveTests.filter(test => {
      // 1. Search Query Filter (by name)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = test.title.toLowerCase().includes(query);
        if (!matchesTitle) return false;
      }

      // 2. Multi-category checkboxes filter
      if (selectedCategories.length > 0) {
        // Collect all allowed exams based on selected categories
        const allowedExams = selectedCategories.flatMap(cat => CATEGORY_EXAM_MAPPING[cat] || []);
        if (!allowedExams.includes(test.exam)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategories, searchQuery]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

  const visibleTests = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const pagination: PaginationState = {
    currentPage,
    totalPages,
    totalItems,
    pageSize: PAGE_SIZE,
  };

  return {
    selectedCategories,
    setSelectedCategories,
    toggleCategory,
    clearCategories,
    categorySearchQuery,
    setCategorySearchQuery,
    searchQuery,
    setSearchQuery,
    currentPage,
    setPage,
    visibleTests,
    pagination,
    filteredTotal: totalItems,
  };
}