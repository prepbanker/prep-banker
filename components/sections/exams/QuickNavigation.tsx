// PATH: components/sections/exams/QuickNavigation.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, ChevronRight } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';

interface Props {
  exam: ExamDetailData;
  activeSlug?: string; // empty if on the main page
}

export default function QuickNavigation({ exam, activeSlug }: Props) {
  const isIbps = exam.id === 'ibps-po';
  const sidebarLinks = [
    { slug: 'notification', label: 'Notification' },
    { slug: 'admit-card', label: 'Admit Card' },
    { slug: 'vacancy', label: 'Vacancy' },
    { slug: 'syllabus', label: 'Syllabus' },
    { slug: 'important-dates', label: 'Important Dates' },
    { slug: 'cut-off', label: 'Cut Off' },
    { slug: 'exam-pattern', label: 'Exam Pattern' },
    { slug: 'eligibility', label: 'Eligibility' },
    { slug: 'selection-process', label: 'Selection Process' },
    { slug: 'salary', label: 'Salary' },
    { slug: 'mock-tests', label: isIbps ? 'IBPS PO Mock Tests' : 'SBI PO Mock Tests' },
    { slug: 'english-tests', label: 'English Language sectional tests' },
    { slug: 'quant-tests', label: 'Quantitative Aptitude tests' },
    { slug: 'reasoning-tests', label: 'Reasoning Ability tests' },
    { slug: 'comparison', label: isIbps ? 'IBPS PO vs SBI PO' : 'SBI PO vs IBPS PO' },
    { slug: 'study-plan', label: 'Study Plan' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-slate-900 px-4 py-3 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 font-display">
        <BookOpen size={14} className="text-[var(--color-gold)]" />
        Quick Navigation
      </div>
      <nav className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-1 max-h-[600px] overflow-y-auto">
        {/* Link to main page */}
        <Link
          href={`/${exam.id}`}
          className={`flex items-center justify-between px-3 py-2 text-sm font-sans rounded-lg transition-colors border-b border-slate-100 pb-2.5 mb-1 col-span-full ${
            !activeSlug
              ? 'font-black text-[#1B6EB5] bg-slate-100/80 border-l-4 border-[#1B6EB5] rounded-r-lg'
              : 'font-bold text-[#1B6EB5] hover:bg-slate-50 hover:underline'
          }`}
        >
          <span>Main Guide Overview</span>
          <ArrowRight size={12} className="opacity-60" />
        </Link>
        {sidebarLinks.map((link) => {
          const isActive = link.slug === activeSlug;
          const href = link.slug === 'comparison' && exam.id === 'sbi-po'
            ? `/sbi-po/sbi-po-vs-ibps-po`
            : `/${exam.id}/${link.slug}`;
          return (
            <Link
              key={link.slug}
              href={href}
              className={`flex items-center justify-between px-3 py-1.5 text-xs transition-colors rounded-lg font-sans ${
                isActive
                  ? 'font-black text-[#1B6EB5] bg-slate-100/80 border-l-4 border-[#1B6EB5] rounded-r-lg'
                  : 'font-bold text-[#1B6EB5] hover:bg-slate-50 hover:underline'
              }`}
            >
              <span className="truncate max-w-[200px]" title={link.label}>
                {link.label}
              </span>
              <ChevronRight size={10} className="opacity-50 flex-shrink-0" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
