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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'YOUR_VERIFICATION_CODE',
  },
  other: {
    category: 'Education',
  },
  alternates: { canonical: 'https://prepbanker.com' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1B3E',
};

import StickyBottomCTA from '@/components/shared/StickyBottomCTA';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
              contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'prepbanker@gmail.com' },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C4MJ8ENML7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C4MJ8ENML7');
          `}
        </Script>
        {children}
        <StickyBottomCTA />
      </body>
    </html>
  );
}