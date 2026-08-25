// PATH: components/sections/blogs/detail/BlogTagsShare.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Link2, Check, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import type { Blog } from '@/types/blogs';

interface Props { blog: Blog; }

export default function BlogTagsShare({ blog }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silent */ }
  };

  const shareLinks = [
    {
      label: 'Copy Link',
      icon: copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />,
      onClick: handleCopy,
      color: copied ? 'var(--color-success)' : 'var(--color-gray-600)',
      bg: copied ? 'rgba(22,163,74,0.08)' : '#fff',
    },
  ];

  return (
    <div className="pt-6 mt-6" style={{ borderTop: '1px solid var(--color-gray-100)' }}>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {blog.tags.map(tag => (
          <Link
            key={tag.id}
            href={`/blogs?tag=${tag.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.875rem',
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

      {/* Share section */}
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-gray-600)' }}
        >
          Share this article
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {/* Copy link */}
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
            style={{
              border: '1px solid var(--color-gray-200)',
              background: copied ? 'rgba(22,163,74,0.08)' : '#fff',
              color: copied ? 'var(--color-success)' : 'var(--color-gray-600)',
              cursor: 'pointer',
            }}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
            Copy Link
          </button>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--color-gray-200)', background: '#fff', color: '#115ec9', textDecoration: 'none' }}
          >
            <FaFacebook className="w-3.5 h-3.5" /> Facebook
          </a>

          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--color-gray-200)', background: '#fff', color: '#0b7ebf', textDecoration: 'none' }}
          >
            <FaTwitter className="w-3.5 h-3.5" /> Twitter
          </a>

          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--color-gray-200)', background: '#fff', color: '#0A66C2', textDecoration: 'none' }}
          >
            <FaLinkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--color-gray-200)', background: '#fff', color: '#1b9a47', textDecoration: 'none' }}
          >
            <Share2 className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}