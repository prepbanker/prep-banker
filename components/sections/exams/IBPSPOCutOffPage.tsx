// PATH: components/sections/exams/IBPSPOCutOffPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Download,
  AlertTriangle,
  CheckCircle,
  XCircle,
  FileText,
  FileCheck,
  Play,
  ArrowRight,
  ShieldCheck,
  Trophy,
  ChevronDown,
  BookOpen,
  User,
  Users,
  Compass,
  MapPin,
  Lock,
  ExternalLink,
  ChevronRight,
  Info,
  Bell,
  Sliders,
  UserCheck,
  Target,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle as QuestionIcon,
  TrendingUp,
  LineChart,
  BarChart4
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOCutOffPage() {
  const exam = getExamData('ibps-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // JSON-LD Schema definitions
  const schemas = [
    // 1. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/"},
        {"@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po"},
        {"@type": "ListItem", "position": 3, "name": "Cut Off", "item": "https://prepbanker.com/ibps-po/cut-off"}
      ]
    },
    // 2. Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "IBPS PO Cut Off Data 2022-2026",
      "description": "Category-wise and section-wise IBPS PO Prelims, Mains, and Final cut-off marks from 2022 to 2025, with expected cut-off range for 2026.",
      "temporalCoverage": "2022/2026",
      "creator": {
        "@type": "Organization",
        "name": "PrepBanker",
        "url": "https://prepbanker.com"
      },
      "variableMeasured": [
        "IBPS PO Prelims Cut Off",
        "IBPS PO Mains Cut Off",
        "IBPS PO Final Cut Off"
      ],
      "spatialCoverage": {
        "@type": "Country",
        "name": "India"
      }
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the expected IBPS PO Prelims cut-off for General category in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Based on the 2022-2025 trend, the IBPS PO 2026 Prelims cut-off for the General category is expected to fall between 48 and 55 marks out of 100."
          }
        },
        {
          "@type": "Question",
          "name": "What was the IBPS PO Prelims cut-off in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO 2025 Prelims cut-off for the General, EWS, and OBC categories was 49.21 out of 100."
          }
        },
        {
          "@type": "Question",
          "name": "What was the IBPS PO Mains cut-off in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO 2025 Mains cut-off for the General and OBC categories was 75.75 out of 225, the highest in four years."
          }
        },
        {
          "@type": "Question",
          "name": "Is the IBPS PO cut-off the same every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, the IBPS PO cut-off changes every year based on paper difficulty, number of vacancies, and total applicants, and has ranged between 48 and 54 for Prelims General category across 2022-2025."
          }
        },
        {
          "@type": "Question",
          "name": "Does IBPS PO have a sectional cut-off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, candidates must clear the minimum cut-off in each section (English, Quantitative Aptitude, Reasoning) individually, not just the overall score."
          }
        },
        {
          "@type": "Question",
          "name": "What is the IBPS PO final cut-off based on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO final cut-off is calculated by combining Mains and Interview scores in an 80:20 ratio."
          }
        },
        {
          "@type": "Question",
          "name": "Is IBPS PO cut-off released state-wise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, IBPS PO is a national-level recruitment exam and releases only category-wise and section-wise cut-off, not state-wise cut-off."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the Prelims cut-off not counted in the final IBPS PO selection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Prelims stage in IBPS PO is purely qualifying in nature; only Mains and Interview scores are used to prepare the final merit list."
          }
        }
      ]
    },
    // 4. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Cut Off 2026",
      "url": "https://prepbanker.com/ibps-po/cut-off",
      "dateModified": "2026-07-27",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".expected-cutoff-summary"]
      },
      "about": {
        "@type": "Thing",
        "name": "IBPS PO Cut Off Marks"
      }
    }
  ];

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* Render Schema JSON-LD blocks dynamically */}
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden text-white pt-10 pb-12 mb-0" style={{ background: 'linear-gradient(135deg, #1C1200 0%, #040A20 100%)' }}>
        {/* Decorative Grid & Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <ChevronRight size={10} />
            <Link href="/exams" className="hover:text-white transition-colors no-underline">Exams</Link>
            <ChevronRight size={10} />
            <Link href="/ibps-po" className="hover:text-white transition-colors no-underline">IBPS PO</Link>
            <ChevronRight size={10} />
            <span className="text-white/80">Cut Off</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase font-sans">
                Statistical Analysis
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Cut Off 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Verified Prelims, Mains, and Final cut-off marks from the last 4 recruitment cycles (2022–2025), plus a realistic 2026 expected range built from that trend — not a guess pulled from thin air.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟡 IBPS PO 2026 Prelims Cut Off: Not yet released — expected September 2026</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1"><LineChart size={13} className="text-amber-400" /> General category range 48–56 / 100 (Prelims)</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1"><CheckCircle size={13} className="text-emerald-400" /> Last verified: 27 July 2026</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Check Your Score Against Live Cut-Off Trends — Take a Free Mock Test
                </a>
                <a
                  href="#category-wise-expected"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Jump to Category-Wise Expected Cut-Off
                </a>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <div className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Vacancy Key Highlights
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">2026 Vacancies</span>
                    <span className="text-sm font-black text-[#FBBF24]">7,365 Posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">2025 Vacancies</span>
                    <span className="text-sm font-black text-white">5,208 Posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">Final Ratio</span>
                    <span className="text-sm font-black text-white">80:20 (Mains:Interview)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">Verification</span>
                    <span className="text-sm font-black text-[#FBBF24]">Verified Data</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Expected ranges account for a 41% vacancy increase over the previous year.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky horizontal quick navigation bar */}
      {exam.id === 'ibps-po' && (
        <div className="w-full bg-[#0B0F19] border-t-2 border-amber-500 border-b border-slate-800 sticky top-16 z-40 shadow-sm">
          <div className="container-custom py-4.5">
            <QuickNavigation exam={exam} activeSlug="cut-off" />
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT AREA (Takes Full Space, No Empty Right Column) ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="w-full space-y-12">

          {/* Table of Contents for Navigation */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs font-sans mt-6">
            <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
              <BookOpen size={16} className="text-[#1B6EB5]" />
              On This Page
            </span>
            <div className="max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-none p-0 m-0">
                <li>
                  <a href="#category-wise-expected" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Expected Cut-Off Range
                  </a>
                </li>
                <li>
                  <a href="#methodology" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Cut-Off Determinant Factors
                  </a>
                </li>
                <li>
                  <a href="#prelims-history" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Prelims Last 4 Years
                  </a>
                </li>
                <li>
                  <a href="#mains-history" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Mains Last 4 Years
                  </a>
                </li>
                <li>
                  <a href="#final-history" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Final Cut-Off Trends
                  </a>
                </li>
                <li>
                  <a href="#sectional-cutoff" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Sectional Cut-Off Analysis
                  </a>
                </li>
                <li>
                  <a href="#selection-probability" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Selection Probability Chart
                  </a>
                </li>
                <li>
                  <a href="#explore" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                    Resources & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: EXPECTED CUT OFF 2026 (category-wise-expected) ── */}
          <section id="category-wise-expected" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileSpreadsheet size={18} />
              </span>
              IBPS PO 2026 Expected Cut Off (Prelims & Mains)
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              These ranges are derived by averaging and weighting the last four years of official cut-offs, adjusted for the rising vacancy count in 2026 (7,365 vs 5,208 in 2025). Higher vacancies historically correlate with a slightly softer cut-off.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Prelims Expected Card */}
              <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1B6EB5]">Phase I</span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                      Prelims Expected Cut Off
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-50 text-[#1B6EB5] border border-blue-100 rounded-lg text-xs font-black">
                    Out of 100
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { cat: 'General / UR', val: '48–55', min: 48, max: 55 },
                    { cat: 'EWS', val: '47–54', min: 47, max: 54 },
                    { cat: 'OBC', val: '47–54', min: 47, max: 54 },
                    { cat: 'SC', val: '42–48', min: 42, max: 48 },
                    { cat: 'ST', val: '38–44', min: 38, max: 44 },
                    { cat: 'PwBD (HI/OC/VI/ID)', val: '18–35', min: 18, max: 35 }
                  ].map((item, idx) => {
                    const minPercent = item.min;
                    const widthPercent = item.max - item.min;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-3 bg-white border border-slate-200/60 rounded-xl hover:border-blue-200 hover:shadow-xs transition-all duration-200 group"
                      >
                        <div className="space-y-1">
                          <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-slate-950 transition-colors">
                            {item.cat}
                          </span>
                          {/* Visual range bar for mobile (smaller) and desktop */}
                          <div className="relative w-32 h-1 bg-slate-100 rounded-full overflow-hidden sm:hidden">
                            <div 
                              className="absolute h-full bg-[#1B6EB5] rounded-full"
                              style={{ left: `${minPercent}%`, width: `${widthPercent}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          {/* Visual range bar for desktop */}
                          <div className="hidden sm:block relative w-28 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="absolute h-full bg-gradient-to-r from-blue-500 to-[#1B6EB5] rounded-full"
                              style={{ left: `${minPercent}%`, width: `${widthPercent}%` }}
                            />
                          </div>
                          <span className="px-2.5 py-1 bg-blue-50/70 text-[#1B6EB5] font-black text-xs sm:text-sm rounded-lg border border-blue-100/50">
                            {item.val}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mains Expected Card */}
              <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-650">Phase II</span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                      Mains Expected Cut Off
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-650 border border-indigo-100 rounded-lg text-xs font-black">
                    Out of 225
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { cat: 'General / UR', val: '62–72', min: 62, max: 72 },
                    { cat: 'EWS', val: '60–70', min: 60, max: 70 },
                    { cat: 'OBC', val: '60–70', min: 60, max: 70 },
                    { cat: 'SC', val: '48–58', min: 48, max: 58 },
                    { cat: 'ST', val: '42–52', min: 42, max: 52 },
                    { cat: 'PwBD (HI/OC/VI/ID)', val: '25–45', min: 25, max: 45 }
                  ].map((item, idx) => {
                    // Out of 225, let's normalize to 100 for the percentage bars
                    const minPercent = (item.min / 225) * 100;
                    const maxPercent = (item.max / 225) * 100;
                    const widthPercent = maxPercent - minPercent;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-3 bg-white border border-slate-200/60 rounded-xl hover:border-indigo-200 hover:shadow-xs transition-all duration-200 group"
                      >
                        <div className="space-y-1">
                          <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-slate-950 transition-colors">
                            {item.cat}
                          </span>
                          {/* Visual range bar for mobile (smaller) and desktop */}
                          <div className="relative w-32 h-1 bg-slate-100 rounded-full overflow-hidden sm:hidden">
                            <div 
                              className="absolute h-full bg-indigo-650 rounded-full"
                              style={{ left: `${minPercent}%`, width: `${widthPercent}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          {/* Visual range bar for desktop */}
                          <div className="hidden sm:block relative w-28 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="absolute h-full bg-gradient-to-r from-indigo-500 to-indigo-650 rounded-full"
                              style={{ left: `${minPercent}%`, width: `${widthPercent}%` }}
                            />
                          </div>
                          <span className="px-2.5 py-1 bg-indigo-50/70 text-indigo-650 font-black text-xs sm:text-sm rounded-lg border border-indigo-100/50">
                            {item.val}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 leading-normal font-semibold">
              Ranges widen for reserved and PwBD categories because sample variance across years is higher — treat the lower bound as your minimum safe target, not your goal.
            </div>
          </section>

          {/* ── SECTION 2: WHY IBPS PO CUT OFF CHANGES (methodology / determinants) ── */}
          <section id="methodology" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sliders size={18} />
              </span>
              Why IBPS PO Cut Off Changes Every Year
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Factor 1: Seat Vacancies */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md hover:border-amber-300 hover:scale-[1.01] transition-all duration-300 space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <BarChart4 size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-base font-display">Seat Vacancies</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-extrabold text-slate-800 leading-snug">
                    More vacancies generally pull the cutoff threshold down.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    With 7,365 vacancies in 2026 (the highest total reported since 2022), the competition density per seat is reduced, which historically correlates with a softer cutoff score.
                  </p>
                </div>
              </div>

              {/* Factor 2: Applicant Volumes */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-300 hover:scale-[1.01] transition-all duration-300 space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#1B6EB5] group-hover:bg-[#1B6EB5] group-hover:text-white transition-colors duration-300">
                    <Users size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-base font-display">Applicant Volumes</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-extrabold text-slate-800 leading-snug">
                    Higher registration volumes increase the competition ratio per seat.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Regardless of vacancies, a spike in total registrations increases competition. The cutoff is determined by the ranking of the top percentile corresponding to 10x the vacancy count.
                  </p>
                </div>
              </div>

              {/* Factor 3: Paper Difficulty & Normalization */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-300 hover:scale-[1.01] transition-all duration-300 space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-650 group-hover:bg-indigo-650 group-hover:text-white transition-colors duration-300">
                    <Sliders size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-base font-display">Difficulty & Normalization</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-extrabold text-slate-800 leading-snug">
                    Cutoffs are normalized across multiple shifts to ensure strict equity.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    IBPS applies equipercentile normalization to balance varying shift difficulties. Harder shift candidates receive upward score adjustments to match the easier shifts fairly.
                  </p>
                </div>
              </div>

              {/* Factor 4: Sectional Minimums */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md hover:border-rose-350 hover:scale-[1.01] transition-all duration-300 space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                    <AlertCircle size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-base font-display">Sectional Minimums</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-extrabold text-slate-800 leading-snug">
                    You must pass individual sectional cutoffs to qualify.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Even with a stellar overall score, failing the minimum score in English, Quant, or Reasoning results in disqualification. Sectional cutoffs trip up more candidates than the overall score.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: PRELIMS HISTORICAL DATA ── */}
          <section id="prelims-history" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <FileText size={18} />
              </span>
              IBPS PO Prelims Cut Off — Last 4 Years (Official, Category-Wise)
            </h2>

            <div className="border border-blue-200 rounded-2xl overflow-hidden shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50/80 to-blue-100/30 border-b border-blue-200 text-blue-900 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2025</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2024</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2023</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2022</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {[
                    { cat: 'General/UR', y25: '49.21', y24: '48.50', y23: '54.25', y22: '49.75' },
                    { cat: 'OBC', y25: '49.21', y24: '48.50', y23: '54.25', y22: '49.75' },
                    { cat: 'EWS', y25: '49.21', y24: '48.50', y23: '54.25', y22: '49.75' },
                    { cat: 'SC', y25: '45.96', y24: '48.00', y23: '49.50', y22: '46.75' },
                    { cat: 'ST', y25: '40.96', y24: '41.00', y23: '43.00', y22: '40.75' },
                    { cat: 'OC (Locomotor)', y25: '33.57', y24: '35.00', y23: '42.50', y22: '32.75' },
                    { cat: 'VI', y25: '21.65', y24: '15.75', y23: '39.00', y22: '24.75' },
                    { cat: 'HI', y25: '20.61', y24: '16.00', y23: '21.75', y22: '17.50' },
                    { cat: 'ID', y25: '21.83', y24: '15.50', y23: '20.25', y22: '19.75' }
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-blue-50/20 transition-colors ${
                        row.cat === 'General/UR' 
                          ? 'bg-[#1B6EB5]/5 font-black text-[#1B6EB5] border-y border-blue-100/50' 
                          : ''
                      }`}
                    >
                      <td className="px-4 py-3 bg-slate-50/10 font-bold text-slate-800">{row.cat}</td>
                      <td className="px-4 py-3">{row.y25}</td>
                      <td className="px-4 py-3">{row.y24}</td>
                      <td className="px-4 py-3">{row.y23}</td>
                      <td className="px-4 py-3">{row.y22}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                Takeaway: General category Prelims cut-off has moved in a fairly tight 48–54 band for three of the last four years, with 2023 as the outlier at 54.25 due to a comparatively easier paper.
              </p>
            </div>
          </section>

          {/* ── SECTION 4: MAINS HISTORICAL DATA ── */}
          <section id="mains-history" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileCheck size={18} />
              </span>
              IBPS PO Mains Cut Off — Last 4 Years (Official, Category-Wise)
            </h2>

            <div className="border border-indigo-200 rounded-2xl overflow-hidden shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50/80 to-indigo-100/30 border-b border-indigo-200 text-indigo-900 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2025</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2024</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2023</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2022</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {[
                    { cat: 'General/UR', y25: '75.75', y24: '66.50', y23: '63.00', y22: '71.25' },
                    { cat: 'OBC', y25: '75.75', y24: '66.00', y23: '62.25', y22: '69.75' },
                    { cat: 'EWS', y25: '72.50', y24: '64.75', y23: '61.00', y22: '70.50' },
                    { cat: 'SC', y25: '59.00', y24: '54.25', y23: '50.25', y22: '59.25' },
                    { cat: 'ST', y25: '51.75', y24: '47.50', y23: '41.00', y22: '53.25' }
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-indigo-50/20 transition-colors ${
                        row.cat === 'General/UR' 
                          ? 'bg-indigo-650/5 font-black text-indigo-700 border-y border-indigo-100/50' 
                          : ''
                      }`}
                    >
                      <td className="px-4 py-3 bg-slate-50/10 font-bold text-slate-800">{row.cat}</td>
                      <td className="px-4 py-3">{row.y25}</td>
                      <td className="px-4 py-3">{row.y24}</td>
                      <td className="px-4 py-3">{row.y23}</td>
                      <td className="px-4 py-3">{row.y22}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                Takeaway: The 2025 Mains cut-off (75.75 for General, out of 225) was the highest in four years — nearly 9 marks above 2024 — signalling a comparatively easier Mains paper and sharper competition.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: FINAL MERIT CUT OFF ── */}
          <section id="final-history" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Trophy size={18} />
              </span>
              IBPS PO Final Cut Off (Mains + Interview, 80:20 Weightage)
            </h2>

            <div className="border border-emerald-200 rounded-2xl overflow-hidden shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-50/80 to-emerald-100/30 border-b border-emerald-200 text-emerald-900 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2025</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2024</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2023</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">2022</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {[
                    { cat: 'General', y25: '46.11', y24: '42.69', y23: '41.13', y22: '43.47' },
                    { cat: 'OBC', y25: '44.04', y24: '40.18', y23: '38.69', y22: '41.38' },
                    { cat: 'SC', y25: '38.53', y24: '35.91', y23: '34.73', y22: '38.02' },
                    { cat: 'ST', y25: '36.73', y24: '33.69', y23: '31.93', y22: '36.24' },
                    { cat: 'EWS', y25: '43.64', y24: '39.93', y23: '38.71', y22: '41.76' }
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-emerald-50/20 transition-colors ${
                        row.cat === 'General' 
                          ? 'bg-emerald-500/5 font-black text-emerald-700 border-y border-emerald-100/50' 
                          : ''
                      }`}
                    >
                      <td className="px-4 py-3 bg-slate-50/10 font-bold text-slate-800">{row.cat}</td>
                      <td className="px-4 py-3">{row.y25}</td>
                      <td className="px-4 py-3">{row.y24}</td>
                      <td className="px-4 py-3">{row.y23}</td>
                      <td className="px-4 py-3">{row.y22}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                Final cut-off (out of 100) combines Mains and Interview in an 80:20 ratio — a strong interview score can offset a borderline Mains score, which is why the final cut-off is always lower than the Mains cut-off on its own scale.
              </p>
            </div>
          </section>

          {/* ── SECTION 6: SECTIONAL CUT OFF ── */}
          <section id="sectional-cutoff" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sliders size={18} />
              </span>
              Sectional Cut Off — Prelims 2025
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Why "overall score" alone isn't enough: candidates must clear the minimum cut-off in each section individually to qualify for the next stage.
            </p>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Section</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">General/EWS</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">SC/ST/OBC/PwBD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">English Language</td>
                    <td className="px-4 py-3">13.25</td>
                    <td className="px-4 py-3">9.75</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Quantitative Aptitude</td>
                    <td className="px-4 py-3 font-bold text-slate-800">6.25</td>
                    <td className="px-4 py-3">4.25</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Reasoning Ability</td>
                    <td className="px-4 py-3">9.75</td>
                    <td className="px-4 py-3">5.50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sectional CTA redirects */}
            <div className="p-4 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <p className="text-xs sm:text-sm font-semibold leading-normal m-0 text-center sm:text-left">
                Quant carries the lowest sectional cut-off of the three — meaning candidates most often lose their attempt not on Quant, but on English or Reasoning falling short. Practice sectional accuracy, not just overall speed.
              </p>
              <div className="flex gap-2.5 shrink-0">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-extrabold text-xs rounded-lg transition-all no-underline"
                >
                  English drills
                </a>
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-extrabold text-xs rounded-lg transition-all no-underline"
                >
                  Reasoning drills
                </a>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: SCORE VS PROBABILITY ── */}
          <section id="selection-probability" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <BarChart4 size={18} />
              </span>
              Score vs Selection Probability (Mains, out of 225 — General category)
            </h2>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Mains Score</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Selection Probability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {[
                    { score: '75+', prob: 'Very High', color: 'text-emerald-600' },
                    { score: '68–75', prob: 'High', color: 'text-emerald-500' },
                    { score: '60–68', prob: 'Moderate', color: 'text-amber-600' },
                    { score: '52–60', prob: 'Borderline', color: 'text-amber-500' },
                    { score: 'Below 52', prob: 'Low', color: 'text-red-500' }
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">{row.score}</td>
                      <td className={`px-4 py-3 font-black ${row.color}`}>{row.prob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 leading-normal">
              Note: Probabilities are organized in ranges to maintain statistical honesty and avoid misleading exact-point selection claims.
            </div>
          </section>

          {/* ── SECTION 8: HOW TO USE THIS DATA ── */}
          <section id="explore" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={18} />
              </span>
              How to Use This Cut-Off Data in Your Preparation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {/* Strategy 1 */}
              <div className="flex gap-4 p-5 bg-slate-50 border border-slate-150 rounded-2xl hover:border-indigo-150 hover:bg-white hover:shadow-xs transition-all duration-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-650 font-extrabold text-sm shrink-0">
                  1
                </span>
                <div className="space-y-1">
                  <div className="font-extrabold text-slate-800 text-sm sm:text-base">Target a Margin of Safety</div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Aim 8–10 marks above the highest cutoff of the last 4 years for your category. While 2026 has more vacancies, applicant counts are higher.
                  </p>
                </div>
              </div>

              {/* Strategy 2 */}
              <div className="flex gap-4 p-5 bg-slate-50 border border-slate-150 rounded-2xl hover:border-indigo-150 hover:bg-white hover:shadow-xs transition-all duration-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-650 font-extrabold text-sm shrink-0">
                  2
                </span>
                <div className="space-y-1">
                  <div className="font-extrabold text-slate-800 text-sm sm:text-base">Monitor Sectional Benchmarks</div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Track your sectional score separately in every mock, not just your overall score. Missing even one sectional minimum results in disqualification.
                  </p>
                </div>
              </div>

              {/* Strategy 3 */}
              <div className="flex gap-4 p-5 bg-slate-50 border border-slate-150 rounded-2xl hover:border-indigo-150 hover:bg-white hover:shadow-xs transition-all duration-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-650 font-extrabold text-sm shrink-0">
                  3
                </span>
                <div className="space-y-1">
                  <div className="font-extrabold text-slate-800 text-sm sm:text-base">Stay Updated Live</div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Re-check this page in September 2026 once the official Prelims cutoff is released. We update this space within 24 hours of the official notice.
                  </p>
                </div>
              </div>

              {/* Strategy 4 */}
              <div className="flex gap-4 p-5 bg-slate-50 border border-slate-150 rounded-2xl hover:border-indigo-150 hover:bg-white hover:shadow-xs transition-all duration-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-650 font-extrabold text-sm shrink-0">
                  4
                </span>
                <div className="space-y-1">
                  <div className="font-extrabold text-slate-800 text-sm sm:text-base">Simulate Normalization Shift</div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Use full-length timed mock tests. This helps you adapt to normalization-adjusted shift difficulties and manage your speed.
                  </p>
                </div>
              </div>
            </div>

            {/* Links Hub grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans font-bold pt-4 border-t border-slate-100">
              {[
                { title: 'Notification 2026', path: '/ibps-po/notification' },
                { title: 'Admit Card Download', path: '/ibps-po/admit-card' },
                { title: 'Eligibility Criteria', path: '/ibps-po/eligibility' },
                { title: 'Important Dates', path: '/ibps-po/important-dates' },
                { title: 'Selection Process', path: '/ibps-po/selection-process' },
                { title: 'Salary & Perks', path: '/ibps-po/salary' },
                { title: '90-Day Study Plan', path: '/ibps-po/study-plan' }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="p-4 bg-slate-50 border border-slate-150 rounded-2xl hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/5 group transition-all flex items-center justify-between no-underline"
                >
                  <span className="text-slate-800 group-hover:text-slate-950 font-extrabold text-sm sm:text-base leading-snug">{item.title}</span>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-[#FBBF24] transition-colors" />
                </Link>
              ))}
            </div>

            {/* Product CTA Banner Block */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl text-white space-y-4 shadow-md font-sans">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="font-black text-base sm:text-lg text-white">Target scores set — now outprep the competition.</div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Analyze your performance with simulated mock tests. Practice sectionals to seal your entry requirements.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-3 pt-2">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.25)] hover:-translate-y-0.5 no-underline flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  Free IBPS PO Mock Test <ChevronRight size={14} />
                </a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-black text-white">
                  <span>Sectional Tests:</span>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer font-sans">English</a>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer font-sans">Quant</a>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer font-sans">Reasoning</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 9: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'What is the expected IBPS PO Prelims cut-off for General category in 2026?', a: 'Based on the 2022–2025 trend, the IBPS PO 2026 Prelims cut-off for the General category is expected to fall between 48 and 55 marks out of 100.' },
                { q: 'What was the IBPS PO Prelims cut-off in 2025?', a: 'The IBPS PO 2025 Prelims cut-off for the General, EWS, and OBC categories was 49.21 out of 100.' },
                { q: 'What was the IBPS PO Mains cut-off in 2025?', a: 'The IBPS PO 2025 Mains cut-off for the General and OBC categories was 75.75 out of 225, the highest in four years.' },
                { q: 'Is the IBPS PO cut-off the same every year?', a: 'No, the IBPS PO cut-off changes every year based on paper difficulty, number of vacancies, and total applicants, and has ranged between 48 and 54 for Prelims (General category) across 2022–2025.' },
                { q: 'Does IBPS PO have a sectional cut-off?', a: 'Yes, candidates must clear the minimum cut-off in each section (English, Quantitative Aptitude, Reasoning) individually, not just the overall score.' },
                { q: 'What is the IBPS PO final cut-off based on?', a: 'The IBPS PO final cut-off is calculated by combining Mains and Interview scores in an 80:20 ratio.' },
                { q: 'Is IBPS PO cut-off released state-wise?', a: 'No, IBPS PO is a national-level recruitment exam and releases only category-wise and section-wise cut-off, not state-wise cut-off.' },
                { q: 'How much above the previous year\'s cut-off should I target?', a: 'A safe target is 8–10 marks above the previous year\'s cut-off for your category, since applicant numbers tend to rise year on year.' },
                { q: 'Why is the Prelims cut-off not counted in the final IBPS PO selection?', a: 'The Prelims stage in IBPS PO is purely qualifying in nature; only Mains and Interview scores are used to prepare the final merit list.' }
              ].map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div key={idx} className="border border-slate-150 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left flex items-center justify-between gap-4 border-none cursor-pointer"
                    >
                      <span className="font-extrabold text-sm sm:text-base text-slate-800 flex items-start gap-2.5 font-sans">
                        <QuestionIcon size={16} className="text-slate-400 shrink-0 mt-0.5" />
                        {faq.q}
                      </span>
                      <ChevronDown size={16} className={`text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 border-t border-slate-150 bg-white">
                        <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold m-0">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── SECTION 10: E-E-A-T / TRUST BLOCK ── */}
          <div className="bg-slate-100/50 border border-slate-200 rounded-2xl p-5 font-sans space-y-3.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 font-sans">
              <span className="flex items-center gap-1"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">
                  Official IBPS scores updates, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any sectional minimum, total cut-off, or normalization rules, always cross-check with the official bulletins and scorecards published on ibps.in.
            </p>
          </div>

          {/* KEEP EDITORIAL SECTION EXACTLY AS CURRENTLY IS AT THE BOTTOM */}
          <ExamAuthorSection examId="ibps-po" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
