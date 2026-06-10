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
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-XSS-Protection',          value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
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
      // Redirect old slug patterns to canonical
      { source: '/home', destination: '/', permanent: true },
    ];
  },

  // ── Experimental ────────────────────────
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;