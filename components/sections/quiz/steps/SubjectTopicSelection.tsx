// PATH: components/sections/quiz/steps/SubjectTopicSelection.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain, Calculator, BookOpen, Lock, Play, ChevronLeft, Award, Clock, HelpCircle, CheckCircle, Zap } from 'lucide-react';
import { ExamType, Subtopic } from '@/types/quiz.types';
import QuizStepTracker from './QuizStepTracker';
import { sbiPoTopics } from '@/lib/data/quiz/topics-sbi-po';
import { ibpsPoTopics } from '@/lib/data/quiz/topics-ibps-po';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface SubjectTopicSelectionProps {
  examType: ExamType;
  sections?: any;
  selectedSubtopicId: string | null;
  onSelectSubtopic: (subtopicId: string) => void;
  onBack: () => void;
  onStartTest: () => void;
  hideBackToExamSelect?: boolean;
}

type SubjectId = 'reasoning' | 'quant' | 'english';

const subjectMeta: Record<SubjectId, { name: string; icon: any; weightage: string; description: string }> = {
  reasoning: {
    name: 'Reasoning Ability',
    icon: Brain,
    weightage: 'Prelims: 35Q/35M | Mains: 45Q/60M',
    description: 'Puzzles, Seating Arrangement & Logical Reasoning drills'
  },
  quant: {
    name: 'Quantitative Aptitude',
    icon: Calculator,
    weightage: 'Prelims: 35Q/35M | Mains: 35Q/60M',
    description: 'Data Interpretation, Number Series & Arithmetic mastery'
  },
  english: {
    name: 'English Language',
    icon: BookOpen,
    weightage: 'Prelims: 30Q/30M | Mains: 35Q/40M',
    description: 'Comprehension, Grammar rules & Vocabulary drills'
  }
};

export default function SubjectTopicSelection({
  examType,
  selectedSubtopicId,
  onSelectSubtopic,
  onBack,
  onStartTest,
  hideBackToExamSelect
}: SubjectTopicSelectionProps) {
  const [activeSubject, setActiveSubject] = useState<SubjectId>('reasoning');
  const topicsData = examType === 'SBI PO' ? sbiPoTopics : ibpsPoTopics;

  // Active topic state
  const subjectTopics = topicsData[activeSubject];
  const topicNames = Object.keys(subjectTopics);
  const [activeTopic, setActiveTopic] = useState<string>(topicNames[0] || '');

  // Reset active topic when active subject changes
  useEffect(() => {
    const names = Object.keys(topicsData[activeSubject]);
    if (names.length > 0) {
      setActiveTopic(names[0]);
    }
  }, [activeSubject, topicsData]);

  const activeSubtopics = subjectTopics[activeTopic] || [];
  const currentSubjectMeta = subjectMeta[activeSubject];

  const handleStartSubtopic = (subtopicId: string) => {
    onSelectSubtopic(subtopicId);
    // Trigger start quiz on next tick to guarantee state propagation
    setTimeout(() => {
      onStartTest();
    }, 20);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6">
      
      {/* ── STEP PROGRESS BAR ── */}
      <QuizStepTracker currentStep="topic-select" hideExamSelect={hideBackToExamSelect} />

      {/* ── HEADER NAVIGATION & BACK ACTION ── */}
      <div className="flex items-center gap-4 mb-8">
        {!hideBackToExamSelect && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:text-[var(--color-navy)] bg-white border border-slate-200 rounded-xl hover:shadow-xs transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Exam Type</span>
          </button>
        )}
        <span className="text-xs font-extrabold text-slate-400">
          Target: <strong className="text-[var(--color-blue)] uppercase font-black">{examType}</strong>
        </span>
      </div>

      {/* ── SLIM HORIZONTAL INFO STRIP ── */}
      <div className="bg-[var(--color-navy-deep)] text-white rounded-2xl p-4 sm:px-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-800/60 rounded-xl text-[var(--color-gold-bright)]">
            <Award className="w-4.5 h-4.5" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-black uppercase text-[var(--color-gold-bright)] tracking-widest block">Practice Details</span>
            <span className="text-xs text-slate-300 font-semibold block leading-relaxed">
              15 MCQs • 15 Minutes • Replicates official PO scoring patterns with negative marks.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 border-t border-slate-800 pt-3 md:pt-0 md:border-t-0 shrink-0">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 15m Duration
          </span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> 15 Questions
          </span>
        </div>
      </div>

      {/* ── 1. SUBJECT TABS (TOP HORIZONTAL) ── */}
      <div className="bg-white border border-slate-200 rounded-3xl p-1.5 shadow-sm mb-8">
        <div 
          role="tablist" 
          aria-label="Select Subject" 
          className="flex flex-col sm:flex-row gap-1"
        >
          {(Object.keys(subjectMeta) as SubjectId[]).map(subId => {
            const isActive = activeSubject === subId;
            const Meta = subjectMeta[subId];
            const Icon = Meta.icon;
            return (
              <button
                key={subId}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveSubject(subId)}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--color-navy-deep)] text-white shadow-md'
                    : 'text-slate-600 hover:text-[var(--color-navy)] hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--color-gold-bright)]' : 'text-slate-400'}`} />
                <span>{Meta.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SUBJECT STATS CALLOUT ── */}
      <div className="bg-slate-50/70 border border-slate-200/60 p-4 px-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="text-xs font-extrabold text-[var(--color-navy-deep)]">{currentSubjectMeta.description}</div>
          <span className="text-[10px] text-slate-400 font-bold block mt-0.5">Section Weight</span>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-black bg-blue-50 text-[var(--color-blue)]">
          {currentSubjectMeta.weightage}
        </span>
      </div>

      {/* ── 2 & 3. TWO-PANE DRILL DOWN LAYOUT ── */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start">
        
        {/* MOBILE ONLY TOPIC SELECTOR */}
        <div className="block md:hidden w-full">
          <label htmlFor="topic-select" className="text-xs font-black uppercase text-slate-400 tracking-wider block mb-2">
            Select Topic
          </label>
          <select
            id="topic-select"
            value={activeTopic}
            onChange={(e) => setActiveTopic(e.target.value)}
            className="w-full bg-white border border-slate-200 text-slate-700 text-sm font-bold p-3.5 rounded-xl shadow-xs focus:ring-2 focus:ring-[var(--color-blue)] focus:outline-none"
          >
            {topicNames.map(name => (
              <option key={name} value={name}>
                {name} ({subjectTopics[name]?.length || 0} subtopics)
              </option>
            ))}
          </select>
        </div>

        {/* TOPIC RAIL (LEFT COLUMN, sticky on desktop, hidden on mobile) */}
        <div className="hidden md:block md:col-span-3 bg-white border border-slate-200 rounded-3xl p-3.5 shadow-sm sticky top-[90px] max-h-[580px] overflow-y-auto">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-3">
            Topics
          </div>
          <div className="flex flex-col gap-1">
            {topicNames.map(name => {
              const isActive = activeTopic === name;
              const count = subjectTopics[name]?.length || 0;
              return (
                <button
                  key={name}
                  onClick={() => setActiveTopic(name)}
                  className={`w-full text-left py-3 px-3.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'border-l-4 border-l-[var(--color-gold-bright)] bg-amber-50/40 text-[var(--color-navy-deep)] shadow-2xs'
                      : 'border-l-4 border-l-transparent text-slate-600 hover:text-[var(--color-navy)] hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate pr-2">{name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-bold ${
                    isActive 
                      ? 'bg-[var(--color-gold-bright)]/20 text-[var(--color-navy-deep)]' 
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SUBTOPICS ROW-CARDS (RIGHT COLUMN, main list content) */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Subtopics — <span className="text-[var(--color-navy)] font-black text-sm uppercase normal-case">{activeTopic}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400">
              {activeSubtopics.length} items available
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm divide-y divide-slate-100">
            {activeSubtopics.length > 0 ? (
              activeSubtopics.map((subtopic, idx) => {
                const isUnlocked = idx === 0 || (activeTopic.toLowerCase().includes('puzzle') && idx < 3) || subtopic.hasQuestions;
                const isSelected = selectedSubtopicId === subtopic.id;
                const signupUrl = examType === 'SBI PO' 
                  ? 'https://app.prepgrind.com/signup/sbi-po' 
                  : 'https://app.prepgrind.com/signup/ibps-po';
                
                const examSlug = examType === 'SBI PO' ? 'sbi-po' : 'ibps-po';
                const subjectSlug = activeSubject === 'reasoning' ? 'reasoning-ability' : activeSubject === 'quant' ? 'quantitative-aptitude' : 'english-language';
                const topicSlug = slugify(activeTopic);
                const practiceUrl = `/quiz/practice/${examSlug}/${subjectSlug}/${topicSlug}/${subtopic.id}`;

                return (
                  <div 
                    key={subtopic.id}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 gap-4 transition-colors ${
                      !isUnlocked ? 'bg-slate-50/40' : 'hover:bg-slate-50/30'
                    }`}
                  >
                    {/* Left: Name & Status Badge */}
                    <div className="flex items-center gap-3">
                      <div className="space-y-1">
                        <span className={`text-xs sm:text-sm font-extrabold ${
                          isUnlocked ? 'text-slate-800' : 'text-slate-400 font-bold'
                        }`}>
                          {subtopic.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {isUnlocked ? (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-150">
                              Free Practice
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[9px] font-black text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
                              <Lock className="w-2.5 h-2.5" /> Locked
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right: Action Button */}
                    <div className="shrink-0">
                      {isUnlocked ? (
                        <Link
                          href={practiceUrl}
                          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-black text-[var(--color-navy)] bg-[var(--color-gold-bright)] hover:bg-[var(--color-gold)] transition-all shadow-xs cursor-pointer no-underline"
                        >
                          <Play className="w-3 h-3 fill-[var(--color-navy)]" />
                          <span>Start Test</span>
                        </Link>
                      ) : (
                        <Link
                          href={signupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs cursor-pointer no-underline"
                        >
                          <span>Unlock Set</span>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-400 font-semibold">
                No subtopics configured for this topic.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
