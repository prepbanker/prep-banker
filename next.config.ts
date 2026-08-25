import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Image Optimization ──────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: 'https', hostname: 'prepbanker.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // ── Performance ─────────────────────────
  compress: true,
  poweredByHeader: false,

  // ── Security Headers ─────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection',          value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com;",
              "img-src 'self' data: *.google-analytics.com;",
              "style-src 'self' 'unsafe-inline';",
              "font-src 'self' data:;",
              "connect-src 'self' *.google-analytics.com *.analytics.google.com;",
              "frame-ancestors 'self';",
              "report-uri /api/csp-report;"
            ].join(' ')
          }
        ],
      },
      // 1. Long Cache: Exam Guide and general static pages (changes rarely)
      {
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(about|contact|pricing|privacy|terms|exams|banking-exams|editorial-policy|glossary|data|previous-year-papers|llms.txt)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(sbi-po|ibps-po)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/(sbi-po|ibps-po)/:section',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      // 2. Short Cache: Current Affairs, Quiz listings, and Blogs (changes daily)
      {
        source: '/(current-affairs|blogs|sbi-po-quiz|ibps-po-quiz)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=600, stale-while-revalidate=3600' },
        ],
      },
      {
        source: '/current-affairs/:id',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=600, stale-while-revalidate=3600' },
        ],
      },
      {
        source: '/blogs/:slug',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=600, stale-while-revalidate=3600' },
        ],
      },
      // 3. Uncached / Dynamic: Interactive Mock Test Interface, Live tests, and Quiz plays (private data)
      {
        source: '/quiz',
        headers: [
          { key: 'Cache-Control', value: 'private, no-cache, no-store, must-revalidate, max-age=0' },
        ],
      },
      {
        source: '/live-tests',
        headers: [
          { key: 'Cache-Control', value: 'private, no-cache, no-store, must-revalidate, max-age=0' },
        ],
      },
      {
        source: '/quiz/practice/:path*',
        headers: [
          { key: 'Cache-Control', value: 'private, no-cache, no-store, must-revalidate, max-age=0' },
        ],
      },
      {
        // Long-lived cache for static assets
        source: '/(_next/static|fonts|images)/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ── Redirects ────────────────────────────
  async redirects() {
    return [
      // Redirect www.prepbanker.com to prepbanker.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.prepbanker.com',
          },
        ],
        destination: 'https://prepbanker.com/:path*',
        permanent: true,
      },
      // Redirect old slug patterns to canonical
      { source: '/home', destination: '/', permanent: true },
      { source: '/sbi-po-ibps-po-quiz', destination: '/sbi-po-quiz', permanent: true },
      { source: '/sbi-po-previous-year-question-papers', destination: '/sbi-po/previous-year-papers', permanent: true },
      { source: '/ibps-po-previous-year-question-papers', destination: '/ibps-po/previous-year-papers', permanent: true },
    ];
  },

  // ── Experimental ────────────────────────
  experimental: {
    optimizePackageImports: ['@/components'],
    cpus: 2,
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;