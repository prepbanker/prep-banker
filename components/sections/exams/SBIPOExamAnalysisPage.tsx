// PATH: components/sections/exams/SBIPOExamAnalysisPage.tsx
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

export default function SBIPOExamAnalysisPage() {
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
            <span className="text-white/80">Exam Analysis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wide uppercase">
                Prelims Exam Analysis
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Prelims Exam Analysis 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Shift-wise topics, good attempts, and difficulty level — updated within hours of each shift — plus a 7-year trend table showing exactly which topics have dominated SBI PO Prelims since 2019.
                </p>

                {/* Live Status Strip */}
                <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex gap-2.5 items-start mt-4">
                  <Flame size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/90 leading-relaxed font-semibold m-0">
                    <strong>Live updates:</strong> SBI PO Prelims 2026 is scheduled for 1–2 August 2026. Expected analysis based on 2019–2025 trends is below. Shift-wise analysis will be added live as each shift concludes.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#shift-wise-analysis"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline font-sans"
                  >
                    Jump to Shift-Wise Analysis ↓
                  </a>
                  <Link
                    href="/sbi-po/mock-tests"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline font-sans"
                  >
                    Practice These Topics Now →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Expected Attempts</div>
                <div className="text-base sm:text-lg font-black text-white">56-77 Mins</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Expected Difficulty</div>
                <div className="text-base sm:text-lg font-black text-white leading-tight">Easy-to-Moderate</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Target Vacancies</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">1,500 Posts</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Live updates</div>
                <div className="text-base sm:text-lg font-black text-white">Shift-by-Shift</div>
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
                SBI PO Prelims 2026 — Quick Answer
              </h2>
              <p className="text-[#0D1B3E] text-sm sm:text-base leading-relaxed font-semibold m-0">
                Based on SBI PO Prelims trends from 2019–2025, the exam is typically rated Easy-to-Moderate overall, with Reasoning Ability as the most scoring section — largely because Puzzle & Seating Arrangement alone has accounted for 20–25 of the section's questions in recent years. For targeted practice, <Link href="/sbi-po/quant-tests" className="font-bold text-[#1B6EB5] hover:underline">Quantitative Aptitude</Link> leans heavily on Arithmetic and Data Interpretation, while English Language is increasingly comprehension-driven, dominated by Reading Comprehension, Cloze Test, and Para Jumbles. Good attempts across the full 100-question paper have typically landed between 56 and 77, depending on the shift and difficulty level.
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
                    { id: 'trend-analysis', text: '7-Year Topic Trend (2019-2025)' },
                    { id: 'expected-attempts', text: 'Expected attempts & Difficulty 2026' },
                    { id: 'shift-wise-analysis', text: 'Shift-Wise Exam Analysis' },
                    { id: 'how-to-use', text: 'Strategy Tips for Later Shifts' },
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

            {/* ── SECTION 4: 7-YEAR TOPIC-WISE TRENDS (GFM Tables) ── */}
            <section id="trend-analysis" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BookOpenCheck size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Topic-Wise Trend — 2019 to 2025
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-8">

                {/* 1. Reasoning Ability */}
                <div className="space-y-3">
                  <span className="block text-sm font-black text-slate-800 uppercase tracking-wider font-sans border-l-4 border-l-blue-500 pl-2">
                    Reasoning Ability — Question Count by Topic
                  </span>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white font-sans uppercase tracking-wider font-black border-b border-slate-200">
                            <th className="px-5 py-4">Topic</th>
                            <th className="px-3 py-4">2025</th>
                            <th className="px-3 py-4">2024</th>
                            <th className="px-3 py-4">2023</th>
                            <th className="px-3 py-4">2022</th>
                            <th className="px-3 py-4">2021</th>
                            <th className="px-3 py-4">2020</th>
                            <th className="px-3 py-4 text-right">2019</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-150 font-sans">
                          {[
                            { topic: 'Puzzles & Seating Arrangement', y25: '25', y24: '20–22', y23: '20', y22: '20', y21: '20', y20: '20', y19: '20' },
                            { topic: 'Syllogism', y25: '3', y24: '3–5', y23: '3', y22: '0', y21: '4', y20: '3', y19: '5' },
                            { topic: 'Inequality', y25: '0–3', y24: '3–5', y23: '3', y22: '4', y21: '3', y20: '5', y19: '3' },
                            { topic: 'Blood Relation', y25: '0–3', y24: '4–5', y23: '2', y22: '3', y21: '5', y20: '5', y19: '3' },
                            { topic: 'Coding-Decoding', y25: '0–2', y24: '–', y23: '4', y22: '5', y21: '3', y20: '2', y19: '2' },
                            { topic: 'Pair Formation / Word-Based', y25: '2', y24: '1', y23: '2', y22: '2', y21: '–', y20: '–', y19: '–' },
                            { topic: 'Direction Sense', y25: '3', y24: '–', y23: '1', y22: '–', y21: '–', y20: '–', y19: '–' },
                            { topic: 'Total Questions', y25: '30', y24: '30', y23: '35', y22: '35', y21: '35', y20: '35', y19: '35', bold: true }
                          ].map((row, idx) => (
                            <tr key={idx} className={row.bold ? "bg-slate-50 font-black text-slate-900" : "hover:bg-slate-50 transition-colors"}>
                              <td className="px-5 py-3 font-extrabold text-slate-800">{row.topic}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y25}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y24}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y23}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y22}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y21}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y20}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold text-right">{row.y19}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 2. Quantitative Aptitude */}
                <div className="space-y-3">
                  <span className="block text-sm font-black text-slate-800 uppercase tracking-wider font-sans border-l-4 border-l-purple-550 pl-2 border-l-purple-500">
                    Quantitative Aptitude — Question Count by Topic
                  </span>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white font-sans uppercase tracking-wider font-black border-b border-slate-200">
                            <th className="px-5 py-4">Topic</th>
                            <th className="px-3 py-4">2025</th>
                            <th className="px-3 py-4">2024</th>
                            <th className="px-3 py-4">2023</th>
                            <th className="px-3 py-4">2022</th>
                            <th className="px-3 py-4">2021</th>
                            <th className="px-3 py-4">2020</th>
                            <th className="px-3 py-4 text-right">2019</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-150 font-sans">
                          {[
                            { topic: 'Arithmetic', y25: '12', y24: '12', y23: '14', y22: '12', y21: '10', y20: '10', y19: '10' },
                            { topic: 'Data Interpretation', y25: '10', y24: '10', y23: '10', y22: '10', y21: '10', y20: '10', y19: '5' },
                            { topic: 'Caselet DI', y25: '5', y24: '5', y23: '–', y22: '3', y21: '–', y20: '–', y19: '–' },
                            { topic: 'Quadratic Equation', y25: '3', y24: '–', y23: '–', y22: '5', y21: '–', y20: '–', y19: '–' },
                            { topic: 'Approximation / Simplification', y25: '2–3', y24: '8–10', y23: '5', y22: '5', y21: '10', y20: '10', y19: '10' },
                            { topic: 'Number Series', y25: '3–4', y24: '3', y23: '6', y22: '–', y21: '5', y20: '5', y19: '5' },
                            { topic: 'Total Questions', y25: '30', y24: '30', y23: '35', y22: '35', y21: '35', y20: '35', y19: '30', bold: true }
                          ].map((row, idx) => (
                            <tr key={idx} className={row.bold ? "bg-slate-50 font-black text-slate-900" : "hover:bg-slate-50 transition-colors"}>
                              <td className="px-5 py-3 font-extrabold text-slate-800">{row.topic}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y25}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y24}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y23}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y22}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y21}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y20}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold text-right">{row.y19}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 3. English Language */}
                <div className="space-y-3">
                  <span className="block text-sm font-black text-slate-800 uppercase tracking-wider font-sans border-l-4 border-l-emerald-500 pl-2">
                    English Language — Question Count by Topic
                  </span>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white font-sans uppercase tracking-wider font-black border-b border-slate-200">
                            <th className="px-5 py-4">Topic</th>
                            <th className="px-3 py-4">2025</th>
                            <th className="px-3 py-4">2024</th>
                            <th className="px-3 py-4">2023</th>
                            <th className="px-3 py-4">2022</th>
                            <th className="px-3 py-4">2021</th>
                            <th className="px-3 py-4">2020</th>
                            <th className="px-3 py-4 text-right">2019</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-150 font-sans">
                          {[
                            { topic: 'Reading Comprehension', y25: '8–10', y24: '8–10', y23: '9', y22: '9', y21: '7–8', y20: '7–10', y19: '7–10' },
                            { topic: 'Cloze Test', y25: '6', y24: '5–7', y23: '5', y22: '6', y21: '5', y20: '5', y19: '5' },
                            { topic: 'Error Detection', y25: '5', y24: '5', y23: '4', y22: '5', y21: '5', y20: '5', y19: '5' },
                            { topic: 'Sentence Rearrangement / Para Jumble', y25: '8', y24: '5', y23: '4', y22: '–', y21: '5', y20: '5', y19: '5' },
                            { topic: 'Phrase Replacement', y25: '4', y24: '4', y23: '4', y22: '4', y21: '–', y20: '–', y19: '–' },
                            { topic: 'Word Swap', y25: '2–4', y24: '4', y23: '–', y22: '4', y21: '5', y20: '5', y19: '5' },
                            { topic: 'Double Fillers', y25: '4', y24: '3', y23: '3', y22: '–', y21: '–', y20: '–', y19: '–' },
                            { topic: 'Total Questions', y25: '40', y24: '40', y23: '30', y22: '30', y21: '30', y20: '30', y19: '30', bold: true }
                          ].map((row, idx) => (
                            <tr key={idx} className={row.bold ? "bg-slate-50 font-black text-slate-900" : "hover:bg-slate-50 transition-colors"}>
                              <td className="px-5 py-3 font-extrabold text-slate-800">{row.topic}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y25}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y24}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y23}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y22}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y21}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold">{row.y20}</td>
                              <td className="px-3 py-3 text-slate-500 font-semibold text-right">{row.y19}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Note:</strong> Reasoning and Quant moved from 35 to 30 questions each in 2025, while English moved from 30 to 40 — a real pattern change, not an error. Track this against your official pattern guidelines.
                  </p>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Access sectional diagnostics based on these high-weightage topics:
                  </span>
                  <div className="flex gap-2 shrink-0">
                    <Link href="/sbi-po/reasoning-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline font-sans">Reasoning</Link>
                    <Link href="/sbi-po/quant-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline font-sans">Quant</Link>
                    <Link href="/sbi-po/english-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline font-sans">English</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 5: EXPECTED GOOD ATTEMPTS 2026 (GFM Table) ── */}
            <section id="expected-attempts" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims 2026 — Expected Good Attempts
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  Based on 2019–2025 trends, here's what to expect before official shift data is available. Replace with real Shift 1 numbers the moment they're available — pre-exam predictions lose all value within hours of the first shift.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      section: 'English Language',
                      attempts: '23–27',
                      diff: 'Easy–Moderate',
                      bg: 'bg-emerald-50/50',
                      border: 'border-emerald-100',
                      icon: <BookOpen className="text-emerald-600" size={24} />,
                      color: 'text-emerald-700',
                      diffStyle: 'bg-emerald-100/60 text-emerald-800 border-emerald-200'
                    },
                    {
                      section: 'Reasoning Ability',
                      attempts: '26–32',
                      diff: 'Moderate',
                      bg: 'bg-blue-50/50',
                      border: 'border-blue-100',
                      icon: <Target className="text-blue-600" size={24} />,
                      color: 'text-blue-700',
                      diffStyle: 'bg-amber-100/60 text-amber-800 border-amber-200 font-bold'
                    },
                    {
                      section: 'Quantitative Aptitude',
                      attempts: '22–28',
                      diff: 'Moderate',
                      bg: 'bg-purple-50/50',
                      border: 'border-purple-100',
                      icon: <Percent className="text-purple-600" size={24} />,
                      color: 'text-purple-700',
                      diffStyle: 'bg-amber-100/60 text-amber-800 border-amber-200 font-bold'
                    },
                    {
                      section: 'Overall Exam Attempts',
                      attempts: '58–70',
                      diff: 'Easy–Moderate',
                      bg: 'bg-slate-900',
                      border: 'border-slate-800',
                      icon: <Trophy className="text-amber-400" size={24} />,
                      color: 'text-white',
                      diffStyle: 'bg-slate-800 text-slate-200 border-slate-700 font-bold',
                      isDark: true
                    }
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className={`border rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-3xs transition-all hover:scale-[1.02] ${row.bg} ${row.border}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className={`text-[10px] uppercase tracking-wider font-extrabold ${row.isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {row.section}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className={`text-2xl font-black ${row.color}`}>
                              {row.attempts}
                            </span>
                            <span className={`text-xs font-bold ${row.isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              Qs
                            </span>
                          </div>
                        </div>
                        <div className={`p-2 rounded-xl ${row.isDark ? 'bg-slate-800 animate-pulse' : 'bg-white shadow-2xs border border-slate-100'}`}>
                          {row.icon}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-200/40 pt-3 flex-wrap gap-2">
                        <span className={`text-[10px] font-bold ${row.isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Difficulty:
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border font-sans ${row.diffStyle}`}>
                          {row.diff}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 6: SHIFT-WISE EXAM ANALYSIS (LIVE) ── */}
            <section id="shift-wise-analysis" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Flame size={20} className="text-amber-500" />
                SBI PO Prelims Exam Analysis — Shift-Wise (1–2 August 2026)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">

                {/* Dynamic Shift 1 Box */}
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/20 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                    <span className="font-extrabold text-slate-900 text-base">SBI PO Prelims Exam Analysis — 1 August 2026, Shift 1</span>
                    <span className="inline-flex px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[9px] font-black uppercase tracking-wider text-[#1B6EB5]">
                      Expected Pre-Exam
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-slate-150 rounded-xl space-y-0.5">
                      <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Difficulty Range</span>
                      <span className="text-sm font-extrabold text-slate-850">Easy-to-Moderate (Historical Avg)</span>
                    </div>
                    <div className="p-4 bg-white border border-slate-150 rounded-xl space-y-0.5">
                      <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Good Attempts Range</span>
                      <span className="text-sm font-extrabold text-[#1B6EB5]">58–70 / 100 questions</span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-2">
                    Shift-specific details such as Reading Comprehension passage themes, Data Interpretation caselet parameters, and reasoning puzzle configurations (e.g. Circular vs Floor-based) will be populated live as candidates exit the test center.
                  </p>
                </div>

                {/* Dynamic Shift 2 Box */}
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/20 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                    <span className="font-extrabold text-slate-900 text-base">SBI PO Prelims Exam Analysis — 1 August 2026, Shift 2</span>
                    <span className="inline-flex px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[9px] font-black uppercase tracking-wider text-[#1B6EB5]">
                      Expected Pre-Exam
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0">
                    Comparative analysis highlighting topic-level shifts and differences between Shift 1 and Shift 2 will be added immediately following the conclusion of Shift 2.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION 7: HOW TO USE THIS ANALYSIS ── */}
            <section id="how-to-use" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Target size={20} className="text-[#1B6EB5]" />
                How to Use SBI PO Exam Analysis If You Have a Later Shift
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Normalisation Factors', desc: 'Don\'t assume your shift will match exactly — SBI normalizes scores across shifts specifically because difficulty varies, so a harder shift isn\'t a disadvantage in the final merit.' },
                    { title: 'Topic Patterns, Not Questions', desc: 'Use topic patterns, not exact questions — if Shift 1 had a floor-based puzzle and a Table DI, expect a similar puzzle type, not the same one, in your shift.' },
                    { title: 'Recalibrate Good Attempts', desc: 'Recalibrate your good-attempt target to the difficulty level reported for shifts closest to your own timing, not the easiest shift of the day.' },
                    { title: 'Later Shift preparation', desc: 'If your shift is later in the window, spend the time before your exam reviewing puzzle types and DI formats reported from earlier shifts rather than starting new topics.' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-150 border-l-4 border-l-blue-500 bg-blue-50/5 py-4 pr-4 pl-6 rounded-2xl flex flex-col justify-between space-y-1 hover:border-slate-350 transition-all duration-200 font-sans">
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Guideline {idx + 1}</span>
                        <h4 className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.title}</h4>
                        <p className="text-slate-505 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1 text-slate-500">{item.desc}</p>
                      </div>
                    </div>
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
                  { q: 'What is a good attempt in SBI PO Prelims?', a: 'Based on 2019–2025 trends, a good attempt in SBI PO Prelims typically falls between 56 and 77 questions out of 100, depending on the shift\'s difficulty level.' },
                  { q: 'Which section is the most scoring in SBI PO Prelims?', a: 'Reasoning Ability is generally the most scoring section in SBI PO Prelims, largely because Puzzle & Seating Arrangement alone has accounted for 20 to 25 of the section\'s questions in recent years.' },
                  { q: 'Is SBI PO Prelims difficulty the same across all shifts?', a: 'No, SBI PO Prelims difficulty varies across shifts, which is why SBI applies score normalization to ensure candidates across different shifts are compared fairly in the final merit list.' },
                  { q: 'What topics dominate SBI PO Prelims Quantitative Aptitude?', a: 'Arithmetic and Data Interpretation have consistently dominated SBI PO Prelims Quantitative Aptitude since 2019, together accounting for roughly two-thirds of the section\'s questions in most recent years.' },
                  { q: 'What topics dominate SBI PO Prelims English Language?', a: 'Reading Comprehension, Cloze Test, and Para Jumbles have consistently dominated SBI PO Prelims English Language, with Reading Comprehension alone typically contributing 8 to 10 questions.' },
                  { q: 'How many questions were asked in SBI PO Prelims 2025?', a: 'In SBI PO Prelims 2025, English Language carried 40 questions while Reasoning Ability and Quantitative Aptitude carried 30 questions each, a shift from the 35-35-30 split used in several earlier years.' },
                  { q: 'Is SBI PO Prelims difficulty generally easy, moderate, or difficult?', a: 'SBI PO Prelims has generally been rated Easy-to-Moderate overall based on 2019–2025 trends, though individual sections and shifts can vary between Easy-Moderate and Moderate.' },
                  { q: 'What type of puzzles are most common in SBI PO Prelims Reasoning?', a: 'Circular seating, linear seating, floor-based, box-based, and designation-based puzzles are the most common puzzle types in SBI PO Prelims Reasoning, often appearing as multiple 5-question sets within a single shift.' },
                  { q: 'Does SBI PO Prelims have a sectional cut-off?', a: 'No, SBI PO Prelims has no sectional cut-off — only an overall cut-off applies, based on category-wise merit across all three sections combined.' },
                  { q: 'When will the SBI PO Prelims 2026 shift-wise analysis be available?', a: 'SBI PO Prelims 2026 shift-wise analysis becomes available within a few hours after each shift concludes on 1–2 August 2026, based on candidate feedback from that shift.' }
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
            <QuickNavigation exam={exam} activeSlug="prelims-exam-analysis" />

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
