// PATH: app/current-affairs/[id]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo';
import { CA_ARTICLES } from '@/lib/data/current-affairs/articles';
import { CA_FAQS } from '@/lib/data/current-affairs/faqs';
import CADetailContentClient from './CADetailContentClient';

export async function generateStaticParams() {
  return CA_ARTICLES.map(art => ({ id: art.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = CA_ARTICLES.find(a => a.id === id);

  if (!article) {
    return {
      title: 'Article Not Found | PrepBanker',
      description: 'Current affairs article not found.'
    };
  }

  return {
    title: `${article.title} | Banking Current Affairs 2026`,
    description: article.summary,
    alternates: {
      canonical: `https://prepbanker.com/current-affairs/${article.id}`
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.date,
      authors: ['PrepBanker Editorial Board']
    }
  };
}

export default async function CurrentAffairsDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find current article
  const articleIndex = CA_ARTICLES.findIndex(a => a.id === id);
  const article = CA_ARTICLES[articleIndex];

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-slate-800">Article Not Found</h1>
            <p className="text-slate-550 text-sm">The requested current affairs update does not exist or has been archived.</p>
            <Link href="/current-affairs" className="inline-block px-4 py-2 bg-[var(--color-blue)] text-white text-xs font-bold rounded-lg">
              Back to Current Affairs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Find next/prev articles
  const prevArticle = articleIndex > 0 ? CA_ARTICLES[articleIndex - 1] : null;
  const nextArticle = articleIndex < CA_ARTICLES.length - 1 ? CA_ARTICLES[articleIndex + 1] : null;

  // Filter similar articles in same category (exclude current)
  const similarArticles = CA_ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Fallback to general articles if none in same category
  const finalSimilar = similarArticles.length > 0 
    ? similarArticles 
    : CA_ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  // Map article keyPoints/facts to FAQ Schema format if available
  const mappedFaqs = CA_FAQS.slice(0, 5); // display general FAQs as article-level SEO enhancement

  return (
    <>
      {/* Dynamic SEO schemas */}
      <BreadcrumbSchema
        items={[
          { name: 'Home',            href: '/' },
          { name: 'Current Affairs', href: '/current-affairs' },
          { name: article.title,     href: `/current-affairs/${article.id}` }
        ]}
      />

      <WebPageSchema
        name={article.title}
        description={article.summary}
        url={`https://prepbanker.com/current-affairs/${article.id}`}
      />

      <FAQSchema items={mappedFaqs} />

      <Header />

      <main className="bg-slate-50/50 min-h-screen">
        <CADetailContentClient 
          article={article} 
          prevArticle={prevArticle} 
          nextArticle={nextArticle} 
          similarArticles={finalSimilar}
          faqs={mappedFaqs}
        />
      </main>

      <Footer />
    </>
  );
}
