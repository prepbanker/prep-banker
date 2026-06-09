// PATH: components/sections/exams/sections/exams/pages/EligibilitySection.tsx
'use client';

import { GraduationCap } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { ICON_MAP, T } from '../constants';

export default function EligibilitySection({ exam }: { exam: ExamDetailData }) {
  const accent = exam.id === 'ibps-po' ? T.gold : T.blue;
  const items = [
    { label: 'Educational Qualification', iconKey: 'GraduationCap', value: exam.eligibility.education },
    { label: 'Age Limit',                 iconKey: 'Clock',         value: exam.eligibility.age        },
    { label: 'Nationality',               iconKey: 'MapPin',        value: exam.eligibility.nationality},
    { label: 'Attempts',                  iconKey: 'Target',        value: exam.eligibility.attempts   },
  ];
  return (
    <div className="py-6 border-t border-slate-200 mt-4">
        <div className="epg-section-lbl"><GraduationCap size={11} />Eligibility Criteria</div>
        <h2 className="epg-h2">{exam.shortName} <span>Eligibility</span> Criteria</h2>
        <p className="epg-sub">Check your eligibility before applying for {exam.shortName} 2026.</p>
        <div className="epg-elig-grid">
          {items.map(({ label, iconKey, value }) => {
            const Icon = ICON_MAP[iconKey] ?? ICON_MAP['Info'];
            return (
              <div className="epg-elig-item" key={label}>
                <div className="epg-elig-lbl">
                  <Icon size={12} style={{ color: accent }} />{label}
                </div>
                <div className="epg-elig-val">{value}</div>
              </div>
            );
          })}
        </div>
      </div>
);
}