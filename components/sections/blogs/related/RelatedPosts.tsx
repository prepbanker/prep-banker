// PATH: components/sections/blogs/related/RelatedPosts.tsx
// ─────────────────────────────────────────
// PrepBanker — Related Posts Section
// Shown at the bottom of the blog detail page.
// ─────────────────────────────────────────
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import type { Blog } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';

// ── Category colour map (same as BlogCard) ──
const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Banking Awareness': { bg: '#DBEAFE', text: '#1D4ED8' },
  'Current Affairs':   { bg: '#FEF9C3', text: '#854D0E' },
  'Exam Strategy':     { bg: '#DCFCE7', text: '#15803D' },
  'Study Tips':        { bg: '#EDE9FE', text: '#6D28D9' },
  'RBI & Economy':     { bg: '#FFE4E6', text: '#BE123C' },
  'Government Schemes':{ bg: '#FFF7ED', text: '#C2410C' },
  'Interview Tips':    { bg: '#F0FDF4', text: '#166534' },
  'Success Stories':   { bg: '#FCE7F3', text: '#9D174D' },
};
const DEFAULT_COLOR = { bg: '#F1F5F9', text: '#475569' };

interface Props {
  posts: Blog[];
}

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-14">
      {/* ── Section heading ── */}
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-4 h-4" style={{ color: 'var(--color-gold-bright)' }} aria-hidden />
        <h2
          className="font-bold text-lg"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
        >
          You May Also Like
        </h2>
        <div
          className="flex-1 h-px ml-2"
          style={{ background: 'linear-gradient(90deg, var(--color-gray-100), transparent)' }}
        />
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map(post => {
          const catColor = CATEGORY_COLORS[post.category] ?? DEFAULT_COLOR;
          return (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden card-hover"
              style={{
                background: '#fff',
                border: '1px solid var(--color-gray-100)',
                boxShadow: 'var(--shadow-card)',
                textDecoration: 'none',
              }}
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '16/9', background: 'var(--color-gray-50)' }}
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Read time badge */}
                <span
                  className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', backdropFilter: 'blur(4px)' }}
                >
                  <Clock className="w-3 h-3" aria-hidden />
                  {post.readTimeMinutes} min
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4">
                {/* Category */}
                <span
                  className="badge self-start mb-2"
                  style={{ background: catColor.bg, color: catColor.text, border: 'none' }}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h3
                  className="font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[var(--color-blue)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-xs leading-relaxed line-clamp-2 flex-1 mb-3"
                  style={{ color: 'var(--color-gray-600)' }}
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid var(--color-gray-100)' }}
                >
                  <span className="text-[11px]" style={{ color: 'var(--color-gray-400)' }}>
                    {formatBlogDate(post.publishedAt)}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs font-bold transition-all group-hover:gap-2"
                    style={{ color: 'var(--color-blue)' }}
                  >
                    Read
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}