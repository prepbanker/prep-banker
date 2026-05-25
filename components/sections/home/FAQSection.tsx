// PATH: components/sections/FAQSection.tsx
'use client';

import { useState } from 'react';
import { SectionTitle, Button } from '@/components/ui';
import { faqs } from '@/lib/data';
import type { FAQCategory } from '@/types';

// ─────────────────────────────────────────
// FAQ — Reusable across pages
// Props allow overriding defaults for page-specific use
// ─────────────────────────────────────────

const CATEGORIES: FAQCategory[] = [
  'General', 'SBI-PO', 'IBPS-PO',
  'Mock Tests', 'Live Tests', 'Current Affairs',
  'Subscription & Access', 'Preparation Guidance',
];

interface FAQProps {
  /** Show only these categories in tab bar (defaults to all) */
  filterCategories?: FAQCategory[];
  /** Pre-select a category */
  defaultCategory?: FAQCategory | 'General';
  /** Show category tabs (default: true) */
  showTabs?: boolean;
  /** Show bottom CTA (default: true) */
  showCTA?: boolean;
  /** Dark background variant */
  dark?: boolean;
  /** Limit number of FAQs shown */
  limit?: number;
  /** Override items (for page-level customisation) */
  items?: typeof faqs;
}

export default function FAQSection({
  filterCategories = CATEGORIES,
  defaultCategory = 'General',
  showTabs = true,
  showCTA = true,
  dark = false,
  limit,
  items = faqs,
}: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>(defaultCategory as FAQCategory);
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = items
    .filter(f => activeCategory === 'General' || f.category === activeCategory)
    .filter(f =>
      !search ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, limit);

  const bg  = dark ? 'var(--color-navy-deep)' : 'var(--color-off-white)';
  const fg  = dark ? '#fff' : 'var(--color-navy)';
  const sub = dark ? 'rgba(255,255,255,0.55)' : 'var(--color-gray-600)';

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: filtered.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section className="section-padding" style={{ background: bg }}>
      {/* Inject FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        <SectionTitle
          label="FAQs"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Find answers to the most common questions about banking exam preparation, mock tests, and PrepBanker features."
          dark={dark}
        />

        {/* Search */}
        <div style={{
          maxWidth: 520,
          margin: '0 auto 2rem',
          position: 'relative',
        }}>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke={dark ? 'rgba(255,255,255,0.35)' : 'var(--color-gray-400)'}
            strokeWidth="2"
            style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
          >
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px 12px 42px',
              borderRadius: '12px',
              border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--color-gray-200)',
              background: dark ? 'rgba(255,255,255,0.06)' : '#fff',
              color: fg,
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'var(--transition)',
            }}
            onFocus={e => (e.target.style.borderColor = 'var(--color-blue)')}
            onBlur={e => (e.target.style.borderColor = dark ? 'rgba(255,255,255,0.12)' : 'var(--color-gray-200)')}
          />
        </div>

        {/* Category Tabs */}
        {showTabs && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}>
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenId(null); }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  border: activeCategory === cat ? 'none' : dark
                    ? '1px solid rgba(255,255,255,0.15)'
                    : '1px solid var(--color-gray-200)',
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, var(--color-navy), var(--color-blue))'
                    : dark ? 'rgba(255,255,255,0.06)' : '#fff',
                  color: activeCategory === cat ? '#fff' : sub,
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', color: sub, padding: '3rem' }}>
              No questions match your search.
            </div>
          )}

          {filtered.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  marginBottom: '10px',
                  background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
                  border: isOpen
                    ? '1.5px solid rgba(27,110,181,0.35)'
                    : dark
                      ? '1px solid rgba(255,255,255,0.08)'
                      : '1px solid var(--color-gray-100)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'var(--transition)',
                  boxShadow: isOpen ? 'var(--shadow-card)' : 'none',
                }}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.1rem 1.25rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Number badge */}
                    <span style={{
                      width: 26, height: 26, flexShrink: 0,
                      background: isOpen
                        ? 'linear-gradient(135deg, var(--color-navy), var(--color-blue))'
                        : dark ? 'rgba(255,255,255,0.08)' : 'var(--color-gray-100)',
                      borderRadius: '7px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 800,
                      color: isOpen ? '#fff' : sub,
                      transition: 'var(--transition)',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span style={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: isOpen
                        ? (dark ? '#fff' : 'var(--color-navy)')
                        : fg,
                      lineHeight: 1.4,
                      transition: 'var(--transition)',
                    }}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <span style={{
                    width: 28, height: 28, flexShrink: 0,
                    background: isOpen ? 'var(--color-blue)' : dark ? 'rgba(255,255,255,0.08)' : 'var(--color-gray-100)',
                    borderRadius: '7px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isOpen ? '#fff' : sub,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'var(--transition)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <div style={{
                    padding: '0 1.25rem 1.25rem 1.25rem',
                    paddingLeft: 'calc(1.25rem + 26px + 12px)',
                  }}>
                    <p style={{
                      color: sub,
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      borderLeft: '3px solid var(--color-blue)',
                      paddingLeft: '12px',
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          {/* Bottom CTA
          {showCTA && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{
                color: sub,
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}>
                Still have questions?
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button href="/contact" variant={dark ? 'outline' : 'secondary'}
                  style={dark ? { color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)' } : {}}>
                  Contact Support
                </Button>
                <Button href="https://app.prepgrind.com/register" variant="gold" external>
                  Start Preparing Now →
                </Button>
              </div>
            </div>
          )} */}
      </div>
    </section>
  );
}