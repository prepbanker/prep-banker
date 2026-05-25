// PATH: app/quiz/page.tsx
import type { Metadata } from 'next';
import Header           from '@/components/layout/Header';
import Footer           from '@/components/layout/Footer';
import Quiz             from '@/components/sections/quiz/Quiz';
import QuizHero         from '@/components/sections/quiz/hero/QuizHero';
import QuizHowItWorks   from '@/components/sections/quiz/hero/QuizHowItWorks';
import QuizCTABanner    from '@/components/sections/quiz/QuizCTABanner';
import QuizFAQSection   from '@/components/sections/quiz/QuizFAQSection';
import { BreadcrumbSchema, generatePageMeta } from '@/components/seo';
import { quizStats }    from '@/lib/data/quiz';

// ── Page metadata ──────────────────────────────────────────────
export const metadata: Metadata = generatePageMeta({
  title: 'Mock Test Series – SBI PO & IBPS PO Quiz Practice',
  description:
    'Attempt full mock tests, sectional quizzes, and topic-wise practice for SBI PO and IBPS PO on PrepBanker. Free and premium test series with detailed analytics.',
  path: '/quiz',
  keywords: [
    'SBI PO mock test',
    'IBPS PO quiz',
    'banking mock test series',
    'free banking quiz',
    'SBI PO practice test',
    'IBPS PO test series',
  ],
});

// ── Page ──────────────────────────────────────────────────────
export default function QuizPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home',       href: '/' },
          { name: 'Mock Tests', href: '/quiz' },
        ]}
      />

      <Header />

      <main className="bg-[var(--color-off-white)] min-h-screen">

        {/* Hero */}
        <QuizHero
          stats={quizStats}
          totalTests={quizStats.totalQuizSeries}
        />

        {/* How It Works strip */}
        <QuizHowItWorks />

        {/* Quiz grid with sticky filters */}
        <Quiz />

        {/* Bottom CTA */}
        <QuizCTABanner />

        {/* FAQs */}
        <QuizFAQSection />

      </main>

      <Footer />
    </>
  );
}