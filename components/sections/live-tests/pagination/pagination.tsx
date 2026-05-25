// PATH: components/live-tests/pagination/Pagination.tsx
// Generic, reusable pagination bar.
// No awareness of what it is paginating — receives state + callbacks only.

import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PaginationState } from '@/types/live-tests';

interface Props {
  pagination: PaginationState;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pagination, onPageChange }: Props) {
  const { currentPage, totalPages, totalItems, pageSize } = pagination;

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem   = Math.min(currentPage * pageSize, totalItems);

  // Build page number list with ellipsis
  const pages = buildPageList(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 pt-6 border-t border-[var(--color-gray-100)]"
    >
      {/* Result count */}
      <p className="text-xs text-[var(--color-gray-400)] order-2 sm:order-1">
        Showing{' '}
        <span className="font-semibold text-[var(--color-navy)]">
          {startItem}–{endItem}
        </span>{' '}
        of{' '}
        <span className="font-semibold text-[var(--color-navy)]">{totalItems}</span>{' '}
        tests
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-1.5 order-1 sm:order-2">

        {/* Previous */}
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden />
        </PaginationButton>

        {/* Page numbers */}
        {pages.map((p, i) =>
          p === '...' ? (
            <span
              key={`ellipsis-${i}`}
              className="w-8 h-8 flex items-center justify-center text-xs text-[var(--color-gray-400)]"
            >
              …
            </span>
          ) : (
            <PaginationButton
              key={p}
              onClick={() => onPageChange(p as number)}
              disabled={false}
              active={p === currentPage}
              aria-label={`Page ${p}`}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </PaginationButton>
          ),
        )}

        {/* Next */}
        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" aria-hidden />
        </PaginationButton>
      </div>
    </nav>
  );
}

// ─── PaginationButton ─────────────────────────────────────────
function PaginationButton({
  children,
  onClick,
  disabled,
  active,
  ...rest
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  active?: boolean;
  [key: string]: unknown;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold
        transition-all duration-150 select-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)]
        ${disabled
          ? 'opacity-40 cursor-not-allowed bg-[var(--color-gray-50)] text-[var(--color-gray-400)]'
          : active
          ? 'text-white shadow-sm'
          : 'border border-[var(--color-gray-200)] text-[var(--color-gray-600)] hover:border-[var(--color-gray-300)] hover:text-[var(--color-navy)] hover:bg-[var(--color-gray-50)]'
        }
      `}
      style={active ? {
        background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)',
      } : {}}
      {...rest}
    >
      {children}
    </button>
  );
}

// ─── Page list builder ────────────────────────────────────────
function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | '...')[] = [1];

  if (current > 3) pages.push('...');
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }
  if (current < total - 2) pages.push('...');
  pages.push(total);

  return pages;
}