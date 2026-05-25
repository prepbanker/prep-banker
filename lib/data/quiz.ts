// PATH: lib/data/quiz.ts
// ─────────────────────────────────────────
// PrepBanker — Quiz / Practice Data
// ─────────────────────────────────────────
import type { ExamType, DifficultyLevel, TestType } from '@/types';

// ─── Quiz-specific types ──────────────────
export type QuizCategory =
  | 'Quantitative Aptitude'
  | 'Reasoning Ability'
  | 'English Language'
  | 'General Awareness'
  | 'Banking Awareness'
  | 'Computer Aptitude'
  | 'Data Interpretation'
  | 'Current Affairs';

export type QuizFormat = 'MCQ' | 'Fill in the Blank' | 'Match the Following' | 'True/False';

export interface QuizSeries {
  id: string;
  title: string;
  description: string;
  category: QuizCategory;
  exam: ExamType | 'Both';
  type: TestType;
  totalQuestions: number;
  duration: number;         // minutes
  difficulty: DifficultyLevel;
  freeQuestions: number;    // free preview questions
  totalAttempts: number;
  rating: number;
  year: string;
  tags: string[];
  languages: string[];
  isNew?: boolean;
  isTrending?: boolean;
  isPremium?: boolean;
  subject?: string;
  passScore?: number;       // % to pass
  format: QuizFormat;
}

export interface QuizCategoryMeta {
  label: QuizCategory;
  shortLabel: string;
  icon: string;            // emoji
  description: string;
  totalQuizzes: number;
  color: string;           // tailwind bg class
  textColor: string;       // tailwind text class
  borderColor: string;
  weightage: {
    prelims: string;
    mains: string;
  };
  topTopics: string[];
}

export interface DailyQuiz {
  id: string;
  date: string;
  title: string;
  category: QuizCategory;
  totalQuestions: number;
  duration: number;
  difficulty: DifficultyLevel;
  totalAttempts: number;
  avgScore: number;        // %
  exam: ExamType | 'Both';
  isCompleted?: boolean;
}

export interface QuizLeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  accuracy: number;
  timeTaken: number;       // seconds
  exam: ExamType;
  badge?: string;
}

// ─── Category Metadata ────────────────────
export const quizCategories: QuizCategoryMeta[] = [
  {
    label: 'Quantitative Aptitude',
    shortLabel: 'Quant',
    icon: '🔢',
    description: 'Number series, DI, algebra, arithmetic — the most marks-dense section in SBI & IBPS PO.',
    totalQuizzes: 38,
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    weightage: { prelims: '35Q / 35M', mains: '35Q / 60M' },
    topTopics: ['Data Interpretation', 'Number Series', 'Quadratic Equations', 'Simplification', 'Arithmetic Word Problems'],
  },
  {
    label: 'Reasoning Ability',
    shortLabel: 'Reasoning',
    icon: '🧩',
    description: 'Puzzles, seating arrangements, blood relations, syllogisms — master the highest-difficulty section.',
    totalQuizzes: 42,
    color: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    weightage: { prelims: '35Q / 35M', mains: '45Q / 60M' },
    topTopics: ['Puzzles & Seating', 'Blood Relations', 'Syllogisms', 'Coding-Decoding', 'Direction Sense'],
  },
  {
    label: 'English Language',
    shortLabel: 'English',
    icon: '📝',
    description: 'Reading comprehension, grammar, vocabulary, para jumbles — smart strategies beat rote learning.',
    totalQuizzes: 29,
    color: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    weightage: { prelims: '30Q / 30M', mains: '35Q / 40M' },
    topTopics: ['Reading Comprehension', 'Error Spotting', 'Para Jumbles', 'Cloze Test', 'Fill in the Blanks'],
  },
  {
    label: 'General Awareness',
    shortLabel: 'GA',
    icon: '🌐',
    description: 'Banking + economy + static GK — crack the Mains GA section with daily practice quizzes.',
    totalQuizzes: 51,
    color: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    weightage: { prelims: 'N/A', mains: '40Q / 40M' },
    topTopics: ['RBI Policies', 'Government Schemes', 'Economy Basics', 'Static GK', 'Current Affairs'],
  },
  {
    label: 'Banking Awareness',
    shortLabel: 'Banking',
    icon: '🏦',
    description: 'RBI, SEBI, NABARD, banking terms, Basel norms — the differentiator in competitive banking exams.',
    totalQuizzes: 34,
    color: 'bg-cyan-50',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-200',
    weightage: { prelims: 'N/A', mains: 'Part of GA 40Q' },
    topTopics: ['RBI Functions', 'Banking Terms', 'Financial Regulators', 'Monetary Policy', 'NPA & CRR'],
  },
  {
    label: 'Data Interpretation',
    shortLabel: 'DI',
    icon: '📊',
    description: 'Tables, bar graphs, line charts, pie charts — DI sets are the Mains game-changers.',
    totalQuizzes: 22,
    color: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    weightage: { prelims: 'Part of QA', mains: '15–20Q standalone' },
    topTopics: ['Tables', 'Bar Graphs', 'Pie Charts', 'Line Charts', 'Mixed DI Sets'],
  },
  {
    label: 'Computer Aptitude',
    shortLabel: 'Computer',
    icon: '💻',
    description: 'IBPS PO Mains exclusive — hardware, software, networking, machine input-output.',
    totalQuizzes: 16,
    color: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    weightage: { prelims: 'N/A', mains: 'Merged with Reasoning 45Q' },
    topTopics: ['Computer Fundamentals', 'Networking', 'MS Office', 'Internet', 'Machine Input-Output'],
  },
  {
    label: 'Current Affairs',
    shortLabel: 'Current Affairs',
    icon: '📰',
    description: 'Daily & monthly CA quizzes tagged for SBI PO and IBPS PO — never miss an important event.',
    totalQuizzes: 60,
    color: 'bg-teal-50',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-200',
    weightage: { prelims: 'N/A', mains: 'Part of GA 40Q' },
    topTopics: ['RBI Updates', 'Awards & Honors', 'Government Schemes', 'International Affairs', 'Economy News'],
  },
];

// ─── Quiz Series ──────────────────────────
export const quizSeries: QuizSeries[] = [
  // ── Quantitative Aptitude ─────────────
  {
    id: 'qs-1',
    title: 'Number Series Mastery — All Patterns',
    description: '120 number series questions covering wrong number, missing number, two-tier series, and letter-number series with step-by-step trick solutions.',
    category: 'Quantitative Aptitude',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 120,
    duration: 25,
    difficulty: 'Medium',
    freeQuestions: 20,
    totalAttempts: 89400,
    rating: 4.8,
    year: '2026',
    tags: ['High Weightage', 'Tricks', 'Pattern-based'],
    languages: ['English', 'Hindi'],
    isTrending: true,
    format: 'MCQ',
    passScore: 70,
  },
  {
    id: 'qs-2',
    title: 'Simplification & Approximation Sprint',
    description: '100 questions on BODMAS, surds, indices, and approximation — all solvable within 40 seconds each.',
    category: 'Quantitative Aptitude',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 100,
    duration: 20,
    difficulty: 'Easy',
    freeQuestions: 25,
    totalAttempts: 67200,
    rating: 4.6,
    year: '2026',
    tags: ['Speed Building', 'Easy Marks', 'Daily Practice'],
    languages: ['English', 'Hindi'],
    isNew: false,
    format: 'MCQ',
    passScore: 75,
  },
  {
    id: 'qs-3',
    title: 'Quadratic Equations — 200 Questions',
    description: 'All types of quadratic equation questions with inequality-based and root-finding approaches. Crucial for SBI PO Prelims scoring.',
    category: 'Quantitative Aptitude',
    exam: 'SBI-PO',
    type: 'Topic Wise',
    totalQuestions: 200,
    duration: 30,
    difficulty: 'Medium',
    freeQuestions: 30,
    totalAttempts: 54300,
    rating: 4.8,
    year: '2026',
    tags: ['SBI PO Focus', 'Prelims', 'Shortcut Methods'],
    languages: ['English', 'Hindi'],
    isTrending: false,
    format: 'MCQ',
    passScore: 70,
    subject: 'Quadratic Equations',
  },
  {
    id: 'qs-4',
    title: 'Arithmetic Word Problems — Crash Quiz',
    description: 'Profit & Loss, SI/CI, Time-Work, Speed-Distance, Percentage, Ratio — 150 graded questions from easy to hard.',
    category: 'Quantitative Aptitude',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 150,
    duration: 35,
    difficulty: 'Hard',
    freeQuestions: 20,
    totalAttempts: 48700,
    rating: 4.8,
    year: '2026',
    tags: ['Comprehensive', 'All Topics', 'Graded'],
    languages: ['English', 'Hindi'],
    isTrending: true,
    format: 'MCQ',
    passScore: 65,
  },
  {
    id: 'qs-5',
    title: 'Data Interpretation — Mains Level Sets',
    description: '60 full DI sets across Tables, Bar Graphs, Pie Charts, Line Charts, and Caselet DI. Exact Mains difficulty with detailed solutions.',
    category: 'Data Interpretation',
    exam: 'Both',
    type: 'Sectional',
    totalQuestions: 300,
    duration: 60,
    difficulty: 'Hard',
    freeQuestions: 25,
    totalAttempts: 72100,
    rating: 4.9,
    year: '2026',
    tags: ['Mains Level', 'High Weightage', 'DI Sets'],
    languages: ['English'],
    isTrending: true,
    isPremium: false,
    format: 'MCQ',
    passScore: 60,
    subject: 'Data Interpretation',
  },

  // ── Reasoning ─────────────────────────
  {
    id: 'qs-6',
    title: 'Puzzles & Seating Arrangement — 200 Drills',
    description: 'Linear, circular, floor-based, and box puzzles at increasing difficulty. The single highest-weightage topic for both SBI and IBPS PO.',
    category: 'Reasoning Ability',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 200,
    duration: 40,
    difficulty: 'Hard',
    freeQuestions: 20,
    totalAttempts: 93500,
    rating: 4.8,
    year: '2026',
    tags: ['Most Important', 'Puzzle Types', 'Timed'],
    languages: ['English', 'Hindi'],
    isTrending: true,
    format: 'MCQ',
    passScore: 60,
    subject: 'Puzzles & Seating',
  },
  {
    id: 'qs-7',
    title: 'Syllogisms — All Possibility Cases',
    description: '150 syllogism questions with "only a few", "some not", "all", and "no" cases. Includes reverse syllogisms and coded syllogisms.',
    category: 'Reasoning Ability',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 150,
    duration: 20,
    difficulty: 'Medium',
    freeQuestions: 30,
    totalAttempts: 61800,
    rating: 4.6,
    year: '2026',
    tags: ['Venn Diagram', 'All Cases', 'Pattern Quiz'],
    languages: ['English', 'Hindi'],
    isNew: true,
    format: 'MCQ',
    passScore: 70,
  },
  {
    id: 'qs-8',
    title: 'Blood Relations & Direction Sense',
    description: '100 questions covering coded blood relations, gender-based puzzles, and multi-step direction problems. Never miss easy marks again.',
    category: 'Reasoning Ability',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 100,
    duration: 20,
    difficulty: 'Easy',
    freeQuestions: 30,
    totalAttempts: 45200,
    rating: 4.5,
    year: '2026',
    tags: ['Easy Marks', 'Quick Revision', 'Coding'],
    languages: ['English', 'Hindi'],
    isNew: false,
    format: 'MCQ',
    passScore: 75,
  },
  {
    id: 'qs-9',
    title: 'Inequality & Input-Output Machine',
    description: '120 questions on coded inequalities and 80 machine input-output questions — two topics that appear in almost every IBPS PO Mains paper.',
    category: 'Reasoning Ability',
    exam: 'IBPS-PO',
    type: 'Topic Wise',
    totalQuestions: 200,
    duration: 30,
    difficulty: 'Medium',
    freeQuestions: 25,
    totalAttempts: 38600,
    rating: 4.6,
    year: '2026',
    tags: ['IBPS PO Mains', 'Coded Inequality', 'Input-Output'],
    languages: ['English'],
    isNew: false,
    format: 'MCQ',
    passScore: 70,
  },

  // ── English ────────────────────────────
  {
    id: 'qs-10',
    title: 'Reading Comprehension — 50 Passages',
    description: '50 RC passages at Prelims and Mains level covering banking, economy, and general themes. Each passage has 5 questions with vocabulary notes.',
    category: 'English Language',
    exam: 'Both',
    type: 'Sectional',
    totalQuestions: 250,
    duration: 50,
    difficulty: 'Medium',
    freeQuestions: 20,
    totalAttempts: 57900,
    rating: 4.8,
    year: '2026',
    tags: ['Banking Themes', 'Comprehension', 'Vocab Boost'],
    languages: ['English'],
    isTrending: true,
    format: 'MCQ',
    passScore: 65,
    subject: 'Reading Comprehension',
  },
  {
    id: 'qs-11',
    title: 'Error Spotting & Sentence Correction',
    description: '200 error spotting and sentence improvement questions covering subject-verb agreement, tenses, prepositions, articles, and conjunctions.',
    category: 'English Language',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 200,
    duration: 30,
    difficulty: 'Medium',
    freeQuestions: 30,
    totalAttempts: 44100,
    rating: 4.5,
    year: '2026',
    tags: ['Grammar Rules', 'Error Types', 'Common Mistakes'],
    languages: ['English'],
    isNew: false,
    format: 'MCQ',
    passScore: 70,
  },
  {
    id: 'qs-12',
    title: 'Para Jumbles & Sentence Rearrangement',
    description: '120 para jumble sets with connectors, theme-based approach, and elimination technique. Includes new-pattern Para Completion questions.',
    category: 'English Language',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 120,
    duration: 25,
    difficulty: 'Hard',
    freeQuestions: 20,
    totalAttempts: 32400,
    rating: 4.6,
    year: '2026',
    tags: ['Para Jumbles', 'New Pattern', 'Connector Approach'],
    languages: ['English'],
    isNew: true,
    format: 'MCQ',
    passScore: 60,
  },
  {
    id: 'qs-13',
    title: 'Cloze Test & Fill in the Blanks — 1000 Q',
    description: 'Single blank, double blank, contextual cloze, and word replacement questions. 1000 questions covering the full spectrum of vocabulary-based items.',
    category: 'English Language',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 1000,
    duration: 120,
    difficulty: 'Medium',
    freeQuestions: 50,
    totalAttempts: 29700,
    rating: 4.6,
    year: '2026',
    tags: ['Vocabulary', 'Contextual', 'High Volume'],
    languages: ['English'],
    isPremium: false,
    format: 'Fill in the Blank',
    passScore: 65,
  },

  // ── Banking & GA ───────────────────────
  {
    id: 'qs-14',
    title: 'Banking Awareness — 500 MCQs',
    description: 'RBI history, NABARD, SEBI, banking terms, financial inclusion, Basel norms, and monetary policy — the complete banking awareness quiz bank.',
    category: 'Banking Awareness',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 500,
    duration: 60,
    difficulty: 'Medium',
    freeQuestions: 50,
    totalAttempts: 118300,
    rating: 4.9,
    year: '2026',
    tags: ['500 MCQs', 'Complete Bank', 'RBI Focus', 'Free Access'],
    languages: ['English', 'Hindi'],
    isTrending: true,
    format: 'MCQ',
    passScore: 70,
    subject: 'Banking Awareness',
  },
  {
    id: 'qs-15',
    title: 'May 2026 Current Affairs Quiz',
    description: 'All important current affairs from May 2026 — RBI decisions, government schemes, economy news, awards, sports, and international affairs.',
    category: 'Current Affairs',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 150,
    duration: 25,
    difficulty: 'Medium',
    freeQuestions: 50,
    totalAttempts: 84700,
    rating: 4.8,
    year: '2026',
    tags: ['May 2026', 'Monthly CA', 'Complete Coverage'],
    languages: ['English', 'Hindi'],
    isNew: true,
    isTrending: true,
    format: 'MCQ',
    passScore: 70,
  },
  {
    id: 'qs-16',
    title: 'April 2026 Current Affairs Quiz',
    description: 'Comprehensive April 2026 current affairs quiz with quick facts for each question. Exam-tagged for SBI PO and IBPS PO relevance.',
    category: 'Current Affairs',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 130,
    duration: 22,
    difficulty: 'Medium',
    freeQuestions: 40,
    totalAttempts: 96200,
    rating: 4.8,
    year: '2026',
    tags: ['April 2026', 'Monthly CA', 'Quick Facts'],
    languages: ['English', 'Hindi'],
    isTrending: false,
    format: 'MCQ',
    passScore: 70,
  },
  {
    id: 'qs-17',
    title: 'RBI Monetary Policy — Deep Dive Quiz',
    description: 'Repo rate history, MPC decisions, liquidity operations, CRR/SLR changes, and RBI regulatory framework. 200 questions with explanatory notes.',
    category: 'Banking Awareness',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 200,
    duration: 30,
    difficulty: 'Hard',
    freeQuestions: 30,
    totalAttempts: 41600,
    rating: 4.8,
    year: '2026',
    tags: ['RBI', 'Monetary Policy', 'Rates', 'MPC'],
    languages: ['English', 'Hindi'],
    isNew: false,
    format: 'MCQ',
    passScore: 65,
    subject: 'RBI Policy',
  },
  {
    id: 'qs-18',
    title: 'Static GK — Banking & Economy Essentials',
    description: 'HQs, founders, chairman names, regulatory bodies, committees, schemes — the static GK items that repeat in every banking exam.',
    category: 'General Awareness',
    exam: 'Both',
    type: 'Topic Wise',
    totalQuestions: 400,
    duration: 45,
    difficulty: 'Easy',
    freeQuestions: 60,
    totalAttempts: 132000,
    rating: 4.8,
    year: '2026',
    tags: ['Static GK', 'Must Revise', 'Repeated Topics', 'Free'],
    languages: ['English', 'Hindi'],
    isTrending: true,
    format: 'MCQ',
    passScore: 75,
  },

  // ── Computer Aptitude ─────────────────
  {
    id: 'qs-19',
    title: 'Computer Aptitude for IBPS PO Mains',
    description: 'Computer fundamentals, MS Office, internet, hardware, software, networking, and machine input-output — the complete IBPS PO Mains computer section.',
    category: 'Computer Aptitude',
    exam: 'IBPS-PO',
    type: 'Sectional',
    totalQuestions: 300,
    duration: 40,
    difficulty: 'Medium',
    freeQuestions: 40,
    totalAttempts: 38900,
    rating: 4.5,
    year: '2026',
    tags: ['IBPS PO Mains', 'Complete Coverage', 'Input-Output'],
    languages: ['English'],
    isNew: false,
    format: 'MCQ',
    passScore: 70,
    subject: 'Computer Aptitude',
  },

  // ── Daily Practice ─────────────────────
  {
    id: 'qs-20',
    title: 'Daily 30-Minute Mixed Quiz — Week 21',
    description: 'This week\'s mixed daily quiz covering all sections in proportion to actual exam weightage. Fresh questions every week, same time pressure.',
    category: 'General Awareness',
    exam: 'Both',
    type: 'Sectional',
    totalQuestions: 50,
    duration: 30,
    difficulty: 'Medium',
    freeQuestions: 50,
    totalAttempts: 71400,
    rating: 4.8,
    year: '2026',
    tags: ['Daily Practice', 'Mixed', 'This Week', 'Free'],
    languages: ['English', 'Hindi'],
    isNew: true,
    isTrending: true,
    format: 'MCQ',
    passScore: 70,
  },
];

// ─── Daily Quiz Schedule ──────────────────
export const dailyQuizzes: DailyQuiz[] = [
  {
    id: 'dq-1',
    date: 'May 24, 2026',
    title: 'Today\'s Banking Awareness Quiz',
    category: 'Banking Awareness',
    totalQuestions: 20,
    duration: 10,
    difficulty: 'Medium',
    totalAttempts: 12400,
    avgScore: 72,
    exam: 'Both',
  },
  {
    id: 'dq-2',
    date: 'May 23, 2026',
    title: 'Reasoning — Puzzles Drill',
    category: 'Reasoning Ability',
    totalQuestions: 20,
    duration: 15,
    difficulty: 'Hard',
    totalAttempts: 18900,
    avgScore: 61,
    exam: 'Both',
    isCompleted: true,
  },
  {
    id: 'dq-3',
    date: 'May 22, 2026',
    title: 'Quant — Number Series & DI',
    category: 'Quantitative Aptitude',
    totalQuestions: 20,
    duration: 12,
    difficulty: 'Medium',
    totalAttempts: 22300,
    avgScore: 68,
    exam: 'Both',
    isCompleted: true,
  },
  {
    id: 'dq-4',
    date: 'May 21, 2026',
    title: 'English — RC & Cloze Test',
    category: 'English Language',
    totalQuestions: 15,
    duration: 12,
    difficulty: 'Medium',
    totalAttempts: 16700,
    avgScore: 74,
    exam: 'Both',
    isCompleted: true,
  },
  {
    id: 'dq-5',
    date: 'May 20, 2026',
    title: 'Current Affairs — May 20',
    category: 'Current Affairs',
    totalQuestions: 20,
    duration: 10,
    difficulty: 'Easy',
    totalAttempts: 29100,
    avgScore: 79,
    exam: 'Both',
    isCompleted: true,
  },
];

// ─── Leaderboard ──────────────────────────
export const quizLeaderboard: QuizLeaderboardEntry[] = [
  { rank: 1,  name: 'Vikram S.',   avatar: 'VS', score: 98, accuracy: 98, timeTaken: 820,  exam: 'SBI-PO',  badge: '🥇 Champion' },
  { rank: 2,  name: 'Priya V.',    avatar: 'PV', score: 97, accuracy: 97, timeTaken: 910,  exam: 'IBPS-PO', badge: '🥈 Runner Up' },
  { rank: 3,  name: 'Rahul S.',    avatar: 'RS', score: 96, accuracy: 96, timeTaken: 944,  exam: 'SBI-PO',  badge: '🥉 Top 3' },
  { rank: 4,  name: 'Sneha K.',    avatar: 'SK', score: 95, accuracy: 95, timeTaken: 982,  exam: 'IBPS-PO' },
  { rank: 5,  name: 'Arjun P.',    avatar: 'AP', score: 94, accuracy: 94, timeTaken: 1010, exam: 'SBI-PO'  },
  { rank: 6,  name: 'Divya N.',    avatar: 'DN', score: 93, accuracy: 93, timeTaken: 1055, exam: 'IBPS-PO' },
  { rank: 7,  name: 'Karan M.',    avatar: 'KM', score: 92, accuracy: 92, timeTaken: 1088, exam: 'SBI-PO'  },
  { rank: 8,  name: 'Ananya G.',   avatar: 'AG', score: 91, accuracy: 90, timeTaken: 1120, exam: 'IBPS-PO' },
  { rank: 9,  name: 'Rohan T.',    avatar: 'RT', score: 90, accuracy: 90, timeTaken: 1145, exam: 'SBI-PO'  },
  { rank: 10, name: 'Meera J.',    avatar: 'MJ', score: 89, accuracy: 89, timeTaken: 1180, exam: 'IBPS-PO' },
];

// ─── Quiz Stats (platform-level) ─────────
export const quizStats = {
  totalQuizSeries:    quizSeries.length,
  totalQuestions:     quizSeries.reduce((s, q) => s + q.totalQuestions, 0),
  freeQuizSeries:     quizSeries.filter(q => !q.isPremium).length,
  totalCategories:    quizCategories.length,
  avgRating:          4.8,
  totalAttempts:      quizSeries.reduce((s, q) => s + q.totalAttempts, 0),
  trendingCount:      quizSeries.filter(q => q.isTrending).length,
  newThisWeek:        quizSeries.filter(q => q.isNew).length,
};

// ─── Featured / Hero Quizzes ─────────────
export const featuredQuizzes = quizSeries
  .filter(q => q.isTrending)
  .sort((a, b) => b.totalAttempts - a.totalAttempts)
  .slice(0, 6);

// ─── Helper exports ───────────────────────
export function getQuizzesByCategory(category: QuizCategory): QuizSeries[] {
  return quizSeries.filter(q => q.category === category);
}

export function getQuizzesByExam(exam: ExamType): QuizSeries[] {
  return quizSeries.filter(q => q.exam === exam || q.exam === 'Both');
}

export function getTrendingQuizzes(limit = 6): QuizSeries[] {
  return quizSeries
    .filter(q => q.isTrending)
    .sort((a, b) => b.totalAttempts - a.totalAttempts)
    .slice(0, limit);
}

export function getNewQuizzes(limit = 4): QuizSeries[] {
  return quizSeries.filter(q => q.isNew).slice(0, limit);
}