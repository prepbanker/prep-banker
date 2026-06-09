// PATH: components/sections/live-tests/filters/LiveTestsFilters.tsx
'use client';

import { Search, X, Radio } from 'lucide-react';

interface Props {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  liveCount: number;
}

export default function LiveTestsFilters({
  searchQuery,
  onSearchChange,
  liveCount,
}: Props) {
  return (
    <div
      className="sticky top-[64px] z-30 bg-white border-b border-[var(--color-gray-100)] py-4 transition-all duration-200"
      style={{ boxShadow: '0 4px 15px rgba(13,27,62,0.04)' }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* ── Left: Search Input ── */}
          <div className="relative flex-grow max-w-xl">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4.5 w-4.5 text-[var(--color-gray-400)]" aria-hidden />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              placeholder="Search tests by name..."
              className="w-full pl-10 pr-10 py-2.5 bg-[var(--color-gray-50)] text-sm rounded-xl border border-[var(--color-gray-200)] text-[var(--color-navy)] placeholder-[var(--color-gray-400)] transition-all duration-200 focus:bg-white focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/10 focus-visible:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-gray-400)] hover:text-[var(--color-navy)] transition-colors duration-150"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* ── Right: Live counter badge ── */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[11px] font-bold text-red-600 whitespace-nowrap">
              <span className="lf-live-dot" aria-hidden />
              {liveCount} Active Live Mock Tests
            </span>
          </div>

        </div>
      </div>

      <style>{`
        .lf-live-dot {
          display: inline-block;
          width: 7px; height: 7px;
          background: #ef4444;
          border-radius: 50%;
          animation: lf-pulse 1.5s ease-in-out infinite;
        }
        @keyframes lf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .5; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}