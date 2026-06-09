// PATH: components/sections/current-affairs/cards/CAHighlightCard.tsx
'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Star, Bookmark, BookOpen } from 'lucide-react';
import type { CurrentAffair } from '../../../../types/current-affairs';
import { getCategoryStyle } from '../../../../lib/data/current-affairs/categories';

interface Props {
  ca: CurrentAffair;
}

// Map categories to beautiful gradients and icons for premium placeholders
function getCategoryDesign(cat: string) {
  switch (cat) {
    case 'RBI Updates':
      return {
        gradient: 'from-[#0F2027] via-[#203A43] to-[#2C5364]',
        icon: '🏦'
      };
    case 'Banking Awareness':
      return {
        gradient: 'from-[#1e3c72] to-[#2a5298]',
        icon: '💵'
      };
    case 'Economy & Finance':
      return {
        gradient: 'from-[#24C6DC] to-[#514A9D]',
        icon: '📊'
      };
    case 'Government Schemes':
      return {
        gradient: 'from-[#F3904F] to-[#3B4371]',
        icon: '📜'
      };
    case 'International Affairs':
      return {
        gradient: 'from-[#11998e] to-[#38ef7d]',
        icon: '🌐'
      };
    case 'Static GK':
      return {
        gradient: 'from-[#8A2387] via-[#E94057] to-[#F27121]',
        icon: '🧠'
      };
    default:
      return {
        gradient: 'from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-blue)]',
        icon: '📰'
      };
  }
}

export default function CAHighlightCard({ ca }: Props) {
  const { gradient, icon } = getCategoryDesign(ca.category);

  return (
    <div
      className="group relative bg-white border-2 border-[rgba(212,160,23,0.25)] rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-lg hover:border-[var(--color-gold)]"
      style={{
        boxShadow: '0 8px 30px rgba(13,27,62,0.04)'
      }}
    >
      {/* Visual Thumbnail */}
      <div className={`relative w-full md:w-2/5 min-h-[180px] bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-white flex-shrink-0 overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
          <span className="text-4xl filter drop-shadow">{icon}</span>
          <span className="text-[10px] tracking-wider uppercase font-extrabold text-white/85 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
            {ca.category}
          </span>
        </div>
        
        {/* Glow decoration */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-4">
        <div className="space-y-2">
          {/* Header row */}
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 px-2.5 py-0.5 rounded-full border border-amber-100">
              <Star className="w-3 h-3 fill-current" /> Highlight
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {ca.readTime} Min Read
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-extrabold text-[var(--color-navy)] leading-snug group-hover:text-[var(--color-blue)] transition-colors line-clamp-2">
            <Link href={`/current-affairs/${ca.id}`} className="hover:underline">
              {ca.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
            {ca.summary}
          </p>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <span className="text-[10px] font-semibold text-slate-450 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {ca.date}
          </span>

          <Link
            href={`/current-affairs/${ca.id}`}
            className="inline-flex items-center justify-center gap-1 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-navy)] hover:opacity-95 rounded-lg active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            Start Learning
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
