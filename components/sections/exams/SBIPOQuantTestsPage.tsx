// PATH: components/sections/exams/SBIPOQuantTestsPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Download,
  Info,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  FileText,
  Users,
  Trophy,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  GraduationCap,
  Globe,
  Award,
  ListTodo,
  Coins,
  ArrowUpRight,
  Percent,
  Check,
  TrendingDown,
  Heart,
  Scale,
  Monitor,
  Activity,
  CheckSquare,
  BarChart4,
  Flame,
  FileQuestion,
  BookOpenCheck,
  Zap,
  Target
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOQuantTestsPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What topics are covered in the SBI PO Quantitative Aptitude test?",
      a: "The SBI PO Quantitative Aptitude test covers Data Interpretation, Number Series, Simplification and Approximation, Quadratic Equations, and Arithmetic word problems such as Time & Work, Profit & Loss, and Time-Speed-Distance."
    },
    {
      q: "How many questions are in the SBI PO Quantitative Aptitude section?",
      a: "The SBI PO Quantitative Aptitude section carries 30 questions for 30 marks in Prelims, to be completed within a 20-minute sectional time limit."
    },
    {
      q: "Which topic carries the highest weightage in SBI PO Quantitative Aptitude?",
      a: "Data Interpretation carries the highest weightage in SBI PO Quantitative Aptitude, typically contributing 10 to 15 of the section's 30 questions."
    },
    {
      q: "Is there negative marking in the SBI PO Quant sectional test?",
      a: "Yes, each incorrect answer in the SBI PO Quantitative Aptitude section deducts 0.25 marks, the same negative marking rule applied across the full exam."
    },
    {
      q: "Which Quant topics should be prioritized for SBI PO Prelims?",
      a: "Data Interpretation, Number Series, and Simplification/Approximation should be prioritized for SBI PO Prelims, since together these three topics can account for more than 20 of the section's 30 questions."
    },
    {
      q: "Is the SBI PO Quant sectional test available for free?",
      a: "Yes, PrepBanker offers free Quant sectional tests covering Data Interpretation, Simplification, and Number Series, with no payment required to attempt them."
    },
    {
      q: "How is SBI PO Mains Quant different from Prelims Quant?",
      a: "SBI PO Mains replaces the standalone Quant section with Data Analysis and Interpretation, a 30-question, 60-mark section with a 45-minute duration that tests more advanced, calculation-heavy data sets than Prelims."
    },
    {
      q: "What does the SBI PO Quant test report show after submission?",
      a: "The report shows topic-wise accuracy across Data Interpretation, Number Series, Simplification, and Arithmetic, along with time spent per question and step-by-step solutions."
    },
    {
      q: "How can I improve my SBI PO Data Interpretation speed?",
      a: "Reading the complete data set once before attempting any question in that set helps in SBI PO Data Interpretation, since questions within one set often reuse the same base calculations."
    },
    {
      q: "Do SBI PO Quant sectional tests follow the latest exam pattern?",
      a: "Yes, PrepBanker's SBI PO Quant sectional tests are aligned with the current SBI PO 2026 pattern and are refreshed using memory-based inputs from recent exam shifts."
    }
  ];

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-10 bg-amber-500 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-blue-500 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link href="/sbi-po" className="hover:text-white transition-colors no-underline">SBI PO</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-white">Quant Tests</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
            <div className="space-y-4">
              <span className="inline-flex px-2.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[9px] font-black uppercase tracking-wider text-blue-300">
                Quantitative Aptitude Test 2026
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight m-0 text-white font-display">
                SBI PO Quantitative Aptitude Test 2026
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-extrabold max-w-2xl leading-relaxed m-0 font-sans">
                Practice Data Interpretation, Simplification, Number Series, and Quadratic Equations separately — timed to the real 20-minute sectional limit, with topic-level accuracy on every attempt.
              </p>
              
              {/* Trust strip */}
              <div className="space-y-2 pt-2 text-slate-300 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  <span>Quant sectional and topic tests across DI, Arithmetic, Number Series & more</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  <span>Covers Prelims (30 Qs) and Mains (Data Analysis & Interpretation) level difficulty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  <span>Difficulty-tagged, topic-tagged practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  <span>Updated for the SBI PO 2026 pattern</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://app.prepgrind.com/signup/sbi-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:-translate-y-0.5 no-underline cursor-pointer"
                >
                  Attempt Free Quant Sectional Test →
                </a>
                <a
                  href="https://app.prepgrind.com/signup/sbi-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/10 border border-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all no-underline cursor-pointer"
                >
                  View All Quant Topic Tests →
                </a>
              </div>
              <p className="text-[10px] sm:text-xs text-white/50 font-semibold m-0 leading-normal italic">
                Every test scores instantly with topic-level accuracy — see exactly which chapter is costing you marks, not just your overall Quant score.
              </p>
            </div>

            {/* Visual highlight block */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full lg:w-80 shrink-0 font-sans space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Zap size={18} />
                <span className="text-xs font-black uppercase tracking-wider">Fast-track Speed</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-semibold leading-relaxed m-0">
                Get immediate speed analytics, percentile rankings, and memory-based questions from recent 2025/2026 shifts to target 25+ in Quant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Left Column: Core Content */}
          <main className="space-y-10 min-w-0">

            {/* ── WHY TOPIC-WISE QUANT PRACTICE ── */}
            <section className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Zap size={20} className="text-[#1B6EB5]" />
                Why Isolate Quant Topics Instead of Only Attempting Full Mocks
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  A full mock tells you "Quant: 18/30" — it doesn't tell you whether that's a DI problem, a speed problem on Number Series, or a formula gap in Quadratic Equations. Since DI alone can carry up to half the section, one weak DI set-type can be worth more marks than three other topics combined. Isolated topic practice is the fastest way to convert a specific weakness into a specific fix.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                    <div className="font-extrabold text-[#1B6EB5] text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      DI Domain Weight
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Data Interpretation is the highest-weightage topic in Quant, typically contributing <strong>10–15 of the section's 30 questions</strong> across Bar, Line, Pie, Table, Caselet, and Mixed DI formats.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                    <div className="font-extrabold text-[#1B6EB5] text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Speed Core Pillars
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Number Series and Simplification/Approximation are the next-highest priority — together with DI, these three topics can account for <strong>20+ of the 30 Quant questions</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                    <div className="font-extrabold text-[#1B6EB5] text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Arithmetic Foundation
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Arithmetic word problems (Time & Work, Profit & Loss, SI/CI, Time-Speed-Distance) form the foundation for both Prelims and Mains, so early mastery compounds across both stages.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── TOPIC BREAKDOWN TABLE ── */}
            <section className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Layers size={20} className="text-[#1B6EB5]" />
                SBI PO Quantitative Aptitude Tests — Topic-Wise Practice
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                
                <div className="border border-purple-200/50 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#4C1D95] text-white font-sans uppercase tracking-wider font-black">
                          <th className="px-5 py-4">Topic</th>
                          <th className="px-3 py-4">What It Tests</th>
                          <th className="px-3 py-4">Typical Weight in Prelims</th>
                          <th className="px-3 py-4 text-right">Tests Available</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-100 font-sans">
                        {[
                          { topic: 'Data Interpretation (DI)', desc: 'Bar, Line, Pie, Table, Caselet, Mixed DI — reading and calculating from data sets', weight: 'Highest — 10–15 Qs', status: 'Available' },
                          { topic: 'Number Series', desc: 'Missing number / wrong number in a sequence', weight: 'High', status: 'Available' },
                          { topic: 'Simplification & Approximation', desc: 'BODMAS, percentage approximation, square/cube roots', weight: 'High', status: 'Available' },
                          { topic: 'Quadratic Equations', desc: 'Comparing roots of two equations', weight: 'Moderate–High', status: 'Available' },
                          { topic: 'Arithmetic Word Problems', desc: 'Time & Work, Profit & Loss, SI/CI, Time-Speed-Distance, Ratio & Proportion', weight: 'Moderate–High', status: 'Available' },
                          { topic: 'Mixture & Alligation', desc: 'Blending ratios and concentrations', weight: 'Moderate', status: 'Available' },
                          { topic: 'Pipes & Cisterns', desc: 'Rate-based work problems', weight: 'Moderate', status: 'Available' },
                          { topic: 'Problems on Trains', desc: 'Relative speed and distance problems', weight: 'Lower, but recurring', status: 'Available' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`divide-x divide-purple-50 hover:bg-purple-50/20 transition-colors ${idx % 2 === 1 ? "bg-purple-50/10" : ""}`}>
                            <td className="px-5 py-3 font-extrabold text-[#4C1D95]">{row.topic}</td>
                            <td className="px-3 py-3 text-slate-600 font-semibold">{row.desc}</td>
                            <td className="px-3 py-3 text-slate-800 font-extrabold">{row.weight}</td>
                            <td className="px-3 py-3 text-[#1B6EB5] font-black text-right">
                              <span className="inline-block bg-blue-50 text-[#1B6EB5] px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want the complete SBI PO syllabus breakdown across all sections?
                  </span>
                  <Link
                    href="/sbi-po/syllabus"
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline shrink-0"
                  >
                    Syllabus
                  </Link>
                </div>
              </div>
            </section>

            {/* ── TEST FORMAT ── */}
            <section className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Clock size={20} className="text-[#1B6EB5]" />
                How the Quant Sectional Test Is Structured
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  Each Quant sectional test on PrepBanker mirrors the real Prelims section: 30 questions, 30 marks, 20 minutes, with 0.25 negative marking per wrong answer, timed independently of English and Reasoning so you build the habit of finishing Quant within its own sectional window on exam day.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="/sbi-po/exam-pattern"
                    className="text-xs sm:text-sm font-black text-[#1B6EB5] hover:text-blue-700 flex items-center gap-1 no-underline"
                  >
                    See full SBI PO exam pattern →
                  </Link>
                </div>
              </div>
            </section>

            {/* ── FREE TEST BLOCK ── */}
            <section className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Award size={20} className="text-[#1B6EB5]" />
                Start Free — SBI PO Quantitative Aptitude Test
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'SBI PO Quant Sectional Test 01',
                      focus: 'Data Interpretation Focus',
                      link: 'https://app.prepgrind.com/signup/sbi-po'
                    },
                    {
                      title: 'SBI PO Quant Sectional Test 02',
                      focus: 'Simplification + Number Series',
                      link: 'https://app.prepgrind.com/signup/sbi-po'
                    },
                    {
                      title: 'SBI PO Quant Sectional Test 03',
                      focus: 'Quadratic Equations + Arithmetic',
                      link: 'https://app.prepgrind.com/signup/sbi-po'
                    }
                  ].map((test, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-350 transition-all flex flex-col justify-between h-44">
                      <div className="space-y-1">
                        <div className="font-extrabold text-slate-800 text-xs sm:text-sm m-0 leading-snug">{test.title}</div>
                        <span className="inline-block text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-normal">
                          {test.focus}
                        </span>
                      </div>
                      <a
                        href={test.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-2 bg-white border border-slate-200 hover:border-[#1B6EB5] hover:text-[#1B6EB5] text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer no-underline"
                      >
                        Start Free Test
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-2 text-xs sm:text-sm font-semibold text-slate-655">
                  <div>
                    Looking for the other sections? →{' '}
                    <Link href="/sbi-po/english-tests" className="font-bold text-[#1B6EB5] hover:underline no-underline">
                      English Tests
                    </Link>{' '}
                    ·{' '}
                    <Link href="/sbi-po/reasoning-tests" className="font-bold text-[#1B6EB5] hover:underline no-underline">
                      Reasoning Tests
                    </Link>
                  </div>
                  <div>
                    Want the full combined mock instead? →{' '}
                    <Link href="/sbi-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline no-underline">
                      SBI PO Mock Tests
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── HOW TO IMPROVE EACH TOPIC ── */}
            <section className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ListTodo size={20} className="text-[#1B6EB5]" />
                How to Improve Your SBI PO Quant Score, Topic by Topic
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      topic: 'Data Interpretation',
                      advice: 'Read the full data set once before attempting any question in the set — DI questions within one set often share calculations, so solving in the right order saves repeat computation.'
                    },
                    {
                      topic: 'Number Series',
                      advice: 'Check the difference pattern (arithmetic, geometric, or alternating) in the first three terms before testing squares/cubes — most SBI PO series follow one of four repeating patterns.'
                    },
                    {
                      topic: 'Simplification/Approximation',
                      advice: 'Practice BODMAS mentally in blocks of two operations at a time rather than solving the full expression left to right — it\'s faster under a 20-minute sectional clock.'
                    },
                    {
                      topic: 'Quadratic Equations',
                      advice: 'Learn to compare roots by sign and magnitude patterns (both positive, both negative, opposite signs) instead of solving both equations fully — this alone can save 15–20 seconds per question.'
                    },
                    {
                      topic: 'Arithmetic Word Problems',
                      advice: 'Build a formula sheet for the five most-repeated types (Time & Work, SI/CI, Profit & Loss, TSD, Ratio) and drill until the formula is automatic, not looked up mid-question.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                      <div className="font-extrabold text-slate-800 text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item.topic}
                      </div>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed m-0">
                        {item.advice}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    This is topic tactics only — for a full week-by-week Quant + English + Reasoning plan:
                  </span>
                  <Link
                    href="/sbi-po/study-plan"
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline shrink-0"
                  >
                    SBI PO Study Plan
                  </Link>
                </div>
              </div>
            </section>

            {/* ── AFTER-TEST ANALYSIS ── */}
            <section className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                What Your Quant Test Report Shows
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Topic-wise accuracy', desc: 'DI vs. Number Series vs. Simplification vs. Arithmetic is scored separately so you know exactly where to prioritize.' },
                    { title: 'Time spent per question', desc: 'See if one DI set is eating your full 20 minutes, allowing you to optimize time distribution.' },
                    { title: 'Difficulty-tagged review', desc: 'See whether marks are lost on easy/moderate questions (the biggest red flag) or only on genuinely hard ones.' },
                    { title: 'Step-by-step solutions', desc: 'Includes the fastest method and shortcut steps for every question, not just the correct option.' }
                  ].map((report, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 sm:p-6 space-y-1">
                      <span className="text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest block">{`Feature 0${idx + 1}`}</span>
                      <div className="font-extrabold text-slate-800 text-sm leading-tight m-0">{report.title}</div>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed pt-1.5 m-0">{report.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── FAQ ACCORDION ── */}
            <section id="faqs" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <HelpCircle size={20} className="text-[#1B6EB5]" />
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-3 font-sans">
                {faqs.map((faq, idx) => {
                  const isFaqOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-350 transition-all font-sans"
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
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-655 leading-relaxed border-t border-slate-100 pt-3 font-normal font-sans text-slate-600">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* KEEP EDITORIAL SECTION EXACTLY AS IS */}
            <ExamAuthorSection examId="sbi-po" />
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 space-y-4 hidden lg:block">
            <QuickNavigation exam={exam} activeSlug="quant-tests" />

            {/* Premium Mock Test CTA Banner */}
            <div className="bg-gradient-to-br from-[#030712] to-[#091024] border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white font-sans mb-16">
              <div className="relative z-10">
                <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
                <div className="font-bold text-sm mb-1 font-display">Ready to Crack SBI PO 2026?</div>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Join 50k+ banking aspirants practicing with PrepBanker mocks.
                </p>
                <a
                  href="https://app.prepgrind.com/signup/sbi-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5 no-underline cursor-pointer"
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
