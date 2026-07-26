// PATH: components/sections/exams/SBIPOStudyPlanPage.tsx
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

export default function SBIPOStudyPlanPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

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
            <ChevronRight size={10} />
            <Link href="/exams" className="hover:text-white transition-colors no-underline">Exams</Link>
            <ChevronRight size={10} />
            <Link href="/sbi-po" className="hover:text-white transition-colors no-underline">SBI PO</Link>
            <ChevronRight size={10} />
            <span className="text-white/80">Study Plan</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wide uppercase">
                Preparation Strategy
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Study Plan 2026 — A Day-Wise Roadmap to Crack the Exam
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Not another topic list — a phase-by-phase schedule that tells you what to study each week, how many mocks to take each month, and when to start revision, descriptive practice, and interview prep.
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Built around the SBI PO 2026 exam calendar (Prelims August, Mains September). <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#whats-included"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline font-sans"
                  >
                    Jump to This Week's Plan ↓
                  </a>
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline font-sans"
                  >
                    Start Today's Mock Test →
                  </a>
                </div>
                <div className="text-xs text-white/65 font-semibold italic">
                  This plan assumes 3–4 months before Prelims. Scroll to the compressed 30-day version if you're starting later.
                </div>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Overall Roadmap</div>
                <div className="text-base sm:text-lg font-black text-white">3-Phase Framework</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Target Coverage</div>
                <div className="text-base sm:text-lg font-black text-white leading-tight">Foundation to Mains</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Exam Cycle</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">Pre Aug / Mains Sept</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Late Starters</div>
                <div className="text-base sm:text-lg font-black text-white">30-Day Route Option</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

          {/* Left Column: Core Content */}
          <main className="space-y-10">

            {/* ── SECTION 3: QUICK ANSWER / SUMMARY BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans space-y-4">
              <h2 className="text-lg font-extrabold text-[#0D1B3E] font-display flex items-center gap-2 m-0 border-b border-blue-100 pb-2">
                <Zap size={18} className="text-[#1B6EB5]" />
                SBI PO Study Plan — Quick Answer
              </h2>
              <p className="text-[#0D1B3E] text-sm sm:text-base leading-relaxed font-semibold m-0">
                A realistic SBI PO study plan runs in three phases: a 4–6 week Foundation phase covering basic Quant, Reasoning, and English concepts; a Strengthening phase focused on Data Interpretation, Puzzles, and Reading Comprehension along with sectional tests; and a Mock phase in the final 3–4 weeks built entirely around full-length mocks, error analysis, and revision — not new topics. Across the full timeline, accuracy and mock-test discipline matter more than total study hours, and Mains-level practice (advanced DI, harder puzzles, current affairs, descriptive writing) should start early rather than being crammed into the gap between Prelims and Mains.
              </p>
            </section>

            {/* Table of Contents */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs font-sans">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {[
                    { id: 'three-phases', text: 'The 3-Phase Framework' },
                    { id: 'time-allocation', text: 'Daily Time Allocation' },
                    { id: 'pre-timeline', text: 'Prelims Prep Timelines' },
                    { id: 'mains-timeline', text: 'Mains Parallel timelines' },
                    { id: 'mock-frequency', text: 'Mock test frequency schedules' },
                    { id: 'error-analysis', text: 'Error-Notebook Diagnostic system' },
                    { id: 'compressed-plan', text: 'Compressed 30-Day Plan' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-655 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-55 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                          {idx + 1}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── SECTION 4: THE THREE-PHASE FRAMEWORK (GFM Table) ── */}
            <section id="three-phases" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BookOpenCheck size={20} className="text-[#1B6EB5]" />
                The 3 Phases of SBI PO Preparation
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">

                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Phase</th>
                          <th className="px-5 py-4">Duration</th>
                          <th className="px-5 py-4">Focus</th>
                          <th className="px-5 py-4 text-right">Mock Frequency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { phase: 'Phase 1: Foundation', duration: 'Weeks 1–4', focus: 'Core concepts — basic Quant, basic Reasoning, English grammar fundamentals', mocks: '1 sectional test/week' },
                          { phase: 'Phase 2: Strengthening', duration: 'Weeks 5–8', focus: 'Data Interpretation, Puzzles & Seating Arrangement, Reading Comprehension, sectional speed drills', mocks: '2–3 sectional tests/week' },
                          { phase: 'Phase 3: Mock & Revision', duration: 'Weeks 9–12 (final month)', focus: 'Full-length mocks, error-notebook review, weak-topic revision only — no new topics', mocks: '1 full mock daily in the final 2 weeks' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.phase}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-800 leading-normal">{row.duration}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-500 leading-normal">{row.focus}</td>
                            <td className="px-5 py-3.5 font-black text-[#1B6EB5] text-right shrink-0">{row.mocks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Note:</strong> Most candidates who fail on a first attempt skip straight from Phase 1 to Phase 3 — they know the topics but have never built exam-day speed. The Strengthening phase is what actually separates a passing score from a qualifying one.
                  </p>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex gap-3 items-center justify-between font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Access our dynamic mock testing engine to start Phase 3:
                  </span>
                  <Link
                    href="/sbi-po/mock-tests"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    Start Mocks Now
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 5: DAILY HOUR SPLITS (GFM Table) ── */}
            <section id="time-allocation" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                How to Split Your Daily Study Hours
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">

                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Subject</th>
                          <th className="px-5 py-4">Daily Time (Full-time aspirant)</th>
                          <th className="px-5 py-4 text-right">Daily Time (Working professional)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { subject: 'Quantitative Aptitude', full: '2–3 hours', working: '45–60 minutes' },
                          { subject: 'Reasoning Ability', full: '2–3 hours', working: '45–60 minutes' },
                          { subject: 'English Language (incl. daily editorial)', full: '1.5–2 hours', working: '30–45 minutes' },
                          { subject: 'General/Current Awareness', full: '30–45 minutes', working: '20–30 minutes' },
                          { subject: 'Mock/Sectional Test + Analysis', full: '1–1.5 hours', working: '30–45 minutes' },
                          { subject: 'Total Study Commitment', full: '7–9 hours daily', working: '3–4 hours daily' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.subject}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-800 leading-normal">{row.full}</td>
                            <td className="px-5 py-3.5 font-black text-[#1B6EB5] text-right shrink-0">{row.working}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm font-semibold leading-relaxed m-0 italic">
                  A working professional following the compressed column consistently for 4–5 months will typically outperform a full-time aspirant who studies 10 hours a day for 6 weeks — consistency and analysis time matter more than raw hours. Never cut the "Mock + Analysis" row to add more subject time; it's the row that converts study into score.
                </p>
              </div>
            </section>

            {/* ── SECTION 6: PRELIMS PREPARATION TIMELINE ── */}
            <section id="pre-timeline" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Target size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Preparation Timeline
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      weeks: 'Weeks 1–2',
                      focus: (
                        <>
                          Concept clarity in Number Series, Simplification/Approximation, and basic Reasoning (Inequality, Syllogism, Blood Relations). Attempt dedicated{' '}
                          <Link href="/sbi-po/quant-tests" className="font-bold text-[#1B6EB5] hover:underline">
                            SBI PO Quant tests
                          </Link>{' '}
                          to measure speed. Read one editorial daily from day one — don't delay English.
                        </>
                      ),
                      border: 'border-l-blue-500 bg-blue-50/5'
                    },
                    {
                      weeks: 'Weeks 3–4',
                      focus: (
                        <>
                          Move into{' '}
                          <Link href="/sbi-po/quant-tests" className="font-bold text-[#1B6EB5] hover:underline">
                            Data Interpretation
                          </Link>{' '}
                          and Puzzle & Seating Arrangement — these two topics carry the highest combined weightage across Quant and Reasoning, so they deserve disproportionate time here.
                        </>
                      ),
                      border: 'border-l-purple-500 bg-purple-50/5'
                    },
                    {
                      weeks: 'Weeks 5–6',
                      focus: (
                        <>
                          Reading Comprehension, Error Detection, Para Jumbles, and Advanced DI. Begin attempting sectional tests daily rather than weekly.
                        </>
                      ),
                      border: 'border-l-amber-500 bg-amber-50/5'
                    },
                    {
                      weeks: 'Weeks 7–8 (Final stretch)',
                      focus: (
                        <>
                          Full-length mocks only. Target 15–20 full mocks minimum before exam day, with a dedicated error-notebook review after each one.
                        </>
                      ),
                      border: 'border-l-emerald-500 bg-emerald-50/5'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-1.5 transition-all duration-200 hover:border-slate-350 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest font-sans">{item.weeks}</span>
                        <h4 className="font-extrabold text-slate-900 text-sm leading-tight m-0">Phase focus</h4>
                        <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">{item.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Access our dedicated topic test prep portals:
                  </span>
                  <div className="flex gap-2 shrink-0">
                    <Link href="/sbi-po/english-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">English</Link>
                    <Link href="/sbi-po/quant-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Quant</Link>
                    <Link href="/sbi-po/reasoning-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Reasoning</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 7: MAINS PREPARATION TIMELINE ── */}
            <section id="mains-timeline" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Flame size={20} className="text-amber-500" />
                SBI PO Mains Preparation Timeline
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs font-sans space-y-8">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  Mains typically follows Prelims by about 30 days. Candidates who wait for Prelims results before starting Mains prep lose that crucial month. The smarter strategy is a parallel-track approach.
                </p>

                {/* Visual Roadmap Timeline */}
                <div className="relative border-l border-slate-200 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-8">
                  {/* Phase 1 */}
                  <div className="relative">
                    {/* Glowing Node */}
                    <div className="absolute -left-[33px] md:-left-[41px] top-1.5 flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 ring-4 ring-blue-50">
                      <Layers size={14} />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider border border-blue-200">
                        Phase 1: Parallel Prep (Months 1–3)
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Build Core Concepts & General Awareness
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 space-y-1.5 shadow-2xs hover:border-slate-350 transition-colors">
                          <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block">Reasoning & DI</span>
                          <span className="text-xs text-slate-600 font-semibold leading-relaxed">1 weekly advanced session on machine I/O & complex puzzles.</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 space-y-1.5 shadow-2xs hover:border-slate-350 transition-colors">
                          <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest block">General Awareness</span>
                          <span className="text-xs text-slate-600 font-semibold leading-relaxed">Daily current affairs reviews (don't save for the final month).</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 space-y-1.5 shadow-2xs hover:border-slate-350 transition-colors">
                          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest block">Descriptive Test</span>
                          <span className="text-xs text-slate-600 font-semibold leading-relaxed">Write 1 weekly essay and letter to build keyboard typing speed.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative">
                    {/* Glowing Node */}
                    <div className="absolute -left-[33px] md:-left-[41px] top-1.5 flex items-center justify-center bg-purple-500 text-white rounded-full w-8 h-8 ring-4 ring-purple-50">
                      <Zap size={14} />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-wider border border-purple-200">
                        Phase 2: Post-Prelims Peak (Final 4 Weeks)
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        Full-Scale Simulation & Strengthening
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 space-y-1.5 shadow-2xs hover:border-slate-350 transition-colors">
                          <span className="text-[10px] font-extrabold text-purple-600 uppercase tracking-widest block">Mains Focus Run</span>
                          <span className="text-xs text-slate-600 font-semibold leading-relaxed">Allocate 6–7 hours daily to advanced mock practice & descriptive reviews.</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 space-y-1.5 shadow-2xs hover:border-slate-350 transition-colors">
                          <span className="text-[10px] font-extrabold text-slate-700 uppercase tracking-widest block">Sectional Deep-Dive</span>
                          <span className="text-xs text-slate-600 font-semibold leading-relaxed font-sans">Focus heavily on high-yield sections like GA & English to boost total scores.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row gap-3 items-center justify-between font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Access our Mains-level Practice portal directly:
                  </span>
                  <div className="flex gap-2 shrink-0 font-sans">
                    <Link href="/sbi-po/quant-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Quant Mocks</Link>
                    <Link href="/sbi-po/reasoning-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Reasoning Mocks</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 8: MOCK FREQUENCY BY STAGE (GFM Table) ── */}
            <section id="mock-frequency" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Clock size={20} className="text-[#1B6EB5]" />
                How Many Mock Tests Should You Take?
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">

                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Stage</th>
                          <th className="px-5 py-4 text-right">Mock Frequency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { stage: 'Month 1 (Foundation)', freq: '1 sectional test per week' },
                          { stage: 'Month 2 (Strengthening)', freq: '2–3 sectional tests per week' },
                          { stage: 'Month 3 (Final month before Prelims)', freq: '1 full-length mock every 1–2 days' },
                          { stage: 'Final 2 weeks before Prelims', freq: '1 full-length mock daily' },
                          { stage: 'Between Prelims and Mains', freq: '1 Mains-level mock every 1–2 days' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.stage}</td>
                            <td className="px-5 py-3.5 font-black text-[#1B6EB5] text-right shrink-0">{row.freq}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm font-semibold leading-relaxed m-0 italic">
                  The goal across 30–40 total mocks isn't a high score early on — early low scores are normal and expected. The goal is finding weak topics fast enough to fix them before exam day. A mock you don't review is wasted; treat error analysis as mandatory, not optional.
                </p>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex gap-3 items-center justify-between font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Select mock test packages or try free diagnostics:
                  </span>
                  <Link
                    href="/sbi-po/mock-tests"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    View Mock Tests
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 9: THE ERROR ANALYSIS SYSTEM (Pipeline Steps) ── */}
            <section id="error-analysis" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ListTodo size={20} className="text-[#1B6EB5]" />
                The Error-Notebook System — What Actually Improves Your Score
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">

                {/* Vertical timeline steps */}
                <div className="relative space-y-6 border-l-2 border-dashed border-blue-200 ml-4 py-1.5">
                  {[
                    { step: 'Log Mistake Criteria', text: 'After every mock, log three things per wrong answer: the topic, why you got it wrong (concept gap, silly mistake, or ran out of time), and the correct method.' },
                    { step: 'Re-Attempt Lag Cycles', text: 'Re-attempt every logged question after 3–4 days — not immediately, so you\'re testing recall, not memory of the answer you just saw.' },
                    { step: 'Weekly Error reviews', text: 'Review your error notebook weekly, not just after each mock — patterns across multiple tests (e.g., consistently losing marks on Direction & Distance) are easy to miss test-by-test.' },
                    { step: 'Trend accuracy metrics', text: 'Track attempt-vs-accuracy trend, not score alone — a rising accuracy percentage with a stable attempt count is a stronger signal of real improvement than a single high-scoring mock.' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8 space-y-1">
                      <span className="absolute -left-3 top-0.5 w-6 h-6 rounded-full bg-blue-50 border-2 border-[#1B6EB5] flex items-center justify-center font-extrabold text-[#1B6EB5] text-xs shadow-2xs">
                        {idx + 1}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">{item.step}</h4>
                      <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed m-0">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="compressed-plan" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-500" />
                Starting Late? A Compressed 30-Day SBI PO Plan
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">

                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Week</th>
                          <th className="px-5 py-4 text-right">Focus area</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { week: 'Week 1', focus: 'Skip full concept-building — go straight to sectional tests to identify weak topics fast' },
                          { week: 'Week 2', focus: 'Concentrate all study time on the 2–3 weakest topics identified in Week 1, alongside daily sectional practice' },
                          { week: 'Week 3', focus: 'Full-length mocks every 1–2 days, with error-notebook review after each' },
                          { week: 'Week 4', focus: 'Daily full mocks, light revision only, no new topics' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.week}</td>
                            <td className="px-5 py-3.5 font-black text-slate-655 text-right shrink-0">{row.focus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm font-semibold leading-relaxed m-0 italic">
                  A compressed plan trades depth for focus — it works because Data Interpretation, Puzzles, and Reading Comprehension alone can carry the majority of your score, so concentrating there in a short window is more efficient than a shallow pass across the full syllabus.
                </p>
              </div>
            </section>

            {/* ── FAQS SECTION ── */}
            <section id="faqs" className="py-6 scroll-mt-20 border-t border-slate-200 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-display border-b border-slate-100 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  { q: 'What is the best study plan for SBI PO 2026?', a: 'The best SBI PO study plan follows three phases — a Foundation phase for core concepts, a Strengthening phase focused on high-weightage topics like Data Interpretation and Puzzles, and a final Mock phase built entirely around full-length tests and error analysis rather than new topics.' },
                  { q: 'How many months are needed to prepare for SBI PO?', a: 'Most candidates need 3–4 months of consistent preparation for SBI PO Prelims and Mains combined, though a compressed 30-day plan is possible by focusing only on the highest-weightage topics.' },
                  { q: 'How many mock tests should I take before SBI PO Prelims?', a: 'Aspirants should aim for 15 to 20 full-length mock tests before SBI PO Prelims, increasing to one mock daily in the final two weeks before the exam.' },
                  { q: 'Should I start Mains preparation before the Prelims result is out?', a: 'Yes, starting Mains-level practice in parallel with Prelims preparation — even just one session a week — helps avoid losing the roughly one-month gap between Prelims and Mains to a standing start.' },
                  { q: 'How many hours should I study daily for SBI PO?', a: 'Full-time aspirants typically study 7 to 9 hours daily for SBI PO, while working professionals can prepare effectively with 3 to 4 focused hours daily if followed consistently.' },
                  { q: 'What is the most important habit for cracking SBI PO in the first attempt?', a: 'Reviewing every mock test\'s wrong answers through a structured error-notebook system is considered the most important habit for cracking SBI PO in the first attempt, since it converts practice into a measurable score improvement.' },
                  { q: 'Should I start descriptive paper practice early in SBI PO preparation?', a: 'Yes, starting descriptive paper practice — one essay and one letter or report per week — from the beginning of preparation is recommended, since candidates who delay it often lose easy marks in Mains.' },
                  { q: 'When should current affairs preparation start for SBI PO?', a: 'Current affairs preparation should start from day one of SBI PO preparation rather than being left for the final month, since General Awareness carries a significant share of Mains marks.' },
                  { q: 'Is accuracy or attempt count more important in SBI PO mocks?', a: 'Accuracy is generally considered more important than attempt count in SBI PO mocks, since a high number of rushed attempts with silly mistakes typically scores lower than a smaller number of carefully solved, accurate attempts.' },
                  { q: 'What should the last 15 days before SBI PO Prelims focus on?', a: 'The last 15 days before SBI PO Prelims should focus on daily full-length mocks and revision of already-identified weak areas, with no new topics introduced this close to the exam.' }
                ].map((faq, idx) => {
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
            <QuickNavigation exam={exam} activeSlug="study-plan" />

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
