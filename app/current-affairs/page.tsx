// PATH: app/current-affairs/page.tsx
// ─────────────────────────────────────────
// Current Affairs page — intentionally minimal.
// All logic, data, and UI live inside the feature module.
// ─────────────────────────────────────────
import type { Metadata } from 'next';
import { Sparkles, Newspaper, TrendingUp, Calendar, BookOpen, Users, Star } from 'lucide-react';
import Header  from '@/components/layout/Header';
import Footer  from '@/components/layout/Footer';
import CAHero            from '@/components/sections/current-affairs/hero/CAhero';
import CurrentAffairsModule from '@/components/sections/current-affairs/CurrentAffairs';
import CAFAQSection      from '@/components/sections/current-affairs/faq/CAFAQSection';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo';
import { CA_FAQS } from '@/lib/data/current-affairs/faqs';
import { CA_HERO_STATS } from '@/lib/data/current-affairs/stats';

const HERO_ICON_MAP: Record<string, React.ElementType> = {
  Newspaper,
  TrendingUp,
  Calendar,
  BookOpen,
  Users,
  Star,
};

// ─── SEO metadata ─────────────────────────
export const metadata: Metadata = {
  title:       'Banking Current Affairs 2026 – Daily & Monthly Updates',
  description:
    'Daily and monthly current affairs for SBI PO and IBPS PO 2026. Banking awareness, RBI updates, economy news, government schemes and static GK — all in one place.',
  keywords: [
    'banking current affairs 2026',
    'SBI PO current affairs',
    'IBPS PO GK',
    'RBI policy updates',
    'banking awareness 2026',
    'government schemes 2026',
    'monthly current affairs compilation',
  ],
  openGraph: {
    title:       'Banking Current Affairs 2026 | PrepBanker',
    description: 'Exam-tagged daily current affairs for SBI PO & IBPS PO aspirants.',
    type:        'website',
    url:         'https://prepbanker.com/current-affairs',
  },
  alternates: {
    canonical: 'https://prepbanker.com/current-affairs',
  },
};

// ─── Page ─────────────────────────────────
export default function CurrentAffairsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home',            href: '/' },
          { name: 'Current Affairs', href: '/current-affairs' },
        ]}
      />

      <FAQSchema items={CA_FAQS} />

      <Header />

      <main>
        <CAHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Current Affairs' },
          ]}
          badgeText="Updated Daily"
          BadgeIcon={Sparkles}
          title={
            <>
              Banking <span className="text-gold-gradient">Current Affairs 2026</span>
            </>
          }
          description="Daily and monthly current affairs curated for SBI PO & IBPS PO aspirants. Stay on top of banking news, RBI policy, economy updates, and government schemes — all in one place."
          alignRightChildren={true}
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 max-w-[450px] lg:max-w-[480px] mx-auto lg:mx-0">
            {CA_HERO_STATS.map(({ iconName, value, label }) => {
              const Icon = HERO_ICON_MAP[iconName] ?? Newspaper;
              return (
                <div
                  key={label}
                  className="flex flex-col items-start p-3 rounded-xl border w-full h-auto text-left"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="p-1 rounded-md flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.08)' }}
                    >
                      <Icon className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
                    </span>
                    <p className="text-[16px] font-black text-white leading-none">{value}</p>
                  </div>
                  <p
                    className="text-[14px] font-semibold mt-0.5 leading-tight"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </CAHero>
        <CurrentAffairsModule />
        <CAFAQSection />
      </main>

      <Footer />
    </>
  );
}