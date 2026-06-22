// PATH: components/sections/quiz/seo/QuizSEOContent.tsx
'use client';

import { useState } from 'react';
import {
  Zap,
  Target,
  Brain,
  Award,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface QuizSEOContentProps {
  onSelectCategory: (cat: 'sbi' | 'ibps' | 'quant' | 'reasoning' | 'english' | 'current' | 'banking') => void;
}

export default function QuizSEOContent({ onSelectCategory }: QuizSEOContentProps) {
  const [activeTab, setActiveTab] = useState<'quant' | 'reasoning' | 'english' | 'ga'>('quant');

  const topicTabs = [
    {
      id: 'quant' as const,
      label: 'Quantitative Aptitude',
      topics: [
        { name: 'Arithmetic', desc: 'Master Profit & Loss, Time & Work, Speed Distance, Interest, and Mixtures.' },
        { name: 'Algebra', desc: 'Solve linear and quadratic equations, inequalities, and sequences quickly.' },
        { name: 'Data Interpretation', desc: 'Analyze complex Pie charts, Bar graphs, Line tables, and Caselet problems.' },
        { name: 'Simplification', desc: 'Improve mathematical speed using VBODMAS rules and approximation tricks.' }
      ]
    },
    {
      id: 'reasoning' as const,
      label: 'Reasoning Ability',
      topics: [
        { name: 'Puzzles', desc: 'Practice Floor, Box, Scheduling, and multi-variable logic puzzles.' },
        { name: 'Seating Arrangement', desc: 'Solve Linear, Circular, Rectangular, and Square seating configurations.' },
        { name: 'Coding-Decoding', desc: 'Decode complex letter-number combinations and Chinese coding patterns.' },
        { name: 'Blood Relations', desc: 'Map family trees and solve coded blood relationship statements.' }
      ]
    },
    {
      id: 'english' as const,
      label: 'English Language',
      topics: [
        { name: 'Reading Comprehension', desc: 'Enhance passage parsing speed and practice tone & main-idea questions.' },
        { name: 'Cloze Test', desc: 'Fill blanks in contextual paragraphs using vocabulary and grammar rules.' },
        { name: 'Error Detection', desc: 'Identify syntax, subject-verb agreement, tense, and modifier errors.' },
        { name: 'Vocabulary', desc: 'Learn synonyms, antonyms, idiom meanings, and correct word usage.' }
      ]
    },
    {
      id: 'ga' as const,
      label: 'General Awareness',
      topics: [
        { name: 'Banking Awareness', desc: 'Study banking history, acronyms, monetary policy, and RBI regulations.' },
        { name: 'Financial Awareness', desc: 'Understand capital markets, mutual funds, inflation indices, and union budget.' },
        { name: 'Static GK', desc: 'Memorize national parks, dams, airport locations, currencies, and headquarters.' },
        { name: 'Daily Current Affairs', desc: 'Stay updated on national events, international summits, and key appointments.' }
      ]
    }
  ];

  const currentTabContent = topicTabs.find(tab => tab.id === activeTab);

  return (
    <section className="bg-slate-50/50 border-t border-slate-200/60 pt-16 pb-20">
      <div className="container-custom space-y-24">

        {/* ── SECTION 1: Why Practice Quizzes Matter ── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Why Practice Quizzes Matter
            </h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Achieving speed and accuracy in competitive banking exams requires systematic conceptual drills. Discover why interactive quiz practice is your greatest asset.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: RefreshCw,
                color: 'text-blue-500 bg-blue-50',
                title: 'Concept Reinforcement',
                desc: 'Instantly apply concepts learned from textbooks to reinforce understanding and identify gaps.'
              },
              {
                icon: Zap,
                color: 'text-amber-500 bg-amber-50',
                title: 'Faster Recall Ability',
                desc: 'Train your brain to recognize patterns and retrieve correct formulas or shortcuts under time pressure.'
              },
              {
                icon: Target,
                color: 'text-rose-500 bg-rose-50',
                title: 'Accuracy Improvement',
                desc: 'Practice logical elimination and avoid traps to consistently increase your net accuracy.'
              },
              {
                icon: Award,
                color: 'text-emerald-500 bg-emerald-50',
                title: 'Exam Readiness',
                desc: 'Replicate real-time exam conditions and adapt to strict sectional countdown clocks.'
              },
              {
                icon: Brain,
                color: 'text-purple-500 bg-purple-50',
                title: 'Better Retention',
                desc: 'Active retrieval through quiz solving helps move critical rules and facts into long-term memory.'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white border border-slate-150 p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-slate-350 hover:-translate-y-1 flex flex-col items-center text-center">
                <div className={`p-3.5 rounded-2xl ${item.color} mb-4 transition-transform group-hover:scale-110`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-navy)] mb-2">{item.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* ── SECTION 2: Benefits of Daily Quiz Practice ── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Benefits of Daily Quiz Practice
            </h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Making quizzes a daily ritual primes your mental reflexes, ensuring you build confidence and solid foundation habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: 'Consistent Learning', subtitle: 'Habits', desc: 'Avoid cramming. Standard daily quizzes help you absorb banking and GA topics incrementally.' },
              { title: 'Stronger Core', subtitle: 'Fundamentals', desc: 'Repeatedly testing basic arithmetic, grammar rules, and syllogisms builds strong roots.' },
              { title: 'Time Management', subtitle: 'Optimization', desc: 'Learn to allocate seconds efficiently, identifying instantly when to attempt and when to skip.' },
              { title: 'Performance', subtitle: 'Tracking', desc: 'Measure your percentile rank, response speeds, and accuracy rates on daily dashboard heatmaps.' },
              { title: 'Unshakable', subtitle: 'Confidence', desc: 'Repeated exposures to complex puzzles and DI sets removes exam anxiety on final test day.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-150 rounded-2xl p-5 hover:border-[var(--color-blue)] transition-all flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-extrabold text-slate-200 mb-3">0{idx + 1}</div>
                  <h3 className="text-[14px] font-bold text-[var(--color-navy)] mb-1 leading-snug">
                    {item.title} <span className="block text-slate-400 font-semibold">{item.subtitle}</span>
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed mt-2.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── SECTION 3: Topic-Wise Quiz Preparation ── */}
        <div className="space-y-8 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-navy)] tracking-tight">
                Topic-Wise Quiz Preparation
              </h2>
              <p className="text-[14px] text-slate-500 mt-1 max-w-xl leading-relaxed">
                Banking exams test specific focus areas. Toggle the categories below to understand the key syllabus modules and prioritize your preparation.
              </p>
            </div>

            {/* Tabs Headers */}
            <div className="flex flex-wrap gap-2">
              {topicTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-[14px] font-bold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[var(--color-blue)] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-650 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {currentTabContent?.topics.map((topic, index) => (
              <div key={index} className="bg-slate-50 border border-slate-150 p-5 rounded-2xl hover:bg-white hover:border-[var(--color-blue)]/40 hover:shadow-sm transition-all duration-200">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[var(--color-blue)]/10 text-[var(--color-blue)] text-[14px] font-bold rounded-lg mb-3">
                  {index + 1}
                </span>
                <h3 className="text-sm font-bold text-[var(--color-navy)] mb-1.5">{topic.name}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* ── SECTION 4: How to Use Quiz Practice Effectively ── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">
              How to Use Quiz Practice Effectively
            </h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Simply solving questions is not enough. Follow this structured three-step lifecycle to double the productivity of every practice session.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-slate-200 z-0" />

            {[
              {
                step: '01',
                phase: 'Before Attempting',
                bg: 'bg-blue-50 border-blue-200',
                bullets: [
                  { title: 'Revision first', desc: 'Revise core rules and formulas.' },
                  { title: 'Topic preparation', desc: 'Study base principles before practice.' },
                  { title: 'Time allocation', desc: 'Set a target time limit per question.' }
                ]
              },
              {
                step: '02',
                phase: 'During Quiz',
                bg: 'bg-amber-50 border-amber-200',
                bullets: [
                  { title: 'Accuracy focus', desc: 'Avoid guessing to reduce negative marks.' },
                  { title: 'Time management', desc: 'Track the ticking sectional clock.' },
                  { title: 'Smart selection', desc: 'Skip lengthy questions; do easy ones first.' }
                ]
              },
              {
                step: '03',
                phase: 'After Quiz',
                bg: 'bg-emerald-50 border-emerald-200',
                bullets: [
                  { title: 'Performance review', desc: 'Check your percentile and speed graphs.' },
                  { title: 'Error analysis', desc: 'Inspect wrong answers and study explanations.' },
                  { title: 'Improvement tracking', desc: 'Bookmark weak questions to attempt later.' }
                ]
              }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-slate-150 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-extrabold uppercase tracking-wider text-slate-400">Phase</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-[14px] font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[var(--color-navy)] mb-4 border-b border-slate-100 pb-2">
                  {step.phase}
                </h3>
                <ul className="space-y-4">
                  {step.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5 text-[14px] text-slate-655 leading-relaxed">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                      <div>
                        <strong className="text-slate-800 block font-semibold">{bullet.title}</strong>
                        {bullet.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* ── SECTION 5: Quiz-Based Learning Advantages ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-150 text-[14px] font-bold text-emerald-600 uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Empirical Results
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] leading-tight tracking-tight">
              Quiz-Based Learning: The Proven Advantage
            </h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              Unlike reading passive preparation guides, actively working through simulation quizzes fires up your brain pathways. This structured format forces active decision-making, which leads to superior knowledge retrieval.
            </p>
            <div className="space-y-4">
              {[
                'Active Recall: Enhances concept retention by forcing your mind to query memory blocks.',
                'Immediate Corrective Explanations: Prevents misconceptions from solidifying.',
                'Micro-assessments: Identify exact weak sections without feeling overwhelmed.'
              ].map((adv, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-700 leading-relaxed">{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Progress Visual Visual Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-150 p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-black text-[var(--color-blue)]">92%</div>
              <h3 className="text-[14px] font-bold text-[var(--color-navy)]">Active Learning Retention</h3>
              <p className="text-[14px] text-slate-400 leading-relaxed">Compared to only 15% retention when simply reading conceptual notes.</p>
            </div>
            <div className="bg-white border border-slate-150 p-6 rounded-2xl text-center space-y-2">
              <div className="text-3xl font-black text-emerald-500">2.5x</div>
              <h3 className="text-[14px] font-bold text-[var(--color-navy)]">Speed Improvement</h3>
              <p className="text-[14px] text-slate-400 leading-relaxed">Aspirants practicing timed quizzes daily resolve equations 2.5 times faster.</p>
            </div>
            <div className="bg-white border border-slate-150 p-6 rounded-2xl text-center space-y-2 col-span-2">
              <h3 className="text-[14px] font-bold text-slate-650 flex items-center justify-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--color-blue)]" /> Weekly Progress Velocity
              </h3>
              {/* Simulated Chart visual */}
              <div className="flex justify-between items-end h-16 pt-2 px-6">
                {[20, 35, 45, 60, 85].map((h, i) => (
                  <div key={i} className="flex flex-col justify-end items-center gap-1.5 w-8 h-full">
                    <div
                      className={`w-full rounded-t-sm transition-all duration-500 ${
                        i === 4 ? 'bg-[var(--color-blue)]' : 'bg-slate-200'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[14px] text-slate-400 font-bold uppercase">W0{i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ── SECTION 6: Recommended Practice Strategy ── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Recommended Practice Strategy
            </h2>
            <p className="text-sm text-slate-650 leading-relaxed">
              A phased roadmap for systematic skill acquisition. Move sequentially from foundations to timed pressure tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connectors (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[28%] right-[28%] h-0.5 border-t border-dashed border-slate-350 z-0" />

            {[
              {
                level: 'Beginner Level',
                badge: 'Weeks 1-4',
                color: 'border-slate-200 hover:border-blue-400',
                badgeBg: 'bg-blue-50 text-blue-600',
                title: 'Foundation Quizzes',
                desc: 'Focus on topic-wise quizzes with zero timing pressure. Get comfortable with basic formulas, percentage transformations, syllogism rules, and vocab definitions.'
              },
              {
                level: 'Intermediate Level',
                badge: 'Weeks 5-8',
                color: 'border-slate-200 hover:border-amber-400',
                badgeBg: 'bg-amber-50 text-amber-600',
                title: 'Mixed-Topic Quizzes',
                desc: 'Introduce timing rules. Solve mixed topic sets and practice sectional quizzes in one sitting. Learn to parse multiple patterns consecutively.'
              },
              {
                level: 'Advanced Level',
                badge: 'Weeks 9+',
                color: 'border-slate-200 hover:border-emerald-400',
                badgeBg: 'bg-emerald-50 text-emerald-600',
                title: 'Exam-Level Quizzes',
                desc: 'Attempt difficult puzzle arrays, complex mixed DIs, and live mock tests under strict countdown rules. Prioritize accuracy and rapid question elimination.'
              }
            ].map((step, idx) => (
              <div key={idx} className={`relative z-10 bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-md ${step.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[14px] font-black uppercase px-2 py-0.5 rounded ${step.badgeBg}`}>
                    {step.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-[14px] font-bold text-slate-400 uppercase tracking-wider mb-1">{step.level}</h3>
                <h4 className="text-sm font-extrabold text-[var(--color-navy)] mb-3">{step.title}</h4>
                <p className="text-[14px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
