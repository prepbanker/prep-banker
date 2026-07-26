// PATH: components/sections/exams/SBIPOComparisonPage.tsx
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

export default function SBIPOComparisonPage() {
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
            <span className="text-white/80">Comparison</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wide uppercase">
                Exam Comparison
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO vs IBPS PO — Which Should You Prepare For in 2026?
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Same core syllabus, different Mains difficulty, different final selection stage, and different careers. Here's exactly where they diverge — and why the honest answer is "prepare for both, at the harder bar."
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Analyze structural changes, salary component differences, and posting flexibility parameters. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#comparison-table"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline font-sans"
                  >
                    Compare Full Details Below ↓
                  </a>
                  <Link
                    href="/sbi-po/mock-tests"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline font-sans"
                  >
                    Start SBI PO Mock Tests →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Syllabus overlap</div>
                <div className="text-base sm:text-lg font-black text-white">99% Overlap</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Selection Stage</div>
                <div className="text-base sm:text-lg font-black text-white leading-tight">GE/Psychometric</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Starting Basic Pay</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">₹48,480</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Promotion Pace</div>
                <div className="text-base sm:text-lg font-black text-white">Scale I-VII</div>
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
                SBI PO vs IBPS PO — Quick Answer
              </h2>
              <p className="text-[#0D1B3E] text-sm sm:text-base leading-relaxed font-semibold m-0">
                SBI PO and IBPS PO share almost the same Prelims and Mains syllabus, but SBI PO is generally considered the tougher exam, with more unpredictable Mains reasoning and DI formats, plus an extra Psychometric Test and Group Exercise before the interview. SBI PO also offers a higher starting salary and works exclusively for State Bank of India, while IBPS PO recruitment covers multiple participating public sector banks, so the specific bank you join depends on your final allotment. If you're preparing for one, prepare at SBI PO's difficulty level — it automatically covers IBPS PO too.
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
                    { id: 'comparison-table', text: 'Exam Pattern Comparison' },
                    { id: 'difficulty', text: 'Difficulty Levels Analysis' },
                    { id: 'salary-comp', text: 'Salary & Compensation 2026' },
                    { id: 'career-growth', text: 'Career ladder & Growth comparisons' },
                    { id: 'preparation-strategy', text: 'Target Selection Decider' },
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

            {/* ── SECTION 4: EXAM PATTERN COMPARISON (GFM Table) ── */}
            <section id="comparison-table" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BookOpenCheck size={20} className="text-[#1B6EB5]" />
                SBI PO vs IBPS PO — Exam Pattern at a Glance
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Factor</th>
                          <th className="px-5 py-4">SBI PO</th>
                          <th className="px-5 py-4">IBPS PO</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { factor: 'Recruiting Body', sbi: 'State Bank of India', ibps: 'IBPS, on behalf of participating public sector banks' },
                          { factor: 'Stages', sbi: 'Prelims → Mains → Psychometric Test + Group Exercise + Interview', ibps: 'Prelims → Mains → Personal Interview' },
                          { factor: 'Prelims Sections', sbi: 'English, Quantitative Aptitude, Reasoning Ability', ibps: 'English, Quantitative Aptitude, Reasoning Ability' },
                          { factor: 'Mains Sections', sbi: 'Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, English Language, Descriptive Test', ibps: 'Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, English Language, Descriptive Test' },
                          { factor: 'Prelims Total Marks', sbi: '100 Marks', ibps: '100 Marks' },
                          { factor: 'Mains Total Marks', sbi: '230 (200 Objective + 30 Descriptive)', ibps: '225 (200 Objective + 25 Descriptive)' },
                          { factor: 'Final Merit Basis', sbi: 'Mains + Group Exercise + Interview', ibps: 'Mains + Interview' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.factor}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-500 leading-normal">{row.sbi}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-655 leading-normal">{row.ibps}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex gap-3 items-center justify-between font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want the detailed, section-wise breakdown of timings & syllabus?
                  </span>
                  <Link
                    href="/sbi-po/exam-pattern"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    Check Pattern
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 5: DIFFICULTY COMPARISON (Checks list) ── */}
            <section id="difficulty" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                Is SBI PO Tougher Than IBPS PO?
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  <strong>Yes</strong> — SBI PO Mains is widely considered the harder paper. SBI's Data Analysis & Interpretation sets tend to run longer with more layered caselets, and its reasoning puzzles frequently stack more conditions than IBPS PO's. IBPS PO Prelims is comparatively more predictable, though its pattern has grown more analytical in recent cycles too. Treat this as informed aspirant consensus rather than an official difficulty rating — SBI and IBPS don't publish comparative difficulty data.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { topic: 'Quant / DI Format', detail: 'SBI Mains DI sets are generally longer and more caselet-heavy; IBPS PO still demands strong arithmetic speed.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { topic: 'Reasoning puzzles', detail: 'SBI more often introduces new or unfamiliar puzzle formats; IBPS PO rewards accuracy within a more familiar structure.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { topic: 'Final shortlisting stage', detail: 'SBI\'s Psychometric Test and Group Exercise add a preparation dimension IBPS PO\'s interview-only stage doesn\'t require.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-4.5 pr-4.5 pl-6 rounded-2xl flex flex-col justify-between space-y-2 hover:border-slate-350 transition-all duration-200 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest font-sans">Compare 0{idx + 1}</span>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">{item.topic}</h4>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-2xl flex gap-3 items-center justify-between font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    See what actually appeared in the last SBI PO shift:
                  </span>
                  <Link
                    href="/sbi-po/prelims-exam-analysis"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    Mains Exam Analysis
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 6: SALARY COMPARISON (GFM Table) ── */}
            <section id="salary-comp" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Coins size={20} className="text-[#1B6EB5]" />
                SBI PO vs IBPS PO — Salary Comparison 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Salary Component</th>
                          <th className="px-5 py-4">SBI PO</th>
                          <th className="px-5 py-4">IBPS PO</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { comp: 'Starting Basic Pay', sbi: '₹48,480 (4 advance increments included)', ibps: '₹48,480' },
                          { comp: 'Approx. Gross Monthly', sbi: '₹95,000–97,000 (Varies by location leased rent)', ibps: '₹90,000–91,000' },
                          { comp: 'Approx. In-Hand Monthly', sbi: '₹82,000–84,000 (Higher allowances limits)', ibps: '₹74,000–77,000' },
                          { comp: 'Employer / Banks', sbi: 'State Bank of India (single employer)', ibps: 'Allotted public sector bank (varies by merit and preference)' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.comp}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-500 leading-normal">{row.sbi}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-655 leading-normal">{row.ibps}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Differentiator Note:</strong> SBI PO generally carries a higher starting package and more allowances, but the exact numbers change with every notification cycle and posting city — treat any hard figure you read (including this one) as approximate until confirmed against your appointment letter.
                  </p>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex gap-3 items-center justify-between font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Check out our full allowances and leased rent details:
                  </span>
                  <Link
                    href="/sbi-po/salary"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    SBI PO Salary Breakdown
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 7: CAREER GROWTH & WORK PROFILE (Sleek cards grid) ── */}
            <section id="career-growth" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Briefcase size={20} className="text-[#1B6EB5]" />
                Career Growth — SBI PO vs IBPS PO
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Employer Certainty', desc: 'SBI PO means one known employer from day one — India\'s largest public sector bank. IBPS PO means allotment — your final merit decides which participating bank you join, so certainty trades off against optionality.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'Work Pressure Factors', desc: 'SBI\'s larger branch network and customer base generally mean higher day-to-day work pressure; IBPS-allotted banks vary widely, with some branches carrying a comparatively lighter load.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { title: 'Promotion Escalator Pattern', desc: 'Both follow a similar Scale I → Scale VII progression toward Chairman/Managing Director, but SBI is generally seen as offering faster promotion cycles for high performers, while IBPS PO growth depends heavily on the allotted bank\'s internal policy.', border: 'border-l-[#1B6EB5] bg-blue-50/5' },
                    { title: 'Posting Flexibility', desc: 'SBI PO postings can be anywhere in India across rural, semi-urban, and urban branches; IBPS PO posting patterns depend on the specific bank you\'re allotted to.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-4.5 pr-4.5 pl-6 rounded-2xl flex flex-col justify-between space-y-1.5 transition-all duration-200 hover:border-slate-350 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Growth metric {idx + 1}</span>
                        <h4 className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.title}</h4>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed m-0 pt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 8: DECISION CHECKLIST STRATEGY ── */}
            <section id="preparation-strategy" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Target size={20} className="text-[#1B6EB5]" />
                SBI PO or IBPS PO — Which Should You Prioritize?
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { criteria: 'Single Employer Focus', action: 'If you want a single, known employer and are comfortable with higher work pressure: prioritize SBI PO.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { criteria: 'Predictable Pacing Focus', action: 'If you want broader posting options and a comparatively more predictable Mains pattern: prioritize IBPS PO, but don\'t under-prepare — recent IBPS Mains papers have also grown more analytical.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { criteria: 'Harder Calibrations First', action: 'If you\'re serious about a banking career generally: prepare at SBI PO\'s difficulty level. A candidate calibrated to SBI PO\'s harder Mains format finds IBPS PO comparatively manageable — the reverse isn\'t true.', border: 'border-l-amber-500 bg-amber-50/5' },
                    { criteria: 'Short Timelines Strategy', action: 'If your attempt calendar is tight: build one strong Prelims core (English, Quant, Reasoning) since it clears both screens, then split Mains-specific prep in the final weeks before each exam.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-4.5 pr-4.5 pl-6 rounded-2xl flex flex-col justify-between space-y-1 hover:border-slate-350 transition-all duration-200 " + item.border}>
                      <div className="space-y-0.5">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest font-sans">Choice path {idx + 1}</span>
                        <h4 className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.criteria}</h4>
                        <span className="block text-xs text-slate-500 font-semibold mt-1">{item.action}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-links */}
                <div className="bg-blue-50/40 border border-blue-150 p-4.5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Access our free mocks and roadmap planning trackers:
                  </span>
                  <div className="flex gap-2 shrink-0">
                    <Link href="/sbi-po/mock-tests" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Mocks</Link>
                    <Link href="/sbi-po/study-plan" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline">Study Plan</Link>
                  </div>
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
                  { q: 'Is SBI PO tougher than IBPS PO?', a: 'Yes, SBI PO is generally considered tougher than IBPS PO, mainly because its Mains exam features more unpredictable reasoning puzzles and longer, more layered Data Interpretation sets.' },
                  { q: 'What is the main difference between SBI PO and IBPS PO?', a: 'The main difference is the recruiting body and final selection stage — SBI PO recruits exclusively for State Bank of India and adds a Psychometric Test and Group Exercise before the interview, while IBPS PO recruits for multiple participating public sector banks with an interview as the final stage.' },
                  { q: 'Which has a higher salary, SBI PO or IBPS PO?', a: 'SBI PO generally offers a higher starting salary and more allowances than IBPS PO, though exact figures vary by posting location and the current pay cycle for both.' },
                  { q: 'Do SBI PO and IBPS PO have the same syllabus?', a: 'Yes, SBI PO and IBPS PO share nearly the same Prelims and Mains syllabus, covering English Language, Quantitative Aptitude, Reasoning Ability, Data Analysis & Interpretation, and General/Economy/Banking Awareness.' },
                  { q: 'Can I prepare for both SBI PO and IBPS PO together?', a: 'Yes, since the syllabus overlap between SBI PO and IBPS PO is nearly complete, one Prelims preparation plan can be used to clear both exams, with Mains-specific practice added closer to each exam.' },
                  { q: 'Which exam has a tougher final selection stage, SBI PO or IBPS PO?', a: 'SBI PO has a more extensive final selection stage than IBPS PO, including a Psychometric Test and Group Exercise in addition to the Personal Interview, while IBPS PO\'s final stage is typically the interview alone.' },
                  { q: 'Does IBPS PO let you choose which bank you join?', a: 'No, IBPS PO does not guarantee a specific bank — candidates list bank preferences, but the final allotment is decided based on merit rank and vacancy availability among participating public sector banks.' },
                  { q: 'Which offers better career growth, SBI PO or IBPS PO?', a: 'SBI PO is generally seen as offering faster promotion opportunities for high performers due to SBI\'s scale, while IBPS PO career growth depends more on the specific allotted bank\'s internal promotion policy.' },
                  { q: 'Should I prepare for SBI PO or IBPS PO first?', a: 'It\'s advisable to prepare at SBI PO\'s difficulty level first, since a candidate trained for SBI PO\'s harder Mains pattern typically finds IBPS PO\'s exam comparatively more manageable.' },
                  { q: 'Is the SBI PO Prelims pattern the same as IBPS PO Prelims?', a: 'Yes, both SBI PO and IBPS PO Prelims test the same three sections — English Language, Quantitative Aptitude, and Reasoning Ability — under similar sectional timing, though exact question counts and marks are set fresh in each cycle\'s official notification.' }
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
            <QuickNavigation exam={exam} activeSlug="comparison" />

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
