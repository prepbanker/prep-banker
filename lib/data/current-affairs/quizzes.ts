// PATH: lib/data/current-affairs/quizzes.ts

export interface CAQuiz {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  questions: number;
  marks: number;
  languages: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  attempts: string;
  free: boolean;
}

export const CA_QUIZZES: CAQuiz[] = [
  {
    id: 'ca-quiz-01',
    title: '09 June 2026 Daily CA Quiz for UPSC & State PSCs',
    description: 'Daily practice quiz on core current affairs topics tailored for UPSC and State PSC exams.',
    date: '09 June 2026',
    duration: 8,
    questions: 5,
    marks: 10,
    languages: 'English, Hindi, Telugu +7 More',
    difficulty: 'MEDIUM',
    attempts: 'Attempted by 463 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-02',
    title: '09 June 2026 Daily CA Quiz for Banking Special',
    description: 'Specialized current affairs quiz focusing on financial sector news for SBI, IBPS, and RBI exams.',
    date: '09 June 2026',
    duration: 5,
    questions: 5,
    marks: 5,
    languages: 'English, Hindi, Telugu +7 More',
    difficulty: 'EASY',
    attempts: 'Attempted by 435 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-03',
    title: '09 June 2026 Daily Current Affairs Quiz (Morning)',
    description: 'Start your morning with a quick evaluation of key national and international news events.',
    date: '09 June 2026',
    duration: 10,
    questions: 10,
    marks: 10,
    languages: 'English, Hindi, Tamil +7 More',
    difficulty: 'MEDIUM',
    attempts: 'Attempted by 370 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-04',
    title: '08 June 2026 Daily Current Affairs Quiz (Evening)',
    description: 'Review the day’s most important news and announcements in a quick practice session.',
    date: '08 June 2026',
    duration: 10,
    questions: 10,
    marks: 10,
    languages: 'English, Hindi, Tamil +7 More',
    difficulty: 'MEDIUM',
    attempts: 'Attempted by 905 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-05',
    title: '08 June 2026 Daily CA Quiz for UPSC & State PSCs',
    description: 'Consolidate your preparation for competitive civil service papers with daily syllabus coverage.',
    date: '08 June 2026',
    duration: 8,
    questions: 5,
    marks: 10,
    languages: 'English, Hindi, Telugu +7 More',
    difficulty: 'MEDIUM',
    attempts: 'Attempted by 453 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-06',
    title: '08 June 2026 Daily CA Quiz for Banking Special',
    description: 'Targeted banking awareness and economic updates quiz for major commercial bank competitive tests.',
    date: '08 June 2026',
    duration: 5,
    questions: 5,
    marks: 5,
    languages: 'English, Hindi, Telugu +7 More',
    difficulty: 'EASY',
    attempts: 'Attempted by 416 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-07',
    title: '08 June 2026 Daily Current Affairs Quiz (Morning)',
    description: 'Test your retention of key administrative and economic decisions from the previous day.',
    date: '08 June 2026',
    duration: 10,
    questions: 10,
    marks: 10,
    languages: 'English, Hindi, Tamil +7 More',
    difficulty: 'MEDIUM',
    attempts: 'Attempted by 459 aspirants in 12 hours',
    free: true
  },
  {
    id: 'ca-quiz-08',
    title: '05 June 2026 Daily Current Affairs Quiz (Evening)',
    description: 'Assess your knowledge on weekly current affairs and prominent global events from June 5th.',
    date: '05 June 2026',
    duration: 10,
    questions: 10,
    marks: 10,
    languages: 'English, Hindi, Tamil +7 More',
    difficulty: 'MEDIUM',
    attempts: 'Attempted by 858 aspirants in 12 hours',
    free: true
  }
];
