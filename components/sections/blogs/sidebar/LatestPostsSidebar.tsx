// PATH: components/sections/blogs/sidebar/LatestPostsSidebar.tsx
// ─────────────────────────────────────────
// PrepBanker — Sidebar: Latest Posts
// ─────────────────────────────────────────
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowUpRight } from 'lucide-react';
import type { BlogSidebarData } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';

interface Props {
  posts: BlogSidebarData['latestPosts'];
}

export default function LatestPostsSidebar({ posts }: Props) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 px-5 py-4"
        style={{
          borderBottom: '1px solid var(--color-gray-100)',
          background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: 'var(--color-gold-bright)' }}
        />
        <h3
          className="font-bold text-sm tracking-wide"
          style={{ color: '#fff', fontFamily: 'var(--font-display)' }}
        >
          Latest Posts
        </h3>
      </div>

      {/* Posts list */}
      <ul className="divide-y" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
        {posts.map((post, idx) => (
          <li key={post.id}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-[var(--color-sky)]"
              style={{ textDecoration: 'none' }}
            >
              {/* Thumbnail */}
              <div
                className="relative flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: 60, height: 52 }}
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="60px"
                />
                {/* Index badge */}
                <div
                  className="absolute top-1 left-1 w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold"
                  style={{ background: 'var(--color-navy-deep)', color: '#fff' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-semibold leading-snug line-clamp-2 group-hover:text-[var(--color-blue)] transition-colors"
                  style={{ color: 'var(--color-navy)' }}
                >
                  {post.title}
                </p>
                <p
                  className="mt-1 flex items-center gap-1 text-[10px]"
                  style={{ color: 'var(--color-gray-400)' }}
                >
                  <Calendar className="w-2.5 h-2.5 flex-shrink-0" aria-hidden />
                  {formatBlogDate(post.publishedAt)}
                </p>
              </div>

              {/* Arrow icon */}
              <ArrowUpRight
                className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-blue)' }}
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer CTA */}
      <div className="px-5 py-3.5" style={{ borderTop: '1px solid var(--color-gray-100)' }}>
        <Link
          href="/blogs"
          className="flex items-center justify-center gap-1.5 text-xs font-bold py-2 rounded-xl transition-colors hover:bg-[var(--color-sky)]"
          style={{ color: 'var(--color-blue)', textDecoration: 'none' }}
        >
          View All Articles
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}