// PATH: components/sections/quiz/QuizFAQSection.tsx
'use client';

import { quizFaqs } from '@/lib/data/quiz/quizFaqs';
import SharedFAQSection from '@/components/shared/FAQSection';

export default function QuizFAQSection() {
  return (
    <SharedFAQSection
      items={quizFaqs}
      label="Quiz FAQs"
      title="Everything You Need to Know"
      subtitle={`${quizFaqs.length}+ answers covering mock tests, exam practice, live challenges, and preparation strategies.`}
    />
  );
}