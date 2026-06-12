// PATH: types/current-affairs.ts
// ─────────────────────────────────────────
// Current Affairs — Feature-Scoped Types
// ─────────────────────────────────────────

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
export type ExamRelevance   = 'SBI-PO' | 'IBPS-PO' | 'Both';

// ─── Article ──────────────────────────────
export interface CurrentAffair {
  id:            string;
  title:         string;
  summary:       string;
  body:          string;
  category:      CACategory;
  date:          string;
  importance:    ImportanceLevel;
  examRelevance: ExamRelevance;
  quickFacts:    string[];
  keyPoints:     string[];
  readTime:      number;
  isMonthly?:    boolean;
  isFeatured?:   boolean;
  tags?:         string[];
}

// ─── Category meta (for filter bar) ──────
export interface CACategoryMeta {
  label:     CACategory;
  iconName:  string;
}

// ─── Stat strip ───────────────────────────
export interface CAStat {
  iconName: string;
  value:    string;
  label:    string;
}

// ─── FAQ ─────────────────────────────────
export interface CAFAQ {
  id:       string;
  question: string;
  answer:   string;
}

// ─── Pagination ───────────────────────────
export interface PaginationState {
  page:    number;
  perPage: number;
  total:   number;
}

// ─── Filter state ─────────────────────────
export interface CAFilterState {
  category:   CACategory;
  search:     string;
  page:       number;
}