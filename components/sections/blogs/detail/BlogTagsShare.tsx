// PATH: components/sections/blogs/detail/BlogTagsShare.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Tags & Share Strip
// Shows tags and copy-link share for each blog post.
// ─────────────────────────────────────────
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Link2, Check, Share2 } from 'lucide-react';
import type { Blog } from '@/types/blogs';

interface Props {
  blog: Blog;
}

export default function BlogTagsShare({ blog }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: silent fail
    }
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 mt-6"
      style={{ borderTop: '1px solid var(--color-gray-100)' }}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {blog.tags.map(tag => (
          <Link
            key={tag.id}
            href={`/blogs?tag=${tag.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'var(--color-blue)',
              background: 'rgba(27,110,181,0.08)',
              border: '1px solid rgba(27,110,181,0.15)',
              textDecoration: 'none',
              transition: 'var(--transition)',
            }}
          >
            #{tag.label}
          </Link>
        ))}
      </div>

      {/* Share */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: 'var(--color-gray-600)' }}
        >
          <Share2 className="w-3.5 h-3.5" aria-hidden />
          Share
        </span>

        <button
          onClick={handleCopy}
          aria-label="Copy link to article"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 14px',
            borderRadius: '10px',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid var(--color-gray-100)',
            background: copied ? 'rgba(22,163,74,0.08)' : '#fff',
            color: copied ? 'var(--color-success)' : 'var(--color-gray-600)',
            transition: 'var(--transition)',
          }}
        >
          {copied
            ? <><Check className="w-3.5 h-3.5" aria-hidden />Copied!</>
            : <><Link2 className="w-3.5 h-3.5" aria-hidden />Copy Link</>
          }
        </button>
      </div>
    </div>
  );
}