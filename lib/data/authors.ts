// PATH: lib/data/authors.ts

export interface AuthorData {
  slug: string;
  name: string;
  title: string;
  role: 'author' | 'reviewer';
  avatar?: string;
  linkedin?: string;
  bio: string;
  background: string;
  articles: { title: string; href: string; category: string }[];
}

export const authors: Record<string, AuthorData> = {
  'yashraj-deshmukh': {
    slug: 'yashraj-deshmukh',
    name: 'Yashraj Deshmukh',
    title: 'Senior Content Manager – Banking Exams, PrepBanker',
    role: 'author',
    avatar: '/images/profile/yashraj-deshmukh.jpeg',
    linkedin: 'https://www.linkedin.com/in/yashraj-deshmukh2409?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    bio: 'Yashraj Deshmukh has been writing and reviewing banking exam content for 7 years. He cleared IBPS PO in 2021, has a background in banking awareness content for 5+ years, and has reviewed 500+ mock test papers for accuracy against the latest SBI pattern. At PrepBanker, Yashraj tracks every SBI and IBPS notification the day it\'s released and personally verifies vacancy, salary, and exam-date updates against the official SBI/IBPS PDFs before they go live on this page.',
    background: 'Cleared IBPS PO (2021) • 7+ Years Banking Content Review • Verified 500+ Mocks',
    articles: [
      { title: 'SBI PO 2026 Complete Guide', href: '/sbi-po', category: 'SBI PO' },
      { title: 'SBI PO Notification Updates', href: '/sbi-po/notification', category: 'SBI PO' },
      { title: 'SBI PO Exam Pattern Analysis', href: '/sbi-po/exam-pattern', category: 'SBI PO' },
      { title: 'IBPS PO 2026 Complete Guide', href: '/ibps-po', category: 'IBPS PO' },
      { title: 'IBPS PO Notification Updates', href: '/ibps-po/notification', category: 'IBPS PO' },
      { title: 'IBPS PO Study Plan & Strategy', href: '/ibps-po/study-plan', category: 'IBPS PO' },
    ]
  },
  'divya-bhosale': {
    slug: 'divya-bhosale',
    name: 'Divya Bhosale',
    title: 'Subject Matter Expert, Quantitative Aptitude, PrepBanker',
    role: 'reviewer',
    bio: 'Divya Bhosale has been reviewing quantitative aptitude and banking exam material for PrepBanker. She has cleared the IDBI Junior Assistant Manager exam and served as a Customer Service Associate at the Bank of Maharashtra via IBPS PO, bringing invaluable real-world exam expertise to PrepBanker.',
    background: 'Exams cleared: IDBI Junior Assistant Manager • Bank of Maharashtra Customer Service Associate via IBPS PO',
    articles: [
      { title: 'SBI PO 2026 Complete Guide', href: '/sbi-po', category: 'SBI PO' },
      { title: 'SBI PO Quantitative Aptitude Tests', href: '/sbi-po/quant-tests', category: 'SBI PO' },
      { title: 'IBPS PO 2026 Complete Guide', href: '/ibps-po', category: 'IBPS PO' },
      { title: 'IBPS PO Quantitative Aptitude Tests', href: '/ibps-po/quant-tests', category: 'IBPS PO' },
    ]
  }
};
