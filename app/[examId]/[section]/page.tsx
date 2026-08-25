// PATH: app/[examId]/[section]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamDetailLayout from '@/components/sections/exams/ExamDetailLayout';
import SBIPONotificationPage from '@/components/sections/exams/SBIPONotificationPage';
import SBIPOAdmitCardPage from '@/components/sections/exams/SBIPOAdmitCardPage';
import SBIPOVacancyPage from '@/components/sections/exams/SBIPOVacancyPage';
import SBIPOSyllabusPage from '@/components/sections/exams/SBIPOSyllabusPage';
import SBIPOImportantDatesPage from '@/components/sections/exams/SBIPOImportantDatesPage';
import SBIPOExamPatternPage from '@/components/sections/exams/SBIPOExamPatternPage';
import SBIPOEligibilityPage from '@/components/sections/exams/SBIPOEligibilityPage';
import SBIPOSelectionProcessPage from '@/components/sections/exams/SBIPOSelectionProcessPage';
import SBIPOSalaryPage from '@/components/sections/exams/SBIPOSalaryPage';
import SBIPOMockTestsPage from '@/components/sections/exams/SBIPOMockTestsPage';
import SBIPOEnglishTestsPage from '@/components/sections/exams/SBIPOEnglishTestsPage';
import SBIPOReasoningTestsPage from '@/components/sections/exams/SBIPOReasoningTestsPage';
import SBIPOComparisonPage from '@/components/sections/exams/SBIPOComparisonPage';
import SBIPOStudyPlanPage from '@/components/sections/exams/SBIPOStudyPlanPage';
import SBIPOExamAnalysisPage from '@/components/sections/exams/SBIPOExamAnalysisPage';
import SBIPOCutOffPage from '@/components/sections/exams/SBIPOCutOffPage';
import SBIPOQuantTestsPage from '@/components/sections/exams/SBIPOQuantTestsPage';
import IBPSPONotificationPage from '@/components/sections/exams/IBPSPONotificationPage';
import IBPSPOAdmitCardPage from '@/components/sections/exams/IBPSPOAdmitCardPage';
import IBPSPOVacancyPage from '@/components/sections/exams/IBPSPOVacancyPage';
import IBPSPOSyllabusPage from '@/components/sections/exams/IBPSPOSyllabusPage';
import IBPSPOImportantDatesPage from '@/components/sections/exams/IBPSPOImportantDatesPage';
import IBPSPOCutOffPage from '@/components/sections/exams/IBPSPOCutOffPage';
import IBPSPOExamPatternPage from '@/components/sections/exams/IBPSPOExamPatternPage';
import IBPSPOEligibilityPage from '@/components/sections/exams/IBPSPOEligibilityPage';
import IBPSPOSelectionProcessPage from '@/components/sections/exams/IBPSPOSelectionProcessPage';
import IBPSPOSalaryPage from '@/components/sections/exams/IBPSPOSalaryPage';
import IBPSPOMockTestsPage from '@/components/sections/exams/IBPSPOMockTestsPage';
import IBPSPOEnglishTestsPage from '@/components/sections/exams/IBPSPOEnglishTestsPage';
import IBPSPOQuantTestsPage from '@/components/sections/exams/IBPSPOQuantTestsPage';
import IBPSPOReasoningTestsPage from '@/components/sections/exams/IBPSPOReasoningTestsPage';
import IBPSPOStudyPlanPage from '@/components/sections/exams/IBPSPOStudyPlanPage';
import SBIPOPreviousYearPapersPage from '@/components/sections/exams/SBIPOPreviousYearPapersPage';
import IBPSPOPreviousYearPapersPage from '@/components/sections/exams/IBPSPOPreviousYearPapersPage';
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
  'exam-analysis',
  'prelims-exam-analysis',
  'previous-year-papers',

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
      if (examId === 'ibps-po' && (section === 'comparison' || section === 'sbi-po-vs-ibps-po')) {
        continue;
      }
      params.push({ examId, section });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { examId, section } = await params;
  if (examId === 'ibps-po' && (section === 'comparison' || section === 'sbi-po-vs-ibps-po')) {
    return {
      title: 'Section Not Found',
      description: 'The requested exam preparation detail page does not exist.',
    };
  }
  const exam = getExamData(examId);
  const content = getDetailedSectionContent(examId, section);

  if (!exam || !content) {
    return {
      title: 'Section Not Found',
      description: 'The requested exam preparation detail page does not exist.',
    };
  }

  const title = content.metaTitle || content.title;
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
  if (examId === 'ibps-po' && (section === 'comparison' || section === 'sbi-po-vs-ibps-po')) {
    notFound();
  }
  const exam = getExamData(examId);
  const content = getDetailedSectionContent(examId, section);

  if (!exam || !content) {
    notFound();
  }

  if (examId === 'ibps-po' && section === 'notification') {
    return (
      <>
        {content.customSchemas}
        <IBPSPONotificationPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'admit-card') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOAdmitCardPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'vacancy') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOVacancyPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'syllabus') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOSyllabusPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'important-dates') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOImportantDatesPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'cut-off') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOCutOffPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'exam-pattern') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOExamPatternPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'eligibility') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOEligibilityPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'selection-process') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOSelectionProcessPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'salary') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOSalaryPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'mock-tests') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOMockTestsPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'english-tests') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOEnglishTestsPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'quant-tests') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOQuantTestsPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'reasoning-tests') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOReasoningTestsPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'study-plan') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOStudyPlanPage />
      </>
    );
  }

  if (examId === 'ibps-po' && section === 'previous-year-papers') {
    return (
      <>
        {content.customSchemas}
        <IBPSPOPreviousYearPapersPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'notification') {
    return (
      <>
        {content.customSchemas}
        <SBIPONotificationPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'admit-card') {
    return (
      <>
        {content.customSchemas}
        <SBIPOAdmitCardPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'vacancy') {
    return (
      <>
        {content.customSchemas}
        <SBIPOVacancyPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'syllabus') {
    return (
      <>
        {content.customSchemas}
        <SBIPOSyllabusPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'important-dates' || section === 'dates')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOImportantDatesPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'exam-pattern') {
    return (
      <>
        {content.customSchemas}
        <SBIPOExamPatternPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'eligibility') {
    return (
      <>
        {content.customSchemas}
        <SBIPOEligibilityPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'selection-process' || section === 'selection')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOSelectionProcessPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'cut-off' || section === 'cut-offs')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOCutOffPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'salary') {
    return (
      <>
        {content.customSchemas}
        <SBIPOSalaryPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'mock-tests' || section === 'mock-test')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOMockTestsPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'english-tests' || section === 'english-sectional-test')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOEnglishTestsPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'reasoning-tests' || section === 'reasoning-ability-test')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOReasoningTestsPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'quant-tests' || section === 'quantitative-aptitude-test')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOQuantTestsPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'comparison' || section === 'sbi-po-vs-ibps-po')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOComparisonPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'study-plan' || section === 'strategy')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOStudyPlanPage />
      </>
    );
  }

  if (examId === 'sbi-po' && (section === 'exam-analysis' || section === 'prelims-exam-analysis')) {
    return (
      <>
        {content.customSchemas}
        <SBIPOExamAnalysisPage />
      </>
    );
  }

  if (examId === 'sbi-po' && section === 'previous-year-papers') {
    return (
      <>
        {content.customSchemas}
        <SBIPOPreviousYearPapersPage />
      </>
    );
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
