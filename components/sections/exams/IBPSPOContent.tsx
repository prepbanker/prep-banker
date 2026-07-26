// PATH: components/sections/exams/IBPSPOContent.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  BookOpen,
  X,
  Zap,
  Award,
  HelpCircle,
  FileText,
  Calendar,
  CheckCircle2,
  Scale,
  Briefcase,
  TrendingUp,
  Target,
  Trophy,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/shared/Breadcrumb';
import './exam.css';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'important-dates', label: 'Important Dates' },
  { id: 'eligibility', label: 'Eligibility Criteria' },
  { id: 'exam-pattern', label: 'Exam Pattern' },
  { id: 'syllabus', label: 'Full Syllabus' },
  { id: 'mock-tests', label: 'Mock Tests' },
  { id: 'sectional-tests', label: 'Sectional Tests' },
  { id: 'cutoffs', label: 'Cut-off Marks' },
  { id: 'salary', label: 'Salary & Career' },
  { id: 'selection-process', label: 'Selection Process' },
  { id: 'comparison', label: 'IBPS PO vs SBI PO' },
  { id: 'strategy', label: 'Preparation Strategy' },
  { id: 'faq', label: 'FAQs' },
];

export default function IBPSPOContent() {
  const [activeSection, setActiveSection] = useState('overview');
  const [syllabusTab, setSyllabusTab] = useState<'prelims' | 'mains'>('prelims');
  const [sectionalTab, setSectionalTab] = useState<'english' | 'quant' | 'reasoning'>('english');
  const isScrollingRef = useRef(false);

  // IntersectionObserver to sync scroll with sidebar active highlight
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -70% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      isScrollingRef.current = true;
      el.scrollIntoView({ behavior: 'smooth' });
      // Reset scroll lock after transition finishes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans">
      <Header />

      {/* Hero Section (#hero) */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white pt-16 pb-9"
      >
        {/* ── Decorative background blobs ── */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {/* Top-left blob — blue */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
          />
          {/* Top-right gold blob */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10 text-left">
          {/* ── Breadcrumb ── */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Exams', href: '/exams' },
                { label: 'IBPS PO' },
              ]}
            />
          </div>

          {/* Status badge */}
          <span className="inline-flex items-center gap-1 bg-[#1B6EB5]/30 border border-[#1B6EB5]/50 px-3 py-1 rounded-full text-xs font-bold text-[var(--color-blue-light)] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-blue-light)] animate-pulse" />
            Recruitment Guide 2026
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight max-w-4xl mb-4 tracking-tight">
            IBPS PO 2026 — Free Mock Tests, Syllabus, Pattern & Complete Preparation Guide
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
            IBPS PO (Probationary Officer) is India's largest banking recruitment exam,
            offering 3,500+ vacancies across 11 public sector banks in a single cycle.
          </p>

          {/* 4 Stat Pills */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mb-8">
            <li className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl backdrop-blur-sm">
              <span className="block text-[var(--color-gold-bright)] text-lg md:text-xl font-black">3,500+</span>
              <span className="text-xs text-white/60">Expected Vacancies</span>
            </li>
            <li className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl backdrop-blur-sm">
              <span className="block text-[var(--color-gold-bright)] text-lg md:text-xl font-black">11 Banks</span>
              <span className="text-xs text-white/60">PSU Allotment</span>
            </li>
            <li className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl backdrop-blur-sm">
              <span className="block text-[var(--color-gold-bright)] text-lg md:text-xl font-black">₹52,000+</span>
              <span className="text-xs text-white/60">Starting Salary</span>
            </li>
            <li className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl backdrop-blur-sm">
              <span className="block text-[var(--color-gold-bright)] text-lg md:text-xl font-black">~25 Lakh</span>
              <span className="text-xs text-white/60">Total Applicants</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 justify-start items-start">
            <a
              href="https://app.prepgrind.com/signup/ibps-po"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 rounded-lg bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs sm:text-sm tracking-wide text-center transition-all shadow-[0_0_15px_rgba(240,180,41,0.6)] hover:-translate-y-0.5"
            >
              Start Free IBPS PO Mock Test →
            </a>
          </div>
        </div>
      </section>

      {/* 2-Column Responsive Container */}
      <div className="container-custom pt-10 pb-24 flex flex-col-reverse lg:flex-row gap-8 items-start">

        {/* Left Side: Main Content (70% width) - Rendered first in DOM for normal desktop row layout */}
        <main className="w-full lg:w-[70%] space-y-0">

          {/* SECTION: OVERVIEW (#overview) */}
          <section id="overview" className="py-10">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-6 font-display border-b border-slate-100 pb-2">
              IBPS PO 2026 at a Glance
            </h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left text-xs border-collapse">
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-slate-600 w-1/3">Full Name</td>
                    <td className="px-4 py-3 text-slate-800">Institute of Banking Personnel Selection — Probationary Officer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-600">Conducting Body</td>
                    <td className="px-4 py-3 text-slate-800">Institute of Banking Personnel Selection (IBPS)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-slate-600">Notification</td>
                    <td className="px-4 py-3 text-slate-800">July 2026 (Expected)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-600">Total Vacancies</td>
                    <td className="px-4 py-3 text-slate-800">3,500+ (Expected)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-slate-600">Participating Banks</td>
                    <td className="px-4 py-3 text-slate-800">11 Public Sector Banks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-600">Application Mode</td>
                    <td className="px-4 py-3 text-slate-800">Online — ibps.in</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-slate-600">Exam Mode</td>
                    <td className="px-4 py-3 text-slate-800">Computer Based Test (CBT)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-600">Selection Stages</td>
                    <td className="px-4 py-3 text-slate-800">Prelims → Mains → Interview</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-slate-600">Basic Pay</td>
                    <td className="px-4 py-3 text-slate-800">₹36,000/month</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-600">Gross Salary</td>
                    <td className="px-4 py-3 text-slate-800">₹52,000 – ₹65,000/month</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-bold text-slate-600">Job Location</td>
                    <td className="px-4 py-3 text-slate-800">Pan India</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-600">Official Website</td>
                    <td className="px-4 py-3 text-slate-800">
                      <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] hover:underline">
                        ibps.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Participating Banks</h3>
            <ul className="flex flex-wrap gap-2">
              {[
                'Bank of Baroda', 'Bank of India', 'Bank of Maharashtra', 'Canara Bank',
                'Central Bank of India', 'Indian Bank', 'Indian Overseas Bank',
                'Punjab & Sind Bank', 'Punjab National Bank', 'UCO Bank', 'Union Bank of India'
              ].map((bank) => (
                <li key={bank} className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                  {bank}
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION: IMPORTANT DATES (#important-dates) */}
          <section id="important-dates" className="py-10 border-t border-slate-100">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO 2026 Important Dates & Exam Calendar
            </h2>
            <p className="text-slate-500 text-xs mb-6">
              Track the full recruitment timeline so you don't miss key deadlines.
            </p>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm mb-4">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-3">Event</th>
                    <th className="px-4 py-3">Expected Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">Official Notification Release</td>
                    <td className="px-4 py-3 text-slate-600">July 2026</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-700">Online Application Opens</td>
                    <td className="px-4 py-3 text-slate-600">July 2026</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">Application Deadline</td>
                    <td className="px-4 py-3 text-slate-600">August 2026</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-700">Application Fee Payment Last Date</td>
                    <td className="px-4 py-3 text-slate-600">August 2026</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">Prelims Admit Card Download</td>
                    <td className="px-4 py-3 text-slate-600">September 2026</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-slate-800 flex items-center gap-2">
                      IBPS PO Prelims Exam
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-1.5 py-0.5 rounded uppercase">Milestone</span>
                    </td>
                    <td className="px-4 py-3 text-slate-800 font-bold">October 2026</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">Prelims Result Declaration</td>
                    <td className="px-4 py-3 text-slate-600">November 2026</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-700">Mains Admit Card Download</td>
                    <td className="px-4 py-3 text-slate-600">November 2026</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-slate-800 flex items-center gap-2">
                      IBPS PO Mains Exam
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-1.5 py-0.5 rounded uppercase">Milestone</span>
                    </td>
                    <td className="px-4 py-3 text-slate-800 font-bold">November 2026</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">Mains Result Declaration</td>
                    <td className="px-4 py-3 text-slate-600">December 2026</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-700">Interview Call Letters</td>
                    <td className="px-4 py-3 text-slate-600">January 2027</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="px-4 py-3 font-bold text-slate-800 flex items-center gap-2">
                      Interview Dates
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-1.5 py-0.5 rounded uppercase">Milestone</span>
                    </td>
                    <td className="px-4 py-3 text-slate-800 font-bold">January–February 2027</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">Provisional Allotment</td>
                    <td className="px-4 py-3 text-slate-600">April 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-400 italic">
              * Note: Dates are indicative based on the official IBPS PO 2025 cycle. Always verify on the official website <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] underline">ibps.in</a>.
            </p>
          </section>

          {/* SECTION: ELIGIBILITY (#eligibility) */}
          <section id="eligibility" className="py-10 border-t border-slate-100 space-y-5">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO 2026 Eligibility Criteria
            </h2>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                Educational Qualification
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed pl-3">
                A graduate degree in any discipline from a university recognised by the Government of India.
                Final year students may also apply, provided they produce proof of passing the graduation on or before the document verification date.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                Age Limit (As of 1st July 2026)
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm pl-0 max-w-2xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Category</th>
                      <th className="px-4 py-2">Min Age</th>
                      <th className="px-4 py-2">Max Age</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">General / UR</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">30 years</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">OBC (Non-Creamy Layer)</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">33 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">SC / ST</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">35 years</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">EWS</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">30 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">PwBD (General/EWS)</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">40 years</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">PwBD (OBC)</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">43 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">PwBD (SC/ST)</td>
                      <td className="px-4 py-2.5 text-slate-600">20 years</td>
                      <td className="px-4 py-2.5 text-slate-600">45 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                Number of Attempts
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed pl-3">
                IBPS does not officially cap the number of attempts for the Probationary Officer exam.
                Candidates may apply as long as they meet the age relaxation and basic eligibility criteria.
              </p>
            </div>
          </section>

          {/* SECTION: EXAM PATTERN (#exam-pattern) */}
          <section id="exam-pattern" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO 2026 Exam Pattern — Prelims, Mains & Interview
            </h2>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-bold uppercase">Phase 1</span>
                Prelims Exam Pattern
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm mb-3">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Section</th>
                      <th className="px-4 py-2">Questions</th>
                      <th className="px-4 py-2">Marks</th>
                      <th className="px-4 py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">English Language</td>
                      <td className="px-4 py-2.5">30</td>
                      <td className="px-4 py-2.5">30</td>
                      <td className="px-4 py-2.5">20 minutes</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Quantitative Aptitude</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5">20 minutes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Reasoning Ability</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5">20 minutes</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold text-slate-850">
                      <td className="px-4 py-2.5">Total</td>
                      <td className="px-4 py-2.5">100</td>
                      <td className="px-4 py-2.5">100</td>
                      <td className="px-4 py-2.5">60 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Key points */}
              <ul className="list-disc list-inside text-xs text-slate-500 space-y-1 pl-1">
                <li>Negative marking: 0.25 marks per wrong answer.</li>
                <li>Individual sectional timers — section-switching is strictly not allowed during active time.</li>
                <li>Prelims is qualifying in nature; scores are not counted in the final merit listing.</li>
                <li>Approximately 10–12 times the number of vacancies candidates are shortlisted for the Mains.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs bg-purple-100 text-purple-800 font-bold uppercase">Phase 2</span>
                Mains Exam Pattern (Objective)
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Section</th>
                      <th className="px-4 py-2">Questions</th>
                      <th className="px-4 py-2">Marks</th>
                      <th className="px-4 py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Reasoning & Computer Aptitude</td>
                      <td className="px-4 py-2.5">45</td>
                      <td className="px-4 py-2.5">60</td>
                      <td className="px-4 py-2.5">60 minutes</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">English Language</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5">40</td>
                      <td className="px-4 py-2.5">40 minutes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Data Analysis & Interpretation</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5">60</td>
                      <td className="px-4 py-2.5">45 minutes</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">General/Economy/Banking Awareness</td>
                      <td className="px-4 py-2.5">40</td>
                      <td className="px-4 py-2.5">40</td>
                      <td className="px-4 py-2.5">35 minutes</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold text-slate-850">
                      <td className="px-4 py-2.5">Total</td>
                      <td className="px-4 py-2.5">155</td>
                      <td className="px-4 py-2.5">200</td>
                      <td className="px-4 py-2.5">180 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs bg-purple-100 text-purple-800 font-bold uppercase">Phase 2</span>
                Mains Descriptive Test
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Section</th>
                      <th className="px-4 py-2">Questions</th>
                      <th className="px-4 py-2">Marks</th>
                      <th className="px-4 py-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Essay Writing</td>
                      <td className="px-4 py-2.5">1</td>
                      <td className="px-4 py-2.5">25</td>
                      <td className="px-4 py-2.5">30 minutes</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Letter Writing</td>
                      <td className="px-4 py-2.5">1</td>
                      <td className="px-4 py-2.5">25</td>
                      <td className="px-4 py-2.5">30 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 font-bold uppercase">Phase 3</span>
                Interview & Final Merit
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Component</th>
                      <th className="px-4 py-2">Marks</th>
                      <th className="px-4 py-2">Weightage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Mains Objective + Descriptive</td>
                      <td className="px-4 py-2.5">250</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">80%</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Interview</td>
                      <td className="px-4 py-2.5">100</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION: SYLLABUS (#syllabus) */}
          <section id="syllabus" className="py-10 border-t border-slate-100">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4 font-display">
              IBPS PO 2026 Complete Syllabus — Prelims & Mains
            </h2>

            {/* Tab selector */}
            <div className="flex gap-2 mb-6 bg-slate-100 p-1.5 rounded-xl max-w-xs">
              <button
                onClick={() => setSyllabusTab('prelims')}
                className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-200 ${syllabusTab === 'prelims'
                    ? 'bg-white text-[var(--color-navy)] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                Prelims Syllabus
              </button>
              <button
                onClick={() => setSyllabusTab('mains')}
                className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-200 ${syllabusTab === 'mains'
                    ? 'bg-white text-[var(--color-navy)] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                Mains Syllabus
              </button>
            </div>

            {/* Tab content */}
            {syllabusTab === 'prelims' ? (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">English Language (30 Questions)</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Reading Comprehension · Cloze Test · Para Jumbles · Error Detection · Fill in the Blanks · Sentence Improvement · Word Rearrangement · Vocabulary
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">Quantitative Aptitude (35 Questions)</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Number Series · Simplification · Data Interpretation · Quadratic Equations · Percentage · Profit & Loss · Time Speed Distance · Time & Work · Mixture · Probability · Mensuration
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">Reasoning Ability (35 Questions)</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Puzzles · Seating Arrangements · Syllogisms · Inequalities · Coding-Decoding · Blood Relations · Direction Sense · Alphanumeric Series · Data Sufficiency
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">Reasoning & Computer Aptitude</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Puzzles (Floor, Box, Linear, Circle), Seating Arrangement, Syllogism, Blood Relations, Coding-Decoding, Logical Reasoning, Data Sufficiency, Input-Output, Computer Basics (MS Office, networking, databases, internet).
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">Data Analysis & Interpretation</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Data Interpretation (Table, Bar, Line, Pie, Radar charts), Approximation, Number Series, Quadratic Equations, Caselet DI, Time-Speed-Distance, Permutation & Combination, Probability, Arithmetic chapters (Ratio, Average, Percentage, Profit & Loss).
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs col-span-1 md:col-span-2">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">General/Economy/Banking Awareness</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Banking Awareness, RBI Policies & Functions, Current Affairs (last 6 months), Financial Inclusion, Government Schemes, Static GK.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs col-span-1 md:col-span-2">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-2">English Language (Mains)</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Advanced Reading Comprehension, Cloze Test, Para Jumbles, Error Spotting, Sentence Connectors, Word Usage, Match the Column, Sentence Completion.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* SECTION: MOCK TESTS (#mock-tests) */}
          <section id="mock-tests" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO Mock Tests 2026 — Free & Premium Full-Length Practice Tests
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              PrepBanker's IBPS PO mock tests mirror the exact 2026 exam pattern — section timings, difficulty distribution, and negative marking all replicated precisely.
            </p>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-3">Test Type</th>
                    <th className="px-4 py-3">Tests</th>
                    <th className="px-4 py-3">Questions</th>
                    <th className="px-4 py-3">Marks</th>
                    <th className="px-4 py-3">Duration</th>
                    <th className="px-4 py-3">Free Tests</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="px-4 py-2.5 text-slate-800 font-medium">IBPS PO Full Mock (Prelims)</td>
                    <td className="px-4 py-2.5">20</td>
                    <td className="px-4 py-2.5">100</td>
                    <td className="px-4 py-2.5">100</td>
                    <td className="px-4 py-2.5">60 mins</td>
                    <td className="px-4 py-2.5 text-green-600 font-bold">5 Free</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-2.5 text-slate-800 font-medium">IBPS PO Full Mock (Mains)</td>
                    <td className="px-4 py-2.5">15</td>
                    <td className="px-4 py-2.5">155 + Descriptive</td>
                    <td className="px-4 py-2.5">250</td>
                    <td className="px-4 py-2.5">210 mins</td>
                    <td className="px-4 py-2.5 text-green-600 font-bold">3 Free</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-slate-800 font-medium">Previous Year Papers (2017–2025)</td>
                    <td className="px-4 py-2.5">9</td>
                    <td className="px-4 py-2.5">100/155</td>
                    <td className="px-4 py-2.5">100/200</td>
                    <td className="px-4 py-2.5">60/180 mins</td>
                    <td className="px-4 py-2.5 text-green-600 font-bold">2 Free</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-2.5 text-slate-800 font-medium">Prelims Speed Tests</td>
                    <td className="px-4 py-2.5">12</td>
                    <td className="px-4 py-2.5">100</td>
                    <td className="px-4 py-2.5">100</td>
                    <td className="px-4 py-2.5">45 mins</td>
                    <td className="px-4 py-2.5 text-green-600 font-bold">4 Free</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-slate-800 font-medium">Mains Sectional Full Tests</td>
                    <td className="px-4 py-2.5">8</td>
                    <td className="px-4 py-2.5">35–45 per sec</td>
                    <td className="px-4 py-2.5">40–60</td>
                    <td className="px-4 py-2.5">35–60 mins</td>
                    <td className="px-4 py-2.5 text-green-600 font-bold">2 Free</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-extrabold text-slate-800 text-sm mb-3">What Makes PrepBanker's IBPS PO Mock Tests Different?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  Interface mirrors IBPS's actual CBT platform.
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  Section timers lock automatically after 20 minutes in Prelims.
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  Post-test analysis shows time per question and topper average.
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  Live mock tests with 10,000+ aspirants simultaneously.
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600 md:col-span-2">
                  <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  Detailed solutions with shortcut methods for all questions.
                </li>
              </ul>
            </div>

            <div className="bg-[#0D1B3E] text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm sm:text-base">Attempt your first IBPS PO Prelims mock test for free</h4>
                <p className="text-white/60 text-xs mt-1">Realistic test conditions, complete answers, and detailed score breakdown.</p>
              </div>
              <a
                href="https://app.prepgrind.com/signup/ibps-po"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center px-6 py-2.5 rounded-lg bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md"
              >
                Start Free Mock Test →
              </a>
            </div>
          </section>

          {/* SECTION: SECTIONAL TESTS (#sectional-tests) */}
          <section id="sectional-tests" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO Sectional Tests 2026 — English, Quant & Reasoning
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              IBPS PO Prelims has separate 20-minute windows per section. PrepBanker has 80+ sectional tests covering every topic.
            </p>

            {/* Tab selector */}
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl max-w-sm">
              <button
                onClick={() => setSectionalTab('english')}
                className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-200 ${sectionalTab === 'english'
                    ? 'bg-white text-[var(--color-navy)] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                English Language
              </button>
              <button
                onClick={() => setSectionalTab('quant')}
                className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-200 ${sectionalTab === 'quant'
                    ? 'bg-white text-[var(--color-navy)] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                Quantitative Aptitude
              </button>
              <button
                onClick={() => setSectionalTab('reasoning')}
                className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-200 ${sectionalTab === 'reasoning'
                    ? 'bg-white text-[var(--color-navy)] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                Reasoning Ability
              </button>
            </div>

            {/* English table */}
            {sectionalTab === 'english' && (
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Topic</th>
                      <th className="px-4 py-2">Tests</th>
                      <th className="px-4 py-2">Questions</th>
                      <th className="px-4 py-2">Free</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Reading Comprehension</td>
                      <td className="px-4 py-2.5">15</td>
                      <td className="px-4 py-2.5">10–15</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">3 free</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Cloze Test</td>
                      <td className="px-4 py-2.5">12</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">3 free</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Para Jumbles</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5">5</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Error Detection</td>
                      <td className="px-4 py-2.5">12</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr className="font-bold bg-blue-50/20 text-slate-800">
                      <td className="px-4 py-2.5">Full English Section Mock</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5">30</td>
                      <td className="px-4 py-2.5 text-green-600 font-bold">2 free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Quant table */}
            {sectionalTab === 'quant' && (
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Topic</th>
                      <th className="px-4 py-2">Tests</th>
                      <th className="px-4 py-2">Questions</th>
                      <th className="px-4 py-2">Free</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Data Interpretation</td>
                      <td className="px-4 py-2.5">20</td>
                      <td className="px-4 py-2.5">5 sets</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">4 free</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Number Series</td>
                      <td className="px-4 py-2.5">12</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Simplification</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5">15</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Arithmetic</td>
                      <td className="px-4 py-2.5">15</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">3 free</td>
                    </tr>
                    <tr className="font-bold bg-blue-50/20 text-slate-800">
                      <td className="px-4 py-2.5">Full Quant Section Mock</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5 text-green-600 font-bold">2 free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Reasoning table */}
            {sectionalTab === 'reasoning' && (
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Topic</th>
                      <th className="px-4 py-2">Tests</th>
                      <th className="px-4 py-2">Questions</th>
                      <th className="px-4 py-2">Free</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Puzzles & Seating Arrangement</td>
                      <td className="px-4 py-2.5">25</td>
                      <td className="px-4 py-2.5">5 sets</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">5 free</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Syllogisms</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5">5</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Inequalities</td>
                      <td className="px-4 py-2.5">8</td>
                      <td className="px-4 py-2.5">5</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Coding-Decoding</td>
                      <td className="px-4 py-2.5">8</td>
                      <td className="px-4 py-2.5">5</td>
                      <td className="px-4 py-2.5 text-green-600 font-semibold">2 free</td>
                    </tr>
                    <tr className="font-bold bg-blue-50/20 text-slate-800">
                      <td className="px-4 py-2.5">Full Reasoning Section Mock</td>
                      <td className="px-4 py-2.5">10</td>
                      <td className="px-4 py-2.5">35</td>
                      <td className="px-4 py-2.5 text-green-600 font-bold">2 free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* SECTION: CUT-OFFS (#cutoffs) */}
          <section id="cutoffs" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO Previous Year Cut-off Marks (2017–2025)
            </h2>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                Prelims Cut-off (Out of 100)
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm max-w-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Year</th>
                      <th className="px-4 py-2">General</th>
                      <th className="px-4 py-2">OBC</th>
                      <th className="px-4 py-2">SC</th>
                      <th className="px-4 py-2">ST</th>
                      <th className="px-4 py-2">EWS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-bold">2024</td>
                      <td className="px-4 py-2.5">63.50</td>
                      <td className="px-4 py-2.5">58.75</td>
                      <td className="px-4 py-2.5">53.25</td>
                      <td className="px-4 py-2.5">49.00</td>
                      <td className="px-4 py-2.5">63.50</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-bold">2023</td>
                      <td className="px-4 py-2.5">61.25</td>
                      <td className="px-4 py-2.5">56.50</td>
                      <td className="px-4 py-2.5">51.00</td>
                      <td className="px-4 py-2.5">47.25</td>
                      <td className="px-4 py-2.5">61.25</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-bold">2022</td>
                      <td className="px-4 py-2.5">59.75</td>
                      <td className="px-4 py-2.5">54.25</td>
                      <td className="px-4 py-2.5">49.50</td>
                      <td className="px-4 py-2.5">45.75</td>
                      <td className="px-4 py-2.5">59.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                Mains Cut-off (Out of 250)
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm max-w-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Year</th>
                      <th className="px-4 py-2">General</th>
                      <th className="px-4 py-2">OBC</th>
                      <th className="px-4 py-2">SC</th>
                      <th className="px-4 py-2">ST</th>
                      <th className="px-4 py-2">EWS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-bold">2024</td>
                      <td className="px-4 py-2.5">57.80</td>
                      <td className="px-4 py-2.5">52.60</td>
                      <td className="px-4 py-2.5">46.40</td>
                      <td className="px-4 py-2.5">43.20</td>
                      <td className="px-4 py-2.5">57.80</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-bold">2023</td>
                      <td className="px-4 py-2.5">55.40</td>
                      <td className="px-4 py-2.5">50.20</td>
                      <td className="px-4 py-2.5">44.60</td>
                      <td className="px-4 py-2.5">41.00</td>
                      <td className="px-4 py-2.5">55.40</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-bold">2022</td>
                      <td className="px-4 py-2.5">53.20</td>
                      <td className="px-4 py-2.5">48.00</td>
                      <td className="px-4 py-2.5">42.80</td>
                      <td className="px-4 py-2.5">39.40</td>
                      <td className="px-4 py-2.5">53.20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4 text-xs font-semibold leading-relaxed">
              ⚠️ General category cut-off has risen ~10 marks in Prelims and ~16 marks in Mains over 7 years. Aim for 68+ in Prelims and 100+ in Mains to stay safe.
            </div>
          </section>

          {/* SECTION: SALARY (#salary) */}
          <section id="salary" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO Salary 2026 — In-Hand Pay, Allowances & Career Path
            </h2>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-navy)]" />
                Monthly Salary Breakdown
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm max-w-md">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Component</th>
                      <th className="px-4 py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Basic Pay (Scale I)</td>
                      <td className="px-4 py-2.5">₹36,000/month</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Dearness Allowance</td>
                      <td className="px-4 py-2.5">~₹14,500/month</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">HRA — Metro</td>
                      <td className="px-4 py-2.5">₹7,560</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">HRA — Urban</td>
                      <td className="px-4 py-2.5">₹5,400</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Special Allowance</td>
                      <td className="px-4 py-2.5">₹4,800/month</td>
                    </tr>
                    <tr className="bg-blue-50/30 font-bold text-slate-800">
                      <td className="px-4 py-2.5">Gross Monthly (Metro)</td>
                      <td className="px-4 py-2.5">~₹58,000–₹65,000</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold text-slate-850">
                      <td className="px-4 py-2.5">Annual CTC</td>
                      <td className="px-4 py-2.5">₹7–8.5 LPA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-navy)]" />
                Career Growth Timeline
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm max-w-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Years</th>
                      <th className="px-4 py-2">Designation</th>
                      <th className="px-4 py-2">CTC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">0–2 years</td>
                      <td className="px-4 py-2.5">Probationary Officer (Scale I)</td>
                      <td className="px-4 py-2.5">₹7–8.5 LPA</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 font-semibold text-slate-800">2–5 years</td>
                      <td className="px-4 py-2.5">Assistant Manager</td>
                      <td className="px-4 py-2.5">₹9–12 LPA</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">5–8 years</td>
                      <td className="px-4 py-2.5">Deputy Manager</td>
                      <td className="px-4 py-2.5">₹13–17 LPA</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 font-semibold text-slate-800">8–13 years</td>
                      <td className="px-4 py-2.5">Manager</td>
                      <td className="px-4 py-2.5">₹18–24 LPA</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">13–18 years</td>
                      <td className="px-4 py-2.5">Senior Manager</td>
                      <td className="px-4 py-2.5">₹26–34 LPA</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 font-semibold text-slate-800">18–23 years</td>
                      <td className="px-4 py-2.5">Chief Manager</td>
                      <td className="px-4 py-2.5">₹38–48 LPA</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-slate-800">23+ years</td>
                      <td className="px-4 py-2.5">AGM / DGM / GM</td>
                      <td className="px-4 py-2.5 text-blue-700 font-bold">₹55 LPA+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION: SELECTION PROCESS (#selection-process) */}
          <section id="selection-process" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4 font-display">
              IBPS PO 2026 Selection Process — All 3 Stages Explained
            </h2>

            {/* 3 Step Cards */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-blue-600 font-black text-lg">01</span>
                  <h4 className="font-extrabold text-slate-800 text-sm mt-1 mb-2">Stage 1 — Prelims</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Online CBT featuring 100 questions, 100 marks, and a 60-minute duration. This stage is qualifying in nature.
                  </p>
                </div>
              </li>
              <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-purple-600 font-black text-lg">02</span>
                  <h4 className="font-extrabold text-slate-800 text-sm mt-1 mb-2">Stage 2 — Mains</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    155 objective questions plus descriptive writing. This stage carries **80%** weightage of the final merit ranking.
                  </p>
                </div>
              </li>
              <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-green-600 font-black text-lg">03</span>
                  <h4 className="font-extrabold text-slate-800 text-sm mt-1 mb-2">Stage 3 — Interview</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Personal Interview scoring 100 marks. Carries **20%** weightage in the final merit allocation.
                  </p>
                </div>
              </li>
            </ul>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                Final Merit Allocation Formula
              </h3>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm max-w-md">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="px-4 py-2">Component</th>
                      <th className="px-4 py-2">Marks</th>
                      <th className="px-4 py-2">Weightage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Mains Objective + Descriptive</td>
                      <td className="px-4 py-2.5">250</td>
                      <td className="px-4 py-2.5 font-bold text-slate-800">80%</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-4 py-2.5 text-slate-800 font-medium">Interview</td>
                      <td className="px-4 py-2.5">100</td>
                      <td className="px-4 py-2.5 font-bold text-slate-800">20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION: IBPS PO vs SBI PO (#comparison) */}
          <section id="comparison" className="py-10 border-t border-slate-100 space-y-5">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4 font-display">
              IBPS PO vs SBI PO — Key Differences
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-3">Parameter</th>
                    <th className="px-4 py-3">IBPS PO</th>
                    <th className="px-4 py-3">SBI PO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Vacancies</td>
                    <td className="px-4 py-2.5 text-slate-800">~3,500–4,500</td>
                    <td className="px-4 py-2.5 text-slate-850 font-medium">1,500</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Banks Covered</td>
                    <td className="px-4 py-2.5 text-slate-800">11 PSU Banks</td>
                    <td className="px-4 py-2.5 text-slate-850 font-medium">SBI Only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Starting Basic Pay</td>
                    <td className="px-4 py-2.5 text-slate-800">₹36,000/month</td>
                    <td className="px-4 py-2.5 text-blue-750 font-bold">₹48,480/month</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Gross Salary</td>
                    <td className="px-4 py-2.5 text-slate-800">₹52,000–₹65,000/month</td>
                    <td className="px-4 py-2.5 text-blue-750 font-bold">₹71,000–₹84,600/month</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Selection Stages</td>
                    <td className="px-4 py-2.5 text-slate-800">3 Stages</td>
                    <td className="px-4 py-2.5 text-slate-850 font-medium">4 Stages</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Competition</td>
                    <td className="px-4 py-2.5 text-slate-800">~13–15 lakh candidates</td>
                    <td className="px-4 py-2.5 text-slate-850 font-medium">~12.14 lakh candidates</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Prelims Month</td>
                    <td className="px-4 py-2.5 text-slate-800">October</td>
                    <td className="px-4 py-2.5 text-slate-850 font-medium">June</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Age Limit (General)</td>
                    <td className="px-4 py-2.5 text-slate-800">20–30 years</td>
                    <td className="px-4 py-2.5 text-slate-850 font-medium">21–30 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-semibold text-slate-700">Prestige</td>
                    <td className="px-4 py-2.5 text-slate-800">High</td>
                    <td className="px-4 py-2.5 text-amber-700 font-bold">Highest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 text-[#1B6EB5] rounded-xl p-4 text-xs font-semibold leading-relaxed">
              💡 Tip: Prepare for both exams simultaneously — the Prelims syllabus is nearly identical. Attempting both exams doubles your chances of securing a banking job in 2026.
            </div>
          </section>

          {/* SECTION: STRATEGY (#strategy) */}
          <section id="strategy" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO 2026 Study Material & Preparation Strategy
            </h2>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                90-Day IBPS PO Preparation Plan
              </h3>

              {/* 3 Month Cards */}
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full uppercase">Month 1</span>
                  <h4 className="font-bold text-slate-800 text-xs mt-2.5 mb-1.5">Foundation (Days 1–30)</h4>
                  <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Reasoning: Prelims topics</li>
                    <li>Quant: Basic arithmetic</li>
                    <li>English: Vocab & RC daily</li>
                    <li>CA: Start daily awareness</li>
                    <li>2x subject tests per week</li>
                  </ul>
                </li>
                <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5 rounded-full uppercase">Month 2</span>
                  <h4 className="font-bold text-slate-800 text-xs mt-2.5 mb-1.5">Mock Tests (Days 31–60)</h4>
                  <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>2 full Prelims mocks weekly</li>
                    <li>Deep review of score</li>
                    <li>Track accuracy & time</li>
                    <li>Target: 60+ in mocks</li>
                  </ul>
                </li>
                <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full uppercase">Month 3</span>
                  <h4 className="font-bold text-slate-800 text-xs mt-2.5 mb-1.5">Speed & Mains (Days 61–90)</h4>
                  <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>1 Prelims mock every 2 days</li>
                    <li>2 full Mains mocks weekly</li>
                    <li>Computer Aptitude</li>
                    <li>Target: 68+ in Prelims</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                Section-wise Attempt Strategy for IBPS PO Prelims
              </h3>

              {/* 3 Strategy Cards */}
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h4 className="font-extrabold text-slate-800 text-xs mb-1">English Language</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    Target Attempts: **22-25**
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prioritize error spotting, cloze tests, and fill in the blanks. Save reading comprehension for the last 8 minutes.
                  </p>
                </li>
                <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h4 className="font-extrabold text-slate-800 text-xs mb-1">Quantitative Aptitude</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    Target Attempts: **24-28**
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    First complete number series, simplifications, and quadratic equations. Then solve DI sets, leaving word problems for last.
                  </p>
                </li>
                <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <h4 className="font-extrabold text-slate-800 text-xs mb-1">Reasoning Ability</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    Target Attempts: **26-30**
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Quickly secure marks in inequality, coding, syllogisms, and blood relations. Allocate remaining time for seating and puzzles.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION: FAQ (#faq) */}
          <section id="faq" className="py-10 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2 font-display">
              IBPS PO 2026 — Frequently Asked Questions
            </h2>

            {/* details/summary accordion FAQ */}
            <ul className="space-y-3">
              {[
                {
                  q: "What is IBPS PO?",
                  a: "IBPS PO is a national-level recruitment exam conducted by the Institute of Banking Personnel Selection for hiring Probationary Officers in 11 public sector banks across India. It consists of Prelims, Mains, and Interview stages."
                },
                {
                  q: "Which banks participate in IBPS PO?",
                  a: "Eleven banks participate: Bank of Baroda, Bank of India, Bank of Maharashtra, Canara Bank, Central Bank of India, Indian Bank, Indian Overseas Bank, Punjab National Bank, Punjab & Sind Bank, UCO Bank, and Union Bank of India."
                },
                {
                  q: "How is IBPS PO different from SBI PO?",
                  a: "SBI PO is conducted solely for recruitment in the State Bank of India and has a 4-stage pattern (including group exercises). IBPS PO is for 11 nationalized banks and has a 3-stage pattern (Prelims, Mains, Interview)."
                },
                {
                  q: "What is the IBPS PO interview weightage?",
                  a: "The final merit list is prepared with an 80:20 weightage split. The Mains exam score is scaled to 80 marks and the Interview score to 20 marks to make a cumulative score out of 100."
                },
                {
                  q: "Are free IBPS PO mock tests available on PrepBanker?",
                  a: "Yes! PrepBanker offers 5 free full-length Prelims mock tests and 3 free Mains mock tests, complete with detailed performance analytics, cut-off indicators, and step-by-step solutions."
                },
                {
                  q: "What is the IBPS PO 2026 syllabus?",
                  a: "Prelims: English Language (30Q), Quantitative Aptitude (35Q), and Reasoning Ability (35Q). Mains: Reasoning & Computer Aptitude, Data Analysis & Interpretation, English, and General/Economy/Banking Awareness, plus a descriptive test."
                },
                {
                  q: "Is computer knowledge tested in IBPS PO?",
                  a: "Yes, basic computer knowledge is tested in the Mains exam, clubbed together with the Reasoning Ability section under 'Reasoning & Computer Aptitude'."
                },
                {
                  q: "What documents are required for IBPS PO application?",
                  a: "Scanned copy of your photograph, signature, left-thumb impression, a handwritten declaration, and graduation certificates to input marks and year of passing."
                },
                {
                  q: "Can I apply for both SBI PO and IBPS PO?",
                  a: "Yes. They are separate recruitment processes conducted by separate bodies. You can apply for both, and since the syllabus is highly similar, preparing for one prepares you for the other."
                },
                {
                  q: "How is allotment to a specific bank done in IBPS PO?",
                  a: "Bank allotment is done by IBPS based on merit rank, category, vacancies in each bank, and candidate preferences filled in the online application."
                },
                {
                  q: "Which is harder, IBPS PO or SBI PO?",
                  a: "SBI PO is generally considered slightly harder than IBPS PO due to its tougher questions in Quant and Reasoning, and the addition of a Group Exercise stage in the interview phase."
                },
                {
                  q: "What is the starting salary of an IBPS PO officer?",
                  a: "An IBPS PO starts with a basic pay of ₹36,000/month. The gross monthly salary, including Dearness Allowance, HRA, and special allowances, ranges between ₹52,000 and ₹60,000 depending on the city."
                }
              ].map((item, idx) => (
                <li key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 font-bold text-slate-800 text-xs sm:text-sm cursor-pointer select-none focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-400 group-open:bg-[var(--color-blue)] group-open:text-white transition-all">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {item.q}
                      </span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-open:text-[var(--color-blue)]">
                        ▼
                      </span>
                    </summary>
                    <p className="px-5 pb-4 pl-13 text-xs leading-relaxed text-slate-500 border-t border-slate-100 pt-3">
                      {item.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>

            {/* FAQ JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is IBPS PO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IBPS PO is a national-level recruitment exam conducted by the Institute of Banking Personnel Selection for hiring Probationary Officers in 11 public sector banks across India."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are free IBPS PO mock tests available on PrepBanker?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! PrepBanker offers 5 free full-length Prelims mock tests and 3 free Mains mock tests, complete with detailed performance analytics."
                      }
                    }
                  ]
                })
              }}
            />
          </section>

        </main>

        {/* Right Side: Sticky Sidebar (30% width, collapsing to top on mobile) - Rendered second in DOM, displayed on top on mobile via column-reverse */}
        <aside className="w-full lg:w-[30%] space-y-6 lg:sticky lg:top-6 lg:self-start">

          {/* CARD 1: Quick Navigation */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
            <h3 className="font-black text-sm text-slate-800 px-3 pb-3 border-b border-slate-100 mb-2 tracking-tight">
              IBPS PO 2026 Guide
            </h3>

            <nav className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`group flex items-center justify-between py-2 px-3.5 rounded-lg text-xs text-left transition-all duration-150 border-l-[3px] ${isActive
                        ? 'bg-blue-50/80 text-[var(--color-blue)] font-bold border-[var(--color-blue)]'
                        : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`h-3.5 w-3.5 transition-colors ${isActive ? 'text-[var(--color-blue)]' : 'text-slate-400 group-hover:text-slate-700'
                      }`} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* CARD 2: CTA Card */}
          <div className="bg-[#0D1B3E] text-white rounded-2xl p-5 shadow-md flex flex-col gap-4 border border-white/5 relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-[#1B6EB5]/20 pointer-events-none" />

            <div className="relative z-10 space-y-1">
              <h3 className="font-extrabold text-base tracking-tight">
                Start Free IBPS PO Prep
              </h3>
              <p className="text-white/60 text-xs">
                5 Free Mock Tests • No Registration
              </p>
            </div>

            <div className="relative z-10 py-1 border-y border-white/10 flex justify-between text-xs text-white/70">
              <span>👥 50K+ Students</span>
              <span>📝 500+ Tests</span>
            </div>

            <div className="relative z-10 flex flex-col gap-2.5 mt-1">
              <a
                href="https://app.prepgrind.com/signup/ibps-po"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                Start Free Mock Test →
              </a>
              <a
                href="/live-tests"
                className="w-full text-center py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-wider transition-all"
              >
                View Sectional Tests →
              </a>
            </div>
          </div>

        </aside>

      </div>

      <Footer />
    </div>
  );
}
