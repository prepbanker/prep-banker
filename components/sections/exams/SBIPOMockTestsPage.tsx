// PATH: components/sections/exams/SBIPOMockTestsPage.tsx
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
  FileQuestion
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOMockTestsPage() {
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
            <span className="text-white/80">Mock Tests</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                August–September 2026 Cycle
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Mock Test 2026 — Prelims & Mains Online Test Series
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Practice on the same interface you'll see on exam day. Full-length mocks, All India Rank, and a topic-wise breakdown of every mistake.
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Refreshed after each real shift using memory-based inputs and tailored strictly to the official SBI PO Notification 2026 vacancies. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline"
                  >
                    Attempt Free Full Mock Test →
                  </a>
                  <a
                    href="#whats-included"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    View Full Test Series →
                  </a>
                </div>
                <div className="text-xs text-white/60 font-semibold italic">
                  No card needed for the free mock. Full solutions unlock instantly after submission.
                </div>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Mocks Included</div>
                <div className="text-base sm:text-lg font-black text-white">35+ Mocks</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Aspirants Practicing</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">50,000+</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Coverage Scope</div>
                <div className="text-base sm:text-lg font-black text-white leading-tight">Pre + Mains</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Target Vacancies</div>
                <div className="text-base sm:text-lg font-black text-white">1,500 Posts</div>
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

            {/* Table of Contents */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs font-sans">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {[
                    { id: 'why-test-series', text: 'Why Choose PrepBanker' },
                    { id: 'free-mock', text: 'Start Free Mock Tests' },
                    { id: 'whats-included', text: 'What’s Inside the Series' },
                    { id: 'pre-vs-mains', text: 'Prelims vs Mains Mock Differences' },
                    { id: 'performance-analytics', text: 'After-Mock Performance Reports' },
                    { id: 'how-to-use', text: 'Improve Your Scores tactically' },
                    { id: 'live-schedule', text: '2026 Shift Mock Calendars' },
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

            {/* ── SECTION 3: WHY THIS TEST SERIES (Differentiation Grid) ── */}
            <section id="why-test-series" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                Why Aspirants Choose PrepBanker's SBI PO Mock Tests
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Exact Exam-Day Interface', desc: 'Same layout, palette, calculator/rough-sheet behavior, and section-lock rules as the real SBI PO CBT, so nothing feels unfamiliar on exam day.', icon: <Monitor size={16} className="text-blue-600" />, border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'All India Rank, Not Just a Score', desc: 'Every attempt is benchmarked against every other PrepBanker aspirant who took that test, so you know where you actually stand — not just what you scored.', icon: <Trophy size={16} className="text-amber-600" />, border: 'border-l-amber-500 bg-amber-50/5' },
                    { title: 'Question-Level Diagnosis', desc: 'Post-test report shows which topic cost you marks (not just which section), so revision time goes to the right chapter instead of the whole subject.', icon: <Activity size={16} className="text-[#1B6EB5]" />, border: 'border-l-[#1B6EB5] bg-blue-50/5' },
                    { title: 'Built for the 2026 Pattern', desc: 'Test set reflects SBI\'s current-cycle difficulty and question distribution, refreshed after each real SBI PO shift using memory-based inputs.', icon: <Sparkles size={16} className="text-emerald-600" />, border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-2 hover:border-slate-350 transition-all duration-200 " + item.border}>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">{item.title}</div>
                        </div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex gap-3 items-center justify-between font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want to see how marks are calculated at each stage?
                  </span>
                  <Link
                    href="/sbi-po/exam-pattern"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    Check Exam Pattern
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 4: FREE MOCK TEST BLOCK (Grid) ── */}
            <section id="free-mock" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <CheckSquare size={20} className="text-[#1B6EB5]" />
                Start Free — SBI PO Mock Test 2026 (No Sign-up Cost)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  Before committing to a full plan, take one full-length Prelims mock and one sectional test, free. See your score, your All India Rank, and a sample of the analysis every paid test includes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'SBI PO Prelims Free Full Mock', desc: '100 Qs · 100 Marks · 60 Mins', cta: 'Attempt Free Mock', badge: 'Full-Length', border: 'border-l-blue-500 bg-blue-50/10' },
                    { title: 'SBI PO Free Sectional Test', desc: 'Quantitative Aptitude Practice Section', cta: 'Attempt Sectional', badge: 'Sectional', border: 'border-l-purple-500 bg-purple-50/10' },
                    { title: 'SBI PO Prelims Memory-Based Paper', desc: 'Reconstructed from the latest real shifts', cta: 'Attempt Paper', badge: 'Memory-Based', border: 'border-l-amber-500 bg-amber-50/10' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-3 hover:border-slate-300 transition-all " + item.border}>
                      <div className="space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200 text-[9px] font-black uppercase tracking-wider text-slate-500">
                          {item.badge}
                        </span>
                        <div className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight pt-1">{item.title}</div>
                        <span className="block text-[11px] text-slate-500 font-semibold">{item.desc}</span>
                      </div>
                      <a
                        href="https://app.prepgrind.com/signup/sbi-po"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans cursor-pointer"
                      >
                        {item.cta}
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Section links */}
                <div className="border-t border-slate-150 pt-5 space-y-3">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Free Practice Sectionals</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { subject: 'Quantitative Aptitude Test', href: '/sbi-po/quant-tests' },
                      { subject: 'Reasoning Ability Test', href: '/sbi-po/reasoning-tests' },
                      { subject: 'English Language Test', href: '/sbi-po/english-tests' }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-xs sm:text-sm text-slate-850 no-underline"
                      >
                        <span>{item.subject}</span>
                        <ChevronRight size={14} className="text-[#1B6EB5]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 5: WHAT'S INCLUDED (Structured Grid Data) ── */}
            <section id="whats-included" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Layers size={20} className="text-[#1B6EB5]" />
                What's Inside the SBI PO Mock Test Series 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                
                {/* Structured Table */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Test Category</th>
                          <th className="px-5 py-4">Coverage scope</th>
                          <th className="px-5 py-4 text-right">Included tests</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { type: 'Prelims Full-Length Mocks', coverage: 'English + Quant + Reasoning, exact 100Q/60min pattern', count: '20 Tests' },
                          { type: 'Mains Full-Length Mocks', coverage: 'Reasoning & Computer Aptitude, DI, GA/Banking, English', count: '10 Tests' },
                          { type: 'Prelims Sectional Tests', coverage: 'Section-wise, timed', count: '30 Tests' },
                          { type: 'Mains Sectional Tests', coverage: 'Section-wise, timed', count: '15 Tests' },
                          { type: 'Descriptive Test (Mains)', coverage: 'Email, Situation Analysis, Report/Précis Writing', count: '5 Tests' },
                          { type: 'Psychometric Mock Test', coverage: 'Phase III personality-profiling practice', count: '3 Tests' },
                          { type: 'Previous Year & Memory-Based Papers', coverage: 'Reconstructed from actual recent shifts', count: '8 Papers' },
                          { type: 'Daily Practice Papers (DPP)', coverage: 'Short, topic-focused daily sets', count: 'Daily' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.type}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-500 leading-normal">{row.coverage}</td>
                            <td className="px-5 py-3.5 font-black text-[#1B6EB5] text-right shrink-0">{row.count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed m-0 italic">
                  Every test above lives inside one dashboard — attempt, review, and re-attempt without hopping between separate product pages.
                </p>

                {/* Sub-links */}
                <div className="bg-blue-50/40 border border-blue-150 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want topic-first practice? Try English, Quant, or Reasoning sectional tests:
                  </span>
                  <div className="flex gap-2 shrink-0">
                    <Link href="/sbi-po/quant-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Quant Tests</Link>
                    <Link href="/sbi-po/reasoning-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Reasoning Tests</Link>
                    <Link href="/sbi-po/english-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">English Tests</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 6: PRELIMS VS MAINS STRUCTURE (Split layout) ── */}
            <section id="pre-vs-mains" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Scale size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Mock Test vs Mains Mock Test — What's Different
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Prelims Mocks */}
                  <div className="border border-blue-150 border-l-4 border-l-blue-500 bg-blue-50/15 py-5 pr-5 pl-6 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Phase I Exam</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight m-0">Prelims Mocks Structure</div>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">
                      100 questions, 100 marks, 60 minutes, sectional timing (20 min per section), qualifying stage only, no sectional cut-off, 0.25 negative marking.
                    </p>
                    <Link href="/sbi-po/exam-pattern" className="inline-flex items-center gap-0.5 text-xs text-[#1B6EB5] font-black pt-1 hover:underline no-underline">
                      Full Pattern Breakdown <ChevronRight size={14} />
                    </Link>
                  </div>

                  {/* Mains Mocks */}
                  <div className="border border-emerald-200 border-l-4 border-l-emerald-500 bg-emerald-50/15 py-5 pr-5 pl-6 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Phase II Exam</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight m-0">Mains Mocks Structure</div>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">
                      170 objective questions (200 marks) across 4 sections with a 3-hour composite duration, plus a 30-minute, 30-mark Descriptive Test attempted immediately after. Mains marks carry into your final merit list — Prelims marks don't.
                    </p>
                    <Link href="/sbi-po/exam-pattern" className="inline-flex items-center gap-0.5 text-xs text-emerald-600 font-black pt-1 hover:underline no-underline">
                      Full Pattern Breakdown <ChevronRight size={14} />
                    </Link>
                  </div>

                </div>
              </div>
            </section>

            {/* ── SECTION 7: PERFORMANCE ANALYTICS (Checklists) ── */}
            <section id="performance-analytics" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BarChart4 size={20} className="text-[#1B6EB5]" />
                What You Get After Every Mock Test
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Instant Score & All India Rank', desc: 'See your result and percentile the moment you submit.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'Section-wise & Topic-wise Accuracy', desc: 'Pinpoint exactly which topic within Quant or Reasoning is dragging your score.', border: 'border-l-indigo-500 bg-indigo-50/5' },
                    { title: 'Time-per-Question Breakdown', desc: 'Identify where you\'re losing time, not just where you\'re losing marks.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { title: 'Solution with Approach, Not Just Answer', desc: 'See the fastest method for each question, not just the correct option.', border: 'border-l-amber-500 bg-amber-50/5' },
                    { title: 'Attempt-vs-Accuracy Trend', desc: 'Track whether your accuracy is actually improving test-over-test, or just your attempt count.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-1.5 transition-all duration-200 hover:border-slate-350 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Report {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.title}</div>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed m-0 pt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 8: HOW TO USE THESE MOCKS (Pipeline Steps) ── */}
            <section id="how-to-use" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ListTodo size={20} className="text-[#1B6EB5]" />
                How to Use SBI PO Mock Tests to Actually Improve Your Score
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                
                {/* Vertical timeline scale steps */}
                <div className="relative space-y-6 border-l-2 border-dashed border-blue-200 ml-4 py-1.5">
                  {[
                    { step: 'Establish Your Baseline', text: 'Take one full-length mock under strict time conditions before you review any theory — establish your real baseline first.' },
                    { step: 'Review Errors & Guesses', text: 'Review every wrong and every guessed-right answer — a lucky guess hides a weak topic.' },
                    { step: 'Close the Knowledge Gaps', text: 'Re-attempt the same mock\'s weak sections 3–4 days later to confirm the gap is closed, not just noted.' },
                    { step: 'Escalate Testing Frequency', text: 'Increase mock frequency to 3–4 full-lengths a week in the final two weeks before Prelims.' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8 space-y-1">
                      {/* Timeline dot */}
                      <span className="absolute -left-3 top-0.5 w-6 h-6 rounded-full bg-blue-50 border-2 border-[#1B6EB5] flex items-center justify-center font-extrabold text-[#1B6EB5] text-xs shadow-2xs">
                        {idx + 1}
                      </span>
                      <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">{item.step}</div>
                      <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed m-0">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-2xl flex gap-3 items-center justify-between font-sans mt-6">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want the full, week-by-week preparation roadmap?
                  </span>
                  <Link
                    href="/sbi-po/study-plan"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    SBI PO Study Plan
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 9: 2026 CYCLE UPDATE STRIP (Freshness Block) ── */}
            <section id="live-schedule" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Flame size={20} className="text-amber-500" />
                SBI PO 2026 Mock Test Schedule — Aligned to the Real Exam Calendar
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="divide-y divide-slate-100 border border-slate-150 rounded-2xl overflow-hidden bg-slate-50/20">
                  {[
                    { label: 'Notification Released', date: '18 June 2026 (1,500 vacancies)' },
                    { label: 'Application Window', date: '18 June – 8 July 2026' },
                    { label: 'PET Call Letters', date: '17 July 2026' },
                    { label: 'Prelims Exam Date', date: '1–2 August 2026' },
                    { label: 'Mains Exam Date', date: 'September 2026 (tentative)' },
                    { label: 'Phase III GE & Interview', date: 'October–November 2026 (tentative)' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3.5 px-5 gap-1 hover:bg-slate-50 transition-all">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                      <span className="text-sm font-extrabold text-slate-900">{item.date}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Last Verified:</strong> 26 July 2026. Dates are per the official SBI notification and are subject to change — always cross-check your admit card.
                  </p>
                </div>

                {/* Sub-links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Official Notification Info', href: '/sbi-po/notification' },
                    { label: 'Admit Card Download', href: '/sbi-po/admit-card' },
                    { label: 'Full Dates Calendar', href: '/sbi-po/important-dates' }
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-xs sm:text-sm text-slate-800 no-underline"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={14} className="text-[#1B6EB5]" />
                    </Link>
                  ))}
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
                  { q: 'How many mock tests are there in the SBI PO Mock Test Series 2026?', a: 'The PrepBanker SBI PO 2026 series includes 20 full-length Prelims mocks, 10 full-length Mains mocks, and 30 sectional tests, covering Prelims, Mains, the Descriptive paper, and the Psychometric Test.' },
                  { q: 'Is the SBI PO Mock Test 2026 available for free?', a: 'Yes, PrepBanker offers one free full-length Prelims mock test and free sectional tests for SBI PO 2026, with no payment required to attempt them.' },
                  { q: 'What is the exam pattern followed in the SBI PO Prelims mock tests?', a: 'SBI PO Prelims mock tests follow the official 100-question, 100-mark, 60-minute pattern across English Language, Quantitative Aptitude, and Reasoning Ability, with sectional timing of 20 minutes per section.' },
                  { q: 'Does the SBI PO Prelims exam have a sectional cut-off?', a: 'No, SBI PO Prelims has no sectional cut-off — only an overall cut-off applies, based on category-wise merit.' },
                  { q: 'How much negative marking is there in SBI PO mock tests?', a: 'Each mock test deducts 0.25 marks for every incorrect answer, matching the SBI PO exam\'s actual negative marking scheme; unattempted questions carry no penalty.' },
                  { q: 'Do Prelims marks count toward the final SBI PO merit list?', a: 'No, SBI PO Prelims marks are used only to shortlist candidates for Mains — only Mains and Phase III (Group Exercise + Interview) marks count toward the final merit list.' },
                  { q: 'When is the SBI PO Prelims Exam 2026?', a: 'The SBI PO Prelims Exam 2026 is scheduled for 1–2 August 2026, as per the official SBI PO Notification 2026.' },
                  { q: 'When is the SBI PO Mains Exam 2026?', a: 'The SBI PO Mains Exam 2026 is tentatively scheduled for September 2026, following the Prelims held on 1–2 August 2026.' },
                  { q: 'Can I re-attempt an SBI PO mock test after completing it?', a: 'Yes, every mock test on PrepBanker can be re-attempted to help track score and accuracy improvement over time.' },
                  { q: 'What does the SBI PO mock test result show apart from the score?', a: 'Each result includes your All India Rank, section-wise and topic-wise accuracy, time spent per question, and step-by-step solutions for every question.' },
                  { q: 'Are SBI PO mock tests available for the Mains Descriptive paper?', a: 'Yes, dedicated mock tests are available for the Mains Descriptive paper, covering Email Writing, Situation Analysis, and Report/Précis Writing.' },
                  { q: 'Is there a mock test for the SBI PO Psychometric Test?', a: 'Yes, PrepBanker includes Psychometric mock tests to familiarize candidates with the personality-profiling format used in SBI PO Phase III.' }
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
            <QuickNavigation exam={exam} activeSlug="mock-tests" />

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
