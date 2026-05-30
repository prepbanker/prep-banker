// PATH: components/sections/blogs/listing/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import type { Blog } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';

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

interface Props { blog: Blog; }

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
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', background: 'var(--color-gray-50)' }}>
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Fallback icon when image is placeholder */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'var(--color-sky)' }}
        >
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="var(--color-blue)" strokeWidth={1} opacity={0.4}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2
          className="font-bold leading-snug mb-2 line-clamp-2 group-hover:text-[var(--color-blue)] transition-colors"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.95rem',
            color: 'var(--color-navy)',
          }}
        >
          {blog.title}
        </h2>

        <p
          className="text-xs leading-relaxed line-clamp-2 flex-1 mb-3"
          style={{ color: 'var(--color-gray-600)' }}
        >
          {blog.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--color-gray-100)' }}>
          <div>
            <p className="text-[11px] font-semibold leading-none" style={{ color: 'var(--color-navy)' }}>
              {blog.author.name}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--color-gray-400)' }}>
              {formatBlogDate(blog.publishedAt)}
            </p>
          </div>

          <div className="flex items-center gap-1" style={{ color: 'var(--color-gray-400)' }}>
            <Clock className="w-3 h-3" aria-hidden />
            <span className="text-[10px]">{blog.readTimeMinutes} min read</span>
          </div>

          <span
            className="text-xs font-bold transition-all group-hover:underline"
            style={{ color: 'var(--color-blue)' }}
          >
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}