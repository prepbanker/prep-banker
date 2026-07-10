// PATH: components/seo/index.tsx
// ─────────────────────────────────────────
// SEO Helper Components
// ─────────────────────────────────────────

// ── generatePageMeta ─────────────────────
// Use inside page.tsx to generate metadata
export function generatePageMeta({
  title,
  description,
  path = '/',
  ogImage = '/og-image.png',
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}) {
  const url = `https://prepbanker.com${path}`;

  return {
    title,
    description,
    keywords: [
      'PrepBanker', 'banking exam preparation', 'SBI PO', 'IBPS PO',
      'mock tests', 'banking current affairs', ...keywords,
    ],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${title} | PrepBanker`,
      description,
      url,
      siteName: 'PrepBanker',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website' as const,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | PrepBanker`,
      description,
      images: [ogImage],
    },
  };
}

// ── BreadcrumbSchema ─────────────────────
export function BreadcrumbSchema({ items }: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://prepbanker.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── ProductSchema ────────────────────────
export function ProductSchema({
  name = 'PrepBanker – Banking Exam Preparation Platform',
  description = "India's most trusted banking exam preparation platform for SBI PO and IBPS PO aspirants.",
  url = 'https://prepbanker.com',
  price = '0',
  currency = 'INR',
  ratingValue = '4.8',
  reviewCount = '8000',
}: {
  name?: string;
  description?: string;
  url?: string;
  price?: string;
  currency?: string;
  ratingValue?: string;
  reviewCount?: string;
} = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    brand: { '@type': 'Brand', name: 'PrepBanker' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price,
      availability: 'https://schema.org/InStock',
      description: price === '0' ? 'Free mock tests available. Premium plans from ₹199/month.' : `Get premium access for ${currency} ${price}.`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebsiteSchema ────────────────────────
export function WebsiteSchema({
  name = 'PrepBanker',
  url = 'https://prepbanker.com',
  description = "India's Number 1 Banking Exam Preparation Platform for SBI PO and IBPS PO",
}: {
  name?: string;
  url?: string;
  description?: string;
} = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── FAQSchema ────────────────────────────
export function FAQSchema({ items }: {
  items: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebPageSchema ────────────────────────
export function WebPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'PrepBanker',
      url: 'https://prepbanker.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── CourseSchema ─────────────────────────
export function CourseSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'PrepBanker',
      sameAs: 'https://prepbanker.com',
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── ArticleSchema ────────────────────────
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  authorName = 'Yashraj Deshmukh',
  authorUrl = 'https://prepbanker.com/author/yashraj-deshmukh',
  authorImage = 'https://prepbanker.com/images/profile/yashraj-deshmukh.jpeg',
  reviewerName = 'Divya Bhosale',
  reviewerUrl = 'https://prepbanker.com/author/divya-bhosale',
  publisherName = 'PrepBanker',
  publisherLogoUrl = 'https://prepbanker.com/logo.png',
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  authorName?: string;
  authorUrl?: string;
  authorImage?: string;
  reviewerName?: string;
  reviewerUrl?: string;
  publisherName?: string;
  publisherLogoUrl?: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline,
    description,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: authorImage,
    },
    reviewedBy: {
      '@type': 'Person',
      name: reviewerName,
      url: reviewerUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogoUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── AuthorPersonSchema ───────────────────
export function AuthorPersonSchema() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://prepbanker.com/author/yashraj-deshmukh#person',
      name: 'Yashraj Deshmukh',
      jobTitle: 'Senior Content Manager – Banking Exams',
      worksFor: {
        '@type': 'Organization',
        name: 'PrepBanker',
        url: 'https://prepbanker.com'
      },
      url: 'https://prepbanker.com/author/yashraj-deshmukh',
      image: 'https://prepbanker.com/images/profile/yashraj-deshmukh.jpeg',
      sameAs: [
        'https://www.linkedin.com/in/yashraj-deshmukh2409'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://prepbanker.com/author/divya-bhosale#person',
      name: 'Divya Bhosale',
      jobTitle: 'Subject Matter Expert, Quantitative Aptitude',
      worksFor: {
        '@type': 'Organization',
        name: 'PrepBanker',
        url: 'https://prepbanker.com'
      },
      url: 'https://prepbanker.com/author/divya-bhosale'
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── ItemListSchema ───────────────────────
export function ItemListSchema({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}