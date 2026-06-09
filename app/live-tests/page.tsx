// PATH: app/live-tests/page.tsx

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveTestsHero from '@/components/sections/live-tests/hero/LiveTestsHero';
import LiveTests from '@/components/sections/live-tests/LiveTests';
import LiveTestsFAQ from '@/components/sections/live-tests/faq/LiveTestsFAQ';
import { BreadcrumbSchema, FAQSchema, WebPageSchema, ItemListSchema } from '@/components/seo';
import { liveTestFAQs, liveTests } from '@/lib/data/live-tests';

export const metadata: Metadata = {
  title: 'Live Mock Tests for SBI PO & IBPS PO | Free Banking Exam Test Series',
  description:
    'Attempt free live mock tests for SBI PO, IBPS PO, and other banking exams. Practice in a real exam environment, improve speed and accuracy, track performance, and boost your chances of success.',
  keywords: [
    'live mock test',
    'SBI PO live test',
    'IBPS PO live test',
    'banking exam mock tests',
    'free mock test',
    'online test series',
    'banking preparation',
    'SBI PO preparation',
    'IBPS PO preparation',
  ],
  openGraph: {
    title: 'Live Mock Tests for SBI PO & IBPS PO | Free Banking Exam Test Series',
    description:
      'Attempt free live mock tests for SBI PO, IBPS PO, and other banking exams. Practice in a real exam environment, improve speed and accuracy, track performance, and boost your chances of success.',
    url: 'https://prepbanker.com/live-tests',
    type: 'website',
  },
};

export default function LiveTestsPage() {
  return (
    <>
      <WebPageSchema
        name="Live Mock Tests for SBI PO & IBPS PO | Free Banking Exam Test Series"
        description="Attempt free live mock tests for SBI PO, IBPS PO, and other banking exams. Practice in a real exam environment, improve speed and accuracy, track performance, and boost your chances of success."
        url="https://prepbanker.com/live-tests"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Live Tests', href: '/live-tests' },
        ]}
      />

      <FAQSchema items={liveTestFAQs} />

      <ItemListSchema
        name="Live Mock Tests — PrepBanker"
        items={liveTests.map(t => ({
          name: t.title,
          url: `https://prepbanker.com/live-tests?test=${t.id}`
        }))}
      />

      <Header />

      <main>
        {/* Hero with breadcrumb, headline, and stat strip */}
        <LiveTestsHero />

        {/* Sticky filter bar + paginated card grid */}
        <LiveTests />

        {/* Accordion FAQ section */}
        <LiveTestsFAQ />
      </main>

      <Footer />
    </>
  );
}