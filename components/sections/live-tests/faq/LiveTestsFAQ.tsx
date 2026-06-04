// PATH: components/sections/live-tests/faq/LiveTestsFAQ.tsx
'use client';

import { liveTestFAQs } from '@/lib/data/live-tests';
import SharedFAQSection from '@/components/shared/FAQSection';

export default function LiveTestsFAQ() {
  return (
    <SharedFAQSection
      items={liveTestFAQs}
      label="Live Test FAQs"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about PrepBanker's live mock test platform."
    />
  );
}