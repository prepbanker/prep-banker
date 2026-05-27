// PATH: app/blogs/page.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Listing Page
// FIX: Next.js 15 — searchParams is a Promise.
//      Page must be async and await searchParams
//      before accessing .page or .category.
// ─────────────────────────────────────────
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogHero            from '@/components/sections/blogs/hero/BlogHero';
import BlogCategoryFilter  from '@/components/sections/blogs/listing/BlogCategoryFilter';
import BlogGrid            from '@/components/sections/blogs/listing/BlogGrid';
import BlogPagination      from '@/components/sections/blogs/pagination/BlogPagination';
import {
  BlogListBreadcrumbSchema,
  BlogItemListSchema,
} from '@/components/sections/blogs/seo/BlogSchemas';
import { getPaginatedBlogs } from '@/lib/data/blogs/blogs';
import type { BlogCategory } from '@/types/blogs';

// ─── SEO metadata ─────────────────────────
export const metadata: Metadata = {
  title: 'Banking Exam Blog 2026 – Expert Tips, Strategy & Current Affairs | PrepBanker',
  description:
    'Expert articles on SBI PO, IBPS PO preparation strategy, current affairs, RBI updates, study tips, and interview guidance written by banking faculty and toppers.',
  keywords: [
    'banking exam blog',
    'SBI PO preparation tips',
    'IBPS PO strategy',
    'banking current affairs 2026',
    'RBI updates for exams',
    'banking study tips',
    'interview preparation banking',
  ],
  openGraph: {
    title:       'Banking Exam Blog | PrepBanker',
    description: 'Expert exam strategy, current affairs, and study tips for SBI PO & IBPS PO aspirants.',
    type:        'website',
  },
  alternates: {
    canonical: '/blogs',
  },
};

// ─── Types ────────────────────────────────
interface PageProps {
  // FIX: searchParams is a Promise in Next.js 15
  searchParams: Promise<{
    page?:     string;
    category?: string;
  }>;
}

const PER_PAGE = 7; // 1 featured wide card + 6 in grid

// ─── Page — must be async to await searchParams ───────
export default async function BlogListingPage({ searchParams }: PageProps) {
  // ← await the searchParams Promise — this is the critical fix
  const resolvedParams = await searchParams;

  const page     = Math.max(1, parseInt(resolvedParams.page ?? '1', 10));
  const category = (resolvedParams.category as BlogCategory) ?? undefined;

  const { blogs, total, totalPages } = getPaginatedBlogs(page, PER_PAGE, category);

  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      <BlogListBreadcrumbSchema />
      <BlogItemListSchema blogs={blogs} />

      <Header />

      <main>
        <BlogHero />

        <section className="section-padding">
          <div className="container-custom">

            {/* ── Top bar: filters + article count ── */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2
                  className="font-bold text-lg"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
                >
                  {category ? `${category} Articles` : 'All Articles'}
                </h2>
                <p className="text-sm mt-0.5" style={{ color: 'var(--color-gray-600)' }}>
                  Showing {blogs.length} of {total} articles
                  {page > 1 && ` · Page ${page} of ${totalPages}`}
                </p>
              </div>

              {/* Client-side category filter tabs */}
              <BlogCategoryFilter activeCategory={category ?? 'All'} />
            </div>

            {/* ── Blog Grid ── */}
            <BlogGrid blogs={blogs} showFeaturedFirst={page === 1 && !category} />

            {/* ── Pagination ── */}
            <BlogPagination currentPage={page} totalPages={totalPages} />

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}