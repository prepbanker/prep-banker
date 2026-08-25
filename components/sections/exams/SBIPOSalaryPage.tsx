// PATH: components/sections/exams/SBIPOSalaryPage.tsx
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
  Scale
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOSalaryPage() {
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
            <span className="text-white/80">Salary</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                Revised for 2026
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Salary 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Basic Pay ₹48,480 | Annual CTC ₹21.97 Lakh
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Complete breakdown of pay scale, allowances, deductions, and career growth for a Probationary Officer at SBI. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
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
                    href="/sbi-po/eligibility"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    Check Eligibility
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>How are officers recruited?</span>
                  <Link href="/sbi-po/selection-process" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check Selection Process <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Official Pay Scale
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Updated for 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-emerald-400" />
                  Full Allowance Breakdown
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Basic Pay</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">₹48,480</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Annual CTC</div>
                <div className="text-base sm:text-lg font-black text-white">₹21.97 L</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Grade</div>
                <div className="text-base sm:text-lg font-black text-white">JMGS-I</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Probation</div>
                <div className="text-base sm:text-lg font-black text-white">2 Years</div>
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
                As per the official SBI PO 2026 notification, the starting basic pay for an SBI Probationary Officer is ₹48,480 (including 4 advance increments), in the pay scale of ₹48,480–2000/7–62,480–2340/2–67,160–2680/7–85,920, applicable to Junior Management Grade Scale-I (JMGS-I). SBI has officially stated the approximate annual CTC at the Mumbai centre is ₹21.97 Lakh, up from ₹20.43 Lakh the previous year. Along with basic pay, SBI POs receive Dearness Allowance, House Rent Allowance/Lease Accommodation, City Compensatory Allowance, medical benefits, and multiple other perks.
              </p>
            </section>

            {/* Actionable Warning/Notice block for Salary verification */}
            <section className="p-4 bg-rose-50 border border-rose-150 rounded-2xl flex gap-3 items-start font-sans">
              <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-rose-800 leading-relaxed m-0">
                <strong>Attention:</strong> Always cross-reference starting pay scales with the live official notifications circular. While basic pay scales are revised periodically under bipartite settlements, posting city allowances significantly affect final monthly CTC numbers.
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
                    { id: 'salary-highlights', text: 'Salary Structure Highlights' },
                    { id: 'pay-progression', text: 'Official Pay Scale Progression' },
                    { id: 'comparison', text: 'SBI PO 2025 vs 2026' },
                    { id: 'components', text: 'Detailed Salary Components' },
                    { id: 'deductions', text: 'Monthly Deductions Structure' },
                    { id: 'perks', text: 'Allowances & Perks (Beyond Pay)' },
                    { id: 'bond-probation', text: 'Service Bond & Probation rules' },
                    { id: 'job-profile', text: 'Probationary Officer Job Profile' },
                    { id: 'career-growth', text: 'Promotions & Career Escalator' },
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

            {/* ── SECTION B: SALARY HIGHLIGHTS (Specification List) ── */}
            <section id="salary-highlights" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Coins size={20} className="text-[#1B6EB5]" />
                SBI PO Salary 2026: Key Highlights
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                <div className="divide-y divide-slate-100 border border-slate-150 rounded-2xl overflow-hidden bg-slate-50/20">
                  {[
                    { label: 'Post Name', value: 'Probationary Officer (PO)' },
                    { label: 'Grade Cadre', value: 'Junior Management Grade Scale-I (JMGS-I)' },
                    { label: 'Initial Basic Pay', value: '₹48,480 (with 4 advance increments)' },
                    { label: 'Applicable Pay Scale', value: '₹48,480–2000/7–62,480–2340/2–67,160–2680/7–85,920' },
                    { label: 'Approximate Annual CTC', value: '₹21.97 Lakh (Mumbai centre benchmark)' },
                    { label: 'Training Probation', value: '2 Years' },
                    { label: 'Service Security Bond', value: '₹2 Lakh, minimum 3 years\' service guarantee' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3.5 px-5 gap-1.5 hover:bg-slate-50 transition-all">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                      <span className="text-sm font-extrabold text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION C: PAY SCALE PROGRESSION (Vertical Scale Steps) ── */}
            <section id="pay-progression" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                SBI PO Official Pay Scale Progression
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 items-start divide-y md:divide-y-0 md:divide-x divide-slate-150">
                  {/* Left Column: Dark Formula Badge */}
                  <div className="space-y-4 pb-4 md:pb-0 md:pr-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs">
                      <Coins size={24} />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-sm">Pay Scale Formula</div>
                      <p className="text-[11px] text-slate-500 font-bold leading-relaxed mt-0.5 uppercase tracking-wider">
                        JMGS-I Official Grade
                      </p>
                      <span className="block text-sm font-extrabold text-[#1B6EB5] mt-1.5 leading-normal">
                        ₹48,480 – ₹85,920
                      </span>
                    </div>
                    <span className="inline-flex px-2.5 py-1 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider">
                      4 Advance Increments
                    </span>
                  </div>

                  {/* Right Column: Glassmorphism step timeline block */}
                  <div className="space-y-4 pt-4 md:pt-0 md:pl-6">
                    {[
                      { step: 'Stage 01', stage: 'Initial Join', pay: '₹48,480', note: 'Allotted during probation start with advance increments.', border: 'border-l-blue-500 bg-blue-50/5 text-[#1B6EB5]' },
                      { step: 'Stage 02', stage: 'After 7 increments', pay: '₹62,480', note: 'Progressive annual increments of ₹2,000.', border: 'border-l-indigo-500 bg-indigo-50/5 text-indigo-600' },
                      { step: 'Stage 03', stage: 'After next 2 increments', pay: '₹67,160', note: 'Higher scale increments of ₹2,340.', border: 'border-l-purple-500 bg-purple-50/5 text-purple-600' },
                      { step: 'Stage 04', stage: 'After next 7 increments', pay: '₹85,920', note: 'Maximum scale cap of basic pay increments at ₹2,680.', border: 'border-l-emerald-500 bg-emerald-50/5 text-emerald-600' }
                    ].map((item, idx) => (
                      <div key={idx} className={"border border-slate-150 border-l-4 rounded-xl py-3.5 pr-5 pl-6 sm:pr-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-slate-350 transition-all " + item.border}>
                        <div className="space-y-0.5">
                          <span className="inline-block px-1.5 py-0.5 rounded bg-white border border-slate-200/60 text-[9px] font-black uppercase tracking-wider text-slate-500 font-sans">
                            {item.step}
                          </span>
                          <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.stage}</div>
                          <span className="block text-xs text-slate-500 font-semibold mt-0.5">{item.note}</span>
                        </div>
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-extrabold text-xs sm:text-sm self-start sm:self-center shadow-2xs font-sans">
                          {item.pay} / month
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start mt-6">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Note:</strong> This represents the basic pay progression. Your actual monthly salary growth will also depend on quarterly DA revisions, promotion escalations, and city category status.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION D: 2025 VS 2026 COMPARISON (Metric Cards) ── */}
            <section id="comparison" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <TrendingUp size={20} className="text-[#1B6EB5]" />
                SBI PO 2025 vs 2026: What Changed
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Card 1: Annual CTC comparison */}
                  <div className="border border-blue-150 border-l-4 border-l-blue-500 bg-blue-50/10 p-5 rounded-2xl space-y-3">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Annual Package CTC</span>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Year-on-Year Growth</h3>
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-200/50 pt-2.5">
                      <div>
                        <span className="block text-[10px] text-slate-500 font-semibold uppercase">2025 CTC</span>
                        <span className="block text-sm sm:text-base font-extrabold text-slate-700">₹20.43 Lakh</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#1B6EB5] font-black uppercase">2026 CTC</span>
                        <span className="block text-sm sm:text-base font-extrabold text-[#1B6EB5]">₹21.97 Lakh</span>
                      </div>
                    </div>
                    <div className="text-xs font-black text-emerald-600 flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1 w-max">
                      <TrendingUp size={12} />
                      <span>+₹1.54 Lakh / Year Difference</span>
                    </div>
                  </div>

                  {/* Card 2: Monthly CTC comparison */}
                  <div className="border border-amber-200 border-l-4 border-l-amber-500 bg-amber-50/10 p-5 rounded-2xl space-y-3">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Package CTC</span>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">Monthly Average CTC</h3>
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-200/50 pt-2.5">
                      <div>
                        <span className="block text-[10px] text-slate-500 font-semibold uppercase">2025 Monthly</span>
                        <span className="block text-sm sm:text-base font-extrabold text-slate-700">₹1.70 Lakh</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-amber-600 font-black uppercase">2026 Monthly</span>
                        <span className="block text-sm sm:text-base font-extrabold text-amber-700">₹1.83 Lakh</span>
                      </div>
                    </div>
                    <div className="text-xs font-black text-emerald-600 flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1 w-max">
                      <TrendingUp size={12} />
                      <span>+~₹13,000 / Month Difference</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION E: SALARY COMPONENTS (Grid Cards) ── */}
            <section id="components" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Layers size={20} className="text-[#1B6EB5]" />
                SBI PO Salary Components
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Category 1: Core Earnings */}
                  <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/20 space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-200/60 pb-3">
                      <div className="w-6.5 h-6.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                        <Coins size={14} className="text-[#1B6EB5]" />
                      </div>
                      <span className="font-extrabold text-slate-900 text-sm">Core Earnings</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { component: 'Basic Pay', desc: 'Fixed base scale; used as index for allowance calculations.' },
                        { component: 'Dearness Allowance (DA)', desc: 'Revised quarterly based on central inflation index.' },
                        { component: 'Special Allowance', desc: 'Fixed components paid over and above basic scales.' }
                      ].map((item, idx) => (
                        <div key={idx} className="border border-slate-150 border-l-4 border-l-blue-500 py-3 pr-3.5 pl-5 rounded-xl bg-white space-y-1 hover:border-slate-350 transition-all duration-200 font-sans">
                          <div className="font-extrabold text-slate-800 text-xs leading-tight m-0">{item.component}</div>
                          <p className="text-slate-500 text-[11px] font-semibold leading-relaxed m-0">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Allowances & Travel */}
                  <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/20 space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-200/60 pb-3">
                      <div className="w-6.5 h-6.5 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center">
                        <Globe size={14} className="text-purple-600" />
                      </div>
                      <span className="font-extrabold text-slate-900 text-sm">Location & Travel</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { component: 'HRA / Leased Rent', desc: 'Varies by location. Leased accommodation yields higher bounds.' },
                        { component: 'CCA Allowance', desc: 'City Compensatory allowance paid higher in metros.' },
                        { component: 'Travel Reimbursement', desc: 'Monthly fuel/transport reimbursements for official tasks.' }
                      ].map((item, idx) => (
                        <div key={idx} className="border border-slate-150 border-l-4 border-l-purple-500 py-3 pr-3.5 pl-5 rounded-xl bg-white space-y-1 hover:border-slate-350 transition-all duration-200 font-sans">
                          <div className="font-extrabold text-slate-800 text-xs leading-tight m-0">{item.component}</div>
                          <p className="text-slate-500 text-[11px] font-semibold leading-relaxed m-0">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 3: Perks & Career */}
                  <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/20 space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-200/60 pb-3">
                      <div className="w-6.5 h-6.5 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <Award size={14} className="text-emerald-600" />
                      </div>
                      <span className="font-extrabold text-slate-900 text-sm">Perks & Career</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { component: 'Learning Allowance', desc: 'Paid monthly to encourage professional banking courses.' },
                        { component: 'Furniture Allowance', desc: 'One-time staff entitlement for officer residence set-up.' },
                        { component: 'Mobile & Telecoms', desc: 'Monthly allowance to cover telephone and data charges.' }
                      ].map((item, idx) => (
                        <div key={idx} className="border border-slate-150 border-l-4 border-l-emerald-500 py-3 pr-3.5 pl-5 rounded-xl bg-white space-y-1 hover:border-slate-350 transition-all duration-200 font-sans">
                          <div className="font-extrabold text-slate-800 text-xs leading-tight m-0">{item.component}</div>
                          <p className="text-slate-500 text-[11px] font-semibold leading-relaxed m-0">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* ── SECTION F: DEDUCTIONS (Red Highlight Checklist) ── */}
            <section id="deductions" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <TrendingDown size={20} className="text-[#1B6EB5]" />
                SBI PO Monthly Deductions (Approximate)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm m-0 leading-relaxed font-semibold">
                  While gross pay is high, several standard components are deducted monthly:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { type: 'Provident Fund (PF)', desc: 'Standard contribution towards long-term savings schemes.' },
                    { type: 'Income Tax (TDS)', desc: 'Deducted at source based on applicable income tax slabs.' },
                    { type: 'Professional Tax (PT)', desc: 'State-level mandatory deductions (varies by state).' },
                    { type: 'Contributory Pension (NPS)', desc: 'Retirement corpus matching fund contribution.' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 border-l-4 border-l-rose-500 rounded-2xl py-4 pr-4 pl-6 bg-slate-50/20 flex items-start gap-3 hover:border-slate-350 transition-all">
                      <div className="w-6.5 h-6.5 rounded bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                        <TrendingDown size={13} className="text-rose-500" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Deduction {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.type}</div>
                        <span className="block text-xs text-slate-500 font-semibold">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#1B6EB5] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed m-0">
                    <strong>Note:</strong> Standard deductions (PF, NPS) are claimable under tax exemptions during annual ITR filing and count directly toward your long-term retirement security.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION G: ALLOWANCES & PERKS (Beyond Salary - Two-Column Grid) ── */}
            <section id="perks" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Heart size={20} className="text-[#1B6EB5]" />
                SBI PO Allowances & Perks (Beyond Salary)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm m-0 leading-relaxed font-semibold">
                  SBI Probationary Officers enjoy several premium benefits that make banking a highly attractive career path:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { benefit: 'Medical Benefits', detail: 'Comprehensive coverage for self; partial coverage for family dependents.' },
                    { benefit: 'Pension Matching', detail: 'NPS scheme matching with standard employer contribution.' },
                    { benefit: 'Provident Fund', detail: 'Contributory PF benefits with compound interest.' },
                    { benefit: 'Leave Fare Concession', detail: 'Leave travel allowance for holidays across India.' },
                    { benefit: 'Lease Accommodation', detail: 'Premium lease limits in metro cities instead of standard HRA.' },
                    { benefit: 'Group Insurance', detail: 'Bank-sponsored insurance policies at concessional premiums.' },
                    { benefit: 'Festival Advances', detail: 'Interest-free financial advances during calendar festivals.' },
                    { benefit: 'Publications Reimbursement', detail: 'Monthly allowance for newspapers, books, and magazines.' },
                    { benefit: 'Concessional Staff Loans', detail: 'Home, car, and personal loans at highly concessional interest rates.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start p-4 bg-slate-50/30 border border-slate-150 rounded-2xl hover:border-slate-300 transition-all">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-emerald-600" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.benefit}</div>
                        <span className="block text-xs text-slate-500 font-semibold leading-normal">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION H: SERVICE BOND & PROBATION (Official Terms Blocks) ── */}
            <section id="bond-probation" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Scale size={20} className="text-[#1B6EB5]" />
                SBI PO Service Bond & Probation Period
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Service Bond Panel */}
                  <div className="border border-rose-150 border-l-4 border-l-rose-500 bg-rose-50/10 py-5 pr-5 pl-6 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-rose-500 uppercase tracking-widest font-sans">Mandatory Bond</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight m-0">Service Bond of ₹2 Lakh</div>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">
                      Candidates must sign a bond to serve the bank for a minimum of 3 years. Resigning before this period requires repaying ₹2,000,000.
                    </p>
                  </div>

                  {/* Probation Panel */}
                  <div className="border border-blue-150 border-l-4 border-l-blue-500 bg-blue-50/10 py-5 pr-5 pl-6 rounded-2xl space-y-2">
                    <span className="block text-[10px] font-black text-[#1B6EB5] uppercase tracking-widest font-sans">Officer Training</span>
                    <div className="font-extrabold text-slate-900 text-base leading-tight m-0">2-Year Probation period</div>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">
                      PO trainees undergo 2 years of probation, receiving full JMGS-I salary and training across departments before formal confirmation checks.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#8B6E30] leading-relaxed m-0">
                    <strong>Evaluation:</strong> Confirmations at the end of probation are contingent on passing internal tests and department feedback reviews.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION I: JOB PROFILE (Duties Cards) ── */}
            <section id="job-profile" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Briefcase size={20} className="text-[#1B6EB5]" />
                SBI PO Job Profile
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <p className="text-slate-655 text-xs sm:text-sm m-0 leading-relaxed font-semibold">
                  A Probationary Officer at SBI is exposed to varied responsibilities during branch operations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Public Relations', task: 'Acting as a Public Relations Officer, handling customer queries and branch concerns.' },
                    { title: 'Staff Supervision', task: 'Supervising clerical staff members and contributing to local decisions.' },
                    { title: 'Verification Duties', task: 'Verifying transactions, cash reserves, and daily ledger reports completed by clerks.' },
                    { title: 'Policy Compliance', task: 'Staying updated on central banking policies and statutory regulatory updates.' },
                    { title: 'Operation Operations', task: 'Managing banking service operations: ATM cards, cheque book issues, and demand drafts.' }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/20 flex flex-col justify-between hover:border-slate-350 transition-all space-y-3">
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Duty {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.title}</div>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed m-0 pt-1.5">{item.task}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION J: CAREER GROWTH (Escalator Ladder) ── */}
            <section id="career-growth" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Award size={20} className="text-[#1B6EB5]" />
                SBI PO Career Growth: Promotion Ladder
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                {/* Promotions Ladder Stack */}
                <div className="space-y-3">
                  {[
                    { rank: 'Probationary Officer', grade: 'JMGS-I', border: 'border-l-[#1B6EB5] bg-blue-50/5' },
                    { rank: 'Deputy Manager / Manager / Chief Manager', grade: 'Middle Management (MMGS)', border: 'border-l-indigo-500 bg-indigo-50/5' },
                    { rank: 'Assistant General Manager', grade: 'Senior Management (SMGS)', border: 'border-l-purple-500 bg-purple-50/5' },
                    { rank: 'Deputy General Manager', grade: 'Top Executive Grade (TEGS)', border: 'border-l-amber-500 bg-amber-50/5' },
                    { rank: 'General Manager & Chief General Manager', grade: 'Top Executive Grade (TEGS)', border: 'border-l-emerald-500 bg-emerald-50/5' },
                    { rank: 'Managing Director & Chairman', grade: 'Highest Positions', border: 'border-l-slate-900 bg-slate-900/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-4 pr-5 pl-6 rounded-2xl flex items-center justify-between gap-4 hover:border-slate-350 transition-all " + item.border}>
                      <div className="space-y-0.5">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Level {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight m-0">{item.rank}</div>
                      </div>
                      <span className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-700 shrink-0 text-center uppercase tracking-wider">
                        {item.grade}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#1B6EB5] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#155A94] leading-relaxed m-0">
                    <strong>Growth Note:</strong> SBI has an accelerated promotion path compared to other public sector banks, with programs for fast-track ranks and international postings.
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
                  { q: 'What is the basic pay of an SBI PO in 2026?', a: 'The starting basic pay of an SBI Probationary Officer is ₹48,480, including 4 advance increments, as per the official notification.' },
                  { q: 'What is the annual CTC of an SBI PO in 2026?', a: 'The approximate annual CTC for an SBI PO at the Mumbai centre is ₹21.97 Lakh, as officially stated by SBI.' },
                  { q: 'What was the SBI PO CTC in 2025 compared to 2026?', a: 'SBI PO CTC increased from ₹20.43 Lakh in 2025 to ₹21.97 Lakh in 2026, a rise of ₹1.54 Lakh per year.' },
                  { q: 'What grade is an SBI PO appointed at?', a: 'An SBI Probationary Officer is appointed in Junior Management Grade Scale-I (JMGS-I).' },
                  { q: 'What is the SBI PO pay scale?', a: 'The official pay scale is ₹48,480–2000/7–62,480–2340/2–67,160–2680/7–85,920.' },
                  { q: 'What is the SBI PO service bond amount?', a: 'Selected candidates sign a service bond of ₹2 lakh, requiring a minimum of 3 years of service with SBI.' },
                  { q: 'How long is the SBI PO probation period?', a: 'The SBI PO probation period is 2 years, during which officers receive full JMGS-I salary while training across branches.' },
                  { q: 'What allowances does an SBI PO receive besides basic pay?', a: 'SBI POs receive Dearness Allowance, House Rent Allowance or Lease Accommodation, City Compensatory Allowance, Special Allowance, Learning Allowance, and Furniture Allowance, among other benefits.' },
                  { q: 'Does SBI PO salary vary by posting location?', a: 'Yes, allowances such as HRA, CCA, and lease accommodation value are generally higher in metro cities and lower in smaller towns.' },
                  { q: 'What is the SBI PO career growth path?', a: 'An SBI PO can progress from Probationary Officer through Deputy Manager, Manager, Chief Manager, Assistant General Manager, Deputy General Manager, General Manager, and up to Chairman, based on performance and experience.' }
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
                        <span className="flex items-center gap-2.5 font-sans">
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
            <QuickNavigation exam={exam} activeSlug="salary" />

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
