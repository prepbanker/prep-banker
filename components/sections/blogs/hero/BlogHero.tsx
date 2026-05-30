// PATH: components/sections/blogs/hero/BlogHero.tsx
import {
  BookOpen, TrendingUp, PenLine, Users, Star, Sparkles, Lightbulb,
} from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';

// ─── Blog stats ───────────────────────────
const BLOG_STATS = [
  { icon: PenLine,   value: '500+',  label: 'Blog Posts'       },
  { icon: BookOpen,  value: '12+',   label: 'Exam Categories'  },
  { icon: Users,     value: '1.2L+', label: 'Monthly Readers'  },
  { icon: TrendingUp,value: 'Weekly',label: 'New Strategies'   },
  { icon: Star,      value: '4.8★',  label: 'Avg. Rating'      },
  { icon: Lightbulb, value: 'Free',  label: 'Always Free'      },
];

// ─── Component ────────────────────────────
export default function BlogHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-navy-deep)]"
      style={{ padding: '3rem 0 2.5rem' }}
    >

      {/* ── Decorative background blobs (matches CAHero pattern exactly) ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Top-left blue blob */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
        />
        {/* Top-right gold blob */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
        />
        {/* Bottom-center subtle blue accent */}
        <div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, var(--color-blue-bright) 0%, transparent 70%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">

        {/* ── Breadcrumb ── */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blogs' },
          ]}
        />

        {/* ── Badge ── */}
        <div className="mt-4 mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/25">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
          <span className="text-xs font-bold text-[var(--color-gold-bright)] uppercase tracking-widest">
            Expert Banking Insights
          </span>
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-extrabold leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#fff',
          }}
        >
          Banking Exam{' '}
          <span className="text-gold-gradient">Blogs &amp; Guides</span>
        </h1>

        <p
          className="mt-3 max-w-xl text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.62)' }}
        >
          In-depth strategies, study plans, and expert tips for SBI PO &amp; IBPS PO aspirants.
          From syllabus breakdowns to last-minute revision hacks — everything you need to
          crack your banking exam in one place.
        </p>

        {/* ── Topic pills ── */}
        <div className="mt-5 flex flex-wrap gap-2">
          {['SBI PO', 'IBPS PO', 'RBI Grade B', 'Quantitative Aptitude', 'English', 'Current Affairs', 'Interview Tips'].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {BLOG_STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <span
                className="flex-shrink-0 p-2 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.10)' }}
              >
                <Icon className="w-4 h-4 text-[var(--color-gold-bright)]" aria-hidden />
              </span>
              <div>
                <p className="text-base font-bold text-white leading-none">{value}</p>
                <p
                  className="text-[10px] font-medium mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom separator */}
      <div className="h-px mt-10 bg-white/10 relative z-10" />
    </section>
  );
}