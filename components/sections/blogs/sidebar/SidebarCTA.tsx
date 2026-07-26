// PATH: components/sections/blogs/sidebar/SidebarCTA.tsx
// ─────────────────────────────────────────
// PrepBanker — Sidebar CTA Card
// Drives users to register on PrepGrind / start free mock tests.
// ─────────────────────────────────────────
import { Zap, ArrowRight } from 'lucide-react';

export default function SidebarCTA() {
  return (
    <div
      className="rounded-2xl overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Decorative blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, var(--color-blue-bright) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 p-5">
        {/* Icon badge */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: 'rgba(240,180,41,0.18)', border: '1px solid rgba(240,180,41,0.30)' }}
        >
          <Zap className="w-5 h-5" style={{ color: 'var(--color-gold-bright)' }} aria-hidden />
        </div>

        <h3
          className="font-extrabold text-base mb-2 leading-snug"
          style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
        >
          Start Your Free Mock Test Today
        </h3>

        <p
          className="text-xs leading-relaxed mb-5"
          style={{ color: 'rgba(255,255,255,0.58)' }}
        >
          Join 2.4 lakh+ aspirants preparing for SBI PO &amp; IBPS PO on PrepGrind.
          Free mock tests, detailed analytics, and expert support.
        </p>

        {/* Feature list */}
        <ul className="flex flex-col gap-1.5 mb-5">
          {[
            '✓ Free Prelims Mock Tests',
            '✓ Detailed Performance Analytics',
            '✓ Topic-wise Practice Sets',
            '✓ Current Affairs Quiz Daily',
          ].map(item => (
            <li
              key={item}
              className="text-xs font-medium"
              style={{ color: 'rgba(255,255,255,0.70)' }}
            >
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://app.prepgrind.com/signup/banking"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all hover:brightness-110 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
            color: 'var(--color-navy-deep)',
            textDecoration: 'none',
            boxShadow: 'var(--shadow-gold)',
          }}
        >
          Start Free — Register Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </a>
      </div>
    </div>
  );
}