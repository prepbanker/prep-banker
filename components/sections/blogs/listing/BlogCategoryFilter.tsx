'use client';

import { Suspense, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';
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

function BlogCategoryFilterInner({ activeCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (cat: BlogCategory | 'All') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
router.push(`/blogs?${params.toString()}`, { scroll: false });
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium focus:outline-none focus-visible:outline-none"
        style={{
          border: '1px solid var(--color-gray-200)',
          background: '#fff',
          color: 'var(--color-navy)',
          minWidth: 148,
          cursor: 'pointer',
        }}
      >
        <span className="flex-1 text-left text-[0.825rem]">
          {activeCategory === 'All' ? 'All Articles' : activeCategory}
        </span>
        <ChevronDown
          className="w-3.5 h-3.5 transition-transform duration-200"
          style={{
            color: 'var(--color-gray-400)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 z-50 mt-1 rounded-xl overflow-hidden"
          style={{
            minWidth: 180,
            background: '#fff',
            border: '1px solid var(--color-gray-200)',
            boxShadow: '0 4px 16px rgba(13,27,62,0.10)',
          }}
        >
          {CATEGORIES.map(cat => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelect(cat)}
                className="w-full flex items-center justify-between px-3 py-2 text-left focus:outline-none"
                style={{
                  background: isActive ? 'var(--color-sky)' : '#fff',
                  color: isActive ? 'var(--color-blue)' : 'var(--color-navy)',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 600 : 400,
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--color-gray-100)',
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-gray-50)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = '#fff'; }}
              >
                {cat === 'All' ? 'All Articles' : cat}
                {isActive && <Check className="w-3.5 h-3.5" style={{ color: 'var(--color-blue)' }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function BlogCategoryFilter({ activeCategory }: Props) {
  return (
    <Suspense fallback={
      <div className="w-36 h-9 rounded-xl" style={{ background: 'var(--color-gray-100)' }} />
    }>
      <BlogCategoryFilterInner activeCategory={activeCategory} />
    </Suspense>
  );
}