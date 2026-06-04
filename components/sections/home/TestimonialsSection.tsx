// PATH: components/sections/TestimonialsSection.tsx
'use client';

import {
  Star,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle2,
  Zap,
  Trophy,
  Target,
  ClipboardList,
  MessageSquareQuote,
} from 'lucide-react';
import { SectionTitle, Button, StarRating } from '@/components/ui';
import { testimonials, metrics } from '@/lib/data';

// ─────────────────────────────────────────
// Icon map for metrics (replace emoji)
// ─────────────────────────────────────────
const METRIC_ICONS: Record<number, React.ReactNode> = {
  0: <Star size={20} color="var(--color-blue)" strokeWidth={2} />,
  1: <Users size={20} color="var(--color-blue)" strokeWidth={2} />,
  2: <ClipboardList size={20} color="var(--color-blue)" strokeWidth={2} />,
  3: <CheckCircle2 size={20} color="var(--color-blue)" strokeWidth={2} />,
  4: <Trophy size={20} color="var(--color-blue)" strokeWidth={2} />,
  5: <MessageSquareQuote size={20} color="var(--color-blue)" strokeWidth={2} />,
};

// ─────────────────────────────────────────
// Split testimonials into two rows
// ─────────────────────────────────────────
const ROW_1 = testimonials.slice(0, 4);
const ROW_2 = testimonials.slice(4);

// ─────────────────────────────────────────
// TestimonialsSection
// ─────────────────────────────────────────
export default function TestimonialsSection() {
  return (
    <section
      aria-label="What Our Students Say"
      className="section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-off-white) 0%, var(--color-sky) 100%)',
      }}
    >
      <div className="container-custom">
        {/* ── Header ── */}
        <div className="text-center mb-10">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              background: 'rgba(27,110,181,0.08)',
              border: '1px solid rgba(27,110,181,0.2)',
              color: 'var(--color-blue)',
              padding: '5px 16px',
              borderRadius: '999px',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <Star size={10} fill="var(--color-blue)" color="var(--color-blue)" />
            STUDENT REVIEWS
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
              color: 'var(--color-navy)',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            Why Thousands of Banking Aspirants{' '}
            <span className="text-navy-gradient">Choose PrepBanker</span>
          </h2>

          <p
            className="mx-auto"
            style={{
              color: 'var(--color-gray-600)',
              fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)',
              maxWidth: 720,
              lineHeight: 1.6,
            }}
          >
            Join thousands of SBI PO and IBPS PO aspirants who trust PrepBanker for mock tests, sectional tests, practice questions, current affairs, and complete banking exam preparation.
          </p>
        </div>

        {/* ── Trust Metrics ── */}
        <ul
          className="flex flex-wrap justify-center mb-12"
          style={{
            background: '#fff',
            border: '1px solid var(--color-gray-100)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {metrics.map((m, i) => (
            <li
              key={i}
              className="flex-1 text-center"
              style={{
                minWidth: 110,
                padding: '1.5rem 1rem',
                borderRight:
                  i < metrics.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mx-auto mb-2"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  background: 'rgba(27,110,181,0.08)',
                }}
              >
                {METRIC_ICONS[i] ?? <Target size={20} color="var(--color-blue)" />}
              </div>

              {/* Value */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  color: 'var(--color-navy)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {m.value}
              </div>

              {/* Label */}
              <div style={{ color: 'var(--color-gray-600)', fontSize: '0.72rem' }}>
                {m.label}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Marquee Row 1 (left → right) ── */}
      <div className="overflow-hidden py-3 mb-4">
        <ul
          className="animate-marquee-left"
          style={{ display: 'flex', gap: '1rem', width: 'max-content', willChange: 'transform' }}
        >
          {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((t, i) => (
            <li key={`r1-${i}`}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </div>

      {/* ── Marquee Row 2 (right → left) ── */}
      <div className="overflow-hidden py-3 mb-12">
        <ul
          className="animate-marquee-right"
          style={{ display: 'flex', gap: '1rem', width: 'max-content', willChange: 'transform' }}
        >
          {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((t, i) => (
            <li key={`r2-${i}`}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA ── */}
      <div className="container-custom pt-12">
        <div
          className="text-center"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-mid) 100%)',
            border: '1px solid rgba(212,160,23,0.25)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 12px 40px rgba(13,27,62,0.15)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            Start Your Banking Preparation Journey Today
          </h3>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
            }}
          >
            Join 50,000+ aspirants preparing with confidence on PrepBanker.
          </p>
          <Button href="https://app.prepgrind.com/register" variant="gold" size="lg" external>
            <Zap size={16} />
            Start Preparing Now
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// Testimonial Card — light variant
// ─────────────────────────────────────────
function TestimonialCard({ testimonial: t }: { testimonial: typeof testimonials[0] }) {
  return (
    <article
      aria-label={`Testimonial by ${t.name}`}
      style={{
        width: 'clamp(260px, 80vw, 300px)',
        flexShrink: 0,
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-card)',
        transition: 'var(--transition)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(27,110,181,0.3)';
        el.style.boxShadow = 'var(--shadow-hover)';
        el.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--color-gray-100)';
        el.style.boxShadow = 'var(--shadow-card)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Top row */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: 44,
            height: 44,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--color-navy-light), var(--color-blue))',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.9rem',
            fontFamily: 'var(--font-display)',
          }}
        >
          {t.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <div
            style={{
              color: 'var(--color-navy)',
              fontWeight: 700,
              fontSize: '0.9rem',
              lineHeight: 1.2,
            }}
          >
            {t.name}
          </div>
          <div style={{ color: 'var(--color-gray-600)', fontSize: '0.72rem', marginTop: 2 }}>
            {t.role}
          </div>
          <div className="mt-1">
            <StarRating rating={t.rating} size={11} />
          </div>
        </div>

        {/* Stage badge */}
        <span
          className="flex-shrink-0"
          style={{
            background:
              t.stage === 'Selected'
                ? 'rgba(22,163,74,0.1)'
                : 'rgba(27,110,181,0.1)',
            border: `1px solid ${
              t.stage === 'Selected'
                ? 'rgba(22,163,74,0.3)'
                : 'rgba(27,110,181,0.25)'
            }`,
            color:
              t.stage === 'Selected'
                ? 'var(--color-success)'
                : 'var(--color-blue)',
            fontSize: '0.6rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '999px',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {t.stage === 'Selected' ? (
            <CheckCircle2 size={9} />
          ) : (
            <Target size={9} />
          )}
          {t.stage}
        </span>
      </div>

      {/* Quote icon + text */}
      <div className="relative mb-3">
        <MessageSquareQuote
          size={18}
          color="var(--color-blue-light)"
          style={{ marginBottom: 4, opacity: 0.6 }}
        />
        <p
          style={{
            color: 'var(--color-gray-800)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
            fontStyle: 'italic',
          }}
        >
          &ldquo;{t.text}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between"
        style={{
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--color-gray-100)',
        }}
      >
        {/* Exam badge */}
        <span
          style={{
            background:
              t.exam === 'SBI-PO'
                ? 'rgba(27,110,181,0.1)'
                : 'rgba(212,160,23,0.12)',
            border: `1px solid ${
              t.exam === 'SBI-PO'
                ? 'rgba(27,110,181,0.25)'
                : 'rgba(212,160,23,0.3)'
            }`,
            color:
              t.exam === 'SBI-PO' ? 'var(--color-blue)' : 'var(--color-warning)',
            fontSize: '0.62rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '999px',
          }}
        >
          {t.exam}
        </span>

        {/* Achievement / test count */}
        {t.achievementBadge && (
          <span
            className="flex items-center gap-1"
            style={{ fontSize: '0.7rem', color: 'var(--color-warning)' }}
          >
            <Award size={12} />
            {t.achievementBadge}
          </span>
        )}
        {t.testsAttempted && (
          <span
            className="flex items-center gap-1"
            style={{ fontSize: '0.67rem', color: 'var(--color-gray-400)' }}
          >
            <BookOpen size={11} />
            {t.testsAttempted} tests
          </span>
        )}
      </div>
    </article>
  );
}