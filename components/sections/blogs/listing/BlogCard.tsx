// PATH: components/sections/blogs/listing/BlogCard.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Listing Card
// ─────────────────────────────────────────
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, Star } from 'lucide-react';
import type { Blog } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';

// ── Category color map ─────────────────────
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
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  const catColor = CATEGORY_COLORS[blog.category] ?? DEFAULT_COLOR;

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden card-hover"
      style={{
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        boxShadow: 'var(--shadow-card)',
        textDecoration: 'none',
      }}
    >
      {/* ── Thumbnail ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', background: 'var(--color-gray-50)' }}>
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Featured badge overlay */}
        {blog.isFeatured && (
          <span
            className="absolute top-3 left-3 badge"
            style={{ background: 'var(--color-gold)', color: 'var(--color-navy-deep)', fontSize: '0.65rem' }}
          >
            ★ Featured
          </span>
        )}
        {/* Read time overlay */}
        <span
          className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold"
          style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', backdropFilter: 'blur(4px)' }}
        >
          <Clock className="w-3 h-3" aria-hidden />
          {blog.readTimeMinutes} min
        </span>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">

        {/* Category + Rating row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className="badge"
            style={{ background: catColor.bg, color: catColor.text, border: 'none' }}
          >
            {blog.category}
          </span>
          {blog.rating && (
            <span
              className="flex items-center gap-1 text-xs font-semibold"
              style={{ color: 'var(--color-gold-bright)' }}
            >
              <Star className="w-3.5 h-3.5 fill-current" aria-hidden />
              {blog.rating.toFixed(1)}
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className="font-bold leading-snug mb-2 line-clamp-2 group-hover:text-[var(--color-blue)] transition-colors"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            color: 'var(--color-navy)',
          }}
        >
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed line-clamp-3 flex-1 mb-4"
          style={{ color: 'var(--color-gray-600)' }}
        >
          {blog.excerpt}
        </p>

        {/* Footer row: author + date + read more */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--color-gray-100)' }}>
          <div className="flex items-center gap-2">
            {/* Author avatar placeholder */}
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
              style={{ background: 'var(--color-navy-light)', color: '#fff' }}
            >
              {blog.author.name.split(' ').map(p => p[0]).join('').slice(0, 2)}
            </div>
            <div>
              <p className="text-[11px] font-semibold leading-none" style={{ color: 'var(--color-navy)' }}>
                {blog.author.name}
              </p>
              <p className="text-[10px] mt-0.5 flex items-center gap-1" style={{ color: 'var(--color-gray-400)' }}>
                <Calendar className="w-2.5 h-2.5" aria-hidden />
                {formatBlogDate(blog.publishedAt)}
              </p>
            </div>
          </div>

          <span
            className="flex items-center gap-1 text-xs font-bold transition-all group-hover:gap-2"
            style={{ color: 'var(--color-blue)' }}
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </div>

      </div>
    </Link>
  );
}