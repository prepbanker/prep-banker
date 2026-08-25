// PATH: app/authors/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { authors } from '@/lib/data/authors';
import { BLOGS } from '@/lib/data/blogs/blogs';
import { ArrowLeft, BookOpen, Award, CheckCircle, GraduationCap, FileCheck } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(authors).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = authors[slug];

  if (!author) {
    return {
      title: 'Author Not Found',
      description: 'The requested author profile does not exist.',
    };
  }

  return {
    title: `${author.name} - Profile & Articles`,
    description: `Read the profile, background, credentials and published/reviewed articles by ${author.name} on PrepBanker.`,
    alternates: {
      canonical: `https://prepbanker.com/authors/${slug}`,
    },
  };
}

export default async function AuthorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const author = authors[slug];

  if (!author) {
    notFound();
  }

  // 1. Resolve written articles (exams + blogs written by this author)
  const writtenBlogs = BLOGS.filter(b => 
    b.author.id === slug || 
    (slug === 'riya-sharma' && b.author.id === 'riya') || 
    (slug === 'arjun-mehta' && b.author.id === 'arjun') || 
    (slug === 'priya-nair' && b.author.id === 'priya') || 
    (slug === 'vikram-singh' && b.author.id === 'vikram')
  );

  const writtenExams = author.articles || [];
  const allWrittenArticles = [
    ...writtenExams,
    ...writtenBlogs.map(b => ({
      title: b.title,
      href: `/blogs/${b.slug}`,
      category: b.category
    }))
  ];

  // 2. Resolve reviewed pages (mainly for Divya Bhosale)
  const reviewedPages = slug === 'divya-bhosale' ? [
    { title: 'SBI PO 2026 Complete Guide', href: '/sbi-po', category: 'SBI PO' },
    { title: 'SBI PO Notification', href: '/sbi-po/notification', category: 'SBI PO' },
    { title: 'SBI PO Admit Card', href: '/sbi-po/admit-card', category: 'SBI PO' },
    { title: 'SBI PO Vacancy', href: '/sbi-po/vacancy', category: 'SBI PO' },
    { title: 'SBI PO Syllabus', href: '/sbi-po/syllabus', category: 'SBI PO' },
    { title: 'SBI PO Important Dates', href: '/sbi-po/important-dates', category: 'SBI PO' },
    { title: 'SBI PO Cut Off', href: '/sbi-po/cut-off', category: 'SBI PO' },
    { title: 'SBI PO Exam Pattern', href: '/sbi-po/exam-pattern', category: 'SBI PO' },
    { title: 'SBI PO Eligibility', href: '/sbi-po/eligibility', category: 'SBI PO' },
    { title: 'SBI PO Selection Process', href: '/sbi-po/selection-process', category: 'SBI PO' },
    { title: 'SBI PO Salary', href: '/sbi-po/salary', category: 'SBI PO' },
    { title: 'SBI PO Mock Tests', href: '/sbi-po/mock-tests', category: 'SBI PO' },
    { title: 'SBI PO English Tests', href: '/sbi-po/english-tests', category: 'SBI PO' },
    { title: 'SBI PO Quant Tests', href: '/sbi-po/quant-tests', category: 'SBI PO' },
    { title: 'SBI PO Reasoning Tests', href: '/sbi-po/reasoning-tests', category: 'SBI PO' },
    { title: 'SBI PO Study Plan', href: '/sbi-po/study-plan', category: 'SBI PO' },
    { title: 'SBI PO Previous Year Papers', href: '/sbi-po/previous-year-papers', category: 'SBI PO' },
    { title: 'IBPS PO 2026 Complete Guide', href: '/ibps-po', category: 'IBPS PO' },
    { title: 'IBPS PO Notification', href: '/ibps-po/notification', category: 'IBPS PO' },
    { title: 'IBPS PO Admit Card', href: '/ibps-po/admit-card', category: 'IBPS PO' },
    { title: 'IBPS PO Vacancy', href: '/ibps-po/vacancy', category: 'IBPS PO' },
    { title: 'IBPS PO Syllabus', href: '/ibps-po/syllabus', category: 'IBPS PO' },
    { title: 'IBPS PO Important Dates', href: '/ibps-po/important-dates', category: 'IBPS PO' },
    { title: 'IBPS PO Cut Off', href: '/ibps-po/cut-off', category: 'IBPS PO' },
    { title: 'IBPS PO Exam Pattern', href: '/ibps-po/exam-pattern', category: 'IBPS PO' },
    { title: 'IBPS PO Eligibility', href: '/ibps-po/eligibility', category: 'IBPS PO' },
    { title: 'IBPS PO Selection Process', href: '/ibps-po/selection-process', category: 'IBPS PO' },
    { title: 'IBPS PO Salary', href: '/ibps-po/salary', category: 'IBPS PO' },
    { title: 'IBPS PO Mock Tests', href: '/ibps-po/mock-tests', category: 'IBPS PO' },
    { title: 'IBPS PO English Tests', href: '/ibps-po/english-tests', category: 'IBPS PO' },
    { title: 'IBPS PO Quant Tests', href: '/ibps-po/quant-tests', category: 'IBPS PO' },
    { title: 'IBPS PO Reasoning Tests', href: '/ibps-po/reasoning-tests', category: 'IBPS PO' },
    { title: 'IBPS PO Study Plan', href: '/ibps-po/study-plan', category: 'IBPS PO' },
    { title: 'IBPS PO Previous Year Papers', href: '/ibps-po/previous-year-papers', category: 'IBPS PO' },
  ] : [];

  // Person schema with sameAs and self-referencing canonical
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://prepbanker.com/authors/${slug}#person`,
    name: author.name,
    jobTitle: author.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: 'PrepBanker',
      url: 'https://prepbanker.com',
    },
    url: `https://prepbanker.com/authors/${slug}`,
    image: `https://prepbanker.com${author.photo}`,
    description: author.bio,
    sameAs: author.linkedinUrl ? [author.linkedinUrl] : [],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Exams', href: '/exams' },
          { name: author.name, href: `/authors/${slug}` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Header />

      <main className="bg-slate-50/50 min-h-screen py-12 sm:py-16 font-sans">
        <div className="container-custom max-w-4xl space-y-8">
          
          {/* Back button */}
          <div>
            <Link
              href="/exams"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:text-[var(--color-navy)] bg-white border border-slate-200 rounded-xl hover:shadow-xs transition-all no-underline"
            >
              <ArrowLeft size={14} />
              <span>Back to Exams</span>
            </Link>
          </div>

          {/* Profile Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 relative overflow-hidden">
            {/* Background design pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-bl-full pointer-events-none -z-10" />

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              
              {/* Profile Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs">
                {slug === 'yashraj-deshmukh' ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={author.photo}
                      alt={author.name}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400">
                    <svg className="w-12 h-12 text-slate-350" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Identity & Contact Details */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-[var(--color-blue)]">
                  {author.role === 'author' ? 'Verified Author' : 'Subject Matter Expert'}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {author.name}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-slate-500 leading-snug">
                  {author.jobTitle}
                </p>

                {author.linkedinUrl && (
                  <div className="pt-2">
                    <a
                      href={author.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0077B5] hover:bg-[#006297] transition-all no-underline shadow-sm hover:shadow"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6 mt-6">

              <div className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <FileCheck className="text-[var(--color-blue)] shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Banking Exam Record</div>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed mt-1">{author.bankingExamRecord}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <BookOpen className="text-[var(--color-blue)] shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subjects Covered</div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {author.subjectsCovered.map((subject, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-md text-[10px] font-bold text-slate-600">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Bio */}
            <div className="space-y-3 pt-4">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Biography</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{author.bio}</p>
            </div>
          </div>

          {/* List of Written Articles/Guides Section */}
          {allWrittenArticles.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <BookOpen size={20} className="text-[var(--color-blue)]" />
                <span>Written Guides & Articles by {author.name.split(' ')[0]}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allWrittenArticles.map((article, idx) => (
                  <Link
                    key={idx}
                    href={article.href}
                    className="bg-white border border-slate-200 hover:border-[var(--color-blue)]/30 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all group flex flex-col justify-between items-start no-underline"
                  >
                    <div className="space-y-2 w-full">
                      <span className="inline-flex px-2 py-0.5 rounded text-[9px] font-black bg-slate-100 text-slate-500 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-[var(--color-blue)] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-blue)] mt-6">
                      <CheckCircle size={14} className="text-emerald-500" />
                      <span>Verified Article</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* List of Reviewed Pages Section */}
          {reviewedPages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <FileCheck size={20} className="text-[var(--color-blue)]" />
                <span>Pages Reviewed & Verified by {author.name.split(' ')[0]}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reviewedPages.map((article, idx) => (
                  <Link
                    key={idx}
                    href={article.href}
                    className="bg-white border border-slate-200 hover:border-[var(--color-blue)]/30 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all group flex flex-col justify-between items-start no-underline"
                  >
                    <div className="space-y-2 w-full">
                      <span className="inline-flex px-2 py-0.5 rounded text-[9px] font-black bg-slate-100 text-slate-500 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-[var(--color-blue)] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-blue)] mt-6">
                      <CheckCircle size={14} className="text-emerald-500" />
                      <span>SME Reviewed & Approved</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
