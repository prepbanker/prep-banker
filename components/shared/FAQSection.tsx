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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <HelpCircle className="w-4 h-4 text-[var(--color-blue)]" />
            <span className="text-[14px] font-bold text-[var(--color-blue)] uppercase tracking-widest">
              {label}
            </span>
          </div>

          <h2 className={`font-extrabold font-display text-2xl sm:text-3xl md:text-4xl ${textTitle}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-3 text-[14px] sm:text-sm max-w-lg mx-auto ${textSub}`}>
              {subtitle}
            </p>
          )}
          <div className="w-12 h-0.5 rounded-full mx-auto mt-4 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-blue)]" />
        </div>

        {/* Two-Column Grid Accordion */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto items-start">
          {items.map((item, index) => {
            const resolvedId = item.id || `faq-${index}`;
            const resolvedQuestion = item.question || item.q || '';
            const resolvedAnswer = item.answer || item.a || '';
            const isOpen = !!openIds[resolvedId];

            const itemBorder = dark
              ? isOpen
                ? 'border-[var(--color-blue)]/30 bg-white/10 shadow-lg shadow-black/10'
                : 'border-white/10 bg-white/5 hover:border-white/20'
              : isOpen
                ? 'border-[var(--color-blue)]/20 bg-white shadow-md shadow-slate-100/80'
                : 'border-slate-150/60 bg-white hover:border-slate-350 hover:shadow-sm';

            const badgeStyle = dark
              ? isOpen
                ? 'bg-[var(--color-blue)]/20 text-[var(--color-blue)] border-transparent'
                : 'bg-white/5 text-white/50 border-white/10'
              : isOpen
                ? 'bg-blue-50 text-[var(--color-blue)] border-blue-100/80'
                : 'bg-slate-50 text-slate-400 border-slate-200';

            const questionColor = dark
              ? isOpen
                ? 'text-white font-bold'
                : 'text-white/80 group-hover:text-white font-semibold'
              : isOpen
                ? 'text-[var(--color-blue)] font-bold'
                : 'text-[var(--color-navy)] font-semibold';

            const chevronBg = dark
              ? isOpen
                ? 'bg-[var(--color-blue)]/20 text-[var(--color-blue)]'
                : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60'
              : isOpen
                ? 'bg-blue-50 text-[var(--color-blue)]'
                : 'bg-slate-50 text-slate-450 group-hover:bg-slate-100 group-hover:text-slate-600';

            const answerBorder = dark ? 'border-white/5' : 'border-slate-100/50';
            const answerColor = dark ? 'text-white/70' : 'text-slate-500';

            return (
              <li
                key={resolvedId}
                className={`rounded-2xl border transition-all duration-300 group ${itemBorder}`}
              >
                <button
                  onClick={() => toggle(resolvedId)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${resolvedId}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none"
                >
                  <span className="flex items-center gap-3.5">
                    <span className={`flex-shrink-0 text-[14px] font-bold px-2 py-0.5 rounded-md border transition-all duration-300 ${badgeStyle}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[15px] sm:text-[16px] leading-snug transition-colors duration-200 ${questionColor}`}>
                      {resolvedQuestion}
                    </span>
                  </span>

                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-350 ${chevronBg}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-350 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>

                <div
                  id={`faq-content-${resolvedId}`}
                  role="region"
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className={`px-6 pb-5 sm:pl-[3.75rem] pl-6 text-[14px] sm:text-[15px] leading-relaxed border-t pt-4 ${answerBorder} ${answerColor}`}>
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
