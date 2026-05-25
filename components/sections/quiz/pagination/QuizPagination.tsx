// PATH: components/sections/quiz/pagination/QuizPagination.tsx
'use client';

import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ITEMS_PER_PAGE } from '../hooks/useQuizFilters';

interface Props {
  page:       number;
  totalPages: number;
  total:      number;
  onPage:     (p: number) => void;
}

function getPageNumbers(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total];
  if (current >= total - 3) return [1, '…', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '…', current - 1, current, current + 1, '…', total];
}

function QuizPagination({ page, totalPages, total, onPage }: Props) {
  if (totalPages <= 1) return null;

  const start = (page - 1) * ITEMS_PER_PAGE + 1;
  const end   = Math.min(page * ITEMS_PER_PAGE, total);
  const pages = getPageNumbers(page, totalPages);

  return (
    <div className="mt-10 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">

      {/* Range label */}
      <p className="text-xs text-[var(--color-gray-400)] order-2 sm:order-1">
        Showing{' '}
        <span className="font-bold text-[var(--color-navy)]">{start}–{end}</span>
        {' '}of{' '}
        <span className="font-bold text-[var(--color-navy)]">{total}</span>
        {' '}quiz series
      </p>

      {/* Page buttons */}
      <div className="flex items-center gap-1.5 order-1 sm:order-2">

        {/* Prev */}
        <button
          onClick={() => onPage(page - 1)}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] transition-all disabled:opacity-40 disabled:pointer-events-none"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((p, i) =>
          p === '…' ? (
            <span
              key={`ellipsis-${i}`}
              className="w-8 h-8 flex items-center justify-center text-xs text-[var(--color-gray-400)]"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPage(p as number)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold border transition-all duration-200 ${
                page === p
                  ? 'text-white border-transparent'
                  : 'border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]'
              }`}
              style={page === p ? {
                background: 'linear-gradient(135deg, var(--color-blue), var(--color-navy))',
              } : {}}
            >
              {p}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={() => onPage(page + 1)}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] transition-all disabled:opacity-40 disabled:pointer-events-none"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default memo(QuizPagination);