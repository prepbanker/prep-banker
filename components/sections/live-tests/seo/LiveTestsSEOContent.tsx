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
          <span className="text-[11px] font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Real Exam Simulation
          </span>
          <h2 id="why-take-live-tests" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
            Why Take Live Mock Tests?
          </h2>
          <p className="text-sm text-[var(--color-gray-600)] mt-3">
            Standard mock tests are good, but live tests simulate the precise pressure, constraints, and peer competition of the actual exam day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Real Exam Simulation</h3>
            <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
              Experience the exact user interface, timer rules, and section switching of the official SBI/IBPS portals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Time Management</h3>
            <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
              Learn when to skip difficult puzzles and DI sets to maximize score within rigid sectional timelines.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-blue-50 text-[var(--color-blue)] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Performance Tracking</h3>
            <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
              Analyze your ranking patterns over multiple tests to pinpoint whether your preparation curve is heading upwards.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Accuracy Improvement</h3>
            <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
              Curb wild guessing. Negative marking deductions are highlighted in reports to teach calculated risk-taking.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-blue)]/20 transition-all duration-300 hover:shadow-lg flex flex-col items-start group">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-2">Confidence Building</h3>
            <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
              Overcome exam anxiety by attempting 10+ live national tests. Reaching the center will feel like just another drill.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Benefits of Live Test Series ── */}
      <section className="bg-white py-16 border-y border-slate-100" aria-labelledby="benefits-test-series">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold tracking-widest text-[var(--color-gold)] uppercase bg-amber-50 px-3.5 py-1.5 rounded-full">
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
            <div className="p-6 bg-[var(--color-off-white)] rounded-2xl border border-slate-100/60 hover:border-[var(--color-blue)]/10 hover:bg-white hover:shadow-md transition-all duration-200">
              <h3 className="text-[14.5px] font-bold text-[var(--color-navy)] flex items-center gap-2 mb-2">
                <Award className="w-4.5 h-4.5 text-[var(--color-gold)]" />
                Competitive Ranking
              </h3>
              <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                Compete with 13,000+ real banking candidates across India. Get your exact rank, percentile score, and see how you stack up against the top 10% scorers.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-[var(--color-off-white)] rounded-2xl border border-slate-100/60 hover:border-[var(--color-blue)]/10 hover:bg-white hover:shadow-md transition-all duration-200">
              <h3 className="text-[14.5px] font-bold text-[var(--color-navy)] flex items-center gap-2 mb-2">
                <CheckSquare className="w-4.5 h-4.5 text-[var(--color-blue)]" />
                Exam Readiness Metric
              </h3>
              <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                Our AI-driven readiness tracker assesses your scores across sectionals and alerts you when your average score climbs above the historical cutoff marks.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-[var(--color-off-white)] rounded-2xl border border-slate-100/60 hover:border-[var(--color-blue)]/10 hover:bg-white hover:shadow-md transition-all duration-200">
              <h3 className="text-[14.5px] font-bold text-[var(--color-navy)] flex items-center gap-2 mb-2">
                <BarChart3 className="w-4.5 h-4.5 text-emerald-600" />
                Detailed Analytics
              </h3>
              <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                Receive instant performance sheets showing accuracy ratios, speed graphs, time spent per correct vs incorrect response, and descriptive feedback keys.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 bg-[var(--color-off-white)] rounded-2xl border border-slate-100/60 hover:border-[var(--color-blue)]/10 hover:bg-white hover:shadow-md transition-all duration-200">
              <h3 className="text-[14.5px] font-bold text-[var(--color-navy)] flex items-center gap-2 mb-2">
                <TrendingUp className="w-4.5 h-4.5 text-purple-600" />
                Performance Benchmarking
              </h3>
              <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                Compare your question-by-question response time with the topper's time. Identify where you're wasting time on simple arithmetic or puzzle questions.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 bg-[var(--color-off-white)] rounded-2xl border border-slate-100/60 hover:border-[var(--color-blue)]/10 hover:bg-white hover:shadow-md transition-all duration-200">
              <h3 className="text-[14.5px] font-bold text-[var(--color-navy)] flex items-center gap-2 mb-2">
                <BookOpen className="w-4.5 h-4.5 text-indigo-600" />
                Topic-wise Improvement
              </h3>
              <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                Our reports divide questions by micro-topics (e.g., Circular Seating, Quadratic Equations) so you know exactly which chapters to revise before the next test.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 bg-[var(--color-off-white)] rounded-2xl border border-slate-100/60 hover:border-[var(--color-blue)]/10 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-center items-center text-center">
              <h4 className="text-[13px] font-bold text-[var(--color-navy)] mb-1">Ready to test your limits?</h4>
              <p className="text-[11px] text-[var(--color-gray-400)] mb-3">Attempt our free challenges and check your rank today.</p>
              <button 
                onClick={scrollToGrid}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--color-blue)] hover:underline"
              >
                Attempt Mock Test Now <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How Live Tests Help in Bank Exam Prep ── */}
      <section className="container-custom my-20" aria-labelledby="prep-guide-heading">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Exam Specific Guidance
          </span>
          <h2 id="prep-guide-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
            How Live Tests Help in Bank Exam Preparation
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-150 p-1.5 rounded-2xl flex gap-1.5 border border-slate-200">
            <button
              onClick={() => setActivePrepTab('sbi')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activePrepTab === 'sbi'
                  ? 'bg-[var(--color-navy)] text-white shadow'
                  : 'text-[var(--color-gray-600)] hover:text-[var(--color-navy)]'
              }`}
            >
              For SBI PO Exam
            </button>
            <button
              onClick={() => setActivePrepTab('ibps')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activePrepTab === 'ibps'
                  ? 'bg-[var(--color-navy)] text-white shadow'
                  : 'text-[var(--color-gray-600)] hover:text-[var(--color-navy)]'
              }`}
            >
              For IBPS PO Exam
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-150/60 shadow-sm transition-all duration-300">
          {activePrepTab === 'sbi' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[var(--color-gold)] mb-1 uppercase tracking-wide">01. Speed Improvement</span>
                <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-2">Beat the Tough SBI Cutoffs</h4>
                <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                  SBI PO prelims is notorious for highly complex puzzle questions. Live tests force you to maintain a speed of 1+ questions/minute under time strain.
                </p>
              </div>
              <div className="flex flex-col border-t md:border-t-0 md:border-x border-slate-100 pt-6 md:pt-0 md:px-6">
                <span className="text-xs font-bold text-[var(--color-blue)] mb-1 uppercase tracking-wide">02. Accuracy Calibration</span>
                <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-2">Reduce Negative Deductions</h4>
                <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                  Because there are no sectional cutoffs in SBI PO, scoring maximum marks is key. Accurate attempts are prioritized by ranking systems to build precision.
                </p>
              </div>
              <div className="flex flex-col border-t md:border-t-0 pt-6 md:pt-0">
                <span className="text-xs font-bold text-red-600 mb-1 uppercase tracking-wide">03. Exam Familiarity</span>
                <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-2">Simulate Complex Patterns</h4>
                <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                  SBI PO frequently changes sectional question styles (e.g. new types of coding-decoding). Our live mocks include the latest formats to keep you prepared.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[var(--color-gold)] mb-1 uppercase tracking-wide">01. Section-wise Focus</span>
                <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-2">Balance Sectional Cutoffs</h4>
                <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                  IBPS PO has strict sectional cutoffs. Our live reports flag if your performance in English, Quant, or Reasoning dips below qualifying thresholds.
                </p>
              </div>
              <div className="flex flex-col border-t md:border-t-0 md:border-x border-slate-100 pt-6 md:pt-0 md:px-6">
                <span className="text-xs font-bold text-[var(--color-blue)] mb-1 uppercase tracking-wide">02. Time Allocation Strategies</span>
                <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-2">Sectional Clock Optimization</h4>
                <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                  Learn to balance time between easy arithmetic shortcuts and multi-statement data interpretation charts to prevent running out of time in the Quant section.
                </p>
              </div>
              <div className="flex flex-col border-t md:border-t-0 pt-6 md:pt-0">
                <span className="text-xs font-bold text-red-600 mb-1 uppercase tracking-wide">03. Mock Test Importance</span>
                <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mb-2">Realistic National Standing</h4>
                <p className="text-[12px] leading-relaxed text-[var(--color-gray-600)]">
                  Over 8 lakh candidates sit for IBPS PO. Our live mocks benchmark your percentile against a broad, realistic sample of national aspirants.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 4: Live Test Preparation Tips ── */}
      <section className="bg-white py-16 border-y border-slate-100" aria-labelledby="prep-tips-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-extrabold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full">
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
              <div className="absolute left-2 md:left-1/2 w-3.5 h-3.5 rounded-full bg-[var(--color-blue)] border-4 border-white -translate-x-1/2 z-10" />
              <div className="w-full md:w-1/2 md:pr-10 md:text-right">
                <div className="bg-[var(--color-off-white)] p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-blue)]">Step 01: Before the Test</span>
                  <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mt-1 mb-2">Review formulas & clear workspace</h4>
                  <p className="text-[11.5px] leading-relaxed text-[var(--color-gray-600)]">
                    Take 10 minutes to review quick math tricks and puzzle rules. Sit in a quiet room, avoid external aids, and log in 5 minutes early to adjust your mindset.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-3.5 h-3.5 rounded-full bg-[var(--color-gold)] border-4 border-white -translate-x-1/2 z-10" />
              <div className="w-full md:w-1/2 hidden md:block" />
              <div className="w-full md:w-1/2 md:pl-10">
                <div className="bg-[var(--color-off-white)] p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gold)]">Step 02: During the Test</span>
                  <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mt-1 mb-2">Strictly monitor the section timers</h4>
                  <p className="text-[11.5px] leading-relaxed text-[var(--color-gray-600)]">
                    Do not get stuck on a single puzzle. If a question takes more than 75 seconds without a clear path, flag it, skip, and move ahead immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-3.5 h-3.5 rounded-full bg-emerald-600 border-4 border-white -translate-x-1/2 z-10" />
              <div className="w-full md:w-1/2 md:pr-10 md:text-right">
                <div className="bg-[var(--color-off-white)] p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Step 03: After the Test</span>
                  <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mt-1 mb-2">Review negative marks & analytics</h4>
                  <p className="text-[11.5px] leading-relaxed text-[var(--color-gray-600)]">
                    Do not just look at your rank. Open the solutions sheet and study the step-by-step logic for every incorrect or skipped question.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 group">
              <div className="absolute left-2 md:left-1/2 w-3.5 h-3.5 rounded-full bg-purple-600 border-4 border-white -translate-x-1/2 z-10" />
              <div className="w-full md:w-1/2 hidden md:block" />
              <div className="w-full md:w-1/2 md:pl-10">
                <div className="bg-[var(--color-off-white)] p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Step 04: Mistake Analysis</span>
                  <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mt-1 mb-2">Maintain a mistake registry log</h4>
                  <p className="text-[11.5px] leading-relaxed text-[var(--color-gray-600)]">
                    Keep a diary or doc listing errors (e.g. calculation slip, misreading tables). Review this log before starting your next live mock.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
              <div className="absolute left-2 md:left-1/2 w-3.5 h-3.5 rounded-full bg-indigo-600 border-4 border-white -translate-x-1/2 z-10" />
              <div className="w-full md:w-1/2 md:pr-10 md:text-right">
                <div className="bg-[var(--color-off-white)] p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Step 05: Revision Strategy</span>
                  <h4 className="text-[13.5px] font-bold text-[var(--color-navy)] mt-1 mb-2">Re-attempt weak topics in practice mode</h4>
                  <p className="text-[11.5px] leading-relaxed text-[var(--color-gray-600)]">
                    Dedicate the subsequent 2 days to solving sectional quizzes on your identified weak areas, then return for the next scheduled live event.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: Popular Live Test Categories ── */}
      <section className="container-custom my-20" aria-labelledby="popular-categories-heading">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
            Browse Test Catalogs
          </span>
          <h2 id="popular-categories-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] mt-3">
            Popular Live Test Categories
          </h2>
          <p className="text-sm text-[var(--color-gray-600)] mt-3">
            Select a target category below to filter the live mocks grid above dynamically and jump start your practice.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          {/* Card 1: SBI PO */}
          <a
            href="#live-tests-grid"
            onClick={(e) => { e.preventDefault(); handleCategoryClick('SBI PO'); }}
            className="bg-white p-5 rounded-2xl border border-slate-150/60 hover:border-[var(--color-blue)] hover:shadow-md transition-all duration-250 flex flex-col items-center text-center group"
          >
            <span className="p-3.5 bg-blue-50 text-[var(--color-blue)] rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-200">
              <Target className="w-5 h-5" />
            </span>
            <span className="text-[12px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
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
            <span className="text-[12px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
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
            <span className="text-[12px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
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
            <span className="text-[12px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
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
            <span className="text-[12px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
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
            <span className="text-[12px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
              English Language
            </span>
          </a>

        </div>
      </section>

      {/* ── SECTION 6: Student Success Insights ── */}
      <section className="bg-white py-16 border-t border-slate-100" aria-labelledby="success-insights-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold tracking-widest text-[var(--color-blue)] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
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
                <p className="text-[12px] font-bold text-[var(--color-gray-600)] mt-1">Average Score Increase</p>
                <p className="text-[10px] text-[var(--color-gray-400)] mt-0.5">Observed after 5 live mock tests</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-blue)]">98%</span>
                <p className="text-[12px] font-bold text-[var(--color-gray-600)] mt-1">Report Improved Accuracy</p>
                <p className="text-[10px] text-[var(--color-gray-400)] mt-0.5">Through mistake analysis registry</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-gold)]">4.8★</span>
                <p className="text-[12px] font-bold text-[var(--color-gray-600)] mt-1">Student Satisfaction</p>
                <p className="text-[10px] text-[var(--color-gray-400)] mt-0.5">Rated by 8,000+ selected candidates</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-red-500">12,500+</span>
                <p className="text-[12px] font-bold text-[var(--color-gray-600)] mt-1">Mock Solved Weekly</p>
                <p className="text-[10px] text-[var(--color-gray-400)] mt-0.5">Highly competitive national lobby</p>
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
