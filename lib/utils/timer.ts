// PATH: lib/utils/timer.ts
// PrepBanker — Timer Utility Functions

/**
 * Converts a total number of seconds into a HH:MM:SS display string.
 * Always zero-pads each segment to two characters.
 */
export function formatTimer(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return [h, m, sec].map(v => String(v).padStart(2, '0')).join(':');
}

/**
 * Generates a random countdown duration in seconds between the given hour boundaries.
 */
export function randomCountdown(minHours: number, maxHours: number): number {
  const minSec = minHours * 3600;
  const maxSec = maxHours * 3600;
  return Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec;
}