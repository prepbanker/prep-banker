// PATH: components/sections/blogs/detail/BlogShareButton.tsx
'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function BlogShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // silent
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
      style={{
        border: '1px solid var(--color-gray-200)',
        background: '#fff',
        color: 'var(--color-gray-600)',
        cursor: 'pointer',
      }}
    >
      {copied ? (
        <><Check className="w-4 h-4" style={{ color: 'var(--color-success)' }} aria-hidden />Copied!</>
      ) : (
        <><Share2 className="w-4 h-4" aria-hidden />Share</>
      )}
    </button>
  );
}