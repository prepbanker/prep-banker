// PATH: types/blogs.ts
// ─────────────────────────────────────────
// PrepBanker — Blog Types
// ─────────────────────────────────────────

export type BlogCategory =
  | 'Banking Awareness'
  | 'Current Affairs'
  | 'Exam Strategy'
  | 'Study Tips'
  | 'RBI & Economy'
  | 'Government Schemes'
  | 'Interview Tips'
  | 'Success Stories';

export type BlogDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface BlogAuthor {
  id: string;
  name: string;
  designation: string;
  avatar?: string; // path to image, e.g. /images/authors/john.jpg
  bio?: string;
}

export interface BlogTag {
  id: string;
  label: string;
  slug: string;
}

export interface BlogHowToStep {
  step: number;
  name: string;
  text: string;
}

export interface BlogHowTo {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration e.g. "PT30M"
  steps: BlogHowToStep[];
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string or markdown
  featuredImage: string; // path e.g. /images/demo.jpg
  category: BlogCategory;
  tags: BlogTag[];
  author: BlogAuthor;
  publishedAt: string; // ISO date string
  updatedAt?: string;
  readTimeMinutes: number;
  isFeatured?: boolean;
  isTopRated?: boolean;
  rating?: number; // 1–5
  viewCount?: number;
  difficulty?: BlogDifficulty;
  relatedExams?: string[]; // e.g. ['sbi-po', 'ibps-po']
  howTo?: BlogHowTo; // for HowTo schema
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

// ── For listing / pagination ───────────────
export interface BlogListResponse {
  blogs: Blog[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// ── Filters ───────────────────────────────
export interface BlogFilters {
  category?: BlogCategory | 'All';
  tag?: string;
  search?: string;
  exam?: string;
  page?: number;
}

// ── Sidebar data ──────────────────────────
export interface BlogSidebarData {
  latestPosts: Pick<Blog, 'id' | 'slug' | 'title' | 'publishedAt' | 'featuredImage' | 'category'>[];
  topRated: Pick<Blog, 'id' | 'slug' | 'title' | 'rating' | 'readTimeMinutes' | 'featuredImage'>[];
  popularCategories: { category: BlogCategory; count: number }[];
}