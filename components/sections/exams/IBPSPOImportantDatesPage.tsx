// PATH: components/sections/exams/IBPSPOImportantDatesPage.tsx
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
  Timer
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOImportantDatesPage() {
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
        {"@type": "ListItem", "position": 3, "name": "Important Dates", "item": "https://prepbanker.com/ibps-po/important-dates"}
      ]
    },
    // 2. Event Schema (Prelims)
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "IBPS PO 2026 Preliminary Examination",
      "startDate": "2026-08-22",
      "endDate": "2026-08-23",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://www.ibps.in"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Institute of Banking Personnel Selection",
        "url": "https://www.ibps.in"
      },
      "description": "IBPS PO 2026 Preliminary Examination for recruitment of Probationary Officers/Management Trainees (CRP PO/MT-XVI) in participating public sector banks."
    },
    // 3. Event Schema (Mains)
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "IBPS PO 2026 Main Examination",
      "startDate": "2026-10-04",
      "endDate": "2026-10-04",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://www.ibps.in"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Institute of Banking Personnel Selection",
        "url": "https://www.ibps.in"
      },
      "description": "IBPS PO 2026 Main Examination for recruitment of Probationary Officers/Management Trainees (CRP PO/MT-XVI) in participating public sector banks."
    },
    // 4. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is the IBPS PO 2026 Prelims exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO 2026 Preliminary Examination is scheduled for 22 and 23 August 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When is the IBPS PO 2026 Mains exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO 2026 Main Examination is scheduled for 4 October 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Was the IBPS PO 2026 application deadline extended?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IBPS extended the last date to apply for IBPS PO 2026 to 26 July 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When will the IBPS PO 2026 Prelims admit card be released?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Prelims admit card is expected in the first or second week of August 2026, based on IBPS's usual 10-15 day pre-exam release pattern."
          }
        },
        {
          "@type": "Question",
          "name": "How many days before the exam does IBPS release the admit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IBPS typically releases the admit card 7 to 15 days before the exam date."
          }
        },
        {
          "@type": "Question",
          "name": "What is the gap between IBPS PO Prelims and Mains 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is a gap of roughly six weeks between the Prelims exam (22-23 August) and the Mains exam (4 October 2026)."
          }
        },
        {
          "@type": "Question",
          "name": "When will IBPS PO 2026 final results be declared?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The final IBPS PO 2026 result, including provisional allotment, is expected in January 2027."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a correction window after the IBPS PO application closes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IBPS provides a two-day edit window after the registration deadline for candidates to correct submitted details."
          }
        }
      ]
    },
    // 5. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Important Dates 2026",
      "url": "https://prepbanker.com/ibps-po/important-dates",
      "dateModified": "2026-07-27",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".date-table-summary"]
      },
      "about": {
        "@type": "Thing",
        "name": "IBPS PO 2026 Recruitment Calendar"
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
            <span className="text-white/80">Important Dates</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Status, Countdowns */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Official Calendar
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Important Dates 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Every official date for CRP PO/MT-XVI — from notification to provisional allotment — verified against the IBPS calendar and updated the moment IBPS revises anything.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-2 text-xs font-bold font-sans">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                  <XCircle size={12} /> Application Window: Closed (extended to 26 July 2026)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Info size={12} /> Prelims Admit Card: Expected 1st week of August 2026
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle size={12} /> Prelims Exam: Confirmed — 22 & 23 August 2026
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle size={12} /> Mains Exam: Confirmed — 4 October 2026
                </span>
              </div>


              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline cursor-pointer"
                >
                  Start Free Prelims Mock Test <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Key Metainfo */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Verification Log
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Last Checked</span>
                    <span className="text-sm font-black text-white">27 July 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Source Docs</span>
                    <span className="text-sm font-black text-[#FBBF24]">CRP PO/MT-XVI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Release Date</span>
                    <span className="text-sm font-black text-white">30 June 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Status</span>
                    <span className="text-sm font-black text-white">Updated Daily</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Dates verified directly from official announcements posted on ibps.in careers section.</span>
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
            <QuickNavigation exam={exam} activeSlug="important-dates" />
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
                  <a href="#complete-date-sheet" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Complete Date Sheet
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Year-on-Year Comparison
                  </a>
                </li>
                <li>
                  <a href="#revisions" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    What if Dates are Revised
                  </a>
                </li>
                <li>
                  <a href="#prep-calendar" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Month-by-Month Prep Calendar
                  </a>
                </li>
                <li>
                  <a href="#quick-links" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Quick Links
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: IBPS PO 2026 COMPLETE DATE SHEET ── */}
          <section id="complete-date-sheet" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileSpreadsheet size={18} />
              </span>
              IBPS PO 2026 Complete Date Sheet (Confirmed & Expected)
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold font-sans leading-normal m-0 date-table-summary">
              IBPS releases dates in two batches — some are confirmed at notification stage, others (like admit cards) are announced closer to the event. We tag each one so you always know which is which.
            </p>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs font-sans max-h-[250px] overflow-y-auto relative">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead className="sticky top-0 z-10 bg-slate-900 text-slate-100 shadow-[0_1px_0_0_rgba(226,232,240,0.1)]">
                  <tr className="text-slate-200 font-extrabold">
                    <th className="px-4 py-3 font-bold uppercase tracking-wider">Event</th>
                    <th className="px-4 py-3 font-bold uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 font-bold uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {[
                    { event: 'Notification Released', date: '30 June 2026', confirmed: true },
                    { event: 'Online Application Begins', date: '1 July 2026', confirmed: true },
                    { event: 'Last Date to Apply (Extended)', date: '26 July 2026', confirmed: true },
                    { event: 'Application Fee Payment', date: '1–26 July 2026', confirmed: true },
                    { event: 'Application Correction Window', date: '2 days post-closure', confirmed: false, note: 'TBA' },
                    { event: 'Pre-Exam Training', date: 'August 2026', confirmed: false },
                    { event: 'Prelims Admit Card Release', date: '1st–2nd week August 2026', confirmed: false },
                    { event: 'IBPS PO Prelims Exam', date: '22 & 23 August 2026', confirmed: true },
                    { event: 'Prelims Result', date: 'September 2026', confirmed: false },
                    { event: 'Mains Admit Card Release', date: 'Late September 2026', confirmed: false },
                    { event: 'IBPS PO Mains Exam', date: '4 October 2026', confirmed: true },
                    { event: 'Mains Result', date: 'November 2026', confirmed: false },
                    { event: 'Personality Test', date: 'November 2026', confirmed: false },
                    { event: 'Interview', date: 'November–December 2026', confirmed: false },
                    { event: 'Provisional Allotment', date: 'January 2027', confirmed: false }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/45 transition-colors">
                      <td className="px-4 py-3.5 bg-slate-50/20 font-bold text-slate-900">{row.event}</td>
                      <td className="px-4 py-3.5 font-bold text-slate-800">{row.date}</td>
                      <td className="px-4 py-3.5 font-semibold">
                        {row.confirmed ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg text-xs font-bold border border-emerald-200/30 shadow-2xs">
                            <CheckCircle size={11} /> Confirmed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg text-xs font-bold border border-amber-200/30 shadow-2xs">
                            <Info size={11} /> Expected {row.note ? `— ${row.note}` : ''}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 font-sans leading-relaxed font-semibold">
              'Confirmed' dates are printed in the official IBPS notification and will not change except via an official IBPS circular, which we track daily. 'Expected' dates are based on IBPS's historical release pattern from the last 4 recruitment cycles (2022–2025) and are typically accurate within 3–5 days.
            </div>
          </section>

          {/* ── SECTION 2: COMPARISON TO PREVIOUS CYCLE ── */}
          <section id="comparison" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Trophy size={18} />
              </span>
              How These Dates Compare to Last Year (IBPS PO 2025)
            </h2>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs font-sans">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Stage</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">IBPS PO 2025</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">IBPS PO 2026</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Notification</td>
                    <td className="px-4 py-3">June 2025</td>
                    <td className="px-4 py-3">30 June 2026</td>
                    <td className="px-4 py-3 font-semibold text-slate-500">Same window</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Application Closed</td>
                    <td className="px-4 py-3">~mid-July 2025</td>
                    <td className="px-4 py-3">26 July 2026 (extended)</td>
                    <td className="px-4 py-3 font-semibold text-slate-500">Similar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Prelims Exam</td>
                    <td className="px-4 py-3">Sept 2025</td>
                    <td className="px-4 py-3">22–23 Aug 2026</td>
                    <td className="px-4 py-3 font-bold text-amber-600">~3 weeks earlier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 bg-slate-50/20 font-bold text-slate-900">Mains Exam</td>
                    <td className="px-4 py-3">Nov 2025</td>
                    <td className="px-4 py-3">4 Oct 2026</td>
                    <td className="px-4 py-3 font-bold text-amber-600">~5 weeks earlier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl font-sans text-xs sm:text-sm text-amber-800 font-semibold leading-normal">
              Takeaway: IBPS has compressed the 2026 calendar — Mains falls roughly five weeks earlier than the 2025 cycle, giving candidates less prep runway after Prelims.
            </div>
          </section>

          {/* ── SECTION 3: REVISIONS IN DATES ── */}
          <section id="revisions" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <AlertTriangle size={18} />
              </span>
              What Happens If IBPS Revises a Date
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
              
              {/* Card 1: Official Notices */}
              <div className="p-5 bg-gradient-to-br from-blue-50/40 to-slate-50/20 border border-blue-200/50 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-blue-650">
                  <Bell size={16} />
                  <span className="text-[10px] font-black uppercase tracking-wider">Official Notices</span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 m-0">Extension Bulletins</h4>
                <p className="text-xs text-slate-550 font-semibold leading-relaxed m-0">
                  IBPS issues extensions via official web notice markers on the careers section of ibps.in, rather than publishing completely new PDF notifications.
                </p>
              </div>

              {/* Card 2: Expected Schedules */}
              <div className="p-5 bg-gradient-to-br from-amber-50/40 to-slate-50/20 border border-amber-200/50 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-650">
                  <Calendar size={16} />
                  <span className="text-[10px] font-black uppercase tracking-wider">Expected Schedules</span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 m-0">Provisional Dates</h4>
                <p className="text-xs text-slate-550 font-semibold leading-relaxed m-0">
                  Admit cards and results schedules are always tentative. Treat them as expected estimates until the live link goes active on the portal.
                </p>
              </div>

              {/* Card 3: Real-Time Sync */}
              <div className="p-5 bg-gradient-to-br from-emerald-50/40 to-slate-50/20 border border-emerald-200/50 rounded-2xl shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-650">
                  <Clock size={16} />
                  <span className="text-[10px] font-black uppercase tracking-wider">Real-Time Sync</span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 m-0">Daily Date Checks</h4>
                <p className="text-xs text-slate-550 font-semibold leading-relaxed m-0">
                  We verify official portals daily. Bookmark this calendar to get instant dates instead of checking outdated offline PDFs.
                </p>
              </div>

            </div>
          </section>

          {/* ── SECTION 4: MONTH-BY-MONTH PREP CALENDAR ── */}
          <section id="prep-calendar" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Sliders size={18} />
              </span>
              Month-by-Month Prep Calendar (Tying Dates to Action)
            </h2>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl font-sans">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-extrabold">
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Month</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">What's Happening</th>
                    <th className="px-4 py-3.5 font-bold uppercase tracking-wider">What You Should Be Doing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300 font-medium">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 bg-slate-950/30 font-black text-amber-400">July 2026</td>
                    <td className="px-4 py-4 text-white font-extrabold">Applications close</td>
                    <td className="px-4 py-4">Finish registration; start Prelims prep</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 bg-slate-950/30 font-black text-amber-400">August 2026</td>
                    <td className="px-4 py-4 text-white font-extrabold">Admit card + Prelims exam</td>
                    <td className="px-4 py-4">
                      Full-length Prelims mock tests, sectional{' '}
                      <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline font-bold">Reasoning</a> &{' '}
                      <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 hover:underline font-bold">Quant</a> drills
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 bg-slate-950/30 font-black text-amber-400">September 2026</td>
                    <td className="px-4 py-4 text-white font-extrabold">Prelims result</td>
                    <td className="px-4 py-4">
                      Shift to Mains-level{' '}
                      <Link href="/ibps-po/exam-pattern" className="text-amber-400 hover:text-amber-300 hover:underline font-bold">Exam Pattern</Link> prep
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 bg-slate-950/30 font-black text-amber-400">October 2026</td>
                    <td className="px-4 py-4 text-white font-extrabold">Mains exam</td>
                    <td className="px-4 py-4">
                      Descriptive paper practice,{' '}
                      <Link href="/ibps-po/syllabus" className="text-amber-400 hover:text-amber-300 hover:underline font-bold">Banking Awareness</Link> revision
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 bg-slate-950/30 font-black text-amber-400">Nov–Dec 2026</td>
                    <td className="px-4 py-4 text-white font-extrabold">Personality Test + Interview</td>
                    <td className="px-4 py-4">
                      Review{' '}
                      <Link href="/ibps-po/selection-process" className="text-amber-400 hover:text-amber-300 hover:underline font-bold">Selection Process</Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 bg-slate-950/30 font-black text-amber-400">Jan 2027</td>
                    <td className="px-4 py-4 text-white font-extrabold">Provisional Allotment</td>
                    <td className="px-4 py-4">
                      Check{' '}
                      <Link href="/ibps-po/salary" className="text-amber-400 hover:text-amber-300 hover:underline font-bold">Salary & Perks</Link> expectations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 5: QUICK LINKS GRID ── */}
          <section id="quick-links" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={18} />
              </span>
              Continue Your IBPS PO 2026 Preparation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans">
              {[
                { title: 'Notification Details', path: '/ibps-po/notification' },
                { title: 'Admit Card Download Steps', path: '/ibps-po/admit-card' },
                { title: 'Vacancy Breakdown', path: '/ibps-po/vacancy' },
                { title: 'Detailed Exam Pattern', path: '/ibps-po/exam-pattern' },
                { title: 'Eligibility Criteria', path: '/ibps-po/eligibility' },
                { title: 'Cut-Off Trends', path: '/ibps-po/cut-off' }
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
                <h4 className="font-black text-base sm:text-lg text-white">Ready to test your readiness?</h4>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Take a free Prelims mock test constructed according to the official CRP XVI schedule constraints.
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

          {/* ── SECTION 6: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <QuestionIcon size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'When is the IBPS PO 2026 Prelims exam?', a: 'The IBPS PO 2026 Preliminary Examination is scheduled for 22 and 23 August 2026.' },
                { q: 'When is the IBPS PO 2026 Mains exam?', a: 'The IBPS PO 2026 Main Examination is scheduled for 4 October 2026.' },
                { q: 'Was the IBPS PO 2026 application deadline extended?', a: 'Yes, IBPS extended the last date to apply for IBPS PO 2026 to 26 July 2026.' },
                { q: 'When will the IBPS PO 2026 Prelims admit card be released?', a: 'The Prelims admit card is expected in the first or second week of August 2026, based on IBPS\'s usual 10-15 day pre-exam release pattern.' },
                { q: 'How many days before the exam does IBPS release the admit card?', a: 'IBPS typically releases the admit card 7 to 15 days before the exam date.' },
                { q: 'What is the gap between IBPS PO Prelims and Mains 2026?', a: 'There is a gap of roughly six weeks between the Prelims exam (22-23 August) and the Mains exam (4 October 2026).' },
                { q: 'When will IBPS PO 2026 final results be declared?', a: 'The final IBPS PO 2026 result, including provisional allotment, is expected in January 2027.' },
                { q: 'Is there a correction window after the IBPS PO application closes?', a: 'Yes, IBPS provides a two-day edit window after the registration deadline for candidates to correct submitted details.' },
                { q: 'How often does IBPS change the announced exam dates?', a: 'IBPS PO exam dates printed in the official notification are rarely changed once confirmed, but admit card, result, and interview dates are provisional until officially announced closer to each stage.' }
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
              <span className="flex items-center gap-1"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> Last Updated: 27 July 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">
                  Official IBPS dates calendar, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any exam date, call letter notice, or selection deadline, always cross-check with the official announcements published on ibps.in.
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
