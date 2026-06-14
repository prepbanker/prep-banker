import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/current-affairs/',
        '/blogs/',
      ],
    },
    sitemap: 'https://prepbanker.com/sitemap.xml',
  };
}
