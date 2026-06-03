'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';
import PromoBanner from '@/public/images/pop-up.jpg';

interface Props {
  delaySeconds?: number;
  storageKey?:  string;
}

export default function PromoPopup({
  delaySeconds = 1.2,
  storageKey   = 'pb_promo_seen',
}: Props) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Clear on every mount during dev — remove this line in production
    // sessionStorage.removeItem(storageKey);

    if (sessionStorage.getItem(storageKey)) return;

    let timer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const percent = (window.scrollY / totalScrollable) * 100;
      if (percent >= 40) {
        window.removeEventListener('scroll', onScroll);
        timer = setTimeout(() => {
          setVisible(true);
          requestAnimationFrame(() => setAnimate(true));
        }, delaySeconds * 1000);
      }
    };

    // Also trigger if page is short and already scrollable
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, [delaySeconds, storageKey]);

  const close = () => {
    setAnimate(false);
    setTimeout(() => setVisible(false), 280);
    sessionStorage.setItem(storageKey, '1');
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className="fixed inset-0 z-[9998] cursor-pointer"
        style={{
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
          opacity: animate ? 1 : 0,
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* Modal wrapper */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Special offer"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="w-full pointer-events-auto overflow-hidden rounded-2xl bg-white"
          style={{
            maxWidth: 520,
            boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
            transform: animate ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.96)',
            opacity: animate ? 1 : 0,
            transition: 'transform 0.32s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease',
          }}
        >
          {/* Image banner */}
          <div className="relative w-full" style={{ height: 220 }}>
            <Image
              src={PromoBanner}
              alt="One Platform for All Your Exam Preparation at just ₹199"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close popup"
              className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 border-none flex items-center justify-center cursor-pointer shadow-md focus:outline-none"
            >
              <X size={15} color="#1a1a1a" />
            </button>
          </div>

          {/* Body */}
          <div className="px-7 pt-6 pb-7">
            <p
              className="font-bold text-xl leading-snug mb-1.5"
              style={{ fontFamily: "var(--font-display)", color: '#0D1B3E' }}
            >
              Start your exam preparation today
            </p>
            <p className="text-sm text-gray-500 mb-5">
              7 months ✨ 500+ Mocks ✨ At just ₹199
            </p>

            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-base no-underline transition-all duration-150 hover:-translate-y-px"
              style={{
                background: 'linear-gradient(135deg, #1B6EB5, #1558A0)',
                boxShadow: '0 4px 16px rgba(27,110,181,0.35)',
              }}
            >
              <Sparkles size={16} />
              Start Preparing Now
              <ArrowUpRight size={16} />
            </a>

            <p className="text-center text-xs text-gray-400 mt-3">
              No credit card required &bull; Free trial available
            </p>
          </div>
        </div>
      </div>
    </>
  );
}