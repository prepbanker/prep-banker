// PATH: components/sections/home/FAQSection.tsx
'use client';

import SharedFAQSection from '@/components/shared/FAQSection';
import { HOME_FAQS } from '@/lib/data/homeFaqs';

export default function FAQSection() {
  return (
    <SharedFAQSection
      items={HOME_FAQS}
      title="Frequently Asked Questions about SBI PO & IBPS PO Mock Tests"
      subtitle="Find answers to the most common questions about banking salaries, exam difficulty, preparations, and selection processes."
    />
  );
}