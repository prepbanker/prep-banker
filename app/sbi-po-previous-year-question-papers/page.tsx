// PATH: app/sbi-po-previous-year-question-papers/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PreviousYearPapersLayout, { PYQPaper } from '@/components/sections/previous-year-papers/PreviousYearPapersLayout';
import { Lightbulb, Calendar, Compass, Search, Clock, FileEdit, RefreshCw, Trophy, Columns, Link } from 'lucide-react';

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'SBI PO Previous Year Question Papers (2016–2025) Free PDF',
  description:
    'Download SBI PO previous year question papers 2016–2025 with solutions. Practice prelims & mains PYQs, attempt topic-wise mock tests free on PrepBanker.',
  keywords: [
    'SBI PO previous year question papers',
    'SBI PO PYQ pdf',
    'SBI PO previous year papers with solutions',
    'SBI PO prelims previous year paper',
    'SBI PO mains question paper',
    'SBI PO memory based papers',
    'SBI PO exam pattern',
  ],
  alternates: {
    canonical: 'https://prepbanker.com/sbi-po-previous-year-question-papers',
  },
  openGraph: {
    title: 'SBI PO Previous Year Question Papers (2016–2025) Free PDF',
    description:
      'Download SBI PO previous year question papers 2016–2025 with solutions. Practice prelims & mains PYQs, attempt topic-wise mock tests free on PrepBanker.',
    url: 'https://prepbanker.com/sbi-po-previous-year-question-papers',
    type: 'website',
  },
};

// --- Hardcoded Papers for SBI PO ---
const SBI_PO_PAPERS: PYQPaper[] = [
  {
    id: 'sbi-2025-pre',
    exam: 'SBI PO',
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
    id: 'sbi-2025-mains',
    exam: 'SBI PO',
    year: 2025,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 200,
    duration: '180 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'sbi-2024-pre',
    exam: 'SBI PO',
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
    id: 'sbi-2024-mains',
    exam: 'SBI PO',
    year: 2024,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 200,
    duration: '180 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'sbi-2023-pre',
    exam: 'SBI PO',
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
    id: 'sbi-2023-mains',
    exam: 'SBI PO',
    year: 2023,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 200,
    duration: '180 Min',
    locked: false,
    pdfPath: '/pdfs/pyp.pdf'
  },
  {
    id: 'sbi-2022-pre',
    exam: 'SBI PO',
    year: 2022,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'sbi-2022-mains',
    exam: 'SBI PO',
    year: 2022,
    stage: 'Mains',
    shift: 'Official Paper',
    totalQuestions: 155,
    totalMarks: 200,
    duration: '180 Min',
    locked: true
  },
  {
    id: 'sbi-2021-pre',
    exam: 'SBI PO',
    year: 2021,
    stage: 'Prelims',
    shift: 'COVID Period',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'sbi-2020-pre',
    exam: 'SBI PO',
    year: 2020,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'sbi-2016-2020-archive',
    exam: 'SBI PO',
    year: 2020,
    stage: 'Prelims',
    shift: 'Combined Archive',
    totalQuestions: 500,
    totalMarks: 500,
    duration: '300 Min',
    locked: true
  }
];

// --- FAQ Accordion Content ---
const FAQS = [
  {
    question: 'Where can I download SBI PO previous year question papers for free?',
    answer: "You can download SBI PO previous year question papers for free in the PYQ section above, covering prelims and mains papers from 2016 to 2025. Each comes with detailed solutions, and you can also attempt the same papers as a live timed quiz instead of a static PDF."
  },
  {
    question: 'How many years of SBI PO papers should I solve before the exam?',
    answer: "Aim for at least the last 5 years of papers, though 8–10 years gives a fuller picture of topic trends. The last 3 years matter most for current difficulty calibration, while older papers help you spot which topics repeat consistently across cycles."
  },
  {
    question: 'Is solving SBI PO previous year papers enough to crack the exam?',
    answer: "No. Previous year papers are memory-based reconstructions, not the actual question bank, so exact questions won't repeat. They're best for understanding pattern and difficulty. Pair them with full-length mock tests and sectional quizzes that simulate the live exam interface for real readiness."
  },
  {
    question: 'Are SBI PO previous year papers the same as mock tests?',
    answer: "No. Previous year papers are reconstructed from candidate memory, so they show old patterns but may carry small recall errors. Mock tests on PrepBanker are built fresh on the current pattern with accurate difficulty calibration and an exam-identical interface — better suited for final-stage practice."
  },
  {
    question: 'Is SBI PO previous year paper available for both prelims and mains?',
    answer: "Yes. SBI PO previous year papers are available separately for both Prelims (Reasoning, Quant, English) and Mains (Reasoning, Data Interpretation, General Awareness, English, and the Descriptive Test). PrepBanker organizes both stages year-wise so you can practice them separately or download them as static PDFs."
  },
  {
    question: 'What is the difficulty level of SBI PO previous year papers?',
    answer: "SBI PO papers have ranged from moderate to difficult over the last five years. Quantitative Aptitude and Data Interpretation are usually the most time-consuming sections, Reasoning puzzles have grown lengthier, while English and General Awareness remain comparatively easier scoring zones."
  },
  {
    question: 'Is SBI PO harder than IBPS PO?',
    answer: "SBI PO is generally considered tougher than IBPS PO due to higher competition, a lower vacancy-to-applicant ratio, and a Mains paper that includes a Descriptive Test. IBPS PO has a simpler Mains structure, but both test similar core topics in Reasoning, Quant, and English."
  },
  {
    question: 'Is PrepBanker free to use for SBI PO preparation?',
    answer: "PrepBanker gives free access to SBI PO previous year question papers, sectional quizzes, and daily practice problems. Full-length mock tests with detailed performance analytics are available after a quick free registration, so you can track your all-India percentile and weak-area report."
  },
  {
    question: 'How many vacancies does SBI PO have in 2026?',
    answer: "SBI PO 2026 recruitment has been officially notified for 1,500 Probationary Officer vacancies. This represents one of the largest banking recruitment drives of the year, and is a sharp jump from the smaller vacancy count in the preceding 2025 cycle."
  },
  {
    question: 'What was the SBI PO cut-off in 2025?',
    answer: "The official SBI PO 2025 Prelims cut-off (out of 100) was 66.75 for the General category, 65.50 for OBC, 59.25 for SC, and 51.50 for ST. These represent some of the highest prelims cut-offs in recent years, reflecting rising competition levels."
  },
  {
    question: 'How is SBI PO Mains different from Prelims?',
    answer: "Prelims is a 100-mark, 1-hour qualifying test in Reasoning, Quant, and English with no sectional cut-off. Mains is a 230-mark exam with four objective sections under sectional cut-offs, plus a Descriptive Test, and Mains marks count directly toward your final merit."
  },
  {
    question: 'Do exact questions repeat from previous year papers?',
    answer: "Exact questions almost never repeat verbatim, since SBI changes its question sets every cycle. What does repeat is the topic distribution, difficulty pattern, and question style — which is exactly why previous year papers remain useful for strategic preparation, not memorization."
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
      "name": "SBI PO Previous Year Question Papers",
      "item": "https://prepbanker.com/sbi-po-previous-year-question-papers"
    }
  ]
};

const webPageSchemaJson = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://prepbanker.com/sbi-po-previous-year-question-papers",
  "url": "https://prepbanker.com/sbi-po-previous-year-question-papers",
  "name": "SBI PO Previous Year Question Papers (2016–2025) Free PDF",
  "description": "Download SBI PO previous year question papers 2016–2025 with solutions. Practice prelims and mains PYQs section-wise, then attempt free topic-wise mock tests on PrepBanker.",
  "datePublished": "2026-06-23",
  "dateModified": "2026-06-23",
  "inLanguage": "en-IN",
  "isPartOf": {
    "@type": "WebSite",
    "name": "PrepBanker",
    "url": "https://prepbanker.com"
  },
  "breadcrumb": {
    "@id": "https://prepbanker.com/sbi-po-previous-year-question-papers#breadcrumb"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://prepbanker.com/images/sbi-po-previous-year-papers-cover.jpg"
  }
};

const courseSchemaJson = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "SBI PO Previous Year Question Papers Practice Series",
  "description": "A structured year-wise collection of SBI PO Prelims and Mains previous year question papers (2016–2025) with solutions, paired with sectional quizzes and full mock tests on PrepBanker.",
  "provider": {
    "@type": "Organization",
    "name": "PrepBanker",
    "sameAs": "https://prepbanker.com"
  },
  "educationalLevel": "Competitive Exam Preparation",
  "about": "SBI Probationary Officer Recruitment Exam",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT2H"
  }
};

export default function SBIPOPapersPage() {
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
          examName="SBI PO"
          papers={SBI_PO_PAPERS}
          heroTitle={
            <>
              SBI PO Previous Year <br className="hidden md:inline" />
              <span className="text-gold-gradient">Question Papers</span> <span className="whitespace-nowrap">(2016–2025)</span>
            </>
          }
          heroSubtitle="SBI PO previous year question papers from 2016 to 2025 are available below for both Prelims and Mains, with full solutions. These memory-based papers show you the exact exam pattern, section-wise difficulty, and the topics that keep repeating year after year — the fastest way to know what you're actually walking into."
          faqs={FAQS}
        >
          {/* Main Editorial SEO Content — Optimized & Redesigned for visual appeal */}
          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] text-base shadow-xs">💡</span>
            Why SBI PO Previous Year Question Papers Matter More Than You Think
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[var(--color-navy-deep)] to-[var(--color-navy-mid)] text-white border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-md">
              <div>
                <h4 className="text-[10px] font-extrabold text-[var(--color-gold-bright)] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-bright)] animate-pulse" />
                  Competitiveness Stats
                </h4>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold text-slate-300">Applicants (2025)</span>
                    <span className="text-sm font-bold text-white">~6.5 Lakh</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold text-slate-300">Vacancies (2025)</span>
                    <span className="text-sm font-bold text-white">540 Posts</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-1">
                    <span className="text-xs font-semibold text-slate-300">Final Selection Rate</span>
                    <span className="text-sm font-extrabold text-[var(--color-gold-bright)]">Under 1%</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 text-[10px] text-slate-400 font-medium">
                Sourced from official SBI recruitment archives. This makes SBI PO one of India's most challenging exams.
              </div>
            </div>

            {/* Insights Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(13,27,62,0.02)]">
              <div>
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3.5">Critical Pattern Insights</h4>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex gap-2.5 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 text-xs shrink-0 font-bold">✔</span>
                    <span><strong>Mains Difficulty Shift:</strong> SBI has been quietly raising the difficulty of Data Interpretation and puzzle-based Reasoning in Mains since 2022.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 text-xs shrink-0 font-bold">✔</span>
                    <span><strong>Syllabus vs Reality:</strong> Generic coaching materials miss this shift; actual papers show you what you're actually walking into.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 text-xs shrink-0 font-bold">✔</span>
                    <span><strong>Scoring Zones:</strong> English and GA remain comparatively stable and easier scoring sections.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] text-base shadow-xs">⚖</span>
            SBI PO Prelims vs Mains: What's the Real Difference?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
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
                  <td className="p-4 pr-6 text-slate-600">230 Marks <span className="text-[10px] text-slate-400 font-semibold">(155 Obj + Desc Test)</span></td>
                </tr>
                <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Duration</td>
                  <td className="p-4 text-slate-600">60 Minutes <span className="text-[10px] text-slate-400 font-semibold">(Sectional Timers)</span></td>
                  <td className="p-4 pr-6 text-slate-600">3.5 Hours Obj + 30 Mins Desc</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Sections</td>
                  <td className="p-4 text-slate-600">Reasoning (35Q), Quant (35Q), English (30Q)</td>
                  <td className="p-4 pr-6 text-slate-600">Reasoning, Data Analysis, General/Economy, English + Descriptive</td>
                </tr>
                <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6 font-bold text-[var(--color-navy)]">Cut-offs</td>
                  <td className="p-4 text-slate-600"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100/50 text-[10px] font-bold">No sectional cut-off</span></td>
                  <td className="p-4 pr-6 text-slate-600"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100/50 text-[10px] font-bold">Sectional limits apply</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gradient-to-r from-amber-50/60 to-orange-50/30 border-l-4 border-[var(--color-yellow)] p-5 rounded-r-2xl text-xs sm:text-sm text-amber-900 leading-relaxed shadow-[0_2px_8px_rgba(245,158,11,0.05)] flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong>Key Strategy Takeaway:</strong> Prelims is speed-based, while Mains requires deep conceptual understanding and descriptive articulation. Spend 70% of your prep time targeting Mains-level DI and puzzles.
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Calendar className="w-4 h-4" />
            </span>
            How SBI PO Previous Year Papers Have Changed Over the Years (2016–2025)
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
            Reviewing a decade of papers shows a clear trend of shifting from calculation-heavy math to logic-heavy DI, and puzzles combining multiple logics:
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
                <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">Advanced Logic-Heavy & High Complexity</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Mains papers reached high difficulty. Focus is on massive multi-layered puzzles, application-heavy Data Interpretation sets, and direct current affairs from the preceding 6 months.
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
                <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">Hybrid Puzzles & Caselets Escalation</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Significant increase in caselet-based Data Interpretation and reasoning puzzles combining two different rules (e.g. seating arrangement + coding).
                </p>
              </div>
            </div>

            {/* Era 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-slate-300 shadow-sm group-hover:scale-125 transition-transform duration-200" />
              <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl shadow-[0_2px_12px_rgba(13,27,62,0.02)] transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-555 text-slate-500 border border-slate-150 uppercase tracking-wide">
                    2021 & Prior
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] mb-1">Calculation-Based Core (COVID Period)</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Mainly calculation-based Quant (Simplifications, number series) and traditional puzzle frameworks. Included 2021 COVID-period shifts.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--color-navy)] mt-12 mb-6 flex items-center gap-2.5 font-display">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[var(--color-blue)] shadow-xs">
              <Compass className="w-4 h-4" />
            </span>
            How to Use SBI PO Previous Year Question Papers: A 6-Step Strategy
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
            Follow this visual, step-by-step progression roadmap to optimize your scores using historical papers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {[
              { num: '01', title: 'Diagnose Baseline', icon: Search, desc: 'Attempt one full previous year paper under strict timed conditions to establish your baseline score.' },
              { num: '02', title: 'Segment Sections', icon: Columns, desc: 'Isolate specific sections (e.g., Quant DI) across 5 years to find recurring topic vulnerabilities.' },
              { num: '03', title: 'Time-Box Practice', icon: Clock, desc: 'Solve papers with hard sectional timers rather than combined limits to calibrate your pacing.' },
              { num: '04', title: 'Log Errors', icon: FileEdit, desc: 'Document every incorrect answer in an error sheet, tracking calculation errors vs. timing slips.' },
              { num: '05', title: 'Re-Attempt Slips', icon: RefreshCw, desc: 'Re-solve only the logged incorrect questions a week later without referring to the solutions.' },
              { num: '06', title: 'Simulate Live Mocks', icon: Trophy, desc: 'Pivot to timed mock tests once your topic accuracy on previous papers consistently clears cutoffs.' }
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
              <Link className="w-4 h-4" />
            </span>
            Also Explore on PrepBanker
          </h2>
          <p className="text-slate-650 leading-relaxed mb-4 text-sm sm:text-base">
            If you're serious about SBI PO, don't stop at previous year papers alone. Attempt the <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">SBI PO Full-Length Free Mock Test</a> to simulate exam-day conditions with live percentile ranking. If you're also targeting other banking exams this season, check out the <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">IBPS PO Previous Year Question Papers</a> to compare pattern overlap, or the <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">SBI Clerk Previous Year Papers</a> if you're hedging your application across posts. For topic-specific practice, the <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">Data Interpretation Sectional Quiz</a> and <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">Puzzle & Seating Arrangement DPP Series</a> directly target the two toughest areas identified in this article. Aspirants weak in current affairs should also browse the <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] font-bold hover:underline">Banking Awareness Daily Practice Problems</a> section, updated weekly with RBI and government scheme news relevant to Banking GA.
          </p>
        </PreviousYearPapersLayout>
      </main>

      <Footer />
    </>
  );
}
