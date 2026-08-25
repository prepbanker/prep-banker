// PATH: components/sections/exams/ExamAnalysisSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, TrendingUp, AlertTriangle, ChevronRight, User, HelpCircle } from 'lucide-react';

interface ExamAnalysisSectionProps {
  examId: string;
}

export default function ExamAnalysisSection({ examId }: ExamAnalysisSectionProps) {
  const isSbi = examId === 'sbi-po';

  if (!isSbi) return null; // Section is specific to SBI PO

  return (
    <div className="space-y-8 my-4">
      {/* Eyebrow & Headers */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-650 text-xs font-bold border border-red-100 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Live Updates & Analysis
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[var(--color-navy)] leading-tight font-display">
          SBI PO Prelims Exam Analysis
        </h3>
      </div>

      {/* Historical Reference Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_4px_24px_rgba(13,27,62,0.02)] overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="font-black text-sm sm:text-base text-[var(--color-navy)] font-display">
              SBI PO Prelims 2025 Analysis (for reference)
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Held on 5 August 2025 across multiple shifts
            </p>
          </div>
          <span className="text-[10px] font-extrabold uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 self-start sm:self-center">
            Reference Data
          </span>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
            The SBI PO Prelims 2025 exam was held on 5 August 2025 across multiple shifts. Overall, candidates rated the difficulty level as <strong>moderate</strong>. Here's how each section played out:
          </p>

          <div className="w-full overflow-x-auto border border-slate-150 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-3">Section</th>
                  <th className="px-4 py-3">Difficulty Level</th>
                  <th className="px-4 py-3">Good Attempts</th>
                  <th className="px-4 py-3">Key Observation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650 font-medium">
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">Reasoning Ability</td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100/50">
                      Moderate to Difficult
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-800 font-semibold">22–26</td>
                  <td className="px-4 py-3.5 text-slate-500 font-normal leading-relaxed">
                    Puzzles and seating arrangement were the most time-consuming; this section decided most people's overall score.
                  </td>
                </tr>
                <tr className="bg-slate-50/10 hover:bg-slate-50/30 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">Quantitative Aptitude</td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-orange-700 border border-orange-100/50">
                      Moderate
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-800 font-semibold">20–24</td>
                  <td className="px-4 py-3.5 text-slate-500 font-normal leading-relaxed">
                    Data Interpretation sets took longer than expected; simplification and arithmetic were manageable.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">English Language</td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100/50">
                      Easy to Moderate
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-800 font-semibold">22–27</td>
                  <td className="px-4 py-3.5 text-slate-500 font-normal leading-relaxed">
                    Reading Comprehension and cloze test were straightforward; error-spotting had a couple of tricky ones.
                  </td>
                </tr>
                <tr className="bg-slate-900/5 hover:bg-slate-900/10 transition-colors font-bold text-slate-900 border-t border-slate-200">
                  <td className="px-4 py-3.5 flex items-center gap-1.5 pl-4">
                    <TrendingUp className="w-4 h-4 text-[var(--color-navy)] shrink-0" />
                    <span>Overall</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/40">
                      Moderate
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-[var(--color-navy-deep)]">65–72</td>
                  <td className="px-4 py-3.5 text-slate-700 font-medium leading-relaxed">
                    Time management on Reasoning puzzles was the biggest differentiator between high and average scorers.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Analysis Strategy Alert */}
          <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4.5 rounded-r-xl text-xs sm:text-sm text-amber-900 leading-relaxed shadow-xs flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
            <div>
              <strong>What this means for your SBI PO 2026 prep:</strong> Reasoning puzzles remain the single biggest score-decider year after year. If puzzles and seating arrangement aren't your strongest area yet, that's where your remaining prep time should go first — not Quant.
            </div>
          </div>
        </div>
      </div>

      {/* Button linking out to a full sub-page */}
      <div className="text-center">
        <Link
          href={`/${examId}/prelims-exam-analysis`}
          className="inline-flex items-center gap-1.5 px-6 py-3 border border-slate-200 hover:border-slate-350 bg-slate-50 hover:bg-slate-100/70 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-extrabold rounded-xl transition-all duration-200 shadow-xs cursor-pointer group"
        >
          <span>View Full Shift-wise Exam Analysis Guide</span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
