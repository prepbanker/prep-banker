// PATH: app/pricing/page.tsx

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Pricing from '@/components/sections/pricing/Pricing';
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo';

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'PrepBanker Premium Pricing – Simple, Honest Plans for SBI PO & IBPS PO Mocks',
  description:
    'Choose from our free or premium mock test series plans. Get complete access to 500+ mock tests, 7 years of PYQs, live exams, and AI feedback to crack the 2026 SBI PO & IBPS PO cycles.',
  keywords: [
    'prepbanker pricing',
    'sbi po mock test online buy',
    'ibps po mock test series price',
    'bank exam test series premium plan',
    'SBI PO 2026 mock tests',
    'IBPS PO 2026 mock tests',
    'mock test series premium pricing',
  ],
  openGraph: {
    title: 'PrepBanker Premium Pricing – Simple, Honest Plans for SBI PO & IBPS PO Mocks',
    description:
      'Choose from our free or premium mock test series plans. Get complete access to 500+ mock tests, 7 years of PYQs, live exams, and AI feedback to crack the 2026 SBI PO & IBPS PO cycles.',
    url: 'https://prepbanker.com/pricing',
    type: 'website',
  },
};

// --- FAQ Schema Data ---
const faqItems = [
  {
    question: 'What do I get in the Premium plan?',
    answer: 'The Premium plan unlocks complete access to the PrepBanker repository. You get all 500+ full-length mock tests for SBI PO and IBPS PO (both Prelims and Mains), all Previous Year Papers (2018–2024), live exams with real-time leaderboards, AI-driven performance reports identifying your weak areas, sectional & topic-wise quizzes, a comprehensive current affairs archive, and priority customer support.'
  },
  {
    question: 'Is there a free trial before I pay?',
    answer: 'Yes! Our Free Plan is completely free and requires no credit card. It includes 5 full-length mock tests, 3 previous year papers, basic performance diagnostics, and current affairs coverage for the last 7 days. You can practice with free content to experience our test engine before upgrading.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Absolutely. We stand by the quality of our content. If you are not satisfied with the Premium plan for any reason, you can request a full refund within 7 days of purchase. No questions asked.'
  },
  {
    question: 'Does the plan cover both SBI PO and IBPS PO?',
    answer: 'Yes! The Premium plan is a unified subscription. You don\'t have to purchase separate packages for different exams. A single payment unlocks test series, quizzes, study guides, and live mocks for both SBI PO and IBPS PO cycles (2026 cycle).'
  },
  {
    question: 'How do I activate my plan after payment?',
    answer: 'Activation is instantaneous. As soon as your transaction is completed successfully, your account status is updated to Premium on app.prepgrind.com. You will immediately have full, unrestricted access to all tests, previous year papers, and analytics reports.'
  }
];

export default function PricingPage() {
  return (
    <>
      {/* Dynamic SEO Schemas */}
      <WebPageSchema
        name="PrepBanker Premium Pricing – Simple, Honest Plans for SBI PO & IBPS PO Mocks"
        description="Choose from our free or premium mock test series plans. Get complete access to 500+ mock tests, 7 years of PYQs, live exams, and AI feedback to crack the 2026 SBI PO & IBPS PO cycles."
        url="https://prepbanker.com/pricing"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Pricing', href: '/pricing' },
        ]}
      />

      <FAQSchema items={faqItems} />

      {/* Header Layout */}
      <Header />

      <main>
        {/* Core dynamic content pricing component */}
        <Pricing />
      </main>

      {/* Footer Layout */}
      <Footer />
    </>
  );
}
