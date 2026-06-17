// PATH: components/sections/quiz/steps/ExamTypeSelection.tsx
'use client';

import { useState } from 'react';
import { Shield, BookOpen, ChevronRight } from 'lucide-react';
import { ExamType } from '@/types/quiz.types';

interface ExamTypeSelectionProps {
  initialSelection: ExamType | null;
  onSelect: (exam: ExamType) => void;
  onContinue: () => void;
}

export default function ExamTypeSelection({
  initialSelection,
  onSelect,
  onContinue
}: ExamTypeSelectionProps) {
  const [selected, setSelected] = useState<ExamType | null>(initialSelection);

  const handleSelect = (exam: ExamType) => {
    setSelected(exam);
    onSelect(exam);
  };

  const exams = [
    {
      id: 'SBI PO' as ExamType,
      fullName: 'SBI PO Mock Quiz',
      subTitle: 'State Bank of India — Probationary Officer',
      description: 'Master the premier banking exam. Practice real test questions aligned with the latest SBI exam patterns.',
      crestColor: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      badgeText: '10 Free Topics',
      crestSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" fill="currentColor" />
          <rect x="11" y="2" width="2" height="6" fill="white" />
        </svg>
      )
    },
    {
      id: 'IBPS PO' as ExamType,
      fullName: 'IBPS PO Mock Quiz',
      subTitle: 'Institute of Banking Personnel Selection — PO',
      description: 'Strengthen your core concepts for the IBPS national exam. Mock questions designed to evaluate speed and accuracy.',
      crestColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      badgeText: '10 Free Topics',
      crestSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <polyline points="2,8.5 12,15 22,8.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <line x1="12" y1="15" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      {/* Step Progress Tracker */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[var(--color-navy)] text-white text-xs font-bold flex items-center justify-center">1</span>
          <span className="text-xs font-bold text-[var(--color-navy)]">Exam Type</span>
          <span className="w-12 h-0.5 bg-slate-200" />
          <span className="w-6 h-6 rounded-full bg-slate-150 text-slate-500 text-xs font-bold flex items-center justify-center">2</span>
          <span className="text-xs font-semibold text-slate-500">Topic Selection</span>
          <span className="w-12 h-0.5 bg-slate-200" />
          <span className="w-6 h-6 rounded-full bg-slate-150 text-slate-500 text-xs font-bold flex items-center justify-center">3</span>
          <span className="text-xs font-semibold text-slate-500">Practice Test</span>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)]">Select Your Target Exam</h2>
        <p className="text-sm text-slate-500 mt-2">Choose the exam pattern you want to simulate. Both options grant access to the 10-question playable test.</p>
      </div>

      {/* Side-by-Side on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {exams.map((exam) => {
          const isSelected = selected === exam.id;
          return (
            <button
              key={exam.id}
              onClick={() => handleSelect(exam.id)}
              className={`text-left flex flex-col p-6 sm:p-8 bg-white rounded-2xl border transition-all duration-350 relative hover:border-[var(--color-blue)] group ${
                isSelected
                  ? 'border-[var(--color-gold-bright)] ring-4 ring-[var(--color-navy)]/5 shadow-[var(--shadow-hover)] translate-y-[-2px]'
                  : 'border-slate-200 shadow-sm'
              }`}
              style={{
                boxShadow: isSelected
                  ? '0 0 0 4px rgba(13, 27, 62, 0.05), 0 10px 30px rgba(13, 27, 62, 0.08)'
                  : undefined
              }}
            >
              {/* Free badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase ${
                  isSelected ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  <BookOpen className="w-3 h-3" />
                  {exam.badgeText}
                </span>
              </div>

              {/* Bank Crest Placeholder */}
              <div className={`p-3.5 rounded-2xl border ${exam.crestColor} mb-6 w-fit group-hover:scale-105 transition-transform`}>
                {exam.crestSvg}
              </div>

              {/* Info */}
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
                {exam.fullName}
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1 leading-snug">
                {exam.subTitle}
              </p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed flex-grow">
                {exam.description}
              </p>

              {/* Radio Indicator */}
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                  isSelected ? 'border-[var(--color-blue)] bg-[var(--color-blue)]' : 'border-slate-300 bg-white'
                }`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className={`text-xs font-bold transition-colors ${
                  isSelected ? 'text-[var(--color-blue)]' : 'text-slate-500'
                }`}>
                  {isSelected ? 'Selected' : 'Click to select'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Action CTA */}
      <div className="flex justify-center mt-10">
        <button
          onClick={onContinue}
          disabled={!selected}
          className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all shadow-md active:scale-95 ${
            selected
              ? 'bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 cursor-pointer'
              : 'bg-slate-300 cursor-not-allowed opacity-60'
          }`}
          style={{
            boxShadow: selected ? '0 4px 15px rgba(27, 110, 181, 0.25)' : undefined
          }}
        >
          <span>Continue to Subject Selection</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
