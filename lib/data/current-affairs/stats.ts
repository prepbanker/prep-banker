// PATH: lib/data/current-affairs/stats.ts
// ─────────────────────────────────────────
// Hero stat-strip — add/edit without touching UI
// ─────────────────────────────────────────
import type { CAStat } from '../../../types/current-affairs';

export const CA_HERO_STATS: CAStat[] = [
  { iconName: 'Newspaper', value: '25+',    label: 'Daily Updates'   },
  { iconName: 'TrendingUp',value: '10',     label: 'Categories'      },
  { iconName: 'Calendar',  value: 'Monthly',label: 'Compilations'    },
  { iconName: 'BookOpen',  value: '100%',   label: 'Exam Relevant'   },
  { iconName: 'Users',     value: '50k+',   label: 'Active Readers'  },
  { iconName: 'Star',      value: '4.9',    label: 'Avg. Rating'     },
];