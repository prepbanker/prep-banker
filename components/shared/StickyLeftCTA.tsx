// PATH: components/shared/StickyLeftCTA.tsx
'use client';

import { ArrowUpRight } from 'lucide-react';

interface Props {
  href?:  string;
  label?: string;
  /** top offset in px — default 280 */
  topOffset?: number;
}

export default function StickyLeftCTA({ 
  href       = 'https://app.prepgrind.com/register',
  label      = 'Start Preparing Now',
  topOffset  = 280,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        position:       'fixed',
        left:           0,
        top:            topOffset,
        zIndex:         9000,
        display:        'flex',
        alignItems:     'center',
        gap:            6,
        writingMode:    'vertical-rl',
        textOrientation:'mixed',
        transform:      'rotate(180deg)',
        background:     'linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)',
        color:          '#fff',
        fontWeight:     700,
        fontSize:       '0.72rem',
        letterSpacing:  '0.06em',
        textTransform:  'uppercase',
        textDecoration: 'none',
        padding:        '0.9rem 0.55rem',
        borderRadius:   '8px 0px 0px 8px',
        boxShadow:      '3px 0 18px rgba(220,38,38,0.4)',
        cursor:         'pointer',
        transition:     'padding 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
        whiteSpace:     'nowrap',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.padding     = '1rem 0.65rem';
        el.style.boxShadow   = '4px 0 24px rgba(220,38,38,0.55)';
        el.style.background  = 'linear-gradient(180deg, #EF4444 0%, #DC2626 100%)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.padding     = '0.9rem 0.55rem';
        el.style.boxShadow   = '3px 0 18px rgba(220,38,38,0.4)';
        el.style.background  = 'linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)';
      }}
    >
      {/* Icon rendered last (rotated so it appears on top) */}
      <ArrowUpRight
        size={13}
        style={{ transform: 'rotate(180deg)', flexShrink: 0 }}
      />
      {label}
    </a>
  );
}