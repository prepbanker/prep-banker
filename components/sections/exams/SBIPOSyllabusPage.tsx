// PATH: components/sections/exams/SBIPOSyllabusPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Award,
  ChevronRight,
  ChevronDown,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  FileText,
  Clock,
  Compass,
  Trophy,
  Download,
  GraduationCap,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOSyllabusPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [activePrelimsTab, setActivePrelimsTab] = useState<'english' | 'quant' | 'reasoning'>('english');

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Section C: Prelims Topics
  const prelimsEnglish = [
    { topic: 'Reading Comprehension', weight: '8–10 Qs', percentage: 30 },
    { topic: 'Cloze Test', weight: '5–7 Qs', percentage: 20 },
    { topic: 'Error Detection', weight: '3–5 Qs', percentage: 13 },
    { topic: 'Para Jumbles', weight: '3–5 Qs', percentage: 13 },
    { topic: 'Word Swap / Match Column', weight: '3–5 Qs', percentage: 13 },
    { topic: 'Sentence Improvement', weight: '2–3 Qs', percentage: 8 },
    { topic: 'Vocabulary-Based Questions', weight: 'Integrated', percentage: 3 }
  ];

  const prelimsQuant = [
    { topic: 'Data Interpretation', weight: '10–15 Qs', percentage: 40 },
    { topic: 'Arithmetic (Percentage, Profit/Loss, SI-CI, Time/Work, Ratio)', weight: '10–12 Qs', percentage: 32 },
    { topic: 'Simplification / Approximation', weight: '5–10 Qs', percentage: 20 },
    { topic: 'Number Series', weight: '5 Qs', percentage: 14 },
    { topic: 'Quadratic Equations', weight: '5 Qs', percentage: 14 }
  ];

  const prelimsReasoning = [
    { topic: 'Puzzles & Seating Arrangement', weight: '15–20 Qs', percentage: 58 },
    { topic: 'Syllogism', weight: '4–5 Qs', percentage: 15 },
    { topic: 'Inequality', weight: '4–5 Qs', percentage: 15 },
    { topic: 'Coding-Decoding', weight: '3–5 Qs', percentage: 12 },
    { topic: 'Blood Relations', weight: '2–3 Qs', percentage: 8 },
    { topic: 'Direction Sense', weight: '2–3 Qs', percentage: 8 },
    { topic: 'Alphanumeric Series', weight: '2–3 Qs', percentage: 8 }
  ];

  // Section E: Descriptive Themes
  const descriptiveThemes = [
    'Digital Banking',
    'Financial Literacy',
    'Cyber Security',
    'Artificial Intelligence',
    'Financial Inclusion',
    'Women Empowerment',
    'Sustainable Development',
    'Banking Reforms'
  ];

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
        {/* Decorative elements */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 bg-blue-500 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-purple-500 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <ChevronRight size={10} />
            <Link href="/exams" className="hover:text-white transition-colors no-underline">Exams</Link>
            <ChevronRight size={10} />
            <Link href="/sbi-po" className="hover:text-white transition-colors no-underline">SBI PO</Link>
            <ChevronRight size={10} />
            <span className="text-white/80">Syllabus</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            {/* Left Column: Headlines */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wide uppercase">
                Updated for 2026
              </div>

              {/* Title & Headline */}
              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Syllabus 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Complete Topic-Wise Syllabus for Prelims, Mains & Descriptive Test
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Covers English, Quantitative Aptitude, Reasoning, Banking Awareness, Computer Aptitude & Descriptive Writing — with expected question weightage per topic. <span className="text-emerald-450 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline"
                  >
                    Attempt Free SBI PO Mock Test
                  </a>
                  <a
                    href="#download-pdf"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    <Download size={15} />
                    Download Syllabus PDF
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>Want details on cutoffs or sectional timings?</span>
                  <Link href="/sbi-po/exam-pattern" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check Exam Pattern & Marking Scheme <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Topic-Wise Weightage
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Updated Daily
                </span>
                <span className="flex items-center gap-1">
                  <FileText size={14} className="text-emerald-400" />
                  Prelims + Mains Covered
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Prelims Sections</div>
                <div className="text-lg sm:text-xl font-black text-white">3 Sections</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Mains Sections</div>
                <div className="text-lg sm:text-xl font-black text-white">4 Sections</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Descriptive Duration</div>
                <div className="text-lg sm:text-xl font-black text-[#FBBF24]">30/40 Min</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Syllabus Areas</div>
                <div className="text-lg sm:text-xl font-black text-white">8 Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Left Column: Content */}
          <main className="space-y-10">

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold">
                The SBI PO Syllabus 2026 covers three sections in Prelims — English Language, Quantitative Aptitude, and Reasoning Ability — and four sections in Mains — Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and English Language — followed by a Descriptive Test (Email Writing, Report/Precis Writing) worth 30 marks. Candidates who clear Mains proceed to a Psychometric Test, Group Exercise, and Interview. The syllabus has largely remained unchanged in structure for 2026, with the main revision being the Descriptive Test marks reduced from 50 to 30.
              </p>
            </section>

            {/* Table of Contents for Navigation */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {[
                    { id: 'at-a-glance', text: 'Syllabus at a Glance' },
                    { id: 'prelims-syllabus', text: 'Prelims Topic-Wise Syllabus' },
                    { id: 'mains-syllabus', text: 'Mains Sectional Syllabus' },
                    { id: 'descriptive-test', text: 'Descriptive Test Guidelines' },
                    { id: 'psychometric-interview', text: 'Psychometric & Interview Areas' },
                    { id: 'download-pdf', text: 'Syllabus PDF & Study Plan' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-650 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                          {idx + 1}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── SECTION B: SYLLABUS AT A GLANCE (Progressive Timeline) ── */}
            <section id="at-a-glance" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Award size={20} className="text-[#1B6EB5]" />
                SBI PO Syllabus 2026 at a Glance
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { stage: 'Stage 1: Prelims Exam', color: 'border-l-[#1B6EB5]', bg: 'bg-blue-50/15', subjects: 'English Language, Quantitative Aptitude, Reasoning Ability', target: 'Qualifying Stage' },
                    { stage: 'Stage 2: Mains (Objective)', color: 'border-l-[#8B5CF6]', bg: 'bg-purple-50/15', subjects: 'Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, English Language', target: 'Merit List Calculation' },
                    { stage: 'Stage 2: Mains (Descriptive)', color: 'border-l-[#F59E0B]', bg: 'bg-amber-50/15', subjects: 'Email Writing, Situation Analysis Writing, Report/Precis Writing', target: 'Score: 30 Marks' },
                    { stage: 'Stage 3: Phase III', color: 'border-l-emerald-500', bg: 'bg-emerald-50/15', subjects: 'Psychometric Test, Group Exercise, Interview', target: 'Final Selection Stage' }
                  ].map((item, idx) => (
                    <div key={idx} className={`p-4 border-y border-r border-slate-200 border-l-4 ${item.color} ${item.bg} rounded-r-2xl space-y-2`}>
                      <div className="flex justify-between items-center">
                        <span className="font-black text-slate-900 text-sm">{item.stage}</span>
                        <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-500 font-bold">{item.target}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed m-0">
                        {item.subjects}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-500 font-bold leading-normal flex items-center justify-between gap-4 flex-wrap">
                  <span>Looking for section-wise marks, question counts, duration boundaries, and negative marking?</span>
                  <Link href="/sbi-po/exam-pattern" className="font-extrabold text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-0.5 whitespace-nowrap shrink-0">
                    SBI PO Exam Pattern <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION C: PRELIMS SYLLABUS TOPIC-WISE (Visual tabs + progress bars) ── */}
            <section id="prelims-syllabus" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <GraduationCap size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Syllabus 2026 (Topic-Wise)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                {/* Horizontal Tab Selector */}
                <div className="flex flex-wrap bg-slate-100 p-1 rounded-2xl w-full sm:w-fit mb-6 gap-1">
                  {[
                    { id: 'english', label: 'English Language' },
                    { id: 'quant', label: 'Quantitative Aptitude' },
                    { id: 'reasoning', label: 'Reasoning Ability' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActivePrelimsTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex-1 sm:flex-initial text-center ${activePrelimsTab === tab.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Syllabus Topic</span>
                    <span className="text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest">Expected Weightage</span>
                  </div>

                  {activePrelimsTab === 'english' && (
                    <div className="space-y-4">
                      {prelimsEnglish.map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                            <span className="text-slate-850">{item.topic}</span>
                            <span className="text-[#1B6EB5] font-extrabold">{item.weight}</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#1B6EB5] h-full rounded-full transition-all duration-300" style={{ width: `${item.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activePrelimsTab === 'quant' && (
                    <div className="space-y-4">
                      {prelimsQuant.map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                            <span className="text-slate-850">{item.topic}</span>
                            <span className="text-[#1B6EB5] font-extrabold">{item.weight}</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-purple-500 h-full rounded-full transition-all duration-300" style={{ width: `${item.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activePrelimsTab === 'reasoning' && (
                    <div className="space-y-4">
                      {prelimsReasoning.map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                            <span className="text-slate-850">{item.topic}</span>
                            <span className="text-[#1B6EB5] font-extrabold">{item.weight}</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full rounded-full transition-all duration-300" style={{ width: `${item.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sectional Test Links */}
                  <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-extrabold text-slate-500 justify-center">
                    <span>Practice topic-wise:</span>
                    <Link href="/sbi-po/english-tests" className="text-[#1B6EB5] hover:underline no-underline">
                      English Sectional Tests
                    </Link>
                    <span>•</span>
                    <Link href="/sbi-po/quant-tests" className="text-[#1B6EB5] hover:underline no-underline">
                      Quant Sectional Tests
                    </Link>
                    <span>•</span>
                    <Link href="/sbi-po/reasoning-tests" className="text-[#1B6EB5] hover:underline no-underline">
                      Reasoning Sectional Tests
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION D: MAINS SYLLABUS TOPIC-WISE (Grid Cards instead of table) ── */}
            <section id="mains-syllabus" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <GraduationCap size={20} className="text-[#1B6EB5]" />
                SBI PO Mains Syllabus 2026 (Topic-Wise)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                {/* Reasoning & Computer */}
                <div className="bg-white border border-slate-200 p-5 rounded-3xl space-y-3 hover:shadow-xs transition-all flex flex-col">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1B6EB5]" />
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">Reasoning & Computer Aptitude</h3>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold flex-1 list-disc pl-4 space-y-1">
                    <li>Puzzles (High-Level) & Seating Arrangement</li>
                    <li>Input-Output</li>
                    <li>Critical Reasoning (Cause & Effect, Course of Action)</li>
                    <li>Statement-Assumption & Conclusion</li>
                    <li>Decision Making</li>
                    <li>Computer Fundamentals, Hardware & Software</li>
                    <li>Operating Systems & Database Basics</li>
                    <li>Networking, Internet & Cyber Security Basics</li>
                    <li>MS Office & Memory Devices</li>
                  </ul>
                </div>

                {/* Data Analysis & Interpretation */}
                <div className="bg-white border border-slate-200 p-5 rounded-3xl space-y-3 hover:shadow-xs transition-all flex flex-col">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">Data Analysis & Interpretation</h3>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold flex-1 list-disc pl-4 space-y-1">
                    <li>Caselet DI</li>
                    <li>Table DI</li>
                    <li>Bar Graph & Line Graph DI</li>
                    <li>Pie Chart & Radar DI</li>
                    <li>Missing DI</li>
                    <li>Quantity Comparison</li>
                    <li>Data Sufficiency</li>
                    <li>Probability, Permutation & Combination</li>
                  </ul>
                </div>

                {/* Banking & GA */}
                <div className="bg-white border border-slate-200 p-5 rounded-3xl space-y-3 hover:shadow-xs transition-all flex flex-col">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">General/Economy/Banking Awareness</h3>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold flex-1 list-disc pl-4 space-y-1">
                    <li>RBI Functions, Monetary Policy, Repo/Reverse Repo, CRR, SLR</li>
                    <li>Basel Norms, NPA, Financial Inclusion & Digital Banking</li>
                    <li>UPI, NEFT, RTGS, IMPS & NPCI</li>
                    <li>Union Budget & Economic Survey</li>
                    <li>GDP, Inflation & Fiscal Deficit</li>
                    <li>Capital & Money Markets</li>
                    <li>Current Affairs (Last 6 Months) — Banking, Economy, News</li>
                    <li>Awards, Sports, Government Schemes & Summits</li>
                  </ul>
                </div>

                {/* English Language */}
                <div className="bg-white border border-slate-200 p-5 rounded-3xl space-y-3 hover:shadow-xs transition-all flex flex-col">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">English Language (Mains)</h3>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold flex-1 list-disc pl-4 space-y-1">
                    <li>Reading Comprehension (including Editorial-based RC)</li>
                    <li>Cloze Test</li>
                    <li>Error Detection</li>
                    <li>Word Swap</li>
                    <li>Connectors</li>
                    <li>Para Jumbles</li>
                    <li>Vocabulary & Fillers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION E: DESCRIPTIVE TEST SYLLABUS (Dual-column layout) ── */}
            <section id="descriptive-test" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileText size={20} className="text-[#1B6EB5]" />
                SBI PO Descriptive Test Syllabus
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6">
                  {/* Left Column: Components */}
                  <div className="space-y-4">
                    {[
                      { type: 'Email Writing', details: 'Official/formal emails, customer communication' },
                      { type: 'Situation Analysis Writing', details: 'Banking and business scenarios' },
                      { type: 'Report / Precis Writing', details: 'Banking reports, editorial and economic summaries' }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 border border-slate-200 rounded-2xl bg-slate-50/40">
                        <span className="block font-extrabold text-slate-800 text-sm sm:text-base mb-1">{item.type}</span>
                        <span className="block text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{item.details}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Themes tag cloud */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Frequent Themes
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {descriptiveThemes.map((theme, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-[10px] font-extrabold rounded-md shadow-2xs">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION F: PSYCHOMETRIC & INTERVIEW (Checklists) ── */}
            <section id="psychometric-interview" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Compass size={20} className="text-[#1B6EB5]" />
                SBI PO Psychometric Test & Interview: Areas Covered
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="p-4 bg-blue-50 border border-blue-150 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#1B6EB5] shrink-0 mt-0.5" />
                  <p className="text-[#0D1B3E] text-xs sm:text-sm font-semibold leading-relaxed m-0">
                    There&apos;s no fixed syllabus for this stage — it evaluates personality and managerial fit rather than testing knowledge.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Psychometric Traits */}
                  <div className="p-4 border border-slate-200 rounded-2xl space-y-3 bg-slate-50/30">
                    <span className="block font-black text-slate-800 text-sm border-b border-slate-200 pb-1.5">
                      Psychometric Test Evaluates:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {['Leadership', 'Integrity', 'Emotional Intelligence', 'Teamwork', 'Decision Making', 'Risk Management', 'Customer Orientation', 'Adaptability'].map((trait, idx) => (
                        <div key={idx} className="flex gap-1.5 items-center text-xs text-slate-600 font-semibold">
                          <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                          <span>{trait}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interview areas */}
                  <div className="p-4 border border-slate-200 rounded-2xl space-y-3 bg-slate-50/30">
                    <span className="block font-black text-slate-800 text-sm border-b border-slate-200 pb-1.5">
                      Interview Typically Covers:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {['Banking Awareness', 'Indian Economy', 'Current Affairs', 'Academic Background', 'Personal Background', 'Work Experience', 'Situational Ethics', 'SBI-Specific Initatives'].map((area, idx) => (
                        <div key={idx} className="flex gap-1.5 items-center text-xs text-slate-600 font-semibold">
                          <CheckCircle size={12} className="text-blue-500 shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-500 font-bold leading-normal flex items-center justify-between gap-4 flex-wrap">
                  <span>To understand the exact Phase III weightage parameters and calculation guidelines:</span>
                  <Link href="/sbi-po/selection-process" className="font-extrabold text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-0.5 whitespace-nowrap shrink-0">
                    SBI PO Selection Process <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION G: SYLLABUS PDF & PREPARATION TIP (Download CTA Card) ── */}
            <section id="download-pdf" className="scroll-mt-20">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-150 p-6 rounded-3xl font-sans text-center space-y-4">
                <Sparkles size={28} className="mx-auto text-blue-500" />
                <h3 className="font-black text-slate-855 text-base sm:text-lg">Download Syllabus PDF & Start Preparation</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-semibold">
                  Download the complete topic-wise SBI PO Syllabus 2026 in one single document, or get a week-by-week study plan to cover it systematically.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md cursor-pointer no-underline"
                  >
                    <Download size={14} />
                    Download Syllabus PDF
                  </a>
                  <Link
                    href="/sbi-po/study-plan"
                    className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-350 bg-white hover:bg-slate-50 transition-all font-extrabold text-xs text-slate-700 no-underline"
                  >
                    SBI PO Study Plan
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── FAQS SECTION ── */}
            <section id="faqs" className="py-6 scroll-mt-20 border-t border-slate-200 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-display border-b border-slate-100 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  { q: 'What is the syllabus for SBI PO Prelims 2026?', a: 'SBI PO Prelims covers three sections: English Language, Quantitative Aptitude, and Reasoning Ability.' },
                  { q: 'What is the syllabus for SBI PO Mains 2026?', a: 'SBI PO Mains covers Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and English Language, plus a separate Descriptive Test.' },
                  { q: 'Has the SBI PO Syllabus changed for 2026?', a: 'The overall syllabus structure is unchanged; the main revision is the Descriptive Test marks being reduced from 50 to 30.' },
                  { q: 'What topics are covered in the SBI PO Descriptive Test?', a: 'Email Writing, Situation Analysis Writing, and Report/Precis Writing.' },
                  { q: 'Which is the highest-weightage topic in SBI PO Prelims Reasoning?', a: 'Puzzles and Seating Arrangement carry the highest weightage, typically 15–20 questions out of 30.' },
                  { q: 'Is there a fixed syllabus for the SBI PO Interview?', a: 'No, the interview has no fixed syllabus — it assesses banking awareness, current affairs, communication skills, and personal suitability for an officer role.' },
                  { q: 'What does the SBI PO Computer Aptitude syllabus include?', a: 'Computer Fundamentals, Hardware, Software, Operating Systems, Networking, Internet, Cyber Security basics, MS Office, and Database basics.' },
                  { q: 'How many questions come from Data Interpretation in SBI PO Prelims?', a: 'Data Interpretation typically carries 10–15 questions in the Quantitative Aptitude section of Prelims.' },
                  { q: 'What does the SBI PO Psychometric Test evaluate?', a: 'It evaluates personality traits such as leadership, integrity, emotional intelligence, teamwork, decision-making, and adaptability — there\'s no right or wrong answer format.' },
                  { q: 'Where can I download the SBI PO Syllabus 2026 PDF?', a: 'The complete topic-wise SBI PO Syllabus 2026 PDF is available for download on this page.' }
                ].map((faq, idx) => {
                  const isFaqOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 text-left font-extrabold text-slate-800 flex justify-between items-center text-sm sm:text-base hover:bg-slate-50/50"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1B6EB5]" />
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform duration-300 ${isFaqOpen ? 'transform rotate-180' : ''}`}
                        />
                      </button>
                      {isFaqOpen && (
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-655 leading-relaxed border-t border-slate-100 pt-3 font-normal">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* KEEP EDITORIAL SECTION EXACTLY AS CURRENTLY IS AT THE BOTTOM */}
            <ExamAuthorSection examId="sbi-po" />
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 space-y-4 hidden lg:block">
            <QuickNavigation exam={exam} activeSlug="syllabus" />

            {/* Premium Mock Test CTA Banner */}
            <div className="bg-gradient-to-br from-[#030712] to-[#091024] border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white font-sans mb-16">
              <div className="relative z-10">
                <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
                <h4 className="font-bold text-sm mb-1 font-display">Ready to Crack SBI PO 2026?</h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Join 50k+ banking aspirants practicing with PrepBanker mocks.
                </p>
                <a
                  href="https://app.prepgrind.com/signup/sbi-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5 no-underline"
                >
                  Start Practice Mocks Free →
                </a>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
