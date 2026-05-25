// PATH: lib/data/quiz/quizFaqs.ts
import type { QuizFAQ } from '@/types/quiz';

export const quizFaqs: QuizFAQ[] = [

  // ══════════════════════════
  // GENERAL
  // ══════════════════════════
  {
    id: 'fq-gen-1',
    category: 'General',
    question: 'What is PrepBanker and who is it for?',
    answer: 'PrepBanker is a specialised banking exam preparation platform for SBI PO and IBPS PO aspirants. It provides full-length mock tests, live exams, sectional and topic-wise quizzes, daily current affairs, and performance analytics — everything you need in one place. Whether you are a first-time aspirant or retaking the exam, PrepBanker adapts to your level.',
  },
  {
    id: 'fq-gen-2',
    category: 'General',
    question: 'Is PrepBanker free to use?',
    answer: 'Yes, PrepBanker has a generous free tier. You get access to 5 complete Free Test Series, free questions in every quiz series (typically 25–50 questions per series), daily current affairs, and basic performance analytics at no cost. Premium plans unlock full test series, live tests, advanced analytics, and descriptive paper practice.',
  },
  {
    id: 'fq-gen-3',
    category: 'General',
    question: 'How is PrepBanker different from other test platforms?',
    answer: 'PrepBanker is built exclusively for SBI PO and IBPS PO — not a general competitive exam app. Every test, current affairs update, and analytics insight is curated specifically for banking exam patterns. Features like live leaderboard tests, percentile-based analytics, and section-wise timer simulations are designed to replicate the exact experience of the real IBPS/SBI exam interface.',
  },
  {
    id: 'fq-gen-4',
    category: 'General',
    question: 'Can I access PrepBanker on mobile?',
    answer: 'Yes. PrepBanker is fully responsive and optimised for mobile, tablet, and desktop. You can attempt mock tests, read current affairs, and review solutions on any device. The mobile experience is designed for commute-time preparation — readable question fonts, easy navigation, and smooth timer performance.',
  },
  {
    id: 'fq-gen-5',
    category: 'General',
    question: 'How many students use PrepBanker?',
    answer: "Over 50,000 active banking aspirants use PrepBanker monthly. More than 1.3 million mock tests have been attempted on the platform. PrepBanker's live tests regularly attract 5,000–10,000 simultaneous participants during peak windows like exam season.",
  },
  {
    id: 'fq-gen-6',
    category: 'General',
    question: 'Does PrepBanker provide study notes or only quizzes?',
    answer: 'PrepBanker currently focuses on practice and testing. Each quiz and mock test includes step-by-step solution explanations, shortcut methods, and topic-specific tips. The current affairs section provides in-depth summaries with quick facts. Study notes and concept videos are on the product roadmap for H2 2026.',
  },

  // ══════════════════════════
  // MOCK TESTS
  // ══════════════════════════
  {
    id: 'fq-mt-1',
    category: 'Mock Tests',
    question: 'How many free mock tests can I attempt without signing up?',
    answer: "PrepBanker offers 5 complete free mock test series (no sign-up required for the first attempt). For subsequent attempts, tracked analytics, and access to solutions, a free account is recommended. Creating an account also saves your performance history and gives you access to the daily quiz.",
  },
  {
    id: 'fq-mt-2',
    category: 'Mock Tests',
    question: 'Do PrepBanker mock tests follow the actual exam pattern?',
    answer: 'Absolutely. All mock tests are designed by former banking exam toppers and subject matter experts. The Prelims mocks follow the exact 100Q / 60-min / 3-section format with 0.25 negative marking. Mains mocks replicate the 155Q + 25-mark Descriptive Paper with section-specific timers. Tests are updated within 48 hours of any official IBPS or SBI exam pattern announcement.',
  },
  {
    id: 'fq-mt-3',
    category: 'Mock Tests',
    question: 'What is the difference between Full Mock, Prelims, Mains, Sectional, and Topic Wise tests?',
    answer: 'Full Mock replicates the complete exam (Prelims + Mains). Prelims tests cover only the 60-minute, 100-question Prelims stage. Mains tests cover the full 180-minute Mains paper including Descriptive. Sectional tests focus on one subject (e.g. Reasoning only) for 20–25 minutes. Topic Wise tests drill a single topic like Puzzles, DI, or RC — ideal for targeted weak-area practice.',
  },
  {
    id: 'fq-mt-4',
    category: 'Mock Tests',
    question: 'Can I retake a mock test to improve my score?',
    answer: 'Yes, all mock tests can be reattempted. However, to ensure you see a new question set and not memorised answers, PrepBanker rotates questions across 3–5 test variants. Your best score and improvement trend are both tracked in the analytics dashboard.',
  },
  {
    id: 'fq-mt-5',
    category: 'Mock Tests',
    question: 'Are previous year papers included?',
    answer: "Yes. PrepBanker has digitised SBI PO and IBPS PO previous year papers from 2018 to 2025 (where officially released) as timed mocks. These are the most popular series on the platform because they give you genuine insight into real exam difficulty, question types, and the time pressure you'll face.",
  },
  {
    id: 'fq-mt-6',
    category: 'Mock Tests',
    question: 'How detailed are the solutions provided after each test?',
    answer: 'Every question has a full solution with: (1) the correct answer, (2) step-by-step working, (3) a shortcut method where applicable, and (4) the concept/formula used. For Reasoning questions, diagrams and table-based explanations are included. Solutions can be accessed immediately after test submission.',
  },
  {
    id: 'fq-mt-7',
    category: 'Mock Tests',
    question: 'What analytics do I get after a mock test?',
    answer: 'Post-test analytics include: overall score and percentile rank among all test-takers, section-wise accuracy and speed, attempted vs correct vs incorrect breakdown, topic-wise performance heatmap, time spent per question, comparison with top 10% performers, and an improvement score vs your previous attempt.',
  },
  {
    id: 'fq-mt-8',
    category: 'Mock Tests',
    question: 'Is there negative marking in PrepBanker mock tests?',
    answer: "Yes, PrepBanker replicates real exam negative marking rules. In Prelims mocks, each wrong answer deducts 0.25 marks. In Mains mocks, the deduction is 0.25 per wrong answer for objective sections. No deduction for unattempted questions — matching SBI and IBPS official rules exactly.",
  },

  // ══════════════════════════
  // SBI-PO
  // ══════════════════════════
  {
    id: 'fq-sbi-1',
    category: 'SBI-PO',
    question: 'What is the SBI PO exam?',
    answer: "SBI PO (Probationary Officer) is the recruitment exam conducted by State Bank of India to hire Probationary Officers — India's most prestigious banking role. As a PO, you are groomed for managerial positions across SBI's 22,000+ branches. The role offers a gross salary of ₹41,960–₹63,840/month plus allowances.",
  },
  {
    id: 'fq-sbi-2',
    category: 'SBI-PO',
    question: 'What are the stages of SBI PO 2026 selection?',
    answer: 'SBI PO 2026 has 4 selection stages: (1) Prelims — 100Q, 60 mins, qualifying stage with 3 sections; (2) Mains — 155Q objective + 50-mark Descriptive Paper, 3 hours total; (3) Group Exercises — structured group activities and group discussion; (4) Personal Interview — 30 marks. Final merit = Mains (60%) + GE + Interview (40%) combined.',
  },
  {
    id: 'fq-sbi-3',
    category: 'SBI-PO',
    question: 'What is the SBI PO 2026 syllabus for Prelims?',
    answer: 'SBI PO Prelims 2026 has 3 sections: (1) English Language — 30 questions, 20 minutes; (2) Quantitative Aptitude — 35 questions, 20 minutes; (3) Reasoning Ability — 35 questions, 20 minutes. Total: 100 questions, 100 marks, 60 minutes with section-wise time limits.',
  },
  {
    id: 'fq-sbi-4',
    category: 'SBI-PO',
    question: 'What is the expected SBI PO 2026 notification date?',
    answer: 'SBI PO 2026 notification is expected in April 2026 based on historical trends. Applications typically open simultaneously. Prelims are expected in June 2026 and Mains in August 2026. PrepBanker updates dates as soon as the official notification is released — bookmark the SBI PO page for alerts.',
  },
  {
    id: 'fq-sbi-5',
    category: 'SBI-PO',
    question: 'What is a good score in SBI PO Prelims?',
    answer: "Based on 2023–2025 cut-offs, a safe Prelims score for General category is 60–65+ out of 100 (accuracy-adjusted for negative marking). OBC: 57–62. SC/ST: 45–55. However, sectional cut-offs also apply — you must clear minimum marks in each of the 3 sections independently. PrepBanker's analytics shows your percentile vs all test-takers.",
  },
  {
    id: 'fq-sbi-6',
    category: 'SBI-PO',
    question: 'How many attempts does PrepBanker recommend for SBI PO preparation?',
    answer: "Experts recommend attempting at least 20–25 full mock tests before SBI PO Prelims and 10–15 Mains mocks. Supplement with 3–5 sectional tests per week in weak areas. PrepBanker's Grand Master Series provides 30 full mocks + 60 sectionals — sufficient for a complete preparation cycle.",
  },

  // ══════════════════════════
  // IBPS-PO
  // ══════════════════════════
  {
    id: 'fq-ibps-1',
    category: 'IBPS-PO',
    question: 'What is IBPS PO?',
    answer: 'IBPS PO (Probationary Officer) is the common recruitment exam conducted by the Institute of Banking Personnel Selection for 11 public sector banks simultaneously — including Bank of Baroda, PNB, Canara Bank, Union Bank, Bank of India, Central Bank, Indian Bank, UCO Bank, Bank of Maharashtra, Punjab & Sind Bank, and Indian Overseas Bank. With 3,500+ vacancies, it is the largest banking recruitment drive in India.',
  },
  {
    id: 'fq-ibps-2',
    category: 'IBPS-PO',
    question: 'What are the stages of IBPS PO 2026 selection?',
    answer: 'IBPS PO 2026 has 3 stages: (1) Preliminary Exam — 100Q, 60 minutes, qualifying; (2) Main Exam — 155 objective questions (3 hours) + 25-mark Descriptive Paper (30 minutes) = 3.5 hours total; (3) Interview — 100 marks. Final selection = Mains score (80%) + Interview (20%).',
  },
  {
    id: 'fq-ibps-3',
    category: 'IBPS-PO',
    question: 'What is the IBPS PO 2026 exam schedule?',
    answer: 'IBPS PO 2026 notification is expected in August 2026. Prelims are expected in October 2026, Mains in November 2026, and Interviews in January 2027. IBPS announces the official schedule simultaneously with the notification. PrepBanker maintains a live date tracker on the IBPS PO page.',
  },
  {
    id: 'fq-ibps-4',
    category: 'IBPS-PO',
    question: 'Which bank should I prefer after clearing IBPS PO?',
    answer: "After clearing IBPS PO, you submit bank preferences in order. The allocation depends on your score rank and vacancy availability. Bank of Baroda and Canara Bank are popular for urban postings. Salary structures are broadly similar across all 11 banks (₹36,000–₹63,840/month). Consider factors like your home state, posting preferences, and career growth culture.",
  },
  {
    id: 'fq-ibps-5',
    category: 'IBPS-PO',
    question: 'Is IBPS PO easier than SBI PO?',
    answer: 'Both exams are roughly similar in difficulty. SBI PO has 4 stages (including Group Exercises) vs 3 for IBPS. SBI PO Mains questions tend to be slightly more conceptual and calculation-intensive. IBPS PO covers more GA and Banking Awareness in Mains. Many aspirants prepare for both simultaneously since the syllabus is 90% overlapping.',
  },
  {
    id: 'fq-ibps-6',
    category: 'IBPS-PO',
    question: 'What is the IBPS PO Mains Descriptive Paper about?',
    answer: "IBPS PO Mains includes a 25-mark Descriptive Paper (30 minutes) consisting of one Essay (150–200 words) and one Letter/Precis Writing (100–150 words). Topics are typically current economic issues, banking-related subjects, or social policy. PrepBanker's Descriptive Writing Boost course has 50 sample essays and model letter answers.",
  },

  // ══════════════════════════
  // LIVE TESTS
  // ══════════════════════════
  {
    id: 'fq-lt-1',
    category: 'Live Tests',
    question: 'What are live tests and how are they different from regular mock tests?',
    answer: "Live tests run for a fixed time window (usually 60–180 minutes). All participants attempting the test within that window compete together on a real-time leaderboard. You see a countdown timer, can't pause the test, and get instant rank and percentile the moment the window closes. This simulates actual exam day pressure far better than self-paced mocks.",
  },
  {
    id: 'fq-lt-2',
    category: 'Live Tests',
    question: 'How do I join a live test on PrepBanker?',
    answer: "Navigate to the Live Tests section on PrepBanker. You'll see scheduled upcoming tests with start times. Click 'Join' before the window opens to bookmark it. At the scheduled time, hit 'Start Test' — the countdown begins. Live tests require a stable internet connection. The interface works on mobile and desktop.",
  },
  {
    id: 'fq-lt-3',
    category: 'Live Tests',
    question: 'Can I see my rank during a live test?',
    answer: "No — your rank is revealed only after the live test window closes. This is intentional: seeing your rank during the test can distract you and change question-selection strategy. After closing, you immediately see your rank among all participants, sectional scores, accuracy, and comparison with the top 10% of test-takers.",
  },
  {
    id: 'fq-lt-4',
    category: 'Live Tests',
    question: 'Are live tests free?',
    answer: 'PrepBanker offers 2–3 free live tests per month, including one Full Mock Live and one Topic-Wise Live. Additional live tests require a premium subscription. Free live tests have all the same features as premium ones — real-time leaderboard, solutions, and analytics. Check the Live Tests page for the current month\'s free slots.',
  },

  // ══════════════════════════
  // CURRENT AFFAIRS
  // ══════════════════════════
  {
    id: 'fq-ca-1',
    category: 'Current Affairs',
    question: 'How often is current affairs updated on PrepBanker?',
    answer: "Daily. PrepBanker publishes current affairs every morning by 8 AM covering the previous day's banking news, RBI updates, government schemes, economy data, international affairs, and important events. Articles are tagged with importance level (High / Medium) and exam relevance (SBI-PO / IBPS-PO / Both).",
  },
  {
    id: 'fq-ca-2',
    category: 'Current Affairs',
    question: 'Does PrepBanker provide monthly current affairs compilations?',
    answer: 'Yes. At the start of every month, PrepBanker releases a Monthly Current Affairs Capsule — a compiled PDF + quiz covering the previous month\'s most important events. These are exam-focused, point-form summaries with Quick Facts for last-minute revision. Monthly capsule quizzes are available under the Topic Wise section.',
  },
  {
    id: 'fq-ca-3',
    category: 'Current Affairs',
    question: 'Which current affairs categories are covered?',
    answer: 'PrepBanker covers: RBI Updates (repo rate, policy), Economy & Finance (GDP, inflation, budget), Banking Awareness (bank results, mergers, schemes), Government Schemes (PM programs, flagship initiatives), International Affairs (India treaties, G20, IMF/World Bank), Reports & Indexes (rankings, WEF, WIPO), Awards & Honors (Padma, Nobel, etc.), and Important Days.',
  },
  {
    id: 'fq-ca-4',
    category: 'Current Affairs',
    question: 'How many current affairs questions appear in SBI/IBPS PO exams?',
    answer: 'In SBI PO Mains, the General/Economy/Banking Awareness section has 40 questions — approximately 15–20 directly from current affairs of the last 6 months. In IBPS PO Mains, the GA section is 40 questions with a similar split. Prelims does not include a separate GA section for either exam.',
  },
  {
    id: 'fq-ca-5',
    category: 'Current Affairs',
    question: 'How far back should I study current affairs for banking exams?',
    answer: "Generally, the last 6 months before the exam date. For SBI PO Mains 2026 (expected August 2026), focus on February–August 2026. However, some questions do reference events from 12 months prior. PrepBanker's monthly capsules and topic-wise current affairs quizzes help you cover the right window efficiently.",
  },

  // ══════════════════════════
  // PREPARATION GUIDANCE
  // ══════════════════════════
  {
    id: 'fq-prep-1',
    category: 'Preparation Guidance',
    question: 'How many months of preparation is needed for SBI / IBPS PO?',
    answer: 'For a dedicated first-time aspirant: 3–4 months is sufficient for Prelims (4–5 hours/day). Mains requires 1–2 more months of focused preparation. Repeat aspirants can shorten this to 6–8 weeks with targeted mock test practice. PrepBanker\'s structured test series + analytics significantly accelerates preparation by identifying your weak spots early.',
  },
  {
    id: 'fq-prep-2',
    category: 'Preparation Guidance',
    question: 'Should I focus on SBI PO or IBPS PO first?',
    answer: 'Most experts recommend preparing for both simultaneously. The Prelims syllabus is identical (English, Quant, Reasoning). Mains has 85% syllabus overlap. Since SBI PO typically comes before IBPS PO in the calendar year, use SBI PO as your "trial run" — the real-exam experience significantly boosts IBPS PO performance.',
  },
  {
    id: 'fq-prep-3',
    category: 'Preparation Guidance',
    question: 'What is the ideal daily study plan for banking exam preparation?',
    answer: 'A recommended daily schedule: 1.5 hours — Concept revision (rotate subjects daily); 1 hour — Sectional practice (one section per day); 30 mins — Current affairs + GK; 1 hour — Full mock test (every alternate day); 30 mins — Solution review and shortcut learning. Total: ~4.5 hours/day. Weekly one live test for real exam pressure simulation.',
  },
  {
    id: 'fq-prep-4',
    category: 'Preparation Guidance',
    question: 'Which is the most scoring section in banking exams?',
    answer: 'Banking Awareness and General Awareness are the most scoring sections in Mains as they require factual memory with no calculation time. English Language is highly scoring for aspirants who read regularly. In Prelims, Reasoning Ability with Syllogisms and Inequalities offers the fastest marks. Data Interpretation is high-risk but high-reward in Mains if practiced well.',
  },
  {
    id: 'fq-prep-5',
    category: 'Preparation Guidance',
    question: 'How do I improve my speed for banking exam sections?',
    answer: 'Speed in Quant improves with calculation shortcalls: learn Vedic maths shortcuts, table up to 30, square of numbers up to 35, and cube roots. For Reasoning, learn to visualise seating arrangements with shorthand notation. For English, read one RC passage daily with a timer. PrepBanker\'s Speed Booster series has timed drills specifically calibrated to improve your attempt count under 60 minutes.',
  },
  {
    id: 'fq-prep-6',
    category: 'Preparation Guidance',
    question: 'Can a working professional crack SBI / IBPS PO?',
    answer: "Yes — and many do. With 2–3 hours of focused daily preparation and PrepBanker's mobile-friendly platform, working professionals successfully clear banking exams. Key strategies: use commute time for current affairs and GK, attempt one sectional test during lunch breaks, and dedicate weekends to full mock tests with thorough solution review.",
  },
];