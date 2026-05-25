// PATH: components/sections/exams/sections/exams/pages/SyllabusSection.tsx
'use client';

import { BookMarked, BookOpen, ChevronsRight } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

export default function SyllabusSection({ exam }: { exam: ExamDetailData }) {
  const accent = exam.id === 'ibps-po' ? T.gold : T.blue;
  return (
    <div className="epg-card">
      <div className="epg-card-body">
        <div className="epg-section-lbl"><BookMarked size={11} />Official Syllabus</div>
        <h2 className="epg-h2">{exam.shortName} <span>Syllabus</span> 2026</h2>
        <p className="epg-sub">Complete topic-wise syllabus for all sections.</p>
        <div className="epg-syl-grid">
          {Object.entries(exam.syllabus).map(([subject, topics]) => (
            <div className="epg-syl-card" key={subject}>
              <div className="epg-syl-subj">
                <BookOpen size={13} style={{ color: accent, flexShrink: 0 }} />
                {subject}
              </div>
              {topics.map(t => (
                <div className="epg-syl-topic" key={t}>
                  <ChevronsRight size={10} style={{ color: accent, flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}