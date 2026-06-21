// PATH: components/sections/quiz/hero/QuizHeroStats.tsx
import { Users, BookOpen, Layers, Star } from 'lucide-react';
import type { QuizPlatformStats } from '@/types/quiz';

function fmtNum(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000)     return `${Math.round(n / 1_000)}K+`;
  return `${n}+`;
}

interface Props { stats: QuizPlatformStats }

export default function QuizHeroStats({ stats }: Props) {
  const cards = [
    {
      value: fmtNum(stats.totalAttempts),
      label: 'Tests Attempted',
      Icon: Users,
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      value: `${stats.freeQuizSeries}`,
      label: 'Free Test Series',
      Icon: BookOpen,
      gradient: 'from-emerald-500 to-emerald-700',
    },
    {
      value: `${stats.totalQuizSeries}+`,
      label: 'Test Series',
      Icon: Layers,
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      value: `${stats.avgRating}/5`,
      label: 'Avg Rating',
      Icon: Star,
      gradient: 'from-[var(--color-gold)] to-amber-600',
    },
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-72">
      {cards.map(({ value, label, Icon, gradient }) => (
        <div
          key={label}
          className={`relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br ${gradient}`}
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
        >
          <div className="absolute -bottom-3 -right-3 opacity-15">
            <Icon className="w-14 h-14 text-white" />
          </div>
          <p className="text-2xl font-black text-white leading-none">{value}</p>
          <p className="mt-1 text-xs font-semibold text-white/70">{label}</p>
        </div>
      ))}
    </div>
  );
}