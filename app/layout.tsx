// PATH: app/layout.tsx
import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

// ─────────────────────────────────────────
// SEO — Root Metadata
// ─────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://prepbanker.com'),
  title: {
    default: 'PrepBanker – #1 Banking Exam Preparation Platform | SBI PO & IBPS PO',
    template: '%s | PrepBanker',
  },
  description:
    'Prepare for SBI PO and IBPS PO with PrepBanker – India\'s most trusted banking exam platform. Full mock tests, live exams, daily current affairs, performance analytics, and expert guidance.',
  keywords: [
    'SBI PO preparation', 'IBPS PO mock test', 'banking exam preparation',
    'SBI PO 2026', 'IBPS PO 2026', 'banking mock tests online',
    'current affairs banking', 'live banking exam', 'PrepBanker',
  ],
  authors: [{ name: 'PrepBanker Team', url: 'https://prepbanker.com' }],
  creator: 'PrepBanker',
  publisher: 'PrepBanker',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prepbanker.com',
    siteName: 'PrepBanker',
    title: 'PrepBanker – #1 Banking Exam Preparation Platform',
    description:
      'Full mock tests, live exams, current affairs, and analytics for SBI PO & IBPS PO aspirants.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PrepBanker – Banking Exam Preparation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrepBanker – #1 Banking Exam Preparation Platform',
    description: 'Prepare for SBI PO & IBPS PO with India\'s most comprehensive banking prep platform.',
    images: ['/og-image.png'],
    creator: '@prepbanker',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: 'https://prepbanker.com' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1B3E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts – Playfair Display + Source Sans 3 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PrepBanker',
              url: 'https://prepbanker.com',
              logo: 'https://prepbanker.com/logo.png',
              description: 'India\'s leading banking exam preparation platform for SBI PO and IBPS PO.',
              sameAs: [
                'https://twitter.com/prepbanker',
                'https://www.facebook.com/prepbanker',
                'https://www.instagram.com/prepbanker',
              ],
              contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@prepbanker.com' },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}