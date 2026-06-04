// PATH: app/ibps-po/page.tsx
// Force rebuild timestamp: 2026-06-04T17:40:00
import type { Metadata } from 'next';
import IBPSPOContent from '@/components/sections/exams/IBPSPOContent';

export const metadata: Metadata = {
  title: 'IBPS PO 2026 Mock Test, Syllabus, Exam Pattern & Free Practice Tests | PrepBanker',
  description:
    'Prepare for IBPS PO 2026 with free mock tests, sectional tests, topic-wise questions, current affairs, and study material. Full syllabus, exam pattern, cut-offs & 90-day strategy.',
  keywords: [
    'IBPS PO Mock Test',
    'IBPS PO 2026',
    'IBPS PO Syllabus',
    'IBPS PO Exam Pattern',
    'IBPS PO Free Mock Test',
    'IBPS PO Cut Off',
    'IBPS PO Salary',
    'IBPS PO Eligibility',
    'IBPS PO Selection Process',
  ],
  alternates: {
    canonical: 'https://prepbanker.com/ibps-po',
  },
  openGraph: {
    title: 'IBPS PO 2026 Mock Test, Syllabus & Free Practice Tests | PrepBanker',
    description: 'Free IBPS PO mock tests, syllabus, exam pattern, cut-offs and 90-day strategy.',
    url: 'https://prepbanker.com/ibps-po',
    type: 'website',
  },
};

export default function IBPSPOPage() {
  return <IBPSPOContent />;
}