// PATH: components/sections/quiz/QuizFAQSection.tsx
'use client';

import { useState, useMemo, memo } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { quizFaqs } from '@/lib/data/quiz/quizFaqs';
import type { FAQCategory } from '@/types/quiz';

const ALL_CATEGORIES: { label: string; value: FAQCategory | 'All' }[] = [
  { label: 'All',                 value: 'All'                  },
  { label: 'General',             value: 'General'              },
  { label: 'Mock Tests',          value: 'Mock Tests'           },
  { label: 'SBI PO',              value: 'SBI-PO'               },
  { label: 'IBPS PO',             value: 'IBPS-PO'              },
  { label: 'Live Tests',          value: 'Live Tests'           },
  { label: 'Current Affairs',     value: 'Current Affairs'      },
  { label: 'Prep Guidance',       value: 'Preparation Guidance' },
];

// ─── Accordion item ───────────────────────
interface AccordionProps {
  question: string;
  answer:   string;
  isOpen:   boolean;
  onToggle: () => void;
}

const AccordionItem = memo(function AccordionItem({
  question, answer, isOpen, onToggle,
}: AccordionProps) {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${
        isOpen
          ? 'border-[var(--color-blue)]/30 bg-[var(--color-sky)]'
          : 'border-[var(--color-gray-100)] bg-white hover:border-[var(--color-gray-200)]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[var(--color-blue)]' : 'text-[var(--color-navy)]'}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[var(--color-blue)]' : 'text-[var(--color-gray-400)]'
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0' }}
      >
        <p className="px-5 pb-4 text-sm text-[var(--color-gray-600)] leading-relaxed border-t border-[var(--color-blue)]/10 pt-3">
          {answer}
        </p>
      </div>
    </div>
  );
});

// ─── Main FAQ Section ─────────────────────
export default function QuizFAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'All'>('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() =>
    activeCategory === 'All'
      ? quizFaqs
      : quizFaqs.filter(f => f.category === activeCategory),
  [activeCategory]);

  const toggle = (id: string) =>
    setOpenId(prev => (prev === id ? null : id));

  // Reset open item when category changes
  const handleCategoryChange = (cat: FAQCategory | 'All') => {
    setActiveCategory(cat);
    setOpenId(null);
  };

  return (
    <section className="bg-[var(--color-off-white)] py-14">
      <div className="container-custom">

        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-blue)]/10 border border-[var(--color-blue)]/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--color-blue)]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-blue)]">
              Frequently Asked Questions
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Everything You Need to Know
          </h2>
          <p className="mt-2 text-sm text-[var(--color-gray-600)] max-w-lg mx-auto">
            {quizFaqs.length}+ answers covering Mock Tests, SBI PO, IBPS PO, Live Tests, Current Affairs, and Preparation Strategy.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {ALL_CATEGORIES.map(({ label, value }) => {
            const count = value === 'All'
              ? quizFaqs.length
              : quizFaqs.filter(f => f.category === value).length;
            const isActive = activeCategory === value;

            return (
              <button
                key={value}
                onClick={() => handleCategoryChange(value)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold border transition-all duration-200 ${
                  isActive
                    ? 'text-white border-transparent shadow-sm'
                    : 'border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]'
                }`}
                style={isActive ? {
                  background: 'linear-gradient(135deg, var(--color-navy), var(--color-blue))',
                } : {}}
              >
                {label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-white/25 text-white' : 'bg-[var(--color-gray-100)] text-[var(--color-gray-400)]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Two-column accordion grid on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {filtered.map(faq => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-10 h-10 mx-auto text-[var(--color-gray-200)] mb-3" />
            <p className="text-sm text-[var(--color-gray-400)]">No FAQs found for this category.</p>
          </div>
        )}

        {/* CTA below FAQs */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--color-gray-400)] mb-3">
            Still have questions? Our support team is here to help.
          </p>
          <a
            href="mailto:support@prepbanker.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[var(--color-blue)] border border-[var(--color-blue)]/30 bg-white hover:bg-[var(--color-sky)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}