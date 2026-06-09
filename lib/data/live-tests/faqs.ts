// PATH: lib/data/live-tests/faqs.ts
// PrepBanker — Live Tests FAQ Static Data
// Replaced with the 8 specific FAQs for SEO and user discovery.

import type { LiveTestFAQItem } from '@/types/live-tests';

export const liveTestFAQs: LiveTestFAQItem[] = [
  {
    id: 'faq-1',
    question: 'What are live mock tests?',
    answer:
      'Live mock tests are online practice exams that are scheduled for a specific time window. Thousands of candidates across the country attempt the same test concurrently under identical conditions, complete with sectional timers, negative marking, and real-time environment simulation.',
  },
  {
    id: 'faq-2',
    question: 'How are live tests different from regular mock tests?',
    answer:
      'Unlike regular mock tests which can be taken at any time, live tests are event-based and run within a fixed time slot (e.g., 24-48 hours). They simulate the actual exam-day environment where you compete live against thousands of other aspirants, giving you a realistic all-India rank and percentile.',
  },
  {
    id: 'faq-3',
    question: 'Are live tests useful for SBI PO preparation?',
    answer:
      'Yes, they are highly useful. SBI PO is known for its high-difficulty level and sudden pattern shifts. Live tests train you to maintain speed and accuracy under extreme pressure, choose which high-complexity puzzles to attempt, and benchmark your readiness against actual SBI PO cutoffs.',
  },
  {
    id: 'faq-4',
    question: 'Are rankings provided after the test?',
    answer:
      'Yes. Once the live test window closes, an all-India leaderboard is generated. You receive your exact rank among all participants, a detailed percentile score showing where you stand nationwide, and comparative metrics comparing your speed with the toppers.',
  },
  {
    id: 'faq-5',
    question: 'Can I attempt the test multiple times?',
    answer:
      'To maintain competitive integrity and fair rankings, you can only submit your score once during the live test window. However, after the live window ends and solutions are unlocked, you can re-attempt the test in practice mode to review your answers.',
  },
  {
    id: 'faq-6',
    question: 'How often should I take live tests?',
    answer:
      'We recommend taking at least 1-2 live tests per week during the active preparation phase. As exams approach, this can be increased to 3 live tests per week, leaving ample time between tests to analyze mistakes and revise weaker concepts.',
  },
  {
    id: 'faq-7',
    question: 'Do live tests improve exam scores?',
    answer:
      'Yes. By regularly attempting tests in a timed, competitive environment, you build muscle memory for time management, reduce negative marking deductions by avoiding wild guessing, and identify specific weak areas to focus on, resulting in a 20-30% score bump.',
  },
  {
    id: 'faq-8',
    question: 'Are solutions available after the test?',
    answer:
      'Yes. Detailed step-by-step solutions and shortcut keys for all quantitative, reasoning, and English sections are unlocked immediately after the live test window closes. Each solution includes alternative solving methods and time-saving tips.',
  },
];