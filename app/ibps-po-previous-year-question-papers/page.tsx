// PATH: app/ibps-po-previous-year-question-papers/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PreviousYearPapersLayout, { PYQPaper } from '@/components/sections/previous-year-papers/PreviousYearPapersLayout';
import { Lightbulb, Calendar, Compass, Search, Clock, FileEdit, RefreshCw, Trophy, Columns, Link, Scale, BarChart3, Star, Brain, BookOpen, Briefcase, Laptop, Check } from 'lucide-react';

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'IBPS PO Previous Year Question Papers (2016–2025) Free PDF',
  description:
    'Download IBPS PO previous year question papers 2016–2025 with solutions. Practice prelims & mains PYQs, then attempt free topic-wise mock tests on PrepBanker.',
  keywords: [
    'IBPS PO previous year question papers',
    'IBPS PO PYQ pdf',
    'IBPS PO previous year papers with solutions',
    'IBPS PO prelims previous year paper',
    'IBPS PO mains question paper',
    'IBPS PO memory based papers',
    'IBPS PO exam pattern',
  ],
  alternates: {
    canonical: 'https://prepbanker.com/ibps-po-previous-year-question-papers',
  },
  openGraph: {
    title: 'IBPS PO Previous Year Question Papers (2016–2025) Free PDF',
    description:
      'Download IBPS PO previous year question papers 2016–2025 with solutions. Practice prelims & mains PYQs, then attempt free topic-wise mock tests on PrepBanker.',
    url: 'https://prepbanker.com/ibps-po-previous-year-question-papers',
    type: 'website',
  },
};

// --- Hardcoded Papers for IBPS PO (2016–2025) ---
const IBPS_PO_PAPERS: PYQPaper[] = [
  {
    id: 'ibps-2025-pre',
    exam: 'IBPS PO',
    year: 2025,
    stage: 'Prelims',
    shift: 'Official Paper',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'ibps-2025-mains',
    exam: 'IBPS PO',
    year: 2025,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 225,
    duration: '210 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'ibps-2024-pre',
    exam: 'IBPS PO',
    year: 2024,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'ibps-2024-mains',
    exam: 'IBPS PO',
    year: 2024,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 225,
    duration: '210 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'ibps-2023-pre',
    exam: 'IBPS PO',
    year: 2023,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'ibps-2023-mains',
    exam: 'IBPS PO',
    year: 2023,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 225,
    duration: '210 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'ibps-2022-pre',
    exam: 'IBPS PO',
    year: 2022,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'ibps-2022-mains',
    exam: 'IBPS PO',
    year: 2022,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 225,
    duration: '210 Min',
    locked: true
  },
  {
    id: 'ibps-2021-pre',
    exam: 'IBPS PO',
    year: 2021,
    stage: 'Prelims',
    shift: 'Official Paper',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'ibps-2020-pre',
    exam: 'IBPS PO',
    year: 2020,
    stage: 'Prelims',
    shift: 'Official Paper',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'ibps-2016-2020-archive',
    exam: 'IBPS PO',
    year: 2020,
    stage: 'Prelims',
    shift: 'Combined Archive',
    totalQuestions: 500,
    totalMarks: 500,
    duration: '300 Min',
    locked: true
  }
];

// --- FAQ Content ---
const FAQS = [
  {
    question: 'Where can I download IBPS PO previous year question papers for free?',
    answer: 'You can download IBPS PO previous year question papers for free in the PYQ section above, covering prelims and mains papers from 2016 to 2025. Each paper comes with a detailed solution, and you can also attempt the same papers as a live timed quiz instead of a static PDF.'
  },
  {
    question: 'How many years of IBPS PO papers should I solve before the exam?',
    answer: 'Solve at least the last 5 years of papers, though going back 8 to 10 years gives a fuller picture of topic cycles. The most recent 2 to 3 years matter most for current difficulty calibration, while older papers reveal which question types keep returning.'
  },
  {
    question: 'Is IBPS PO previous year paper enough to crack the exam without coaching?',
    answer: 'Previous year papers alone are not enough, but they are a strong foundation if paired with regular mock tests and sectional practice. They teach you pattern and difficulty; mocks build the speed and stamina coaching institutes otherwise charge for. Many selected candidates have cleared IBPS PO through self-study with disciplined PYQ and mock practice.'
  },
  {
    question: "What's the difference between IBPS PO and SBI PO previous year papers in difficulty?",
    answer: 'IBPS PO papers are generally considered slightly easier than SBI PO, partly because IBPS PO recruits for 11 public sector banks with more combined vacancies, while SBI PO competes for a single employer with far fewer seats. Core topics overlap heavily, so practicing both PYQ sets benefits either exam.'
  },
  {
    question: 'Are IBPS PO previous year papers the same as mock tests?',
    answer: 'No. Previous year papers are memory-based reconstructions from past candidates, so they may carry small recall inaccuracies. Mock tests on PrepBanker are built fresh on the current IBPS PO pattern with calibrated difficulty and an exam-identical interface, making them more reliable for final-stage readiness checks.'
  },
  {
    question: 'Is IBPS PO previous year paper available for both prelims and mains?',
    answer: 'Yes. IBPS PO previous year papers are available separately for Prelims (English, Quantitative Aptitude, Reasoning Ability) and Mains (Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, English, plus the Descriptive Test). PrepBanker organizes both stages year-wise for focused practice.'
  },
  {
    question: 'What is the IBPS PO exam pattern for 2026?',
    answer: 'IBPS PO Prelims is a 100-mark, 60-minute test covering English, Quant, and Reasoning with sectional time limits. Mains has 200 objective marks across four sections plus a 25-mark Descriptive Test (Letter Writing and Essay). Both stages carry 0.25 negative marking per wrong answer.'
  },
  {
    question: 'Is PrepBanker free to use for IBPS PO preparation?',
    answer: 'PrepBanker gives free access to IBPS PO previous year question papers, sectional quizzes, and daily practice problems. Full-length mock tests with detailed performance analytics are available after a quick free registration, helping you track your all-India percentile and weak topics.'
  },
  {
    question: 'How many vacancies does IBPS PO have in 2026?',
    answer: 'The official IBPS PO 2026 (CRP PO/MT-XVI) vacancy count will be confirmed with the notification, expected around June-July 2026. Based on recent cycles, expect a range of 4,000 to 6,000 vacancies; the 2025 cycle had 5,208 vacancies across 11 participating banks.'
  },
  {
    question: 'What was the IBPS PO prelims cut off in 2025?',
    answer: 'The IBPS PO 2025 Prelims cut-off for General, EWS, and OBC categories was 49.21 out of 100. This was notably lower than the 2023 cut-off of 54.25, showing that cut-offs fluctuate meaningfully year to year based on paper difficulty and applicant volume.'
  },
  {
    question: 'When is the IBPS PO 2026 exam?',
    answer: 'As per the official IBPS Calendar 2026, IBPS PO Prelims is scheduled for August 22-23, 2026, and Mains for October 4, 2026. The detailed notification with vacancy numbers is expected in June-July 2026 on ibps.in.'
  }
];

// --- JSON-LD Schemas ---
const faqSchemaJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbSchemaJson = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://prepbanker.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "IBPS PO Previous Year Question Papers",
      "item": "https://prepbanker.com/ibps-po-previous-year-question-papers"
    }
  ]
};

const webPageSchemaJson = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://prepbanker.com/ibps-po-previous-year-question-papers",
  "url": "https://prepbanker.com/ibps-po-previous-year-question-papers",
  "name": "IBPS PO Previous Year Question Papers (2016–2025) Free PDF",
  "description": "Download IBPS PO previous year question papers 2016–2025 with solutions. Practice prelims and mains PYQs section-wise, then attempt free topic-wise mock tests on PrepBanker.",
  "datePublished": "2026-06-23",
  "dateModified": "2026-06-23",
  "inLanguage": "en-IN",
  "isPartOf": {
    "@type": "WebSite",
    "name": "PrepBanker",
    "url": "https://prepbanker.com"
  },
  "breadcrumb": {
    "@id": "https://prepbanker.com/ibps-po-previous-year-question-papers#breadcrumb"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://prepbanker.com/images/ibps-po-previous-year-papers-cover.jpg"
  }
};

const courseSchemaJson = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "IBPS PO Previous Year Question Papers Practice Series",
  "description": "A structured year-wise collection of IBPS PO Prelims and Mains previous year question papers (2016–2025) with solutions, paired with sectional quizzes and full mock tests on PrepBanker.",
  "provider": {
    "@type": "Organization",
    "name": "PrepBanker",
    "sameAs": "https://prepbanker.com"
  },
  "educationalLevel": "Competitive Exam Preparation",
  "about": "IBPS Probationary Officer / Management Trainee Recruitment Exam",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT2H"
  }
};

export default function IBPSPOPapersPage() {
  return (
    <>
      {/* Dynamic SEO Schemas hoisted natively (prevents hydration mismatch) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaJson) }}
      />

      <Header />

      <main>
        <PreviousYearPapersLayout
          examName="IBPS PO"
          papers={IBPS_PO_PAPERS}
          heroTitle={
            <>
              IBPS PO Previous Year <br className="hidden md:inline" />
              <span className="text-gold-gradient">Question Papers</span> <span className="whitespace-nowrap">(2016–2025)</span>
            </>
          }
          heroSubtitle="IBPS PO previous year question papers from 2016 to 2025 are available below for both Prelims and Mains, with full solutions. These memory-based papers show you the exact section-wise pattern, time pressure, and difficulty trend across 11 participating public sector banks — the fastest way to know what the exam actually demands before you sit for it."
          faqs={FAQS}
        >
          {/* Main Editorial SEO Content — Optimized & Redesigned for visual appeal */}
          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] text-base shadow-xs">💡</span>
            Why IBPS PO Previous Year Question Papers Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[var(--color-navy-deep)] to-[var(--color-navy-mid)] text-white border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-md">
              <div>
                <h4 className="text-[10px] font-extrabold text-[var(--color-gold-bright)] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-bright)] animate-pulse" />
                  CRP PO/MT Exam Stats
                </h4>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold text-slate-300">Participating Banks</span>
                    <span className="text-sm font-bold text-white">11 Banks</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold text-slate-300">CRP-XV Vacancies (2025)</span>
                    <span className="text-sm font-bold text-white">5,208 Posts</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-1">
                    <span className="text-xs font-semibold text-slate-300">CRP-XIV Vacancies (2024)</span>
                    <span className="text-sm font-extrabold text-[var(--color-gold-bright)]">4,455 Posts</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 text-[10px] text-slate-400 font-medium">
                IBPS selects officers for 11 public sector banks. Vacancy numbers shape the overall competition and cut-off dynamics.
              </div>
            </div>
            
            {/* Insights Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(13,27,62,0.02)]">
              <div>
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3.5">Sectional Lock & Time Pressures</h4>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex gap-2.5 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span><strong>Sectional Lock constraint:</strong> You cannot transfer time from one section to another. Prelims locks each section at 20 minutes strictly.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span><strong>Select Preferences:</strong> Recruiting for 11 banks changes vacancy calculations and registration strategy.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span><strong>Realistic Benchmarks:</strong> Solving recent papers gives a clear map of what topics show up and how sections are timed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Scale className="w-4 h-4" />
            </span>
            IBPS PO Prelims vs Mains: What's the Real Difference?
          </h2>
          <p className="text-slate-650 leading-relaxed mb-4 text-sm sm:text-base">
            Here's the structural comparison that should guide your preparation strategy:
          </p>
          <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl bg-white shadow-[0_4px_16px_rgba(13,27,62,0.02)]">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[var(--color-navy-deep)] text-white border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
                  <th className="p-4 pl-6">Aspect</th>
                  <th className="p-4">Prelims (Qualifying Only)</th>
                  <th className="p-4 pr-6">Mains (Counts for Merit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Total Marks</td>
                  <td className="p-4 text-slate-600">100 Marks <span className="text-[10px] text-slate-400 font-semibold">(100 Questions)</span></td>
                  <td className="p-4 pr-6 text-slate-600">225 Marks <span className="text-[10px] text-slate-400 font-semibold">(200 Obj + 25 Descriptive Test)</span></td>
                </tr>
                <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Duration</td>
                  <td className="p-4 text-slate-600">60 Minutes <span className="text-[10px] text-slate-400 font-semibold">(Sectional Timers)</span></td>
                  <td className="p-4 pr-6 text-slate-600">3 Hours Obj + 30 Mins Desc</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Sections</td>
                  <td className="p-4 text-slate-600">Reasoning (35Q), Quant (35Q), English (30Q)</td>
                  <td className="p-4 pr-6 text-slate-600">Reasoning & Computer, Data Analysis, General/Economy, English + Descriptive</td>
                </tr>
                <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Cut-offs</td>
                  <td className="p-4 text-slate-600"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100/50 text-[10px] font-bold">Qualifying only</span></td>
                  <td className="p-4 pr-6 text-slate-600"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100/50 text-[10px] font-bold">80% weight for merit</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gradient-to-r from-amber-50/60 to-orange-50/30 border-l-4 border-[var(--color-yellow)] p-5 rounded-r-2xl text-xs sm:text-sm text-amber-900 leading-relaxed shadow-[0_2px_8px_rgba(245,158,11,0.05)] flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong>Key Strategy Takeaway:</strong> Reasoning & Computer Aptitude in Mains carries 45 questions for 60 marks, while Data Analysis carries 35 questions for 60 marks. The final merit list combines Mains (80%) with Interview (20%). Invest early in Mains-level data interpretation and multi-floor reasoning sets.
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Calendar className="w-4 h-4" />
            </span>
            How IBPS PO Previous Year Papers Have Changed Over the Years (2016–2025)
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
            Reviewing a decade of papers shows a gradual shift: Reasoning puzzles have grown more layered, Data Interpretation sets increasingly combine tables with caselets, and General Awareness leans harder on the preceding 6 months of banking-specific news rather than static GK. The core skeleton remains similar, but complexity has evolved:
          </p>
          <div className="relative border-l-2 border-slate-100 pl-6 ml-2.5 my-8 space-y-6">
            {/* Era 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-[var(--color-blue)] shadow-sm group-hover:scale-125 transition-transform duration-200" />
              <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl shadow-[0_2px_12px_rgba(13,27,62,0.02)] transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100/50 uppercase tracking-wide">
                    2024 – 2025
                  </span>
                  <span className="text-[10px] text-green-700 font-extrabold bg-green-50 px-2 py-0.5 rounded border border-green-100 uppercase tracking-wider">
                    Current Peak
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">Layered Reasoning & Caselet DI Integration</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Reasoning puzzles are heavily multi-layered. Quantitative Aptitude is dominated by caselet DI combined with complex arithmetic applications, requiring absolute concept clarity.
                </p>
              </div>
            </div>
            
            {/* Era 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-slate-400 shadow-sm group-hover:scale-125 transition-transform duration-200" />
              <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl shadow-[0_2px_12px_rgba(13,27,62,0.02)] transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200/50 uppercase tracking-wide">
                    2022 – 2023
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">General Awareness Deepening & Variable Shifts</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  General Awareness shifted heavily towards RBI policy details and core banking operations over static GK. Quantitative section difficulty spiked with lengthy calculations.
                </p>
              </div>
            </div>
            
            {/* Era 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-slate-300 shadow-sm group-hover:scale-125 transition-transform duration-200" />
              <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl shadow-[0_2px_12px_rgba(13,27,62,0.02)] transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-500 border border-slate-150 uppercase tracking-wide">
                    2016 – 2021
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">Traditional Core & Timed Sections Introduction</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Introduced strict sectional timers. Papers focused heavily on speed math (simplifications, quadratic equations) and traditional single-variable reasoning puzzles.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50/60 to-indigo-50/30 border-l-4 border-[var(--color-blue)] p-4 rounded-r-2xl text-xs sm:text-sm text-slate-700 mb-6 flex items-start gap-3 shadow-[0_2px_8px_rgba(27,110,181,0.03)]">
            <Lightbulb className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <strong>Pro Tip:</strong> When solving older papers (2016–2020), do not gauge your preparation readiness solely by your score. Use them for general topic familiarity, and reserve newer papers (2023–2025) for accurate performance benchmarking.
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <BarChart3 className="w-4 h-4" />
            </span>
            IBPS PO Vacancy & Cut-Off Trends
          </h2>
          <p className="text-slate-650 leading-relaxed mb-4 text-sm sm:text-base">
            Vacancy count directly shapes how aggressive your target score should be. IBPS PO CRP-XV (2025) released 5,208 vacancies, while the preceding CRP-XIV cycle had 4,455 vacancies — a meaningful jump that eased competition slightly in 2025 compared to the year before.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 items-start">
            {/* Cut-off Table */}
            <div className="md:col-span-2 overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-[0_4px_16px_rgba(13,27,62,0.02)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--color-navy-deep)] text-white border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
                    <th className="p-4 pl-6">Year</th>
                    <th className="p-4 pr-6">Prelims Cut-off — General (out of 100)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">2025</td>
                    <td className="p-4 pr-6 text-slate-650 font-semibold">49.21</td>
                  </tr>
                  <tr className="bg-slate-50/20 hover:bg-slate-55/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">2024</td>
                    <td className="p-4 pr-6 text-slate-650 font-semibold">48.50</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">2023</td>
                    <td className="p-4 pr-6 text-slate-650 font-semibold">54.25</td>
                  </tr>
                  <tr className="bg-slate-50/20 hover:bg-slate-55/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">2019</td>
                    <td className="p-4 pr-6 text-slate-650 font-semibold">59.75</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Target Score Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-[var(--color-navy-deep)] text-white border border-white/5 rounded-2xl p-5 shadow-lg flex flex-col justify-between h-full">
              <div>
                <h4 className="text-[10px] font-extrabold text-[var(--color-gold-bright)] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-[var(--color-gold-bright)] fill-[var(--color-gold-bright)] shrink-0" /> Target Benchmark
                </h4>
                <div className="text-3xl font-black text-white mb-2">55+</div>
                <p className="text-xs text-slate-350 leading-relaxed">
                  Don't anchor to the lowest cut-off (48.50 in 2024). Target the highest recent cut-off (54.25 in 2023) as your minimum goal to account for vacancy drops or easier papers.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Trophy className="w-4 h-4" />
            </span>
            What Topics Show Up Most Often in IBPS PO Papers?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
            {[
              {
                title: 'Quantitative Aptitude',
                icon: BarChart3,
                bgColor: 'bg-blue-50/60 text-blue-600 border-blue-100',
                borderHover: 'hover:border-blue-300',
                desc: 'Data Interpretation (tabular, line graph, caselet), Simplification/Approximation, Quadratic Equations, and Number Series.'
              },
              {
                title: 'Reasoning Ability',
                icon: Brain,
                bgColor: 'bg-indigo-50/60 text-indigo-600 border-indigo-100',
                borderHover: 'hover:border-indigo-300',
                desc: 'Puzzles (linear, circular, floor-based, hybrid setups), Syllogism, Inequality, and Coding-Decoding.'
              },
              {
                title: 'English Language',
                icon: BookOpen,
                bgColor: 'bg-amber-50/60 text-amber-600 border-amber-100',
                borderHover: 'hover:border-amber-300',
                desc: 'Reading Comprehension, Cloze Tests, Sentence Rearrangement, and Error Spotting.'
              },
              {
                title: 'General/Banking Awareness',
                icon: Briefcase,
                bgColor: 'bg-emerald-50/60 text-emerald-600 border-emerald-100',
                borderHover: 'hover:border-emerald-300',
                desc: 'Recent RBI monetary policy, government banking schemes, static banking GK, and financial abbreviations.'
              }
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <div key={i} className={`p-5 bg-white border border-slate-200 rounded-2xl shadow-[0_2px_12px_rgba(13,27,62,0.015)] transition-all duration-200 ${card.borderHover} hover:-translate-y-0.5 flex gap-4`}>
                  <div className={`w-10 h-10 rounded-xl ${card.bgColor} border flex items-center justify-center shadow-xs shrink-0`}>
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Compass className="w-4 h-4" />
            </span>
            How to Use IBPS PO Previous Year Question Papers: A 6-Step Strategy
          </h2>
          <p className="text-slate-655 leading-relaxed mb-6 text-sm sm:text-base">
            Follow this visual, step-by-step progression roadmap to optimize your scores using historical papers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {[
              { num: '01', title: 'Attempt Cold Mock', icon: Search, desc: 'Attempt one full previous year paper cold, under strict sectional time limits, to get an honest diagnostic score.' },
              { num: '02', title: 'Categorize Errors', icon: Columns, desc: 'Separate your errors into three buckets: conceptual gaps, calculation mistakes, and time pressure slips.' },
              { num: '03', title: 'Build Focus Speed', icon: Clock, desc: 'Re-solve only the Quant and Reasoning sections from 4–5 different years back-to-back to build topic speed.' },
              { num: '04', title: 'Strict Timers', icon: FileEdit, desc: 'Apply official sectional time limits strictly, not a single combined timer, to practice handling sectional locks.' },
              { num: '05', title: 'Log Progress', icon: RefreshCw, desc: 'Track sectional accuracy week over week in a simple log; aim to clear sectional cut-offs comfortably.' },
              { num: '06', title: 'Mock Simulation', icon: Trophy, desc: 'Move to full-length mock tests once your PYQ accuracy crosses the previous year’s cut-off consistently.' }
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="bg-white border border-slate-200 p-5 rounded-2xl relative shadow-[0_2px_12px_rgba(13,27,62,0.02)] hover:shadow-[0_8px_24px_rgba(13,27,62,0.06)] hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-2 right-3 text-4xl font-black text-slate-100/70 select-none font-display leading-none group-hover:text-slate-200/50 transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <div className="mb-3 w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shadow-xs border border-slate-100 text-[var(--color-blue)]">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] pr-8 leading-tight">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Laptop className="w-4 h-4" />
            </span>
            How to Use PrepBanker for IBPS PO Preparation
          </h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(13,27,62,0.02)] space-y-4 my-6">
            <p className="text-slate-655 leading-relaxed text-sm sm:text-base">
              Landing on this page, you can select a paper — say IBPS PO Prelims 2024 — and choose to attempt the interactive quiz version that mirrors the actual IBPS testing interface, including the same sectional lock and on-screen timer behavior.
            </p>
            <p className="text-slate-655 leading-relaxed text-sm sm:text-base">
              Once you submit the quiz, PrepBanker shows your performance broken down section by section and topic by topic. You'll immediately see whether your Reasoning puzzle accuracy or your DI speed is the real bottleneck, benchmarked against the all-India average.
            </p>
            <p className="text-slate-655 leading-relaxed text-sm sm:text-base">
              From there, the platform routes you to a focused practice path: if you are weak in seating arrangements, it directs you straight to topic-specific sectional tests and Daily Practice Problem (DPP) sets to diagnose, isolate, and retry until your scores increase.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Link className="w-4 h-4" />
            </span>
            Also Explore on PrepBanker
          </h2>
          <p className="text-slate-650 leading-relaxed mb-4 text-sm sm:text-base">
            If you\'re serious about IBPS PO, don\'t stop at previous year papers alone. Attempt the <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">IBPS PO Full-Length Free Mock Test</a> to simulate exam-day conditions with live percentile ranking. Compare pattern overlap with the <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">SBI PO Previous Year Question Papers</a>, since core Quant and Reasoning topics carry over almost entirely between the two. For topic-specific practice, the <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">Puzzle & Seating Arrangement Sectional Quiz</a> and <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">Data Interpretation DPP Series</a> directly target the two toughest areas. Aspirants weak in general awareness should also browse the <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">Banking & Current Affairs Daily Practice Problems</a>, updated weekly with RBI policies and news. Preparing for clerical posts? Check out the <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">IBPS Clerk Previous Year Papers</a> for a comparable but lighter-weight pattern.
          </p>
        </PreviousYearPapersLayout>
      </main>

      <Footer />
    </>
  );
}
