// PATH: app/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection            from '@/components/sections/home/HeroSection';
import ExamTabExplorer        from '@/components/sections/home/ExamTabExplorer';
import ExamHighlightsSection  from '@/components/sections/home/ExamHighlightsSection';
import CurrentAffairsSection  from '@/components/sections/home/CurrentAffairsSection';

import {
  DynamicTrendingTests,
  DynamicLiveTests,
  DynamicTestimonials,
  DynamicComparison,
  DynamicFAQSection,
  DynamicFeatures,
  DynamicWhyPrepBanker,
  DynamicExamCalendar,
  DynamicCutOffs,
} from '@/components/sections/home/ClientSectionLoader';
import { ProductSchema, WebsiteSchema, FAQSchema } from '@/components/seo';
import { HOME_FAQS } from '@/lib/data/homeFaqs';

// ─────────────────────────────────────────
// Homepage Metadata
// ─────────────────────────────────────────
export const metadata: Metadata = {
  title: 'SBI PO Mock Test 2026, IBPS PO Mock Test, Sectional Tests & Practice Questions | PrepBanker',
  description: 'Practice with SBI PO Mock Tests, IBPS PO Mock Tests, sectional tests, topic-wise quizzes, current affairs, previous year questions, and study material. Improve speed, accuracy, and exam readiness with PrepBanker.',
  keywords: [
    'SBI PO Mock Test', 'SBI PO Mock Tests', 'SBI PO Free Mock Test',
    'SBI PO Online Test', 'SBI PO Practice Test', 'SBI PO Mock Test 2026',
    'SBI PO Prelims Mock Test', 'SBI PO Mains Mock Test', 'SBI PO Sectional Test',
    'SBI PO Section Wise Test', 'SBI PO Quant Mock Test', 'SBI PO Reasoning Mock Test',
    'SBI PO English Mock Test', 'SBI PO Practice Questions',
    'IBPS PO Mock Test', 'IBPS PO Mock Tests', 'IBPS PO Free Mock Test',
    'IBPS PO Online Test', 'IBPS PO Practice Test', 'IBPS PO Prelims Mock Test',
    'IBPS PO Mains Mock Test', 'IBPS PO Sectional Test', 'IBPS PO Section Wise Test',
    'IBPS PO Quant Test', 'IBPS PO Reasoning Test', 'IBPS PO English Test',
    'IBPS PO Practice Questions', 'Banking Exam Mock Tests',
    'Banking Exam Practice Questions', 'Banking Current Affairs',
    'Best SBI PO Mock Test Series', 'Best IBPS PO Mock Test Series',
    'Online Banking Exam Preparation', 'Bank PO Mock Tests',
    'Free Banking Mock Tests', 'PrepBanker'
  ],
  openGraph: {
    title: 'SBI PO Mock Test 2026, IBPS PO Mock Test | PrepBanker',
    description: 'Practice with SBI PO Mock Tests, IBPS PO Mock Tests, sectional tests, topic-wise quizzes, current affairs and study material.',
    url: 'https://prepbanker.com/',
    siteName: 'PrepBanker',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBI PO Mock Test 2026, IBPS PO Mock Test | PrepBanker',
    description: 'Practice with SBI PO Mock Tests, IBPS PO Mock Tests, sectional tests and study material.',
  },
  alternates: {
    canonical: 'https://prepbanker.com/',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'LmGIlLWdfLgEv6N1EexR9Sy6Wf9XiLtlf0cMdVwvd5o',
  },
};

// ─────────────────────────────────────────
// Homepage — Page Component
// ─────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <ProductSchema />
      <WebsiteSchema />
      <FAQSchema items={HOME_FAQS} />

      {/* Layout */}
      <Header />

      <main>
        {/* 1. Hero + Exam Tab Explorer */}
        <HeroSection />
        <ExamTabExplorer />

        {/* 2. Exam Highlights / Cards */}
        <ExamHighlightsSection />

        {/* 3. Trending Test Series Slider */}
        <DynamicTrendingTests />

        {/* Exam Calendar / Important Dates Section */}
        <DynamicExamCalendar />

        {/* Previous Year Cut-offs Section */}
        <DynamicCutOffs />

        {/* SBI PO vs IBPS PO Comparison Section */}
        <DynamicComparison />

        {/* 4. Current Affairs */}
        <CurrentAffairsSection />

        {/* 5. Live Tests */}
        <DynamicLiveTests />

        {/* 6. Why PrepBanker */}
        <DynamicWhyPrepBanker />

        {/* 7. Features */}
        <DynamicFeatures />

        {/* 8. Testimonials */}
        <DynamicTestimonials />

        {/* 9. FAQ */}
        <DynamicFAQSection />
      </main>

      <Footer />
    </>
  );
}