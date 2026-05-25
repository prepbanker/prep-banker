// PATH: components/live-tests/grid/LiveTestsGrid.tsx
// Pure layout component — renders the card grid or an empty state.
// Receives already-filtered, already-paginated tests.

import { Radio } from 'lucide-react';
import LiveTestCard from '@/components/sections/live-tests/cards/LiveTestCard';
import type { LiveTest, LiveTestTab, TimersMap } from '@/types/live-tests';

interface Props {
  tests: LiveTest[];
  timers: TimersMap;
  filteredTotal: number;
  activeTab: LiveTestTab;
  onResetTab: () => void;
}

export default function LiveTestsGrid({
  tests,
  timers,
  filteredTotal,
  activeTab,
  onResetTab,
}: Props) {
  if (tests.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
        <Radio className="w-10 h-10 text-[var(--color-gray-200)]" aria-hidden />
        <p className="font-semibold text-[var(--color-gray-400)]">
          No tests in this category
        </p>
        <p className="text-xs text-[var(--color-gray-400)]">
          Check back soon or browse all live tests
        </p>
        <button
          onClick={onResetTab}
          className="mt-1 text-xs font-semibold text-[var(--color-blue)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)] rounded"
        >
          View all tests
        </button>
      </div>
    );
  }

  return (
    <div
      id="live-tests-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      aria-label={`Live tests — ${activeTab}`}
    >
      {tests.map(test => (
        <LiveTestCard
          key={test.id}
          test={test}
          timeLeft={timers[test.id] ?? 0}
        />
      ))}
    </div>
  );
}