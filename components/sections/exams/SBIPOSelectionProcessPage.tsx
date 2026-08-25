// PATH: components/sections/exams/SBIPOSelectionProcessPage.tsx
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
  ListTodo
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOSelectionProcessPage() {
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
            <span className="text-white/80">Selection Process</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                3-Stage Process
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Selection Process 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Prelims → Mains → Psychometric Test, Group Exercise & Interview
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Understand exactly how candidates move from application to final appointment — and what's needed at each step. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
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
                    href="/sbi-po/exam-pattern"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    Check Exam Pattern
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>Do you qualify to apply?</span>
                  <Link href="/sbi-po/eligibility" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check SBI PO Eligibility <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Step-by-Step Process
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Official Weightage
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-emerald-400" />
                  Document Checklist Included
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Selection Stages</div>
                <div className="text-base sm:text-lg font-black text-white">3 Stages</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Shortlisted for Mains</div>
                <div className="text-base sm:text-lg font-black text-white font-sans">10x Vacancy</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Shortlisted for Interview</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">3x Vacancy</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Mains : Interview Ratio</div>
                <div className="text-base sm:text-lg font-black text-white">75:25 Weight</div>
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
                The SBI PO Selection Process 2026 consists of three stages: Preliminary Examination (qualifying only), Main Examination (objective + descriptive, merit-counting), and Phase III covering a Psychometric Test, Group Exercise, and Interview. Approximately 10 times the number of vacancies in each category are shortlisted from Prelims to Mains, and roughly 3 times the number of vacancies are shortlisted from Mains to the Interview stage. The final merit list is based on normalized Mains and Phase III scores combined at a 75:25 ratio — Prelims marks are not counted at all.
              </p>
            </section>

            {/* Table of Contents */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0 font-sans">
                  {[
                    { id: 'selection-overview', text: 'Selection Process Overview' },
                    { id: 'stage-by-stage', text: 'Stage-by-Stage Breakdown' },
                    { id: 'merit-weightage', text: 'Merit Score Weightage' },
                    { id: 'selection-journey', text: 'Step-by-Step Journey' },
                    { id: 'documents-required', text: 'Documents for Verification' },
                    { id: 'stage-preparation', text: 'How to Prepare for Stages' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-655 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-55  border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                          {idx + 1}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── SECTION B: 3-STAGE OVERVIEW (Unique Column Layout) ── */}
            <section id="selection-overview" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                SBI PO Selection Process: 3-Stage Overview
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { stage: 'Phase I: Preliminary Exam', nature: 'Qualifying Only', purpose: 'Screens candidates for Mains; marks not counted in final merit list calculation.', border: 'border-blue-200 bg-blue-50/10' },
                    { stage: 'Phase II: Main Exam', nature: 'Merit-counting', purpose: 'Objective + Descriptive modules; establishes the core marks for ranking.', border: 'border-amber-200 bg-amber-50/10' },
                    { stage: 'Phase III: Interview & GE', nature: 'Merit-counting', purpose: 'Group Exercise & Personal Interview; assesses suitability and traits.', border: 'border-emerald-200 bg-emerald-50/10' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border p-5 rounded-2xl space-y-3 flex flex-col justify-between hover:shadow-sm transition-all " + item.border}>
                      <div className="space-y-1.5">
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Stage {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.stage}</div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{item.purpose}</p>
                      </div>
                      <div className="border-t border-slate-200/50 pt-2 text-right">
                        <span className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-black text-slate-700">
                          {item.nature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    For detailed section-wise marks, duration, and marking schemes at each stage:
                  </span>
                  <Link
                    href="/sbi-po/exam-pattern"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    Check Exam Pattern
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION C: STAGE-BY-STAGE (Alternating Split Feature Layout) ── */}
            <section id="stage-by-stage" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Layers size={20} className="text-[#1B6EB5]" />
                Stage-by-Stage: What Happens and Why
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="space-y-6">
                  {/* Phase I: Prelims */}
                  <div className="bg-slate-50/60 border border-slate-200/80 rounded-3xl p-5 sm:p-6 space-y-4 hover:border-slate-300 hover:bg-slate-50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-[#1B6EB5] font-black text-sm flex items-center justify-center shrink-0">
                          1
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 m-0">Phase I: Preliminary Examination</h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-[#1B6EB5] border border-blue-200 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg self-start sm:self-auto">
                        Qualifying Only
                      </span>
                    </div>
                    <div className="space-y-3 font-sans">
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                        The first screening round. Tests English Language, Quantitative Aptitude, and Reasoning Ability.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                            <strong>Shortlist Ratio:</strong> Roughly 10 times the category vacancies move to Mains.
                          </span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                            <strong>Final Weight:</strong> Carries zero marks in the final merit list compilation.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase II: Mains */}
                  <div className="bg-slate-50/60 border border-slate-200/80 rounded-3xl p-5 sm:p-6 space-y-4 hover:border-slate-300 hover:bg-slate-50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-amber-600 font-black text-sm flex items-center justify-center shrink-0">
                          2
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 m-0">Phase II: Main Examination</h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 border border-amber-200 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg self-start sm:self-auto">
                        Merit-Counting (250 Marks)
                      </span>
                    </div>
                    <div className="space-y-3 font-sans">
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                        The primary stage that builds your merit ranking. Combines an objective test with a descriptive test.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                            <strong>Components:</strong> 4 Objective Sections (200 Marks) + 2 Descriptive Questions (30 Marks).
                          </span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                            <strong>Shortlist Ratio:</strong> Roughly 3 times the category vacancies move to Phase III.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase III: Psychometric, GE & Interview */}
                  <div className="bg-slate-50/60 border border-slate-200/80 rounded-3xl p-5 sm:p-6 space-y-4 hover:border-slate-300 hover:bg-slate-50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 font-black text-sm flex items-center justify-center shrink-0">
                          3
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 m-0">Phase III: Personality Assessment</h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg self-start sm:self-auto">
                        Merit-Counting (50 Marks)
                      </span>
                    </div>
                    <div className="space-y-3 font-sans">
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                        Evaluates personality traits, group dynamics, communication skills, and overall banking suitability.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        <div className="bg-white border border-slate-150 p-4 rounded-2xl space-y-1">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Psychometric Test</span>
                          <span className="block text-xs text-slate-600 font-semibold leading-relaxed">
                            Personality profiling shared directly with the interview panel. (No separate marks)
                          </span>
                        </div>
                        <div className="bg-white border border-slate-150 p-4 rounded-2xl space-y-1">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Group Exercise (20 M)</span>
                          <span className="block text-xs text-slate-600 font-semibold leading-relaxed">
                            Assesses communication, consensus building, and teamwork in a group setting.
                          </span>
                        </div>
                        <div className="bg-white border border-slate-150 p-4 rounded-2xl space-y-1">
                          <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Interview (30 M)</span>
                          <span className="block text-xs text-slate-600 font-semibold leading-relaxed">
                            Assessments of banking awareness, suitability, logic, and self-expression.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Review what tasks and syllabus topics are assessed during Phase III:
                  </span>
                  <Link
                    href="/sbi-po/syllabus"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    Check Interview Syllabus
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION D: FINAL SELECTION WEIGHTAGE (Progress Splits) ── */}
            <section id="merit-weightage" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Trophy size={20} className="text-[#1B6EB5]" />
                SBI PO Final Selection: Merit Weightage
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-blue-150 border-l-4 border-l-blue-500 bg-blue-50/15 py-5 pr-5 pl-6 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Phase II Score</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight">Main Examination</div>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Written objective + descriptive marks (230 marks total) normalized down to a 75 weight block.
                    </p>
                    <div className="text-[#1B6EB5] font-black text-base pt-1">
                      75% Normalized Weightage
                    </div>
                  </div>

                  <div className="border border-emerald-200 border-l-4 border-l-emerald-500 bg-emerald-50/15 py-5 pr-5 pl-6 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Phase III Score</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight">Group Exercise & Interview</div>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Interview (30) + Group Exercise (20) marks (50 marks total) normalized down to a 25 weight block.
                    </p>
                    <div className="text-emerald-600 font-black text-base pt-1">
                      25% Normalized Weightage
                    </div>
                  </div>
                </div>

                {/* Progress Visual Tracker */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-black text-slate-455 uppercase tracking-widest font-sans">
                    <span>Mains Weight (75%)</span>
                    <span>Interview Weight (25%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden flex">
                    <div className="bg-[#1B6EB5] h-full" style={{ width: '75%' }} />
                    <div className="bg-emerald-500 h-full" style={{ width: '25%' }} />
                  </div>
                </div>

                <div className="border-t border-slate-150 pt-5 space-y-3">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Key Weightage Rules</span>
                  <div className="space-y-2.5">
                    {[
                      'Prelims marks are excluded entirely from the final merit list.',
                      'The final merit list ranks candidates by their combined normalized score, category-wise.',
                      'Selection is offered to top-ranked candidates within each category, based on available vacancies.'
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Check historical cutoff limits to set your target score parameters:
                  </span>
                  <Link
                    href="/sbi-po/cut-off"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    Check Cut Off Trends
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION E: STEP-BY-STEP JOURNEY (Timeline track) ── */}
            <section id="selection-journey" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Clock size={20} className="text-[#1B6EB5]" />
                SBI PO Selection Method: Step-by-Step Journey
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                {/* Vertical Timeline Pipeline */}
                <div className="relative space-y-6 border-l-2 border-dashed border-blue-200 ml-4 py-2">
                  {[
                    { step: 'Online Application', desc: 'Submit the online application form with the fee (₹750 for General/EWS/OBC; nil for SC/ST/PwBD).' },
                    { step: 'Admit Card Release', desc: 'Download 1-2 weeks before the exam using Registration Number and Password/DOB.' },
                    { step: 'Preliminary Exam', desc: 'Appear for the qualifying objective exam round.' },
                    { step: 'Prelims Result', desc: 'Check category-wise merit list; ~10x category vacancies are shortlisted for Mains.' },
                    { step: 'Mains Admit Card & Exam', desc: 'Download admit card and sit for the objective + descriptive Main exam.' },
                    { step: 'Mains Result', desc: 'Check score; qualified candidates (~3x vacancies) are shortlisted for Phase III.' },
                    { step: 'Phase III Assessments', desc: 'Appear for the Psychometric Test, Group Exercise, and Personal Interview.' },
                    { step: 'Document Verification', desc: 'Shortlisted candidates verify original certificates at designated SBI centers.' },
                    { step: 'Final Result', desc: 'Final merit list published category-wise, based on normalized Mains + Phase III scores.' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8 space-y-1">
                      <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-50 border-2 border-[#1B6EB5] flex items-center justify-center font-extrabold text-[#1B6EB5] text-xs shadow-2xs">
                        {idx + 1}
                      </span>
                      <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.step}</div>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-2xl text-center mt-5 font-sans">
                  <span className="block text-[10px] font-black text-white/50 uppercase tracking-widest">Result Delivery Clause</span>
                  <span className="block text-xs sm:text-sm font-extrabold mt-0.5">
                    Results are released online in PDF/merit-list format only — no hard copy is sent by post at any stage.
                  </span>
                </div>
              </div>
            </section>

            {/* ── SECTION F: DOCUMENTS CHECKLIST (Visual Category Grid) ── */}
            <section id="documents-required" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileText size={20} className="text-[#1B6EB5]" />
                Documents Required for SBI PO Document Verification
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  This checklist is for the document verification stage held alongside the Phase III Interview (not the exam hall itself):
                </p>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Card 1: Personal & Application */}
                  <div className="border border-slate-200 border-l-4 border-l-blue-500 rounded-2xl py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 bg-slate-50/20 hover:border-slate-350 transition-all space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1B6EB5] text-[9px] font-black uppercase tracking-wider">
                      Identity & Registrations
                    </span>
                    <ul className="list-disc list-outside ml-4 text-xs text-slate-655 space-y-2 font-semibold">
                      <li>Printed Interview Admit Card</li>
                      <li>Proof of Date of Birth (Class 10 cert)</li>
                      <li>Online application form copy</li>
                      <li>Photo ID proof (Aadhaar, PAN, etc.)</li>
                    </ul>
                  </div>

                  {/* Card 2: Educational Certificates */}
                  <div className="border border-slate-200 border-l-4 border-l-emerald-500 rounded-2xl py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 bg-slate-50/20 hover:border-slate-350 transition-all space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[9px] font-black uppercase tracking-wider">
                      Academics & Experience
                    </span>
                    <ul className="list-disc list-outside ml-4 text-xs text-slate-655 space-y-2 font-semibold">
                      <li>Graduation marksheets</li>
                      <li>Degree / Provisional Certificate</li>
                      <li>Experience certificate, if applicable</li>
                    </ul>
                  </div>

                  {/* Card 3: Categorisation & Relaxation */}
                  <div className="border border-slate-200 border-l-4 border-l-amber-500 rounded-2xl py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 bg-slate-50/20 hover:border-slate-350 transition-all space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[9px] font-black uppercase tracking-wider">
                      Category & Exemptions
                    </span>
                    <ul className="list-disc list-outside ml-4 text-xs text-slate-655 space-y-2 font-semibold">
                      <li>Caste certificate (OBC/SC/ST format)</li>
                      <li>PwBD Medical Board certificate</li>
                      <li>Discharge book & rank proof (Ex-Servicemen)</li>
                      <li>Nationality/Age relaxation proof</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Tip:</strong> Carry the original plus self-attested photocopies of every document, ideally arranged inside a waterproof folder.
                  </p>
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Review what documents you need to carry to the exam center on exam day:
                  </span>
                  <Link
                    href="/sbi-po/admit-card"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    Check Admit Card Info
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION G: HOW TO PREPARE (Stage-Specific Strategy Cards) ── */}
            <section id="stage-preparation" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ListTodo size={20} className="text-[#1B6EB5]" />
                How to Prepare for Each Selection Stage
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { stage: 'Phase I: Prelims Prep', focus: 'Speed & Accuracy', desc: 'Build speed and accuracy across English, Quantitative Aptitude, and Reasoning.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { stage: 'Phase II: Mains Prep', focus: 'Analytical & Writing', desc: 'Add Banking Awareness, Computer Aptitude, and Descriptive writing practice.', border: 'border-l-amber-500 bg-amber-50/5' },
                    { stage: 'Phase III: Interview Prep', focus: 'Personality & Knowledge', desc: 'Focus on communication skills, general current affairs, and banking core knowledge.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-2 hover:border-slate-350 transition-all duration-200 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Round {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.stage}</div>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#1B6EB5] text-[10px] font-black uppercase tracking-wider mt-1">{item.focus}</span>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed pt-1.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal font-sans">
                    Get access to a detailed, week-by-week study timeline:
                  </span>
                  <Link
                    href="/sbi-po/study-plan"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    Get Week-by-Week Strategy
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
                  { q: 'What are the stages of SBI PO Selection Process 2026?', a: 'Preliminary Exam, Main Exam, and Phase III covering Psychometric Test, Group Exercise, and Interview.' },
                  { q: 'How many candidates are shortlisted from Prelims to Mains?', a: 'Approximately 10 times the number of vacancies in each category are shortlisted for Mains.' },
                  { q: 'How many candidates are shortlisted from Mains to Interview?', a: 'Approximately 3 times the number of vacancies in each category are shortlisted for the Interview stage.' },
                  { q: 'Are SBI PO Prelims marks counted in the final selection?', a: 'No, Prelims marks are not included in the final merit list; Prelims is purely qualifying.' },
                  { q: 'What is the weightage of Mains and Interview in SBI PO final selection?', a: 'Mains carries 75% weightage and Phase III (Group Exercise + Interview) carries 25% weightage in the normalized final score.' },
                  { q: 'What does the SBI PO Psychometric Test evaluate?', a: 'It evaluates personality traits and behavioral patterns, with findings shared with the interview panel; there are no separate marks for this component.' },
                  { q: 'What documents are needed for SBI PO document verification?', a: 'Interview admit card, proof of date of birth, application form copy, photo ID, educational documents, and category/relaxation-related certificates where applicable.' },
                  { q: 'Is the SBI PO result sent by post?', a: 'No, SBI PO results are released online only, in PDF/merit-list format; no hard copy is sent by post.' },
                  { q: 'What is the difference between the Group Exercise and the Interview in SBI PO?', a: 'The Group Exercise (20 marks) assesses teamwork and communication in a group setting, while the Personal Interview (30 marks) evaluates individual communication, banking awareness, and overall suitability.' },
                  { q: 'How is the SBI PO final merit list prepared?', a: 'By combining normalized Main Examination and Phase III scores at a 75:25 ratio, then ranking candidates category-wise based on available vacancies.' }
                ].map((faq, idx) => {
                  const isFaqOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-350 transition-all"
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
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-655 leading-relaxed border-t border-slate-100 pt-3 font-normal font-sans">
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
            <QuickNavigation exam={exam} activeSlug="selection-process" />

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
