'use client';

import { useState } from 'react';
import { Check, Building2 } from 'lucide-react';
import { SectionTitle, Button } from '@/components/ui';

// ─────────────────────────────────────────
// ExamHighlightsSection — compact card layout
// ─────────────────────────────────────────

const exams = [
  {
    id: 'ibps-po',
    shortName: 'IBPS PO',
    fullName: 'IBPS Probationary Officer',
    badge: 'Most Popular',
    badgeColor: 'bg-amber-400 text-amber-900',
    description:
      'Prepare for the IBPS PO Exam with comprehensive mock tests, sectional tests, practice questions, current affairs, and study material designed to help you improve accuracy, speed, and overall performance.',
    vacancy: '4000+',
    salary: '₹52,000/month',
    difficulty: 'Moderate',
    highlights: [
      'Prelims + Mains + Interview',
      'All Public Sector Banks',
      'Annual Recruitment',
      'Great Career Growth',
    ],
    href: '/ibps-po',
    dark: false,
    accentBg: 'bg-blue-600',
    exploreBtnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    freeBtnClass: 'bg-amber-500 hover:bg-amber-600 text-white border border-amber-500',
  },
  {
    id: 'sbi-po',
    shortName: 'SBI PO',
    fullName: 'SBI Probationary Officer',
    badge: 'High Salary',
    badgeColor: 'bg-amber-400 text-amber-900',
    description:
      "Get ready for the SBI PO Exam with a complete preparation package featuring mock tests, sectional quizzes, practice questions, current affairs updates, and study resources to enhance your speed, accuracy, and exam performance.",
    vacancy: '2000+',
    salary: '₹63,000/month',
    difficulty: 'Hard',
    highlights: [
      'Prelims + Mains + GD/Interview',
      "India's Largest Bank",
      'Premium Perks & Benefits',
      'Fast Track Promotions',
    ],
    href: '/sbi-po',
    dark: true,
    accentBg: 'bg-slate-900',
    exploreBtnClass: 'bg-slate-900 hover:bg-slate-800 text-white',
    freeBtnClass: 'bg-amber-500 hover:bg-amber-600 text-white border border-amber-500',
  },
];

export default function ExamHighlightsSection() {
  return (
    <section aria-label="SBI PO & IBPS PO Exam Highlights 2026" className="section-padding" style={{ background: 'var(--color-off-white)' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Supported Exams
            </span>
            <span className="h-px w-8 bg-slate-300" />
          </div>
          <h2
            className="mx-auto max-w-xl text-4xl font-extrabold text-slate-800"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SBI PO & IBPS PO Exam Highlights 2026
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
            Start your preparation for SBI PO and IBPS PO with mock tests, sectional tests,
            practice questions, current affairs, and study material designed to help you succeed.
          </p>
        </div>

        {/* Cards Grid */}
        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 list-none">
          {exams.map((exam) => (
            <li
              key={exam.id}
              className={[
                'flex flex-col rounded-2xl overflow-hidden border transition-all duration-200',
                'hover:-translate-y-1 hover:shadow-xl',
                exam.dark
                  ? 'border-slate-700 shadow-[0_4px_24px_rgba(13,27,62,0.18)]'
                  : 'border-slate-200 shadow-[0_4px_24px_rgba(13,27,62,0.10)]',
              ].join(' ')}
            >
              {/* Card Top — coloured header */}
              <div
                className={[
                  'relative px-6 pt-6 pb-5',
                  exam.dark ? 'bg-slate-900' : 'bg-blue-600',
                ].join(' ')}
              >
                {/* Badge */}
                <span
                  className={[
                    'absolute top-4 right-4 rounded-full px-3 py-0.5 text-xs font-bold',
                    exam.badgeColor,
                  ].join(' ')}
                >
                  {exam.badge}
                </span>

                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Building2 className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                      Banking Exam
                    </p>
                    <h3 className="text-xl font-extrabold leading-tight text-white">
                      {exam.shortName}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-white/70">
                  {exam.description}
                </p>
              </div>

              {/* Card Bottom — white body */}
              <div className="flex flex-1 flex-col bg-white px-6 pt-5 pb-6 gap-5">

                {/* Key Metrics */}
                <ul className="grid grid-cols-3 divide-x divide-slate-100 rounded-xl border border-slate-100 bg-slate-50 list-none">
                  {[
                    { label: 'Vacancy', value: exam.vacancy },
                    { label: 'Salary', value: exam.salary },
                    { label: 'Difficulty', value: exam.difficulty },
                  ].map((m) => (
                    <li key={m.label} className="px-1.5 py-2.5 text-center flex flex-col justify-between min-w-0">
                      <div className="text-sm font-bold text-slate-800 leading-tight">
                        {m.label === 'Salary' && m.value.includes('/') ? (
                          <div className="flex flex-col items-center justify-center">
                            <span>{m.value.split('/')[0]}</span>
                            <span className="text-[10px] font-medium text-slate-500 mt-0.5">
                              /{m.value.split('/')[1]}
                            </span>
                          </div>
                        ) : (
                          m.value
                        )}
                      </div>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                        {m.label}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {exam.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <Check className="h-3.5 w-3.5 flex-shrink-0 text-blue-500" strokeWidth={3} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-2.5">
                  <a
                    href={exam.href}
                    className={[
                      'flex items-center justify-center rounded-xl py-2.5 text-sm font-bold transition-all duration-150',
                      exam.exploreBtnClass,
                    ].join(' ')}
                  >
                    Explore Exam
                  </a>
                  <a
                    href="https://app.prepgrind.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'flex items-center justify-center rounded-xl py-2.5 text-sm font-bold transition-all duration-150',
                      exam.freeBtnClass,
                    ].join(' ')}
                  >
                    Take Free Test
                  </a>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}