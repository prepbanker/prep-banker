'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

type TabType = 'mock' | 'section' | 'pyp' | 'quiz';

interface TabContent {
  id: TabType;
  tabLabel: string;
  title: string;
  description: string;
  features: string[];
}

const TABS_DATA: TabContent[] = [
  {
    id: 'mock',
    tabLabel: 'Mock Test',
    title: 'Full-Length Mock Tests',
    description: 'Practice 2026 pattern full-length mock tests. Track speed, accuracy, and section-wise cut-offs.',
    features: ['Real exam-like simulation', 'Detailed performance scorecard', 'All-India percentile rank']
  },
  {
    id: 'section',
    tabLabel: 'Section Test',
    title: 'High-Impact Sectional Tests',
    description: 'Target weak areas with subject-wise tests. Master Quant, Reasoning, and English under strict time limits.',
    features: ['Section-specific timers', 'Targeted subject improvement', 'Detailed solutions & analytics']
  },
  {
    id: 'pyp',
    tabLabel: 'PYP',
    title: 'Previous Year Question Papers',
    description: 'Solve actual past SBI PO & IBPS PO questions to analyze recurring exam patterns and difficulty.',
    features: ['Actual past-year exam questions', 'Detailed explanations', 'Identify recurring question patterns']
  },
  {
    id: 'quiz',
    tabLabel: 'Daily Quiz',
    title: 'Daily Dynamic Quizzes',
    description: 'Strengthen daily speed and concepts with topic-wise 10-minute quizzes and short tricks.',
    features: ['10-15 minute quick practice sessions', 'Instant scoring and rankings', 'Covers all topics and sub-topics']
  }
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabType>('mock');
  const activeIndex = TABS_DATA.findIndex((t) => t.id === activeTab);

  return (
    <section aria-label="Hero section" className="relative overflow-hidden bg-[var(--color-navy-deep)]">

      {/* ── Decorative background blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Top-left blue blob */}
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

      <div className="container-custom relative z-10 pt-14 pb-14">

        {/* ── Top Label ── */}
        <div className="mb-5 text-center mt-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[14px] font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(212,160,23,0.1)',
              border: '1px solid rgba(212,160,23,0.25)',
              color: 'var(--color-gold-bright)',
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                background: 'var(--color-gold-bright)',
                animation: 'pulse-live 1.5s infinite',
              }}
            />
            India&apos;s Number 1 Banking Exam Preparation Platform
          </div>
        </div>

        {/* ── Grid Container (Aligned to Start for consistent top boundary) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mt-6">
          
          {/* Left Column (60% width) */}
          <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Headline */}
            <h1
              className="mb-4 max-w-[820px] font-extrabold leading-[1.15] text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
              }}
            >
              Crack{' '}
              <span style={{ color: 'var(--color-gold-bright)' }}>SBI PO</span> &amp;{' '}
              <span style={{ color: 'var(--color-blue-light)' }}>IBPS PO</span>
              <br />
              with Confidence in 2026
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-7 max-w-[560px] leading-relaxed text-sm text-slate-300 text-center lg:text-left"
              style={{
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Practice with SBI PO Mock Tests, IBPS PO Mock Tests, sectional tests,
              topic-wise quizzes, current affairs, and study material designed to help
              you prepare effectively and score higher.
            </p>

            {/* CTA */}
            <div className="mb-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://app.prepgrind.com/signup/banking"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-glow-effect inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
                  color: 'var(--color-navy-deep)',
                  boxShadow: '0 4px 18px rgba(212,160,23,0.35)',
                }}
              >
                <Zap size={16} />
                Start Preparing Now
              </a>
            </div>

            {/* Quick Stats */}
            <section aria-label="Platform statistics" className="w-full">
              <ul className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 list-none p-0 m-0">
                {[
                  { value: '50K+', label: 'Aspirants Preparing' },
                  { value: '2M+', label: 'Questions Attempted' },
                  { value: '4.8★', label: 'Student Rating' },
                  { value: '500+', label: 'Free Mock Tests' },
                ].map((s) => (
                  <li key={s.value} className="text-center lg:text-left">
                    <div
                      className="text-xl font-extrabold"
                      style={{
                        color: 'var(--color-gold-bright)',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[13px] font-bold tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      {s.label}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column (40% width) */}
          <div className="lg:col-span-2 w-full mb-6">
            {/* ── Interactive Category Slider Component ── */}
            <section aria-label="Interactive test categories" className="w-full rounded-3xl border border-slate-800 bg-[#0a1329]/60 p-5 md:p-6 shadow-[0_12px_40px_rgba(13,27,62,0.25)]">
              {/* Tab buttons list (Forced 4-column layout on all viewports) */}
              <div role="tablist" className="grid grid-cols-4 gap-1.5 mb-5 w-full">
                {TABS_DATA.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`hero-category-tab-${tab.id}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`hero-category-panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-center px-1 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-extrabold transition-all duration-300 cursor-pointer border-2 whitespace-nowrap overflow-hidden text-ellipsis ${
                        isActive
                          ? 'bg-white border-[var(--color-gold-bright)] text-slate-900 shadow-[0_4px_16px_rgba(255,255,255,0.1)] scale-105'
                          : 'bg-white/5 border-white/[0.08] text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
                      }`}
                      title={tab.tabLabel}
                    >
                      {tab.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* Sliding Content Container */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1b3e]/90 shadow-xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    width: '400%',
                    transform: `translate3d(-${activeIndex * 25}%, 0, 0)`,
                  }}
                >
                  {TABS_DATA.map((tab) => (
                    <div
                      key={tab.id}
                      id={`hero-category-panel-${tab.id}`}
                      role="tabpanel"
                      aria-labelledby={`hero-category-tab-${tab.id}`}
                      className="w-1/4 flex-shrink-0 p-5 flex flex-col justify-between min-h-[250px]"
                    >
                      <div className="flex-1">
                        <h3 className="text-base font-extrabold text-white mb-2 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-bright)] animate-pulse" />
                          {tab.title}
                        </h3>
                        <p className="text-slate-300 text-xs leading-relaxed mb-4">
                          {tab.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="flex flex-col gap-1.5 mb-4 list-none pl-0">
                          {tab.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                              <svg className="w-3.5 h-3.5 text-[var(--color-gold-bright)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Divider and Action CTA */}
                      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] text-slate-400 font-semibold">Free Access</span>
                        <a
                          href="https://app.prepgrind.com/signup/banking"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 hover:opacity-90 active:scale-95 text-slate-900"
                          style={{
                            background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
                            boxShadow: '0 4px 12px rgba(212,160,23,0.25)',
                          }}
                        >
                          Start Now →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          
        </div>

      </div>

      {/* Bottom separator — matches QuizHero */}
      <div className="h-px bg-white/10 relative z-10" />
    </section>
  );
}