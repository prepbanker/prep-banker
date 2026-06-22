// PATH: app/previous-year-papers/page.tsx

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PreviousYearPapers from '@/components/sections/previous-year-papers/PreviousYearPapers';
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo';

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'Download SBI PO & IBPS PO Previous Year Question Papers PDF (2018-2024) | PrepBanker',
  description:
    'Download official SBI PO & IBPS PO previous year question paper PDFs (2018–2024) for free. Practice online or download official shifts to crack the 2026 banking cycle.',
  keywords: [
    'sbi po previous year papers',
    'ibps po previous year papers',
    'sbi po pyq pdf download',
    'ibps po pyq pdf download',
    'banking previous year question papers',
    'SBI PO 2026',
    'IBPS PO 2026',
    'prepbanker pyqs',
    'previous year papers free',
  ],
  openGraph: {
    title: 'Download SBI PO & IBPS PO Previous Year Question Papers PDF (2018-2024) | PrepBanker',
    description:
      'Download official SBI PO & IBPS PO previous year question paper PDFs (2018–2024) for free. Practice online or download official shifts to crack the 2026 banking cycle.',
    url: 'https://prepbanker.com/previous-year-papers',
    type: 'website',
  },
};

// --- FAQ Schema Data ---
const faqItems = [
  {
    question: 'Are these SBI PO and IBPS PO previous year papers official?',
    answer: 'Yes, all the Previous Year Question Papers (PYQs) provided on PrepBanker are official memory-based papers compiled from actual exams. They represent authentic exam questions and sections to give you an accurate sense of the actual exam difficulty.'
  },
  {
    question: 'How many years of PYQ papers are available on PrepBanker?',
    answer: 'We offer PYQ papers covering 7 years of exams (2018–2024) across multiple shifts for both SBI PO and IBPS PO. This includes both Prelims and Mains stages, giving you a complete repository to cover.'
  },
  {
    question: 'Can I practise these papers in exam mode?',
    answer: 'Yes! Unlocked PDFs can be downloaded directly. To attempt these actual PYQ papers in a real-time online exam interface with section-wise timers, negative marking, instant percentiles, and detailed AI feedback, register free on our main platform at app.prepgrind.com.'
  },
  {
    question: 'Are the PDFs free to download?',
    answer: 'We offer free downloads of select previous year papers (e.g. 2024 Prelims Shift 1 for both exams) to help you check the quality without signing up. The rest of the papers can be unlocked completely free by signing up/registering on PrepGrind.'
  },
  {
    question: 'How do PYQ papers help in SBI PO / IBPS PO preparation?',
    answer: 'PYQs are the gold standard for banking exam prep. They help you analyze exact recurring patterns, understand the difficulty gradient of questions (especially in quantitative aptitude and reasoning puzzles), calibrate your speed, and identify the weightage of different topics in the syllabus.'
  },
  {
    question: 'What is the difference between Prelims and Mains papers?',
    answer: 'Prelims papers focus heavily on speed and basic concept accuracy, consisting of 100 questions to be solved in 60 minutes. Mains papers are significantly more advanced, featuring higher-difficulty data interpretation and puzzle sets, a General Awareness section, and descriptive writing, spanning up to 3 to 3.5 hours.'
  }
];

export default function PreviousYearPapersPage() {
  return (
    <>
      {/* Dynamic SEO Schemas */}
      <WebPageSchema
        name="Download SBI PO & IBPS PO Previous Year Question Papers PDF (2018-2024) | PrepBanker"
        description="Download official SBI PO & IBPS PO previous year question paper PDFs (2018–2024) for free. Practice online or download official shifts to crack the 2026 banking cycle."
        url="https://prepbanker.com/previous-year-papers"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Previous Year Papers', href: '/previous-year-papers' },
        ]}
      />

      <FAQSchema items={faqItems} />

      {/* Header Layout */}
      <Header />

      <main>
        {/* Core dynamic content listing component */}
        <PreviousYearPapers />
      </main>

      {/* Footer Layout */}
      <Footer />
    </>
  );
}
