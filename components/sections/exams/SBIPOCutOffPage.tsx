// PATH: components/sections/exams/SBIPOCutOffPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle,
  FileText,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Info,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Users,
  Briefcase,
  Sliders,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  Percent,
  ListTodo,
  Layers,
  Zap,
  Target,
  Clock,
  Compass,
  Globe
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOCutOffPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What was the SBI PO Prelims cut off for General category in 2025?",
      a: "The SBI PO Prelims Cut Off 2025 for the General category was 66.75 out of 100."
    },
    {
      q: "What was the SBI PO Mains cut off for General category in 2025?",
      a: "The SBI PO Mains Cut Off 2025 for the General category was 75 out of 250."
    },
    {
      q: "What was the SBI PO Final cut off for General category in 2025?",
      a: "The SBI PO Final Cut Off 2025 for the General category was 46.79 out of 100."
    },
    {
      q: "Is there a sectional cut off in SBI PO Prelims?",
      a: "No, there is no sectional cut off in SBI PO Prelims — only an overall cut off applies."
    },
    {
      q: "Is there a sectional cut off in SBI PO Mains?",
      a: "Yes, sectional cut off applies to each objective section and the Descriptive Test in SBI PO Mains."
    },
    {
      q: "What is the ratio between Mains and Interview marks for SBI PO final selection?",
      a: "Mains and Phase III (Group Exercise + Interview) marks are combined at a 75:25 ratio for the final merit list."
    },
    {
      q: "Does SBI release state-wise cut off for PO recruitment?",
      a: "No, SBI PO is a nationwide exam with no state-wise vacancies, so only category-wise cut off is released, not state-wise."
    },
    {
      q: "What factors affect the SBI PO cut off each year?",
      a: "Category-wise vacancy, exam difficulty level, number of candidates appearing per shift, and score normalization across shifts."
    },
    {
      q: "What were the SBI PO Interview qualifying marks in recent years?",
      a: "Interview and Group Exercise qualifying marks have remained fairly constant — 20 out of 50 for GEN/EWS and 17.50 out of 50 for other categories, across most recent years."
    },
    {
      q: "When will the SBI PO Cut Off 2026 be released?",
      a: "SBI PO Cut Off 2026 will be released separately for Prelims, Mains, and Final selection, along with each stage's result."
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link href="/sbi-po" className="hover:text-white transition-colors">SBI PO</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-white">Cut Off</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="space-y-4">
              <span className="inline-flex px-2.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[9px] font-black uppercase tracking-wider text-blue-300">
                Released Post-Exam
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight m-0 text-white font-display">
                SBI PO Cut Off 2026
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-extrabold max-w-2xl leading-relaxed m-0 font-sans">
                Category-Wise Prelims, Mains & Final Cut Off Trend (2019–2025)
              </p>
              <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-3xl leading-relaxed m-0">
                SBI PO 2026 cut off will be released stage-wise after each exam. Use the 6-year trend below to set a realistic target score. (Last Updated: 25 July 2026)
              </p>
            </div>

            {/* Stat Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full lg:w-80 shrink-0 font-sans">
              {[
                { label: 'Prelims 2025 (GEN, /100)', val: '66.75' },
                { label: 'Mains 2025 (GEN, /250)', val: '75' },
                { label: 'Final 2025 (GEN, /100)', val: '46.79' },
                { label: 'Interview 2025 (GEN, /50)', val: '20' }
              ].map((c, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1 leading-normal">
                    {c.label}
                  </span>
                  <span className="text-base sm:text-lg font-black text-amber-400">
                    {c.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 items-center border-t border-white/10 pt-6">
            <a
              href="https://app.prepgrind.com/signup/sbi-po"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:-translate-y-0.5 no-underline"
            >
              Attempt Free SBI PO Mock Test
            </a>
            <Link
              href="/sbi-po/prelims-exam-analysis"
              className="px-4 py-2 bg-white/10 border border-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all no-underline"
            >
              Check Prelims Exam Analysis
            </Link>
            <Link
              href="/sbi-po/vacancy"
              className="text-xs sm:text-sm font-black text-blue-300 hover:text-white transition-colors ml-2 no-underline"
            >
              Check SBI PO Vacancy 2026 →
            </Link>
          </div>

          {/* Trust Row */}
          <div className="flex items-center gap-6 mt-6 flex-wrap text-xs text-white/50 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>6-Year Trend Data</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Category-Wise</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-emerald-500" />
              <span>Updated Post-Result</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Left Column: Core Content */}
          <main className="space-y-10 min-w-0">

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans space-y-4">
              <h2 className="text-lg font-extrabold text-[#0D1B3E] font-display flex items-center gap-2 m-0 border-b border-blue-100 pb-2">
                <Zap size={18} className="text-[#1B6EB5]" />
                SBI PO Cut Off 2026 — Quick Answer
              </h2>
              <p className="text-[#0D1B3E] text-sm sm:text-base leading-relaxed font-semibold m-0">
                SBI PO Cut Off 2026 will be released by the State Bank of India separately for Prelims, Mains, and Final selection, after each stage's result. Based on the most recent cycle, the SBI PO Prelims Cut Off 2025 for the General category was 66.75 out of 100, the Mains Cut Off 2025 was 75 out of 250, and the Final Cut Off 2025 was 46.79 out of 100. There is no sectional cut off in Prelims, but sectional cut off does apply in Mains, including the Descriptive Test. Cut off marks vary each year based on vacancy count, exam difficulty, and the number of candidates appearing per shift.
              </p>
            </section>

            {/* Table of Contents */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs font-sans">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0 font-sans">
                  {[
                    { id: 'expected-trends', text: 'Section B: Cut Off 2026 Expectations' },
                    { id: 'sectional-rules', text: 'Section C: Sectional Cut Off Limits' },
                    { id: 'prelims-trends', text: 'Section D: Prelims Cut Off (2019-2025)' },
                    { id: 'mains-trends', text: 'Section E: Mains Cut Off (2019-2025)' },
                    { id: 'final-trends', text: 'Section F: Final Cut Off (2019-2025)' },
                    { id: 'interview-marks', text: 'Section G: Interview Qualifying Marks' },
                    { id: 'affecting-factors', text: 'Section H: Factors Affecting Cut Offs' },
                    { id: 'state-policy', text: 'Section I: No State-Wise Cut Off' },
                    { id: 'how-to-check', text: 'Section J: Checking Official PDF' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-655 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-55 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all shrink-0">
                          {idx + 1}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── SECTION B: SBI PO CUT OFF 2026: WHAT TO EXPECT ── */}
            <section id="expected-trends" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                SBI PO Cut Off 2026: What to Expect
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  With 1,500 vacancies in 2026 — nearly 3x the 541 vacancies in 2025 — cut off marks could trend lower than 2025's relatively high figures, though final numbers depend heavily on exam difficulty and total applicants (12,14,076 this cycle). This is analysis/context, not a guarantee — frame it that way.
                </p>

                <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-4.5 flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Trend Warning:</strong> Since vacancy counts have increased significantly, the competitive curve will expand. Target a buffer of +5 to +7 marks above the previous average in your mock tests to account for shift difficulty variation.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION C: IS THERE SECTIONAL CUT OFF? ── */}
            <section id="sectional-rules" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Target size={20} className="text-[#1B6EB5]" />
                Is There Sectional Cut Off in SBI PO?
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  Cut off limits are applied differently in SBI PO compared to other bank recruitment exams like IBPS PO. Calibrate your section-wise time based on these core parameters:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                    <div className="font-extrabold text-slate-800 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Prelims Stage
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      <strong>No sectional cut off</strong> is applied. Candidates are selected for Mains based entirely on their total marks out of 100.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                    <div className="font-extrabold text-slate-800 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Mains Stage
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      <strong>Sectional cut offs apply</strong> to each of the objective test sections and the Descriptive Test in Mains.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all">
                    <div className="font-extrabold text-slate-800 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Final Selection
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed font-sans">
                      Mains marks and Phase III (Interview + GE) marks are combined at a <strong>75:25 ratio</strong> to build the merit list.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    To read the full phase and marks allocations:
                  </span>
                  <Link
                    href="/sbi-po/selection-process"
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-350 font-bold text-xs text-slate-800 no-underline shrink-0"
                  >
                    SBI PO Selection Process
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION D: PRELIMS CUT OFF TREND ── */}
            <section id="prelims-trends" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BookOpen size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Cut Off Trend (2019–2025)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest leading-normal">
                  Out of 100 Total Marks
                </span>

                <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans uppercase tracking-wider font-black">
                          <th className="px-5 py-4">Year</th>
                          <th className="px-3 py-4">GEN</th>
                          <th className="px-3 py-4">OBC</th>
                          <th className="px-3 py-4">EWS</th>
                          <th className="px-3 py-4">SC</th>
                          <th className="px-3 py-4">ST</th>
                          <th className="px-3 py-4">VI</th>
                          <th className="px-3 py-4">HI</th>
                          <th className="px-3 py-4">LD</th>
                          <th className="px-3 py-4 text-right">D&E</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans">
                        {[
                          { year: '2025', gen: '66.75', obc: '65.50', ews: '64.50', sc: '59.25', st: '51.50', vi: '52.75', hi: '36.25', ld: '54.50', de: '35.50' },
                          { year: '2024', gen: '61.75', obc: '60.50', ews: '60.25', sc: '55.00', st: '49.00', vi: '47.50', hi: '19.75', ld: '49.75', de: '9.50' },
                          { year: '2023', gen: '59.25', obc: '59.25', ews: '59.25', sc: '53.00', st: '47.50', vi: '48.25', hi: '22.75', ld: '47.50', de: '4.50' },
                          { year: '2022', gen: '59.50', obc: '58.25', ews: '59.50', sc: '52.50', st: '47.75', vi: '50.50', hi: '21.50', ld: '46.25', de: '0.00' },
                          { year: '2021', gen: '63.00', obc: '61.25', ews: '62.75', sc: '54.75', st: '49.25', vi: '—', hi: '—', ld: '—', de: '—' },
                          { year: '2020', gen: '58.50', obc: '56.00', ews: '56.75', sc: '50.00', st: '43.75', vi: '—', hi: '—', ld: '—', de: '—' },
                          { year: '2019', gen: '71.00', obc: '68.25', ews: '68.25', sc: '61.75', st: '54.75', vi: '—', hi: '—', ld: '—', de: '—' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`divide-x divide-slate-100 hover:bg-slate-50 transition-colors ${idx % 2 === 1 ? "bg-slate-50/40" : ""}`}>
                            <td className="px-5 py-3 font-extrabold text-slate-800">{row.year}</td>
                            <td className="px-3 py-3 text-slate-900 font-extrabold">{row.gen}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.obc}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.ews}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.sc}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.st}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.vi}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.hi}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.ld}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold text-right">{row.de}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Highest Prelims cut off in this range: <strong>2019 (GEN: 71)</strong> · Lowest: <strong>2023/2022 (GEN: ~59.25)</strong>
                  </span>
                </div>
              </div>
            </section>

            {/* ── SECTION E: MAINS CUT OFF TREND ── */}
            <section id="mains-trends" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#8B5CF6]" />
                SBI PO Mains Cut Off Trend (2019–2025)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest leading-normal">
                  Out of 250 Total Marks
                </span>

                <div className="border border-purple-200/50 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#4C1D95] text-white font-sans uppercase tracking-wider font-black">
                          <th className="px-5 py-4">Year</th>
                          <th className="px-3 py-4">GEN</th>
                          <th className="px-3 py-4">OBC</th>
                          <th className="px-3 py-4">EWS</th>
                          <th className="px-3 py-4">SC</th>
                          <th className="px-3 py-4">ST</th>
                          <th className="px-3 py-4">VI</th>
                          <th className="px-3 py-4">HI</th>
                          <th className="px-3 py-4">LD</th>
                          <th className="px-3 py-4 text-right">D&E</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-100 font-sans">
                        {[
                          { year: '2025', gen: '75.00', obc: '69.50', ews: '75.00', sc: '62.75', st: '62.51', vi: '62.63', hi: '62.50', ld: '63.51', de: '63.75' },
                          { year: '2024', gen: '87.50', obc: '75.00', ews: '87.50', sc: '75.00', st: '75.00', vi: '75.00', hi: '—', ld: '75.00', de: '—' },
                          { year: '2023', gen: '70.00', obc: '62.25', ews: '70.00', sc: '57.50', st: '57.50', vi: '57.50', hi: '58.00', ld: '57.50', de: '58.25' },
                          { year: '2022', gen: '88.93', obc: '80.96', ews: '84.60', sc: '73.83', st: '66.86', vi: '93.08', hi: '63.10', ld: '80.45', de: '63.25' },
                          { year: '2021', gen: '94.85', obc: '86.54', ews: '90.01', sc: '77.32', st: '75.01', vi: '97.72', hi: '75.77', ld: '75.35', de: '75.17' },
                          { year: '2020', gen: '88.93', obc: '80.96', ews: '84.60', sc: '73.83', st: '66.86', vi: '93.08', hi: '63.10', ld: '80.45', de: '63.25' },
                          { year: '2019', gen: '104.42', obc: '94.28', ews: '100.89', sc: '82.50', st: '77.63', vi: '101.75', hi: '75.36', ld: '86.51', de: '75.14' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`divide-x divide-purple-50 hover:bg-purple-50/20 transition-colors ${idx % 2 === 1 ? "bg-purple-50/10" : ""}`}>
                            <td className="px-5 py-3 font-extrabold text-slate-800">{row.year}</td>
                            <td className="px-3 py-3 text-[#4C1D95] font-extrabold">{row.gen}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.obc}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.ews}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.sc}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.st}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.vi}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.hi}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.ld}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold text-right">{row.de}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/40 border border-amber-200 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    <strong>Note:</strong> Mains cut off has fluctuated sharply year to year — 2021's General cut off (94.85) was nearly 35% higher than 2023's (70). Don't anchor your target score to a single year.
                  </span>
                </div>
              </div>
            </section>

            {/* ── SECTION F: FINAL CUT OFF TREND ── */}
            <section id="final-trends" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Trophy size={20} className="text-[#1B6EB5]" />
                SBI PO Final Cut Off Trend (2019–2025)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest leading-normal">
                  Normalized to 100 total points
                </span>

                <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px] text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-100 text-slate-700 font-sans uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Year</th>
                          <th className="px-3 py-4">GEN</th>
                          <th className="px-3 py-4">OBC</th>
                          <th className="px-3 py-4">EWS</th>
                          <th className="px-3 py-4">SC</th>
                          <th className="px-3 py-4">ST</th>
                          <th className="px-3 py-4">VI</th>
                          <th className="px-3 py-4">HI</th>
                          <th className="px-3 py-4">LD</th>
                          <th className="px-3 py-4 text-right">D&E</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans">
                        {[
                          { year: '2025', gen: '46.79', obc: '41.84', ews: '41.16', sc: '37.84', st: '31.59', vi: '44.95', hi: '36.69', ld: '41.55', de: '34.35' },
                          { year: '2024', gen: '46.24', obc: '40.96', ews: '36.85', sc: '32.50', st: '33.36', vi: '33.63', hi: '—', ld: '42.04', de: '—' },
                          { year: '2023', gen: '44.60', obc: '39.73', ews: '36.03', sc: '37.15', st: '36.45', vi: '29.20', hi: '32.25', ld: '33.68', de: '32.98' },
                          { year: '2022', gen: '48.12', obc: '43.37', ews: '43.01', sc: '40.81', st: '38.42', vi: '39.14', hi: '35.29', ld: '36.90', de: '31.88' },
                          { year: '2021', gen: '53.40', obc: '47.41', ews: '47.94', sc: '44.93', st: '41.55', vi: '49.93', hi: '41.59', ld: '41.64', de: '33.16' },
                          { year: '2020', gen: '51.23', obc: '45.09', ews: '45.35', sc: '44.09', st: '41.87', vi: '51.55', hi: '28.62', ld: '45.27', de: '29.43' },
                          { year: '2019', gen: '54.11', obc: '48.78', ews: '50.13', sc: '45.74', st: '43.90', vi: '52.58', hi: '35.29', ld: '47.11', de: '33.37' }
                        ].map((row, idx) => (
                          <tr key={idx} className={`divide-x divide-slate-100 hover:bg-slate-50 transition-colors ${idx % 2 === 1 ? "bg-slate-50/30" : ""}`}>
                            <td className="px-5 py-3 font-extrabold text-slate-800">{row.year}</td>
                            <td className="px-3 py-3 text-slate-900 font-extrabold">
                              <span className="inline-block bg-blue-50 text-[#1B6EB5] px-1.5 py-0.5 rounded font-black font-mono">
                                {row.gen}
                              </span>
                            </td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.obc}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.ews}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.sc}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.st}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.vi}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.hi}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold">{row.ld}</td>
                            <td className="px-3 py-3 text-slate-500 font-semibold text-right">{row.de}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm font-semibold leading-relaxed m-0 italic">
                  *Final cut off = normalized combination of Mains + Interview/Group Exercise marks, at a 75:25 weightage.
                </p>
              </div>
            </section>

            {/* ── SECTION G: INTERVIEW QUALIFYING MARKS ── */}
            <section id="interview-marks" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Award size={20} className="text-emerald-500" />
                SBI PO Interview & GE Qualifying Marks
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  Unlike other components, the Interview & Group Exercise qualifying benchmarks have remained flat across years. This stage is qualifying in nature rather than merit-ranked:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-5 space-y-2 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">GEN / EWS Category</span>
                      <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">Qualifying Target Marks</div>
                    </div>
                    <div className="pt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-black text-emerald-700">20.00</span>
                      <span className="text-xs font-bold text-slate-500">out of 50</span>
                    </div>
                  </div>

                  <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-5 space-y-2 hover:border-slate-350 hover:bg-slate-50 transition-all flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">SC / ST / OBC / PwBD</span>
                      <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">Qualifying Target Marks</div>
                    </div>
                    <div className="pt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-700">17.50</span>
                      <span className="text-xs font-bold text-slate-500">out of 50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/30 border border-blue-150 rounded-2xl p-4.5 flex gap-3 items-start">
                  <Info size={18} className="text-[#1B6EB5] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed m-0">
                    <strong>Note:</strong> Phase III qualifying score is mandatory. If you fail to score the category-minimum here, you will be disqualified from the final merit list, even if your written Mains score was exceptionally high.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION H: FACTORS AFFECTING CUT OFF ── */}
            <section id="affecting-factors" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                Factors Affecting SBI PO Cut Off
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Category-wise vacancy',
                      desc: 'More vacancies in a category generally means a relatively lower cut off, and vice versa.'
                    },
                    {
                      title: 'Exam difficulty level',
                      desc: 'Varies across shifts and is adjusted for through normalization.'
                    },
                    {
                      title: 'Number of candidates appearing',
                      desc: 'Higher competition in a shift/category can push cut offs up.'
                    },
                    {
                      title: 'Normalization process',
                      desc: 'SBI normalizes scores across shifts to account for difficulty variation before applying cut offs.'
                    }
                  ].map((factor, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 sm:p-6 space-y-1">
                      <span className="text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest block">{`Factor 0${idx + 1}`}</span>
                      <div className="font-extrabold text-slate-800 text-sm leading-tight m-0">{factor.title}</div>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed pt-1.5 m-0">{factor.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION I: NO STATE-WISE CUT OFF ── */}
            <section id="state-policy" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Globe size={20} className="text-[#1B6EB5]" />
                Why There's No State-Wise SBI PO Cut Off
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  A common search query among bank exam candidates is state-wise score allocations. SBI PO has a different structure:
                </p>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-2xs shrink-0">
                    <Globe className="text-[#1B6EB5]" size={28} />
                  </div>
                  <div className="space-y-1">
                    <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">
                      Pure Nationwide Merit Selection
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed m-0">
                      SBI PO is a pure nationwide recruitment with no state-wise vacancy allocation — unlike some state-level bank exams. Because there's no state-wise vacancy split, SBI does not release state-wise cut off data; only category-wise cut off (UR/SC/ST/OBC/EWS/PwBD) is published.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION J: HOW TO CHECK OFFICIAL CUT OFF ── */}
            <section id="how-to-check" className="scroll-mt-20 space-y-4 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ListTodo size={20} className="text-[#1B6EB5]" />
                How to Check SBI PO Official Cut Off
              </h2>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                {/* Vertical timeline steps */}
                <div className="relative space-y-6 border-l-2 border-dashed border-blue-200 ml-4 py-1.5">
                  {[
                    { step: 'Step 1', title: 'Visit SBI Careers Portal', desc: 'Visit the official SBI website and navigate to the Careers section.' },
                    { step: 'Step 2', title: 'Find Current Openings', desc: 'Go to the "Recent Recruitments" or "Current Openings" tab.' },
                    { step: 'Step 3', title: 'Locate PO Cut Off Link', desc: 'Find and click the SBI PO Cut Off 2026 link (released after each stage\'s result).' },
                    { step: 'Step 4', title: 'Identify Category Target', desc: 'The cut off PDF opens — check your category\'s qualifying marks.' },
                    { step: 'Step 5', title: 'Save for Reference', desc: 'Download the PDF for reference during practice target calibrations.' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-6 sm:pl-8">
                      {/* Custom timeline bullet */}
                      <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm flex items-center justify-center font-mono text-[9px] font-black text-white shrink-0" />
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest">{item.step}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">{item.title}</div>
                        <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed pt-1 m-0">{item.desc}</p>
                      </div>
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
            <QuickNavigation exam={exam} activeSlug="cut-off" />

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
