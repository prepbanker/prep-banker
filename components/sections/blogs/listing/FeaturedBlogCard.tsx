// PATH: components/sections/blogs/listing/FeaturedBlogCard.tsx
// ─────────────────────────────────────────
// PrepBanker — Featured Blog Card (wide layout)
// Used for the top featured article on the listing page.
// ─────────────────────────────────────────
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, Star, Flame } from 'lucide-react';
import type { Blog } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';

interface Props {
  blog: Blog;
}

export default function FeaturedBlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col md:flex-row rounded-2xl overflow-hidden card-hover"
      style={{
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        boxShadow: 'var(--shadow-card)',
        textDecoration: 'none',
        minHeight: 260,
      }}
    >
      {/* ── Image — left half on md+ ── */}
      <div
        className="relative overflow-hidden w-full md:w-[45%] flex-shrink-0"
        style={{ minHeight: 220 }}
      >
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 45vw"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.5) 100%)' }}
        />
        {/* Featured pill */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <span
            className="flex items-center gap-1 badge"
            style={{ background: 'var(--color-gold)', color: 'var(--color-navy-deep)' }}
          >
            <Flame className="w-3 h-3" aria-hidden />
            Featured Article
          </span>
        </div>
      </div>

      {/* ── Content — right half ── */}
      <div className="flex flex-col justify-center flex-1 p-6 md:p-8">
        {/* Category */}
        <span
          className="badge mb-3 self-start"
          style={{ background: 'var(--color-sky)', color: 'var(--color-blue)' }}
        >
          {blog.category}
        </span>

        {/* Title */}
        <h2
          className="font-extrabold leading-snug mb-3 group-hover:text-[var(--color-blue)] transition-colors"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: 'var(--color-navy)',
          }}
        >
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed line-clamp-3 mb-5"
          style={{ color: 'var(--color-gray-600)' }}
        >
          {blog.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex items-center flex-wrap gap-4 mb-5">
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-gray-600)' }}>
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            {formatBlogDate(blog.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-gray-600)' }}>
            <Clock className="w-3.5 h-3.5" aria-hidden />
            {blog.readTimeMinutes} min read
          </span>
          {blog.rating && (
            <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--color-gold-bright)' }}>
              <Star className="w-3.5 h-3.5 fill-current" aria-hidden />
              {blog.rating.toFixed(1)} Rating
            </span>
          )}
        </div>

        {/* Author + CTA */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: 'var(--color-navy-light)', color: '#fff' }}
            >
              {blog.author.name.split(' ').map(p => p[0]).join('').slice(0, 2)}
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: 'var(--color-navy)' }}>
                {blog.author.name}
              </p>
              <p className="text-[11px]" style={{ color: 'var(--color-gray-400)' }}>
                {blog.author.designation}
              </p>
            </div>
          </div>

          <span
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all group-hover:gap-3"
            style={{
              background: 'linear-gradient(135deg, var(--color-blue), var(--color-navy-light))',
              color: '#fff',
            }}
          >
            Read Article
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}