// PATH: lib/data/blogs/blogs.ts
// ─────────────────────────────────────────
// PrepBanker — Blog Sample Data
// Replace featuredImage with actual images when available.
// ─────────────────────────────────────────
import type { Blog, BlogAuthor, BlogSidebarData } from '@/types/blogs';

// ─── Authors ──────────────────────────────
export const AUTHORS: Record<string, BlogAuthor> = {
  riya: {
    id: 'riya-sharma',
    name: 'Riya Sharma',
    designation: 'Senior Banking Faculty, 8+ Yrs',
    bio: 'Former RBI officer and banking exam mentor with 8+ years of teaching experience.',
  },
  arjun: {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    designation: 'IBPS PO AIR 12 (2022)',
    bio: 'Qualified IBPS PO, SBI Clerk, and RRB PO. Shares practical strategies for exam success.',
  },
  priya: {
    id: 'priya-nair',
    name: 'Priya Nair',
    designation: 'Current Affairs Analyst',
    bio: 'Tracks RBI policy, economy news, and government schemes daily for exam aspirants.',
  },
  vikram: {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    designation: 'Quantitative Aptitude Expert',
    bio: 'Engineering graduate turned banking coach. Specialises in Data Interpretation and Quant.',
  },
};

// ─── Tags (shared pool) ───────────────────
const TAG_POOL = {
  sbiPo:     { id: 'sbi-po',     label: 'SBI PO',      slug: 'sbi-po' },
  ibpsPo:    { id: 'ibps-po',    label: 'IBPS PO',     slug: 'ibps-po' },
  rbi:       { id: 'rbi',        label: 'RBI',          slug: 'rbi' },
  quant:     { id: 'quant',      label: 'Quant',        slug: 'quant' },
  reasoning: { id: 'reasoning',  label: 'Reasoning',    slug: 'reasoning' },
  english:   { id: 'english',    label: 'English',      slug: 'english' },
  strategy:  { id: 'strategy',   label: 'Strategy',     slug: 'strategy' },
  interview: { id: 'interview',  label: 'Interview',    slug: 'interview' },
  economy:   { id: 'economy',    label: 'Economy',      slug: 'economy' },
  schemes:   { id: 'schemes',    label: 'Govt Schemes', slug: 'govt-schemes' },
  mockTest:  { id: 'mock-test',  label: 'Mock Tests',   slug: 'mock-tests' },
  current:   { id: 'current',    label: 'Current Affairs', slug: 'current-affairs' },
};

// ─── Blog Data ────────────────────────────
export const BLOGS: Blog[] = [
  // ── 1 ─────────────────────────────────────
  {
    id: 'blog-001',
    slug: 'sbi-po-2026-complete-preparation-guide',
    title: 'SBI PO 2026 Complete Preparation Guide: Strategy, Syllabus & Study Plan',
    excerpt:
      'Everything you need to crack SBI PO 2026 — from syllabus breakdown and exam pattern to a day-by-day 90-day study plan curated by toppers.',
    content: `
      <h2>Why SBI PO is the Most Coveted Banking Exam</h2>
      <p>SBI PO offers a starting salary of ₹41,960/month with perks exceeding ₹8 LPA, posting in any of SBI's 22,000+ branches, and a fast-track career to AGM/DGM roles. The exam is conducted by State Bank of India and attracts 20–25 lakh applicants annually for ~2,000 vacancies.</p>

      <h2>SBI PO 2026 Exam Pattern</h2>
      <p>The selection process consists of three stages:</p>
      <ul>
        <li><strong>Preliminary Exam</strong> – 100 questions, 60 minutes (qualifying)</li>
        <li><strong>Main Exam</strong> – Objective (200M) + Descriptive (50M) = 250 marks</li>
        <li><strong>Group Exercise + Interview</strong> – 30 marks combined</li>
      </ul>

      <h2>90-Day Study Plan</h2>
      <p>Month 1 focuses on building fundamentals across all subjects. Month 2 shifts to sectional mock tests and accuracy improvement. Month 3 is dedicated to full-length mocks, current affairs revision, and descriptive writing practice.</p>

      <h2>Subject-Wise Strategy</h2>
      <h3>Quantitative Aptitude</h3>
      <p>Focus on Data Interpretation (3–4 sets in Mains), Number Series, Quadratic Equations, and Time-Speed-Distance. Aim for 90%+ accuracy in basic topics before attempting complex DI.</p>

      <h3>Reasoning Ability</h3>
      <p>Puzzles and Seating Arrangement dominate the Mains paper (25–30 questions). Practice 3–4 sets daily. Improve speed by solving without writing (mental mapping).</p>

      <h3>English Language</h3>
      <p>Reading Comprehension, Para Jumbles, and Error Detection are high-weightage topics. Read The Hindu or Business Standard 30 minutes daily for vocabulary and comprehension speed.</p>

      <h2>Books & Resources</h2>
      <ul>
        <li>Quantitative Aptitude — Arun Sharma (TMH)</li>
        <li>Verbal & Non-Verbal Reasoning — R.S. Aggarwal</li>
        <li>Objective English — S.P. Bakshi</li>
        <li>Banking Awareness — Arihant / PrepBanker Daily CA</li>
      </ul>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Exam Strategy',
    tags: [TAG_POOL.sbiPo, TAG_POOL.strategy, TAG_POOL.quant],
    author: AUTHORS.riya,
    publishedAt: '2026-05-20T08:00:00.000Z',
    readTimeMinutes: 12,
    isFeatured: true,
    isTopRated: true,
    rating: 4.9,
    viewCount: 84200,
    difficulty: 'Intermediate',
    relatedExams: ['sbi-po'],
    howTo: {
      name: 'How to Prepare for SBI PO 2026 in 90 Days',
      description: 'A step-by-step 90-day preparation plan to crack SBI PO Prelims and Mains.',
      totalTime: 'P90D',
      steps: [
        { step: 1, name: 'Understand the Syllabus & Exam Pattern', text: 'Download the official SBI PO notification. Map every topic to the three subjects: Quant, Reasoning, and English for Prelims; add General/Economy/Banking and Descriptive for Mains.' },
        { step: 2, name: 'Build Topic-Wise Foundations (Month 1)', text: 'Complete all basic topics from standard books. Do mini tests of 20–30 questions per topic daily. Target 80%+ accuracy before moving on.' },
        { step: 3, name: 'Sectional Mock Tests (Month 2)', text: 'Take 2 sectional mocks per subject per week. Analyze every wrong answer. Maintain an error log and revise weak areas on weekends.' },
        { step: 4, name: 'Full-Length Mocks + GK Sprint (Month 3)', text: 'Take one full Prelims mock every two days. Revise 6 months of current affairs. Practice descriptive writing (essay + letter) 3 times per week.' },
        { step: 5, name: 'Final Revision & Mock Analysis', text: 'In the last 10 days, revise formulas, banking awareness, and static GK. Analyse your last 5 mocks to identify your strongest and weakest areas. Do NOT start new topics.' },
      ],
    },
    metaTitle: 'SBI PO 2026 Complete Preparation Guide | PrepBanker',
    metaDescription: 'Crack SBI PO 2026 with our complete preparation guide — 90-day study plan, subject-wise strategy, best books, and expert tips from toppers.',
    keywords: ['SBI PO 2026', 'SBI PO preparation', 'SBI PO study plan', 'SBI PO strategy'],
  },

  // ── 2 ─────────────────────────────────────
  {
    id: 'blog-002',
    slug: 'ibps-po-mains-data-interpretation-mastery',
    title: 'IBPS PO Mains: Master Data Interpretation in 3 Weeks',
    excerpt:
      'Data Interpretation accounts for 60 marks in IBPS PO Mains. Learn how to solve Tabular, Bar Graph, Pie Chart, and Caselet DI in under 12 minutes per set.',
    content: `
      <h2>Why DI is the Game-Changer in IBPS PO Mains</h2>
      <p>The Data Analysis & Interpretation section carries 60 marks — the highest among all sections in IBPS PO Mains. Scoring 45+ in this section alone can push you well above the cutoff.</p>
      <h2>Types of DI Sets You Must Master</h2>
      <ul>
        <li>Tabular DI (most common — 2 sets expected)</li>
        <li>Bar Graph + Line Chart (combined DI)</li>
        <li>Pie Chart (percentage-based)</li>
        <li>Caselet DI (paragraph-based data)</li>
        <li>Missing Data DI (calculation-heavy)</li>
      </ul>
      <h2>3-Week Mastery Plan</h2>
      <p>Week 1: Tabular and Bar Graph. Week 2: Pie Chart and Combined DI. Week 3: Caselet and Missing Data. Attempt 2 full DI sets daily with a 12-minute timer.</p>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Study Tips',
    tags: [TAG_POOL.ibpsPo, TAG_POOL.quant, TAG_POOL.strategy],
    author: AUTHORS.vikram,
    publishedAt: '2026-05-15T09:30:00.000Z',
    readTimeMinutes: 9,
    isFeatured: false,
    isTopRated: true,
    rating: 4.7,
    viewCount: 52300,
    difficulty: 'Advanced',
    relatedExams: ['ibps-po'],
    metaTitle: 'IBPS PO Mains Data Interpretation Mastery | PrepBanker',
    metaDescription: 'Master Data Interpretation for IBPS PO Mains in 3 weeks. Covers Tabular, Bar Graph, Caselet, and Pie Chart DI with speed-building techniques.',
    keywords: ['IBPS PO DI', 'data interpretation IBPS PO', 'IBPS PO mains strategy'],
  },

  // ── 3 ─────────────────────────────────────
  {
    id: 'blog-003',
    slug: 'rbi-monetary-policy-june-2026-exam-notes',
    title: 'RBI Monetary Policy June 2026 — Complete Exam Notes for Banking Aspirants',
    excerpt:
      'RBI MPC June 2026 repo rate decision, key highlights, and all important facts you must revise for SBI PO and IBPS PO General Awareness section.',
    content: `
      <h2>RBI MPC June 2026 Key Decisions</h2>
      <p>The Monetary Policy Committee unanimously voted to keep the repo rate unchanged at 6.25% in its June 2026 meeting. The Standing Deposit Facility (SDF) rate stands at 6.00% and the Marginal Standing Facility (MSF) rate at 6.50%.</p>
      <h2>Important Rates to Remember</h2>
      <ul>
        <li>Repo Rate: 6.25%</li>
        <li>Reverse Repo Rate: 3.35%</li>
        <li>CRR: 4.00%</li>
        <li>SLR: 18.00%</li>
        <li>Bank Rate: 6.50%</li>
      </ul>
      <h2>GDP & Inflation Projections</h2>
      <p>RBI projected FY2026-27 GDP growth at 6.8% and CPI inflation at 4.1%. These numbers are directly asked in General Awareness sections of banking exams.</p>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'RBI & Economy',
    tags: [TAG_POOL.rbi, TAG_POOL.current, TAG_POOL.economy],
    author: AUTHORS.priya,
    publishedAt: '2026-05-10T07:00:00.000Z',
    readTimeMinutes: 7,
    isFeatured: true,
    isTopRated: false,
    rating: 4.5,
    viewCount: 41800,
    difficulty: 'Intermediate',
    relatedExams: ['sbi-po', 'ibps-po'],
    metaTitle: 'RBI Monetary Policy June 2026 Exam Notes | PrepBanker',
    metaDescription: 'All important RBI Monetary Policy June 2026 facts, rates, and GDP projections for SBI PO and IBPS PO General Awareness preparation.',
    keywords: ['RBI monetary policy 2026', 'repo rate 2026', 'RBI MPC June 2026'],
  },

  // ── 4 ─────────────────────────────────────
  {
    id: 'blog-004',
    slug: 'banking-interview-top-20-questions-answers',
    title: 'Top 20 Banking Interview Questions & Expert Answers for SBI/IBPS PO',
    excerpt:
      'Preparing for your bank PO interview? These are the 20 most-asked questions with model answers structured by SBI and IBPS toppers and HR panels.',
    content: `
      <h2>Why Interview Preparation Matters</h2>
      <p>In SBI PO, the GD+Interview carries 30 marks. In IBPS PO, the interview carries 20% of the final merit. A strong interview can compensate for a below-average Mains performance.</p>
      <h2>Most Asked Banking Interview Questions</h2>
      <ol>
        <li>Why do you want to join a bank?</li>
        <li>What is the difference between a Nationalised Bank and a Private Bank?</li>
        <li>What is NPA? How does it affect banking?</li>
        <li>What are the functions of RBI?</li>
        <li>Explain the SARFAESI Act.</li>
        <li>What is financial inclusion? Give examples of government schemes.</li>
        <li>Why should we select you over other candidates?</li>
        <li>Where do you see yourself in 5 years?</li>
      </ol>
      <h2>How to Answer "Why Banking?"</h2>
      <p>Avoid generic answers. Link your answer to specific banking roles, the impact of financial services on society, or a genuine interest in economic policy. Mention any relevant experience (internship, banking awareness study).</p>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Interview Tips',
    tags: [TAG_POOL.interview, TAG_POOL.sbiPo, TAG_POOL.ibpsPo],
    author: AUTHORS.arjun,
    publishedAt: '2026-05-05T10:00:00.000Z',
    readTimeMinutes: 11,
    isFeatured: false,
    isTopRated: true,
    rating: 4.8,
    viewCount: 67500,
    difficulty: 'Intermediate',
    relatedExams: ['sbi-po', 'ibps-po'],
    metaTitle: 'Top 20 Banking Interview Questions & Answers | PrepBanker',
    metaDescription: 'Expert answers to the top 20 SBI PO and IBPS PO interview questions. Impress your panel with structured, confident responses.',
    keywords: ['banking interview questions', 'SBI PO interview', 'IBPS PO interview preparation'],
  },

  // ── 5 ─────────────────────────────────────
  {
    id: 'blog-005',
    slug: 'english-para-jumbles-tricks-banking-exams',
    title: '7 Proven Tricks to Solve Para Jumbles in Banking Exams Under 90 Seconds',
    excerpt:
      'Para Jumbles appear in every banking exam. Learn 7 fast-solving techniques used by toppers to consistently score in English Language without reading every sentence.',
    content: `
      <h2>What Makes Para Jumbles Difficult?</h2>
      <p>Unlike comprehension, Para Jumbles test logical flow, connector words, and paragraph structure — not just vocabulary. Most aspirants waste 3–4 minutes per question, losing precious time.</p>
      <h2>Trick 1: Find the Opening Statement</h2>
      <p>The opening sentence introduces the topic without any pronoun reference (he/she/it/they) and never starts with a connector like "However", "But", "Therefore", or "Also". Eliminate all sentences that have these markers from being the first sentence.</p>
      <h2>Trick 2: Spot Pronoun-Noun Pairs</h2>
      <p>If sentence A mentions "Ravi Kumar" and sentence B says "He then...", sentence A must come before B. Map all pronoun references to their antecedents.</p>
      <h2>Trick 3: Look for Contrast & Continuation Connectors</h2>
      <p>Sentences starting with "However", "On the contrary", and "Nevertheless" follow a contrasting statement. Sentences with "Moreover", "Furthermore", and "In addition" follow a supporting statement.</p>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Study Tips',
    tags: [TAG_POOL.english, TAG_POOL.strategy, TAG_POOL.ibpsPo],
    author: AUTHORS.riya,
    publishedAt: '2026-04-28T08:00:00.000Z',
    readTimeMinutes: 8,
    isFeatured: false,
    isTopRated: false,
    rating: 4.4,
    viewCount: 33200,
    difficulty: 'Beginner',
    relatedExams: ['sbi-po', 'ibps-po'],
    metaTitle: '7 Para Jumble Tricks for Banking Exams | PrepBanker',
    metaDescription: 'Master Para Jumbles in banking exams with 7 proven tricks. Score consistently in English Language without spending more than 90 seconds per question.',
    keywords: ['para jumbles tricks', 'english banking exam', 'SBI PO english tips'],
  },

  // ── 6 ─────────────────────────────────────
  {
    id: 'blog-006',
    slug: 'government-schemes-banking-exam-2026-list',
    title: 'Government Schemes for Banking Exams 2026: Complete Updated List',
    excerpt:
      'A comprehensive list of all government schemes launched in 2025–2026 that are important for SBI PO, IBPS PO, and RRB PO General Awareness sections.',
    content: `
      <h2>Why Government Schemes are High Priority</h2>
      <p>Banking exams typically ask 5–8 questions on government schemes in the General Awareness section. These are the easiest marks to secure with targeted revision.</p>
      <h2>Key Schemes Launched in 2025–2026</h2>
      <ul>
        <li><strong>PM Awas Yojana Urban 2.0</strong> — Housing for urban poor; target 1 crore homes by 2029</li>
        <li><strong>Viksit Bharat Sankalp Yatra</strong> — Outreach campaign for government welfare scheme saturation</li>
        <li><strong>PM Surya Ghar Muft Bijli Yojana</strong> — Free solar electricity up to 300 units/month</li>
        <li><strong>Lakhpati Didi Scheme</strong> — Target 3 crore women SHG members earning ₹1 lakh/year</li>
        <li><strong>Unified Pension Scheme (UPS)</strong> — Effective April 2025; hybrid pension scheme for central govt employees</li>
      </ul>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Government Schemes',
    tags: [TAG_POOL.schemes, TAG_POOL.current, TAG_POOL.sbiPo],
    author: AUTHORS.priya,
    publishedAt: '2026-04-20T09:00:00.000Z',
    readTimeMinutes: 10,
    isFeatured: false,
    isTopRated: false,
    rating: 4.3,
    viewCount: 28900,
    difficulty: 'Beginner',
    relatedExams: ['sbi-po', 'ibps-po'],
    metaTitle: 'Government Schemes for Banking Exams 2026 | PrepBanker',
    metaDescription: 'Complete updated list of government schemes for SBI PO, IBPS PO, and RRB PO 2026 General Awareness. All schemes with key facts and ministry details.',
    keywords: ['government schemes 2026', 'banking exam schemes', 'SBI PO current affairs'],
  },

  // ── 7 ─────────────────────────────────────
  {
    id: 'blog-007',
    slug: 'mock-test-analysis-how-to-improve-score',
    title: 'How to Analyse Mock Tests to Double Your Banking Exam Score',
    excerpt:
      'Taking mocks is not enough. Most aspirants skip the analysis step — the most critical part. Learn the exact 5-step mock analysis framework used by IBPS PO toppers.',
    content: `
      <h2>The Mock Test Paradox</h2>
      <p>Aspirants who take 100 mocks without analysis often score less than those who take 30 mocks with deep analysis. Mock tests are practice simulations — the learning happens during review, not during attempt.</p>
      <h2>Step 1: Record Your Attempt Data</h2>
      <p>After every mock, record: time spent per section, number of attempts, correct answers, wrong answers, and skipped questions. Maintain this in a spreadsheet or notebook for trend analysis.</p>
      <h2>Step 2: Categorise Your Errors</h2>
      <p>Sort wrong answers into: Silly mistakes (knew the answer), Conceptual gaps (didn't know the method), Time pressure mistakes (knew but rushed), and Guesses gone wrong.</p>
      <h2>Step 3: Identify Your Time Leaks</h2>
      <p>Find which question types take you disproportionately long. These are your time leaks. For each, either improve speed through practice or build a skip strategy.</p>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Exam Strategy',
    tags: [TAG_POOL.mockTest, TAG_POOL.strategy, TAG_POOL.ibpsPo],
    author: AUTHORS.arjun,
    publishedAt: '2026-04-12T11:00:00.000Z',
    readTimeMinutes: 9,
    isFeatured: true,
    isTopRated: true,
    rating: 4.8,
    viewCount: 56700,
    difficulty: 'Intermediate',
    relatedExams: ['sbi-po', 'ibps-po'],
    metaTitle: 'How to Analyse Mock Tests for Banking Exams | PrepBanker',
    metaDescription: 'Learn the 5-step mock test analysis framework used by IBPS PO toppers. Stop wasting mocks and start converting analysis into higher scores.',
    keywords: ['mock test analysis', 'banking exam mock test', 'IBPS PO preparation strategy'],
  },

  // ── 8 ─────────────────────────────────────
  {
    id: 'blog-008',
    slug: 'banking-awareness-current-affairs-may-2026',
    title: 'Banking Awareness & Current Affairs — May 2026 Monthly Compilation',
    excerpt:
      'Complete May 2026 banking awareness and current affairs compilation for SBI PO and IBPS PO — RBI decisions, appointments, summits, and economy headlines.',
    content: `
      <h2>May 2026 Banking & Economy Highlights</h2>
      <p>This monthly compilation covers all exam-relevant news from May 2026 — the most important month for last-minute GK revision.</p>
      <h2>RBI & Banking Sector</h2>
      <ul>
        <li>RBI issued new guidelines on Digital Lending Apps (DLA) compliance</li>
        <li>SBI launched "SBI e-Mudra Pro" for MSME digital loans</li>
        <li>HDFC Bank ranked No.1 in market capitalisation among Indian banks</li>
      </ul>
      <h2>Economy</h2>
      <ul>
        <li>India's WPI inflation for April 2026 stood at 1.2%</li>
        <li>GST collection for April 2026 crossed ₹2.10 lakh crore — all-time high</li>
        <li>India's forex reserves crossed $680 billion</li>
      </ul>
      <h2>Important Appointments</h2>
      <ul>
        <li>New MD & CEO of Bank of Baroda appointed</li>
        <li>New CMD of LIC appointed by government</li>
      </ul>
    `,
    featuredImage: '/images/demo.jpg',
    category: 'Current Affairs',
    tags: [TAG_POOL.current, TAG_POOL.rbi, TAG_POOL.economy],
    author: AUTHORS.priya,
    publishedAt: '2026-05-31T07:00:00.000Z',
    readTimeMinutes: 15,
    isFeatured: true,
    isTopRated: false,
    rating: 4.6,
    viewCount: 72100,
    difficulty: 'Beginner',
    relatedExams: ['sbi-po', 'ibps-po'],
    metaTitle: 'Banking Awareness Current Affairs May 2026 | PrepBanker',
    metaDescription: 'Complete May 2026 banking awareness and current affairs compilation — RBI, economy, appointments, and summits for SBI PO and IBPS PO exam prep.',
    keywords: ['banking current affairs May 2026', 'banking awareness May 2026', 'SBI PO GK May 2026'],
  },
];

// ─── Sidebar Data ──────────────────────────
export const BLOG_SIDEBAR_DATA: BlogSidebarData = {
  latestPosts: BLOGS
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5)
    .map(({ id, slug, title, publishedAt, featuredImage, category }) => ({
      id, slug, title, publishedAt, featuredImage, category,
    })),

  topRated: BLOGS
    .filter(b => b.isTopRated)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 4)
    .map(({ id, slug, title, rating, readTimeMinutes, featuredImage }) => ({
      id, slug, title, rating, readTimeMinutes, featuredImage,
    })),

  popularCategories: [
    { category: 'Exam Strategy',       count: 24 },
    { category: 'Current Affairs',     count: 31 },
    { category: 'Study Tips',          count: 18 },
    { category: 'RBI & Economy',       count: 14 },
    { category: 'Banking Awareness',   count: 22 },
    { category: 'Government Schemes',  count: 9  },
    { category: 'Interview Tips',      count: 11 },
    { category: 'Success Stories',     count: 6  },
  ],
};

// ─── Helpers ──────────────────────────────

/** Get a single blog by slug */
export function getBlogBySlug(slug: string): Blog | undefined {
  return BLOGS.find(b => b.slug === slug);
}

/** Get all blogs optionally filtered by category */
export function getBlogsByCategory(category?: string): Blog[] {
  if (!category || category === 'All') return BLOGS;
  return BLOGS.filter(b => b.category === category);
}

/** Get paginated blogs */
export function getPaginatedBlogs(
  page = 1,
  perPage = 6,
  category?: string,
  search?: string,
): { blogs: Blog[]; total: number; totalPages: number } {
  let filtered = getBlogsByCategory(category);

  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.excerpt?.toLowerCase().includes(q)
    );
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const blogs = filtered.slice(start, start + perPage);
  return { blogs, total, totalPages };
}

/** Get related blogs (same category, excluding current) */
export function getRelatedBlogs(currentSlug: string, limit = 3): Blog[] {
  const current = getBlogBySlug(currentSlug);
  if (!current) return [];
  return BLOGS
    .filter(b => b.slug !== currentSlug && b.category === current.category)
    .slice(0, limit);
}

/** Format date for display: "May 20, 2026" */
export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}