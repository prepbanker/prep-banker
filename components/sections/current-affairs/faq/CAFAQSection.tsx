// PATH: components/sections/current-affairs/faq/CAFAQSection.tsx
'use client';

import { CA_FAQS } from '../../../../lib/data/current-affairs/faqs';
import SharedFAQSection from '@/components/shared/FAQSection';

export default function CAFAQSection() {
  return (
    <SharedFAQSection
      items={CA_FAQS}
      label="Current Affairs FAQs"
      title="Everything About Current Affairs"
      subtitle="Common questions about current affairs preparation, key banking terms, RBI policy, and exam strategy — answered in detail."
    />
  );
}