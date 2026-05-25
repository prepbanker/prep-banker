// PATH: components/sections/current-affairs/paginations/CAPagination.tsx
'use client';

import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CAPaginationProps {
  page:       number;
  totalPages: number;
  onPage:     (p: number) => void;
}

function CAPagination({ page, totalPages, onPage }: CAPaginationProps) {
  if (totalPages <= 1) return null;

  // Build page number array with ellipsis
  function getPages(): (number | '…')[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '…')[] = [1];
    if (page > 3)             pages.push('…');
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push('…');
    pages.push(totalPages);
    return pages;
  }

  const btnBase =
    'inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)]';

  return (
    <nav
      className="flex items-center justify-center gap-1.5 pt-6"
      aria-label="Pagination"
    >
      {/* Prev */}
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={`${btnBase} ${
          page === 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-[var(--color-navy)] border border-gray-200 hover:bg-gray-50'
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      {getPages().map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="w-8 text-center text-xs text-gray-400">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPage(p as number)}
            aria-label={`Page ${p}`}
            aria-current={page === p ? 'page' : undefined}
            className={`${btnBase} ${
              page === p
                ? 'text-white shadow-sm'
                : 'text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[var(--color-navy)]'
            }`}
            style={page === p
              ? { background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)' }
              : {}}
          >
            {p}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className={`${btnBase} ${
          page === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-[var(--color-navy)] border border-gray-200 hover:bg-gray-50'
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

export default memo(CAPagination);