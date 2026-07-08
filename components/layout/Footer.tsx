// PATH: components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/prepbanker-logo-2.png';

// ─────────────────────────────────────────
// Footer — PrepBanker
// ─────────────────────────────────────────
const footerLinks = {
  Exams: [
    { label: 'SBI PO',       href: '/sbi-po' },
    { label: 'IBPS PO',      href: '/ibps-po' },
    { label: 'All Exams',    href: '/exams' },
  ],
  Prepare: [
    { label: 'Quiz Practice',    href: '/sbi-po-ibps-po-quiz' },
    { label: 'Live Tests',       href: '/live-tests' },
    { label: 'Current Affairs',  href: '/current-affairs' },
  ],
  Company: [
    { label: 'About Us',    href: '/about' },
    { label: 'Contact Us',  href: '/contact' },
    { label: 'Blogs',        href: '/blogs' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy',     href: '/privacy' },
  ],
};

const socialLinks = [
  { label: 'Telegram', href: 'https://t.me/prepbanker', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.92 14.233 5.022 13.4c-.645-.204-.657-.645.136-.953l11.18-4.31c.535-.194 1.004.131.556 2.084z"/>
    </svg>
  )},
  { label: 'YouTube', href: 'https://youtube.com/@prepbanker', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )},
  { label: 'Instagram', href: 'https://instagram.com/prepbanker', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )},
  { label: 'Twitter / X', href: 'https://twitter.com/prepbanker', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
];

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-navy-deep) 0%, #030a18 100%)',
      borderTop: '1px solid rgba(251,191,36,0.15)',
      color: 'rgba(255,255,255,0.7)',
    }}>
      {/* ── Main Footer ─────────────────────── */}
      <div className="container-custom" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div style={{
                position: 'relative',
                width: 40,
                height: 40,
                flexShrink: 0,
                background: '#ffffff',
                borderRadius: '10px',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(255,255,255,0.05)',
              }}>
                <Image
                  src={Logo}
                  alt="PrepBanker Logo"
                  className="object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 805, fontSize: '1.3rem', color: '#fff', lineHeight: 1.15 }}>
                  Prep<span className="text-[var(--color-yellow)]">Banker</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-400)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '3px' }}>
                  Banking Exam Prep
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.25rem' }}>
              India&apos;s most trusted banking exam preparation platform for SBI PO and IBPS PO aspirants. Practice quizzes, live exams, current affairs, and smart analytics — all in one place.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   title={s.label}
                   style={{
                     width: 38, height: 38,
                     background: 'rgba(255,255,255,0.07)',
                     border: '1px solid rgba(255,255,255,0.1)',
                     borderRadius: '9px',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     color: 'rgba(255,255,255,0.6)',
                     transition: 'var(--transition)',
                   }}
                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(251,191,36,0.15)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-yellow)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,191,36,0.3)'; }}
                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                color: 'var(--color-yellow)',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>{title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} style={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'var(--transition)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-yellow)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ──────────────────────── */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} PrepBanker. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Terms', href: '/terms' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Contact', href: '/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'var(--transition)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-yellow)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}