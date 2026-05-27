// PATH: components/sections/blogs/seo/BlogSchemas.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog SEO Schema Components
//
// Usage on detail page:
//   <BlogPostingSchema blog={blog} />
//   <BlogBreadcrumbSchema blog={blog} />
//   <BlogHowToSchema blog={blog} />   ← only when blog.howTo is defined
//
// Usage on listing page:
//   <BlogListBreadcrumbSchema />
// ─────────────────────────────────────────
import type { Blog } from '@/types/blogs';

const SITE_URL = 'https://prepbanker.com'; // ← update to your production domain

// ─────────────────────────────────────────
// 1. BlogPosting Schema (Article)
// ─────────────────────────────────────────
export function BlogPostingSchema({ blog }: { blog: Blog }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.metaTitle ?? blog.title,
    description: blog.metaDescription ?? blog.excerpt,
    image: `${SITE_URL}${blog.featuredImage}`,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt ?? blog.publishedAt,
    author: {
      '@type': 'Person',
      name: blog.author.name,
      jobTitle: blog.author.designation,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PrepBanker',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${blog.slug}`,
    },
    keywords: blog.keywords?.join(', '),
    articleSection: blog.category,
    wordCount: blog.content.replace(/<[^>]+>/g, '').split(/\s+/).length,
    timeRequired: `PT${blog.readTimeMinutes}M`,
    ...(blog.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: blog.rating,
        bestRating: 5,
        worstRating: 1,
        ratingCount: blog.viewCount ?? 100,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────
// 2. Breadcrumb Schema — Blog Detail Page
// ─────────────────────────────────────────
export function BlogBreadcrumbSchema({ blog }: { blog: Blog }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blogs`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.category,
        item: `${SITE_URL}/blogs?category=${encodeURIComponent(blog.category)}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: blog.title,
        item: `${SITE_URL}/blogs/${blog.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────
// 3. Breadcrumb Schema — Blog Listing Page
// ─────────────────────────────────────────
export function BlogListBreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blogs`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────
// 4. HowTo Schema — rendered only when blog.howTo exists
// ─────────────────────────────────────────
export function BlogHowToSchema({ blog }: { blog: Blog }) {
  if (!blog.howTo) return null;

  const { howTo } = blog;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    image: `${SITE_URL}${blog.featuredImage}`,
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    step: howTo.steps.map(s => ({
      '@type': 'HowToStep',
      position: s.step,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────
// 5. Blog Listing — ItemList Schema
//    (for search engines to understand the list)
// ─────────────────────────────────────────
export function BlogItemListSchema({ blogs }: { blogs: Pick<Blog, 'slug' | 'title'>[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Banking Exam Blog Articles — PrepBanker',
    itemListElement: blogs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.title,
      url: `${SITE_URL}/blogs/${b.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}