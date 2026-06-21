// PATH: components/shared/SidebarInfoCard.tsx
import Link from 'next/link';
import { Sparkles, Users, FileText, TrendingUp, Clock } from 'lucide-react';

const STATS = [
  { icon: Users,      value: '50,000+',  label: 'Active Students' },
  { icon: FileText,   value: '500+',     label: 'Mock Tests'      },
  { icon: TrendingUp, value: '92%',      label: 'Selection Rate'  },
  { icon: Clock,      value: '7 Months', label: 'Full Access'     },
];

export default function SidebarInfoCard() {
  return (
    <div className="mt-4 rounded-[14px] overflow-hidden border border-[rgba(27,110,181,0.15)] bg-white shadow-[0_2px_12px_rgba(13,27,62,0.07)]">

      {/* ── Header strip ── */}
      <div className="bg-gradient-to-br from-[#0D1B3E] to-[#1B3A6B] px-4 py-3.5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[rgba(212,160,23,0.2)] border border-[rgba(212,160,23,0.4)] flex items-center justify-center shrink-0">
          <Sparkles size={14} color="#F0B429" />
        </div>
        <div>
          <p className="text-white font-bold text-xs leading-tight">
            PrepBanker Platform
          </p>
          <p className="text-white/50 text-xs">
            India&apos;s #1 Banking Prep
          </p>
        </div>
      </div>

      {/* ── Stats 2×2 grid ── */}
      <div className="grid grid-cols-2 gap-px bg-[rgba(13,27,62,0.06)]">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="bg-white p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Icon size={11} color="#1B6EB5" strokeWidth={2.2} />
              <span className="font-extrabold text-sm text-[#0D1B3E] leading-none">
                {value}
              </span>
            </div>
            <span className="text-xs text-gray-400 leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Offer pill ── */}
      <div className="mx-3 mt-3 bg-[rgba(212,160,23,0.08)] border border-dashed border-[rgba(212,160,23,0.45)] rounded-[9px] px-3 py-2 flex items-center gap-1.5">
        <span className="text-base leading-none">🎯</span>
        <div>
          <p className="text-xs font-bold text-[#0D1B3E] leading-snug">
            Full Access at just ₹199
          </p>
          <p className="text-xs text-gray-400">
            500+ Mocks &bull; 7 Months validity
          </p>
        </div>
      </div>

      {/* ── CTA buttons ── */}
      <div className="p-3 flex flex-col gap-1.5">
        <a
          href="https://app.prepgrind.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-1.5
            w-full py-2.5
            bg-gradient-to-br from-red-600 to-red-700
            hover:from-red-500 hover:to-red-600
            text-white font-bold text-xs
            rounded-[9px] no-underline
            shadow-[0_3px_12px_rgba(220,38,38,0.3)]
            hover:shadow-[0_5px_18px_rgba(220,38,38,0.4)]
            hover:-translate-y-px
            transition-all duration-150
          "
        >
          <Sparkles size={13} />
          Start Preparing Now
        </a>

        <Link
          href="/live-tests"
          className="
            flex items-center justify-center gap-1.5
            py-2
            border border-[rgba(27,110,181,0.3)] rounded-[9px]
            text-[#1B6EB5] text-xs font-semibold no-underline
            hover:bg-[rgba(27,110,181,0.06)]
            transition-colors duration-150
          "
        >
          <FileText size={12} />
          View All Mock Tests
        </Link>
      </div>
    </div>
  );
}