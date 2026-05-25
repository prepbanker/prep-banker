// PATH: components/live-tests/LiveTests.tsx
// Orchestrator — owns no markup of its own.
// Wires hooks → sub-components. Keep this thin.

'use client';

import { useMemo } from 'react';
import { Users } from 'lucide-react';
import { liveTests } from '@/lib/data/live-tests';
import { useLiveTimers } from '@/components/sections/live-tests/hooks/useLiveTimers';
import { useLiveTestFilters } from '@/components/sections/live-tests/hooks/useLiveTestFilters';
import LiveTestsFilters from './filters/LiveTestsFilters';
import LiveTestsGrid from './grid/LiveTestsGrid';
import Pagination from './pagination/pagination';

// Extract stable ID list once (outside component — stable reference forever).
const ALL_IDS = liveTests.map(t => t.id);

export default function LiveTests() {
  const timers = useLiveTimers(ALL_IDS);

  const {
    activeTab, setTab,
    currentPage, setPage,
    visibleTests, pagination, filteredTotal,
  } = useLiveTestFilters();

  // Count how many visible tests are still "live" (not expired).
  const liveCount = useMemo(
    () => visibleTests.filter(t => (timers[t.id] ?? 0) > 0).length,
    [visibleTests, timers],
  );

  return (
    <div className="bg-white min-h-screen">

      {/* ── Sticky filter bar ── */}
      <LiveTestsFilters
        activeTab={activeTab}
        onTabChange={setTab}
        liveCount={liveCount}
      />

      {/* ── Content ── */}
      <div className="container-custom py-8">

        {/* Results meta row */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-[var(--color-gray-400)]">
            Showing{' '}
            <span className="font-bold text-[var(--color-navy)]">{visibleTests.length}</span>{' '}
            of{' '}
            <span className="font-bold text-[var(--color-navy)]">{filteredTotal}</span>{' '}
            test{filteredTotal !== 1 ? 's' : ''}
            {activeTab !== 'All Live Tests' && (
              <> in{' '}
                <span className="font-semibold text-[var(--color-blue)]">{activeTab}</span>
              </>
            )}
          </p>

          <span className="text-xs text-[var(--color-gray-400)] flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" aria-hidden />
            Thousands competing live
          </span>
        </div>

        {/* Card grid */}
        <LiveTestsGrid
          tests={visibleTests}
          timers={timers}
          filteredTotal={filteredTotal}
          activeTab={activeTab}
          onResetTab={() => setTab('All Live Tests')}
        />

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}