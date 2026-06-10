// PATH: components/sections/current-affairs/cards/CACard.tsx
'use client';

import { memo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import type { CurrentAffair } from '../../../../types/current-affairs';

// ─── Helpers ──────────────────────────────
export function getArticleImage(ca: CurrentAffair): string {
  const images: Record<string, string> = {
    'RBI Updates': 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500&auto=format&fit=crop&q=80',
    'Economy & Finance': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=80',
    'Banking Awareness': 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=500&auto=format&fit=crop&q=80',
    'Government Schemes': 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=80',
    'International Affairs': 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=500&auto=format&fit=crop&q=80',
    'Static GK': 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=80',
    'Important Days': 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=500&auto=format&fit=crop&q=80',
    'Awards & Honors': 'https://images.unsplash.com/photo-1531058020387-3be344559be6?w=500&auto=format&fit=crop&q=80',
    'Reports & Indexes': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
  };

  if (ca.id.includes('rbi-01')) {
    return 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500&auto=format&fit=crop&q=80';
  }
  if (ca.title.toLowerCase().includes('semiconductor')) {
    return 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=80';
  }
  if (ca.title.toLowerCase().includes('yogasana') || ca.title.toLowerCase().includes('yoga')) {
    return 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=80';
  }
  if (ca.title.toLowerCase().includes('entrepreneurs') || ca.title.toLowerCase().includes('msde')) {
    return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=80';
  }
  if (ca.title.toLowerCase().includes('padma')) {
    return 'https://images.unsplash.com/photo-1578269174936-2709b5a8c0e3?w=500&auto=format&fit=crop&q=80';
  }
  if (ca.title.toLowerCase().includes('governor bags') || ca.title.toLowerCase().includes('best central banker')) {
    return 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80';
  }

  return images[ca.category] ?? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80';
}

interface CACardProps {
  ca: CurrentAffair;
}

function CACard({ ca }: CACardProps) {
  const imageUrl = getArticleImage(ca);
  const [imgSrc, setImgSrc] = useState(imageUrl);

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
      {/* Article Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={imgSrc}
          alt={ca.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgSrc('/images/default.jpg')}
        />
        {/* Category tag overlaid */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wide">
          {ca.category}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Date & Read time */}
          <div className="flex items-center gap-3 text-[11px] text-slate-400 font-bold mb-1.5">
            <span>{formatShortDate(ca.date)}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-450" />
              {ca.readTime} Min
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[14px] font-extrabold leading-snug text-slate-800 group-hover:text-[var(--color-blue)] transition-colors duration-200 line-clamp-2 min-h-[40px]">
            {ca.title}
          </h3>

          {/* Summary / Excerpt */}
          <p className="text-[11.5px] text-slate-500 leading-relaxed mt-1 mb-2 line-clamp-2">
            {ca.summary}
          </p>
        </div>

        {/* Read More button */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
          <span className="text-[11.5px] font-extrabold text-[var(--color-blue)] group-hover:underline transition-all">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}

export default memo(CACard);