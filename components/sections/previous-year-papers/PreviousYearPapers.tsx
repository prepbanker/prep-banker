// PATH: components/sections/previous-year-papers/PreviousYearPapers.tsx
'use client';

import { useState, useMemo } from 'react';
import {
  FileText,
  Lock,
  Download,
  ArrowRight,
  ArrowDown,
  ChevronDown
} from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import FAQSection from '@/components/shared/FAQSection';

// ─── Data Types ──────────────────────────────────────────────────
export type PYQPaper = {
  id: string;
  exam: 'SBI PO' | 'IBPS PO';
  year: number;
  stage: 'Prelims' | 'Mains';
  shift?: string;
  totalQuestions: number;
  totalMarks: number;
  duration: string;
  locked: boolean;
  pdfPath?: string;
};

// ─── Hardcoded Paper Data ────────────────────────────────────────
const PYQ_PAPERS: PYQPaper[] = [
  // --- SBI PO ---
  {
    id: 'sbi-2024-pre-s1',
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
    id: 'sbi-2024-pre-s2',
    exam: 'SBI PO',
    year: 2024,
    stage: 'Prelims',
    shift: 'Shift 2',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'sbi-2023-pre-s1',
    exam: 'SBI PO',
    year: 2023,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'sbi-2023-mains',
    exam: 'SBI PO',
    year: 2023,
    stage: 'Mains',
    totalQuestions: 155,
    totalMarks: 200,
    duration: '180 Min',
    locked: true
  },
  {
    id: 'sbi-2022-pre-s1',
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
    totalQuestions: 155,
    totalMarks: 200,
    duration: '180 Min',
    locked: true
  },
  {
    id: 'sbi-2021-pre-s1',
    exam: 'SBI PO',
    year: 2021,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'sbi-2020-pre-s1',
    exam: 'SBI PO',
    year: 2020,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },

  // --- IBPS PO ---
  {
    id: 'ibps-2024-pre-s1',
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
    id: 'ibps-2024-pre-s2',
    exam: 'IBPS PO',
    year: 2024,
    stage: 'Prelims',
    shift: 'Shift 2',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'ibps-2023-pre-s1',
    exam: 'IBPS PO',
    year: 2023,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'ibps-2023-mains',
    exam: 'IBPS PO',
    year: 2023,
    stage: 'Mains',
    totalQuestions: 200,
    totalMarks: 200,
    duration: '180 Min',
    locked: true
  },
  {
    id: 'ibps-2022-pre-s1',
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
    totalQuestions: 200,
    totalMarks: 200,
    duration: '180 Min',
    locked: true
  },
  {
    id: 'ibps-2021-pre-s1',
    exam: 'IBPS PO',
    year: 2021,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  },
  {
    id: 'ibps-2020-pre-s1',
    exam: 'IBPS PO',
    year: 2020,
    stage: 'Prelims',
    shift: 'Shift 1',
    totalQuestions: 100,
    totalMarks: 100,
    duration: '60 Min',
    locked: true
  }
];

// ─── FAQ Data ────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: 'Are these SBI PO and IBPS PO previous year papers official?',
    answer: 'Yes, all the Previous Year Question Papers (PYQs) provided on PrepBanker are official memory-based papers compiled from actual exams. They represent authentic exam questions and sections to give you an accurate sense of the actual exam difficulty.'
  },
  {
    question: 'How many years of PYQ papers are available on PrepBanker?',
    answer: 'We offer PYQ papers covering 7 years of exams (2018–2024) across multiple shifts for both SBI PO and IBPS PO. This includes both Prelims and Mains stages, giving you a complete repository to cover.'
  },
  {
    question: 'Can I practise these papers in exam mode?',
    answer: 'Yes! Unlocked PDFs can be downloaded directly. To attempt these actual PYQ papers in a real-time online exam interface with section-wise timers, negative marking, instant percentiles, and detailed AI feedback, register free on our main platform at app.prepgrind.com.'
  },
  {
    question: 'Are the PDFs free to download?',
    answer: 'We offer free downloads of select previous year papers (e.g. 2024 Prelims Shift 1 for both exams) to help you check the quality without signing up. The rest of the papers can be unlocked completely free by signing up/registering on PrepGrind.'
  },
  {
    question: 'How do PYQ papers help in SBI PO / IBPS PO preparation?',
    answer: 'PYQs are the gold standard for banking exam prep. They help you analyze exact recurring patterns, understand the difficulty gradient of questions (especially in quantitative aptitude and reasoning puzzles), calibrate your speed, and identify the weightage of different topics in the syllabus.'
  },
  {
    question: 'What is the difference between Prelims and Mains papers?',
    answer: 'Prelims papers focus heavily on speed and basic concept accuracy, consisting of 100 questions to be solved in 60 minutes. Mains papers are significantly more advanced, featuring higher-difficulty data interpretation and puzzle sets, a General Awareness section, and descriptive writing, spanning up to 3 to 3.5 hours.'
  }
];

export default function PreviousYearPapers() {
  const [activeTab, setActiveTab] = useState<'SBI PO' | 'IBPS PO'>('SBI PO');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter papers based on active tab
  const filteredPapers = useMemo(() => {
    return PYQ_PAPERS.filter((paper) => paper.exam === activeTab);
  }, [activeTab]);

  // Reset pagination when active tab changes
  const handleTabChange = (tab: 'SBI PO' | 'IBPS PO') => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  const visiblePapers = useMemo(() => {
    return filteredPapers.slice(0, visibleCount);
  }, [filteredPapers, visibleCount]);

  const hasMore = filteredPapers.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredPapers.length));
  };

  return (
    <div className="bg-white text-[var(--color-navy)] min-h-screen font-sans">
      
      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white pt-8 pb-12 sm:pb-16">
        
        {/* Decorative background blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Previous Year Papers' },
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-6">
            
            {/* Left Column: Copy info */}
            <div className="flex-1 max-w-2xl">
              {/* Eyebrow badge */}
              <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200">
                <FileText className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  Previous Year Papers
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-extrabold leading-tight text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                }}
              >
                Crack <span className="text-gold-gradient">SBI PO & IBPS PO</span> with Real Exam Papers
              </h1>

              {/* Subheadline */}
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Download official PYQ PDFs from 2018–2024. Analyse patterns. Practise in exam mode.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://app.prepgrind.com/signup/banking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-yellow)] text-[var(--color-navy-deep)] text-sm font-extrabold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-center shadow-lg hover:shadow-yellow-500/20"
                  style={{ boxShadow: '0 4px 20px rgba(251,191,36,0.25)' }}
                >
                  Start Free Mock Test →
                </a>
                <a
                  href="#papers-list"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 hover:text-white transition-colors py-2"
                >
                  See All Papers
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-3 max-w-sm sm:max-w-none mx-auto lg:mx-0 min-w-[280px]">
                {[
                  { value: '7 Years', label: 'Papers Available' },
                  { value: '14+', label: 'Exam Shifts Covered' },
                  { value: '2 Exams', label: 'SBI PO & IBPS PO' },
                  { value: 'Free', label: 'No Sign-up Needed' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start p-4 rounded-xl border"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <p className="text-xl font-black text-[var(--color-gold-bright)] leading-none mb-1.5">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-slate-400 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PYQ Listing Section ─────────────────────────────────── */}
      <section id="papers-list" className="bg-white py-16 scroll-mt-20">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Previous Year Question Papers
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-blue)] mx-auto mt-3 rounded-full" />
            <p className="text-[var(--color-gray-600)] text-sm mt-3">
              Practice official papers stage-wise to understand actual questions, time management, and topic distribution.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 border border-slate-200/80 p-1.5 rounded-xl flex gap-1">
              {(['SBI PO', 'IBPS PO'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-[var(--color-navy-deep)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePapers.map((paper) => {
              return (
                <div
                  key={paper.id}
                  className={`relative overflow-hidden transition-all duration-300 rounded-xl bg-white border border-slate-200 shadow-[0_2px_8px_rgba(13,27,62,0.04)] flex flex-col justify-between group ${
                    paper.locked
                      ? 'border-l-4 border-slate-300'
                      : 'border-l-4 border-green-500'
                  }`}
                >
                  
                  {/* Card Content (slightly blurred/transparent if locked) */}
                  <div className={`p-6 flex-1 flex flex-col justify-between transition-all duration-300 ${
                    paper.locked ? 'blur-[0.5px] opacity-50 pointer-events-none' : ''
                  }`}>
                    <div>
                      {/* Badge Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100/80 uppercase tracking-wider">
                          {paper.exam}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-100/80 uppercase tracking-wider">
                          {paper.stage}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-650 border border-slate-200/60 uppercase tracking-wider">
                          {paper.year}
                        </span>
                        {paper.shift && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-50 text-slate-500 border border-slate-100 uppercase tracking-wider">
                            {paper.shift}
                          </span>
                        )}
                      </div>

                      {/* Headline Title */}
                      <h3 className="text-base font-extrabold text-[var(--color-navy)] mb-2 leading-tight group-hover:text-[var(--color-blue)] transition-colors">
                        {paper.exam} {paper.stage} {paper.year} {paper.shift ? `– ${paper.shift}` : ''}
                      </h3>

                      {/* Stats meta */}
                      <p className="text-xs text-slate-500 font-semibold mb-6 flex items-center gap-1.5">
                        <span>{paper.totalQuestions} Questions</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>{paper.totalMarks} Marks</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>{paper.duration}</span>
                      </p>
                    </div>

                    {/* Unlocked CTA button inside card */}
                    {!paper.locked && (
                      <a
                        href={paper.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download PDF
                      </a>
                    )}
                  </div>

                  {/* Locked Overlay Mask (visible only if locked) */}
                  {paper.locked && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] rounded-xl flex flex-col items-center justify-center p-6 z-10 transition-all duration-350 hover:bg-white/80">
                      <div className="p-2 bg-slate-100 border border-slate-200 rounded-full mb-2">
                        <Lock className="w-4 h-4 text-slate-500" />
                      </div>
                      <p className="text-xs font-bold text-slate-600 mb-3 text-center uppercase tracking-wide">
                        Paper Locked
                      </p>
                      <a
                        href="https://app.prepgrind.com/signup/banking"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-xs font-bold bg-[var(--color-navy)] text-white rounded-lg hover:bg-[var(--color-blue)] transition-all duration-200 flex items-center gap-1 hover:scale-102 shadow-sm"
                      >
                        Unlock Free
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2.5 text-xs font-bold text-slate-700 bg-transparent border border-slate-300 hover:border-slate-450 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                Load More Papers
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ─── Mid-page CTA Conversion Banner ─────────────────────── */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-12 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-black rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-base mb-2">
              🎯
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
              Want to practise these papers in real exam mode?
            </h3>
            <p className="text-white/95 text-xs sm:text-sm mt-1 leading-relaxed">
              Attempt PYQ-based mock tests, get AI analysis & live rankings — free on PrepGrind.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <a
              href="https://app.prepgrind.com/signup/banking"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-[#07102A] text-white text-xs font-extrabold hover:bg-black transition-colors block text-center shadow-lg"
            >
              Start Practising Free →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─────────────────────────────────────────── */}
      <FAQSection
        items={FAQ_ITEMS}
        dark={false}
        label="PYQ FAQs"
        title="Frequently Asked Questions"
        subtitle="Have questions about PrepBanker's SBI PO & IBPS PO Previous Year Papers? Find answers here."
      />

    </div>
  );
}
