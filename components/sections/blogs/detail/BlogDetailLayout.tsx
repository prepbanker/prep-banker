// PATH: components/sections/blogs/detail/BlogDetailLayout.tsx
// PrepBanker — Blog Detail Layout
// Left: content (2/3) | Right: sticky TOC + promo CTA
import type { Blog } from '@/types/blogs';

import BlogContent    from './BlogContent';
import BlogAuthorCard from './BlogAuthorCard';
import BlogTagsShare  from './BlogTagsShare';
import TableOfContents from './TableOfContents';
import RelatedPosts   from '../related/RelatedPosts';
import SidebarCTA     from '../sidebar/SidebarCTA';
import { getRelatedBlogs } from '@/lib/data/blogs/blogs';
import PromoPopup from '@/components/shared/PromoPopup';



interface Props { blog: Blog; }

export default function BlogDetailLayout({ blog }: Props) {
  const relatedPosts = getRelatedBlogs(blog.slug, 3);

  return (
    <div className="container-custom" style={{ padding: '2rem 1.5rem 4rem' }}>

      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* ── MAIN CONTENT COLUMN ── */}
        <main className="flex-1 min-w-0">

          {/* Article content */}
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

          {/* Author card */}
          <BlogAuthorCard author={blog.author} />

          {/* Related posts */}
          <RelatedPosts posts={relatedPosts} />
        </main>

        {/* ── STICKY RIGHT SIDEBAR ── */}
        <aside
          className="w-full lg:w-[300px] xl:w-[320px] flex-shrink-0"
          style={{ position: 'sticky', top: '80px', alignSelf: 'flex-start' }}
        >
          <div className="flex flex-col gap-5">

            {/* Table of Contents */}
            <TableOfContents content={blog.content} />

            {/* CTA */}
            <SidebarCTA />

          </div>
        </aside>

      </div>

      <PromoPopup />
    </div>
  );
}