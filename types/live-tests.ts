// PATH: types/live-tests.ts
// PrepBanker — Live Tests Feature Types
// All types specific to the Live Tests module live here.
// Shared types (ExamType, TestType, DifficultyLevel) are re-exported for convenience.

import type { ExamType, TestType, DifficultyLevel } from '@/types';

export type { ExamType, TestType, DifficultyLevel };

// ─── Core Entity ──────────────────────────────────────────────
export interface LiveTest {
  id: string;
  title: string;
  exam: ExamType;
  type: TestType;
  duration: number;        // minutes
  totalQuestions: number;
  totalMarks: number;
  languages: string[];
  difficulty: DifficultyLevel;
  isFree: boolean;
  endsAt: number;          // Unix ms timestamp; 0 = use local random countdown
  description: string;
  participants: number;    // simulated live participant count for display
}

// ─── Filter / Tab ─────────────────────────────────────────────
export type LiveTestTab =
  | 'All Live Tests'
  | 'SBI-PO Live'
  | 'IBPS-PO Live'
  | 'Prelims Tests'
  | 'Mains Tests'
  | 'Free Tests';

export interface LiveTestTabConfig {
  label: LiveTestTab;
  iconName: string;  // Maps to a Lucide component name in the consuming component
}

// ─── Hero ─────────────────────────────────────────────────────
export interface LiveTestHeroStat {
  iconName: string;  // Maps to a Lucide component name
  value: string;
  label: string;
}

// ─── FAQ ──────────────────────────────────────────────────────
export interface LiveTestFAQItem {
  id: string;
  question: string;
  answer: string;
}

// ─── Timer ────────────────────────────────────────────────────
/** testId → seconds remaining (0 = expired) */
export type TimersMap = Record<string, number>;

// ─── Pagination ───────────────────────────────────────────────
export interface PaginationState {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}