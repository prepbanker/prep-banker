// PATH: components/sections/exams/SBIPOVacancyPage.tsx
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
  Download
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOVacancyPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'donut' | 'details'>('donut');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<{ year: string; seats: number; label: string; highlight: boolean; x: number; y: number } | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Section B Vacancy Data
  const categories = [
    { name: 'UR', seats: 588, percent: 39.2, regular: 588, backlog: 0, color: '#1B6EB5', bgClass: 'bg-[#1B6EB5]' },
    { name: 'OBC', seats: 390, percent: 26.0, regular: 390, backlog: 0, color: '#F0B429', bgClass: 'bg-[#F0B429]' },
    { name: 'SC', seats: 234, percent: 15.6, regular: 216, backlog: 18, color: '#E12D39', bgClass: 'bg-[#E12D39]' },
    { name: 'ST', seats: 144, percent: 9.6, regular: 108, backlog: 36, color: '#10B981', bgClass: 'bg-[#10B981]' },
    { name: 'EWS', seats: 144, percent: 9.6, regular: 144, backlog: 0, color: '#8B5CF6', bgClass: 'bg-[#8B5CF6]' }
  ];

  const totalSeats = 1500;
  const regularTotal = 1446;
  const backlogTotal = 54;

  // Donut Graph SVG parameters
  const radius = 60;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  // Year on Year trend data
  const yoyTrend = [
    { year: '2026', seats: 1500, label: 'Current Cycle (Nearly 3x jump!)', highlight: true },
    { year: '2025', seats: 541, label: 'Historical Low', highlight: false },
    { year: '2024', seats: 600, label: 'Dip Period', highlight: false },
    { year: '2023', seats: 2000, label: 'Peak Hiring', highlight: false },
    { year: '2022', seats: 1673, label: 'Standard Cycle', highlight: false },
    { year: '2021', seats: 2056, label: 'High Intake', highlight: false },
    { year: '2020', seats: 2000, label: 'Standard Cycle', highlight: false },
    { year: '2019', seats: 2000, label: 'Standard Cycle', highlight: false },
    { year: '2018', seats: 2000, label: 'Standard Cycle', highlight: false },
    { year: '2017', seats: 2313, label: 'Historical Peak', highlight: false }
  ];

  // 2025 vacancies for comparison reference
  const compare25 = [
    { name: 'UR', seats: 203, change: '+190%' },
    { name: 'OBC', seats: 135, change: '+189%' },
    { name: 'SC', seats: 80, change: '+192%' },
    { name: 'ST', seats: 73, change: '+97%' },
    { name: 'EWS', seats: 50, change: '+188%' }
  ];

  // Chronological array for rendering line chart
  const lineChartData = [...yoyTrend].reverse();

  // SVG calculations
  const svgWidth = 600;
  const svgHeight = 265;
  const paddingX = 50;
  const paddingTop = 60;
  const paddingBottom = 40;
  const chartWidth = svgWidth - paddingX * 2; // 500
  const chartHeight = svgHeight - paddingTop - paddingBottom; // 165
  const maxVal = 2500;

  const points = lineChartData.map((d, i) => {
    const x = paddingX + (i / (lineChartData.length - 1)) * chartWidth;
    const y = svgHeight - paddingBottom - (d.seats / maxVal) * chartHeight;
    return { ...d, x, y };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingBottom} L ${points[0].x} ${svgHeight - paddingBottom} Z`;

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
        {/* Decorative Grid & Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1B6EB5 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F0B429 0%, transparent 70%)' }} />
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
            <span className="text-white/80">Vacancy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            {/* Left Column: Headlines */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#FBBF24] text-xs font-black tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                1,500 Vacancies Announced
              </div>

              {/* Title & Headline */}
              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Vacancy 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/80 leading-normal">
                  1,500 Probationary Officer Posts — Nearly 3x Last Year&apos;s Vacancies
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Released under Advertisement No. CRPD/PO/2026-27/09. Category-wise, PwBD, and backlog breakup below. <span className="text-emerald-450 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              {/* Actions */}
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
                    Check Eligibility Criteria
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>Looking for full dates or patterns?</span>
                  <Link href="/sbi-po/notification" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check SBI PO Notification <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Official SBI Data
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Updated Daily
                </span>
                <span className="flex items-center gap-1">
                  <FileText size={14} className="text-emerald-400" />
                  Category-Wise Breakup
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Total Vacancies</div>
                <div className="text-lg sm:text-xl font-black text-[#FBBF24]">1,500</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Regular Posts</div>
                <div className="text-lg sm:text-xl font-black text-white">1,446</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Backlog Posts</div>
                <div className="text-lg sm:text-xl font-black text-white">54</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">PwBD Reserved</div>
                <div className="text-lg sm:text-xl font-black text-white">61</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Left Column: Content */}
          <main className="space-y-10">

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold">
                The SBI PO Vacancy 2026 stands at 1,500 Probationary Officer posts, announced by the State Bank of India under Advertisement No. CRPD/PO/2026-27/09. Of these, 1,446 are regular vacancies and 54 are backlog vacancies, carried forward from previous recruitment cycles. This is nearly 3 times the vacancy count released in 2025 (541 posts), making 2026 one of the largest SBI PO hiring cycles in recent years. Vacancies are further divided across UR, SC, ST, OBC, and EWS categories, with a separate horizontal reservation of 61 posts for PwBD (Persons with Benchmark Disabilities) candidates.
              </p>
            </section>

            {/* Table of Contents for Navigation */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {[
                    { id: 'breakup', text: 'Category-Wise Breakup' },
                    { id: 'pwbd-reserved', text: 'PwBD Horizontal Breakup' },
                    { id: 'yoy-trends', text: 'Year-on-Year Trend Details' },
                    { id: 'compare-2025', text: 'Vacancy Comparison vs 2025' },
                    { id: 'important-notes', text: 'Important Sourcing Notes' },
                    { id: 'preparation-impact', text: 'Cutoff & Preparation Impact' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-650 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
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

            {/* ── SECTION B: CATEGORY-WISE BREAKUP (Donut Graph + Category list) ── */}
            <section id="breakup" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Award size={20} className="text-[#1B6EB5]" />
                SBI PO Vacancy 2026: Category-Wise Breakup
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                {/* Mode Selector Toggle */}
                <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-6">
                  <button
                    onClick={() => setActiveTab('donut')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${activeTab === 'donut' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Visual Seat Share
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${activeTab === 'details' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Numeric Data Grid
                  </button>
                </div>

                {activeTab === 'donut' ? (
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
                    {/* Left Column: Category detail cards */}
                    <div className="space-y-3">
                      {categories.map((cat, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className={`p-3.5 border rounded-2xl flex items-center justify-between gap-4 transition-all ${hoveredIndex === idx ? 'border-[#1B6EB5] bg-blue-50/15 shadow-xs translate-x-1' : 'border-slate-150 bg-slate-50/50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-3.5 h-3.5 rounded-md ${cat.bgClass} shrink-0`} />
                            <div>
                              <span className="font-extrabold text-slate-850 text-sm sm:text-base">{cat.name} Category</span>
                              <span className="block text-[10px] text-slate-450 font-bold uppercase tracking-wide">
                                Regular: {cat.regular} | Backlog: {cat.backlog > 0 ? cat.backlog : '—'}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="block font-black text-slate-850 text-base">{cat.seats} Seats</span>
                            <span className="block text-[10px] text-slate-400 font-bold">{cat.percent}% allocation</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Column: Donut Graph */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                          {categories.map((cat, idx) => {
                            const strokeDasharray = `${(cat.percent / 100) * circumference} ${circumference}`;
                            const strokeDashoffset = circumference - (accumulatedPercent / 100) * circumference;
                            accumulatedPercent += cat.percent;
                            return (
                              <circle
                                key={idx}
                                r={radius}
                                cx="80"
                                cy="80"
                                fill="transparent"
                                stroke={cat.color}
                                strokeWidth={strokeWidth}
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-300"
                                style={{
                                  opacity: hoveredIndex === null || hoveredIndex === idx ? 1 : 0.35,
                                  strokeWidth: hoveredIndex === idx ? strokeWidth + 2 : strokeWidth
                                }}
                              />
                            );
                          })}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total</span>
                          <span className="text-2xl font-black text-slate-900 leading-tight">1,500</span>
                          <span className="text-[10px] text-slate-500 font-bold leading-none">Vacancies</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold mt-4 block text-center">
                        Hover category cards to isolate seat shares
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm border-collapse min-w-[450px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-3">Category</th>
                          <th className="px-4 py-3">Regular Vacancies</th>
                          <th className="px-4 py-3">Backlog Vacancies</th>
                          <th className="px-4 py-3">Total Vacancies</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-655 font-medium">
                        {categories.map((cat, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3.5 font-bold text-slate-800 flex items-center gap-2">
                              <span className={`w-2.5 h-2.5 rounded-md ${cat.bgClass}`} />
                              {cat.name}
                            </td>
                            <td className="px-4 py-3.5">{cat.regular}</td>
                            <td className="px-4 py-3.5">{cat.backlog > 0 ? cat.backlog : '—'}</td>
                            <td className="px-4 py-3.5 font-bold text-slate-800">{cat.seats}</td>
                          </tr>
                        ))}
                        <tr className="bg-slate-50 font-bold border-t-2 border-slate-200 text-slate-900">
                          <td className="px-4 py-4">Total</td>
                          <td className="px-4 py-4">{regularTotal}</td>
                          <td className="px-4 py-4">{backlogTotal}</td>
                          <td className="px-4 py-4 text-[#1B6EB5]">{totalSeats}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500 leading-relaxed">
                  Vacancies are provisional and may vary depending on the Bank&apos;s actual requirement.
                </div>
              </div>
            </section>

            {/* ── SECTION C: PWBD RESERVATION ── */}
            <section id="pwbd-reserved" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Users size={20} className="text-[#1B6EB5]" />
                SBI PO PwBD Vacancy 2026 (Horizontal Reservation)
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="p-4 bg-blue-50 border border-blue-150 rounded-2xl flex gap-3 items-start">
                  <Info size={18} className="text-[#1B6EB5] shrink-0 mt-0.5" />
                  <p className="text-[#0D1B3E] text-xs sm:text-sm font-semibold leading-relaxed m-0">
                    PwBD vacancies are reserved horizontally — meaning they&apos;re counted within the category totals above, not in addition to them.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { cat: 'VI (Visually Impaired)', regular: 15, backlog: 0, total: 15, desc: 'Visual impairment reservation seats' },
                    { cat: 'HI (Hearing Impaired)', regular: 15, backlog: 1, total: 16, desc: 'Hearing impairment reservation seats' },
                    { cat: 'LD (Locomotor Disability)', regular: 14, backlog: 0, total: 14, desc: 'Orthopedically handicapped disability seats' },
                    { cat: 'D&E (Other Benchmark Disabilities)*', regular: 14, backlog: 2, total: 16, desc: 'Autism, mental illness, multiple disabilities' }
                  ].map((pw, idx) => (
                    <div key={idx} className="p-4 border border-slate-200 rounded-2xl bg-slate-50/30 space-y-2 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start gap-2 border-b border-slate-100 pb-1.5">
                        <span className="font-extrabold text-slate-800 text-sm leading-tight">{pw.cat}</span>
                        <span className="px-2 py-0.5 bg-[#1B6EB5]/10 text-[#1B6EB5] font-black text-[10px] rounded-md shrink-0">{pw.total} Seats</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500 font-semibold">
                        <span>Regular: <strong>{pw.regular}</strong></span>
                        <span>Backlog: <strong>{pw.backlog > 0 ? pw.backlog : '—'}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-slate-450 font-bold leading-normal pt-1.5 border-t border-slate-100">
                  * D&E covers autism spectrum disorder (mild), mental illness, and multiple disabilities under Section 34(i) of the RPWD Act, 2016.
                </p>
              </div>
            </section>

            {/* ── SECTION D: YEAR-ON-YEAR TREND (SVG Line Chart) ── */}
            <section id="yoy-trends" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <TrendingUp size={20} className="text-[#1B6EB5]" />
                SBI PO Vacancy: Year-on-Year Trend
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Why this matters:</strong> The 2026 vacancy count is nearly 3x higher than 2025, reversing a two-year dip and putting this cycle closer to pre-2024 hiring levels — genuinely useful context for aspirants deciding whether this is a strong year to attempt.
                </p>

                {/* SVG Line Chart Widget */}
                <div className="relative border border-slate-150 rounded-2xl bg-slate-50/30 p-4">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Vacancy Line Graph (2017 - 2026)
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">
                      Hover nodes to see vacancies
                    </span>
                  </div>

                  <svg
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="w-full h-auto overflow-visible select-none"
                  >
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1B6EB5" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#1B6EB5" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1B6EB5" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>

                    {/* Y-axis grid lines */}
                    {[500, 1000, 1500, 2000, 2500].map((val, idx) => {
                      const y = svgHeight - paddingBottom - (val / maxVal) * chartHeight;
                      return (
                        <g key={idx} className="opacity-40">
                          <line
                            x1={paddingX}
                            y1={y}
                            x2={svgWidth - paddingX}
                            y2={y}
                            stroke="#CBD5E1"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                          />
                          <text
                            x={paddingX - 10}
                            y={y + 4}
                            textAnchor="end"
                            className="fill-slate-400 font-bold text-[9px]"
                          >
                            {val}
                          </text>
                        </g>
                      );
                    })}

                    {/* Area under line */}
                    <path d={areaD} fill="url(#areaGradient)" />

                    {/* The Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* X-axis ticks (Years) */}
                    {points.map((p, idx) => (
                      <text
                        key={idx}
                        x={p.x}
                        y={svgHeight - paddingBottom + 20}
                        textAnchor="middle"
                        className={`font-black text-[10px] ${p.highlight ? 'fill-[#F59E0B]' : 'fill-slate-400'}`}
                      >
                        {p.year}
                      </text>
                    ))}

                    {/* Interactive Hover Nodes */}
                    {points.map((p, idx) => {
                      const isHovered = hoveredPoint?.year === p.year;
                      return (
                        <g key={idx}>
                          {/* Large invisible catch circle for easier hover on mobile/mouse */}
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r="16"
                            fill="transparent"
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredPoint(p)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />
                          {/* Inner visible circle */}
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r={isHovered ? 7.5 : p.highlight ? 5.5 : 4}
                            className="transition-all duration-150 cursor-pointer"
                            fill={isHovered ? '#FFFFFF' : p.highlight ? '#F59E0B' : '#1B6EB5'}
                            stroke={isHovered ? '#1B6EB5' : p.highlight ? '#FFFFFF' : '#FFFFFF'}
                            strokeWidth={isHovered ? 3.5 : 2}
                            onMouseEnter={() => setHoveredPoint(p)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />
                        </g>
                      );
                    })}

                    {/* SVG Tooltip Group */}
                    {hoveredPoint && (
                      <g transform={`translate(${hoveredPoint.x}, ${hoveredPoint.y - 12})`}>
                        {/* Drop shadow rect */}
                        <rect
                          x="-65"
                          y="-43"
                          width="130"
                          height="44"
                          rx="8"
                          fill="#0F172A"
                          className="opacity-95 shadow-lg"
                        />
                        {/* Triangle pointer */}
                        <polygon points="-6,-1 6,-1 0,3" fill="#0F172A" />
                        {/* Tooltip Texts */}
                        <text
                          x="0"
                          y="-30"
                          textAnchor="middle"
                          fill="#FBBF24"
                          className="font-black text-[9px]"
                        >
                          Year {hoveredPoint.year}
                        </text>
                        <text
                          x="0"
                          y="-18"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          className="font-bold text-[10px]"
                        >
                          {hoveredPoint.seats.toLocaleString()} Vacancies
                        </text>
                        <text
                          x="0"
                          y="-8"
                          textAnchor="middle"
                          fill="#94A3B8"
                          className="font-bold text-[8px]"
                        >
                          {hoveredPoint.label.length > 25 ? hoveredPoint.label.substring(0, 25) + '...' : hoveredPoint.label}
                        </text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </section>

            {/* ── SECTION E: COMPARISON 2026 vs 2025 ── */}
            <section id="compare-2025" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <TrendingUp size={20} className="text-[#1B6EB5]" />
                SBI PO Vacancy Comparison: 2026 vs 2025
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <span className="block text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  Compare the category-wise regular and backlog vacancy breakup for the current 2026 cycle against the previous 2025 recruitment cycle details:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {compare25.map((cat, idx) => {
                    const currentCat = categories.find(c => c.name === cat.name);
                    return (
                      <div key={idx} className="border border-slate-200 rounded-2xl p-4 bg-slate-50/40 text-center space-y-3.5 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all">
                        <span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-black rounded-md uppercase tracking-wider">
                          {cat.name}
                        </span>
                        <div className="space-y-1">
                          <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">2026 seats</span>
                          <span className="block font-black text-slate-900 text-lg">{currentCat?.seats}</span>
                        </div>
                        <div className="border-t border-dashed border-slate-200 pt-2 space-y-1">
                          <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">2025 seats</span>
                          <span className="block font-extrabold text-slate-500 text-sm">{cat.seats}</span>
                        </div>
                        <span className="inline-block text-[9px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md">
                          {cat.change}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200/50 rounded-2xl text-xs text-slate-500 leading-relaxed font-semibold">
                  Note: 2025 vacancy totals (541 seats: 500 regular + 41 backlog) are shown for year-on-year historical comparison only — not the current 2026 recruitment cycle count.
                </div>
              </div>
            </section>

            {/* ── SECTION F: IMPORTANT NOTES ON VACANCY 2026 ── */}
            <section id="important-notes" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Info size={20} className="text-[#1B6EB5]" />
                Important Notes on SBI PO Vacancy 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="space-y-3.5">
                  {[
                    "Vacancy numbers are provisional and subject to change based on the Bank's actual requirement at the time of final allotment.",
                    "OBC vacancies apply only to candidates in the non-creamy layer; creamy-layer OBC candidates must apply under UR category.",
                    "EWS reservation requires a valid Income & Asset Certificate for FY 2025-26, submitted at the time of document verification.",
                    "PwBD reservation is horizontal — a PwBD candidate is also counted within their respective social category (UR/SC/ST/OBC/EWS)."
                  ].map((note, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-xs sm:text-sm text-[#1B6EB5] font-bold">
                  For details on social qualifications, category criteria, or certificates, visit: <Link href="/sbi-po/eligibility" className="hover:underline font-bold text-[#1B6EB5] no-underline inline-flex items-center gap-0.5">SBI PO Eligibility <ArrowRight size={14} /></Link>
                </div>
              </div>
            </section>

            {/* ── SECTION G: WHAT THIS VACANCY MEANS FOR PREPARATION ── */}
            <section id="preparation-impact" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Briefcase size={20} className="text-[#1B6EB5]" />
                What This Vacancy Count Means for Your Preparation
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <p className="text-slate-655 text-sm sm:text-base leading-relaxed font-medium">
                  With approximately 12 lakh applicants competing for 1,500 seats, the selection ratios remain highly competitive despite the three-fold increase in posts. A higher vacancy count typically stabilizes cutoff trends and expands the list of candidates qualified for Mains, but final selection remains strictly dependent on preparation quality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal font-semibold m-0">
                      More vacancies mean marginally more predictable cut-offs, but quality practice remains the deciding factor.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal font-semibold m-0">
                      The Mains selection pool is expected to expand, making this one of the best years to secure a seat.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 transition-all text-slate-900 font-extrabold text-sm shadow-md cursor-pointer no-underline"
                  >
                    Start practicing with SBI PO Mock Tests
                    <ArrowRight size={15} />
                  </a>
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
                  { q: 'How many total vacancies are there in SBI PO 2026?', a: 'SBI PO Vacancy 2026 stands at 1,500 posts.' },
                  { q: 'How many regular and backlog vacancies are there in SBI PO 2026?', a: 'Of the 1,500 total posts, 1,446 are regular vacancies and 54 are backlog vacancies.' },
                  { q: 'What is the SBI PO vacancy for the UR category in 2026?', a: 'The UR (Unreserved) category has 588 vacancies in SBI PO 2026.' },
                  { q: 'What is the SBI PO vacancy for the OBC category in 2026?', a: 'The OBC category has 390 vacancies in SBI PO 2026, all regular.' },
                  { q: 'How many PwBD vacancies are there in SBI PO 2026?', a: 'There are 61 PwBD vacancies in total — 15 for VI, 16 for HI, 14 for LD, and 16 for D&E categories, reserved horizontally.' },
                  { q: 'Is the SBI PO 2026 vacancy higher than 2025?', a: 'Yes, SBI PO Vacancy 2026 (1,500) is nearly 3 times higher than SBI PO Vacancy 2025 (541).' },
                  { q: 'Are SBI PO 2026 vacancy numbers final?', a: 'No, vacancy numbers are provisional and may vary based on the Bank\'s actual requirement at the time of final allotment.' },
                  { q: 'What is the SBI PO SC category vacancy in 2026?', a: 'The SC category has 234 total vacancies — 216 regular and 18 backlog.' },
                  { q: 'What is the SBI PO ST category vacancy in 2026?', a: 'The ST category has 144 total vacancies — 108 regular and 36 backlog.' },
                  { q: 'Does PwBD reservation apply on top of category vacancies?', a: 'No, PwBD reservation is horizontal, meaning PwBD vacancies are counted within the respective social category (UR/SC/ST/OBC/EWS), not in addition to them.' }
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

            {/* ── WHAT&apos;S NEXT CTA AT BOTTOM ── */}
            <div className="bg-gradient-to-br from-[#030712] to-[#091024] border border-slate-800 p-6 rounded-3xl text-white font-sans text-center space-y-4">
              <h4 className="font-extrabold text-sm sm:text-base text-white tracking-wide uppercase">What&apos;s Next for Preparation?</h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
                Understanding vacancies is one part of the journey. Keep your target in mind and review final cutoffs from previous years:
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/sbi-po/cut-off"
                  className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-xs text-white no-underline"
                >
                  View SBI PO Cut Off
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/sbi-po/selection-process"
                  className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-xs text-white no-underline"
                >
                  SBI PO Selection Process
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* KEEP EDITORIAL SECTION EXACTLY AS CURRENTLY IS AT THE BOTTOM */}
            <ExamAuthorSection examId="sbi-po" />
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 space-y-4 hidden lg:block">
            <QuickNavigation exam={exam} activeSlug="vacancy" />

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
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5 no-underline"
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
