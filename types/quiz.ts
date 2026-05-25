
// PATH: types/quiz.ts
// ─────────────────────────────────────────
// PrepBanker — Quiz Feature Types
// ─────────────────────────────────────────

export type ExamType       = 'SBI-PO' | 'IBPS-PO';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';
export type TestType        = 'Full Mock' | 'Prelims' | 'Mains' | 'Sectional' | 'Topic Wise';
export type QuizFormat      = 'MCQ' | 'Fill in the Blank' | 'Match the Following' | 'True/False';

export type QuizCategory =
  | 'Quantitative Aptitude'
  | 'Reasoning Ability'
  | 'English Language'
  | 'General Awareness'
  | 'Banking Awareness'
  | 'Computer Aptitude'
  | 'Data Interpretation'
  | 'Current Affairs';

export type FAQCategory =
  | 'General'
  | 'Mock Tests'
  | 'SBI-PO'
  | 'IBPS-PO'
  | 'Live Tests'
  | 'Current Affairs'
  | 'Preparation Guidance';

// ─── Filter / Sort ────────────────────────
export type ExamFilter  = 'All' | ExamType;
export type TypeFilter  = 'All' | TestType;
export type LevelFilter = 'All' | DifficultyLevel;
export type SortOption  = 'most-attempted' | 'highest-rated' | 'most-free' | 'newest';

// ─── Quiz Series ──────────────────────────
export interface QuizSeries {
  id: string;
  title: string;
  description: string;
  category: QuizCategory;
  exam: ExamType | 'Both';
  type: TestType;
  totalQuestions: number;
  duration: number;           // minutes
  difficulty: DifficultyLevel;
  freeQuestions: number;
  totalAttempts: number;
  rating: number;
  year: string;
  tags: string[];
  languages: string[];
  isNew?: boolean;
  isTrending?: boolean;
  isPremium?: boolean;
  subject?: string;
  passScore?: number;
  format: QuizFormat;
}

// ─── Category Metadata ────────────────────
export interface QuizCategoryMeta {
  label: QuizCategory;
  shortLabel: string;
  icon: string;
  description: string;
  totalQuizzes: number;
  color: string;
  textColor: string;
  borderColor: string;
  weightage: { prelims: string; mains: string };
  topTopics: string[];
}

// ─── Platform Stats ───────────────────────
export interface QuizPlatformStats {
  totalQuizSeries: number;
  totalQuestions: number;
  freeQuizSeries: number;
  totalCategories: number;
  avgRating: string;
  totalAttempts: number;
  trendingCount: number;
  newThisWeek: number;
}

// ─── FAQ ─────────────────────────────────
export interface QuizFAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

// ─── Daily Quiz ───────────────────────────
export interface DailyQuiz {
  id: string;
  date: string;
  title: string;
  category: QuizCategory;
  totalQuestions: number;
  duration: number;
  difficulty: DifficultyLevel;
  totalAttempts: number;
  avgScore: number;
  exam: ExamType | 'Both';
  isCompleted?: boolean;
}