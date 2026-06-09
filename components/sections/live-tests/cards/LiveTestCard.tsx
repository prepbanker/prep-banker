// PATH: components/sections/live-tests/cards/LiveTestCard.tsx
// Redesigned presentational card — matching layout and design style of the screenshot.
'use client';

import { memo, useState, useEffect } from 'react';
import { Share2, Clock, ClipboardList, Award, Globe, Shield } from 'lucide-react';
import { formatTimer } from '@/lib/utils/timer';
import type { LiveTest } from '@/types/live-tests';

interface Props {
  test: LiveTest;
  timeLeft: number; // seconds
}

const LiveTestCard = memo(function LiveTestCard({ test, timeLeft }: Props) {
  const isExpired = timeLeft <= 0;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Share handler
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: test.title,
        text: `Attempt this live mock test on PrepBanker: ${test.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${test.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article
      className={`group relative bg-white rounded-xl flex flex-col overflow-hidden border border-slate-150 transition-all duration-300 ${
        isExpired ? 'opacity-70' : 'hover:shadow-md hover:border-slate-300'
      }`}
    >
      {/* ── Header: Badges & Share Icon ── */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {/* Free Badge */}
          {test.isFree && (
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#16A34A] text-white tracking-wide">
              Free
            </span>
          )}

          {/* Live / Completed Badge */}
          {!isExpired ? (
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#EF4444] text-white tracking-wide gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live
            </span>
          ) : (
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-400 text-white tracking-wide">
              Ended
            </span>
          )}
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
          aria-label="Share test"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Test Title ── */}
      <div className="px-4 pb-3 flex-grow">
        <h3 className="text-[13.5px] font-bold leading-snug text-slate-800 line-clamp-2 min-h-[38px]">
          {test.title}
        </h3>
      </div>

      {/* ── Meta Grid ── */}
      <div className="px-4 pb-4 border-t border-slate-100 pt-3">
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 text-[11px] text-slate-500">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{test.duration} Minutes</span>
          </div>

          {/* Questions */}
          <div className="flex items-center gap-1.5">
            <ClipboardList className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{test.totalQuestions} Questions</span>
          </div>

          {/* Marks */}
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{test.totalMarks} Marks</span>
          </div>

          {/* Languages */}
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{test.languages.join(', ')}</span>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-1.5 col-span-2">
            <Shield className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="uppercase tracking-wider font-semibold text-slate-600">
              {test.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* ── Timer Row ── */}
      <div className="text-center py-2 bg-[#F8FAFC] border-t border-slate-100 text-[11px] font-bold">
        {!isExpired ? (
          <span className="text-[#16A34A]">
            Test will end in {isMounted ? formatTimer(timeLeft) : '--:--:--'}
          </span>
        ) : (
          <span className="text-slate-500">
            Test Closed
          </span>
        )}
      </div>

      {/* ── CTA Button ── */}
      <div className="p-4 bg-white border-t border-slate-100">
        {isExpired ? (
          <div
            aria-disabled="true"
            className="flex items-center justify-center w-full py-2.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed text-center"
          >
            Closed
          </div>
        ) : (
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 rounded-lg text-xs font-extrabold text-[#0D1B3E] bg-[#FBBF24] hover:bg-[#F59E0B] active:scale-[0.98] transition-all duration-150 text-center"
            style={{
              boxShadow: '0 2px 4px rgba(251, 191, 36, 0.15)',
            }}
          >
            Start Now
          </a>
        )}
      </div>
    </article>
  );
});

export default LiveTestCard;