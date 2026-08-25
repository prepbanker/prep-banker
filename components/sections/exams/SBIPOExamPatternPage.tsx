// PATH: components/sections/exams/SBIPOExamPatternPage.tsx
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
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOExamPatternPage() {
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
            <span className="text-white/80">Exam Pattern</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                Revised for 2026
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Exam Pattern 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Prelims (100 Marks), Mains (230 Marks) & Phase III (50 Marks)
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Descriptive Test marks reduced from 50 to 30 this year — full section-wise breakdown, duration, and marking scheme below. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
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
                    Attempt Free SBI PO Mock Test
                  </a>
                  <Link
                    href="/sbi-po/syllabus"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    Check SBI PO Syllabus
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>Want cutoff context?</span>
                  <Link href="/sbi-po/cut-off" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check SBI PO Cut Off Trend <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Officially Revised Pattern
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Section-Wise Breakdown
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-emerald-400" />
                  Updated for 2026
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Prelims Marks</div>
                <div className="text-base sm:text-lg font-black text-white">100</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Mains Marks</div>
                <div className="text-base sm:text-lg font-black text-white">230</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Phase III Marks</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">50</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Wrong Answer Penalty</div>
                <div className="text-base sm:text-lg font-black text-rose-400">0.25</div>
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

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold">
                The SBI PO Exam Pattern 2026 consists of three stages: Prelims (100 marks, 1 hour), Mains (230 marks, 3 hours 30 minutes) — split into a 200-mark Objective Test and a 30-mark Descriptive Test — and Phase III (50 marks) covering a Psychometric Test, Group Exercise (20 marks), and Interview (30 marks). The key change for 2026 is that the Descriptive Test marks have been reduced from 50 to 30, bringing the Mains total down from 250 to 230. Negative marking of 0.25 marks per wrong answer applies in both Prelims and Mains objective sections, with no penalty for unattempted questions. Prelims has no sectional cutoff, but Mains does.
              </p>
            </section>

            {/* Table of Contents */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {[
                    { id: 'pattern-changes', text: 'What Changed in 2026 Pattern' },
                    { id: 'prelims-pattern', text: 'Prelims Exam Details' },
                    { id: 'mains-pattern', text: 'Mains Objective Structure' },
                    { id: 'descriptive-pattern', text: 'Descriptive Writing Test' },
                    { id: 'phase-3-pattern', text: 'Phase III: GE & Interview' },
                    { id: 'selection-weightage', text: 'Final Selection Weightage' },
                    { id: 'negative-marking', text: 'Negative Marking Regulations' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-655 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
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

            {/* ── SECTION B: WHAT CHANGED ── */}
            <section id="pattern-changes" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                What Changed in SBI PO Exam Pattern 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1: Descriptive Marks */}
                  <div className="border border-amber-200 bg-amber-50/20 p-5 rounded-2xl flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <span className="inline-flex px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider">
                        Key Change
                      </span>
                      <div className="font-extrabold text-slate-900 text-base">Descriptive Test Marks</div>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Descriptive test marks are reduced to focus weightage on core analytical areas.
                      </p>
                    </div>
                    <div className="flex items-center gap-3.5 pt-2 border-t border-slate-100/50">
                      <div className="text-slate-450 line-through text-sm font-bold">50 Marks</div>
                      <ArrowRight size={14} className="text-slate-400" />
                      <div className="text-[#1B6EB5] font-black text-base">30 Marks</div>
                    </div>
                  </div>

                  {/* Card 2: Mains Total Marks */}
                  <div className="border border-amber-200 bg-amber-50/20 p-5 rounded-2xl flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <span className="inline-flex px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider">
                        Key Change
                      </span>
                      <div className="font-extrabold text-slate-900 text-base">Mains Total Marks</div>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        The overall maximum score for Mains falls correspondingly due to Descriptive edits.
                      </p>
                    </div>
                    <div className="flex items-center gap-3.5 pt-2 border-t border-slate-100/50">
                      <div className="text-slate-450 line-through text-sm font-bold">250 Marks</div>
                      <ArrowRight size={14} className="text-slate-400" />
                      <div className="text-[#1B6EB5] font-black text-base">230 Marks</div>
                    </div>
                  </div>

                  {/* Card 3: Descriptive Duration */}
                  <div className="border border-slate-200 bg-slate-50/40 p-5 rounded-2xl flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <span className="inline-flex px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-wider">
                        Unchanged
                      </span>
                      <div className="font-extrabold text-slate-900 text-base">Descriptive Duration</div>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Candidates still receive the same amount of time to answer all descriptive prompts.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-slate-800 font-extrabold text-sm">
                      30 Minutes (No Change)
                    </div>
                  </div>

                  {/* Card 4: Prelims Structure */}
                  <div className="border border-slate-200 bg-slate-50/40 p-5 rounded-2xl flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <span className="inline-flex px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-wider">
                        Unchanged
                      </span>
                      <div className="font-extrabold text-slate-900 text-base">Prelims Exam Pattern</div>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        The Preliminary qualifying round maintains its exact metrics, subjects, and scoring rules.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-slate-800 font-extrabold text-sm">
                      100 Marks (No Change)
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION C: PRELIMS PATTERN ── */}
            <section id="prelims-pattern" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Layers size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Exam Pattern 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="space-y-3">
                  {[
                    { section: 'English Language', qs: '30 Questions', marks: '30 Marks', time: '20 Minutes', desc: 'Tests grammar, vocabulary & comprehension' },
                    { section: 'Quantitative Aptitude', qs: '35 Questions', marks: '35 Marks', time: '20 Minutes', desc: 'Tests data sufficiency, logic & speed math' },
                    { section: 'Reasoning Ability', qs: '35 Questions', marks: '35 Marks', time: '20 Minutes', desc: 'Tests puzzles, blood relations & code lines' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-150 p-4 rounded-2xl bg-slate-50/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-slate-350 transition-all">
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Section {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.section}</div>
                        <span className="block text-xs text-slate-500 font-semibold">{item.desc}</span>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6 justify-between sm:justify-end border-t sm:border-t-0 border-slate-100 pt-2 sm:pt-0">
                        <div className="text-left sm:text-right shrink-0 font-sans">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-wider">Weight</span>
                          <span className="block text-xs font-black text-slate-700">{item.qs} · {item.marks}</span>
                        </div>
                        <span className="inline-flex px-3 py-1 rounded-xl bg-blue-50 border border-blue-100 font-black text-xs text-[#1B6EB5] shrink-0 font-sans">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
                  <div>
                    <span className="block text-[10px] font-black text-white/50 uppercase tracking-widest font-sans">Total Prelims Weightage</span>
                    <span className="block text-lg font-black mt-0.5">100 Questions | 100 Marks</span>
                  </div>
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-xl text-xs font-black self-center sm:self-auto font-sans">
                    Total Duration: 1 Hour
                  </span>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-3 font-sans">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Key Prelims Rules</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Mode: Online, Objective (MCQ) format only.',
                      'Prelims is qualifying only — marks do not count for final rank list.',
                      'No sectional cutoff — only an overall cutoff determines qualification.',
                      'Negative marking: 0.25 marks deducted per incorrect option.',
                      'Approximately 10 times the category vacancies are shortlisted for Mains.'
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-4.5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Prepare systematically by reviewing exact topic weights and sectional priorities:
                  </span>
                  <Link
                    href="/sbi-po/syllabus"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline"
                  >
                    View Official Syllabus
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION D: MAINS PATTERN (OBJECTIVE) ── */}
            <section id="mains-pattern" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Layers size={20} className="text-[#1B6EB5]" />
                SBI PO Mains Exam Pattern 2026 (Objective)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="space-y-3">
                  {[
                    { section: 'Reasoning & Computer Aptitude', qs: '40 Qs', marks: '60 Marks', time: '50 Mins', desc: 'Advanced logic matrices, coded directions & flowchart logic' },
                    { section: 'Data Analysis & Interpretation', qs: '30 Qs', marks: '60 Marks', time: '45 Mins', desc: 'Funnel charts, triangular metrics, missing DI tables' },
                    { section: 'General/Economy/Banking Awareness', qs: '60 Qs', marks: '60 Marks', time: '45 Mins', desc: 'RBI policies, dynamic news & static financial terminology' },
                    { section: 'English Language', qs: '40 Qs', marks: '20 Marks', time: '40 Mins', desc: 'Reading comprehensions, connectors & advanced grammar' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-150 p-4 rounded-2xl bg-slate-50/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-slate-350 transition-all">
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest font-sans">Module {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.section}</div>
                        <span className="block text-xs text-slate-500 font-semibold">{item.desc}</span>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6 justify-between sm:justify-end border-t sm:border-t-0 border-slate-100 pt-2 sm:pt-0">
                        <div className="text-left sm:text-right shrink-0 font-sans">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-wider">Weight</span>
                          <span className="block text-xs font-black text-slate-700">{item.qs} · {item.marks}</span>
                        </div>
                        <span className="inline-flex px-3 py-1 rounded-xl bg-blue-50 border border-blue-100 font-black text-xs text-[#1B6EB5] shrink-0 font-sans">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left font-sans">
                  <div>
                    <span className="block text-[10px] font-black text-white/50 uppercase tracking-widest">Total Mains Objective Weightage</span>
                    <span className="block text-lg font-black mt-0.5">170 Questions | 200 Marks</span>
                  </div>
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-xl text-xs font-black self-center sm:self-auto">
                    Total Duration: 3 Hours
                  </span>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-3 font-sans">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest font-sans">Key Mains Objective Rules</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Mode: Online, Objective + Descriptive test modules.',
                      'Sectional cutoff applies — candidates must clear the minimum score in each individual section, not just the overall total.',
                      'Negative marking: 0.25 marks deducted per wrong answer in objective sections.',
                      'Each section has its own fixed timing — no shifting time between sections.'
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION E: DESCRIPTIVE PATTERN ── */}
            <section id="descriptive-pattern" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileText size={20} className="text-[#1B6EB5]" />
                SBI PO Descriptive Test Pattern 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  The Descriptive Test is conducted online immediately after completing the Objective Mains paper. Candidates type answers on the keyboard.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { task: 'Email Writing', options: '1 of 2 options', marks: '10 Marks', desc: 'Draft business or formal correspondence emails' },
                    { task: 'Situation Analysis', options: '1 of 2 options', marks: '10 Marks', desc: 'Analyze dynamic business cases or problem prompts' },
                    { task: 'Report / Precis', options: '1 of 2 options', marks: '10 Marks', desc: 'Summarize standard passages or write reports' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/30 flex flex-col justify-between space-y-3 hover:border-slate-350 transition-all">
                      <div className="space-y-1.5">
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Task {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-base leading-tight">{item.task}</div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs font-bold font-sans">
                        <span className="text-slate-455">{item.options}</span>
                        <span className="text-[#1B6EB5] font-black text-sm">{item.marks}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
                  <div>
                    <span className="block text-[10px] font-black text-white/50 uppercase tracking-widest font-sans">Total Descriptive Weightage</span>
                    <span className="block text-lg font-black mt-0.5">3 Tasks | 30 Marks</span>
                  </div>
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-xl text-xs font-black self-center sm:self-auto font-sans">
                    Total Duration: 30 Minutes
                  </span>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-3 font-sans">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest font-sans">Key Descriptive Rules</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Conducted online immediately after the Mains Objective Test.',
                      'No negative marking applies to Descriptive Test items.',
                      'Evaluated only for candidates who clear the Objective Test qualifying cut-off.',
                      'Descriptive Test marks are fully included in the final merit list.'
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-4.5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Review target Descriptive writing prompts, formats, and essay keywords:
                  </span>
                  <Link
                    href="/sbi-po/syllabus"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    Check Descriptive Topics
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION F: PHASE III PATTERN ── */}
            <section id="phase-3-pattern" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Users size={20} className="text-[#1B6EB5]" />
                SBI PO Phase III: Psychometric Test, Group Exercise & Interview
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { component: 'Psychometric Test', marks: 'Qualifying (No Marks)', note: 'Findings shared with interview panel to assess personality suitability.' },
                    { component: 'Group Exercise (GE)', marks: '20 Marks', note: 'Assesses teamwork, communication, and situational leadership qualities.' },
                    { component: 'Personal Interview (PI)', marks: '30 Marks', note: 'Assesses banking awareness, suitability, and career motivations.' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/30 flex flex-col justify-between space-y-3 hover:border-slate-350 transition-all">
                      <div className="space-y-1.5">
                        <span className="block text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest font-sans">Phase III - Step {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-base leading-tight">{item.component}</div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{item.note}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-3 text-right font-sans">
                        <span className="inline-block px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-lg text-xs font-black text-[#1B6EB5]">
                          {item.marks}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left font-sans">
                  <div>
                    <span className="block text-[10px] font-black text-white/50 uppercase tracking-widest font-sans">Total Phase III Weightage</span>
                    <span className="block text-lg font-black mt-0.5">GE + PI Total: 50 Marks</span>
                  </div>
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-xl text-xs font-black self-center sm:self-auto font-sans">
                    Conducted Offline at Designated SBI Centres
                  </span>
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-4.5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Learn how this final stage coordinates with structural guidelines and document verifications:
                  </span>
                  <Link
                    href="/sbi-po/selection-process"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline"
                  >
                    Check Selection Process
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION G: WEIGHTAGE ── */}
            <section id="selection-weightage" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Trophy size={20} className="text-[#1B6EB5]" />
                SBI PO Final Selection: Marks Weightage
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-blue-150 bg-blue-50/15 p-5 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Component 1</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight">Mains Examination</div>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Combined score of Objective (200 marks) + Descriptive (30 marks) normalized down.
                    </p>
                    <div className="text-[#1B6EB5] font-black text-base pt-1 font-sans">
                      75% Normalized Weightage
                    </div>
                  </div>

                  <div className="border border-amber-200 bg-amber-50/15 p-5 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Component 2</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight">Phase III GE & Interview</div>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Combined score of Group Exercise (20 marks) + Interview (30 marks) normalized down.
                    </p>
                    <div className="text-amber-550 font-black text-base pt-1 font-sans">
                      25% Normalized Weightage
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-black text-slate-450 uppercase tracking-widest font-sans">
                    <span>Mains Normalized Weight (75%)</span>
                    <span>Phase III Normalized Weight (25%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden flex">
                    <div className="bg-[#1B6EB5] h-full" style={{ width: '75%' }} />
                    <div className="bg-amber-500 h-full" style={{ width: '25%' }} />
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-2xl text-center font-sans">
                  <span className="block text-[10px] font-black text-white/50 uppercase tracking-widest">Final Rank Score Breakdown</span>
                  <span className="block text-base sm:text-lg font-black mt-0.5">Normalized Score: 100 Marks (75% Mains + 25% Phase III)</span>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-3 font-sans">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Key Weightage Rules</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Prelims marks are NOT included in final rankings.',
                      'Final rank lists are based solely on normalized Mains + Phase III scores.',
                      'Category-wise normalized final cutoffs determine final selection allotments.'
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start font-sans">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-4.5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Review chronological category cutoffs to gauge targeted prep scores:
                  </span>
                  <Link
                    href="/sbi-po/cut-off"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline"
                  >
                    Check Cut Off Trends
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION H: NEGATIVE MARKING ── */}
            <section id="negative-marking" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Shield size={20} className="text-[#1B6EB5]" />
                SBI PO Negative Marking Rules (Consolidated)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="space-y-3">
                  {[
                    { stage: 'Prelims (Objective)', rule: '0.25 marks deducted per wrong answer.', danger: true },
                    { stage: 'Mains (Objective)', rule: '0.25 marks deducted per wrong answer.', danger: true },
                    { stage: 'Mains (Descriptive)', rule: 'No negative marking applies.', danger: false },
                    { stage: 'Phase III (Interview & GE)', rule: 'No negative marking applies.', danger: false }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={"w-8 h-8 rounded-xl flex items-center justify-center shrink-0 " + (item.danger ? "bg-rose-50 text-rose-500 border border-rose-100" : "bg-emerald-50 text-emerald-500 border border-emerald-100")}>
                          {item.danger ? <AlertTriangle size={16} /> : <CheckCircle size={16} />}
                        </div>
                        <span className="font-extrabold text-slate-800 text-sm">{item.stage}</span>
                      </div>
                      <span className={"text-xs sm:text-sm font-black " + (item.danger ? "text-rose-600" : "text-emerald-600")}>{item.rule}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5 font-sans" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0 font-sans">
                    <strong>Critical Note:</strong> No marks are deducted for questions left unattempted, at any stage of the recruitment process. Make educated guesses only when you can narrow options down to two.
                  </p>
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
                  { q: 'What is the total marks for SBI PO Prelims 2026?', a: 'SBI PO Prelims 2026 carries 100 marks across English Language, Quantitative Aptitude, and Reasoning Ability.' },
                  { q: 'What is the total marks for SBI PO Mains 2026?', a: 'SBI PO Mains 2026 carries 230 marks total — 200 for the Objective Test and 30 for the Descriptive Test.' },
                  { q: 'What changed in the SBI PO Exam Pattern for 2026?', a: 'The Descriptive Test marks were reduced from 50 to 30, bringing the Mains total down from 250 to 230; the Prelims pattern remained unchanged.' },
                  { q: 'Is there negative marking in SBI PO exam?', a: 'Yes, 0.25 marks are deducted for every wrong answer in the Prelims and Mains Objective Tests; there is no penalty for unattempted questions, and no negative marking in the Descriptive Test or Phase III.' },
                  { q: 'Is there a sectional cutoff in SBI PO Prelims?', a: 'No, there is no sectional cutoff in SBI PO Prelims — only an overall cutoff applies.' },
                  { q: 'Is there a sectional cutoff in SBI PO Mains?', a: 'Yes, sectional cutoff applies to each section of the SBI PO Mains Objective Test.' },
                  { q: 'How many marks does the SBI PO Interview carry?', a: 'The SBI PO Personal Interview carries 30 marks, and the Group Exercise carries 20 marks, totaling 50 marks for Phase III.' },
                  { q: 'Are SBI PO Prelims marks counted in the final merit list?', a: 'No, SBI PO Prelims is purely qualifying in nature; only Mains and Phase III marks count toward the final merit list.' },
                  { q: 'What is the weightage given to Mains and Interview in SBI PO final selection?', a: 'Mains marks carry 75% weightage and Phase III (Group Exercise + Interview) carries 25% weightage in the normalized final score.' },
                  { q: 'How many candidates are shortlisted for SBI PO Mains from Prelims?', a: 'Approximately 10 times the number of vacancies in each category are shortlisted for the Mains exam.' }
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

            {/* KEEP EDITORIAL SECTION EXACTLY AS IS */}
            <ExamAuthorSection examId="sbi-po" />
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 space-y-4 hidden lg:block">
            <QuickNavigation exam={exam} activeSlug="exam-pattern" />

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
