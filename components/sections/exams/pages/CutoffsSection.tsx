// PATH: components/sections/exams/sections/exams/pages/CutoffsSection.tsx
'use client';

import { BarChart3, Info } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

const CATS = ['general','obc','sc','st'] as const;
const CAT_LABELS: Record<string, string> = { general:'General', obc:'OBC', sc:'SC', st:'ST' };

export default function CutoffsSection({ exam }: { exam: ExamDetailData }) {
  const isIbps = exam.id === 'ibps-po';
  const barGrad = isIbps
    ? 'linear-gradient(90deg,' + T.gold + ',' + T.blue + ')'
    : 'linear-gradient(90deg,' + T.blue + ',' + T.goldBright + ')';

  return (
    <div className="py-6 border-t border-slate-200 mt-4">
        <div className="epg-section-lbl"><BarChart3 size={11} />Cutoff Trends</div>
        <h2 className="epg-h2">{exam.shortName} <span>Cutoff</span> Trends</h2>
        <p className="epg-sub">Category-wise Prelims and Mains cutoffs for the last 3 years (out of 100).</p>

        {(['prelims','mains'] as const).map(phase => (
          <div key={phase} style={{ marginBottom:'1.25rem' }}>
            <div style={{ fontWeight:700,fontSize:'0.8rem',color:T.blue,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:9 }}>
              {phase === 'prelims' ? 'Prelims Cutoff' : 'Mains Cutoff'} (out of 100)
            </div>
            {exam.cutoffs.map(row => (
              <div className="epg-cut-section" key={row.year}>
                <div className="epg-cut-head">
                  <span style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:'0.95rem',color:T.navy }}>{row.year}</span>
                </div>
                <div style={{ padding:'0 15px' }}>
                  {CATS.map(cat => (
                    <div key={cat} style={{ display:'flex',alignItems:'center',gap:11,padding:'7px 0',borderBottom:'1px solid ' + T.gray50 }}>
                      <span style={{ minWidth:56,fontSize:'0.76rem',fontWeight:700,color:T.gray600 }}>{CAT_LABELS[cat]}</span>
                      <div style={{ flex:1,height:5,background:T.gray100,borderRadius:3,overflow:'hidden' }}>
                        <div style={{ height:'100%',width:row[phase][cat] + '%',background:barGrad,borderRadius:3 }} />
                      </div>
                      <span style={{ minWidth:34,fontSize:'0.8rem',fontWeight:700,color:T.navy,textAlign:'right' }}>
                        {row[phase][cat]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="epg-info-box">
          <Info size={13} style={{ color:T.blue,flexShrink:0,marginTop:1 }} />
          <p style={{ fontSize:'0.76rem',color:T.blue,lineHeight:1.5 }}>
            Cutoffs vary year-by-year based on vacancies, difficulty, and applicant volume.
            Always target 5–10 marks above the trend.
          </p>
        </div>
      </div>
);
}