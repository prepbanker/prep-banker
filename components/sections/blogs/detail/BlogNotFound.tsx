// PATH: components/sections/blogs/detail/BlogNotFound.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Post Not Found
// Shown when the requested slug has no matching blog.
// ─────────────────────────────────────────
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <section
      className="flex items-center justify-center"
      style={{ minHeight: '60vh', padding: '4rem 1.5rem' }}
    >
      <div className="text-center max-w-md">

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: 'linear-gradient(135deg, rgba(27,110,181,0.08), rgba(13,27,62,0.06))',
            border: '1px solid var(--color-gray-100)',
          }}
        >
          <Search className="w-8 h-8" style={{ color: 'var(--color-gray-400)' }} aria-hidden />
        </div>

        {/* Heading */}
        <h1
          className="font-bold text-2xl mb-3"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
        >
          Article Not Found
        </h1>

        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: 'var(--color-gray-600)' }}
        >
          The article you&apos;re looking for doesn&apos;t exist or may have been moved.
          Browse all our banking exam articles below.
        </p>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, var(--color-blue), var(--color-navy-light))',
            color: '#fff',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(27,110,181,0.3)',
          }}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to All Articles
        </Link>
      </div>
    </section>
  );
}