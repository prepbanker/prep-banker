// PATH: app/author/[name]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { authors } from '@/lib/data/authors';
import { ArrowLeft, BookOpen, Award, CheckCircle } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return [
    { name: 'yashraj-deshmukh' },
    { name: 'divya-bhosale' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const author = authors[name];

  if (!author) {
    return {
      title: 'Author Not Found | PrepBanker',
      description: 'The requested author profile does not exist.',
    };
  }

  return {
    title: `${author.name} - Profile & Articles | PrepBanker`,
    description: `Read the profile, background, and published banking exam preparation articles by ${author.name} on PrepBanker.`,
    alternates: {
      canonical: `https://prepbanker.com/author/${name}`,
    },
  };
}

export default async function AuthorProfilePage({ params }: PageProps) {
  const { name } = await params;
  const author = authors[name];

  if (!author) {
    notFound();
  }

  const isAuthor = author.role === 'author';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Exams', href: '/exams' },
          { name: author.name, href: `/author/${name}` },
        ]}
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
              
              {/* Profile Image / Styled Initials placeholder */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs">
                {author.avatar ? (
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-black text-3xl bg-amber-50 text-[var(--color-gold)]">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              {/* Identity & Contact Details */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-[var(--color-blue)]">
                  {isAuthor ? 'Verified Author' : 'Subject Matter Expert'}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {author.name}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-slate-500 leading-snug">
                  {author.title}
                </p>

                {author.linkedin && (
                  <div className="pt-2">
                    <a
                      href={author.linkedin}
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

            {/* Quick credentials details */}
            <div className="border-t border-slate-100 pt-6 mt-6 flex items-start gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
              <Award className="text-[var(--color-blue)] shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Experience & Credentials</h4>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed mt-1">{author.background}</p>
              </div>
            </div>

            {/* Detailed Bio */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Biography</h3>
              <p className="text-sm sm:text-base text-slate-655 leading-relaxed font-normal">{author.bio}</p>
            </div>
          </div>

          {/* List of Articles/Guides Section */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen size={20} className="text-[var(--color-blue)]" />
              <span>Articles & Guides {isAuthor ? 'Written' : 'Reviewed'} by {author.name.split(' ')[0]}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {author.articles.map((article, idx) => (
                <Link
                  key={idx}
                  href={article.href}
                  className="bg-white border border-slate-200 hover:border-[var(--color-blue)]/30 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all group flex flex-col justify-between items-start no-underline"
                >
                  <div className="space-y-2 w-full">
                    <span className="inline-flex px-2 py-0.5 rounded text-[9px] font-black bg-slate-100 text-slate-500 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-905 group-hover:text-[var(--color-blue)] transition-colors leading-snug">
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-blue)] mt-6">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span>{isAuthor ? 'Verified Content' : 'Reviewed & Approved'}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
