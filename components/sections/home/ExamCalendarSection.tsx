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
];

export default function ExamCalendarSection() {
  return (
    <section aria-label="SBI PO & IBPS PO 2026 Exam Calendar" className="section-padding bg-white border-y border-slate-100">
      <div className="container-custom max-w-5xl">
        {/* Section Title */}
        <SectionTitle
          label="Exam Timeline"
          title="SBI PO & IBPS PO 2026 "
          highlight="Exam Calendar"
          subtitle="Never miss a deadline — key dates for both exams in one place."
          align="center"
        />

        {/* Desktop Headers (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 mb-12 pb-6 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-20">
          <div className="flex flex-col items-end justify-center pr-4">
            <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
              🏦 SBI PO 2026
            </h3>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold px-2 py-0.5 text-xs uppercase tracking-wide">
              2000+ Vacancies
            </span>
          </div>
          <div className="w-12 flex justify-center items-center">
            <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-4">
            <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
              🏦 IBPS PO 2026
            </h3>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded bg-amber-50 border border-amber-200 text-amber-700 font-bold px-2 py-0.5 text-xs uppercase tracking-wide">
              3500+ Vacancies
            </span>
          </div>
        </div>

        {/* Mobile Header Cards (Hidden on Desktop) */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-8">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center shadow-sm">
            <span className="block text-xs font-bold text-slate-800 mb-1">🏦 SBI PO 2026</span>
            <span className="inline-block rounded bg-blue-50 border border-blue-100 text-blue-700 font-bold px-2 py-0.5 text-[0.62rem] uppercase tracking-wide">
              2000+ Vacancies
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center shadow-sm">
            <span className="block text-xs font-bold text-slate-800 mb-1">🏦 IBPS PO 2026</span>
            <span className="inline-block rounded bg-amber-50 border border-amber-100 text-amber-700 font-bold px-2 py-0.5 text-[0.62rem] uppercase tracking-wide">
              3500+ Vacancies
            </span>
          </div>
        </div>

        {/* Desktop Journey Map Timeline (Hidden on Mobile) */}
        <ul className="hidden md:block relative list-none">
          {CALENDAR_DATA.map((row, idx) => {
            const stepNum = idx + 1;
            return (
              <li key={idx} className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 min-h-[100px]">
                
                {/* Left Side: SBI PO Card */}
                <div className="flex justify-end w-full">
                  <div 
                    className={`w-full max-w-[360px] bg-white rounded-xl border p-4 transition-all duration-200 hover:border-blue-300 hover:shadow-md ${
                      row.isImportant 
                        ? 'border-l-4 border-l-blue-400 border-slate-200 shadow-md' 
                        : 'border-slate-200/80 shadow-sm'
                    }`}
                  >
                    <span className="inline-block rounded bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 mb-2">
                      {row.sbiDate}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-800 leading-snug">{row.event}</h4>
                  </div>
                </div>

                {/* Center Spine & Node */}
                <div className="relative flex flex-col items-center justify-center h-full w-12 self-stretch">
                  {/* Vertical Connecting Line */}
                  <div 
                    className="absolute w-0.5 border-l-2 border-dashed border-slate-200 z-0" 
                    style={{ 
                      top: idx === 0 ? '50%' : '0%', 
                      bottom: idx === CALENDAR_DATA.length - 1 ? '50%' : '0%' 
                    }} 
                  />
                  
                  {/* Step Node */}
                  {row.isImportant ? (
                    <div className="relative flex items-center justify-center z-10">
                      {/* Floating Milestone Badge */}
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[0.55rem] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
                        Milestone
                      </span>
                      {/* Pulse Ring */}
                      <span className="absolute inline-flex h-10 w-10 rounded-full bg-amber-400 opacity-75 animate-ping" />
                      {/* Node Icon */}
                      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-md border-2 border-white">
                        <Star className="h-4 w-4 fill-white text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 h-8 w-8 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-xs font-bold text-slate-500 shadow-sm">
                      {stepNum}
                    </div>
                  )}
                </div>

                {/* Right Side: IBPS PO Card */}
                <div className="flex justify-start w-full">
                  <div 
                    className={`w-full max-w-[360px] bg-white rounded-xl border p-4 transition-all duration-200 hover:border-amber-300 hover:shadow-md ${
                      row.isImportant 
                        ? 'border-l-4 border-l-amber-400 border-slate-200 shadow-md' 
                        : 'border-slate-200/80 shadow-sm'
                    }`}
                  >
                    <span className="inline-block rounded bg-amber-50 border border-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700 mb-2">
                      {row.ibpsDate}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-800 leading-snug">{row.event}</h4>
                  </div>
                </div>

              </li>
            );
          })}
        </ul>

        {/* Mobile Timeline (Hidden on Desktop) */}
        <div className="md:hidden relative pl-4 pr-1">
          {/* Mobile Vertical Spine */}
          <div className="absolute left-7 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 z-0" />
          
          <ul className="list-none">
            {CALENDAR_DATA.map((row, idx) => {
              const stepNum = idx + 1;
              return (
                <li key={idx} className="relative pl-10 pb-8 last:pb-0">
                {/* Node */}
                <div className="absolute left-0 top-1 -translate-x-1/2 z-10">
                  {row.isImportant ? (
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-amber-400 opacity-75 animate-ping" />
                      <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white shadow border border-white">
                        <Star className="h-3.5 w-3.5 fill-white text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-[0.65rem] font-bold text-slate-400 shadow-sm">
                      {stepNum}
                    </div>
                  )}
                </div>

                {/* Card */}
                <div 
                  className={`bg-white rounded-xl border p-4 shadow-sm transition-all duration-200 ${
                    row.isImportant 
                      ? 'border-l-4 border-l-amber-400 border-slate-200 shadow-md' 
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <h4 className="text-sm font-bold text-slate-800">{row.event}</h4>
                    {row.isImportant && (
                      <span className="rounded bg-amber-500 text-white text-[0.55rem] font-extrabold uppercase tracking-wider px-1.5 py-0.5 shadow-sm">
                        Milestone
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-2 text-center">
                      <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        SBI PO
                      </span>
                      <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
                        {row.sbiDate}
                      </span>
                    </div>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-2 text-center">
                      <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        IBPS PO
                      </span>
                      <span className="inline-block rounded-full bg-amber-50 border border-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
                        {row.ibpsDate}
                      </span>
                    </div>
                  </div>
                </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Note / Advisory Box */}
        <div className="mx-auto max-w-4xl mt-10 flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm text-slate-500 shadow-sm border-l-4 border-l-amber-400">
          <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-700">Note: </span>
            Dates are indicative based on previous year patterns. Always verify on{' '}
            <a 
              href="https://sbi.co.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-blue-600 hover:underline"
            >
              sbi.co.in
            </a>{' '}
            and{' '}
            <a 
              href="https://ibps.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-blue-600 hover:underline"
            >
              ibps.in
            </a>{' '}
            for official notifications.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button 
            href="https://app.prepgrind.com/register" 
            variant="gold" 
            size="lg"
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
