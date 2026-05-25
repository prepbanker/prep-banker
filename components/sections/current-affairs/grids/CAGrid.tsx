// PATH: components/sections/current-affairs/grids/CAGrid.tsx
'use client';

import { useCallback, useState } from 'react';
import { Search, Star, Newspaper } from 'lucide-react';
import type { CurrentAffair, CACategory } from '../../../../types/current-affairs';
import CACard       from '../cards/CACard';
import CAModal      from '../modals/CAModal';
import CAPagination from '../paginations/CAPagination';

interface CAGridProps {
  featured:       CurrentAffair[];
  paginated:      CurrentAffair[];
  totalRegular:   number;
  totalPages:     number;
  page:           number;
  search:         string;
  activeCategory: CACategory;
  onPage:         (p: number) => void;
  onClearSearch:  () => void;
}

export default function CAGrid({
  featured,
  paginated,
  totalRegular,
  totalPages,
  page,
  search,
  activeCategory,
  onPage,
  onClearSearch,
}: CAGridProps) {
  const [selected, setSelected] = useState<CurrentAffair | null>(null);

  const openModal  = useCallback((ca: CurrentAffair) => setSelected(ca), []);
  const closeModal = useCallback(() => setSelected(null), []);

  const total = featured.length + totalRegular;

  return (
    <>
      <div className="container-custom py-8">

        {/* Results meta + mobile search */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <p className="text-xs text-gray-400">
            Showing{' '}
            <span className="font-bold text-[var(--color-navy)]">{total}</span>{' '}
            result{total !== 1 ? 's' : ''}
            {activeCategory !== 'All Updates' && (
              <>
                {' '}in{' '}
                <span className="font-semibold text-[var(--color-blue)]">{activeCategory}</span>
              </>
            )}
            {totalPages > 1 && (
              <span className="ml-2 text-gray-300">
                (Page {page} of {totalPages})
              </span>
            )}
          </p>
        </div>

        {/* ── Featured section ──────────────────── */}
        {featured.length > 0 && (
          <section className="mb-10" aria-label="Featured updates">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Featured Updates
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map(ca => (
                <CACard key={ca.id} ca={ca} featured onReadMore={() => openModal(ca)} />
              ))}
            </div>
          </section>
        )}

        {/* ── Regular paginated section ─────────── */}
        {paginated.length > 0 && (
          <section aria-label="Latest updates">
            {featured.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="w-4 h-4 text-gray-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Latest Updates
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginated.map(ca => (
                <CACard key={ca.id} ca={ca} onReadMore={() => openModal(ca)} />
              ))}
            </div>
          </section>
        )}

        {/* ── Empty state ───────────────────────── */}
        {total === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
            <Search className="w-10 h-10 text-gray-200" />
            <p className="font-semibold text-gray-400">No updates found</p>
            <p className="text-xs text-gray-400">
              Try a different category or clear your search
            </p>
            {search && (
              <button
                onClick={onClearSearch}
                className="mt-1 text-xs font-semibold text-[var(--color-blue)] hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}

        {/* ── Pagination ────────────────────────── */}
        <CAPagination page={page} totalPages={totalPages} onPage={onPage} />
      </div>

      {/* ── Centered modal ────────────────────── */}
      {selected && <CAModal item={selected} onClose={closeModal} />}
    </>
  );
}