// PATH: components/sections/quiz/steps/SubjectTopicSelection.tsx
'use client';

import { useState } from 'react';
import { Lock, Play, ChevronLeft, Calendar, BookOpen, Clock, Award, CheckCircle, Zap } from 'lucide-react';
import { Section, Subtopic, ExamType } from '@/types/quiz.types';

interface SubjectTopicSelectionProps {
  examType: ExamType;
  sections: Section[];
  selectedSubtopicId: string | null;
  onSelectSubtopic: (subtopicId: string) => void;
  onBack: () => void;
  onStartTest: () => void;
}

// Hardcoded weightage details matching quizCategories.ts for high-fidelity professional context
const sectionMeta: Record<string, { weightage: string; description: string; icon: string }> = {
  quant: {
    weightage: 'Prelims: 35Q/35M | Mains: 35Q/60M',
    description: 'Data Interpretation, Number Series & Arithmetic mastery',
    icon: '📊'
  },
  reasoning: {
    weightage: 'Prelims: 35Q/35M | Mains: 45Q/60M',
    description: 'Puzzles, Seating Arrangement & Logical Reasoning drills',
    icon: '🧩'
  },
  english: {
    weightage: 'Prelims: 30Q/30M | Mains: 35Q/40M',
    description: 'Comprehension, Grammar rules & Vocabulary drills',
    icon: '📖'
  }
};

export default function SubjectTopicSelection({
  examType,
  sections,
  selectedSubtopicId,
  onSelectSubtopic,
  onBack,
  onStartTest
}: SubjectTopicSelectionProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id || 'quant');
  const [hoveredSubtopicId, setHoveredSubtopicId] = useState<string | null>(null);

  const activeSection = sections.find(s => s.id === activeSectionId);
  const selectedSubtopic = sections
    .flatMap(s => s.topics.flatMap(t => t.subtopics))
    .find(sub => sub.id === selectedSubtopicId);

  const activeMeta = sectionMeta[activeSectionId] || { weightage: '', description: '', icon: '🎯' };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6">
      
      {/* ── STEP PROGRESS BAR ── */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBack}
            className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors shadow-sm"
          >
            ✓
          </button>
          <span className="text-xs font-extrabold text-emerald-600">Exam Pattern</span>
          
          <span className="w-10 sm:w-16 h-0.5 bg-emerald-500" />
          
          <span className="w-7 h-7 rounded-full bg-[var(--color-navy)] text-white text-xs font-bold flex items-center justify-center shadow-md ring-2 ring-[var(--color-gold)]">
            2
          </span>
          <span className="text-xs font-black text-[var(--color-navy)]">Subject &amp; Topic</span>
          
          <span className="w-10 sm:w-16 h-0.5 bg-slate-200" />
          
          <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 text-xs font-bold flex items-center justify-center">
            3
          </span>
          <span className="text-xs font-extrabold text-slate-400">Live Test</span>
        </div>
      </div>

      {/* ── HEADER BLOCK ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#E8F4FD] text-[var(--color-blue)] text-[10px] font-black uppercase tracking-widest mb-2.5">
            STEP 2 of 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy-deep)] tracking-tight">
            Prepare Your Topic Quiz
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            Attempt a 10-question practice test matching the <span className="font-extrabold text-[var(--color-blue)]">{examType}</span> syllabus guidelines.
          </p>
        </div>

        <button
          onClick={onBack}
          className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 bg-white border border-slate-200 hover:border-slate-350 text-xs font-extrabold text-[var(--color-navy)] rounded-xl transition-all shadow-xs active:scale-[0.98] cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-slate-450" />
          Change Exam Type ({examType})
        </button>
      </div>

      {/* ── TWO-COLUMN SUBJECT PANEL ── */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left 3 Columns: Subject Tabs & Topic Grid */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Subject Pills (Tabs) */}
          <div className="flex flex-wrap border border-slate-200 bg-slate-100/70 p-1.5 rounded-2xl w-fit gap-1">
            {sections.map(section => {
              const isActive = section.id === activeSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--color-navy)] text-white shadow-md'
                      : 'text-slate-650 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span className="mr-1.5">{sectionMeta[section.id]?.icon || '🎯'}</span>
                  {section.name}
                </button>
              );
            })}
          </div>

          {/* Section Summary Info Panel */}
          <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest block">Exam weightage</span>
              <h4 className="text-sm font-extrabold text-[var(--color-navy-deep)] flex items-center gap-1.5">
                {activeSection?.name}
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{activeMeta.description}</p>
            </div>
            <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-center self-start sm:self-center shrink-0">
              <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Marking weight</span>
              <span className="text-xs font-black text-[var(--color-blue)]">{activeMeta.weightage}</span>
            </div>
          </div>

          {/* Topics Grid */}
          {activeSection && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeSection.topics.map(topic => (
                <div
                  key={topic.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col hover:shadow-md transition-all duration-300 border-t-4 border-t-[var(--color-navy-light)]"
                >
                  <h3 className="text-xs font-black text-[var(--color-navy-deep)] pb-3.5 border-b border-slate-100 mb-4 tracking-wider uppercase">
                    {topic.name}
                  </h3>

                  {/* Subtopics List */}
                  <div className="flex flex-col gap-3 flex-grow">
                    {topic.subtopics.map(subtopic => {
                      const isUnlocked = subtopic.hasQuestions;
                      const isSelected = selectedSubtopicId === subtopic.id;
                      const isHovered = hoveredSubtopicId === subtopic.id;

                      return (
                        <div key={subtopic.id} className="relative">
                          <button
                            onClick={() => {
                              if (isUnlocked) onSelectSubtopic(subtopic.id);
                            }}
                            onMouseEnter={() => setHoveredSubtopicId(subtopic.id)}
                            onMouseLeave={() => setHoveredSubtopicId(null)}
                            disabled={!isUnlocked}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-xs transition-all flex items-center justify-between relative ${
                              isUnlocked
                                ? isSelected
                                  ? 'bg-[var(--color-sky)] border-[var(--color-gold-bright)] text-[var(--color-navy)] font-bold shadow-[0_4px_12px_rgba(212,160,23,0.12)]'
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-[var(--color-blue)] hover:bg-[var(--color-gray-50)] cursor-pointer'
                                : 'bg-slate-50 border-slate-100 text-slate-400 opacity-45 cursor-not-allowed'
                            }`}
                          >
                            <span className="truncate pr-5 font-bold">{subtopic.name}</span>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              {isUnlocked ? (
                                isSelected ? (
                                  <span className="inline-flex items-center gap-1 text-[9px] font-black text-[var(--color-gold)] uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                    Selected
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-150">
                                    Free
                                  </span>
                                )
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[9px] font-black text-slate-400 uppercase bg-slate-100 px-1.5 py-0.5 rounded">
                                  <Lock className="w-2.5 h-2.5" /> Lock
                                </span>
                              )}
                            </div>
                          </button>

                          {/* Locked Hover Card Tooltip */}
                          {!isUnlocked && isHovered && (
                            <div className="absolute z-35 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-52 bg-[var(--color-navy-deep)] text-white text-[10px] font-semibold p-2.5 rounded-xl text-center shadow-xl pointer-events-none leading-relaxed">
                              Available after free registration.
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-[var(--color-navy-deep)]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right 1 Column: Sticky Selection Summary & Start Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-[80px] self-start flex flex-col gap-6">
            
            {/* Sidebar Guidelines Panel */}
            <div className="bg-[#07102A] text-white rounded-3xl p-5 border border-slate-800 shadow-md">
              <h4 className="text-xs font-black text-[var(--color-gold-bright)] uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                Practice Details
              </h4>
              <ul className="space-y-3.5 text-[11px] text-slate-350 font-semibold leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Real SBI/IBPS PO exam scoring patterns applied.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>10 single-option MCQs. 10 minutes total.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Answered palette automatically syncs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  <span>Score and weak area breakdown shown instantly.</span>
                </li>
              </ul>
            </div>

            {/* Selection Status & CTA */}
            {selectedSubtopic ? (
              <div className="bg-white border-2 border-[var(--color-gold-bright)] rounded-3xl p-5 shadow-lg flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes btn-blink {
                    0%, 100% {
                      opacity: 1;
                      transform: scale(1);
                    }
                    50% {
                      opacity: 0.88;
                      transform: scale(1.025);
                    }
                  }
                  .active-btn-blink {
                    animation: btn-blink 1.4s ease-in-out infinite;
                  }
                `}} />
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-50 text-[10px] font-black text-[var(--color-gold)] uppercase border border-amber-200">
                    ⚡ Selected Set
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-[var(--color-navy-deep)] uppercase leading-snug">
                    {selectedSubtopic.name}
                  </h4>
                  <div className="flex flex-col gap-1.5 text-[11px] font-semibold text-slate-500 pt-2">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      10 Questions
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      10 Minutes Duration
                    </span>
                  </div>
                </div>

                <button
                  onClick={onStartTest}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-black text-white bg-[var(--color-blue)] hover:bg-[var(--color-blue)]/90 shadow-md transition-all cursor-pointer text-center active-btn-blink"
                  style={{
                    boxShadow: '0 4px 15px rgba(27, 110, 181, 0.3)'
                  }}
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start Mock Quiz</span>
                </button>
              </div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-3xl p-6 text-center text-xs text-slate-400 font-semibold py-8 shadow-2xs">
                <Zap className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                Select an unlocked subtopic card on the left to begin your test.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
