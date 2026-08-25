// PATH: components/shared/ReviewerBanner.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { authors } from '@/lib/data/authors';
import { BLOGS } from '@/lib/data/blogs/blogs';
import { CA_ARTICLES } from '@/lib/data/current-affairs/articles';

export default function ReviewerBanner() {
  const pathname = usePathname();

  // Determine page type
  const isSbi = pathname.startsWith('/sbi-po');
  const isIbps = pathname.startsWith('/ibps-po');
  const isBlog = pathname.startsWith('/blogs/');
  const isCA = pathname.startsWith('/current-affairs/');

  // Exclude non-content pages or base /blogs listing or base /current-affairs listing
  if (!isSbi && !isIbps && !isBlog && !isCA) {
    return null;
  }
  if (pathname === '/blogs' || pathname === '/current-affairs') {
    return null;
  }

  // Default parameters
  let reviewerSlug = 'divya-bhosale'; // default SME reviewer
  let date = 'July 10, 2026';

  if (isBlog) {
    const slug = pathname.replace('/blogs/', '');
    const blog = BLOGS.find(b => b.slug === slug);
    if (blog) {
      date = blog.updatedAt || blog.publishedAt;
    }
  } else if (isCA) {
    const id = pathname.replace('/current-affairs/', '');
    const article = CA_ARTICLES.find(a => a.id === id);
    if (article) {
      date = article.date;
    }
  }

  const reviewer = authors[reviewerSlug];
  if (!reviewer) return null;

  const canonicalUrl = `https://prepbanker.com${pathname}`;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          'url': canonicalUrl,
          'reviewedBy': {
            '@type': 'Person',
            'name': reviewer.name,
            'jobTitle': reviewer.jobTitle,
            'url': `https://prepbanker.com/authors/${reviewer.slug}`,
            'sameAs': [
              reviewer.linkedinUrl
            ]
          }
        })
      }}
    />
  );
}
