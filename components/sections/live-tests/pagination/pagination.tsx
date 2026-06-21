// PATH: components/sections/live-tests/pagination/pagination.tsx
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PaginationState } from '@/types/live-tests';

interface Props {
  pagination: PaginationState;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pagination, onPageChange }: Props) {
  const { currentPage, totalPages } = pagination;

  if (totalPages <= 1) return null;

  // Build page numbers with helper
  const pages = buildPageList(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 mt-12"
    >
      {/* Previous Page */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-650 hover:text-[var(--color-navy)] border border-slate-200 bg-white rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all duration-200 active:scale-[0.98]"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4 flex-shrink-0" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5 mx-1">
        {pages.map((p, i) =>
          p === '...' ? (
            <span
              key={`ellipsis-${i}`}
              className="w-10 h-10 flex items-center justify-center text-xs text-slate-400 select-none"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p as number)}
              aria-current={p === currentPage ? 'page' : undefined}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-200 active:scale-95 border ${
                p === currentPage
                  ? 'bg-[var(--color-navy)] border-[var(--color-navy)] text-white shadow-sm font-extrabold'
                  : 'bg-white border-slate-200 text-slate-650 hover:border-slate-350 hover:text-[var(--color-navy)] hover:bg-slate-50'
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next Page */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-650 hover:text-[var(--color-navy)] border border-slate-200 bg-white rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all duration-200 active:scale-[0.98]"
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4 flex-shrink-0" />
      </button>
    </nav>
  );
}

function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | '...')[] = [1];

  if (current > 3) pages.push('...');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }
  if (current < total - 2) pages.push('...');
  pages.push(total);

  return pages;
}