// PATH: app/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection            from '@/components/sections/home/HeroSection';
import ExamHighlightsSection  from '@/components/sections/home/ExamHighlightsSection';
import TrendingTestsSection   from '@/components/sections/home/TrendingTestsSection';
import CurrentAffairsSection  from '@/components/sections/home/CurrentAffairsSection';
import LiveTestsSection       from '@/components/sections/home/LiveTestsSection';
import WhyPrepBankerSection   from '@/components/sections/home/WhyPrepBankerSection';
import FeaturesSection        from '@/components/sections/home/FeaturesSection';
import TestimonialsSection    from '@/components/sections/home/TestimonialsSection';
import FAQSection             from '@/components/sections/home/FAQSection';
import { ProductSchema, WebsiteSchema } from '@/components/seo';

// ─────────────────────────────────────────
// Homepage Metadata
// ─────────────────────────────────────────
export const metadata: Metadata = {
  title: 'PrepBanker – #1 Banking Exam Preparation | SBI PO & IBPS PO 2026',
  description:
    'Prepare for SBI PO and IBPS PO 2026 with PrepBanker – India\'s most trusted platform. Free mock tests, live exams, daily current affairs, performance analytics, and expert preparation tools.',
  keywords: [
    'SBI PO 2026 preparation', 'IBPS PO 2026 mock test',
    'banking exam preparation India', 'free banking mock tests',
    'SBI PO live tests', 'IBPS PO current affairs',
    'PrepBanker', 'banking aspirants platform',
  ],
  alternates: { canonical: 'https://prepbanker.com' },
  openGraph: {
    title: 'PrepBanker – India\'s #1 Banking Exam Prep Platform',
    description: 'Free mock tests, live exams & daily current affairs for SBI PO & IBPS PO 2026.',
    url: 'https://prepbanker.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
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

      {/* Layout */}
      <Header />

      <main>
        {/* 1. Hero + Exam Tab Explorer */}
        <HeroSection />

        {/* 2. Exam Highlights / Cards */}
        <ExamHighlightsSection />

        {/* 3. Trending Test Series Slider */}
        <TrendingTestsSection />

        {/* 4. Current Affairs */}
        <CurrentAffairsSection />

        {/* 5. Live Tests */}
        <LiveTestsSection />

        {/* 6. Why PrepBanker */}
        <WhyPrepBankerSection />

        {/* 7. Features */}
        <FeaturesSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ */}
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}