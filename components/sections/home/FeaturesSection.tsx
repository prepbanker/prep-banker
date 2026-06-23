// PATH: components/sections/home/FeaturesSection.tsx
'use client';

import { useState } from 'react';
import {
  GraduationCap,
  ClipboardList,
  Activity,
  BarChart2,
  Newspaper,
  Lightbulb,
  Info,
  Smartphone,
  Check,
} from 'lucide-react';
import { SectionTitle } from '@/components/ui';
import { features } from '@/lib/data';

// ─────────────────────────────────────────
// FeaturesSection
// ─────────────────────────────────────────

const ICONS: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={24} strokeWidth={1.8} />,
  ClipboardList: <ClipboardList size={24} strokeWidth={1.8} />,
  Activity:      <Activity size={24} strokeWidth={1.8} />,
  BarChart2:     <BarChart2 size={24} strokeWidth={1.8} />,
  Newspaper:     <Newspaper size={24} strokeWidth={1.8} />,
  Lightbulb:     <Lightbulb size={24} strokeWidth={1.8} />,
  Info:          <Info size={24} strokeWidth={1.8} />,
  Smartphone:    <Smartphone size={24} strokeWidth={1.8} />,
};

const ACCENT_COLORS = [
  'var(--color-blue)',
  'var(--color-gold)',
  'var(--color-live)',
  '#7C3AED',
  '#059669',
  '#D97706',
  'var(--color-navy-light)',
  '#0891B2',
];

export default function FeaturesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section aria-label="Why Prepare with PrepBanker Mock Tests" className="py-20 bg-gradient-to-b from-[var(--color-off-white)] to-[var(--color-sky)]">
      <div className="container-custom">
        <SectionTitle
          label="Platform Features"
          title="Why Prepare with "
          highlight="PrepBanker Mock Tests"
          subtitle="Access SBI PO and IBPS PO mock tests, sectional tests, practice questions, current affairs, study material, and live exams—all designed to help you prepare efficiently and improve your performance."
        />

        {/* Feature Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((feat, i) => {
            const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
            const isActive = activeId === feat.id;

            return (
              <li
                key={feat.id}
                onMouseEnter={() => setActiveId(feat.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`bg-white rounded-2xl p-6 border border-slate-100/80 transition-all duration-300 cursor-default flex flex-col gap-4 ${
                  isActive ? 'shadow-lg -translate-y-1.5' : 'shadow-[var(--shadow-card)] translate-y-0'
                }`}
                style={{
                  boxShadow: isActive ? `0 8px 32px ${color}20` : undefined,
                }}
              >
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: isActive ? color : `${color}15`,
                    color: isActive ? '#fff' : color,
                    boxShadow: isActive ? `0 4px 16px ${color}40` : 'none',
                  }}
                >
                  {ICONS[feat.icon] ?? <span style={{ fontSize: '1.4rem' }}>⚡</span>}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-base text-[var(--color-navy)] mb-1.5 leading-snug">
                    {feat.title}
                    {feat.isPremium && (
                      <span className="ml-1.5 text-xs bg-[var(--color-gold-light)] text-[#7A5200] px-2 py-0.5 rounded-full font-bold align-middle">
                        PRO
                      </span>
                    )}
                  </h3>
                  <p className="text-[var(--color-gray-600)] text-xs leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="list-none flex flex-col gap-1.5 mt-auto">
                  {feat.highlights.map((h, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-xs transition-all duration-300 ${
                        isActive ? 'text-[var(--color-navy)]' : 'text-[var(--color-gray-600)]'
                      }`}
                    >
                      <span
                        className="w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isActive ? `${color}20` : 'var(--color-gray-100)',
                        }}
                      >
                        <Check
                          size={10}
                          className="transition-all duration-300"
                          style={{
                            color: isActive ? color : 'var(--color-gray-400)',
                          }}
                        />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}