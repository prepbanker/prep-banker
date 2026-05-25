// PATH: components/sections/quiz/cards/QuizCardSkeleton.tsx
export default function QuizCardSkeleton() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden animate-pulse"
      style={{
        border: '1px solid var(--color-gray-100)',
        borderTop: '3px solid var(--color-gray-200)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div className="p-4 flex flex-col gap-3">
        <div className="flex gap-1.5">
          <div className="h-5 w-16 rounded-full bg-gray-100" />
          <div className="h-5 w-20 rounded-full bg-gray-100" />
        </div>
        <div className="h-4 w-3/4 rounded bg-gray-100" />
        <div className="h-4 w-1/2 rounded bg-gray-100" />
        <div className="h-3 w-full rounded bg-gray-100" />
        <div className="h-3 w-5/6 rounded bg-gray-100" />
        <div className="flex gap-2">
          <div className="h-4 w-24 rounded bg-gray-100" />
          <div className="h-4 w-16 rounded bg-gray-100" />
        </div>
      </div>
      <div className="grid grid-cols-3 border-y border-gray-100 bg-gray-50">
        {[0, 1, 2].map(i => (
          <div key={i} className={`py-3 flex flex-col items-center gap-1 ${i < 2 ? 'border-r border-gray-100' : ''}`}>
            <div className="h-4 w-8 rounded bg-gray-200" />
            <div className="h-2 w-12 rounded bg-gray-100" />
          </div>
        ))}
      </div>
      <div className="px-4 py-3 flex gap-2">
        <div className="flex-1 h-9 rounded-xl bg-gray-100" />
        <div className="w-10 h-9 rounded-xl bg-gray-100" />
      </div>
    </div>
  );
}