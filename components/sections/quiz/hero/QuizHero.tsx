// PATH: components/sections/quiz/hero/QuizHero.tsx
import { Star, CheckCircle2, TrendingUp, Award, Zap } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuizHeroStats from './QuizHeroStats';
import type { QuizPlatformStats } from '@/types/quiz';

const TRUST = [
  { Icon: Star, label: 'Expert-curated questions' },
  { Icon: CheckCircle2, label: 'Latest 2026 exam pattern' },
  { Icon: TrendingUp, label: 'Detailed performance analytics' },
  { Icon: Award, label: 'Free tests, no card required' },
];

interface Props {
  stats: QuizPlatformStats;
  totalTests: number;
}

export default function QuizHero({ stats, totalTests }: Props) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-deep)]">

      {/* ── Decorative background blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
        />
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

      <div className="container-custom relative z-10 pt-10 pb-10">

        {/* Breadcrumb */}
        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Quiz Practice' },
            ]}
          />
        </div>

        {/* ── Two-col layout on lg+ ── */}
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* LEFT – headline + trust */}
          <div className="flex-1 min-w-0">

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/25 mb-4">
              <Star className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" fill="currentColor" />
              <span className="text-[11px] font-bold text-[var(--color-gold-bright)] uppercase tracking-widest">
                {stats.avgRating} Rated · India&apos;s #1 Banking Quiz Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-tight text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 5vw, 3rem)',
              }}
            >
              Practice Quizzes for{' '}
              <span className="text-gold-gradient">SBI PO, IBPS PO</span> &amp; Competitive Exams
            </h1>

            <p
              className="mt-3 max-w-lg text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Attempt {totalTests}+ mock tests, sectional drills, and topic-wise quizzes
              crafted for SBI PO &amp; IBPS PO 2026. Real exam feel. Instant analytics.
            </p>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {TRUST.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0 text-[var(--color-gold-bright)]" />
                  <span className="text-[12px] font-medium text-white/75">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3 mb-8">
              <a
                href="https://app.prepgrind.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-navy-light) 100%)',
                  boxShadow: '0 4px 18px rgba(27,110,181,0.4)',
                }}
              >
                <Zap className="w-4 h-4" />
                Start Free Test
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
                Browse All Tests
              </a>
            </div>
          </div>

          {/* RIGHT – stat cards */}
          <div className="mt-10 lg:mt-0 flex-shrink-0 w-full lg:w-auto">
            <QuizHeroStats stats={stats} />
          </div>
        </div>
      </div>

      {/* Bottom hard edge — no blur, clean separator */}
      <div className="h-px bg-[var(--color-gray-100)]/20 relative z-10" />
    </section>
  );
}