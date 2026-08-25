// PATH: components/sections/exams/SBIPOImportantDatesPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Download,
  Info,
  History,
  HelpCircle,
  Trophy,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOImportantDatesPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const timelineEvents = [
    { event: 'Notification Release', date: '18 June 2026', status: 'completed', label: 'Completed' },
    { event: 'Online Application Start', date: '18 June 2026', status: 'completed', label: 'Completed' },
    { event: 'Last Date to Apply Online', date: '8 July 2026', status: 'completed', label: 'Completed' },
    { event: 'Last Date to Pay Fee', date: '8 July 2026', status: 'completed', label: 'Completed' },
    { event: 'Pre-Exam Training Material', date: '17 July 2026', status: 'completed', label: 'Completed' },
    { event: 'Admit Card for Prelims', date: '22 July 2026', status: 'completed', label: 'Completed' },
    { event: 'Prelims Exam', date: '1 & 2 August 2026', status: 'upcoming', label: 'Upcoming' },
    { event: 'Prelims Result', date: 'August/September 2026', status: 'expected', label: 'Expected' },
    { event: 'Admit Card for Mains', date: 'August/September 2026', status: 'expected', label: 'Expected' },
    { event: 'Mains Exam', date: 'September 2026', status: 'expected', label: 'Expected' },
    { event: 'Mains Result', date: 'September/October 2026', status: 'expected', label: 'Expected' },
    { event: 'Interview Call Letter', date: 'September/October 2026', status: 'expected', label: 'Expected' },
    { event: 'Psychometric Test, Group Exercise & Interview', date: 'October/November 2026', status: 'expected', label: 'Expected' },
    { event: 'Final Result', date: 'November/December 2026', status: 'expected', label: 'Expected' }
  ];

  const updateLogs = [
    { date: '22 July 2026', text: 'SBI PO Prelims Admit Card released as scheduled, confirming the 1 & 2 August exam dates.' },
    { date: '17 July 2026', text: 'Pre-Exam Training material made available for eligible SC/ST/Minority category candidates.' },
    { date: '8 July 2026', text: 'Online application window closed on schedule.' },
    { date: '18 June 2026', text: 'SBI PO Notification 2026 released, opening the application window the same day.' }
  ];

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
        {/* Decorative designs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-10 bg-amber-500 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 bg-blue-500 blur-3xl" />
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
            <span className="text-white/80">Important Dates</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            {/* Left Column: Headlines */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide uppercase">
                Prelims Exam in Days
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Important Dates 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Complete Recruitment Timeline — Notification to Final Result
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Every official date in the SBI PO 2026 cycle, tracked and updated as SBI confirms each stage. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline"
                  >
                    Attempt Free SBI PO Mock Test
                  </a>
                  <Link
                    href="/sbi-po/admit-card"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    Check Admit Card
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span>New here? Start with the official documentation:</span>
                  <Link href="/sbi-po/notification" className="font-bold text-[#FBBF24] hover:underline no-underline inline-flex items-center gap-0.5">
                    New here? Start with Notification <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Official Schedule
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Updated Daily
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-emerald-400" />
                  Status-Tagged Timeline
                </span>
              </div>
            </div>

            {/* Right Column: Key Milestone Stats */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Notification Out</div>
                <div className="text-base sm:text-lg font-black text-white">18 Jun 2026</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Admit Card Released</div>
                <div className="text-base sm:text-lg font-black text-white">22 Jul 2026</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Prelims Exam</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">1 & 2 Aug 2026</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Final Result (Exp.)</div>
                <div className="text-base sm:text-lg font-black text-white">Dec 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Left Column: Core Sections */}
          <main className="space-y-10">

            {/* ── SECTION A: QUICK ANSWER BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold">
                The SBI PO 2026 recruitment cycle began with the Notification release on 18 June 2026, followed by online applications from 18 June to 8 July 2026. The Admit Card was released on 22 July 2026, and the Prelims exam is scheduled for 1 and 2 August 2026. Candidates who qualify Prelims will appear for the Mains exam in September 2026, followed by the Psychometric Test, Group Exercise, and Interview in October/November 2026, with the Final Result expected in November/December 2026.
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
                    { id: 'timeline-tracker', text: 'Official Recruitment Timeline' },
                    { id: 'stage-notes', text: 'Stage-by-Stage Reference' },
                    { id: 'why-tracking-matters', text: 'Why Tracking Dates Matters' },
                    { id: 'how-to-check', text: 'How to Check Official Dates' },
                    { id: 'live-logs', text: 'Live Recruitment Update Log' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-650 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
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

            {/* ── SECTION B: TIMELINE TRACKER ── */}
            <section id="timeline-tracker" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Calendar size={20} className="text-[#1B6EB5]" />
                SBI PO 2026 Complete Timeline
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                {/* Standard Grid Table */}
                <div className="overflow-x-auto max-h-[460px] overflow-y-auto border border-slate-200 rounded-2xl bg-slate-50/20 relative">
                  <table className="w-full text-left text-sm border-collapse min-w-[450px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider sticky top-0 z-10">
                        <th className="px-4 py-3 bg-slate-900 sticky top-0">Recruitment Event</th>
                        <th className="px-4 py-3 bg-slate-900 sticky top-0">Scheduled Date</th>
                        <th className="px-4 py-3 bg-slate-900 sticky top-0 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-semibold text-slate-655">
                      {timelineEvents.map((evt, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 font-bold">{evt.event}</td>
                          <td className="px-4 py-3 text-xs">{evt.date}</td>
                          <td className="px-4 py-3 text-right">
                            <span className={`inline-block px-2 py-0.5 rounded-md text-[9px] font-black ${
                              evt.status === 'completed'
                                ? 'bg-emerald-100 text-emerald-700'
                                : evt.status === 'upcoming'
                                ? 'bg-amber-100 text-[#F59E0B]'
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {evt.label}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-slate-450 font-bold leading-normal border-t border-slate-100 pt-3 m-0">
                  * This timeline is updated the moment SBI confirms or revises any recruitment date. Bookmark this page rather than searching again closer to each stage.
                </p>
              </div>
            </section>

            {/* ── SECTION C: STAGE QUICK NOTES ── */}
            <section id="stage-notes" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Info size={20} className="text-[#1B6EB5]" />
                Stage-by-Stage Reference Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                {[
                  { title: 'Notification & Registration', details: 'Released under Advt No. CRPD/PO/2026-27/09.', anchor: 'Full Notification Details', link: '/sbi-po/notification' },
                  { title: 'Admit Card Download', details: 'Download via Registration Number + Password/DOB.', anchor: 'Admit Card & Download Steps', link: '/sbi-po/admit-card' },
                  { title: 'Phase I: Preliminary Exam', details: 'Objective paper, qualifying only, covers 3 sections.', anchor: 'Exam Pattern', link: '/sbi-po/exam-pattern' },
                  { title: 'Phase II: Main Exam', details: 'Objective + Descriptive papers, merit-counting.', anchor: 'Syllabus', link: '/sbi-po/syllabus' },
                  { title: 'Phase III: GD & Interview', details: 'Final screening stage before merit list publication.', anchor: 'Selection Process', link: '/sbi-po/selection-process' },
                  { title: 'Result Announcements', details: 'Category-wise cut-offs determine qualification at each stage.', anchor: 'Cut Off', link: '/sbi-po/cut-off' }
                ].map((stage, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2.5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="block font-black text-slate-900 text-sm sm:text-base">{stage.title}</span>
                      <span className="block text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{stage.details}</span>
                    </div>
                    <Link href={stage.link} className="text-xs font-extrabold text-[#1B6EB5] hover:underline flex items-center gap-0.5 no-underline pt-1 self-start">
                      {stage.anchor} <ChevronRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION D: WHY TRACKING MATTERS ── */}
            <section id="why-tracking-matters" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Clock size={20} className="text-[#1B6EB5]" />
                Why Tracking These Dates Matters
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                {[
                  { title: 'Study plan alignment', text: 'knowing exactly how many days remain until Prelims lets you pace your syllabus coverage realistically rather than guessing.' },
                  { title: 'Avoiding last-minute stress', text: 'dates for admit card release and gate-closing times are fixed; centres and travel bookings fill up fast closer to the exam.' },
                  { title: 'Catching every result window', text: 'Prelims and Mains results are typically live for a limited period on the portal; missing the announcement window can delay your awareness of next steps.' },
                  { title: 'Interview & document prep lead time', text: 'the gap between Mains result and Interview call letter is usually short; candidates who track dates start document prep early instead of scrambling.' }
                ].map((point, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 rounded-2xl bg-white space-y-1.5 shadow-2xs hover:border-slate-350 transition-all flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-150 flex items-center justify-center font-extrabold text-[#1B6EB5] text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block font-extrabold text-slate-800 text-sm">{point.title}</span>
                      <span className="block text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{point.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION E: HOW TO CHECK DATES (Numbered list) ── */}
            <section id="how-to-check" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <ExternalLink size={20} className="text-[#1B6EB5]" />
                How to Check the Latest SBI PO Exam Dates
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { step: '1', text: 'Visit the official SBI Careers website' },
                    { step: '2', text: 'Open the current SBI PO Recruitment 2026 notification or recruitment page' },
                    { step: '3', text: 'Go to the "Current Openings" or "SBI PO Notification 2026" section' },
                    { step: '4', text: 'Check the Recruitment Schedule or Important Dates table' },
                    { step: '5', text: 'Note down the confirmed or tentative date for the stage you\'re tracking (Prelims, Mains, Interview, etc.)' },
                    { step: '6', text: 'Cross-check against this page — updated as soon as SBI confirms or revises any date' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex gap-3 items-center">
                      <span className="w-7 h-7 rounded-lg bg-[#1B6EB5] text-white flex items-center justify-center font-black text-sm shrink-0">
                        {item.step}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-655 font-bold leading-normal">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION F: LIVE UPDATE LOG ( dated update log ) ── */}
            <section id="live-logs" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <History size={20} className="text-[#1B6EB5]" />
                Live Update Log
              </h2>

              <div className="bg-[#0B1329] border border-slate-800 text-white rounded-3xl p-6 shadow-md font-sans space-y-5 relative overflow-hidden">
                <div aria-hidden className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-blue-500 blur-2xl pointer-events-none" />
                <div className="relative pl-6 border-l border-slate-700/80 space-y-5 ml-2 pt-1 pb-1">
                  {updateLogs.map((log, idx) => (
                    <div key={idx} className="relative group">
                      {/* Bullet point */}
                      <span className={`absolute -left-[29px] w-2.5 h-2.5 rounded-full border transition-all mt-1.5 ${
                        idx === 0 
                          ? 'border-emerald-400 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                          : 'border-slate-600 bg-slate-800'
                      }`} />
                      <div className="space-y-0.5">
                        <span className={`block text-xs font-black ${
                          idx === 0 ? 'text-emerald-400' : 'text-slate-405'
                        }`}>{log.date}</span>
                        <p className="text-xs sm:text-sm text-slate-200 font-bold leading-relaxed m-0">{log.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-slate-400 font-bold leading-normal border-t border-slate-800 pt-3 m-0 relative z-10">
                  (Updated continuously as SBI confirms Mains dates, results, and interview schedules.)
                </p>
              </div>
            </section>

            {/* ── FAQS SECTION ── */}
            <section id="faqs" className="py-6 scroll-mt-20 border-t border-slate-200 font-sans">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-display border-b border-slate-100 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  { q: 'What is the SBI PO Prelims exam date for 2026?', a: 'The SBI PO Prelims exam is scheduled for 1 and 2 August 2026.' },
                  { q: 'When was the SBI PO 2026 notification released?', a: 'The SBI PO 2026 notification was released on 18 June 2026.' },
                  { q: 'When was the SBI PO admit card released?', a: 'The SBI PO Prelims admit card was released on 22 July 2026.' },
                  { q: 'When is the SBI PO Mains exam 2026 expected?', a: 'The SBI PO Mains exam is expected to be held in September 2026.' },
                  { q: 'When will the SBI PO Prelims result be declared?', a: 'The SBI PO Prelims result is expected in August or September 2026.' },
                  { q: 'When is the SBI PO interview expected to be held?', a: 'The Psychometric Test, Group Exercise, and Interview are expected in October or November 2026.' },
                  { q: 'When will the SBI PO 2026 final result be announced?', a: 'The SBI PO 2026 final result is expected in November or December 2026.' },
                  { q: 'What was the last date to apply for SBI PO 2026?', a: 'The last date to apply online for SBI PO 2026 was 8 July 2026.' },
                  { q: 'How many stages are there in the SBI PO 2026 recruitment timeline?', a: 'There are three main stages: Preliminary Exam, Main Exam, and Phase III covering the Psychometric Test, Group Exercise, and Interview.' },
                  { q: 'Where can I check the latest official SBI PO exam dates?', a: 'The latest dates are published on the official SBI Careers website and updated on this page as soon as SBI confirms them.' }
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
                          className={`text-slate-400 transition-transform duration-300 ${isFaqOpen ? 'transform rotate-180' : ''}`}
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

            {/* KEEP EDITORIAL SECTION EXACTLY AS IS */}
            <ExamAuthorSection examId="sbi-po" />
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-20 space-y-4 hidden lg:block">
            <QuickNavigation exam={exam} activeSlug="important-dates" />

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
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5 no-underline cursor-pointer"
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
