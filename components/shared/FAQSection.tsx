// PATH: components/shared/FAQSection.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id?: string;
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  label?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function FAQSection({
  items,
  label = 'FAQs',
  title = 'Frequently Asked Questions',
  subtitle,
  dark = false,
}: FAQSectionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const bg = dark ? 'bg-[var(--color-navy-deep)]' : 'bg-[var(--color-off-white)]';
  const textTitle = dark ? 'text-white' : 'text-[var(--color-navy)]';
  const textSub = dark ? 'text-white/60' : 'text-[var(--color-gray-600)]';

  return (
    <section aria-label={title} className={`pt-16 pb-24 ${bg}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--color-blue)]" />
            <span className="text-xs font-bold text-[var(--color-blue)] uppercase tracking-widest">
              {label}
            </span>
          </div>

          <h2 className={`font-extrabold font-display text-2xl sm:text-3xl md:text-4xl ${textTitle}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-3 text-sm max-w-lg mx-auto ${textSub}`}>
              {subtitle}
            </p>
          )}
          <div className="w-14 h-1 rounded-full mx-auto mt-4 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-blue)]" />
        </div>

        {/* Two-Column Grid Accordion */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto items-start">
          {items.map((item, index) => {
            const resolvedId = item.id || `faq-${index}`;
            const resolvedQuestion = item.question || item.q || '';
            const resolvedAnswer = item.answer || item.a || '';
            const isOpen = !!openIds[resolvedId];

            return (
              <li
                key={resolvedId}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[var(--color-blue)]/30 bg-white shadow-md'
                    : 'border-slate-100/80 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggle(resolvedId)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${resolvedId}`}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold mt-0.5 transition-all duration-300"
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
                      className={`text-[13px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-[var(--color-blue)]' : 'text-[var(--color-navy)]'
                      }`}
                    >
                      {resolvedQuestion}
                    </span>
                  </span>

                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 mt-0.5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[var(--color-blue)]' : 'text-[var(--color-gray-400)]'
                    }`}
                  />
                </button>

                <div
                  id={`faq-content-${resolvedId}`}
                  role="region"
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '400px' : '0' }}
                >
                  <p className="px-5 pb-4 pl-[3.25rem] text-[13px] leading-relaxed text-[var(--color-gray-600)] border-t border-[var(--color-blue)]/5 pt-3">
                    {resolvedAnswer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
