// PATH: components/sections/blogs/detail/BlogDetailLayout.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Detail Layout
// 2/3 content + 1/3 sticky sidebar on desktop.
// Sidebar stacks below content on mobile.
// ─────────────────────────────────────────
import type { Blog } from '@/types/blogs';
import { BLOG_SIDEBAR_DATA } from '@/lib/data/blogs/blogs';

import BlogContent      from './BlogContent';
import BlogAuthorCard   from './BlogAuthorCard';
import BlogTagsShare    from './BlogTagsShare';
import RelatedPosts     from '../related/RelatedPosts';
import LatestPostsSidebar  from '../sidebar/LatestPostsSidebar';
import TopRatedSidebar     from '../sidebar/TopRatedSidebar';
import CategoriesSidebar   from '../sidebar/CategoriesSidebar';
import SidebarCTA          from '../sidebar/SidebarCTA';
import { getRelatedBlogs } from '@/lib/data/blogs/blogs';

interface Props {
  blog: Blog;
}

export default function BlogDetailLayout({ blog }: Props) {
  const relatedPosts    = getRelatedBlogs(blog.slug, 3);
  const { latestPosts, topRated, popularCategories } = BLOG_SIDEBAR_DATA;

  return (
    <div className="container-custom" style={{ padding: '2rem 1.5rem 4rem' }}>
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* ── MAIN CONTENT COLUMN ── */}
        <main className="flex-1 min-w-0">

          {/* ── Quick-read info bar ── */}
          <div
            className="flex flex-wrap items-center gap-3 px-5 py-3 rounded-xl mb-7"
            style={{
              background: 'linear-gradient(135deg, rgba(27,110,181,0.06) 0%, rgba(13,27,62,0.04) 100%)',
              border: '1px solid rgba(27,110,181,0.12)',
            }}
          >
            <span className="text-xs font-medium" style={{ color: 'var(--color-gray-600)' }}>
              📖 <strong style={{ color: 'var(--color-navy)' }}>{blog.readTimeMinutes} min read</strong>
            </span>
            <span
              className="hidden sm:block w-px h-4"
              style={{ background: 'var(--color-gray-200)' }}
            />
            <span className="text-xs font-medium" style={{ color: 'var(--color-gray-600)' }}>
              🎯 Relevant for:{' '}
              <strong style={{ color: 'var(--color-navy)' }}>
                {blog.relatedExams?.map(e => e.toUpperCase().replace('-', ' ')).join(', ') ?? 'All Banking Exams'}
              </strong>
            </span>
            {blog.difficulty && (
              <>
                <span
                  className="hidden sm:block w-px h-4"
                  style={{ background: 'var(--color-gray-200)' }}
                />
                <span className="text-xs font-medium" style={{ color: 'var(--color-gray-600)' }}>
                  📊 Level:{' '}
                  <strong style={{ color: 'var(--color-navy)' }}>{blog.difficulty}</strong>
                </span>
              </>
            )}
          </div>

          {/* ── Article content ── */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: '#fff',
              border: '1px solid var(--color-gray-100)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <BlogContent content={blog.content} />
            <BlogTagsShare blog={blog} />
          </div>

          {/* ── Author card ── */}
          <BlogAuthorCard author={blog.author} />

          {/* ── Related posts ── */}
          <RelatedPosts posts={relatedPosts} />

        </main>

        {/* ── SIDEBAR ── */}
        <aside
          className="w-full lg:w-[320px] xl:w-[340px] flex-shrink-0"
          style={{ position: 'sticky', top: '80px', alignSelf: 'flex-start' }}
        >
          <div className="flex flex-col gap-6">

            {/* CTA — highest priority */}
            <SidebarCTA />

            {/* Latest Posts */}
            <LatestPostsSidebar posts={latestPosts} />

            {/* Top Rated */}
            <TopRatedSidebar posts={topRated} />

            {/* Categories */}
            <CategoriesSidebar categories={popularCategories} />

          </div>
        </aside>

      </div>
    </div>
  );
}