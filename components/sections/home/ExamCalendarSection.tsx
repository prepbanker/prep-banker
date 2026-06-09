'use client';

import { Calendar, Info, Bell, ArrowRight, Star, Flag } from 'lucide-react';
import { SectionTitle, Button } from '@/components/ui';

interface CalendarEvent {
  event: string;
  sbiDate: string;
  ibpsDate: string;
  isImportant?: boolean;
}

const CALENDAR_DATA: CalendarEvent[] = [
  { event: 'Official Notification', sbiDate: 'April 2026', ibpsDate: 'July 2026' },
  { event: 'Online Application Opens', sbiDate: 'April 2026', ibpsDate: 'July 2026' },
  { event: 'Application Deadline', sbiDate: 'May 2026', ibpsDate: 'August 2026', isImportant: true },
  { event: 'Admit Card – Prelims', sbiDate: 'May 2026', ibpsDate: 'September 2026' },
  { event: 'Prelims Exam', sbiDate: 'June 2026', ibpsDate: 'October 2026', isImportant: true },
  { event: 'Prelims Result', sbiDate: 'July 2026', ibpsDate: 'November 2026' },
  { event: 'Admit Card – Mains', sbiDate: 'July 2026', ibpsDate: 'November 2026' },
  { event: 'Mains Exam', sbiDate: 'August 2026', ibpsDate: 'November 2026', isImportant: true },
  { event: 'Mains Result', sbiDate: 'September 2026', ibpsDate: 'December 2026' },
  { event: 'Interview / GD', sbiDate: 'October 2026', ibpsDate: 'January 2027', isImportant: true },
  { event: 'Final Result', sbiDate: 'November 2026', ibpsDate: 'February 2027', isImportant: true },
];export default function ExamCalendarSection() {
  return (
    <section aria-label="SBI PO & IBPS PO 2026 Exam Calendar" className="py-12 sm:py-16 bg-white border-y border-slate-100">
      <div className="container-custom max-w-4xl">
        {/* Section Title */}
        <SectionTitle
          label="Exam Timeline"
          title="SBI PO & IBPS PO 2026 "
          highlight="Exam Calendar"
          subtitle="Never miss a deadline — key dates for both exams in one place."
          align="center"
        />

        {/* Desktop Table / Timeline Hybrid (Hidden on Mobile) */}
        <div className="hidden md:block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-extrabold uppercase tracking-wider text-slate-500 w-[42%]">
                    Exam Phase / Event
                  </th>
                  <th className="py-4 px-6 w-[29%]">
                    <div className="flex flex-col">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">🏦 SBI PO 2026</span>
                      <span className="text-[10px] text-blue-500 font-bold mt-0.5">2000+ Vacancies</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 w-[29%]">
                    <div className="flex flex-col">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">🏦 IBPS PO 2026</span>
                      <span className="text-[10px] text-amber-600 font-bold mt-0.5">3500+ Vacancies</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CALENDAR_DATA.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-slate-50/40 transition-colors ${
                      row.isImportant ? 'bg-amber-50/10' : ''
                    }`}
                  >
                    {/* Event Name with small timeline indicator */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <span 
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            row.isImportant ? 'bg-amber-500 ring-4 ring-amber-100/70' : 'bg-slate-300'
                          }`}
                        />
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${row.isImportant ? 'text-slate-900 font-bold' : 'text-slate-700'}`}>{row.event}</span>
                          {row.isImportant && (
                            <span className="inline-flex items-center rounded bg-amber-500/10 text-amber-600 px-1.5 py-0.5 text-[0.62rem] font-black uppercase tracking-wider">
                              Key
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    {/* SBI Date */}
                    <td className="py-3 px-6">
                      <span className="inline-flex rounded bg-blue-50 border border-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700">
                        {row.sbiDate}
                      </span>
                    </td>
                    {/* IBPS Date */}
                    <td className="py-3 px-6">
                      <span className="inline-flex rounded bg-amber-50 border border-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700">
                        {row.ibpsDate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Compact List (Hidden on Desktop) */}
        <div className="md:hidden space-y-2">
          {/* Mobile Header / Legend */}
          <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 px-1">
            <span>Event Name</span>
            <div className="flex gap-3">
              <span className="text-blue-600">SBI PO</span>
              <span className="text-amber-600">IBPS PO</span>
            </div>
          </div>

          {CALENDAR_DATA.map((row, idx) => (
            <div 
              key={idx}
              className={`flex items-center justify-between p-3 bg-white border rounded-xl transition-all ${
                row.isImportant ? 'border-amber-200 bg-amber-50/10 shadow-xs' : 'border-slate-100'
              }`}
            >
              {/* Left: Event Title & Dot */}
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <span 
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    row.isImportant ? 'bg-amber-500 ring-2 ring-amber-100' : 'bg-slate-300'
                  }`}
                />
                <div className="min-w-0 flex items-center gap-1.5">
                  <span className={`text-xs font-bold text-slate-800 truncate`}>{row.event}</span>
                  {row.isImportant && (
                    <span className="inline-block rounded bg-amber-500/10 text-amber-600 px-1 py-0.2 text-[0.55rem] font-extrabold uppercase">
                      ★
                    </span>
                  )}
                </div>
              </div>
              {/* Right: SBI & IBPS dates side-by-side */}
              <div className="flex items-center gap-2 shrink-0 ml-3">
                <span className="inline-block rounded bg-blue-50 border border-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                  {row.sbiDate.replace(' 2026', '')}
                </span>
                <span className="inline-block rounded bg-amber-50 border border-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                  {row.ibpsDate.replace(' 2026', '').replace(' 2027', '')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Advisory Box */}
        <div className="mx-auto max-w-4xl mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-500 shadow-sm border-l-4 border-l-amber-400">
          <Info className="h-4.5 w-4.5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-700">Note: </span>
            Dates are indicative based on previous year patterns. Always verify on{' '}
            <a 
              href="https://sbi.co.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-blue-600 hover:underline"
            >
              sbi.co.in
            </a>{' '}
            and{' '}
            <a 
              href="https://ibps.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-blue-600 hover:underline"
            >
              ibps.in
            </a>{' '}
            for official notifications.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Button 
            href="https://app.prepgrind.com/register" 
            variant="gold" 
            size="md"
            external
            className="group"
          >
            <Bell className="h-4 w-4 mr-1.5 transition-transform group-hover:scale-110" />
            Set a Reminder
            <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
