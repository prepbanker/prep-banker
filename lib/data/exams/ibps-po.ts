// PATH: lib/data/exams/ibps-po.ts
import type { ExamDetailData } from '@/types/exam';

export const ibpsPoData: ExamDetailData = {
  id: 'ibps-po',
  name: 'IBPS PO Recruitment 2026 Notification',
  shortName: 'IBPS PO',
  fullName: 'IBPS – Institute of Banking Personnel Selection',
  tag: 'Registration Open',
  tagColor: '#F0B429',
  description:
    'The official recruitment notification has been released for Probationary Officer positions across 11 public sector banks. Check vacancies, eligibility, syllabus, exam pattern, and important dates.',
  fullDescription:
    'IBPS PO 2026 opens doors to 11 public sector banks simultaneously through a single common recruitment exam — one application, multiple bank opportunities. Banks covered include Bank of Baroda, Punjab National Bank, Canara Bank, Union Bank of India, Bank of India, Bank of Maharashtra, Central Bank of India, Indian Bank, Indian Overseas Bank, Punjab & Sind Bank, and UCO Bank. With over 3,500 vacancies expected, IBPS PO represents the largest coordinated banking recruitment drive in India. The 3-stage selection process — Prelims, Mains, and Personal Interview — assigns 80% weight to Mains and 20% to Interview for the final merit list. Selected officers can be posted to any branch of their allotted bank across India. The pay structure follows the 11th Bipartite Settlement with a basic pay of ₹36,000/month; gross salary in metro cities exceeds ₹80,000/month. Perks include concessional home and vehicle loans, annual performance bonus, medical insurance, staff quarters/HRA, and leave travel concession.',
  color: '#D4A017',
  accentColor: '#1B6EB5',
  overview:
    'IBPS PO opens doors to 11 Public Sector Banks simultaneously — one exam, multiple bank opportunities. Covering BOB, PNB, Canara Bank, Union Bank and more, it is the largest banking recruitment drive in India.',
  tags: ['11 Banks', 'Large Vacancies', 'National Level', '3 Stages', 'Annual Exam', 'Transferable'],
  summaryCards: [
    { iconKey: 'FileText',   label: 'Notification', value: 'IBPS/REC/CRP/PO-XVI' },
    { iconKey: 'MapPin',     label: 'Exam Level',   value: 'National Level' },
    { iconKey: 'Users',      label: 'Expected Vacancies', value: '3,500+' },
    { iconKey: 'Clipboard',  label: 'Mode',         value: 'Online (CBT)' },
    { iconKey: 'ListChecks', label: 'Selection',    value: 'Prelims → Mains → Interview' },
    { iconKey: 'DollarSign', label: 'Starting Salary', value: '₹52,000/month' },
  ],
  dates: [
    { event: 'Official Notification', date: 'August 2026 (Expected)',  status: 'upcoming' },
    { event: 'Application Start',     date: 'August 2026',             status: 'upcoming' },
    { event: 'Application Last Date', date: 'September 2026',          status: 'upcoming' },
    { event: 'Admit Card (Prelims)',  date: 'October 2026',            status: 'upcoming' },
    { event: 'Prelims Exam',          date: 'October 2026',            status: 'upcoming' },
    { event: 'Prelims Result',        date: 'November 2026',           status: 'upcoming' },
    { event: 'Mains Exam',            date: 'November 2026',           status: 'upcoming' },
    { event: 'Interview',             date: 'January 2027',            status: 'upcoming' },
    { event: 'Final Result',          date: 'February 2027',           status: 'upcoming' },
  ],
  examPattern: [
    {
      phase: 'Prelims', badge: 'Qualifying', badgeColor: '#1B6EB5',
      info: '60 Minutes • 100 Questions • 100 Marks',
      sections: [
        { subject: 'English Language',      questions: 30, marks: 30, time: '20 min' },
        { subject: 'Quantitative Aptitude', questions: 35, marks: 35, time: '20 min' },
        { subject: 'Reasoning Ability',     questions: 35, marks: 35, time: '20 min' },
      ],
      notes: ['1/4 negative marking', 'Sectional cutoffs apply', 'Qualifying – Mains is merit exam'],
    },
    {
      phase: 'Mains', badge: 'Merit Based', badgeColor: '#D4A017',
      info: '180 Min (Obj) + 30 Min (Desc) • 200+25 Marks',
      sections: [
        { subject: 'Reasoning & Computer Aptitude',  questions: 45, marks: 60, time: '60 min' },
        { subject: 'English Language',               questions: 35, marks: 40, time: '40 min' },
        { subject: 'Data Analysis & Interpretation', questions: 35, marks: 60, time: '45 min' },
        { subject: 'General, Economy & Banking',     questions: 40, marks: 40, time: '35 min' },
        { subject: 'Descriptive Test',               questions:  2, marks: 25, time: '30 min' },
      ],
      notes: ['Mains (80%) + Interview (20%) = Final merit', 'Descriptive is qualifying', 'Sectional cutoffs apply'],
    },
  ],
  syllabus: {
    'English Language':         ['Reading Comprehension','Cloze Test','Para Jumbles','Error Spotting','Sentence Connectors','Word Usage','Match the Column','Sentence Completion'],
    'Quantitative Aptitude':    ['Data Interpretation','Approximation','Number Series','Quadratic Equations','Caselet DI','Time-Speed-Distance','Permutation & Combination','Probability'],
    'Reasoning Ability':        ['Puzzles (Floor, Box, Linear)','Seating Arrangement','Syllogism','Blood Relations','Coding-Decoding','Logical Reasoning','Data Sufficiency','Input-Output'],
    'General/Banking Awareness':['Banking Awareness','RBI Policies & Functions','Current Affairs (6 months)','Financial Inclusion','Government Schemes','Static GK','Computer Basics'],
  },
  selectionProcess: [
    { step:1, title:'Preliminary Exam',   desc:'Online CBT – 100 questions in 60 minutes. Qualifying in nature; shortlists for Mains.',             iconKey:'Target'   },
    { step:2, title:'Main Exam',          desc:'Objective + Descriptive – 4 sections plus letter/essay. Carries 80% weight in final merit.',       iconKey:'BookOpen' },
    { step:3, title:'Personal Interview', desc:'Panel interview at the participating bank level. Carries 20% weight in final merit.',               iconKey:'Info'     },
  ],
  eligibility: {
    education:   'Graduation in any discipline from a recognized University / Institution',
    age:         '20 to 30 years (relaxation for SC/ST/OBC/PwD/Ex-servicemen)',
    nationality: 'Indian Citizen / Subjects of Nepal / Bhutan / Tibetan refugees',
    attempts:    'Age limit is the determining factor; no explicit attempt limit stated by IBPS',
  },
  salary: {
    basic:      '₹36,000/month (11th Bipartite Settlement)',
    gross:      '₹57,000/month (starting gross)',
    ctc:        '₹7.5–10 LPA',
    allowances: ['Dearness Allowance (DA)','House Rent Allowance (HRA)','Special Allowance','City Compensatory Allowance','Medical Insurance','Pension (NPS)'],
    perks:      ['Home loan at concessional rates','Vehicle loan benefits','Staff quarters/HRA','Annual leave travel concession','Annual performance bonus'],
  },
  strategy: [
    { month:'Month 1–2', focus:'Foundation', tips:['Master basics: Quant, Reasoning, English','Learn banking terms & financial concepts','Start current affairs (daily 30 min)','Topic-wise mini tests daily'] },
    { month:'Month 2–3', focus:'Practice',   tips:['Sectional mock tests (2 per section/week)','Target 80%+ accuracy consistently','Speed training: 1.5 min per question','Review every wrong answer deeply'] },
    { month:'Month 3–4', focus:'Mock Phase', tips:['Full mock tests (1 every 2 days)','Analyse percentile and cutoff trends','Banking GK revision sprint','Descriptive writing practice (3x/week)'] },
  ],
  cutoffs: [
    { year:'2024', prelims:{general:63.50,obc:58.75,sc:53.25,st:49.00}, mains:{general:57.80,obc:52.60,sc:46.40,st:43.20} },
    { year:'2023', prelims:{general:61.25,obc:56.50,sc:51.00,st:47.25}, mains:{general:55.40,obc:50.20,sc:44.60,st:41.00} },
    { year:'2022', prelims:{general:59.75,obc:54.25,sc:49.50,st:45.75}, mains:{general:53.20,obc:48.00,sc:42.80,st:39.40} },
  ],
  examFaqs: [
    { q:'What is IBPS PO?', a:'IBPS PO is the common written exam by Institute of Banking Personnel Selection for recruiting Probationary Officers in 11 public sector banks. With 3,500+ vacancies, it is the largest banking recruitment drive in India.' },
    { q:'Which banks participate in IBPS PO?', a:'IBPS PO recruits for 11 banks: Bank of Baroda, Bank of India, Bank of Maharashtra, Canara Bank, Central Bank of India, Indian Bank, Indian Overseas Bank, Punjab National Bank, Punjab & Sind Bank, UCO Bank, and Union Bank of India.' },
    { q:'How is IBPS PO different from SBI PO?', a:'SBI PO recruits only for SBI with 4 stages including Group Exercises. IBPS PO recruits for 11 banks with 3 stages (Prelims, Mains, Interview). IBPS PO Mains carries 80% weight and Interview carries 20% for final merit.' },
    { q:'What is the IBPS PO interview weightage?', a:'The final merit is 80% Mains score + 20% Interview score. Both are normalized separately before combining. A strong Mains performance can significantly offset an average interview.' },
    { q:'Are free IBPS PO mock tests available on PrepBanker?', a:'Yes. PrepBanker provides free IBPS PO mock tests for Prelims and Mains, with complete solutions, basic performance reports, and sectional accuracy analysis. Premium tests include full analytics.' },
    { q:'What is the IBPS PO 2026 syllabus?', a:'Prelims: English (30Q), Quantitative Aptitude (35Q), Reasoning (35Q). Mains: Reasoning & Computer Aptitude (60M), English Language (40M), Data Analysis & Interpretation (60M), General/Economy/Banking (40M), and a Descriptive test — Essay + Letter (25M).' },
    { q:'Is computer knowledge tested in IBPS PO?', a:'Yes, computer aptitude is clubbed with Reasoning in the Mains exam (combined 45 questions, 60 marks, 60 minutes). Topics include basic computer fundamentals, MS Office, internet and networking concepts, database basics, and cybersecurity awareness.' },
    { q:'What documents are required for IBPS PO application?', a:'You need a valid photo ID (Aadhaar/PAN/Passport), graduation certificate, 10th and 12th mark sheets, category certificate (if applicable), PwD certificate (if applicable), and a recent passport-size photograph. Keep scanned copies ready for online upload.' },
    { q:'Can I apply for both SBI PO and IBPS PO?', a:'Yes, you can apply for both SBI PO and IBPS PO simultaneously, provided you meet the eligibility criteria for each. Both exams have separate application processes, fees, and exam dates, so you need to register separately on SBI and IBPS portals.' },
    { q:'How is allotment to a specific bank done in IBPS PO?', a:'After final results, bank allotment is done by IBPS based on merit rank, category, vacancies in each bank, and candidate preference. Candidates higher on the merit list get priority in bank preference. You can indicate preferences at the time of interview or through the IBPS portal.' },
  ],
};