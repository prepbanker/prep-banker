// PATH: components/sections/exams/IBPSPOSyllabusPage.tsx
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
  BookMarked,
  Layers,
  GraduationCap
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOSyllabusPage() {
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
        {"@type": "ListItem", "position": 3, "name": "Syllabus", "item": "https://prepbanker.com/ibps-po/syllabus"}
      ]
    },
    // 2. Article Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "IBPS PO Syllabus 2026: Complete Prelims & Mains Topic List",
      "description": "Complete subject-wise IBPS PO Syllabus 2026 for Prelims and Mains, including Reasoning, Quantitative Aptitude, English Language, Data Analysis & Interpretation, Banking Awareness, and the Descriptive Paper.",
      "image": ["https://prepbanker.com/images/ibps-po-syllabus-2026.jpg"],
      "datePublished": "2026-07-01T09:00:00+05:30",
      "dateModified": "2026-07-27T10:00:00+05:30",
      "author": {"@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com"},
      "publisher": {
        "@type": "Organization",
        "name": "PrepBanker",
        "logo": {"@type": "ImageObject", "url": "https://prepbanker.com/logo.png"}
      },
      "mainEntityOfPage": {"@type": "WebPage", "@id": "https://prepbanker.com/ibps-po/syllabus"}
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question","name": "What is the IBPS PO Syllabus 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "IBPS PO Syllabus 2026 covers English Language, Quantitative Aptitude, and Reasoning Ability for Prelims, and Reasoning, Data Analysis & Interpretation, English Language, and General/Economy/Banking Awareness plus a Descriptive Paper for Mains."}},
        {"@type": "Question","name": "Is Computer Aptitude a separate subject in IBPS PO Mains Syllabus 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "No, the current revised IBPS PO Mains pattern has only four objective sections - Reasoning, General/Economy/Banking/Digital/Financial Awareness, English Language, and Data Analysis & Interpretation - with no standalone Computer Aptitude section."}},
        {"@type": "Question","name": "What is the IBPS PO Prelims syllabus?",
         "acceptedAnswer": {"@type": "Answer","text": "The IBPS PO Prelims syllabus covers English Language (grammar, vocabulary, comprehension), Quantitative Aptitude (arithmetic, data interpretation, number series), and Reasoning Ability (puzzles, seating arrangement, syllogism, coding-decoding)."}},
        {"@type": "Question","name": "What topics are asked in IBPS PO Mains Data Analysis & Interpretation?",
         "acceptedAnswer": {"@type": "Answer","text": "IBPS PO Mains DI section covers tabular, caselet, missing, bar graph, pie chart, and line graph data interpretation along with data sufficiency, probability, permutation & combination, and quadratic equations."}},
        {"@type": "Question","name": "What does the IBPS PO Banking Awareness syllabus include?",
         "acceptedAnswer": {"@type": "Answer","text": "IBPS PO Banking Awareness syllabus includes banking terminology, RBI functions and monetary policy, repo/reverse repo rate, CRR, SLR, RBI circulars, digital payment systems, government schemes, and current banking and economic affairs."}},
        {"@type": "Question","name": "What is asked in the IBPS PO Descriptive Paper?",
         "acceptedAnswer": {"@type": "Answer","text": "The IBPS PO Descriptive Paper consists of an essay and a letter or comprehension question worth 25 marks, typically on banking, economy, current affairs, social issues, and ethics-related topics."}},
        {"@type": "Question","name": "Which topics have the highest weightage in IBPS PO Reasoning?",
         "acceptedAnswer": {"@type": "Answer","text": "Puzzles and seating arrangement carry the highest weightage in IBPS PO Reasoning, followed by syllogism, inequality, blood relations, and direction sense."}},
        {"@type": "Question","name": "Which topics have the highest weightage in IBPS PO Quantitative Aptitude?",
         "acceptedAnswer": {"@type": "Answer","text": "Data Interpretation carries the highest weightage in IBPS PO Quantitative Aptitude, followed by simplification/approximation, number series, and quadratic equations."}},
        {"@type": "Question","name": "Is the IBPS PO syllabus the same for Prelims and Mains?",
         "acceptedAnswer": {"@type": "Answer","text": "No, Prelims covers only three basic sections while Mains covers more advanced versions of Reasoning, Quant (as Data Analysis & Interpretation), English, plus an added Banking Awareness section and a Descriptive Paper."}},
        {"@type": "Question","name": "Does IBPS PO syllabus include current affairs?",
         "acceptedAnswer": {"@type": "Answer","text": "Yes, current affairs of the last 4-6 months, particularly banking and financial current affairs, are an important part of the General/Economy/Banking Awareness section in IBPS PO Mains."}},
        {"@type": "Question","name": "Where can I download the IBPS PO Syllabus 2026 PDF?",
         "acceptedAnswer": {"@type": "Answer","text": "While IBPS does not publish a separate detailed subject-wise syllabus PDF, the official exam pattern and broad subject names are listed in the IBPS PO notification available at ibps.in."}},
        {"@type": "Question","name": "How should I start preparing using the IBPS PO syllabus?",
         "acceptedAnswer": {"@type": "Answer","text": "Start by mapping each syllabus topic to its weightage, prioritise high-weightage topics first, and practice subject-wise before attempting full-length mock tests."}}
      ]
    },
    // 4. WebPage + Speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://prepbanker.com/ibps-po/syllabus",
      "url": "https://prepbanker.com/ibps-po/syllabus",
      "name": "IBPS PO Syllabus 2026",
      "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#quick-answer", "#computer-aptitude-clarification"]},
      "isPartOf": {"@type": "WebSite", "name": "PrepBanker", "url": "https://prepbanker.com"}
    },
    // 5. ItemList Schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "IBPS PO Prelims Syllabus Subjects",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "English Language"},
        {"@type": "ListItem", "position": 2, "name": "Quantitative Aptitude"},
        {"@type": "ListItem", "position": 3, "name": "Reasoning Ability"}
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
            <span className="text-white/80">Syllabus</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Syllabus Guide
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Syllabus 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Complete Prelims & Mains Topic List
                </p>
                <p className="text-xs text-white/60">
                  Everything tested in IBPS PO CRP PO/MT-XVI, organised subject by subject — Prelims covers English, Quant, and Reasoning; Mains adds Data Analysis & Interpretation, Banking Awareness, and a Descriptive Paper. No fluff, just the topic list you'll actually study from.
                </p>
              </div>


              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="#subject-wise-practice"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline cursor-pointer border-none"
                >
                  <Target size={15} /> Practice by Subject
                </a>
                <Link
                  href="/ibps-po/exam-pattern"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  See Full Exam Pattern & Marks <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Syllabus Breakdown
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">Prelims Sections</span>
                    <span className="text-sm font-black text-white">3 Subjects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">Mains Objective</span>
                    <span className="text-sm font-black text-white">4 Subjects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">Descriptive</span>
                    <span className="text-sm font-black text-[#FBBF24]">Essay & Letter</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold font-sans">Verification</span>
                    <span className="text-sm font-black text-[#FBBF24]">July 2026 updates</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Computer Aptitude is now completely integrated into the Reasoning section.</span>
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
            <QuickNavigation exam={exam} activeSlug="syllabus" />
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
                  <a href="#computer-aptitude-clarification" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Computer Aptitude Clarification
                  </a>
                </li>
                <li>
                  <a href="#prelims-syllabus" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Prelims Subject Topics
                  </a>
                </li>
                <li>
                  <a href="#mains-syllabus" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Mains Subject Topics
                  </a>
                </li>
                <li>
                  <a href="#descriptive-syllabus" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Descriptive Paper Syllabus
                  </a>
                </li>
                <li>
                  <a href="#weightage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Topic-wise Weightage
                  </a>
                </li>
                <li>
                  <a href="#subject-wise-practice" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Subject Practice & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: COMPUTER APTITUDE CLARIFICATION (computer-aptitude-clarification) ── */}
          <section id="computer-aptitude-clarification" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <AlertTriangle size={18} />
              </span>
              Clearing Up a Common Confusion: Computer Aptitude in IBPS PO
            </h2>

            <div className="space-y-5 font-sans">
              <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-2xl flex items-start gap-3">
                <Info size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-semibold m-0">
                  <strong>Warning:</strong> Many syllabus sheets circulating online still list "Computer Aptitude" as a standalone, scored section in Mains. This data is outdated.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Outdated Info Card */}
                <div className="p-5 bg-gradient-to-br from-rose-50/40 to-slate-50/20 border border-rose-200/50 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-rose-600">
                    <XCircle size={18} className="shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider">Outdated Info Online</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 m-0">Standalone Mains Subject</h4>
                  <p className="text-xs text-slate-550 font-medium leading-relaxed m-0">
                    Prior templates listed Computer Aptitude as a separate scoring subject with its own dedicated question share and sectional cut-off limits.
                  </p>
                </div>

                {/* Current Info Card */}
                <div className="p-5 bg-gradient-to-br from-emerald-50/40 to-slate-50/20 border border-emerald-200/50 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle size={18} className="shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider">Current Official Pattern</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 m-0">Integrated / No Standalone Block</h4>
                  <p className="text-xs text-slate-550 font-medium leading-relaxed m-0">
                    The objective exam strictly contains exactly 4 sections (Reasoning, General Awareness, English, Data Analysis). Computer concepts, if tested, are integrated into Reasoning.
                  </p>
                </div>

              </div>

              <div className="bg-slate-50/60 border border-slate-200/70 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-600 m-0">How should you prepare?</h4>
                <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold m-0">
                  Basic computer literacy still matters practically (the test itself is computer-administered, and elementary MS Office terms, abbreviations, or database shortcuts occasionally appear inside Logical Reasoning sequences). However, <strong>do not spend hours reading dedicated computer memory textbooks</strong>—focus your energy on quantitative data analysis and logical puzzle workflows instead.
                </p>
              </div>

              <div className="pt-1">
                <Link href="/ibps-po/exam-pattern" className="text-[#1B6EB5] hover:underline font-extrabold inline-flex items-center gap-0.5 no-underline">
                  See the full section-wise marks breakdown <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: IBPS PO PRELIMS SYLLABUS 2026 ── */}
          <section id="prelims-syllabus" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <BookMarked size={18} />
              </span>
              IBPS PO Prelims Syllabus — Subject-wise Topics
            </h2>
            <div className="grid grid-cols-1 gap-6 font-sans">
              {/* Subject 1: English */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1B6EB5]" /> English Language
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Reading Comprehension</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Cloze Test</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Error Detection / Spotting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Sentence Improvement & Correction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Fill in the Blanks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Para Jumbles & Rearrangement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Phrase Replacement & Word Swap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Sentence Connectors & Completion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Vocabulary (Synonyms & Antonyms)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Idioms & Phrases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Word Association & Odd Sentence Out</span>
                  </li>
                </ul>
              </div>

              {/* Subject 2: Quant */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Quantitative Aptitude
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Simplification & Approximation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Missing & Wrong Number Series</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Quadratic & Linear Equations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Data Interpretation (Table, Line, Bar, Pie)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Caselet DI & Missing Data Tables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Percentage & Profit & Loss</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Ratio & Proportion, Partnership, Averages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Simple & Compound Interest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Time, Speed, Distance, Boats & Streams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Time & Work, Pipes & Cisterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Permutations, Combinations & Probability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Quantity Comparison & Data Sufficiency</span>
                  </li>
                </ul>
              </div>

              {/* Subject 3: Reasoning */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Reasoning Ability
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Linear & Circular Seating Arrangement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Box, Floor, and Stack-Based Puzzles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Scheduling Puzzles (Month, Day, Year)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Syllogism (Only/Few concepts)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Inequalities (Direct & Coded)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Blood Relations & Direction Sense</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Coding-Decoding (Chinese/Conditional)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Alphanumeric Series & Order-Ranking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Input-Output (Step-by-step rearrangement)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Critical Reasoning (Assumption, Inference)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Data Sufficiency (Reasoning)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Practice Redirects */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-500 font-sans flex flex-wrap justify-center gap-4">
              <span>Ready to practice these subject-wise?</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">Quant Sectional Tests</a>
              <span>·</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">Reasoning Sectional Tests</a>
              <span>·</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">English Sectional Tests</a>
            </div>
          </section>

          {/* ── SECTION 3: IBPS PO MAINS SYLLABUS 2026 ── */}
          <section id="mains-syllabus" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Layers size={18} />
              </span>
              IBPS PO Mains Syllabus — Subject-wise Topics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              {/* Subject 1: Advanced Reasoning */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-650" /> Reasoning (Mains-level, Advanced)
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>High-Level Seating & Puzzles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Logical & Verbal Reasoning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Critical/Analytical Reasoning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Coded Input-Output</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Coded Coding-Decoding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Data Sufficiency (Reasoning)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Coded Blood Relations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Coded Inequalities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Decision Making</span>
                  </li>
                </ul>
              </div>

              {/* Subject 2: DI */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-650" /> Data Analysis & Interpretation
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Advanced/Caselet DI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Missing Data Tables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Radar & Mixed Graph DI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Probability & Permutations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Data Sufficiency (Quant)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Quantity Comparison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Arithmetic Word Problems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Number System & Algebra</span>
                  </li>
                </ul>
              </div>

              {/* Subject 3: English */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-650" /> English Language (Mains-level)
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Advanced Reading Comprehension</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Vocabulary in Context</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Cloze Test & Error Spotting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Sentence Connectors & Starters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Para Completion & Summary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Phrase Replacement & Word Usage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Editorial-Based Patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Advanced Grammar Checks</span>
                  </li>
                </ul>
              </div>

              {/* Subject 4: Banking Awareness */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-650" /> General / Economy / Banking Awareness
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Banking Terminology & Products</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Banking Reforms & Basel Norms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Priority Sector Lending (PSL)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Digital Banking & Payment Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>RBI Functions & Monetary Policy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Recent RBI Circulars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Economy, GDP & Inflation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Fiscal Policy, Budget & Survey</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Government Schemes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Financial Bodies (SEBI, NABARD)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Current Affairs (Last 6 Months)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>Summits, Indices & Awards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Practice Redirects */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-500 font-sans flex flex-wrap justify-center gap-4">
              <span>Ready to practice these subject-wise?</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">Quant Sectional Tests</a>
              <span>·</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">Reasoning Sectional Tests</a>
              <span>·</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">English Sectional Tests</a>
              <span>·</span>
              <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">Full-Length Mock Tests</a>
            </div>
          </section>

          {/* ── SECTION 4: DESCRIPTIVE PAPER SYLLABUS ── */}
          <section id="descriptive-syllabus" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <FileText size={18} />
              </span>
              IBPS PO Descriptive Paper — Topics & Expected Themes
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              The Descriptive Paper (25 marks, part of Mains) tests written communication through an essay and a letter or comprehension-based question.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
              {/* Broad Themes */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-2">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">Broad Theme Areas</h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-semibold list-disc list-inside">
                  <li>Economic & Social Issues</li>
                  <li>Banking & Financial Sector Reforms</li>
                  <li>Technology & Digital Banking</li>
                  <li>Current Events (National & International)</li>
                  <li>Ethics & Governance</li>
                  <li>Environment & Sustainability</li>
                </ul>
              </div>

              {/* Sample Essays */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-2">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">Sample Essay Themes</h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-semibold list-disc list-inside">
                  <li>Financial inclusion in rural India</li>
                  <li>Role of technology in banking</li>
                  <li>Digital India initiative</li>
                  <li>Women empowerment & growth</li>
                  <li>Impact of social media on youth</li>
                  <li>Public vs private sector banks</li>
                </ul>
              </div>

              {/* Sample Letters */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-2">
                <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">Sample Letter Themes</h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-semibold list-disc list-inside">
                  <li>Failed UPI transaction complaint</li>
                  <li>Civic issue to a newspaper editor</li>
                  <li>KYC awareness request to manager</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 font-sans flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                <strong>Note:</strong> IBPS does not publish an official descriptive-topic list — the themes above are compiled from recurring patterns across recent IBPS PO papers, meant as preparation direction, not a predicted question bank.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: TOPIC-WISE WEIGHTAGE & PRIORITY ── */}
          <section id="weightage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileSpreadsheet size={18} />
              </span>
              IBPS PO High-Weightage Topics — Where to Focus First
            </h2>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs font-sans">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Section</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">High-Weightage Topics</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Reasoning (Prelims + Mains)</td>
                    <td className="px-4 py-3">Puzzles & Seating Arrangement, Syllogism, Inequality, Blood Relations, Direction Sense</td>
                    <td className="px-4 py-3 text-red-600 font-bold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Quantitative Aptitude / DI</td>
                    <td className="px-4 py-3">Data Interpretation, Simplification/Approximation, Number Series, Quadratic Equations</td>
                    <td className="px-4 py-3 text-red-600 font-bold">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">English Language</td>
                    <td className="px-4 py-3">Reading Comprehension, Cloze Test, Para Jumbles, Fillers, Vocabulary</td>
                    <td className="px-4 py-3 text-amber-600 font-bold">Medium-High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Banking/GA (Mains)</td>
                    <td className="px-4 py-3">Current Affairs (last 4–6 months), RBI Policy & Rates, Government Schemes, Static Banking Terms</td>
                    <td className="px-4 py-3 text-amber-600 font-bold">Medium-High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Descriptive (Mains)</td>
                    <td className="px-4 py-3">Essay on Banking/Economy/Social Issues, Formal Letter Writing</td>
                    <td className="px-4 py-3 text-emerald-600 font-bold font-sans">Scoring-critical if you clear objective cutoff</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 font-sans flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                This weightage is based on recurring patterns across recent IBPS PO papers, not an official IBPS document — use it to sequence your revision, not to skip topics entirely.
              </p>
            </div>
          </section>

          {/* ── SECTION 6: PRACTICE WHAT YOU'VE READ ── */}
          <section id="subject-wise-practice" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={18} />
              </span>
              Practice What You've Just Read — Subject-wise
            </h2>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs font-sans">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Subject</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Practice Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Quantitative Aptitude</td>
                    <td className="px-4 py-3">
                      <Link href="/ibps-po/quant-tests" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5 no-underline">
                        Practice these topics: Quantitative Aptitude Tests <ChevronRight size={12} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Reasoning Ability</td>
                    <td className="px-4 py-3">
                      <Link href="/ibps-po/reasoning-tests" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5 no-underline">
                        Practice these topics: Reasoning Ability Tests <ChevronRight size={12} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">English Language</td>
                    <td className="px-4 py-3">
                      <Link href="/ibps-po/english-tests" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5 no-underline">
                        Practice these topics: English Language Tests <ChevronRight size={12} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Full Prelims + Mains Simulation</td>
                    <td className="px-4 py-3">
                      <Link href="/ibps-po/mock-tests" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5 no-underline">
                        Take a Full-Length Mock Test <ChevronRight size={12} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Not sure where to start?</td>
                    <td className="px-4 py-3">
                      <Link href="/ibps-po/study-plan" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5">
                        See the 90-Day Study Plan <ChevronRight size={12} />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 7: EXPLORE MORE - LINK HUB ── */}
          <section id="explore" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={18} />
              </span>
              Continue Your IBPS PO 2026 Preparation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans">
              {[
                { slug: 'notification', title: 'Notification 2026', path: '/ibps-po/notification' },
                { slug: 'exam-pattern', title: 'Exam Pattern & Marks', path: '/ibps-po/exam-pattern' },
                { slug: 'eligibility', title: 'Eligibility Criteria', path: '/ibps-po/eligibility' },
                { slug: 'selection-process', title: 'Selection Process', path: '/ibps-po/selection-process' },
                { slug: 'cut-off', title: 'Previous Cut Off', path: '/ibps-po/cut-off' },
                { slug: 'salary', title: 'Salary & Perks', path: '/ibps-po/salary' },
                { slug: 'study-plan', title: '90-Day Study Plan', path: '/ibps-po/study-plan' }
              ].map((item) => (
                <Link
                  key={item.slug}
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
                <h4 className="font-black text-base sm:text-lg text-white">Syllabus mapped — now outprep the competition.</h4>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Practice with high-yield sectional questions curated by exam desk experts. Attempt a full mock to measure your baseline percentile.
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
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer">English</a>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer">Quant</a>
                  <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded-lg border border-white/15 hover:border-white/25 no-underline cursor-pointer">Reasoning</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 8: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'What is the IBPS PO Syllabus 2026?', a: 'IBPS PO Syllabus 2026 covers English Language, Quantitative Aptitude, and Reasoning Ability for Prelims, and Reasoning, Data Analysis & Interpretation, English Language, and General/Economy/Banking Awareness plus a Descriptive Paper for Mains.' },
                { q: 'Is Computer Aptitude a separate subject in IBPS PO Mains Syllabus 2026?', a: 'No, the current revised IBPS PO Mains pattern has only four objective sections — Reasoning, General/Economy/Banking/Digital/Financial Awareness, English Language, and Data Analysis & Interpretation — with no standalone Computer Aptitude section.' },
                { q: 'What is the IBPS PO Prelims syllabus?', a: 'The IBPS PO Prelims syllabus covers English Language (grammar, vocabulary, comprehension), Quantitative Aptitude (arithmetic, data interpretation, number series), and Reasoning Ability (puzzles, seating arrangement, syllogism, coding-decoding).' },
                { q: 'What topics are asked in IBPS PO Mains Data Analysis & Interpretation?', a: 'IBPS PO Mains DI section covers tabular, caselet, missing, bar graph, pie chart, and line graph data interpretation along with data sufficiency, probability, permutation & combination, and quadratic equations.' },
                { q: 'What does the IBPS PO Banking Awareness syllabus include?', a: 'IBPS PO Banking Awareness syllabus includes banking terminology, RBI functions and monetary policy, repo/reverse repo rate, CRR, SLR, RBI circulars, digital payment systems, government schemes, and current banking and economic affairs.' },
                { q: 'What is asked in the IBPS PO Descriptive Paper?', a: 'The IBPS PO Descriptive Paper consists of an essay and a letter or comprehension question worth 25 marks, typically on banking, economy, current affairs, social issues, and ethics-related topics.' },
                { q: 'Which topics have the highest weightage in IBPS PO Reasoning?', a: 'Puzzles and seating arrangement carry the highest weightage in IBPS PO Reasoning, followed by syllogism, inequality, blood relations, and direction sense.' },
                { q: 'Which topics have the highest weightage in IBPS PO Quantitative Aptitude?', a: 'Data Interpretation carries the highest weightage in IBPS PO Quantitative Aptitude, followed by simplification/approximation, number series, and quadratic equations.' },
                { q: 'Is the IBPS PO syllabus the same for Prelims and Mains?', a: 'No, Prelims covers only three basic sections while Mains covers more advanced versions of Reasoning, Quant (as Data Analysis & Interpretation), English, plus an added Banking Awareness section and a Descriptive Paper.' },
                { q: 'Does IBPS PO syllabus include current affairs?', a: 'Yes, current affairs of the last 4–6 months, particularly banking and financial current affairs, are an important part of the General/Economy/Banking Awareness section in IBPS PO Mains.' },
                { q: 'Where can I download the IBPS PO Syllabus 2026 PDF?', a: 'While IBPS does not publish a separate detailed subject-wise syllabus PDF, the official exam pattern and broad subject names are listed in the IBPS PO notification available at ibps.in.' },
                { q: 'How should I start preparing using the IBPS PO syllabus?', a: 'Start by mapping each syllabus topic to its weightage, prioritise high-weightage topics first, and practice subject-wise before attempting full-length mock tests.' }
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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1 font-sans"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">
                  Official IBPS guidelines, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any syllabus topic, exam pattern detail, or selection rule, always cross-check with the official notification guidelines published on ibps.in.
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
