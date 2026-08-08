// PATH: components/sections/exams/IBPSPOMockTestsPage.tsx
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
  BookOpenCheck,
  HelpCircle,
  CheckSquare
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOMockTestsPage() {
  const exam = getExamData('ibps-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // JSON-LD Schema definitions (excluding AggregateRating since we don't have genuine review data yet)
  const schemas = [
    // 1. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/"},
        {"@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po"},
        {"@type": "ListItem", "position": 3, "name": "Mock Tests", "item": "https://prepbanker.com/ibps-po/mock-tests"}
      ]
    },
    // 2. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the IBPS PO mock test free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, PrepBanker offers free IBPS PO Prelims mock tests that anyone can attempt without payment."
          }
        },
        {
          "@type": "Question",
          "name": "How many mock tests should I take before the IBPS PO Prelims exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most aspirants benefit from attempting at least one full-length mock test per week during general preparation, increasing to near-daily practice in the final two to three weeks before the exam."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a mock test and a previous year paper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mock tests are newly written questions based on the current exam pattern, while previous year papers are actual questions from past IBPS PO exams, making mocks better for pattern practice and PYQs better for understanding real difficulty."
          }
        },
        {
          "@type": "Question",
          "name": "Are IBPS PO mock tests updated for the 2026 exam pattern?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, an accurate IBPS PO mock test series for 2026 should reflect the revised Mains pattern of 170 objective questions across four sections."
          }
        },
        {
          "@type": "Question",
          "name": "Should I attempt sectional tests or full-length tests first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sectional tests should generally come first to build section-specific accuracy, followed by full-length tests to build exam-day timing and stamina."
          }
        },
        {
          "@type": "Question",
          "name": "Does the descriptive paper have a separate cut-off in IBPS PO Mains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, candidates must clear the minimum cut-off in the descriptive paper independently of the objective test score."
          }
        },
        {
          "@type": "Question",
          "name": "How is a mock test different from a Daily Practice Problem (DPP)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A DPP is a short, topic-focused practice set for daily concept-building, while a mock test is a full-length, timed simulation of the actual exam."
          }
        },
        {
          "@type": "Question",
          "name": "What should I check after attempting an IBPS PO mock test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Review your incorrect answers, unattempted questions, time spent per section, and any topics with repeated mistakes, rather than focusing only on the final score."
          }
        }
      ]
    },
    // 3. Course Schema
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "IBPS PO Mock Test Series 2026",
      "description": "Full-length Prelims and Mains mock tests, sectional tests, descriptive paper practice, and daily practice problems for IBPS PO 2026 preparation.",
      "provider": {
        "@type": "Organization",
        "name": "PrepBanker",
        "url": "https://prepbanker.com"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "inLanguage": ["en", "hi"]
      },
      "offers": {
        "@type": "Offer",
        "category": "Free trial available",
        "availability": "https://schema.org/InStock"
      }
    },
    // 4. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Mock Test Series 2026",
      "url": "https://prepbanker.com/ibps-po/mock-tests",
      "dateModified": "2026-07-27",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".how-to-use-section"]
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
            <span className="text-white/80">Mock Tests</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Practice Portal
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Mock Test Series 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal font-sans">
                  Full-length Prelims and Mains tests built on the revised 2026 exam pattern, with sectional tests, descriptive paper practice, and detailed solutions — start free, no card required.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟢 Pattern: Fully updated for revised 2026 Mains (170 objective questions)</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟢 Free Tests: Start immediately, no payment needed</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟢 Coverage: Full Mocks, Sectionals & Descriptive Papers</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Start Your Free Prelims Mock Test <ArrowRight size={14} />
                </a>
                <a
                  href="#test-categories"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Explore Full Test Series
                </a>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Practice Key Highlights
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Test Format</span>
                    <span className="text-sm font-black text-white">Online CBT System</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">All India Rank</span>
                    <span className="text-sm font-black text-[#FBBF24]">Real-time Percentile</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Descriptive Check</span>
                    <span className="text-sm font-black text-white">Model answers provided</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Price Tier</span>
                    <span className="text-sm font-black text-[#FBBF24]">Free trials active</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Tests are calibrated to reflect the difficulty metrics of past 4 years cycles.</span>
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
            <QuickNavigation exam={exam} activeSlug="mock-tests" />
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
                  <a href="#test-categories" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Mock Test Inventory
                  </a>
                </li>
                <li>
                  <a href="#free-mock" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Free Trial Options
                  </a>
                </li>
                <li>
                  <a href="#how-to-use" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Preparation Strategy
                  </a>
                </li>
                <li>
                  <a href="#mock-vs-pyp" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Mocks vs Past Papers
                  </a>
                </li>
                <li>
                  <a href="#quality-indicators" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Test Quality Indicators
                  </a>
                </li>
                <li>
                  <a href="#descriptive-paper" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Descriptive Paper Info
                  </a>
                </li>
                <li>
                  <a href="#sectionals" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Sectional Weakness fixing
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                    Resources & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: MOCK TEST INVENTORY (MOCK TEST CARDS) ── */}
          <section id="test-categories" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <BookOpenCheck size={20} className="stroke-[2.5]" />
                </span>
                IBPS PO 2026 Mock Test Inventory
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                All India Simulation Mode
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Explore different types of timed practice tests calibrated to replicate the exact difficulty, question standard, and section locking of the actual IBPS PO exam.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Full Mock */}
              <div className="p-6 bg-white border border-indigo-150 hover:border-indigo-300 hover:shadow-xs rounded-3xl transition-all duration-300 flex flex-col justify-between gap-5 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-650 text-[10px] font-black rounded-lg border border-indigo-100 uppercase tracking-wider">
                      Full-Length Mock
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                      🔥 12k+ attempts this week
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-indigo-650 transition-colors">
                      IBPS PO Full Mock Test 01
                    </h3>
                    <p className="text-xs text-slate-450 leading-normal font-semibold">
                      Exact replica of Prelims. Covers English (30Q), Quant (35Q), and Reasoning (35Q) with individual 20-minute section locks.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Questions</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">100 Qs</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Duration</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">60 Mins</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Difficulty</span>
                      <span className="font-black text-amber-500 text-xs sm:text-sm">Medium</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.prepgrind.com/signup/ibps-po" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-xs sm:text-sm rounded-2xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.2)] hover:shadow-[0_4px_16px_rgba(250,180,41,0.35)] text-center no-underline cursor-pointer block"
                >
                  Start Test
                </a>
              </div>

              {/* Card 2: Sectional */}
              <div className="p-6 bg-white border border-emerald-150 hover:border-emerald-300 hover:shadow-xs rounded-3xl transition-all duration-300 flex flex-col justify-between gap-5 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2.5 py-1 bg-emerald-50/50 text-emerald-650 text-[10px] font-black rounded-lg border border-emerald-100 uppercase tracking-wider">
                      Sectional Drill
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                      ⭐ Recommended
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-emerald-650 transition-colors">
                      IBPS PO Sectional: Quantitative Aptitude 03
                    </h3>
                    <p className="text-xs text-slate-455 leading-normal font-semibold">
                      Sharpen mathematical logic, data interpretation (DI), and numerical speed against the clock.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Questions</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">35 Qs</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Duration</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">20 Mins</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Difficulty</span>
                      <span className="font-black text-rose-500 text-xs sm:text-sm">Hard</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.prepgrind.com/signup/ibps-po" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-650 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-[0_4px_12px_rgba(5,150,105,0.15)] hover:shadow-[0_4px_16px_rgba(5,150,105,0.25)] text-center no-underline cursor-pointer block"
                >
                  Start Test
                </a>
              </div>

              {/* Card 3: Chapter Test */}
              <div className="p-6 bg-white border border-amber-150 hover:border-amber-300 hover:shadow-xs rounded-3xl transition-all duration-300 flex flex-col justify-between gap-5 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2.5 py-1 bg-amber-50/50 text-amber-600 text-[10px] font-black rounded-lg border border-amber-100 uppercase tracking-wider">
                      Chapter-Wise
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                      ⚡ Build Accuracy
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-amber-600 transition-colors">
                      IBPS PO Chapter: Quadratic Equations 01
                    </h3>
                    <p className="text-xs text-slate-455 leading-normal font-semibold">
                      Targeted accuracy drills to master concept checks and roots identification parameters.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Questions</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">20 Qs</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Duration</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">15 Mins</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Difficulty</span>
                      <span className="font-black text-emerald-500 text-xs sm:text-sm">Easy</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.prepgrind.com/signup/ibps-po" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-[0_4px_12px_rgba(245,158,11,0.15)] hover:shadow-[0_4px_16px_rgba(245,158,11,0.25)] text-center no-underline cursor-pointer block"
                >
                  Start Test
                </a>
              </div>

              {/* Card 4: Previous Year */}
              <div className="p-6 bg-white border border-rose-150 hover:border-rose-300 hover:shadow-xs rounded-3xl transition-all duration-300 flex flex-col justify-between gap-5 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2.5 py-1 bg-rose-50 text-rose-650 text-[10px] font-black rounded-lg border border-rose-100 uppercase tracking-wider">
                      Previous Year Paper
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                      👍 Real Benchmarks
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-rose-650 transition-colors">
                      IBPS PO Prelims 2025 PYQ Paper
                    </h3>
                    <p className="text-xs text-slate-455 leading-normal font-semibold">
                      Official questions from past year cycles to gauge entry-level thresholds.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Questions</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">100 Qs</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Duration</span>
                      <span className="font-black text-slate-800 text-xs sm:text-sm">60 Mins</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Difficulty</span>
                      <span className="font-black text-amber-500 text-xs sm:text-sm">Medium</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.prepgrind.com/signup/ibps-po" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-rose-600 hover:bg-rose-655 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-[0_4px_12px_rgba(225,29,72,0.15)] hover:shadow-[0_4px_16px_rgba(225,29,72,0.25)] text-center no-underline cursor-pointer block"
                >
                  Start Test
                </a>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: FREE TRIAL MOCKS ── */}
          <section id="free-mock" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </span>
              Free Trial Mocks & Baseline Check
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Live diagnostics dashboard simulation */}
              <div className="lg:col-span-8 p-6 bg-gradient-to-br from-emerald-50/20 to-white border border-emerald-100 rounded-3xl space-y-4 shadow-xs">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">Diagnostic Mode</span>
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Free Prelims Mock Test</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg border border-emerald-100 uppercase">
                    Zero Cost
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
                  Get a clean read on your baseline speed and conceptual gaps. Attempt a free, complete Prelims test styled exactly like the real CBT interface.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-emerald-100/50 pt-4 text-xs font-semibold text-slate-600">
                  <div className="flex gap-2 items-start">
                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Real-time Percentile comparison</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Detailed explainers for every skip</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Section-wise timer parameters</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Claim card */}
              <div className="lg:col-span-4 p-5 bg-slate-900 text-white rounded-3xl flex flex-col justify-between gap-5 shadow-md">
                <div className="space-y-2">
                  <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider">Instant Access</span>
                  <h4 className="font-extrabold text-white text-base sm:text-lg">No Credit Card Needed</h4>
                  <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                    Sign up immediately on our practice engine to claim your free mock credit and start practicing.
                  </p>
                </div>

                <a 
                  href="https://app.prepgrind.com/signup/ibps-po" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl text-center shadow-[0_4px_12px_rgba(251,191,36,0.2)] transition-all hover:-translate-y-0.5 no-underline block cursor-pointer"
                >
                  Claim Free Trial
                </a>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: PREPARATION STRATEGY TIMELINE ── */}
          <section id="how-to-use" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              How to Actually Use a Mock Test Series
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Do not blindly take exam simulations. Follow this proven sequence to ensure progressive improvements:
            </p>

            <div className="space-y-3.5">
              {[
                { step: '1', title: 'Concept Building', desc: 'Solve topic-wise chapter drills to lock down accuracy parameters before timing constraints are added.', label: 'Basic' },
                { step: '2', title: 'Sectional Lockouts', desc: 'Attempt sectional tests to practice managing section locks (20-min segments for English, Quant, Reasoning).', label: 'Sectional' },
                { step: '3', title: 'Full Simulations', desc: 'Take complete 100-question Prelims mock tests under clean CBT simulator environments.', label: 'Full Prelims' },
                { step: '4', title: 'Previous Year Paper Calibration', desc: 'Drill official papers to calibrate your scoring accuracy against past standard datasets.', label: 'PYQs' },
                { step: '5', title: 'Mains-Level Hardness', desc: 'Transition into Mains objective sets and type descriptive answer sheets under full timed parameters.', label: 'Mains Mode' },
                { step: '6', title: 'Post-Test Analytical Reviews', desc: 'Spend double the test duration analyzing errors, gaps, and where speed was disproportionately lost.', label: 'Post-Mortem' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-white border border-slate-200 border-l-4 border-l-indigo-505 rounded-r-2xl hover:shadow-xs transition-shadow duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <span className="block font-black text-slate-805 text-sm sm:text-base leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{item.desc}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 bg-slate-100 rounded text-[10px] font-black text-slate-600 shrink-0 self-start sm:self-auto">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-900 text-white rounded-2xl font-sans text-xs sm:text-sm font-semibold leading-normal">
              💡 Remember: A mock test only helps if you review it. Drilling 50 tests without review yields less progress than 10 tests reviewed properly.
            </div>
          </section>

          {/* ── SECTION 4: MOCK TEST VS PREVIOUS YEAR PAPERS ── */}
          <section id="mock-vs-pyp" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              Mock Tests vs Previous Year Papers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Mock Mocks */}
              <div className="p-6 bg-white border border-slate-250 rounded-3xl space-y-4 shadow-xs">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2 border-b border-slate-100 pb-3 font-display">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-650" /> Mock Tests
                </h4>
                <div className="space-y-3.5 text-xs font-semibold text-slate-500">
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Content Base:</strong> Newly written questions calibrated to reflect recent structural syllabus shifts.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Core Purpose:</strong> Speed building, accuracy practice, and CBT interface alignment drills.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Optimal Stage:</strong> Best utilized throughout preparation, ramping up to daily tests in the final weeks.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: PYQs */}
              <div className="p-6 bg-white border border-indigo-150 rounded-3xl space-y-4 shadow-xs">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2 border-b border-slate-100 pb-3 font-display">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1B6EB5]" /> Previous Year Papers
                </h4>
                <div className="space-y-3.5 text-xs font-semibold text-slate-500">
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-indigo-655 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Content Base:</strong> Actual past questions set by official IBPS exam committees.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-indigo-655 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Core Purpose:</strong> Understanding the baseline difficulty threshold and standard topic weights.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-indigo-655 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Optimal Stage:</strong> Best used early in preparation to understand standard targets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: WHAT MAKES A GOOD MOCK TEST ── */}
          <section id="quality-indicators" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={20} className="stroke-[2.5]" />
              </span>
              What Makes a Good IBPS PO Mock Test
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: 'Pattern Accuracy', desc: 'Reflects the exact 100-question Prelims and 170-question Mains objective splits.', icon: CheckSquare, color: 'border-blue-150 bg-blue-50/5 text-blue-650' },
                { title: 'Sectional Locks', desc: 'Enforces the official 20-minute subject lock limits strictly.', icon: Lock, color: 'border-emerald-150 bg-emerald-50/5 text-emerald-650' },
                { title: 'Explainer Depth', desc: 'Provides clear mathematical shortcut write-ups, not just raw keys.', icon: FileText, color: 'border-purple-150 bg-purple-50/5 text-purple-650' },
                { title: 'Percentile Rank', desc: 'Benchmarks scores against other active candidates for true standing.', icon: Trophy, color: 'border-slate-200 bg-slate-50/10 text-slate-705' },
                { title: 'Calibrated Hardness', desc: 'Aligns difficulty with actual IBPS standards to ensure accurate practice.', icon: Target, color: 'border-rose-150 bg-rose-50/5 text-rose-650' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xs transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className={`p-2 w-fit rounded-lg ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-850 group-hover:text-indigo-650 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal font-semibold m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 6: DESCRIPTIVE WRITING PRACTICE ── */}
          <section id="descriptive-paper" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileText size={20} className="stroke-[2.5]" />
              </span>
              Descriptive Writing Practice — Often Decisive
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Typewriter text editor block mockup */}
              <div className="lg:col-span-6">
                <div className="bg-slate-900 text-white rounded-2xl p-6 font-mono relative overflow-hidden shadow-md">
                  <div className="absolute top-2 right-3 flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="text-slate-400">// IBPS PO Mains Descriptive Box</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-slate-300 font-sans leading-relaxed">
                      💡 Write an essay on "The Role of Digital Public Infrastructure in India's Financial Inclusion Goals" (150 words)...
                    </div>
                    <div className="text-right text-[10px] text-amber-400">// Time Left: 24:15 | Word Count: 142</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Details */}
              <div className="lg:col-span-6 p-5 bg-white border border-slate-200 rounded-3xl space-y-3 shadow-xs font-sans text-xs sm:text-sm text-slate-500">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-850 flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-[#1B6EB5]" /> Descriptive Section Targets
                </h4>
                <p className="font-semibold leading-relaxed">
                  The Mains Descriptive Paper yields 25 marks (Letter + Essay writing) and is evaluated separately. Cleared cutoffs are mandatory to qualify for interview rounds.
                </p>
                <div className="flex flex-col gap-1 text-[11px] font-bold text-slate-655">
                  <span>· Time Limit: 30 minutes online typing layout</span>
                  <span>· Evaluation: Evaluates content structure and vocabulary relevance</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: SECTION-WISE PRACTICE ── */}
          <section id="sectionals" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={20} className="stroke-[2.5]" />
              </span>
              Section-Wise Practice — Go Deeper
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
              Full-length tests measure exam readiness, but targeted weakness-fixing happens at the section level:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans font-bold">
              {[
                { title: 'English Language Sectionals', path: '/ibps-po/english-tests', note: 'Want to drill English alone first? Try English sectional tests' },
                { title: 'Quantitative Aptitude Sectionals', path: '/ibps-po/quant-tests', note: 'Want to drill Quant and DI alone first? Try Quant sectional tests' },
                { title: 'Reasoning Ability Sectionals', path: '/ibps-po/reasoning-tests', note: 'Want to drill Reasoning alone first? Try Reasoning sectional tests' }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="p-5 bg-slate-50 border border-slate-150 rounded-2xl hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/5 group transition-all flex flex-col justify-between no-underline"
                >
                  <div className="space-y-1.5">
                    <span className="text-slate-900 font-extrabold text-sm sm:text-base leading-snug group-hover:text-[#1B6EB5] transition-colors block">{item.title}</span>
                    <span className="text-xs text-slate-500 font-semibold leading-relaxed block">{item.note}</span>
                  </div>
                  <div className="pt-3 flex items-center justify-end text-xs text-[#1B6EB5] font-black tracking-wider uppercase gap-1">
                    Drill Section <ChevronRight size={14} className="text-slate-400 group-hover:text-[#FBBF24] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Product CTA Banner Block */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl text-white space-y-4 shadow-md font-sans">
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="font-black text-base sm:text-lg text-white">Ready to benchmark your rank? Start now.</h4>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Take a diagnostic mock test. Instant explanations, scorecards, and sectional analytical splits included.
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
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-black text-white font-sans">
                  <span>Practice:</span>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer font-sans font-bold">Daily concept drills</a>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer font-sans font-bold">Past Solved Papers</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 8: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'Is the IBPS PO mock test free?', a: 'Yes, PrepBanker offers free IBPS PO Prelims mock tests that anyone can attempt without payment.' },
                { q: 'How many mock tests should I take before the IBPS PO Prelims exam?', a: 'Most aspirants benefit from attempting at least one full-length mock test per week during general preparation, increasing to near-daily practice in the final two to three weeks before the exam.' },
                { q: 'What is the difference between a mock test and a previous year paper?', a: 'Mock tests are newly written questions based on the current exam pattern, while previous year papers are actual questions from past IBPS PO exams, making mocks better for pattern practice and PYQs better for understanding real difficulty.' },
                { q: 'Are IBPS PO mock tests updated for the 2026 exam pattern?', a: 'Yes, an accurate IBPS PO mock test series for 2026 should reflect the revised Mains pattern of 170 objective questions across four sections.' },
                { q: 'Should I attempt sectional tests or full-length tests first?', a: 'Sectional tests should generally come first to build section-specific accuracy, followed by full-length tests to build exam-day timing and stamina.' },
                { q: 'Does the descriptive paper have a separate cut-off in IBPS PO Mains?', a: 'Yes, candidates must clear the minimum cut-off in the descriptive paper independently of the objective test score.' },
                { q: 'How is a mock test different from a Daily Practice Problem (DPP)?', a: 'A DPP is a short, topic-focused practice set for daily concept-building, while a mock test is a full-length, timed simulation of the actual exam.' },
                { q: 'What should I check after attempting an IBPS PO mock test?', a: 'Review your incorrect answers, unattempted questions, time spent per section, and any topics with repeated mistakes, rather than focusing only on the final score.' }
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
                  PrepGrind Online portal
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
