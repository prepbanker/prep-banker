// PATH: app/live-tests/page.tsx

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveTestsHero from '@/components/sections/live-tests/hero/LiveTestsHero';
import LiveTests from '@/components/sections/live-tests/LiveTests';
import LiveTestsFAQ from '@/components/sections/live-tests/faq/LiveTestsFAQ';

export const metadata: Metadata = {
  title: 'Live Mock Tests – SBI PO & IBPS PO Live Exams | PrepBanker',
  description:
    'Join live mock tests for SBI PO and IBPS PO on PrepBanker. Compete in real-time with thousands of banking aspirants and get instant all-India rankings.',
  keywords: [
    'live banking mock test',
    'SBI PO live test',
    'IBPS PO live exam',
    'real-time banking test',
    'banking exam practice',
  ],
  openGraph: {
    title: 'Live Mock Tests – SBI PO & IBPS PO | PrepBanker',
    description:
      'Real-time mock tests for SBI PO and IBPS PO. Compete live with 13,000+ aspirants.',
    url: 'https://prepbanker.com/live-tests',
    type: 'website',
  },
};

export default function LiveTestsPage() {
  return (
    <>
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