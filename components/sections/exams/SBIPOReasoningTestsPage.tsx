// PATH: components/sections/exams/SBIPOReasoningTestsPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Download,
  Info,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  FileText,
  Users,
  Trophy,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  GraduationCap,
  Globe,
  Award,
  ListTodo,
  Coins,
  ArrowUpRight,
  Percent,
  Check,
  TrendingDown,
  Heart,
  Scale,
  Monitor,
  Activity,
  CheckSquare,
  BarChart4,
  Flame,
  FileQuestion,
  BookOpenCheck,
  Zap,
  Target
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamAuthorSection from './ExamAuthorSection';
import QuickNavigation from './QuickNavigation';
import { getExamData } from '@/lib/data/exams/detailContentMap';

export default function SBIPOReasoningTestsPage() {
  const exam = getExamData('sbi-po');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans antialiased text-slate-800">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] to-[#091024] text-white pt-10 pb-12 mb-8">
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
            <span className="text-white/80">Reasoning Tests</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wide uppercase">
                Sectional & Topic Mocks
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO Reasoning Ability Test 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Practice Puzzles & Seating Arrangement, Syllogism, Coding-Decoding, and Blood Relations separately — timed to the real sectional limit, with topic-level accuracy on every attempt.
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Focus on structural puzzle configurations, family-trees, and coded comparisons for the 2026 cycle. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.prepgrind.com/signup/sbi-po"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4A017] hover:brightness-105 active:scale-98 transition-all text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/15 cursor-pointer no-underline"
                  >
                    Attempt Free Reasoning Sectional Test →
                  </a>
                  <a
                    href="#whats-included"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    View All Reasoning Topic Tests →
                  </a>
                </div>
                <div className="text-xs text-white/65 font-semibold italic">
                  Every test scores instantly with topic-level accuracy — see exactly which puzzle type or logic type is costing you time, not just your overall Reasoning score.
                </div>
              </div>
            </div>

            {/* Right Column: Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5 font-sans">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Topics Covered</div>
                <div className="text-base sm:text-lg font-black text-white">8+ Topics</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Time Limit</div>
                <div className="text-base sm:text-lg font-black text-white">20 Mins</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Questions</div>
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">35 Qs</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-wider mb-1">Negative Marking</div>
                <div className="text-base sm:text-lg font-black text-white">-0.25 Mark</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="container-custom pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Left Column: Core Content */}
          <main className="space-y-10">

            {/* ── SECTION A: QUICK ANSWER / FRAMING BLOCK ── */}
            <section className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-150/70 p-5 sm:p-6 rounded-2xl shadow-xs font-sans space-y-4">
              <p className="text-[#0D1B3E] text-base leading-relaxed font-semibold m-0">
                A full mock tells you "Reasoning: 20/35" — it doesn't tell you whether that's a puzzle-type problem (circular vs. floor-based vs. box puzzles), a Syllogism accuracy issue, or a speed problem on Coding-Decoding. Since Puzzles & Seating Arrangement alone can carry more than half the section, being strong or weak in that one topic swings your Reasoning score more than every other topic combined.
              </p>
            </section>

            {/* Table of Contents */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs font-sans">
              <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                <BookOpen size={16} className="text-[#1B6EB5]" />
                On This Page
              </span>
              <div className="max-h-[160px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {[
                    { id: 'why-sectional', text: 'Why Isolate Reasoning' },
                    { id: 'whats-included', text: 'Topic breakdown & weight' },
                    { id: 'test-format', text: 'Sectional Test Structure' },
                    { id: 'free-sectional', text: 'Start Free Sectionals' },
                    { id: 'improvement-tips', text: 'Topic-by-Topic Score Tips' },
                    { id: 'analytics-report', text: 'After-Test Analysis Reports' },
                    { id: 'faqs', text: 'Frequently Asked Questions' }
                  ].map((item, idx) => (
                    <li key={item.id} className="p-0 m-0">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-655 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-55 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                          {idx + 1}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── SECTION B: WHY PRACTICE SEPARATELY (Card Grid) ── */}
            <section id="why-sectional" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                Why Isolate Reasoning Topics Instead of Only Attempting Full Mocks
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { title: 'Puzzle & Seating Priority', desc: 'Puzzle & Seating Arrangement is by far the highest-weightage topic, typically contributing 15–20 of the section\'s 35 questions across circular, linear, square, floor-flat, and box-based formats.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'Secondary High-Yield Topics', desc: 'Blood Relations, Coding-Decoding, and Direction & Distance are the next-highest priority, each contributing 3–4 questions and following repeatable, learnable patterns.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { title: 'Syllogism & Inequality Rules', desc: 'Syllogism and Inequality reward accuracy over speed — 2–3 questions each, but they\'re near-guaranteed marks once the Venn-diagram or sign-comparison method is internalized.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-2 hover:border-slate-350 transition-all duration-200 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest font-sans">Reason 0{idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight m-0">{item.title}</div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION C: TOPIC BREAKDOWN TABLE (GFM Table) ── */}
            <section id="whats-included" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BookOpenCheck size={20} className="text-[#1B6EB5]" />
                SBI PO Reasoning Ability Tests — Topic-Wise Practice
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-6">
                
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse m-0 min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-sans text-xs uppercase tracking-wider font-black border-b border-slate-200">
                          <th className="px-5 py-4">Topic</th>
                          <th className="px-5 py-4">What It Tests</th>
                          <th className="px-5 py-4">Prelims Weight</th>
                          <th className="px-5 py-4 text-right">Tests Available</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-sans text-xs sm:text-sm">
                        {[
                          { topic: 'Puzzle & Seating Arrangement', test: 'Circular, linear, square, floor-flat, box-based puzzles', weight: 'Highest — 15–20 Qs', count: '10 Tests' },
                          { topic: 'Blood Relations', test: 'Family-tree and relationship-chain problems', weight: 'Moderate–High — 3–4 Qs', count: '6 Tests' },
                          { topic: 'Coding-Decoding', test: 'Letter/number/symbol pattern substitution', weight: 'Moderate–High — 3–4 Qs', count: '6 Tests' },
                          { topic: 'Direction & Distance', test: 'Movement and final-position problems', weight: 'Moderate–High — 3–4 Qs', count: '5 Tests' },
                          { topic: 'Syllogism', test: 'Statement-conclusion logic (Venn diagram method)', weight: 'Moderate — 2–3 Qs', count: '6 Tests' },
                          { topic: 'Inequality (Direct & Coded)', test: 'Sign-based comparison logic', weight: 'Moderate — 2–3 Qs', count: '5 Tests' },
                          { topic: 'Order & Ranking', test: 'Relative position and ranking problems', weight: 'Moderate — 2–3 Qs', count: '4 Tests' },
                          { topic: 'Alphanumeric Series & Data Sufficiency', test: 'Pattern-based series and sufficiency-of-data questions', weight: 'Lower, but recurring', count: '4 Tests' }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-3.5 font-extrabold text-slate-900">{row.topic}</td>
                            <td className="px-5 py-3.5 font-semibold text-slate-500 leading-normal">{row.test}</td>
                            <td className="px-5 py-3.5 font-extrabold text-slate-800">{row.weight}</td>
                            <td className="px-5 py-3.5 font-black text-[#1B6EB5] text-right shrink-0">{row.count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-150 rounded-2xl flex gap-3 items-center justify-between font-sans">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want the complete SBI PO syllabus breakdown across all sections?
                  </span>
                  <Link
                    href="/sbi-po/syllabus"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    View Syllabus
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION D: TEST FORMAT (Structure Card) ── */}
            <section id="test-format" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Sliders size={20} className="text-[#1B6EB5]" />
                How the Reasoning Sectional Test Is Structured
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                <div className="border border-blue-150 border-l-4 border-l-[#1B6EB5] bg-blue-50/15 py-5 pr-5 pl-6 rounded-2xl space-y-3">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Official Pacing</span>
                  <div className="font-extrabold text-slate-900 text-base leading-tight m-0">Prelims Reasoning Structure</div>
                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed m-0 pt-1">
                    Each Reasoning sectional test on PrepBanker mirrors the real Prelims section, timed independently of English and Quant so you build the habit of finishing Reasoning within its own sectional window on exam day — including at least one full puzzle-heavy set per test, since that's where the section's marks are concentrated.
                  </p>
                  <Link href="/sbi-po/exam-pattern" className="inline-flex items-center gap-0.5 text-xs text-[#1B6EB5] font-black pt-1 hover:underline no-underline">
                    See full SBI PO exam pattern <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION E: FREE TEST BLOCK (Mocks Grid) ── */}
            <section id="free-sectional" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <CheckSquare size={20} className="text-[#1B6EB5]" />
                Start Free — SBI PO Reasoning Ability Test
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'SBI PO Reasoning Sectional Test 01', focus: 'Puzzle & Seating Arrangement Focus', cta: 'Attempt Test', badge: 'Puzzle Special', border: 'border-l-blue-500 bg-blue-50/10' },
                    { title: 'SBI PO Reasoning Sectional Test 02', focus: 'Syllogism + Inequality Practice Sets', cta: 'Attempt Test', badge: 'Logic Core', border: 'border-l-purple-500 bg-purple-50/10' },
                    { title: 'SBI PO Reasoning Sectional Test 03', focus: 'Coding-Decoding + Blood Relations', cta: 'Attempt Test', badge: 'Analytical', border: 'border-l-amber-500 bg-amber-50/10' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-3 hover:border-slate-300 transition-all " + item.border}>
                      <div className="space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded bg-white border border-slate-200 text-[9px] font-black uppercase tracking-wider text-slate-500">
                          {item.badge}
                        </span>
                        <div className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight pt-1">{item.title}</div>
                        <span className="block text-[11px] text-slate-500 font-semibold">{item.focus}</span>
                      </div>
                      <a
                        href="https://app.prepgrind.com/signup/sbi-po"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans cursor-pointer"
                      >
                        {item.cta}
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Sub links */}
                <div className="border-t border-slate-150 pt-5 space-y-3">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Other Preparation Paths</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link
                      href="/sbi-po/english-tests"
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-55 transition-all font-semibold text-xs sm:text-sm text-slate-800 no-underline"
                    >
                      <span>English Language Tests</span>
                      <ChevronRight size={14} className="text-[#1B6EB5]" />
                    </Link>
                    <Link
                      href="/sbi-po/quant-tests"
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-55 transition-all font-semibold text-xs sm:text-sm text-slate-800 no-underline"
                    >
                      <span>Quantitative Aptitude Tests</span>
                      <ChevronRight size={14} className="text-[#1B6EB5]" />
                    </Link>
                    <Link
                      href="/sbi-po/mock-tests"
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-55 transition-all font-semibold text-xs sm:text-sm text-slate-800 no-underline"
                    >
                      <span>SBI PO Full Mock Tests</span>
                      <ChevronRight size={14} className="text-[#1B6EB5]" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION F: HOW TO IMPROVE (Sleek Strategy Checklist) ── */}
            <section id="improvement-tips" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <Target size={20} className="text-[#1B6EB5]" />
                How to Improve Your SBI PO Reasoning Score, Topic by Topic
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { topic: 'Puzzle & Seating Arrangement', tip: 'Read all the given conditions once fully before drawing anything — jumping to the grid after the first 2–3 clues is the single biggest cause of having to restart a puzzle mid-way.' },
                    { topic: 'Syllogism', tip: 'Solve every statement pair with the Venn-diagram method rather than verbal logic — verbal shortcuts break down on "possibility" case statements, which SBI PO uses often.' },
                    { topic: 'Coding-Decoding', tip: 'Identify whether the pattern is letter-shift, number-value, or symbol-substitution in the first example given — SBI PO rarely mixes pattern types within a single question set.' },
                    { topic: 'Blood Relations', tip: 'Draw the family tree top-to-bottom as you read, marking gender with a symbol immediately — re-reading the passage a second time to fix a missed gender clue costs more time than drawing carefully once.' },
                    { topic: 'Direction & Distance', tip: 'Always fix north as "up" on your rough sheet before plotting the first move — switching orientation mid-question is the most common source of sign errors.' },
                    { topic: 'Inequality', tip: 'Combine coded and direct inequality statements into a single relation chain before checking the conclusions — checking conclusions against separate statements is slower and more error-prone.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start p-4 bg-slate-50/30 border border-slate-150 rounded-2xl hover:border-slate-300 transition-all font-sans">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-emerald-600" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.topic}</div>
                        <span className="block text-xs text-slate-500 font-semibold leading-normal">{item.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50/40 border border-blue-200 rounded-2xl flex gap-3 items-center justify-between font-sans mt-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Want the full week-by-week Reasoning + Quant + English study layout?
                  </span>
                  <Link
                    href="/sbi-po/study-plan"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md no-underline font-sans shrink-0"
                  >
                    SBI PO Study Plan
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION G: AFTER-TEST ANALYSIS (Diagnostics Grid) ── */}
            <section id="analytics-report" className="scroll-mt-20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display flex items-center gap-2">
                <BarChart4 size={20} className="text-[#1B6EB5]" />
                What Your Reasoning Test Report Shows
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Topic-wise Accuracy Metrics', desc: 'Separated tracking for Puzzles vs. Syllogism vs. Coding-Decoding vs. Blood Relations.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'Pacing & Time Spent analysis', desc: 'Detailed time spent per question — see if one puzzle set is eating your full sectional window.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { title: 'Pass/Fail difficulty tags', desc: 'See whether marks are lost on easy/moderate questions (the biggest red flag) or only on genuinely hard puzzle types.', border: 'border-l-amber-500 bg-amber-50/5' },
                    { title: 'Fastest approaches & step solutions', desc: 'Explanations showing the quickest visual grouping layout or shortcuts for every question, not just the correct option.', border: 'border-l-emerald-500 bg-emerald-50/5' }
                  ].map((item, idx) => (
                    <div key={idx} className={"border border-slate-150 border-l-4 py-5 pr-5 pl-6 sm:py-6 sm:pr-6 sm:pl-7 rounded-2xl flex flex-col justify-between space-y-1.5 transition-all duration-200 hover:border-slate-350 " + item.border}>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Analytics {idx + 1}</span>
                        <div className="font-extrabold text-slate-900 text-sm leading-tight m-0">{item.title}</div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed m-0 pt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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
                  { q: 'What topics are covered in the SBI PO Reasoning Ability test?', a: 'The SBI PO Reasoning Ability test covers Puzzle & Seating Arrangement, Syllogism, Coding-Decoding, Blood Relations, Direction & Distance, Inequality, and Order & Ranking.' },
                  { q: 'How many questions are in the SBI PO Reasoning Ability section?', a: 'As per the SBI PO 2026 syllabus, the Reasoning Ability section carries 35 questions for 35 marks in Prelims, to be completed within the sectional time limit.' },
                  { q: 'Which topic carries the highest weightage in SBI PO Reasoning Ability?', a: 'Puzzle & Seating Arrangement carries the highest weightage in SBI PO Reasoning Ability, typically contributing 15 to 20 of the section\'s 35 questions.' },
                  { q: 'Is there negative marking in the SBI PO Reasoning sectional test?', a: 'Yes, each incorrect answer in the SBI PO Reasoning Ability section deducts 0.25 marks, the same negative marking rule applied across the full exam.' },
                  { q: 'Which Reasoning topics should be prioritized for SBI PO Prelims?', a: 'Puzzle & Seating Arrangement should be prioritized first for SBI PO Prelims since it alone can account for more marks than every other Reasoning topic combined, followed by Blood Relations, Coding-Decoding, and Direction & Distance.' },
                  { q: 'Is the SBI PO Reasoning sectional test available for free?', a: 'Yes, PrepBanker offers free Reasoning sectional tests covering Puzzle & Seating Arrangement, Syllogism, and Coding-Decoding, with no payment required to attempt them.' },
                  { q: 'How is SBI PO Mains Reasoning different from Prelims Reasoning?', a: 'SBI PO Mains combines Reasoning with Computer Aptitude into a single 40-question section featuring more advanced puzzle types such as double lineup, scheduling, and machine input-output, along with critical and analytical decision-making questions.' },
                  { q: 'What does the SBI PO Reasoning test report show after submission?', a: 'The report shows topic-wise accuracy across Puzzles, Syllogism, Coding-Decoding, and Blood Relations, along with time spent per question and step-by-step solutions.' },
                  { q: 'How can I improve my SBI PO Puzzle-solving speed?', a: 'Reading all the given conditions fully before drawing the seating or arrangement grid helps in SBI PO puzzles, since starting to plot after only 2–3 clues is the most common reason candidates have to restart mid-way.' },
                  { q: 'Do SBI PO Reasoning sectional tests follow the latest exam pattern?', a: 'Yes, PrepBanker\'s SBI PO Reasoning sectional tests are aligned with the current SBI PO 2026 pattern and are refreshed using memory-based inputs from recent exam shifts.' }
                ].map((faq, idx) => {
                  const isFaqOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-350 transition-all font-sans"
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
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-655 leading-relaxed border-t border-slate-100 pt-3 font-normal font-sans text-slate-600">
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
            <QuickNavigation exam={exam} activeSlug="reasoning-tests" />

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
