// PATH: app/quiz/page.tsx
import type { Metadata } from 'next';
import Header           from '@/components/layout/Header';
import Footer           from '@/components/layout/Footer';
import QuizHero         from '@/components/sections/quiz/hero/QuizHero';
import QuizSection      from '@/components/sections/quiz/QuizSection';
import QuizFAQSection   from '@/components/sections/quiz/QuizFAQSection';
import { BreadcrumbSchema, FAQSchema, WebPageSchema, generatePageMeta, ItemListSchema } from '@/components/seo';
import { quizStats }    from '@/lib/data/quiz';
import { quizFaqs }     from '@/lib/data/quiz/quizFaqs';
import { quizSeries }   from '@/lib/data/quiz/quizSeries';

// ── Page metadata ──────────────────────────────────────────────
export const metadata: Metadata = generatePageMeta({
  title: 'Practice Quizzes for SBI PO & IBPS PO | Topic-wise Quiz Preparation',
  description:
    'Practice topic-wise quizzes for SBI PO, IBPS PO, and other competitive exams. Improve accuracy, strengthen concepts, track performance, and boost your exam preparation with interactive quiz practice.',
  path: '/quiz',
  keywords: [
    'quiz practice',
    'SBI PO quiz',
    'IBPS PO quiz',
    'banking exam quiz',
    'aptitude quiz',
    'reasoning quiz',
    'English quiz',
    'current affairs quiz',
    'online quiz practice',
    'competitive exam preparation',
  ],
});

// ── Page ──────────────────────────────────────────────────────
export default function QuizPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home',             href: '/' },
          { name: 'Practice Quizzes', href: '/quiz' },
        ]}
      />

      <WebPageSchema
        name="Practice Quizzes for SBI PO & IBPS PO | Topic-wise Quiz Preparation"
        description="Practice topic-wise quizzes for SBI PO, IBPS PO, and other competitive exams. Improve accuracy, strengthen concepts, track performance, and boost your exam preparation with interactive quiz practice."
        url="https://prepbanker.com/quiz"
      />

      <FAQSchema items={quizFaqs} />

      <ItemListSchema
        name="Practice Quizzes — PrepBanker"
        items={quizSeries.map(q => ({
          name: q.title,
          url: `https://prepbanker.com/quiz?series=${q.id}`
        }))}
      />

      <Header />

      <main className="bg-[var(--color-off-white)] min-h-screen">

        {/* Hero */}
        <QuizHero
          stats={quizStats}
          totalTests={quizStats.totalQuizSeries}
        />

        {/* Playable Interactive Mock Quiz flow */}
        <QuizSection />

        {/* FAQs */}
        <QuizFAQSection />

      </main>

      <Footer />
    </>
  );
}