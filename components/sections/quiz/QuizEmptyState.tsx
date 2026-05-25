// PATH: components/sections/quiz/QuizEmptyState.tsx
import { Search } from 'lucide-react';

interface Props { onReset: () => void }

export default function QuizEmptyState({ onReset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)' }}
      >
        <Search className="w-7 h-7 text-[var(--color-gray-200)]" />
      </div>
      <div>
        <p className="font-bold text-[var(--color-gray-400)] text-sm">No quizzes match your filters</p>
        <p className="text-xs text-[var(--color-gray-400)] mt-1 max-w-xs">
          Try adjusting the exam, type, difficulty, or search term.
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-1 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:-translate-y-0.5"
        style={{ background: 'linear-gradient(135deg, var(--color-blue), var(--color-navy))' }}
      >
        Reset All Filters
      </button>
    </div>
  );
}