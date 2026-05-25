// PATH: lib/utils/index.ts
// ─────────────────────────────────────────
// PrepBanker — Utility Functions
// ─────────────────────────────────────────

/** Format large numbers → "1.2M", "50K", etc. */
export function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000)     return `${Math.round(n / 1_000)}K+`;
  return n.toString();
}

/** Format seconds → "HH:MM:SS" */
export function formatTimer(seconds: number): string {
  if (seconds <= 0) return '00:00:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}

/** Generate a random countdown between min and max hours (in seconds) */
export function randomCountdown(minHours = 1, maxHours = 8): number {
  const min = minHours * 3600;
  const max = maxHours * 3600;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Get initials from a name */
export function getInitials(name: string): string {
  return name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
}

/** Render star rating as array of booleans */
export function starArray(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
}

/** Clamp a number between min and max */
export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

/** Truncate text with ellipsis */
export function truncate(text: string, maxLen: number): string {
  return text.length > maxLen ? text.slice(0, maxLen - 1) + '…' : text;
}

/** cn – conditional className joiner */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Difficulty color class */
export function difficultyColor(level: string): string {
  switch (level) {
    case 'Easy':   return 'badge-green';
    case 'Medium': return 'badge-gold';
    case 'Hard':   return 'badge-red';
    default:       return 'badge-blue';
  }
}

/** Importance color */
export function importanceColor(level: string): string {
  switch (level) {
    case 'High':   return 'text-red-600 bg-red-50';
    case 'Medium': return 'text-yellow-700 bg-yellow-50';
    case 'Low':    return 'text-green-700 bg-green-50';
    default:       return 'text-gray-600 bg-gray-50';
  }
}