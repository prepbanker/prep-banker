// PATH: components/sections/quiz/Quiz.tsx
'use client';

import { useCallback } from 'react';
import QuizTypeFilter       from '../quiz/filters/QuizTypeFilter';
import QuizSecondaryFilter  from '../quiz/filters/QuizSecondaryFilter';
import QuizCard             from '../quiz/cards/QuizCard';
import QuizCardSkeleton     from '../quiz/cards/QuizCardSkeleton';
import QuizPagination       from '../quiz/pagination/QuizPagination';
import QuizEmptyState       from './QuizEmptyState';
import { useQuizFilters }   from '../quiz/hooks/useQuizFilters';

// ── Static arrays so they don't re-render ───────────────
const SKELETON_COUNT = 8;

export default function Quiz() {
  const {
    examFilter,   setExamFilter,
    typeFilter,   setTypeFilter,
    levelFilter,  setLevelFilter,
    freeOnly,     toggleFreeOnly,
    sortBy,       setSortBy,
    search,       setSearch,
    page,         setPage,

    paginated,
    totalPages,
    totalCount,
    typeCounts,
    trendingCount,
    hasActiveFilters,
    resetFilters,
  } = useQuizFilters();

  const handlePageChange = useCallback((p: number) => {
    setPage(p);
    // Scroll to grid top smoothly
    document.getElementById('quiz-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [setPage]);

  return (
    <div className="bg-[var(--color-off-white)] min-h-screen" id="test-series">

      {/* ── Sticky type tab bar ───────────────────────────────── */}
      <div className="sticky top-[64px] z-30">
        <QuizTypeFilter
          active={typeFilter}
          onChange={setTypeFilter}
          typeCounts={typeCounts}
          trendingCount={trendingCount}
        />

        {/* ── Secondary filter row ── */}
        <QuizSecondaryFilter
          examFilter={examFilter}
          levelFilter={levelFilter}
          freeOnly={freeOnly}
          sortBy={sortBy}
          search={search}
          totalCount={totalCount}
          hasActive={hasActiveFilters}
          onExam={setExamFilter}
          onLevel={setLevelFilter}
          onFreeOnly={toggleFreeOnly}
          onSort={setSortBy}
          onSearch={setSearch}
          onReset={resetFilters}
        />
      </div>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <div className="container-custom py-8" id="quiz-grid-top">
        {paginated.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
    </div>
  );
}