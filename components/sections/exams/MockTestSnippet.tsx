// PATH: components/sections/exams/MockTestSnippet.tsx
'use client';

import React from 'react';
import { Trophy, CheckCircle2, Star, Sparkles, Languages, BarChart3, Clock, ArrowRight } from 'lucide-react';

export default function MockTestSnippet() {
  const features = [
    {
      title: "Prelims Full-Length Mocks",
      value: "20 Full-Length Tests",
      desc: "Reasoning, Quant, English combined, 60-min timed with sectional clocks",
      icon: Clock,
      iconColor: "text-blue-400 bg-blue-500/10",
    },
    {
      title: "Prelims Sectional Tests",
      value: "30+ Tests Per Section",
      desc: "Topic-focused sectional drills for English, Quantitative Aptitude & Reasoning",
      icon: Trophy,
      iconColor: "text-amber-400 bg-amber-500/10",
    },
    {
      title: "Mains Full-Length Mocks",
      value: "15 Advanced Level Tests",
      desc: "Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking, English",
      icon: Star,
      iconColor: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "Mains Descriptive Test Practice",
      value: "5 Evaluation Sets",
      desc: "Essay & letter writing simulations with model answers and expert grading guidelines",
      icon: Sparkles,
      iconColor: "text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "Previous Year Pattern-Based Tests",
      value: "8 Shift-Wise Papers",
      desc: "Mocks built directly from real 2021-2025 exam-shift difficulty trends",
      icon: CheckCircle2,
      iconColor: "text-teal-400 bg-teal-500/10",
    },
    {
      title: "Performance Analytics",
      value: "AI-Powered Report",
      desc: "All-India rank, percentile, section-wise accuracy, and time-per-question breakdown",
      icon: BarChart3,
      iconColor: "text-rose-400 bg-rose-500/10",
    },
    {
      title: "Language Support",
      value: "Bilingual Tests",
      desc: "All mock questions and detailed solutions available in both English & Hindi",
      icon: Languages,
      iconColor: "text-indigo-400 bg-indigo-500/10",
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#07102A] via-[#0D1C44] to-[#07102A] text-white border-2 border-amber-500/35 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(240,180,41,0.12)] font-sans">
      
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.15] bg-amber-400 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-[0.08] bg-blue-500 blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
        <div className="space-y-3 max-w-2xl text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-[var(--color-gold-bright)] text-xs font-bold border border-amber-500/20 uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            Recommended Practice Series
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
            SBI PO Mock Test Series 2026
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Structured for both Prelims and Mains, built on the latest SBI PO exam pattern, with detailed solutions and All-India performance ranking after every attempt.
          </p>
        </div>
        
        {/* Quick Social Proof Badges */}
        <div className="flex flex-row md:flex-col gap-3 shrink-0 justify-start">
          <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-left">
            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Attempts</span>
            <span className="text-base font-black text-[var(--color-gold-bright)]">38,412 This Month</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-left">
            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">User Rating</span>
            <span className="text-base font-black text-white flex items-center gap-1">
              4.8 <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> <span className="text-[10px] text-slate-400 font-medium">(8.5k Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Structured Details Grid (Features List) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${feature.iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <div className="font-extrabold text-sm text-slate-200">
                    {feature.title}
                  </div>
                  <span className="text-[11px] font-black text-[var(--color-gold-bright)]">
                    {feature.value}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Differentiator Alert Callout */}
      <div className="relative z-10 bg-white/[0.03] border border-white/10 rounded-2xl p-5 mb-8 text-left space-y-2">
        <div className="text-xs font-bold text-slate-350 uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[var(--color-gold-bright)]" />
          Why PrepBanker's mock tests are built differently
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Our question difficulty is recalibrated every year based on the previous cycle's actual shift-wise feedback from our own test-takers, not just theoretical pattern guesses. Each query mirrors the timing pressure and sectional constraints of the live bank CBT.
        </p>
      </div>

      {/* Direct CTA Action Button */}
      <div className="relative z-10 text-center">
        <a
          href="https://app.prepgrind.com/signup/banking"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm sm:text-base rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 group"
        >
          <span>Attempt a Free SBI PO Mock Test Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <span className="block text-[10px] text-slate-500 mt-2.5 font-medium">
          Free mock test includes detailed performance summary and score breakdown
        </span>
      </div>

    </div>
  );
}
