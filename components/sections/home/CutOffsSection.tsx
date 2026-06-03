'use client';

import { useState } from 'react';
import { Target, TrendingUp, Info } from 'lucide-react';
import { SectionTitle } from '@/components/ui';

interface CutOffRow {
  category: string;
  y2024: string;
  y2023: string;
  y2022: string;
}

const SBI_PRELIMS: CutOffRow[] = [
  { category: 'General / UR', y2024: '62.50', y2023: '60.75', y2022: '58.00' },
  { category: 'OBC',          y2024: '59.00', y2023: '57.50', y2022: '55.25' },
  { category: 'SC',           y2024: '52.50', y2023: '50.00', y2022: '48.75' },
  { category: 'ST',           y2024: '46.00', y2023: '44.45', y2022: '42.00' }, // standardizing ST 44.50 -> 44.50 as in text, wait: image ST ST 46.00 44.50 42.00. Ah, let's use '44.50'
  { category: 'EWS',          y2024: '58.25', y2023: '56.00', y2022: '54.00' },
];

const SBI_MAINS: CutOffRow[] = [
  { category: 'General / UR', y2024: '89.47', y2023: '86.20', y2022: '84.10' },
  { category: 'OBC',          y2024: '83.10', y2023: '80.50', y2022: '78.30' },
  { category: 'SC',           y2024: '72.40', y2023: '70.00', y2022: '67.80' },
  { category: 'ST',           y2024: '64.20', y2023: '61.75', y2022: '59.50' },
  { category: 'EWS',          y2024: '81.00', y2023: '78.25', y2022: '76.00' },
];

const IBPS_PRELIMS: CutOffRow[] = [
  { category: 'General / UR', y2024: '63.75', y2023: '61.50', y2022: '59.25' },
  { category: 'OBC',          y2024: '60.25', y2023: '58.00', y2022: '56.00' },
  { category: 'SC',           y2024: '54.00', y2023: '51.50', y2022: '49.00' },
  { category: 'ST',           y2024: '47.50', y2023: '45.00', y2022: '43.25' },
  { category: 'EWS',          y2024: '59.50', y2023: '57.25', y2022: '55.00' },
];

const IBPS_MAINS: CutOffRow[] = [
  { category: 'General / UR', y2024: '91.20', y2023: '88.40', y2022: '85.75' },
  { category: 'OBC',          y2024: '84.50', y2023: '82.00', y2022: '79.50' },
  { category: 'SC',           y2024: '74.80', y2023: '72.25', y2022: '69.00' },
  { category: 'ST',           y2024: '66.00', y2023: '63.50', y2022: '60.75' },
  { category: 'EWS',          y2024: '82.75', y2023: '80.00', y2022: '77.50' },
];

export default function CutOffsSection() {
  const [activeTab, setActiveTab] = useState<'SBI' | 'IBPS'>('SBI');

  const isSBI = activeTab === 'SBI';
  const themeColorClass = isSBI ? 'text-blue-600' : 'text-amber-600';
  const themeBgClass = isSBI ? 'bg-blue-500' : 'bg-amber-500';
  const borderAccentClass = isSBI ? 'border-l-blue-500' : 'border-l-amber-500';

  const prelimsData = isSBI ? SBI_PRELIMS : IBPS_PRELIMS;
  const mainsData = isSBI ? SBI_MAINS : IBPS_MAINS;

  // Small fix to data: ST 2023 was listed as 44.50 in user prompt
  if (isSBI) {
    prelimsData[3].y2023 = '44.50';
  }

  return (
    <section className="section-padding bg-slate-50/30 border-b border-slate-100">
      <div className="container-custom">
        {/* Section Title */}
        <SectionTitle
          label="Cut-off Marks"
          title="SBI PO & IBPS PO Previous "
          highlight="Year Cut-offs"
          subtitle="Know the target — category-wise and section-wise cut-offs from recent years."
          align="center"
        />

        {/* Tab Selector */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl bg-slate-100 p-1 shadow-inner">
            <button
              onClick={() => setActiveTab('SBI')}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                isSBI
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              SBI PO Cut-offs
            </button>
            <button
              onClick={() => setActiveTab('IBPS')}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                !isSBI
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              IBPS PO Cut-offs
            </button>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Prelims Cut-off Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Target className={`h-5 w-5 ${themeColorClass}`} />
                <h3 className="text-base font-bold text-slate-800">Prelims Cut-off</h3>
              </div>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                Out of 100
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-100">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-100">
                    <th className="px-4 py-3">Category</th>
                    <th className={`px-4 py-3 font-bold ${isSBI ? 'bg-blue-50/40 text-blue-800' : 'bg-amber-50/40 text-amber-800'}`}>2024</th>
                    <th className="px-4 py-3">2023</th>
                    <th className="px-4 py-3">2022</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {prelimsData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-slate-700">{row.category}</td>
                      <td className={`px-4 py-3 font-extrabold text-slate-900 ${isSBI ? 'bg-blue-50/20' : 'bg-amber-50/20'}`}>
                        {row.y2024}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.y2023}</td>
                      <td className="px-4 py-3 text-slate-500">{row.y2022}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mains Cut-off Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className={`h-5 w-5 ${themeColorClass}`} />
                <h3 className="text-base font-bold text-slate-800">Mains Cut-off</h3>
              </div>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                Out of 200
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-100">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-100">
                    <th className="px-4 py-3">Category</th>
                    <th className={`px-4 py-3 font-bold ${isSBI ? 'bg-blue-50/40 text-blue-800' : 'bg-amber-50/40 text-amber-800'}`}>2024</th>
                    <th className="px-4 py-3">2023</th>
                    <th className="px-4 py-3">2022</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mainsData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 font-bold text-slate-700">{row.category}</td>
                      <td className={`px-4 py-3 font-extrabold text-slate-900 ${isSBI ? 'bg-blue-50/20' : 'bg-amber-50/20'}`}>
                        {row.y2024}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.y2023}</td>
                      <td className="px-4 py-3 text-slate-500">{row.y2022}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Note / Advisory Box */}
        <div className={`mx-auto max-w-5xl mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm text-slate-500 shadow-sm border-l-4 ${borderAccentClass} transition-colors duration-300`}>
          <Info className={`h-5 w-5 flex-shrink-0 mt-0.5 ${themeColorClass}`} />
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-700">Note: </span>
            Cut-offs vary by state and number of vacancies each year. Sectional cut-offs also apply — clearing the overall cut-off alone is not sufficient.
          </p>
        </div>

      </div>
    </section>
  );
}
