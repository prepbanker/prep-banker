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
export function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PrepBanker – Banking Exam Preparation Platform',
    description: 'India\'s most trusted banking exam preparation platform for SBI PO and IBPS PO aspirants.',
    url: 'https://prepbanker.com',
    brand: { '@type': 'Brand', name: 'PrepBanker' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '8000',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '0',
      availability: 'https://schema.org/InStock',
      description: 'Free mock tests available. Premium plans from ₹199/month.',
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
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://prepbanker.com',
    name: 'PrepBanker',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prepbanker.com/search?q={search_term_string}',
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