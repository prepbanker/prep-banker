// PATH: components/live-tests/cards/CountdownTimer.tsx
// Isolated timer display — accepts seconds, renders HH:MM:SS.
// Memoized so only this sub-tree re-renders each tick.

import { memo } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { formatTimer } from '@/lib/utils/timer';

interface Props {
  timeLeft: number;  // seconds; 0 = expired
}

const CountdownTimer = memo(function CountdownTimer({ timeLeft }: Props) {
  const isExpired = timeLeft <= 0;
  const isUrgent  = timeLeft < 3600 && timeLeft > 0;

  if (isExpired) {
    return (
      <div className="flex items-center justify-center gap-2 text-[var(--color-gray-400)] text-xs py-2.5 rounded-xl bg-[var(--color-gray-50)] border border-[var(--color-gray-100)]">
        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden />
        Test Completed
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
      style={{
        background: isUrgent ? '#fff5f5' : 'var(--color-sky)',
        border: `1px solid ${isUrgent ? 'rgba(239,68,68,0.2)' : 'rgba(27,110,181,0.15)'}`,
      }}
    >
      <div>
        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-gray-400)] mb-0.5">
          Ends In
        </p>
        <p
          className="text-xl font-bold tracking-[0.05em] leading-none"
          aria-live="polite"
          aria-atomic
          style={{
            fontFamily: 'var(--font-mono)',
            color: isUrgent ? '#ef4444' : 'var(--color-blue)',
          }}
        >
          {formatTimer(timeLeft)}
        </p>
      </div>
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: isUrgent ? '#fee2e2' : '#dbeafe' }}
      >
        <Clock
          className="w-4 h-4"
          aria-hidden
          style={{ color: isUrgent ? '#ef4444' : 'var(--color-blue)' }}
        />
      </div>
    </div>
  );
});

export default CountdownTimer;