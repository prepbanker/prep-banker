// PATH: components/sections/blogs/sidebar/CategoriesSidebar.tsx
// ─────────────────────────────────────────
// PrepBanker — Sidebar: Popular Categories
// ─────────────────────────────────────────
import Link from 'next/link';
import { Tag, ChevronRight } from 'lucide-react';
import type { BlogSidebarData } from '@/types/blogs';

interface Props {
  categories: BlogSidebarData['popularCategories'];
}

// Colour per category
const CAT_COLORS: Record<string, string> = {
  'Banking Awareness':  'var(--color-blue)',
  'Current Affairs':    'var(--color-gold-bright)',
  'Exam Strategy':      'var(--color-success)',
  'Study Tips':         '#8B5CF6',
  'RBI & Economy':      'var(--color-danger)',
  'Government Schemes': '#F97316',
  'Interview Tips':     '#10B981',
  'Success Stories':    '#EC4899',
};

export default function CategoriesSidebar({ categories }: Props) {
  const maxCount = Math.max(...categories.map(c => c.count));

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 px-5 py-4"
        style={{ borderBottom: '1px solid var(--color-gray-100)' }}
      >
        <Tag className="w-4 h-4" style={{ color: 'var(--color-blue)' }} aria-hidden />
        <h3
          className="font-bold text-sm"
          style={{ color: 'var(--color-navy)', fontFamily: 'var(--font-display)' }}
        >
          Browse Categories
        </h3>
      </div>

      {/* List */}
      <ul className="px-4 py-3 flex flex-col gap-1">
        {categories.map(({ category, count }) => {
          const color = CAT_COLORS[category] ?? 'var(--color-blue)';
          const pct = Math.round((count / maxCount) * 100);
          return (
            <li key={category}>
              <Link
                href={`/blogs?category=${encodeURIComponent(category)}`}
                className="group flex items-center gap-3 py-2 px-3 rounded-xl transition-colors hover:bg-[var(--color-sky)]"
                style={{ textDecoration: 'none' }}
              >
                {/* Dot */}
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: color }}
                />
                {/* Category name + bar */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className="text-xs font-semibold truncate group-hover:text-[var(--color-blue)] transition-colors"
                      style={{ color: 'var(--color-navy)' }}
                    >
                      {category}
                    </span>
                    <span
                      className="text-[10px] font-bold flex-shrink-0"
                      style={{ color: 'var(--color-gray-400)' }}
                    >
                      {count}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--color-gray-100)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, background: color, opacity: 0.7 }}
                    />
                  </div>
                </div>
                <ChevronRight
                  className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-blue)' }}
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}