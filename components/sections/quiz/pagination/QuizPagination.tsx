// PATH: components/sections/quiz/pagination/QuizPagination.tsx
'use client';

import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  page: number;
  totalPages: number;
  total: number;
  onPage: (p: number) => void;
}

function getPageNumbers(current: number, total: number): (number | '…')[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | '…')[] = [1];

  if (current > 3) pages.push('…');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }
  if (current < total - 2) pages.push('…');
  pages.push(total);

  return pages;
}

function QuizPagination({ page, totalPages, onPage }: Props) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1.5 mt-10 py-6 border-t border-slate-100"
    >
      {/* Previous Page */}
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 border border-slate-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 active:scale-[0.98] transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 mx-2">
        {pages.map((p, i) =>
          p === '…' ? (
            <span
              key={`ellipsis-${i}`}
              className="w-8.5 h-8.5 flex items-center justify-center text-xs text-slate-400 select-none"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPage(p as number)}
              aria-current={page === p ? 'page' : undefined}
              className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center text-xs font-extrabold transition-all active:scale-95 ${
                page === p
                  ? 'bg-[#FBBF24] text-[#07102A] shadow-sm font-black'
                  : 'border border-slate-200 text-slate-500 hover:border-slate-350 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next Page */}
      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 border border-slate-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 active:scale-[0.98] transition-all"
        aria-label="Next page"
      >
        Next
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}

export default memo(QuizPagination);