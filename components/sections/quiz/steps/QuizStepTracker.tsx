// PATH: components/sections/quiz/steps/QuizStepTracker.tsx
'use client';

import { Check, ClipboardList, BookOpen, Layers } from 'lucide-react';

interface QuizStepTrackerProps {
  currentStep: 'exam-select' | 'topic-select' | 'live-test' | 'results';
}

export default function QuizStepTracker({ currentStep }: QuizStepTrackerProps) {
  const steps = [
    {
      id: 1,
      label: 'Exam Type',
      icon: Layers,
      isActive: currentStep === 'exam-select',
      isCompleted: currentStep === 'topic-select' || currentStep === 'live-test' || currentStep === 'results',
    },
    {
      id: 2,
      label: 'Topic Selection',
      icon: BookOpen,
      isActive: currentStep === 'topic-select',
      isCompleted: currentStep === 'live-test' || currentStep === 'results',
    },
    {
      id: 3,
      label: currentStep === 'results' ? 'Completed' : 'Practice Test',
      icon: ClipboardList,
      isActive: currentStep === 'live-test',
      isCompleted: currentStep === 'results',
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 px-4">
      <div className="relative flex items-center justify-between">
        
        {/* Connection Progress Bar Background Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-slate-100 -z-10 rounded-full" />
        
        {/* Connection Progress Bar Active Line */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-emerald-500 to-[var(--color-blue)] -z-10 rounded-full transition-all duration-500 ease-in-out" 
          style={{
            width: currentStep === 'exam-select' 
              ? '0%' 
              : currentStep === 'topic-select' 
                ? '50%' 
                : '100%'
          }}
        />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          
          return (
            <div key={step.id} className="flex flex-col items-center relative group">
              {/* Outer Badge Container */}
              <div 
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 relative border-2 ${
                  step.isCompleted
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : step.isActive
                      ? 'bg-[var(--color-navy)] border-[var(--color-blue)] text-white shadow-lg shadow-blue-500/20 ring-4 ring-blue-500/10 animate-[pulse_2s_infinite]'
                      : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-350 group-hover:text-slate-655'
                }`}
              >
                {/* Visual Step Indicator Indicator */}
                {step.isCompleted ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                ) : (
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}

                {/* Micro Step Numbers */}
                {!step.isCompleted && !step.isActive && (
                  <span className="absolute -top-1 -right-1 bg-slate-100 text-slate-500 text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-slate-200">
                    {step.id}
                  </span>
                )}
              </div>

              {/* Label */}
              <span 
                className={`mt-3 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${
                  step.isCompleted
                    ? 'text-emerald-600'
                    : step.isActive
                      ? 'text-[var(--color-navy)]'
                      : 'text-slate-400 group-hover:text-slate-600'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
