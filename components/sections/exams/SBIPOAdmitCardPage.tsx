// PATH: components/sections/exams/SBIPOAdmitCardPage.tsx
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
  Info
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOAdmitCardPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [openIssueIdx, setOpenIssueIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const toggleIssue = (idx: number) => {
    setOpenIssueIdx(openIssueIdx === idx ? null : idx);
  };

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
        {/* Decorative Grid & Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1B6EB5 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F0B429 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <ChevronRight size={10} />
            <Link href="/exams" className="hover:text-white transition-colors no-underline">Exams</Link>
            <ChevronRight size={10} />
            <Link href="/sbi-po" className="hover:text-white transition-colors no-underline">SBI PO</Link>
            <ChevronRight size={10} />
            <span className="text-white/80">Admit Card</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Admit Card Released
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Admit Card 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/80 leading-normal">
                  Prelims Call Letter for 1,500 PO Vacancies | Exam on 1 & 2 August 2026
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  Released by SBI on 22 July 2026. This page is updated the moment SBI issues any correction, reschedule, or new advisory. <span className="text-emerald-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline w-full sm:w-auto"
                  >
                    <Play size={14} className="fill-slate-900 text-slate-900" />
                    Attempt Free SBI PO Mock Test
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>New here?</span>
                  <Link href="/sbi-po/notification" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    Check Notification & Eligibility <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Trust/Credibility */}
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Official Source Verified
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Updated Daily
                </span>
                <span className="flex items-center gap-1">
                  <FileText size={14} className="text-emerald-400" />
                  Step-by-Step Download Guide
                </span>
              </div>
            </div>

            {/* Right Column: Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Release Date</div>
                <div className="text-sm sm:text-base font-black text-white">22 Jul 2026</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Exam Date</div>
                <div className="text-sm sm:text-base font-black text-[#FBBF24]">1 & 2 Aug 2026</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Shifts/Day</div>
                <div className="text-sm sm:text-base font-black text-white">4 Shifts</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Total Applicants</div>
                <div className="text-sm sm:text-base font-black text-white">12,14,076</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

          {/* Left Column: Content */}
          <main className="space-y-10">

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold">
                SBI released the SBI PO Admit Card 2026 on 22 July 2026 on its official website, sbi.bank.in, for candidates appearing in the Preliminary Examination on 1 and 2 August 2026, held across 4 shifts each day. The admit card — also called the Prelims Call Letter or Hall Ticket — can be downloaded using a Registration Number/Roll Number and Password or Date of Birth. Around 12,14,076 candidates applied for this cycle. No admit card is sent by post or email; a printed copy plus a valid original photo ID is mandatory for exam-hall entry.
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
                  {[
                    { id: 'highlights', text: 'Admit Card Highlights' },
                    { id: 'download-steps', text: 'How to Download' },
                    { id: 'best-time', text: 'Best Time to Download' },
                    { id: 'shift-timings', text: 'Prelims Shift Timings' },
                    { id: 'details-printed', text: 'Details Mentioned on Card' },
                    { id: 'documents-required', text: 'Documents to Carry' },
                    { id: 'dos-donts', text: 'Do\'s and Don\'ts Guidelines' },
                    { id: 'exam-checklist', text: 'Exam Day Checklist' },
                    { id: 'common-issues', text: 'Issues & Fixes Diagnostic' },
                    { id: 'live-updates', text: 'Live News & Advisories Log' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-655 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                          {idx + 1}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── SECTION B: KEY HIGHLIGHTS (UI/UX Grid instead of generic table) ── */}
            <section id="highlights" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#1B6EB5]" />
                SBI PO Admit Card 2026: Key Highlights
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans">
                {[
                  { label: 'Exam Name', value: 'SBI PO Prelims Exam 2026', icon: Trophy, color: 'text-blue-600', bg: 'bg-blue-50/50' },
                  { label: 'Advertisement No.', value: 'CRPD/PO/2026-27/09', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50/50' },
                  { label: 'Conducting Body', value: 'State Bank of India (SBI)', icon: Users, color: 'text-sky-600', bg: 'bg-sky-50/50' },
                  { label: 'Release Date', value: '22 July 2026', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50/50' },
                  { label: 'Admit Card Mode', value: 'Online Only (sbi.bank.in)', icon: Compass, color: 'text-purple-600', bg: 'bg-purple-50/50' },
                  { label: 'Credentials Required', value: 'Reg/Roll No. + Password/DOB', icon: Lock, color: 'text-pink-600', bg: 'bg-pink-50/50' },
                  { label: 'Prelims Exam Date', value: '1 & 2 August 2026', icon: Calendar, color: 'text-amber-600', bg: 'bg-amber-50/50' },
                  { label: 'Shifts Per Day', value: '4 Shifts', icon: Clock, color: 'text-teal-600', bg: 'bg-teal-50/50' },
                  { label: 'Total Applicants', value: '12,14,076', icon: User, color: 'text-rose-600', bg: 'bg-rose-50/50' }
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 border border-slate-200 rounded-2xl shadow-xs ${item.bg} flex items-start gap-3.5 hover:shadow-sm hover:border-slate-300 transition-all`}>
                    <div className={`p-2 rounded-xl bg-white border border-slate-100 ${item.color} shadow-xs`}>
                      <item.icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">{item.label}</span>
                      <span className="block text-sm font-extrabold text-slate-800 leading-tight">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Official Login Portal Screenshot Card */}
            <div className="border border-slate-200 rounded-3xl shadow-xs overflow-hidden bg-white p-4 font-sans space-y-4">
              <span className="block text-[10px] font-black text-slate-450 uppercase tracking-widest px-1">
                Official SBI PO Admit Card Login Portal Interface
              </span>
              <Image
                src="/images/sbi-po-login.png"
                alt="SBI PO Login Portal Screenshot"
                width={2280}
                height={1128}
                className="w-full h-auto rounded-2xl border border-slate-100"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="pt-2 flex justify-center">
                <a
                  href="https://ibpsreg.ibps.in/sbipojun26/oecla_jul26/login.php?appid=37197c13b10b90a86bb3b522106262c9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-md cursor-pointer no-underline"
                >
                  <Download size={16} />
                  Direct Link to Download SBI PO Admit Card 2026
                </a>
              </div>
            </div>

            {/* ── SECTION C: HOW TO DOWNLOAD (Numbered Visual Timeline Steps) ── */}
            <section id="download-steps" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Compass size={20} className="text-[#1B6EB5]" />
                How to Download SBI PO Admit Card 2026
              </h2>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs font-sans relative">
                <div className="absolute left-9 top-10 bottom-10 w-0.5 bg-slate-100 hidden sm:block" />

                <div className="space-y-6">
                  {[
                    { title: 'Visit SBI Careers Portal', text: 'Go to the official State Bank of India portal — sbi.bank.in' },
                    { title: 'Click Careers Link', text: 'Select the Careers section option typically located on the top right homepage.' },
                    { title: 'Open Current Openings', text: 'Click Join SBI, then select the Current Openings options.' },
                    { title: 'Locate PO Recruitment', text: 'Open the listing for Recruitment of Probationary Officers (CRPD/PO/2026-27/09).' },
                    { title: 'Access Call Letter Link', text: 'Select the Call Letter for Prelims Exam link option.' },
                    { title: 'Choose language', text: 'Select your preferred language (English/Hindi) to proceed.' },
                    { title: 'Enter credentials', text: 'Enter your Registration Number/Roll Number and Password/Date of Birth.' },
                    { title: 'Submit Captcha', text: 'Complete the captcha verification code correctly and click login/submit.' },
                    { title: 'Download & Print PDF', text: 'Your admit card will display on screen — download and take 2–3 printouts for the exam day and your records.' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 relative group">
                      <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1B6EB5] border border-blue-200/50 flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all z-10">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-1 mt-0.5">
                        <div className="font-extrabold text-slate-805 text-sm sm:text-base leading-snug">{step.title}</div>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION D: BEST TIME TO DOWNLOAD (Orange glow warning advisory block) ── */}
            <section id="best-time" className="scroll-mt-20">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/70 p-6 rounded-2xl shadow-xs font-sans flex flex-col sm:flex-row gap-4 items-start relative overflow-hidden">
                <div className="absolute right-4 bottom-4 text-amber-200/35 pointer-events-none">
                  <Clock size={72} />
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/30 text-amber-600 shadow-xs shrink-0">
                  <Clock size={20} />
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="font-extrabold text-slate-850 text-base sm:text-lg">Best Time to Download Call Letter</div>
                  <p className="text-slate-655 text-sm leading-relaxed">
                    With over 12 lakh candidates trying to access the portal at once, <strong>sbi.bank.in</strong> tends to slow down significantly during daytime hours. Based on candidate reports, the site runs noticeably faster during early morning hours, roughly <strong>5 AM–7 AM IST</strong>. If you hit repeated loading errors during the day, try again early morning rather than refreshing repeatedly — that just adds to server load for everyone.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION E: PRELIMS SHIFT TIMINGS 2026 (Modern layout instead of boring table) ── */}
            <section id="shift-timings" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Clock size={20} className="text-[#1B6EB5]" />
                SBI PO Prelims Shift Timings 2026
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                {[
                  { name: 'Shift 1', reporting: '8:00 AM', closing: '8:30 AM', handwriting: '8:30 AM – 9:00 AM', exam: '9:00 AM – 10:00 AM', color: 'border-l-blue-500 bg-blue-50/10' },
                  { name: 'Shift 2', reporting: '10:30 AM', closing: '11:00 AM', handwriting: '11:00 AM – 11:30 AM', exam: '11:30 AM – 12:30 PM', color: 'border-l-amber-500 bg-amber-50/10' },
                  { name: 'Shift 3', reporting: '1:00 PM', closing: '1:30 PM', handwriting: '1:30 PM – 2:00 PM', exam: '2:00 PM – 3:00 PM', color: 'border-l-emerald-500 bg-emerald-50/10' },
                  { name: 'Shift 4', reporting: '3:30 PM', closing: '4:00 PM', handwriting: '4:00 PM – 4:30 PM', exam: '4:30 PM – 5:30 PM', color: 'border-l-indigo-500 bg-indigo-50/10' }
                ].map((shift, idx) => (
                  <div key={idx} className={`border border-slate-200 border-l-4 p-5 rounded-2xl shadow-xs space-y-3.5 hover:shadow-sm transition-all ${shift.color}`}>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="font-black text-slate-850 text-sm tracking-wide uppercase">{shift.name}</span>
                      <span className="px-2 py-0.5 bg-white border border-slate-200 text-slate-500 text-[10px] font-black rounded-md">{shift.exam}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Reporting</span>
                        <span className="font-extrabold text-slate-700">{shift.reporting}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Gate Closes</span>
                        <span className="font-extrabold text-slate-700">{shift.closing}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Handwriting</span>
                        <span className="font-extrabold text-slate-700">{shift.handwriting}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 font-sans">
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Your exact shift is printed on your individual admit card — this table is for general reference only. The handwriting sample/declaration must be completed within the allotted slot before the exam starts; arriving after gate-closing time means no entry, no exceptions.
                </p>
                <p className="text-xs sm:text-sm text-[#1B6EB5] font-bold">
                  For details on sections, marks structure or syllabus, visit: <Link href="/sbi-po/exam-pattern" className="hover:underline font-bold text-[#1B6EB5] no-underline">SBI PO Exam Pattern</Link> and <Link href="/sbi-po/syllabus" className="hover:underline font-bold text-[#1B6EB5] no-underline">SBI PO Syllabus</Link>.
                </p>
              </div>
            </section>

            {/* ── SECTION F: DETAILS MENTIONED ON ADMIT CARD ── */}
            <section id="details-printed" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileText size={20} className="text-[#1B6EB5]" />
                Details Mentioned on the SBI PO Admit Card
              </h2>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs font-sans space-y-5">
                <p className="text-slate-655 text-sm leading-relaxed">
                  Verify the accuracy of the following print elements on your downloaded copy:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Candidate's Name", "Roll Number", "Registration Number",
                    "Date of Birth", "Gender", "Category & Sub-category",
                    "Photograph of candidate", "Signature of candidate", "Father's Name & Mother's Name",
                    "Exam Date & Shift Slot", "Reporting Time", "Gate Closing Time",
                    "Examination Centre Name", "Centre Address & Venue Address", "Post Applied For",
                    "Important Exam-day Instructions", "Signature space (Candidate)", "Signature space (Invigilator)"
                  ].map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-650">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                      <span className="font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex gap-3 items-start mt-4">
                  <AlertTriangle size={18} className="text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-rose-800 text-xs sm:text-sm font-semibold leading-relaxed">
                    <strong>Critical Warning:</strong> Report any discrepancy in the above printed elements to SBI recruitment helpdesk immediately — before the exam date, not on exam day.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SECTION G: DOCUMENTS REQUIRED (Side-by-Side Panels) ── */}
            <section id="documents-required" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileCheck size={20} className="text-[#1B6EB5]" />
                Documents Required Along With Admit Card
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                {/* Mandatory Documents Panel */}
                <div className="bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-200/70 p-6 rounded-2xl shadow-xs space-y-4 relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-emerald-100 pointer-events-none">
                    <CheckCircle size={56} />
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider rounded-md">Required</span>
                  <div className="font-extrabold text-slate-850 text-base sm:text-lg">Mandatory Documents</div>
                  <ul className="space-y-3 list-none p-0 m-0">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-655 leading-relaxed">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-1" />
                      <span><strong>Printed Copy of Admit Card:</strong> A clean printed copy of your SBI PO Admit Card 2026.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-655 leading-relaxed">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-1" />
                      <span><strong>Valid Original Photo ID:</strong> Bring one valid original identity document (Aadhaar, PAN Card, Passport, Voter ID, or Driving Licence).</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Documents Panel */}
                <div className="bg-gradient-to-br from-blue-50/50 to-white border border-blue-200/70 p-6 rounded-2xl shadow-xs space-y-4 relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-blue-100 pointer-events-none">
                    <FileText size={56} />
                  </div>
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-850 text-[10px] font-black uppercase tracking-wider rounded-md">If Applicable</span>
                  <div className="font-extrabold text-slate-850 text-base sm:text-lg">Additional Checklist</div>
                  <ul className="space-y-3 list-none p-0 m-0">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-655 leading-relaxed">
                      <CheckCircle size={15} className="text-blue-500 shrink-0 mt-1" />
                      <span><strong>Passport Photographs:</strong> Carry 1–2 recent passport-size photographs matching the one on your card.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-655 leading-relaxed">
                      <CheckCircle size={15} className="text-blue-500 shrink-0 mt-1" />
                      <span><strong>PwBD Certificate:</strong> Official disability certificate for PwBD category verification candidates.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION H: DO'S AND DON'TS (Clean Split Grid Panels) ── */}
            <section id="dos-donts" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Info size={20} className="text-[#1B6EB5]" />
                Do&apos;s and Don&apos;ts Guidelines
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                {/* Do List Card */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-4">
                  <div className="font-extrabold text-slate-850 text-base flex items-center gap-2 text-emerald-600 uppercase tracking-wide">
                    <CheckCircle size={18} />
                    Things You Should Do
                  </div>
                  <ul className="space-y-3.5 list-none p-0 m-0 text-xs sm:text-sm text-slate-655">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Verify every detail (name, photo, timing, address) immediately after downloading.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Keep the printed admit card safe, dry, and uncreased until the exam day.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Check the exact location of your exam venue on the map a day in advance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Download only from the official portal <strong>sbi.bank.in</strong> — bookmark it directly.</span>
                    </li>
                  </ul>
                </div>

                {/* Don't List Card */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-4">
                  <div className="font-extrabold text-slate-850 text-base flex items-center gap-2 text-rose-600 uppercase tracking-wide">
                    <XCircle size={18} />
                    Things You Must Avoid
                  </div>
                  <ul className="space-y-3.5 list-none p-0 m-0 text-xs sm:text-sm text-slate-655">
                    <li className="flex items-start gap-2">
                      <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                      <span><strong>Avoid Unofficial Links:</strong> Don&apos;t click admit card download links shared on WhatsApp, Telegram, or unofficial social media. These are common phishing attempts during exam season designed to steal login credentials. Always go directly to sbi.bank.in.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                      <span>Don&apos;t let the photo, barcode, or signature area get smudged, written over, or damaged.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                      <span>Don&apos;t wait until the night before the exam to download the PDF — server traffic peaks closer to dates.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION I: EXAM DAY CHECKLIST ── */}
            <section id="exam-checklist" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <FileText size={20} className="text-[#1B6EB5]" />
                Exam Day Checklist
              </h2>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Reach the centre at least 60 minutes before reporting time',
                    'Carry the printed admit card + original photo ID — no exceptions',
                    'Biometric (fingerprint) verification is conducted at most centres as part of identity checks before entry — arriving early makes this process smoother',
                    'Complete the handwriting sample/declaration within its allotted time slot',
                    'Entry closes strictly at gate-closing time printed on the card',
                    'Electronic devices (phones, smartwatches, Bluetooth devices, calculators) are not allowed inside',
                    'Sit only at the seat allotted to you',
                    'Follow all instructions printed on the admit card and given by invigilators'
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-all text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-xs sm:text-sm text-[#1B6EB5] font-bold">
                  For details on scheduling calendar, view: <Link href="/sbi-po/important-dates" className="hover:underline font-bold text-[#1B6EB5] no-underline">SBI PO Important Dates</Link> and <Link href="/sbi-po/exam-pattern" className="hover:underline font-bold text-[#1B6EB5] no-underline">SBI PO Exam Pattern</Link>.
                </div>
              </div>
            </section>

            {/* ── SECTION J: COMMON ISSUES & FIXES (Accordion format) ── */}
            <section id="common-issues" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <AlertTriangle size={20} className="text-[#1B6EB5]" />
                Common Issues While Downloading & Fixes
              </h2>

              <div className="space-y-2.5 font-sans">
                {[
                  { q: 'Incorrect login details', a: 'Re-check Registration Number and Password/DOB for typos or extra spaces. Double check your format for Dates of Birth (usually DD-MM-YY).' },
                  { q: 'Forgotten password', a: 'Use the "Forgot Password" recovery option link located directly on the official login portal.' },
                  { q: 'Admit card not opening', a: 'Re-download the file. Make sure your browser has PDF viewer compatibility enabled or try another browser (Chrome/Edge).' },
                  { q: 'Website running slow', a: 'Try accessing the download page during early morning (5–7 AM IST) when server traffic is significantly lower.' },
                  { q: 'Details incorrect on card', a: 'Contact SBI recruitment authorities immediately via their official careers portal helpdesk before the exam date.' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                  >
                    <button
                      onClick={() => toggleIssue(idx)}
                      className="w-full px-5 py-4 text-left font-extrabold text-slate-800 flex justify-between items-center text-sm sm:text-base hover:bg-slate-50/50"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B6EB5]" />
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-300 ${openIssueIdx === idx ? 'transform rotate-180' : ''
                          }`}
                      />
                    </button>
                    {openIssueIdx === idx && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION K: LIVE UPDATE LOG ( dated desk feed ) ── */}
            <section id="live-updates" className="scroll-mt-20">
              <div className="bg-[#091024] text-white p-6 rounded-3xl shadow-sm space-y-5 font-sans relative overflow-hidden">
                <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 bg-slate-800/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-extrabold text-lg sm:text-xl font-display text-white flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Latest Admit Card Updates (Live Log)
                  </h3>
                  <span className="px-2 py-0.5 text-[9px] bg-slate-800 border border-slate-700 text-slate-300 font-extrabold rounded uppercase tracking-wider">Feed Active</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                  {/* News Card 1 */}
                  <div className="md:col-span-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl transition-all flex flex-col justify-between gap-2.5">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[8px] font-black uppercase tracking-wider">Entry Check</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">25 July 2026</span>
                      </div>
                      <div className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">SBI biometric entry verified</div>
                      <p className="text-slate-400 text-[11px] leading-normal">Advisory confirms biometric checks at centres; candidates urged to report early.</p>
                    </div>
                  </div>

                  {/* News Card 2 */}
                  <div className="md:col-span-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl transition-all flex flex-col justify-between gap-2.5">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/25 text-[8px] font-black uppercase tracking-wider">Security Warning</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">25 July 2026</span>
                      </div>
                      <div className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Fake links alert on social media</div>
                      <p className="text-slate-400 text-[11px] leading-normal">Candidates warned against fake links circulating on WhatsApp/Telegram.</p>
                    </div>
                  </div>

                  {/* News Card 3 */}
                  <div className="md:col-span-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl transition-all flex flex-col justify-between gap-2.5">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 text-[8px] font-black uppercase tracking-wider">Server Traffic</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">25 July 2026</span>
                      </div>
                      <div className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Optimal morning download window</div>
                      <p className="text-slate-400 text-[11px] leading-normal">Server load is reported lower during early morning hours (5–7 AM IST).</p>
                    </div>
                  </div>

                  {/* News Card 4 */}
                  <div className="md:col-span-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl transition-all flex flex-col justify-between gap-2.5">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 text-[8px] font-black uppercase tracking-wider">Admit Card</span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase font-mono">22 July 2026</span>
                      </div>
                      <div className="font-extrabold text-slate-100 text-xs sm:text-sm leading-snug">Admit Card released online</div>
                      <p className="text-slate-400 text-[11px] leading-normal">SBI PO Prelims Call Letter 2026 has been officially released at sbi.bank.in.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FAQS SECTION ── */}
            <section id="faqs" className="py-6 scroll-mt-20 border-t border-slate-200 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-display border-b border-slate-100 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  { q: 'When was the SBI PO Admit Card 2026 released?', a: 'SBI released the PO Admit Card 2026 on 22 July 2026 at sbi.bank.in.' },
                  { q: 'What are the login credentials to download the SBI PO Admit Card?', a: 'Registration Number/Roll Number along with Password or Date of Birth.' },
                  { q: 'Will SBI send the admit card by post or email?', a: 'No — the SBI PO Admit Card is available only in online mode; it is not dispatched by post or email.' },
                  { q: 'What documents must I carry along with the admit card?', a: 'A printed copy of the admit card and one valid original photo ID such as Aadhaar, PAN, Passport, Voter ID, or Driving Licence.' },
                  { q: 'Is biometric verification done at the SBI PO exam centre?', a: 'Yes — fingerprint biometric verification is conducted at most centres as part of identity checks before entry.' },
                  { q: 'Are admit card links shared on WhatsApp or Telegram safe?', a: 'No — these are commonly fake or phishing links; download the admit card only from the official site, sbi.bank.in.' },
                  { q: 'What is the best time to download the SBI PO Admit Card if the site is slow?', a: 'Early morning hours, roughly 5 AM to 7 AM IST, tend to have lower server traffic and faster downloads.' },
                  { q: 'How many shifts is the SBI PO Prelims exam conducted in?', a: 'The SBI PO Prelims exam is conducted in 4 shifts per day on 1 and 2 August 2026.' },
                  { q: 'What is the handwriting sample on the SBI PO admit card?', a: 'It\'s a short handwritten declaration candidates must complete at the centre within a fixed time slot before the exam begins, as printed on the admit card.' },
                  { q: 'Can I enter the exam centre after the gate closing time?', a: 'No — entry is strictly denied after the gate closing time printed on the admit card.' },
                  { q: 'What if my SBI PO Admit Card shows incorrect details?', a: 'Contact SBI recruitment authorities immediately, before the exam date, to get the error corrected.' },
                  { q: 'Is the SBI PO Admit Card the same as the hall ticket or call letter?', a: 'Yes — Admit Card, Hall Ticket, and Call Letter all refer to the same document issued by SBI for the Prelims exam.' }
                ].map((faq, idx) => {
                  const isFaqOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 text-left font-extrabold text-slate-800 flex justify-between items-center text-sm sm:text-base hover:bg-slate-50/50"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1B6EB5]" />
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform duration-300 ${isFaqOpen ? 'transform rotate-180' : ''
                            }`}
                        />
                      </button>
                      {isFaqOpen && (
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-655 leading-relaxed border-t border-slate-100 pt-3 font-normal">
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
            <QuickNavigation exam={exam} activeSlug="admit-card" />

            {/* Premium Mock Test CTA Banner */}
            <div className="bg-gradient-to-br from-[#030712] to-[#091024] border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white font-sans mb-16">
              <div className="relative z-10">
                <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
                <div className="font-bold text-sm mb-1 font-display">Ready to Crack SBI PO 2026?</div>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Join 50k+ banking aspirants practicing with PrepBanker mocks.
                </p>
                <a
                  href="https://app.prepgrind.com/signup/sbi-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5 no-underline"
                >
                  Start Practice Mocks Free →
                </a>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
