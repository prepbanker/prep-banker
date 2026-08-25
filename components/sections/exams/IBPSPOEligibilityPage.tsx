// PATH: components/sections/exams/IBPSPOEligibilityPage.tsx
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
  HelpCircle as QuestionIcon
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOEligibilityPage() {
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
        {"@type": "ListItem", "position": 3, "name": "Eligibility", "item": "https://prepbanker.com/ibps-po/eligibility"}
      ]
    },
    // 2. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the age limit for IBPS PO 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Candidates must be between 20 and 30 years old as on 1 July 2026, meaning they should be born between 2 July 1996 and 1 July 2006."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum qualification for IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bachelor's degree in any discipline from a recognized university, with no minimum percentage requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Can final-year students apply for IBPS PO 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, provided their final-year result is officially declared on or before 21 July 2026."
          }
        },
        {
          "@type": "Question",
          "name": "How many times can a candidate attempt IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no limit on the number of attempts - candidates can apply every year as long as they remain within the eligible age limit for their category."
          }
        },
        {
          "@type": "Question",
          "name": "What is the maximum age limit for OBC candidates in IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OBC (Non-Creamy Layer) candidates get a 3-year relaxation, making their maximum eligible age 33 years."
          }
        },
        {
          "@type": "Question",
          "name": "How does IBPS calculate graduation percentage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IBPS divides total marks obtained across all subjects and years by the total maximum marks possible, multiplies by 100, and does not round up fractional percentages."
          }
        },
        {
          "@type": "Question",
          "name": "Is a specific degree stream required for IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, IBPS PO accepts a bachelor's degree in any discipline, including Arts, Commerce, Science, Engineering, and Law."
          }
        },
        {
          "@type": "Question",
          "name": "Does IBPS PO require a good credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, participating banks require candidates to have a healthy credit history (CIBIL status) at the time of joining, since the PO role involves credit and loan-related functions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the maximum age limit for SC/ST candidates in IBPS PO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SC/ST candidates get a 5-year age relaxation, making their maximum eligible age 35 years."
          }
        }
      ]
    },
    // 3. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Eligibility Criteria 2026",
      "url": "https://prepbanker.com/ibps-po/eligibility",
      "dateModified": "2026-07-27",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".self-check-box"]
      },
      "about": {
        "@type": "Thing",
        "name": "IBPS PO Eligibility Criteria"
      }
    },
    // 4. HowTo Schema (for the percentage calculation)
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Your Graduation Percentage for IBPS PO",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Sum total marks",
          "text": "Add your total marks obtained across all subjects and all semesters or years, including honours and optional subjects."
        },
        {
          "@type": "HowToStep",
          "name": "Sum maximum possible marks",
          "text": "Add the total maximum marks possible across those same subjects and years."
        },
        {
          "@type": "HowToStep",
          "name": "Divide and multiply",
          "text": "Divide your total marks obtained by the total maximum marks possible, then multiply by 100 to get your IBPS-recognized percentage."
        },
        {
          "@type": "HowToStep",
          "name": "Do not round up",
          "text": "Treat fractional percentages as the lower whole number - for example, 49.99% is considered below 50%."
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
            <span className="text-white/80">Eligibility</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Eligibility Standard
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Eligibility Criteria 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Everything that decides whether your application gets accepted — age limit, degree requirement, nationality, category-wise relaxation, and the fine-print rules that most commonly get genuine candidates rejected.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟢 Age Limit: 20–30 years as on 1 July 2026</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟢 Qualification: Bachelor's degree in any discipline — no minimum percentage</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟢 Attempts: Unlimited, as long as you're within the age window</span>
              </div>



              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/ibps-po/mock-tests"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Eligible? Start Prelims Prep Now
                </Link>
                <Link
                  href="/ibps-po/important-dates"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Check Exact Application Dates <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Freshness Strip metadata */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <div className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Verification Data
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Source Doc</span>
                    <span className="text-sm font-black text-white">CRP PO/MT-XVI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Last Checked</span>
                    <span className="text-sm font-black text-[#FBBF24]">27 July 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Degree Stream</span>
                    <span className="text-sm font-black text-white">Any Discipline</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Attempt Count</span>
                    <span className="text-sm font-black text-[#FBBF24]">Unlimited</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>A CIBIL credit check is mandatory at final selection joining.</span>
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
            <QuickNavigation exam={exam} activeSlug="eligibility" />
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
                  <a href="#age-limit" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Age Limit Parameters
                  </a>
                </li>
                <li>
                  <a href="#age-relaxation" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Age Relaxation Matrix
                  </a>
                </li>
                <li>
                  <a href="#qualification" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Academic Qualification
                  </a>
                </li>
                <li>
                  <a href="#percentage-calculation" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Graduation Percent Calc
                  </a>
                </li>
                <li>
                  <a href="#nationality" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Nationality & Citizenship
                  </a>
                </li>
                <li>
                  <a href="#attempts" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Attempt Limits
                  </a>
                </li>
                <li>
                  <a href="#documents" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Required Certificates
                  </a>
                </li>
                <li>
                  <a href="#post-selection" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                    Medical & CIBIL Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: AGE LIMIT ── */}
          <section id="age-limit" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <FileSpreadsheet size={20} className="stroke-[2.5]" />
                </span>
                IBPS PO Age Limit 2026
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                As on 1 July 2026
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Visual timeline/cards of the age window */}
              <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-100 rounded-2xl p-5 space-y-2 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-500">Lower Bound Window</span>
                    <div className="font-extrabold text-2xl text-slate-900">20 Years Minimum</div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed m-0">Born on or before: <strong className="text-slate-700">1 July 2006</strong></p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-100 rounded-2xl p-5 space-y-2 text-center shadow-xs">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-500">Upper Bound Window</span>
                    <div className="font-extrabold text-2xl text-slate-900">30 Years Maximum</div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed m-0">Born on or after: <strong className="text-slate-700">2 July 1996</strong></p>
                  </div>
                </div>

                {/* Visual birth window timeline block */}
                <div className="p-5 bg-slate-55 border border-slate-200 rounded-2xl space-y-3">
                  <div className="font-extrabold text-xs text-slate-500 uppercase tracking-wider">Birth Range Coverage</div>
                  <div className="w-full h-8 bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-between px-4 text-xs font-bold text-slate-500">
                    <span className="z-10">2 July 1996</span>
                    <div className="absolute inset-y-0 left-[15%] right-[15%] bg-indigo-500/10 border-x border-indigo-500/30 flex items-center justify-center text-[10px] text-indigo-600 font-black">
                      ELIGIBLE DATES
                    </div>
                    <span className="z-10">1 July 2006</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Scenarios box */}
              <div className="lg:col-span-4 flex">
                <div className="p-5 border border-slate-200 rounded-2xl bg-white space-y-4 shadow-xs flex flex-col justify-between w-full">
                  <div className="space-y-3">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                      <CheckCircle size={16} className="text-emerald-500" /> DOB Case Scenarios
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-500 font-semibold list-disc list-inside">
                      <li>Born 2 July 1996 → <strong className="text-emerald-600">Eligible</strong></li>
                      <li>Born 1 July 1996 → <strong className="text-rose-650">Not Eligible</strong></li>
                      <li>Born 1 July 2006 → <strong className="text-emerald-600">Eligible</strong></li>
                      <li>Born 2 July 2006 → <strong className="text-rose-650">Not Eligible</strong></li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500 leading-normal font-sans">
                    Calculation is strictly against <strong>1 July 2026</strong>. Cross-check your birth certificate date before applying.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: AGE RELAXATION ── */}
          <section id="age-relaxation" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              IBPS PO Age Relaxation — Category-Wise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { cat: 'SC / ST', rel: '5 years', max: '35 years', color: 'border-emerald-100 bg-emerald-50/5 text-emerald-600' },
                { cat: 'OBC (Non-Creamy Layer)', rel: '3 years', max: '33 years', color: 'border-blue-100 bg-blue-50/5 text-blue-600' },
                { cat: 'PwBD (General)', rel: '10 years', max: '40 years', color: 'border-indigo-100 bg-indigo-50/5 text-indigo-600' },
                { cat: 'PwBD (SC/ST)', rel: '15 years', max: '45 years', color: 'border-rose-100 bg-rose-50/5 text-rose-600' },
                { cat: 'PwBD (OBC)', rel: '13 years', max: '43 years', color: 'border-purple-100 bg-purple-50/5 text-purple-600' },
                { cat: 'Ex-Servicemen / ECOs', rel: '5 years', max: '35 years', color: 'border-slate-200 bg-slate-50/10 text-slate-500' },
                { cat: 'Affected by 1984 riots', rel: '5 years', max: '35 years', color: 'border-slate-200 bg-slate-50/10 text-slate-505' },
                { cat: 'J&K Domicile (1980-89)', rel: '5 years', max: '35 years', color: 'border-slate-200 bg-slate-50/10 text-slate-505' },
                { cat: 'General / EWS', rel: 'No relaxation', max: '30 years', color: 'border-slate-200 bg-slate-50/10 text-slate-400' }
              ].map((row, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xs transition-all duration-200 flex flex-col justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-sans">Category Group</span>
                    <div className="font-extrabold text-sm sm:text-base text-slate-800 group-hover:text-indigo-650 transition-colors">
                      {row.cat}
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2 border-t border-slate-100 pt-3">
                    <span className={`px-2.5 py-1 text-xs font-black rounded-lg border ${row.color}`}>
                      {row.rel}
                    </span>
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Max Limit</span>
                      <span className="font-extrabold text-xs text-slate-700">{row.max}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-55 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 leading-normal flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0">
                Relaxations under government schemes are not automatically cumulative. A candidate can combine relaxation parameters only where explicitly allowed by standard Government of India CRP guidelines.
              </p>
            </div>
          </section>

          {/* ── SECTION 3: EDUCATIONAL QUALIFICATION ── */}
          <section id="qualification" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <FileText size={20} className="stroke-[2.5]" />
                </span>
                Academic Qualification Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Left side: Graduation card */}
              <div className="md:col-span-8 p-6 bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-150 rounded-3xl space-y-4 shadow-xs">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Primary Academic Standard</span>
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Bachelor's Degree in Any Stream</h3>
                  </div>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100">
                    Required
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  IBPS PO accepts a bachelor's degree in any discipline including Arts, Commerce, Science, Engineering, Law, Medicine, and Management. The only requirement is that the university must be recognized by the Government of India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-indigo-100/50 pt-4">
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-slate-800 text-xs sm:text-sm">No Minimum % Barrier</div>
                      <p className="text-[11px] text-slate-500 font-semibold">Just passing your degree is fully sufficient to fill the form.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-extrabold text-slate-800 text-xs sm:text-sm">Computer Literacy</div>
                      <p className="text-[11px] text-slate-500 font-semibold">Expected working familiarity to handle digital bank operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Final Year candidates block */}
              <div className="md:col-span-4 p-6 bg-slate-900 text-white rounded-3xl flex flex-col justify-between gap-6 shadow-md font-sans">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FBBF24]">Cut-off Window</span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg">Are You in Your Final Year?</h3>
                  <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                    You can apply, but you must produce proof of passing graduation on or before <strong>21 July 2026</strong>.
                  </p>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] text-slate-300 leading-normal font-sans">
                  The date of passing eligibility must match the graduation marksheet/certificate date issued by the university.
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: PERCENTAGE CALCULATION ── */}
          <section id="percentage-calculation" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              How IBPS Calculates Your Graduation Percentage
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
              The method used to calculate graduation marks follows strict guidelines to avoid arbitrary rounding or reporting discrepancies.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Formula Terminal UI Mockup */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900 text-white rounded-2xl p-6 font-mono relative overflow-hidden shadow-md">
                  <div className="absolute top-2 right-3 flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="text-slate-400">// IBPS Graduation Percentage Formula</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-bold text-center text-slate-100 font-sans tracking-wide">
                      Percentage = ( Total Marks Obtained / Grand Max Marks ) × 100
                    </div>
                    <div className="text-slate-400">// CGPA to Percentage Conversion</div>
                    <p className="text-slate-350 leading-relaxed font-sans text-xs m-0">
                      Convert CGPA/GPA as per your university guidelines, then apply the formula above. Keep your university conversion certificate ready for DV.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side: 2 steps guidelines */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
                  <div className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
                    <CheckCircle size={15} className="text-indigo-600" /> Cumulative Math Rule
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed m-0">
                    Add up obtained and maximum marks from all subjects, honours, optionals, and semesters combined to compute the base ratio.
                  </p>
                </div>

                <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
                  <div className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
                    <CheckCircle size={15} className="text-rose-500" /> The No Rounding Rule
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed m-0">
                    Fractions are never rounded up. For example, <strong>59.99%</strong> is processed as below 60% and <strong>54.99%</strong> is processed as below 55%.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: NATIONALITY CRITERIA ── */}
          <section id="nationality" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <UserCheck size={20} className="stroke-[2.5]" />
              </span>
              Nationality & Citizenship Criteria
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
              An applicant must qualify under one of the following citizenship standards to be eligible for appointment:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Indian Citizen', desc: 'A citizen of India.', accent: 'border-blue-150 bg-blue-50/5' },
                { title: 'Nepal / Bhutan', desc: 'A subject of Nepal or a subject of Bhutan.', accent: 'border-emerald-150 bg-emerald-50/5' },
                { title: 'Tibetan Refugee', desc: 'Settled permanently in India before 1 January 1962.', accent: 'border-amber-150 bg-amber-50/5' },
                { title: 'Migrants / PIO', desc: 'Indian origin migrants from specified East African countries/Pakistan intending permanent settlement.', accent: 'border-slate-200 bg-slate-50/10' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 border rounded-2xl hover:shadow-xs transition-all space-y-2 flex flex-col justify-between ${item.accent}`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Group {idx + 1}</span>
                    <div className="font-extrabold text-sm sm:text-base text-slate-800">{item.title}</div>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal font-semibold m-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-505 leading-normal flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0">
                Candidates belonging to groups other than Indian citizens must produce a valid certificate of eligibility issued by the Government of India during document verification.
              </p>
            </div>
          </section>

          {/* ── SECTION 6: NUMBER OF ATTEMPTS ── */}
          <section id="attempts" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={20} className="stroke-[2.5]" />
              </span>
              Number of Attempts
            </h2>

            <div className="p-6 bg-gradient-to-r from-indigo-50/80 to-white border border-indigo-150 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2 max-w-xl">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Are There Limit Counters?</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed m-0">
                  No, there is **no cap** on attempts for IBPS PO. You are eligible to apply every year for as long as you meet the category age window ceiling. Your limit is the age ceiling, not an attempt count.
                </p>
              </div>
              
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col justify-center items-center text-center shrink-0 min-w-[140px]">
                <span className="block text-2xl font-black text-indigo-600">Unlimited</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Attempts</span>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: DOCUMENTS REQUIRED FOR ELIGIBILITY ── */}
          <section id="documents" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileCheck size={20} className="stroke-[2.5]" />
              </span>
              Documents Required to Prove Eligibility
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              Ensure you have the following certificates and cards readily available for verification during later stages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mandatory */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3.5 shadow-xs">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-800 border-l-3 border-indigo-500 pl-2">
                  Mandatory for All Candidates
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                  {['Graduation mark sheets', 'Degree certificate', 'Class 10 certificate (DOB)', 'Aadhaar, PAN, or Passport'].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditional */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3.5 shadow-xs">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-800 border-l-3 border-amber-500 pl-2">
                  Conditional (As Applicable)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                  {['Category certificate', 'Disability certificate', 'Nationality certificate', 'No Objection Certificate'].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-amber-500 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 8: POST-SELECTION CONDITIONS ── */}
          <section id="post-selection" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Lock size={20} className="stroke-[2.5]" />
              </span>
              Post-Selection Conditions (Medical & Credit History)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Medical fitness */}
              <div className="p-5 bg-rose-50/10 border border-rose-100 rounded-2xl space-y-2">
                <div className="font-extrabold text-slate-800 text-sm sm:text-base">Medical Fitness Check</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Provisionally selected candidates must clear a standard bank-allotted medical examination. This usually includes blood tests, chest X-rays, sugar levels, and other baseline physical metrics before official onboarding.
                </p>
              </div>

              {/* Credit check */}
              <div className="p-5 bg-emerald-50/10 border border-emerald-100 rounded-2xl space-y-2">
                <div className="font-extrabold text-slate-800 text-sm sm:text-base">Credit History & CIBIL Score</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Participating banks require a healthy CIBIL status at joining. If you have an active default or unresolved credit reporting, you must clear it or present a lender-issued NOC to prevent appointment withdrawal.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 9: EXPLORE MORE - LINK HUB ── */}
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
                { title: 'Selection Process', path: '/ibps-po/selection-process' },
                { title: 'Salary & Perks', path: '/ibps-po/salary' },
                { title: '90-Day Study Plan', path: '/ibps-po/study-plan' }
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
                <div className="font-black text-base sm:text-lg text-white">Eligible to register? Outprep the competition.</div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Attempt a Free IBPS PO Mock Test and benchmark your baseline percentile score.
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

          {/* ── SECTION 10: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'What is the age limit for IBPS PO 2026?', a: 'Candidates must be between 20 and 30 years old as on 1 July 2026, meaning they should be born between 2 July 1996 and 1 July 2006.' },
                { q: 'What is the minimum qualification for IBPS PO?', a: 'A bachelor\'s degree in any discipline from a recognized university, with no minimum percentage requirement.' },
                { q: 'Can final-year students apply for IBPS PO 2026?', a: 'Yes, provided their final-year result is officially declared on or before 21 July 2026.' },
                { q: 'How many times can a candidate attempt IBPS PO?', a: 'There is no limit on the number of attempts — candidates can apply every year as long as they remain within the eligible age limit for their category.' },
                { q: 'What is the maximum age limit for OBC candidates in IBPS PO?', a: 'OBC (Non-Creamy Layer) candidates get a 3-year relaxation, making their maximum eligible age 33 years.' },
                { q: 'How does IBPS calculate graduation percentage?', a: 'IBPS divides total marks obtained across all subjects and years by the total maximum marks possible, multiplies by 100, and does not round up fractional percentages.' },
                { q: 'Is a specific degree stream required for IBPS PO?', a: 'No, IBPS PO accepts a bachelor\'s degree in any discipline, including Arts, Commerce, Science, Engineering, and Law.' },
                { q: 'Does IBPS PO require a good credit score?', a: 'Yes, participating banks require candidates to have a healthy credit history (CIBIL status) at the time of joining, since the PO role involves credit and loan-related functions.' },
                { q: 'What is the maximum age limit for SC/ST candidates in IBPS PO?', a: 'SC/ST candidates get a 5-year age relaxation, making their maximum eligible age 35 years.' }
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

          {/* ── SECTION 11: E-E-A-T / TRUST BLOCK ── */}
          <div className="bg-slate-100/50 border border-slate-200 rounded-2xl p-5 font-sans space-y-3.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 font-sans">
              <span className="flex items-center gap-1 font-sans"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-sans">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold font-sans">
                  Official IBPS Eligibility parameters, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any citizenship clause, age limit rule, degree requirement, or credit history constraint, always cross-check with the official guidelines published on ibps.in.
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
