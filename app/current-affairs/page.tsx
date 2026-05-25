// PATH: app/current-affairs/page.tsx
// ─────────────────────────────────────────
// Current Affairs page — intentionally minimal.
// All logic, data, and UI live inside the feature module.
// ─────────────────────────────────────────
import type { Metadata } from 'next';
import Header  from '@/components/layout/Header';
import Footer  from '@/components/layout/Footer';
import CAHero            from '@/components/sections/current-affairs/hero/CAhero';
import CurrentAffairsModule from '@/components/sections/current-affairs/CurrentAffairs';
import CAFAQSection      from '@/components/sections/current-affairs/faq/CAFAQSection';
import { BreadcrumbSchema } from '@/components/seo';

// ─── SEO metadata ─────────────────────────
export const metadata: Metadata = {
  title:       'Banking Current Affairs 2026 – Daily & Monthly Updates | PrepBanker',
  description:
    'Daily and monthly current affairs for SBI PO and IBPS PO 2026. Banking awareness, RBI updates, economy news, government schemes and static GK — all in one place.',
  keywords: [
    'banking current affairs 2026',
    'SBI PO current affairs',
    'IBPS PO GK',
    'RBI policy updates',
    'banking awareness 2026',
    'government schemes 2026',
    'monthly current affairs compilation',
  ],
  openGraph: {
    title:       'Banking Current Affairs 2026 | PrepBanker',
    description: 'Exam-tagged daily current affairs for SBI PO & IBPS PO aspirants.',
    type:        'website',
  },
};

// ─── Page ─────────────────────────────────
export default function CurrentAffairsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home',            href: '/' },
          { name: 'Current Affairs', href: '/current-affairs' },
        ]}
      />

      <Header />

      <main>
        <CAHero />
        <CurrentAffairsModule />
        <CAFAQSection />
      </main>

      <Footer />
    </>
  );
}