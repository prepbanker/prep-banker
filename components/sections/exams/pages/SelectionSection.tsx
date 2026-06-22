// PATH: components/sections/exams/sections/exams/pages/SelectionSection.tsx
'use client';

import { ListChecks } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { ICON_MAP, T } from '../constants';

export default function SelectionSection({ exam }: { exam: ExamDetailData }) {
  const accent = exam.id === 'ibps-po' ? T.gold : T.blue;
  return (
    <div className="py-6 border-t border-slate-200 mt-4">
        <div className="epg-section-lbl"><ListChecks size={11} />Selection Process</div>
        <h2 className="epg-h2">{exam.shortName} <span>Selection Process</span></h2>
        <p className="epg-sub">
          {exam.selectionProcess.length}-stage selection process for {exam.shortName} 2026.
        </p>
        <div className="epg-step-list">
          {exam.selectionProcess.map(({ step, title, desc, iconKey }) => {
            const Icon = ICON_MAP[iconKey] ?? ICON_MAP['Target'];
            return (
              <div className="epg-step" key={step}>
                <div className="epg-step-num">{step}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display:'flex',alignItems:'center',gap:7,marginBottom:4 }}>
                    <Icon size={14} style={{ color: accent }} />
                    <span style={{ fontWeight:700,fontSize:'0.88rem',color:T.navy }}>{title}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem',color:T.gray600,lineHeight:1.6 }}>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
);
}