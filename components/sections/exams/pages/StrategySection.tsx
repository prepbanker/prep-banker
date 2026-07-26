// PATH: components/sections/exams/sections/exams/pages/StrategySection.tsx
'use client';

import { Brain, SquareCheckBig, Zap } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

export default function StrategySection({ exam }: { exam: ExamDetailData }) {
  const isIbps = exam.id === 'ibps-po';
  const accent  = isIbps ? T.gold : T.blue;
  return (
    <div className="py-6 border-t border-slate-200 mt-4">
        <div className="epg-section-lbl"><Brain size={11} />Preparation Strategy</div>
        <h2 className="epg-h2">4-Month <span>Strategy</span> for {exam.shortName}</h2>
        <p className="epg-sub">A proven month-wise plan from foundation to full-mock phase.</p>
        <div className="epg-strat-grid">
          {exam.strategy.map(s => (
            <div className="epg-strat-card" key={s.month}>
              <div style={{ position:'absolute',top:0,right:0,width:55,height:55,background:isIbps ? 'rgba(212,160,23,0.07)' : 'rgba(27,110,181,0.07)',borderBottomLeftRadius:55 }} />
              <div className="epg-strat-month">{s.month}</div>
              <div className="epg-strat-focus">{s.focus}</div>
              {s.tips.map(tip => (
                <div className="epg-strat-tip" key={tip}>
                  <SquareCheckBig size={11} style={{ color: accent, flexShrink: 0, marginTop: 1 }} />{tip}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop:'1.25rem',textAlign:'center' }}>
          <a href="https://app.prepgrind.com/signup/banking" target="_blank" rel="noopener noreferrer" className="epg-btn-gold" style={{ margin:'0 auto' }}>
            <Zap size={14} />Start Preparation Now
          </a>
        </div>
      </div>
);
}