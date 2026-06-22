// PATH: components/sections/CurrentAffairsSection.tsx
'use client';

import { useState } from 'react';
import { SectionTitle, Button } from '@/components/ui';
import { currentAffairs } from '@/lib/data';

export default function CurrentAffairsSection() {
  // Keep only 5-6 cards (6 is standard for 3-column layout)
  const displayedUpdates = currentAffairs.slice(0, 6);

  return (
    <section aria-label="Daily Current Affairs for Banking Exams" className="section-padding bg-slate-50/50 border-b border-slate-100">
      <div className="container-custom">
        {/* Section Title with updated subheading */}
        <SectionTitle
          label="Current Affairs"
          title="Daily Current Affairs for "
          highlight="Banking Exams"
          subtitle="Get daily and monthly current affairs for SBI PO, IBPS PO, and other banking exams. Stay informed with important national, international, banking, economy, and government updates."
          align="center"
        />

        {/* Simplified Cards Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {displayedUpdates.map(ca => (
            <li key={ca.id}>
              <CACard ca={ca} />
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button href="/current-affairs" variant="primary" size="lg">
            Explore All Current Affairs →
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Simplified Individual CA Card ───────────────────
function CACard({ ca }: { ca: typeof currentAffairs[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={ca.title}
      className="bg-white rounded-xl p-5 flex flex-col gap-3.5 transition-all duration-200 border border-slate-200/60 shadow-sm h-full"
      style={{
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-card)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* Top row: Category + Date */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {ca.category}
        </span>
        <span className="text-xs text-slate-400 font-medium">
          {ca.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-slate-850 font-bold text-sm leading-snug line-clamp-2 min-h-[2.5rem] text-slate-800">
        {ca.title}
      </h3>

      {/* Summary */}
      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
        {ca.summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
        <span className="text-xs text-slate-400 font-medium">
          ⏱ {ca.readTime} min read
        </span>
        
        <a 
          href="/current-affairs" 
          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          Read More
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </article>
  );
}