// PATH: components/sections/blogs/related/RelatedPosts.tsx
// PrepBanker — Continue Reading / Related Posts section
// Matches PrepGrind reference with plain card grid
import Link from 'next/link';
import { Clock } from 'lucide-react';
import type { Blog } from '@/types/blogs';

interface Props { posts: Blog[]; }

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      {/* Section heading */}
      <div className="mb-6">
        <h2
          className="font-bold text-xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
        >
          Continue Reading
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--color-gray-600)' }}>
          Explore more articles you might find interesting
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map(post => (
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
            {/* Thumbnail placeholder */}
            <div
              className="w-full flex items-center justify-center"
              style={{ height: 120, background: 'var(--color-sky)' }}
            >
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="var(--color-blue)" strokeWidth={1} opacity={0.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
              </svg>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col flex-1">
              <h3
                className="font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[var(--color-blue)] transition-colors"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
              >
                {post.title}
              </h3>
              <p
                className="text-xs leading-relaxed line-clamp-2 flex-1 mb-3"
                style={{ color: 'var(--color-gray-600)' }}
              >
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--color-gray-100)' }}>
                <div className="flex items-center gap-1" style={{ color: 'var(--color-gray-400)' }}>
                  <Clock className="w-3 h-3" aria-hidden />
                  <span className="text-xs">{post.readTimeMinutes} min read</span>
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
        ))}
      </div>
    </section>
  );
}