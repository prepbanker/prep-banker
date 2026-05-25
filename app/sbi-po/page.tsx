// PATH: app/sbi-po/page.tsx
import type { Metadata } from 'next';
import { sbiPoData } from '@/lib/data/exams/sbi-po';
import ExamDetailsPage from '@/components/sections/exams/ExamDetailsPage';

export const metadata: Metadata = {
  title: 'SBI PO 2026 – Complete Guide, Syllabus, Pattern & Mock Tests | PrepBanker',
  description:
    'Comprehensive SBI PO 2026 preparation guide: official notification, exam pattern, syllabus, eligibility, salary, cutoffs, and free mock tests on PrepBanker.',
  openGraph: {
    title: 'SBI PO 2026 Recruitment – Complete Preparation Guide',
    description: 'Official dates, syllabus, exam pattern, cutoffs and mock tests for SBI PO 2026.',
    url: 'https://prepbanker.com/sbi-po',
    type: 'website',
  },
};

export default function SBIPOPage() {
  return <ExamDetailsPage exam={sbiPoData} />;
}