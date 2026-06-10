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
    return slug;
  };
  const activeNormalized = getNormalizedSlug(sectionSlug);

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans">
      <Header />

      {/* Reusable Hero Section using exams main page layout style (without switcher toggle) */}
      <ExamHero exam={exam} title={detail.title} description={detail.overview} />

      {/* Main Section Content Wrapper */}
      <div className="max-w-6xl w-full mx-auto px-6 py-6 flex-1 flex flex-col gap-6">
        
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
            {detail.subsections.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <span className="block text-slate-400 font-bold text-xs tracking-wider uppercase mb-3">On This Page</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base font-semibold">
                  {detail.subsections.map((sub, idx) => (
                    <li key={sub.id}>
                      <a
                        href={`#${sub.id}`}
                        className="text-[#1B6EB5] hover:text-[#0D1B3E] hover:underline font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="text-[var(--color-gold)] font-extrabold">{idx + 1}.</span>
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Subsections Content */}
            <div className="space-y-10">
              {detail.subsections.map((sub) => (
                <section
                  key={sub.id}
                  id={sub.id}
                  className="scroll-mt-20 border-t border-slate-200 pt-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-4">
                    {sub.title}
                  </h2>
                  <div className="text-slate-750 text-sm sm:text-base leading-relaxed font-sans">
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
                          <div className="px-4 pb-4 text-sm sm:text-base text-slate-650 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </main>

          {/* Right Sidebar - Reusable Quick Navigation & CTA Banners */}
          <aside className="sticky top-20 space-y-4">
            <QuickNavigation exam={exam} activeSlug={activeNormalized} />

            {/* Premium Mock Test CTA Banner */}
            <div className="bg-gradient-to-br from-[#07102A] to-[#1A2D5A] border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white font-sans">
              <div className="relative z-10">
                <Trophy size={28} className="mx-auto text-[var(--color-gold-bright)] mb-2.5" />
                <h4 className="font-bold text-sm mb-1 font-display">Ready to Crack {exam.shortName} 2026?</h4>
                <p className="text-white/60 text-[10px] leading-relaxed mb-4">
                  Join 50k+ banking aspirants practicing with PrepBanker mocks.
                </p>
                <a
                  href="https://app.prepgrind.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-xs rounded-lg transition-all shadow-[0_4px_12px_rgba(240,180,41,0.3)] hover:-translate-y-0.5"
                >
                  Start Practice Mocks Free →
                </a>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 bg-amber-400 blur-xl pointer-events-none" />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
