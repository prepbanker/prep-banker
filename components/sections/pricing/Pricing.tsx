// PATH: components/sections/pricing/Pricing.tsx
'use client';

import {
  CreditCard,
  Check,
  ShieldCheck,
  RotateCcw,
  Zap,
  Award,
  ArrowRight
} from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import FAQSection from '@/components/shared/FAQSection';

// ─── Trust Signals ────────────────────────────────────────────────
const TRUST_SIGNALS = [
  { icon: ShieldCheck, label: 'Secure Payment' },
  { icon: RotateCcw, label: '7-Day Refund Policy' },
  { icon: Zap, label: 'Instant Access' },
  { icon: Award, label: 'Used by 50K+ Aspirants' }
];

// FAQ Data
const FAQ_ITEMS = [ 
  {
    question: 'What do I get in the Premium plan?',
    answer: 'The Premium plan unlocks complete access to the PrepBanker repository. You get all 500+ full-length mock tests for SBI PO and IBPS PO (both Prelims and Mains), all Previous Year Papers (2018–2024), live exams with real-time leaderboards, AI-driven performance reports identifying your weak areas, sectional & topic-wise quizzes, a comprehensive current affairs archive, and priority customer support.'
  },
  {
    question: 'Is there a free trial before I pay?',
    answer: 'Yes! Our Free Plan is completely free and requires no credit card. It includes 5 full-length mock tests, 3 previous year papers, basic performance diagnostics, and current affairs coverage for the last 7 days. You can practice with free content to experience our test engine before upgrading.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Absolutely. We stand by the quality of our content. If you are not satisfied with the Premium plan for any reason, you can request a full refund within 7 days of purchase. No questions asked.'
  },
  {
    question: 'Does the plan cover both SBI PO and IBPS PO?',
    answer: 'Yes! The Premium plan is a unified subscription. You don\'t have to purchase separate packages for different exams. A single payment unlocks test series, quizzes, study guides, and live mocks for both SBI PO and IBPS PO cycles (2026 cycle).'
  },
  {
    question: 'How do I activate my plan after payment?',
    answer: 'Activation is instantaneous. As soon as your transaction is completed successfully, your account status is updated to Premium on app.prepgrind.com. You will immediately have full, unrestricted access to all tests, previous year papers, and analytics reports.'
  }
];

export default function Pricing() {
  return (
    <div className="bg-white text-[var(--color-navy)] min-h-screen font-sans">

      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] text-white pt-8 pb-12 sm:pb-16">
        
        {/* Decorative background blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Pricing' },
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-6">
            
            {/* Left Column: Copy info */}
            <div className="flex-grow max-w-2xl">
              {/* Eyebrow badge */}
              <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200">
                <CreditCard className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" aria-hidden />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  💳 Simple, Honest Pricing
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-extrabold leading-tight text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                }}
              >
                One Plan. Everything You Need to Crack <span className="text-gold-gradient">Bank PO</span>.
              </h1>

              {/* Subheadline */}
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                No hidden fees. No confusing tiers. Just full access to every mock test, PYQ, and live test on PrepGrind.
              </p>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-3 max-w-sm sm:max-w-none mx-auto lg:mx-0 min-w-[280px]">
                {[
                  { value: '1500+', label: 'Mock Tests' },
                  { value: '7 Years', label: 'PYQ Papers' },
                  { value: '50K+', label: 'Aspirants' },
                  { value: '4.8★', label: 'Rating' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start p-4 rounded-xl border"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <p className="text-xl font-black text-[var(--color-gold-bright)] leading-none mb-1.5">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-slate-400 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Pricing Cards Section ──────────────────────────────── */}
      <section className="bg-slate-50 py-16 scroll-mt-20">
        <div className="container-custom">
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-4">
              
              {/* --- Free Plan Card --- */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(13,27,62,0.03)] hover:shadow-md transition-shadow">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Always Free
                    </span>
                    <h3 className="text-xl font-extrabold text-[var(--color-navy)] mt-1">
                      Free Plan
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1 my-6">
                    <span className="text-4xl font-black text-[var(--color-navy)]">₹0</span>
                    <span className="text-xs font-semibold text-slate-400">/ forever</span>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Get started with essential resources to kick off your SBI & IBPS PO prep cycle.
                  </p>

                  <div className="h-px bg-slate-100 my-6" />

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {[
                      '5 Full Mock Tests',
                      '3 PYQ Papers (unlocked)',
                      'Basic performance report',
                      'Current affairs (last 7 days)'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="p-0.5 rounded-full bg-slate-100 text-slate-500 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-650">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://app.prepgrind.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl border border-slate-350 hover:border-slate-500 text-slate-700 hover:text-slate-900 font-extrabold text-xs sm:text-sm transition-all"
                >
                  Get Started Free
                </a>
              </div>

              {/* --- Premium Plan Card (Highlighted) --- */}
              <div className="bg-white border-2 border-amber-500 rounded-2xl p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(245,158,11,0.06)] relative md:scale-[1.02] transform hover:shadow-lg transition-all">
                
                {/* Popular Badge */}
                <div className="absolute -top-3.5 right-6 bg-amber-500 text-[var(--color-navy-deep)] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>

                <div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                        7 Months Validity
                      </span>
                      <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                        64% OFF
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[var(--color-navy)] mt-1">
                      Premium Plan
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 my-6">
                    <span className="text-slate-400 line-through text-lg font-bold">₹549</span>
                    <span className="text-4xl font-black text-[var(--color-navy)]">₹199</span>
                    <span className="text-xs font-semibold text-slate-400">/ full access</span>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Comprehensive preparation coverage containing full series, dynamic tests, and analytics.
                  </p>

                  <div className="h-px bg-slate-100 my-6" />

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {[
                      'All 500+ Full Mock Tests',
                      'All PYQ Papers (2018–2024)',
                      'Live Tests with real-time rankings',
                      'AI performance analysis',
                      'Sectional & topic-wise tests',
                      'Current affairs (full archive)',
                      'Priority support'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="p-0.5 rounded-full bg-amber-100 text-amber-600 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://app.prepgrind.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-[var(--color-navy-deep)] font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20"
                >
                  Unlock Full Access
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── Trust Strip Section ────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100 py-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
            {TRUST_SIGNALS.map((signal, idx) => {
              const IconComp = signal.icon;
              return (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5">
                  <IconComp className="w-5 h-5 text-[var(--color-blue)] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[var(--color-navy)] whitespace-nowrap">
                    {signal.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─────────────────────────────────────────── */}
      <FAQSection
        items={FAQ_ITEMS}
        dark={false}
        label="Pricing FAQs"
        title="Frequently Asked Questions"
        subtitle="Have questions about our plans or payment process? Find answers here."
      />

    </div>
  );
}
