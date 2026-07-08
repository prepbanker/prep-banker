// PATH: components/sections/quiz/steps/ExamTypeSelection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shield, BookOpen, ArrowRight } from 'lucide-react';
import { ExamType } from '@/types/quiz.types';
import QuizStepTracker from './QuizStepTracker';

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
    // Proceed immediately to Step 2
    onContinue();
  };

  const exams = [
    {
      id: 'SBI PO' as ExamType,
      fullName: 'SBI PO Mock Quiz',
      subTitle: 'State Bank of India — Probationary Officer',
      description: 'Master the premier banking exam. Practice real test questions aligned with the latest SBI exam patterns.',
      logoPath: '/images/sbi-po-logo.png',
      badgeText: '15 Free Topics',
      borderColor: 'group-hover:border-cyan-400',
      activeRing: 'ring-4 ring-cyan-500/10 border-cyan-500'
    },
    {
      id: 'IBPS PO' as ExamType,
      fullName: 'IBPS PO Mock Quiz',
      subTitle: 'Institute of Banking Personnel Selection — PO',
      description: 'Strengthen your core concepts for the IBPS national exam. Mock questions designed to evaluate speed and accuracy.',
      logoPath: '/images/ibps-po-logo.png',
      badgeText: '15 Free Topics',
      borderColor: 'group-hover:border-indigo-400',
      activeRing: 'ring-4 ring-indigo-500/10 border-indigo-500'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      {/* Step Progress Tracker */}
      <QuizStepTracker currentStep="exam-select" />

      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[var(--color-blue)] text-[10px] font-black uppercase tracking-widest mb-3">
          Step 1: Exam Selection
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] leading-tight">Select Your Target Exam</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">Choose the exam pattern you want to simulate. Selecting a card will directly proceed to topic selection.</p>
      </div>

      {/* Side-by-Side on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {exams.map((exam) => {
          const isSelected = selected === exam.id;
          return (
            <button
              key={exam.id}
              onClick={() => handleSelect(exam.id)}
              className={`text-left flex flex-col justify-between p-6 sm:p-8 bg-white rounded-3xl border transition-all duration-300 relative group cursor-pointer hover:shadow-lg hover:-translate-y-1 ${
                isSelected
                  ? 'border-[var(--color-gold-bright)] shadow-md ring-4 ring-[var(--color-navy)]/5 bg-slate-50/20'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {/* Top Row: Logo & Badge */}
              <div className="flex items-start justify-between w-full mb-6">
                {/* Logo Image */}
                <div className="relative w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-2 shadow-xs group-hover:scale-105 transition-transform">
                  <Image
                    src={exam.logoPath}
                    alt={`${exam.id} Logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-black tracking-wider uppercase ${
                  isSelected ? 'bg-amber-100 text-amber-800' : 'bg-slate-50 text-slate-500'
                }`}>
                  <BookOpen className="w-2.5 h-2.5" />
                  {exam.badgeText}
                </span>
              </div>

              {/* Middle Row: Content */}
              <div className="flex-grow space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-[var(--color-navy-deep)] group-hover:text-[var(--color-blue)] transition-colors">
                  {exam.fullName}
                </h3>
                <p className="text-[11px] font-bold text-slate-400 leading-snug">
                  {exam.subTitle}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2">
                  {exam.description}
                </p>
              </div>

              {/* Bottom Row: Click-to-Select CTA */}
              <div className="mt-8 pt-4 border-t border-slate-100 w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                    isSelected ? 'border-[var(--color-blue)] bg-[var(--color-blue)]' : 'border-slate-350 bg-white'
                  }`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className={`text-[11px] font-bold transition-colors ${
                    isSelected ? 'text-[var(--color-blue)]' : 'text-slate-500'
                  }`}>
                    {isSelected ? 'Selected' : 'Simulate Exam'}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[var(--color-blue)] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Enter Selector</span>
                  <ArrowRight className="w-3.5 h-3.5 animate-[pulse_1s_infinite]" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
