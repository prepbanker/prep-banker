// PATH: lib/data/current-affairs/categories.ts
// ─────────────────────────────────────────
// Category display config — decoupled from UI
// ─────────────────────────────────────────
import type { CACategoryMeta } from '../../../types/current-affairs';

export const CA_CATEGORIES: CACategoryMeta[] = [
  { label: 'All Updates',          iconName: 'Globe'      },
  { label: 'Banking Awareness',    iconName: 'Building2'  },
  { label: 'RBI Updates',          iconName: 'Landmark'   },
  { label: 'Economy & Finance',    iconName: 'TrendingUp' },
  { label: 'Government Schemes',   iconName: 'Flag'       },
  { label: 'International Affairs',iconName: 'Globe2'     },
  { label: 'Static GK',            iconName: 'BookOpen'   },
  { label: 'Important Days',       iconName: 'Calendar'   },
  { label: 'Awards & Honors',      iconName: 'Award'      },
  { label: 'Reports & Indexes',    iconName: 'BarChart2'  },
];

// Category → tailwind colour classes (used in CACard + CAModal)
export const CATEGORY_STYLE: Partial<Record<string, string>> = {
  'RBI Updates':            'bg-blue-50 text-blue-700 border border-blue-100',
  'Economy & Finance':      'bg-amber-50 text-amber-700 border border-amber-100',
  'Banking Awareness':      'bg-sky-50 text-sky-700 border border-sky-100',
  'Government Schemes':     'bg-purple-50 text-purple-700 border border-purple-100',
  'International Affairs':  'bg-teal-50 text-teal-700 border border-teal-100',
  'Static GK':              'bg-indigo-50 text-indigo-700 border border-indigo-100',
  'Important Days':         'bg-rose-50 text-rose-700 border border-rose-100',
  'Awards & Honors':        'bg-yellow-50 text-yellow-700 border border-yellow-100',
  'Reports & Indexes':      'bg-cyan-50 text-cyan-700 border border-cyan-100',
};

export function getCategoryStyle(cat: string): string {
  return CATEGORY_STYLE[cat] ?? 'bg-gray-50 text-gray-600 border border-gray-100';
}