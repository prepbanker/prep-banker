// PATH: components/sections/blogs/detail/BlogDetailHero.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Detail Hero
// Dynamic hero that renders based on the specific blog's
// title, category, author, featured image, and metadata.
// ─────────────────────────────────────────
import Image from 'next/image';
import { Clock, Calendar, Eye, Star, BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import type { Blog } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';

// ── Category → accent colour mapping ──────
const CATEGORY_ACCENT: Record<string, { pill: string; pillText: string }> = {
  'Banking Awareness': { pill: 'rgba(59,158,227,0.18)',  pillText: '#60B4FF' },
  'Current Affairs':   { pill: 'rgba(240,180,41,0.18)',  pillText: '#F0B429' },
  'Exam Strategy':     { pill: 'rgba(22,163,74,0.18)',   pillText: '#4ADE80' },
  'Study Tips':        { pill: 'rgba(139,92,246,0.18)',  pillText: '#C084FC' },
  'RBI & Economy':     { pill: 'rgba(239,68,68,0.18)',   pillText: '#FCA5A5' },
  'Government Schemes':{ pill: 'rgba(249,115,22,0.18)',  pillText: '#FB923C' },
  'Interview Tips':    { pill: 'rgba(16,185,129,0.18)',  pillText: '#6EE7B7' },
  'Success Stories':   { pill: 'rgba(236,72,153,0.18)',  pillText: '#F9A8D4' },
};
const DEFAULT_ACCENT = { pill: 'rgba(27,110,181,0.18)', pillText: '#60B4FF' };

interface Props {
  blog: Blog;
}

export default function BlogDetailHero({ blog }: Props) {
  const accent = CATEGORY_ACCENT[blog.category] ?? DEFAULT_ACCENT;

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-navy-deep)]"
      style={{ padding: '0 0 0' }}
    >
      {/* ── Background: featured image with overlay ── */}
      <div className="absolute inset-0">
        <Image
          src={blog.featuredImage}
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
        {/* Dark gradient overlay — keeps text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,16,42,0.82) 0%, rgba(7,16,42,0.90) 60%, rgba(7,16,42,0.98) 100%)',
          }}
        />
        {/* Blue side tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 0% 100%, rgba(27,110,181,0.20) 0%, transparent 55%)',
          }}
        />
        {/* Gold top-right bloom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 100% 0%, rgba(212,160,23,0.12) 0%, transparent 45%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container-custom relative z-10" style={{ padding: '2.5rem 1.5rem 3rem' }}>

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home',     href: '/' },
            { label: 'Blog',     href: '/blogs' },
            { label: blog.category, href: `/blogs?category=${encodeURIComponent(blog.category)}` },
            { label: blog.title },
          ]}
        />

        {/* Category pill + difficulty */}
        <div className="mt-5 flex items-center flex-wrap gap-2">
          <span
            className="badge"
            style={{ background: accent.pill, color: accent.pillText, border: `1px solid ${accent.pillText}30` }}
          >
            {blog.category}
          </span>
          {blog.difficulty && (
            <span
              className="badge"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              {blog.difficulty}
            </span>
          )}
          {blog.relatedExams?.map(exam => (
            <span
              key={exam}
              className="badge"
              style={{ background: 'rgba(212,160,23,0.12)', color: 'var(--color-gold-bright)', border: '1px solid rgba(212,160,23,0.25)' }}
            >
              {exam.toUpperCase().replace('-', ' ')}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="font-extrabold leading-tight mt-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            color: '#fff',
            maxWidth: '820px',
          }}
        >
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p
          className="mt-3 max-w-2xl text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.60)' }}
        >
          {blog.excerpt}
        </p>

        {/* ── Meta strip ── */}
        <div
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}
        >
          {/* Author */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: 'var(--color-navy-light)', color: '#fff', border: '2px solid rgba(255,255,255,0.15)' }}
            >
              {blog.author.name.split(' ').map(p => p[0]).join('').slice(0, 2)}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white leading-none">{blog.author.name}</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.48)' }}>
                {blog.author.designation}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8" style={{ background: 'rgba(255,255,255,0.12)' }} />

          {/* Date */}
          <div className="flex items-center gap-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
            {formatBlogDate(blog.publishedAt)}
            {blog.updatedAt && (
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>
                · Updated {formatBlogDate(blog.updatedAt)}
              </span>
            )}
          </div>

          {/* Read time */}
          <div className="flex items-center gap-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Clock className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
            {blog.readTimeMinutes} min read
          </div>

          {/* View count */}
          {blog.viewCount && (
            <div className="flex items-center gap-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <Eye className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
              {(blog.viewCount >= 1000
                ? `${(blog.viewCount / 1000).toFixed(1)}K`
                : blog.viewCount
              )} views
            </div>
          )}

          {/* Rating */}
          {blog.rating && (
            <div className="flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: 'var(--color-gold-bright)' }}>
              <Star className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden />
              {blog.rating.toFixed(1)} / 5
            </div>
          )}

          {/* Read time pill (right side) */}
          <div className="ml-auto hidden lg:flex items-center gap-1.5 text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <BookOpen className="w-3.5 h-3.5" aria-hidden />
            <span>{blog.tags.map(t => t.label).join(' · ')}</span>
          </div>
        </div>

      </div>

      {/* Bottom fade to page bg */}
      <div
        className="h-8 relative z-10"
        style={{ background: 'linear-gradient(0deg, var(--color-off-white) 0%, transparent 100%)' }}
      />
    </section>
  );
}