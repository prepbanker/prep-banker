// PATH: components/sections/exams/sections/exams/pages/FAQsSection.tsx
'use client';

import { useState } from 'react';
import { MessageCircleQuestion, ChevronDown } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { T } from '../constants';

export default function FAQsSection({ exam }: { exam: ExamDetailData }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isIbps = exam.id === 'ibps-po';

  return (
    <div className="epg-card">
      <div className="epg-card-body">
        <div className="epg-section-lbl"><MessageCircleQuestion size={11} />FAQs</div>
        <h2 className="epg-h2">Frequently Asked <span>Questions</span></h2>
        <p className="epg-sub">
          Common questions about {exam.shortName} 2026 exam, eligibility, and preparation.
        </p>

        {exam.examFaqs.map((faq, idx) => (
          <div key={idx} className={'epg-faq-item' + (openIdx === idx ? ' open' : '')}>
            <button
              className="epg-faq-btn"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="epg-faq-q">
                <span className="epg-faq-num">{String(idx + 1).padStart(2, '0')}</span>
                {faq.q}
              </span>
              <span className="epg-faq-chev" aria-hidden="true"><ChevronDown size={12} /></span>
            </button>
            <div className="epg-faq-ans" role="region">
              <div className="epg-faq-ans-inner"><p>{faq.a}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}