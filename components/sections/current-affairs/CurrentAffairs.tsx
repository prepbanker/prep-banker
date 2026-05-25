// PATH: components/sections/current-affairs/CurrentAffairs.tsx
'use client';

import { Search } from 'lucide-react';
import CAFilters from './filters/CAFilters';
import CAGrid    from './grids/CAGrid';
import { useCAFilters } from './hooks/useCAFilters';

export default function CurrentAffairsModule() {
  const {
    filters,
    featured,
    paginated,
    totalRegular,
    totalPages,
    setCategory,
    setSearch,
    setPage,
    clearSearch,
  } = useCAFilters();

  return (
    <div className="bg-white min-h-screen">

      {/* ── Sticky category filter + search ─── */}
      <CAFilters
        activeCategory={filters.category}
        search={filters.search}
        onCategory={setCategory}
        onSearch={setSearch}
        onClearSearch={clearSearch}
      />

      {/* Mobile search (shown below filter bar on small screens) */}
      <div className="md:hidden container-custom pt-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          <input
            value={filters.search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search current affairs…"
            aria-label="Search current affairs"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full
                       bg-gray-50 text-[var(--color-navy)] placeholder:text-gray-400
                       focus:outline-none focus:ring-1 focus:ring-[var(--color-blue)]
                       focus:border-[var(--color-blue)] transition-all"
          />
        </div>
      </div>

      {/* ── Article grids + modal + pagination ─ */}
      <CAGrid
        featured={featured}
        paginated={paginated}
        totalRegular={totalRegular}
        totalPages={totalPages}
        page={filters.page}
        search={filters.search}
        activeCategory={filters.category}
        onPage={setPage}
        onClearSearch={clearSearch}
      />
    </div>
  );
}