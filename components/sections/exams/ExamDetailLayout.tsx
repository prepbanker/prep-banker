// PATH: components/sections/exams/ExamDetailLayout.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ChevronDown,
  Trophy,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExamHero from './ExamHero';
import QuickNavigation from './QuickNavigation';
import ExamAuthorSection from './ExamAuthorSection';
import { getExamData, getDetailedSectionContent } from '@/lib/data/exams/detailContentMap';
import './exam.css';

interface Props {
  examId: string;
  sectionSlug: string;
}

export default function ExamDetailLayout({ examId, sectionSlug }: Props) {
  const exam = getExamData(examId);
  const detail = getDetailedSectionContent(examId, sectionSlug);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!exam || !detail) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
        <Header />
        <div className="max-w-md mx-auto text-center py-20 px-6">
          <h1 className="text-2xl font-bold text-slate-800">Section Not Found</h1>
          <p className="text-slate-500 mt-2">The requested exam details section could not be loaded.</p>
          <Link href="/" className="mt-6 inline-block text-sm text-[var(--color-blue)] font-bold hover:underline">
            Go Back Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Sidebar link normalization for legacy slugs mapping
  const getNormalizedSlug = (slug: string) => {
    if (slug === 'dates') return 'important-dates';
    if (slug === 'cut-offs') return 'cut-off';
    if (slug === 'strategy') return 'study-plan';
    if (slug === 'sbi-po-vs-ibps-po') return 'comparison';
    return slug;
  };
  const activeNormalized = getNormalizedSlug(sectionSlug);
  const visibleSubsections = detail.subsections.filter(
    (sub) => !sub.id.toLowerCase().includes('snapshot')
  );

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans">
      <Header />

      {/* Reusable Hero Section using exams main page layout style (without switcher toggle) */}
      <ExamHero exam={exam} title={detail.title} description={detail.overview} />

      {exam.id === 'ibps-po' && (
        <div className="w-full bg-[#0B0F19] border-t-2 border-amber-500 border-b border-slate-800 sticky top-16 z-40 shadow-sm">
          <div className="container-custom py-4.5">
            <QuickNavigation exam={exam} activeSlug={activeNormalized} />
          </div>
        </div>
      )}

      {/* Main Section Content Wrapper */}
      <div className="container-custom py-6 flex-1 flex flex-col gap-6" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
        
        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Main Area */}
          <main className="space-y-8">
            {/* Intro Header CTA */}
            <div className="py-2">
              <a
                href={detail.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md font-sans"
              >
                <Sparkles size={15} />
                {detail.ctaText}
              </a>
            </div>

            {/* Local TOC */}
            {visibleSubsections.length > 0 && (
              <div className="bg-white border border-slate-200 border-l-4 border-l-[#1B6EB5] p-6 rounded-2xl shadow-xs">
                <span className="block text-slate-800 font-extrabold text-sm mb-4 flex items-center gap-2 font-display">
                  On This Page
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {visibleSubsections.map((sub, idx) => (
                    <li key={sub.id} className="p-0 m-0">
                      <a
                        href={`#${sub.id}`}
                        className="group flex items-center px-3 py-2 text-sm text-slate-650 hover:text-[#1B6EB5] hover:bg-slate-50/80 transition-all rounded-xl font-semibold no-underline"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold mr-2.5 text-xs bg-amber-50 border border-amber-200/50 w-5 h-5 rounded-md flex items-center justify-center group-hover:bg-[#1B6EB5] group-hover:border-[#1B6EB5] group-hover:text-white transition-all">
                          {idx + 1}
                        </span>
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Subsections Content */}
            <div className="space-y-10">
              {visibleSubsections.map((sub) => (
                <section
                  key={sub.id}
                  id={sub.id}
                  className="scroll-mt-20 border-t border-slate-200 pt-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-4">
                    {sub.title}
                  </h2>
                  <div className="epg-detail-rich-text text-slate-755 text-base leading-relaxed font-sans">
                    {sub.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Local Section FAQs */}
            {detail.faqs && detail.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8 font-sans">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-6">
                  {exam.shortName} FAQs
                </h2>
                <div className="space-y-3">
                  {detail.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div
                        key={idx}
                        className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 ${
                          isOpen ? 'border-blue-200 bg-slate-50/50' : 'bg-white'
                        }`}
                      >
                        <button
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-850 text-sm sm:text-base"
                          onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-400 transition-transform duration-200 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
            <ExamAuthorSection examId={examId} />
          </main>

          {/* Right Sidebar - Reusable Quick Navigation & CTA Banners */}
          <aside className="sticky top-20 space-y-4">
            {exam.id !== 'ibps-po' && <QuickNavigation exam={exam} activeSlug={activeNormalized} />}

            {exam.id !== 'ibps-po' && (
              <div className={`bg-gradient-to-br border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white font-sans ${
                examId === 'sbi-po' ? 'from-[#030712] to-[#091024]' : 'from-[#07102A] to-[#1A2D5A]'
              }`}>
                <div className="relative z-10">
                  <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
                  <div className="font-bold text-sm mb-1 font-display">Ready to Crack {exam.shortName} 2026?</div>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    Join 50k+ banking aspirants practicing with PrepBanker mocks.
                  </p>
                  <a
                    href={
                      examId === 'sbi-po'
                        ? "https://app.prepgrind.com/signup/sbi-po"
                        : "https://app.prepgrind.com/signup/ibps-po"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5"
                  >
                    Start Practice Mocks Free →
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
