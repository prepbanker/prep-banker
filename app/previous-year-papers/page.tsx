// PATH: app/previous-year-papers/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { FileText, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Banking Exam Previous Year Question Papers',
  description:
    'Download previous year question papers for SBI PO and IBPS PO. Access year-wise prelims & mains question papers with detailed solutions and exam analysis.',
  alternates: {
    canonical: 'https://prepbanker.com/previous-year-papers',
  },
};

export default function PreviousYearPapersHubPage() {
  const categories = [
    {
      exam: 'SBI PO',
      title: 'SBI PO Previous Year Papers',
      years: '2016 – 2025',
      badge: '1,500 Vacancies',
      badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      description:
        'Download memory-based question papers for SBI PO Prelims & Mains. Complete with detailed logical and quantitative step-by-step explanations.',
      href: '/sbi-po/previous-year-papers',
      colorTheme: 'hover:border-blue-500/50 hover:shadow-blue-500/5',
      accentColor: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      highlights: [
        'Prelims & Mains Reconstructions',
        'Official Answer Key Alignments',
        'Step-by-step toppers shortcut tips',
      ],
    },
    {
      exam: 'IBPS PO',
      title: 'IBPS PO Previous Year Papers',
      years: '2016 – 2025',
      badge: '7,365 Vacancies',
      badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      description:
        'Access shift-wise solved papers representing the 11 public sector banks. Identify structural changes and credit/verbal cutoff patterns.',
      href: '/ibps-po/previous-year-papers',
      colorTheme: 'hover:border-amber-500/50 hover:shadow-amber-500/5',
      accentColor: 'text-amber-500',
      iconBg: 'bg-amber-500/10',
      highlights: [
        '11 Participating Banks Coverage',
        'Fully solved General Awareness archives',
        'Descriptive essay & letter writing formats',
      ],
    },
  ];

  return (
    <div className="bg-slate-50/50 text-[var(--color-navy)] min-h-screen flex flex-col font-sans">
      <Header />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white pt-8 pb-16">
        {/* Background Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Previous Year Papers' },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
              <Sparkles size={12} className="text-[var(--color-gold-bright)]" />
              Solved Exams Database
            </span>

            <h1
              className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-6 font-display"
            >
              Banking Exam Previous Year{' '}<br />
              <span className="text-gold-gradient">Question Papers</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              Master the exact difficulty and question styles directly from candidate-reconstructed shifts. Download free PDF keys with step-by-step topper solutions or practice online in timed mock modes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="container-custom py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {categories.map((cat) => (
            <div
              key={cat.exam}
              className={`bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 ${cat.colorTheme}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-lg border text-xs font-black uppercase ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                  <span className="text-xs font-extrabold text-slate-400 font-mono">
                    Years: {cat.years}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${cat.iconBg} ${cat.accentColor}`}>
                    <FileText size={24} className="stroke-[2.5]" />
                  </div>
                  <h2 className="text-2xl font-black font-display text-slate-900 leading-tight">
                    {cat.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>

                <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                  {cat.highlights.map((hl) => (
                    <li key={hl} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${cat.accentColor}`} />
                      <span className="font-medium">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={cat.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 rounded-2xl text-sm font-black tracking-wide w-full"
              >
                Access {cat.exam} Papers
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-black font-display text-slate-900 mb-4 flex items-center gap-2">
              <Award size={20} className="text-[var(--color-blue)]" />
              Topper Strategy: Why Solve PYQs?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Banking exams are highly speed-dependent. Standard mock tests from random coaching institutes can sometimes carry irrelevant, overly complex questions. PYQs give you the exact baseline calibrated by the official boards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Calibration', desc: 'Verify exact section difficulty and time distributions.' },
              { title: 'GA Trends', desc: 'Identify weightage of current news versus banking awareness.' },
              { title: 'Score Baseline', desc: 'Benchmark your raw mocks against past cutoffs.' },
              { title: 'Syllabus Focus', desc: 'Isolate high-frequency topics that repeat year-on-year.' }
            ].map((benefit, idx) => (
              <div key={benefit.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <span className="text-xs font-black text-slate-400 font-mono mb-3">0{idx + 1}</span>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">{benefit.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
