// PATH: components/sections/exams/IBPSPOVacancyPage.tsx
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
  TrendingUp,
  Building2,
  Award
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOVacancyPage() {
  const exam = getExamData('ibps-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [pdfProgress, setPdfProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPdfModalOpen && isPdfLoading) {
      setPdfProgress(0);
      interval = setInterval(() => {
        setPdfProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          const increment = prev < 50 ? 8 : prev < 80 ? 4 : 1;
          return prev + increment;
        });
      }, 80);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPdfModalOpen, isPdfLoading]);

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
        {"@type": "ListItem", "position": 3, "name": "Vacancy", "item": "https://prepbanker.com/ibps-po/vacancy"}
      ]
    },
    // 2. NewsArticle Schema
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "IBPS PO Vacancy 2026: 7,365 Posts — Bank-wise & Category-wise List",
      "description": "IBPS PO Vacancy 2026 revised to 7,365 posts across 11 public sector banks under CRP PO/MT-XVI. Full bank-wise and category-wise breakdown here.",
      "image": ["https://prepbanker.com/images/ibps-po-vacancy-2026.jpg"],
      "datePublished": "2026-07-01T09:00:00+05:30",
      "dateModified": "2026-07-27T10:00:00+05:30",
      "author": {"@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com"},
      "publisher": {
        "@type": "Organization",
        "name": "PrepBanker",
        "logo": {"@type": "ImageObject", "url": "https://prepbanker.com/logo.png"}
      },
      "mainEntityOfPage": {"@type": "WebPage", "@id": "https://prepbanker.com/ibps-po/vacancy"}
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question","name": "How many total vacancies are there in IBPS PO 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "IBPS PO 2026 has 7,365 total revised vacancies under CRP PO/MT-XVI, increased from the originally notified 6,715 posts."}},
        {"@type": "Question","name": "Why was the IBPS PO 2026 vacancy increased?",
         "acceptedAnswer": {"@type": "Answer","text": "IBPS increased the vacancy count by 650 posts through a corrigendum issued on 20 July 2026 after Indian Bank reported additional manpower requirements."}},
        {"@type": "Question","name": "Which bank has the highest IBPS PO vacancy in 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "Bank of Baroda has the highest IBPS PO 2026 vacancy with 1,900 posts, followed by Canara Bank with 1,500 posts and Bank of Maharashtra with 1,100 posts."}},
        {"@type": "Question","name": "Which bank has the lowest IBPS PO vacancy in 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "Punjab & Sind Bank has the lowest reported IBPS PO 2026 vacancy with 161 posts."}},
        {"@type": "Question","name": "Have UCO Bank and Union Bank of India reported their IBPS PO 2026 vacancies?",
         "acceptedAnswer": {"@type": "Answer","text": "No, as of the latest update UCO Bank and Union Bank of India have not reported their specific vacancy numbers, marked as NR (Not Reported), so the final total vacancy count may change further."}},
        {"@type": "Question","name": "What is the category-wise vacancy distribution in IBPS PO 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "Of the 7,365 total posts, the revised category-wise distribution is approximately 2,936 for Unreserved, 2,015 for OBC, 1,131 for SC, 721 for EWS, and 562 for ST candidates."}},
        {"@type": "Question","name": "How many PwBD vacancies are there in IBPS PO 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "Persons with Benchmark Disabilities (PwBD) are reserved a share of the total 7,365 vacancies as per Government of India norms, distributed horizontally across all category groups rather than as a separate vertical total."}},
        {"@type": "Question","name": "Are IBPS PO vacancies final or subject to change?",
         "acceptedAnswer": {"@type": "Answer","text": "IBPS PO vacancies are indicative and provisional; they may be revised upward or downward based on the actual manpower requirements communicated by participating banks during the recruitment year."}},
        {"@type": "Question","name": "How does the IBPS PO 2026 vacancy compare to previous years?",
         "acceptedAnswer": {"@type": "Answer","text": "At 7,365 posts, IBPS PO 2026 has the highest vacancy count of the last five recruitment cycles, well above 2025 (5,208), 2024 (4,455), 2023 (3,049), and 2022 (6,432)."}},
        {"@type": "Question","name": "How many banks participate in the IBPS PO 2026 recruitment?",
         "acceptedAnswer": {"@type": "Answer","text": "11 Public Sector Banks participate in IBPS PO 2026, and vacancies are distributed among them based on each bank's individual manpower requirement."}},
        {"@type": "Question","name": "Where can I download the official IBPS PO Vacancy 2026 PDF?",
         "acceptedAnswer": {"@type": "Answer","text": "The official IBPS PO Vacancy 2026 PDF, including the revised Annexure-I, is available on the IBPS website at ibps.in under the CRP PO/MT-XVI notification section."}},
        {"@type": "Question","name": "Does a higher vacancy count mean a lower cut-off in IBPS PO 2026?",
         "acceptedAnswer": {"@type": "Answer","text": "Not necessarily; while more vacancies generally improve selection chances, the final cut-off also depends on the number of applicants, exam difficulty level, and category-wise competition in that cycle."}}
      ]
    },
    // 4. WebPage + Speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://prepbanker.com/ibps-po/vacancy",
      "url": "https://prepbanker.com/ibps-po/vacancy",
      "name": "IBPS PO Vacancy 2026",
      "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["#quick-answer", "#reconciliation-note"]},
      "isPartOf": {"@type": "WebSite", "name": "PrepBanker", "url": "https://prepbanker.com"}
    },
    // 5. Table Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "IBPS PO 2026 Bank-wise and Category-wise Vacancy Data",
      "description": "Official bank-wise and category-wise vacancy distribution for IBPS PO Recruitment 2026 (CRP PO/MT-XVI)",
      "creator": {"@type": "Organization", "name": "PrepBanker"},
      "temporalCoverage": "2026",
      "spatialCoverage": "India",
      "isBasedOn": "https://www.ibps.in"
    }
  ];

  const bankVacancies = [
    { name: 'Bank of Baroda', sc: 285, st: 142, obc: 513, ews: 190, ur: 770, total: 1900 },
    { name: 'Bank of India', sc: 75, st: 37, obc: 135, ews: 50, ur: 203, total: 500 },
    { name: 'Bank of Maharashtra', sc: 165, st: 82, obc: 297, ews: 110, ur: 446, total: 1100 },
    { name: 'Canara Bank', sc: 225, st: 112, obc: 405, ews: 150, ur: 608, total: 1500 },
    { name: 'Central Bank of India', sc: 75, st: 37, obc: 135, ews: 50, ur: 203, total: 500 },
    { name: 'Indian Bank', sc: 122, st: 60, obc: 199, ews: 52, ur: 217, total: 650 },
    { name: 'Indian Overseas Bank', sc: 84, st: 41, obc: 148, ews: 54, ur: 223, total: 550 },
    { name: 'Punjab National Bank', sc: 76, st: 38, obc: 136, ews: 50, ur: 204, total: 504 },
    { name: 'Punjab & Sind Bank', sc: 24, st: 13, obc: 47, ews: 15, ur: 62, total: 161 },
    { name: 'UCO Bank', sc: 'NR', st: 'NR', obc: 'NR', ews: 'NR', ur: 'NR', total: 'NR' },
    { name: 'Union Bank of India', sc: 'NR', st: 'NR', obc: 'NR', ews: 'NR', ur: 'NR', total: 'NR' }
  ];

  const categoryBreakdown = [
    { category: 'Unreserved (UR)', count: '2,936', share: '~39.9%' },
    { category: 'OBC (Non-Creamy Layer)', count: '2,015', share: '~27.4%' },
    { category: 'SC (Scheduled Caste)', count: '1,131', share: '~15.4%' },
    { category: 'EWS (Economically Weaker Section)', count: '721', share: '~9.8%' },
    { category: 'ST (Scheduled Tribe)', count: '562', share: '~7.6%' }
  ];

  const trendData = [
    { year: '2026', initial: '7,365' },
    { year: '2025', initial: '5,208' },
    { year: '2024', initial: '4,455' },
    { year: '2023', initial: '3,049' },
    { year: '2022', initial: '6,432' }
  ];

  const renderCell = (val: string | number) => {
    if (val === 'NR') {
      return (
        <span className="text-[10px] font-black text-slate-500 bg-slate-100 border border-slate-200/80 px-1.5 py-0.5 rounded-md uppercase tracking-wider select-none">
          NR
        </span>
      );
    }
    if (val === 0) {
      return <span className="text-slate-350 font-normal">0</span>;
    }
    return <span className="font-semibold text-slate-800">{val.toLocaleString()}</span>;
  };

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
            <span className="text-white/80">Vacancy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Revised Count
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Vacancy 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  7,365 Posts — Bank-wise & Category-wise List
                </p>
                <p className="text-xs text-white/60">
                  IBPS has revised the total number of Probationary Officer/Management Trainee vacancies under CRP PO/MT-XVI to 7,365 — up from the initially notified 6,715 — after a corrigendum increased Indian Bank's allocation by 650 posts. Two banks are yet to report final numbers, so this count could still move.
                </p>
              </div>

              {/* Freshness Strip */}
              <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟢 Current Total: 7,365 (Revised)</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">📈 Originally Notified: 6,715</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🔄 Last Revised: 20 July 2026</span>
              </div>


              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <button
                  onClick={() => {
                    setIsPdfLoading(true);
                    setIsPdfModalOpen(true);
                  }}
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer border-none"
                >
                  <FileText size={15} strokeWidth={2.5} /> View Vacancy PDF
                </button>
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline cursor-pointer"
                >
                  Practice with a Free Mock Test <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Mini Stats Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Vacancy Key Highlights
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Highest Bank</span>
                    <span className="text-sm font-black text-[#FBBF24]">BoB (1,900)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Lowest Bank</span>
                    <span className="text-sm font-black text-white">PSB (161)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Yet to Report</span>
                    <span className="text-sm font-black text-white">2 Banks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Revision Date</span>
                    <span className="text-sm font-black text-[#FBBF24]">20 July 2026</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>UCO Bank and Union Bank of India vacancies are marked NR (Not Reported) currently.</span>
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
            <QuickNavigation exam={exam} activeSlug="vacancy" />
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
                  <a href="#reconciliation-note" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Indicative Vacancy Model
                  </a>
                </li>
                <li>
                  <a href="#bank-wise" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Bank-wise Distribution
                  </a>
                </li>
                <li>
                  <a href="#category-wise" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Category-wise Split
                  </a>
                </li>
                <li>
                  <a href="#trends" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    5-Year Vacancy Trends
                  </a>
                </li>
                <li>
                  <a href="#overview" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Overview Summary Table
                  </a>
                </li>
                <li>
                  <a href="#explore" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Resources & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: WHY THIS NUMBER KEEPS CHANGING (reconciliation-note) ── */}
          <section id="reconciliation-note" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Info size={18} />
              </span>
              Why the IBPS PO Vacancy Count Isn't Final Yet
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              Unlike static government recruitments, IBPS operates a dynamic vacancy model. Vacancies published in the initial notification are indicative, and participating banks can revise their seat requirements up or down based on operational updates:
            </p>

            {/* Light-mode vacancy update cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
              {/* Card 1: Initial Count */}
              <div className="p-5 bg-gradient-to-br from-blue-50/30 to-slate-50/10 border border-blue-200/60 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-blue-650 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wider">1 July 2026</span>
                  <FileText size={15} className="text-blue-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Initial Notification</span>
                  <span className="text-2xl font-black text-slate-850 tracking-tight">6,715 Posts</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal font-semibold">
                  The initial indicative seat vacancy count announced at the time of official recruitment release.
                </p>
              </div>

              {/* Card 2: Indian Bank Update */}
              <div className="p-5 bg-gradient-to-br from-emerald-50/30 to-slate-50/10 border border-emerald-200/60 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">20 July 2026</span>
                  <CheckCircle size={15} className="text-emerald-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Indian Bank Update</span>
                  <span className="text-2xl font-black text-emerald-600 tracking-tight">+650 Seats</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal font-semibold">
                  Corrigendum update added seats, raising the active selection total to <strong className="text-slate-800">7,365 seats</strong>.
                </p>
              </div>

              {/* Card 3: Pending Banks */}
              <div className="p-5 bg-gradient-to-br from-amber-50/30 to-slate-50/10 border border-amber-200/60 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Mains Expected</span>
                  <Clock size={15} className="text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Not Reported (NR) Yet</span>
                  <span className="text-xl font-black text-slate-850 tracking-tight">UCO & Union Bank</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal font-semibold">
                  Additional seat updates are expected to be reported before final allocations are finalized.
                </p>
              </div>
            </div>

            {/* Checklist Box */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs font-sans">
              <h4 className="font-black text-sm text-slate-800 flex items-center gap-2 mb-3.5">
                <span className="p-1 rounded bg-amber-50 text-amber-600"><Info size={14} /></span>
                Operational Factors Driving Seat Revisions
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-655 font-bold">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Business and branch network expansion</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Employee retirements and attrition</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Internal restructuring & bank mergers</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Government staffing policies</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all col-span-full sm:col-span-2">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Actual needs forecasted for recruitment year (2027–28)</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: BANK-WISE VACANCY DISTRIBUTION ── */}
          <section id="bank-wise" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-slate-900/10 text-slate-800 flex items-center justify-center">
                <Building2 size={18} />
              </span>
              IBPS PO 2026 Bank-wise Vacancy Distribution
            </h2>

            <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm bg-white font-sans">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-100 font-bold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center">Sr.</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs">Participating Bank</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center">SC</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center">ST</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center">OBC</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center">EWS</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center">UR</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-xs text-center text-amber-400">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {bankVacancies.map((bank, idx) => (
                    <tr key={idx} className={bank.total === 'NR' ? 'text-slate-400 bg-slate-50/10' : 'hover:bg-slate-50/45 transition-colors'}>
                      <td className="px-4 py-3 bg-slate-50/30 font-extrabold text-slate-500 text-center">{idx + 1}</td>
                      <td className="px-4 py-3 font-extrabold text-slate-900">{bank.name}</td>
                      <td className="px-4 py-3 text-center">{renderCell(bank.sc)}</td>
                      <td className="px-4 py-3 text-center">{renderCell(bank.st)}</td>
                      <td className="px-4 py-3 text-center">{renderCell(bank.obc)}</td>
                      <td className="px-4 py-3 text-center">{renderCell(bank.ews)}</td>
                      <td className="px-4 py-3 text-center">{renderCell(bank.ur)}</td>
                      <td className="px-4 py-3 text-center font-bold bg-slate-50/10">{renderCell(bank.total)}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 border-t-2 border-slate-200 font-black text-slate-900">
                    <td className="px-4 py-4 text-center font-black bg-slate-50/30 text-slate-650" colSpan={2}>Total Vacancies</td>
                    <td className="px-4 py-4 text-center">{renderCell(1131)}</td>
                    <td className="px-4 py-4 text-center">{renderCell(562)}</td>
                    <td className="px-4 py-4 text-center">{renderCell(2015)}</td>
                    <td className="px-4 py-4 text-center">{renderCell(721)}</td>
                    <td className="px-4 py-4 text-center">{renderCell(2936)}</td>
                    <td className="px-4 py-4 text-center font-black text-indigo-650 bg-indigo-50/40 border-l border-indigo-150/40">{renderCell(7365)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 font-sans">
              <p className="text-xs text-slate-500 font-semibold m-0 leading-normal">
                <strong>NR = Not Reported</strong> by the participating bank as of the latest corrigendum. Table reflects the revised Annexure-I figures released 20 July 2026.
              </p>
              <button
                onClick={() => {
                  setIsPdfLoading(true);
                  setIsPdfModalOpen(true);
                }}
                className="text-xs text-[#1B6EB5] hover:underline font-extrabold inline-flex items-center gap-0.5 no-underline bg-transparent border-none cursor-pointer p-0"
              >
                View Official IBPS PO Vacancy PDF <ChevronRight size={12} />
              </button>
            </div>
          </section>

          {/* ── SECTION 3: CATEGORY-WISE VACANCY AT A GLANCE ── */}
          <section id="category-wise" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Users size={18} />
              </span>
              IBPS PO 2026 Category-wise Vacancy at a Glance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start font-sans">
              {/* Category distribution chart */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <h4 className="font-extrabold text-sm text-slate-800 tracking-tight">Vacancy Share Distribution</h4>
                <div className="space-y-4.5">
                  {[
                    { category: 'Unreserved (UR)', count: '2,936', percentage: 39.9, color: 'from-blue-500 to-sky-400 bg-blue-50', text: 'text-blue-700' },
                    { category: 'OBC (Non-Creamy Layer)', count: '2,015', percentage: 27.4, color: 'from-indigo-500 to-violet-400 bg-indigo-50', text: 'text-indigo-700' },
                    { category: 'SC (Scheduled Caste)', count: '1,131', percentage: 15.4, color: 'from-emerald-500 to-teal-400 bg-emerald-50', text: 'text-emerald-700' },
                    { category: 'EWS (Economically Weaker Section)', count: '721', percentage: 9.8, color: 'from-amber-500 to-yellow-400 bg-amber-50', text: 'text-amber-700' },
                    { category: 'ST (Scheduled Tribe)', count: '562', percentage: 7.6, color: 'from-rose-500 to-orange-400 bg-rose-50', text: 'text-rose-700' }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-700">{item.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 font-semibold">{item.count} posts</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${item.text} ${item.color.split(' ').pop()}`}>{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${item.color.split(' ').slice(0, 2).join(' ')}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reservation Rules Callout */}
              <div className="space-y-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
                  <UserCheck size={16} /> Reservation & Eligibility
                </h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Wondering if you meet the criteria to claim SC/ST/OBC/EWS reservation? Check the complete eligibility and reservation rules page.
                </p>
                <Link
                  href="/ibps-po/eligibility"
                  className="inline-flex items-center gap-1 text-xs text-[#1B6EB5] hover:underline font-extrabold no-underline"
                >
                  Verify Eligibility Criteria <ChevronRight size={12} />
                </Link>

                <div className="border-t border-slate-200 pt-3.5 space-y-1.5">
                  <h5 className="font-extrabold text-xs text-slate-800 flex items-center gap-1">
                    <Info size={12} /> PwBD Horizontal Reservation
                  </h5>
                  <p className="text-[11px] text-slate-400 leading-normal font-semibold">
                    PwBD reservation is applied horizontally across categories (not as a separate additional total) as per the Rights of Persons with Disabilities Act, 2016 — a PwBD candidate is counted within their applicable category, not outside it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: 5 YEARS TREND ── */}
          <section id="trends" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <TrendingUp size={18} />
              </span>
              IBPS PO Vacancy Trend: 2022–2026
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 font-sans items-start">
              {/* Trend Line Chart Graph */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vacancy Trend Curve</span>
                  <span className="text-[10px] font-black text-emerald-650 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Record Peak in 2026</span>
                </div>

                {/* Responsive SVG wrapper */}
                <div className="w-full overflow-x-auto pb-1">
                  <div className="min-w-[440px] w-full">
                    <svg viewBox="0 0 500 200" className="w-full h-auto select-none overflow-visible">
                      <defs>
                        {/* Gradient for the Trend Line */}
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#818CF8" />
                          <stop offset="70%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>

                        {/* Gradient for the Area under the Line */}
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.00" />
                        </linearGradient>
                        
                        {/* Shadow glow under the line */}
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#6366F1" floodOpacity="0.12" />
                        </filter>

                        {/* Arrow marker for Y and X axis */}
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94A3B8" />
                        </marker>
                      </defs>

                      {/* Gridlines */}
                      {/* Y Gridlines */}
                      <line x1="45" y1="131" x2="475" y2="131" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="45" y1="98"  x2="475" y2="98"  stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="45" y1="64"  x2="475" y2="64"  stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="45" y1="30"  x2="475" y2="30"  stroke="#F1F5F9" strokeWidth="1" />

                      {/* X Gridlines */}
                      <line x1="152.5" y1="30" x2="152.5" y2="165" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="260"   y1="30" x2="260"   y2="165" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="367.5" y1="30" x2="367.5" y2="165" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="475"   y1="30" x2="475"   y2="165" stroke="#F1F5F9" strokeWidth="1" />

                      {/* Y-Axis Labels */}
                      <text x="32" y="168" textAnchor="end" className="text-[9px] fill-slate-400 font-bold">0</text>
                      <text x="32" y="134" textAnchor="end" className="text-[9px] fill-slate-400 font-bold">2,000</text>
                      <text x="32" y="101" textAnchor="end" className="text-[9px] fill-slate-400 font-bold">4,000</text>
                      <text x="32" y="67"  textAnchor="end" className="text-[9px] fill-slate-400 font-bold">6,000</text>
                      <text x="32" y="33"  textAnchor="end" className="text-[9px] fill-slate-400 font-bold">8,000</text>

                      {/* Axis Lines with Arrow Markers */}
                      {/* Y Axis */}
                      <line x1="45" y1="165" x2="45" y2="15" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />
                      {/* X Axis */}
                      <line x1="45" y1="165" x2="490" y2="165" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

                      {/* Area Under the Curve */}
                      <path 
                        d="M 45 56 C 98.75 56, 98.75 114, 152.5 114 C 206.25 114, 206.25 90, 260 90 C 313.75 90, 313.75 77, 367.5 77 C 421.25 77, 421.25 41, 475 41 L 475 165 L 45 165 Z"
                        fill="url(#areaGradient)"
                      />

                      {/* Trend Line Path (Smooth Spline) */}
                      <path 
                        d="M 45 56 C 98.75 56, 98.75 114, 152.5 114 C 206.25 114, 206.25 90, 260 90 C 313.75 90, 313.75 77, 367.5 77 C 421.25 77, 421.25 41, 475 41" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                      />

                      {/* Data Points & Year Labels */}
                      {[
                        { x: 45,    y: 56,  val: '6,432', year: '2022', isPeak: false },
                        { x: 152.5, y: 114, val: '3,049', year: '2023', isPeak: false },
                        { x: 260,   y: 90,  val: '4,455', year: '2024', isPeak: false },
                        { x: 367.5, y: 77,  val: '5,208', year: '2025', isPeak: false },
                        { x: 475,   y: 41,  val: '7,365', year: '2026', isPeak: true }
                      ].map((pt, idx) => (
                        <g key={idx} className="group/point">
                          {/* Inner / Outer point circles */}
                          <circle 
                            cx={pt.x} 
                            cy={pt.y} 
                            r="4.5" 
                            className={`cursor-pointer transition-all duration-200 stroke-2 ${pt.isPeak ? 'fill-emerald-500 stroke-emerald-600' : 'fill-white stroke-indigo-650'}`} 
                          />
                          {!pt.isPeak && <circle cx={pt.x} cy={pt.y} r="1.5" fill="#4F46E5" />}
                          
                          {/* Value label text */}
                          <text 
                            x={pt.x} 
                            y={pt.y - 10} 
                            textAnchor="middle" 
                            className={`text-[9px] font-black pointer-events-none ${pt.isPeak ? 'fill-emerald-600' : 'fill-slate-700'}`}
                          >
                            {pt.val}
                          </text>

                          {/* Year label */}
                          <text 
                            x={pt.x} 
                            y="180" 
                            textAnchor="middle" 
                            className={`text-[10px] font-bold pointer-events-none ${pt.isPeak ? 'fill-slate-900 font-black' : 'fill-slate-400'}`}
                          >
                            {pt.year}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Trend Insight Callout */}
              <div className="p-5 border border-amber-200/40 bg-amber-50/30 rounded-2xl space-y-3">
                <h4 className="font-extrabold text-sm text-amber-900 flex items-center gap-1.5">
                  <Trophy size={16} className="text-amber-500" /> Historical Analysis
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                  2026 marks the highest IBPS PO vacancy count in the last five recruitment cycles, roughly 41% more than 2025 — good news if you're weighing whether this is the year to attempt seriously.
                </p>
                <Link
                  href="/ibps-po/cut-off"
                  className="inline-flex items-center gap-1 text-xs text-[#1B6EB5] hover:underline font-extrabold no-underline pt-1"
                >
                  See Overall Difficulty & Cut-Off Trends <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: QUICK OVERVIEW TABLE ── */}
          <section id="overview" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileSpreadsheet size={18} />
              </span>
              Quick Overview Table
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
              
              {/* Card 1: Seat Matrix Summary */}
              <div className="p-5 bg-gradient-to-br from-blue-50/40 to-slate-50/20 border border-blue-200/50 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">Vacancies</span>
                  <Award size={16} className="text-blue-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Total Seats (Current)</span>
                  <span className="text-2xl font-black text-slate-850 tracking-tight">7,365 Posts</span>
                </div>
                <div className="border-t border-slate-200/60 pt-2.5 space-y-1 text-xs text-slate-600 font-semibold">
                  <div className="flex justify-between">
                    <span>Originally Notified:</span>
                    <span className="text-slate-800 font-bold">6,715</span>
                  </div>
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Indian Bank Addition:</span>
                    <span>+650 Seats</span>
                  </div>
                  <div className="flex justify-between text-slate-450 text-[10px]">
                    <span>Corrigendum date:</span>
                    <span>20 July 2026</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Participating Banks Status */}
              <div className="p-5 bg-gradient-to-br from-emerald-50/40 to-slate-50/20 border border-emerald-200/50 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">Banks</span>
                  <Building2 size={16} className="text-emerald-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Participating Banks</span>
                  <span className="text-2xl font-black text-slate-850 tracking-tight">11 Banks</span>
                </div>
                <div className="border-t border-slate-200/60 pt-2.5 space-y-2 text-xs">
                  <p className="text-slate-500 font-medium leading-normal">
                    UCO Bank & Union Bank of India are currently marked <strong className="text-slate-800">NR (Not Reported)</strong>. Seat revisions are expected.
                  </p>
                  <Link href="/ibps-po/notification" className="text-indigo-650 hover:underline font-extrabold inline-flex items-center gap-0.5 no-underline">
                    View Bank List details <ChevronRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Card 3: Bank Highlights */}
              <div className="p-5 bg-gradient-to-br from-purple-50/40 to-slate-50/20 border border-purple-200/50 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded uppercase tracking-wider">Distribution Limits</span>
                  <TrendingUp size={16} className="text-purple-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Vacancy Highlights</span>
                  <span className="text-xl font-black text-slate-850 tracking-tight">Peak Vacancy Spreads</span>
                </div>
                <div className="border-t border-slate-200/60 pt-2.5 space-y-1.5 text-xs text-slate-600 font-semibold">
                  <div className="flex justify-between">
                    <span>Highest Vacancy Bank:</span>
                    <span className="text-slate-800 font-bold">Bank of Baroda (1,900)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lowest Vacancy Bank:</span>
                    <span className="text-slate-850 font-bold">Punjab & Sind Bank (161)</span>
                  </div>
                </div>
              </div>

              {/* Card 4: General Specifications */}
              <div className="p-5 bg-gradient-to-br from-amber-50/40 to-slate-50/20 border border-amber-200/50 rounded-2xl shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider">Admin Info</span>
                  <Clock size={16} className="text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-450 block font-bold uppercase tracking-wider">Recruitment Specifications</span>
                  <span className="text-xl font-black text-slate-850 tracking-tight">CRP PO/MT-XVI</span>
                </div>
                <div className="border-t border-slate-200/60 pt-2.5 space-y-1.5 text-xs text-slate-600 font-semibold">
                  <div className="flex justify-between">
                    <span>Recruitment Year:</span>
                    <span className="text-slate-800 font-bold">2027–28</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exam Coordinator:</span>
                    <span className="text-slate-800 font-bold">IBPS India</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ── SECTION 6: EXPLORE MORE - LINK HUB ── */}
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
                { slug: 'admit-card', title: 'Admit Card', path: '/ibps-po/admit-card' },
                { slug: 'eligibility', title: 'Eligibility Criteria', path: '/ibps-po/eligibility' },
                { slug: 'important-dates', title: 'Important Dates', path: '/ibps-po/important-dates' },
                { slug: 'selection-process', title: 'Selection Process', path: '/ibps-po/selection-process' },
                { slug: 'cut-off', title: 'Previous Cut Off', path: '/ibps-po/cut-off' },
                { slug: 'salary', title: 'Salary & Perks', path: '/ibps-po/salary' },
                { slug: 'syllabus', title: 'Syllabus', path: '/ibps-po/syllabus' }
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
                <h4 className="font-black text-base sm:text-lg text-white">More vacancies, more competition — outprep it.</h4>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Attempt a Free IBPS PO Mock Test today and baseline your readiness. Boost your speed with sectional test challenges.
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

          {/* ── SECTION 10: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'How many total vacancies are there in IBPS PO 2026?', a: 'IBPS PO 2026 has 7,365 total revised vacancies under CRP PO/MT-XVI, increased from the originally notified 6,715 posts.' },
                { q: 'Why was the IBPS PO 2026 vacancy increased?', a: 'IBPS increased the vacancy count by 650 posts through a corrigendum issued on 20 July 2026 after Indian Bank reported additional manpower requirements.' },
                { q: 'Which bank has the highest IBPS PO vacancy in 2026?', a: 'Bank of Baroda has the highest IBPS PO 2026 vacancy with 1,900 posts, followed by Canara Bank with 1,500 posts and Bank of Maharashtra with 1,100 posts.' },
                { q: 'Which bank has the lowest IBPS PO vacancy in 2026?', a: 'Punjab & Sind Bank has the lowest reported IBPS PO 2026 vacancy with 161 posts.' },
                { q: 'Have UCO Bank and Union Bank of India reported their IBPS PO 2026 vacancies?', a: 'No, as of the latest update UCO Bank and Union Bank of India have not reported their specific vacancy numbers, marked as NR (Not Reported), so the final total vacancy count may change further.' },
                { q: 'What is the category-wise vacancy distribution in IBPS PO 2026?', a: 'Of the 7,365 total posts, the revised category-wise distribution is approximately 2,936 for Unreserved, 2,015 for OBC, 1,131 for SC, 721 for EWS, and 562 for ST candidates.' },
                { q: 'How many PwBD vacancies are there in IBPS PO 2026?', a: 'Persons with Benchmark Disabilities (PwBD) are reserved a share of the total 7,365 vacancies as per Government of India norms, distributed horizontally across all category groups rather than as a separate vertical total.' },
                { q: 'Are IBPS PO vacancies final or subject to change?', a: 'IBPS PO vacancies are indicative and provisional; they may be revised upward or downward based on the actual manpower requirements communicated by participating banks during the recruitment year.' },
                { q: 'How does the IBPS PO 2026 vacancy compare to previous years?', a: 'At 7,365 posts, IBPS PO 2026 has the highest vacancy count of the last five recruitment cycles — well above 2025 (5,208), 2024 (4,455), 2023 (3,049), and 2022 (6,432).' },
                { q: 'How many banks participate in the IBPS PO 2026 recruitment?', a: '11 Public Sector Banks participate in IBPS PO 2026, and vacancies are distributed among them based on each bank\'s individual manpower requirement.' },
                { q: 'Where can I download the official IBPS PO Vacancy 2026 PDF?', a: 'The official IBPS PO Vacancy 2026 PDF, including the revised Annexure-I, is available on the IBPS website at ibps.in under the CRP PO/MT-XVI notification section.' },
                { q: 'Does a higher vacancy count mean a lower cut-off in IBPS PO 2026?', a: 'Not necessarily; while more vacancies generally improve selection chances, the final cut-off also depends on the number of applicants, exam difficulty level, and category-wise competition in that cycle.' }
              ].map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div key={idx} className="border border-slate-150 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left flex items-center justify-between gap-4 border-none cursor-pointer"
                    >
                      <span className="font-extrabold text-sm sm:text-base text-slate-800 flex items-start gap-2.5">
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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">
                  Official IBPS Annexure-I updates, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any bank seat count or category reservation details, always cross-check with the official corrigenda or updates published on ibps.in.
            </p>
          </div>

          {/* KEEP EDITORIAL SECTION EXACTLY AS CURRENTLY IS AT THE BOTTOM */}
          <ExamAuthorSection examId="ibps-po" />
        </div>
      </div>

      {/* PDF View Modal Container */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 font-sans animate-fade-in">
          <div className="w-full max-w-5xl h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-scale-up">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-sm sm:text-base flex items-center gap-2">
                  <FileText size={16} className="text-[#FBBF24]" /> Official CRP PO/MT-XVI Vacancy Details PDF
                </h3>
                <p className="text-[10px] text-white/50 leading-none">CRP-PO-XVI_Final_V1_30.06.2026.pdf | Direct from ibps.in</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-850 hover:bg-slate-800 text-white/60 hover:text-white flex items-center justify-center font-bold text-sm transition-all border-none cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Iframe/Viewer Container */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                src="https://docs.google.com/viewer?url=https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf&embedded=true"
                className="w-full h-full border-none animate-fade-in"
                title="IBPS PO Vacancy 2026 PDF Viewer"
                onLoad={() => {
                  setPdfProgress(100);
                  setTimeout(() => {
                    setIsPdfLoading(false);
                  }, 250);
                }}
              />
              {isPdfLoading && (
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center z-20">
                  <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4" />

                  {/* Progress Bar Widget */}
                  <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-[#FBBF24] to-[#D4A017] transition-all duration-150 rounded-full"
                      style={{ width: `${pdfProgress}%` }}
                    />
                  </div>
                  <span className="text-[#FBBF24] text-xs font-bold font-mono mb-4">{pdfProgress}% Completed</span>

                  <h4 className="font-extrabold text-white text-sm sm:text-base">Loading Official Vacancy Document...</h4>
                  <p className="text-xs text-white/50 mt-1 max-w-xs leading-normal">
                    Fetching PDF from ibps.in servers. This may take a few seconds depending on your connection.
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center -z-10">
                <AlertCircle className="text-slate-400 mb-2" size={32} />
                <h4 className="font-extrabold text-slate-800">Loading Official Vacancy Document...</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  If the document does not display within a few seconds, <a href="https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">click here to download the PDF directly</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
