// PATH: components/layout/Header.tsx
'use client';
 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import Image from 'next/image';
import Logo from "../../public/images/prepbanker-logo-1.png"

export default function Header() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
 
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
 
  // Badge color mapping so Quiz gets a different colour to LIVE
  function badgeStyle(badge: string) {
    if (badge === 'LIVE') return { background: '#EF4444' };
    if (badge === 'NEW')  return { background: 'linear-gradient(135deg,#7C3AED,#A855F7)' };
    return { background: 'var(--color-blue)' };
  }
 
  return (
    <header
      suppressHydrationWarning
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#ffffff',
        borderBottom: scrolled
          ? '1px solid rgba(13,27,62,0.1)'
          : '1px solid rgba(13,27,62,0.07)',
        boxShadow: scrolled ? '0 2px 20px rgba(13,27,62,0.08)' : 'none',
        transition: 'var(--transition)',
      }}
    >
      <div
        className="container-custom"
        style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '2rem' }}
      >
 
        {/* ── Logo ──────────────────────────────── */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex', alignItems: 'center',
            gap: '10px', flexShrink: 0,
          }}
        >
          <div
  style={{
    width: '42px',
    height: '42px',
    position: 'relative',
    flexShrink: 0,
  }}
>
  <Image
    src={Logo}
    alt="PrepBanker Logo"
    fill
    priority
    sizes="42px"
    style={{
      objectFit: 'contain',
    }}
  />
</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
fontSize: 'clamp(1rem, 2vw, 1.2rem)',  
            color: 'var(--color-navy-deep)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}>
              Prep<span style={{ color: 'var(--color-gold-bright)' }}>Banker</span>
            </div>
            <div style={{
              fontSize: 'clamp(0.5rem, 1.2vw, 0.58rem)',
              color: 'var(--color-gray-400)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginTop: '2px',
            }}>
              Banking Exam Prep
            </div>
          </div>
        </Link>
 
        {/* ── Desktop Nav ───────────────────────── */}
        <nav
          style={{ display: 'none', flex: 1, alignItems: 'center', gap: '2px' }}
          className="lg-nav"
        >
          {navLinks.map(link => (
            <div
              key={link.href}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '7px 13px',
                  borderRadius: '8px',
                  color: 'var(--color-gray-600)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'var(--transition)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-navy)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-sky)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-gray-600)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
 
                {/* Badge (LIVE / NEW / etc.) */}
                {link.badge && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    ...badgeStyle(link.badge),
                    color: '#fff',
                    fontSize: '0.6rem',
                    fontWeight: 800,
                    padding: link.badge === 'LIVE' ? '2px 7px 2px 5px' : '2px 7px',
                    borderRadius: '999px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}>
                    {/* Pulse dot only for LIVE */}
                    {link.badge === 'LIVE' && (
                      <span style={{
                        width: 5, height: 5,
                        background: '#fff',
                        borderRadius: '50%',
                        display: 'inline-block',
                        flexShrink: 0,
                        animation: 'pulse-live 1.4s ease-in-out infinite',
                      }} />
                    )}
                    {link.badge}
                  </span>
                )}
 
                {link.children && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
 
              {/* Dropdown */}
              {link.children && activeDropdown === link.label && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 6px)', left: 0,
                  background: '#fff',
                  border: '1px solid var(--color-gray-100)',
                  borderRadius: '14px',
                  padding: '6px',
                  minWidth: 190,
                  boxShadow: '0 8px 32px rgba(13,27,62,0.12)',
                  zIndex: 200,
                }}>
                  {link.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '10px 14px',
                        color: 'var(--color-gray-600)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        borderRadius: '9px',
                        transition: 'var(--transition)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--color-sky)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--color-blue)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = 'var(--color-gray-600)';
                      }}
                    >
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: 'var(--color-blue)', display: 'inline-block', flexShrink: 0,
                      }} />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
 
        {/* spacer (mobile) */}
        <div style={{ flex: 1 }} className="lg-hide" />
 
        {/* ── CTA + Hamburger ───────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '9px 22px',
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
              color: 'var(--color-navy-deep)',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'var(--transition)',
              boxShadow: '0 3px 12px rgba(212,160,23,0.35)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(212,160,23,0.45)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 3px 12px rgba(212,160,23,0.35)';
            }}
          >
            Start Free
          </a>
 
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              display: 'none',
              background: 'var(--color-sky)',
              border: '1px solid var(--color-gray-200)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--color-navy)',
            }}
          >
            {mobileOpen
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            }
          </button>
        </div>
      </div>
 
      {/* ── Mobile Menu ──────────────────────────── */}
      {mobileOpen && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid var(--color-gray-100)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          {navLinks.map(link => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 0',
                  color: 'var(--color-navy)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderBottom: '1px solid var(--color-gray-100)',
                }}
              >
                {link.label}
                {link.badge && (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    ...badgeStyle(link.badge),
                    color: '#fff',
                    fontSize: '0.6rem', fontWeight: 800,
                    padding: '2px 8px', borderRadius: '999px',
                  }}>
                    {link.badge === 'LIVE' && (
                      <span style={{ width: 5, height: 5, background: '#fff', borderRadius: '50%', display: 'inline-block' }} />
                    )}
                    {link.badge}
                  </span>
                )}
              </Link>
              {link.children?.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 14px',
                    color: 'var(--color-gray-600)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    borderBottom: '1px solid var(--color-gray-50)',
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-blue)', display: 'inline-block' }} />
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginTop: '1.25rem',
              padding: '14px',
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-bright))',
              color: 'var(--color-navy-deep)',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Start Preparing Free →
          </a>
        </div>
      )}
 
      <style>{`
        @media (min-width: 1024px) {
          .lg-nav    { display: flex !important; }
          .hamburger { display: none  !important; }
          .lg-hide   { display: none  !important; }
        }
        @media (max-width: 1023px) {
          .hamburger { display: flex  !important; }
        }
      `}</style>
    </header>
  );
}