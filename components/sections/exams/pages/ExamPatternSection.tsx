// PATH: components/sections/exams/sections/exams/pages/ExamPatternSection.tsx
'use client';

import { Layers, AlertCircle } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

export default function ExamPatternSection({ exam }: { exam: ExamDetailData }) {
  return (
    <div className="epg-card">
      <div className="epg-card-body">
        <div className="epg-section-lbl"><Layers size={11} />Exam Pattern</div>
        <h2 className="epg-h2">{exam.shortName} <span>Exam Pattern</span></h2>
        <p className="epg-sub">Section-wise structure for Prelims and Mains examination.</p>

        {exam.examPattern.map(phase => (
          <div className="epg-phase" key={phase.phase}>
            <div
              className="epg-phase-head"
              style={{ background: phase.phase === 'Prelims' ? '#EFF6FF' : '#FFFBEB' }}
            >
              <div style={{ display:'flex',alignItems:'center',gap:9 }}>
                <span style={{ fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:'0.95rem',color:T.navy }}>
                  {phase.phase}
                </span>
                <span
                  className="epg-phase-badge"
                  style={{
                    background: phase.phase === 'Prelims' ? '#DBEAFE' : '#FEF3C7',
                    color:      phase.phase === 'Prelims' ? '#1D4ED8' : '#92400E',
                  }}
                >
                  {phase.badge}
                </span>
              </div>
              <span style={{ fontSize:'0.76rem',color:T.gray600,fontWeight:500 }}>{phase.info}</span>
            </div>

            <div style={{ overflowX:'auto' }}>
              <table className="epg-table">
                <thead>
                  <tr>
                    <th>Subject / Section</th>
                    <th style={{ textAlign:'center' }}>Questions</th>
                    <th style={{ textAlign:'center' }}>Marks</th>
                    <th style={{ textAlign:'center' }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {phase.sections.map(s => (
                    <tr key={s.subject}>
                      <td style={{ fontWeight:600,color:T.navy }}>{s.subject}</td>
                      <td style={{ textAlign:'center' }}>{s.questions}</td>
                      <td style={{ textAlign:'center',fontWeight:700,color:exam.id === 'ibps-po' ? T.gold : T.blue }}>
                        {s.marks}
                      </td>
                      <td style={{ textAlign:'center' }}>
                        <span style={{ background:T.sky,color:T.blue,padding:'2px 8px',borderRadius:999,fontSize:'0.72rem',fontWeight:600 }}>
                          {s.time}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding:'9px 14px',borderTop:'1px solid ' + T.gray100,display:'flex',flexWrap:'wrap',gap:6 }}>
              {phase.notes.map(n => (
                <div key={n} className="epg-note">
                  <AlertCircle size={11} style={{ color:'#D97706',flexShrink:0,marginTop:1 }} />
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}