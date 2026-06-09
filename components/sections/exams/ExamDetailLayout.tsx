// PATH: components/sections/exams/ExamDetailLayout.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  BookMarked,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Layers,
  HelpCircle,
  BookOpen,
  Trophy,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/shared/Breadcrumb';
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

  // Sidebar Related Guide Links
  const sidebarLinks = [
    { slug: 'eligibility', label: 'Eligibility Criteria' },
    { slug: 'syllabus', label: 'Official Syllabus' },
    { slug: 'exam-pattern', label: 'Exam Pattern' },
    { slug: 'salary', label: 'Salary & Allowances' },
    { slug: 'cut-offs', label: 'Previous Cut-offs' },
    { slug: 'dates', label: 'Important Dates' },
    { slug: 'strategy', label: 'Preparation Strategy' },
  ];

  return (
    <div className="bg-slate-50/40 min-h-screen flex flex-col font-sans">
      <Header />

      {/* Main Section Content Wrapper */}
      <div className="max-w-6xl w-full mx-auto px-6 py-6 flex-1 flex flex-col gap-6">
        
        {/* Breadcrumb Navigation */}
        <div className="py-2">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Exams', href: '/exams' },
              { label: exam.shortName, href: `/${exam.id}` },
              { label: detail.title },
            ]}
            linkColor="#1B6EB5"
            separatorColor="rgba(0,0,0,0.2)"
            currentColor="rgba(0,0,0,0.6)"
          />
        </div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          
          {/* Main Area */}
          <main className="space-y-8">
            {/* Intro Header */}
            <div className="py-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4 tracking-tight leading-tight">
                {detail.title}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-4xl font-normal">
                {detail.overview}
              </p>
              <a
                href={detail.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] text-slate-900 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <Sparkles size={15} />
                {detail.ctaText}
              </a>
            </div>

            {/* Local TOC */}
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
                  <div className="text-slate-750 text-sm sm:text-base leading-relaxed">
                    {sub.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Local Section FAQs */}
            {detail.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-20 border-t border-slate-200 pt-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-6">
                  {exam.shortName} {sectionSlug.charAt(0).toUpperCase() + sectionSlug.slice(1)} FAQs
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

          {/* Right Sidebar - Related Guides Links */}
          <aside className="sticky top-20 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-slate-900 px-4 py-3 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 font-display">
                <BookOpen size={14} className="text-[var(--color-gold)]" />
                Quick Navigation
              </div>
              <nav className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-1">
                {/* Link to main page */}
                <Link
                  href={`/${exam.id}`}
                  className="flex items-center justify-between px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 pb-2.5 mb-1 col-span-full"
                >
                  <span>Main Guide Overview</span>
                  <ArrowRight size={12} className="opacity-60" />
                </Link>
                {sidebarLinks.map((link) => {
                  const isActive = link.slug === sectionSlug;
                  return (
                    <Link
                      key={link.slug}
                      href={`/${exam.id}/${link.slug}`}
                      className={`flex items-center justify-between px-3 py-2 text-sm transition-colors rounded-lg ${
                        isActive
                          ? 'font-black text-[#1B6EB5] bg-slate-100/80 border-l-4 border-[#1B6EB5] rounded-r-lg'
                          : 'font-bold text-[#1B6EB5] hover:bg-slate-50 hover:underline'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={12} className="opacity-50" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Premium Mock Test CTA Banner */}
            <div className="bg-gradient-to-br from-[#07102A] to-[#1A2D5A] border border-slate-800 p-5 rounded-2xl shadow-sm text-center relative overflow-hidden text-white">
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
