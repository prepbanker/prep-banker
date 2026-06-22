// PATH: components/shared/StickyBottomCTA.tsx
'use client';

import { useState, useEffect } from 'react';
import { BookOpen, X } from 'lucide-react';

export default function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = window.scrollY;
        const percentage = (scrolled / scrollHeight) * 100;
        setIsVisible(percentage >= 20);
      } else {
        // If page is too short to scroll, show it by default
        setIsVisible(true);
      }
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-[#1B6EB5] via-[#1A2D5A] to-[#0D1B3E] text-white py-2 sm:py-3.5 px-4 sm:px-6 shadow-[0_-8px_30px_rgba(13,27,62,0.25)] border-t border-[#1B6EB5]/30 transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
    >
      <div className="max-w-[1350px] mx-auto flex flex-row items-center justify-between gap-3 sm:gap-6">

        {/* Left Side: Icon & Headline */}
        <div className="flex items-center gap-2 sm:gap-3 text-left">
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-[var(--color-gold-bright)] flex-shrink-0 animate-pulse">
            <BookOpen className="w-4.5 h-4.5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium leading-normal sm:leading-relaxed">
              <span className="text-[var(--color-gold-light)] font-bold block sm:inline">Start free tests today!</span>{' '}
              <span className="text-white/80 hidden sm:inline">Full syllabus coverage with detailed performance analytics.</span>
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button & Close icon */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 justify-end">
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-lg bg-[var(--color-yellow)] text-[#07102A] font-extrabold text-xs sm:text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md hover:brightness-105 active:scale-98"
          >
            Enroll Now
          </a>

          <button
            onClick={handleClose}
            aria-label="Close call to action bar"
            className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-light)] shrink-0"
          >
            <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
}
