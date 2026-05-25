// PATH: components/sections/exams/ExamDetailsPage.tsx
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { BookMarked, ChevronRight, Sparkles, Trophy, FileText } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { NAV_SECTIONS, T } from './constants';
import ExamHero        from './ExamHero';
import Header          from '@/components/layout/Header';
import Footer          from '@/components/layout/Footer';
import PromoPopup      from '@/components/shared/PromoPopup';
import StickyLeftCTA   from '@/components/shared/StickyLeftCTA';
import SidebarInfoCard from '@/components/shared/SidebarInfoCard';
import './exam.css';

// ─── Lazy-load every section for page-speed ───────────────────────
const OverviewSection     = dynamic(() => import('../../sections/exams/pages/OverviewSection'));
const DatesSection        = dynamic(() => import('../../sections/exams/pages/DatesSection'));
const ExamPatternSection  = dynamic(() => import('../../sections/exams/pages/ExamPatternSection'));
const SyllabusSection     = dynamic(() => import('../../sections/exams/pages/SyllabusSection'));
const SelectionSection    = dynamic(() => import('../../sections/exams/pages/SelectionSection'));
const EligibilitySection  = dynamic(() => import('../../sections/exams/pages/EligibilitySection'));
const SalarySection       = dynamic(() => import('../../sections/exams/pages/SalarySection'));
const StrategySection     = dynamic(() => import('../../sections/exams/pages/StrategySection'));
const CutoffsSection      = dynamic(() => import('../../sections/exams/pages/CutoffsSection'));
const FAQsSection         = dynamic(() => import('../../sections/exams/pages/FAQsSection'));

interface Props { exam: ExamDetailData }

export default function ExamDetailsPage({ exam }: Props) {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen,   setSidebarOpen]   = useState(true);
  const isIbps = exam.id === 'ibps-po';

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':     return <OverviewSection    exam={exam} />;
      case 'dates':        return <DatesSection       exam={exam} />;
      case 'exam-pattern': return <ExamPatternSection exam={exam} />;
      case 'syllabus':     return <SyllabusSection    exam={exam} />;
      case 'selection':    return <SelectionSection   exam={exam} />;
      case 'eligibility':  return <EligibilitySection exam={exam} />;
      case 'salary':       return <SalarySection      exam={exam} />;
      case 'strategy':     return <StrategySection    exam={exam} />;
      case 'cutoffs':      return <CutoffsSection     exam={exam} />;
      default:             return <OverviewSection    exam={exam} />;
    }
  };

  return (
    <div className="epg-wrap">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: exam.examFaqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ── Shared floating UI ── */}
      {/* <PromoPopup    scrollThreshold={700} delaySeconds={1.2} storageKey="pb_promo_seen" /> */}
      <StickyLeftCTA href="https://app.prepgrind.com/register" label="Start Preparing Now" topOffset={280} />

      <Header />
      <ExamHero exam={exam} />

      <div className="epg-container">
        <div className="epg-layout">

          {/* ─── Sidebar ─────────────────────────────────────────── */}
          {/*
            Key fix: the sticky wrapper only wraps epg-sidebar.
            SidebarInfoCard sits BELOW the sticky block in normal flow,
            so it never overlaps the nav.
          */}
          <aside className="flex flex-col gap-0">

            {/* Sticky nav block */}
            <div className="sticky top-4">
              <div className="epg-sidebar">
                <div className="epg-sb-head">
                  <span className="epg-sb-title">
                    <BookMarked size={13} style={{ color: T.blue }} />
                    {exam.shortName} Guide
                  </span>
                  <button
                    className="epg-sb-toggle"
                    onClick={() => setSidebarOpen(v => !v)}
                    aria-label="Toggle navigation"
                  >
                    {sidebarOpen
                      ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                    }
                  </button>
                </div>

                <nav className={'epg-sb-nav' + (sidebarOpen ? '' : ' collapsed')}>
                  {NAV_SECTIONS.map(({ id, label, icon: Icon }) => {
                    const isActive = activeSection === id;
                    const cls = isActive ? (isIbps ? 'is-active-ibps' : 'is-active') : '';
                    return (
                      <button
                        key={id}
                        className={'epg-nav-item ' + cls}
                        onClick={() => setActiveSection(id)}
                      >
                        <Icon size={14} />
                        {label}
                        {isActive && (
                          <ChevronRight size={11} className="ml-auto opacity-60" />
                        )}
                      </button>
                    );
                  })}

                  <div className="epg-sb-divider" />

                  <a
                    href="https://app.prepgrind.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="epg-sb-cta"
                  >
                    <Sparkles size={13} />Start Mock Test
                  </a>
                </nav>
              </div>

              {/* Info card — inside the sticky wrapper so it moves with the nav */}
              <SidebarInfoCard />
            </div>

          </aside>

          {/* ─── Main content ─── */}
          <main className="epg-content">
            {renderSection()}
            <FAQsSection exam={exam} />
            <BottomCTA exam={exam} />
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Bottom CTA ─────────────────────────────────────────────────── */
function BottomCTA({ exam }: { exam: ExamDetailData }) {
  return (
    <div className="epg-bottom-cta">
      <div className="relative z-10">

        <div className="
          w-12 h-12 mx-auto mb-3.5
          bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.3)]
          rounded-[13px] flex items-center justify-center
        ">
          <Trophy size={22} color="#F0B429" />
        </div>

        <h3
          className="font-bold text-white mb-2.5 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.2rem,2.5vw,1.65rem)' }}
        >
          Ready to Crack {exam.shortName} 2026?
        </h3>

        <p className="text-white/55 text-[0.9rem] max-w-[460px] mx-auto mb-6">
          Join 50,000+ aspirants preparing with PrepBanker — free mocks, live exams &amp; smart analytics.
        </p>

        <div className="flex gap-2.5 justify-center flex-wrap">
          <a
            href="https://app.prepgrind.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="epg-btn-gold"
          >
            <Sparkles size={15} />Start Preparing Now
          </a>
          <Link href="/live-tests" className="epg-btn-outline">
            <FileText size={15} />View All Mock Tests
          </Link>
        </div>
      </div>
    </div>
  );
}