// PATH: components/sections/quiz/hero/QuizHowItWorks.tsx
import { BookOpen, Clock, BarChart2, TrendingUp } from 'lucide-react';

const STEPS = [
  { step: '01', text: 'Pick a test series',       Icon: BookOpen   },
  { step: '02', text: 'Attempt under real timer', Icon: Clock      },
  { step: '03', text: 'Analyse your performance', Icon: BarChart2  },
  { step: '04', text: 'Improve & repeat',         Icon: TrendingUp },
] as const;

export default function QuizHowItWorks() {
  return (
    <section className="bg-white border-b-2 border-[var(--color-gray-100)]">
      <div className="container-custom py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          {STEPS.map(({ step, text, Icon }, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: 'linear-gradient(135deg, var(--color-blue), var(--color-navy))' }}
                >
                  {step}
                </span>
                <div className="flex items-center gap-1.5 min-w-0">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0 text-[var(--color-blue)]" />
                  <span className="text-xs font-semibold text-[var(--color-navy)] whitespace-nowrap">
                    {text}
                  </span>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[var(--color-blue)]/30 to-transparent mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}