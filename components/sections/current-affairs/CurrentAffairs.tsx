// PATH: components/sections/current-affairs/CurrentAffairs.tsx
'use client';

import { useCallback, useState } from 'react';
import { Search } from 'lucide-react';
import { useCAFilters } from './hooks/useCAFilters';
import CACard from './cards/CACard';
import CAActionCard from './cards/CAActionCard';
import CAAdditionalSections from './seo/CAAdditionalSections';
import { CA_ARTICLES } from '@/lib/data/current-affairs/articles';
import { CA_QUIZZES } from '@/lib/data/current-affairs/quizzes';
import type { CurrentAffair } from '@/types/current-affairs';

export default function CurrentAffairsModule() {
  const {
    filters,
    paginated,
    totalRegular,
    totalPages,
    setCategory,
    setSearch,
    setPage,
    clearSearch,
  } = useCAFilters();

  const [quizLimit, setQuizLimit] = useState(4);

  // Handler for category triggers from the SEO section
  const handleSEOSelectCategory = useCallback((val: string) => {
    const matchedCategory = [
      'Banking Awareness',
      'RBI Updates',
      'Economy & Finance',
      'Government Schemes',
      'International Affairs',
      'Static GK',
      'Important Days',
      'Awards & Honors',
      'Reports & Indexes'
    ].find(cat => cat.toLowerCase().includes(val.toLowerCase()) || val.toLowerCase().includes(cat.toLowerCase()));

    if (matchedCategory) {
      setCategory(matchedCategory as any);
      setSearch('');
    } else {
      setCategory('All Updates');
      setSearch(val);
    }
    document.getElementById('ca-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [setCategory, setSearch]);

  return (
    <div className="bg-[var(--color-off-white)] min-h-screen font-sans">

      {/* ── Current Affairs Quizzes (Action Cards) ── */}
      <section className="bg-white border-b border-slate-100 py-12" aria-label="Current affairs quizzes">
        <div className="container-custom space-y-6">
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
            Current Affairs Quizzes
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {CA_QUIZZES.slice(0, quizLimit).map(quiz => (
              <CAActionCard key={quiz.id} quiz={quiz} />
            ))}
          </div>

          {quizLimit < CA_QUIZZES.length && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setQuizLimit(prev => prev + 4)}
                className="px-6 py-2.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#07102A] font-extrabold text-xs rounded-lg uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Sticky Top Search & Filter Bar ── */}
      <div
        className="sticky top-[64px] z-30 bg-white border-b border-[var(--color-gray-100)] py-4 transition-all duration-200"
        style={{ boxShadow: '0 4px 15px rgba(13,27,62,0.04)' }}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-grow max-w-xl">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4.5 w-4.5 text-[var(--color-gray-400)]" aria-hidden />
              </span>
              <input
                type="text"
                value={filters.search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search current affairs by title or keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-gray-50)] text-sm rounded-xl border border-[var(--color-gray-200)] text-[var(--color-navy)] placeholder-[var(--color-gray-400)] transition-all focus:bg-white focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/10 focus-visible:outline-none"
              />
            </div>

            {/* Total Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-[var(--color-blue)] whitespace-nowrap">
                {totalRegular} Articles Available
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Grid Content ── */}
      <div className="container-custom py-8" id="ca-grid-top">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Left Column: Cards Grid + Results Header + Load More ── */}
          <div className="flex-grow lg:w-3/4 order-2 lg:order-1 flex flex-col gap-6">
            
            {/* Section Header */}
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Current Affairs Notes
              </h2>
            </div>

            {/* Results meta row */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="text-xs text-[var(--color-gray-400)]">
                Showing{' '}
                <span className="font-bold text-[var(--color-navy)]">{paginated.length}</span>{' '}
                of{' '}
                <span className="font-bold text-[var(--color-navy)]">{totalRegular}</span>{' '}
                articles
                {filters.category !== 'All Updates' && (
                  <> in{' '}
                    <span className="font-semibold text-[var(--color-blue)]">
                      {filters.category}
                    </span>
                  </>
                )}
                {filters.search.trim() && (
                  <> matching &quot;
                    <span className="font-semibold text-[var(--color-blue)]">{filters.search}</span>
                    &quot;
                  </>
                )}
              </div>
            </div>

            {/* Grid of Cards */}
            {paginated.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {paginated.map(art => (
                    <CACard key={art.id} ca={art} />
                  ))}
                </div>

                {filters.page < totalPages && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setPage(filters.page + 1)}
                      className="px-6 py-2.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#07102A] font-extrabold text-xs rounded-lg uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 gap-3 text-center bg-white border border-slate-200 rounded-2xl">
                <Search className="w-10 h-10 text-gray-250" />
                <p className="font-semibold text-gray-500">No updates found</p>
                <p className="text-xs text-gray-450">
                  Try adjusting your search keywords or select another category filter.
                </p>
                {filters.search && (
                  <button
                    onClick={clearSearch}
                    className="mt-1 text-xs font-semibold text-[var(--color-blue)] hover:underline"
                  >
                    Clear search query
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ── Right Column: Sticky Sidebar filters & Promo Subscription ── */}
          <aside className="w-full lg:w-1/4 lg:max-w-[300px] flex-shrink-0 order-1 lg:order-2 flex flex-col gap-6 lg:sticky lg:top-[160px] self-start">
            
            {/* Filter Checklist Box */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-5">
              
              <div>
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide mb-3">
                  Syllabus Categories
                </h4>
                <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
                  {[
                    'All Updates',
                    'Banking Awareness',
                    'RBI Updates',
                    'Economy & Finance',
                    'Government Schemes',
                    'International Affairs',
                    'Static GK',
                    'Important Days',
                    'Awards & Honors',
                    'Reports & Indexes'
                  ].map(cat => {
                    const isChecked = filters.category === cat;
                    const count = cat === 'All Updates' 
                      ? CA_ARTICLES.length 
                      : CA_ARTICLES.filter((a: CurrentAffair) => a.category === cat).length;

                    return (
                      <label key={cat} className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer group">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setCategory(isChecked ? 'All Updates' : cat as any)}
                            className="w-4 h-4 text-[var(--color-blue)] bg-white border-slate-350 rounded focus:ring-[var(--color-blue)] focus:ring-2 cursor-pointer"
                          />
                          <span className={isChecked ? 'text-[var(--color-blue)] font-bold' : ''}>{cat}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold group-hover:text-slate-600 transition-colors">({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Promo Subscription Card */}
            <div className="bg-[#07102A] rounded-xl p-5 text-white relative overflow-hidden border border-slate-800 shadow-md">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-[#FBBF24] text-[#07102A] text-[9px] font-extrabold px-2 py-0.5 rounded-bl uppercase tracking-wide">
                64% OFF
              </div>

              <h4 className="text-xs font-extrabold mt-1 pr-10 text-slate-100 uppercase tracking-wide leading-snug">
                Get access to premium subscription
              </h4>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[11px] text-slate-450 line-through">₹549.00</span>
                <span className="text-lg font-extrabold text-[#FBBF24]">₹199/-</span>
              </div>

              <p className="text-[10px] text-slate-300 mt-2 leading-snug">
                7 Months Validity | Unlock all exams and tests
              </p>

              <a
                href="https://app.prepgrind.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full py-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#07102A] text-xs font-extrabold rounded-lg text-center transition-colors shadow-sm"
              >
                BUY NOW
              </a>
            </div>

          </aside>

        </div>
      </div>

      {/* ── Additional SEO Content Sections ── */}
      <CAAdditionalSections 
        articles={CA_ARTICLES} 
        onSelectCategory={handleSEOSelectCategory} 
      />

    </div>
  );
}