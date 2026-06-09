import { MetadataRoute } from 'next';
import { BLOGS } from '@/lib/data/blogs/blogs';
import { CA_ARTICLES } from '@/lib/data/current-affairs/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prepbanker.com';

  // 1. Static & Main Pages
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/exams`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/live-tests`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/quiz`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/current-affairs`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
  ];

  // 2. Exam Pages
  const exams = ['sbi-po', 'ibps-po'];
  const examPages = exams.map(examId => ({
    url: `${baseUrl}/${examId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Exam Detail Subsections
  const SECTIONS = ['eligibility', 'syllabus', 'exam-pattern', 'salary', 'cut-offs', 'dates', 'strategy'];
  const detailPages: MetadataRoute.Sitemap = [];
  for (const examId of exams) {
    for (const section of SECTIONS) {
      detailPages.push({
        url: `${baseUrl}/${examId}/${section}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  // 4. Blog Posts (Dynamically compiled)
  const blogPages = BLOGS.map(blog => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 5. Current Affairs Articles (Dynamically compiled)
  const caPages = CA_ARTICLES.map(article => ({
    url: `${baseUrl}/current-affairs/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...examPages,
    ...detailPages,
    ...blogPages,
    ...caPages,
  ];
}
