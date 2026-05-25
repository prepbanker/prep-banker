// PATH: components/sections/current-affairs/faq/CAFAQSection.tsx
'use client';

import { useState, useCallback, memo } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CA_FAQS } from '../../../../lib/data/current-affairs/faqs';
import type { CAFAQ } from '../../../../types/current-affairs';

// ─── Single accordion item ─────────────────
const FAQItem = memo(function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq:      CAFAQ;
  isOpen:   boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left
                   bg-white hover:bg-gray-50 transition-colors
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
                   focus-visible:ring-[var(--color-gold-bright)]"
      >
        <span className="text-sm font-semibold text-[var(--color-navy)] leading-snug pr-2">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 text-[var(--color-blue)] mt-0.5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Accordion body */}
      <div
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow:  'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="px-5 pb-4 pt-1 bg-white border-t border-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
});

// ─── Main section ─────────────────────────
const VISIBLE_DEFAULT = 8;

function CAFAQSection() {
  const [openId,       setOpenId]       = useState<string | null>(null);
  const [showAll,      setShowAll]      = useState(false);

  const toggle = useCallback((id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  }, []);

  const visible = showAll ? CA_FAQS : CA_FAQS.slice(0, VISIBLE_DEFAULT);

  return (
    <section className="section-padding bg-[var(--color-gray-50)]">
      <div className="container-custom">

        {/* Section header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-[var(--color-sky)] border border-blue-100 text-xs font-bold
                          text-[var(--color-blue)] uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Everything About{' '}
            <span className="text-gold-gradient">Current Affairs</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Common questions about current affairs preparation, key banking terms,
            RBI policy, and exam strategy — answered in detail.
          </p>
        </div>

        {/* FAQ grid — 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {visible.map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

        {/* Show more / less */}
        {CA_FAQS.length > VISIBLE_DEFAULT && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold
                         border-2 border-[var(--color-navy)] text-[var(--color-navy)]
                         hover:bg-[var(--color-navy)] hover:text-white transition-all duration-200"
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              {showAll
                ? 'Show fewer questions'
                : `Show all ${CA_FAQS.length} questions`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CAFAQSection;