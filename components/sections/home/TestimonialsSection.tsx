// PATH: components/sections/TestimonialsSection.tsx
'use client';

import { Zap } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { testimonials } from '@/lib/data';

// ─────────────────────────────────────────
// Clean SVG Logos for Platforms
// ─────────────────────────────────────────

function GoogleLogo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function G2Logo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="11" fill="#FF4F00" />
      <text
        x="12"
        y="15.5"
        fill="#ffffff"
        fontSize="9"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        G2
      </text>
    </svg>
  );
}

function TrustpilotLogo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#00B67A">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ─────────────────────────────────────────
// Stars Row Component
// ─────────────────────────────────────────
function StarsRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={15}
          height={15}
          viewBox="0 0 24 24"
          fill={i < rating ? '#FBBF24' : '#E2E8F0'}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// Source Mapping Helper
// ─────────────────────────────────────────
function getSourceInfo(id: string) {
  // Google: tm-1, tm-4, tm-7
  // G2: tm-2, tm-5, tm-8
  // Trustpilot: tm-3, tm-6
  if (['tm-1', 'tm-4', 'tm-7'].includes(id)) {
    return { name: 'Google', logo: <GoogleLogo className="h-5 w-5" /> };
  } else if (['tm-2', 'tm-5', 'tm-8'].includes(id)) {
    return { name: 'G2', logo: <G2Logo className="h-5 w-5" /> };
  } else {
    return { name: 'Trustpilot', logo: <TrustpilotLogo className="h-5 w-5" /> };
  }
}

// ─────────────────────────────────────────
// Profile Image Mapping Helper
// ─────────────────────────────────────────
function getProfileImage(id: string) {
  const mapping: Record<string, string> = {
    'tm-1': '/images/rahul_sharma.png',
    'tm-2': '/images/priya_verma.png',
    'tm-3': '/images/arjun_patel.png',
    'tm-4': '/images/sneha_krishnan.png',
    'tm-5': '/images/vikram_singh.png',
    'tm-6': '/images/divya_nair.png',
    'tm-7': '/images/karan_mehta.png',
    'tm-8': '/images/ananya_gupta.png',
  };
  return mapping[id] || '/images/default.jpg';
}

// ─────────────────────────────────────────
// Split testimonials into two rows
// ─────────────────────────────────────────
const ROW_1 = testimonials.slice(0, 4);
const ROW_2 = testimonials.slice(4);

// ─────────────────────────────────────────
// TestimonialsSection
// ─────────────────────────────────────────
export default function TestimonialsSection() {
  const ratings = [
    {
      name: 'G2',
      logo: <G2Logo className="h-5 w-5" />,
      rating: '4.6',
      count: '(920)',
    },
    {
      name: 'Trustpilot',
      logo: <TrustpilotLogo className="h-5 w-5" />,
      rating: '4.7',
      count: '(942)',
    },
    {
      name: 'Google',
      logo: <GoogleLogo className="h-5 w-5" />,
      rating: '4.8',
      count: '(5.2k)',
    },
  ];

  return (
    <section
      aria-label="What Our Students Say"
      className="section-padding overflow-hidden bg-white"
      style={{
        background: 'linear-gradient(180deg, var(--color-off-white) 0%, var(--color-sky) 100%)',
      }}
    >
      <div className="container-custom">
        {/* ── Header ── */}
        <div className="text-center mb-6">
          <p
            className="mx-auto mb-1 text-[0.95rem] font-semibold"
            style={{
              color: 'var(--color-blue)',
            }}
          >
            Trusted by aspirants across India
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'var(--color-navy)',
              lineHeight: 1.2,
            }}
          >
            Why thousands of banking aspirants choose PrepBanker
          </h2>
        </div>

        {/* ── Trust Ratings Stats Row ── */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-24 mb-14 mt-6">
          {ratings.map((r, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Logo & Name */}
              <div className="flex items-center gap-2 mb-1.5">
                {r.logo}
                <span className="font-extrabold text-slate-800 text-sm tracking-wide">{r.name}</span>
              </div>
              {/* Rating */}
              <div className="flex items-baseline mb-0.5">
                <span className="text-3xl font-black text-slate-900 tracking-tight">{r.rating}</span>
                <span className="text-slate-400 text-sm font-medium ml-0.5">/5</span>
              </div>
              {/* Count */}
              <span className="text-slate-400 text-[0.7rem] font-medium">{r.count}</span>
            </div>
          ))}
        </div>
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
  const srcInfo = getSourceInfo(t.id);

  return (
    <article
      aria-label={`Testimonial by ${t.name}`}
      style={{
        width: '320px',
        height: '220px',
        flexShrink: 0,
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        borderRadius: '16px',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-card)',
        transition: 'var(--transition)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      {/* Top Row: Stars on left, Source logo on right */}
      <div className="flex items-center justify-between">
        <StarsRow rating={t.rating} />
        <div className="opacity-90">{srcInfo.logo}</div>
      </div>

      {/* Middle: Testimonial text */}
      <div className="flex-1 flex items-center my-2">
        <p
          style={{
            color: 'var(--color-gray-800)',
            fontSize: '0.85rem',
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            whiteSpace: 'normal',
          }}
        >
          &ldquo;{t.text}&rdquo;
        </p>
      </div>

      {/* Bottom Row: User info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <Image
          src={getProfileImage(t.id)}
          alt={t.name}
          width={40}
          height={40}
          className="flex-shrink-0 object-cover"
          style={{
            borderRadius: '50%',
            border: '1.5px solid var(--color-gray-100)',
          }}
        />

        {/* Name and description */}
        <div className="flex-1 min-w-0">
          <div
            style={{
              color: 'var(--color-navy)',
              fontWeight: 700,
              fontSize: '0.88rem',
              lineHeight: '1.2',
            }}
          >
            {t.name}
          </div>
          <div style={{ color: 'var(--color-gray-600)', fontSize: '0.72rem', marginTop: 1 }}>
            {t.role}
          </div>
        </div>
      </div>
    </article>
  );
}
