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

  const heroGrad    = isIbps
    ? 'linear-gradient(135deg,#07102A 0%,#3D2A00 100%)'
    : 'linear-gradient(135deg,#07102A 0%,#1A2D5A 100%)';

  const hasMore     = exam.description.length > DESC_LIMIT;
  const shortDesc   = exam.description.slice(0, DESC_LIMIT) + (hasMore ? '...' : '');
  const displayDesc = expanded ? (exam.fullDescription || exam.description) : shortDesc;
  const readMoreColor = isIbps ? '#F0B429' : '#60B4FF';

  return (
    <div style={{ background: heroGrad , paddingTop: '3rem'}}>
      <div className="epg-container">

        {/* ── Breadcrumb ─── */}
        <Breadcrumb
          items={[
            { label: 'Home',  href: '/' },
            { label: 'Exams', href: '/exams' },
            { label: exam.shortName },           // no href = current page
          ]}
        />

        {/* ── Exam switcher (URL-based navigation) ─── */}
        <div className="epg-switcher">
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

        {/* ── Hero copy ─── */}
        <div style={{ maxWidth: 700, paddingBottom: '2.25rem' }}>
          <div
            className="epg-status-badge"
            style={{
              background: exam.tagColor + '22',
              border: '1px solid ' + exam.tagColor + '55',
              color: exam.tagColor,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: exam.tagColor, display: 'inline-block' }} />
            {exam.tag}
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display',serif",
            fontWeight: 800,
            fontSize: 'clamp(1.6rem,3vw,2.4rem)',
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '0.875rem',
          }}>
            {exam.shortName}{' '}
            <span style={{
              background: 'linear-gradient(135deg,#D4A017,#F0B429)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Recruitment 2026
            </span>{' '}
            Notification
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {displayDesc}
          </p>

          {hasMore && (
            <button
              className="epg-read-more-btn"
              onClick={() => setExpanded(v => !v)}
              style={{ color: readMoreColor, marginTop: 8 }}
            >
              {expanded ? 'Read less \u2191' : 'Read more \u2193'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}