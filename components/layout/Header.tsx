'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import Image from 'next/image';
import Logo from "../../public/images/prepbanker-logo-2.png"

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

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  function badgeStyle(badge: string): React.CSSProperties {
    if (badge === 'LIVE') return { background: '#EF4444' };
    if (badge === 'NEW')  return { background: 'linear-gradient(135deg,#7C3AED,#A855F7)' };
    return { background: 'var(--color-blue)' };
  }

  return (
    <header
      suppressHydrationWarning
      className={`sticky top-0 z-[100] bg-white transition-all duration-300 ${
        scrolled
          ? 'border-b border-[rgba(13,27,62,0.1)] shadow-[0_2px_20px_rgba(13,27,62,0.08)]'
          : 'border-b border-[rgba(13,27,62,0.07)]'
      }`}
    >
      <div className="container-custom flex items-center h-16 gap-4 lg:gap-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <Image
              src={Logo}
              alt="PrepBanker Logo"
              fill
              priority
              sizes="42px"
              className="object-contain"
            />
          </div>
          <div>
            <div
              className="font-extrabold leading-none tracking-tight text-[var(--color-navy-deep)]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              }}
            >
              Prep<span className="text-[var(--color-gold-bright)]">Banker</span>
            </div>
            <div className="text-[var(--color-gray-400)] uppercase tracking-widest leading-none mt-0.5"
              style={{ fontSize: 'clamp(0.5rem, 1.2vw, 0.58rem)' }}
            >
              Banking Exam Prep
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex flex-1 items-center gap-0.5">
          {navLinks.map(link => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.88rem] font-semibold text-[var(--color-gray-600)] no-underline whitespace-nowrap transition-all duration-200 hover:text-[var(--color-navy)] hover:bg-[var(--color-sky)]"
              >
                {link.label}

                {link.badge && (
                  <span
                    className="inline-flex items-center gap-1 text-white text-[0.6rem] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none"
                    style={badgeStyle(link.badge)}
                  >
                    {link.badge === 'LIVE' && (
                      <span className="w-1 h-1 bg-white rounded-full inline-block shrink-0 animate-[pulse-live_1.4s_ease-in-out_infinite]" />
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
                <div className="absolute top-[calc(100%+6px)] left-0 bg-white border border-[var(--color-gray-100)] rounded-2xl p-1.5 min-w-[190px] shadow-[0_8px_32px_rgba(13,27,62,0.12)] z-[200] before:absolute before:-top-[8px] before:left-0 before:right-0 before:h-[8px] before:content-['']">
                  {link.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-2 px-3.5 py-2.5 text-[0.875rem] font-medium text-[var(--color-gray-600)] no-underline rounded-xl transition-all duration-200 hover:bg-[var(--color-sky)] hover:text-[var(--color-blue)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] inline-block shrink-0" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* spacer mobile */}
        <div className="flex-1 lg:hidden" />

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            className="
              inline-flex items-center justify-center
              px-3 sm:px-5 py-2 sm:py-2.5
              rounded-xl font-bold no-underline whitespace-nowrap
              text-[var(--color-navy-deep)]
              transition-all duration-200
              hover:-translate-y-px
              text-xs sm:text-sm
            "
            style={{
              background: 'var(--color-yellow)',
              boxShadow: '0 3px 12px rgba(251,191,36,0.35)',
            }}
          >
            <span className="hidden sm:inline" suppressHydrationWarning>Start Free</span>
            <span className="sm:hidden" suppressHydrationWarning>Sign Up free</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-sky)] border border-[var(--color-gray-200)] cursor-pointer text-[var(--color-navy)] transition-colors duration-200 hover:bg-[var(--color-gray-100)]"
          >
            {mobileOpen
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-full left-0 right-0 bg-white border-t border-[var(--color-gray-100)] z-50 lg:hidden max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-4 py-3 pb-6">

              {navLinks.map(link => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-base font-semibold text-[var(--color-navy)] no-underline border-b border-[var(--color-gray-100)]"
                  >
                    {link.label}
                    {link.badge && (
                      <span
                        className="inline-flex items-center gap-1 text-white text-[0.6rem] font-black px-2 py-0.5 rounded-full uppercase tracking-wide"
                        style={badgeStyle(link.badge)}
                      >
                        {link.badge === 'LIVE' && (
                          <span className="w-1 h-1 bg-white rounded-full inline-block" />
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
                      className="flex items-center gap-2 px-3.5 py-2.5 text-[0.9rem] text-[var(--color-gray-600)] no-underline border-b border-[var(--color-gray-50)] hover:bg-[var(--color-sky)] hover:text-[var(--color-blue)] transition-colors duration-150 rounded-lg mx-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] inline-block shrink-0" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}

              <a
                href="https://app.prepgrind.com/register"
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
                className="flex items-center justify-center mt-5 py-3.5 rounded-xl font-bold text-base text-[var(--color-navy-deep)] no-underline text-center"
                style={{
                  background: 'var(--color-yellow)',
                }}
              >
                Start Preparing Free →
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}