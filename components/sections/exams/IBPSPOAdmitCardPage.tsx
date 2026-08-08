// PATH: components/sections/exams/IBPSPOAdmitCardPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function IBPSPOAdmitCardPage() {
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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
        { "@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po" },
        { "@type": "ListItem", "position": 3, "name": "Admit Card", "item": "https://prepbanker.com/ibps-po/admit-card" }
      ]
    },
    // 2. NewsArticle Schema
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "IBPS PO Admit Card 2026: Download Link, Steps & Exam Date",
      "description": "IBPS PO Prelims Admit Card 2026 is expected in the second week of August 2026. Get the official download link, steps, shift timings, and documents to carry.",
      "image": ["https://prepbanker.com/images/ibps-po-admit-card-2026.jpg"],
      "datePublished": "2026-07-18T11:00:00+05:30",
      "dateModified": "2026-07-27T10:00:00+05:30",
      "author": { "@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com" },
      "publisher": {
        "@type": "Organization",
        "name": "PrepBanker",
        "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/logo.png" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://prepbanker.com/ibps-po/admit-card" }
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "Has the IBPS PO Admit Card 2026 been released?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, as of 27 July 2026 the IBPS PO Prelims Admit Card has not been released; it is expected in the second week of August 2026, around 10-15 days before the Prelims exam on 22-23 August." }
        },
        {
          "@type": "Question", "name": "When will the IBPS PO Admit Card 2026 be released?",
          "acceptedAnswer": { "@type": "Answer", "text": "IBPS is expected to release the Prelims Admit Card 2026 in the second week of August 2026, typically 7 to 15 days before the exam date." }
        },
        {
          "@type": "Question", "name": "How can I download the IBPS PO Admit Card 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Visit ibps.in, open the CRP PO/MT-XVI section, click on the Prelims Call Letter link, and log in using your Registration Number/Roll Number and Password or Date of Birth to download the PDF." }
        },
        {
          "@type": "Question", "name": "What details are printed on the IBPS PO Admit Card?",
          "acceptedAnswer": { "@type": "Answer", "text": "The admit card carries the candidate's name, roll number, registration number, photograph, signature, category, exam date, reporting time, shift timing, and exam centre name and address." }
        },
        {
          "@type": "Question", "name": "What documents should I carry along with the IBPS PO Admit Card?",
          "acceptedAnswer": { "@type": "Answer", "text": "Candidates must carry a printed copy of the admit card along with a valid original photo ID proof such as Aadhaar, PAN, Passport, Voter ID, or Driving Licence." }
        },
        {
          "@type": "Question", "name": "What are the IBPS PO Prelims exam shift timings?",
          "acceptedAnswer": { "@type": "Answer", "text": "The IBPS PO Prelims exam is conducted in multiple shifts per day, and the exact reporting time and shift timing for each candidate is mentioned individually on their admit card." }
        },
        {
          "@type": "Question", "name": "What should I do if I am unable to download my IBPS PO Admit Card?",
          "acceptedAnswer": { "@type": "Answer", "text": "Recheck your Registration Number and Password/Date of Birth for typing errors, clear your browser cache or try a different browser, and if the issue persists, contact the IBPS helpline with your registration details." }
        },
        {
          "@type": "Question", "name": "Can I change my exam centre after the IBPS PO Admit Card is released?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, exam centre changes are generally not permitted once the admit card is released; candidates should immediately report any discrepancy in centre allotment to IBPS before the exam date." }
        },
        {
          "@type": "Question", "name": "What happens if there is an error in my name or photo on the admit card?",
          "acceptedAnswer": { "@type": "Answer", "text": "Candidates should immediately raise the discrepancy with IBPS through the official grievance channel and carry supporting identity documents to the exam centre as a precaution." }
        },
        {
          "@type": "Question", "name": "Is the IBPS PO Admit Card different for Prelims and Mains?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, IBPS issues a separate admit card for each stage; candidates who qualify Prelims must download a fresh Mains Admit Card closer to the Mains exam on 4 October 2026." }
        },
        {
          "@type": "Question", "name": "Can I carry a mobile phone to the IBPS PO exam centre?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, mobile phones, smartwatches, calculators, Bluetooth devices, and other electronic gadgets are strictly prohibited inside the IBPS PO examination hall." }
        },
        {
          "@type": "Question", "name": "Is IBPS PO Admit Card 2026 released state-wise or all at once?",
          "acceptedAnswer": { "@type": "Answer", "text": "IBPS typically activates the admit card download link for all candidates simultaneously on the official website rather than releasing it in state-wise batches." }
        }
      ]
    },
    // 4. WebPage + Speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://prepbanker.com/ibps-po/admit-card",
      "url": "https://prepbanker.com/ibps-po/admit-card",
      "name": "IBPS PO Admit Card 2026",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#status-tracker"] },
      "isPartOf": { "@type": "WebSite", "name": "PrepBanker", "url": "https://prepbanker.com" }
    },
    // 5. HowTo Schema
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Download IBPS PO Admit Card 2026",
      "step": [
        { "@type": "HowToStep", "name": "Visit official website", "text": "Go to ibps.in, the official IBPS website." },
        { "@type": "HowToStep", "name": "Open CRP PO/MT-XVI section", "text": "Click on the CRP PO/MT-XVI recruitment link on the homepage." },
        { "@type": "HowToStep", "name": "Select call letter link", "text": "Click 'Download Preliminary Examination Call Letter'." },
        { "@type": "HowToStep", "name": "Enter login credentials", "text": "Enter your Registration Number/Roll Number and Password or Date of Birth." },
        { "@type": "HowToStep", "name": "Complete captcha and login", "text": "Fill the captcha code and click Login." },
        { "@type": "HowToStep", "name": "Download and print", "text": "Download the admit card PDF and take at least two printouts for exam day." }
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
            <span className="text-white/80">Admit Card</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Release Awaited
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Admit Card 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Download Link, Steps & Exam Date
                </p>
                <p className="text-xs text-white/60">
                  The IBPS PO Prelims Admit Card 2026 for CRP PO/MT-XVI has not been released yet. Based on the official exam calendar, expect it in the second week of August 2026 — about 10 to 15 days before the Prelims exam on 22 and 23 August. This page will update the moment the link goes live.
                </p>
              </div>

              {/* Status Tracker Strip */}
              <div id="status-tracker" className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🔴 Status: NOT YET RELEASED</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1"><Calendar size={13} className="text-amber-400" /> Expected: 2nd week of August 2026</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1"><Clock size={13} className="text-emerald-400" /> Prelims Exam: 22-23 August 2026</span>
              </div>

              {/* CTA Actions */}
              <div className="pt-2">
                <div className="text-xs text-white/50">
                  Prefer practicing? <Link href="/ibps-po/mock-tests" className="text-amber-400 font-extrabold hover:underline no-underline">Start Free IBPS PO Mock Test <ArrowRight size={10} className="inline" /></Link>
                </div>
              </div>
            </div>

            {/* Right Column: Mini Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Admit Card Highlights
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Prelims Exam</span>
                    <span className="text-sm font-black text-white">22-23 Aug 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Release Date</span>
                    <span className="text-sm font-black text-[#FBBF24]">Expected Mid-Aug</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Mode</span>
                    <span className="text-sm font-black text-white">Online Portal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Website</span>
                    <span className="text-sm font-black text-[#FBBF24] hover:underline">ibps.in</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>A separate admit card will be released for the Mains exam scheduled for 4 October 2026.</span>
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
            <QuickNavigation exam={exam} activeSlug="admit-card" />
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
                  <a href="#overview" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Quick Overview Table
                  </a>
                </li>
                <li>
                  <a href="#download" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    How to Download steps
                  </a>
                </li>
                <li>
                  <a href="#details" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    What's Printed on Call Letter
                  </a>
                </li>
                <li>
                  <a href="#timings" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Expected Shift Timings
                  </a>
                </li>
                <li>
                  <a href="#documents" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Documents to Carry
                  </a>
                </li>
                <li>
                  <a href="#troubleshooting" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Admit Card Troubleshooting
                  </a>
                </li>
                <li>
                  <a href="#guidelines" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Exam Day Guidelines
                  </a>
                </li>
                <li>
                  <a href="#mains" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                    Mains Stage Admit Card
                  </a>
                </li>
                <li>
                  <a href="#explore" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">9</span>
                    Resources & FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: QUICK OVERVIEW ── */}
          <section id="overview" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileCheck size={22} className="stroke-[2.5]" />
              </span>
              Quick Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-sans text-slate-800">
              {/* Card 1: Conducting Body */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conducting Body</span>
                <p className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  Institute of Banking Personnel Selection (IBPS)
                </p>
              </div>

              {/* Card 2: Exam */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Exam</span>
                <p className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  IBPS PO CRP PO/MT-XVI 2026
                </p>
              </div>

              {/* Card 3: Stage */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Stage</span>
                <p className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  Preliminary Examination
                </p>
              </div>

              {/* Card 4: Admit Card Status */}
              <div className="p-5 bg-red-50/20 border border-red-200/50 rounded-2xl space-y-2 hover:shadow-[0_8px_20px_-6px_rgba(239,68,68,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Admit Card Status</span>
                <p className="font-extrabold text-sm sm:text-base text-red-650 leading-snug">
                  Not Yet Released <span className="block text-xs text-red-500 font-bold mt-1">(Expected 2nd week of August 2026)</span>
                </p>
              </div>

              {/* Card 5: Admit Card Mode */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Admit Card Mode</span>
                <p className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  Online Portal Download Only
                </p>
              </div>

              {/* Card 6: Prelims Exam Date */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Prelims Exam Date</span>
                <div className="space-y-2">
                  <p className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    22 & 23 August 2026
                  </p>
                  <Link href="/ibps-po/important-dates" className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-extrabold transition-all no-underline border border-blue-100/50">
                    Full Calendar <ChevronRight size={10} />
                  </Link>
                </div>
              </div>

              {/* Card 7: Login Requires */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Login Credentials</span>
                <p className="font-bold text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Registration No./Roll No. + Password/Date of Birth
                </p>
              </div>

              {/* Card 8: Official Website */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Official Website</span>
                <div>
                  <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white hover:bg-slate-800 rounded-lg text-xs font-black transition-all no-underline">
                    ibps.in 🔗
                  </a>
                </div>
              </div>

              {/* Card 9: Mains Admit Card */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 hover:border-[#1B6EB5]/30 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.04)] transition-all">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mains Admit Card</span>
                <p className="font-bold text-xs sm:text-sm text-slate-505 leading-relaxed">
                  Separate release, expected closer to the 4 October 2026 exam date
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: HOW TO DOWNLOAD STEP-BY-STEP ── */}
          <section id="download" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <UserCheck size={22} className="stroke-[2.5]" />
              </span>
              How to Download IBPS PO Admit Card 2026 Online
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (Step-by-step steps) */}
              <div className="lg:col-span-7 relative border-l-2 border-orange-500/30 pl-8 ml-4 space-y-6 font-sans">
                {[
                  { step: 1, title: 'Visit Website', text: 'Go to the official IBPS portal at ibps.in.' },
                  { step: 2, title: 'Open Recruitment Section', text: 'Click the "CRP PO/MT-XVI" recruitment link on the homepage.' },
                  { step: 3, title: 'Access Call Letter Link', text: 'Select "Download Preliminary Examination Call Letter".' },
                  { step: 4, title: 'Enter Credentials', text: 'Input your Registration Number or Roll Number.' },
                  { step: 5, title: 'Enter Password/DOB', text: 'Type in your Password or Date of Birth.' },
                  { step: 6, title: 'Complete Verification', text: 'Fill in the captcha code and click Login.' },
                  { step: 7, title: 'Download Call Letter', text: 'Save your admit card PDF and take at least two printouts.' }
                ].map((item) => (
                  <div key={item.step} className="relative group">
                    {/* Outer circle dot */}
                    <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-xl bg-white border-2 border-orange-500 text-orange-600 font-extrabold text-xs flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 z-10">
                      {item.step}
                    </div>
                    {/* Card wrapper */}
                    <div className="p-5 bg-white border border-slate-200/80 rounded-2xl group-hover:border-orange-300 hover:shadow-[0_8px_20px_-6px_rgba(249,115,22,0.05)] transition-all duration-300">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-orange-600 transition-colors duration-200">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-505 font-medium leading-relaxed mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column (Image Wrapper) */}
              <div className="lg:col-span-5">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/images/ibps-po-card.jpeg"
                    alt="PrepGrind IBPS PO Complete Test Series"
                    className="w-full h-auto block"
                  />
                </a>
              </div>
            </div>

            {/* Inactive Callout for Link */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex gap-2.5 items-start font-sans">
              <Info size={16} className="text-slate-450 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-500 font-semibold leading-normal m-0">
                <strong>Link Status:</strong> The direct call letter download link will be activated here the exact minute IBPS releases it on the portal. No dead or expired link references are hosted here.
              </p>
            </div>
          </section>

          {/* ── SECTION 3: WHAT'S PRINTED ON THE ADMIT CARD ── */}
          <section id="details" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <FileText size={18} />
              </span>
              What's Printed on the IBPS PO Admit Card
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              The call letter carries essential verification coordinates. Check all details the moment you download it:
            </p>

            {/* Layout Grid: Mock Card on Left, List Checklist on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
              
              {/* Mock Admit Card Representation */}
              <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative group">
                {/* Glowing top line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-500" />
                
                {/* Mock Card Header */}
                <div className="bg-slate-950 p-4 text-center border-b border-slate-800">
                  <div className="text-[10px] font-bold text-amber-400 tracking-wider uppercase">Institute of Banking Personnel Selection</div>
                  <div className="text-xs font-black text-white uppercase tracking-widest mt-0.5">CRP PO/MT-XVI Call Letter</div>
                </div>

                {/* Mock Card Content */}
                <div className="p-4 space-y-3.5 bg-slate-50/50">
                  {/* Photo & Signature placeholders */}
                  <div className="flex gap-4">
                    <div className="w-20 h-24 bg-slate-100 border border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 gap-1 select-none">
                      <User size={24} className="opacity-60" />
                      <span className="text-[8px] font-black uppercase text-slate-400">Photo</span>
                    </div>
                    <div className="flex-1 space-y-2 text-[11px]">
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-450 block font-bold uppercase">Candidate Name</span>
                        <span className="font-extrabold text-slate-850">YASHRAJ DESHMUKH</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-450 block font-bold uppercase">Roll Number</span>
                        <span className="font-black text-slate-800 select-all tracking-wider">2240182490</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-slate-450 block font-bold uppercase">Registration Number</span>
                        <span className="font-bold text-slate-850 select-all">1982030491</span>
                      </div>
                    </div>
                  </div>

                  {/* Signature Box */}
                  <div className="w-20 h-7 bg-slate-100 border border-slate-200 rounded-md flex items-center justify-center text-slate-400 select-none">
                    <span className="text-[7px] font-black uppercase text-slate-400">Signature</span>
                  </div>

                  {/* Exam Venue Details */}
                  <div className="pt-2 border-t border-slate-200/60 text-[11px] space-y-2">
                    <div className="flex gap-2">
                      <Clock size={12} className="text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-slate-450 block font-bold uppercase">Date of Exam & Reporting Time</span>
                        <span className="font-extrabold text-slate-800">24 Oct 2026 | 08:30 AM (Shift 1)</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <MapPin size={12} className="text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] text-slate-450 block font-bold uppercase">Venue of Examination</span>
                        <span className="font-bold text-slate-855">iON Digital Zone iDZ 1, Sector 62, Noida, UP - 201301</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Verification Overlay Banner */}
                <div className="bg-emerald-500/10 border-t border-emerald-500/20 text-emerald-700 p-2 text-center text-[10px] font-bold flex items-center justify-center gap-1.5">
                  <ShieldCheck size={12} className="text-emerald-600 animate-pulse" />
                  MANDATORY ADMIT CARD TEMPLATE PREVIEW
                </div>
              </div>

              {/* Verification Checklist */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Personal details checklist card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-3.5">
                    <span className="p-1 rounded bg-blue-100 text-blue-600"><User size={14} /></span>
                    Personal Credentials Checklist
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-650 font-semibold list-none p-0 m-0">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Candidate's Full Name (must exactly match your photo ID proof)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Roll Number & Registration Number credentials</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Photograph & Signature uploads are clearly printed</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Assigned Category designation (General/OBC/SC/ST/EWS/PwD)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Candidate's Date of Birth details</span>
                    </li>
                  </ul>
                </div>

                {/* Examination details checklist card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-3.5">
                    <span className="p-1 rounded bg-indigo-100 text-indigo-600"><Compass size={14} /></span>
                    Examination Details Checklist
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-650 font-semibold list-none p-0 m-0">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Exam Name & Current Recruitment Stage designation (CRP PO/MT-XVI)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Scheduled Exam Date & allotted Shift number details</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Exact Reporting Time at venue location</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Allotted Shift Exam Timings schedule</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Assigned Exam Centre Name & Detailed Location Address</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Warning block */}
            <div className="p-5 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 rounded-r-2xl flex gap-4 font-sans shadow-xs">
              <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
              <div className="space-y-1.5">
                <h5 className="font-black text-xs sm:text-sm text-red-950">Mandatory Name & ID Proof Verification</h5>
                <p className="text-xs sm:text-sm text-red-900 leading-relaxed font-semibold">
                  A mismatch between your admit card details and photo ID proof is the single most common reason candidates are denied entry. If you spot a discrepancy, refer to the troubleshooting instructions below immediately.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: EXPECTED SHIFT TIMINGS ── */}
          <section id="timings" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Clock size={18} />
              </span>
              Expected Shift Timings (CRP PO/MT-XVI)
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              Based on IBPS's established pattern for multi-shift Computer Based Tests, the expected shift timings are:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
              {[
                { shift: 'Shift 1', time: '08:00 AM', window: '09:00 AM – 10:00 AM', theme: 'from-blue-500/10 to-sky-500/5 border-blue-200/60', textTheme: 'text-blue-700 bg-blue-50', badge: 'Morning Shift' },
                { shift: 'Shift 2', time: '10:30 AM', window: '11:30 AM – 12:30 PM', theme: 'from-amber-500/10 to-yellow-500/5 border-amber-200/60', textTheme: 'text-amber-700 bg-amber-50', badge: 'Mid-Day Shift' },
                { shift: 'Shift 3', time: '01:00 PM', window: '02:00 PM – 03:00 PM', theme: 'from-orange-500/10 to-amber-500/5 border-orange-200/60', textTheme: 'text-orange-700 bg-orange-50', badge: 'Afternoon Shift' },
                { shift: 'Shift 4', time: '03:30 PM', window: '04:30 PM – 05:30 PM', theme: 'from-indigo-500/10 to-purple-500/5 border-indigo-200/60', textTheme: 'text-indigo-700 bg-indigo-50', badge: 'Evening Shift' }
              ].map((s, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${s.theme} border rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4`}>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${s.textTheme}`}>{s.badge}</span>
                      <span className="text-[11px] font-extrabold text-slate-400">#{s.shift.toLowerCase().replace(' ', '')}</span>
                    </div>
                    <h4 className="font-black text-lg text-slate-800 tracking-tight">{s.shift}</h4>
                  </div>
                  
                  <div className="space-y-3.5 pt-2 border-t border-slate-200/45">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-450 block font-bold uppercase tracking-wide">Reporting Time</span>
                      <span className="text-sm font-extrabold text-slate-850 flex items-center gap-1">
                        <Clock size={12} className="text-slate-400" />
                        {s.time}
                      </span>
                    </div>
                    
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-450 block font-bold uppercase tracking-wide">Exam Window (Indicative)</span>
                      <span className="text-xs font-black text-slate-800 bg-white/70 border border-slate-200/60 py-1 px-2 rounded-lg inline-block mt-0.5 select-all">
                        {s.window}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 font-sans flex gap-2">
              <Info size={14} className="shrink-0 mt-0.5 text-slate-450" />
              <p className="m-0 leading-normal">
                Your exact shift allotment is assigned individually and will only be confirmed on your personal admit card. This table is for general planning and reference purposes only.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: DOCUMENTS TO CARRY ── */}
          <section id="documents" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileCheck size={18} />
              </span>
              Documents to Carry to the Exam Centre
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              Bring the following mandatory physical documents. Candidates who fail to produce these will be denied entry, regardless of a valid admit card registration:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-sans">
              {/* Doc 1 */}
              <div className="group p-5 bg-gradient-to-br from-blue-50/30 to-slate-50/10 border border-slate-200/80 hover:border-blue-400 hover:bg-white rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <FileText size={18} />
                    </span>
                    <span className="text-xs font-black text-blue-400 tracking-wider">01 / MANDATORY</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 leading-tight">Printed Admit Card</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    At least one clear printed hard copy. Coloured prints are preferred, but clean black & white is fully accepted.
                  </p>
                </div>
                <div className="text-[10px] font-bold text-blue-600/70 uppercase tracking-widest pt-2 border-t border-slate-200/40">Physical Copy Required</div>
              </div>

              {/* Doc 2 */}
              <div className="group p-5 bg-gradient-to-br from-emerald-50/30 to-slate-50/10 border border-slate-200/80 hover:border-emerald-400 hover:bg-white rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <UserCheck size={18} />
                    </span>
                    <span className="text-xs font-black text-emerald-400 tracking-wider">02 / VERIFICATION</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 leading-tight">Original Photo ID</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    Valid original identity document (Aadhaar Card, PAN Card, Passport, Voter ID, or Driving Licence).
                  </p>
                </div>
                <div className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-widest pt-2 border-t border-slate-200/40">Original Document Only</div>
              </div>

              {/* Doc 3 */}
              <div className="group p-5 bg-gradient-to-br from-purple-50/30 to-slate-50/10 border border-slate-200/80 hover:border-purple-400 hover:bg-white rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Users size={18} />
                    </span>
                    <span className="text-xs font-black text-purple-400 tracking-wider">03 / SUBMISSION</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 leading-tight">ID Photocopy</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    A clear photocopy of the original ID proof presented, to be submitted to the invigilator during the exam.
                  </p>
                </div>
                <div className="text-[10px] font-bold text-purple-600/70 uppercase tracking-widest pt-2 border-t border-slate-200/40">To Submit At Desk</div>
              </div>

              {/* Doc 4 */}
              <div className="group p-5 bg-gradient-to-br from-amber-50/30 to-slate-50/10 border border-slate-200/80 hover:border-amber-400 hover:bg-white rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </span>
                    <span className="text-xs font-black text-amber-400 tracking-wider">04 / ADDITIONAL</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 leading-tight">Extra Photo</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    One additional passport-size photograph. Highly recommended if your printed admit card photo appears blurred.
                  </p>
                </div>
                <div className="text-[10px] font-bold text-amber-600/70 uppercase tracking-widest pt-2 border-t border-slate-200/40">Backup Photo Proof</div>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: TROUBLESHOOTING ── */}
          <section id="troubleshooting" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                <AlertTriangle size={18} />
              </span>
              IBPS PO Admit Card Problems — And How to Fix Them
            </h2>

            <div className="space-y-4 font-sans">
              {[
                {
                  issue: 'Unable to download or link not opening?',
                  solution: 'Recheck your Registration Number and Password/Date of Birth for typing errors. Clear your browser cache or try a different browser. Note that IBPS servers slow down significantly in the first few hours after release due to heavy traffic loads.'
                },
                {
                  issue: 'Forgot Registration Number or Password?',
                  solution: 'Use the "Forgot Registration Number/Password" link on the IBPS login page. Your details were also emailed to you at the time of registration — search your inbox (including spam folders) for "IBPS".'
                },
                {
                  issue: 'Photograph or signature is blurred?',
                  solution: 'Carry a clear physical passport-size photograph along with your original photo ID to the centre. Report the issue to the IBPS helpline in advance of the exam date.'
                },
                {
                  issue: 'Name, category, or exam centre is incorrect?',
                  solution: 'Report the discrepancy immediately to the official IBPS grievance portal or helpline. No corrections or amendments are permitted once the exam has commenced.'
                },
                {
                  issue: 'Exam centre is very far from your location?',
                  solution: 'IBPS allocates centres based on preferences submitted during application. Centre changes are generally not entertained, so verify your chosen preferences on your original application printout.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-5 border border-slate-150 rounded-2xl hover:border-slate-300 transition-colors space-y-2">
                  <h4 className="font-extrabold text-sm sm:text-base text-red-800 flex items-center gap-1.5">
                    <AlertCircle size={15} /> {item.issue}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed pl-5">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: EXAM DAY GUIDELINES ── */}
          <section id="guidelines" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-slate-900/10 text-slate-800 flex items-center justify-center">
                <Sliders size={18} />
              </span>
              Exam Day Guidelines & Rules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 font-sans font-bold">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>Reach the exam centre at least 60 minutes before your reporting time.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>Carry the printed admit card and original photo ID — no exceptions.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <XCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
                <span>Mobile phones, smartwatches, calculators, Bluetooth devices, and any electronic gadgets are strictly prohibited inside the hall.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <XCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
                <span>No study material, notes, or loose papers are allowed inside the examination hall.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>Cooperate fully during biometric/verification checks at the gate.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>Preserve your admit card until the entire recruitment process (Prelims → Mains → Interview) concludes — you'll need it again.</span>
              </div>
            </div>

            {/* Redirect Mock CTA */}
            <div className="p-4 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white font-sans">
              <p className="text-xs sm:text-sm font-extrabold leading-normal text-center sm:text-left m-0">
                Want to make sure you clear this stage on the first attempt?
              </p>
              <Link
                href="/ibps-po/mock-tests"
                className="px-4 py-2 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(250,180,41,0.25)] hover:-translate-y-0.5 no-underline shrink-0"
              >
                Take a Full Mock Test →
              </Link>
            </div>
          </section>

          {/* ── SECTION 8: AFTER PRELIMS: MAINS CALL LETTER ── */}
          <section id="mains" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={18} />
              </span>
              After Prelims: Mains Admit Card Details
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              Clearing the Prelims is only the qualifying stage — check the full{' '}
              <Link href="/ibps-po/selection-process" className="text-[#1B6EB5] hover:underline font-extrabold">
                IBPS PO Selection Process →
              </Link>
              . Once Prelims results are declared, IBPS issues a separate Mains Admit Card, expected closer to the Mains exam on 4 October 2026. This page will be updated with the Mains call letter link and process at that time — bookmark it or use the notify button above.
            </p>
          </section>

          {/* ── SECTION 9: EXPLORE MORE - LINK HUB ── */}
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
                { slug: 'important-dates', title: 'Important Dates', path: '/ibps-po/important-dates' },
                { slug: 'exam-pattern', title: 'Exam Pattern', path: '/ibps-po/exam-pattern' },
                { slug: 'selection-process', title: 'Selection Process', path: '/ibps-po/selection-process' },
                { slug: 'syllabus', title: 'Syllabus', path: '/ibps-po/syllabus' },
                { slug: 'cut-off', title: 'Previous Cut Off', path: '/ibps-po/cut-off' },
                { slug: 'vacancy', title: 'Vacancy Details', path: '/ibps-po/vacancy' },
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
                <h4 className="font-black text-base sm:text-lg text-white">Admit card's almost here — is your prep?</h4>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Take a Free IBPS PO Mock Test today and target real exam performance. Access topic and sectional tests to strengthen your concepts.
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
                { q: 'Has the IBPS PO Admit Card 2026 been released?', a: 'No, as of 27 July 2026 the IBPS PO Prelims Admit Card has not been released; it is expected in the second week of August 2026, around 10–15 days before the Prelims exam on 22–23 August.' },
                { q: 'When will the IBPS PO Admit Card 2026 be released?', a: 'IBPS is expected to release the Prelims Admit Card 2026 in the second week of August 2026, typically 7 to 15 days before the exam date.' },
                { q: 'How can I download the IBPS PO Admit Card 2026?', a: 'Visit ibps.in, open the CRP PO/MT-XVI section, click on the Prelims Call Letter link, and log in using your Registration Number/Roll Number and Password or Date of Birth to download the PDF.' },
                { q: 'What details are printed on the IBPS PO Admit Card?', a: 'The admit card carries the candidate\'s name, roll number, registration number, photograph, signature, category, exam date, reporting time, shift timing, and exam centre name and address.' },
                { q: 'What documents should I carry along with the IBPS PO Admit Card?', a: 'Candidates must carry a printed copy of the admit card along with a valid original photo ID proof such as Aadhaar, PAN, Passport, Voter ID, or Driving Licence.' },
                { q: 'What are the IBPS PO Prelims exam shift timings?', a: 'The IBPS PO Prelims exam is conducted in multiple shifts per day, and the exact reporting time and shift timing for each candidate is mentioned individually on their admit card.' },
                { q: 'What should I do if I am unable to download my IBPS PO Admit Card?', a: 'Recheck your Registration Number and Password/Date of Birth for typing errors, clear your browser cache or try a different browser, and if the issue persists, contact the IBPS helpline with your registration details.' },
                { q: 'Can I change my exam centre after the IBPS PO Admit Card is released?', a: 'No, exam centre changes are generally not permitted once the admit card is released; candidates should immediately report any discrepancy in centre allotment to IBPS before the exam date.' },
                { q: 'What happens if there is an error in my name or photo on the admit card?', a: 'Candidates should immediately raise the discrepancy with IBPS through the official grievance channel and carry supporting identity documents to the exam centre as a precaution.' },
                { q: 'Is the IBPS PO Admit Card different for Prelims and Mains?', a: 'Yes, IBPS issues a separate admit card for each stage; candidates who qualify Prelims must download a fresh Mains Admit Card closer to the Mains exam on 4 October 2026.' },
                { q: 'Can I carry a mobile phone to the IBPS PO exam centre?', a: 'No, mobile phones, smartwatches, calculators, Bluetooth devices, and other electronic gadgets are strictly prohibited inside the IBPS PO examination hall.' },
                { q: 'Is IBPS PO Admit Card 2026 released state-wise or all at once?', a: 'IBPS typically activates the admit card download link for all candidates simultaneously on the official website rather than releasing it in state-wise batches.' }
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
                  Official IBPS updates, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any shift timing, exam guideline, or document requirement, always cross-check with your official printed call letter or notices on ibps.in.
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
