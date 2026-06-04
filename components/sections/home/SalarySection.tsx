'use client';

import { Heart, Coins, Home, Plane, Sparkles, Key, TrendingUp, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui';

interface SalaryComponent {
  label: string;
  amount: string;
  isTotal?: boolean;
}

const SBI_SALARY: SalaryComponent[] = [
  { label: 'Basic Pay', amount: '₹41,960/month' },
  { label: 'Dearness Allowance (DA)', amount: '~₹17,000/month' },
  { label: 'House Rent Allowance (HRA)', amount: '₹7,000 – ₹9,000/month' },
  { label: 'Special Allowance', amount: '~₹5,500/month' },
  { label: 'Total Gross CTC', amount: '₹63,000 – ₹68,000/month', isTotal: true },
];

const IBPS_SALARY: SalaryComponent[] = [
  { label: 'Basic Pay', amount: '₹36,000/month' },
  { label: 'Dearness Allowance (DA)', amount: '~₹14,500/month' },
  { label: 'House Rent Allowance (HRA)', amount: '₹6,500 – ₹8,500/month' },
  { label: 'Special Allowance', amount: '~₹4,800/month' },
  { label: 'Total Gross CTC', amount: '₹52,000 – ₹58,000/month', isTotal: true },
];

interface PerkItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const PERKS: PerkItem[] = [
  { icon: <Heart className="h-6 w-6 text-rose-500" />, title: 'Medical Insurance', desc: 'Comprehensive medical coverage for self and family members.' },
  { icon: <Coins className="h-6 w-6 text-amber-500" />, title: 'Pension (NPS)', desc: 'Secured retirement savings under the National Pension Scheme.' },
  { icon: <Home className="h-6 w-6 text-blue-500" />, title: 'Subsidised Loans', desc: 'Access to home and car loans at heavily discounted interest rates.' },
  { icon: <Plane className="h-6 w-6 text-sky-500" />, title: 'LFC / LTC Travel', desc: 'Leave Fare Concession travel allowances for domestic vacations.' },
  { icon: <Sparkles className="h-6 w-6 text-purple-500" />, title: 'Performance Bonus', desc: 'Annual performance-linked incentives and festival bonuses.' },
  { icon: <Key className="h-6 w-6 text-emerald-500" />, title: 'Leased Housing', desc: 'Furnished or leased official accommodation in select postings.' },
];

interface TimelineStep {
  years: string;
  designation: string;
  isImportant?: boolean;
}

const TIMELINE: TimelineStep[] = [
  { years: '0 – 2 years', designation: 'Probationary Officer (PO)' },
  { years: '2 – 4 years', designation: 'Assistant Manager (Scale I)' },
  { years: '4 – 7 years', designation: 'Deputy Manager (Scale II)' },
  { years: '7 – 12 years', designation: 'Manager (Scale III)', isImportant: true },
  { years: '12 – 18 years', designation: 'Senior Manager (Scale IV)' },
  { years: '18 – 24 years', designation: 'Chief Manager (Scale V)' },
  { years: '24+ years', designation: 'AGM / DGM / GM / ED / MD', isImportant: true },
];

export default function SalarySection() {
  return (
    <section aria-label="SBI PO and IBPS PO Salary Breakdown" className="section-padding bg-slate-50/10 border-b border-slate-100">
      <div className="container-custom max-w-5xl">
        {/* Section Title */}
        <SectionTitle
          label="Salary & Career"
          title="SBI PO & IBPS PO "
          highlight="Salary Breakdown"
          subtitle="Understand exactly what you earn — from joining day to senior management."
          align="center"
        />

        {/* Salary Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* SBI PO Salary Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                SBI PO 2026
              </span>
              <h3 className="text-lg font-bold mt-1">Salary Breakdown (Approx.)</h3>
            </div>
            
            <div className="p-6">
              <ul className="divide-y divide-slate-100 mb-6 list-none">
                {SBI_SALARY.map((s, idx) => (
                  <li key={idx} className={`py-3 flex justify-between text-sm ${s.isTotal ? 'font-bold text-slate-800 pt-4' : 'text-slate-600'}`}>
                    <span>{s.label}</span>
                    <span className={s.isTotal ? 'text-blue-600 text-base' : 'text-slate-800'}>{s.amount}</span>
                  </li>
                ))}
              </ul>

              {/* Annual CTC Badge */}
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-center">
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-500 mb-1">
                  Total Annual CTC
                </span>
                <span className="text-2xl font-extrabold text-blue-700">
                  ~ ₹8 – 9 LPA
                </span>
              </div>
            </div>
          </div>

          {/* IBPS PO Salary Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                IBPS PO 2026
              </span>
              <h3 className="text-lg font-bold mt-1">Salary Breakdown (Approx.)</h3>
            </div>
            
            <div className="p-6">
              <ul className="divide-y divide-slate-100 mb-6 list-none">
                {IBPS_SALARY.map((s, idx) => (
                  <li key={idx} className={`py-3 flex justify-between text-sm ${s.isTotal ? 'font-bold text-slate-800 pt-4' : 'text-slate-600'}`}>
                    <span>{s.label}</span>
                    <span className={s.isTotal ? 'text-amber-600 text-base' : 'text-slate-800'}>{s.amount}</span>
                  </li>
                ))}
              </ul>

              {/* Annual CTC Badge */}
              <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-center">
                <span className="block text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
                  Total Annual CTC
                </span>
                <span className="text-2xl font-extrabold text-amber-600">
                  ~ ₹7 – 7.5 LPA
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits/Perks Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-extrabold text-slate-800 flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              Additional Perks & Benefits
            </h3>
            <p className="text-sm text-slate-500 mt-1.5">
              Both SBI PO and IBPS PO offer industry-leading job security and luxury perks.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {PERKS.map((p, idx) => (
              <li key={idx} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{p.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Career Growth Timeline */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-extrabold text-slate-800 flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Career Growth Timeline
            </h3>
            <p className="text-sm text-slate-500 mt-1.5">
              Clear corporate ladder and hierarchical progression path in public sector banking.
            </p>
          </div>

          <div className="relative max-w-xl mx-auto pl-6 md:pl-0">
            {/* Timeline center spine line (desktop-centered, mobile-left) */}
            <div className="absolute left-7 md:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

            <ul className="space-y-8 list-none">
              {TIMELINE.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <li key={idx} className="relative flex md:items-center z-10">
                    
                    {/* Left block (desktop-only spacer or years text) */}
                    <div className="hidden md:block w-1/2 pr-8 text-right">
                      {isEven ? (
                        <div>
                          <span className="inline-block rounded-full bg-slate-100 border border-slate-200/60 px-3 py-1 text-xs font-bold text-slate-600">
                            {step.years}
                          </span>
                        </div>
                      ) : (
                        <h4 className={`text-sm font-bold ${step.isImportant ? 'text-blue-600 font-extrabold text-base' : 'text-slate-700'}`}>
                          {step.designation}
                        </h4>
                      )}
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1 md:left-1/2 h-8 w-8 rounded-full border-2 border-white bg-slate-50 shadow-md -translate-x-1/2 flex items-center justify-center z-20">
                      <span className={`h-2.5 w-2.5 rounded-full ${step.isImportant ? 'bg-amber-500 animate-pulse' : 'bg-slate-400'}`} />
                    </div>

                    {/* Right block (mobile layout and desktop odd indices) */}
                    <div className="pl-10 md:pl-8 md:w-1/2 text-left">
                      <div className="md:hidden mb-1">
                        <span className="inline-block rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-[0.65rem] font-bold text-slate-500">
                          {step.years}
                        </span>
                      </div>
                      
                      {!isEven ? (
                        <div>
                          <span className="hidden md:inline-block rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                            {step.years}
                          </span>
                        </div>
                      ) : (
                        <h4 className={`text-sm font-bold ${step.isImportant ? 'text-blue-600 font-extrabold text-base' : 'text-slate-700'}`}>
                          {step.designation}
                        </h4>
                      )}
                      
                      {/* Even items on desktop require designation in right column */}
                      {isEven && (
                        <div className="hidden md:block">
                          {/* handled on left */}
                        </div>
                      )}
                      {/* Odd items on desktop require designation in left column, handled above. On mobile, we render it directly */}
                      <h4 className={`md:hidden text-sm font-bold ${step.isImportant ? 'text-blue-600 text-base' : 'text-slate-700'}`}>
                        {!isEven ? step.designation : step.designation}
                      </h4>
                    </div>

                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Highlight Callout Box */}
        <div className="mx-auto max-w-4xl mt-12 flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs sm:text-sm text-slate-500 shadow-sm border-l-4 border-l-blue-600">
          <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed text-slate-600">
            <span className="font-bold text-slate-800">Fast-Track Career Path: </span>
            SBI POs have the fastest promotion track in the banking sector. Many officers reach General Manager level within 20–22 years, with a total compensation crossing <span className="font-semibold text-slate-800">₹30 LPA</span> at senior grades.
          </p>
        </div>

      </div>
    </section>
  );
}
