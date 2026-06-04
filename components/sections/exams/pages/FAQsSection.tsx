// PATH: components/sections/exams/pages/FAQsSection.tsx
'use client';

import type { ExamDetailData } from '@/types/exam';
import SharedFAQSection from '@/components/shared/FAQSection';

export default function FAQsSection({ exam }: { exam: ExamDetailData }) {
  return (
    <SharedFAQSection
      items={exam.examFaqs}
      label={`${exam.shortName} FAQs`}
      title="Frequently Asked Questions"
      subtitle={`Common questions about ${exam.shortName} 2026 exam, eligibility, and preparation.`}
    />
  );
}