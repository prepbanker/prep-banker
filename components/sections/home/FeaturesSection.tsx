// PATH: components/sections/FeaturesSection.tsx
'use client';

import { useState } from 'react';
import { SectionTitle, Button } from '@/components/ui';
import { features } from '@/lib/data';

// ─────────────────────────────────────────
// FeaturesSection
// ─────────────────────────────────────────

// Inline SVG icons keyed by feature icon name
const ICONS: Record<string, React.ReactNode> = {
  Brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5A4.5 4.5 0 015 17.5V8A4.5 4.5 0 019.5 2z"/>
      <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 002.5 2.5A4.5 4.5 0 0019 17.5V8A4.5 4.5 0 0014.5 2z"/>
    </svg>
  ),
  FileText: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  Radio: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.49-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>
    </svg>
  ),
  BarChart2: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  Newspaper: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>
    </svg>
  ),
  BookOpen: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
    </svg>
  ),
  Info: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
  Smartphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
};

const ACCENT_COLORS = [
  'var(--color-blue)',
  'var(--color-gold)',
  'var(--color-live)',
  '#7C3AED',
  '#059669',
  '#D97706',
  'var(--color-navy-light)',
  '#0891B2',
];

export default function FeaturesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(180deg, var(--color-off-white) 0%, var(--color-sky) 100%)',
    }}>
      <div className="container-custom">
        <SectionTitle
          label="Platform Features"
          title="Powerful Features for Smarter "
          highlight="Banking Preparation"
          subtitle="Everything you need to prepare efficiently for SBI-PO and IBPS-PO in one place."
        />

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {features.map((feat, i) => {
            const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
            const isActive = activeId === feat.id;

            return (
              <div
                key={feat.id}
                onMouseEnter={() => setActiveId(feat.id)}
                onMouseLeave={() => setActiveId(null)}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  border: isActive ? `2px solid ${color}35` : '2px solid transparent',
                  boxShadow: isActive ? `0 8px 32px ${color}20` : 'var(--shadow-card)',
                  transform: isActive ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'var(--transition)',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Icon box */}
                <div style={{
                  width: 52, height: 52,
                  background: isActive ? color : `${color}15`,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isActive ? '#fff' : color,
                  transition: 'var(--transition)',
                  boxShadow: isActive ? `0 4px 16px ${color}40` : 'none',
                }}>
                  {ICONS[feat.icon] ?? <span style={{ fontSize: '1.4rem' }}>⚡</span>}
                </div>

                {/* Text */}
                <div>
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--color-navy)',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}>
                    {feat.title}
                    {feat.isPremium && (
                      <span style={{
                        marginLeft: '6px',
                        fontSize: '0.62rem',
                        background: 'var(--color-gold-light)',
                        color: '#7A5200',
                        padding: '1px 6px',
                        borderRadius: '999px',
                        fontWeight: 700,
                        verticalAlign: 'middle',
                      }}>PRO</span>
                    )}
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {feat.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {feat.highlights.map((h, j) => (
                    <li key={j} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.78rem',
                      color: isActive ? 'var(--color-navy)' : 'var(--color-gray-600)',
                      transition: 'var(--transition)',
                    }}>
                      <span style={{
                        width: 16, height: 16, flexShrink: 0,
                        background: isActive ? `${color}20` : 'var(--color-gray-100)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'var(--transition)',
                      }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={isActive ? color : 'var(--color-gray-400)'} strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
          borderRadius: 'var(--radius-xl)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: '#fff',
            marginBottom: '0.75rem',
          }}>
            Ready to Experience All Features?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Join 50,000+ aspirants already on their banking exam preparation journey.
          </p>
          <Button href="https://app.prepgrind.com/register" variant="gold" size="lg" external>
            Start Your Preparation →
          </Button>
        </div>
      </div>
    </section>
  );
}