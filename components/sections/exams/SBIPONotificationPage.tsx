// PATH: components/sections/exams/SBIPONotificationPage.tsx
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
  Briefcase,
  Users,
  DollarSign,
  Award,
  ChevronDown,
  Info,
  Lock,
  ChevronRight,
  Download,
  AlertCircle,
  FileCheck,
  CheckCircle,
  MapPin,
  Trophy,
  ExternalLink,
  BookOpen,
  Building2,
  Layers
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPONotificationPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfCopySuccess, setPdfCopySuccess] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [pdfProgress, setPdfProgress] = useState(0);
  const [activeVacancyCat, setActiveVacancyCat] = useState<string | null>(null);

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

  // Time left countdown to August 1, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  useEffect(() => {
    const target = new Date('2026-08-01T09:00:00');
    const updateCountdown = () => {
      const difference = target.getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        setTimeLeft({ days: d, hours: h, minutes: m });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const copyPdfLink = () => {
    const link = "https://sbi.bank.in/csfile/18062026_1_Detailed_Adv.2026.pdf?t=1781759726353";
    navigator.clipboard.writeText(link).then(() => {
      setPdfCopySuccess(true);
      setTimeout(() => setPdfCopySuccess(false), 2000);
    });
  };

  if (!exam) return null;

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── SECTION 0: HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
        {/* Decorative Grid & Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1B6EB5 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F0B429 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <ChevronRight size={10} />
            <Link href="/exams" className="hover:text-white transition-colors no-underline">Exams</Link>
            <ChevronRight size={10} />
            <Link href="/sbi-po" className="hover:text-white transition-colors no-underline">SBI PO</Link>
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
                  SBI PO Notification 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/80 leading-normal sm:whitespace-nowrap">
                  1,500 Probationary Officer Vacancies | Advt No. CRPD/PO/2026-27/09
                </p>
                <p className="text-xs text-white/60">
                  Released by State Bank of India on 18 June 2026 - updated by PrepBanker every time SBI issues a new notice.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/10 cursor-pointer"
                  >
                    <Play size={14} className="fill-slate-900 text-slate-900" />
                    Attempt Free SBI PO Mock Test
                  </a>
                  <button
                    onClick={() => { setIsPdfModalOpen(true); setIsPdfLoading(true); }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white cursor-pointer"
                  >
                    <FileText size={16} />
                    View Notification PDF
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>Capturing other services?</span>
                  <Link href="/sbi-po/admit-card" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check Prelims Admit Card <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Trust/Credibility */}
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  100% Free Mock Tests
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Updated Daily
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Official SBI Source Verified
                </span>
              </div>
            </div>

            {/* Right Column: Key Stats Card */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <h4 className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Key Exam Statistics
                </h4>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Total Vacancies</span>
                    <span className="text-sm font-black text-[#FBBF24]">1,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Apps Received</span>
                    <span className="text-sm font-black text-white">12,14,076</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Age Limit</span>
                    <span className="text-sm font-black text-white">21–30 Yrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Approx. CTC</span>
                    <span className="text-sm font-black text-[#FBBF24]">₹21.97 LPA</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-xs text-white/50 leading-normal flex gap-1.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse mt-1 shrink-0" />
                  <p className="m-0">Verified official details updated for the 2026-27 recruitment cycle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

          {/* Main Content Column */}
          <main className="space-y-10">

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold">
                The State Bank of India (SBI) released the SBI PO Notification 2026 on 18 June 2026 under Advertisement No. CRPD/PO/2026-27/09, announcing 1,500 Probationary Officer (PO) vacancies. Online applications were accepted from 18 June to 8 July 2026 at the official SBI careers portal. Selection is through Prelims → Mains → Interview, with the Prelims exam held on 1 & 2 August 2026.
              </p>
            </section>

            {/* Table of Contents for Navigation */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  <li>
                    <a href="#highlights" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                      Notification Highlights
                    </a>
                  </li>
                  <li>
                    <a href="#overview" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                      Recruitment Overview
                    </a>
                  </li>
                  <li>
                    <a href="#dates" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                      Important Dates Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#vacancies" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                      Vacancy Breakdown
                    </a>
                  </li>
                  <li>
                    <a href="#eligibility" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                      Eligibility Criteria
                    </a>
                  </li>
                  <li>
                    <a href="#fee" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                      Application Fee Details
                    </a>
                  </li>
                  <li>
                    <a href="#how-to-apply" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                      Step-by-Step Apply Guide
                    </a>
                  </li>
                  <li>
                    <a href="#selection-process" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                      Selection Phases
                    </a>
                  </li>
                  <li>
                    <a href="#live-updates" className="group flex items-center text-sm text-slate-655 hover:text-[#1B6EB5] font-semibold no-underline">
                      <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">9</span>
                      Latest Notice Changelog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ── SECTION B: KEY HIGHLIGHTS ── */}
            <section id="highlights" className="scroll-mt-20 space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Award size={20} className="text-[#1B6EB5]" />
                SBI PO Notification 2026: Key Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
                {/* Recruiting Body */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Building2 size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Recruiting Body</span>
                    <h4 className="font-extrabold text-slate-800 text-sm leading-snug">State Bank of India (SBI)</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Central Recruitment &amp; Promotion Dept.</p>
                  </div>
                </div>

                {/* Post Name */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <Trophy size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Post Name</span>
                    <h4 className="font-extrabold text-slate-800 text-sm leading-snug">Probationary Officer (PO)</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Officer Cadre — Scale I</p>
                  </div>
                </div>

                {/* Advertisement No. */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-650 shrink-0">
                    <FileText size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Advertisement No.</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">CRPD/PO/2026-27/09</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Official Notification Code</p>
                  </div>
                </div>

                {/* Total Vacancies */}
                <div className="bg-emerald-50/40 border border-emerald-200/70 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Users size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-emerald-700/75 font-bold text-[10px] uppercase tracking-wider">Total Vacancies</span>
                    <h4 className="font-black text-emerald-800 text-sm sm:text-base leading-snug">1,500 Openings</h4>
                    <p className="text-[11px] text-emerald-750 font-medium font-semibold">1,446 Regular + 54 Backlog</p>
                  </div>
                </div>

                {/* Important Dates */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Application Window</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">18 June – 8 July 2026</h4>
                    <p className="text-[11px] text-purple-650 font-bold">Online registration closed</p>
                  </div>
                </div>

                {/* Application Fee */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <DollarSign size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Application Fee</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">₹750 (Gen/OBC/EWS)</h4>
                    <p className="text-[11px] text-slate-500 font-medium">No fee for SC / ST / PwBD</p>
                  </div>
                </div>

                {/* Age Limit */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Age Limits</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">21 – 30 Years</h4>
                    <p className="text-[11px] text-slate-500 font-medium">As on 1st April 2026</p>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Education Required</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">Graduation Degree</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Any discipline from recognized University</p>
                  </div>
                </div>

                {/* Selection Process */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center text-blue-700 shrink-0">
                    <Layers size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Selection Stages</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">3-Phase Process</h4>
                    <p className="text-[11px] text-blue-700 font-semibold">Prelims → Mains → GD/Interview</p>
                  </div>
                </div>

                {/* Job Location */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Job Location</span>
                    <h4 className="font-extrabold text-slate-850 text-sm leading-snug">Across India</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Postings in branches pan-India</p>
                  </div>
                </div>

                {/* Official Website */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <ExternalLink size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Official Website</span>
                    <a href="https://sbi.bank.in" target="_blank" rel="noopener noreferrer" className="font-extrabold text-[#1B6EB5] text-sm hover:underline block leading-snug">
                      sbi.bank.in
                    </a>
                    <p className="text-[11px] text-slate-500 font-medium">Careers &gt; Current Openings</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION C: OVERVIEW ── */}
            <section id="overview" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Info size={20} className="text-[#1B6EB5]" />
                SBI PO 2026 Notification: Overview
              </h2>

              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 rounded-2xl shadow-xs font-sans leading-relaxed text-slate-700 space-y-4">
                <p className="text-sm sm:text-base">
                  The official SBI PO Notification is the definitive guide outlining the application rules, eligibility parameters, and multi-stage timeline for the Probationary Officer posts. <span className="bg-amber-100 font-bold px-1.5 py-0.5 rounded text-slate-900">With 1,500 total vacancies announced, this recruitment cycle represents the largest hiring window in recent years</span>, nearly three times larger than previous pools.
                </p>
                <p className="text-sm sm:text-base">
                  Selection proceeds through a rigorous three-tier assessment covering Preliminary, Main, and Phase III Group Exercises and Interviews. As SBI releases revisions or schedules, PrepBanker updates this guide instantly to keep your exam roadmap accurate.
                </p>
              </div>
            </section>

            {/* ── SECTION D: IMPORTANT DATES TIMELINE ── */}
            <section id="dates" className="scroll-mt-20 space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Calendar size={20} className="text-[#1B6EB5]" />
                SBI PO Notification 2026: Important Dates
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stay updated on crucial milestones. The vertical timeline below highlights key events and their scheduled dates for the SBI PO 2026 recruitment drive:
              </p>

              {/* TIMELINE DESIGN instead of simple table */}
              <div className="relative pl-6 border-l-2 border-slate-200 space-y-6 ml-4">

                {/* Release */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-emerald-100 border-2 border-emerald-500 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Notification Release</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider w-fit">Completed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">18 June 2026</p>
                </div>

                {/* Apply Start */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-emerald-100 border-2 border-emerald-500 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Online Application Starts</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider w-fit">Completed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">18 June 2026</p>
                </div>

                {/* Apply Close */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-emerald-100 border-2 border-emerald-500 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Last Date to Apply &amp; Pay Fee</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider w-fit">Closed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">8 July 2026</p>
                </div>

                {/* PET Card */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-emerald-100 border-2 border-emerald-500 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Pre-Exam Training (PET) Call Letter</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider w-fit">Released</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">17 July 2026</p>
                </div>

                {/* Admit Card */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-emerald-100 border-2 border-emerald-500 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Prelims Admit Card</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider w-fit">Released</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">22 July 2026</p>
                </div>

                {/* Prelims Exam */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-blue-100 border-2 border-[#1B6EB5] rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Prelims Examination</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-wider w-fit">Upcoming</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">1 &amp; 2 August 2026</p>
                </div>

                {/* Results & Mains */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-slate-100 border-2 border-slate-400 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Prelims Result &amp; Mains Exam</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider w-fit">Expected</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">September 2026</p>
                </div>

                {/* Final Selection */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-slate-100 border-2 border-slate-400 rounded-full w-4 h-4" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-slate-800">Final Merit Announcement</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider w-fit">Expected</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1B6EB5] font-extrabold mt-0.5">November/December 2026</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/sbi-po/dates" className="font-extrabold text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-1 text-sm">
                  Full shift-wise exam schedule <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* ── SECTION E: VACANCY DETAILS ── */}
            <section id="vacancies" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Users size={20} className="text-[#1B6EB5]" />
                SBI PO 2026 Vacancy Details (from Notification)
              </h2>

              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl mb-4 font-sans">
                <p className="text-emerald-800 text-sm font-semibold leading-relaxed">
                  <strong>Insider Insight:</strong> The 1,500 vacancies announced in this cycle represent nearly 3x the number of vacancies released last recruitment cycle, making it the most favorable hiring pool for banking candidates in years.
                </p>
              </div>

              {/* Visual Graph Format Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-6 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Bars & Details */}
                  <div className="md:col-span-7 space-y-3.5">
                    {/* Category: UR */}
                    <div
                      onMouseEnter={() => setActiveVacancyCat('UR')}
                      onMouseLeave={() => setActiveVacancyCat(null)}
                      className={`p-3 border rounded-xl transition-all duration-200 cursor-pointer ${
                        activeVacancyCat === 'UR'
                          ? 'border-[#1B6EB5] bg-blue-50/25 shadow-xs scale-[1.01]'
                          : 'border-slate-100 hover:border-slate-200 bg-slate-50/20'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-extrabold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1B6EB5]" />
                          Unreserved (UR)
                        </span>
                        <span className="font-bold text-[#1B6EB5]">588 Seats <span className="text-slate-400 font-normal">(39.2%)</span></span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#1B6EB5] h-full rounded-full transition-all duration-300" style={{ width: '39.2%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5 pl-4.5">
                        <span>Regular: 588</span>
                        <span>Backlog: 0</span>
                      </div>
                    </div>

                    {/* Category: OBC */}
                    <div
                      onMouseEnter={() => setActiveVacancyCat('OBC')}
                      onMouseLeave={() => setActiveVacancyCat(null)}
                      className={`p-3 border rounded-xl transition-all duration-200 cursor-pointer ${
                        activeVacancyCat === 'OBC'
                          ? 'border-[#FBBF24] bg-amber-50/20 shadow-xs scale-[1.01]'
                          : 'border-slate-100 hover:border-slate-200 bg-slate-50/20'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-extrabold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                          Other Backward Classes (OBC)
                        </span>
                        <span className="font-bold text-[#FBBF24]">390 Seats <span className="text-slate-400 font-normal">(26.0%)</span></span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#FBBF24] h-full rounded-full transition-all duration-300" style={{ width: '26.0%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5 pl-4.5">
                        <span>Regular: 390</span>
                        <span>Backlog: 0</span>
                      </div>
                    </div>

                    {/* Category: SC */}
                    <div
                      onMouseEnter={() => setActiveVacancyCat('SC')}
                      onMouseLeave={() => setActiveVacancyCat(null)}
                      className={`p-3 border rounded-xl transition-all duration-200 cursor-pointer ${
                        activeVacancyCat === 'SC'
                          ? 'border-[#10B981] bg-emerald-50/20 shadow-xs scale-[1.01]'
                          : 'border-slate-100 hover:border-slate-200 bg-slate-50/20'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-extrabold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                          Scheduled Caste (SC)
                        </span>
                        <span className="font-bold text-[#10B981]">234 Seats <span className="text-slate-400 font-normal">(15.6%)</span></span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#10B981] h-full rounded-full transition-all duration-300" style={{ width: '15.6%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5 pl-4.5">
                        <span>Regular: 216</span>
                        <span>Backlog: 18</span>
                      </div>
                    </div>

                    {/* Category: ST */}
                    <div
                      onMouseEnter={() => setActiveVacancyCat('ST')}
                      onMouseLeave={() => setActiveVacancyCat(null)}
                      className={`p-3 border rounded-xl transition-all duration-200 cursor-pointer ${
                        activeVacancyCat === 'ST'
                          ? 'border-[#6366F1] bg-indigo-50/20 shadow-xs scale-[1.01]'
                          : 'border-slate-100 hover:border-slate-200 bg-slate-50/20'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-extrabold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1]" />
                          Scheduled Tribe (ST)
                        </span>
                        <span className="font-bold text-[#6366F1]">144 Seats <span className="text-slate-400 font-normal">(9.6%)</span></span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#6366F1] h-full rounded-full transition-all duration-300" style={{ width: '9.6%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5 pl-4.5">
                        <span>Regular: 108</span>
                        <span>Backlog: 36</span>
                      </div>
                    </div>

                    {/* Category: EWS */}
                    <div
                      onMouseEnter={() => setActiveVacancyCat('EWS')}
                      onMouseLeave={() => setActiveVacancyCat(null)}
                      className={`p-3 border rounded-xl transition-all duration-200 cursor-pointer ${
                        activeVacancyCat === 'EWS'
                          ? 'border-[#EC4899] bg-pink-50/20 shadow-xs scale-[1.01]'
                          : 'border-slate-100 hover:border-slate-200 bg-slate-50/20'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-extrabold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />
                          Economically Weaker Section (EWS)
                        </span>
                        <span className="font-bold text-[#EC4899]">144 Seats <span className="text-slate-400 font-normal">(9.6%)</span></span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#EC4899] h-full rounded-full transition-all duration-300" style={{ width: '9.6%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5 pl-4.5">
                        <span>Regular: 144</span>
                        <span>Backlog: 0</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Donut Chart */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center relative p-2">
                    <div className="relative w-44 h-44 sm:w-48 sm:h-48">
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        {/* Background track circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke="#f1f5f9"
                          strokeWidth="10"
                        />
                        {/* UR */}
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke="#1B6EB5"
                          strokeWidth="10"
                          strokeDasharray="88.67 226.195"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          className="transition-all duration-300 cursor-pointer"
                          style={{
                            opacity: activeVacancyCat && activeVacancyCat !== 'UR' ? 0.35 : 1,
                            strokeWidth: activeVacancyCat === 'UR' ? 13 : 10,
                          }}
                          onMouseEnter={() => setActiveVacancyCat('UR')}
                          onMouseLeave={() => setActiveVacancyCat(null)}
                        />
                        {/* OBC */}
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke="#FBBF24"
                          strokeWidth="10"
                          strokeDasharray="58.81 226.195"
                          strokeDashoffset="-88.67"
                          className="transition-all duration-300 cursor-pointer"
                          style={{
                            opacity: activeVacancyCat && activeVacancyCat !== 'OBC' ? 0.35 : 1,
                            strokeWidth: activeVacancyCat === 'OBC' ? 13 : 10,
                          }}
                          onMouseEnter={() => setActiveVacancyCat('OBC')}
                          onMouseLeave={() => setActiveVacancyCat(null)}
                        />
                        {/* SC */}
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke="#10B981"
                          strokeWidth="10"
                          strokeDasharray="35.29 226.195"
                          strokeDashoffset="-147.48"
                          className="transition-all duration-300 cursor-pointer"
                          style={{
                            opacity: activeVacancyCat && activeVacancyCat !== 'SC' ? 0.35 : 1,
                            strokeWidth: activeVacancyCat === 'SC' ? 13 : 10,
                          }}
                          onMouseEnter={() => setActiveVacancyCat('SC')}
                          onMouseLeave={() => setActiveVacancyCat(null)}
                        />
                        {/* ST */}
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke="#6366F1"
                          strokeWidth="10"
                          strokeDasharray="21.71 226.195"
                          strokeDashoffset="-182.77"
                          className="transition-all duration-300 cursor-pointer"
                          style={{
                            opacity: activeVacancyCat && activeVacancyCat !== 'ST' ? 0.35 : 1,
                            strokeWidth: activeVacancyCat === 'ST' ? 13 : 10,
                          }}
                          onMouseEnter={() => setActiveVacancyCat('ST')}
                          onMouseLeave={() => setActiveVacancyCat(null)}
                        />
                        {/* EWS */}
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="transparent"
                          stroke="#EC4899"
                          strokeWidth="10"
                          strokeDasharray="21.71 226.195"
                          strokeDashoffset="-204.48"
                          strokeLinecap="round"
                          className="transition-all duration-300 cursor-pointer"
                          style={{
                            opacity: activeVacancyCat && activeVacancyCat !== 'EWS' ? 0.35 : 1,
                            strokeWidth: activeVacancyCat === 'EWS' ? 13 : 10,
                          }}
                          onMouseEnter={() => setActiveVacancyCat('EWS')}
                          onMouseLeave={() => setActiveVacancyCat(null)}
                        />
                      </svg>
                      {/* Center Label */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                        <span className={`text-xl sm:text-2xl font-black leading-none transition-colors duration-200 ${
                          activeVacancyCat === 'UR' ? 'text-[#1B6EB5]' :
                          activeVacancyCat === 'OBC' ? 'text-[#D97706]' :
                          activeVacancyCat === 'SC' ? 'text-[#10B981]' :
                          activeVacancyCat === 'ST' ? 'text-[#6366F1]' :
                          activeVacancyCat === 'EWS' ? 'text-[#EC4899]' : 'text-slate-905'
                        }`}>
                          {activeVacancyCat === 'UR' ? '588' :
                           activeVacancyCat === 'OBC' ? '390' :
                           activeVacancyCat === 'SC' ? '234' :
                           activeVacancyCat === 'ST' ? '144' :
                           activeVacancyCat === 'EWS' ? '144' : '1,500'}
                        </span>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1 transition-all duration-200">
                          {activeVacancyCat ? `${activeVacancyCat} Seats` : 'Total Seats'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Total Stats Footer Strip */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-2">
                  <div className="flex gap-4">
                    <div className="text-xs sm:text-sm">
                      <span className="text-slate-500 font-semibold">Total Regular:</span> <span className="font-extrabold text-slate-800">1,446</span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="text-slate-500 font-semibold">Total Backlog:</span> <span className="font-extrabold text-slate-800">54</span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm px-3 py-1.5 bg-blue-50 text-[#1B6EB5] rounded-xl font-black shrink-0">
                    Total Vacancies: 1,500 Seats
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION F: ELIGIBILITY CRITERIA ── */}
            <section id="eligibility" className="scroll-mt-20 space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Briefcase size={20} className="text-[#1B6EB5]" />
                Eligibility Criteria (as per Notification)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                {/* Education card */}
                <div className="bg-gradient-to-br from-blue-50/50 to-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-3 relative overflow-hidden group">
                  <div className="absolute right-4 top-4 text-blue-100/70 group-hover:text-blue-200/50 transition-colors pointer-events-none">
                    <BookOpen size={72} />
                  </div>
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-wider rounded-md">Education</span>
                  <h4 className="font-extrabold text-slate-850 text-base sm:text-lg">Graduation in Any Stream</h4>
                  <p className="text-slate-655 text-sm leading-relaxed">
                    Must hold a bachelor's degree. <span className="bg-amber-100 font-semibold px-1 rounded text-slate-900">Final-year students can apply provisionally</span>, provided graduation is completed by <strong>30 September 2026</strong>.
                  </p>
                </div>

                {/* Age limit card */}
                <div className="bg-gradient-to-br from-amber-50/40 to-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-3 relative overflow-hidden group">
                  <div className="absolute right-4 top-4 text-amber-100/70 group-hover:text-amber-200/50 transition-colors pointer-events-none">
                    <Clock size={72} />
                  </div>
                  <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-wider rounded-md">Age Limits</span>
                  <h4 className="font-extrabold text-slate-850 text-base sm:text-lg">21 to 30 Years</h4>
                  <p className="text-slate-655 text-sm leading-relaxed">
                    Candidates must be born between <strong>2 April 1996</strong> and <strong>1 April 2005</strong> (both dates inclusive). Standard government relaxations apply for reserved groups.
                  </p>
                </div>
              </div>

              {/* Age relaxation section */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-4 font-sans">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-[#1B6EB5]" />
                  <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">Permissible Age Relaxation</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">SC / ST</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg">+5 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">OBC (NCL)</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg">+3 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">Ex-Servicemen</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg">+5 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">PwBD (SC / ST)</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg">+15 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">PwBD (OBC)</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg">+13 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <span className="text-xs font-bold text-slate-700">PwBD (Gen / EWS)</span>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg">+10 Years</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/sbi-po/eligibility" className="font-extrabold text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-1 text-sm">
                  Full detailed eligibility breakdown <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* ── SECTION G: APPLICATION FEE ── */}
            <section id="fee" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <DollarSign size={20} className="text-[#1B6EB5]" />
                Application Fee
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 bg-white rounded-2xl p-5 shadow-xs flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider">General / EWS / OBC</h4>
                    <p className="text-slate-800 text-sm font-semibold mt-1">Includes intimation charges</p>
                  </div>
                  <div className="text-2xl font-black text-[#1B6EB5]">₹750</div>
                </div>

                <div className="border border-slate-200 bg-white rounded-2xl p-5 shadow-xs flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider">SC / ST / PwBD</h4>
                    <p className="text-slate-800 text-sm font-semibold mt-1">Intimation charges waived</p>
                  </div>
                  <div className="text-2xl font-black text-emerald-600">Nil</div>
                </div>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed mt-2 pl-1 font-sans">
                Note: The application fee is strictly non-refundable and must be paid online via debit/credit cards, internet banking, or UPI portals during form submission.
              </p>
            </section>

            {/* ── SECTION H: HOW TO APPLY ── */}
            <section id="how-to-apply" className="scroll-mt-20 space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileCheck size={20} className="text-[#1B6EB5]" />
                How to Apply for SBI PO 2026
              </h2>

              {/* Callout box warning that application window is closed */}
              <div className="p-5 border-l-4 border-amber-500 bg-amber-50/50 rounded-r-2xl space-y-2 font-sans">
                <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm uppercase tracking-wider">
                  <Lock size={16} /> Application Window Closed
                </div>
                <p className="text-amber-900/80 text-xs sm:text-sm leading-relaxed">
                  The application window for the SBI PO 2026 cycle officially closed on 8 July 2026. The steps outlined below are preserved for historical reference and to help candidates prepare for the upcoming SBI PO 2027 recruitment drive.
                </p>
              </div>

              {/* Connected Step Cards (Timeline layout) */}
              <div className="relative pl-6 sm:pl-8 border-l border-slate-200 space-y-5 ml-3.5 sm:ml-4 font-sans">

                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">1</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Visit the official portal <a href="https://sbi.bank.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-extrabold">sbi.bank.in</a> and navigate to <span className="font-extrabold text-slate-800">Careers &rarr; Current Openings</span>.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">2</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Locate the recruitment link matching <strong className="text-slate-850 font-black">Advt No. CRPD/PO/2026-27/09</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">3</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Open and read the full official notification PDF carefully before initiating your application.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">4</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Click <strong className="text-slate-800">"Apply Online"</strong> and register using a valid email ID and mobile number to generate your login credentials.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">5</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Fill out the application form with personal details, graduation details, and exam-centre preferences.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">6</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Upload a fresh photograph, signature, left thumb impression, handwritten declaration, and complete the live photo capture.
                    </p>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">7</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Pay the application fee of <strong className="text-slate-800">₹750 online</strong> (not applicable for SC/ST/PwBD) and click submit.
                    </p>
                  </div>
                </div>

                {/* Step 8 */}
                <div className="relative">
                  <span className="absolute -left-[37px] sm:-left-[41px] top-0 bg-slate-900 text-white font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-xs">8</span>
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5]/50 transition-colors">
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                      Download and print the final confirmation page for your records and document verification phases.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* ── SECTION I: SELECTION PROCESS ── */}
            <section id="selection-process" className="scroll-mt-20 space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <CheckCircle size={20} className="text-[#1B6EB5]" />
                Selection Process (Brief)
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
                {/* Phase 1 */}
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 rounded-2xl shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#1B6EB5]/50 transition-colors">
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-wider rounded-md">Phase I</span>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono">Step 01</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-base">Preliminary Exam</h4>
                      <p className="text-[11px] font-bold text-amber-600">100 Marks • Qualifying Only</p>
                    </div>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      Online objective test covering English, Quantitative Aptitude, and Reasoning. Used to screen candidates for the Mains.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    Objective format • 3 sections
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 rounded-2xl shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#1B6EB5]/50 transition-colors">
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-0.5 bg-[#1B6EB5]/10 text-[#1B6EB5] text-[10px] font-black uppercase tracking-wider rounded-md">Phase II</span>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono">Step 02</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-base">Main Exam</h4>
                      <p className="text-[11px] font-bold text-[#1B6EB5]">225 Marks • Merit Counted</p>
                    </div>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      Objective test (200 marks) plus descriptive test (25 marks) testing English grammar and essay/letter writing skills.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B6EB5]" />
                    Determines cutoff for Phase III
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-gradient-to-br from-[#1B6EB5]/5 to-white border border-[#1B6EB5]/25 p-6 rounded-2xl shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#1B6EB5]/50 transition-colors">
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider rounded-md font-sans">Phase III</span>
                      <span className="text-[10px] text-emerald-600 font-extrabold uppercase font-mono">Final Step</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-base">GE &amp; Interview</h4>
                      <p className="text-[11px] font-bold text-emerald-600">50 Marks • Final Selection</p>
                    </div>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      Psychometric assessment evaluation, followed by Group Exercises (20 marks) and personal Interview (30 marks).
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#1B6EB5]/10 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Decides final recommendation merit
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold pt-2">
                <Link href="/sbi-po/exam-pattern" className="text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-0.5">
                  Detailed exam pattern &amp; marking scheme <ArrowRight size={14} />
                </Link>
                <Link href="/sbi-po/syllabus" className="text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-0.5">
                  Full syllabus <ArrowRight size={14} />
                </Link>
                <a href="https://app.prepgrind.com/signup/sbi-po" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline no-underline inline-flex items-center gap-0.5">
                  Practice with SBI PO Mock Tests <ArrowRight size={14} />
                </a>
              </div>
            </section>

            {/* ── SECTION J: LATEST UPDATES TIMELINE ── */}
            <section id="live-updates" className="scroll-mt-20">
              <div className="bg-[#091024] border border-slate-800/90 p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-950/20 space-y-4">
                <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <h2 className="text-lg sm:text-xl font-black text-white font-display flex items-center gap-2">
                    <Clock size={18} className="text-[#FBBF24]" />
                    Latest Notification Updates (Live Log)
                  </h2>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 font-extrabold text-[8px] uppercase tracking-wider animate-pulse font-sans">
                    <span className="w-1 h-1 rounded-full bg-rose-500" />
                    Live News
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-3 font-sans">
                  {/* News Card 1 */}
                  <div className="md:col-span-2 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3 rounded-xl transition-all flex flex-col justify-between gap-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[8px] font-black uppercase tracking-wider">Exam Dates</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">24 July</span>
                      </div>
                      <h4 className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Prelims confirmed: August 1 &amp; 2</h4>
                    </div>
                  </div>

                  {/* News Card 2 */}
                  <div className="md:col-span-2 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3 rounded-xl transition-all flex flex-col justify-between gap-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[8px] font-black uppercase tracking-wider">Admit Card</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">22 July</span>
                      </div>
                      <h4 className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Prelims Admit Card released</h4>
                    </div>
                  </div>

                  {/* News Card 3 */}
                  <div className="md:col-span-2 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3 rounded-xl transition-all flex flex-col justify-between gap-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/25 text-[8px] font-black uppercase tracking-wider">Official Notice</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">18 July</span>
                      </div>
                      <h4 className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Credit Score (CIBIL) clause removed</h4>
                    </div>
                  </div>

                  {/* News Card 4 */}
                  <div className="md:col-span-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3 rounded-xl transition-all flex flex-col justify-between gap-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 text-[8px] font-black uppercase tracking-wider">Portal Closed</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">8 July</span>
                      </div>
                      <h4 className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Registration closed: 12.1 Lakh apply</h4>
                    </div>
                  </div>

                  {/* News Card 5 */}
                  <div className="md:col-span-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3 rounded-xl transition-all flex flex-col justify-between gap-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 text-[8px] font-black uppercase tracking-wider">Released</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">18 June</span>
                      </div>
                      <h4 className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Official PDF released (1,500 posts)</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FAQS SECTION ── */}
            <section id="faqs" className="py-6 scroll-mt-20 border-t border-slate-200 font-sans">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-855 mb-4 font-display border-b border-slate-100 pb-3">
                SBI PO 2026 — Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  {
                    q: "When was the SBI PO Notification 2026 released?",
                    a: "SBI released the PO Notification 2026 on 18 June 2026 under Advertisement No. CRPD/PO/2026-27/09."
                  },
                  {
                    q: "How many vacancies are there in SBI PO Notification 2026?",
                    a: "SBI PO Notification 2026 announced 1,500 vacancies — 1,446 regular and 54 backlog posts."
                  },
                  {
                    q: "What is the SBI PO Notification 2026 advertisement number?",
                    a: "The official advertisement number is CRPD/PO/2026-27/09."
                  },
                  {
                    q: "What was the last date to apply for SBI PO 2026?",
                    a: "The online application window closed on 8 July 2026."
                  },
                  {
                    q: "What is the age limit in SBI PO Notification 2026?",
                    a: "Candidates must be between 21 and 30 years of age as on 1 April 2026."
                  },
                  {
                    q: "Is the CIBIL/credit score clause applicable in SBI PO 2026?",
                    a: "No — SBI removed the CIBIL clause from the official notification with immediate effect in July 2026."
                  },
                  {
                    q: "What is the application fee for SBI PO 2026?",
                    a: "₹750 for General/EWS/OBC candidates; no fee for SC/ST/PwBD candidates."
                  },
                  {
                    q: "Where can I download the SBI PO Notification 2026 PDF?",
                    a: "The official notification PDF is available at sbi.bank.in under Careers > Current Openings, and via the direct link on this page."
                  },
                  {
                    q: "How many applications did SBI receive for PO 2026?",
                    a: "SBI received 12,14,076 applications for the 2026 PO cycle, almost double the ~6 lakh received the previous year."
                  },
                  {
                    q: "What is the selection process under SBI PO Notification 2026?",
                    a: "Selection has three stages: Preliminary Exam, Main Exam, and Phase III (Psychometric Test, Group Exercise & Interview)."
                  }
                ].map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-blue-200 bg-slate-50/50' : 'bg-white'
                        }`}
                    >
                      <button
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-855 text-sm sm:text-base focus:outline-none"
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={16}
                          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-sm sm:text-base text-slate-650 leading-relaxed border-t border-slate-100 pt-3 font-normal">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* KEEP EDITORIAL SECTION EXACTLY AS CURRENTLY IS AT THE BOTTOM */}
            <ExamAuthorSection examId="sbi-po" />
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 space-y-4 hidden lg:block">
            <QuickNavigation exam={exam} activeSlug="notification" />

            {/* Premium Mock Test CTA Banner */}
            <div className="bg-gradient-to-br from-[#030712] to-[#091024] border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white font-sans mb-16">
              <div className="relative z-10">
                <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
                <h4 className="font-bold text-sm mb-1 font-display">Ready to Crack SBI PO 2026?</h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Join 50k+ banking aspirants practicing with PrepBanker mocks.
                </p>
                <a
                  href="https://app.prepgrind.com/signup/sbi-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5"
                >
                  Start Practice Mocks Free →
                </a>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />
            </div>
          </aside>
        </div>
      </div>

      {/* PDF VIEWER MODAL */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xs flex items-start justify-center z-[9999] p-4 pt-24 animate-fade-in font-sans">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col h-[calc(100vh-140px)] overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="text-[#FBBF24] shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">SBI PO Notification 2026 PDF</h3>
                  <p className="text-[10px] text-white/60">Advt No. CRPD/PO/2026-27/09 (Official)</p>
                </div>
              </div>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="text-white/60 hover:text-white font-extrabold text-sm p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Actions Panel */}
            <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-xs font-sans">
              <span className="text-slate-500 font-semibold">Source: State Bank of India</span>
            </div>

            {/* Modal Iframe/Viewer Container */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                src="https://docs.google.com/viewer?url=https://sbi.bank.in/csfile/18062026_1_Detailed_Adv.2026.pdf?t=1781759726353&embedded=true"
                className="w-full h-full border-none animate-fade-in"
                title="SBI PO Notification 2026 PDF Viewer"
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

                  <h4 className="font-extrabold text-white text-sm sm:text-base">Loading Official Notification Document...</h4>
                  <p className="text-xs text-white/50 mt-1 max-w-xs leading-normal">
                    Fetching PDF from sbi.bank.in servers. This may take a few seconds depending on your connection.
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center -z-10">
                <AlertCircle className="text-slate-400 mb-2" size={32} />
                <h4 className="font-extrabold text-slate-800">Loading Official Notification Document...</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  If the document does not display within a few seconds, <a href="https://sbi.bank.in/csfile/18062026_1_Detailed_Adv.2026.pdf?t=1781759726353" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">click here to download the PDF directly</a>.
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
