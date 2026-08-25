// PATH: components/sections/exams/IBPSPOSelectionProcessPage.tsx
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
  GitCommit
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOSelectionProcessPage() {
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
        {"@type": "ListItem", "position": 3, "name": "Selection Process", "item": "https://prepbanker.com/ibps-po/selection-process"}
      ]
    },
    // 2. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many stages are there in the IBPS PO selection process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO 2026 selection process has five stages: Preliminary Exam, Main Exam, Personality Test, Interview, and Provisional Allotment."
          }
        },
        {
          "@type": "Question",
          "name": "Are IBPS PO Prelims marks counted in the final selection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Prelims marks are used only to shortlist candidates for the Main Exam and do not contribute to the final merit list."
          }
        },
        {
          "@type": "Question",
          "name": "What is the weightage of Mains and Interview in IBPS PO final selection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO final merit is calculated using an 80:20 weightage, with 80% from the Main Exam and 20% from the Interview."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Personality Test in IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Personality Test is a mandatory, non-qualifying self-report assessment introduced in the 2026 cycle, whose results are shared with the Interview Panel."
          }
        },
        {
          "@type": "Question",
          "name": "Is the IBPS PO Personality Test scored?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, the Personality Test carries no qualifying marks, but candidates who skip it become ineligible for the Interview."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum qualifying mark in the IBPS PO Interview?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum qualifying mark is 40% for General and EWS candidates, and 35% for SC/ST/OBC/PwBD candidates."
          }
        },
        {
          "@type": "Question",
          "name": "Who conducts the IBPS PO Interview?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Interview is conducted by the participating bank and coordinated by the Nodal Bank in each state or union territory."
          }
        },
        {
          "@type": "Question",
          "name": "How is the final bank allotment decided in IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Final bank allotment is based on the candidate's merit rank, category, stated bank preferences, and vacancies reported by each participating bank."
          }
        }
      ]
    },
    // 3. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Selection Process 2026",
      "url": "https://prepbanker.com/ibps-po/selection-process",
      "dateModified": "2026-07-27",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".stage-overview-table"]
      },
      "about": {
        "@type": "Thing",
        "name": "IBPS PO Selection Process"
      }
    },
    // 4. HowTo Schema (for the final score calculation)
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your IBPS PO Final Merit Score",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Convert Mains score to 100",
          "text": "Convert your Main Examination score, out of 225, to a score out of 100."
        },
        {
          "@type": "HowToStep",
          "name": "Apply 80% weightage",
          "text": "Multiply the converted Mains score by 0.80."
        },
        {
          "@type": "HowToStep",
          "name": "Apply 20% weightage to Interview",
          "text": "Multiply your Interview score, out of 100, by 0.20."
        },
        {
          "@type": "HowToStep",
          "name": "Add both figures",
          "text": "Add the weighted Mains score and weighted Interview score to get your final merit score out of 100."
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
            <span className="text-white/80">Selection Process</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Official Procedure
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Selection Process 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal font-sans">
                  Five stages, one merit list. Here's exactly how IBPS moves you from application to bank posting — which stages qualify you, which stages score you, and how the final ranking is actually calculated.
                </p>
              </div>



              {/* Visual Flow Diagram Stage Tracker */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-4 font-sans">
                <div className="text-xs font-black text-amber-400 uppercase tracking-widest flex items-center gap-1.5 font-display">
                  <GitCommit size={14} className="text-amber-400" /> CRP PO/MT-XVI Stage Flow Tracker
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-[10px] font-black text-slate-300">
                  <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
                    <span className="block text-emerald-400">Stage 1</span>
                    <span>Prelims <br />(Qualifying)</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
                    <span className="block text-[#FBBF24]">Stage 2</span>
                    <span>Mains <br />(80% weight)</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
                    <span className="block text-purple-400">Stage 3</span>
                    <span>Personality Test <br />(Mandatory)</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
                    <span className="block text-[#FBBF24]">Stage 4</span>
                    <span>Interview <br />(20% weight)</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
                    <span className="block text-slate-400">Stage 5</span>
                    <span>Doc Verification <br />(Eligibility check)</span>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
                    <span className="block text-emerald-400">Allotment</span>
                    <span>Bank Posting <br />(Final outcome)</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/ibps-po/mock-tests"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Start With Stage 1 — Free Prelims Mock Test
                </Link>
                <Link
                  href="/ibps-po/exam-pattern"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  See Exact Marks & Timing <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Summary Block */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <div className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Allotment Formula
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mains weight</span>
                    <span className="text-sm font-black text-[#FBBF24]">80% weightage</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Interview weight</span>
                    <span className="text-sm font-black text-white">20% weightage</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Prelims weight</span>
                    <span className="text-sm font-black text-white">0% (Qualifying only)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Personality test</span>
                    <span className="text-sm font-black text-[#FBBF24]">Profile generator</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>The final merit ranking relies solely on combined Mains and Interview scores.</span>
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
            <QuickNavigation exam={exam} activeSlug="selection-process" />
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
                  <a href="#quick-overview" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Selection Overview
                  </a>
                </li>
                <li>
                  <a href="#prelims-stage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Stage 1: Preliminary Exam
                  </a>
                </li>
                <li>
                  <a href="#mains-stage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Stage 2: Main Exam
                  </a>
                </li>
                <li>
                  <a href="#personality-stage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Stage 3: Personality Test
                  </a>
                </li>
                <li>
                  <a href="#interview-stage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Stage 4: Interview & Documents
                  </a>
                </li>
                <li>
                  <a href="#verification-stage" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Stage 5: Verification & Posting
                  </a>
                </li>
                <li>
                  <a href="#formula-calculation" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Worked Score Formula
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

          {/* ── SECTION 1: QUICK OVERVIEW ── */}
          <section id="quick-overview" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <FileSpreadsheet size={20} className="stroke-[2.5]" />
                </span>
                Selection Process — Quick Stage Overview
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                CRP PO/MT-XVI Protocol
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Only two of the five stages (Mains and Interview) contribute marks to your final ranking, while others serve as qualifying or mandatory screening steps.
            </p>

            <div className="space-y-3.5">
              {[
                { stage: '1', title: 'Preliminary Examination', nature: 'Qualifying Only', status: 'Screens down the pool — marks do not count for final merit.', color: 'border-l-blue-500 bg-blue-50/5' },
                { stage: '2', title: 'Main Examination', nature: 'Scored (80% Weight)', status: 'The core rank driver. High score here is vital.', color: 'border-l-indigo-500 bg-indigo-50/5 font-bold' },
                { stage: '3', title: 'Personality Test', nature: 'Mandatory Screening', status: 'New for 2026. Self-report profile shared with interview panel.', color: 'border-l-purple-500 bg-purple-50/5' },
                { stage: '4', title: 'Interview', nature: 'Scored (20% Weight)', status: 'Tests banking awareness and personality. Minimum 40% required.', color: 'border-l-amber-500 bg-amber-50/5 font-bold' },
                { stage: '5', title: 'Provisional Allotment', nature: 'Final Output', status: 'Bank allocation based on final merit, category, and preference lists.', color: 'border-l-slate-400 bg-slate-50/10' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 bg-white border border-slate-200 border-l-4 rounded-r-2xl hover:shadow-xs transition-shadow duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${item.color}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs shrink-0">
                      {item.stage}
                    </span>
                    <div>
                      <span className="block font-black text-slate-800 text-sm sm:text-base leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{item.status}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-white border border-slate-150 rounded-lg text-xs font-black text-slate-600 shrink-0 self-start sm:self-auto">
                    {item.nature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 2: STAGE 1 PRELIMS ── */}
          <section id="prelims-stage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-blue-500/10 text-[#1B6EB5] flex items-center justify-center">
                <FileText size={20} className="stroke-[2.5]" />
              </span>
              Stage 1 — Preliminary Examination (Screening)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Stage Goal and guidelines */}
              <div className="lg:col-span-8 p-6 bg-gradient-to-br from-blue-50/30 to-white border border-blue-100 rounded-3xl space-y-4 shadow-xs">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1B6EB5]">First Threshold</span>
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">The Screening Phase</h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-[#1B6EB5] text-xs font-black rounded-lg border border-blue-100">
                    Qualifying Only
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
                  Prelims is purely a screening test to filter candidates for the Mains. Marks scored here are not added to the final merit score. However, candidates must clear both sectional and overall category cut-offs to advance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-blue-100/50 pt-4 text-xs font-bold text-slate-600">
                  <div className="flex gap-2 items-start">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Must pass each of the three sections individually.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Overall cutoff decides qualification to Mains ( CRP PO/MT-XVI ).</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Redirect options */}
              <div className="lg:col-span-4 p-5 bg-white border border-slate-200 rounded-3xl flex flex-col justify-between gap-5 shadow-xs">
                <div className="space-y-3">
                  <div className="font-extrabold text-sm text-slate-800 border-l-3 border-[#1B6EB5] pl-2">
                    Prelims Quick Tools
                  </div>
                  <p className="text-xs text-slate-400 font-semibold leading-normal">
                    Prepare with our detailed guide sheets for cut-offs and sectional breakdowns:
                  </p>
                </div>

                <div className="flex flex-col gap-2 font-black text-xs font-sans">
                  <Link 
                    href="/ibps-po/cut-off" 
                    className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-150 hover:border-slate-250 transition-all rounded-xl no-underline flex items-center justify-between text-slate-700"
                  >
                    <span>View Historical Prelims Cut-offs</span>
                    <ChevronRight size={14} />
                  </Link>

                  <Link 
                    href="/ibps-po/exam-pattern" 
                    className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-150 hover:border-slate-250 transition-all rounded-xl no-underline flex items-center justify-between text-slate-700"
                  >
                    <span>View Sectional Timing Split</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: STAGE 2 MAINS ── */}
          <section id="mains-stage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileCheck size={20} className="stroke-[2.5]" />
              </span>
              Stage 2 — Main Examination (80% Weightage)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Big Weight indicator */}
              <div className="md:col-span-4 p-6 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl text-white flex flex-col justify-between gap-6 shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] text-indigo-300 font-black uppercase tracking-widest">Weight Distribution</span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg">Core Ranking Stage</h3>
                </div>
                <div className="text-center py-4">
                  <span className="block text-5xl font-black text-[#FBBF24]">80%</span>
                  <span className="text-[10px] text-slate-350 font-bold uppercase tracking-wider">Final Score Weightage</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal m-0 italic">
                  *Your rank and provisional bank allotment depend largely on this single phase.
                </p>
              </div>

              {/* Right Column: Breakdown Cards */}
              <div className="md:col-span-8 grid grid-cols-1 gap-4">
                {[
                  { title: 'Double Test Format', text: 'Combines an Objective Test of 200 marks and an online Descriptive Paper of 25 marks (Essay + Letter writing).' },
                  { title: 'The Scoring Engine', text: 'Unlike Prelims, every mark scored here is carried forward to calculate the final aggregate rank.' },
                  { title: 'Dual Cut-off Requirement', text: 'You must clear the sectional cut-off in each paper and meet the aggregate Mains cut-off to qualify for interviews.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl flex gap-3 shadow-xs">
                    <CheckCircle size={16} className="text-indigo-650 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-extrabold text-sm text-slate-800">{item.title}</div>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-normal m-0">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 4: STAGE 3 PERSONALITY TEST ── */}
          <section id="personality-stage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <User size={20} className="stroke-[2.5]" />
              </span>
              Stage 3 — Personality Test (Mandatory & Non-Qualifying)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Details List */}
              <div className="md:col-span-7 grid grid-cols-1 gap-4">
                {[
                  { title: 'Profile Generation', text: 'A self-report profile designed to evaluate communication style, temperamental fits, and candidate traits.' },
                  { title: 'Interview Alignment', text: 'The resulting output profile is shared directly with the Interview Panel to support structured interviews.' },
                  { title: 'Non-Graded Nature', text: 'This test does not yield numeric marks or qualify/disqualify you on its own parameters.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-4 bg-purple-50/10 border border-purple-100 rounded-2xl">
                    <CheckCircle size={16} className="text-purple-550 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-extrabold text-sm text-slate-850">{item.title}</span>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-normal m-0">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mandatory Callout block */}
              <div className="md:col-span-5 flex">
                <div className="p-6 bg-slate-900 text-white rounded-3xl flex flex-col justify-between gap-6 shadow-md w-full">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#FBBF24]">Rule Disclaimer</span>
                    <div className="font-extrabold text-white text-base sm:text-lg">Mandatory Attendance</div>
                    <p className="text-xs text-slate-350 leading-relaxed font-semibold m-0">
                      Skipping this stage automatically disqualifies your registration. You will not be permitted to attend the Interview block.
                    </p>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-slate-400 font-bold leading-normal">
                    *Introduced in CRP PO/MT-XVI cycle to screen baseline banking temperament.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: STAGE 4 INTERVIEW ── */}
          <section id="interview-stage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Users size={20} className="stroke-[2.5]" />
              </span>
              Stage 4 — Interview & Document Verification (20% Weightage)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Interview Details */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-indigo-50/20 border border-indigo-100 rounded-2xl text-center">
                    <span className="block text-2xl font-black text-indigo-650">100 Marks</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Total Scope</span>
                  </div>

                  <div className="p-4 bg-indigo-50/20 border border-indigo-100 rounded-2xl text-center">
                    <span className="block text-2xl font-black text-emerald-650">40% Pass</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Gen/EWS Cut-off</span>
                  </div>

                  <div className="p-4 bg-indigo-50/20 border border-indigo-100 rounded-2xl text-center">
                    <span className="block text-2xl font-black text-amber-500">35% Pass</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Category Cut-off</span>
                  </div>
                </div>

                <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                  <div className="font-extrabold text-sm text-slate-800">Coordination & Panel Guidelines</div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed m-0">
                    Interviews are hosted by the Nodal Bank assigned in each State/UT. The panel reviews banking awareness, state news, personal background, and uses the Stage 3 Personality Test profile during interaction.
                  </p>
                </div>
              </div>

              {/* Right Column: Required Interview Checklist Documents */}
              <div className="lg:col-span-5 flex">
                <div className="p-5 bg-white border border-indigo-150 rounded-3xl w-full flex flex-col justify-between gap-4 hover:shadow-xs transition-shadow duration-300">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-indigo-600 tracking-wider">Required Folders</span>
                    <div className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-1">
                      <FileCheck size={16} className="text-[#1B6EB5]" /> Interview Checklist Documents
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs font-semibold text-slate-600">
                    {[
                      'Registration Application Printout & Call Letter',
                      'DOB Matriculation Certificate (Class 10)',
                      'Graduation Mark sheets & Degree certificate',
                      'Category certificate & Disability certificate (if applicable)',
                      'NOC (No Objection Certificate) for Govt Employees'
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 border-b border-slate-50 pb-1.5 last:border-0 last:pb-0">
                        <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: STAGE 5 VERIFICATION & ALLOTMENT ── */}
          <section id="verification-stage" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Lock size={20} className="stroke-[2.5]" />
              </span>
              Stage 5 — Document Verification & Provisional Allotment
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Once scores are processed, allocation lists are compiled based on aggregate merit metrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: 'A', title: 'Data Check', desc: 'Validates certificates against the data declared during registration.' },
                { step: 'B', title: 'Merit List Fit', desc: 'Matches combined Mains (80%) + Interview (20%) scores.' },
                { stage: 'C', title: 'Preference Order', desc: 'Sifts candidates through their designated bank choice rankings.' },
                { step: 'D', title: 'Slot Allocation', desc: 'Assigns category vacancies in accordance with standard GoI reservation policies.' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xs transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-black text-[10px]">
                      {item.step || item.stage}
                    </span>
                    <div className="font-extrabold text-sm sm:text-base text-slate-800">{item.title}</div>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal font-semibold m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: Worked Score Formula ── */}
          <section id="formula-calculation" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              Worked Score Calculation & Tie-Breaking
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Formula Terminal UI Mockup */}
              <div className="lg:col-span-6">
                <div className="bg-slate-900 text-white rounded-2xl p-6 font-mono relative overflow-hidden shadow-md">
                  <div className="absolute top-2 right-3 flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="text-slate-400">// Final Merit Score Calculation</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-bold text-center text-slate-100 font-sans tracking-wide">
                      Merit Score = [ ( Mains Score / 2.25 ) × 0.80 ] + [ Interview Score × 0.20 ]
                    </div>
                    <div className="text-slate-400">// Note: Mains is out of 225, Interview out of 100.</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Worked Example */}
              <div className="lg:col-span-6 p-5 bg-white border border-slate-200 rounded-3xl space-y-3 shadow-xs font-sans">
                <div className="font-extrabold text-sm sm:text-base text-slate-850 flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-[#1B6EB5]" /> Worked Calculation Example
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed space-y-2">
                  <p>Let's calculate final score for a sample candidate:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mains Score: 150 out of 225 (converts to ≈ 66.7 out of 100)</li>
                    <li>Interview Score: 70 out of 100</li>
                  </ul>
                  <p className="border-t border-slate-150 pt-2 font-bold text-slate-700">
                    Final Merit Score: (66.7 × 0.80) + (70 × 0.20) = 53.4 + 14 = <span className="text-indigo-650 font-black">67.4 out of 100</span>.
                  </p>
                </div>
              </div>
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
                { title: 'Vacancy Details', path: '/ibps-po/vacancy' },
                { title: 'Important Dates', path: '/ibps-po/important-dates' },
                { title: 'Complete Syllabus', path: '/ibps-po/syllabus' },
                { title: 'Previous Cut Offs', path: '/ibps-po/cut-off' },
                { title: 'Exam Pattern Grid', path: '/ibps-po/exam-pattern' }
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
                <div className="font-black text-base sm:text-lg text-white">Target stages set — now start preparation.</div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Benchmark your baseline percentile rank with a diagnostic mock test.
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
                { q: 'How many stages are there in the IBPS PO selection process?', a: 'The IBPS PO 2026 selection process has five stages: Preliminary Exam, Main Exam, Personality Test, Interview, and Provisional Allotment.' },
                { q: 'Are IBPS PO Prelims marks counted in the final selection?', a: 'No, Prelims marks are used only to shortlist candidates for the Main Exam and do not contribute to the final merit list.' },
                { q: 'What is the weightage of Mains and Interview in IBPS PO final selection?', a: 'The IBPS PO final merit is calculated using an 80:20 weightage, with 80% from the Main Exam and 20% from the Interview.' },
                { q: 'What is the Personality Test in IBPS PO?', a: 'The Personality Test is a mandatory, non-qualifying self-report assessment introduced in the 2026 cycle, whose results are shared with the Interview Panel.' },
                { q: 'Is the IBPS PO Personality Test scored?', a: 'No, the Personality Test carries no qualifying marks, but candidates who skip it become ineligible for the Interview.' },
                { q: 'What is the minimum qualifying mark in the IBPS PO Interview?', a: 'The minimum qualifying mark is 40% for General and EWS candidates, and 35% for SC/ST/OBC/PwBD candidates.' },
                { q: 'Who conducts the IBPS PO Interview?', a: 'The Interview is conducted by the participating bank and coordinated by the Nodal Bank in each state or union territory.' },
                { q: 'How is the final bank allotment decided in IBPS PO?', a: 'Final bank allotment is based on the candidate\'s merit rank, category, stated bank preferences, and vacancies reported by each participating bank.' }
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
              <span className="flex items-center gap-1 font-sans"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold font-sans">
                  Official IBPS selection protocol details, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any stage parameter, score weightage, or tie-breaking policy, always cross-check with the official guidelines published on ibps.in.
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
