// PATH: components/sections/previous-year-papers/PatternSnapshot.tsx
'use client';

import { useState } from 'react';
import { Brain, Calculator, BookOpen, ShieldCheck, ArrowRight, FileText, Sparkles } from 'lucide-react';

type SectionKey = 'reasoning' | 'quant' | 'english';

interface PatternSnapshotProps {
  ctaHref?: string;
}

export default function PatternSnapshot({ ctaHref = '#papers-list' }: PatternSnapshotProps) {
  const [activeTab, setActiveTab] = useState<SectionKey>('reasoning');

  const weightageData = [
    {
      section: 'Reasoning Ability',
      icon: Brain,
      topics: 'Puzzles & Seating Arrangement, Syllogism, Inequality, Blood Relations',
      questions: '20–22 out of 35',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      section: 'Quantitative Aptitude',
      icon: Calculator,
      topics: 'Data Interpretation, Simplification/Approximation, Number Series, Quadratic Equations',
      questions: '18–20 out of 35',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      section: 'English Language',
      icon: BookOpen,
      topics: 'Reading Comprehension, Cloze Test, Para Jumbles, Error Spotting',
      questions: '15–17 out of 30',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  const sampleQuestions: Record<SectionKey, { title: string; subtitle: string; content: React.ReactNode }> = {
    reasoning: {
      title: 'Reasoning Ability Puzzle',
      subtitle: 'Circular Seating Arrangement (Prelims Level)',
      content: (
        <div className="space-y-3">
          <p className="text-[var(--color-navy)] font-medium bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed text-sm sm:text-base">
            Six friends — P, Q, R, S, T, and U — sit around a circular table facing the centre. Q sits second to the right of P. R is not an immediate neighbour of Q.
          </p>
          <p className="text-xs text-slate-450 italic font-medium flex items-center gap-1.5 px-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            [full puzzle continues in your downloadable PDF]
          </p>
        </div>
      ),
    },
    quant: {
      title: 'Quantitative Aptitude Word Problem',
      subtitle: 'Problems on Ages (Prelims Level)',
      content: (
        <div className="space-y-4">
          <p className="text-[var(--color-navy)] font-medium bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed text-sm sm:text-base">
            The ratio of the ages of A and B, five years ago, was 3:4. If the sum of their present ages is 45 years, find A's age after 5 years.
          </p>
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3.5 text-xs text-emerald-800 space-y-1">
            <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-600 block">Quick Concept Hint</span>
            <p>Let their ages 5 years ago be <span className="font-mono bg-white px-1 py-0.5 rounded border border-slate-100">3x</span> and <span className="font-mono bg-white px-1 py-0.5 rounded border border-slate-100">4x</span>. Present sum = <span className="font-mono font-semibold">(3x+5) + (4x+5) = 45</span>. Solve for <span className="font-mono">x</span> to find A's present age and add 5.</p>
          </div>
        </div>
      ),
    },
    english: {
      title: 'English Language Phrase Replacement',
      subtitle: 'Subject-Verb Agreement (Prelims Level)',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Question</span>
            <p className="text-[var(--color-navy)] font-medium leading-relaxed text-sm sm:text-base">
              Choose the option that best replaces the underlined phrase to make the sentence grammatically correct:
            </p>
            <p className="text-slate-700 italic border-l-3 border-blue-500 pl-3 py-1 font-medium mt-2 bg-white/50 rounded-r text-sm sm:text-base">
              "The manager, along with his team, <span className="underline decoration-2 decoration-blue-500 font-bold bg-blue-50 px-1 py-0.5">were responsible</span> for the delay."
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-650">
            <div className="p-2 border border-slate-200 rounded-lg bg-white">A) was responsible</div>
            <div className="p-2 border border-slate-200 rounded-lg bg-white">B) are responsible</div>
            <div className="p-2 border border-slate-200 rounded-lg bg-white">C) have been responsible</div>
            <div className="p-2 border border-slate-250 rounded-lg bg-blue-50/40 text-[var(--color-blue)] border-blue-200 flex justify-between items-center">
              <span>D) was responsible (Correct)</span>
              <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded-md font-bold uppercase shrink-0">Rule</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 pl-1 leading-relaxed">
            <strong>Grammar Key:</strong> When two nouns are joined by "along with", the verb agrees with the first noun (singular "manager"), hence "was" is correct.
          </p>
        </div>
      ),
    },
  };

  return (
    <div className="space-y-10 my-4">
      {/* Eyebrow & Headers */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[var(--color-blue)] text-xs font-bold border border-blue-100 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          Pattern Snapshot
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-navy)] leading-tight font-display">
          SBI PO Previous Year Question Paper — Pattern Snapshot
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Before you download the full previous year paper PDF, here's what the last 2-3 years of SBI PO Prelims papers actually tested most — so you know where to spend your practice time.
        </p>
      </div>

      {/* Grid: Weightage Table & Sample Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Card: Topic Weightage Table */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-[0_4px_24px_rgba(13,27,62,0.02)] overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <h3 className="font-black text-sm sm:text-base text-[var(--color-navy)] font-display">
                Topic-wise weightage (SBI PO Prelims Pattern)
              </h3>
              <span className="text-[10px] font-extrabold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">
                Recent Years
              </span>
            </div>
            
            <div className="p-6 space-y-5">
              {weightageData.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200 bg-white group"
                  >
                    {/* Icon Column */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${item.color} group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Content Column */}
                    <div className="flex-1 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <span className="font-extrabold text-sm sm:text-base text-[var(--color-navy)]">
                          {item.section}
                        </span>
                        <span className="text-xs font-black text-slate-500 sm:text-right shrink-0">
                          {item.questions}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        <strong className="text-slate-700 font-semibold">High-Weightage Topics: </strong>
                        {item.topics}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legal Compliance Label / Built In-house Recreations */}
          <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-slate-500 text-[11px] leading-normal font-medium font-sans">
              <strong>Source Transparency:</strong> Our downloadable PYQs are built as memory-based reconstructions verified by subject experts. We strictly do not host or reproduce copyrighted questions or official PDFs from third-party sites or testing portals.
            </p>
          </div>
        </div>

        {/* Right Card: Interactive Sample Questions */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-[0_4px_24px_rgba(13,27,62,0.02)] overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-5 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-black text-sm sm:text-base text-[var(--color-navy)] font-display flex items-center gap-1.5">
                <span>Sample-style questions</span>
                <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 tracking-wide uppercase">
                  Original
                </span>
              </h3>
            </div>

            {/* Segmented Tab Headers */}
            <div className="px-5 pt-4">
              <div className="bg-slate-100 border border-slate-200/80 p-1 rounded-xl flex gap-1">
                {(Object.keys(sampleQuestions) as SectionKey[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer capitalize ${
                      activeTab === tab
                        ? 'bg-white text-[var(--color-navy-deep)] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                    }`}
                  >
                    {tab === 'quant' ? 'Quant' : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Tab content */}
            <div className="p-6">
              <div className="space-y-3 min-h-[190px] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {sampleQuestions[activeTab].subtitle}
                  </h4>
                  <h5 className="font-extrabold text-sm sm:text-base text-[var(--color-navy)] mb-3 font-display">
                    {sampleQuestions[activeTab].title}
                  </h5>
                  {sampleQuestions[activeTab].content}
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-slate-100 bg-slate-50/30 text-center">
            <span className="text-[10px] font-bold text-slate-400">
              Matches recent SBI PO pattern & difficulty guidelines
            </span>
          </div>
        </div>
      </div>

      {/* Prominent Call to Action Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-orange-500/10 border-2 border-amber-500/20 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:border-amber-500/35 transition-all duration-300">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-600 border border-amber-500/20">
            <FileText className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-extrabold text-[var(--color-navy-deep)] leading-snug">
              Download the Full SBI PO Previous Year Paper PDF (2021–2025)
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Includes shift-wise papers, detailed solutions, sectional time analysis, and difficulty ratings.
            </p>
          </div>
        </div>
        <a
          href={ctaHref}
          className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-center shadow-md hover:shadow-amber-500/20 shrink-0 flex items-center justify-center gap-1.5"
        >
          Access Free PDFs Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
