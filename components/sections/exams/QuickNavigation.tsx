// PATH: components/sections/exams/QuickNavigation.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Megaphone,
  FileText,
  Users,
  ListChecks,
  Calendar,
  BarChart3,
  Sliders,
  UserCheck,
  GitCommit,
  DollarSign,
  Trophy,
  Languages,
  Calculator,
  Brain,
  GitCompare,
  Target,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';

interface Props {
  exam: ExamDetailData;
  activeSlug?: string; // empty if on the main page
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  overview: BookOpen,
  notification: Megaphone,
  'admit-card': FileText,
  vacancy: Users,
  syllabus: ListChecks,
  'important-dates': Calendar,
  'cut-off': BarChart3,
  'exam-pattern': Sliders,
  eligibility: UserCheck,
  'selection-process': GitCommit,
  salary: DollarSign,
  'mock-tests': Trophy,
  'english-tests': Languages,
  'quant-tests': Calculator,
  'reasoning-tests': Brain,
  comparison: GitCompare,
  'study-plan': Target,
};

export default function QuickNavigation({ exam, activeSlug }: Props) {
  const isIbps = exam.id === 'ibps-po';
  const scrollRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
    { slug: 'mock-tests', label: isIbps ? 'Mock Tests' : 'SBI PO Mock Tests' },
    { slug: 'english-tests', label: 'English Tests' },
    { slug: 'quant-tests', label: 'Quant Tests' },
    { slug: 'reasoning-tests', label: 'Reasoning Tests' },
    ...(!isIbps ? [{ slug: 'comparison', label: 'SBI PO vs IBPS PO' }] : []),
    { slug: 'study-plan', label: 'Study Plan' },
    ...(!isIbps ? [{ slug: 'prelims-exam-analysis', label: 'Prelims Exam Analysis' }] : []),
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // Run once initially
      handleScroll();

      if (isFirstRender.current) {
        isFirstRender.current = false;
        const activeEl = el.querySelector('[data-active="true"]');
        if (activeEl) {
          activeEl.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
        }
      }
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, [activeSlug]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (isIbps) {
    // Redesigned horizontal quick navigation for IBPS PO (transparent, relies on dark parent wrapper)
    return (
      <div className="relative w-full max-w-full overflow-hidden flex items-center gap-2 group font-sans py-3">
        {/* Style tag to hide scrollbars completely */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
        `}} />

        {/* Left Scroll Control Button */}
        <button
          onClick={() => scroll('left')}
          disabled={!showLeftArrow}
          className={`absolute left-0 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-all active:scale-95 cursor-pointer backdrop-blur-xs ${showLeftArrow
            ? 'bg-white/5 border border-amber-500/50 text-amber-500 hover:bg-white/10 hover:border-amber-400'
            : 'opacity-30 cursor-not-allowed bg-white/5 border border-white/5 text-slate-650'
            }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex-1 min-w-0 overflow-x-auto flex items-center gap-2 py-1.5 scroll-smooth no-scrollbar px-10"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {/* Main overview item */}
          {(() => {
            const IconComponent = ICON_MAP.overview;
            const isActive = !activeSlug;
            return (
              <Link
                href={`/ibps-po`}
                data-active={isActive}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wide transition-all no-underline shrink-0 flex items-center gap-2 border ${isActive
                  ? 'bg-amber-400/20 border-amber-400/50 text-amber-400 font-black'
                  : 'bg-white/10 border-white/10 text-white hover:bg-white/15 hover:border-white/15'
                  }`}
              >
                <IconComponent size={14} className={isActive ? 'text-amber-400' : 'text-slate-400'} />
                <span>Overview Guide</span>
              </Link>
            );
          })()}

          {/* Individual items */}
          {sidebarLinks.map((link) => {
            const isActive = link.slug === activeSlug;
            const IconComponent = ICON_MAP[link.slug] || BookOpen;
            const href = `/ibps-po/${link.slug}`;
            return (
              <Link
                key={link.slug}
                href={href}
                data-active={isActive}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wide transition-all no-underline shrink-0 flex items-center gap-2 border ${isActive
                  ? 'bg-amber-400/20 border-amber-400/50 text-amber-400 font-black'
                  : 'bg-white/10 border-white/10 text-white hover:bg-white/15 hover:border-white/15'
                  }`}
              >
                <IconComponent size={14} className={isActive ? 'text-amber-400' : 'text-slate-400'} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Scroll Control Button */}
        <button
          onClick={() => scroll('right')}
          disabled={!showRightArrow}
          className={`absolute right-0 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-all active:scale-95 cursor-pointer backdrop-blur-xs ${showRightArrow
            ? 'bg-white/5 border border-amber-500/50 text-amber-500 hover:bg-white/10 hover:border-amber-400'
            : 'opacity-30 cursor-not-allowed bg-white/5 border border-white/5 text-slate-650'
            }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    );
  }

  // Original vertical sidebar layout for SBI PO
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-slate-900 px-4 py-3 text-white font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 font-display">
        <BookOpen size={14} className="text-[var(--color-gold)]" />
        Quick Navigation
      </div>
      <nav className="p-2 flex flex-col gap-0.5 max-h-[365px] overflow-y-auto">
        <Link
          href={`/${exam.id}`}
          className={`flex items-center justify-between px-3 py-2 text-sm sm:text-base font-sans rounded-lg transition-colors border-b border-slate-100 pb-2.5 mb-1 col-span-full ${!activeSlug
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
              className={`flex items-center justify-between px-3 py-1.5 text-sm transition-colors rounded-lg font-sans ${isActive
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
