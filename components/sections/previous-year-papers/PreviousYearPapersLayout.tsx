// PATH: components/sections/previous-year-papers/PreviousYearPapersLayout.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  FileText,
  Lock,
  Download,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import FAQSection from '@/components/shared/FAQSection';

export type PYQPaper = {
  id: string;
  exam: 'SBI PO' | 'IBPS PO';
  year: number;
  stage: 'Prelims' | 'Mains';
  shift?: string;
  totalQuestions: number;
  totalMarks: number;
  duration: string;
  locked: boolean;
  pdfPath?: string;
};

interface PreviousYearPapersLayoutProps {
  examName: 'SBI PO' | 'IBPS PO';
  papers: PYQPaper[];
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  quickFacts?: { label: string; value: string | React.ReactNode }[]; // Kept for interface compatibility but not rendered
  faqs: { question: string; answer: string }[];
  children?: React.ReactNode; // The rich article content
}

export default function PreviousYearPapersLayout({
  examName,
  papers,
  heroTitle,
  heroSubtitle,
  faqs,
  children
}: PreviousYearPapersLayoutProps) {
  const [stageFilter, setStageFilter] = useState<'All' | 'Prelims' | 'Mains'>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  // Lock scroll when PDF viewer modal is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPdf]);

  const handleOpenPdf = (url: string, title: string) => {
    setSelectedPdf({ url, title });
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  // Filter papers by stage (Prelims / Mains)
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      if (stageFilter === 'All') return true;
      return paper.stage === stageFilter;
    });
  }, [papers, stageFilter]);

  // Reset pagination when filter changes
  const handleFilterChange = (filter: 'All' | 'Prelims' | 'Mains') => {
    setStageFilter(filter);
    setVisibleCount(6);
  };

  const visiblePapers = useMemo(() => {
    return filteredPapers.slice(0, visibleCount);
  }, [filteredPapers, visibleCount]);

  const hasMore = filteredPapers.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredPapers.length));
  };

  // Derive stats for hero cards
  const stats = useMemo(() => {
    const years = Array.from(new Set(papers.map(p => p.year)));
    const uniqueYearsCount = years.length;
    const stagesText = "Prelims & Mains";
    return [
      { value: `${uniqueYearsCount} Years`, label: 'Papers Archive' },
      { value: `${papers.length}+`, label: 'Shifts & Stages' },
      { value: stagesText, label: 'Exam Levels' },
      { value: 'Free PDF', label: 'Detailed Solutions' }
    ];
  }, [papers]);

  return (
    <div className="bg-white text-[var(--color-navy)] min-h-screen font-sans">
      
      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white pt-8 pb-12 sm:pb-16">
        
        {/* Decorative background blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Previous Year Papers', href: '/previous-year-papers' },
              { label: `${examName} Papers` },
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-6">
            
            {/* Left Column: Copy info */}
            <div className="flex-1 max-w-3xl">
              {/* Eyebrow badge */}
              <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200">
                <FileText className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  {examName} Previous Year Question Papers
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-extrabold leading-tight text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                }}
              >
                {heroTitle}
              </h1>

              {/* Subheadline */}
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://app.prepgrind.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-yellow)] text-[var(--color-navy-deep)] text-sm font-extrabold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-center shadow-lg hover:shadow-yellow-500/20"
                  style={{ boxShadow: '0 4px 20px rgba(251,191,36,0.25)' }}
                >
                  Start Free Mock Test →
                </a>
                <a
                  href="#papers-list"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 hover:text-white transition-colors py-2"
                >
                  See All Papers
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-3 max-w-sm sm:max-w-none mx-auto lg:mx-0 min-w-[280px]">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start p-4 rounded-xl border"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <p className="text-xl font-black text-[var(--color-gold-bright)] leading-none mb-1.5">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-slate-400 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PYQ Listing Section ─────────────────────────────────── */}
      <section id="papers-list" className="bg-slate-50 py-16 scroll-mt-20">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Download {examName} Question Papers
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-blue)] mx-auto mt-3 rounded-full" />
            <p className="text-[var(--color-gray-600)] text-sm mt-3">
              Practice official papers stage-wise to understand actual questions, time management, and topic distribution.
            </p>
          </div>

          {/* Tab / Stage Filter */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-200/60 border border-slate-300/40 p-1.5 rounded-xl flex gap-1">
              {(['All', 'Prelims', 'Mains'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    stageFilter === filter
                      ? 'bg-white text-[var(--color-navy-deep)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {filter === 'All' ? 'All Stages' : `${filter} Only`}
                </button>
              ))}
            </div>
          </div>

          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
            
            {/* Left Column: Row-wise List View (Compact spacing) */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {visiblePapers.map((paper) => {
                const displayTitle = `${paper.exam} ${paper.stage} ${paper.year} ${paper.shift ? `– ${paper.shift}` : ''}`;
                return (
                  <div
                    key={paper.id}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between py-3.5 px-5 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-[0_4px_16px_rgba(13,27,62,0.03)] hover:border-slate-305 ${
                      paper.locked ? 'border-l-4 border-slate-350' : 'border-l-4 border-green-600'
                    }`}
                    style={{
                      borderLeftWidth: '4px',
                      borderLeftStyle: 'solid',
                      borderLeftColor: paper.locked ? '#CBD5E1' : '#16A34A'
                    }}
                  >
                    {/* Left details */}
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        {/* Compact Badge pills */}
                        <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50/70 border border-blue-100/50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                          {paper.year}
                        </span>
                        <span className="text-[9px] font-extrabold text-amber-600 bg-amber-50/70 border border-amber-100/50 px-1.5 py-0.5 rounded uppercase tracking-wide">
                          {paper.stage}
                        </span>
                        {paper.shift && (
                          <span className="text-[9px] font-extrabold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded uppercase tracking-wide">
                            {paper.shift}
                          </span>
                        )}
                        {/* Title */}
                        <h4 className="text-sm sm:text-base font-bold text-[var(--color-navy)] truncate leading-tight ml-1">
                          {paper.exam} {paper.stage} {paper.year}
                        </h4>
                      </div>

                      {/* Stats meta */}
                      <p className="text-[11px] text-slate-400 font-semibold flex items-center gap-1.5 mt-1">
                        <span>{paper.totalQuestions} Questions</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>{paper.totalMarks} Marks</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>{paper.duration}</span>
                      </p>
                    </div>

                    {/* Actions Right */}
                    <div className="mt-3 sm:mt-0 flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {paper.locked ? (
                        <>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-150">
                            <Lock className="w-3 h-3" />
                            Locked
                          </span>
                          <a
                            href="https://app.prepgrind.com/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 text-xs font-bold bg-[var(--color-navy)] hover:bg-[var(--color-blue)] text-white rounded-lg transition-all duration-200 flex items-center gap-1 shadow-sm"
                          >
                            Unlock Free
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </>
                      ) : (
                        <button
                          onClick={() => handleOpenPdf(paper.pdfPath || '/pdfs/pyp.pdf', displayTitle)}
                          className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download PDF
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-6">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-2.5 text-xs font-bold text-slate-700 bg-transparent border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    Load More Papers
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Registration CTA Card */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <div
                className="bg-gradient-to-br from-[var(--color-navy-deep)] to-[var(--color-navy-mid)] text-white p-6 rounded-2xl border border-white/10 shadow-[0_12px_36px_rgba(7,16,42,0.15)]"
              >
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-[var(--color-gold-bright)] text-xl font-bold">
                  🎯
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">Register Free</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Get access to all {examName} Previous Year Papers
                </p>
                <ul className="mt-5 space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--color-gold-bright)] font-bold">✔</span> Download all PDFs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--color-gold-bright)] font-bold">✔</span> Track progress
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--color-gold-bright)] font-bold">✔</span> Get exam updates
                  </li>
                </ul>
                <a
                  href="https://app.prepgrind.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 w-full text-center py-3 bg-[var(--color-yellow)] hover:bg-amber-500 text-[var(--color-navy-deep)] text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-yellow-500/10 cursor-pointer"
                >
                  Register Now
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Main Editorial SEO Content Area ────────────────────── */}
      {children && (
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="container-custom">
            <div className="w-full">
              
              {/* Rich Text Body */}
              <div className="prose prose-slate max-w-none text-[var(--color-navy)] text-sm sm:text-base leading-relaxed space-y-6">
                {children}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ─── Mid-page CTA Conversion Banner ─────────────────────── */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-12 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-black rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-base mb-2">
              🎯
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
              Want to practice these papers in real exam mode?
            </h3>
            <p className="text-white/95 text-xs sm:text-sm mt-1 leading-relaxed">
              Attempt PYQ-based mock tests, get detailed performance analytics & live rankings — completely free on PrepGrind.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-[#07102A] text-white text-xs font-extrabold hover:bg-black transition-colors block text-center shadow-lg"
            >
              Start Practicing Free →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─────────────────────────────────────────── */}
      <FAQSection
        items={faqs}
        dark={false}
        label={`${examName} FAQs`}
        title="Frequently Asked Questions"
        subtitle={`Have questions about PrepBanker's ${examName} Previous Year Papers? Find answers here.`}
      />

      {/* ─── PDF Viewer Modal ────────────────────────────────────── */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop blur overlay */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={handleClosePdf}
          />

          {/* Modal Container */}
          <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[var(--color-navy-deep)] text-white border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[var(--color-gold-bright)]" />
                <h3 className="text-sm sm:text-base font-extrabold tracking-tight truncate max-w-[200px] sm:max-w-md">
                  {selectedPdf.title}
                </h3>
              </div>
              <button
                onClick={handleClosePdf}
                aria-label="Close PDF Viewer"
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-350 hover:text-white transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Body / PDF Viewer Frame */}
            <div className="flex-1 w-full h-full bg-slate-100 relative">
              <iframe
                src={`${selectedPdf.url}#toolbar=0`}
                className="w-full h-full border-0"
                title={selectedPdf.title}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
