// PATH: app/blogs/[slug]/page.tsx
import type { Metadata } from 'next';

import Header  from '@/components/layout/Header';
import Footer  from '@/components/layout/Footer';

import BlogDetailHero   from '@/components/sections/blogs/detail/BlogDetailHero';
import BlogDetailLayout from '@/components/sections/blogs/detail/BlogDetailLayout';
import BlogNotFound     from '@/components/sections/blogs/detail/BlogNotFound';
import StickyLeftCTA    from '@/components/shared/StickyLeftCTA';
import PromoPopup from '@/components/shared/PromoPopup';

import {
  BlogPostingSchema,
  BlogBreadcrumbSchema,
  BlogHowToSchema,
} from '@/components/sections/blogs/seo/BlogSchemas';

import { getBlogBySlug, BLOGS } from '@/lib/data/blogs/blogs';

export async function generateStaticParams() {
  return BLOGS.map(blog => ({ slug: blog.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
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
      images: [{ url: blog.featuredImage, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.excerpt,
      images:      [blog.featuredImage],
    },
    alternates: { canonical: `/blogs/${blog.slug}` },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <>
        <Header />
        <main><BlogNotFound /></main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <BlogPostingSchema blog={blog} />
      <BlogBreadcrumbSchema blog={blog} />
      <BlogHowToSchema blog={blog} />

      <Header />

      <main>
        {/* Hero: breadcrumb + title + author + share */}
        <BlogDetailHero blog={blog} />

        {/* Main content + sticky TOC sidebar */}
        <BlogDetailLayout blog={blog} />
      </main>

      <Footer />

      {/* Sticky left CTA tab — appears fixed on left edge */}
      <StickyLeftCTA />

    </>
  );
}