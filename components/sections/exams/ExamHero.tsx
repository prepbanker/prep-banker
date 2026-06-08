// PATH: components/sections/exams/ExamHero.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Building2, BadgeCheck } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import Breadcrumb from '@/components/shared/Breadcrumb';

interface Props { exam: ExamDetailData }

const DESC_LIMIT = 180;

export default function ExamHero({ exam }: Props) {
  const pathname    = usePathname();
  const [expanded, setExpanded] = useState(false);
  const isIbps      = exam.id === 'ibps-po';

  const hasMore     = exam.description.length > DESC_LIMIT;
  const shortDesc   = exam.description.slice(0, DESC_LIMIT) + (hasMore ? '...' : '');
  const displayDesc = expanded ? (exam.fullDescription || exam.description) : shortDesc;
  const readMoreColor = isIbps ? '#F0B429' : '#60B4FF';

  return (
    <div
      className="relative overflow-hidden"
      style={{
        paddingTop: '3rem',
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

      <div className="epg-container relative z-10">

        {/* ── Breadcrumb ── */}
        <Breadcrumb
          items={[
            { label: 'Home',  href: '/' },
            { label: 'Exams', href: '/exams' },
            { label: exam.shortName },
          ]}
          linkColor={isIbps ? '#F0B429' : '#60B4FF'}
        />

        {/* ── Exam switcher ── */}
        <div className="epg-switcher mt-8">
          <Link
            href="/sbi-po"
            className={'epg-sw-btn' + (pathname === '/sbi-po' ? ' active-sbi' : '')}
          >
            <Building2 size={13} />SBI PO
          </Link>
          <Link
            href="/ibps-po"
            className={'epg-sw-btn' + (pathname === '/ibps-po' ? ' active-ibps' : '')}
          >
            <BadgeCheck size={13} />IBPS PO
          </Link>
        </div>

        {/* ── Hero copy ── */}
        <div style={{ maxWidth: 700, paddingBottom: '2.25rem' }}>

          {/* Status badge */}
          <div
            className="epg-status-badge"
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
            {exam.shortName}{' '}
            <span className="text-gold-gradient">
              Recruitment 2026
            </span>{' '}
            Notification
          </h1>

          {/* Description */}
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {displayDesc}
          </p>

          {hasMore && (
            <button
              className="epg-read-more-btn"
              onClick={() => setExpanded(v => !v)}
              style={{ color: readMoreColor, marginTop: 8 }}
            >
              {expanded ? 'Read less ↑' : 'Read more ↓'}
            </button>
          )}
        </div>

      </div>

      {/* Bottom separator */}
      <div className="h-px bg-white/10 relative z-10" />
    </div>
  );
}