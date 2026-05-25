'use client';

import { useState } from 'react';
import { Zap, BookOpen } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { heroExamData } from '@/lib/data';
import type { ExamType } from '@/types';

// ─────────────────────────────────────────
// HeroSection — PrepBanker Homepage
// ─────────────────────────────────────────

const TABS: ExamType[] = ['SBI-PO', 'IBPS-PO'];

const EXAM_META: Record<ExamType, {
  color: string;
  vacancies: string;
  exam: string;
  notify: string;
}> = {
  'SBI-PO': {
    color: '#1B6EB5',
    vacancies: '2000+ Vacancies',
    exam: 'June 2026',
    notify: 'April 2026',
  },
  'IBPS-PO': {
    color: '#D4A017',
    vacancies: '3500+ Vacancies',
    exam: 'Oct 2026',
    notify: 'Aug 2026',
  },
};

const NUM_STYLES: { bg: string; color: string }[] = [
  { bg: '#DBEAFE', color: '#1D4ED8' },
  { bg: '#FEF3C7', color: '#B45309' },
  { bg: '#D1FAE5', color: '#065F46' },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<ExamType>('SBI-PO');
  const data = heroExamData[activeTab];
  const meta = EXAM_META[activeTab];

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-deep)]">

      {/* ── Decorative background blobs (matches QuizHero) ── */}
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

      <div className="container-custom relative z-10 pt-14">

        {/* ── Top Label ── */}
        <div className="mb-5 text-center mt-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest"
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
            India&apos;s #1 Banking Exam Prep Platform
          </div>
        </div>

        {/* ── Headline ── */}
        <h1
          className="mx-auto mb-4 max-w-[820px] text-center font-extrabold leading-[1.15] text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)',
          }}
        >
          Crack{' '}
          <span style={{ color: 'var(--color-gold-bright)' }}>SBI PO</span> &{' '}
          <span style={{ color: 'var(--color-blue-light)' }}>IBPS PO</span>
          <br />
          with Confidence in 2026
        </h1>

        {/* ── Sub-headline ── */}
        <p
          className="mx-auto mb-7 max-w-[560px] text-center leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          }}
        >
          Full mock tests, live exams, daily current affairs, and AI-powered
          analytics to supercharge your banking exam preparation.
        </p>

        {/* ── CTA ── */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
              color: 'var(--color-navy-deep)',
              boxShadow: '0 4px 18px rgba(212,160,23,0.35)',
            }}
          >
            <Zap size={16} />
            Start Preparing Now
          </a>
          <a
            href="#test-series"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <BookOpen size={16} />
            Browse Mock Tests
          </a>
        </div>

        {/* ── Quick Stats ── */}
        <div className="mb-10 flex flex-wrap justify-center gap-6">
          {[
            { value: '50K+', label: 'Aspirants' },
            { value: '2M+',  label: 'Tests Taken' },
            { value: '4.8★', label: 'Rating' },
            { value: 'Free', label: 'Mock Tests' },
          ].map((s) => (
            <div key={s.value} className="text-center">
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
                className="text-[0.72rem] tracking-wider"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════
            TAB CARD
        ════════════════════════════════════════ */}
        <div className="mx-auto max-w-[1080px] overflow-hidden rounded-2xl bg-white shadow-[0_4px_32px_rgba(13,27,62,0.22)] border border-slate-100">

          {/* ── Tab Header ── */}
          <div className="flex flex-wrap items-stretch border-b border-slate-100 bg-slate-50">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              const m = EXAM_META[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={[
                    'flex-1 min-w-[130px] px-6 py-3.5 text-left transition-all duration-200 focus:outline-none border-b-[3px]',
                    isActive
                      ? 'bg-white shadow-sm'
                      : 'border-transparent text-slate-400 hover:bg-white/70 hover:text-slate-600',
                  ].join(' ')}
                  style={isActive ? { borderBottomColor: m.color } : {}}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: m.color }}
                    />
                    <span className={`text-sm font-bold ${isActive ? 'text-slate-800' : ''}`}>
                      {tab}
                    </span>
                  </span>
                  <span
                    className={`mt-0.5 block pl-4 text-[0.65rem] font-normal ${
                      isActive ? 'text-slate-400' : 'text-slate-300'
                    }`}
                  >
                    {m.vacancies}
                  </span>
                </button>
              );
            })}

            {/* Exam pills — desktop */}
            <div className="hidden sm:flex items-center gap-2 px-5 ml-auto flex-wrap">
              <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-amber-700">
                Prelims: {meta.exam}
              </span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-blue-700">
                Notification: {meta.notify}
              </span>
            </div>
          </div>

          {/* Exam pills — mobile strip */}
          <div className="flex sm:hidden flex-wrap items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-amber-700">
              Prelims: {meta.exam}
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-blue-700">
              Notification: {meta.notify}
            </span>
          </div>

          {/* ── Content Grid ── */}
          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {data.sections.map((section, i) => (
              <div key={i} className="p-5 sm:p-6">

                {/* Section header */}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800">{section.title}</h3>
                  <Badge variant={i === 0 ? 'blue' : i === 1 ? 'gold' : 'green'} size="sm">
                    {section.level}
                  </Badge>
                </div>

                {/* Topics */}
                <ul className="mb-4 flex flex-col gap-2">
                  {section.topics.map((topic, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[0.82rem] text-slate-600"
                    >
                      <span
                        className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[0.58rem] font-bold"
                        style={{
                          background: NUM_STYLES[i].bg,
                          color: NUM_STYLES[i].color,
                        }}
                      >
                        {j + 1}
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Info box */}
                <div className="mb-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-[0.74rem] text-slate-500">
                  {section.info}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[0.65rem] font-semibold text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* ── Bottom Bar ── */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-5 py-3.5">
            <span className="flex items-center gap-1.5 text-[0.8rem] text-slate-400">
              <BookOpen size={14} className="text-slate-400" />
              Start your {activeTab} preparation today
            </span>
            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.78rem] font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
                color: 'var(--color-navy-deep)',
                boxShadow: '0 2px 10px rgba(212,160,23,0.25)',
              }}
            >
              Get Free Mock Tests →
            </a>
          </div>

        </div>
        {/* END TAB CARD */}

      </div>

      {/* Bottom separator — matches QuizHero */}
      <div className="h-px mt-14 bg-white/10 relative z-10" />
    </section>
  );
}