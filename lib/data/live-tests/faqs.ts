// PATH: lib/data/live-tests/faqs.ts
// PrepBanker — Live Tests FAQ Static Data
// Add / edit FAQs here without touching any UI component.

import type { LiveTestFAQItem } from '@/types/live-tests';

export const liveTestFAQs: LiveTestFAQItem[] = [
  // ── How Live Tests Work ──────────────────────────────────────
  {
    id: 'lt-faq-1',
    question: 'How do live mock tests work on PrepBanker?',
    answer:
      'Live tests are real-time mock exams that run for a fixed time window. Thousands of aspirants attempt the same test simultaneously. You see a live countdown timer, compete for all-India rankings, and receive instant results with a percentile score and full performance breakdown the moment the window closes.',
  },
  {
    id: 'lt-faq-2',
    question: 'Can I join a live test after it has started?',
    answer:
      'Yes — you can join any live test up to the last 10 minutes of its window. The timer starts from the point you join, so you will see a personal countdown. However, the test officially closes at the same time for everyone, so joining early gives you the best chance to attempt all questions.',
  },
  {
    id: 'lt-faq-3',
    question: 'What happens when a live test countdown reaches zero?',
    answer:
      'When the countdown hits zero, the test window closes and no new submissions are accepted. The card displays "Test Completed" and your rank among all participants is calculated. You can still review your answers and the full solution key after the test ends.',
  },

  // ── Access & Devices ─────────────────────────────────────────
  {
    id: 'lt-faq-4',
    question: 'Can I attempt live tests on my mobile phone?',
    answer:
      'Absolutely. PrepBanker is fully responsive and tested across Android and iOS. Live tests work seamlessly on mobile, tablet, and desktop browsers. We recommend a stable internet connection and the latest version of Chrome or Safari for the best experience.',
  },
  {
    id: 'lt-faq-5',
    question: 'Do I need to create an account to join a live test?',
    answer:
      'Free live tests can be previewed without an account, but submitting answers and receiving your rank requires a free PrepBanker account. Premium live tests require an active subscription. Registration takes under 60 seconds — no credit card needed for a free account.',
  },

  // ── Free vs Premium ──────────────────────────────────────────
  {
    id: 'lt-faq-6',
    question: 'What is the difference between free and premium live tests?',
    answer:
      'Free live tests give you full access to the test, a live rank on the leaderboard, and a basic score card. Premium live tests add section-wise analytics, accuracy vs speed graphs, detailed question-level breakdowns, comparison with toppers, and downloadable performance PDFs. Both types award a rank certificate.',
  },
  {
    id: 'lt-faq-7',
    question: 'How many free live tests can I attempt each month?',
    answer:
      'There is no cap on free live tests. All tests marked FREE in the catalogue are free every time they run. PrepBanker typically schedules 8–12 free live events per month across SBI-PO and IBPS-PO, including Prelims and topic-wise formats.',
  },

  // ── Exam Pattern ─────────────────────────────────────────────
  {
    id: 'lt-faq-8',
    question: 'Do live tests follow the actual SBI PO and IBPS PO exam pattern?',
    answer:
      'Yes. Every live test is built by banking exam experts and strictly follows the latest official exam pattern — including section-wise timing, negative marking (−0.25 per wrong answer), question distribution, and difficulty calibration. Full Mock and Mains tests also include the Descriptive Paper format.',
  },
  {
    id: 'lt-faq-9',
    question: 'Is there negative marking in live tests?',
    answer:
      'Live tests replicate the official pattern: 1 mark per correct answer and −0.25 (one-fourth) deducted per wrong answer. Questions left unattempted carry zero marks. The platform shows your corrected score, gross score, and penalty marks separately in the result card.',
  },

  // ── Results & Analytics ───────────────────────────────────────
  {
    id: 'lt-faq-10',
    question: 'When do I get my results after a live test?',
    answer:
      'Results are instant. The moment the live window closes, your score, percentile, and all-India rank are displayed on the result screen. Detailed analytics — topic-wise breakdown, accuracy charts, and time per question — are available within 5 minutes of the test ending.',
  },
  {
    id: 'lt-faq-11',
    question: 'Can I review my answers and solutions after the live test ends?',
    answer:
      'Yes. Full solutions are unlocked for all questions once the live window closes. Each answer includes a step-by-step explanation, the correct approach, shortcut methods where applicable, and the difficulty rating of that specific question.',
  },
  {
    id: 'lt-faq-12',
    question: 'How is the all-India rank calculated in live tests?',
    answer:
      'Rank is calculated based on corrected score (after negative marking) in descending order. In case of a tie, the participant who attempted the test in less total time ranks higher. The percentile is computed as: (number of participants who scored less than you ÷ total participants) × 100.',
  },

  // ── Scheduling ───────────────────────────────────────────────
  {
    id: 'lt-faq-13',
    question: 'How often are new live tests scheduled?',
    answer:
      'PrepBanker schedules live tests daily — at least two per day, one in the morning slot (8–10 AM) and one in the evening slot (7–9 PM) IST. Additional special live events are scheduled during exam notification periods. You can subscribe to live test alerts via email or push notifications.',
  },
  {
    id: 'lt-faq-14',
    question: 'Are live tests available in Hindi as well as English?',
    answer:
      'Most live tests are bilingual — you can switch between English and Hindi at any point during the test. English-only live tests are clearly labelled in the catalogue. Tests that include the Descriptive Paper (letter/essay writing) are English-medium only, mirroring the actual exam.',
  },

  // ── Technical ────────────────────────────────────────────────
  {
    id: 'lt-faq-15',
    question: 'What happens if my internet disconnects during a live test?',
    answer:
      'Your answers are auto-saved every 30 seconds to the server. If you lose connectivity, you can rejoin the same test session from any device and your progress will be restored — provided the live window is still open. The timer continues running in your absence, so reconnect as quickly as possible.',
  },
  {
    id: 'lt-faq-16',
    question: 'Can I pause a live test once I have started?',
    answer:
      'No — live tests cannot be paused. This is intentional: pausing would break the competitive fairness of the live format and undermine the real exam simulation. If you close the browser, the timer keeps running. Re-open the test URL to resume from where you left off within the live window.',
  },
];