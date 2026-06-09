// PATH: components/sections/quiz/Quiz.tsx
'use client';

import { useCallback } from 'react';
import { Search, Users } from 'lucide-react';
import QuizCard from '../quiz/cards/QuizCard';
import QuizPagination from '../quiz/pagination/QuizPagination';
import QuizEmptyState from './QuizEmptyState';
import QuizSEOContent from './seo/QuizSEOContent';
import { useQuizFilters } from '../quiz/hooks/useQuizFilters';

export default function Quiz() {
  const {
    selectedExams,
    toggleExam,
    selectedTypes,
    toggleType,
    selectedLevels,
    toggleLevel,
    freeOnly,
    toggleFreeOnly,
    sortBy,
    setSortBy,
    search,
    setSearch,
    page,
    setPage,
    paginated,
    totalPages,
    totalCount,
    hasActiveFilters,
    resetFilters,
  } = useQuizFilters();

  const handlePageChange = useCallback((p: number) => {
    setPage(p);
    // Scroll to grid top smoothly
    document.getElementById('quiz-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [setPage]);

  const handlePopularCategory = useCallback((cat: 'sbi' | 'ibps' | 'quant' | 'reasoning' | 'english' | 'current' | 'banking') => {
    resetFilters();
    if (cat === 'sbi') {
      toggleExam('SBI-PO');
    } else if (cat === 'ibps') {
      toggleExam('IBPS-PO');
    } else if (cat === 'quant') {
      setSearch('Quantitative Aptitude');
    } else if (cat === 'reasoning') {
      setSearch('Reasoning Ability');
    } else if (cat === 'english') {
      setSearch('English Language');
    } else if (cat === 'current') {
      setSearch('Current Affairs');
    } else if (cat === 'banking') {
      setSearch('Banking Awareness');
    }
    // Scroll to top
    document.getElementById('quiz-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [resetFilters, toggleExam, setSearch]);

  return (
    <div className="bg-[var(--color-off-white)] min-h-screen font-sans" id="test-series">
      
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
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search quizzes by name or topic..."
                className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-gray-50)] text-sm rounded-xl border border-[var(--color-gray-200)] text-[var(--color-navy)] placeholder-[var(--color-gray-400)] transition-all focus:bg-white focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/10 focus-visible:outline-none"
              />
            </div>

            {/* Total Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-[var(--color-blue)] whitespace-nowrap">
                {totalCount} Practice Quizzes Available
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Grid Content ── */}
      <div className="container-custom py-8" id="quiz-grid-top">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Left Column: Cards Grid + Results Header + Pagination ── */}
          <div className="flex-grow lg:w-3/4 order-2 lg:order-1 flex flex-col gap-6">
            
            {/* Results meta row */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="text-xs text-[var(--color-gray-400)]">
                Showing{' '}
                <span className="font-bold text-[var(--color-navy)]">{paginated.length}</span>{' '}
                of{' '}
                <span className="font-bold text-[var(--color-navy)]">{totalCount}</span>{' '}
                quiz series
                {selectedExams.length > 0 && (
                  <> in{' '}
                    <span className="font-semibold text-[var(--color-blue)]">
                      {selectedExams.join(', ').replace('SBI-PO', 'SBI PO').replace('IBPS-PO', 'IBPS PO')}
                    </span>
                  </>
                )}
                {search.trim() && (
                  <> matching &quot;
                    <span className="font-semibold text-[var(--color-blue)]">{search}</span>
                    &quot;
                  </>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Option Dropdown */}
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-gray-600)]">
                  <span>Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-white border border-slate-200 rounded px-2 py-1 focus:outline-none focus:border-[var(--color-blue)] text-slate-800"
                  >
                    <option value="most-attempted">Most Attempted</option>
                    <option value="highest-rated">Highest Rated</option>
                    <option value="newest">Newest</option>
                    <option value="free-preview">Free Preview</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid of Quiz Cards */}
            {paginated.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {paginated.map(quiz => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </div>

                <QuizPagination
                  page={page}
                  totalPages={totalPages}
                  total={totalCount}
                  onPage={handlePageChange}
                />
              </>
            ) : (
              <QuizEmptyState onReset={resetFilters} />
            )}
          </div>

          {/* ── Right Column: Sidebar filters & Promo Subscription ── */}
          <aside className="w-full lg:w-1/4 lg:max-w-[300px] flex-shrink-0 order-1 lg:order-2 flex flex-col gap-6 lg:sticky lg:top-[160px] self-start">
            
            {/* Filter Checklist Box */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-5">
              
              {/* Reset link */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-right text-xs font-bold text-[var(--color-blue)] hover:underline self-end"
                >
                  Clear Filters
                </button>
              )}

              {/* 1. Exam Category checklist */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide mb-2.5">
                  Exam Category
                </h4>
                <div className="space-y-2">
                  {[
                    { key: 'SBI-PO', label: 'SBI PO' },
                    { key: 'IBPS-PO', label: 'IBPS PO' }
                  ].map(exam => (
                    <label key={exam.key} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedExams.includes(exam.key)}
                        onChange={() => toggleExam(exam.key)}
                        className="w-4 h-4 text-[var(--color-blue)] bg-white border-slate-350 rounded focus:ring-[var(--color-blue)] focus:ring-2"
                      />
                      <span>{exam.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Quiz Type checklist */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide mb-2.5">
                  Quiz Type
                </h4>
                <div className="space-y-2">
                  {[
                    { key: 'Full Mock', label: 'Full Mock' },
                    { key: 'Sectional', label: 'Sectional Tests' },
                    { key: 'Topic Wise', label: 'Topic-wise Tests' }
                  ].map(type => (
                    <label key={type.key} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type.key)}
                        onChange={() => toggleType(type.key)}
                        className="w-4 h-4 text-[var(--color-blue)] bg-white border-slate-350 rounded focus:ring-[var(--color-blue)] focus:ring-2"
                      />
                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Difficulty checklist */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide mb-2.5">
                  Difficulty Level
                </h4>
                <div className="space-y-2">
                  {['Easy', 'Medium', 'Hard'].map(level => (
                    <label key={level} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={() => toggleLevel(level)}
                        className="w-4 h-4 text-[var(--color-blue)] bg-white border-slate-350 rounded focus:ring-[var(--color-blue)] focus:ring-2"
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 4. Free Only toggle */}
              <div className="border-t border-slate-100 pt-4">
                <label className="flex items-center gap-2.5 text-xs font-extrabold text-slate-850 hover:text-slate-900 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={freeOnly}
                    onChange={toggleFreeOnly}
                    className="w-4 h-4 text-[var(--color-blue)] bg-white border-slate-350 rounded focus:ring-[var(--color-blue)] focus:ring-2"
                  />
                  <span>Free Quizzes Only</span>
                </label>
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
      <QuizSEOContent onSelectCategory={handlePopularCategory} />
    </div>
  );
}