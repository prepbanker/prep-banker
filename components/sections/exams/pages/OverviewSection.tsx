// PATH: components/sections/exams/sections/exams/pages/OverviewSection.tsx
'use client';

import { Target, FileText, Info } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { ICON_MAP, T } from '../constants';

export default function OverviewSection({ exam }: { exam: ExamDetailData }) {
  const isIbps  = exam.id === 'ibps-po';
  const heroGrad = isIbps
    ? 'linear-gradient(135deg,#07102A 0%,#3D2A00 100%)'
    : 'linear-gradient(135deg,#030712 0%,#091024 100%)';
  const iconBg    = isIbps ? 'rgba(212,160,23,0.2)' : 'rgba(27,110,181,0.2)';
  const iconColor = isIbps ? '#F0B429' : '#60B4FF';

  return (
    <div>
      <div style={{ background: heroGrad, padding: '1.75rem 1.75rem 0' }}>
        <div className="epg-section-lbl"><Info size={11} />Overview</div>
        <h2 className="epg-h2 !text-white">
  {exam.shortName}
  <span className="text-[#F0B429]">
    {' '}— Complete Preparation Guide 2026
  </span>
</h2>
        <p style={{ color:'rgba(255,255,255,0.6)',fontSize:'0.875rem',lineHeight:1.7,maxWidth:640,marginBottom:0 }}>
          {exam.overview}
        </p>
        <div className="epg-summary-grid">
          {exam.summaryCards.map(({ iconKey, label, value }) => {
            const Icon = ICON_MAP[iconKey] ?? Info;
            return (
              <div className="epg-sum-card" key={label}>
                <div className="epg-sum-icon" style={{ background: iconBg }}>
                  <Icon size={15} style={{ color: iconColor }} />
                </div>
                <div>
                  <div className="epg-sum-lbl">{label}</div>
                  <div className="epg-sum-val">{value}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="epg-cta-row" style={{ paddingBottom: '1.75rem' }}>
          <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="epg-btn-gold">
            <Target size={15} />Start Practicing Now
          </a>
          <a href="/mock-tests" className="epg-btn-outline">
            <FileText size={15} />View Mock Tests
          </a>
        </div>
      </div>
      <div style={{ padding:'0.875rem 1.75rem',borderTop:'1px solid ' + T.gray100,display:'flex',flexWrap:'wrap',gap:4,alignItems:'center' }}>
        <span style={{ fontSize:'0.875rem',color:T.gray400,fontWeight:600,marginRight:4 }}>Tags:</span>
        {exam.tags.map(tag => <span key={tag} className="epg-tag-pill">{tag}</span>)}
      </div>
    </div>
  );
}