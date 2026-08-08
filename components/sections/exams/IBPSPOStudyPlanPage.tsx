// PATH: components/sections/exams/IBPSPOStudyPlanPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
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
  BookOpenCheck,
  Activity,
  CheckSquare,
  ClipboardList,
  Sparkles,
  Search
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOStudyPlanPage() {
  const exam = getExamData('ibps-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [selectedPlanTier, setSelectedPlanTier] = useState<string>('balanced');
  const [daysLeft, setDaysLeft] = useState<number>(26);

  useEffect(() => {
    // Dynamic days left computation (Aug 22, 2026)
    const examDate = new Date('2026-08-22T00:00:00');
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      setDaysLeft(diffDays);
    } else {
      setDaysLeft(0);
    }
  }, []);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // JSON-LD Schema definitions
  const schemas = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://prepbanker.com/ibps-po/study-plan#webpage",
          "url": "https://prepbanker.com/ibps-po/study-plan",
          "name": "IBPS PO Study Plan 2026: Day-Wise Plan for Prelims & Mains",
          "description": "IBPS PO Study Plan 2026 with a day-wise plan for Prelims (22–23 Aug 2026) and Mains (4 Oct 2026), subject-wise strategy, and mock test schedule.",
          "datePublished": "2026-07-27",
          "dateModified": "2026-07-27",
          "isPartOf": { "@id": "https://prepbanker.com/#website" },
          "breadcrumb": { "@id": "https://prepbanker.com/ibps-po/study-plan#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://prepbanker.com/ibps-po/study-plan#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
            { "@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po" },
            { "@type": "ListItem", "position": 3, "name": "Study Plan", "item": "https://prepbanker.com/ibps-po/study-plan" }
          ]
        },
        {
          "@type": "Article",
          "headline": "IBPS PO Study Plan 2026: Day-Wise Plan for Prelims & Mains",
          "description": "A day-wise, date-anchored IBPS PO 2026 study plan covering Prelims (22–23 Aug) and Mains (4 Oct), with subject-wise time allocation and mock test strategy.",
          "author": { "@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com" },
          "publisher": {
            "@type": "Organization",
            "name": "PrepBanker",
            "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/logo.png" }
          },
          "datePublished": "2026-07-27",
          "dateModified": "2026-07-27",
          "mainEntityOfPage": "https://prepbanker.com/ibps-po/study-plan"
        },
        {
          "@type": "HowTo",
          "name": "How to Prepare for IBPS PO 2026 in the Time You Have Left",
          "description": "Step-by-step approach to structuring IBPS PO 2026 preparation from today until the Prelims and Mains exam dates.",
          "step": [
            { "@type": "HowToStep", "name": "Assess days left and pick your phase", "text": "Count the exact days left to Prelims (22–23 Aug 2026) and choose Crunch, Balanced, or Builder phase accordingly." },
            { "@type": "HowToStep", "name": "Fix a daily subject-time split", "text": "Allocate fixed daily hours to Quant, Reasoning, English, and Current Affairs based on your phase." },
            { "@type": "HowToStep", "name": "Take sectional tests before full mocks", "text": "Build section-level speed and accuracy with topic-wise practice before attempting full-length mocks." },
            { "@type": "HowToStep", "name": "Take timed full-length mocks", "text": "Attempt full-length mock tests under exam conditions and track your score trend." },
            { "@type": "HowToStep", "name": "Run a mock-analysis loop", "text": "After every mock, log errors by topic and reason (concept gap, silly mistake, time pressure) and revise accordingly." },
            { "@type": "HowToStep", "name": "Switch to Mains-mode after Prelims", "text": "From 24 Aug 2026, shift focus to Data Analysis & Interpretation, Banking Awareness, and Descriptive English for the 4 Oct Mains exam." }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the best study plan for IBPS PO 2026?", "acceptedAnswer": { "@type": "Answer", "text": "The best IBPS PO 2026 study plan matches your actual days left before Prelims (22–23 August 2026) — under 20 days means mocks and revision only, 20–45 days means sectional practice plus mocks, and 45+ days means concept-building before mocks." } },
            { "@type": "Question", "name": "How many days are left for IBPS PO 2026 Prelims?", "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO 2026 Prelims will be held on 22 and 23 August 2026." } },
            { "@type": "Question", "name": "When is IBPS PO 2026 Mains exam?", "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO 2026 Mains exam is scheduled for 4 October 2026, about six weeks after Prelims." } },
            { "@type": "Question", "name": "How many hours should I study daily for IBPS PO?", "acceptedAnswer": { "@type": "Answer", "text": "Most successful IBPS PO candidates study 6–8 hours daily, split roughly as 2 hours Quant, 2 hours Reasoning, 1.5 hours English, and the remainder on current affairs and mock analysis." } },
            { "@type": "Question", "name": "Can I crack IBPS PO in 30 days?", "acceptedAnswer": { "@type": "Answer", "text": "Cracking IBPS PO Prelims in 30 days is possible if your basics are already clear — the 30 days should go entirely into sectional practice, timed mock tests, and revision, not new topics." } },
            { "@type": "Question", "name": "Should I prepare for Mains before the Prelims result is out?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — starting Data Analysis & Interpretation, Banking Awareness, and Descriptive English before the Prelims result comes out gives you extra weeks of Mains preparation instead of losing time waiting." } },
            { "@type": "Question", "name": "How many mock tests should I take before IBPS PO Prelims?", "acceptedAnswer": { "@type": "Answer", "text": "In the final two weeks before Prelims, take a full-length mock test daily; in the weeks before that, 2–3 mocks per week is enough alongside sectional practice." } },
            { "@type": "Question", "name": "What should I avoid in the last few days before IBPS PO Prelims?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid starting any new topic, taking mocks without reviewing them the same day, and studying beyond your usual routine — the last few days should be revision-only." } },
            { "@type": "Question", "name": "Is 26 days enough to prepare for IBPS PO Prelims?", "acceptedAnswer": { "@type": "Answer", "text": "26 days is enough to significantly improve your score if you already know the basics — the focus should shift entirely to sectional speed, full-length mocks, and fixing your two weakest sections rather than starting anything new." } },
            { "@type": "Question", "name": "What is the IBPS PO 2026 exam date?", "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO 2026 Prelims is on 22–23 August and Mains is on 4 October, as per the official IBPS PO/MT-XVI notification released on 1 July 2026." } }
          ]
        }
      ]
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
            <span className="text-white/80">Study Plan</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Countdown Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B6EB5]/20 border border-[#1B6EB5]/40 text-[#1B6EB5] text-xs font-black tracking-wide uppercase font-sans">
                <Calendar size={12} className="text-[#FBBF24]" />
                {daysLeft} Days to Prelims · 22–23 Aug 2026
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Study Plan 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Your day-wise plan for both Prelims (22–23 August) and Mains (4 October) — built around the actual 2026 exam dates, not a generic 30/60/90-day template.
                </p>
              </div>

              {/* Status Strip / Info */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">✓ Updated 27 July 2026</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">✓ Based on official notification</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">✓ 7,365 vacancies this year</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/ibps-po/mock-tests"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Take a Free IBPS PO Mock Test <ArrowRight size={14} />
                </Link>
                <Link
                  href="/ibps-po/exam-pattern"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  See Full Exam Pattern
                </Link>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Key Timeline Dates
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Prelims Dates</span>
                    <span className="text-sm font-black text-white">22-23 Aug 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mains Date</span>
                    <span className="text-sm font-black text-[#FBBF24]">04 Oct 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Prelims Target</span>
                    <span className="text-sm font-black text-white">55+ raw marks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mains Target</span>
                    <span className="text-sm font-black text-[#FBBF24]">95+ raw marks</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Countdown values dynamically update depending on browser system timers.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky horizontal quick navigation bar */}
      {exam.id === 'ibps-po' && (
        <div className="w-full bg-[#0B0F19] border-t-2 border-amber-500 border-b border-slate-800 sticky top-16 z-40 shadow-sm">
          <div className="container-custom py-4">
            <QuickNavigation exam={exam} activeSlug="study-plan" />
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT AREA ── */}
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
                  <a href="#how-many-days" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Assess days left
                  </a>
                </li>
                <li>
                  <a href="#prelims-plan" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Today to Prelims
                  </a>
                </li>
                <li>
                  <a href="#mains-plan" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Prelims to Mains
                  </a>
                </li>
                <li>
                  <a href="#subject-allocation" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Subject-wise hours
                  </a>
                </li>
                <li>
                  <a href="#mock-strategy" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Mock test schedules
                  </a>
                </li>
                <li>
                  <a href="#mistakes" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Avoidable mistakes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Resources & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: HOW MANY DAYS LEFT & SELECTOR ── */}
          <section id="how-many-days" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Activity size={20} className="stroke-[2.5]" />
                </span>
                How Many Days Do You Actually Have?
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                Dynamic Countdown Calculator
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Target days overview card */}
              <div className="lg:col-span-1 p-6 bg-gradient-to-br from-slate-900 to-indigo-955 text-white rounded-3xl space-y-4 flex flex-col justify-between shadow-md">
                <div className="space-y-1.5">
                  <span className="text-[10px] text-indigo-300 font-black uppercase tracking-widest">Time Remaining</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-[#FBBF24] tracking-tight">{daysLeft}</span>
                    <span className="text-sm font-extrabold text-slate-350">Days Left</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal font-semibold">
                    Calculated precisely for Prelims on 22–23 Aug 2026. Followed by Mains on 4 Oct 2026.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Mains prep window:</span>
                  <span className="font-black text-white">~43 extra days</span>
                </div>
              </div>

              {/* Interactive Selector Widget */}
              <div className="lg:col-span-2 p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="block text-xs font-black text-slate-550 uppercase tracking-widest">
                    Interactive Study Phase Assessor
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { id: 'crunch', label: 'Crunch Phase (0-20 Days)' },
                      { id: 'balanced', label: 'Balanced Phase (21-45 Days)' },
                      { id: 'builder', label: 'Builder Phase (46+ Days)' }
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedPlanTier(tier.id)}
                        className={`px-5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all border-none cursor-pointer ${
                          selectedPlanTier === tier.id
                            ? 'bg-[#1B6EB5] text-white shadow-md'
                            : 'bg-white hover:bg-slate-100 text-slate-655 border border-slate-200'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-white border border-slate-150 rounded-2xl space-y-1.5">
                    {selectedPlanTier === 'crunch' && (
                      <>
                        <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                          <AlertTriangle size={15} className="text-[#FBBF24]" /> Crunch Phase Strategy
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                          Best for repeat aspirants or candidates with strong conceptual baselines. Focus strictly on full-length mock tests and active error log revision. Avoid starting new topics entirely.
                        </p>
                      </>
                    )}
                    {selectedPlanTier === 'balanced' && (
                      <>
                        <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                          <Sliders size={15} className="text-[#1B6EB5]" /> Balanced Phase Strategy
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                          Best if you have completed basic topic mapping and need to improve speed. Focus on subject-wise sectional quizzes, error reviews, and taking full mocks every 2 days.
                        </p>
                      </>
                    )}
                    {selectedPlanTier === 'builder' && (
                      <>
                        <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                          <CheckCircle size={15} className="text-emerald-500" /> Builder Phase Strategy
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                          Best for first-time aspirants starting early. Dedicate your energy to build basics and mapping formulas, paired with light topic quizzes before starting full-length simulations.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-semibold leading-relaxed m-0">
                  Treat any topic you haven't touched yet as skippable unless it's high-frequency. Check the <Link href="/ibps-po/syllabus" className="text-[#1B6EB5] hover:underline font-bold">IBPS PO Syllabus</Link> for details.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: TODAY → PRELIMS PLAN ── */}
          <section id="prelims-plan" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Activity size={20} className="stroke-[2.5]" />
              </span>
              Day-Wise Plan: Today to Prelims (22–23 Aug 2026)
            </h2>

            <div className="space-y-4">
              {[
                { days: 'Week 1 (Days 1–7)', goal: 'Diagnose & Prioritise', focus: '1 sectional test per subject per day + identify your 2 weakest sections.' },
                { days: 'Week 2 (Days 8–14)', goal: 'Fix Weak Sections', focus: 'Extra 45–60 min daily on weak section + 1 sectional mock every 2 days.' },
                { days: 'Week 3 (Days 15–21)', goal: 'Build Exam Speed', focus: 'Full-length mock every alternate day, strict 60-minute timing.' },
                { days: 'Final Week (Days 22–26)', goal: 'Revise & Stabilise', focus: '1 full mock every day, no new topics, formula/rule revision only.' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 border-l-4 border-l-indigo-505 rounded-r-2xl hover:shadow-xs transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px] font-black">{item.days}</span>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      {item.goal}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-500 font-semibold sm:max-w-md">
                    {item.focus}
                  </span>
                </div>
              ))}
            </div>

            {/* Daily timetable block */}
            <div className="p-6 border border-slate-200 bg-slate-50/30 rounded-3xl space-y-4">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                <Clock size={16} className="text-indigo-500" /> Daily Time-table (~6 hrs/day)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-sans font-bold">
                {[
                  { time: 'Morning', act: 'Quant Sectional test & review' },
                  { time: 'Midday', act: 'Reasoning Sectional test & review' },
                  { time: 'Afternoon', act: 'English Sectional test & review' },
                  { time: 'Evening', act: 'Full-Length timed mock' },
                  { time: 'Night', act: 'Error-log review before sleep' }
                ].map((slot, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1">
                    <span className="block text-[10px] uppercase text-indigo-650">{slot.time}</span>
                    <span className="block text-xs text-slate-700 leading-snug">{slot.act}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 3: PRELIMS → MAINS PLAN ── */}
          <section id="mains-plan" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileCheck size={20} className="stroke-[2.5]" />
              </span>
              Day-Wise Plan: Prelims to Mains (23 Aug – 4 Oct 2026)
            </h2>

            <p className="text-xs sm:text-sm text-slate-555 leading-relaxed font-semibold">
              Don't wait for the Prelims result to start Mains prep — the gap this year is about 6 weeks (23 August to 4 October), and Mains is a different exam: 5 sections, 200 objective marks plus a 25-mark descriptive paper, and it rewards depth over speed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { week: 'Week 1 (Post-Prelims)', title: 'Core Shifts & Descriptive', desc: 'Shift to Data Analysis & Interpretation, Banking/Economy/GA current affairs, and Descriptive English (essay + letter writing).' },
                { week: 'Week 2-3', title: 'Advanced Reasoning & DI Drilling', desc: 'Sectional practice on Mains-level Reasoning (puzzles, input-output, coding) and DI (caselets, missing DI, sufficiency).' },
                { week: 'Week 4-5', title: 'Timed Simulation Runs', desc: 'Full-length Mains mocks under actual sectional timing, targeting 2–3 papers per week.' },
                { week: 'Final Week', title: 'General Awareness revision', desc: 'Daily full mock + revision of current affairs of last 6–8 months + descriptive keyboard typing exercises.' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white border border-slate-200 rounded-3xl space-y-2 hover:border-indigo-300 transition-colors group">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-indigo-650 font-black uppercase tracking-widest">{item.week}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500 transition-colors" />
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight font-display">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 4: SUBJECT-WISE TIME ALLOCATION ── */}
          <section id="subject-allocation" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={20} className="stroke-[2.5]" />
              </span>
              Subject-Wise Time Allocation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-xs sm:text-sm font-sans font-bold">
              {[
                { subject: 'Quant', time: '2 Hours Daily', desc: 'Prelims + Mains DI overlap heavily — prioritise this first.', highlight: false },
                { subject: 'Reasoning', time: '2 Hours Daily', desc: 'Puzzles & seating arrangements carry the most weight.', highlight: false },
                { subject: 'English', time: '1.5 Hours Daily', desc: 'Reading Comprehension first, grammar checks second.', highlight: false },
                { subject: 'Current Affairs', time: '1 Hour Daily', desc: 'Mains-only topic, but start from Prelims week 2 onward.', highlight: false },
                { subject: 'Mock Analysis', time: '60 Min Daily', desc: 'Non-negotiable requirement. Close error analysis loops.', highlight: true }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl space-y-2 flex flex-col justify-between border ${
                    item.highlight 
                      ? 'bg-amber-500/10 border-amber-500/20 text-slate-900' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`block text-xs font-black ${item.highlight ? 'text-amber-600' : 'text-[#1B6EB5]'}`}>
                      {item.subject}
                    </span>
                    <span className="block text-slate-800 font-extrabold text-sm leading-tight">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-455 leading-normal font-semibold m-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <Link href="/ibps-po/quant-tests" className="px-5 py-2 bg-slate-100 hover:bg-[#FBBF24]/10 hover:text-slate-950 border border-slate-200 rounded-2xl text-xs text-[#1B6EB5] font-black no-underline transition-colors">
                Quant sectional tests
              </Link>
              <Link href="/ibps-po/reasoning-tests" className="px-5 py-2 bg-slate-100 hover:bg-[#FBBF24]/10 hover:text-slate-950 border border-slate-200 rounded-2xl text-xs text-[#1B6EB5] font-black no-underline transition-colors">
                Reasoning sectional tests
              </Link>
              <Link href="/ibps-po/english-tests" className="px-5 py-2 bg-slate-100 hover:bg-[#FBBF24]/10 hover:text-slate-950 border border-slate-200 rounded-2xl text-xs text-[#1B6EB5] font-black no-underline transition-colors">
                English sectional tests
              </Link>
            </div>
          </section>

          {/* ── SECTION 5: MOCK TEST STRATEGY ── */}
          <section id="mock-strategy" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <ClipboardList size={20} className="stroke-[2.5]" />
              </span>
              Mock Test Strategy
            </h2>

            <div className="space-y-4">
              {[
                { time: '30+ Days to Prelims', freq: '2-3 Mocks Per Week', desc: 'Focus on analysis and fixing topic gaps between tests.', color: 'border-l-indigo-400' },
                { time: '15-30 Days to Prelims', freq: 'Every Alternate Day', desc: 'Transition into speed building and timing lock management.', color: 'border-l-indigo-500' },
                { time: 'Under 15 Days to Prelims', freq: 'Daily Full-Length TIMED', desc: 'Simulate exact exam CBT timing locks. Non-negotiable daily drill.', color: 'border-l-amber-500' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 bg-white border border-slate-200 border-l-4 ${item.color} rounded-r-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-[10px] text-slate-400 uppercase font-black">{item.time}</span>
                    <span className="block text-sm sm:text-base text-slate-800 font-extrabold">{item.freq}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-semibold">{item.desc}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/ibps-po/mock-tests" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.25)] hover:-translate-y-0.5 no-underline">
                Access Full IBPS PO Mock Tests <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* ── SECTION 6: COMMON MISTAKES ── */}
          <section id="mistakes" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <AlertTriangle size={20} className="stroke-[2.5]" />
              </span>
              Common Study Plan Mistakes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans font-bold">
              {[
                { title: 'Last-Minute Conceptual Overload', desc: 'Starting a new complex topic in the last 15–20 days before Prelims instead of refining high-yield ones.' },
                { title: 'Unreviewed Test Spamming', desc: 'Taking multiple mock tests daily without reviewing errors and logs the same day.' },
                { title: 'Prelims-Only Isolation', desc: 'Preparing only for Prelims and starting Mains prep after results are out, losing 4 critical preparation weeks.' },
                { title: 'Current Affairs Cramming', desc: 'Studying Current Affairs only in the final week before Mains instead of continuous weekly coverage.' },
                { title: 'Generic Timeline Copying', desc: 'Copying someone else\'s 90-day syllabus schedule when you only have 30 days remaining.' },
                { title: 'Ignoring Sectional Cutoffs', desc: 'Neglecting a weak subject because overall scoring trend looks adequate.' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white border border-slate-200 rounded-3xl space-y-1.5 flex items-start gap-3 hover:border-rose-200 transition-colors">
                  <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-slate-800 text-xs sm:text-sm font-black">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed pt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: CROSS NAVIGATION HUB ── */}
          <section id="explore" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={20} className="stroke-[2.5]" />
              </span>
              Prepare with Precision
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans font-bold">
              {[
                { title: 'Detailed Exam Syllabus', path: '/ibps-po/syllabus' },
                { title: 'Notification Guidelines', path: '/ibps-po/notification' },
                { title: 'Previous Year Cut Offs', path: '/ibps-po/cut-off' },
                { title: 'Complete Mock Tests', path: '/ibps-po/mock-tests' },
                { title: 'Important Exam Dates', path: '/ibps-po/important-dates' },
                { title: 'Age & Educational Eligibility', path: '/ibps-po/eligibility' }
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
          </section>

          {/* ── SECTION 8: FAQs ── */}
          <section id="faq" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'What is the best study plan for IBPS PO 2026?', a: 'The best IBPS PO 2026 study plan matches your actual days left before Prelims (22–23 August 2026) — under 20 days means mocks and revision only, 20–45 days means sectional practice plus mocks, and 45+ days means concept-building before mocks.' },
                { q: 'How many days are left for IBPS PO 2026 Prelims?', a: 'IBPS PO 2026 Prelims will be held on 22 and 23 August 2026.' },
                { q: 'When is IBPS PO 2026 Mains exam?', a: 'IBPS PO 2026 Mains exam is scheduled for 4 October 2026, about six weeks after Prelims.' },
                { q: 'How many hours should I study daily for IBPS PO?', a: 'Most successful IBPS PO candidates study 6–8 hours daily, split roughly as 2 hours Quant, 2 hours Reasoning, 1.5 hours English, and the remainder on current affairs and mock analysis.' },
                { q: 'Can I crack IBPS PO in 30 days?', a: 'Cracking IBPS PO Prelims in 30 days is possible if your basics are already clear — the 30 days should go entirely into sectional practice, timed mock tests, and revision, not new topics.' },
                { q: 'Should I prepare for Mains before the Prelims result is out?', a: 'Yes — starting Data Analysis & Interpretation, Banking Awareness, and Descriptive English before the Prelims result comes out gives you extra weeks of Mains preparation instead of losing time waiting.' },
                { q: 'How many mock tests should I take before IBPS PO Prelims?', a: 'In the final two weeks before Prelims, take a full-length mock test daily; in the weeks before that, 2–3 mocks per week is enough alongside sectional practice.' },
                { q: 'What should I avoid in the last few days before IBPS PO Prelims?', a: 'Avoid starting any new topic, taking mocks without reviewing them the same day, and studying beyond your usual routine — the last few days should be revision-only.' },
                { q: 'Is 26 days enough to prepare for IBPS PO Prelims?', a: '26 days is enough to significantly improve your score if you already know the basics — the focus should shift entirely to sectional speed, full-length mocks, and fixing your two weakest sections rather than starting anything new.' },
                { q: 'What is the IBPS PO 2026 exam date?', a: 'IBPS PO 2026 Prelims is on 22–23 August and Mains is on 4 October, as per the official IBPS PO/MT-XVI notification released on 1 July 2026.' }
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

          {/* ── SECTION 9: E-E-A-T / TRUST BLOCK ── */}
          <div className="bg-slate-100/50 border border-slate-200 rounded-2xl p-5 font-sans space-y-3.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 font-sans">
              <span className="flex items-center gap-1 font-sans"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans">
                <ExternalLink size={13} /> Target url:{' '}
                <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold font-sans">
                  PrepGrind online practice engine
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For final mock tests access and live score analytics engine configurations, please sign up directly on the PrepGrind system.
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
export const dynamic = 'force-static';
// Mapped as static HTML prerender
