// PATH: lib/data/blogs/stats.ts
// ─────────────────────────────────────────
// PrepBanker — Blog Hero Stats
// ─────────────────────────────────────────

export interface BlogHeroStat {
  iconName: string;  // maps to lucide-react icon name
  value: string;
  label: string;
}

export const BLOG_HERO_STATS: BlogHeroStat[] = [
  { iconName: 'BookOpen',   value: '120+',    label: 'Expert Articles'    },
  { iconName: 'Users',      value: '2.4L+',   label: 'Monthly Readers'   },
  { iconName: 'TrendingUp', value: '8',        label: 'Categories'        },
  { iconName: 'Star',       value: '4.8★',    label: 'Avg. Rating'       },
  { iconName: 'Clock',      value: '8 min',   label: 'Avg. Read Time'    },
  { iconName: 'Newspaper',  value: 'Daily',   label: 'New Posts'         },
];