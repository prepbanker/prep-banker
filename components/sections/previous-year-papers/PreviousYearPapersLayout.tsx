// PATH: components/sections/previous-year-papers/PreviousYearPapersLayout.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  FileText,
  Lock,
  Download,
  ArrowRight,
  ArrowDown,
  Search,
  ChevronLeft,
  ChevronRight
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
  // Extract unique years from the papers array for year dropdown
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(papers.map((p) => p.year)));
    return years.sort((a, b) => b - a);
  }, [papers]);

  const [yearFilter, setYearFilter] = useState<number | 'All'>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const papersPerPage = 5;
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

  // Reset page to 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [yearFilter]);

  // Filter papers based on current selector dropdown
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      if (yearFilter !== 'All' && paper.year !== yearFilter) return false;
      return true;
    });
  }, [papers, yearFilter]);

  // Paginated papers array
  const totalPages = Math.max(1, Math.ceil(filteredPapers.length / papersPerPage));
  const paginatedPapers = useMemo(() => {
    const startIndex = (currentPage - 1) * papersPerPage;
    return filteredPapers.slice(startIndex, startIndex + papersPerPage);
  }, [filteredPapers, currentPage, papersPerPage]);

  // Authentic file naming helper matching sscdrishti.com reference style
  const getPaperFileName = (paper: PYQPaper) => {
    const examPart = paper.exam.replace(/\s+/g, '-');
    const stagePart = paper.stage;
    const yearPart = paper.year;
    const shiftPart = paper.shift ? paper.shift.replace(/\s+/g, '-') : 'Official-Paper';
    return `${examPart}-${stagePart}-Question-Paper-${yearPart}-${shiftPart}`;
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
                  href="https://app.prepgrind.com/signup/banking"
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

          {/* Screenshot Title and Quiz Button Row */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-base sm:text-lg font-bold text-[var(--color-navy)] font-display">
              Choose Subject for PYQ PDF
            </h2>
            <a
              href="https://app.prepgrind.com/signup/banking"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#2D3E6B] hover:bg-[#1E2B50] text-white text-xs font-bold rounded transition-colors"
            >
              Go to PYQ Quiz
            </a>
          </div>

          {/* Main Card Wrapper (Full Width) */}
          <div className="bg-white border border-[#DFE5EE] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(13,27,62,0.02)] w-full">

            {/* Year Selector Row inside the card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
              <span className="text-sm font-bold text-[var(--color-navy)]">Select Year</span>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                className="px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 transition-all cursor-pointer shadow-xs min-w-[160px]"
              >
                <option value="All">All Years</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {examName} {year}
                  </option>
                ))}
              </select>
            </div>

            {/* List block matching sscdrishti.com reference exactly */}
            <div className="border border-[#DFE5EE] rounded-lg overflow-hidden divide-y divide-[#DFE5EE]">
              {paginatedPapers.length === 0 ? (
                <div className="bg-white p-12 text-center">
                  <div className="text-sm font-bold text-slate-500">No papers found for the selected year.</div>
                </div>
              ) : (
                paginatedPapers.map((paper) => {
                  const fileName = getPaperFileName(paper);
                  const displayTitle = `${paper.exam} ${paper.stage} ${paper.year} ${paper.shift ? `– ${paper.shift}` : ''}`;
                  return (
                    <div
                      key={paper.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-5 bg-[#F2F6FC]/60 hover:bg-[#EAF0F9] transition-colors gap-4"
                    >
                      {/* Left: Hyphenated File Name */}
                      <span className="text-xs sm:text-sm font-bold text-[#3E4E7C] tracking-tight leading-normal break-all">
                        {fileName}
                      </span>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        {paper.locked ? (
                          <>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold border border-slate-200">
                              <Lock className="w-3.5 h-3.5" />
                              Locked
                            </span>
                            <a
                              href="https://app.prepgrind.com/signup/banking"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 text-xs font-bold bg-[#2D3E6B] hover:bg-[#1E2B50] text-white rounded transition-colors shadow-xs"
                            >
                              Unlock Free
                            </a>
                          </>
                        ) : (
                          <button
                            onClick={() => handleOpenPdf(paper.pdfPath || '/pdfs/pyp.pdf', displayTitle)}
                            className="flex items-center justify-center gap-1.5 px-6 py-3 rounded bg-[#2D3E6B] hover:bg-[#1E2B50] text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5 text-white" />
                            Download PDF
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Numbered Pagination (only if more than 1 page) */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer bg-white"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded text-xs font-bold transition-all duration-200 cursor-pointer ${currentPage === page
                        ? 'bg-[#2D3E6B] text-white shadow-xs'
                        : 'border border-slate-200 text-slate-650 hover:bg-slate-100 bg-white'
                      }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer bg-white"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

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
            <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
              Want to practice these papers in real exam mode?
            </h2>
            <p className="text-white/95 text-xs sm:text-sm mt-1 leading-relaxed">
              Attempt PYQ-based mock tests, get detailed performance analytics & live rankings — completely free on PrepGrind.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <a
              href="https://app.prepgrind.com/signup/banking"
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
                <div className="text-sm sm:text-base font-extrabold tracking-tight truncate max-w-[200px] sm:max-w-md">
                  {selectedPdf.title}
                </div>
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
