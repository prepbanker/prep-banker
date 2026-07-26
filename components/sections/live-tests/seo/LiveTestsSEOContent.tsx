// PATH: components/sections/live-tests/seo/LiveTestsSEOContent.tsx
'use client';

import { useState } from 'react';
import {
  Zap, Clock, Target, TrendingUp, Award, BarChart3, CheckSquare,
  BookOpen, ChevronRight, Activity, Calendar, Compass, ShieldCheck
} from 'lucide-react';

interface SEOContentProps {
  onSelectCategory: (category: string) => void;
  onSearchQuery: (query: string) => void;
}

export default function LiveTestsSEOContent({ onSelectCategory, onSearchQuery }: SEOContentProps) {
  // Section 3: Active Prep Tab State
  const [activePrepTab, setActivePrepTab] = useState<'sbi' | 'ibps'>('sbi');

  const scrollToGrid = () => {
    if (typeof window !== 'undefined') {
      const el = document.getElementById('live-tests-grid');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    onSearchQuery('');
    scrollToGrid();
  };

  const handleSearchClick = (query: string) => {
    onSelectCategory('All');
    onSearchQuery(query);
    scrollToGrid();
  };

  return (
    <div className="bg-slate-50/50 py-16 border-t border-slate-100">

      {/* ── SECTION 1: Why Take Live Mock Tests? ── */}
      <section className="container-custom mb-20" aria-labelledby="why-take-live-tests">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Real Exam Simulation
          </span>
          <h2 id="why-take-live-tests" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
            Why Take Live Mock Tests?
          </h2>
          <p className="text-sm text-[var(--color-gray-600)] mt-3">
            Standard mock tests are good, but live tests simulate the precise pressure, constraints, and peer competition of the actual exam day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 lg:grid-cols-5 gap-5">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Real Exam Simulation</h3>
            <p className="text-xs leading-relaxed text-[var(--color-gray-600)]">
              Experience the exact user interface, timer rules, and section switching of the official SBI/IBPS portals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Time Management</h3>
            <p className="text-xs leading-relaxed text-[var(--color-gray-600)]">
              Learn when to skip difficult puzzles and DI sets to maximize score within rigid sectional timelines.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-blue-50 text-[var(--color-blue)] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Performance Tracking</h3>
            <p className="text-xs leading-relaxed text-[var(--color-gray-600)]">
              Analyze your ranking patterns over multiple tests to pinpoint whether your preparation curve is heading upwards.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Accuracy Improvement</h3>
            <p className="text-xs leading-relaxed text-[var(--color-gray-600)]">
              Curb wild guessing. Negative marking deductions are highlighted in reports to teach calculated risk-taking.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Confidence Building</h3>
            <p className="text-xs leading-relaxed text-[var(--color-gray-600)]">
              Overcome exam anxiety by attempting 10+ live national tests. Reaching the center will feel like just another drill.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Benefits of Live Test Series ── */}
      <section className="bg-white py-16" aria-labelledby="benefits-test-series">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-[var(--color-gold)] uppercase bg-amber-50 px-3.5 py-1.5 rounded-full">
              Benchmarking & Analytics
            </span>
            <h2 id="benefits-test-series" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
              Benefits of Live Test Series
            </h2>
            <p className="text-sm text-[var(--color-gray-600)] mt-3">
              Join PrepBanker's live test series to unlock advanced tools designed to fine-tune your exam readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="p-2.5 bg-amber-50 text-[var(--color-gold)] rounded-xl w-fit mb-3.5">
                <Award className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Competitive Ranking</h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                Compete against thousands of active banking candidates. Get detailed rank comparisons and percentile standings.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="p-2.5 bg-blue-50 text-[var(--color-blue)] rounded-xl w-fit mb-3.5">
                <CheckSquare className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Exam Readiness Metric</h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                AI-driven tracker calculates your average sectional scores and alerts you when you climb past target cutoff marks.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-3.5">
                <BarChart3 className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Detailed Analytics</h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                Receive reports displaying your accuracy ratios, time spent per question, speed charts, and answer keys.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl w-fit mb-3.5">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Performance Benchmarking</h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                Compare your question response times directly with the topper to identify and trim down time wastage.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-3.5">
                <BookOpen className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Topic-wise Improvement</h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                Get micro-topic reviews mapping your errors to individual chapters like seatings or quadratic equations.
              </p>
            </div>

            {/* Benefit 6 (CTA Card) */}
            <div className="p-5 bg-[var(--color-navy)]/5 rounded-2xl border border-[var(--color-navy)]/10 flex flex-col justify-center items-center text-center">
              <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Ready to test your limits?</h4>
              <p className="text-[14px] leading-relaxed text-slate-500 mb-4">Attempt our free challenges and benchmark your rank today.</p>
              <button
                onClick={() => {
                  window.open("https://app.prepgrind.com/signup/banking", "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center p-3 gap-1.5 px-4.5 py-2 bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95"
              >
                Attempt Mock Test Now <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How Live Tests Help in Bank Exam Prep ── */}
      <section className="container-custom my-20 " aria-labelledby="prep-guide-heading">
        <div className="text-center max-w-3xl mx-auto mb-10 mt-16 ">
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Exam Specific Guidance
          </span>
          <h2 id="prep-guide-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
            How Live Tests Help in Bank Exam Preparation
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8 ">
          <div className="bg-slate-150 p-1.5 rounded-2xl flex gap-1.5 border border-slate-200">
            <button
              onClick={() => setActivePrepTab('sbi')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${activePrepTab === 'sbi'
                ? 'bg-[var(--color-navy)] text-white shadow'
                : 'text-[var(--color-gray-600)] hover:text-[var(--color-navy)]'
                }`}
            >
              For SBI PO Exam
            </button>
            <button
              onClick={() => setActivePrepTab('ibps')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${activePrepTab === 'ibps'
                ? 'bg-[var(--color-navy)] text-white shadow'
                : 'text-[var(--color-gray-600)] hover:text-[var(--color-navy)]'
                }`}
            >
              For IBPS PO Exam
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="max-w-5xl mx-auto mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-slate-150/60 shadow-sm transition-all duration-300">
          {activePrepTab === 'sbi' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="flex flex-col bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-[#F59E0B] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                    01
                  </span>
                  <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider">
                    Speed Improvement
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Beat SBI Cutoffs</h4>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  SBI PO prelims is notorious for complex puzzles. Mocks train you to solve 1+ questions per minute under actual exam strain.
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-[var(--color-blue)] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    02
                  </span>
                  <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider">
                    Accuracy Calibration
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Reduce Deductions</h4>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  With no sectional cutoffs in SBI, accuracy is key. Accurate attempts are prioritized to maximize your rank.
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-red-500 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                    03
                  </span>
                  <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider">
                    Exam Familiarity
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Simulate New Patterns</h4>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  SBI frequently changes question formats. Our mocks include the latest sectional styles so you are ready.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="flex flex-col bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-[#F59E0B] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                    01
                  </span>
                  <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider">
                    Sectional Focus
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Qualify Cutoffs</h4>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  IBPS has strict sectional cutoffs. Reports flag if English, Quant, or Reasoning dips below qualifying marks.
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-[var(--color-blue)] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    02
                  </span>
                  <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider">
                    Time Calibration
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Sectional Clock Mastery</h4>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  Master the 20-minute sectional timer by balancing simple arithmetic shortcuts with complex charts.
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-red-500 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                    03
                  </span>
                  <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider">
                    National Benchmarking
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-2">Track Percentile Rank</h4>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  Compete against lakhs of candidates and benchmark your score on a simulated national leaderboard.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 4: Live Test Preparation Tips ── */}
      <section className="bg-white py-16" aria-labelledby="prep-tips-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full">
              Preparation Guide
            </span>
            <h2 id="prep-tips-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
              Live Test Preparation Tips
            </h2>
            <p className="text-sm text-[var(--color-gray-600)] mt-3">
              Follow this step-by-step roadmap to make the absolute most of every live mock exam event on PrepBanker.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 md:pl-0">
            {/* Center line for desktop */}
            <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
            {/* Left line for mobile */}
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-150 block md:hidden" />

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-[var(--color-blue)] -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125" />
              <div className="w-full md:w-1/2 md:pr-10 text-left md:text-right">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                  <span className="text-[14px] font-extrabold uppercase tracking-wider text-[var(--color-blue)]">Step 01: Before the Test</span>
                  <h4 className="text-[14px] font-extrabold text-[var(--color-navy)] mt-1 mb-1.5">Review formulas & clear workspace</h4>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    Review quick math tricks, sit in a quiet room, and log in 5 minutes early to prepare your mindset.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-[var(--color-gold)] -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125" />
              <div className="w-full md:w-1/2 hidden md:block" />
              <div className="w-full md:w-1/2 md:pl-10 text-left">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                  <span className="text-[14px] font-extrabold uppercase tracking-wider text-[var(--color-gold)]">Step 02: During the Test</span>
                  <h4 className="text-[14px] font-extrabold text-[var(--color-navy)] mt-1 mb-1.5">Strictly monitor the section timers</h4>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    Monitor sectional timers closely. Skip any question that takes over 75 seconds to keep moving ahead.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125" />
              <div className="w-full md:w-1/2 md:pr-10 text-left md:text-right">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                  <span className="text-[14px] font-extrabold uppercase tracking-wider text-emerald-600">Step 03: After the Test</span>
                  <h4 className="text-[14px] font-extrabold text-[var(--color-navy)] mt-1 mb-1.5">Review negative marks & analytics</h4>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    Analyze your results. Review the detailed solutions for every incorrect or skipped question to understand mistakes.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-600 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125" />
              <div className="w-full md:w-1/2 hidden md:block" />
              <div className="w-full md:w-1/2 md:pl-10 text-left">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                  <span className="text-[14px] font-extrabold uppercase tracking-wider text-purple-600">Step 04: Mistake Analysis</span>
                  <h4 className="text-[14px] font-extrabold text-[var(--color-navy)] mt-1 mb-1.5">Maintain a mistake registry log</h4>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    Maintain a mistake log of calculation slips or pattern errors. Review it before attempting your next live test.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125" />
              <div className="w-full md:w-1/2 md:pr-10 text-left md:text-right">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300 text-left">
                  <span className="text-[14px] font-extrabold uppercase tracking-wider text-indigo-600">Step 05: Revision Strategy</span>
                  <h4 className="text-[14px] font-extrabold text-[var(--color-navy)] mt-1 mb-1.5">Re-attempt weak topics in practice mode</h4>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    Dedicate the next two days to practicing your weak areas before returning for the next live test.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: Popular Live Test Categories ── */}
      <section className="container-custom my-20 " aria-labelledby="popular-categories-heading">
        <div className="text-center max-w-3xl mx-auto mb-12 mt-16">
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Browse Test Catalogs
          </span>
          <h2 id="popular-categories-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
            Popular Live Test Categories
          </h2>
          <p className="text-sm text-[var(--color-gray-600)] mt-3">
            Select a target category below to filter the live mocks grid above dynamically and jump start your practice.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">

          {/* Card 1: SBI PO */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleCategoryClick('SBI PO'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-blue-50 text-[var(--color-blue)] rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <Target className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              SBI PO Live Tests
            </span>
          </a>

          {/* Card 2: IBPS PO */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleCategoryClick('IBPS PO'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-amber-50 text-[var(--color-gold)] rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <Award className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              IBPS PO Live Tests
            </span>
          </a>

          {/* Card 3: Banking Awareness */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleSearchClick('Banking'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-purple-50 text-purple-600 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              Banking Awareness
            </span>
          </a>

          {/* Card 4: Quantitative Aptitude */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleSearchClick('Quantitative'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-red-50 text-red-600 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              Quant Aptitude Tests
            </span>
          </a>

          {/* Card 5: Reasoning Ability */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleSearchClick('Reasoning'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              Reasoning Ability
            </span>
          </a>

          {/* Card 6: English Language */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleSearchClick('English'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-indigo-50 text-indigo-600 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              English Language
            </span>
          </a>

        </div>
      </section>

      {/* ── SECTION 6: Student Success Insights ── */}
      <section className="bg-white py-16 border-t border-slate-100" aria-labelledby="success-insights-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
              Success Indicators
            </span>
            <h2 id="success-insights-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
              Student Success Insights
            </h2>
            <p className="text-sm text-[var(--color-gray-600)] mt-3">
              Aggregated dashboard data of active candidates attempting weekly live tests on PrepBanker.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">

            {/* Left: Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)]">+22%</span>
                <p className="text-xs font-bold text-[var(--color-gray-600)] mt-1">Average Score Increase</p>
                <p className="text-xs text-[var(--color-gray-400)] mt-0.5">Observed after 5 live mock tests</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-blue)]">98%</span>
                <p className="text-xs font-bold text-[var(--color-gray-600)] mt-1">Report Improved Accuracy</p>
                <p className="text-xs text-[var(--color-gray-400)] mt-0.5">Through mistake analysis registry</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-gold)]">4.8★</span>
                <p className="text-xs font-bold text-[var(--color-gray-600)] mt-1">Student Satisfaction</p>
                <p className="text-xs text-[var(--color-gray-400)] mt-0.5">Rated by 8,000+ selected candidates</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-red-500">12,500+</span>
                <p className="text-xs font-bold text-[var(--color-gray-600)] mt-1">Mock Solved Weekly</p>
                <p className="text-xs text-[var(--color-gray-400)] mt-0.5">Highly competitive national lobby</p>
              </div>
            </div>

            {/* Right: Progress bars */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-1">Key Performance Tracker Metrics</h4>

              {/* Pattern 1 */}
              <div>
                <div className="flex justify-between text-[11.5px] font-bold text-[var(--color-navy)] mb-1.5">
                  <span>Importance of Regular Testing</span>
                  <span>92% Improvement</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-blue)] rounded-full transition-all duration-500" style={{ width: '92%' }} />
                </div>
                <p className="text-[10.5px] text-[var(--color-gray-400)] mt-1">Candidates attempting 2+ tests weekly reach cutoff benchmarks faster.</p>
              </div>

              {/* Pattern 2 */}
              <div>
                <div className="flex justify-between text-[11.5px] font-bold text-[var(--color-navy)] mb-1.5">
                  <span>Performance Tracking Benefits</span>
                  <span>85% Accuracy</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-gold)] rounded-full transition-all duration-500" style={{ width: '85%' }} />
                </div>
                <p className="text-[10.5px] text-[var(--color-gray-400)] mt-1">Reviewing analytics prevents repeat errors in critical sections.</p>
              </div>

              {/* Pattern 3 */}
              <div>
                <div className="flex justify-between text-[11.5px] font-bold text-[var(--color-navy)] mb-1.5">
                  <span>Preparation Patterns (Sectional Balance)</span>
                  <span>78% Synergy</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full transition-all duration-500" style={{ width: '78%' }} />
                </div>
                <p className="text-[10.5px] text-[var(--color-gray-400)] mt-1">Balanced revision across subjects ensures qualification in sectional tests.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
