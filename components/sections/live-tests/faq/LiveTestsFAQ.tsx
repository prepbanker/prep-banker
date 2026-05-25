// PATH: components/live-tests/faq/LiveTestsFAQ.tsx
'use client';

import { useState, useCallback } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { liveTestFAQs } from '@/lib/data/live-tests';

const PAGE_SIZE = 8; // FAQs shown before "load more"

export default function LiveTestsFAQ() {
  const [openId, setOpenId]         = useState<string | null>(null);
  const [visible, setVisible]       = useState(PAGE_SIZE);

  const toggle = useCallback((id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  }, []);

  const shown   = liveTestFAQs.slice(0, visible);
  const hasMore = visible < liveTestFAQs.length;

  return (
    <section className="section-padding bg-[var(--color-off-white)]">
      <div className="container-custom max-w-3xl">

        {/* ── Heading ── */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--color-blue)]" aria-hidden />
            <span className="text-xs font-bold text-[var(--color-blue)] uppercase tracking-widest">
              Live Test FAQs
            </span>
          </div>

          <h2
            className="font-extrabold text-[var(--color-navy)] section-line"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[var(--color-gray-600)] max-w-lg mx-auto">
            Everything you need to know about PrepBanker&apos;s live mock test platform.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="flex flex-col gap-3">
          {shown.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  border: `1px solid ${isOpen ? 'rgba(27,110,181,0.25)' : 'var(--color-gray-100)'}`,
                  boxShadow: isOpen ? 'var(--shadow-card)' : 'none',
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-gold-bright)]"
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white mt-0.5"
                      style={{
                        background: isOpen
                          ? 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-navy) 100%)'
                          : 'var(--color-gray-200)',
                        color: isOpen ? '#fff' : 'var(--color-gray-400)',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-[13px] font-semibold leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? 'var(--color-blue)' : 'var(--color-navy)' }}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    className="flex-shrink-0 w-4 h-4 mt-0.5 transition-transform duration-300"
                    style={{
                      color: isOpen ? 'var(--color-blue)' : 'var(--color-gray-400)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden
                  />
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '400px' : '0' }}
                >
                  <p className="px-5 pb-4 pl-[3.25rem] text-[13px] leading-relaxed text-[var(--color-gray-600)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Load more ── */}
        {hasMore && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisible(v => Math.min(v + PAGE_SIZE, liveTestFAQs.length))}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--color-gray-200)] text-[var(--color-gray-600)] hover:text-[var(--color-navy)] hover:border-[var(--color-gray-300)] hover:bg-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)]"
            >
              Show {Math.min(PAGE_SIZE, liveTestFAQs.length - visible)} more FAQs
              <ChevronDown className="w-4 h-4" aria-hidden />
            </button>
          </div>
        )}

        {/* ── Support CTA ── */}
        <div
          className="mt-10 rounded-2xl px-6 py-5 text-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
          }}
        >
          <p className="text-sm font-semibold text-white mb-1">
            Still have questions?
          </p>
          <p className="text-xs text-white/60 mb-3">
            Our support team is available Mon–Sat, 9 AM – 7 PM IST.
          </p>
          <a
            href="mailto:support@prepbanker.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[var(--color-navy)] hover:opacity-90 transition-opacity"
            style={{ background: 'var(--color-gold-bright)' }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}