// PATH: components/sections/exams/IBPSPOExamPatternPage.tsx
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
  Timer
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOExamPatternPage() {
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
        {"@type": "ListItem", "position": 3, "name": "Exam Pattern", "item": "https://prepbanker.com/ibps-po/exam-pattern"}
      ]
    },
    // 2. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many marks is the IBPS PO Prelims exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO Prelims exam is conducted for 100 marks across 100 questions in 60 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "How many marks is the IBPS PO Mains exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO Mains exam carries 225 marks in total - 200 marks for the objective test and 25 marks for the descriptive paper."
          }
        },
        {
          "@type": "Question",
          "name": "Is there negative marking in IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IBPS PO deducts 0.25 marks for every wrong answer in both the Prelims and Mains objective tests, with no penalty for unattempted questions."
          }
        },
        {
          "@type": "Question",
          "name": "What changed in the IBPS PO Mains pattern for 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO 2026 Mains pattern increased the total objective questions from 145 to 170, with General Awareness gaining 15 more questions and English Language marks reduced from 40 to 20 despite more questions."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the IBPS PO Mains exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO Mains exam runs for 190 minutes in total - 160 minutes for the objective test and 30 minutes for the descriptive paper."
          }
        },
        {
          "@type": "Question",
          "name": "Are IBPS PO Prelims marks added to the final result?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, IBPS PO Prelims marks are used only to shortlist candidates for Mains and are not counted in the final merit list."
          }
        },
        {
          "@type": "Question",
          "name": "Is the IBPS PO Prelims exam sectionally timed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, each of the three Prelims sections - English, Quantitative Aptitude, and Reasoning - has its own fixed 20-minute time limit."
          }
        },
        {
          "@type": "Question",
          "name": "What is the descriptive paper pattern in IBPS PO Mains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO descriptive paper consists of 2 questions, an essay and a comprehension-based question, worth 25 marks, to be completed in 30 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "How many questions are in the IBPS PO Mains exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO Mains exam has 172 total questions - 170 objective questions plus 2 descriptive questions."
          }
        }
      ]
    },
    // 3. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Exam Pattern 2026",
      "url": "https://prepbanker.com/ibps-po/exam-pattern",
      "dateModified": "2026-07-27",
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": ".pattern-table"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".quick-stat-row"]
      },
      "about": {
        "@type": "Thing",
        "name": "IBPS PO Exam Pattern"
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
            <span className="text-white/80">Exam Pattern</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Official Pattern
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Exam Pattern 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal font-sans">
                  Official section-wise marks, question count, and timing for Prelims and Mains under CRP PO/MT-XVI — plus a side-by-side of exactly what changed from last year's pattern.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟢 Prelims Pattern: Unchanged — 100 marks, 60 minutes</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟡 Mains Pattern: Revised for 2026 — 170 objective questions (up from 145)</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟢 Negative Marking: 0.25 marks per wrong answer</span>
              </div>

              {/* Quick-stat Row */}
              <div className="quick-stat-row grid grid-cols-2 sm:grid-cols-4 gap-4 font-sans text-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="block text-xl sm:text-2xl font-black text-white">100 Marks</span>
                  <span className="text-[10px] text-white/55 font-bold uppercase tracking-wider">Prelims / 60 Min</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="block text-xl sm:text-2xl font-black text-white">200 Marks</span>
                  <span className="text-[10px] text-white/55 font-bold uppercase tracking-wider">Mains Obj / 160 Min</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="block text-xl sm:text-2xl font-black text-white">25 Marks</span>
                  <span className="text-[10px] text-white/55 font-bold uppercase tracking-wider">Mains Desc / 30 Min</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">225 Marks</span>
                  <span className="text-[10px] text-white/55 font-bold uppercase tracking-wider">Mains Grand Total</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/ibps-po/mock-tests"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Practice the Exact Pattern — Take a Free Prelims Mock
                </Link>
                <Link
                  href="/ibps-po/syllabus"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  See Full Syllabus by Section <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <div className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Pattern Quick Summary
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Prelims Format</span>
                    <span className="text-sm font-black text-white">CBT - 3 sections</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mains Obj Qns</span>
                    <span className="text-sm font-black text-[#FBBF24]">170 Questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Descriptive Format</span>
                    <span className="text-sm font-black text-white">Online Typewriter</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Negative Marks</span>
                    <span className="text-sm font-black text-white">-0.25 penalty</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>The descriptive test is evaluated immediately after the objective sections finish.</span>
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
            <QuickNavigation exam={exam} activeSlug="exam-pattern" />
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
                  <a href="#prelims-pattern" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Prelims Exam Pattern
                  </a>
                </li>
                <li>
                  <a href="#mains-pattern" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Mains Exam Pattern
                  </a>
                </li>
                <li>
                  <a href="#what-changed" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Pattern Modifications
                  </a>
                </li>
                <li>
                  <a href="#marking-scheme" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Marking & Penalties
                  </a>
                </li>
                <li>
                  <a href="#time-breakdown" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Time-Per-Question Split
                  </a>
                </li>
                <li>
                  <a href="#descriptive-details" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Descriptive Format Details
                  </a>
                </li>
                <li>
                  <a href="#selection-fit" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Selection Weightage
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

          {/* ── SECTION 1: PRELIMS EXAM PATTERN ── */}
          <section id="prelims-pattern" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-blue-500/10 text-[#1B6EB5] flex items-center justify-center">
                  <FileSpreadsheet size={20} className="stroke-[2.5]" />
                </span>
                IBPS PO Prelims Exam Pattern 2026
              </h2>
              <span className="px-3 py-1 bg-blue-50 text-[#1B6EB5] text-xs font-black rounded-lg border border-blue-100 self-start sm:self-auto">
                Phase I: Screening
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              The Prelims pattern remains unchanged for 2026. It is a 60-minute online screening test consisting of three sectionally timed papers, carrying a total of 100 marks.
            </p>

            <div className="border border-blue-200 rounded-2xl overflow-hidden shadow-xs bg-white pattern-table">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50/80 to-blue-100/30 border-b border-blue-200 text-blue-900 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Section</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Questions</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Marks</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Sectional Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-blue-50/10 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">English Language</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3 font-semibold text-slate-500">20 minutes</td>
                  </tr>
                  <tr className="hover:bg-blue-50/10 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">Quantitative Aptitude</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3 font-semibold text-slate-500">20 minutes</td>
                  </tr>
                  <tr className="hover:bg-blue-50/10 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">Reasoning Ability</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3 font-semibold text-slate-500">20 minutes</td>
                  </tr>
                  <tr className="bg-blue-50/40 font-black text-[#1B6EB5] border-t border-blue-100">
                    <td className="px-4 py-3.5 font-black text-slate-900">Total Score</td>
                    <td className="px-4 py-3.5">100</td>
                    <td className="px-4 py-3.5">100</td>
                    <td className="px-4 py-3.5">60 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key bullet points card */}
            <div className="p-5 bg-gradient-to-r from-blue-50/60 to-slate-50 border border-blue-100 rounded-2xl flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-blue-500/10 text-[#1B6EB5] shrink-0 mt-0.5">
                <Info size={16} />
              </div>
              <div className="space-y-2">
                <div className="font-extrabold text-sm text-slate-900">Crucial Prelims Guidelines</div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-semibold list-disc list-inside">
                  <li>Each section is individually timed — you cannot borrow time from one section for another.</li>
                  <li>Medium of exam: English Language section is English-only; Quant and Reasoning are available in English and Hindi.</li>
                  <li>Candidates must clear both the sectional cut-off and the overall cut-off to be shortlisted → see our{' '}
                    <Link href="/ibps-po/cut-off" className="text-[#1B6EB5] hover:underline font-extrabold">Cut Off page</Link> for exact marks.
                  </li>
                  <li>Prelims marks are used only for shortlisting — they are not added to your final merit score.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: MAINS EXAM PATTERN ── */}
          <section id="mains-pattern" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <FileCheck size={20} className="stroke-[2.5]" />
                </span>
                IBPS PO Mains Exam Pattern 2026 (Revised)
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                Phase II: Main Merit Exam
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              IBPS revised the Mains objective pattern for 2026 — 25 more questions than 2025, with more weightage shifted toward General/Banking Awareness.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Objective Sections list */}
              <div className="lg:col-span-8 space-y-3">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 border-l-3 border-indigo-500 pl-2">
                  Objective Test Sections (200 Marks Total)
                </h3>
                
                <div className="space-y-3">
                  {[
                    { subject: 'Data Analysis & Interpretation', qns: 40, marks: 60, time: '45 mins', desc: 'Focuses on complex caselets, graphs, charts, and data sufficiency.' },
                    { subject: 'Reasoning Ability', qns: 40, marks: 60, time: '45 mins', desc: 'Advanced logical reasoning, complex puzzles, and input-output.' },
                    { subject: 'General / Economy / Banking Awareness', qns: 50, marks: 60, time: '35 mins', desc: 'Includes RBI circular updates, Union budget, and financial news.' },
                    { subject: 'English Language', qns: 40, marks: 20, time: '35 mins', desc: 'High-speed vocabulary, comprehension, and error correction.' }
                  ].map((sec, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-indigo-300 hover:shadow-xs transition-all duration-200 space-y-2.5 group"
                    >
                      <div className="flex justify-between items-center gap-3">
                        <span className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-indigo-650 transition-colors">
                          {sec.subject}
                        </span>
                        <div className="flex gap-2 text-xs font-black shrink-0">
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                            {sec.qns} Qs
                          </span>
                          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded">
                            {sec.marks} Marks
                          </span>
                          <span className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded">
                            {sec.time}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 font-semibold leading-normal">
                        {sec.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Descriptive details & summary */}
              <div className="lg:col-span-4 space-y-5">
                <div className="bg-indigo-50/40 border border-indigo-100 rounded-2xl p-5 space-y-4">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 border-l-3 border-indigo-500 pl-2">
                    Descriptive Test (25 Marks)
                  </h3>
                  <div className="space-y-3.5">
                    <div className="p-4 bg-white border border-indigo-100/50 rounded-xl space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-xs text-slate-800">Essay & Letter Writing</span>
                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs font-black">25 Marks</span>
                      </div>
                      <p className="text-xs text-slate-500 font-semibold leading-normal">
                        2 Questions typed online in English within 30 minutes. Assesses formatting, vocabulary, and grammar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl text-white space-y-3 shadow-md">
                  <div className="font-black text-sm uppercase tracking-wider text-amber-400">Mains Pattern Total</div>
                  <div className="space-y-2 text-xs font-semibold text-slate-300">
                    <div className="flex justify-between">
                      <span>Total Questions</span>
                      <span className="text-white font-extrabold">172 (170 Obj + 2 Desc)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grand Total Marks</span>
                      <span className="text-white font-extrabold">225 Marks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Timing</span>
                      <span className="text-white font-extrabold">190 minutes (3h 10m)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: WHAT CHANGED ── */}
          <section id="what-changed" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              What Changed — IBPS PO Mains 2025 vs 2026
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Below is a detailed shift breakdown. General Awareness and Data Interpretation have gained questions and weight, while English has been heavily down-weighted.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                { subject: 'General / Economy / Banking Awareness', oldPattern: '35 Qs / 50 Marks / 25 min', newPattern: '50 Qs / 60 Marks / 35 min', diff: '+15 Questions, +10 Marks, +10 Minutes', type: 'increase' },
                { subject: 'Data Analysis & Interpretation', oldPattern: '35 Qs / 50 Marks / 45 min', newPattern: '40 Qs / 60 Marks / 45 min', diff: '+5 Questions, +10 Marks', type: 'increase' },
                { subject: 'English Language', oldPattern: '35 Qs / 40 Marks / 40 min', newPattern: '40 Qs / 20 Marks / 35 min', diff: '+5 Questions, −20 Marks, −5 Minutes', type: 'decrease' },
                { subject: 'Reasoning Ability', oldPattern: '40 Qs / 60 Marks / 50 min', newPattern: '40 Qs / 60 Marks / 45 min', diff: '−5 Minutes timing trimmed', type: 'decrease' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 bg-white border rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                    item.type === 'increase' ? 'border-emerald-100 hover:border-emerald-300' : 'border-slate-200 hover:border-slate-350'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-extrabold text-sm sm:text-base text-slate-800">{item.subject}</span>
                    <div className="flex gap-4 text-xs font-semibold text-slate-500">
                      <span>2025: <strong className="text-slate-600">{item.oldPattern}</strong></span>
                      <span>2026: <strong className="text-slate-600">{item.newPattern}</strong></span>
                    </div>
                  </div>
                  <span className={`px-3.5 py-1.5 rounded-xl text-xs font-black self-start md:self-auto ${
                    item.type === 'increase' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-500'
                  }`}>
                    {item.diff}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-455" />
              <p className="m-0 leading-normal">
                <strong>Takeaway:</strong> English questions are now worth only 0.5 marks each. Speed is vital here. General Awareness has grown into a major driver for clearing the cut-off.
              </p>
            </div>
          </section>

          {/* ── SECTION 4: MARKING SCHEME & NEGATIVE MARKING ── */}
          <section id="marking-scheme" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <AlertTriangle size={20} className="stroke-[2.5]" />
              </span>
              Marking Scheme & Negative Marking Rules
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Correct */}
              <div className="p-5 bg-emerald-50/20 border border-emerald-200 rounded-2xl text-center space-y-3">
                <div className="mx-auto w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle size={20} className="stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <div className="font-extrabold text-sm text-slate-900">Correct Answer</div>
                  <p className="text-xl font-black text-emerald-600">+1.00 Mark</p>
                  <p className="text-xs text-slate-400 font-semibold">Or assigned full marks per question</p>
                </div>
              </div>

              {/* Incorrect */}
              <div className="p-5 bg-rose-50/20 border border-rose-200 rounded-2xl text-center space-y-3">
                <div className="mx-auto w-10 h-10 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center">
                  <XCircle size={20} className="stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <div className="font-extrabold text-sm text-slate-900">Incorrect Answer</div>
                  <p className="text-xl font-black text-rose-650">-0.25 Marks</p>
                  <p className="text-xs text-slate-400 font-semibold">One-fourth penalty deducted</p>
                </div>
              </div>

              {/* Unattempted */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-3">
                <div className="mx-auto w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                  <Clock size={20} className="stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <div className="font-extrabold text-sm text-slate-900">Unanswered Question</div>
                  <p className="text-xl font-black text-slate-500">0.00 Marks</p>
                  <p className="text-xs text-slate-400 font-semibold">No penalty for skipped questions</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                Negative marking applies to both Prelims and Mains objective tests. There is no negative marking on the descriptive test.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: TIME-PER-QUESTION BREAKDOWN ── */}
          <section id="time-breakdown" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Timer size={20} className="stroke-[2.5]" />
              </span>
              Time-Per-Question Breakdown (Section Split)
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              This visualizes the approximate seconds available per question. While Prelims demands high speed, Mains focuses on depth and concept validation.
            </p>

            <div className="space-y-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Prelims */}
                <div className="space-y-4">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 border-l-3 border-blue-500 pl-2">
                    Prelims (60 minutes total)
                  </h3>
                  <div className="space-y-3.5">
                    {[
                      { section: 'Quantitative Aptitude', time: '34 sec', percent: 34, color: 'bg-blue-500' },
                      { section: 'Reasoning Ability', time: '34 sec', percent: 34, color: 'bg-blue-500' },
                      { section: 'English Language', time: '40 sec', percent: 40, color: 'bg-blue-400' }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>{item.section}</span>
                          <span className="text-blue-600 font-extrabold">{item.time}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mains */}
                <div className="space-y-4">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 border-l-3 border-indigo-500 pl-2">
                    Mains (160 minutes total)
                  </h3>
                  <div className="space-y-3.5">
                    {[
                      { section: 'Reasoning Ability', time: '67 sec', percent: 67, color: 'bg-indigo-650' },
                      { section: 'Data Analysis & Interpretation', time: '67 sec', percent: 67, color: 'bg-indigo-650' },
                      { section: 'English Language', time: '52 sec', percent: 52, color: 'bg-indigo-500' },
                      { section: 'General Awareness', time: '42 sec', percent: 42, color: 'bg-indigo-400' }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>{item.section}</span>
                          <span className="text-indigo-600 font-extrabold">{item.time}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl font-sans text-xs sm:text-sm text-white font-semibold leading-normal">
              Mains gives you almost twice the time per question compared to Prelims — the real challenge shifts from speed to depth, especially in DAI and Reasoning where puzzles and multi-step calculations dominate.
            </div>
          </section>

          {/* ── SECTION 6: DESCRIPTIVE PAPER DETAILS ── */}
          <section id="descriptive-details" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileText size={20} className="stroke-[2.5]" />
              </span>
              Descriptive Paper — Structure & Evaluation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Details */}
              <div className="md:col-span-7 grid grid-cols-1 gap-4">
                {[
                  { title: 'Immediate Transition', text: 'Conducted online immediately after completing the Mains objective test on the same day.' },
                  { title: 'Format & Length', text: 'Consists of 2 questions: one Letter Writing and one Essay Writing, typed in English.' },
                  { title: 'Evaluation System', text: 'Evaluated online using validated automated grading tools checking grammar, syntax, and keywords.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-4 bg-slate-50 border border-slate-150 rounded-2xl">
                    <CheckCircle size={16} className="text-indigo-650 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-extrabold text-sm text-slate-800">{item.title}</span>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-normal">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Weight card */}
              <div className="md:col-span-5 flex">
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-150 rounded-3xl w-full flex flex-col justify-between gap-6 hover:shadow-xs transition-shadow duration-300">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600">Descriptive Summary</span>
                    <div className="font-extrabold text-slate-900 text-base sm:text-lg">Marks & Time Limits</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl text-center">
                      <span className="block text-xl font-black text-indigo-600">25 Marks</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Weightage</span>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl text-center">
                      <span className="block text-xl font-black text-amber-500">30 Min</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Duration</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed italic m-0">
                    *Requires keyboard typing accuracy. Topics include financial trends and bank letters.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 leading-normal">
            Note: There is no negative marking on the descriptive paper. Detail lists of recurring themes and topics are hosted on the syllabus page.
          </div>

          {/* ── SECTION 7: FINAL SELECTION WEIGHTS ── */}
          <section id="selection-fit" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Trophy size={20} className="stroke-[2.5]" />
              </span>
              How Prelims and Mains Fit Into Final Selection
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
              The final selection combines Mains (objective + descriptive) and the Interview in an 80:20 ratio. Prelims marks serve purely as a qualification threshold to shortlist for Mains.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-800">Final Weightage Split</h3>
              
              <div className="space-y-2">
                {/* Split Bar */}
                <div className="w-full h-8 rounded-2xl overflow-hidden flex font-sans text-xs font-black text-white">
                  <div className="bg-indigo-650 h-full flex items-center justify-center transition-all duration-300" style={{ width: '80%' }}>
                    Mains (80%)
                  </div>
                  <div className="bg-amber-400 h-full flex items-center justify-center transition-all duration-300" style={{ width: '20%' }}>
                    Interview (20%)
                  </div>
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-500 pt-1">
                  <span>80% from Mains (out of 225)</span>
                  <span>20% from Interview (out of 100)</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ibps-po/selection-process"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(15,23,42,0.15)] hover:-translate-y-0.5 no-underline flex items-center gap-1.5 w-fit"
              >
                Understand Selection Process Stages <ChevronRight size={14} />
              </Link>
            </div>
          </section>

          {/* ── SECTION 8: EXPLORE MORE - LINK HUB ── */}
          <section id="explore" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={18} />
              </span>
              Continue Your IBPS PO 2026 Preparation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans">
              {[
                { title: 'Notification 2026', path: '/ibps-po/notification' },
                { title: 'Admit Card Download', path: '/ibps-po/admit-card' },
                { title: 'Eligibility Criteria', path: '/ibps-po/eligibility' },
                { title: 'Important Dates', path: '/ibps-po/important-dates' },
                { title: 'Complete Syllabus', path: '/ibps-po/syllabus' },
                { title: 'Previous Cut Offs', path: '/ibps-po/cut-off' }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="p-4 bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-[0_8px_20px_-6px_rgba(99,102,241,0.06)] hover:-translate-y-0.5 transition-all rounded-2xl flex items-center justify-between group no-underline"
                >
                  <span className="text-slate-700 group-hover:text-indigo-650 group-hover:underline font-extrabold text-sm sm:text-base leading-snug transition-colors">{item.title}</span>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-indigo-650 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>

            {/* Product CTA Banner Block */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl text-white space-y-4 shadow-md font-sans">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="font-black text-base sm:text-lg text-white">Pattern mapped — now start practicing.</div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Baseline your score with our diagnostic mocks. Build accuracy across quantitative, English, and reasoning subjects.
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
                { q: 'How many marks is the IBPS PO Prelims exam?', a: 'The IBPS PO Prelims exam is conducted for 100 marks across 100 questions in 60 minutes.' },
                { q: 'How many marks is the IBPS PO Mains exam?', a: 'The IBPS PO Mains exam carries 225 marks in total — 200 marks for the objective test and 25 marks for the descriptive paper.' },
                { q: 'Is there negative marking in IBPS PO?', a: 'Yes, IBPS PO deducts 0.25 marks for every wrong answer in both the Prelims and Mains objective tests, with no penalty for unattempted questions.' },
                { q: 'What changed in the IBPS PO Mains pattern for 2026?', a: 'The IBPS PO 2026 Mains pattern increased the total objective questions from 145 to 170, with General Awareness gaining 15 more questions and English Language marks reduced from 40 to 20 despite more questions.' },
                { q: 'How long is the IBPS PO Mains exam?', a: 'The IBPS PO Mains exam runs for 190 minutes in total — 160 minutes for the objective test and 30 minutes for the descriptive paper.' },
                { q: 'Are IBPS PO Prelims marks added to the final result?', a: 'No, IBPS PO Prelims marks are used only to shortlist candidates for Mains and are not counted in the final merit list.' },
                { q: 'Is the IBPS PO Prelims exam sectionally timed?', a: 'Yes, each of the three Prelims sections — English, Quantitative Aptitude, and Reasoning — has its own fixed 20-minute time limit.' },
                { q: 'What is the descriptive paper pattern in IBPS PO Mains?', a: 'The IBPS PO descriptive paper consists of 2 questions (an essay and a comprehension-based question) worth 25 marks, to be completed in 30 minutes.' },
                { q: 'How many questions are in the IBPS PO Mains exam?', a: 'The IBPS PO Mains exam has 172 total questions — 170 objective questions plus 2 descriptive questions.' }
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
                  Official IBPS notification updates, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any timing, section split, or penalty clause, always cross-check with the official notification guidelines published on ibps.in.
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
// Adding pattern-table class for CSS matching speakable target
