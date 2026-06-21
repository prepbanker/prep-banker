// PATH: components/sections/home/ExamTabExplorer.tsx
'use client';

import { useState } from 'react';
import { heroExamData, examHighlights } from '@/lib/data';
import type { ExamType } from '@/types';

const TABS: ExamType[] = ['SBI-PO', 'IBPS-PO'];

const EXAM_META: Record<ExamType, {
  color: string;
  vacancies: string;
  exam: string;
  notify: string;
}> = {
  'SBI-PO': {
    color: '#1B6EB5',
    vacancies: '2000+ Vacancies',
    exam: 'June 2026',
    notify: 'April 2026',
  },
  'IBPS-PO': {
    color: '#D4A017',
    vacancies: '3500+ Vacancies',
    exam: 'Oct 2026',
    notify: 'Aug 2026',
  },
};

export default function ExamTabExplorer() {
  const [activeTab, setActiveTab] = useState<ExamType>('SBI-PO');
  const [activeSubTab, setActiveSubTab] = useState<'mains' | 'prelims' | 'stats' | 'about'>('mains');
  const meta = EXAM_META[activeTab];

  const SUB_TABS: { id: 'mains' | 'prelims' | 'stats' | 'about'; label: string }[] = [
    { id: 'mains', label: 'Mains Syllabus' },
    { id: 'prelims', label: 'Prelims Syllabus' },
    { id: 'stats', label: 'Exam Stats' },
    { id: 'about', label: 'About' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, currentTab: ExamType) => {
    const currentIndex = TABS.indexOf(currentTab);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % TABS.length;
      const nextTab = TABS[nextIndex];
      setActiveTab(nextTab);
      setTimeout(() => {
        document.getElementById(`tab-${nextTab.toLowerCase()}`)?.focus();
      }, 0);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
      const nextTab = TABS[prevIndex];
      setActiveTab(nextTab);
      setTimeout(() => {
        document.getElementById(`tab-${nextTab.toLowerCase()}`)?.focus();
      }, 0);
    }
  };

  return (
    <section aria-label="Exam syllabus explorer" className="py-12 relative overflow-hidden" style={{ background: 'var(--color-off-white)' }}>

      <div className="container-custom relative z-10">
        
        {/* ── Outer Single Card Container wrapping everything ── */}
        <div className="mx-auto w-full bg-[#0d1b3e] rounded-3xl border border-slate-800 p-5 md:p-6 shadow-[0_12px_40px_rgba(13,27,62,0.15)]">

          {/* ── Top Tabs Grid ── */}
          <div role="tablist" className="grid grid-cols-2 gap-4 mb-6">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              const m = EXAM_META[tab];
              const activeColor = m.color;

              return (
                <button
                  key={tab}
                  id={`tab-${tab.toLowerCase()}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.toLowerCase()}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={(e) => handleKeyDown(e, tab)}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                  className={`flex flex-col items-center justify-center py-3.5 px-6 rounded-2xl transition-all duration-200 min-h-[64px] focus:outline-none border-2 cursor-pointer ${isActive
                      ? 'shadow-[0_4px_20px_rgba(13,27,62,0.08)] border-transparent'
                      : 'border-slate-800 hover:border-slate-700/60 hover:bg-white/[0.08]'
                    }`}
                  style={isActive ? {
                    borderColor: activeColor,
                    boxShadow: `0 0 16px ${activeColor}30`,
                    background: '#ffffff'
                  } : {
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    background: 'rgba(255, 255, 255, 0.04)',
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full"
                      style={{ background: activeColor }}
                    />
                    <span className={`text-base font-extrabold transition-colors duration-200 ${isActive ? 'text-slate-800' : 'text-slate-200'}`}>
                      {tab}
                    </span>
                  </span>
                  <span className={`mt-0.5 text-xs font-medium transition-colors duration-200 ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>
                    {m.vacancies}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Dual Column Grid Layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start">

            {/* Left main card containing sidebar and details */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[440px]">

              {/* Sidebar navigation */}
              <nav aria-label="Syllabus menu" className="w-full md:w-[220px] flex-shrink-0 bg-slate-50 border-r border-slate-100 p-3">
                <ul className="flex flex-col gap-1.5 list-none">
                  {SUB_TABS.map((subTab) => {
                    const isSubActive = activeSubTab === subTab.id;
                    const label = subTab.id === 'about' ? `About ${activeTab}` : subTab.label;
                    const activeColor = EXAM_META[activeTab].color;
                    const activeBg = activeTab === 'SBI-PO' ? 'rgba(27, 110, 181, 0.08)' : 'rgba(212, 160, 23, 0.08)';
                    const activeText = activeTab === 'SBI-PO' ? '#1B6EB5' : '#D4A017';

                    return (
                      <li key={subTab.id}>
                        <button
                          onClick={() => setActiveSubTab(subTab.id)}
                          className={`w-full min-h-[44px] py-3 px-4 rounded-xl text-left text-sm font-semibold transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-between ${isSubActive
                              ? 'font-bold'
                              : 'bg-transparent text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'
                            }`}
                          style={isSubActive ? {
                            borderRight: `3.5px solid ${activeColor}`,
                            borderRadius: '12px 0 0 12px',
                            background: activeBg,
                            color: activeText
                          } : {}}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Center content panel */}
              <div
                id={`panel-${activeTab.toLowerCase()}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab.toLowerCase()}`}
                className="flex-1 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Header with Title and Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-800">
                        {activeSubTab === 'mains' ? 'Mains Syllabus' :
                          activeSubTab === 'prelims' ? 'Prelims Syllabus' :
                            activeSubTab === 'stats' ? 'Key Exam Stats' :
                              `About ${activeTab}`}
                      </h3>

                      {/* Badges */}
                      {activeSubTab === 'mains' && (
                        <>
                          <span className="rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-xs font-bold text-amber-700 uppercase tracking-wider">
                            MERIT-BASED
                          </span>
                          <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs font-bold text-slate-600">
                            155Q
                          </span>
                        </>
                      )}
                      {activeSubTab === 'prelims' && (
                        <>
                          <span className="rounded bg-blue-50 border border-blue-200 px-2 py-0.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
                            QUALIFYING
                          </span>
                          <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs font-bold text-slate-600">
                            100Q
                          </span>
                        </>
                      )}
                      {activeSubTab === 'stats' && (
                        <>
                          <span className="rounded bg-purple-50 border border-purple-200 px-2 py-0.5 text-xs font-bold text-purple-700 uppercase tracking-wider">
                            COMPETITIVE
                          </span>
                          <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs font-bold text-slate-600">
                            STATS
                          </span>
                        </>
                      )}
                      {activeSubTab === 'about' && (
                        <>
                          <span className="rounded bg-teal-50 border border-teal-200 px-2 py-0.5 text-xs font-bold text-teal-700 uppercase tracking-wider">
                            OVERVIEW
                          </span>
                          <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-xs font-bold text-slate-600">
                            INFO
                          </span>
                        </>
                      )}
                    </div>

                    <span className="rounded bg-green-50 border border-green-200 px-2 py-0.5 text-xs font-bold text-green-700 uppercase tracking-wider md:ml-auto">
                      NATIONAL LEVEL
                    </span>
                  </div>

                  {/* Dynamic Detail Content */}
                  {activeSubTab === 'about' ? (
                    <div className="mb-6 leading-relaxed text-sm text-slate-600 bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                      <p className="font-medium text-slate-700 mb-2">
                        {activeTab === 'SBI-PO' ? 'State Bank of India Probationary Officer' : 'IBPS Probationary Officer'}
                      </p>
                      <p>
                        {examHighlights.find(h => h.shortName === activeTab)?.overview}
                      </p>
                    </div>
                  ) : (
                    <ul className="mb-6 flex flex-col gap-3">
                      {(activeSubTab === 'prelims' ? heroExamData[activeTab].sections[0].topics :
                        activeSubTab === 'mains' ? heroExamData[activeTab].sections[1].topics :
                          heroExamData[activeTab].sections[2].topics).map((topic, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-slate-600"
                            >
                              <span
                                className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                                style={{
                                  background: activeSubTab === 'prelims' ? '#DBEAFE' : activeSubTab === 'mains' ? '#FEF3C7' : '#D1FAE5',
                                  color: activeSubTab === 'prelims' ? '#1D4ED8' : activeSubTab === 'mains' ? '#B45309' : '#065F46',
                                }}
                              >
                                {idx + 1}
                              </span>
                              <span className="font-medium text-slate-700">{topic}</span>
                            </li>
                          ))}
                    </ul>
                  )}

                  {/* Summary Info Banner */}
                  <div className="mb-5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
                    {activeSubTab === 'prelims' ? heroExamData[activeTab].sections[0].info :
                      activeSubTab === 'mains' ? heroExamData[activeTab].sections[1].info :
                        activeSubTab === 'stats' ? heroExamData[activeTab].sections[2].info :
                          activeTab === 'SBI-PO' ? 'State Bank of India • Central Recruitment Board' : 'Institute of Banking Personnel Selection • 11 Banks'}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(activeSubTab === 'prelims' ? [...heroExamData[activeTab].sections[0].tags, 'Online Mode', 'Annual'] :
                      activeSubTab === 'mains' ? [...heroExamData[activeTab].sections[1].tags, ...heroExamData[activeTab].sections[2].tags] :
                        activeSubTab === 'stats' ? [...heroExamData[activeTab].sections[2].tags, 'Prestigious', 'High Growth'] :
                          ['National Level', 'Recruitment Drive', 'Public Sector Banks', 'Government Job']).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500"
                            >
                              {tag}
                            </span>
                          ))}
                  </div>
                </div>

                {/* CTA Button Box (Centered horizontally inside the panel) */}
                <div className="flex items-center justify-center pt-5 border-t border-slate-100">
                  <a
                    href="https://app.prepgrind.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
                      color: 'var(--color-navy-deep)',
                      boxShadow: '0 4px 14px rgba(212,160,23,0.3)',
                    }}
                  >
                    Get Free Mock Tests →
                  </a>
                </div>

              </div>
            </div>

            {/* Right Sidebar cards (1/4 width on desktop) */}
            <div className="lg:col-span-1 flex flex-col gap-4 w-full">

              {/* Card 1: Exam Quick Links */}
              <div className="bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm flex flex-col gap-4">
                <h4 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
                  Exam Quick Links
                </h4>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <a
                    href="https://app.prepgrind.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Syllabus PDF
                  </a>
                </div>
                <a
                  href="https://app.prepgrind.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-xl text-sm font-bold text-center text-slate-800 transition-all duration-200 hover:brightness-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-bright) 100%)',
                    boxShadow: '0 2px 8px rgba(212,160,23,0.2)',
                  }}
                >
                  Explore Mock Tests
                </a>
              </div>

              {/* Card 2: Key Dates & Info */}
              <div className="bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm flex flex-col gap-3">
                <h4 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
                  Key Dates & Info
                </h4>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between rounded-xl bg-blue-50/70 border border-blue-100 px-3.5 py-2.5 text-xs font-bold text-blue-700">
                    <span>NOTIFICATION:</span>
                    <span>{meta.notify.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-amber-50/70 border border-amber-100 px-3.5 py-2.5 text-xs font-bold text-amber-800">
                    <span>PRELIMS:</span>
                    <span>{meta.exam.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-green-50/70 border border-green-100 px-3.5 py-2.5 text-xs font-bold text-green-700">
                    <span>LEVEL:</span>
                    <span>NATIONAL LEVEL</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
