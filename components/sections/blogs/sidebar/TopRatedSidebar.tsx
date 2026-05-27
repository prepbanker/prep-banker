// PATH: components/sections/blogs/sidebar/TopRatedSidebar.tsx
// ─────────────────────────────────────────
// PrepBanker — Sidebar: Top Rated Blogs
// ─────────────────────────────────────────
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, Trophy } from 'lucide-react';
import type { BlogSidebarData } from '@/types/blogs';

interface Props {
  posts: BlogSidebarData['topRated'];
}

// Star rating row helper
function MiniStars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="w-2.5 h-2.5"
          style={{
            fill: i < Math.round(rating) ? 'var(--color-gold-bright)' : 'var(--color-gray-200)',
            color: i < Math.round(rating) ? 'var(--color-gold-bright)' : 'var(--color-gray-200)',
          }}
          aria-hidden
        />
      ))}
      <span
        className="ml-1 text-[10px] font-bold"
        style={{ color: 'var(--color-gold-bright)' }}
      >
        {rating?.toFixed(1)}
      </span>
    </span>
  );
}

export default function TopRatedSidebar({ posts }: Props) {
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
          background: 'linear-gradient(135deg, #7A5200 0%, #D4A017 100%)',
        }}
      >
        <Trophy className="w-4 h-4 flex-shrink-0" style={{ color: '#fff' }} aria-hidden />
        <h3
          className="font-bold text-sm tracking-wide"
          style={{ color: '#fff', fontFamily: 'var(--font-display)' }}
        >
          Top Rated Articles
        </h3>
      </div>

      {/* Posts list */}
      <ul>
        {posts.map((post, idx) => (
          <li
            key={post.id}
            style={{ borderBottom: idx < posts.length - 1 ? '1px solid var(--color-gray-100)' : 'none' }}
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-[rgba(212,160,23,0.04)]"
              style={{ textDecoration: 'none' }}
            >
              {/* Rank badge */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                style={{
                  background: idx === 0
                    ? 'linear-gradient(135deg, #D4A017, #F0B429)'
                    : idx === 1
                      ? 'linear-gradient(135deg, #94A3B8, #CBD5E1)'
                      : idx === 2
                        ? 'linear-gradient(135deg, #B45309, #D97706)'
                        : 'var(--color-gray-100)',
                  color: idx <= 2 ? '#fff' : 'var(--color-gray-600)',
                  boxShadow: idx === 0 ? '0 3px 10px rgba(212,160,23,0.35)' : 'none',
                }}
              >
                #{idx + 1}
              </div>

              {/* Thumbnail */}
              <div
                className="relative flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: 56, height: 48 }}
              >
                <Image
                  src={post.featuredImage ?? '/images/demo.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="56px"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-semibold leading-snug line-clamp-2 mb-1.5 group-hover:text-[var(--color-blue)] transition-colors"
                  style={{ color: 'var(--color-navy)' }}
                >
                  {post.title}
                </p>
                <div className="flex items-center justify-between gap-2">
                  {post.rating !== undefined && <MiniStars rating={post.rating} />}
                  <span
                    className="flex items-center gap-1 text-[10px]"
                    style={{ color: 'var(--color-gray-400)' }}
                  >
                    <Clock className="w-2.5 h-2.5" aria-hidden />
                    {post.readTimeMinutes} min
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}