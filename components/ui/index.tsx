// PATH: components/ui/index.tsx
'use client';

import { type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

// ─────────────────────────────────────────
// Button Component
// ─────────────────────────────────────────
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  fullWidth?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-navy-light) 100%)',
    color: '#fff',
    border: 'none',
    boxShadow: '0 4px 16px rgba(27,110,181,0.35)',
  },
  gold: {
    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
    color: 'var(--color-navy-deep)',
    border: 'none',
    boxShadow: 'var(--shadow-gold)',
  },
  secondary: {
    background: 'var(--color-navy)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-blue)',
    border: '2px solid var(--color-blue)',
  },
  ghost: {
    background: 'rgba(27,110,181,0.08)',
    color: 'var(--color-blue)',
    border: 'none',
  },
};

const SIZE_STYLES: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: '0.8rem',  borderRadius: '8px' },
  md: { padding: '11px 24px', fontSize: '0.9rem', borderRadius: '10px' },
  lg: { padding: '14px 32px', fontSize: '1rem',   borderRadius: '12px' },
};

export function Button({
  children, href, variant = 'primary', size = 'md',
  className, style, onClick, disabled, external, fullWidth,
}: ButtonProps) {
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'var(--transition)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    ...VARIANT_STYLES[variant],
    ...SIZE_STYLES[size],
    ...style,
  };

  const handleHover = (e: React.MouseEvent<HTMLElement>, enter: boolean) => {
    if (disabled) return;
    const el = e.currentTarget as HTMLElement;
    el.style.transform = enter ? 'translateY(-2px)' : 'translateY(0)';
    el.style.filter    = enter ? 'brightness(1.05)' : 'brightness(1)';
  };

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={baseStyle}
        className={className}
        onMouseEnter={e => handleHover(e, true)}
        onMouseLeave={e => handleHover(e, false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      className={className}
      onMouseEnter={e => handleHover(e, true)}
      onMouseLeave={e => handleHover(e, false)}
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────
// SectionTitle Component
// ─────────────────────────────────────────
interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export function SectionTitle({ label, title, highlight, subtitle, align = 'center', dark = false }: SectionTitleProps) {
  const isCenter = align === 'center';
  const titleColor = dark ? '#fff' : 'var(--color-navy)';
  const subtitleColor = dark ? 'rgba(255,255,255,0.65)' : 'var(--color-gray-600)';

  // Replace highlight in title
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gold-gradient">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div style={{ textAlign: isCenter ? 'center' : align, marginBottom: '2.5rem' }}>
      {label && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: dark ? 'rgba(212,160,23,0.15)' : 'rgba(212,160,23,0.1)',
          border: '1px solid rgba(212,160,23,0.25)',
          color: 'var(--color-gold)',
          padding: '5px 14px',
          borderRadius: '999px',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.875rem',
        }}>
          <span style={{
            width: 6, height: 6,
            background: 'var(--color-gold)',
            borderRadius: '50%',
            display: 'inline-block',
          }}/>
          {label}
        </div>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
        fontWeight: 700,
        color: titleColor,
        lineHeight: 1.2,
        marginBottom: subtitle ? '0.875rem' : 0,
      }}>
        {renderTitle()}
      </h2>
      {!isCenter && (
        <div style={{
          width: 48, height: 4,
          background: 'linear-gradient(90deg, var(--color-gold), var(--color-blue))',
          borderRadius: 2,
          marginTop: '0.5rem',
          marginBottom: subtitle ? '0.875rem' : 0,
        }}/>
      )}
      {subtitle && (
        <p style={{
          color: subtitleColor,
          fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
          maxWidth: isCenter ? 620 : '100%',
          margin: isCenter ? '0 auto' : '0',
          lineHeight: 1.65,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// Badge Component
// ─────────────────────────────────────────
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'blue' | 'navy' | 'green' | 'red' | 'gray' | 'live';
  size?: 'sm' | 'md';
  dot?: boolean;
}

const BADGE_VARIANTS: Record<string, CSSProperties> = {
  gold:  { background: '#FFF3CD', color: '#7A5200', border: '1px solid #FFD966' },
  blue:  { background: '#DBEAFE', color: '#1D4ED8', border: '1px solid #BFDBFE' },
  navy:  { background: 'var(--color-navy)', color: '#fff', border: 'none' },
  green: { background: '#DCFCE7', color: '#15803D', border: '1px solid #86EFAC' },
  red:   { background: '#FEE2E2', color: '#B91C1C', border: '1px solid #FECACA' },
  gray:  { background: '#F1F5F9', color: '#475569', border: '1px solid #E2E8F0' },
  live:  { background: '#FEE2E2', color: '#DC2626', border: '1px solid #FECACA' },
};

export function Badge({ children, variant = 'blue', size = 'sm', dot }: BadgeProps) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: size === 'sm' ? '2px 9px' : '4px 12px',
      borderRadius: 999,
      fontSize: size === 'sm' ? '0.68rem' : '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      ...BADGE_VARIANTS[variant],
    }}>
      {dot && <span style={{
        width: variant === 'live' ? 6 : 5,
        height: variant === 'live' ? 6 : 5,
        borderRadius: '50%',
        background: 'currentColor',
        animation: variant === 'live' ? 'pulse-live 1.5s infinite' : undefined,
        display: 'inline-block',
        flexShrink: 0,
      }}/>}
      {children}
    </span>
  );
}

// ─────────────────────────────────────────
// StarRating Component
// ─────────────────────────────────────────
export function StarRating({ rating, max = 5, size = 14 }: { rating: number; max?: number; size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
      {Array.from({ length: max }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < Math.round(rating) ? 'var(--color-gold-bright)' : '#E2E8F0'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ fontSize: size * 0.8, color: 'var(--color-gray-600)', marginLeft: 4 }}>{rating.toFixed(1)}</span>
    </div>
  );
}

// ─────────────────────────────────────────
// Breadcrumb Component
// ─────────────────────────────────────────
interface BreadcrumbItem { label: string; href?: string; }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', flexWrap: 'wrap' }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {item.href ? (
            <a href={item.href} style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>{item.label}</a>
          ) : (
            <span style={{ color: 'var(--color-gray-600)' }}>{item.label}</span>
          )}
          {i < items.length - 1 && <span style={{ color: 'var(--color-gray-400)' }}>/</span>}
        </span>
      ))}
    </nav>
  );
}