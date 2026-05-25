// PATH: lib/data/quiz/quizStats.ts
import type { QuizPlatformStats } from '@/types/quiz';
import { quizSeries } from './quizSeries';

function deriveStats(): QuizPlatformStats {
  const totalAttempts = quizSeries.reduce((sum, q) => sum + q.totalAttempts, 0);
  const totalQuestions = quizSeries.reduce((sum, q) => sum + q.totalQuestions, 0);
  const freeQuizSeries = quizSeries.filter(q => q.freeQuestions > 0).length;
  const trendingCount = quizSeries.filter(q => q.isTrending).length;
  const newThisWeek = quizSeries.filter(q => q.isNew).length;
  const uniqueCategories = new Set(quizSeries.map(q => q.category)).size;
  const avgRating = (
    quizSeries.reduce((sum, q) => sum + q.rating, 0) / quizSeries.length
  ).toFixed(1);

  return {
    totalQuizSeries: quizSeries.length,
    totalQuestions,
    freeQuizSeries,
    totalCategories: uniqueCategories,
    avgRating,
    totalAttempts,
    trendingCount,
    newThisWeek,
  };
}

export const quizStats: QuizPlatformStats = deriveStats();