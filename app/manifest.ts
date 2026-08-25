// PATH: app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PrepBanker',
    short_name: 'PrepBanker',
    description: 'PrepBanker is a specialized banking exam preparation platform offering structured study guides, detailed exam analysis, and mock tests for SBI PO and IBPS PO candidates.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D1B3E',
    theme_color: '#0D1B3E',
    lang: 'en-IN',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
