// PATH: components/sections/CurrentAffairsSection.tsx
'use client';

import { useState } from 'react';
import { SectionTitle, Badge, Button } from '@/components/ui';
import { currentAffairs } from '@/lib/data';
import { importanceColor } from '@/lib/utils';
import type { CACategory } from '@/types';

// ─────────────────────────────────────────
// CurrentAffairsSection
// ─────────────────────────────────────────
const CATEGORIES: CACategory[] = [
  'All Updates', 'Banking Awareness', 'RBI Updates',
  'Economy & Finance', 'Government Schemes', 'International Affairs',
  'Static GK', 'Important Days', 'Awards & Honors', 'Reports & Indexes',
];

const CAT_ICON: Record<string, string> = {
  'All Updates': '🌐',
  'Banking Awareness': '🏦',
  'RBI Updates': '🏛️',
  'Economy & Finance': '📈',
  'Government Schemes': '🏛️',
  'International Affairs': '🌍',
  'Static GK': '📚',
  'Important Days': '📅',
  'Awards & Honors': '🏆',
  'Reports & Indexes': '📊',
};

export default function CurrentAffairsSection() {
  const [activeCategory, setActiveCategory] = useState<CACategory>('All Updates');

  const filtered = activeCategory === 'All Updates'
    ? currentAffairs
    : currentAffairs.filter(ca => ca.category === activeCategory);

  const featured = filtered.filter(ca => ca.isFeatured);
  const regular  = filtered.filter(ca => !ca.isFeatured);

  return (
    <section className="section-padding" style={{ background: 'var(--color-off-white)' }}>
      <div className="container-custom">
        <SectionTitle
          label="Current Affairs"
          title="Stay Updated with "
          highlight="Current Affairs"
          subtitle="Daily and monthly current affairs updates for IBPS-PO, SBI-PO, and banking aspirants."
        />

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2rem',
          scrollbarWidth: 'none',
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                flexShrink: 0,
                padding: '8px 16px',
                borderRadius: '999px',
                border: activeCategory === cat ? 'none' : '1px solid var(--color-gray-200)',
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)'
                  : '#fff',
                color: activeCategory === cat ? '#fff' : 'var(--color-gray-600)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: '5px',
              }}>
              <span>{CAT_ICON[cat]}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Cards */}
        {featured.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--color-gray-400)', marginBottom: '0.875rem',
            }}>
              ⭐ Featured Updates
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem',
            }}>
              {featured.slice(0, 3).map(ca => (
                <CACard key={ca.id} ca={ca} featured />
              ))}
            </div>
          </div>
        )}

        {/* Regular Grid */}
        {regular.length > 0 && (
          <div>
            <div style={{
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--color-gray-400)', marginBottom: '0.875rem',
            }}>
              📰 Latest Updates
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}>
              {regular.map(ca => (
                <CACard key={ca.id} ca={ca} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-400)' }}>
            No updates in this category yet.
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Button href="/current-affairs" variant="primary" size="lg">
            Explore All Current Affairs →
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Individual CA Card ───────────────────
function CACard({ ca, featured }: { ca: typeof currentAffairs[0]; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-card)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'var(--transition)',
        border: featured ? '2px solid rgba(212,160,23,0.2)' : '1px solid var(--color-gray-100)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {/* Top badges */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          <Badge variant={ca.category === 'RBI Updates' ? 'blue' : ca.category === 'Economy & Finance' ? 'gold' : 'gray'} size="sm">
            {ca.category}
          </Badge>
          {ca.isMonthly && <Badge variant="green" size="sm">Monthly</Badge>}
        </div>
        <span style={{
          fontSize: '0.68rem',
          color: 'var(--color-gray-400)',
          fontWeight: 500,
        }}>
          {ca.date}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        color: 'var(--color-navy)',
        fontWeight: 700,
        fontSize: '0.9rem',
        lineHeight: 1.4,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {ca.title}
      </h3>

      {/* Summary */}
      <p style={{
        color: 'var(--color-gray-600)',
        fontSize: '0.8rem',
        lineHeight: 1.55,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {ca.summary}
      </p>

      {/* Quick Facts */}
      {ca.quickFacts.length > 0 && (
        <div style={{
          background: 'var(--color-sky)',
          borderRadius: '8px',
          padding: '8px 10px',
        }}>
          <div style={{ fontSize: '0.67rem', fontWeight: 700, color: 'var(--color-blue)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Quick Facts
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {ca.quickFacts.slice(0, 3).map((fact, i) => (
              <span key={i} style={{
                background: '#fff',
                border: '1px solid var(--color-gray-200)',
                borderRadius: '6px',
                padding: '2px 8px',
                fontSize: '0.7rem',
                color: 'var(--color-navy)',
                fontWeight: 500,
              }}>
                {fact}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: '999px',
            ...Object.fromEntries(importanceColor(ca.importance).split(' ').map(c => {
              if (c.startsWith('text-')) return ['color', undefined];
              if (c.startsWith('bg-')) return ['background', undefined];
              return [c, undefined];
            }).filter(([,v]) => v !== undefined)),
          }} className={importanceColor(ca.importance)}>
            {ca.importance} Priority
          </span>
          <span style={{ fontSize: '0.65rem', color: 'var(--color-gray-400)' }}>
            ⏱ {ca.readTime} min read
          </span>
        </div>
        <a href="/current-affairs" style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: 'var(--color-blue)',
          textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '3px',
        }}>
          Read More
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
}