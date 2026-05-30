'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentPage: number;
  totalPages:  number;
}

function BlogPaginationInner({ currentPage, totalPages }: Props) {
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

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-1.5 mt-10"
    >
      {/* Prev button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          border: '1px solid var(--color-gray-200)',
          background: '#fff',
          color: 'var(--color-gray-600)',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={e => { if (currentPage !== 1) (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-blue)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-blue)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-gray-200)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-gray-600)'; }}
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        <span>Prev</span>
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((p, i) =>
          p === '...' ? (
            <span
              key={`ellipsis-${i}`}
              className="w-9 h-9 flex items-center justify-center text-sm"
              style={{ color: 'var(--color-gray-400)' }}
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => goToPage(p as number)}
              aria-label={`Page ${p}`}
              aria-current={p === currentPage ? 'page' : undefined}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-all focus:outline-none"
              style={
                p === currentPage
                  ? {
                      background: 'var(--color-blue)',
                      color: '#fff',
                      border: '1px solid var(--color-blue)',
                      cursor: 'default',
                      boxShadow: '0 2px 8px rgba(27,110,181,0.25)',
                    }
                  : {
                      background: '#fff',
                      color: 'var(--color-navy)',
                      border: '1px solid var(--color-gray-200)',
                      cursor: 'pointer',
                    }
              }
              onMouseEnter={e => { if (p !== currentPage) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-blue)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-blue)'; } }}
              onMouseLeave={e => { if (p !== currentPage) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-gray-200)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-navy)'; } }}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          border: '1px solid var(--color-gray-200)',
          background: '#fff',
          color: 'var(--color-gray-600)',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={e => { if (currentPage !== totalPages) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-blue)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-blue)'; } }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-gray-200)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-gray-600)'; }}
      >
        <span>Next</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}

export default function BlogPagination({ currentPage, totalPages }: Props) {
  return (
    <Suspense fallback={null}>
      <BlogPaginationInner currentPage={currentPage} totalPages={totalPages} />
    </Suspense>
  );
}