// PATH: components/sections/current-affairs/hero/CAHero.tsx
import {
  Newspaper, TrendingUp, Calendar, BookOpen, Users, Star,
} from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { CA_HERO_STATS } from '../../../../lib/data/current-affairs/stats';

// ─── Icon map ─────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Newspaper:  Newspaper,
  TrendingUp: TrendingUp,
  Calendar:   Calendar,
  BookOpen:   BookOpen,
  Users:      Users,
  Star:       Star,
};

// ─── Component ────────────────────────────
export default function CAHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
        padding: '3rem 0 2.5rem',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 50%, var(--color-blue) 0%, transparent 55%), ' +
            'radial-gradient(circle at 85% 20%, var(--color-gold) 0%, transparent 40%)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home',            href: '/' },
            { label: 'Current Affairs' },
          ]}
        />

        {/* Headline */}
        <h1
          className="mt-4 font-extrabold leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize:   'clamp(1.75rem, 4vw, 2.75rem)',
            color:      '#fff',
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

        {/* Stats strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CA_HERO_STATS.map(({ iconName, value, label }) => {
            const Icon = ICON_MAP[iconName] ?? Newspaper;
            return (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background:     'rgba(255,255,255,0.07)',
                  border:         '1px solid rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <span
                  className="flex-shrink-0 p-2 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.10)' }}
                >
                  <Icon className="w-4 h-4 text-[var(--color-gold-bright)]" />
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
    </section>
  );
}