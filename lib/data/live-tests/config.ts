// PATH: lib/data/live-tests/config.ts
// PrepBanker — Live Tests UI Config Data
// Edit hero stats, tab order, and page size here — zero UI changes required.

import type { LiveTestHeroStat, LiveTestTabConfig } from '@/types/live-tests';

// ─── Hero Stats Strip ─────────────────────────────────────────
export const heroStats: LiveTestHeroStat[] = [
  { iconName: 'Radio',  value: '18+',      label: 'Live Tests'          },
  { iconName: 'Users',  value: '13,450+',  label: 'Aspirants Competing' },
  { iconName: 'Clock',  value: '20–180m',  label: 'Test Durations'      },
  { iconName: 'Zap',    value: 'Free',     label: 'Tests Available'     },
];

// ─── Filter Tabs ──────────────────────────────────────────────
export const liveTestTabs: LiveTestTabConfig[] = [
  { label: 'All Live Tests', iconName: 'Globe'   },
  { label: 'SBI-PO Live',   iconName: 'Target'  },
  { label: 'IBPS-PO Live',  iconName: 'Target'  },
  { label: 'Prelims Tests', iconName: 'Zap'     },
  { label: 'Mains Tests',   iconName: 'BookOpen'},
  { label: 'Free Tests',    iconName: 'Unlock'  },
];

// ─── Pagination ───────────────────────────────────────────────
export const PAGE_SIZE = 6;

// ─── Timer ────────────────────────────────────────────────────
export const TIMER_STORAGE_KEY = 'pb_live_timers_v2';
export const COUNTDOWN_MIN_HOURS = 1;
export const COUNTDOWN_MAX_HOURS = 7;