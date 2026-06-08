// PATH: components/sections/exams/DetailComponents.tsx
'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  DollarSign,
  Award,
  BookOpen,
  Clock,
  ArrowRight,
  ChevronDown,
  Trophy,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────
   1. HIGHLIGHT BOX
   ────────────────────────────────────────────────────────────────── */
interface HighlightBoxProps {
  type: 'info' | 'warning' | 'success';
  title?: string;
  children: React.ReactNode;
}

export function HighlightBox({ type, title, children }: HighlightBoxProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50/70 border-blue-200 text-blue-900',
      icon: <Info size={18} className="text-[#1B6EB5] mt-0.5 shrink-0" />,
    },
    warning: {
      bg: 'bg-amber-50/70 border-amber-200 text-amber-900',
      icon: <AlertTriangle size={18} className="text-[#D4A017] mt-0.5 shrink-0" />,
    },
    success: {
      bg: 'bg-green-50/70 border-green-200 text-green-900',
      icon: <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />,
    },
  };

  return (
    <div className={`border p-5 rounded-2xl flex gap-3.5 items-start my-4 transition-all duration-200 hover:shadow-xs ${styles[type].bg}`}>
      {styles[type].icon}
      <div className="text-sm sm:text-[15px] leading-relaxed">
        {title && <span className="block font-bold text-slate-850 mb-1">{title}</span>}
        {children}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   2. INTERACTIVE SYLLABUS BREAKDOWN
   ────────────────────────────────────────────────────────────────── */
interface TopicDetail {
  name: string;
  weightage: string;
  advice: string;
}

interface SyllabusData {
  subjects: {
    id: string;
    name: string;
    topics: TopicDetail[];
  }[];
}

export function InteractiveSyllabus({ data }: { data: SyllabusData }) {
  const [activeSubject, setActiveSubject] = useState(data.subjects[0]?.id || 'english');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const currentSubject = data.subjects.find((s) => s.id === activeSubject);

  return (
    <div className="bg-slate-50/60 border border-slate-200 p-5 sm:p-7 rounded-2xl shadow-xs">
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin">
        {data.subjects.map((sub) => (
          <button
            key={sub.id}
            onClick={() => {
              setActiveSubject(sub.id);
              setExpandedTopic(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeSubject === sub.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      <div className="space-y-3 bg-white p-4 sm:p-6 border border-slate-150 rounded-2xl shadow-xs">
        <h3 className="font-extrabold text-slate-850 text-base sm:text-lg mb-1.5 flex items-center gap-2">
          <BookOpen size={16} className="text-[#1B6EB5]" />
          {currentSubject?.name} Core Chapters
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-normal">
          Click on any topic folder below to view expected question weightage and topper preparation guidelines.
        </p>

        <div className="divide-y divide-slate-100 border border-slate-150 rounded-xl overflow-hidden bg-white">
          {currentSubject?.topics.map((topic) => {
            const isOpen = expandedTopic === topic.name;
            return (
              <div key={topic.name} className="transition-all duration-200">
                <button
                  onClick={() => setExpandedTopic(isOpen ? null : topic.name)}
                  className={`w-full flex items-center justify-between p-4 text-left font-bold text-slate-800 text-sm sm:text-[15px] hover:bg-slate-50 transition-colors ${
                    isOpen ? 'bg-slate-50/50' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                    {topic.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      {topic.weightage}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180 text-[#1B6EB5]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-2 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-50 bg-slate-50/20">
                    <div className="flex gap-2 items-start text-[#1B6EB5] font-bold mb-1.5">
                      <Sparkles size={14} className="mt-0.5 shrink-0" />
                      <span>Preparation Advice</span>
                    </div>
                    <p className="pl-6 border-l border-blue-100 text-slate-600 font-normal">
                      {topic.advice}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   3. INTERACTIVE TIMELINE DATES VIEW
   ────────────────────────────────────────────────────────────────── */
interface TimelineEvent {
  event: string;
  date: string;
  status: 'upcoming' | 'active' | 'closed';
  details: string;
}

export function DatesTimeline({ events }: { events: TimelineEvent[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const currentEvent = activeIdx !== null ? events[activeIdx] : null;

  return (
    <div className="bg-slate-50/60 border border-slate-200 p-5 sm:p-7 rounded-2xl shadow-xs">
      <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
        Click on any event milestone in the interactive calendar below to reveal details, advisory preparation timelines, and checklist recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-start">
        {/* Timeline Path */}
        <div className="relative pl-6 space-y-5 border-l border-slate-200 py-1.5">
          {events.map((ev, idx) => {
            const isActive = activeIdx === idx;
            const statusColors = {
              upcoming: 'bg-amber-400 border-amber-200 text-amber-900',
              active: 'bg-green-500 border-green-200 text-white',
              closed: 'bg-slate-300 border-slate-200 text-slate-600',
            };

            return (
              <button
                key={ev.event}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left relative flex flex-col p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {/* Node Dot */}
                <div
                  className={`absolute -left-[30px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isActive ? 'bg-[#1B6EB5] border-white scale-125' : 'bg-white border-slate-300'
                  }`}
                />
                <span className="text-xs sm:text-sm font-bold truncate pr-8">{ev.event}</span>
                <span className={`text-[10px] font-bold block mt-1 ${isActive ? 'text-white/70' : 'text-slate-400'}`}>
                  {ev.date}
                </span>

                {/* Status Badge */}
                <span
                  className={`absolute right-2 top-2 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-white/10 border border-white/20 text-white' : statusColors[ev.status]
                  }`}
                >
                  {ev.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Card */}
        <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs self-stretch flex flex-col justify-between min-h-[260px]">
          {currentEvent ? (
            <div className="space-y-4">
              <div className="flex justify-between items-start flex-wrap gap-2 pb-3 border-b border-slate-150">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Selected Milestone</span>
                  <h4 className="font-extrabold text-slate-850 text-base sm:text-lg leading-tight mt-0.5">
                    {currentEvent.event}
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Calendar size={12} className="text-[#1B6EB5]" />
                  {currentEvent.date}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2 items-start text-sm text-slate-750 leading-relaxed font-semibold">
                  <ShieldCheck size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <span>Advisory & Recommendation</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-6">
                  {currentEvent.details}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 text-sm">
              Select a milestone to view schedule guidelines.
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Verify timings on the official portal.</span>
            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1B6EB5] hover:underline flex items-center gap-0.5"
            >
              Start Free Mock Test <ArrowRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   4. CAREER ROADMAP
   ────────────────────────────────────────────────────────────────── */
interface CareerStep {
  scale: string;
  role: string;
  pay: string;
  timeframe: string;
  responsibilities: string;
}

export function CareerRoadmap({ steps }: { steps: CareerStep[] }) {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  return (
    <div className="bg-slate-50/60 border border-slate-200 p-5 sm:p-7 rounded-2xl shadow-xs">
      <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
        Click on the operational scales below to view in-hand basic compensation, typical promotional timeframes, and standard job profiles:
      </p>

      {/* Progress Line */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-200 scrollbar-thin">
        {steps.map((st, idx) => (
          <button
            key={st.scale}
            onClick={() => setActiveStep(idx)}
            className={`flex-1 min-w-[140px] text-center p-3 rounded-xl border transition-all duration-200 ${
              activeStep === idx
                ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span className="block text-[10px] font-bold tracking-widest uppercase opacity-70 mb-0.5">{st.scale}</span>
            <span className="block text-xs sm:text-sm font-extrabold truncate">{st.role.split('(')[0]}</span>
          </button>
        ))}
      </div>

      {/* Details Card */}
      {currentStep && (
        <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{currentStep.scale} Cadre</span>
              <h4 className="font-extrabold text-slate-850 text-base sm:text-lg mt-0.5">{currentStep.role}</h4>
            </div>
            <div className="space-y-2.5">
              <span className="font-bold text-slate-750 text-sm block border-b border-slate-50 pb-1">Primary Duties & Mandates</span>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {currentStep.responsibilities}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block flex items-center gap-1">
                  <DollarSign size={10} className="text-[#1B6EB5]" />
                  Base Basic Scale Salary
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-850 block mt-1">
                  {currentStep.pay}
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block flex items-center gap-1">
                  <Clock size={10} className="text-[#D4A017]" />
                  Average Promotion Timeframe
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-700 block mt-1">
                  {currentStep.timeframe}
                </span>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-3.5 mt-5 text-[10px] text-slate-400 flex items-center gap-1.5 font-semibold">
              <Award size={12} className="text-[var(--color-gold)]" />
              <span>Promotional examinations are conducted annually for fast-track routes.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   5. INTERACTIVE EXAM PATTERN PHASE VIEW
   ────────────────────────────────────────────────────────────────── */
interface ExamSectionRow {
  subject: string;
  questions: number | string;
  marks: number | string;
  time: string;
}

interface PhaseData {
  phase: string;
  info: string;
  sections: ExamSectionRow[];
  notes: string[];
}

export function InteractivePattern({ prelims, mains }: { prelims: PhaseData; mains: PhaseData }) {
  const [activeTab, setActiveTab] = useState<'prelims' | 'mains'>('prelims');

  const currentPhase = activeTab === 'prelims' ? prelims : mains;

  return (
    <div className="bg-slate-50/60 border border-slate-200 p-5 sm:p-7 rounded-2xl shadow-xs">
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit mb-5">
        <button
          onClick={() => setActiveTab('prelims')}
          className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-lg transition-all ${
            activeTab === 'prelims' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Prelims (Phase 1)
        </button>
        <button
          onClick={() => setActiveTab('mains')}
          className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-lg transition-all ${
            activeTab === 'mains' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
          }`}
        >
          Mains (Phase 2)
        </button>
      </div>

      <div className="bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-xs space-y-4">
        <div className="flex justify-between items-start flex-wrap gap-2 pb-3 border-b border-slate-150">
          <div>
            <h4 className="font-extrabold text-slate-850 text-base sm:text-lg">{currentPhase.phase} Structure</h4>
            <span className="text-xs text-slate-400 font-semibold block mt-0.5">{currentPhase.info}</span>
          </div>
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            Sectional Timers Apply
          </span>
        </div>

        <div className="overflow-hidden border border-slate-150 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold">
                <th className="px-4 py-2.5">Section Subject</th>
                <th className="px-4 py-2.5 text-center">Questions</th>
                <th className="px-4 py-2.5 text-center">Marks</th>
                <th className="px-4 py-2.5 text-center">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-650">
              {currentPhase.sections.map((sec) => (
                <tr key={sec.subject} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">{sec.subject}</td>
                  <td className="px-4 py-3 text-center">{sec.questions}</td>
                  <td className="px-4 py-3 text-center">{sec.marks}</td>
                  <td className="px-4 py-3 text-center">{sec.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phase Notes */}
        <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Important Phase Regulations</span>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentPhase.notes.map((note, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-600 font-normal">
                <CheckCircle2 size={13} className="text-[#1B6EB5] mt-0.5 shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   6. HISTORICAL CUT-OFFS CATEGORY SWITCHER
   ────────────────────────────────────────────────────────────────── */
interface YearCutoff {
  year: string;
  prelims: {
    general: number;
    obc: number;
    sc: number;
    st: number;
  };
  mains: {
    general: number;
    obc: number;
    sc: number;
    st: number;
  };
}

export function CutoffTrendsSwitcher({ cutoffs }: { cutoffs: YearCutoff[] }) {
  const [activeCat, setActiveCat] = useState<'general' | 'obc' | 'sc' | 'st'>('general');

  const categories = [
    { id: 'general', name: 'General / UR' },
    { id: 'obc', name: 'OBC (NCL)' },
    { id: 'sc', name: 'SC' },
    { id: 'st', name: 'ST' },
  ];

  return (
    <div className="bg-slate-50/60 border border-slate-200 p-5 sm:p-7 rounded-2xl shadow-xs">
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeCat === cat.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-xs">
        <h4 className="font-extrabold text-slate-850 text-base sm:text-lg mb-3 flex items-center gap-2">
          <Trophy size={16} className="text-[var(--color-gold)]" />
          Category Specific: {categories.find((c) => c.id === activeCat)?.name} Cut-offs
        </h4>
        <div className="overflow-hidden border border-slate-150 rounded-xl">
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold">
                <th className="px-4 py-3">Year Cycle</th>
                <th className="px-4 py-3 text-center">Prelims (Out of 100)</th>
                <th className="px-4 py-3 text-center">Mains (Objective + Desc.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-650">
              {cutoffs.map((item) => (
                <tr key={item.year} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">{item.year} Exam Cycle</td>
                  <td className="px-4 py-3 text-center font-bold text-slate-700">{item.prelims[activeCat]} Marks</td>
                  <td className="px-4 py-3 text-center font-bold text-slate-700">{item.mains[activeCat]} Marks</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   7. STRATEGY ROADMAP COMPONENT
   ────────────────────────────────────────────────────────────────── */
interface StrategyPhase {
  month: string;
  focus: string;
  tips: string[];
}

export function StrategyRoadmap({ phases }: { phases: StrategyPhase[] }) {
  const [activePhase, setActivePhase] = useState(0);

  const currentPhase = phases[activePhase];

  return (
    <div className="bg-slate-50/60 border border-slate-200 p-5 sm:p-7 rounded-2xl shadow-xs">
      <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
        Click on the preparation roadmap phases below to reveal topper guidelines, checklist tasks, and mock frequency plans.
      </p>

      {/* Progression Steps */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {phases.map((ph, idx) => (
          <button
            key={ph.month}
            onClick={() => setActivePhase(idx)}
            className={`text-center p-3 rounded-xl border transition-all duration-200 ${
              activePhase === idx
                ? 'bg-[#1B6EB5] border-[#1B6EB5] text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span className="block text-[9px] font-bold uppercase tracking-wider opacity-70 mb-0.5">
              Phase {idx + 1}
            </span>
            <span className="block text-xs sm:text-sm font-extrabold truncate">{ph.focus}</span>
          </button>
        ))}
      </div>

      {/* Roadmap Detail Card */}
      {currentPhase && (
        <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-xs">
          <div className="pb-3 border-b border-slate-150 mb-4 flex justify-between items-start flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Roadmap Stage {activePhase + 1}</span>
              <h4 className="font-extrabold text-slate-850 text-base sm:text-lg mt-0.5">
                {currentPhase?.month} — Focus: {currentPhase?.focus}
              </h4>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              <Clock size={12} className="text-[#1B6EB5]" />
              {activePhase === 0 ? 'Foundation' : activePhase === 1 ? 'Practice Speed' : 'Sprint Mock'}
            </span>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-slate-750 text-sm block">Daily Checklists & Action Items</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
              {currentPhase?.tips.map((tip, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-650 leading-relaxed font-normal">
                  <CheckCircle2 size={15} className="text-green-600 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
