// PATH: app/ibps-po/page.tsx
import type { Metadata } from 'next';
import { ibpsPoData } from '@/lib/data/exams/ibps-po';
import ExamDetailsPage from '@/components/sections/exams/ExamDetailsPage';

export const metadata: Metadata = {
  title: 'IBPS PO 2026 – Complete Guide, Syllabus, Pattern & Mock Tests | PrepBanker',
  description:
    'Comprehensive IBPS PO 2026 preparation guide: official notification, exam pattern, syllabus, eligibility, salary, cutoffs, and free mock tests on PrepBanker.',
  openGraph: {
    title: 'IBPS PO 2026 Recruitment – Complete Preparation Guide',
    description: 'Official dates, syllabus, exam pattern, cutoffs and mock tests for IBPS PO 2026.',
    url: 'https://prepbanker.com/ibps-po',
    type: 'website',
  },
};

export default function IBPSPOPage() {
  return <ExamDetailsPage exam={ibpsPoData} />;
}