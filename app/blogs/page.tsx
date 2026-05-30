// PATH: app/blogs/page.tsx
// PrepBanker — Blog Listing Page (Redesigned to match PrepGrind reference layout)
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogHero from '@/components/sections/blogs/hero/BlogHero';
import BlogCategoryFilter from '@/components/sections/blogs/listing/BlogCategoryFilter';
import BlogGrid from '@/components/sections/blogs/listing/BlogGrid';
import BlogPagination from '@/components/sections/blogs/pagination/BlogPagination';
import BlogSearchBar from '@/components/sections/blogs/listing/BlogSearchBar';
import {
  BlogListBreadcrumbSchema,
  BlogItemListSchema,
} from '@/components/sections/blogs/seo/BlogSchemas';
import { getPaginatedBlogs, BLOGS, formatBlogDate } from '@/lib/data/blogs/blogs';
import type { BlogCategory } from '@/types/blogs';

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
    title: 'Banking Exam Blog | PrepBanker',
    description: 'Expert exam strategy, current affairs, and study tips for SBI PO & IBPS PO aspirants.',
    type: 'website',
  },
  alternates: { canonical: '/blogs' },
};

interface PageProps {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>;
}

const PER_PAGE = 6;

export default async function BlogListingPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const page = Math.max(1, parseInt(resolvedParams.page ?? '1', 10));
  const category = (resolvedParams.category as BlogCategory) ?? undefined;

  const search = resolvedParams.search ?? '';
  const { blogs, total, totalPages } = getPaginatedBlogs(page, PER_PAGE, category, search);

  // Latest 4 blogs for right sidebar (recent articles)
  const recentBlogs = BLOGS
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);

  // Featured blog = first featured one (or first overall)
  const featuredBlog = BLOGS.find(b => b.isFeatured) ?? BLOGS[0];

  const showHeroSection = page === 1 && !category;

  return (
    <>
      <BlogListBreadcrumbSchema />
      <BlogItemListSchema blogs={blogs} />

      <Header />

      <main>
        <BlogHero />

        {/* ── Search + Filter bar ── */}
        <div
  className="sticky top-[64px] p-4 z-40 border-b"
  style={{
    background: '#fff',
    borderColor: 'var(--color-gray-100)',
    boxShadow: '0 2px 8px rgba(13,27,62,0.07)',
  }}
>
          <div className="container-custom py-3 flex flex-col sm:flex-row items-center gap-3">
            <BlogSearchBar />
            <div className="flex-shrink-0">
              <BlogCategoryFilter activeCategory={category ?? 'All'} />
            </div>
          </div>
        </div>

        <div className="container-custom" style={{ padding: '2rem 1.5rem 4rem' }}>

          {/* ── Hero Section: Featured + Recent Articles (page 1, no filter) ── */}
          {showHeroSection && (
            <div className="flex flex-col lg:flex-row gap-6 mb-10">

              {/* Featured Article — left large */}
              <Link
                href={`/blogs/${featuredBlog.slug}`}
                className="group flex-1 rounded-2xl overflow-hidden relative block card-hover"
                style={{
                  background: 'var(--color-gray-50)',
                  border: '1px solid var(--color-gray-100)',
                  minHeight: 380,
                  textDecoration: 'none',
                }}
              >
                <div className="relative w-full" style={{ height: 240 }}>
                  <Image
                    src={featuredBlog.featuredImage}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <span
                    className="absolute top-3 left-3 badge"
                    style={{ background: 'var(--color-blue)', color: '#fff', fontSize: '0.7rem' }}
                  >
                    Latest Article
                  </span>
                </div>
                <div className="p-5">
                  <h2
                    className="font-bold text-base leading-snug mb-2 group-hover:text-[var(--color-blue)] transition-colors line-clamp-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
                  >
                    {featuredBlog.title}
                  </h2>
                  <p className="text-xs mb-3 line-clamp-2" style={{ color: 'var(--color-gray-600)' }}>
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--color-gray-400)' }}>
                    <span className="font-medium" style={{ color: 'var(--color-blue)' }}>{featuredBlog.author.name}</span>
                    <span>·</span>
                    <span>{featuredBlog.publishedAt ? formatBlogDate(featuredBlog.publishedAt) : 'Date TBD'}</span>
                  </div>
                </div>
              </Link>

              {/* Recent Articles — right stack */}
              <div className="lg:w-[380px] flex-shrink-0">
                <h3
                  className="font-bold text-base mb-4"
                  style={{ color: 'var(--color-navy)', fontFamily: 'var(--font-display)' }}
                >
                  Recent Articles
                </h3>
                <div className="flex flex-col gap-3">
                  {recentBlogs.map(post => (
                    <Link
                      key={post.id}
                      href={`/blogs/${post.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-[var(--color-sky)]"
                      style={{
                        border: '1px solid var(--color-gray-100)',
                        background: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--color-sky)', color: 'var(--color-blue)' }}
                      >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-semibold leading-snug line-clamp-2 mb-1 group-hover:text-[var(--color-blue)] transition-colors"
                          style={{ color: 'var(--color-navy)' }}
                        >
                          {post.title}
                        </p>
                        <p className="text-[10px]" style={{ color: 'var(--color-gray-400)' }}>
                          {post.author.name} · {post.publishedAt ? formatBlogDate(post.publishedAt) : 'TBD'}
                        </p>
                      </div>
                      <span
                        className="text-[10px] font-bold flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--color-blue)' }}
                      >
                        Read more →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Article count heading ── */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
                Showing page {page} · {blogs.length} of {total} articles
              </p>
            </div>
          </div>

          {/* ── Blog Grid ── */}
          <BlogGrid blogs={blogs} showFeaturedFirst={false} />

          {/* ── Pagination ── */}
          <BlogPagination currentPage={page} totalPages={totalPages} />
        </div>
      </main>

      <Footer />
    </>
  );
}