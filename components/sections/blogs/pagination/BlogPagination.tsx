// PATH: components/sections/blogs/pagination/BlogPagination.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Pagination
// ─────────────────────────────────────────
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function BlogPagination({ currentPage, totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`/blogs?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Build page numbers with ellipsis
  const getPageNumbers = (): (number | '...')[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  const btnBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    height: 38,
    borderRadius: 10,
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    border: '1px solid var(--color-gray-100)',
    background: '#fff',
    color: 'var(--color-gray-600)',
    transition: 'var(--transition)',
  };

  const activeStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, var(--color-blue), var(--color-navy-light))',
    color: '#fff',
    border: 'none',
    boxShadow: '0 4px 14px rgba(27,110,181,0.3)',
  };

  const disabledStyle: React.CSSProperties = {
    opacity: 0.35,
    cursor: 'not-allowed',
  };

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-2 mt-10"
    >
      {/* Prev */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ ...btnBase, ...(currentPage === 1 ? disabledStyle : {}) }}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} style={{ ...btnBase, border: 'none', background: 'transparent', cursor: 'default' }}>
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => goToPage(p as number)}
            aria-label={`Go to page ${p}`}
            aria-current={p === currentPage ? 'page' : undefined}
            style={{ ...btnBase, ...(p === currentPage ? activeStyle : {}) }}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ ...btnBase, ...(currentPage === totalPages ? disabledStyle : {}) }}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}