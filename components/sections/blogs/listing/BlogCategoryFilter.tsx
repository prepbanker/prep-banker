// PATH: components/sections/blogs/listing/BlogCategoryFilter.tsx

'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { BlogCategory } from '@/types/blogs';

const CATEGORIES: Array<BlogCategory | 'All'> = [
  'All',
  'Exam Strategy',
  'Current Affairs',
  'Banking Awareness',
  'Study Tips',
  'RBI & Economy',
  'Government Schemes',
  'Interview Tips',
  'Success Stories',
];

interface Props {
  activeCategory: BlogCategory | 'All';
}

// ── Inner component — uses useSearchParams ─────────────
function BlogCategoryFilterInner({ activeCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (cat: BlogCategory | 'All') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div
      className="flex items-center gap-2 overflow-x-auto scroll-hide pb-1"
      role="tablist"
      aria-label="Blog categories"
    >
      {CATEGORIES.map(cat => {
        const isActive = cat === activeCategory;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleClick(cat)}
            style={{
              padding: '7px 18px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'var(--transition)',
              border: isActive ? 'none' : '1px solid var(--color-gray-100)',
              background: isActive
                ? 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-navy-light) 100%)'
                : '#fff',
              color: isActive ? '#fff' : 'var(--color-gray-600)',
              boxShadow: isActive ? '0 4px 14px rgba(27,110,181,0.3)' : 'none',
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

// ── Fallback skeleton while Suspense resolves ──────────
function CategoryFilterSkeleton() {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scroll-hide pb-1">
      {['All', 'Exam Strategy', 'Current Affairs', 'Study Tips'].map(label => (
        <div
          key={label}
          style={{
            padding: '7px 18px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            background: 'var(--color-gray-100)',
            color: 'transparent',
            userSelect: 'none',
            minWidth: 60,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

// ── Public export — wraps inner component in Suspense ──
export default function BlogCategoryFilter({ activeCategory }: Props) {
  return (
    <Suspense fallback={<CategoryFilterSkeleton />}>
      <BlogCategoryFilterInner activeCategory={activeCategory} />
    </Suspense>
  );
}