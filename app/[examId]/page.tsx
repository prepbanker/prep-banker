// PATH: app/[examId]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamMainLayout from '@/components/sections/exams/ExamMainLayout';
import { getExamData } from '@/lib/data/exams/detailContentMap';

import { BreadcrumbSchema, CourseSchema, ProductSchema, AuthorPersonSchema } from '@/components/seo';

interface PageProps {
  params: Promise<{ examId: string }>;
}

export async function generateStaticParams() {
  return [
    { examId: 'sbi-po' },
    { examId: 'ibps-po' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { examId } = await params;
  const exam = getExamData(examId);

  if (!exam) {
    return {
      title: 'Exam Not Found',
      description: 'The requested banking exam preparation guide does not exist.',
    };
  }

  const title = exam.id === 'ibps-po'
    ? 'IBPS PO 2026 Mock Test, Syllabus, Exam Pattern & Free Practice Tests'
    : 'SBI PO 2026 Mock Test, Syllabus, Exam Pattern & Free Practice Tests';

  const description = exam.id === 'ibps-po'
    ? 'Prepare for IBPS PO 2026 with free mock tests, sectional tests, topic-wise questions, current affairs, and study material. Full syllabus, exam pattern, cut-offs & 90-day strategy.'
    : 'Prepare for SBI PO 2026 with free mock tests, sectional tests, topic-wise practice questions, current affairs, and study material. Full syllabus, exam pattern, cutoffs & preparation strategy — all in one place.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://prepbanker.com/${examId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://prepbanker.com/${examId}`,
      type: 'website',
    },
  };
}

export default async function ExamPage({ params }: PageProps) {
  const { examId } = await params;
  const exam = getExamData(examId);

  if (!exam) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Exams', href: '/exams' },
          { name: exam.shortName, href: `/${examId}` },
        ]}
      />
      <AuthorPersonSchema />
      <CourseSchema
        name={exam.name}
        description={exam.description}
        url={`https://prepbanker.com/${examId}`}
      />
      {examId === 'sbi-po' && (
        <ProductSchema
          name="SBI PO Mock Test Series 2026"
          description="Prepare for SBI PO 2026 with free mock tests, sectional practice tests, topic-wise practice questions, current affairs, and study material. Full syllabus, exam pattern, cutoffs & preparation strategy — all in one place."
          url="https://prepbanker.com/sbi-po"
          price="0"
          currency="INR"
        />
      )}
      <ExamMainLayout exam={exam} />
    </>
  );
}
