// PATH: components/sections/current-affairs/hero/CAHero.tsx
import {
  Newspaper, TrendingUp, Calendar, BookOpen, Users, Star, Sparkles,
} from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { CA_HERO_STATS } from '../../../../lib/data/current-affairs/stats';

// ─── Icon map ─────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Newspaper,
  TrendingUp,
  Calendar,
  BookOpen,
  Users,
  Star,
};

// ─── Component ────────────────────────────
export default function CAHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-navy-deep)]"
      style={{ padding: '3rem 0 2.5rem' }}
    >

      {/* ── Decorative background blobs (consistent with site-wide hero pattern) ── */}
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
            { label: 'Current Affairs' },
          ]}
        />

        {/* ── Badge ── */}
        <div className="mt-4 mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/25">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
          <span className="text-xs font-bold text-[var(--color-gold-bright)] uppercase tracking-widest">
            Updated Daily
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
          Banking{' '}
          <span className="text-gold-gradient">Current Affairs 2026</span>
        </h1>

        <p
          className="mt-3 max-w-xl text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.62)' }}
        >
          Daily and monthly current affairs curated for SBI PO &amp; IBPS PO
          aspirants. Stay on top of banking news, RBI policy, economy updates,
          and government schemes — all in one place.
        </p>

        {/* ── Stats strip ── */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CA_HERO_STATS.map(({ iconName, value, label }) => {
            const Icon = ICON_MAP[iconName] ?? Newspaper;
            return (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <span
                  className="flex-shrink-0 p-2 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.10)' }}
                >
                  <Icon className="w-4 h-4 text-[var(--color-gold-bright)]" aria-hidden />
                </span>
                <div>
                  <p className="text-base font-bold text-white leading-none">{value}</p>
                  <p
                    className="text-[10px] font-medium mt-0.5"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom separator */}
      <div className="h-px mt-10 bg-white/10 relative z-10" />
    </section>
  );
}