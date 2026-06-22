// PATH: components/live-tests/hero/LiveTestsHero.tsx
'use client';

import { Radio, Users, Clock, Zap, Globe, Target, BookOpen, Unlock } from 'lucide-react';
import { heroStats } from '@/lib/data/live-tests';
import Breadcrumb from '@/components/shared/Breadcrumb';

// ─── Icon map ──────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Radio, Users, Clock, Zap, Globe, Target, BookOpen, Unlock,
};

export default function LiveTestsHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-navy-deep)]"
      style={{ padding: '2rem 0 1.5rem' }}
    >

      {/* ── Decorative background blobs ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
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
        {/* Red accent — unique to live tests page */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }}
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

      <div className="container-custom relative z-10">

        {/* ── Breadcrumb ── */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Live Tests' },
          ]}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-4">

          {/* Left Column: Hero Text Info */}
          <div className="flex-1 max-w-2xl">
            {/* ── Live badge ── */}
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-400/25">
              <span
                className="w-2 h-2 rounded-full bg-red-400"
                style={{ animation: 'lth-pulse 1.5s ease-in-out infinite' }}
                aria-hidden
              />
              <span className="text-xs font-bold text-red-300 uppercase tracking-widest">
                Live Now
              </span>
            </div>

            {/* ── Headline ── */}
            <h1
              className="font-extrabold leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: '#fff',
              }}
            >
              Live Mock Tests for{' '}
              <span className="text-gold-gradient">SBI PO, IBPS PO & Banking Exams</span>
            </h1>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.62)' }}
            >
              Join real-time live mock tests for SBI PO and IBPS PO. Compete with
              thousands of aspirants simultaneously, get instant rankings, and
              experience true exam-day pressure before the actual exam.
            </p>
          </div>

          {/* Right Column: 4 Stats Cards in 2x2 Grid */}
          <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-w-[290px] sm:max-w-none lg:max-w-[300px] mx-auto lg:mx-0">
              {heroStats.map(({ iconName, value, label }) => {
                const Icon = ICON_MAP[iconName] ?? Radio;
                return (
                  <div
                    key={label}
                    className="flex flex-col items-start p-3 rounded-xl border w-full h-auto text-left"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="p-1 rounded-md flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,0.08)' }}
                      >
                        <Icon className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
                      </span>
                      <p className="text-sm font-black text-white leading-none">{value}</p>
                    </div>
                    <p
                      className="text-xs font-semibold mt-0.5 leading-tight"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>



      <style>{`
        @keyframes lth-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .5; transform: scale(1.45); }
        }
      `}</style>
    </section>
  );
}