// PATH: components/shared/PromoPopup.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';

interface Props {
  scrollThreshold?: number;
  delaySeconds?: number;
  storageKey?: string;
}

export default function PromoPopup({
  scrollThreshold = 700,
  delaySeconds    = 1.2,
  storageKey      = 'pb_promo_seen',
}: Props) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Don't show again if already dismissed this session
    if (sessionStorage.getItem(storageKey)) return;

    let timer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      if (window.scrollY >= scrollThreshold) {
        window.removeEventListener('scroll', onScroll);
        timer = setTimeout(() => {
          setVisible(true);
          requestAnimationFrame(() => setAnimate(true));
        }, delaySeconds * 1000);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, [scrollThreshold, delaySeconds, storageKey]);

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
        style={{
          position:   'fixed',
          inset:      0,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
          zIndex:     9998,
          opacity:    animate ? 1 : 0,
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Special offer"
        style={{
          position:   'fixed',
          inset:      0,
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex:     9999,
          padding:    '1rem',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width:     '100%',
            maxWidth:  520,
            borderRadius: 20,
            overflow:  'hidden',
            background: '#fff',
            boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
            pointerEvents: 'all',
            transform:  animate ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.96)',
            opacity:    animate ? 1 : 0,
            transition: 'transform 0.32s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease',
          }}
        >
          {/* ── Image banner ── */}
          <div style={{ position: 'relative', width: '100%', height: 220 }}>
            <Image
              src="/images/advertise.jpg"
              alt="One Platform for All Your Exam Preparation at just ₹199"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close popup"
              style={{
                position:    'absolute',
                top:         10,
                right:       10,
                width:       32,
                height:      32,
                borderRadius: '50%',
                background:  'rgba(255,255,255,0.92)',
                border:      'none',
                cursor:      'pointer',
                display:     'flex',
                alignItems:  'center',
                justifyContent: 'center',
                boxShadow:   '0 2px 8px rgba(0,0,0,0.18)',
                zIndex:      1,
              }}
            >
              <X size={15} color="#1a1a1a" />
            </button>
          </div>

          {/* ── Body ── */}
          <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize:   '1.25rem',
              color:      '#0D1B3E',
              marginBottom: '0.35rem',
              lineHeight: 1.3,
            }}>
              Start your exam preparation today
            </p>
            <p style={{
              fontSize:  '0.9rem',
              color:     '#555',
              marginBottom: '1.25rem',
            }}>
              7 months ✨ 500+ Mocks. ✨ At just ₹199
            </p>

            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            8,
                width:          '100%',
                padding:        '0.875rem',
                background:     'linear-gradient(135deg, #1B6EB5, #1558A0)',
                color:          '#fff',
                fontWeight:     700,
                fontSize:       '1rem',
                borderRadius:   12,
                textDecoration: 'none',
                border:         'none',
                cursor:         'pointer',
                boxShadow:      '0 4px 16px rgba(27,110,181,0.35)',
                transition:     'transform 0.15s ease, box-shadow 0.15s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 22px rgba(27,110,181,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(27,110,181,0.35)';
              }}
            >
              <Sparkles size={16} />
              Start Preparing Now
              <ArrowUpRight size={16} />
            </a>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#aaa', marginTop: '0.75rem' }}>
              No credit card required &bull; Free trial available
            </p>
          </div>
        </div>
      </div>
    </>
  );
}