// PATH: components/sections/TestimonialsSection.tsx
'use client';

import { SectionTitle, Button, StarRating } from '@/components/ui';
import { testimonials, metrics } from '@/lib/data';

// ─────────────────────────────────────────
// TestimonialsSection
// ─────────────────────────────────────────

// Split testimonials into two rows
const ROW_1 = testimonials.slice(0, 4);
const ROW_2 = testimonials.slice(4);

export default function TestimonialsSection() {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(180deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
      overflow: 'hidden',
    }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(212,160,23,0.12)',
            border: '1px solid rgba(212,160,23,0.25)',
            color: 'var(--color-gold-bright)',
            padding: '5px 14px',
            borderRadius: '999px',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--color-gold-bright)', borderRadius: '50%', display: 'inline-block' }}/>
            STUDENT REVIEWS
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: '0.75rem',
          }}>
            Why Thousands of Banking Aspirants{' '}
            <span className="text-gold-gradient">Choose PrepBanker</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            maxWidth: 580,
            margin: '0 auto',
          }}>
            Don&apos;t just take our word for it. See what SBI-PO and IBPS-PO aspirants say about their preparation experience.
          </p>
        </div>

        {/* Trust Metrics */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem',
          overflow: 'hidden',
        }}>
          {metrics.map((m, i) => (
            <div key={i} style={{
              flex: '1 1 130px',
              padding: '1.5rem 1rem',
              textAlign: 'center',
              borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{m.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: 'var(--color-gold-bright)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>{m.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee Row 1 (left → right) ── */}
      <div style={{ marginBottom: '1rem', overflow: 'hidden' }}>
        <div
          className="animate-marquee-left"
          style={{ display: 'flex', gap: '1rem', width: 'max-content' }}
        >
          {[...ROW_1, ...ROW_1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* ── Marquee Row 2 (right → left) ── */}
      <div style={{ overflow: 'hidden' }}>
        <div
          className="animate-marquee-right"
          style={{ display: 'flex', gap: '1rem', width: 'max-content' }}
        >
          {[...ROW_2, ...ROW_2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-custom" style={{ paddingTop: '3rem' }}>
        <div style={{
          textAlign: 'center',
          padding: '2.5rem',
          background: 'rgba(212,160,23,0.08)',
          border: '1px solid rgba(212,160,23,0.2)',
          borderRadius: 'var(--radius-xl)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: '#fff',
            marginBottom: '0.75rem',
          }}>
            Start Your Banking Preparation Journey Today
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Join 50,000+ aspirants preparing with confidence on PrepBanker.
          </p>
          <Button href="https://app.prepgrind.com/register" variant="gold" size="lg" external>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Start Preparing Now
          </Button>
        </div>
      </div>
    </section>
  );
}

// ── Testimonial Card ────────────────────
function TestimonialCard({ testimonial: t }: { testimonial: typeof testimonials[0] }) {
  const STAGE_COLOR: Record<string, string> = {
    Selected: 'green',
    Mains: 'blue',
    Prelims: 'gold',
    Interview: 'navy',
  };

  return (
    <div style={{
      width: 300,
      flexShrink: 0,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-md)',
      padding: '1.25rem',
      transition: 'var(--transition)',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)';
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,160,23,0.25)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
    }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
        {/* Avatar */}
        <div style={{
          width: 44, height: 44, flexShrink: 0,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, var(--color-navy-light), var(--color-blue))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          fontWeight: 800,
          fontSize: '0.9rem',
          fontFamily: 'var(--font-display)',
        }}>
          {t.avatar}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2 }}>
            {t.name}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', marginTop: '2px' }}>
            {t.role}
          </div>
          <div style={{ marginTop: '4px' }}>
            <StarRating rating={t.rating} size={11} />
          </div>
        </div>

        {/* Stage badge */}
        <span style={{
          flexShrink: 0,
          background: t.stage === 'Selected' ? 'rgba(22,163,74,0.2)' : 'rgba(27,110,181,0.2)',
          border: `1px solid ${t.stage === 'Selected' ? 'rgba(22,163,74,0.35)' : 'rgba(27,110,181,0.3)'}`,
          color: t.stage === 'Selected' ? '#4ADE80' : 'var(--color-blue-light)',
          fontSize: '0.6rem', fontWeight: 700,
          padding: '2px 7px', borderRadius: '999px',
          textTransform: 'uppercase', letterSpacing: '0.04em',
        }}>
          {t.stage}
        </span>
      </div>

      {/* Quote */}
      <p style={{
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.82rem',
        lineHeight: 1.6,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        marginBottom: '10px',
        fontStyle: 'italic',
      }}>
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          background: t.exam === 'SBI-PO' ? 'rgba(27,110,181,0.2)' : 'rgba(212,160,23,0.2)',
          border: `1px solid ${t.exam === 'SBI-PO' ? 'rgba(27,110,181,0.3)' : 'rgba(212,160,23,0.3)'}`,
          color: t.exam === 'SBI-PO' ? 'var(--color-blue-light)' : 'var(--color-gold-bright)',
          fontSize: '0.62rem', fontWeight: 700,
          padding: '2px 7px', borderRadius: '999px',
        }}>
          {t.exam}
        </span>
        {t.achievementBadge && (
          <span style={{ fontSize: '0.7rem', color: 'var(--color-gold-bright)' }}>
            {t.achievementBadge}
          </span>
        )}
        {t.testsAttempted && (
          <span style={{ fontSize: '0.67rem', color: 'rgba(255,255,255,0.35)' }}>
            {t.testsAttempted} tests
          </span>
        )}
      </div>
    </div>
  );
}