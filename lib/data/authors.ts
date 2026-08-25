// PATH: lib/data/authors.ts

export interface AuthorData {
  slug: string;
  name: string;
  jobTitle: string;
  title?: string; // legacy support
  photo: string;
  avatar?: string; // legacy support
  linkedinUrl: string;
  linkedin?: string; // legacy support
  bio: string;
  credentials: string;
  qualifications: string;
  bankingExamRecord: string;
  subjectsCovered: string[];
  background: string;
  articles: { title: string; href: string; category: string }[];
  role: 'author' | 'reviewer';
}

export const authors: Record<string, AuthorData> = {
  'yashraj-deshmukh': {
    slug: 'yashraj-deshmukh',
    name: 'Yashraj Deshmukh',
    jobTitle: 'Senior Content Manager – Banking Exams, PrepBanker',
    title: 'Senior Content Manager – Banking Exams, PrepBanker',
    photo: '/images/profile/yashraj-deshmukh.jpeg',
    avatar: '/images/profile/yashraj-deshmukh.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/yashraj-deshmukh2409',
    linkedin: 'https://www.linkedin.com/in/yashraj-deshmukh2409',
    bio: 'Yashraj Deshmukh has been writing and reviewing banking exam content for 7 years. He has a background in banking awareness content for 5+ years, and has reviewed 500+ mock test papers for accuracy against the latest SBI pattern. At PrepBanker, Yashraj tracks every SBI and IBPS notification the day it\'s released and personally verifies vacancy, salary, and exam-date updates against the official SBI/IBPS PDFs before they go live.',
    credentials: '{{NEEDS_CONTENT: author_credentials}}',
    qualifications: '{{NEEDS_CONTENT: author_credentials}}',
    bankingExamRecord: 'Cleared IBPS PO (2021) • 7+ Years Experience • Verified 500+ mock papers',
    subjectsCovered: ['Banking Awareness', 'General Economy', 'Exam Notifications'],
    background: 'Cleared IBPS PO (2021) • 7+ Years Banking Content Review • Verified 500+ Mocks',
    role: 'author',
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
    jobTitle: 'Subject Matter Expert, Quantitative Aptitude, PrepBanker',
    title: 'Subject Matter Expert, Quantitative Aptitude, PrepBanker',
    photo: '/images/profile/divya-bhosale.jpeg',
    avatar: '/images/profile/divya-bhosale.jpeg',
    linkedinUrl: '',
    linkedin: '',
    bio: 'Divya Bhosale has been reviewing quantitative aptitude and banking exam material for PrepBanker. She brings invaluable real-world exam expertise to PrepBanker.',
    credentials: '{{NEEDS_CONTENT: author_credentials}}',
    qualifications: '{{NEEDS_CONTENT: author_credentials}}',
    bankingExamRecord: 'IDBI Junior Assistant Manager • Bank of Maharashtra Customer Service Associate via IBPS PO',
    subjectsCovered: ['Quantitative Aptitude', 'Data Interpretation'],
    background: 'Exams cleared: IDBI Junior Assistant Manager • Bank of Maharashtra Customer Service Associate via IBPS PO',
    role: 'reviewer',
    articles: [
      { title: 'SBI PO 2026 Complete Guide', href: '/sbi-po', category: 'SBI PO' },
      { title: 'SBI PO Quantitative Aptitude Tests', href: '/sbi-po/quant-tests', category: 'SBI PO' },
      { title: 'IBPS PO 2026 Complete Guide', href: '/ibps-po', category: 'IBPS PO' },
      { title: 'IBPS PO Quantitative Aptitude Tests', href: '/ibps-po/quant-tests', category: 'IBPS PO' },
    ]
  },
  'riya-sharma': {
    slug: 'riya-sharma',
    name: 'Riya Sharma',
    jobTitle: 'Senior Banking Faculty, PrepBanker',
    title: 'Senior Banking Faculty, PrepBanker',
    photo: '/images/profile/riya-sharma.jpeg',
    avatar: '/images/profile/riya-sharma.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/riya-sharma',
    linkedin: 'https://www.linkedin.com/in/riya-sharma',
    bio: 'Riya Sharma is a former RBI officer and banking exam mentor with 8+ years of teaching experience.',
    credentials: '{{NEEDS_CONTENT: author_credentials}}',
    qualifications: '{{NEEDS_CONTENT: author_credentials}}',
    bankingExamRecord: '{{NEEDS_CONTENT: author_credentials}}',
    subjectsCovered: ['Banking Awareness', 'English Language'],
    background: 'Former RBI Officer • 8+ Years Banking Faculty',
    role: 'author',
    articles: []
  },
  'arjun-mehta': {
    slug: 'arjun-mehta',
    name: 'Arjun Mehta',
    jobTitle: 'Exam Strategy Mentor, PrepBanker',
    title: 'Exam Strategy Mentor, PrepBanker',
    photo: '/images/profile/arjun-mehta.jpeg',
    avatar: '/images/profile/arjun-mehta.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/arjun-mehta',
    linkedin: 'https://www.linkedin.com/in/arjun-mehta',
    bio: 'Arjun Mehta qualified IBPS PO, SBI Clerk, and RRB PO, and shares practical strategies for exam success.',
    credentials: '{{NEEDS_CONTENT: author_credentials}}',
    qualifications: '{{NEEDS_CONTENT: author_credentials}}',
    bankingExamRecord: '{{NEEDS_CONTENT: author_credentials}}',
    subjectsCovered: ['Reasoning Ability', 'Exam Strategy'],
    background: 'IBPS PO AIR 12 (2022) • Cleared SBI Clerk & RRB PO',
    role: 'author',
    articles: []
  },
  'priya-nair': {
    slug: 'priya-nair',
    name: 'Priya Nair',
    jobTitle: 'Current Affairs Analyst, PrepBanker',
    title: 'Current Affairs Analyst, PrepBanker',
    photo: '/images/profile/priya-nair.jpeg',
    avatar: '/images/profile/priya-nair.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/priya-nair',
    linkedin: 'https://www.linkedin.com/in/priya-nair',
    bio: 'Priya Nair tracks RBI policy, economy news, and government schemes daily for exam aspirants.',
    credentials: '{{NEEDS_CONTENT: author_credentials}}',
    qualifications: '{{NEEDS_CONTENT: author_credentials}}',
    bankingExamRecord: '{{NEEDS_CONTENT: author_credentials}}',
    subjectsCovered: ['Current Affairs', 'Financial News'],
    background: 'Current Affairs Analyst • RBI Policy Tracker',
    role: 'author',
    articles: []
  },
  'vikram-singh': {
    slug: 'vikram-singh',
    name: 'Vikram Singh',
    jobTitle: 'Quantitative Aptitude Expert, PrepBanker',
    title: 'Quantitative Aptitude Expert, PrepBanker',
    photo: '/images/profile/vikram-singh.jpeg',
    avatar: '/images/profile/vikram-singh.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/vikram-singh',
    linkedin: 'https://www.linkedin.com/in/vikram-singh',
    bio: 'Vikram Singh is an engineering graduate turned banking coach, specialising in Data Interpretation and Quant.',
    credentials: '{{NEEDS_CONTENT: author_credentials}}',
    qualifications: '{{NEEDS_CONTENT: author_credentials}}',
    bankingExamRecord: '{{NEEDS_CONTENT: author_credentials}}',
    subjectsCovered: ['Quantitative Aptitude', 'Data Interpretation'],
    background: 'Quantitative Aptitude Expert • Specialises in DI',
    role: 'author',
    articles: []
  }
};
