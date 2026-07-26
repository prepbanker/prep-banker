import { MetadataRoute } from 'next';

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
    { url: `${baseUrl}/sbi-po-quiz`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/ibps-po-quiz`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/previous-year-papers`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
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
  const SECTIONS = [
    'notification',
    'admit-card',
    'vacancy',
    'syllabus',
    'important-dates',
    'cut-off',
    'exam-pattern',
    'eligibility',
    'selection-process',
    'salary',
    'mock-tests',
    'english-tests',
    'quant-tests',
    'reasoning-tests',
    'comparison',
    'study-plan'
  ];
  const detailPages: MetadataRoute.Sitemap = [];
  for (const examId of exams) {
    for (const section of SECTIONS) {
      let finalSection = section;
      if (examId === 'sbi-po' && section === 'comparison') {
        finalSection = 'sbi-po-vs-ibps-po';
      }
      detailPages.push({
        url: `${baseUrl}/${examId}/${finalSection}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  return [
    ...staticPages,
    ...examPages,
    ...detailPages,
  ];
}
