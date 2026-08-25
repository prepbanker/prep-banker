// PATH: components/sections/exams/IBPSPONotificationPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  Play,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  Users,
  DollarSign,
  Award,
  ChevronDown,
  Info,
  ChevronRight,
  Download,
  AlertCircle,
  FileCheck,
  CheckCircle,
  Trophy,
  ExternalLink,
  BookOpen,
  Building2,
  Bell,
  Sliders,
  UserCheck,
  Target,
  FileSpreadsheet,
  AlertTriangle,
  HelpCircle,
  HelpCircle as QuestionIcon,
  Copy,
  Languages,
  Calculator,
  Brain,
  GitCompare,
  ArrowLeftRight
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPONotificationPage() {
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

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  if (!exam) return null;

  // JSON-LD Schema definitions
  const schemas = [
    // 1. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/"},
        {"@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po"},
        {"@type": "ListItem", "position": 3, "name": "Notification", "item": "https://prepbanker.com/ibps-po/notification"}
      ]
    },
    // 2. NewsArticle Schema
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "IBPS PO Notification 2026: 7365 Vacancies, PDF Download & CRP PO/MT-XVI Details",
      "description": "IBPS PO Notification 2026 released for 7365 Probationary Officer/Management Trainee vacancies under CRP PO/MT-XVI. Download the official PDF and check exam dates, eligibility and application process.",
      "image": ["https://prepbanker.com/images/ibps-po-notification-2026.jpg"],
      "datePublished": "2026-07-01T09:00:00+05:30",
      "dateModified": "2026-07-27T10:00:00+05:30",
      "author": {
        "@type": "Organization",
        "name": "PrepBanker",
        "url": "https://prepbanker.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PrepBanker",
        "logo": {
          "@type": "ImageObject",
          "url": "https://prepbanker.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://prepbanker.com/ibps-po/notification"
      }
    },
    // 3. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When was the IBPS PO 2026 notification released?",
          "acceptedAnswer": {"@type": "Answer", "text": "IBPS released the official IBPS PO 2026 notification (CRP PO/MT-XVI) on 1 July 2026 on ibps.in."}
        },
        {
          "@type": "Question",
          "name": "How many vacancies are there in IBPS PO Notification 2026?",
          "acceptedAnswer": {"@type": "Answer", "text": "IBPS PO 2026 has 7,365 revised vacancies, increased from the initial 6,715 through a corrigendum issued on 20 July 2026 after 650 posts were added for Indian Bank."}
        },
        {
          "@type": "Question",
          "name": "What is the last date to apply for IBPS PO 2026?",
          "acceptedAnswer": {"@type": "Answer", "text": "The online application window for IBPS PO 2026 closed on 26 July 2026, after being extended once from the original 21 July 2026 deadline."}
        },
        {
          "@type": "Question",
          "name": "Is there a correction window for the IBPS PO 2026 application form?",
          "acceptedAnswer": {"@type": "Answer", "text": "Yes, IBPS has introduced a 2-day Application Correction/Edit Window after the registration deadline, available for a fee of Rs. 200, though fields like name, email ID, and mobile number cannot be changed."}
        },
        {
          "@type": "Question",
          "name": "What are the IBPS PO 2026 exam dates?",
          "acceptedAnswer": {"@type": "Answer", "text": "The IBPS PO Prelims exam is scheduled for 22 and 23 August 2026, and the Mains exam is scheduled for 4 October 2026."}
        },
        {
          "@type": "Question",
          "name": "How many banks are participating in IBPS PO 2026?",
          "acceptedAnswer": {"@type": "Answer", "text": "11 Public Sector Banks are participating in IBPS PO 2026, including Bank of Baroda, Canara Bank, Punjab National Bank, Indian Bank, and Union Bank of India."}
        },
        {
          "@type": "Question",
          "name": "What is new in the IBPS PO 2026 notification compared to previous years?",
          "acceptedAnswer": {"@type": "Answer", "text": "The IBPS PO 2026 notification introduces a mandatory Personality Test before the Interview, a revised Mains exam pattern with 170 objective questions instead of 145, removal of the earlier credit history clause, and a first-ever 2-day application correction window."}
        },
        {
          "@type": "Question",
          "name": "What is the application fee for IBPS PO 2026?",
          "acceptedAnswer": {"@type": "Answer", "text": "The application fee is Rs. 850 (inclusive of GST) for General/EWS/OBC candidates and Rs. 175 (inclusive of GST) for SC/ST/PwBD candidates."}
        },
        {
          "@type": "Question",
          "name": "Where can I download the official IBPS PO Notification 2026 PDF?",
          "acceptedAnswer": {"@type": "Answer", "text": "The official IBPS PO 2026 notification PDF is available for download on the IBPS website at ibps.in under the CRP PO/MT-XVI recruitment section."}
        },
        {
          "@type": "Question",
          "name": "Is the IBPS PO 2026 notification for the current year's vacancies?",
          "acceptedAnswer": {"@type": "Answer", "text": "No, the IBPS PO 2026 recruitment cycle (CRP PO/MT-XVI) is conducted to fill vacancies for the financial year 2027-28, as is standard IBPS practice of recruiting a cycle in advance."}
        },
        {
          "@type": "Question",
          "name": "What is the age limit for IBPS PO 2026?",
          "acceptedAnswer": {"@type": "Answer", "text": "Candidates must be between 20 and 30 years of age as on 1 July 2026, with age relaxation applicable for reserved categories as per government norms."}
        },
        {
          "@type": "Question",
          "name": "Can I apply for IBPS PO 2026 if I have already appeared in previous attempts?",
          "acceptedAnswer": {"@type": "Answer", "text": "Yes, there is no restriction on the number of attempts for IBPS PO; candidates can apply as many times as they wish as long as they meet the age and eligibility criteria."}
        }
      ]
    },
    // 4. WebPage + Speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://prepbanker.com/ibps-po/notification",
      "url": "https://prepbanker.com/ibps-po/notification",
      "name": "IBPS PO Notification 2026",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#quick-answer", "#whats-new-2026"]
      },
      "isPartOf": {
        "@type": "WebSite",
        "name": "PrepBanker",
        "url": "https://prepbanker.com"
      }
    },
    // 5. HowTo Schema
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Apply for IBPS PO 2026 Online",
      "step": [
        {"@type": "HowToStep", "name": "Visit official website", "text": "Go to the official IBPS website ibps.in and click the CRP PO/MT-XVI link."},
        {"@type": "HowToStep", "name": "New registration", "text": "Click 'New Registration' and enter basic details to generate your provisional registration number and password."},
        {"@type": "HowToStep", "name": "Upload documents", "text": "Upload your live photograph, signature, left thumb impression, and handwritten declaration as per specifications."},
        {"@type": "HowToStep", "name": "Fill application form", "text": "Complete personal, educational, and communication details carefully."},
        {"@type": "HowToStep", "name": "Preview and pay", "text": "Preview the form, verify all details, and pay the application fee online via net banking, card, or UPI."},
        {"@type": "HowToStep", "name": "Download confirmation", "text": "Submit the form and download the confirmation page/e-receipt for future reference."}
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

      {/* ── SECTION 0: HERO SECTION ── */}
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
            <span className="text-white/80">Notification</span>
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
                Notification Out
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Notification 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  7,365 PO/MT Vacancies | CRP PO/MT-XVI Details
                </p>
                <p className="text-xs text-white/60">
                  Official notification for CRP PO/MT-XVI released by IBPS on 1 July 2026 for 7,365 Probationary Officer / Management Trainee posts across 11 public sector banks. Application window closed 26 July 2026 — here's everything confirmed so far, updated as corrigenda are released.
                </p>
              </div>

              {/* Freshness Strip */}
              <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟢 Notification Released: 1 July 2026</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1"><FileCheck size={13} className="text-amber-400" /> <Link href="/editorial-policy" className="hover:underline text-slate-200">Last Updated: 27 July 2026</Link></span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1"><CheckCircle size={13} className="text-emerald-400" /> Reviewed by PrepBanker Exam Desk</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <button
                  onClick={() => setIsPdfModalOpen(true)}
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer border-none"
                >
                  <Download size={15} strokeWidth={2.5} /> Download Official Notification PDF
                </button>
                <Link
                  href="/ibps-po/mock-tests"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Start Free IBPS PO Mock Test <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Stats Card */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <div className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Key Exam Statistics
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Total Vacancies</span>
                    <span className="text-sm font-black text-[#FBBF24]">7,365 (Revised)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Participating Banks</span>
                    <span className="text-sm font-black text-white">11 Banks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Age Limit</span>
                    <span className="text-sm font-black text-white">20—30 Yrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Selection Cycle</span>
                    <span className="text-sm font-black text-[#FBBF24]">CRP PO/MT-XVI</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Vacancies were revised upward from 6,715 to 7,365 after 650 posts were added for Indian Bank.</span>
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
            <QuickNavigation exam={exam} activeSlug="notification" />
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
                  <a href="#updates" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Latest Updates
                  </a>
                </li>
                <li>
                  <a href="#overview" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Quick Overview Table
                  </a>
                </li>
                <li>
                  <a href="#whats-new-2026" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Key Changes in CRP PO-XVI
                  </a>
                </li>
                <li>
                  <a href="#pdf" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    Official PDF: What's Inside
                  </a>
                </li>
                <li>
                  <a href="#apply" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    How to Apply Online
                  </a>
                </li>
                <li>
                  <a href="#correction" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Application Correction Window
                  </a>
                </li>
                <li>
                  <a href="#banks" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Participating Banks
                  </a>
                </li>
                <li>
                  <a href="#explore" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                    Preparation Resources
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">9</span>
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: LIVE UPDATES / TRACKER SECTION ── */}
          <section id="updates" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-8 relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-[#1B6EB5] to-indigo-500" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Bell size={20} className="stroke-[2.5]" />
                </span>
                IBPS PO 2026 Notification: Latest Updates
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Tracker Active
              </span>
            </div>

            <div className="relative border-l-2 border-dashed border-slate-200 ml-4 pl-6 sm:pl-8 space-y-6 pb-2">
              {/* Update 1 */}
              <div className="relative group transition-all duration-300">
                {/* Glowing Pulsing Node */}
                <div className="absolute -left-[39px] top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border-4 border-white ring-2 ring-slate-900/10">
                  <span className="absolute h-full w-full rounded-full bg-slate-900/30 opacity-75 animate-ping pointer-events-none" />
                </div>
                <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 hover:border-slate-350 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-block text-[11px] font-extrabold text-slate-500 uppercase tracking-widest font-mono bg-slate-150 px-2 py-0.5 rounded-md">27 July 2026</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-slate-900 text-white">Closed</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-[#1B6EB5] transition-colors font-display">Online Application Window Closed</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-4xl font-medium">
                    The online application window for CRP PO/MT-XVI has closed. The 2-day correction/edit window opens next; check this page for the exact link.
                  </p>
                </div>
              </div>

              {/* Update 2 */}
              <div className="relative group transition-all duration-300">
                <div className="absolute -left-[39px] top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 border-4 border-white ring-2 ring-amber-500/20" />
                <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 hover:border-slate-350 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-block text-[11px] font-extrabold text-amber-600 uppercase tracking-widest font-mono bg-amber-50 px-2 py-0.5 rounded-md">22 July 2026</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-amber-100 text-amber-800">Important</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-amber-600 transition-colors font-display">Application Correction Window Facility Confirmed</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-4xl font-medium">
                    IBPS confirmed the application correction window will be a 2-day facility, chargeable at Rs. 200, opening after the registration deadline.
                  </p>
                </div>
              </div>

              {/* Update 3 */}
              <div className="relative group transition-all duration-300">
                <div className="absolute -left-[39px] top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 border-4 border-white ring-2 ring-emerald-500/20" />
                <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 hover:border-slate-350 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-block text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest font-mono bg-emerald-50 px-2 py-0.5 rounded-md">20 July 2026</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-100 text-emerald-800">Vacancy Increase</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-emerald-600 transition-colors font-display">Vacancies Revised Upward to 7,365 (+650 Posts)</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-4xl font-medium">
                    IBPS issued a corrigendum revising total vacancies from 6,715 to 7,365 after adding 650 posts for Indian Bank.
                  </p>
                </div>
              </div>

              {/* Update 4 */}
              <div className="relative group transition-all duration-300">
                <div className="absolute -left-[39px] top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#1B6EB5] border-4 border-white ring-2 ring-blue-500/20" />
                <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 hover:border-slate-355 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-block text-[11px] font-extrabold text-[#1B6EB5] uppercase tracking-widest font-mono bg-blue-50 px-2 py-0.5 rounded-md">21 July 2026</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-blue-100 text-blue-800">Extension</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-[#1B6EB5] transition-colors font-display">Application Deadline Extended</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-4xl font-medium">
                    The application deadline has been extended from 21 July to 26 July 2026.
                  </p>
                </div>
              </div>

              {/* Update 5 */}
              <div className="relative group transition-all duration-300">
                <div className="absolute -left-[39px] top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border-4 border-white ring-2 ring-slate-900/10" />
                <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 hover:border-slate-350 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-block text-[11px] font-extrabold text-slate-500 uppercase tracking-widest font-mono bg-slate-100 px-2 py-0.5 rounded-md">1 July 2026</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-800">Released</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-[#1B6EB5] transition-colors font-display">Official CRP PO/MT-XVI Notification Released</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed max-w-4xl font-medium">
                    IBPS released the official IBPS PO Notification 2026 PDF and opened online registration on ibps.in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: QUICK OVERVIEW TABLE ── */}
          <section id="overview" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileSpreadsheet size={22} className="stroke-[2.5]" />
              </span>
              Quick Overview Table
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] bg-white font-sans">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="px-5 py-4 font-black uppercase tracking-wider text-[11px] text-slate-300">Particulars</th>
                    <th className="px-5 py-4 font-black uppercase tracking-wider text-[11px] text-slate-300">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900 sm:w-1/3">Exam Name</td>
                    <td className="px-5 py-4 text-slate-800 font-semibold">IBPS PO 2026 (CRP PO/MT-XVI)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Conducting Body</td>
                    <td className="px-5 py-4 text-slate-800">Institute of Banking Personnel Selection (IBPS)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Post</td>
                    <td className="px-5 py-4 text-slate-800">Probationary Officer / Management Trainee</td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Notification Released</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-100">
                        1 July 2026
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Application Dates</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">
                        1 July – 26 July 2026 (Closed)
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Total Vacancies</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-extrabold text-slate-900">7,365 (Revised)</span>
                        <Link href="/ibps-po/vacancy" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5">
                          View Bank Breakup <ChevronRight size={12} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Prelims Exam Date</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-extrabold text-slate-900">22 & 23 August 2026</span>
                        <Link href="/ibps-po/important-dates" className="text-[#1B6EB5] hover:underline font-bold inline-flex items-center gap-0.5">
                          View Schedule <ChevronRight size={12} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Mains Exam Date</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-900 rounded-lg text-xs font-bold border border-amber-200">
                        4 October 2026
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Eligibility</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-slate-800">Bachelor's Degree, 20–30 Years</span>
                        <Link href="/ibps-po/eligibility" className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-bold transition-all no-underline border border-blue-100">
                          Check Age Relaxations <ChevronRight size={12} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-900">Selection Process</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-slate-800">Prelims → Mains → Interview</span>
                        <Link href="/ibps-po/selection-process" className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-bold transition-all no-underline border border-blue-100">
                          View Marks Weightage <ChevronRight size={12} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-5 py-4 bg-slate-50/40 font-bold text-slate-955">Official Website</td>
                    <td className="px-5 py-4">
                      <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white hover:bg-slate-800 rounded-lg text-xs font-black transition-all no-underline">
                        ibps.in 🔗
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 3: KEY CHANGES IN 2026 (whats-new-2026) ── */}
          <section id="whats-new-2026" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Sliders size={22} className="stroke-[2.5]" />
              </span>
              5 Key Changes in the IBPS PO 2026 Notification vs Previous Years
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              {/* Change 1 */}
              <div className="bg-white border border-slate-200/80 hover:border-emerald-350 p-6 rounded-2xl hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.08)] transition-all duration-305 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-black text-sm font-display">1</div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">Application</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-emerald-600 transition-colors">Application Correction Window</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Introduced for the first time — a 2-day edit facility (₹200 fee) after registration closes, so candidates can fix errors in select fields before the form is locked.
                  </p>
                </div>
              </div>

              {/* Change 2 */}
              <div className="bg-white border border-slate-200/80 hover:border-emerald-350 p-6 rounded-2xl hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.08)] transition-all duration-305 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-black text-sm font-display">2</div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">New Test</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-emerald-600 transition-colors">Mandatory Personality Test</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Added before the Interview — a self-report psychometric profile is now shared with the interview panel; it's non-qualifying but compulsory to attend.
                  </p>
                </div>
              </div>

              {/* Change 3 */}
              <div className="bg-white border border-slate-200/80 hover:border-emerald-350 p-6 rounded-2xl hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.08)] transition-all duration-305 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-black text-sm font-display">3</div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">Exam Pattern</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-emerald-600 transition-colors">Mains Exam Pattern Revised</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Objective questions increased from 145 to 170. English Language marks reduced from 40 to 20, while Banking Awareness and Data Analysis & Interpretation now carry more weight.
                  </p>
                </div>
              </div>

              {/* Change 4 */}
              <div className="bg-white border border-slate-200/80 hover:border-emerald-350 p-6 rounded-2xl hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.08)] transition-all duration-305 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-black text-sm font-display">4</div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">Eligibility</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-emerald-600 transition-colors">Credit History Clause Removed</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    The earlier requirement around candidates' credit/loan history (minimum CIBIL score checks) has been dropped from the 2026 notification.
                  </p>
                </div>
              </div>

              {/* Change 5 */}
              <div className="bg-white border border-slate-200/80 hover:border-emerald-350 p-6 rounded-2xl hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.08)] transition-all duration-305 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-black text-sm font-display">5</div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">Vacancies</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-emerald-600 transition-colors">Vacancies Revised Upward</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    7,365 posts now, up from the initially notified 6,715, after IBPS added 650 seats for Indian Bank via corrigendum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: NOTIFICATION PDF: WHAT'S INSIDE ── */}
          <section id="pdf" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <FileText size={22} className="stroke-[2.5]" />
              </span>
              IBPS PO Notification 2026 PDF — What It Contains
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              The official notification PDF released by IBPS is the single authoritative document for this recruitment cycle. Before applying, read it for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 font-sans font-bold">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Bank-wise & category-wise vacancy distribution</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Detailed eligibility criteria (age, qualification, nationality)</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Complete exam pattern for Prelims and Mains</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Application fee and payment instructions</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Document specifications (photo, signature, left thumb, declaration)</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>List of exam centres, state-wise</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Reservation and age-relaxation rules</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 hover:bg-slate-50/50 transition-colors">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Multiple registrations, fraudulent claims & disqualification</span>
              </div>
            </div>

            {/* Callout PDF Action Card */}
            <div className="p-6 bg-gradient-to-br from-[#0B0F19] to-[#121A2D] border border-slate-800 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg font-sans relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-amber-400 blur-2xl pointer-events-none" />
              <div className="space-y-1 text-center md:text-left relative z-10">
                <div className="font-extrabold text-sm sm:text-base text-white">Prefer to read the authoritative document?</div>
                <p className="text-xs text-white/60 leading-normal max-w-md font-semibold">
                  Download directly from primary IBPS servers. This is both a legal safety measure and verified E-E-A-T practice.
                </p>
              </div>
              <a
                href="https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(240,180,41,0.25)] hover:-translate-y-0.5 no-underline flex items-center gap-2 shrink-0 cursor-pointer relative z-10"
              >
                <Download size={14} strokeWidth={2.5} /> Download PDF (Official)
              </a>
            </div>

            {/* Internal Jumps */}
            <div className="border-t border-slate-200/80 pt-5 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-xs text-slate-500 font-bold font-sans">
              <span className="w-full md:w-auto text-slate-400 mb-1 md:mb-0">Prefer the breakdown instead of reading 40 pages? Jump to:</span>
              <Link href="/ibps-po/vacancy" className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-extrabold transition-colors no-underline border border-blue-100/50">Vacancy details</Link>
              <Link href="/ibps-po/eligibility" className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-extrabold transition-colors no-underline border border-blue-100/50">Eligibility criteria</Link>
              <Link href="/ibps-po/exam-pattern" className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-extrabold transition-colors no-underline border border-blue-100/50">Exam pattern</Link>
              <Link href="/ibps-po/important-dates" className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 rounded-lg text-xs font-extrabold transition-colors no-underline border border-blue-100/50">Important dates</Link>
            </div>
          </section>

          {/* ── SECTION 5: HOW TO APPLY STEP-BY-STEP ── */}
          <section id="apply" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <UserCheck size={22} className="stroke-[2.5]" />
              </span>
              How to Apply for IBPS PO 2026 Online
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 font-sans items-start">
              <div className="space-y-6">
                <div className="relative border-l-2 border-slate-200/80 pl-8 ml-4 space-y-8">
                  {[
                    { step: 1, title: 'Visit the official IBPS website', text: 'Go to the official IBPS portal at ibps.in and open the CRP PO/MT-XVI recruitment link.' },
                    { step: 2, title: 'Click "New Registration"', text: 'Enter your name, contact details, and active email ID to generate a provisional registration number and password. (Note these details down immediately).' },
                    { step: 3, title: 'Upload your documents', text: 'Upload your live photograph, signature, left thumb impression, and handwritten declaration exactly as per the specifications in the notification.' },
                    { step: 4, title: 'Fill in details carefully', text: 'Fill in personal, educational, and communication details. This data feeds directly into your admit card and final mark sheet.' },
                    { step: 5, title: 'Preview and verify', text: 'Preview your complete application and verify every field before submitting. Most correctable errors post-submission are limited to the edit window.' },
                    { step: 6, title: 'Pay the application fee', text: 'Pay the application fee online using net banking, debit/credit card, or UPI.' },
                    { step: 7, title: 'Download confirmation', text: 'Download and save your confirmation page and e-receipt. You will need the registration number for admit card download.' }
                  ].map((item) => (
                    <div key={item.step} className="relative group">
                      <div className="absolute -left-[49px] w-8 h-8 rounded-xl bg-slate-900 border-4 border-slate-50 text-white font-extrabold text-xs flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:border-orange-100 transition-all duration-200">
                        {item.step}
                      </div>
                      <div className="space-y-1">
                        <div className="font-bold text-slate-900 text-sm sm:text-base font-display group-hover:text-orange-600 transition-colors duration-200">{item.title}</div>
                        <p className="text-xs sm:text-sm text-slate-505 font-medium leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200/80 text-xs sm:text-sm font-bold text-slate-500">
                  Already applied? <Link href="/ibps-po/admit-card" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-[#1B6EB5] hover:bg-blue-100 border border-blue-100 rounded-lg text-xs font-extrabold transition-all no-underline ml-1">Track Admit Card <ChevronRight size={12} /></Link>
                </div>
              </div>

              {/* Spacing Card with Fee Details */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
                <div className="font-black text-xs sm:text-sm uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2 font-mono">
                  Application Fee
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100/50">
                    <span className="text-xs font-bold text-slate-600">General / OBC / EWS</span>
                    <span className="px-2.5 py-1 bg-slate-900 text-white font-extrabold text-xs rounded-lg shadow-sm">₹850</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100/50">
                    <span className="text-xs font-bold text-slate-600">SC / ST / PwBD</span>
                    <span className="px-2.5 py-1 bg-slate-900 text-white font-extrabold text-xs rounded-lg shadow-sm">₹175</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-orange-950">
                    <span className="text-xs font-bold">Correction Window</span>
                    <span className="px-2.5 py-1 bg-orange-600 text-white font-extrabold text-xs rounded-lg shadow-sm">₹200</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-[10px] text-slate-400 leading-normal flex gap-1.5 items-start font-semibold">
                  <Info size={12} className="shrink-0 text-slate-500 mt-0.5" />
                  <span>Fees are inclusive of GST. Pay online only using secure portals.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: APPLICATION CORRECTION / EDIT WINDOW ── */}
          <section id="correction" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                <AlertTriangle size={18} />
              </span>
              IBPS PO 2026 Application Correction Window
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold">
              For the first time in IBPS PO's history, a dedicated 2-day correction window has been introduced after the registration deadline, letting candidates fix errors in their submitted form before it's locked for good.
            </p>

            {/* Grid of Key Window Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              {/* Left: What is Allowed */}
              <div className="p-5 bg-emerald-50/50 border border-emerald-100 rounded-2xl space-y-3">
                <div className="font-extrabold text-sm text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle size={15} /> Editable Fields & Rules
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-605 font-semibold list-disc list-inside">
                  <li>Fee: ₹200 (inclusive of GST) per modification</li>
                  <li>Only candidates who completed full registration and fee payment can use this window</li>
                  <li>Photograph & signature re-uploads are permitted</li>
                  <li>Category changes (within permitted combinations)</li>
                  <li>Correspondence address details</li>
                </ul>
              </div>

              {/* Right: What is NOT Allowed */}
              <div className="p-5 bg-red-50/50 border border-red-100 rounded-2xl space-y-3">
                <div className="font-extrabold text-sm text-red-800 flex items-center gap-1.5">
                  <AlertCircle size={15} /> Non-Editable Fields & Restrictions
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-605 font-semibold list-disc list-inside">
                  <li>Cannot edit candidate's Name</li>
                  <li>Cannot change Registered Email ID</li>
                  <li>Cannot change Registered Mobile Number</li>
                  <li>Cannot change State/UT details</li>
                  <li>Cannot change Nationality or Post applied for</li>
                </ul>
              </div>
            </div>

            {/* Crucial Info Alert Box */}
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl flex gap-3 font-sans">
              <Info className="text-amber-500 shrink-0 mt-0.5" size={16} />
              <div className="space-y-1">
                <div className="font-extrabold text-xs sm:text-sm text-amber-900">Important Window Rule</div>
                <p className="text-xs text-amber-800 leading-normal font-semibold">
                  The most recently modified application is treated as the final, valid one. Once the correction window shuts, no request for correction is entertained under any circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: PARTICIPATING BANKS ── */}
          <section id="banks" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-slate-900/10 text-slate-800 flex items-center justify-center">
                <Building2 size={22} className="stroke-[2.5]" />
              </span>
              Banks Participating in IBPS PO 2026
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans font-semibold font-sans">
              11 Public Sector Banks are recruiting through CRP PO/MT-XVI:
            </p>

            {/* 11 Banks Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
              {[
                'Bank of Baroda',
                'Bank of India',
                'Bank of Maharashtra',
                'Canara Bank',
                'Central Bank of India',
                'Indian Bank',
                'Indian Overseas Bank',
                'Punjab National Bank',
                'Punjab & Sind Bank',
                'UCO Bank',
                'Union Bank of India'
              ].map((bank, idx) => (
                <div key={idx} className="p-4 bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/10 hover:shadow-[0_8px_20px_-6px_rgba(27,110,181,0.06)] transition-all rounded-2xl flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-505 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#1B6EB5] transition-colors shrink-0">
                    <Building2 size={16} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 transition-colors">{bank}</span>
                </div>
              ))}
            </div>

            {/* Inner Redirection */}
            <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/20 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-left">
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-800">Looking for exact numbers?</p>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-0.5">
                  Explore the exact number of seats per bank and category-wise reservation details.
                </p>
              </div>
              <Link href="/ibps-po/vacancy" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1B6EB5] hover:bg-[#155A94] text-white rounded-xl text-xs font-black transition-all shadow-[0_4px_12px_rgba(27,110,181,0.2)] hover:-translate-y-0.5 shrink-0 no-underline cursor-pointer">
                View Vacancy Breakdown <ArrowRight size={13} />
              </Link>
            </div>
          </section>

          {/* ── SECTION 8: EXPLORE MORE - LINK HUB ── */}
          <section id="explore" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Target size={22} className="stroke-[2.5]" />
              </span>
              Continue Your IBPS PO 2026 Preparation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans">
              {[
                { icon: Calendar, title: 'Important Dates', path: '/ibps-po/important-dates' },
                { icon: Users, title: 'Vacancy Details', path: '/ibps-po/vacancy' },
                { icon: ShieldCheck, title: 'Eligibility Criteria', path: '/ibps-po/eligibility' },
                { icon: BookOpen, title: 'Syllabus', path: '/ibps-po/syllabus' },
                { icon: FileCheck, title: 'Exam Pattern', path: '/ibps-po/exam-pattern' },
                { icon: Trophy, title: 'Selection Process', path: '/ibps-po/selection-process' },
                { icon: DollarSign, title: 'Salary & Perks', path: '/ibps-po/salary' },
                { icon: Award, title: 'Previous Cut Off', path: '/ibps-po/cut-off' },
                { icon: FileText, title: 'Admit Card', path: '/ibps-po/admit-card' },
                { icon: Clock, title: '90-Day Study Plan', path: '/ibps-po/study-plan' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.path}
                    className="p-5 bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-[0_8px_20px_-6px_rgba(99,102,241,0.06)] hover:-translate-y-0.5 transition-all rounded-2xl flex items-center justify-between group no-underline"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-505 group-hover:bg-indigo-50 group-hover:text-indigo-600 flex items-center justify-center transition-colors shrink-0">
                        <IconComponent size={18} className="stroke-[2]" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-955 transition-colors font-display">
                        {item.title}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 shrink-0">
                      <ChevronRight size={14} className="stroke-[2.5]" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Product CTA Banner Block */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl text-white space-y-4 shadow-md font-sans">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="font-black text-base sm:text-lg text-white">Notification's out — start practicing today.</div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Join 50k+ banking aspirants practicing with PrepBanker mocks. Access updated tests crafted according to the revised CRP XVI patterns.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-3 pt-2">
                <a
                  href="https://app.prepgrind.com/signup/ibps-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.25)] hover:-translate-y-0.5 no-underline flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  Take a Free IBPS PO Mock Test <ChevronRight size={14} />
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

          {/* ── SECTION 9: FAQs ── */}
          <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <HelpCircle size={18} />
              </span>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-3 font-sans">
              {[
                { q: 'When was the IBPS PO 2026 notification released?', a: 'IBPS released the official IBPS PO 2026 notification (CRP PO/MT-XVI) on 1 July 2026 on ibps.in.' },
                { q: 'How many vacancies are there in IBPS PO Notification 2026?', a: 'IBPS PO 2026 has 7,365 revised vacancies, increased from the initial 6,715 through a corrigendum issued on 20 July 2026 after 650 posts were added for Indian Bank.' },
                { q: 'What is the last date to apply for IBPS PO 2026?', a: 'The online application window for IBPS PO 2026 closed on 26 July 2026, after being extended once from the original 21 July 2026 deadline.' },
                { q: 'Is there a correction window for the IBPS PO 2026 application form?', a: 'Yes, IBPS has introduced a 2-day Application Correction/Edit Window after the registration deadline, available for a fee of ₹200, though fields like name, email ID, and mobile number cannot be changed.' },
                { q: 'What are the IBPS PO 2026 exam dates?', a: 'The IBPS PO Prelims exam is scheduled for 22 and 23 August 2026, and the Mains exam is scheduled for 4 October 2026.' },
                { q: 'How many banks are participating in IBPS PO 2026?', a: '11 Public Sector Banks are participating in IBPS PO 2026, including Bank of Baroda, Canara Bank, Punjab National Bank, Indian Bank, and Union Bank of India.' },
                { q: 'What is new in the IBPS PO 2026 notification compared to previous years?', a: 'The IBPS PO 2026 notification introduces a mandatory Personality Test before the Interview, a revised Mains exam pattern with 170 objective questions instead of 145, removal of the earlier credit history clause, and a first-ever 2-day application correction window.' },
                { q: 'What is the application fee for IBPS PO 2026?', a: 'The application fee is ₹850 (inclusive of GST) for General/EWS/OBC candidates and ₹175 (inclusive of GST) for SC/ST/PwBD candidates.' },
                { q: 'Where can I download the official IBPS PO Notification 2026 PDF?', a: 'The official IBPS PO 2026 notification PDF is available for download on the IBPS website at ibps.in under the CRP PO/MT-XVI recruitment section.' },
                { q: 'Is the IBPS PO 2026 notification for the current year\'s vacancies?', a: 'No, the IBPS PO 2026 recruitment cycle (CRP PO/MT-XVI) is conducted to fill vacancies for the financial year 2027–28, as per IBPS\'s standard practice of recruiting a cycle in advance.' },
                { q: 'What is the age limit for IBPS PO 2026?', a: 'Candidates must be between 20 and 30 years of age as on 1 July 2026, with age relaxation applicable for reserved categories as per government norms.' },
                { q: 'Can I apply for IBPS PO 2026 if I\'ve already appeared in previous attempts?', a: 'Yes, there is no restriction on the number of attempts for IBPS PO; candidates can apply as many times as they wish as long as they meet the age and eligibility criteria.' }
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

          {/* ── SECTION 10: E-E-A-T / TRUST BLOCK ── */}
          <div className="bg-slate-100/50 border border-slate-200 rounded-2xl p-5 font-sans space-y-3.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle size={13} className="text-emerald-600" /> Reviewed by: PrepBanker Exam Desk</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> <Link href="/editorial-policy" className="hover:underline">Last Updated: 27 July 2026</Link></span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ExternalLink size={13} /> Source:{' '}
                <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">
                  Official IBPS notification, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any date, fee, or eligibility clause, always cross-check with the official notification PDF on ibps.in.
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
                  <FileText size={16} className="text-[#FBBF24]" /> Official CRP PO/MT-XVI Notification PDF
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
                title="IBPS PO Notification 2026 PDF Viewer"
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

                  <div className="font-extrabold text-white text-sm sm:text-base">Loading Official Notification Document...</div>
                  <p className="text-xs text-white/50 mt-1 max-w-xs leading-normal">
                    Fetching PDF from ibps.in servers. This may take a few seconds depending on your connection.
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center -z-10">
                <AlertCircle className="text-slate-400 mb-2" size={32} />
                <div className="font-extrabold text-slate-800">Loading Official Notification Document...</div>
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
