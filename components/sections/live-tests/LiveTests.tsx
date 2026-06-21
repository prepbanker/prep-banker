// PATH: components/sections/live-tests/LiveTests.tsx
// Orchestrator for Live Tests — organizes layouts, hooks, and views.

'use client';

import { useMemo } from 'react';
import { Users } from 'lucide-react';
import { liveTests } from '@/lib/data/live-tests';
import { useLiveTimers } from '@/components/sections/live-tests/hooks/useLiveTimers';
import { useLiveTestFilters } from '@/components/sections/live-tests/hooks/useLiveTestFilters';
import LiveTestsHero from './hero/LiveTestsHero';
import LiveTestsGrid from './grid/LiveTestsGrid';
import Pagination from './pagination/pagination';
import LiveTestsSEOContent from './seo/LiveTestsSEOContent';

// Extract stable ID list once (outside component — stable reference forever).
const ALL_IDS = liveTests.map(t => t.id);

export default function LiveTests() {
  const timers = useLiveTimers(ALL_IDS);

  const {
    selectedCategories,
    setSelectedCategories,
    toggleCategory,
    clearCategories,
    searchQuery,
    setSearchQuery,
    currentPage,
    setPage,
    visibleTests,
    pagination,
    filteredTotal,
  } = useLiveTestFilters();

  // Count how many total live tests are still active/live
  const liveCount = useMemo(
    () => liveTests.filter(t => (timers[t.id] ?? 0) > 0).length,
    [timers],
  );

  // SEO popular categories click handler
  const handleSEOSelectCategory = (category: string) => {
    if (category === 'SBI PO' || category === 'IBPS PO') {
      setSelectedCategories([category]);
      setSearchQuery('');
    } else {
      setSelectedCategories([]);
      // Set name search query for subject-related clicks if they correspond
      if (['Banking', 'Quantitative', 'Reasoning', 'English'].some(term => category.includes(term))) {
        setSearchQuery(category);
      } else {
        setSearchQuery('');
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">

      <LiveTestsHero />

      {/* ── Content Grid ── */}
      <div className="container-custom pt-10 pb-16">

        {/* ── Category Filter Tabs ── */}
        <div className="mb-6 mt-8 flex flex-wrap items-center gap-2.5 pb-2">
          {[
            { id: 'All', label: 'All Tests' },
            { id: 'SBI PO', label: 'SBI PO' },
            { id: 'IBPS PO', label: 'IBPS PO' },
          ].map((tab) => {
            const isActive = tab.id === 'All'
              ? selectedCategories.length === 0
              : selectedCategories.includes(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'All') {
                    clearCategories();
                  } else {
                    setSelectedCategories([tab.id]);
                    setPage(1);
                  }
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border ${isActive
                  ? 'bg-[var(--color-navy)] border-[var(--color-navy)] text-white shadow-sm font-extrabold'
                  : 'bg-white border-slate-200 text-slate-650 hover:border-slate-350 hover:text-[var(--color-navy)] hover:bg-slate-50'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row  gap-8">

          {/* ── Left Column: Cards Grid + Results Count + Pagination ── */}
          <div className="flex-grow lg:w-3/4 order-2 lg:order-1 flex flex-col gap-6 mb-6">

            {/* Results meta row */}
            <div className="flex items-center justify-between pb-1">
              <div className="text-xs text-[var(--color-gray-400)]">
                Showing{' '}
                <span className="font-bold text-[var(--color-navy)]">{visibleTests.length}</span>{' '}
                of{' '}
                <span className="font-bold text-[var(--color-navy)]">{filteredTotal}</span>{' '}
                test{filteredTotal !== 1 ? 's' : ''}
                {selectedCategories.length > 0 && (
                  <> in{' '}
                    <span className="font-semibold text-[var(--color-blue)]">
                      {selectedCategories.join(', ')}
                    </span>
                  </>
                )}
                {searchQuery.trim() && (
                  <> matching &quot;
                    <span className="font-semibold text-[var(--color-blue)]">{searchQuery}</span>
                    &quot;
                  </>
                )}
              </div>

              <span className="text-xs text-[var(--color-gray-400)] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" aria-hidden />
                Thousands competing live
              </span>
            </div>

            {/* Card grid */}
            <LiveTestsGrid
              tests={visibleTests}
              timers={timers}
              filteredTotal={filteredTotal}
              selectedCategory={selectedCategories.join(', ') || 'All'}
              onResetTab={() => {
                clearCategories();
                setSearchQuery('');
              }}
            />

            {/* Pagination */}
            <Pagination
              pagination={pagination}
              onPageChange={setPage}
            />
          </div>

          {/* ── Right Column: Sidebar (Category Checklist & Promo Subscription) ── */}
          <aside className="w-full lg:w-1/4 lg:max-w-[300px] flex-shrink-0 order-1 lg:order-2 flex flex-col gap-6 lg:sticky lg:top-[160px] self-start">



            {/* Promo Subscription Banner */}
            <div className="bg-[#07102A] rounded-xl p-5 text-white relative overflow-hidden border border-slate-800 shadow-md">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-[#FBBF24] text-[#07102A] text-xs font-extrabold px-2 py-0.5 rounded-bl uppercase tracking-wide">
                64% OFF
              </div>

              <h4 className="text-xs font-extrabold mt-1 pr-10 text-slate-100 uppercase tracking-wide leading-snug">
                Get access to premium subscription
              </h4>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xs text-slate-450 line-through">₹549.00</span>
                <span className="text-lg font-extrabold text-[#FBBF24]">₹199/-</span>
              </div>

              <p className="text-xs text-slate-300 mt-2 leading-snug">
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

      {/* ── SEO content sections (Why, Benefits, How, Tips, Categories, Insights) ── */}
      <LiveTestsSEOContent
        onSelectCategory={handleSEOSelectCategory}
        onSearchQuery={setSearchQuery}
      />
    </div>
  );
}