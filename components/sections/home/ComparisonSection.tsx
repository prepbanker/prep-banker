
import { Check, HelpCircle, ArrowRight, Award, ShieldAlert, Zap, Layers, HelpCircle as HelpIcon } from 'lucide-react';
import { SectionTitle, Button } from '@/components/ui';

interface ComparisonRow {
  parameter: string;
  sbiValue: string;
  ibpsValue: string;
  isHighlighted?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  { parameter: 'Conducting Body',    sbiValue: 'State Bank of India',                 ibpsValue: 'Institute of Banking Personnel Selection' },
  { parameter: 'Vacancies (2026)',   sbiValue: '1,500',                               ibpsValue: '~3,500–4,500', isHighlighted: true },
  { parameter: 'Starting Basic Pay', sbiValue: '₹48,480/month',                       ibpsValue: '₹36,000/month' },
  { parameter: 'Gross In-Hand',      sbiValue: '₹71,000 – ₹75,000',                   ibpsValue: '₹52,000 – ₹58,000', isHighlighted: true },
  { parameter: 'Selection Stages',   sbiValue: 'Prelims → Mains → GD → Interview',    ibpsValue: 'Prelims → Mains → Interview' },
  { parameter: 'Exam Difficulty',    sbiValue: 'Hard',                                ibpsValue: 'Moderate–Hard' },
  { parameter: 'Posting',            sbiValue: 'Pan India (SBI branches)',            ibpsValue: 'Pan India (11 PSU banks)' },
  { parameter: 'Prestige',           sbiValue: 'Highest — India\'s largest bank',     ibpsValue: 'High — multiple banks' },
  { parameter: 'Notification',       sbiValue: 'June (Released)',                     ibpsValue: 'July–August' },
  { parameter: 'Prelims',            sbiValue: 'August',                              ibpsValue: 'October' },
  { parameter: 'Competition',        sbiValue: '~12.14 lakh applicants',              ibpsValue: '~13–15 lakh applicants' },
  { parameter: 'Promotion Speed',    sbiValue: 'Faster',                              ibpsValue: 'Moderate', isHighlighted: true },
  { parameter: 'Transfer Frequency', sbiValue: 'High',                                ibpsValue: 'Moderate' },
];

export default function ComparisonSection() {
  return (
    <section aria-label="SBI PO vs IBPS PO Comparison" className="section-padding bg-white border-b border-slate-100">
      <div className="container-custom max-w-5xl">
        {/* Section Title */}
        <SectionTitle
          label="Job Comparison"
          title="SBI PO vs IBPS PO — "
          highlight="Which Should You Target?"
          subtitle="Both are top banking jobs. Here's how they differ so you can prioritise your preparation."
          align="center"
        />

        {/* Comparison Table (Desktop View) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-16">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold">
                <th className="px-6 py-4 w-1/3">Parameter</th>
                <th className="px-6 py-4 bg-blue-900/30 w-1/3 text-center">SBI PO</th>
                <th className="px-6 py-4 bg-amber-900/30 w-1/3 text-center">IBPS PO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-colors hover:bg-slate-50/50 ${
                    row.isHighlighted ? 'bg-amber-50/10 font-medium' : ''
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-slate-700">{row.parameter}</td>
                  <td className="px-6 py-4 text-center text-slate-800">
                    <span className={row.isHighlighted ? 'text-blue-700 font-bold' : ''}>
                      {row.sbiValue}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-800">
                    <span className={row.isHighlighted ? 'text-amber-700 font-bold' : ''}>
                      {row.ibpsValue}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Parameter Cards (Mobile View) */}
        <ul className="md:hidden space-y-4 mb-16">
          {COMPARISON_DATA.map((row, idx) => (
            <li 
              key={idx} 
              className={`bg-white rounded-xl border p-4 shadow-sm ${
                row.isHighlighted ? 'border-l-4 border-l-amber-500 bg-amber-50/5' : 'border-slate-200'
              }`}
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                {row.parameter}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-100 bg-slate-50/30 p-2.5">
                  <span className="block text-xs font-bold text-blue-500 uppercase tracking-wider mb-0.5">
                    SBI PO
                  </span>
                  <span className={`text-xs font-semibold text-slate-800 ${row.isHighlighted ? 'text-blue-700 font-bold' : ''}`}>
                    {row.sbiValue}
                  </span>
                </div>
                
                <div className="rounded-lg border border-slate-100 bg-slate-50/30 p-2.5">
                  <span className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-0.5">
                    IBPS PO
                  </span>
                  <span className={`text-xs font-semibold text-slate-800 ${row.isHighlighted ? 'text-amber-700 font-bold' : ''}`}>
                    {row.ibpsValue}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* "Which one should I pick?" Answer Block */}
        <div className="border-t border-slate-100 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-lg font-extrabold text-slate-800 flex items-center justify-center gap-2">
              <HelpIcon className="h-5 w-5 text-amber-500" />
              Which one should you pick?
            </h3>
            <p className="text-sm text-slate-500 mt-1.5">
              Make an informed choice based on your goals, preferences, and strengths.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Target SBI PO Card */}
            <li className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-t-blue-600">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Target SBI PO</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Choose SBI PO if salary, brand name, and career growth speed are your top priorities. The extra stage (Group Discussion) and higher competition are worth it for the premium package.
              </p>
            </li>

            {/* Target IBPS PO Card */}
            <li className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-t-amber-500">
              <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-amber-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Target IBPS PO</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Choose IBPS PO if you want more vacancies, slightly lower competition, or prefer a specific bank like Bank of Baroda or Canara Bank.
              </p>
            </li>

            {/* Target Both Card */}
            <li className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-t-emerald-500">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                <Layers className="h-5 w-5 text-emerald-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Target Both Simultaneously</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Prepare for both simultaneously — the Prelims syllabus is nearly identical (Reasoning, Quant, English). Only Mains differs slightly. Attempting both doubles your chances of a banking job in the same calendar year.
              </p>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button 
            href="https://app.prepgrind.com/signup/banking" 
            variant="gold" 
            size="lg"
            external
            className="group"
          >
            Take a Free Mock Test for Both
            <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
