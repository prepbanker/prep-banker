// PATH: types/exam.ts

export type ExamId = 'sbi-po' | 'ibps-po';

export interface ExamDetailSummaryCard {
  iconKey: string;
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
  iconKey: string;
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
  id: ExamId;
  name: string;
  shortName: string;
  fullName: string;
  tag: string;
  tagColor: string;
  /** Short snippet shown in hero (truncated). */
  description: string;
  /** Full text revealed by "Read more". */
  fullDescription: string;
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