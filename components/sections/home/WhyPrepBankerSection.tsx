// PATH: components/sections/home/WhyPrepBankerSection.tsx
import {
  Users,
  FileText,
  Star,
  HelpCircle,
  Target,
  BarChart2,
  Zap,
  Trophy,
  Newspaper,
  BookOpen,
  Clock,
} from 'lucide-react';
import { whyPrepBanker } from '@/lib/data';
import RunningCounter from '@/components/shared/RunningCounter';

// ─────────────────────────────────────────
// Platform Stats Data for Running Counter
// ─────────────────────────────────────────
const PLATFORM_STATS = [
  {
    target: 50,
    decimals: 0,
    suffix: 'K+',
    label: 'Active Aspirants',
    icon: <Users size={22} strokeWidth={1.8} />,
    iconBg: '#dbeafe',
    iconColor: '#1B6EB5',
  },
  {
    target: 2,
    decimals: 0,
    suffix: 'M+',
    label: 'Questions Attempted',
    icon: <FileText size={22} strokeWidth={1.8} />,
    iconBg: '#ede9fe',
    iconColor: '#7c3aed',
  },
  {
    target: 4.8,
    decimals: 1,
    suffix: '★',
    label: 'Average Rating',
    icon: <Star size={22} strokeWidth={1.8} />,
    iconBg: '#fef9c3',
    iconColor: '#B28203',
  },
  {
    target: 500,
    decimals: 0,
    suffix: '+',
    label: 'Mock Tests & Quizzes',
    icon: <HelpCircle size={22} strokeWidth={1.8} />,
    iconBg: '#ffedd5',
    iconColor: '#ea580c',
  },
];

// ─────────────────────────────────────────
// Feature icons mapped to data order
// ─────────────────────────────────────────
const FEAT_META: { icon: React.ReactNode; color: string }[] = [
  { icon: <Target size={20} strokeWidth={1.9} />, color: '#1B6EB5' },
  { icon: <BarChart2 size={20} strokeWidth={1.9} />, color: '#7c3aed' },
  { icon: <Zap size={20} strokeWidth={1.9} />, color: '#B28203' },
  { icon: <Trophy size={20} strokeWidth={1.9} />, color: '#16a34a' },
  { icon: <Newspaper size={20} strokeWidth={1.9} />, color: '#0284c7' },
  { icon: <BookOpen size={20} strokeWidth={1.9} />, color: '#ea580c' },
  { icon: <Clock size={20} strokeWidth={1.9} />, color: '#06b6d4' },
  { icon: <HelpCircle size={20} strokeWidth={1.9} />, color: '#ec4899' },
];

export default function WhyPrepBankerSection() {
  return (
    <section
      aria-label="The Smarter Way to Crack SBI PO & IBPS PO"
      className="py-20 overflow-hidden relative"
      style={{
        background:
          'linear-gradient(175deg, #fffcf5 0%, #ffffff 55%, #f5f7ff 100%)',
      }}
    >
      {/* Decorative background orbs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'rgba(212,160,23,.06)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'rgba(27,110,181,.05)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1350px] mx-auto px-6 relative">

        {/* ── Section Title ── */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4"
            style={{
              background: '#fef9e7',
              border: '1px solid #fde68a',
              color: '#92400e',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: '#D4A017' }}
            />
            Why PrepBanker
          </span>

          <h2
            className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-bold leading-tight text-[#0D1B3E] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Smarter Way to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4A017, #F0B429)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Crack SBI PO & IBPS PO
            </span>
          </h2>

          {/* Gold–blue accent bar */}
          <div
            className="w-14 h-1 rounded-full mx-auto mb-4"
            style={{ background: 'linear-gradient(90deg, #D4A017, #1B6EB5)' }}
            aria-hidden="true"
          />

          <p className="text-slate-500 text-[0.92rem] max-w-2xl mx-auto leading-relaxed">
            Everything you need for SBI PO and IBPS PO preparation in one place—mock tests, sectional tests, practice questions, current affairs, study material, and live exams.
          </p>
        </div>

        {/* ── Stats Cards ── */}
        <ul className="flex flex-wrap justify-center gap-5 mb-14 list-none">
          {PLATFORM_STATS.map((stat, i) => (
            <li
              key={i}
              className="flex flex-col items-center gap-3.5 rounded-2xl px-6 py-8 border border-[#1a2d5a] bg-[#0D1B3E] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,27,62,0.22)]"
              style={{ flex: '1 1 160px', maxWidth: 220 }}
            >
              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-[14px]  flex items-center justify-center"
                style={{
                  background: stat.iconBg,
                  color: stat.iconColor,
                }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <span
                className="font-extrabold text-[2.3rem] text-[#ffffff] leading-none tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RunningCounter
                  target={stat.target}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </span>

              {/* Label */}
              <span className="text-slate-300 text-xs font-semibold text-center leading-snug">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>

        {/* ── Feature Grid ── */}
        <ul className="grid gap-[1.1rem] mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
          {whyPrepBanker.map((item, i) => {
            const meta = FEAT_META[i] ?? FEAT_META[0];

            return (
              <li
                key={i}
                style={{
                  '--meta-color': meta.color,
                  '--meta-hover-border': 'rgba(27,110,181,.22)',
                } as React.CSSProperties}
                className="flex gap-4 p-[1.4rem] rounded-[14px] bg-white border border-[#f0ece4] transition-all duration-250 cursor-default hover:border-[var(--meta-hover-border)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(13,27,62,.09)] group"
              >
                {/* Icon */}
                <div
                  className="w-[50px] h-[50px] flex-shrink-0 rounded-[13px] flex items-center justify-center bg-slate-100 text-[var(--meta-color)] transition-all duration-250 group-hover:bg-gradient-to-br group-hover:from-[#0D1B3E] group-hover:to-[#1B6EB5] group-hover:text-white"
                >
                  {meta.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-[0.95rem] text-[#0D1B3E] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ── Animated CTA ── */}
        <div className="text-center">
          <div className="inline-block relative">
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-[50px] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #D4A017, #F0B429)',
                animation: 'wb-pulse 2.2s ease-out infinite',
              }}
              aria-hidden="true"
            />
            <a
              href="https://app.prepgrind.com/signup/banking"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 px-9 py-4 rounded-[50px] font-bold text-[1rem] text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #D4A017, #F0B429)',
                boxShadow: '0 6px 24px rgba(212,160,23,.42)',
                animation: 'wb-float 3s ease-in-out infinite',
              }}
            >
              {/* Shimmer overlay */}
              <span
                className="absolute inset-0 pointer-events-none rounded-[50px]"
                style={{ animation: 'wb-shimmer 2.5s infinite' }}
                aria-hidden="true"
              />
              <Zap size={16} strokeWidth={2.5} className="relative z-10" />
              <span className="relative z-10">Start Preparing Free Today</span>
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-3">
            No credit card required · Free mock tests available
          </p>
        </div>

      </div>

      {/* ── Scoped Keyframe Animations ── */}
      <style>{`
        @keyframes wb-pulse {
          0%   { transform: scale(1);    opacity: .55; }
          70%  { transform: scale(1.16); opacity: 0;   }
          100% { transform: scale(1.16); opacity: 0;   }
        }
        @keyframes wb-float {
          0%, 100% { transform: translateY(0);    }
          50%       { transform: translateY(-5px); }
        }
        @keyframes wb-shimmer {
          0%   { background: linear-gradient(90deg,transparent 0%,rgba(255,255,255,0) 0%,transparent 100%); background-size:400px 100%; background-position:-400px 0; }
          100% { background: linear-gradient(90deg,transparent 0%,rgba(255,255,255,.22) 50%,transparent 100%); background-size:400px 100%; background-position:400px 0; }
        }
      `}</style>
    </section>
  );
}