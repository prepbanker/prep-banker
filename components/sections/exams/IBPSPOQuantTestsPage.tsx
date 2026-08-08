// PATH: components/sections/exams/IBPSPOQuantTestsPage.tsx
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
  Sparkles,
  Search,
  MessageSquare
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOQuantTestsPage() {
  const exam = getExamData('ibps-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

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
          "@id": "https://prepbanker.com/ibps-po/quant-tests#webpage",
          "url": "https://prepbanker.com/ibps-po/quant-tests",
          "name": "IBPS PO Quantitative Aptitude Test 2026 | Sectional & DI Tests",
          "description": "Attempt IBPS PO Quantitative Aptitude Test 2026 — sectional and topic-wise practice tests covering arithmetic and Data Interpretation for Prelims and Mains.",
          "datePublished": "2026-07-27",
          "dateModified": "2026-07-27",
          "isPartOf": { "@id": "https://prepbanker.com/#website" },
          "breadcrumb": { "@id": "https://prepbanker.com/ibps-po/quant-tests#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://prepbanker.com/ibps-po/quant-tests#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
            { "@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po" },
            { "@type": "ListItem", "position": 3, "name": "Quantitative Aptitude Tests", "item": "https://prepbanker.com/ibps-po/quant-tests" }
          ]
        },
        {
          "@type": "Quiz",
          "name": "IBPS PO Quantitative Aptitude Test Series 2026",
          "about": { "@type": "Thing", "name": "IBPS PO Quantitative Aptitude" },
          "educationalLevel": "Competitive Exam",
          "provider": { "@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com" },
          "isAccessibleForFree": "Mixed",
          "assesses": ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Arithmetic", "Data Interpretation", "Data Sufficiency"]
        },
        {
          "@type": "ItemList",
          "name": "IBPS PO Quantitative Aptitude Test Series",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "IBPS PO Prelims Quant Sectional Tests" },
            { "@type": "ListItem", "position": 2, "name": "IBPS PO Mains Data Interpretation Sectional Tests" },
            { "@type": "ListItem", "position": 3, "name": "Arithmetic Topic Tests" },
            { "@type": "ListItem", "position": 4, "name": "Data Interpretation Topic Tests (Table, Bar, Line, Pie, Caselet)" },
            { "@type": "ListItem", "position": 5, "name": "Quant Speed & Calculation Tests" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How many questions come from Quant in IBPS PO Prelims?", "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO Prelims has 35 Quantitative Aptitude questions worth 30 marks, to be solved in 20 minutes." } },
            { "@type": "Question", "name": "How many marks is Data Interpretation worth in IBPS PO Mains?", "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO Mains has 40 Data Analysis & Interpretation questions worth 60 marks, with 45 minutes allotted — the highest weightage of any single Mains section." } },
            { "@type": "Question", "name": "Is Quant weightage the same as before in IBPS PO 2026?", "acceptedAnswer": { "@type": "Answer", "text": "No — under the revised IBPS PO pattern, Quantitative Aptitude's Prelims weight was reduced from 35 to 30 marks, while Reasoning Ability's weight increased to 40 marks." } },
            { "@type": "Question", "name": "What is the difference between IBPS PO Prelims Quant and Mains DI?", "acceptedAnswer": { "@type": "Answer", "text": "Prelims Quant tests basic arithmetic and calculation speed across standalone questions, while Mains DI (Data Analysis & Interpretation) tests the same concepts through more complex, data-set-based questions like caselets and missing data problems." } },
            { "@type": "Question", "name": "What topics are most important in IBPS PO Quantitative Aptitude?", "acceptedAnswer": { "@type": "Answer", "text": "Arithmetic topics — Percentage, Profit & Loss, Time & Work, and Time, Speed & Distance — together make up 40–45% of the Quant section, alongside Data Interpretation, which carries the highest marks per question." } },
            { "@type": "Question", "name": "How can I improve my calculation speed for IBPS PO Quant?", "acceptedAnswer": { "@type": "Answer", "text": "Practicing squares, cubes, fraction-to-percentage conversions, and approximation techniques daily is the fastest way to improve calculation speed for IBPS PO Quant, since most time loss comes from slow calculation, not weak concepts." } },
            { "@type": "Question", "name": "Should I attempt all questions in a Data Interpretation set?", "acceptedAnswer": { "@type": "Answer", "text": "Only if the set is quick to interpret — if the underlying data or graph takes too long to understand, it's usually faster to skip the entire DI set and attempt other Quant questions first." } },
            { "@type": "Question", "name": "Are there free IBPS PO Quant mock tests available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, free IBPS PO Quant sectional and topic-wise tests are available on PrepBanker, covering both the Prelims arithmetic pattern and the Mains Data Interpretation pattern." } },
            { "@type": "Question", "name": "What is the negative marking for wrong answers in IBPS PO Quant?", "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO deducts 0.25 marks for every wrong answer in the Quantitative Aptitude section, same as all other objective sections." } },
            { "@type": "Question", "name": "How many Quant practice tests should I attempt before Prelims?", "acceptedAnswer": { "@type": "Answer", "text": "Attempting at least 15–20 Quant sectional tests along with topic-wise Arithmetic and Data Interpretation tests before Prelims is enough to build both calculation speed and accuracy for most candidates." } }
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
            <span className="text-white/80">Quant Tests</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B6EB5]/20 border border-[#1B6EB5]/40 text-[#1B6EB5] text-xs font-black tracking-wide uppercase font-sans">
                Quant Practice
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Quantitative Aptitude Test 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Sectional and topic-wise Quant practice for Prelims and Mains — covering arithmetic, calculation speed, and Data Interpretation on the latest 2026 exam pattern.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">30 Marks in Prelims</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">60 Marks in Mains (Data Interpretation)</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">40+ DI & Arithmetic tests</span>
              </div>

              {/* Micro Trust Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-black text-white/60">
                <span className="flex items-center gap-1">✓ Updated 27 July 2026</span>
                <span className="flex items-center gap-1">✓ Based on revised pattern</span>
                <span className="flex items-center gap-1">✓ Free + Premium tests</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Attempt a Free Quant Test <ArrowRight size={14} />
                </a>
                <Link
                  href="/ibps-po/exam-pattern"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  See Full IBPS PO Exam Pattern
                </Link>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Quant Key Stats
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Prelims Questions</span>
                    <span className="text-sm font-black text-white">35 Qs / 20 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mains Questions</span>
                    <span className="text-sm font-black text-[#FBBF24]">40 Qs / 45 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mains Mark Value</span>
                    <span className="text-sm font-black text-white">1.5 per question</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Negative Marking</span>
                    <span className="text-sm font-black text-[#FBBF24]">-0.25 mark penalty</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Mains Quant is listed under Data Analysis & Interpretation (DI) section.</span>
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
            <QuickNavigation exam={exam} activeSlug="quant-tests" />
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
                  <a href="#weightage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Weightage breakdown
                  </a>
                </li>
                <li>
                  <a href="#test-inventory" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    What's Inside prep catalog
                  </a>
                </li>
                <li>
                  <a href="#topics-list" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Topics covered
                  </a>
                </li>
                <li>
                  <a href="#usage-advice" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Preparation strategy
                  </a>
                </li>
                <li>
                  <a href="#di-decisive" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Mains DI Importance
                  </a>
                </li>
                <li>
                  <a href="#pricing-tiers" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Free vs Premium features
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Resources & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: WEIGHTAGE BREAKDOWN ── */}
          <section id="weightage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <FileSpreadsheet size={20} className="stroke-[2.5]" />
                </span>
                Quantitative Aptitude Weightage in IBPS PO 2026
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                Sectional Parameter Breakdown
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prelims Weight */}
              <div className="p-5 bg-gradient-to-br from-indigo-50/30 to-white border border-indigo-100 rounded-3xl space-y-3.5 shadow-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Preliminary Stage</h3>
                  <span className="px-2 py-0.5 bg-indigo-55 text-indigo-650 text-[10px] font-black rounded uppercase">Screening</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">Questions</span>
                    <span className="font-black text-slate-800 text-sm">35 Qs</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">Marks</span>
                    <span className="font-black text-slate-800 text-sm">30 Marks</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">Duration</span>
                    <span className="font-black text-slate-800 text-sm">20 Mins</span>
                  </div>
                </div>
              </div>

              {/* Mains Weight */}
              <div className="p-5 bg-gradient-to-br from-indigo-950 to-slate-900 border border-slate-850 rounded-3xl text-white space-y-3.5 shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-white text-base sm:text-lg">Main Stage (DI)</h3>
                  <span className="px-2 py-0.5 bg-white/10 text-[#FBBF24] text-[10px] font-black rounded uppercase">Scored</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-300">
                  <div className="p-2 bg-white/5 rounded-xl">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">Questions</span>
                    <span className="font-black text-white text-sm">40 Qs</span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-xl">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">Marks</span>
                    <span className="font-black text-white text-sm">60 Marks</span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-xl">
                    <span className="block text-slate-400 text-[10px] uppercase font-bold">Duration</span>
                    <span className="font-black text-white text-sm">45 Mins</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-550 font-semibold leading-relaxed m-0 border-t border-slate-100 pt-4">
              *Mains Quant appears as "Data Analysis & Interpretation" (DI) — a more advanced, calculation-heavy version of Prelims Quant, tested through table, bar, line, pie, and caselet-based data sets.
            </p>
          </section>

          {/* ── SECTION 2: WHAT'S INSIDE THE TEST CATALOG ── */}
          <section id="test-inventory" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <BookOpenCheck size={20} className="stroke-[2.5]" />
              </span>
              What's Inside PrepBanker's Quant Test Series
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Prelims Quant Sectionals', count: '20 Tests', desc: '35 Qs, 20 min locks, latest speed standards.', badge: 'Prelims' },
                { title: 'Mains DI Sectionals', count: '15 Tests', desc: '40 Qs, 45 min locks, heavy calculation sets.', badge: 'Mains' },
                { title: 'Arithmetic Topic Tests', count: '15 Tests', desc: 'Percentage, Profit & Loss, Time & Work, Interest.', badge: 'Arithmetic' },
                { title: 'Data Interpretation', count: '15 Tests', desc: 'Table, Bar, Line, Pie Charts and Caselet practices.', badge: 'DI Special' },
                { title: 'Simplification & Series', count: '20 Tests', desc: 'BODMAS drills and speed pattern recognition.', badge: 'Speed Math' },
                { title: 'Previous Year Quant Papers', count: 'Past 5 Years', desc: 'Actual questions tagged topic-wise to benchmark scores.', badge: 'Past Papers' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition-all rounded-3xl flex flex-col justify-between gap-5 group"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px] font-black">{item.badge}</span>
                      <span className="text-xs text-indigo-650 font-black">{item.count}</span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-indigo-650 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-455 leading-normal font-semibold">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex gap-2 font-black text-xs font-sans">
                    <a
                      href="https://app.prepgrind.com/signup/ibps-po"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 border border-amber-300 rounded-xl text-center no-underline cursor-pointer block flex-1"
                    >
                      Attempt Free
                    </a>
                    <a
                      href="https://app.prepgrind.com/signup/ibps-po"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-650 text-white border border-emerald-500 rounded-xl text-center no-underline cursor-pointer block flex-1"
                    >
                      Unlock Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 3: TOPICS COVERED CLOUD ── */}
          <section id="topics-list" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Search size={20} className="stroke-[2.5]" />
              </span>
              Topics Covered in Quant Tests
            </h2>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { name: 'Number System', color: 'bg-indigo-55/40 border-indigo-150 text-indigo-700' },
                { name: 'Simplification & Approx', color: 'bg-emerald-50/40 border-emerald-150 text-emerald-700' },
                { name: 'Percentage & Ratio', color: 'bg-purple-50/40 border-purple-150 text-purple-700' },
                { name: 'Profit & Loss', color: 'bg-rose-50/40 border-rose-150 text-rose-700' },
                { name: 'Interest (SI/CI)', color: 'bg-amber-50/40 border-amber-150 text-amber-700' },
                { name: 'Time & Work', color: 'bg-blue-50/40 border-blue-150 text-blue-700' },
                { name: 'Speed & Distance', color: 'bg-indigo-55/40 border-indigo-150 text-indigo-700' },
                { name: 'Mixture & Alligation', color: 'bg-emerald-50/40 border-emerald-150 text-emerald-700' },
                { name: 'Averages', color: 'bg-purple-50/40 border-purple-150 text-purple-700' },
                { name: 'Permutation & Probability', color: 'bg-rose-50/40 border-rose-150 text-rose-700' },
                { name: 'Quadratic Equations', color: 'bg-amber-50/40 border-amber-150 text-amber-700' },
                { name: 'Inequalities', color: 'bg-blue-50/40 border-blue-150 text-blue-700' },
                { name: 'Tables, Bars, & Line graphs', color: 'bg-indigo-55/40 border-indigo-150 text-indigo-700' },
                { name: 'Pie Charts & Caselets', color: 'bg-emerald-50/40 border-emerald-150 text-emerald-700' },
                { name: 'Data Sufficiency (Mains)', color: 'bg-purple-50/40 border-purple-150 text-purple-700' },
                { name: 'Missing DI (Mains)', color: 'bg-rose-50/40 border-rose-150 text-rose-700' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`px-4 py-2.5 border rounded-2xl text-xs font-black tracking-wide flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-shadow duration-200 cursor-default ${item.color}`}
                >
                  <CheckCircle size={13} className="shrink-0" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 4: PREPARATION TIMELINE ── */}
          <section id="usage-advice" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              How to Use These Tests to Improve Fastest
            </h2>

            <div className="space-y-3.5">
              {[
                { step: '1', title: 'Prioritize Calculation Speed', desc: 'Drill squares to 30, fraction conversions, and approximation daily. Speed gaps are the major hurdle.', label: 'Speed Baseline' },
                { step: '2', title: 'Solidify Arithmetic Concepts', desc: 'Attempt Arithmetic topic tests before jumping to full DI sets to build calculation stamina.', label: 'Arithmetic first' },
                { step: '3', title: 'Scan and Decide on DI Sets', desc: 'If a dataset takes too long to translate, skip the entire set to preserve overall section timing.', label: 'Exam strategy' },
                { step: '4', title: 'Re-attempt Weak Drills Later', desc: 'Solve weak arithmetic drills after 4 days to ensure concept clarity rather than raw key memory.', label: 'Audit' }
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
          </section>

          {/* ── SECTION 5: CALLOUT BOX WHY DI DECIDES SCORE ── */}
          <section id="di-decisive" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sparkles size={20} className="stroke-[2.5]" />
              </span>
              Why Data Interpretation Decides Your Mains Score
            </h2>

            <div className="p-6 bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-150 rounded-3xl space-y-4 shadow-xs">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-indigo-655 font-black uppercase tracking-widest">Sectional Value</span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">60 Marks. Advanced Datasets. High Separation.</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold m-0">
                In Mains, DI is where score splits widen. Candidates who decode caselets and mixed-graph datasets quickly gain 20+ marks of separation. Speed drilling complex DI blocks is highly valuable.
              </p>
            </div>
          </section>

          {/* ── SECTION 6: FREE VS PREMIUM ── */}
          <section id="pricing-tiers" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Lock size={20} className="stroke-[2.5]" />
              </span>
              Free vs Premium Access
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans font-bold">
              {/* Free */}
              <div className="p-5 border border-slate-200 bg-slate-50/50 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="px-2 py-0.5 bg-slate-150 text-slate-600 rounded text-[9px] font-black uppercase">Standard</span>
                  <h4 className="text-slate-800 text-base sm:text-lg">Free Tier</h4>
                  <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside font-semibold leading-relaxed">
                    <li>3 Full Quant Sectional Tests (Prelims & Mains DI).</li>
                    <li>Sample arithmetic & simplification topic drills.</li>
                    <li>Basic scorecard analysis.</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <a
                    href="https://app.prepgrind.com/signup/ibps-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-550/20 text-emerald-600 border border-emerald-500/20 hover:border-emerald-500/30 font-black text-xs rounded-lg transition-all no-underline inline-block cursor-pointer"
                  >
                    Attempt Free Tests
                  </a>
                </div>
              </div>

              {/* Premium */}
              <div className="p-5 border border-[#FBBF24]/30 bg-[#FBBF24]/5 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="px-2 py-0.5 bg-amber-400 text-slate-950 rounded text-[9px] font-black uppercase">Recommended</span>
                  <h4 className="text-slate-900 text-base sm:text-lg">Premium Master Pass</h4>
                  <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside font-semibold leading-relaxed">
                    <li>Full 90+ test library across all sectional and topic blocks.</li>
                    <li>Detailed explanation keys for all parameters.</li>
                    <li>All-India rank matching & scorecard metrics analysis.</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <a
                    href="https://app.prepgrind.com/signup/ibps-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-xs rounded-lg transition-all no-underline inline-block cursor-pointer"
                  >
                    See Full Test Series
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: TARGET LINKS ── */}
          <section id="explore" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={20} className="stroke-[2.5]" />
              </span>
              Target Sectional Weaknesses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans font-bold">
              {[
                { title: 'Reasoning Ability Tests', path: '/ibps-po/reasoning-tests' },
                { title: 'English Language Tests', path: '/ibps-po/english-tests' },
                { title: 'Complete Mock Tests', path: '/ibps-po/mock-tests' },
                { title: 'Notification Guidelines', path: '/ibps-po/notification' },
                { title: 'Exam Syllabus details', path: '/ibps-po/syllabus' },
                { title: 'Previous Year Cut Offs', path: '/ibps-po/cut-off' }
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
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'How many questions come from Quant in IBPS PO Prelims?', a: 'IBPS PO Prelims has 35 Quantitative Aptitude questions worth 30 marks, to be solved in 20 minutes.' },
                { q: 'How many marks is Data Interpretation worth in IBPS PO Mains?', a: 'IBPS PO Mains has 40 Data Analysis & Interpretation questions worth 60 marks, with 45 minutes allotted — the highest weightage of any single Mains section.' },
                { q: 'Is Quant weightage the same as before in IBPS PO 2026?', a: 'No — under the revised IBPS PO pattern, Quantitative Aptitude\'s Prelims weight was reduced from 35 to 30 marks, while Reasoning Ability\'s weight increased to 40 marks.' },
                { q: 'What is the difference between IBPS PO Prelims Quant and Mains DI?', a: 'Prelims Quant tests basic arithmetic and calculation speed across standalone questions, while Mains DI (Data Analysis & Interpretation) tests the same concepts through more complex, data-set-based questions like caselets and missing data problems.' },
                { q: 'What topics are most important in IBPS PO Quantitative Aptitude?', a: 'Arithmetic topics — Percentage, Profit & Loss, Time & Work, and Time, Speed & Distance — together make up 40–45% of the Quant section, alongside Data Interpretation, which carries the highest marks per question.' },
                { q: 'How can I improve my calculation speed for IBPS PO Quant?', a: 'Practicing squares, cubes, fraction-to-percentage conversions, and approximation techniques daily is the fastest way to improve calculation speed for IBPS PO Quant, since most time loss comes from slow calculation, not weak concepts.' },
                { q: 'Should I attempt all questions in a Data Interpretation set?', a: 'Only if the set is quick to interpret — if the underlying data or graph takes too long to understand, it\'s usually faster to skip the entire DI set and attempt other Quant questions first.' },
                { q: 'Are there free IBPS PO Quant mock tests available?', a: 'Yes, free IBPS PO Quant sectional and topic-wise tests are available on PrepBanker, covering both the Prelims arithmetic pattern and the Mains Data Interpretation pattern.' },
                { q: 'What is the negative marking for wrong answers in IBPS PO Quant?', a: 'IBPS PO deducts 0.25 marks for every wrong answer in the Quantitative Aptitude section, same as all other objective sections.' },
                { q: 'How many Quant practice tests should I attempt before Prelims?', a: 'Attempting at least 15–20 Quant sectional tests along with topic-wise Arithmetic and Data Interpretation tests before Prelims is enough to build both calculation speed and accuracy for most candidates.' }
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
