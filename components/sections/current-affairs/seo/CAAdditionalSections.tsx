// PATH: components/sections/current-affairs/seo/CAAdditionalSections.tsx
'use client';

import {
  TrendingUp,
  BookOpen,
  HelpCircle,
  FileText,
  Bookmark,
  CheckCircle2,
  Calendar,
  Award,
  Zap,
  ArrowUpRight
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
    { name: 'RBI Updates', desc: 'Monetary policy repo rates, regulatory announcements, circulars, and directives.', count: articles.filter(a => a.category === 'RBI Updates').length },
    { name: 'Banking Awareness', desc: 'Operational banking terms, financial inclusion, digital banking updates, and bank reports.', count: articles.filter(a => a.category === 'Banking Awareness').length },
    { name: 'Economy & Finance', desc: 'National GDP revisions, inflation indexes (CPI/WPI), fiscal policy, and trade data.', count: articles.filter(a => a.category === 'Economy & Finance').length },
    { name: 'Government Schemes', desc: 'Flagship welfare initiatives, agricultural inputs, housing grants, and digital services.', count: articles.filter(a => a.category === 'Government Schemes').length },
    { name: 'International Affairs', desc: 'Bilateral treaties, G20/BRICS summits, global central bank moves, and WTO updates.', count: articles.filter(a => a.category === 'International Affairs').length },
    { name: 'Static GK', desc: 'Core facts about RBI, development financial institutions, and constitutional bodies.', count: articles.filter(a => a.category === 'Static GK').length }
  ];

  const trendingTopics = [
    'Repo Rate MPC',
    'e₹ CBDC Retail',
    'Financial Inclusion Index',
    'PM Vishwakarma Loans',
    'PMAY Urban 2.0',
    'World Bank DPI Report',
    'NITI Aayog SDG Index',
    'Global Innovation Index',
    'India-UAE BIT Treaty'
  ];

  return (
    <section className="bg-slate-50/50 border-t border-slate-200/60 pt-16 pb-20 mt-12">
      <div className="container-custom space-y-20">

        {/* ── Grid: Latest & Most Read Current Affairs ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Section 1: Latest Current Affairs */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <h2 className="text-lg font-extrabold text-[var(--color-navy)] flex items-center gap-2 border-b border-slate-100 pb-3">
              <Calendar className="w-5 h-5 text-[var(--color-blue)]" />
              Latest Current Affairs Updates
            </h2>
            <div className="space-y-4">
              {latestArticles.map((art) => (
                <div key={art.id} className="flex gap-4 items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0 group">
                  <span className="text-[10px] font-bold text-slate-400 mt-1 whitespace-nowrap">{art.date}</span>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-slate-700 leading-snug group-hover:text-[var(--color-blue)] transition-colors">
                      <a href={`/current-affairs/${art.id}`}>{art.title}</a>
                    </h3>
                    <span className="inline-block text-[9px] font-bold text-[var(--color-blue)] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Most Read Current Affairs */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <h2 className="text-lg font-extrabold text-[var(--color-navy)] flex items-center gap-2 border-b border-slate-100 pb-3">
              <TrendingUp className="w-5 h-5 text-rose-500" />
              Most Read Current Affairs
            </h2>
            <div className="space-y-4">
              {highImportance.map((art) => (
                <div key={art.id} className="flex gap-4 items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0 group">
                  <span className="flex-shrink-0 text-[10px] font-extrabold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded uppercase">High</span>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-slate-700 leading-snug group-hover:text-[var(--color-blue)] transition-colors">
                      <a href={`/current-affairs/${art.id}`}>{art.title}</a>
                    </h3>
                    <p className="text-[11px] text-slate-450 line-clamp-1">{art.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* ── Section 3: Monthly Current Affairs Highlights ── */}
        <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)]">
              Monthly Current Affairs Highlights
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Revise critical regulatory patterns and macro datasets systematically. Download our Monthly PDF Capsules for structured offline revision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {[
              { month: 'May 2026 Compilation', topics: 'RBI Repo rate hold highlights, PM Vishwakarma disbursals, NITI Aayog SDG Index ranks.', size: '4.2 MB' },
              { month: 'April 2026 Compilation', topics: 'e₹ CBDC Retail pilot expansion details, IMF India GDP revisions, Global Innovation Index score.', size: '3.9 MB' },
              { month: 'March 2026 Compilation', topics: 'Financial inclusion index performance data, public sector banks record net profits.', size: '4.5 MB' }
            ].map((cap, idx) => (
              <div key={idx} className="border border-slate-150 p-5 rounded-2xl flex flex-col justify-between hover:border-[var(--color-blue)]/40 transition-colors">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[var(--color-blue)]" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-800">{cap.month}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{cap.topics}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4">
                  <span className="text-[10px] text-slate-450 font-bold">{cap.size}</span>
                  <a
                    href="https://app.prepgrind.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black text-[var(--color-blue)] hover:underline flex items-center gap-0.5"
                  >
                    Download PDF <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── Section 4: Exam-Wise Current Affairs Coverage ── */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)]">
              Exam-Wise Current Affairs Coverage
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              General Awareness weightages vary across exams. Target the exact patterns tested in your upcoming competitive cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                exam: 'SBI PO General Awareness Weightage',
                mains: '40 Questions • 40 Marks',
                focus: 'High weightage on RBI policy developments, GDP forecasts, microfinance regulatory frameworks, and Banking history static GK. Requires deep conceptual context.',
                strategy: 'Study the last 6 months of RBI circular summaries in-depth. Focus on monetary aggregates, capital ratios, and NPA classifications.'
              },
              {
                exam: 'IBPS PO General Awareness Weightage',
                mains: '40 Questions • 40 Marks',
                focus: 'High weightage on flagship government social schemes (PMAY, Jan Dhan, PM Kisan, Vishwakarma), global financial reports (World Bank, IMF), and Static banking GK.',
                strategy: 'Focus on budget allocations, scheme launch dates, sub-targets (e.g. priority sector lending targets), and bilateral economic summits.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-150 p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-[var(--color-navy)]">{item.exam}</h3>
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">{item.mains}</span>
                </div>
                <div className="space-y-2 text-xs leading-relaxed text-slate-655">
                  <p><strong>Core Focus:</strong> {item.focus}</p>
                  <p><strong>Recommended Strategy:</strong> {item.strategy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── Section 5: Trending Topics ── */}
        <div className="bg-slate-100/50 border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-sm font-extrabold text-[var(--color-navy)] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4.5 h-4.5 text-amber-500 fill-current" />
              Trending Topics
            </h2>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Highly queried topics in current bank exams. Click to search.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-2xl">
            {trendingTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => onSelectCategory(topic)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-650 hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] hover:shadow-sm transition-all"
              >
                #{topic}
              </button>
            ))}
          </div>
        </div>


        {/* ── Section 6: Current Affairs Categories ── */}
        <div className="space-y-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)] text-center">
            Explore Current Affairs Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-150 p-6 rounded-2xl hover:border-[var(--color-blue)]/50 transition-colors cursor-pointer group flex flex-col justify-between min-h-[160px]"
                onClick={() => onSelectCategory(cat.name)}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                      {cat.count} Articles
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-[var(--color-blue)] uppercase tracking-wider flex items-center gap-0.5 mt-4">
                  Browse category <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* ── Section 7: Why Current Affairs Matter for Competitive Exams ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)]">
              Why Current Affairs Matter for Competitive Exams
            </h2>
            <p className="text-xs leading-relaxed text-slate-655">
              In banking recruitments like SBI PO, IBPS PO, and RBI Grade B, the General Awareness paper holds a structural veto. Unlike quantitative aptitude or complex reasoning blocks which require extensive calculation time during the exam, the GA section relies purely on retrieval speed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-650">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Fastest Scoring:</strong> You can attempt 40 questions in under 15 minutes, leaving more time for tricky math.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-650">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Calculation Risks:</strong> It relies on recall. If you know the rate or fact, you score instantly without calculation errors.</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white border border-slate-150 p-6 rounded-2xl text-center space-y-4">
            <div className="text-3xl font-black text-[var(--color-blue)]">40 / 200 Marks</div>
            <h3 className="text-xs font-bold text-[var(--color-navy)]">GA Marks Share in PO Mains</h3>
            <p className="text-[11px] text-slate-450 leading-relaxed">
              Accounting for 20% of the entire objective Mains score. Success in GA is the highest correlated factor with final merit selection.
            </p>
          </div>
        </div>


        {/* ── Section 8: Preparation Tips and Resources ── */}
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)] text-center">
            Current Affairs Preparation Tips & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Daily Incremental Reading', desc: 'Spend 15 minutes every morning checking high-importance news. Read the quick facts to absorb numbers and abbreviations incrementally.' },
              { step: '02', title: 'Targeted Revision Drills', desc: 'Attempt daily and weekly current affairs quizzes. Active testing prevents memory decay and trains recall under simulated exam timers.' },
              { step: '03', title: 'Concept Interlinking', desc: 'Link current events to static principles. For instance, when reading about repo rate pauses, revise static guidelines for MPC members.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-150 p-6 rounded-2xl hover:shadow-sm transition-shadow">
                <span className="text-2xl font-black text-slate-200 block mb-2">{step.step}</span>
                <h3 className="text-xs font-extrabold text-[var(--color-navy)] mb-2 uppercase tracking-wide">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
