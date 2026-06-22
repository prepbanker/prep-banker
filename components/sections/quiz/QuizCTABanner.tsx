// PATH: components/sections/quiz/QuizCTABanner.tsx
import { Zap } from 'lucide-react';

export default function QuizCTABanner() {
  return (
    <section className=" bg-white border-t border-[var(--color-gray-100)]">
      <div className="container-custom py-10 ">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-10 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
            boxShadow: 'var(--shadow-hover)',
          }}
        >
          {/* Decorative blob */}
          <div
            className="absolute right-0 top-0 w-64 h-full opacity-10 pointer-events-none"
            aria-hidden
            style={{ background: 'radial-gradient(circle at 80% 50%, var(--color-gold) 0%, transparent 70%)' }}
          />

          {/* Text */}
          <div className="relative z-10 text-center sm:text-left ">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold-bright)] mb-2">
              Ready to crack SBI / IBPS PO?
            </p>
            <h2
              className="text-xl sm:text-2xl font-extrabold text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Start with 5 Free Full Mocks — No Sign-up Needed
            </h2>
            <p className="mt-2 text-sm text-white/55 max-w-md">
              Join 50,000+ aspirants who use our platform daily. Free forever for basic access.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-[var(--color-navy)] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold))',
                boxShadow: 'var(--shadow-gold)',
              }}
            >
              <Zap className="w-4 h-4" />
              Get Started Free
            </a>
            <a
              href="/live-tests"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white/80 whitespace-nowrap transition-all duration-200 hover:text-white hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              View All Tests
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}