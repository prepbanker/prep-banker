// PATH: components/sections/quiz/hero/QuizHero.tsx
import { Star, Zap } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import QuizHeroStats from './QuizHeroStats';
import type { QuizPlatformStats } from '@/types/quiz';

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
              { label: 'Quiz Practice ' },
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
              <span className="text-[14px] font-bold text-[var(--color-gold-bright)] uppercase tracking-widest">
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
              <span className="text-gold-gradient">SBI PO, IBPS PO</span>
            </h1>

            <p
              className="mt-3 max-w-lg text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Attempt {totalTests}+ mock tests, sectional drills, and topic-wise quizzes
              crafted for SBI PO &amp; IBPS PO 2026. Real exam feel. Instant analytics.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3 mb-8">
              <a
                href="https://app.prepgrind.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: 'var(--color-gold-bright)',
                  boxShadow: '0 4px 18px rgba(240, 180, 41, 0.4)',
                }}
              >
                <Zap className="w-4 h-4 text-slate-900" />
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