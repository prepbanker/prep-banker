// PATH: components/sections/exams/SBIPOEligibilityPage.tsx
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
  Globe
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOEligibilityPage() {
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
            <span className="text-white/80">Eligibility</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                As Per Official Notification
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Eligibility Criteria 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Age Limit, Qualification, Nationality & Number of Attempts
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Check every eligibility condition before you apply — age relaxation, attempt limits, and qualification rules explained clearly. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/sbi-po/notification"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline"
                  >
                    Check SBI PO Notification
                  </Link>
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    Attempt Free Mock Test
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>How does Phase III work?</span>
                  <Link href="/sbi-po/selection-process" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check Selection Process <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Official Requirements
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Updated for 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-emerald-400" />
                  Category-Wise Relaxation
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Age Limit</div>
                <div className="text-base sm:text-lg font-black text-white">21–30 Yrs</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Qualification</div>
                <div className="text-base sm:text-lg font-black text-white font-sans">Graduation</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Max Attempts (UR/OBC)</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">6 / 9</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Nationality</div>
                <div className="text-base sm:text-lg font-black text-white">Indian Citizen</div>
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
                To be eligible for SBI PO 2026, a candidate must be an Indian citizen (or fall under specific eligible categories from Nepal, Bhutan, or as a person of Indian origin), be between 21 and 30 years of age as on 1 April 2026, and hold a graduation degree in any discipline from a recognised university as on 30 September 2026. Age relaxation is available for reserved categories, ranging from 3 years for OBC to 15 years for PwBD (SC/ST) candidates. The maximum number of attempts is 6 for General/EWS and 9 for OBC/PwBD (General/OBC), with no restriction for SC/ST candidates.
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
                    { id: 'eligibility-overview', text: 'Eligibility Criteria Overview' },
                    { id: 'nationality-criteria', text: 'Nationality Requirements' },
                    { id: 'age-limit', text: 'Age Limits & Relaxation' },
                    { id: 'educational-qualification', text: 'Educational Qualifications' },
                    { id: 'attempt-limits', text: 'Maximum Attempts Count' },
                    { id: 'pwbd-disability', text: 'PwBD Disability Categories' },
                    { id: 'calculate-percentage', text: 'How to Calculate Graduation %' },
                    { id: 'common-mistakes', text: 'Common Mistakes to Avoid' },
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

            {/* ── SECTION B: OVERVIEW GRID ── */}
            <section id="eligibility-overview" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                SBI PO Eligibility Criteria 2026: Overview
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                {/* Visual Grid: Cells with left-border colors and icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { criteria: 'Nationality Requirements', val: 'Indian Citizen', detail: 'Specific categories from Nepal, Bhutan, or Tibetan refugees eligible under Gov conditions.', icon: <Globe size={16} className="text-blue-600" />, border: 'border-l-blue-500 bg-blue-50/10' },
                    { criteria: 'Official Age Limit', val: '21 to 30 Years', detail: 'Measured strictly as on 1 April 2026. Relaxation limits apply category-wise.', icon: <Calendar size={16} className="text-amber-600" />, border: 'border-l-amber-500 bg-amber-50/10' },
                    { criteria: 'Educational Qualification', val: 'Graduation Degree', detail: 'Must be completed on or before 30 September 2026. Final year students allowed.', icon: <GraduationCap size={16} className="text-emerald-600" />, border: 'border-l-emerald-500 bg-emerald-50/10' },
                    { criteria: 'Attempt Limit', val: '6 (Gen) / 9 (OBC)', detail: 'Only Mains exam counts. SC/ST candidates face no restrictions.', icon: <Sliders size={16} className="text-indigo-600" />, border: 'border-l-indigo-500 bg-indigo-50/10' },
                    { criteria: 'Prior Experience Required', val: 'None Required', detail: 'Fresh graduates are fully eligible. No professional training required.', icon: <Briefcase size={16} className="text-slate-600" />, border: 'border-l-slate-500 bg-slate-50/10' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-200 border-l-4 rounded-2xl p-5 space-y-3 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between " + item.border}>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-[10px] font-black text-slate-455 uppercase tracking-widest">Parameter {idx + 1}</span>
                        </div>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight pt-1">{item.criteria}</div>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">{item.detail}</p>
                      </div>
                      <div className="text-xs font-black text-slate-800 border-t border-slate-200/50 pt-2 flex justify-between items-center">
                        <span>Required Status:</span>
                        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">{item.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION C: NATIONALITY CRITERIA ── */}
            <section id="nationality-criteria" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Globe size={20} className="text-[#1B6EB5]" />
                SBI PO Nationality Criteria
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  A candidate applying for the SBI PO recruitment cycle must satisfy one of the following nationality categories:
                </p>

                {/* Left Border Indigo Stack with Globe Icons */}
                <div className="space-y-3">
                  {[
                    { title: 'Citizen of India', note: 'Standard native citizenship requirements apply.' },
                    { title: 'Subject of Nepal or Bhutan', note: 'Must possess an eligibility certificate issued by the Government of India.' },
                    { title: 'Tibetan Refugee (Pre-1962)', note: 'Must have arrived before 1 January 1962 with the intention of permanent settlement in India.' },
                    { title: 'Person of Indian Origin (PIO) Migrant', note: 'Migrated from Pakistan, Burma, Sri Lanka, Vietnam, or specified East African countries with the intention of permanent settlement.' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 border-l-4 border-l-indigo-600 p-5 sm:p-6 rounded-2xl bg-slate-50/40 flex items-start gap-3.5 hover:border-slate-350 transition-all">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe size={14} className="text-indigo-600" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Group {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.title}</div>
                        <span className="block text-xs text-slate-500 font-semibold">{item.note}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Note:</strong> Non-Indian citizen candidates must produce their Government of India eligibility certificate during documentation checks before final selection.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION D: AGE LIMIT & RELAXATION ── */}
            <section id="age-limit" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Calendar size={20} className="text-[#1B6EB5]" />
                SBI PO Age Limit 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                {/* Large digital boundary dashboard card */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="space-y-1 text-center md:text-left">
                    <span className="inline-block px-2.5 py-1 bg-white/10 rounded-lg text-xs font-black text-amber-400 uppercase tracking-wider">
                      Target Age Range
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black">21 to 30 Years Old</h3>
                    <p className="text-xs text-white/60 font-semibold">Strictly measured as of 1 April 2026</p>
                  </div>
                  <div className="w-full md:w-auto px-5 py-3.5 bg-white/5 border border-white/15 rounded-2xl text-center md:text-left">
                    <span className="block text-[10px] font-black text-white/40 uppercase tracking-widest">Date of Birth Boundaries</span>
                    <span className="block text-sm sm:text-base font-extrabold mt-0.5">2 April 1996 — 1 April 2005</span>
                    <span className="block text-[10px] text-white/50 font-semibold mt-0.5">(Both Dates Inclusive)</span>
                  </div>
                </div>

                {/* Age Relaxation: Grid of Badges */}
                <div className="space-y-4">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Age Relaxation by Category</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { category: 'OBC (Non-Creamy Layer)', relaxation: '+3', maxAge: '33 Years max' },
                      { category: 'SC / ST', relaxation: '+5', maxAge: '35 Years max' },
                      { category: 'Ex-Servicemen', relaxation: '+5', maxAge: '35 Years max' },
                      { category: 'PwBD (General/EWS)', relaxation: '+10', maxAge: '40 Years max' },
                      { category: 'PwBD (OBC)', relaxation: '+13', maxAge: '43 Years max' },
                      { category: 'PwBD (SC/ST)', relaxation: '+15', maxAge: '45 Years max' }
                    ].map((item, idx) => (
                      <div key={idx} className="border border-slate-150 p-5 sm:p-6 rounded-2xl bg-slate-50/20 flex items-center gap-4 hover:border-slate-300 transition-all">
                        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex flex-col items-center justify-center shrink-0">
                          <span className="text-[#1B6EB5] font-black text-base leading-none">{item.relaxation}</span>
                          <span className="text-[8px] font-black text-[#1B6EB5]/70 uppercase tracking-wider mt-0.5">Yrs</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">{item.category}</div>
                          <span className="block text-[10px] text-slate-500 font-bold">{item.maxAge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION E: EDUCATIONAL QUALIFICATION ── */}
            <section id="educational-qualification" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <GraduationCap size={20} className="text-[#1B6EB5]" />
                SBI PO Educational Qualification 2026 (As on 30.09.2026)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                {/* Side-by-side split layout: Summary on left, Details on right */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start divide-y md:divide-y-0 md:divide-x divide-slate-150">
                  <div className="space-y-3 pb-4 md:pb-0 md:pr-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <GraduationCap size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-sm">Graduation Status</div>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-0.5">
                        Candidates from any discipline are eligible. Final year students qualify to apply.
                      </p>
                    </div>
                    <span className="inline-flex px-2.5 py-1 rounded-md bg-emerald-150 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                      Deadline: 30.09.2026
                    </span>
                  </div>

                  <div className="space-y-4 pt-4 md:pt-0 md:pl-6">
                    {[
                      { title: "Degree Standard", text: "Must hold a graduation degree in any discipline from a recognised university, or an equivalent qualification recognised by the Central Government." },
                      { title: "Final Year Provision", text: "Final-year/semester students can apply provisionally, but must produce proof of graduation on or before 30.09.2026 if called for interview." },
                      { title: "Integrated Dual Degree (IDD)", text: "Candidates with an Integrated Dual Degree (IDD) must have a passing date on or before 30.09.2026." },
                      { title: "Professional Streams Allowed", text: "Candidates holding Medical, Engineering, Chartered Accountancy (CA), or Cost Accountancy qualifications are fully eligible." },
                      { title: "No Experience Mandate", text: "No prior work experience required — fresh graduates are eligible to apply." }
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="block text-xs font-black text-slate-900">{rule.title}</span>
                          <span className="block text-xs sm:text-sm text-slate-655 font-semibold leading-normal">{rule.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION F: NUMBER OF ATTEMPTS ── */}
            <section id="attempt-limits" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                SBI PO Number of Attempts 2026 (Revised)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                {/* Horizontal attempts circle blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    { category: 'General / EWS', limit: '6', desc: 'Applies to open category candidates' },
                    { category: 'OBC / PwBD (Gen-OBC)', limit: '9', desc: 'OBC layer & Gen-OBC PwBD' },
                    { category: 'SC / ST (with PwBD)', limit: '∞', desc: 'Unlimited attempts until age ceiling' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/30 flex flex-col items-center space-y-3 hover:border-slate-350 transition-all">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Category {idx + 1}</span>
                      <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-xs">
                        <span className="text-[#1B6EB5] font-black text-2xl leading-none">{item.limit}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.category}</div>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Important Notes */}
                <div className="border-t border-slate-150 pt-5 space-y-3">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest font-sans">Important Attempts Guidelines</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Appearing only in Prelims does not count as a formal attempt.',
                      'Appearing in the Mains exam does count as one attempt.',
                      'If only one written exam was held in a given year (no separate Prelims), appearing in that exam counts as one attempt.'
                    ].map((note, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-rose-50 border border-rose-150 rounded-2xl flex gap-3 items-start">
                  <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-rose-800 leading-relaxed m-0">
                    ⚠️ Verify this against the live official notification PDF — see details regarding attempt limits and confirm correctness against the active circular.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION G: PWBD ELIGIBILITY ── */}
            <section id="pwbd-disability" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Shield size={20} className="text-[#1B6EB5]" />
                SBI PO PwBD Eligibility: Disability Categories
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold m-0">
                  4% of total vacancies are reserved for Persons with Benchmark Disabilities (PwBD). Eligible categories include:
                </p>

                {/* Vibrantly colored category cards with hover scales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { category: 'Locomotor Disability', desc: 'Affects one arm, one leg, or both legs (not arms).', border: 'border-l-blue-500 bg-blue-50/5 hover:scale-101' },
                    { category: 'Visual Impairment', desc: 'Includes blindness and low vision categories.', border: 'border-l-emerald-500 bg-emerald-50/5 hover:scale-101' },
                    { category: 'Hearing Impairment', desc: 'Includes deafness and hard of hearing categories.', border: 'border-l-purple-500 bg-purple-50/5 hover:scale-101' },
                    { category: 'Specific Learning Disability', desc: 'Learning challenges due to specific cognitive conditions.', border: 'border-l-orange-500 bg-orange-50/5 hover:scale-101' },
                    { category: 'Mental Illness', desc: 'Various diagnosed mental health conditions.', border: 'border-l-rose-500 bg-rose-50/5 hover:scale-101' },
                    { category: 'Multiple Disabilities', desc: 'Combination of the above disability categories.', border: 'border-l-indigo-500 bg-indigo-50/5 hover:scale-101' },
                    { category: 'Others', desc: 'Leprosy-cured persons, cerebral palsy, dwarfism, muscular dystrophy, acid attack victims.', border: 'border-l-slate-500 bg-slate-50/5 hover:scale-101' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-1.5 transition-all duration-200 " + item.border}>
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Category {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{item.category}</div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed pt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50/50 border border-blue-150 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-normal">
                    Review category-wise reservation allotments and PwBD vacancy splits:
                  </span>
                  <Link
                    href="/sbi-po/vacancy"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B6EB5] hover:bg-[#155A94] text-white font-extrabold text-xs shadow-md no-underline font-sans"
                  >
                    View Vacancy Split
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION H: CALCULATE PERCENTAGE ── */}
            <section id="calculate-percentage" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                How to Calculate SBI PO Eligibility Percentage
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                {/* Chronological vertical timeline track with milestones */}
                <div className="relative pl-8 space-y-6 border-l-2 border-dashed border-blue-200 ml-4 py-2">
                  {[
                    { title: "Below 60% is Eligible", desc: "Candidates with a percentage below 60% are still eligible to apply. No minimum aggregate is required." },
                    { title: "No Rounding Rules", desc: "Percentage is not rounded up — 59.99% is treated as less than 60%. Enter your actual score." },
                    { title: "Two Decimal Places Accuracy", desc: "Enter your percentage to two decimal places based on your actual marks — don't round off." },
                    { title: "Official CGPA/OGPA Conversion", desc: "CGPA/OGPA holders must convert to percentage using their university's official conversion formula and present certificate proof if interviewed." },
                    { title: "Manual Aggregation Steps", desc: "To calculate manually: add marks from all subjects across all semesters/years (including optional/honours subjects if part of the course), then divide by total maximum marks." }
                  ].map((step, idx) => (
                    <div key={idx} className="relative space-y-1">
                      {/* Step milestone dot */}
                      <span className="absolute -left-[45px] w-6 h-6 rounded-full bg-blue-50 border-2 border-[#1B6EB5] flex items-center justify-center font-extrabold text-[#1B6EB5] text-xs shadow-2xs">
                        {idx + 1}
                      </span>
                      <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">{step.title}</div>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION I: COMMON MISTAKES ── */}
            <section id="common-mistakes" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <AlertTriangle size={20} className="text-[#1B6EB5]" />
                Common Mistakes to Avoid in SBI PO Eligibility
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                {/* Mistake vs Solution layout */}
                <div className="space-y-4">
                  {[
                    { title: "Wrong age calculation", desc: "Always check the exact cut-off date in the official notification, not just the year.", correction: "Verify that your birthday lies precisely between 2 April 1996 and 1 April 2005 inclusive." },
                    { title: "No proof of qualification", desc: "Even if your degree is complete, you need the official marksheet/certificate ready.", correction: "Ensure your university issues the final passing certificate dated on or before 30 September 2026." },
                    { title: "Exceeding attempt limits", desc: "Track your attempts carefully; appearing in Mains counts, appearing only in Prelims does not.", correction: "Only count the recruitment years where you actually sat for the Mains Objective/Descriptive paper." },
                    { title: "Missing nationality certificate", desc: "Candidates under Nepal/Bhutan/Tibetan refugee/PIO categories must have the Government of India certificate ready.", correction: "Apply and secure the GoI eligibility certificate before completing the online SBI application form." }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                      <div className="p-4 bg-rose-50/30 border-b border-slate-100 flex gap-3 items-start">
                        <AlertTriangle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-extrabold text-slate-800 text-sm">{item.title}</span>
                          <span className="block text-xs sm:text-sm text-slate-500 font-semibold leading-normal mt-0.5">{item.desc}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-emerald-50/10 flex gap-3 items-start">
                        <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-black text-slate-900">Corrective Action</span>
                          <span className="block text-xs sm:text-sm text-slate-655 font-semibold leading-normal mt-0.5">{item.correction}</span>
                        </div>
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
                  { q: 'What is the age limit for SBI PO 2026?', a: 'Candidates must be between 21 and 30 years of age as on 1 April 2026.' },
                  { q: 'What is the educational qualification required for SBI PO 2026?', a: 'A graduation degree in any discipline from a recognised university, as on 30 September 2026.' },
                  { q: 'How many attempts are allowed for SBI PO General category?', a: 'General/EWS candidates are allowed a maximum of 6 attempts.' },
                  { q: 'Is there a limit on attempts for SC/ST candidates in SBI PO?', a: 'No, there is no restriction on the number of attempts for SC/ST candidates.' },
                  { q: 'Can final-year students apply for SBI PO 2026?', a: 'Yes, final-year/semester students can apply provisionally, but must provide proof of graduation by 30 September 2026 if called for interview.' },
                  { q: 'What is the age relaxation for OBC candidates in SBI PO?', a: 'OBC (Non-Creamy Layer) candidates get an age relaxation of 3 years.' },
                  { q: 'Is prior work experience required for SBI PO?', a: 'No, SBI PO has no experience requirement — freshers with a graduation degree are fully eligible.' },
                  { q: 'Does appearing in SBI PO Prelims count as an attempt?', a: 'No, appearing only in the Preliminary exam does not count as an attempt; appearing in the Mains exam does.' },
                  { q: 'Is a candidate below 60% graduation marks eligible for SBI PO?', a: 'Yes, candidates with a percentage below 60% are still eligible to apply.' },
                  { q: 'What nationality is required to apply for SBI PO?', a: 'Candidates must be Indian citizens, or fall under specific eligible categories such as subjects of Nepal/Bhutan, Tibetan refugees (pre-1962), or persons of Indian origin from specified countries, with a Government of India eligibility certificate.' }
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
            <QuickNavigation exam={exam} activeSlug="eligibility" />

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
