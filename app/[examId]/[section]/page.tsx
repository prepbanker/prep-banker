// PATH: app/[examId]/[section]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamDetailLayout from '@/components/sections/exams/ExamDetailLayout';
import { getExamData, getDetailedSectionContent } from '@/lib/data/exams/detailContentMap';

import { BreadcrumbSchema, ArticleSchema, FAQSchema, AuthorPersonSchema } from '@/components/seo';

interface PageProps {
  params: Promise<{ examId: string; section: string }>;
}

const SECTIONS = [
  // New Slugs
  'notification',
  'admit-card',
  'vacancy',
  'syllabus',
  'important-dates',
  'cut-off',
  'exam-pattern',
  'eligibility',
  'selection-process',
  'salary',
  'mock-tests',
  'english-tests',
  'quant-tests',
  'reasoning-tests',
  'comparison',
  'sbi-po-vs-ibps-po',
  'study-plan',

  // Legacy compatibility slugs
  'dates',
  'cut-offs',
  'strategy',
  'english-sectional-test',
  'quantitative-aptitude-test',
  'reasoning-ability-test'
];

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

  // Generate highly descriptive, SEO-optimized title & description or use page overrides
  const title = content.metaTitle || `${content.title} | PrepBanker`;
  const description = content.metaDescription || `${content.overview.slice(0, 150)}... Read the comprehensive guide and attempt free practice mock tests on PrepBanker.`;

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

  return (
    <>
      {content.customSchemas ? (
        content.customSchemas
      ) : (
        <>
          <BreadcrumbSchema
            items={[
              { name: 'Home', href: '/' },
              { name: 'Exams', href: '/exams' },
              { name: exam.shortName, href: `/${examId}` },
              { name: content.title, href: `/${examId}/${section}` },
            ]}
          />
          <AuthorPersonSchema />
          <ArticleSchema
            headline={`${content.title}`}
            description={content.overview}
            image="https://prepbanker.com/favicon-32x32.png"
            datePublished="2026-01-01"
            url={`https://prepbanker.com/${examId}/${section}`}
          />
          {content.faqs && content.faqs.length > 0 && (
            <FAQSchema
              items={content.faqs.map(f => ({
                question: f.q,
                answer: f.a,
              }))}
            />
          )}
        </>
      )}
      <ExamDetailLayout examId={examId} sectionSlug={section} />
    </>
  );
}
