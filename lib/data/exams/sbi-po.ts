// PATH: lib/data/exams/sbi-po.ts
import type { ExamDetailData } from '@/types/exam';

export const sbiPoData: ExamDetailData = {
  id: 'sbi-po',
  name: 'SBI PO Recruitment 2026 Notification',
  shortName: 'SBI PO',
  fullName: 'State Bank of India - Probationary Officer',
  tag: 'Official Notification Released',
  tagColor: '#16A34A',
  description:
    "The official recruitment notification has been released for Probationary Officer positions at State Bank of India. Candidates can check vacancies, eligibility, syllabus, exam pattern, and important dates.",
  fullDescription:
    "The SBI PO 2026 recruitment notification has been officially released for Probationary Officer positions at State Bank of India — the country's largest public-sector bank with over 22,000 branches and 500 million+ customers nationwide. More than 2,000 vacancies are expected across all categories this cycle. SBI PO is one of the most competitive banking exams in India, with over 20 lakh aspirants applying annually for a few thousand coveted seats. The 4-stage selection process — Prelims, Mains, Group Exercises, and Personal Interview — tests candidates on reasoning, quantitative aptitude, English, and banking awareness. Selected officers undergo a 2-year probation period during which they are groomed for branch and corporate roles. The gross salary in metro cities, inclusive of DA, HRA, and other allowances, exceeds \u20b990,000/month. Additional perks include subsidised home and car loans, LTC, pension, and medical cover — making it one of the best government job packages in India.",
  color: '#1B6EB5',
  accentColor: '#D4A017',
  overview:
    "SBI PO is one of India's most prestigious banking exams. As a Probationary Officer you'll be groomed for managerial roles in State Bank of India — the country's largest bank with 22,000+ branches nationwide.",
  tags: ['High Salary', 'Top Bank', 'National Level', 'Prestigious', '4 Stages', 'Annual Exam'],
  summaryCards: [
    { iconKey: 'FileText',   label: 'Notification', value: 'CRPD/PO/2026-27/01' },
    { iconKey: 'MapPin',     label: 'Exam Level',   value: 'National Level' },
    { iconKey: 'Users',      label: 'Posts',        value: '2,000+ (Expected)' },
    { iconKey: 'Clipboard',  label: 'Mode',         value: 'Online (CBT)' },
    { iconKey: 'ListChecks', label: 'Selection',    value: 'Prelims \u2192 Mains \u2192 GE+PI' },
    { iconKey: 'DollarSign', label: 'Salary',       value: '\u20b941,960 \u2013 \u20b963,840/mo' },
  ],
  dates: [
    { event: 'Official Notification',       date: 'April 2026 (Expected)',  status: 'upcoming' },
    { event: 'Application Start',           date: 'April 2026',             status: 'upcoming' },
    { event: 'Application Last Date',       date: 'May 2026',               status: 'upcoming' },
    { event: 'Admit Card (Prelims)',         date: 'May 2026',               status: 'upcoming' },
    { event: 'Prelims Exam',                date: 'June 2026',              status: 'upcoming' },
    { event: 'Prelims Result',              date: 'July 2026',              status: 'upcoming' },
    { event: 'Mains Exam',                  date: 'August 2026',            status: 'upcoming' },
    { event: 'Group Exercise & Interview',  date: 'Oct\u2013Nov 2026',      status: 'upcoming' },
    { event: 'Final Result',                date: 'December 2026',          status: 'upcoming' },
  ],
  examPattern: [
    {
      phase: 'Prelims', badge: 'Qualifying', badgeColor: '#1B6EB5',
      info: '60 Minutes \u2022 100 Questions \u2022 100 Marks',
      sections: [
        { subject: 'English Language',      questions: 30, marks: 30, time: '20 min' },
        { subject: 'Quantitative Aptitude', questions: 35, marks: 35, time: '20 min' },
        { subject: 'Reasoning Ability',     questions: 35, marks: 35, time: '20 min' },
      ],
      notes: ['1/4 negative marking', 'Sectional time limits apply', 'Qualifying \u2013 merit from Mains'],
    },
    {
      phase: 'Mains', badge: 'Merit Based', badgeColor: '#D4A017',
      info: '180 Min (Obj) + 30 Min (Desc) \u2022 200+50 Marks',
      sections: [
        { subject: 'Reasoning & Computer Aptitude',  questions: 45, marks: 60, time: '60 min' },
        { subject: 'Data Analysis & Interpretation', questions: 35, marks: 60, time: '45 min' },
        { subject: 'General/Economy/Banking',        questions: 40, marks: 40, time: '35 min' },
        { subject: 'English Language',               questions: 35, marks: 40, time: '40 min' },
        { subject: 'Descriptive Test',               questions:  2, marks: 50, time: '30 min' },
      ],
      notes: ['1/4 negative marking on objective', 'Descriptive is qualifying', 'Sectional cutoffs apply'],
    },
  ],
  syllabus: {
    'English Language':         ['Reading Comprehension', 'Cloze Test', 'Para Jumbles', 'Error Spotting', 'Fill in the Blanks', 'Sentence Improvement', 'Vocabulary', 'Idioms & Phrases'],
    'Quantitative Aptitude':    ['Number Series', 'Simplification', 'Data Interpretation', 'Quadratic Equations', 'Time & Work', 'Speed Distance Time', 'Profit & Loss', 'Mixtures & Alligations'],
    'Reasoning Ability':        ['Puzzles & Seating Arrangement', 'Coding-Decoding', 'Direction Sense', 'Blood Relations', 'Syllogism', 'Inequality', 'Input-Output', 'Data Sufficiency'],
    'General/Banking Awareness': ['Current Affairs (Banking)', 'RBI & Monetary Policy', 'Financial Awareness', 'Static Banking GK', 'Indian Economy', 'Budget & Plans', 'International Finance'],
  },
  selectionProcess: [
    { step: 1, title: 'Preliminary Exam',   desc: 'Online CBT \u2013 qualifying round with 100 questions in 60 minutes.',                  iconKey: 'Target'   },
    { step: 2, title: 'Main Exam',          desc: 'Objective + Descriptive \u2013 4 sections + essay/letter writing. Merit-based.',       iconKey: 'BookOpen' },
    { step: 3, title: 'Group Exercises',    desc: 'Group discussion, role play, and group activities to test team skills.',              iconKey: 'Users'    },
    { step: 4, title: 'Personal Interview', desc: 'Panel interview testing banking knowledge, personality, and communication.',          iconKey: 'Info'     },
  ],
  eligibility: {
    education:   'Graduation in any discipline from a recognized University',
    age:         '21 to 30 years (relaxation for SC/ST/OBC/PwD as per rules)',
    nationality: 'Indian Citizen / Subjects of Nepal / Bhutan / Tibetan refugees',
    attempts:    'Maximum 4 attempts (General); 7 attempts (OBC); Unlimited (SC/ST/PwD)',
  },
  salary: {
    basic:      '\u20b941,960/month (after training)',
    gross:      '\u20b982,000 \u2013 \u20b995,000/month (metro cities)',
    ctc:        '\u20b910\u201312 LPA (first year)',
    allowances: ['Dearness Allowance (DA)', 'House Rent Allowance (HRA)', 'City Compensatory Allowance', 'Travel Allowance', 'Medical Insurance', 'Pension Benefits'],
    perks:      ['Subsidized home loan', 'Car loan at lower rates', 'Staff quarter/HRA', 'Leave travel concession', 'Canteen facility'],
  },
  strategy: [
    { month: 'Month 1\u20132', focus: 'Foundation', tips: ['Complete basics of Quant, Reasoning, English', 'Build vocabulary (10 words/day)', 'Start daily current affairs habit', 'Attempt 2\u20133 topic-wise tests/week'] },
    { month: 'Month 2\u20133', focus: 'Practice',   tips: ['Shift to sectional mock tests', 'Target 85%+ accuracy per section', 'Speed building \u2013 2 questions/min', 'Mock analysis after every test'] },
    { month: 'Month 3\u20134', focus: 'Mock Phase', tips: ['Full-length Prelims mocks (5+/week)', 'Analyse cutoffs and weak areas', 'Revise current affairs (last 6 months)', 'Practice descriptive writing'] },
  ],
  cutoffs: [
    { year: '2024', prelims: { general: 62.25, obc: 57.50, sc: 52.00, st: 48.75 }, mains: { general: 55.20, obc: 50.10, sc: 44.80, st: 42.30 } },
    { year: '2023', prelims: { general: 60.75, obc: 55.25, sc: 50.50, st: 47.00 }, mains: { general: 53.60, obc: 48.40, sc: 43.20, st: 40.10 } },
    { year: '2022', prelims: { general: 58.50, obc: 53.00, sc: 48.25, st: 45.50 }, mains: { general: 51.40, obc: 46.80, sc: 42.00, st: 38.60 } },
  ],
  examFaqs: [
    {
      q: 'What is SBI PO?',
      a: "SBI PO (Probationary Officer) is the recruitment exam conducted by State Bank of India. It is one of the most prestigious banking jobs in India with basic pay of \u20b941,960/month and gross salary up to \u20b995,000/month in metro cities.",
    },
    {
      q: 'How many stages are in SBI PO selection?',
      a: 'SBI PO has 4 stages: Preliminary Exam (qualifying), Main Exam (merit-based), Group Exercises, and Personal Interview. The final merit list combines Mains + GE + Interview scores.',
    },
    {
      q: 'How many attempts are allowed for SBI PO?',
      a: "General category gets 4 attempts, OBC gets 7 attempts, SC/ST/PwD have unlimited attempts. The maximum age limit also applies regardless of attempts.",
    },
    {
      q: 'What is the salary of SBI PO?',
      a: "Basic pay is \u20b941,960/month. With DA, HRA, and other metro allowances the gross salary is \u20b982,000\u2013\u20b995,000/month, with a CTC of approximately \u20b910\u201312 LPA in the first year.",
    },
    {
      q: 'Does PrepBanker provide SBI PO mock tests?',
      a: "Yes! PrepBanker provides full-length Prelims and Mains mock tests, sectional tests, topic-wise practice, and previous year paper simulations with detailed performance analytics.",
    },
    {
      q: 'What is the SBI PO 2026 syllabus?',
      a: "Prelims covers English Language (30Q), Quantitative Aptitude (35Q), and Reasoning Ability (35Q). Mains covers Reasoning & Computer Aptitude (60M), Data Analysis (60M), General/Economy/Banking (40M), English (40M), and a Descriptive test \u2014 Essay + Letter (50M).",
    },
    {
      q: 'Is there negative marking in SBI PO?',
      a: "Yes. 1/4 mark is deducted for every wrong answer in both Prelims and Mains objective sections. Unattempted questions carry no penalty. The Descriptive test has no negative marking.",
    },
    {
      q: 'Can a fresher apply for SBI PO?',
      a: "Yes, freshers are eligible. The only academic requirement is graduation in any discipline from a recognised university. There is no minimum work experience required. Age must be between 21\u201330 years.",
    },
    {
      q: 'How to prepare for the SBI PO Descriptive Test?',
      a: "Practice writing formal letters (250 words) and essays (300 words) daily. Focus on banking and economic topics, use clear paragraph structure, and build grammar and vocabulary. PrepBanker offers dedicated descriptive practice modules with model answers.",
    },
    {
      q: 'What happens after SBI PO final selection?',
      a: "Selected candidates receive an appointment letter and undergo pre-joining medical examination followed by document verification. A 2-year probation period at SBI follows, after which officers are confirmed. Branch posting is based on merit and preference.",
    },
  ],
};