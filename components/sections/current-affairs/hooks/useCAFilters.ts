// PATH: components/sections/current-affairs/hooks/useCAFilters.ts
// ─────────────────────────────────────────
// Isolated state logic — filter, search, pagination
// No UI imports; pure logic hook
// ─────────────────────────────────────────
import { useState, useMemo, useCallback, useEffect } from 'react';
import type { CAFilterState, CACategory, CurrentAffair } from '../../../../types/current-affairs';
import { CA_ARTICLES } from '../../../../lib/data/current-affairs/articles';

const PER_PAGE = 9;

interface UseCAFiltersReturn {
  // state
  filters:        CAFilterState;
  // derived
  featured:       CurrentAffair[];
  paginated:      CurrentAffair[];
  totalRegular:   number;
  totalPages:     number;
  // actions
  setCategory:    (cat: CACategory) => void;
  setSearch:      (q: string) => void;
  setPage:        (p: number) => void;
  clearSearch:    () => void;
}

export function useCAFilters(): UseCAFiltersReturn {
  const [filters, setFilters] = useState<CAFilterState>({
    category: 'All Updates',
    search:   '',
    page:     1,
  });

  // Reset page whenever category or search changes
  const setCategory = useCallback((cat: CACategory) => {
    setFilters(f => ({ ...f, category: cat, page: 1 }));
  }, []);

  const setSearch = useCallback((q: string) => {
    setFilters(f => ({ ...f, search: q, page: 1 }));
  }, []);

  const setPage = useCallback((p: number) => {
    setFilters(f => ({ ...f, page: p }));
  }, []);

  const clearSearch = useCallback(() => setSearch(''), [setSearch]);

  // All filtered articles (featured + regular combined)
  const allFiltered = useMemo<CurrentAffair[]>(() => {
    const { category, search } = filters;
    const q = search.trim().toLowerCase();

    return CA_ARTICLES.filter(ca => {
      const matchesCat =
        category === 'All Updates' || ca.category === category;
      const matchesSearch =
        !q ||
        ca.title.toLowerCase().includes(q) ||
        ca.summary.toLowerCase().includes(q) ||
        ca.category.toLowerCase().includes(q) ||
        (ca.tags ?? []).some(t => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [filters.category, filters.search]);

  // Featured (always shown at top, not paginated)
  const featured = useMemo(
    () => allFiltered.filter(ca => ca.isFeatured),
    [allFiltered],
  );

  // Regular articles — paginated
  const regular = useMemo(
    () => allFiltered.filter(ca => !ca.isFeatured),
    [allFiltered],
  );

  const totalRegular = regular.length;
  const totalPages   = Math.ceil(totalRegular / PER_PAGE);

  const paginated = useMemo(() => {
    const start = (filters.page - 1) * PER_PAGE;
    return regular.slice(start, start + PER_PAGE);
  }, [regular, filters.page]);

  // Guard: if current page exceeds new totalPages (e.g., after search), reset to 1
  useEffect(() => {
    if (filters.page > totalPages && totalPages > 0) {
      setFilters(f => ({ ...f, page: 1 }));
    }
  }, [totalPages, filters.page]);

  return {
    filters,
    featured,
    paginated,
    totalRegular,
    totalPages,
    setCategory,
    setSearch,
    setPage,
    clearSearch,
  };
}