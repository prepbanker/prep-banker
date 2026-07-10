// PATH: app/sbi-po-quiz/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuizHero from '@/components/sections/quiz/hero/QuizHero';
import QuizSection from '@/components/sections/quiz/QuizSection';
import FAQSection from '@/components/shared/FAQSection';
import { quizStats } from '@/lib/data/quiz';
import { 
  Info, BookOpen, AlertCircle, Clock, ChevronRight, Award, Compass, 
  Zap, Target, Sparkles
} from 'lucide-react';

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'SBI PO Quiz 2026: Free Mock Test & Practice Questions',
  description: 'Attempt the SBI PO quiz 2026 with sectional tests, chapter-wise practice and PYQs. Get instant scores and fix weak areas on PrepBanker.',
  keywords: [
    'SBI PO quiz 2026',
    'SBI PO mock test 2026',
    'SBI PO sectional test',
    'SBI PO practice quiz',
    'SBI PO PYQ 2026',
    'bank PO online quiz',
  ],
  alternates: {
    canonical: 'https://prepbanker.com/sbi-po-quiz',
  },
  openGraph: {
    title: 'SBI PO Quiz 2026: Free Mock Test & Practice Questions',
    description: 'Attempt the SBI PO quiz 2026 with sectional tests, chapter-wise practice and PYQs. Get instant scores and fix weak areas on PrepBanker.',
    url: 'https://prepbanker.com/sbi-po-quiz',
    type: 'website',
    locale: 'en_IN',
  },
};

// --- Schema Markup Datasets ---
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the SBI PO quiz 2026 on PrepBanker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a free practice hub on PrepBanker with sectional quizzes, chapter-wise DPPs and full mock tests built on the current SBI PO 2026 exam pattern, covering Quant, Reasoning, English, General Awareness and Computer Aptitude."
        }
      },
      {
        "@type": "Question",
        "name": "Is the PrepBanker SBI PO quiz free to attempt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Core sectional quizzes, chapter-wise DPPs and previous year question sets are free to attempt on PrepBanker. Detailed performance analytics and premium full-length mocks may sit behind the paid test series."
        }
      },
      {
        "@type": "Question",
        "name": "Which is tougher, SBI PO or IBPS PO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SBI PO is generally considered slightly tougher because its reasoning and banking awareness questions are more unpredictable and its cut-offs run higher due to fewer vacancies relative to applicants."
        }
      },
      {
        "@type": "Question",
        "name": "How many questions are there in SBI PO prelims?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SBI PO Prelims 2026 consists of 100 objective questions worth 100 marks across English, Quantitative Aptitude and Reasoning, with a total duration of one hour and separate sectional timing."
        }
      },
      {
        "@type": "Question",
        "name": "How do I attempt the quiz on PrepBanker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Select your stage from the filter bar, choose Sectional, Chapter-wise or Full Mock, attempt it within the timer, and view your score, accuracy and section-wise breakdown immediately after submission."
        }
      },
      {
        "@type": "Question",
        "name": "Are these quizzes based on the latest 2026 exam pattern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PrepBanker quizzes are updated to match the SBI PO 2026 pattern (100-mark Prelims, 200-mark objective plus 30-mark descriptive Mains)."
        }
      },
      {
        "@type": "Question",
        "name": "How many mock tests should I attempt before the SBI PO prelims?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most aspirants who clear prelims comfortably attempt 20 to 30 full-length mocks and 40 to 50 sectional quizzes in the six to eight weeks before the exam, alongside daily chapter-wise DPPs for weak topics."
        }
      },
      {
        "@type": "Question",
        "name": "Do these quizzes have negative marking like the real exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PrepBanker quizzes replicate the official negative marking scheme of 0.25 marks deducted per wrong answer, with no penalty for unattempted questions, so your practice score reflects real exam behaviour."
        }
      },
      {
        "@type": "Question",
        "name": "What score should I aim for in the sectional quiz to be exam-ready?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aim to consistently score above 80% accuracy with all questions attempted within the time limit before you consider a section exam-ready. Speed without accuracy is a common trap students should actively avoid."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "SBI PO Quiz 2026 Practice Series",
    "description": "A free, exam-pattern-aligned practice series covering SBI PO 2026 Prelims and Mains, including sectional quizzes, chapter-wise DPPs, full mock tests and previous year question papers.",
    "provider": {
      "@type": "Organization",
      "name": "PrepBanker",
      "sameAs": "https://prepbanker.com"
    },
    "url": "https://prepbanker.com/sbi-po-quiz",
    "educationalLevel": "Graduate",
    "about": ["SBI PO Exam", "Bank PO Preparation"],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT1H"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": "SBI PO Quiz 2026",
    "description": "Free sectional and full-length quiz series for SBI PO 2026 covering Quantitative Aptitude, Reasoning, English Language, General Awareness and Computer Aptitude.",
    "url": "https://prepbanker.com/sbi-po-quiz",
    "about": {
      "@type": "Thing",
      "name": "SBI PO Recruitment Exam Preparation"
    },
    "educationalAlignment": {
      "@type": "AlignmentObject",
      "alignmentType": "assesses",
      "targetName": "SBI PO Prelims and Mains Syllabus"
    },
    "provider": {
      "@type": "Organization",
      "name": "PrepBanker",
      "url": "https://prepbanker.com"
    }
  },
  {
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
        "name": "Bank PO Exams",
        "item": "https://prepbanker.com/bank-po-exams"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SBI PO Quiz 2026",
        "item": "https://prepbanker.com/sbi-po-quiz"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SBI PO Quiz 2026: Free Mock Test & Practice Questions",
    "description": "Attempt the SBI PO quiz 2026 with sectional tests, chapter-wise practice and PYQs. Get instant scores and fix weak areas on PrepBanker.",
    "url": "https://prepbanker.com/sbi-po-quiz",
    "datePublished": "2026-07-08",
    "dateModified": "2026-07-10",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "PrepBanker",
      "url": "https://prepbanker.com"
    }
  }
];

const pageFaqs = [
  {
    q: "What is the SBI PO quiz 2026 on PrepBanker?",
    a: "It is a free practice hub on PrepBanker with sectional quizzes, chapter-wise DPPs and full mock tests built on the current SBI PO 2026 exam pattern, covering Quant, Reasoning, English, General Awareness and Computer Aptitude, updated to reflect the latest notifications."
  },
  {
    q: "Is the PrepBanker SBI PO quiz free to attempt?",
    a: "Yes. Core sectional quizzes, chapter-wise DPPs and previous year question sets are free to attempt on PrepBanker. Detailed performance analytics and premium full-length mocks with All-India ranking may sit behind the paid test series, depending on the plan."
  },
  {
    q: "Which is tougher, SBI PO or IBPS PO?",
    a: "SBI PO is generally seen as slightly tougher because its reasoning and banking awareness questions run more unpredictable, and cut-offs stay high relative to its smaller vacancy count."
  },
  {
    q: "How many questions are there in SBI PO prelims?",
    a: "SBI PO Prelims 2026 has 100 objective questions worth 100 marks, split across English, Quantitative Aptitude and Reasoning, with a total duration of one hour and separate timing enforced for each section."
  },
  {
    q: "How do I attempt a quiz on PrepBanker?",
    a: "Select your stage from the topic filter bar, choose Sectional, Chapter-wise or Full Mock, attempt it within the countdown timer, then check your score, accuracy and section-wise time breakdown the moment you submit."
  },
  {
    q: "Are these quizzes based on the latest 2026 exam pattern?",
    a: "Yes. Quizzes reflect the SBI PO 2026 pattern, including the revised 30-mark descriptive paper, and sectional timing requirements."
  },
  {
    q: "How many mock tests should I attempt before SBI PO prelims?",
    a: "Most aspirants who clear Prelims comfortably attempt 20 to 30 full-length mocks and 40 to 50 sectional quizzes across the final six to eight weeks, alongside daily chapter-wise DPPs targeted at their weakest sections."
  },
  {
    q: "Do these quizzes apply negative marking like the real exam?",
    a: "Yes. PrepBanker quizzes replicate the official scheme of 0.25 marks deducted per wrong answer, with zero penalty for unattempted questions, so your practice score behaves the same way your real exam score will."
  },
  {
    q: "What score should I aim for in a sectional quiz before I call a topic exam-ready?",
    a: "Aim for consistently above 80% accuracy with all questions attempted inside the time limit across at least three separate attempts. A single high score isn't reliable evidence — a repeated pattern across attempts is."
  },
  {
    q: "Does PrepBanker show All-India rank or percentile for these quizzes?",
    a: "Full mock tests on PrepBanker show All-India percentile ranking once a sufficient number of students have attempted the same test. Sectional quizzes and chapter-wise DPPs currently show personal accuracy and time metrics rather than a comparative rank."
  }
];

export default function SbiPoQuizPage() {
  return (
    <>
      {/* --- SEO JSON-LD Schemas --- */}
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />

      <main className="bg-slate-50 min-h-screen pb-20">
        {/* Hero Section */}
        <QuizHero
          stats={quizStats}
          totalTests={quizStats.totalQuizSeries}
          examName="SBI PO"
          title={
            <>
              Practice Quizzes for{' '}
              <span className="text-gold-gradient">SBI PO</span>
            </>
          }
          description="Attempt free mock tests, sectional drills, and topic-wise quizzes crafted for SBI PO 2026. Real exam feel. Instant analytics."
        />

        {/* Playable Interactive Mock Quiz flow */}
        <QuizSection initialExamType="SBI PO" />

        {/* --- Redesigned Premium Content Container --- */}
        <div className="container-custom mt-20 space-y-24">

          {/* 1. Header Overview & Quick Facts Redesign */}
          <section className="relative overflow-hidden bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-md">
            {/* Elegant visual backdrop blobs */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-bl-full pointer-events-none -z-10" />
            
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[var(--color-blue)] text-[10px] font-black uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> High-Performance Prep
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] leading-tight tracking-tight">
                SBI PO Quiz 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue)] to-indigo-600">Free Practice Hub</span>
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                Elevate your score with PrepBanker&apos;s free SBI PO sectional quizzes, chapter-wise DPPs, full mocks, and previous year papers. Solve interactive questions, receive instant analytics, and automatically target weak topics.
              </p>
            </div>

            {/* Quick Facts Grid Redesign (6 Cards) */}
            <div className="mt-10">
              <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-5 flex items-center gap-2">
                <Info className="w-4 h-4 text-[var(--color-gold)]" /> Snapshot Quick Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "SBI PO 2026 Vacancies", desc: "1,500 Posts", extra: "1,446 regular + 54 backlog (CRPD/PO/2026-27/09)" },
                  { title: "SBI PO Exam Dates", desc: "August 2026", extra: "Prelims scheduled early August, applications closed 8 July" },
                  { title: "Mains Exam Format", desc: "Objective + Descriptive", extra: "SBI: 200 Objective + 30 Descriptive Marks" },
                  { title: "Negative Marking", desc: "0.25 Mark Penalty", extra: "Applicable on incorrect answers; no unattempted penalty" },
                  { title: "Selection Process", desc: "4 Stages", extra: "Prelims, Mains, Group Exercise, and Personal Interview" },
                  { title: "Level of Difficulty", desc: "Highly Challenging", extra: "Sectional and overall cut-offs apply at both stages" }
                ].map((fact, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-[var(--color-blue)]/30 hover:bg-white hover:shadow-sm transition-all">
                    <span className="text-slate-400 font-bold text-xs uppercase block tracking-wider mb-1">{fact.title}</span>
                    <span className="text-[var(--color-navy)] font-black text-base sm:text-lg block leading-snug">{fact.desc}</span>
                    <span className="text-slate-500 font-medium text-[11px] sm:text-xs block mt-2 leading-relaxed border-t border-slate-100 pt-2">{fact.extra}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. What & Who Section Redesign */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card - What is it */}
            <div className="lg:col-span-5 bg-[var(--color-navy-deep)] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-[var(--color-blue)]/20 to-transparent pointer-events-none" />
              <div>
                <span className="text-[var(--color-gold-bright)] text-[10px] font-black uppercase tracking-widest block mb-2">SBI PO Syllabus</span>
                <h2 className="text-xl sm:text-2xl font-black leading-tight mb-4">
                  Master the Premier Banking Exam
                </h2>
                <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                  Prepare for the ultimate banking test with our dedicated SBI PO quiz series. Target key subjects (Quant, Reasoning, English) and build speed matching the exact official interface constraints.
                </p>
              </div>
              <div className="mt-8 border-t border-slate-800 pt-4 flex items-center justify-between">
                <span className="text-slate-400 text-xs font-bold">100% Exam-Replication Mode</span>
                <Zap className="w-5 h-5 text-[var(--color-gold-bright)] animate-pulse" />
              </div>
            </div>

            {/* Right Card - Who is it for */}
            <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-[var(--color-navy)] mb-1.5 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--color-blue)]" /> Who Should Attempt?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Simplify your conceptual revision. This interactive platform is custom-suited for:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "First-Time Aspirants", desc: "Finished the syllabus? Practice pattern-based questions immediately." },
                    { title: "Repeat Competitors", desc: "Stuck at Mains cut-offs? Polish sections to close final score gaps." },
                    { title: "Working Professionals", desc: "Short daily prep hours? Access high-yield short-form drills." },
                    { title: "Final-Year Students", desc: "Eligible to sit? Build a strong aptitude foundation early." }
                  ].map((user, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-[var(--color-blue)] flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5">
                        0{idx + 1}
                      </span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-850 font-bold block">{user.title}</strong>
                        <span className="text-[11px] sm:text-xs text-slate-450 leading-normal">{user.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Pattern Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-navy)]">
                  SBI PO Exam Pattern
                </h2>
                <p className="text-xs sm:text-sm text-slate-450 font-medium">Plan daily times for sectional quiz practice.</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-8 shadow-sm space-y-6">
              <div className="overflow-x-auto rounded-2xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-100">
                  <thead className="bg-slate-50 text-[var(--color-navy)]">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Stage</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Sections / Format</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Total Questions</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Total Marks</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-655 font-medium">
                    {[
                      { stage: "Prelims", format: "English, Quant, Reasoning", qs: "100", marks: "100 Marks", time: "1 Hour (20 min sectional)" },
                      { stage: "Mains (Objective)", format: "Reasoning & Computer, Data Analysis, GA, English", qs: "155", marks: "200 Marks", time: "3 Hours" },
                      { stage: "Mains (Descriptive)", format: "Letter Writing & Essay", qs: "2", marks: "30 Marks", time: "30 Minutes" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-extrabold text-[var(--color-navy)] bg-slate-50/20">{row.stage}</td>
                        <td className="px-6 py-4">{row.format}</td>
                        <td className="px-6 py-4">{row.qs}</td>
                        <td className="px-6 py-4">{row.marks}</td>
                        <td className="px-6 py-4">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Gradient Banner Alert */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50/30 border border-blue-100 rounded-2xl p-5 flex gap-4">
                <Sparkles className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Pattern Advice:</strong> SBI PO Mains places high emphasis on complex Data Analysis and Interpretative reasoning. Practice with our advanced sectional drills to master these scoring areas.
                </div>
              </div>
            </div>
          </section>

          {/* 4. Stepper Steps Redesign (How to Attempt) */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-100 text-[var(--color-gold)]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-navy)]">
                  Quiz Attempt Workflow
                </h2>
                <p className="text-xs sm:text-sm text-slate-450 font-medium">Follow this step roadmap to build consistency.</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="relative pl-6 sm:pl-8 border-l border-slate-100 space-y-8">
                {[
                  { title: "Choose Practice Format", body: "Filter by Sectional drills, Chapter DPPs, PYQs, or full mock papers directly on this page." },
                  { title: "Start Timer Test", body: "Attempt the test online without pausing, simulating real exam constraints." },
                  { title: "Review instant analysis", body: "Submit to check scores, accuracy metrics, and time-per-question metrics." },
                  { title: "Identify & target weak modules", body: "Bookmark struggled question categories and launch related DPP drills within 48 hours." }
                ].map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Glowing Bullet Icon */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-0.5 w-6 h-6 rounded-full bg-white border-2 border-slate-200 group-hover:border-[var(--color-blue)] group-hover:bg-blue-50 transition-all flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-[var(--color-blue)]">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Section-wise time allocation strategy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-navy)]">
                  Section-Wise Time Allocation Strategy
                </h2>
                <p className="text-xs sm:text-sm text-slate-450 font-medium">Manage sectional time blocks inside a quiz attempt.</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-8 shadow-sm space-y-6">
              <div className="overflow-x-auto rounded-2xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-100">
                  <thead className="bg-slate-50 text-[var(--color-navy)]">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Section Name</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Recommended Time</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Target Attempts</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Ideal Accuracy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-655 font-medium">
                    {[
                      { name: "English Language", time: "15–17 mins", target: "28–32 / 35Q", accuracy: "85%+" },
                      { name: "Quantitative Aptitude", time: "18–20 mins", target: "25–28 / 35Q", accuracy: "80%+" },
                      { name: "Reasoning Ability", time: "18–20 mins", target: "28–32 / 35Q", accuracy: "85%+" },
                      { name: "Data Analysis (Mains)", time: "30–35 mins", target: "25–28 / 35Q", accuracy: "75%+" },
                      { name: "GA/Banking Awareness (Mains)", time: "12–15 mins", target: "Confidently known", accuracy: "70%+" }
                    ].map((sec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-[var(--color-navy)]">{sec.name}</td>
                        <td className="px-6 py-4">{sec.time}</td>
                        <td className="px-6 py-4">{sec.target}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-50 text-emerald-700">
                            {sec.accuracy}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Time allocation Pro Tip notice */}
              <div className="border border-blue-150 bg-blue-50/50 p-5 rounded-2xl flex gap-3.5">
                <Sparkles className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Pro Tip:</strong> Practice topic drills under a timer 2 minutes shorter than the actual limit. This builds a robust speed buffer to help keep you comfortable under exam-day conditions.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Step-by-Step Preparation Roadmap */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-navy)]">
                  Step-by-Step Preparation Timeline
                </h2>
                <p className="text-xs sm:text-sm text-slate-450 font-medium">A structured sequence to build sectional skills.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { step: "Weeks 1–2", subtitle: "Baseline Setup", desc: "Resolve topic-wise DPPs across every module to identify current conceptual blind spots." },
                { step: "Weeks 3–4", subtitle: "Target Weak Zones", desc: "Prioritize sectional quizzes daily for the weakest modules flagged on your dashboard." },
                { step: "Weeks 5–6", subtitle: "Introduce Full Mocks", desc: "Start attempting full mocks twice weekly, simulating actual SBI PO exam patterns." },
                { step: "Week 7", subtitle: "Daily Simulation Runs", desc: "Shift to daily mocks under exam-hall timings, analyzing errors on the same afternoon." },
                { step: "Final Week", subtitle: "PYQ Drill Revision", desc: "Review memory-based papers from the last 3 seasons. Avoid attempting new theory." },
                { step: "Exam Week", subtitle: "Stay Warm & Focus", desc: "Attempt light topic quizzes to keep reflexes fast. Rest to prevent burnout." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-5 hover:border-[var(--color-blue)]/30 hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{step.step}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-50 text-[var(--color-blue)] text-[9px] font-black flex items-center justify-center border border-slate-100">
                        {idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-[var(--color-navy)]">{step.subtitle}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Analyze results section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-navy)]">
                  Analyze and Resolve Performance Gaps
                </h2>
                <p className="text-xs sm:text-sm text-slate-450 font-medium">Categorize error patterns before starting your next attempt.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Concept Gaps", bg: "bg-amber-50/50 border-amber-100", titleColor: "text-amber-800", desc: "Points to theory blind spots. Revise base principles and read solution guides fully before re-attempting." },
                  { name: "Silly Mistakes", bg: "bg-rose-50/50 border-rose-100", titleColor: "text-rose-800", desc: "Caused by quick reading or mathematical errors. Slow down on similar formats to build clean execution habits." },
                  { name: "Time-Pressure Guesses", bg: "bg-blue-50/50 border-blue-100", titleColor: "text-blue-800", desc: "Alerts you that your speed is lagging. Attempt focused speed-drills and practice short-form quizzes." }
                ].map((type, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border ${type.bg} space-y-2`}>
                    <h4 className={`text-sm font-extrabold ${type.titleColor}`}>{type.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-655 leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Explore on PrepBanker */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-navy)]">
                  Also Explore on PrepBanker
                </h2>
                <p className="text-xs sm:text-sm text-slate-450 font-medium">Recommended revision resources and mock sets.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { title: "SBI PO Mock Series", desc: "20 full-length practice mock test series.", href: "/sbi-po-mock-test" },
                { title: "SBI PO Exam Pattern", desc: "Section weightages and complete syllabus details.", href: "/sbi-po-syllabus" },
                { title: "DI Chapter-wise Quiz", desc: "Master Quantitative Data Interpretation puzzles.", href: "/quant/data-interpretation-quiz" },
                { title: "Banking Awareness Quiz", desc: "Weekly updated banking and financial awareness drills.", href: "/banking-awareness-quiz" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="bg-white border border-slate-100 hover:border-[var(--color-blue)]/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between items-start"
                >
                  <div className="space-y-1.5">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-450 leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[var(--color-blue)] mt-4">
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* FAQ Accordion Section */}
        <FAQSection
          items={pageFaqs}
          label="FAQ Section"
          title="SBI PO Quiz FAQs"
          subtitle="Clear your doubts about PrepBanker mock quizzes, negative marking rules, patterns, and preparation tips."
        />
      </main>

      <Footer />
    </>
  );
}
