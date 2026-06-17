// PATH: components/sections/quiz/steps/DiagramRenderer.tsx
'use client';

import { SharedDiagram } from '@/types/quiz.types';

interface DiagramRendererProps {
  diagram: SharedDiagram;
}

export default function DiagramRenderer({ diagram }: DiagramRendererProps) {
  if (!diagram || diagram.type !== 'svg') return null;

  return (
    <div className="w-full max-w-md mx-auto bg-[var(--color-gray-50)] border border-slate-200 rounded-xl p-1.5 flex flex-col items-center shadow-xs">
      <style dangerouslySetInnerHTML={{ __html: `
        .diagram-svg-container svg {
          max-height: 80px !important;
          width: auto !important;
          max-width: 100% !important;
        }
        @media (min-width: 640px) {
          .diagram-svg-container svg {
            max-height: 130px !important;
          }
        }
      `}} />
      {/* SVG Wrapper with pinch-zoom support (native on mobile viewports) */}
      <div
        className="w-full flex justify-center py-0.5 select-none diagram-svg-container"
        style={{ touchAction: 'pan-x pan-y' }}
        dangerouslySetInnerHTML={{ __html: diagram.svg }}
      />
      {/* Alt text caption surfaced for screen-reader parity and visual context */}
      {diagram.alt && (
        <p className="mt-1 text-[9px] font-black text-slate-450 tracking-wider uppercase text-center">
          Figure: {diagram.alt}
        </p>
      )}
    </div>
  );
}
