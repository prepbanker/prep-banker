// PATH: components/sections/exams/SBIPOEnglishTestsPage.tsx
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

export default function SBIPOEnglishTestsPage() {
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
            <span className="text-white/80">English Tests</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wide uppercase">
                Topic-Wise Sectional
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
                  SBI PO English Language Sectional Test 2026
                </h1>
                <p className="text-base sm:text-lg font-medium text-white/85 leading-normal">
                  Practice Reading Comprehension, Cloze Test, Para Jumbles, and Error Detection separately — timed, topic-tagged, and scored the same way SBI PO scores the real section.
                </p>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Focus on structural reading efficiency, keyword scans, and contextual rules for the 2026 cycle. <span className="text-amber-400 font-bold">(Last Updated: 25 July 2026)</span>
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
                    Attempt Free English Sectional Test →
                  </a>
                  <a
                    href="#whats-included"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm text-white no-underline"
                  >
                    View All English Topic Tests →
                  </a>
                </div>
                <div className="text-xs text-white/65 font-semibold italic">
                  Every test is scored instantly with topic-level accuracy — no waiting, no PDF answer key to cross-check manually.
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
                <div className="text-base sm:text-lg font-black text-[#FBBF24]">40 Qs</div>
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
                Full-length mocks tell you that you lost marks in English — they don't tell you which topic did it. A candidate who's weak in Para Jumbles and one who's weak in Reading Comprehension both just see "English: 22/40." Sectional practice isolates the topic, so the 20 minutes you spend practicing actually targets the gap.
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
                    { id: 'why-sectional', text: 'Why Practice Sectionals' },
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
                Why Practice English Separately Instead of Only Full Mocks
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { title: 'Reading Comprehension weight', desc: 'Reading Comprehension carries the highest weightage in the section — typically 8–12 questions in Prelims — so RC accuracy alone can swing your overall English score more than any other topic.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'Cloze & Para Jumbles limits', desc: 'Cloze Test and Para Jumbles are the next-most-repeated formats, appearing in nearly every recent shift, and both improve fastest with isolated, repeated practice rather than mixed-topic mocks.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { title: 'Grammar Rule repetition', desc: 'Error Detection and Sentence Improvement reward pattern recognition — the same 8–10 grammar rules (subject-verb agreement, tense, articles, prepositions) get tested repeatedly across papers.', border: 'border-l-emerald-500 bg-emerald-50/5' }
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
                SBI PO English Sectional Tests — Topic-Wise Practice
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
                          { topic: 'Reading Comprehension', test: 'Inference, tone, vocabulary-in-context, factual recall from economy/social/abstract passages', weight: 'Highest — ~8–12 Qs', count: '10 Tests' },
                          { topic: 'Cloze Test', test: 'Contextual fill-ups, grammar-based blanks, phrase-replacement pattern', weight: 'High', count: '8 Tests' },
                          { topic: 'Para Jumbles', test: 'Rearranging 5–6 sentences into logical sequence', weight: 'High', count: '5 Tests' },
                          { topic: 'Error Detection', test: 'Grammar errors — subject-verb agreement, tense, articles, prepositions', weight: 'Moderate–High', count: '8 Tests' },
                          { topic: 'Sentence Improvement', test: 'Replacing an underlined phrase with the grammatically correct option', weight: 'Moderate', count: '6 Tests' },
                          { topic: 'Fill in the Blanks', test: 'Contextual and phrase-based blanks (Single/Double)', weight: 'Moderate', count: '6 Tests' },
                          { topic: 'Vocabulary', test: 'Word meaning and usage in context (Synonyms/Antonyms/Idioms)', weight: 'Moderate', count: '5 Tests' },
                          { topic: 'Column Matching', test: 'Combining phrases or sentences into a coherent sentence', weight: 'Lower, but recurring', count: '4 Tests' }
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
                    Want the complete SBI PO syllabus breakdown?
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
                How the English Sectional Test Is Structured
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans">
                <div className="border border-blue-150 border-l-4 border-l-[#1B6EB5] bg-blue-50/15 py-5 pr-5 pl-6 rounded-2xl space-y-3">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">Official Pacing</span>
                  <div className="font-extrabold text-slate-900 text-base leading-tight m-0">Prelims English Structure</div>
                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed m-0 pt-1">
                    Each English sectional test on PrepBanker mirrors the real Prelims section: 40 questions, 40 marks, 20 minutes, with 0.25 negative marking per wrong answer, timed independently so you build the habit of finishing English inside its own sectional window — not by borrowing time from Quant or Reasoning.
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
                Start Free — SBI PO English Sectional Test
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'SBI PO English Sectional Test 01', focus: 'Reading Comprehension Focus', cta: 'Attempt Test', badge: 'RC Special', border: 'border-l-blue-500 bg-blue-50/10' },
                    { title: 'SBI PO English Sectional Test 02', focus: 'Cloze Test + Para Jumbles Practice', cta: 'Attempt Test', badge: 'Contextual', border: 'border-l-purple-500 bg-purple-50/10' },
                    { title: 'SBI PO English Sectional Test 03', focus: 'Error Detection + Sentence Improvement', cta: 'Attempt Test', badge: 'Grammar', border: 'border-l-amber-500 bg-amber-50/10' }
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
                      href="/sbi-po/quant-tests"
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-55 transition-all font-semibold text-xs sm:text-sm text-slate-800 no-underline"
                    >
                      <span>Quantitative Aptitude Tests</span>
                      <ChevronRight size={14} className="text-[#1B6EB5]" />
                    </Link>
                    <Link
                      href="/sbi-po/reasoning-tests"
                      className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-slate-200 rounded-xl hover:bg-slate-55 transition-all font-semibold text-xs sm:text-sm text-slate-800 no-underline"
                    >
                      <span>Reasoning Ability Tests</span>
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
                How to Improve Your SBI PO English Score, Topic by Topic
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { topic: 'Reading Comprehension', tip: 'Read the questions before the passage on economy/business passages — RC in SBI PO is frequently fact-and-inference based, so you can scan for answers instead of reading linearly.' },
                    { topic: 'Cloze Test', tip: 'Read the full passage once before attempting any blank — SBI PO\'s cloze blanks are contextual, and the correct word often depends on a sentence two lines away.' },
                    { topic: 'Para Jumbles', tip: 'Identify the opening sentence first (the one that introduces the subject without a pronoun reference) — it eliminates 2–3 wrong sequences immediately.' },
                    { topic: 'Error Detection', tip: 'Build a checklist of the 8 most repeated grammar rules (subject-verb agreement, tense consistency, article usage, preposition pairing) and scan sentences against that list rather than reading for what sounds wrong.' },
                    { topic: 'Vocabulary', tip: 'Learn words in the context they appeared in a passage, not as isolated word-meaning pairs — SBI PO tests usage, not dictionary definition.' }
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
                    Want the full week-by-week English + Quant + Reasoning study layout?
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
                What Your English Sectional Test Report Shows
              </h2>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs font-sans space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Topic-Wise Accuracy Breakdown', desc: 'Separated metrics for RC vs. Cloze vs. Para Jumbles vs. Grammar, scored independently.', border: 'border-l-blue-500 bg-blue-50/5' },
                    { title: 'Pacing & Time Spent analysis', desc: 'Detailed time spent per question, so you can see if RC is where your minutes are disappearing.', border: 'border-l-purple-500 bg-purple-50/5' },
                    { title: 'Pass/Fail difficulty tags', desc: 'See whether you\'re losing marks on easy or moderate questions (a bigger red flag than missing hard ones).', border: 'border-l-amber-500 bg-amber-50/5' },
                    { title: 'Step-by-step solutions with reasoning', desc: 'Explanations mapping the exact grammatical rules or context clues for every question, not just the correct option.', border: 'border-l-emerald-500 bg-emerald-50/5' }
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
                  { q: 'What topics are covered in the SBI PO English Language Sectional Test?', a: 'The SBI PO English Language sectional test covers Reading Comprehension, Cloze Test, Para Jumbles, Error Detection, Sentence Improvement, Fill in the Blanks, and Vocabulary, matching the actual Prelims and Mains syllabus.' },
                  { q: 'How many questions are in the SBI PO English Language section?', a: 'The SBI PO English Language section carries 40 questions for 40 marks in Prelims, to be completed within a 20-minute sectional time limit.' },
                  { q: 'Which topic carries the highest weightage in SBI PO English Language?', a: 'Reading Comprehension typically carries the highest weightage in the SBI PO English section, contributing around 8 to 12 questions in most recent Prelims papers.' },
                  { q: 'Is there negative marking in the SBI PO English sectional test?', a: 'Yes, each incorrect answer in the SBI PO English section deducts 0.25 marks, the same negative marking rule that applies across the full exam.' },
                  { q: 'Are SBI PO English sectional tests timed separately from the full mock?', a: 'Yes, PrepBanker\'s English sectional tests run on an independent 20-minute timer, matching the actual sectional time limit rather than sharing time with Quant or Reasoning.' },
                  { q: 'Is the SBI PO English sectional test available for free?', a: 'Yes, PrepBanker offers free English sectional tests covering Reading Comprehension, Cloze Test, and Para Jumbles, with no payment required to attempt them.' },
                  { q: 'How is SBI PO Mains English different from Prelims English?', a: 'SBI PO Mains English is comparatively more advanced than Prelims and is followed by a separate Descriptive Test assessing email writing, situation analysis, and report or précis writing.' },
                  { q: 'What does the SBI PO English test report show after submission?', a: 'The report shows topic-wise accuracy across Reading Comprehension, Cloze Test, Para Jumbles, and grammar topics, along with time spent per question and step-by-step solutions.' },
                  { q: 'How can I improve my SBI PO Reading Comprehension score quickly?', a: 'Reading the questions before the passage helps in SBI PO Reading Comprehension, since most questions are fact-and-inference based on economy or social-issue passages, allowing targeted scanning instead of full linear reading.' },
                  { q: 'Do SBI PO English sectional tests follow the latest exam pattern?', a: 'Yes, PrepBanker\'s SBI PO English sectional tests are aligned with the current SBI PO 2026 pattern and are refreshed using memory-based inputs from recent exam shifts.' }
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
            <QuickNavigation exam={exam} activeSlug="english-tests" />

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
