// PATH: types/index.ts
// ─────────────────────────────────────────
// PrepBanker — Shared TypeScript Types
// ─────────────────────────────────────────

export type ExamType = 'SBI-PO' | 'IBPS-PO';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';
export type TestType = 'Full Mock' | 'Prelims' | 'Mains' | 'Sectional' | 'Topic Wise';


// ─── Exam Detail Page Types ───────────────────────────────────────
// ADD these interfaces to types/index.ts

export interface ExamDetailSummaryCard {
  iconKey: string;    // maps to ICON_MAP in ExamDetailsPage
  label: string;
  value: string;
}

export interface ExamDetailDate {
  event: string;
  date: string;
  status: 'upcoming' | 'active' | 'closed';
}

export interface ExamDetailPhaseSection {
  subject: string;
  questions: number;
  marks: number;
  time: string;
}

export interface ExamDetailPhase {
  phase: string;
  badge: string;
  badgeColor: string;
  info: string;
  sections: ExamDetailPhaseSection[];
  notes: string[];
}

export interface ExamDetailSelectionStep {
  step: number;
  title: string;
  desc: string;
  iconKey: string;  // maps to ICON_MAP in ExamDetailsPage
}

export interface ExamDetailEligibility {
  education: string;
  age: string;
  nationality: string;
  attempts: string;
}

export interface ExamDetailSalary {
  basic: string;
  gross: string;
  ctc: string;
  allowances: string[];
  perks: string[];
}

export interface ExamDetailStrategy {
  month: string;
  focus: string;
  tips: string[];
}

export interface ExamDetailCategoryScore {
  general: number;
  obc: number;
  sc: number;
  st: number;
}

export interface ExamDetailCutoff {
  year: string;
  prelims: ExamDetailCategoryScore;
  mains: ExamDetailCategoryScore;
}

export interface ExamDetailFAQ {
  q: string;
  a: string;
}

export interface ExamDetailData {
  id: 'sbi-po' | 'ibps-po';
  name: string;
  shortName: string;
  fullName: string;
  tag: string;
  tagColor: string;
  description: string;
  color: string;
  accentColor: string;
  overview: string;
  tags: string[];
  summaryCards: ExamDetailSummaryCard[];
  dates: ExamDetailDate[];
  examPattern: ExamDetailPhase[];
  syllabus: Record<string, string[]>;
  selectionProcess: ExamDetailSelectionStep[];
  eligibility: ExamDetailEligibility;
  salary: ExamDetailSalary;
  strategy: ExamDetailStrategy[];
  cutoffs: ExamDetailCutoff[];
  examFaqs: ExamDetailFAQ[];
}

// ─── Exam ────────────────────────────────
export interface ExamHighlight {
  id: string;
  name: string;
  shortName: ExamType;
  logo: string;
  color: string;
  vacancy: string;
  salary: string;
  eligibility: string;
  level: DifficultyLevel;
  selectionProcess: string[];
  stages: number;
  mode: string;
  importantDates?: { label: string; date: string }[];
  tags: string[];
  overview: string;
  difficulty: DifficultyLevel;
}

// ─── Test Series ─────────────────────────
export interface TestSeries {
  id: string;
  exam: ExamType;
  title: string;
  totalQuestions: number;
  freeTests: number;
  totalAttempts: number;
  rating: number;
  languages: string[];
  isLive: boolean;
  type: TestType;
  year: string;
  tags: string[];
  difficulty: DifficultyLevel;
}

export interface MockTest extends TestSeries {
  duration: number;      // minutes
  subject?: string;      // topic label for Sectional / Topic Wise
  isPremium?: boolean;   // convenience flag  (freeTests === 0)
  description: string;
}

// ─── Live Test ────────────────────────────
export interface LiveTest {
  id: string;
  title: string;
  exam: ExamType;
  type: TestType;
  duration: number;          // in minutes
  totalQuestions: number;
  totalMarks: number;
  languages: string[];
  difficulty: DifficultyLevel;
  isFree: boolean;
  endsAt: number;            // Unix timestamp
}

// ─── Current Affairs ─────────────────────
export type CACategory =
  | 'All Updates'
  | 'Banking Awareness'
  | 'RBI Updates'
  | 'Economy & Finance'
  | 'Government Schemes'
  | 'International Affairs'
  | 'Static GK'
  | 'Important Days'
  | 'Awards & Honors'
  | 'Reports & Indexes';

export type ImportanceLevel = 'High' | 'Medium' | 'Low';

export interface CurrentAffair {
  id: string;
  title: string;
  summary: string;
  category: CACategory;
  date: string;
  importance: ImportanceLevel;
  examRelevance: ExamType | 'Both';
  quickFacts: string[];
  readTime: number;          // minutes
  isMonthly?: boolean;
  isFeatured?: boolean;
}

// ─── Testimonial ─────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  exam: ExamType;
  role: string;
  stage: 'Prelims' | 'Mains' | 'Interview' | 'Selected';
  rating: number;
  text: string;
  testsAttempted?: number;
  achievementBadge?: string;
}

// ─── FAQ ─────────────────────────────────
export type FAQCategory =
  | 'General'
  | 'SBI-PO'
  | 'IBPS-PO'
  | 'Mock Tests'
  | 'Live Tests'
  | 'Current Affairs'
  | 'Subscription & Access'
  | 'Preparation Guidance';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

// ─── Feature ─────────────────────────────
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  isPremium?: boolean;
}

// ─── Nav ─────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  badge?: string;
}

// ─── Metric ──────────────────────────────
export interface Metric {
  value: string;
  label: string;
  icon: string;
}

// ─────────────────────────────────────────
// QUIZ — New Types
// ─────────────────────────────────────────

// Quiz question format — MCQ, blanks, etc.
export type QuizFormat =
  | 'MCQ'
  | 'Fill in the Blank'
  | 'Match the Following'
  | 'True/False';

// The 8 subject categories a quiz can belong to
export type QuizCategory =
  | 'Quantitative Aptitude'
  | 'Reasoning Ability'
  | 'English Language'
  | 'General Awareness'
  | 'Banking Awareness'
  | 'Computer Aptitude'
  | 'Data Interpretation'
  | 'Current Affairs';

// ─── Quiz Series ──────────────────────────
// A collection of questions on a topic (≠ full mock test).
// Lighter than MockTest: no freeTests count, uses freeQuestions instead.
export interface QuizSeries {
  id: string;
  title: string;
  description: string;
  category: QuizCategory;
  exam: ExamType | 'Both';   // 'Both' = relevant for SBI-PO and IBPS-PO
  type: TestType;
  totalQuestions: number;
  duration: number;          // minutes
  difficulty: DifficultyLevel;
  freeQuestions: number;     // how many questions are freely accessible
  totalAttempts: number;
  rating: number;
  year: string;
  tags: string[];
  languages: string[];
  isNew?: boolean;           // published this week
  isTrending?: boolean;      // high recent attempt velocity
  isPremium?: boolean;       // fully paywalled
  subject?: string;          // finer sub-topic label, e.g. "Quadratic Equations"
  passScore?: number;        // minimum % to earn a pass badge
  format: QuizFormat;
}

// ─── Quiz Category Metadata ───────────────
// UI display config for each QuizCategory —
// weightage, top topics, colours, etc.
export interface QuizCategoryMeta {
  label: QuizCategory;
  shortLabel: string;        // abbreviated for tabs / pills
  icon: string;              // emoji icon
  description: string;
  totalQuizzes: number;      // count of QuizSeries in this category
  color: string;             // tailwind bg class  e.g. 'bg-blue-50'
  textColor: string;         // tailwind text class e.g. 'text-blue-700'
  borderColor: string;       // tailwind border class
  weightage: {
    prelims: string;         // e.g. '35Q / 35M' or 'N/A'
    mains: string;
  };
  topTopics: string[];       // 4–5 most tested sub-topics
}


export interface MockTest extends TestSeries {
  duration: number;      // minutes
  subject?: string;      // topic label for Sectional / Topic Wise
  isPremium?: boolean;   // convenience flag  (freeTests === 0)
  description: string;
}

// ─── Daily Quiz ───────────────────────────
// One short quiz released every day.
export interface DailyQuiz {
  id: string;
  date: string;              // display date  e.g. 'May 24, 2026'
  title: string;
  category: QuizCategory;
  totalQuestions: number;
  duration: number;          // minutes
  difficulty: DifficultyLevel;
  totalAttempts: number;
  avgScore: number;          // platform average score %
  exam: ExamType | 'Both';
  isCompleted?: boolean;     // true if the signed-in user has finished it
}

// ─── Quiz Leaderboard Entry ───────────────
export interface QuizLeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;            // 2-letter initials
  score: number;             // marks out of 100
  accuracy: number;          // % correct
  timeTaken: number;         // seconds
  exam: ExamType;
  badge?: string;            // e.g. '🥇 Champion'
}

// ─── Quiz Platform Stats ──────────────────
// Aggregated numbers shown in the hero / banners.
export interface QuizPlatformStats {
  totalQuizSeries: number;
  totalQuestions: number;
  freeQuizSeries: number;
  totalCategories: number;
  avgRating: string;         // e.g. '4.8'
  totalAttempts: number;
  trendingCount: number;
  newThisWeek: number;
}