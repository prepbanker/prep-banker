// PATH: components/sections/current-affairs/cards/CAActionCard.tsx
'use client';

import { memo, useState } from 'react';
import { Clock, BookOpen, FileText, Globe, Download, Share2, Check } from 'lucide-react';
import type { CAQuiz } from '@/lib/data/current-affairs/quizzes';

interface Props {
  quiz: CAQuiz;
}

function CAActionCard({ quiz }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/current-affairs`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getDifficultyColor = (diff: CAQuiz['difficulty']) => {
    switch (diff) {
      case 'EASY':
        return 'text-emerald-700 bg-emerald-50 border border-emerald-100';
      case 'MEDIUM':
        return 'text-amber-700 bg-amber-50 border border-amber-100';
      case 'HARD':
        return 'text-rose-700 bg-rose-50 border border-rose-100';
      default:
        return 'text-slate-700 bg-slate-50 border border-slate-100';
    }
  };

  return (
    <article
      className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-slate-350"
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)' }}
    >
      <div>
        {/* ── Top Bar: Free Badge & Action Icons ── */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white">
              Free
            </span>
            <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${getDifficultyColor(quiz.difficulty)}`}>
              {quiz.difficulty}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5">
            {/* Download Button */}
            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1.5 rounded-full border border-slate-200 text-slate-500 hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] hover:bg-[#E8F4FD]/50 transition-all cursor-pointer"
              title="Download PDF"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Download className="w-3 h-3" />
            </a>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center justify-center p-1.5 rounded-full border border-slate-200 text-slate-500 hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] hover:bg-[#E8F4FD]/50 transition-all cursor-pointer relative"
              title="Share Link"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Share2 className="w-3 h-3" />
              )}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded shadow-md whitespace-nowrap z-50">
                  Link Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── Title & Excerpt ── */}
        <h3 className="text-[13px] font-extrabold leading-snug text-slate-900 group-hover:text-[var(--color-blue)] transition-colors min-h-[36px] line-clamp-2">
          {quiz.title}
        </h3>
        
        <p className="text-[11px] text-slate-500 leading-relaxed mt-1 mb-3 line-clamp-2 min-h-[30px]">
          {quiz.description}
        </p>

        {/* ── Meta Fields 2x2 Grid ── */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-2 border-t border-slate-100 pt-3 pb-3 text-[11px] text-slate-550 font-semibold">
          {/* Duration */}
          <div className="flex items-center gap-1.5 min-w-0">
            <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{quiz.duration} Min</span>
          </div>

          {/* Questions */}
          <div className="flex items-center gap-1.5 min-w-0">
            <BookOpen className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{quiz.questions} Qs</span>
          </div>

          {/* Marks */}
          <div className="flex items-center gap-1.5 min-w-0">
            <FileText className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{quiz.marks} Marks</span>
          </div>

          {/* Languages */}
          <div className="flex items-center gap-1.5 min-w-0">
            <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate" title={quiz.languages}>{quiz.languages}</span>
          </div>
        </div>
      </div>

      <div>
        {/* ── Attempted Status Banner ── */}
        <div className="text-center py-1.5 bg-[#E8F4FD]/50 rounded-lg text-[10px] font-bold text-slate-600 border border-[#dcecf7] mb-2.5">
          {quiz.attempts}
        </div>

        {/* ── Start Now Yellow CTA Button ── */}
        <a
          href="https://app.prepgrind.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-black text-slate-900 bg-[#FBBF24] hover:bg-[#F59E0B] active:scale-[0.98] transition-all text-center uppercase tracking-wider"
          style={{
            boxShadow: '0 2px 4px rgba(245, 158, 11, 0.2)',
          }}
        >
          Start Now
        </a>
      </div>
    </article>
  );
}

export default memo(CAActionCard);
