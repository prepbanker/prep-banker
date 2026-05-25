// PATH: hooks/useLiveTestFilters.ts
// PrepBanker — Filter + Pagination state for Live Tests
// Single responsibility: derive the visible page of tests from tab + page.

'use client';

import { useState, useMemo, useCallback } from 'react';
import { liveTests, PAGE_SIZE } from '@/lib/data/live-tests';
import type { LiveTest, LiveTestTab, PaginationState } from '@/types/live-tests';

function applyTab(tests: LiveTest[], tab: LiveTestTab): LiveTest[] {
  switch (tab) {
    case 'SBI-PO Live':   return tests.filter(t => t.exam === 'SBI-PO');
    case 'IBPS-PO Live':  return tests.filter(t => t.exam === 'IBPS-PO');
    case 'Prelims Tests': return tests.filter(t => t.type === 'Prelims');
    case 'Mains Tests':   return tests.filter(t => t.type === 'Mains');
    case 'Free Tests':    return tests.filter(t => t.isFree);
    default:              return tests;
  }
}

/** Returns the count for a given tab (used in tab pill badges). */
export function tabCount(tab: LiveTestTab): number {
  return applyTab(liveTests, tab).length;
}

interface UseLiveTestFiltersReturn {
  activeTab: LiveTestTab;
  setTab: (tab: LiveTestTab) => void;
  currentPage: number;
  setPage: (page: number) => void;
  visibleTests: LiveTest[];
  pagination: PaginationState;
  filteredTotal: number;
}

export function useLiveTestFilters(): UseLiveTestFiltersReturn {
  const [activeTab, setActiveTab] = useState<LiveTestTab>('All Live Tests');
  const [currentPage, setCurrentPage] = useState(1);

  const setTab = useCallback((tab: LiveTestTab) => {
    setActiveTab(tab);
    setCurrentPage(1); // reset to page 1 on tab change
  }, []);

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to grid top smoothly
    if (typeof window !== 'undefined') {
      const el = document.getElementById('live-tests-grid');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const filtered = useMemo(() => applyTab(liveTests, activeTab), [activeTab]);
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
    activeTab,
    setTab,
    currentPage,
    setPage,
    visibleTests,
    pagination,
    filteredTotal: totalItems,
  };
}