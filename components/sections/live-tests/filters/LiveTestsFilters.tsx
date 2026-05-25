// PATH: components/live-tests/filters/LiveTestsFilters.tsx
'use client';

import { Globe, Target, Zap, BookOpen, Unlock } from 'lucide-react';
import { liveTestTabs } from '@/lib/data/live-tests';
import { tabCount } from '@/components/sections/live-tests/hooks/useLiveTestFilters';
import type { LiveTestTab } from '@/types/live-tests';

// ─── Icon map ─────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Globe, Target, Zap, BookOpen, Unlock,
};

interface Props {
  activeTab: LiveTestTab;
  onTabChange: (tab: LiveTestTab) => void;
  liveCount: number;
}

export default function LiveTestsFilters({ activeTab, onTabChange, liveCount }: Props) {
  return (
    <div
      className="sticky top-[64px] z-30 bg-white border-b border-[var(--color-gray-100)]"
      style={{ boxShadow: '0 2px 12px rgba(13,27,62,0.06)' }}
    >
      <div className="container-custom">
        <div className="flex items-center gap-2.5 py-3 overflow-x-auto scroll-hide">

          {/* Live count pill */}
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[11px] font-bold text-red-600 whitespace-nowrap">
            <span className="lf-live-dot" aria-hidden />
            {liveCount} Live
          </span>

          <div className="w-px h-5 bg-[var(--color-gray-200)] flex-shrink-0" aria-hidden />

          {/* Tab pills */}
          {liveTestTabs.map(({ label, iconName }) => {
            const Icon = ICON_MAP[iconName] ?? Globe;
            const isActive = activeTab === label;
            const count = tabCount(label);

            return (
              <button
                key={label}
                onClick={() => onTabChange(label)}
                aria-pressed={isActive}
                className={`
                  flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  text-[11px] font-semibold whitespace-nowrap transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)]
                  ${isActive
                    ? 'text-white shadow-sm'
                    : 'border border-[var(--color-gray-200)] text-[var(--color-gray-600)] hover:text-[var(--color-navy)] hover:border-[var(--color-gray-300)] hover:bg-[var(--color-gray-50)]'
                  }
                `}
                style={isActive ? {
                  background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)',
                } : {}}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden />
                {label}
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--color-gray-100)] text-[var(--color-gray-400)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .lf-live-dot {
          display: inline-block;
          width: 7px; height: 7px;
          background: #ef4444;
          border-radius: 50%;
          animation: lf-pulse 1.5s ease-in-out infinite;
        }
        @keyframes lf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .5; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}