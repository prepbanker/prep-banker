// PATH: components/sections/exams/sections/exams/pages/SalarySection.tsx
'use client';

import { DollarSign, CheckCircle, Star } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

export default function SalarySection({ exam }: { exam: ExamDetailData }) {
  const stats: [string, string][] = [
    ['Basic Pay', exam.salary.basic],
    ['Gross Pay (Metro)', exam.salary.gross],
    ['CTC (First Year)', exam.salary.ctc],
  ];
  return (
    <div className="epg-card">
      <div className="epg-card-body">
        <div className="epg-section-lbl"><DollarSign size={11} />Salary & Benefits</div>
        <h2 className="epg-h2">{exam.shortName} <span>Salary</span> & Benefits</h2>

        <div className="epg-sal-hero">
          {stats.map(([label, value]) => (
            <div className="epg-sal-stat" key={label}>
              <div className="epg-sal-lbl">{label}</div>
              <div className="epg-sal-val">{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.1rem' }}>
          <div>
            <div style={{ fontWeight:700,fontSize:'0.8rem',color:T.blue,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:9 }}>
              Allowances
            </div>
            <div style={{ display:'flex',flexDirection:'column',gap:6 }}>
              {exam.salary.allowances.map(a => (
                <div className="epg-allow-item" key={a}>
                  <CheckCircle size={12} style={{ color:T.success,flexShrink:0 }} />{a}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight:700,fontSize:'0.8rem',color:T.blue,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:9 }}>
              Perks
            </div>
            <div style={{ display:'flex',flexDirection:'column',gap:6 }}>
              {exam.salary.perks.map(p => (
                <div className="epg-allow-item" key={p}>
                  <Star size={11} style={{ color:T.gold,flexShrink:0 }} />{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}