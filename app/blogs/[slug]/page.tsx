// PATH: app/blogs/[slug]/page.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Detail Page
// FIX: Next.js 15 — params and searchParams are Promises.
//      Both generateMetadata and the page component must be
//      async and await params before accessing .slug.
// ─────────────────────────────────────────
import type { Metadata } from 'next';

import Header  from '@/components/layout/Header';
import Footer  from '@/components/layout/Footer';

import BlogDetailHero   from '@/components/sections/blogs/detail/BlogDetailHero';
import BlogDetailLayout from '@/components/sections/blogs/detail/BlogDetailLayout';
import BlogNotFound     from '@/components/sections/blogs/detail/BlogNotFound';

import {
  BlogPostingSchema,
  BlogBreadcrumbSchema,
  BlogHowToSchema,
} from '@/components/sections/blogs/seo/BlogSchemas';

import { getBlogBySlug, BLOGS } from '@/lib/data/blogs/blogs';

// ─────────────────────────────────────────
// Static params — pre-generate all blog pages at build time
// ─────────────────────────────────────────
export async function generateStaticParams() {
  return BLOGS.map(blog => ({ slug: blog.slug }));
}

// ─────────────────────────────────────────
// Dynamic metadata per blog
// FIX: params is a Promise in Next.js 15 — must be awaited
// ─────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  // ← await the params Promise before destructuring
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Article Not Found | PrepBanker',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title:       blog.metaTitle       ?? `${blog.title} | PrepBanker`,
    description: blog.metaDescription ?? blog.excerpt,
    keywords:    blog.keywords,
    openGraph: {
      title:       blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.excerpt,
      type:        'article',
      publishedTime: blog.publishedAt,
      modifiedTime:  blog.updatedAt ?? blog.publishedAt,
      authors:     [blog.author.name],
      images: [
        {
          url:    blog.featuredImage,
          width:  1200,
          height: 630,
          alt:    blog.title,
        },
      ],
    },
    twitter: {
      card:        'summary_large_image',
      title:       blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.excerpt,
      images:      [blog.featuredImage],
    },
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
  };
}

// ─────────────────────────────────────────
// Page Component
// FIX: must be async, and await params before using .slug
// ─────────────────────────────────────────
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  // ← await the params Promise — this is the critical fix
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <>
        <Header />
        <main>
          <BlogNotFound />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      <BlogPostingSchema blog={blog} />
      <BlogBreadcrumbSchema blog={blog} />
      <BlogHowToSchema blog={blog} />

      <Header />

      <main>
        {/* Dynamic hero — adapts to each blog's image, title, meta */}
        <BlogDetailHero blog={blog} />

        {/* 2/3 content + 1/3 sticky sidebar */}
        <BlogDetailLayout blog={blog} />
      </main>

      <Footer />
    </>
  );
}