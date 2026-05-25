// PATH: components/sections/exams/sections/exams/pages/DatesSection.tsx
'use client';

import { Calendar, AlertCircle } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

export default function DatesSection({ exam }: { exam: ExamDetailData }) {
  return (
    <div className="epg-card">
      <div className="epg-card-body">
        <div className="epg-section-lbl"><Calendar size={11} />Important Dates</div>
        <h2 className="epg-h2">{exam.shortName} <span>Key Dates</span> 2026</h2>
        <p className="epg-sub">
          Stay updated with the official {exam.shortName} 2026 schedule. All dates are tentative
          and subject to official notification.
        </p>
        <div className="epg-timeline">
          {exam.dates.map(d => (
            <div className="epg-date-item" key={d.event}>
              <div className={'epg-dot epg-dot-' + d.status} />
              <div>
                <div style={{ fontSize:'0.81rem',fontWeight:700,color:T.navy }}>{d.event}</div>
                <div style={{ fontSize:'0.76rem',color:exam.id === 'ibps-po' ? T.gold : T.blue,fontWeight:600,marginTop:2 }}>
                  {d.date}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="epg-warn-box">
          <AlertCircle size={14} style={{ color:'#D97706',flexShrink:0,marginTop:1 }} />
          <p style={{ fontSize:'0.76rem',color:'#92400E',lineHeight:1.5 }}>
            Dates are tentative based on previous year trends. Always verify on the official SBI / IBPS website.
          </p>
        </div>
      </div>
    </div>
  );
}