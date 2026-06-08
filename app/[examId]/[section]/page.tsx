// PATH: app/[examId]/[section]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamDetailLayout from '@/components/sections/exams/ExamDetailLayout';
import { getExamData, getDetailedSectionContent } from '@/lib/data/exams/detailContentMap';

interface PageProps {
  params: Promise<{ examId: string; section: string }>;
}

const SECTIONS = ['eligibility', 'syllabus', 'exam-pattern', 'salary', 'cut-offs', 'dates', 'strategy'];

export async function generateStaticParams() {
  const exams = ['sbi-po', 'ibps-po'];
  const params: { examId: string; section: string }[] = [];

  for (const examId of exams) {
    for (const section of SECTIONS) {
      params.push({ examId, section });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { examId, section } = await params;
  const exam = getExamData(examId);
  const content = getDetailedSectionContent(examId, section);

  if (!exam || !content) {
    return {
      title: 'Section Not Found | PrepBanker',
      description: 'The requested exam preparation detail page does not exist.',
    };
  }

  // Generate highly descriptive, SEO-optimized title & description
  const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ');
  const title = `${exam.shortName} ${sectionTitle} 2026 — Complete Guide & Trends | PrepBanker`;
  const description = `${content.overview.slice(0, 150)}... Read comprehensive analysis on PrepBanker.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://prepbanker.com/${examId}/${section}`,
    },
    openGraph: {
      title,
      description,
      url: `https://prepbanker.com/${examId}/${section}`,
      type: 'article',
    },
  };
}

export default async function ExamSectionPage({ params }: PageProps) {
  const { examId, section } = await params;
  const exam = getExamData(examId);
  const content = getDetailedSectionContent(examId, section);

  if (!exam || !content) {
    notFound();
  }

  return <ExamDetailLayout examId={examId} sectionSlug={section} />;
}
