// PATH: hooks/useLiveTimers.ts
// PrepBanker — Isolated timer state for Live Tests
// Owns all countdown logic; components just read `timers[id]`.

'use client';

import { useState, useEffect, useRef } from 'react';
import type { TimersMap } from '@/types/live-tests';
import { randomCountdown } from '@/lib/utils/timer';
import {
  TIMER_STORAGE_KEY,
  COUNTDOWN_MIN_HOURS,
  COUNTDOWN_MAX_HOURS,
} from '@/lib/data/live-tests';

/** Seed initial timers (module scope — stable across renders). */
function buildInitialTimers(ids: string[]): TimersMap {
  const map: TimersMap = {};
  ids.forEach(id => {
    map[id] = randomCountdown(COUNTDOWN_MIN_HOURS, COUNTDOWN_MAX_HOURS);
  });
  return map;
}

/**
 * useLiveTimers
 * Accepts an array of test IDs, returns a TimersMap (id → seconds remaining).
 * Persists to localStorage so timers survive soft navigation.
 * Tick interval is cleaned up on unmount.
 */
export function useLiveTimers(ids: string[]): TimersMap {
  const initialRef = useRef<TimersMap | null>(null);

  // Build or restore initial timers exactly once.
  if (!initialRef.current) {
    initialRef.current = buildInitialTimers(ids);
  }

  const [timers, setTimers] = useState<TimersMap>(initialRef.current);

  // Restore persisted timers after mount (client-side only).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(TIMER_STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as TimersMap;
        // Only restore if every id exists and has a non-negative value.
        const valid = ids.every(id => typeof saved[id] === 'number' && saved[id] >= 0);
        if (valid) setTimers(saved);
      }
    } catch {
      /* ignore parse errors */
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 1-second countdown tick.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers(prev => {
        const next: TimersMap = {};
        ids.forEach(id => {
          next[id] = prev[id] > 0 ? prev[id] - 1 : 0;
        });
        try {
          localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* storage quota exceeded — continue silently */
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  // Run once; ids list is stable for the lifetime of the page.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timers;
}