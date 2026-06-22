// PATH: components/sections/current-affairs/cards/CACard.tsx
'use client';

import { memo } from 'react';
import Link from 'next/link';
import {
  Globe,
  Building2,
  Landmark,
  TrendingUp,
  Flag,
  BookOpen,
  Calendar,
  Award,
  BarChart2,
  Newspaper,
  Clock,
} from 'lucide-react';
import type { CurrentAffair } from '../../../../types/current-affairs';

// ─── Helpers ──────────────────────────────
export const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'RBI Updates': Landmark,
  'Banking Awareness': Building2,
  'Economy & Finance': TrendingUp,
  'Government Schemes': Flag,
  'International Affairs': Globe,
  'Static GK': BookOpen,
  'Important Days': Calendar,
  'Awards & Honors': Award,
  'Reports & Indexes': BarChart2,
};

export const CATEGORY_GRADIENTS: Record<string, string> = {
  'RBI Updates': 'from-[#0F2027] via-[#203A43] to-[#2C5364]',
  'Banking Awareness': 'from-[#1e3c72] to-[#2a5298]',
  'Economy & Finance': 'from-[#24C6DC] to-[#514A9D]',
  'Government Schemes': 'from-[#F3904F] to-[#3B4371]',
  'International Affairs': 'from-[#11998e] to-[#38ef7d]',
  'Static GK': 'from-[#8A2387] via-[#E94057] to-[#F27121]',
  'Important Days': 'from-[#FF007F] to-[#FF4B2B]',
  'Awards & Honors': 'from-[#f857a6] to-[#ff5858]',
  'Reports & Indexes': 'from-[#11998e] to-[#38ef7d]',
};

interface CACardProps {
  ca: CurrentAffair;
}

function CACard({ ca }: CACardProps) {
  const IconComponent = CATEGORY_ICONS[ca.category] ?? Newspaper;
  const gradientClass = CATEGORY_GRADIENTS[ca.category] ?? 'from-slate-700 to-slate-800';

  // Parse custom format like 'May 20, 2026' into '20 May' or similar if needed, or keep it short.
  const formatShortDate = (dateStr: string) => {
    try {
      const dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime())) return dateStr;
      return dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    } catch {
      return dateStr;
    }
  };

  return (
    <Link
      href={`/current-affairs/${ca.id}`}
      aria-label={`Read more about ${ca.title}`}
      className="group bg-white rounded-xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-200"
    >
      {/* Category Icon with Premium Gradient Background */}
      <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Glowing/blur effect */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <IconComponent className="w-8 h-8 text-white filter drop-shadow-sm" aria-hidden />
          </span>
        </div>

        {/* Category tag overlaid */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[14px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wide">
          {ca.category}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Date & Read time */}
          <div className="flex items-center gap-3 text-[14px] text-slate-400 font-bold mb-1.5">
            <span>{formatShortDate(ca.date)}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-450" />
              {ca.readTime} Min
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[14px] font-extrabold leading-snug text-slate-800 group-hover:text-[var(--color-blue)] transition-colors duration-200 line-clamp-2 min-h-[40px]">
            {ca.title}
          </h3>

          {/* Summary / Excerpt */}
          <p className="text-[14px] text-slate-500 leading-relaxed mt-1 mb-2 line-clamp-2">
            {ca.summary}
          </p>
        </div>

        {/* Read More button */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
          <span className="text-[14px] font-extrabold text-[var(--color-blue)] group-hover:underline transition-all">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}

export default memo(CACard);