// PATH: components/sections/exams/ExamHero.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Building2, BadgeCheck, Users, DollarSign, Award, TrendingUp, HelpCircle } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import Breadcrumb from '@/components/shared/Breadcrumb';

interface Props {
  exam: ExamDetailData;
  title?: string;
  description?: string;
}

const DESC_LIMIT = 180;

const ICON_MAP: Record<string, React.ElementType> = {
  Users,
  DollarSign,
  Award,
  TrendingUp,
  HelpCircle,
};

export default function ExamHero({ exam, title, description }: Props) {
  const pathname    = usePathname();
  const [expanded, setExpanded] = useState(false);
  const isIbps      = exam.id === 'ibps-po';

  const hasMore     = !description && exam.description.length > DESC_LIMIT;
  const shortDesc   = !description ? exam.description.slice(0, DESC_LIMIT) + (hasMore ? '...' : '') : '';
  const displayDesc = description || (expanded ? (exam.fullDescription || exam.description) : shortDesc);
  const readMoreColor = isIbps ? '#F0B429' : '#60B4FF';

  // Parse current section for the switcher links
  const pathParts = pathname.split('/').filter(Boolean);
  const section = pathParts[1]; // e.g. "syllabus"
  const sbiHref = section ? `/sbi-po/${section}` : '/sbi-po';
  const ibpsHref = section ? `/ibps-po/${section}` : '/ibps-po';

  return (
    <div
      className="relative overflow-hidden"
      style={{
        paddingTop: '2.5rem',
        background: isIbps
          ? 'linear-gradient(135deg, #3D2A00 0%, #07102A 100%)'
          : 'linear-gradient(135deg, #07102A 0%, #1A2D5A 100%)'
      }}
    >

      {/* ── Decorative background blobs ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Top-left blob — blue for SBI, gold-tinted for IBPS */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background: isIbps
              ? 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)'
              : 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)',
          }}
        />
        {/* Top-right gold blob */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="epg-container relative z-10 pb-8">

        {/* ── Breadcrumb ── */}
        <Breadcrumb
          items={
            title
              ? [
                  { label: 'Home',  href: '/' },
                  { label: 'Exams', href: '/exams' },
                  { label: exam.shortName, href: `/${exam.id}` },
                  { label: title },
                ]
              : [
                  { label: 'Home',  href: '/' },
                  { label: 'Exams', href: '/exams' },
                  { label: exam.shortName },
                ]
          }
          linkColor={isIbps ? '#F0B429' : '#60B4FF'}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-6">
          {/* Left Column: Copy & Switcher */}
          <div className="flex-1 max-w-2xl text-left">
            {/* ── Exam switcher ── */}
            {!title && (
              <div className="epg-switcher mb-5">
                <Link
                  href={sbiHref}
                  className={'epg-sw-btn' + (pathname.startsWith('/sbi-po') ? ' active-sbi' : '')}
                >
                  <Building2 size={13} />SBI PO
                </Link>
                <Link
                  href={ibpsHref}
                  className={'epg-sw-btn' + (pathname.startsWith('/ibps-po') ? ' active-ibps' : '')}
                >
                  <BadgeCheck size={13} />IBPS PO
                </Link>
              </div>
            )}

            {/* Status badge */}
            <div
              className="epg-status-badge mb-4 inline-flex items-center gap-1.5"
              style={{
                background: exam.tagColor + '22',
                border: '1px solid ' + exam.tagColor + '55',
                color: exam.tagColor,
              }}
            >
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: exam.tagColor,
                display: 'inline-block',
              }} />
              {exam.tag}
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '0.875rem',
            }}>
              {title ? (
                title
              ) : (
                <>
                  {exam.shortName}{' '}
                  <span className="text-gold-gradient">
                    Recruitment 2026
                  </span>{' '}
                  Notification
                </>
              )}
            </h1>

            {/* Description */}
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', lineHeight: 1.7 }}>
              {displayDesc}
            </p>

            {hasMore && (
              <button
                className="epg-read-more-btn font-bold underline hover:text-white transition-colors"
                onClick={() => setExpanded(v => !v)}
                style={{ color: readMoreColor, marginTop: 8 }}
              >
                {expanded ? 'Read less ↑' : 'Read more ↓'}
              </button>
            )}
          </div>

          {/* Right Column: 4 Stats Cards in 2x2 Grid */}
          <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-w-[290px] sm:max-w-none lg:max-w-[300px] mx-auto lg:mx-0">
              {exam.summaryCards.slice(0, 4).map((card) => {
                const Icon = ICON_MAP[card.iconKey] ?? Users;
                return (
                  <div
                    key={card.label}
                    className="flex flex-col items-start p-3.5 rounded-xl border w-full h-auto text-left transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1.5 w-full">
                      <span
                        className="p-1.5 rounded-md flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,0.08)' }}
                      >
                        <Icon className="w-4 h-4 text-[var(--color-gold-bright)]" aria-hidden />
                      </span>
                      <p className="text-base font-black text-white leading-none break-words min-w-0">{card.value}</p>
                    </div>
                    <p
                      className="text-xs font-semibold mt-0.5 leading-tight"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      {card.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom separator */}
      <div className="h-px bg-white/10 relative z-10" />
    </div>
  );
}