// PATH: components/sections/current-affairs/hero/CAHero.tsx
import { ReactNode, ElementType } from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CAHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badgeText?: string;
  BadgeIcon?: ElementType;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

// ─── Component ────────────────────────────
export default function CAHero({
  breadcrumbs,
  badgeText,
  BadgeIcon,
  title,
  description,
  children,
}: CAHeroProps) {
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
        <Breadcrumb items={breadcrumbs} />

        {/* ── Badge ── */}
        {badgeText && (
          <div className="mt-4 mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/25">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />}
            <span className="text-xs font-bold text-[var(--color-gold-bright)] uppercase tracking-widest">
              {badgeText}
            </span>
          </div>
        )}

        {/* ── Headline ── */}
        <h1
          className="font-extrabold leading-tight text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          }}
        >
          {title}
        </h1>

        {description && (
          <div
            className="mt-3 max-w-2xl text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {description}
          </div>
        )}

        {/* ── Dynamic Content / Children (Stats, share controls, etc.) ── */}
        {children}

      </div>

      {/* Bottom separator */}
      <div className="h-px mt-10 bg-white/10 relative z-10" />
    </section>
  );
}