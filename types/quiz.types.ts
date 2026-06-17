// PATH: types/quiz.types.ts

export type ExamType = 'SBI PO' | 'IBPS PO';
export type Language = 'en' | 'hi';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionStatus = 'answered' | 'not-answered' | 'marked' | 'not-visited';
 
export interface Subtopic {
  id: string;
  name: string;
  hasQuestions: boolean;
}
 
export interface Topic {
  id: string;
  name: string;
  subtopics: Subtopic[];
}
 
export interface Section {
  id: 'quant' | 'reasoning' | 'english';
  name: string;
  topics: Topic[];
}
 
export interface LocalizedText {
  en: string;
  hi: string;
}
 
export interface SharedDiagram {
  type: 'svg';
  alt: string;
  svg: string;
}
 
export interface QuizQuestion {
  id: string;
  question: string | LocalizedText;
  options: string[] | { en: string[]; hi: string[] };
  correctOption: number;       // 0-indexed
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string | LocalizedText;
  difficulty: Difficulty;
}
 
export interface QuestionSet {
  subtopicId: string;
  topicId: string;
  sectionId: string;
  instructions: string | LocalizedText;
  passage?: string;             // for Reading Comprehension sets
  sharedDiagram?: SharedDiagram; // for DI / seating-arrangement sets
  note?: string;                 // supplementary data table for diagram-based sets
  questions: QuizQuestion[];
}
 
export interface QuizDataset {
  examTypes: ExamType[];
  sections: Section[];
  questionSets: Record<string, QuestionSet>;
}
 
// --- Runtime state ---
 
export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  status: QuestionStatus;
  timeSpentSeconds: number;
}
 
export type QuizStep = 'exam-select' | 'topic-select' | 'live-test' | 'results';
 
export interface QuizState {
  step: QuizStep;
  examType: ExamType | null;
  subtopicId: string | null;
  language: Language;
  currentQuestionIndex: number;
  answers: Record<string, UserAnswer>;   // keyed by questionId
  secondsRemaining: number;
  testStartedAt: number | null;          // epoch ms
  isSubmitted: boolean;
}
 
export interface TopicResult {
  topicName: string;
  subtopicName: string;
  totalQuestions: number;
  correct: number;
  wrong: number;
  unattempted: number;
  accuracyPercent: number;
}
 
export interface QuizResult {
  totalQuestions: number;
  correct: number;
  wrong: number;
  unattempted: number;
  scorePercent: number;
  accuracyPercent: number;       // correct / attempted
  timeTakenSeconds: number;
  topicBreakdown: TopicResult[];
  weakAreas: string[];           // subtopic names below an accuracy threshold
}
