// PATH: components/sections/WhyPrepBankerSection.tsx
'use client';

import { useState } from 'react';
import {
  Users,
  FileText,
  Star,
  ThumbsUp,
  HelpCircle,
  CalendarDays,
  Target,
  BarChart2,
  Zap,
  Trophy,
  Newspaper,
  BookOpen,
  Zap as ZapIcon,
} from 'lucide-react';
import { SectionTitle, Button } from '@/components/ui';
import { whyPrepBanker } from '@/lib/data';

// ─────────────────────────────────────────
// Platform Stats
// ─────────────────────────────────────────
const PLATFORM_STATS = [
  {
    value: '50K+',
    label: 'Active Aspirants',
    icon: <Users size={22} strokeWidth={1.8} />,
    iconBg: '#dbeafe',
    iconColor: '#1B6EB5',
  },
  {
    value: '2M+',
    label: 'Questions Attempted',
    icon: <FileText size={22} strokeWidth={1.8} />,
    iconBg: '#ede9fe',
    iconColor: '#7c3aed',
  },
  {
    value: '4.8★',
    label: 'Average Rating',
    icon: <Star size={22} strokeWidth={1.8} />,
    iconBg: '#fef9c3',
    iconColor: '#D4A017',
  },
  {
    value: '95%',
    label: 'Student Satisfaction',
    icon: <ThumbsUp size={22} strokeWidth={1.8} />,
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
  },
  {
    value: '500+',
    label: 'Mock Tests & Quizzes',
    icon: <HelpCircle size={22} strokeWidth={1.8} />,
    iconBg: '#ffedd5',
    iconColor: '#ea580c',
  },
  {
    value: '365',
    label: 'Days of Current Affairs Updates',
    icon: <CalendarDays size={22} strokeWidth={1.8} />,
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
  },
];

// ─────────────────────────────────────────
// Feature icons mapped to data order
// ─────────────────────────────────────────
const FEAT_META: { icon: React.ReactNode; color: string }[] = [
  { icon: <Target size={20} strokeWidth={1.9} />,     color: '#1B6EB5' },
  { icon: <BarChart2 size={20} strokeWidth={1.9} />,  color: '#7c3aed' },
  { icon: <Zap size={20} strokeWidth={1.9} />,        color: '#D4A017' },
  { icon: <Trophy size={20} strokeWidth={1.9} />,     color: '#16a34a' },
  { icon: <Newspaper size={20} strokeWidth={1.9} />,  color: '#0284c7' },
  { icon: <BookOpen size={20} strokeWidth={1.9} />,   color: '#ea580c' },
];

// ─────────────────────────────────────────
// WhyPrepBankerSection
// ─────────────────────────────────────────
export default function WhyPrepBankerSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
      />
      <div
        className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'rgba(27,110,181,.05)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative">

        {/* ── Section Title ── */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-[0.72rem] font-bold uppercase tracking-wider mb-4"
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
          />

          <p className="text-slate-500 text-[0.92rem] max-w-2xl mx-auto leading-relaxed">
            Everything you need for SBI PO and IBPS PO preparation in one place—mock tests, sectional tests, practice questions, current affairs, study material, and live exams.
          </p>
        </div>

        {/* ── Stats Cards ── */}
        <ul className="flex flex-wrap justify-center gap-4 mb-14">
          {PLATFORM_STATS.map((stat, i) => (
            <li
              key={i}
              className="flex flex-col items-center gap-2 rounded-2xl px-6 py-5 border border-[#1A2D5A] bg-[#0D1B3E] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#07102A] hover:shadow-[0_8px_28px_rgba(13,27,62,.25)]"
              style={{ flex: '1 1 130px', maxWidth: 170 }}
            >
              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                style={{
                  background: stat.iconBg,
                  color: stat.iconColor,
                }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <span
                className="font-bold text-[1.65rem] text-[#ffffff] leading-none tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-slate-300 text-[0.72rem] font-semibold text-center leading-snug">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>

        {/* ── Feature Grid ── */}
        <ul className="grid gap-[1.1rem] mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
          {whyPrepBanker.map((item, i) => {
            const meta = FEAT_META[i] ?? FEAT_META[0];
            const hovered = hoveredIdx === i;

            return (
              <li
                key={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="flex gap-4 p-[1.4rem] rounded-[14px] transition-all duration-250 cursor-default"
                style={{
                  background: '#fff',
                  border: hovered
                    ? '1.5px solid rgba(27,110,181,.22)'
                    : '1.5px solid #f0ece4',
                  transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hovered
                    ? '0 8px 28px rgba(13,27,62,.09)'
                    : 'none',
                }}
              >
                {/* Icon */}
                <div
                  className="w-[50px] h-[50px] flex-shrink-0 rounded-[13px] flex items-center justify-center transition-all duration-250"
                  style={{
                    background: hovered
                      ? 'linear-gradient(135deg, #0D1B3E, #1B6EB5)'
                      : '#f1f5f9',
                    color: hovered ? '#fff' : meta.color,
                  }}
                >
                  {meta.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-[0.95rem] text-[#0D1B3E] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[0.81rem] leading-relaxed">
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
            />
            <a
              href="https://app.prepgrind.com/register"
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
              />
              <ZapIcon size={16} strokeWidth={2.5} className="relative z-10" />
              <span className="relative z-10">Start Preparing Free Today</span>
            </a>
          </div>

          <p className="text-slate-400 text-[0.78rem] mt-3">
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