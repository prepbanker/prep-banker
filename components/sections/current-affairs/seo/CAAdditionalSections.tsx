// PATH: components/sections/current-affairs/seo/CAAdditionalSections.tsx
'use client';

import {
  TrendingUp,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  FileText
} from 'lucide-react';
import type { CurrentAffair } from '../../../../types/current-affairs';

interface Props {
  articles: CurrentAffair[];
  onSelectCategory: (category: string) => void;
}

export default function CAAdditionalSections({ articles, onSelectCategory }: Props) {
  // Derive latest & trending
  const latestArticles = articles.slice(0, 5);
  const highImportance = articles.filter(a => a.importance === 'High').slice(0, 5);

  const categories = [
    { name: 'RBI Updates', desc: 'Monetary policy repo rates, regulatory announcements, and directives.', count: articles.filter(a => a.category === 'RBI Updates').length },
    { name: 'Banking Awareness', desc: 'Operational banking terms, financial inclusion, and digital banking reports.', count: articles.filter(a => a.category === 'Banking Awareness').length },
    { name: 'Economy & Finance', desc: 'GDP revisions, inflation indexes (CPI/WPI), fiscal policy, and trade data.', count: articles.filter(a => a.category === 'Economy & Finance').length },
    { name: 'Government Schemes', desc: 'Flagship welfare initiatives, agricultural inputs, and digital services.', count: articles.filter(a => a.category === 'Government Schemes').length },
    { name: 'International Affairs', desc: 'Bilateral treaties, summits, global central bank actions, and WTO updates.', count: articles.filter(a => a.category === 'International Affairs').length },
    { name: 'Static GK', desc: 'Core facts about RBI, development banks, and constitutional bodies.', count: articles.filter(a => a.category === 'Static GK').length }
  ];



  return (
    <section className="bg-slate-50/50 border-t border-slate-200/60 pt-16 pb-20 mt-12">
      <div className="container-custom space-y-20">

        {/* ── Grid: Latest & Most Read Current Affairs ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Section 1: Latest Current Affairs */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <h2 className="text-[16px] font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Calendar className="w-5 h-5 text-[var(--color-blue)]" />
              Latest Current Affairs Updates
            </h2>
            <div className="space-y-4">
              {latestArticles.map((art) => (
                <div key={art.id} className="flex gap-4 items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0 group">
                  <span className="text-[14px] font-bold text-slate-400 mt-0.5 whitespace-nowrap">{art.date}</span>
                  <div className="space-y-1">
                    <h3 className="text-[14px] font-bold text-slate-700 leading-snug group-hover:text-[var(--color-blue)] transition-colors">
                      <a href={`/current-affairs/${art.id}`}>{art.title}</a>
                    </h3>
                    <span className="inline-block text-[14px] font-bold text-[var(--color-blue)] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Most Read Current Affairs */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <h2 className="text-[16px] font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <TrendingUp className="w-5 h-5 text-rose-500" />
              Most Read Current Affairs
            </h2>
            <div className="space-y-4">
              {highImportance.map((art) => (
                <div key={art.id} className="flex gap-4 items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0 group">
                  <span className="flex-shrink-0 text-[14px] font-extrabold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded uppercase">High</span>
                  <div className="space-y-1">
                    <h3 className="text-[14px] font-bold text-slate-700 leading-snug group-hover:text-[var(--color-blue)] transition-colors">
                      <a href={`/current-affairs/${art.id}`}>{art.title}</a>
                    </h3>
                    <p className="text-[14px] text-slate-500 line-clamp-1">{art.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* ── Section 3: Monthly Current Affairs Highlights ── */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-[18px] font-extrabold text-slate-900">
              Monthly Current Affairs Highlights
            </h2>
            <p className="text-[14px] text-slate-500 mt-1">
              Revise critical regulatory changes and macro datasets systematically with our PDF Capsules.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {[
              { month: 'May 2026 Compilation', topics: 'RBI Repo rate hold highlights, PM Vishwakarma disbursals, NITI Aayog SDG Index ranks.', size: '4.2 MB' },
              { month: 'April 2026 Compilation', topics: 'e₹ CBDC Retail pilot expansion details, IMF India GDP revisions, Global Innovation Index score.', size: '3.9 MB' },
              { month: 'March 2026 Compilation', topics: 'Financial inclusion index performance data, public sector banks record net profits.', size: '4.5 MB' }
            ].map((cap, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between hover:border-[var(--color-blue)]/40 hover:bg-white transition-all">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[var(--color-blue)]" />
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-800">{cap.month}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{cap.topics}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-150 pt-3 mt-4 text-[14px]">
                  <span className="text-slate-400 font-bold">{cap.size}</span>
                  <a
                    href="https://app.prepgrind.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-[var(--color-blue)] hover:underline flex items-center gap-0.5"
                  >
                    Download PDF <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── Section 4: Exam-Wise Current Affairs Coverage ── */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-[18px] font-extrabold text-slate-900">
              Exam-Wise Current Affairs Coverage
            </h2>
            <p className="text-[14px] text-slate-500 mt-1">
              General Awareness weightages vary across exams. Target the exact patterns tested in SBI PO and IBPS PO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                exam: 'SBI PO General Awareness Weightage',
                mains: '40 Qs • 40 Marks',
                focus: 'High weightage on RBI policy developments, GDP forecasts, microfinance regulatory frameworks, and Banking static GK.',
                strategy: 'Study the last 6 months of RBI circular summaries in-depth. Focus on monetary aggregates and capital ratios.'
              },
              {
                exam: 'IBPS PO General Awareness Weightage',
                mains: '40 Qs • 40 Marks',
                focus: 'High weightage on flagship government social schemes (PMAY, Jan Dhan, PM Kisan, Vishwakarma), global financial reports, and Static banking GK.',
                strategy: 'Focus on budget allocations, scheme launch dates, sub-targets, and bilateral economic summits.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-extrabold text-slate-900">{item.exam}</h3>
                  <span className="text-[14px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-100">{item.mains}</span>
                </div>
                <div className="space-y-2 text-[14px] leading-relaxed text-slate-600">
                  <p><strong>Core Focus:</strong> {item.focus}</p>
                  <p><strong>Strategy:</strong> {item.strategy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── Section 6: Current Affairs Categories ── */}
        <div className="space-y-8">
          <h2 className="text-[18px] font-extrabold text-slate-900 text-center">
            Explore Current Affairs Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-[var(--color-blue)] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between min-h-[140px]"
                onClick={() => onSelectCategory(cat.name)}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[15px] font-extrabold text-slate-900 group-hover:text-[var(--color-blue)] transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[14px] font-bold text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full">
                      {cat.count} Articles
                    </span>
                  </div>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <span className="text-[14px] font-bold text-[var(--color-blue)] uppercase tracking-wider flex items-center gap-0.5 mt-4">
                  Browse category <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* ── Section 7: Why Current Affairs Matter for Competitive Exams ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-extrabold text-slate-900">
              Why Current Affairs Matter for Competitive Exams
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-600">
              In recruitments like SBI PO and IBPS PO, the GA section relies purely on recall speed. Unlike quantitative aptitude, it lets you attempt 40 questions in under 15 minutes, boosting overall performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5 text-[14px] text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Fastest Scoring:</strong> Complete 40 questions in under 15 minutes, leaving more time for tricky math.</span>
              </div>
              <div className="flex items-start gap-2.5 text-[14px] text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Calculation Risks:</strong> Instant recall logic ensures you score without mathematical error risk.</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-2xl text-center space-y-3 hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-[var(--color-blue)]">40 / 200 Marks</div>
            <h3 className="text-[14px] font-bold text-slate-900">GA Marks Share in PO Mains</h3>
            <p className="text-[14px] text-slate-400 leading-relaxed">
              Accounting for 20% of the entire objective score. GA success is the highest correlated factor with merit selection.
            </p>
          </div>
        </div>


        {/* ── Section 8: Preparation Tips and Resources ── */}
        <div className="space-y-6">
          <h2 className="text-[18px] font-extrabold text-slate-900 text-center">
            Current Affairs Preparation Tips & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Daily Incremental Reading', desc: 'Spend 15 minutes daily reading key news. Absorb data and abbreviations incrementally to avoid last-minute prep pressure.' },
              { step: '02', title: 'Targeted Revision Drills', desc: 'Attempt regular current affairs quizzes. Active practice prevents memory decay and trains recall under simulated timers.' },
              { step: '03', title: 'Concept Interlinking', desc: 'Link current events to static principles. For instance, when repo rates change, quickly review static MPC guidelines.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <span className="text-2xl font-black text-slate-200 block mb-2">{step.step}</span>
                <h3 className="text-[14px] font-extrabold text-slate-900 mb-2 uppercase tracking-wide">{step.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
