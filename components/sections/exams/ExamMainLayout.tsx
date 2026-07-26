// PATH: components/sections/exams/ExamMainLayout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronRight,
  Zap,
  Award,
  HelpCircle,
  FileText,
  Calendar,
  Layers,
  BookMarked,
  Brain,
  BarChart3,
  DollarSign,
  Briefcase,
  TrendingUp,
  Target,
  Trophy,
  Info,
  ChevronDown,
  ExternalLink,
  BookOpen,
  X,
  ShieldAlert,
  Users,
} from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuickNavigation from './QuickNavigation';
import ExamAuthorSection from './ExamAuthorSection';
import PatternSnapshot from '../previous-year-papers/PatternSnapshot';
import ExamAnalysisSection from './ExamAnalysisSection';
import MockTestSnippet from './MockTestSnippet';
import './exam.css';

interface Props {
  exam: ExamDetailData;
}

export default function ExamMainLayout({ exam }: Props) {
  const isSbi = exam.id === 'sbi-po';
  const brandColor = isSbi ? '#1B6EB5' : '#F0B429';
  const registerUrl = isSbi ? "https://app.prepgrind.com/signup/sbi-po" : "https://app.prepgrind.com/signup/ibps-po";

  const ICON_MAP: Record<string, React.ElementType> = {
    Users,
    DollarSign,
    Award,
    TrendingUp,
    HelpCircle,
  };

  const [syllabusTab, setSyllabusTab] = useState<'prelims' | 'mains'>('prelims');
  const [patternTab, setPatternTab] = useState<'prelims' | 'mains'>('prelims');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [descExpanded, setDescExpanded] = useState(false);

  const DESC_LIMIT = 180;
  const hasMoreDesc = exam.description.length > DESC_LIMIT;
  const displayDesc = descExpanded ? exam.description : (hasMoreDesc ? exam.description.slice(0, DESC_LIMIT) + '...' : exam.description);

  // --- NEW: Modals State ---
  const [showEligModal, setShowEligModal] = useState(false);
  const [showSalModal, setShowSalModal] = useState(false);

  // Eligibility Checker States
  const [eligAge, setEligAge] = useState<number>(21);
  const [eligGrad, setEligGrad] = useState<string>('completed');
  const [eligCategory, setEligCategory] = useState<string>('general');
  const [eligResult, setEligResult] = useState<{ eligible: boolean; text: string; details?: string } | null>(null);

  // Salary Calculator States
  const [salCity, setSalCity] = useState<'metro' | 'urban' | 'semi'>('metro');
  const [salLease, setSalLease] = useState<boolean>(false);

  // Syllabus progress state
  const [checkedTopics, setCheckedTopics] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`prep_progress_${exam.id}`);
      if (stored) {
        try {
          setCheckedTopics(JSON.parse(stored));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [exam.id]);

  const toggleTopic = (topic: string) => {
    const next = { ...checkedTopics, [topic]: !checkedTopics[topic] };
    setCheckedTopics(next);
    localStorage.setItem(`prep_progress_${exam.id}`, JSON.stringify(next));
  };

  // Eligibility Checker Function
  const handleCheckEligibility = () => {
    let maxAge = 30;
    let attemptsText = '';

    if (eligCategory === 'obc') {
      maxAge = 33;
      attemptsText = isSbi ? 'OBC Category: Maximum of 7 attempts allowed.' : 'OBC Category: Unlimited attempts allowed.';
    } else if (eligCategory === 'scst') {
      maxAge = 35;
      attemptsText = 'SC/ST Category: Unlimited attempts allowed.';
    } else if (eligCategory === 'pwbd_gen') {
      maxAge = 40;
      attemptsText = isSbi ? 'PwBD (General/EWS): Maximum of 7 attempts allowed.' : 'PwBD (General/EWS): Unlimited attempts allowed.';
    } else if (eligCategory === 'pwbd_obc') {
      maxAge = 43;
      attemptsText = isSbi ? 'PwBD (OBC): Maximum of 7 attempts allowed.' : 'PwBD (OBC): Unlimited attempts allowed.';
    } else if (eligCategory === 'pwbd_scst') {
      maxAge = 45;
      attemptsText = 'PwBD (SC/ST): Unlimited attempts allowed.';
    } else {
      // General / EWS
      maxAge = 30;
      attemptsText = isSbi ? 'General/EWS Category: Maximum of 4 attempts allowed.' : 'General/EWS Category: Unlimited attempts allowed.';
    }

    const minAge = isSbi ? 21 : 20;

    let isEligible = true;
    let reasonText = '';
    let detailText = '';

    if (eligAge < minAge) {
      isEligible = false;
      reasonText = `Age is less than the minimum required limit of ${minAge} years.`;
    } else if (eligAge > maxAge) {
      isEligible = false;
      reasonText = `Age (${eligAge}) exceeds the maximum allowed limit of ${maxAge} years for this category.`;
    }

    if (eligGrad === 'undergrad') {
      isEligible = false;
      reasonText = reasonText ? `${reasonText} Also, you must at least be in the final year of graduation.` : 'You must at least be in the final year of graduation to apply.';
    }

    if (isEligible) {
      if (eligGrad === 'final_year') {
        reasonText = 'Eligible (Provisionally)';
        detailText = `You meet the age criteria (${eligAge} years). Since you are in your final year/semester, you can apply provisionally. However, you must produce proof of passing graduation before joining. ${attemptsText}`;
      } else {
        reasonText = 'Eligible';
        detailText = `Congratulations! You meet all eligibility criteria (Age: ${eligAge} years, Graduated). ${attemptsText}`;
      }
    } else {
      detailText = `Unfortunately, you do not meet the requirements. Minimum age is ${minAge} years, and maximum age limit for your selected category is ${maxAge} years. ${attemptsText}`;
    }

    setEligResult({ eligible: isEligible, text: reasonText, details: detailText });
  };

  // Salary Calculator Function
  const getSalaryDetails = () => {
    const basic = isSbi ? 41960 : 36000;
    const da = isSbi ? 17200 : 15000;
    const special = isSbi ? 5500 : 4500;
    const transport = isSbi ? 1200 : 1000;

    let hra = 0;
    let leaseAmount = 0;

    if (salCity === 'metro') {
      hra = isSbi ? 9030 : 3240;
      leaseAmount = isSbi ? 29500 : 15000;
    } else if (salCity === 'urban') {
      hra = isSbi ? 6300 : 2160;
      leaseAmount = isSbi ? 19000 : 10000;
    } else {
      hra = isSbi ? 4500 : 1080;
      leaseAmount = isSbi ? 12000 : 7000;
    }

    const housingBenefit = salLease ? leaseAmount : hra;
    const gross = basic + da + special + transport + housingBenefit;

    const nps = Math.round((basic + da) * 0.1);
    const profTax = 200;
    const deductions = nps + profTax;

    const netInHand = salLease
      ? (basic + da + special + transport - deductions)
      : (gross - deductions);

    return {
      basic,
      da,
      special,
      transport,
      housingBenefit,
      hra,
      leaseAmount,
      gross,
      nps,
      profTax,
      deductions,
      netInHand
    };
  };

  // Active syllabus topics for completion computation
  const activeTopics = syllabusTab === 'prelims'
    ? [
      ...(exam.syllabus['English Language']?.slice(0, 4) || []),
      ...(exam.syllabus['Quantitative Aptitude']?.slice(0, 4) || []),
      ...(exam.syllabus['Reasoning Ability']?.slice(0, 4) || [])
    ]
    : isSbi
      ? [
        ...(exam.syllabus['Mains Reasoning & Computer Aptitude']?.slice(0, 4) || []),
        ...(exam.syllabus['Mains General/Economy/Banking Awareness']?.slice(0, 4) || [])
      ]
      : [
        'Puzzles & Seating', 'Machine Input-Output', 'Data Sufficiency', 'Computer Networks',
        ...(exam.syllabus['General/Banking Awareness']?.slice(0, 4) || [])
      ];

  const totalActiveCount = activeTopics.length;
  const completedActiveCount = activeTopics.filter(t => checkedTopics[t]).length;
  const completionPercent = totalActiveCount > 0 ? Math.round((completedActiveCount / totalActiveCount) * 100) : 0;
  // --- END: Calculator & Tracker Logic ---

  // Table of Contents list
  const tocItems = isSbi
    ? [
      { label: 'What is SBI PO?', id: 'what-is' },
      { label: 'SBI PO 2026 at a Glance', id: 'overview-card' },
      { label: 'Important Dates', id: 'important-dates' },
      { label: 'Eligibility Criteria', id: 'eligibility-criteria' },
      { label: 'Exam Pattern & Phases', id: 'exam-pattern' },
      { label: 'Complete Syllabus', id: 'full-syllabus' },
      { label: 'SBI PO Mock Tests 2026', id: 'mock-tests' },
      { label: 'Previous Year Paper Snapshot', id: 'pyq-snapshot' },
      { label: 'SBI PO Sectional Tests 2026', id: 'sectional-tests' },
      { label: 'Topic-Wise Practice Questions', id: 'topic-wise-questions' },
      { label: 'Current Affairs for SBI PO 2026', id: 'current-affairs' },
      { label: 'Study Material & Strategy', id: 'prep-strategy' },
      { label: 'Previous Year Cut-offs', id: 'cut-offs' },
      { label: 'SBI PO Prelims Exam Analysis', id: 'exam-analysis' },
      { label: 'Salary & Career Growth', id: 'salary-career' },
      { label: 'Selection Process Deep Dive', id: 'selection-process' },
      { label: 'Why Prepare on PrepBanker?', id: 'platform-features' },
      { label: 'Frequently Asked Questions (FAQs)', id: 'faqs' },
    ]
    : [
      { label: `What is ${exam.shortName}?`, id: 'what-is' },
      { label: `${exam.shortName} Overview Card`, id: 'overview-card' },
      { label: 'Important Dates Timeline', id: 'important-dates' },
      { label: 'Eligibility Criteria', id: 'eligibility-criteria' },
      { label: 'Exam Pattern & Phases', id: 'exam-pattern' },
      { label: 'Full Syllabus Breakdown', id: 'full-syllabus' },
      { label: 'PrepBanker Mock Tests', id: 'mock-tests' },
      { label: 'Sectional Timed Quizzes', id: 'sectional-tests' },
      { label: 'Daily Current Affairs', id: 'current-affairs' },
      { label: '90-Day Study Strategy', id: 'prep-strategy' },
      { label: 'Previous Year Cut-offs', id: 'cut-offs' },
      { label: 'Salary Structure & Allowances', id: 'salary-career' },
      { label: `${exam.shortName} vs SBI PO Comparison`, id: 'comparison' },
      { label: 'Frequently Asked Questions (FAQs)', id: 'faqs' },
    ];
  const renderTopicBadge = (t: string) => {
    const parts = t.split(' (');
    const mainText = parts[0];
    const subText = parts[1] ? `(${parts[1]}` : '';

    return (
      <div
        key={t}
        className="w-full rounded-lg border border-slate-200 bg-white p-2.5 flex items-start gap-2 text-slate-700 text-left font-sans"
      >
        <div className="flex flex-col gap-0.5 break-words min-w-0 flex-1 leading-normal">
          <span className="text-xs font-bold text-slate-800">{mainText}</span>
          {subText && <span className="text-xs font-normal text-slate-400 leading-tight">{subText}</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden text-white pt-10 pb-8"
        style={{
          background: isSbi
            ? 'linear-gradient(135deg, #030712 0%, #091024 100%)'
            : 'linear-gradient(135deg, #3D2A00 0%, #07102A 100%)'
        }}
      >
        {/* Decorative background blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: isSbi ? 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' : 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
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
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-5">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Exams', href: '/exams' },
                { label: exam.shortName },
              ]}
              linkColor={isSbi ? '#60B4FF' : '#F0B429'}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-4 pb-4">
            {/* Left Column: Copy & Switcher */}
            <div className="flex-1 max-w-2xl">
              {/* Status badge */}
              <span
                className="inline-flex items-center gap-1.5 border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{
                  backgroundColor: `${exam.tagColor}1F`,
                  borderColor: `${exam.tagColor}4D`,
                  color: exam.tagColor,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[currentColor] animate-pulse" />
                {exam.tag}
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-tight mb-2.5 tracking-tight text-white">
                {exam.name}
              </h1>

              {isSbi && (
                <h2 className="text-lg sm:text-xl font-bold text-white/90 mb-3 font-display">
                  Crack SBI PO 2026 with India's Most Complete Prep Platform
                </h2>
              )}

              <p className="text-white/70 text-sm sm:text-base mb-5 leading-relaxed font-normal">
                {displayDesc}{' '}
                {hasMoreDesc && (
                  <button
                    onClick={() => setDescExpanded(v => !v)}
                    className="font-bold underline hover:text-white transition-colors ml-1 focus:outline-none text-xs sm:text-xs"
                    style={{ color: isSbi ? '#60B4FF' : '#F0B429' }}
                  >
                    {descExpanded ? 'Read Less ↑' : 'Read More ↓'}
                  </button>
                )}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-start items-center">
                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-sm sm:text-base tracking-wide text-center transition-all shadow-[0_0_15px_rgba(240,180,41,0.6)] hover:-translate-y-0.5"
                >
                  Start Free Mock Test →
                </a>
                <a
                  href="#sectional-tests"
                  className="px-4 py-2.5 rounded-lg border border-white/30 hover:border-white text-white font-bold text-sm sm:text-base tracking-wide text-center transition-all hover:bg-white/5"
                >
                  View {exam.shortName} Sectional Tests →
                </a>
              </div>
            </div>

            {/* Right Column: 4 Stats Cards in 2x2 Grid */}
            <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-w-[290px] sm:max-w-none lg:max-w-[300px] mx-auto lg:mx-0">
                {exam.summaryCards.slice(0, 4).map((card) => {
                  const Icon = ICON_MAP[card.iconKey] ?? Users;
                  return (
                    <div
                      key={card.label}
                      className="flex flex-col items-start p-3.5 rounded-xl border w-full h-auto text-left transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5 w-full">
                        <span
                          className="p-1.5 rounded-md flex-shrink-0"
                          style={{ background: 'rgba(255,255,255,0.08)' }}
                        >
                          <Icon className="w-4 h-4 text-[var(--color-gold-bright)]" aria-hidden />
                        </span>
                        <p className="text-base font-black text-white leading-none break-words min-w-0">{card.value}</p>
                      </div>
                      <p
                        className="text-xs font-semibold mt-0.5 leading-tight"
                        style={{ color: 'rgba(255,255,255,0.55)' }}
                      >
                        {card.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Overview Card / Highlights Bar */}
      <div className="container-custom">
        <section className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs scroll-mt-20 relative overflow-hidden" style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-center w-full relative z-10">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Online Registration Date</span>
              <span className="block text-sm sm:text-base font-bold text-slate-800">
                {isSbi ? 'April 2026 (Expected)' : 'August 2026 (Expected)'}
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Expected Vacancies</span>
              <span className="block text-sm sm:text-base font-bold text-slate-800">
                {isSbi ? '2,000+ Posts' : '3,500+ Posts'}
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Prelims Exam Date</span>
              <span className="block text-sm sm:text-base font-bold text-slate-800">
                {isSbi ? 'June 2026' : 'October 2026'}
              </span>
            </div>
            <div className="flex flex-col sm:items-start md:items-center">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 w-full md:text-center md:hidden lg:block">Exam Status</span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50/70 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-xl shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 animate-pulse" />
                {exam.tag}
              </div>
            </div>
            <div className="flex flex-col sm:items-start md:items-end w-full">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 w-full md:text-right md:hidden lg:block">Official Portal</span>
              <a
                href={isSbi ? 'https://sbi.co.in' : 'https://ibps.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                {isSbi ? 'sbi.co.in' : 'ibps.in'}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 2-Column Responsive Layout (Main Area) */}
      <div className="container-custom py-8 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">

        {/* Left Column: Content */}
        <main className="space-y-10 min-w-0 epg-main-rich-content">

          {/* Table of Contents */}
          <section id="toc" className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 sm:p-7 rounded-2xl shadow-xs scroll-mt-20">
            <h2 className="text-sm font-extrabold text-slate-800 mb-4 flex items-center gap-2 font-display">
              <Layers size={15} className="text-[#1B6EB5]" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {tocItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center px-3 py-2 text-sm text-slate-650 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                >
                  <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                    {idx + 1}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          {/* Section 1: What is exam */}
          <section id="what-is" className="py-6 scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-5 font-display border-b border-slate-100 pb-3">
              What is {exam.shortName}?
            </h2>
            <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed mb-5 font-normal">
              {isSbi
                ? "SBI PO is a prestigious national-level recruitment examination conducted annually by the State Bank of India to select entry-level Probationary Officers. It is highly sought-after due to its premium compensation package exceeding ₹90,000/month gross, comprehensive perks, and rapid promotional avenues. Candidates undergo a rigorous four-stage selection process involving Preliminary screening, Main examinations, Group Exercises, and a Personal Interview. Newly recruited officers undergo a detailed two-year probation period, during which they receive hands-on training across diverse retail, corporate, and agricultural banking portfolios."
                : "IBPS PO is a national-level recruitment examination conducted annually by the Institute of Banking Personnel Selection to recruit Probationary Officers for 11 public sector banks in India. It offers a highly respected career with a structured promotional path, competitive salaries exceeding ₹80,000/month gross in metro cities, and excellent financial security. Aspiring candidates undergo a three-stage selection process comprising Preliminary screening, Main examinations, and a Personal Interview. Selected officers are posted across India and undergo a mandatory two-year probation to master all commercial and retail banking operations."
              }
            </p>
            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl flex items-center justify-between flex-wrap gap-4 mt-6">
              <span className="text-sm font-semibold text-slate-650">
                Want to read the full criteria, attempts, and post mandates in detail?
              </span>
              <Link
                href={`/${exam.id}/eligibility`}
                className="text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline flex items-center gap-0.5"
              >
                Go to Eligibility Details Page →
              </Link>
            </div>
          </section>

          {/* Section 2: Overview Card */}
          <section id="overview-card" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 at a Glance' : `${exam.shortName} Overview Highlights`}
            </h2>
            {isSbi ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Full Name', value: 'State Bank of India Probationary Officer' },
                  { label: 'Conducting Body', value: 'State Bank of India (SBI)' },
                  { label: 'Notification', value: '18 June 2026 (Released)' },
                  { label: 'Total Vacancies', value: '1,500 (1,446 regular + 54 backlog)' },
                  { label: 'Application Mode', value: 'Online — sbi.co.in' },
                  { label: 'Exam Mode', value: 'Computer Based Test (CBT)' },
                  { label: 'Selection Stages', value: 'Prelims → Mains → GE → Interview' },
                  { label: 'Basic Pay', value: '₹48,480/month' },
                  { label: 'Gross Salary', value: '₹71,000 – ₹84,600/month' },
                  { label: 'Job Location', value: 'Pan India' },
                  { label: 'Official Website', value: 'sbi.co.in', isLink: true, href: 'https://sbi.co.in' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-slate-150 p-4 rounded-xl border-l-4 shadow-xs"
                    style={{ borderLeftColor: brandColor }}
                  >
                    <span className="block text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                    {item.isLink ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm sm:text-base font-extrabold text-[#1B6EB5] hover:underline mt-1"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="block text-sm sm:text-base font-extrabold text-slate-850 mt-1">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {exam.summaryCards.map((card) => (
                  <div
                    key={card.label}
                    className="bg-gradient-to-br from-slate-50/50 to-white border border-slate-150 p-4 rounded-xl border-l-4"
                    style={{ borderLeftColor: brandColor }}
                  >
                    <span className="block text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">{card.label}</span>
                    <span className="block text-sm sm:text-base font-extrabold text-slate-850 mt-1">{card.value}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section 3: Important Dates */}
          <section id="important-dates" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 Important Dates & Exam Calendar' : 'Important Dates & Recruitment Timeline'}
            </h2>
            {isSbi ? (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                  Never miss a deadline. Below are the expected key dates for SBI PO 2026 based on the official notification and previous year patterns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {exam.dates.slice(0, 6).map((date) => {
                    const isUpcoming = date.status === 'upcoming';
                    return (
                      <div key={date.event} className="bg-white border border-slate-200 p-4 rounded-xl flex items-start justify-between gap-3 hover:shadow-xs transition-shadow">
                        <div className="space-y-1">
                          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Milestone</span>
                          <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">{date.event}</h4>
                          <span className="block text-sm font-bold text-[#1B6EB5]">{date.date}</span>
                        </div>
                        <span className={`text-xs sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isUpcoming ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-150 text-slate-650'
                          }`}>
                          {date.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-slate-500 italic mt-2">
                  "These dates are indicative based on the SBI PO 2025 cycle. Official dates will be confirmed at sbi.co.in upon notification release. PrepBanker will update this page immediately."
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                  Never miss a deadline. Below are the expected key dates for IBPS PO 2026 based on the official notification and previous year patterns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {exam.dates.slice(0, 6).map((date) => {
                    const isUpcoming = date.status === 'upcoming';
                    return (
                      <div key={date.event} className="bg-white border border-slate-200 p-4 rounded-xl flex items-start justify-between gap-3 hover:shadow-xs transition-shadow">
                        <div className="space-y-1">
                          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Milestone</span>
                          <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">{date.event}</h4>
                          <span className="block text-sm font-bold text-[#1B6EB5]">{date.date}</span>
                        </div>
                        <span className={`text-xs sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isUpcoming ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-150 text-slate-650'
                          }`}>
                          {date.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="mt-4">
              <Link
                href={`/${exam.id}/dates`}
                className="inline-flex items-center text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                View Full Interactive Date Calendar & Milestone Guide →
              </Link>
            </div>
          </section>

          {/* Section 4: Eligibility Criteria */}
          <section id="eligibility-criteria" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 Eligibility Criteria' : 'Eligibility Criteria Overview'}
            </h2>
            {isSbi ? (
              <div className="space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                  Before you start your preparation, confirm you meet the eligibility requirements for SBI PO 2026.
                </p>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-150 border-l-4 border-[#1B6EB5] mb-4">
                  <span className="block text-slate-500 text-xs sm:text-sm font-bold uppercase mb-1.5">Educational Qualification</span>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">{exam.eligibility.education}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">Age Limit & Relaxation</h4>
                  <p className="text-xs text-slate-400">Note: Age is calculated as of 1st April 2026.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { category: 'General / UR', age: '21 – 30 years', note: 'Standard age range' },
                      { category: 'OBC (Non-Creamy)', age: '21 – 33 years', note: '3 years relaxation' },
                      { category: 'SC / ST', age: '21 – 35 years', note: '5 years relaxation' },
                      { category: 'EWS', age: '21 – 30 years', note: 'No age relaxation' },
                      { category: 'PwBD (General/EWS)', age: '21 – 40 years', note: '10 years relaxation' },
                      { category: 'PwBD (OBC)', age: '21 – 43 years', note: '13 years relaxation' },
                      { category: 'PwBD (SC/ST)', age: '21 – 45 years', note: '15 years relaxation' },
                      { category: 'Ex-Servicemen', age: 'As per Govt Norms', note: 'Relaxation based on service' },
                    ].map((item) => (
                      <div
                        key={item.category}
                        className="bg-white border border-slate-150 p-4 rounded-xl shadow-xs hover:border-[#1B6EB5] transition-colors"
                      >
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{item.category}</span>
                        <span className="block text-base font-extrabold text-slate-850 mt-1.5">{item.age}</span>
                        <span className="block text-xs text-slate-500 mt-1 font-semibold">{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">Number of Attempts Cap</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { category: 'General / EWS', attempts: '4 Attempts', note: 'Counted for Prelims/Mains' },
                      { category: 'OBC (Non-Creamy)', attempts: '7 Attempts', note: 'Counted for Prelims/Mains' },
                      { category: 'SC / ST', attempts: 'Unlimited', note: 'No attempt caps' },
                      { category: 'PwBD (General/OBC/EWS)', attempts: '7 Attempts', note: 'General/OBC/EWS PwBD' },
                    ].map((item) => {
                      const isUnlimited = item.attempts === 'Unlimited';
                      return (
                        <div
                          key={item.category}
                          className="bg-white border border-slate-150 p-4 rounded-xl shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{item.category}</span>
                            <span className="block text-xs text-slate-500 mt-1.5 leading-snug">{item.note}</span>
                          </div>
                          <div className="mt-3.5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${isUnlimited ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                              }`}>
                              {item.attempts}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-150 border-l-4 border-[#1B6EB5]">
                  <span className="block text-slate-500 text-xs sm:text-sm font-bold uppercase mb-1.5">Academic Qualification</span>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-extrabold">{exam.eligibility.education}</p>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-2">Final year students can also apply provisionally.</span>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-150 border-l-4 border-[var(--color-gold)]">
                  <span className="block text-slate-500 text-xs sm:text-sm font-bold uppercase mb-1.5">Age Limit & Relaxation</span>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-extrabold">{exam.eligibility.age}</p>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-2">Standard upper limit relaxations apply for reserved categories.</span>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-150 border-l-4 border-green-500">
                  <span className="block text-slate-500 text-xs sm:text-sm font-bold uppercase mb-1.5">Nationality & Citizenship</span>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-extrabold">{exam.eligibility.nationality}</p>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-2">Must be citizen of India or satisfy specified refuge rules.</span>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-150 border-l-4 border-purple-500">
                  <span className="block text-slate-500 text-xs sm:text-sm font-bold uppercase mb-1.5">Number of Attempts</span>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-extrabold">{exam.eligibility.attempts}</p>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-2">
                    Age limit is the sole determining factor; no attempt caps apply.
                  </span>
                </div>
              </div>
            )}
            <div className="mt-4">
              <Link
                href={`/${exam.id}/eligibility`}
                className="inline-flex items-center text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                Read Full Age Relaxation & Educational Guidelines →
              </Link>
            </div>
          </section>

          {/* Section 5: Exam Pattern */}
          <section id="exam-pattern" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 Exam Pattern — Prelims & Mains' : 'Exam Selection Pattern'}
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed mb-4">
              {isSbi ? 'SBI PO selection has 3 exam stages followed by a Group Exercise and Personal Interview.' : 'Understand the timings, negative markings and sectional details below.'}
            </p>
            <div className="flex gap-2 mb-4 bg-slate-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setPatternTab('prelims')}
                className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-md transition-all ${patternTab === 'prelims' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
              >
                Prelims (Phase 1)
              </button>
              <button
                onClick={() => setPatternTab('mains')}
                className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-md transition-all ${patternTab === 'mains' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
              >
                Mains (Phase 2)
              </button>
            </div>

            {patternTab === 'prelims' ? (
              <div className="space-y-4">
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Section</th>
                        <th className="px-4 py-2.5">No. of Questions</th>
                        <th className="px-4 py-2.5">Maximum Marks</th>
                        <th className="px-4 py-2.5">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      {exam.examPattern[0]?.sections.map((sec) => (
                        <tr key={sec.subject}>
                          <td className="px-4 py-3 font-semibold text-slate-800">{sec.subject}</td>
                          <td className="px-4 py-3">{sec.questions}</td>
                          <td className="px-4 py-3">{sec.marks}</td>
                          <td className="px-4 py-3">{sec.time}</td>
                        </tr>
                      ))}
                      <tr className="font-bold text-slate-900 bg-slate-50/50">
                        <td className="px-4 py-3">Total</td>
                        <td className="px-4 py-3">100</td>
                        <td className="px-4 py-3">100</td>
                        <td className="px-4 py-3">60 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-1">
                  {exam.examPattern[0]?.notes.map((note, idx) => (
                    <div key={idx} className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs mb-4">
                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Section</th>
                        <th className="px-4 py-2.5">No. of Questions</th>
                        <th className="px-4 py-2.5">Maximum Marks</th>
                        <th className="px-4 py-2.5">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      {exam.examPattern[1]?.sections.map((sec) => (
                        <tr key={sec.subject}>
                          <td className="px-4 py-3 font-semibold text-slate-800">{sec.subject}</td>
                          <td className="px-4 py-3">{sec.questions}</td>
                          <td className="px-4 py-3">{sec.marks}</td>
                          <td className="px-4 py-3">{sec.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {isSbi && (
                  <div className="space-y-4">
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mt-2">Phase 3 — Group Exercise & Personal Interview</h4>
                    <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                      <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold">
                            <th className="px-4 py-2.5">Component</th>
                            <th className="px-4 py-2.5">Marks</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">Group Exercise</td>
                            <td className="px-4 py-3">20</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">Personal Interview</td>
                            <td className="px-4 py-3">30</td>
                          </tr>
                          <tr className="font-bold text-slate-900">
                            <td className="px-4 py-3">Total</td>
                            <td className="px-4 py-3">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-xs sm:text-sm text-slate-700">
                      <strong>Final merit ranking calculation:</strong> Mains objective + Descriptive + GE + Interview (200 + 50 + 50 = 300 marks)
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  {exam.examPattern[1]?.notes.map((note, idx) => (
                    <div key={idx} className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5">
              <Link
                href={`/${exam.id}/exam-pattern`}
                className="text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                Read Detailed Phase Schemes & Marks Distribution →
              </Link>
            </div>
          </section>

          {/* Section 6: Full Syllabus */}
          <section id="full-syllabus" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 Complete Syllabus — Prelims & Mains' : 'Syllabus Breakdown'}
            </h2>



            <div className="flex gap-2 mb-4 bg-slate-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setSyllabusTab('prelims')}
                className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-md transition-all border-none cursor-pointer ${syllabusTab === 'prelims' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
              >
                Prelims Topics
              </button>
              <button
                onClick={() => setSyllabusTab('mains')}
                className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-md transition-all border-none cursor-pointer ${syllabusTab === 'mains' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
              >
                Mains Topics
              </button>
            </div>

            {syllabusTab === 'prelims' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-3 text-[#1B6EB5] border-b border-slate-200 pb-1.5 flex items-center gap-1.5 font-display">
                    English Language
                  </h4>
                  <div className="flex flex-col gap-2">
                    {exam.syllabus['English Language']?.slice(0, 4).map((t) => renderTopicBadge(t))}
                    <Link
                      href={`/${exam.id}/syllabus`}
                      className="text-xs font-extrabold text-[#1B6EB5] hover:text-[#2481CC] bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 px-2.5 py-1.5 rounded-lg text-center cursor-pointer transition-colors block w-full mt-1.5 text-center no-underline"
                    >
                      + View All Syllabus Topics
                    </Link>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-3 text-[#1B6EB5] border-b border-slate-200 pb-1.5 flex items-center gap-1.5 font-display">
                    Quant Aptitude
                  </h4>
                  <div className="flex flex-col gap-2">
                    {exam.syllabus['Quantitative Aptitude']?.slice(0, 4).map((t) => renderTopicBadge(t))}
                    <Link
                      href={`/${exam.id}/syllabus`}
                      className="text-xs font-extrabold text-[#1B6EB5] hover:text-[#2481CC] bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 px-2.5 py-1.5 rounded-lg text-center cursor-pointer transition-colors block w-full mt-1.5 text-center no-underline"
                    >
                      + View All Syllabus Topics
                    </Link>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-3 text-[#1B6EB5] border-b border-slate-200 pb-1.5 flex items-center gap-1.5 font-display">
                    Reasoning Ability
                  </h4>
                  <div className="flex flex-col gap-2">
                    {exam.syllabus['Reasoning Ability']?.slice(0, 4).map((t) => renderTopicBadge(t))}
                    <Link
                      href={`/${exam.id}/syllabus`}
                      className="text-xs font-extrabold text-[#1B6EB5] hover:text-[#2481CC] bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 px-2.5 py-1.5 rounded-lg text-center cursor-pointer transition-colors block w-full mt-1.5 text-center no-underline"
                    >
                      + View All Syllabus Topics
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-3 font-display border-b border-slate-200 pb-1.5 flex items-center gap-1.5" style={{ color: isSbi ? '#1B6EB5' : '#D4A017' }}>
                    Reasoning & Computer
                  </h4>
                  <div className="flex flex-col gap-2 ">
                    {isSbi
                      ? exam.syllabus['Mains Reasoning & Computer Aptitude']?.slice(0, 4).map((t) => renderTopicBadge(t))
                      : ['Puzzles & Seating', 'Machine Input-Output', 'Data Sufficiency', 'Computer Networks'].map((t) => renderTopicBadge(t))}
                    <Link
                      href={`/${exam.id}/syllabus`}
                      className="text-xs font-extrabold hover:text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-100 px-2.5 py-1.5 rounded-lg text-center cursor-pointer transition-colors block w-full mt-1.5 text-center no-underline"
                      style={{
                        color: isSbi ? '#1B6EB5' : '#7A5200',
                        borderColor: isSbi ? '#bfdbfe' : '#fef3c7',
                        backgroundColor: isSbi ? '#eff6ff' : '#fefbeb'
                      }}
                    >
                      + View All Syllabus Topics
                    </Link>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-3 font-display border-b border-slate-200 pb-1.5 flex items-center gap-1.5" style={{ color: isSbi ? '#1B6EB5' : '#D4A017' }}>
                    General/Economy Awareness
                  </h4>
                  <div className="flex flex-col gap-2">
                    {isSbi
                      ? exam.syllabus['Mains General/Economy/Banking Awareness']?.slice(0, 4).map((t) => renderTopicBadge(t))
                      : exam.syllabus['General/Banking Awareness']?.slice(0, 4).map((t) => renderTopicBadge(t))}
                    <Link
                      href={`/${exam.id}/syllabus`}
                      className="text-xs font-extrabold hover:text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-100 px-2.5 py-1.5 rounded-lg text-center cursor-pointer transition-colors block w-full mt-1.5 text-center no-underline"
                      style={{
                        color: isSbi ? '#1B6EB5' : '#7A5200',
                        borderColor: isSbi ? '#bfdbfe' : '#fef3c7',
                        backgroundColor: isSbi ? '#eff6ff' : '#fefbeb'
                      }}
                    >
                      + View All Syllabus Topics
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5">
              <Link
                href={`/${exam.id}/syllabus`}
                className="text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                Read Full Subject-wise Syllabus topics →
              </Link>
            </div>
          </section>

          {/* Section 7: Mock Tests */}
          <section id="mock-tests" className="py-6 scroll-mt-20 border-t border-slate-200">
            {isSbi ? (
              <MockTestSnippet />
            ) : (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <Trophy size={22} className="text-[var(--color-gold)]" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-850 font-display">
                    PrepBanker Mock Tests
                  </h3>
                </div>
                <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-5">
                  PrepBanker provides detailed full length mock tests matching current difficulty trends for {exam.shortName}.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phase 1 Preparation</span>
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mt-1">Full-Length Prelims Mocks</h4>
                    <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                      20 high-fidelity test simulations matching the current difficulty trends, designed with sectional timers.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded">5 Mocks Free</span>
                      <span className="text-xs font-bold text-slate-500">20 Total Mocks</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phase 2 Preparation</span>
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mt-1">Full-Length Mains Mocks</h4>
                    <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                      15 advanced level full mocks testing analytical ability and descriptive writing simulation answers.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded">3 Mocks Free</span>
                      <span className="text-xs font-bold text-slate-500">15 Total Mocks</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-2.5 rounded-lg bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(240,180,41,0.6)] hover:-translate-y-0.5"
                  >
                    Start Free Mock Test Now →
                  </a>
                </div>
              </>
            )}
          </section>

          {/* Section: Previous Year Paper Snapshot */}
          {isSbi && (
            <section id="pyq-snapshot" className="py-6 scroll-mt-20 border-t border-slate-200">
              <PatternSnapshot ctaHref="/sbi-po-previous-year-question-papers" />
            </section>
          )}

          {/* Section 8: Sectional Tests */}
          <section id="sectional-tests" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO Sectional Tests 2026 — English, Quant & Reasoning Practice' : 'Topic & Sectional Timed Quizzes'}
            </h2>
            <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-5">
              {isSbi
                ? "Sectional tests help you master each subject individually before attempting full mocks. PrepBanker's SBI PO sectional tests are topic-focused, timed, and scored — giving you a precise understanding of where you stand in each subject. Since SBI PO Prelims has separate 20-minute timers for each section, dedicated sectional practice is not optional — it is essential."
                : "Master each subject individually with our topic-focused tests."}
            </p>

            {isSbi ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-2">English Language Sectional Tests</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2">Tests Available</th>
                          <th className="px-4 py-2">Questions per Test</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Reading Comprehension</td>
                          <td className="px-4 py-2">15</td>
                          <td className="px-4 py-2">10–15</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Cloze Test</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Para Jumbles</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">5</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Error Detection</td>
                          <td className="px-4 py-2">12</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Fill in the Blanks</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Sentence Improvement</td>
                          <td className="px-4 py-2">8</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-2">Full English Section Mock</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-2">Quantitative Aptitude Sectional Tests</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2">Tests Available</th>
                          <th className="px-4 py-2">Questions per Test</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Data Interpretation</td>
                          <td className="px-4 py-2">20</td>
                          <td className="px-4 py-2">5 sets</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Number Series</td>
                          <td className="px-4 py-2">12</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Simplification & Approximation</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">15</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Quadratic Equations</td>
                          <td className="px-4 py-2">8</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Arithmetic (Profit/Loss, SI/CI, etc.)</td>
                          <td className="px-4 py-2">15</td>
                          <td className="px-4 py-2">10</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-2">Full Quant Section Mock</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">35</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-2">Reasoning Ability Sectional Tests</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2">Tests Available</th>
                          <th className="px-4 py-2">Questions per Test</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Puzzles & Seating Arrangement</td>
                          <td className="px-4 py-2">25</td>
                          <td className="px-4 py-2">5 sets</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Syllogisms</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">5</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Inequalities</td>
                          <td className="px-4 py-2">8</td>
                          <td className="px-4 py-2">5</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Coding-Decoding</td>
                          <td className="px-4 py-2">8</td>
                          <td className="px-4 py-2">5</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Blood Relations</td>
                          <td className="px-4 py-2">6</td>
                          <td className="px-4 py-2">5</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Direction Sense</td>
                          <td className="px-4 py-2">6</td>
                          <td className="px-4 py-2">5</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-2">Full Reasoning Section Mock</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2">35</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl flex items-center justify-between flex-wrap gap-4 mt-6">
                  <span className="text-sm font-semibold text-slate-650">
                    Practice the section that is costing you marks.
                  </span>
                  <a
                    href={registerUrl}
                    className="text-sm font-bold text-[#1B6EB5] hover:underline"
                  >
                    View All Sectional Tests →
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/live-tests" className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 text-center hover:bg-slate-100 hover:border-blue-300 hover:shadow-xs transition-all border-t-4 border-t-[#1B6EB5]">
                  <span className="block font-extrabold text-slate-805 text-sm sm:text-base">Quantitative Aptitude</span>
                  <span className="text-xs sm:text-sm text-slate-500 block mt-1.5 font-semibold">30+ Sectional Tests</span>
                </Link>
                <Link href="/live-tests" className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 text-center hover:bg-slate-100 hover:border-blue-300 hover:shadow-xs transition-all border-t-4 border-t-[#1B6EB5]">
                  <span className="block font-extrabold text-slate-805 text-sm sm:text-base">Reasoning Ability</span>
                  <span className="text-xs sm:text-sm text-slate-500 block mt-1.5 font-semibold">25+ Puzzles Tests</span>
                </Link>
                <Link href="/live-tests" className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 text-center hover:bg-slate-100 hover:border-blue-300 hover:shadow-xs transition-all border-t-4 border-t-[#1B6EB5]">
                  <span className="block font-extrabold text-slate-805 text-sm sm:text-base">English Language</span>
                  <span className="text-xs sm:text-sm text-slate-500 block mt-1.5 font-semibold">20+ Comprehension Tests</span>
                </Link>
              </div>
            )}
          </section>

          {/* Section 9: Topic-wise Practice Questions (New for SBI PO) */}
          {isSbi && (
            <section id="topic-wise-questions" className="py-6 scroll-mt-20 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
                SBI PO Topic-Wise Practice Questions — 10,000+ Questions Bank
              </h2>
              <p className="text-slate-660 text-sm sm:text-[15px] leading-relaxed mb-5 font-normal">
                PrepBanker's SBI PO question bank has 10,000+ practice questions across all topics, sorted by difficulty — Easy, Medium, and Hard. Each question comes with a detailed explanation and shortcut method. Practising topic-wise before attempting full mocks is the fastest way to improve accuracy and speed.
              </p>

              <div className="space-y-6">
                <h4 className="font-extrabold text-slate-850 text-sm sm:text-base">High-Priority Topics to Focus On</h4>

                <div>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2">Reasoning — Must-Practice Topics</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2">Avg Questions in Exam</th>
                          <th className="px-4 py-2">Difficulty</th>
                          <th className="px-4 py-2">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Puzzles & Seating Arrangements</td>
                          <td className="px-4 py-2">15–20</td>
                          <td className="px-4 py-2 text-red-650 font-semibold">High</td>
                          <td className="px-4 py-2 font-extrabold text-red-650">Must Do</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Coding-Decoding (new pattern)</td>
                          <td className="px-4 py-2">5</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Syllogisms</td>
                          <td className="px-4 py-2">3–5</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Inequalities</td>
                          <td className="px-4 py-2">5</td>
                          <td className="px-4 py-2 text-green-600 font-semibold">Low–Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Blood Relations</td>
                          <td className="px-4 py-2">2–3</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-slate-500">Medium</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Direction Sense</td>
                          <td className="px-4 py-2">2–3</td>
                          <td className="px-4 py-2 text-green-650 font-semibold">Low</td>
                          <td className="px-4 py-2 font-bold text-slate-500">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2">Quantitative Aptitude — Must-Practice Topics</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2">Avg Questions in Exam</th>
                          <th className="px-4 py-2">Difficulty</th>
                          <th className="px-4 py-2">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Data Interpretation</td>
                          <td className="px-4 py-2">15–20</td>
                          <td className="px-4 py-2 text-red-650 font-semibold">High</td>
                          <td className="px-4 py-2 font-extrabold text-red-650">Must Do</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Number Series</td>
                          <td className="px-4 py-2">5</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Simplification</td>
                          <td className="px-4 py-2">5–8</td>
                          <td className="px-4 py-2 text-green-650 font-semibold">Low</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Arithmetic Word Problems</td>
                          <td className="px-4 py-2">8–10</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Quadratic Equations</td>
                          <td className="px-4 py-2">5</td>
                          <td className="px-4 py-2 text-green-650 font-semibold">Low</td>
                          <td className="px-4 py-2 font-bold text-slate-500">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2">English — Must-Practice Topics</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2">Avg Questions in Exam</th>
                          <th className="px-4 py-2">Difficulty</th>
                          <th className="px-4 py-2">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Reading Comprehension</td>
                          <td className="px-4 py-2">10</td>
                          <td className="px-4 py-2 text-red-650 font-semibold">Medium–High</td>
                          <td className="px-4 py-2 font-extrabold text-red-650">Must Do</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Cloze Test</td>
                          <td className="px-4 py-2">5–7</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">Para Jumbles</td>
                          <td className="px-4 py-2">5</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-amber-600">High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">Error Detection</td>
                          <td className="px-4 py-2">5</td>
                          <td className="px-4 py-2 text-amber-600 font-semibold">Medium</td>
                          <td className="px-4 py-2 font-bold text-slate-500">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-5 py-2.5 rounded-lg bg-[var(--color-navy-deep)] text-white hover:bg-slate-800 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_4px_12px_rgba(13,27,62,0.25)]"
                  >
                    Start Topic-Wise Practice →
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* Section 10: Current Affairs */}
          <section id="current-affairs" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'Current Affairs for SBI PO 2026 — What to Study & How Much' : 'Daily Banking & Economy Current Affairs'}
            </h2>
            <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-5 font-normal">
              {isSbi
                ? "The General/Economy/Banking Awareness section in SBI PO Mains carries 40 marks and is often the difference-maker between selection and rejection — since most candidates score similarly in Reasoning and Quant. PrepBanker publishes daily current affairs curated specifically for banking exams, so you never waste time on irrelevant news."
                : "Get updated daily with specialized digests summarizing the latest notifications."}
            </p>

            {isSbi ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-extrabold text-slate-850 text-sm sm:text-base mb-2">What to Cover for SBI PO GA</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Category</th>
                          <th className="px-4 py-2.5">Weightage</th>
                          <th className="px-4 py-2.5">What to Focus On</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Banking & Financial Awareness</td>
                          <td className="px-4 py-3">35–40%</td>
                          <td className="px-4 py-3">RBI policies, repo rate, CRR, SLR, banking schemes, new bank launches</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Current Affairs (Last 6 Months)</td>
                          <td className="px-4 py-3">25–30%</td>
                          <td className="px-4 py-3">National & international events, government schemes, summits</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Static GK</td>
                          <td className="px-4 py-3">15–20%</td>
                          <td className="px-4 py-3">HQs, taglines, governors, MD & CEOs of banks, countries & capitals</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Economy & Budget</td>
                          <td className="px-4 py-3">10–15%</td>
                          <td className="px-4 py-3">Union Budget highlights, GDP figures, IMF/World Bank reports</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Awards, Reports & Rankings</td>
                          <td className="px-4 py-3">5–10%</td>
                          <td className="px-4 py-3">Padma Awards, Nobel Prize, important indices (GII, HDI, GHI)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-extrabold text-slate-850 text-sm sm:text-base">How PrepBanker Helps</h4>
                  <ul className="list-disc list-inside text-slate-650 text-xs sm:text-sm pl-2 space-y-2 font-normal">
                    <li>Daily current affairs capsules tagged for banking exams — read in under 10 minutes</li>
                    <li>Monthly PDF compilations for quick revision before exams</li>
                    <li>Topic-wise current affairs quizzes to test retention</li>
                    <li>RBI policy tracker updated after every MPC meeting</li>
                    <li>Banking awareness quiz — 50 questions updated weekly</li>
                  </ul>
                </div>

                <div className="flex gap-3 justify-center mt-4 flex-wrap">
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--color-blue)] text-white hover:bg-slate-800 font-bold text-xs rounded-lg transition-all"
                  >
                    Read Today's Current Affairs →
                  </a>
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded-lg transition-all"
                  >
                    Attempt Banking Awareness Quiz →
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:bg-white transition-colors border-l-4 border-l-[#1B6EB5]">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5">
                    Monetary & Regulatory Updates
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Specialized digests summarizing the latest Reserve Bank of India (RBI) notifications, monetary policy revisions, SLR/CRR changes, and commercial banking regulations.
                  </p>
                </div>
                <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-200 hover:bg-white transition-colors border-l-4 border-l-[#1B6EB5]">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5">
                    Financial GK & Digests
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Comprehensive monthly news files covering national summits, financial schemes, corporate bank mergers, international indexes, and budget updates.
                  </p>
                </div>
              </div>
            )}

            {!isSbi && (
              <Link
                href="/current-affairs"
                className="inline-flex items-center text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                Read Current Affairs Digests & Quizzes →
              </Link>
            )}
          </section>

          {/* Section 11: Study Material & Strategy */}
          <section id="prep-strategy" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 Study Material & Preparation Strategy' : 'Preparation Strategy & Study Plan'}
            </h2>

            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-display">How to Prepare for SBI PO in 90 Days — Month-by-Month Plan</h3>
              <div className="relative pl-6 space-y-6 border-l border-slate-200 mb-5 py-1">
                {exam.strategy.map((phase) => (
                  <div key={phase.focus}>
                    <div className="absolute -left-[9px] w-4 h-4 rounded-full border-2 border-white bg-[#1B6EB5] mt-1" />
                    <h4 className="font-extrabold text-slate-850 text-sm sm:text-base mb-1">{phase.focus}</h4>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 pl-1 space-y-1 font-normal">
                      {phase.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {isSbi && (
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-display">Section-wise Time Strategy for SBI PO Prelims</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    Since sections are individually timed at 20 minutes each, you need a clear attempt strategy for each.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 border-t-4 border-t-[#1B6EB5]">
                      <h4 className="font-extrabold text-[#1B6EB5] text-sm sm:text-base mb-1">English (20 mins)</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2 font-normal">
                        Start with Fill in the Blanks and Error Detection. Attempt Cloze Test next. Save RC for last.
                      </p>
                      <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded block w-fit">
                        Target: 22–25 attempts (85–90% acc.)
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 border-t-4 border-t-[var(--color-gold)]">
                      <h4 className="font-extrabold text-[var(--color-gold)] text-sm sm:text-base mb-1">Quant (20 mins)</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2 font-normal">
                        Start with Simplification, Number Series, then Quadratic Equations. Attempt DI last. Skip tough Qs.
                      </p>
                      <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded block w-fit">
                        Target: 22–25 attempts (80%+ acc.)
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 border-t-4 border-t-purple-500">
                      <h4 className="font-extrabold text-purple-600 text-sm sm:text-base mb-1">Reasoning (20 mins)</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2 font-normal">
                        Start with Inequalities, Syllogisms, and Coding-Decoding. Attempt puzzles only if time permits.
                      </p>
                      <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded block w-fit">
                        Target: 22–25 attempts (85%+ acc.)
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5">
              <Link
                href={`/${exam.id}/strategy`}
                className="inline-flex items-center text-xs sm:text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                Read Topper's Detailed 90-Day Study Plan →
              </Link>
            </div>
          </section>

          {/* Section 12: Previous Year Cut-offs */}
          <section id="cut-offs" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO Previous Year Cut-off Marks (2018–2025)' : 'Historical Category Cut-off Trends'}
            </h2>
            <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-4">
              Use these as your target scores. Consistently scoring above the General category cut-off in mocks = exam-ready.
            </p>

            {isSbi ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Prelims Cut-off (Out of 100)</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Year</th>
                          <th className="px-4 py-2">General</th>
                          <th className="px-4 py-2">OBC</th>
                          <th className="px-4 py-2">SC</th>
                          <th className="px-4 py-2">ST</th>
                          <th className="px-4 py-2">EWS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-2">62.50</td>
                          <td className="px-4 py-2">59.00</td>
                          <td className="px-4 py-2">52.50</td>
                          <td className="px-4 py-2">46.00</td>
                          <td className="px-4 py-2">58.25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">2023</td>
                          <td className="px-4 py-2">60.75</td>
                          <td className="px-4 py-2">57.50</td>
                          <td className="px-4 py-2">50.00</td>
                          <td className="px-4 py-2">44.50</td>
                          <td className="px-4 py-2">56.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">2022</td>
                          <td className="px-4 py-2">58.00</td>
                          <td className="px-4 py-2">55.25</td>
                          <td className="px-4 py-2">48.75</td>
                          <td className="px-4 py-2">42.00</td>
                          <td className="px-4 py-2">54.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">2021</td>
                          <td className="px-4 py-2">55.50</td>
                          <td className="px-4 py-2">52.75</td>
                          <td className="px-4 py-2">46.50</td>
                          <td className="px-4 py-2">40.00</td>
                          <td className="px-4 py-2">52.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">2019</td>
                          <td className="px-4 py-2">59.75</td>
                          <td className="px-4 py-2">56.50</td>
                          <td className="px-4 py-2">50.25</td>
                          <td className="px-4 py-2">44.00</td>
                          <td className="px-4 py-2">—</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">2018</td>
                          <td className="px-4 py-2">57.25</td>
                          <td className="px-4 py-2">54.00</td>
                          <td className="px-4 py-2">48.00</td>
                          <td className="px-4 py-2">41.50</td>
                          <td className="px-4 py-2">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Mains Cut-off (Out of 200 Objective)</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2">Year</th>
                          <th className="px-4 py-2">General</th>
                          <th className="px-4 py-2">OBC</th>
                          <th className="px-4 py-2">SC</th>
                          <th className="px-4 py-2">ST</th>
                          <th className="px-4 py-2">EWS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-2">89.47</td>
                          <td className="px-4 py-2">83.10</td>
                          <td className="px-4 py-2">72.40</td>
                          <td className="px-4 py-2">64.20</td>
                          <td className="px-4 py-2">81.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">2023</td>
                          <td className="px-4 py-2">86.20</td>
                          <td className="px-4 py-2">80.50</td>
                          <td className="px-4 py-2">70.00</td>
                          <td className="px-4 py-2">61.75</td>
                          <td className="px-4 py-2">78.25</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">2022</td>
                          <td className="px-4 py-2">84.10</td>
                          <td className="px-4 py-2">78.30</td>
                          <td className="px-4 py-2">67.80</td>
                          <td className="px-4 py-2">59.50</td>
                          <td className="px-4 py-2">76.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">2021</td>
                          <td className="px-4 py-2">81.50</td>
                          <td className="px-4 py-2">75.80</td>
                          <td className="px-4 py-2">65.00</td>
                          <td className="px-4 py-2">57.25</td>
                          <td className="px-4 py-2">74.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-semibold text-slate-800">2019</td>
                          <td className="px-4 py-2">78.90</td>
                          <td className="px-4 py-2">72.50</td>
                          <td className="px-4 py-2">62.75</td>
                          <td className="px-4 py-2">55.00</td>
                          <td className="px-4 py-2">—</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-2 font-semibold text-slate-800">2018</td>
                          <td className="px-4 py-2">76.25</td>
                          <td className="px-4 py-2">70.00</td>
                          <td className="px-4 py-2">60.50</td>
                          <td className="px-4 py-2">53.00</td>
                          <td className="px-4 py-2">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-250 p-4 rounded-xl text-xs sm:text-sm text-slate-700 font-semibold">
                  "The General cut-off has risen by ~6 marks over 6 years in Prelims and ~13 marks in Mains. Aim for 72+ in Prelims and 100+ in Mains to be safe across all categories."
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl mb-5 space-y-4">
                <h4 className="text-sm sm:text-base font-extrabold text-slate-800 text-center mb-2">
                  Comparative Prelims General Cut-off Marks
                </h4>
                <div className="h-44 flex items-end justify-around border-b border-slate-300 pb-2 px-4">
                  {exam.cutoffs.slice(0, 3).map((cutoff) => {
                    const score = cutoff.prelims.general;
                    const heightPercent = Math.min(100, Math.round((score / 80) * 100));
                    return (
                      <div key={cutoff.year} className="flex flex-col items-center gap-2 w-16 group">
                        <span className="text-xs font-black text-slate-700 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-xs opacity-90 group-hover:scale-105 transition-transform">
                          {score} M
                        </span>
                        <div
                          className="w-8 sm:w-10 rounded-t-lg bg-[#1B6EB5] hover:bg-[#2481CC] transition-all duration-300 relative shadow-sm"
                          style={{ height: `${heightPercent}px`, minHeight: '40px' }}
                        >
                          <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg" />
                        </div>
                        <span className="text-xs font-bold text-slate-500 mt-1">{cutoff.year}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-4">
              <Link
                href={`/${exam.id}/cut-off`}
                className="inline-flex items-center text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                View Full Category-wise Cut-off History →
              </Link>
            </div>
          </section>

          {/* Section: Exam Analysis */}
          {isSbi && (
            <section id="exam-analysis" className="py-6 scroll-mt-20 border-t border-slate-200">
              <ExamAnalysisSection examId={exam.id} />
            </section>
          )}

          {/* Section 13: Salary & Career Growth */}
          <section id="salary-career" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-850 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO Salary 2026 — In-hand Pay, Allowances & Career Progression' : 'Salary Structure, Perks & Allowances'}
            </h2>

            <div className="space-y-6">
              {isSbi ? (
                <>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-display mb-2">SBI PO Monthly Salary Breakdown</h3>
                    <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                      <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold">
                            <th className="px-4 py-2.5">Component</th>
                            <th className="px-4 py-2.5">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">Basic Pay (Scale I)</td>
                            <td className="px-4 py-3">₹48,480</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">Dearness Allowance (DA)</td>
                            <td className="px-4 py-3">~₹22,300</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">House Rent Allowance — Metro</td>
                            <td className="px-4 py-3">₹7,272</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">House Rent Allowance — Urban</td>
                            <td className="px-4 py-3">₹5,818</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">House Rent Allowance — Semi-urban</td>
                            <td className="px-4 py-3">₹4,363</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance</td>
                            <td className="px-4 py-3">₹5,200</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">Transport Allowance</td>
                            <td className="px-4 py-3">₹1,200</td>
                          </tr>
                          <tr className="bg-slate-50/50 font-bold text-slate-900">
                            <td className="px-4 py-3">Gross Monthly (Metro)</td>
                            <td className="px-4 py-3">~₹84,600</td>
                          </tr>
                          <tr className="font-bold text-slate-900">
                            <td className="px-4 py-3">Gross Monthly (Non-metro)</td>
                            <td className="px-4 py-3">~₹71,000 – ₹80,000</td>
                          </tr>
                          <tr className="bg-slate-50/50 font-bold text-slate-900">
                            <td className="px-4 py-3">Annual CTC (approx.)</td>
                            <td className="px-4 py-3">₹21.97 Lakh</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-extrabold text-slate-850 text-sm sm:text-base">Additional perks & benefits:</h4>
                    <ul className="list-disc list-inside text-slate-655 text-xs sm:text-sm pl-2 space-y-1.5 font-normal">
                      <li>Mediclaim for self & family (₹6 lakh cover)</li>
                      <li>NPS pension</li>
                      <li>Subsidised home loan at ~7% interest</li>
                      <li>Subsidised car loan</li>
                      <li>LFC / LTC twice a year</li>
                      <li>Annual bonus</li>
                      <li>Paid leave (30 days EL + 12 SL)</li>
                      <li>Staff quarters in select postings</li>
                      <li>Club membership</li>
                      <li>Mobile reimbursement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-display mb-2">SBI PO Career Growth & Promotion Path</h3>
                    <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                      <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold">
                            <th className="px-4 py-2.5">Years of Service</th>
                            <th className="px-4 py-2.5">Designation</th>
                            <th className="px-4 py-2.5">Approximate CTC</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">0 – 2 years</td>
                            <td className="px-4 py-3">Probationary Officer → Junior Management Grade Scale I</td>
                            <td className="px-4 py-3">₹10–12 LPA</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">2 – 5 years</td>
                            <td className="px-4 py-3">Assistant Manager (JMGS I)</td>
                            <td className="px-4 py-3">₹12–15 LPA</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">5 – 8 years</td>
                            <td className="px-4 py-3">Deputy Manager (MMGS Scale II)</td>
                            <td className="px-4 py-3">₹16–20 LPA</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">8 – 13 years</td>
                            <td className="px-4 py-3">Manager (MMGS Scale III)</td>
                            <td className="px-4 py-3">₹22–28 LPA</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">13 – 18 years</td>
                            <td className="px-4 py-3">Senior Manager (SMGS Scale IV)</td>
                            <td className="px-4 py-3">₹30–38 LPA</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="px-4 py-3 font-semibold text-slate-800">18 – 23 years</td>
                            <td className="px-4 py-3">Chief Manager (SMGS Scale V)</td>
                            <td className="px-4 py-3">₹42–52 LPA</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-slate-800">23+ years</td>
                            <td className="px-4 py-3">AGM / DGM / GM / ED / MD & CEO</td>
                            <td className="px-4 py-3">₹60 LPA+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-2">
                      "SBI offers the fastest promotion cycle among all PSU banks. Officers who clear internal promotion exams can reach Scale III in 5 years instead of 8."
                    </p>
                  </div>
                </>
              ) : (
                <div className="bg-gradient-to-br from-slate-900 to-[#1e293b] border border-slate-850 p-5 rounded-2xl text-white shadow-md mb-5">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4 flex-wrap gap-2">
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Post Cadre: Scale I</span>
                      <h4 className="font-extrabold text-xs sm:text-sm mt-0.5">{exam.shortName} Entry Level Salary Structure</h4>
                    </div>
                    <span className="text-xs font-black text-[#1B6EB5] bg-blue-50/10 border border-blue-50/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Confirmed Post
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Basic Starting Pay</span>
                        <span className="block text-xl sm:text-2xl font-black text-[var(--color-gold-bright)] mt-0.5">{exam.salary.basic}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Metro City Gross In-Hand</span>
                        <span className="block text-xl sm:text-2xl font-black text-white mt-0.5">{exam.salary.gross}</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
                      <span className="block text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-white/10 pb-1 mb-2">
                        Key Allowance Benefits
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exam.salary.allowances.slice(0, 4).map((allow) => (
                          <span key={allow} className="text-xs sm:text-xs font-bold bg-white/10 text-slate-200 px-2 py-0.5 rounded">
                            {allow}
                          </span>
                        ))}
                        <span className="text-xs sm:text-xs font-extrabold text-[#F0B429] bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                          + leased HRA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <Link
                href={`/${exam.id}/salary`}
                className="inline-flex items-center text-sm font-bold text-[#1B6EB5] hover:text-[#2481CC] underline"
              >
                View Allowances, Perks, Promotions & Career Hierarchies →
              </Link>
            </div>
          </section>

          {/* Section 14: Selection Process Deep Dive */}
          {isSbi ? (
            <section id="selection-process" className="py-6 scroll-mt-20 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
                SBI PO 2026 Selection Process — All 4 Stages Explained
              </h2>

              <div className="space-y-6 text-slate-700 text-sm leading-relaxed font-normal">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">Stage 1 — Preliminary Exam:</h4>
                  <p>Online, 100 questions, 100 marks, 60 minutes. Three sections with individual 20-minute timers. Qualifying in nature — marks are not added to final merit. Approximately top 10–12 candidates per vacancy are shortlisted for Mains.</p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">Stage 2 — Main Exam:</h4>
                  <p>Online, 155 objective questions (200 marks, 180 minutes) + 1 Descriptive test (50 marks, 30 minutes). The descriptive test involves an essay and a formal letter. Marks from this stage form the base for final merit. Sectional as well as overall cut-offs apply.</p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">Stage 3 — Group Exercise (GE):</h4>
                  <p>Shortlisted Mains qualifiers appear for a Group Exercise conducted at SBI's regional offices. Candidates are assessed on communication, leadership, listening, and teamwork. This stage carries 20 marks. Typically 3–4 candidates per vacancy are shortlisted from GE for the final interview.</p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">Stage 4 — Personal Interview:</h4>
                  <p>30-mark interview conducted by a panel of senior SBI officers and external experts. Focuses on banking awareness, current affairs, general awareness, candidate's background, and situational judgement. Grooming, confidence, and articulation matter significantly at this stage.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Final Merit Calculation</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Stage</th>
                          <th className="px-4 py-2.5">Marks</th>
                          <th className="px-4 py-2.5">Weightage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Mains Objective</td>
                          <td className="px-4 py-3">200</td>
                          <td className="px-4 py-3" rowSpan={2}>75% (Normalized)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Descriptive Test</td>
                          <td className="px-4 py-3">50</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Group Exercise</td>
                          <td className="px-4 py-3">20</td>
                          <td className="px-4 py-3" rowSpan={2}>25% (Normalized)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Personal Interview</td>
                          <td className="px-4 py-3">30</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-3">Total</td>
                          <td className="px-4 py-3">300</td>
                          <td className="px-4 py-3">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            /* Section 13: Comparison */
            <section id="comparison" className="py-6 scroll-mt-20 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
                {exam.shortName} vs SBI PO Comparison
              </h2>
              <div className="overflow-hidden border border-slate-200 rounded-xl bg-white mb-4 text-xs sm:text-sm">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold">
                      <th className="px-4 py-3">Parameters</th>
                      <th className="px-4 py-3">IBPS PO</th>
                      <th className="px-4 py-3">SBI PO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-650">
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800">Participating Banks</td>
                      <td className="px-4 py-3">11 Public Sector Banks</td>
                      <td className="px-4 py-3">SBI Only</td>
                    </tr>
                    <tr className="bg-slate-50/50 hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800">Vacancies</td>
                      <td className="px-4 py-3">3,500+ (Higher)</td>
                      <td className="px-4 py-3">1,500 (Moderate)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800">Base Basic Salary</td>
                      <td className="px-4 py-3">₹36,000/month</td>
                      <td className="px-4 py-3">₹48,480/month (Higher)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Section 15: Platform Features */}
          {isSbi && (
            <section id="platform-features" className="py-6 scroll-mt-20 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 font-display border-b border-slate-100 pb-3">
                Why Prepare for SBI PO on PrepBanker?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    Free SBI PO Mock Tests
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Start with 5 free full-length Prelims mocks and 3 free Mains mocks — no payment required, no card needed. Get instant scores, section-wise analysis, and rank among all test-takers.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    SBI PO Sectional Tests
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    80+ topic-specific sectional tests covering every chapter in the Prelims and Mains syllabus. Timed exactly like the real exam sections.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    10,000+ Practice Questions
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Topic-wise question bank with difficulty filters. Every question has a step-by-step explanation and a shortcut method. Track what you have attempted and your accuracy per topic.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    Live Exam Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Attempt live SBI PO mock tests with thousands of aspirants simultaneously. Real-time leaderboard, countdown timer, and instant result with all-India percentile.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    Daily Current Affairs
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Banking-exam-tagged daily updates. 5-minute daily capsules, monthly PDFs, and weekly quizzes so your GA preparation never goes stale.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    Performance Analytics Dashboard
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Know your speed, accuracy, and percentile for every topic. The analytics dashboard shows improvement trends over time and flags topics where you are losing the most marks.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    Descriptive Writing Practice
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Model essays and letters on banking topics with marking criteria so you are not caught off-guard in the SBI PO Mains descriptive section.
                  </p>
                </div>

                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-xl hover:shadow-xs transition-shadow">
                  <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5 flex items-center gap-1.5 text-[#1B6EB5]">
                    Study Material & Notes
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Topic-wise notes for every chapter in the SBI PO syllabus — concise, exam-focused, and regularly updated.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 text-center mt-6">
                <p className="text-sm font-semibold text-white/80 mb-3">Join 50,000+ aspirants already preparing on PrepBanker.</p>
                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs sm:text-sm rounded-lg transition-all"
                >
                  Start Preparing Free →
                </a>
              </div>
            </section>
          )}

          {/* Section 16/17: FAQs */}
          <section id="faqs" className="py-6 scroll-mt-20 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-855 mb-4 font-display border-b border-slate-100 pb-3">
              {isSbi ? 'SBI PO 2026 — Frequently Asked Questions' : 'Frequently Asked Questions (FAQs)'}
            </h2>
            <div className="space-y-3">
              {exam.examFaqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-blue-200 bg-slate-50/50' : 'bg-white'
                      }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-850 text-sm sm:text-base"
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
          <ExamAuthorSection examId={exam.id} />
        </main>

        {/* Right Column: Sticky Sidebar (Quick Navigation & CTA Cards) */}
        <aside className="sticky top-20 space-y-4">

          {/* Quick Navigation panel */}
          <QuickNavigation exam={exam} />

          <div className={`bg-gradient-to-br border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white ${isSbi ? 'from-[#030712] to-[#091024]' : 'from-[#07102A] to-[#1A2D5A]'
            }`}>
            <div className="relative z-10">
              <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
              <h4 className="font-bold text-sm mb-1 font-display">Ready to Crack {exam.shortName} 2026?</h4>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                Join 50k+ banking aspirants practicing with PrepBanker mocks.
              </p>
              <a
                href={registerUrl}
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

      <Footer />

      {/* ── Eligibility Checker Modal ── */}
      {showEligModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadein">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                🎓 {exam.shortName} 2026 Eligibility Checker
              </h3>
              <button
                onClick={() => setShowEligModal(false)}
                className="text-slate-400 hover:text-slate-650 p-1.5 rounded-full hover:bg-slate-105 transition-all cursor-pointer border-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 overflow-y-auto flex-1 text-slate-700 text-xs sm:text-sm">
              <div className="space-y-1">
                <label className="block font-bold text-slate-700">Enter Your Age (in years):</label>
                <div className="flex gap-3 items-center">
                  <input
                    type="number"
                    min={18}
                    max={50}
                    value={eligAge}
                    onChange={(e) => setEligAge(Number(e.target.value))}
                    className="w-20 px-3 py-1.5 border border-slate-200 rounded-lg text-center font-bold text-slate-800 focus:border-[#1B6EB5] focus:outline-none"
                  />
                  <input
                    type="range"
                    min={18}
                    max={50}
                    value={eligAge}
                    onChange={(e) => setEligAge(Number(e.target.value))}
                    className="flex-1 accent-[#1B6EB5]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-slate-700">Graduation Status:</label>
                <select
                  value={eligGrad}
                  onChange={(e) => setEligGrad(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:border-[#1B6EB5] focus:outline-none font-semibold"
                >
                  <option value="completed">Completed Graduation</option>
                  <option value="final_year">In Final Year / Semester</option>
                  <option value="undergrad">Undergraduate (Not in final year)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-slate-700">Select Category:</label>
                <select
                  value={eligCategory}
                  onChange={(e) => setEligCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:border-[#1B6EB5] focus:outline-none font-semibold"
                >
                  <option value="general">General / EWS (Unreserved)</option>
                  <option value="obc">OBC (Non-Creamy Layer)</option>
                  <option value="scst">SC / ST</option>
                  <option value="pwbd_gen">PwBD (General / EWS)</option>
                  <option value="pwbd_obc">PwBD (OBC)</option>
                  <option value="pwbd_scst">PwBD (SC / ST)</option>
                </select>
              </div>

              <button
                onClick={handleCheckEligibility}
                className="w-full py-2.5 rounded-lg text-white font-extrabold tracking-wide transition-all shadow-md cursor-pointer hover:opacity-95 text-center mt-2 border-none"
                style={{ background: isSbi ? '#1B6EB5' : '#D4A017', color: isSbi ? '#fff' : '#07102A' }}
              >
                Verify My Eligibility
              </button>

              {/* Eligibility Result output */}
              {eligResult && (
                <div
                  className={`p-4 rounded-xl border flex flex-col gap-1.5 animate-fadein ${eligResult.eligible
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-rose-50 border-rose-250 text-rose-800'
                    }`}
                >
                  <div className="flex items-center gap-1.5 font-extrabold text-sm sm:text-base">
                    {eligResult.eligible ? (
                      <span className="bg-green-600 text-white rounded-full p-0.5 text-xs flex items-center justify-center w-5 h-5">✓</span>
                    ) : (
                      <span className="bg-rose-600 text-white rounded-full p-0.5 text-xs flex items-center justify-center w-5 h-5">✕</span>
                    )}
                    <span>{eligResult.text}</span>
                  </div>
                  <p className="text-xs font-semibold leading-relaxed">{eligResult.details}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Salary & Perks Calculator Modal ── */}
      {showSalModal && (() => {
        const sal = getSalaryDetails();
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadein">
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h3 className="font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                  💵 {exam.shortName} 2026 Salary & Allowance Calculator
                </h3>
                <button
                  onClick={() => setShowSalModal(false)}
                  className="text-slate-400 hover:text-slate-650 p-1.5 rounded-full hover:bg-slate-105 transition-all cursor-pointer border-none"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 overflow-y-auto flex-1 text-slate-700 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City Class Selector */}
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-700">Posting Location Category:</label>
                    <select
                      value={salCity}
                      onChange={(e) => setSalCity(e.target.value as any)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:border-[#1B6EB5] focus:outline-none font-semibold"
                    >
                      <option value="metro">Metro Class A (Delhi, Mumbai, etc.)</option>
                      <option value="urban">Urban Class B (Major Cities)</option>
                      <option value="semi">Semi-Urban/Rural Class C</option>
                    </select>
                  </div>

                  {/* Leased Housing Toggle */}
                  <div className="space-y-1 flex flex-col justify-end">
                    <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-150 p-2.5 rounded-lg">
                      <input
                        type="checkbox"
                        id="leasedHousing"
                        checked={salLease}
                        onChange={(e) => setSalLease(e.target.checked)}
                        className="w-4.5 h-4.5 accent-[#1B6EB5] cursor-pointer"
                      />
                      <label htmlFor="leasedHousing" className="text-xs font-bold text-slate-700 cursor-pointer select-none">
                        Avail Leased Housing instead of HRA
                      </label>
                    </div>
                  </div>
                </div>

                {/* Salary Breakdown Table */}
                <div className="border border-slate-150 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-850 text-white font-bold">
                        <th className="px-4 py-2">Earning Components</th>
                        <th className="px-4 py-2 text-right">Monthly Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-2.5 font-semibold text-slate-850">Basic Starting Pay (Scale I)</td>
                        <td className="px-4 py-2.5 text-right font-black text-slate-855">₹{sal.basic.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-semibold text-slate-850">Dearness Allowance (DA)</td>
                        <td className="px-4 py-2.5 text-right font-black text-slate-855">₹{sal.da.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-semibold text-slate-850">Special Allowance</td>
                        <td className="px-4 py-2.5 text-right font-black text-slate-855">₹{sal.special.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-semibold text-slate-850">Transport Allowance</td>
                        <td className="px-4 py-2.5 text-right font-black text-slate-855">₹{sal.transport.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-semibold text-slate-800 flex items-center gap-1">
                          <span>{salLease ? 'Leased Housing Benefit' : 'House Rent Allowance (HRA)'}</span>
                          {salLease && (
                            <span className="text-xs text-[#1B6EB5] font-bold">
                              *(Paid to landlord)
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2.5 text-right font-black text-slate-855">₹{sal.housingBenefit.toLocaleString()}</td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-bold">
                        <td className="px-4 py-2.5">Total Gross Salary</td>
                        <td className="px-4 py-2.5 text-right font-black">₹{sal.gross.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Deductions & Net Pay */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-rose-50/50 border border-rose-100 p-4 rounded-xl space-y-1">
                    <span className="block text-xs font-bold text-rose-600 uppercase tracking-wider">Mandatory Deductions</span>
                    <div className="flex justify-between text-xs font-semibold text-slate-650 mt-1">
                      <span>NPS Contribution (10%):</span>
                      <span>₹{sal.nps.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold text-slate-650">
                      <span>Professional Tax:</span>
                      <span>₹{sal.profTax}</span>
                    </div>
                    <div className="border-t border-rose-200/50 pt-1.5 mt-1.5 flex justify-between font-black text-rose-800 text-xs">
                      <span>Total Deductions:</span>
                      <span>₹{sal.deductions.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="block text-xs font-bold text-green-700 uppercase tracking-wider">
                        {salLease ? 'Estimated Cash In Hand' : 'Net Take-Home Monthly'}
                      </span>
                      <span className="block text-2xl font-black text-green-800 mt-1">
                        ₹{sal.netInHand.toLocaleString()}
                      </span>
                    </div>
                    {salLease && (
                      <p className="text-xs text-green-700 font-semibold leading-normal mt-1.5">
                        *Excludes housing lease of ₹{sal.leaseAmount.toLocaleString()} paid directly to landlord. You get free accommodation!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
