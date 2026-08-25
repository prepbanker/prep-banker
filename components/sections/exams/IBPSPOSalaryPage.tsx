// PATH: components/sections/exams/IBPSPOSalaryPage.tsx
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
  PlusCircle,
  MinusCircle,
  TrendingUp,
  Percent,
  Calculator as CalculatorIcon
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function IBPSPOSalaryPage() {
  const exam = getExamData('ibps-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Calculator State
  const [cityType, setCityType] = useState<string>('Metro');
  const [yearsOfService, setYearsOfService] = useState<number>(1);
  const [taxRegime, setTaxRegime] = useState<string>('New');

  // Outputs
  const [calcBasic, setCalcBasic] = useState<number>(48480);
  const [calcDA, setCalcDA] = useState<number>(16000);
  const [calcHRA, setCalcHRA] = useState<number>(4800);
  const [calcSpecial, setCalcSpecial] = useState<number>(6300);
  const [calcCCA, setCalcCCA] = useState<number>(2300);
  const [calcGross, setCalcGross] = useState<number>(77580);
  const [calcNPS, setCalcNPS] = useState<number>(6448);
  const [calcTax, setCalcTax] = useState<number>(500);
  const [calcInHand, setCalcInHand] = useState<number>(70632);

  useEffect(() => {
    // Basic pay based on scale incremental steps
    const basicMap: Record<number, number> = {
      1: 48480,
      2: 50480,
      3: 52480,
      4: 54480,
      5: 56480
    };
    const basic = basicMap[yearsOfService] || 48480;

    // DA (roughly 33% of basic)
    const da = Math.round(basic * 0.33);

    // HRA (Metro = 9.9%, Urban = 9%, Semi-Urban = 8%, Rural = 7%)
    let hraPercent = 0.07;
    if (cityType === 'Metro') hraPercent = 0.099;
    else if (cityType === 'Urban') hraPercent = 0.09;
    else if (cityType === 'Semi-Urban') hraPercent = 0.08;
    const hra = Math.round(basic * hraPercent);

    // Special allowance (roughly 13% of basic)
    const special = Math.round(basic * 0.13);

    // CCA
    let cca = 0;
    if (cityType === 'Metro') cca = 2300;
    else if (cityType === 'Urban') cca = 1800;
    else if (cityType === 'Semi-Urban') cca = 1400;

    const gross = basic + da + hra + special + cca;

    // NPS (10% of basic + da)
    const nps = Math.round((basic + da) * 0.10);

    // Tax regime estimate
    let tax = 200; // Prof tax base
    if (taxRegime === 'Old') {
      tax += Math.round(gross * 0.03); // Old regime estimate TDS
    } else {
      tax += Math.round(gross * 0.01); // New regime estimate TDS
    }

    const inHand = gross - nps - tax;

    setCalcBasic(basic);
    setCalcDA(da);
    setCalcHRA(hra);
    setCalcSpecial(special);
    setCalcCCA(cca);
    setCalcGross(gross);
    setCalcNPS(nps);
    setCalcTax(tax);
    setCalcInHand(inHand);
  }, [cityType, yearsOfService, taxRegime]);

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
        {"@type": "ListItem", "position": 3, "name": "Salary", "item": "https://prepbanker.com/ibps-po/salary"}
      ]
    },
    // 2. FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the basic pay of IBPS PO in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The starting basic pay of IBPS PO in 2026 is Rs. 48,480 per month under the 12th Bipartite Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What is the IBPS PO pay scale?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO pay scale is Rs. 48,480-2,000/7-62,480-2,340/2-67,160-2,680/7-85,920, allowing basic pay to reach a maximum of Rs. 85,920 in Scale I."
          }
        },
        {
          "@type": "Question",
          "name": "What is the in-hand salary of IBPS PO 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO in-hand salary in 2026 is approximately Rs. 65,000 to Rs. 76,000 per month, varying by posting city and applicable deductions."
          }
        },
        {
          "@type": "Question",
          "name": "Why do IBPS PO in-hand salary figures vary so much across websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In-hand salary estimates vary because they depend on posting city, NPS deduction rate, tax regime chosen, and quarterly Dearness Allowance revisions, none of which are fixed nationally."
          }
        },
        {
          "@type": "Question",
          "name": "What is the gross salary of IBPS PO in a metro city?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The gross monthly salary of an IBPS PO in a metro city is approximately Rs. 85,000 to Rs. 90,000, including all allowances."
          }
        },
        {
          "@type": "Question",
          "name": "Under which settlement is the IBPS PO salary structured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IBPS PO salary follows the 12th Bipartite Settlement (9th Joint Note), signed in March 2024 and effective from November 2022."
          }
        },
        {
          "@type": "Question",
          "name": "How much is deducted for NPS from IBPS PO salary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 10% of Basic Pay plus Dearness Allowance is deducted monthly for the National Pension System."
          }
        },
        {
          "@type": "Question",
          "name": "What was the IBPS PO basic pay before the 12th Bipartite Settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the previous 11th Bipartite Settlement, the starting basic pay was Rs. 36,000, which increased to Rs. 48,480 under the 12th Bipartite Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What is the annual CTC of an IBPS PO in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The annual CTC of an IBPS PO in 2026 is approximately Rs. 9 lakh to Rs. 10.5 lakh, excluding one-off bonuses."
          }
        }
      ]
    },
    // 3. WebPage + speakable Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IBPS PO Salary 2026",
      "url": "https://prepbanker.com/ibps-po/salary",
      "dateModified": "2026-07-27",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".status-strip", ".why-estimates-vary"]
      },
      "about": {
        "@type": "Thing",
        "name": "IBPS PO Salary Structure"
      }
    },
    // 4. JobSalary / MonetaryAmount structured data
    {
      "@context": "https://schema.org",
      "@type": "Occupation",
      "name": "Probationary Officer (IBPS PO)",
      "occupationalCategory": "Bank Officer",
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "name": "base",
        "currency": "INR",
        "duration": "P1M",
        "percentile10": "65000",
        "median": "70000",
        "percentile90": "76000"
      },
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Institute of Banking Personnel Selection"
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
            <span className="text-white/80">Salary</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:items-center">
            {/* Left Column: Headline, Stats, Actions */}
            <div className="space-y-6">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wide uppercase font-sans">
                Wage Structure
              </div>

              {/* Title & Meta */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  IBPS PO Salary 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Basic pay, real in-hand range by city, and why every website quotes a different number — plus a calculator so you can see your own estimate instead of trusting someone else's average.
                </p>
              </div>

              {/* Status Strip */}
              <div className="status-strip inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <span className="flex items-center gap-1">🟢 Basic Pay: ₹48,480/month (12th Bipartite Settlement)</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟢 Pay Scale: ₹48,480 – 85,920</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1">🟡 In-Hand Salary: ₹65,000 – ₹76,000/month</span>
              </div>

              {/* Inline Callout Box */}
              <div className="why-estimates-vary p-4 bg-slate-900/60 border border-white/10 rounded-2xl space-y-2.5">
                <div className="text-xs font-black uppercase tracking-wider text-[#FBBF24] flex items-center gap-1.5 font-display">
                  <Info size={12} className="text-[#FBBF24]" /> Understanding Salary Variances
                </div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans font-medium">
                  You'll see IBPS PO in-hand salary quoted anywhere from ₹52,000 to ₹80,000 across different sites. That's not an error — it depends on your posting city, tax regime, and how much of NPS/professional tax each estimate accounts for. We break down exactly where that range comes from below.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="#calculator-widget"
                  className="px-6 py-3 bg-[#FBBF24] hover:bg-[#E5A91E] text-slate-950 font-black text-sm rounded-xl transition-all shadow-[0_4px_12px_rgba(250,180,41,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  Calculate Your Estimated In-Hand Salary
                </a>
                <Link
                  href="/ibps-po/selection-process"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:border-white/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
                >
                  See the Full Selection Process <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 font-sans">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />

                <div className="font-bold text-xs uppercase tracking-widest text-[#FBBF24] border-b border-white/10 pb-2.5 font-display text-center">
                  Salary Key Highlights
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Starting Basic</span>
                    <span className="text-sm font-black text-white">₹48,480</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Scale I Maximum</span>
                    <span className="text-sm font-black text-[#FBBF24]">₹85,920</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Gross Metro</span>
                    <span className="text-sm font-black text-white">₹85,000–90,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-semibold">Annual CTC</span>
                    <span className="text-sm font-black text-[#FBBF24]">₹9.0 – 10.5 Lakh</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3.5 text-[10px] text-white/50 leading-normal flex gap-1.5 items-start">
                  <Info size={11} className="shrink-0 text-[#FBBF24] mt-0.5" />
                  <span>Wage structures follow the 12th Bipartite Settlement guidelines.</span>
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
            <QuickNavigation exam={exam} activeSlug="salary" />
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
                  <a href="#basic-pay" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">1</span>
                    Basic Pay & Scale
                  </a>
                </li>
                <li>
                  <a href="#variance-factors" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">2</span>
                    Salary Variance Variables
                  </a>
                </li>
                <li>
                  <a href="#gross-breakdown" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">3</span>
                    Gross Salary Breakdown
                  </a>
                </li>
                <li>
                  <a href="#city-inhand" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">4</span>
                    City-wise In-hand Pay
                  </a>
                </li>
                <li>
                  <a href="#annual-ctc" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">5</span>
                    Annual CTC Value
                  </a>
                </li>
                <li>
                  <a href="#growth-milestones" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">6</span>
                    Salary Growth Milestones
                  </a>
                </li>
                <li>
                  <a href="#allowances-perks" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">7</span>
                    Allowances & Perks list
                  </a>
                </li>
                <li>
                  <a href="#calculator-widget" className="group flex items-center text-sm text-slate-600 hover:text-[#1B6EB5] font-semibold no-underline">
                    <span className="mr-2 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:text-white transition-all font-bold">8</span>
                    Salary Calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 1: BASIC PAY & PAY SCALE 2026 ── */}
          <section id="basic-pay" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <FileSpreadsheet size={20} className="stroke-[2.5]" />
                </span>
                IBPS PO Basic Pay & Pay Scale 2026
              </h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-655 text-xs font-black rounded-lg border border-indigo-100 self-start sm:self-auto">
                CRP Scale I Standard
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left side: increment years visual timeline */}
              <div className="lg:col-span-8 p-6 bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-150 rounded-3xl space-y-4 shadow-xs">
                <span className="text-[10px] font-black text-indigo-655 uppercase tracking-widest">Pay Band Increments</span>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Increment Stages Under 12th BPS</h3>
                
                <div className="space-y-4 font-sans text-xs font-semibold text-slate-600 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-655 flex items-center justify-center font-black">1</span>
                    <div>
                      <span className="block font-black text-slate-850">Initial basic pay: ₹48,480</span>
                      <span>Starting value with annual increments of ₹2,000 for the first 7 years.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-655 flex items-center justify-center font-black">2</span>
                    <div>
                      <span className="block font-black text-slate-850">Middle stage: ₹62,480</span>
                      <span>Annual increments increase to ₹2,340 for the next 2 years.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-655 flex items-center justify-center font-black">3</span>
                    <div>
                      <span className="block font-black text-slate-850">Senior Stage: ₹67,160</span>
                      <span>Annual increments increase to ₹2,680 for the next 7 years.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-655 flex items-center justify-center font-black">4</span>
                    <div>
                      <span className="block font-black text-slate-855">Maximum basic pay: ₹85,920</span>
                      <span>Highest possible basic pay for Scale I officers before promotions.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: 12th BPS changes card */}
              <div className="lg:col-span-4 p-5 bg-slate-900 text-white rounded-3xl flex flex-col justify-between gap-5 shadow-md">
                <div className="space-y-2">
                  <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider">12th Bipartite Settlement</span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg">17% Wage Hike</h3>
                  <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                    The basic pay was revised upwards from ₹36,000 to ₹48,480 base with retro-active effect, significantly boosting in-hand salary.
                  </p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-slate-300 font-bold leading-normal">
                  *Effective from November 2022 under the latest 9th Joint Note guidelines.
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: WHY IN-HAND ESTIMATES VARY ── */}
          <section id="variance-factors" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Sliders size={20} className="stroke-[2.5]" />
              </span>
              Why In-Hand Salary Estimates Vary So Much
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 font-semibold leading-relaxed">
              estimates fluctuate due to a variety of location-dependent and individual allocation choices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Posting Location', desc: 'Metros/Tier 1 cities receive higher HRA (up to 9% of basic) and Compensatory Allowance than Rural postings.', icon: MapPin, color: 'border-blue-150 bg-blue-50/5 text-blue-650' },
                { title: 'NPS Deduction', desc: 'A mandatory 10% of (Basic + DA) is deducted monthly towards the National Pension System.', icon: ShieldCheck, color: 'border-emerald-150 bg-emerald-50/5 text-emerald-650' },
                { title: 'Chosen Tax Regime', desc: 'Old vs New tax regimes impact your monthly TDS declarations and deduction limits.', icon: Percent, color: 'border-purple-150 bg-purple-50/5 text-purple-650' },
                { title: 'Dearness Allowance (DA)', desc: 'Revised quarterly based on the Consumer Price Index (CPI), causing regular base salary changes.', icon: TrendingUp, color: 'border-slate-200 bg-slate-50/10 text-slate-705' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xs transition-all space-y-3.5 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className={`p-2 w-fit rounded-lg ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-slate-850 group-hover:text-indigo-655 transition-colors">
                      {item.title}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal font-semibold m-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-500 leading-normal">
              Bottom line: A defensible, verified range for 2026 in-hand salary is approximately ₹65,000 to ₹76,000/month, with metro postings and lower deductions landing at the higher end.
            </div>
          </section>

          {/* ── SECTION 3: GROSS SALARY BREAKDOWN ── */}
          <section id="gross-breakdown" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <FileSpreadsheet size={20} className="stroke-[2.5]" />
              </span>
              IBPS PO Gross Salary Breakdown
            </h2>

            <div className="p-6 bg-[#0B0F19] text-white border border-slate-800 rounded-3xl max-w-2xl mx-auto shadow-md font-sans">
              <div className="border-b border-white/10 pb-4 flex justify-between items-center gap-4">
                <div>
                  <span className="text-[10px] text-indigo-400 font-black uppercase tracking-wider">Statement of Earnings</span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg">Estimated Gross Monthly Payslip</h3>
                </div>
                <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs font-black text-slate-300 rounded-lg">
                  CRP Scale I Officer
                </span>
              </div>

              <div className="py-5 space-y-3 font-mono text-xs sm:text-sm text-slate-350 border-b border-dashed border-white/10">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Basic Pay (New Scale)</span>
                  <span className="text-white font-bold">₹48,480</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Dearness Allowance (DA)</span>
                  <span className="text-white font-bold">₹15,000 – ₹17,000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>House Rent Allowance (HRA)</span>
                  <span className="text-white font-bold">₹4,000 – ₹6,500</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Special Allowance</span>
                  <span className="text-white font-bold">₹5,900 – ₹7,000</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>City Compensatory Allowance (CCA)</span>
                  <span className="text-white font-bold">₹1,400 – ₹2,300</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center text-sm sm:text-base font-black">
                <span className="font-extrabold text-slate-350">Gross Monthly Total:</span>
                <span className="text-[#FBBF24]">₹76,000 – ₹90,000</span>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: IN-HAND SALARY BY CITY TYPE ── */}
          <section id="city-inhand" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <MapPin size={20} className="stroke-[2.5]" />
              </span>
              In-Hand Salary by City Type
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: 'Metro Cities', range: '₹70,000 – ₹76,000', desc: 'Class A postings (Mumbai, Delhi, Kolkata, Bengaluru) with maximum HRA brackets.', badge: 'Class A' },
                { city: 'Urban Cities', range: '₹67,000 – ₹70,000', desc: 'Class B postings (State capitals, major Tier 2 hubs) with medium-grade allowances.', badge: 'Class B' },
                { city: 'Semi-Urban', range: '₹65,000 – ₹67,000', desc: 'Class C locations (District headquarters, larger towns).', badge: 'Class C' },
                { city: 'Rural Postings', range: '₹63,000 – ₹65,000', desc: 'Class D remote postings with basic HRA but lower general living costs.', badge: 'Class D' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xs transition-all flex flex-col justify-between gap-4 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Location Scale</span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px] font-black">{item.badge}</span>
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-slate-805 group-hover:text-indigo-655 transition-colors">
                      {item.city}
                    </div>
                  </div>
                  
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="block text-base font-black text-emerald-600">{item.range}</span>
                    <p className="text-[11px] text-slate-400 font-semibold leading-normal m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 5: ANNUAL CTC ── */}
          <section id="annual-ctc" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Trophy size={20} className="stroke-[2.5]" />
              </span>
              IBPS PO Annual CTC Package
            </h2>

            <div className="p-6 bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-150 rounded-3xl space-y-6 shadow-xs">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-indigo-600 font-black uppercase tracking-widest">Total Compensation</span>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Estimated Annual CTC Package</h3>
                </div>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-650 text-xs font-black rounded-lg border border-indigo-100">
                  ₹9.0 – ₹10.5 LPA
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold m-0">
                Factor in your base salary, Dearness Allowance revisions, quarterly perks, leased house provisions, and the matching 14% NPS employer contribution to arrive at the total cost-to-company value.
              </p>

              <div className="space-y-2.5">
                <div className="font-extrabold text-xs text-slate-505 uppercase tracking-wider">CTC Value Distribution</div>
                <div className="w-full h-8 rounded-2xl overflow-hidden flex font-sans text-xs font-black text-white">
                  <div className="bg-indigo-655 h-full flex items-center justify-center transition-all duration-300" style={{ width: '80%' }}>
                    Cash Component (80%)
                  </div>
                  <div className="bg-blue-500 h-full flex items-center justify-center transition-all duration-300" style={{ width: '10%' }}>
                    NPS (10%)
                  </div>
                  <div className="bg-amber-400 h-full flex items-center justify-center transition-all duration-300" style={{ width: '10%' }}>
                    Perks (10%)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: SALARY GROWTH OVER TIME ── */}
          <section id="growth-milestones" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <TrendingUp size={20} className="stroke-[2.5]" />
              </span>
              Salary Growth Over Time (Scale I → Promotions)
            </h2>

            <div className="space-y-3.5">
              {[
                { stage: '1', title: 'Joining Scale I (Year 1)', basic: '₹48,480 basic pay', inhand: '₹65,000 – ₹76,000 in-hand', desc: 'Standard initial scale officer pay structure upon clearing CRP exams.', color: 'border-l-blue-500 bg-blue-50/5' },
                { stage: '2', title: 'Scale I (Year 5)', basic: '≈ ₹58,000 basic pay', inhand: '₹75,000 – ₹85,000 in-hand', desc: 'Accumulation of regular annual increments and quarterly DA shifts.', color: 'border-l-indigo-500 bg-indigo-50/5' },
                { stage: '3', title: 'Scale II Promotion (Manager)', basic: 'Scale II base structure', inhand: 'Typically exceeds ₹85,000', desc: 'Salary jumps into the Scale II bracket upon clearing internal department promotional exams.', color: 'border-l-emerald-500 bg-emerald-50/5 font-bold' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 bg-white border border-slate-200 border-l-4 rounded-r-2xl hover:shadow-xs transition-shadow duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${item.color}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs shrink-0">
                      {item.stage}
                    </span>
                    <div>
                      <span className="block font-black text-slate-800 text-sm sm:text-base leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{item.desc}</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0 flex flex-col gap-0.5">
                    <span className="px-2.5 py-0.5 bg-slate-100 rounded text-[10px] font-black text-slate-655">{item.basic}</span>
                    <span className="text-xs font-black text-indigo-655">{item.inhand}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: ALLOWANCES & PERKS ── */}
          <section id="allowances-perks" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Percent size={20} className="stroke-[2.5]" />
              </span>
              IBPS PO Allowances & Perks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Monthly allowances */}
              <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
                <div className="font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2 border-b border-slate-100 pb-3 font-display">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1B6EB5]" /> Monthly Direct Allowances
                </div>
                <div className="space-y-3.5 text-xs font-semibold text-slate-500">
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Dearness Allowance (DA):</strong> Adjusted quarterly based on the AICPIN index to offset inflation.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">House Rent Allowance (HRA):</strong> Ranges from 7% to 9% depending on metro vs rural class locations.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Special & CCA Allowances:</strong> Extra monthly compensations based on officer scale and urban criteria.
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional benefits */}
              <div className="p-6 bg-white border border-indigo-150 rounded-3xl space-y-4 shadow-xs">
                <div className="font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2 border-b border-slate-100 pb-3 font-display">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-650" /> Additional Indirect Perks
                </div>
                <div className="space-y-3.5 text-xs font-semibold text-slate-500">
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-indigo-655 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Medical Insurance Scheme:</strong> Provides 100% hospitalization cover for self and eligible dependents.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-indigo-655 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Concessional Loan Interest:</strong> Access cheap staff rates for vehicle, home, and personal loans.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle size={15} className="text-indigo-655 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Leased Housing facility:</strong> Many banks allow direct lease options in lieu of standard monthly HRA.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 8: INTERACTIVE CALCULATOR ── */}
          <section id="calculator-widget" className="scroll-mt-20 border-t border-slate-200 pt-8 space-y-6 font-sans">
            <h2 className="text-xl sm:text-2xl font-extrabold font-display text-slate-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <CalculatorIcon size={18} />
              </span>
              IBPS PO Salary Calculator
            </h2>

            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
              Select your posting details below to calculate your estimated gross salary and net in-hand monthly pay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 bg-slate-55/40 border border-slate-150 rounded-2xl p-6">
              {/* Inputs */}
              <div className="space-y-5 font-sans font-bold">
                {/* City Type */}
                <div className="space-y-2">
                  <label className="block text-xs text-slate-500 uppercase tracking-wider font-extrabold">City Classification</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Metro', 'Urban', 'Semi-Urban', 'Rural'].map((city) => (
                      <button
                        key={city}
                        onClick={() => setCityType(city)}
                        className={`py-2 px-3 rounded-lg border text-center transition-all cursor-pointer font-bold ${cityType === city ? 'bg-[#1B6EB5] border-[#1B6EB5] text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Years of Service */}
                <div className="space-y-2">
                  <label className="block text-xs text-slate-500 uppercase tracking-wider font-extrabold">Years of Service (Scale I)</label>
                  <div className="grid grid-cols-5 gap-1.5 text-xs text-center">
                    {[1, 2, 3, 4, 5].map((year) => (
                      <button
                        key={year}
                        onClick={() => setYearsOfService(year)}
                        className={`py-2 rounded-lg border transition-all cursor-pointer font-bold ${yearsOfService === year ? 'bg-[#1B6EB5] border-[#1B6EB5] text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tax Regime */}
                <div className="space-y-2">
                  <label className="block text-xs text-slate-500 uppercase tracking-wider font-extrabold">Tax Regime</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['New', 'Old'].map((regime) => (
                      <button
                        key={regime}
                        onClick={() => setTaxRegime(regime)}
                        className={`py-2 px-3 rounded-lg border text-center transition-all cursor-pointer font-bold ${taxRegime === regime ? 'bg-[#1B6EB5] border-[#1B6EB5] text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {regime} Regime
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="space-y-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Gross Monthly */}
                  <div className="p-4 bg-[#1B6EB5]/5 border border-[#1B6EB5]/10 rounded-xl space-y-1">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest font-sans">Estimated Gross Monthly</span>
                    <span className="block text-2xl font-black text-[#1B6EB5]">₹{calcGross.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Net In-Hand */}
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest font-sans">Estimated Net In-Hand</span>
                    <span className="block text-2xl font-black text-emerald-600">₹{calcInHand.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Detailed breakdown items */}
                <div className="border-t border-slate-200 pt-4 space-y-3 text-xs font-semibold text-slate-600">
                  <div className="font-extrabold text-slate-800 text-sm pb-1">Earnings breakdown</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                    <div>
                      <span className="block text-[10px] text-slate-450 uppercase font-bold">Basic Pay</span>
                      <span className="font-bold text-slate-850">₹{calcBasic.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-450 uppercase font-bold">Dearness Allowance</span>
                      <span className="font-bold text-slate-850">₹{calcDA.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-450 uppercase font-bold">HRA (Rent Allowance)</span>
                      <span className="font-bold text-slate-850">₹{calcHRA.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-450 uppercase font-bold">Special Allowance</span>
                      <span className="font-bold text-slate-850">₹{calcSpecial.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-450 uppercase font-bold">CCA (City Allowance)</span>
                      <span className="font-bold text-slate-850">₹{calcCCA.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="font-extrabold text-slate-800 text-sm pt-2 pb-1 border-t border-slate-100">Deductions breakdown</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                    <div>
                      <span className="block text-[10px] text-red-500/70 uppercase font-bold">NPS (10% Base+DA)</span>
                      <span className="font-bold text-slate-850">₹{calcNPS.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-red-500/70 uppercase font-bold">Tax TDS & Professional</span>
                      <span className="font-bold text-slate-850">₹{calcTax.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 font-semibold leading-normal pt-2 border-t border-slate-100">
                  Disclaimer: This tool calculates a monthly payroll simulation using baseline assumptions. Individual results will differ depending on your selected tax deductions, bank- leased accommodation choice, and quarterly inflation rate changes.
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
                { title: 'Complete Syllabus', path: '/ibps-po/syllabus' },
                { title: 'Previous Cut Offs', path: '/ibps-po/cut-off' },
                { title: 'Selection Process', path: '/ibps-po/selection-process' }
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
                <div className="font-black text-base sm:text-lg text-white">Wage structure mapped — now start practicing.</div>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold max-w-2xl">
                  Baseline your score with our diagnostic mocks. Build accuracy across quantitative, English, and reasoning subjects.
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
                { q: 'What is the basic pay of IBPS PO in 2026?', a: 'The starting basic pay of IBPS PO in 2026 is ₹48,480 per month under the 12th Bipartite Settlement.' },
                { q: 'What is the IBPS PO pay scale?', a: 'The IBPS PO pay scale is ₹48,480–2,000/7–62,480–2,340/2–67,160–2,680/7–85,920, allowing basic pay to reach a maximum of ₹85,920 in Scale I.' },
                { q: 'What is the in-hand salary of IBPS PO 2026?', a: 'The IBPS PO in-hand salary in 2026 is approximately ₹65,000 to ₹76,000 per month, varying by posting city and applicable deductions.' },
                { q: 'Why do IBPS PO in-hand salary figures vary so much across websites?', a: 'In-hand salary estimates vary because they depend on posting city, NPS deduction rate, tax regime chosen, and quarterly Dearness Allowance revisions, none of which are fixed nationally.' },
                { q: 'What is the gross salary of IBPS PO in a metro city?', a: 'The gross monthly salary of an IBPS PO in a metro city is approximately ₹85,000 to ₹90,000, including all allowances.' },
                { q: 'Under which settlement is the IBPS PO salary structured?', a: 'The IBPS PO salary follows the 12th Bipartite Settlement (9th Joint Note), signed in March 2024 and effective from November 2022.' },
                { q: 'How much is deducted for NPS from IBPS PO salary?', a: 'Approximately 10% of Basic Pay plus Dearness Allowance is deducted monthly for the National Pension System.' },
                { q: 'What was the IBPS PO basic pay before the 12th Bipartite Settlement?', a: 'Under the previous 11th Bipartite Settlement, the starting basic pay was ₹36,000, which increased to ₹48,480 under the 12th Bipartite Settlement.' },
                { q: 'What is the annual CTC of an IBPS PO in 2026?', a: 'The annual CTC of an IBPS PO in 2026 is approximately ₹9 lakh to ₹10.5 lakh, excluding one-off bonuses.' }
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
                  Official IBPS wage settlements, ibps.in
                </a>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed m-0 border-t border-slate-200/60 pt-3">
              <strong>Disclaimer:</strong> This page is independently maintained by PrepBanker for candidate convenience. For the final and authoritative version of any wage scale, allowance percentages, or benefit criteria, always cross-check with the official guidelines published on ibps.in.
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
export const dynamic = 'force-static';
// Mapped as static HTML prerender
