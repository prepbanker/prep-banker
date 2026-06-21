// PATH: components/sections/current-affairs/cards/CAModal.tsx
'use client';

import { useEffect, useRef, useCallback } from 'react';
import {
  X, Calendar, Clock, Tag, ChevronRight, Star,
  Flame, AlertCircle, CheckCircle2, ArrowRight, BookOpen,
} from 'lucide-react';
import type { CurrentAffair, ImportanceLevel } from '../../../../types/current-affairs';
import { getCategoryStyle } from '../../../../lib/data/current-affairs/categories';

// ─── Helpers ──────────────────────────────
function importanceMeta(level: ImportanceLevel) {
  const map = {
    High:   { cls: 'bg-red-50 text-red-600 border border-red-100',      Icon: Flame,        label: 'High Priority'   },
    Medium: { cls: 'bg-amber-50 text-amber-600 border border-amber-100', Icon: AlertCircle,  label: 'Medium Priority' },
    Low:    { cls: 'bg-emerald-50 text-emerald-600 border border-emerald-100', Icon: CheckCircle2, label: 'Low Priority'    },
  } as const;
  return map[level];
}

// ─── Props ────────────────────────────────
interface CAModalProps {
  item:    CurrentAffair;
  onClose: () => void;
}

// ─── Component ────────────────────────────
export default function CAModal({ item, onClose }: CAModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const imp       = importanceMeta(item.importance);
  const ImpIcon   = imp.Icon;

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Escape key close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Trap focus inside modal
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  // Backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  // Paragraph split for body text
  const paragraphs = item.body.split('\n\n').filter(Boolean);

  return (
    /* Backdrop — full-screen, blur + dark overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mt-16"
      style={{ backgroundColor: 'rgba(7,16,42,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-label={item.title}
    >
      {/* Modal panel */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl
                   flex flex-col outline-none overflow-hidden"
        style={{ boxShadow: '0 24px 80px rgba(13,27,62,0.30)' }}
        onClick={e => e.stopPropagation()}
      >

        {/* ── Modal header ────────────────────────────── */}
        <div
          className="flex items-start justify-between gap-3 px-6 py-4 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 100%)',
          }}
        >
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            {/* Category badge */}
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold
                          uppercase tracking-wide ${getCategoryStyle(item.category)}`}
            >
              {item.category}
            </span>
            {item.isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold
                               bg-[var(--color-gold-light)] text-amber-800">
                <Star className="w-3 h-3" fill="currentColor" />
                Featured
              </span>
            )}
            {item.isMonthly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold
                               bg-emerald-100 text-emerald-700">
                Monthly Revision
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 p-1.5 rounded-full text-white/60 hover:text-white
                       hover:bg-white/10 transition-all focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-[var(--color-gold-bright)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Scrollable body ─────────────────────────── */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              {item.readTime} min read
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${imp.cls}`}>
              <ImpIcon className="w-3 h-3" />
              {imp.label}
            </span>
            {/* Tags */}
            {(item.tags ?? []).slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2
            className="text-xl sm:text-2xl font-extrabold leading-tight text-[var(--color-navy)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {item.title}
          </h2>

          {/* Summary / Overview */}
          <div className="rounded-xl p-4 bg-[var(--color-sky)] border border-blue-100">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-2">
              Overview
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              {item.summary}
            </p>
          </div>

          {/* Full body paragraphs */}
          {paragraphs.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Detailed Analysis
              </p>
              {paragraphs.map((para, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">
                  {para.trim()}
                </p>
              ))}
            </div>
          )}

          {/* Key Points */}
          {item.keyPoints.length > 0 && (
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-mid) 100%)' }}
              >
                <Tag className="w-3.5 h-3.5 text-[var(--color-gold-bright)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Key Points for Exam
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {item.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                                 text-xs font-bold text-white mt-0.5"
                      style={{ background: 'var(--color-blue)' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-xs text-[var(--color-navy)] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Facts grid */}
          {item.quickFacts.length > 0 && (
            <div className="rounded-xl bg-[var(--color-sky)] p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)] mb-3 flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                Quick Facts at a Glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.quickFacts.map((fact, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg px-3 py-2.5 text-xs font-semibold
                               text-[var(--color-navy)] border border-gray-100 flex items-start gap-2"
                  >
                    <ChevronRight className="w-3 h-3 text-[var(--color-blue)] flex-shrink-0 mt-0.5" />
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exam Relevance */}
          <div className="rounded-xl p-4 bg-gray-50 border border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Exam Relevance
            </p>
            <div className="flex flex-wrap gap-2">
              {(item.examRelevance === 'Both' || item.examRelevance === 'SBI-PO') && (
                <span
                  className="px-4 py-1.5 text-white text-xs font-bold rounded-full"
                  style={{ background: 'var(--color-blue)' }}
                >
                  SBI PO
                </span>
              )}
              {(item.examRelevance === 'Both' || item.examRelevance === 'IBPS-PO') && (
                <span
                  className="px-4 py-1.5 text-white text-xs font-bold rounded-full"
                  style={{ background: 'var(--color-gold)' }}
                >
                  IBPS PO
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Sticky footer CTA ───────────────────────── */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600
                       border border-gray-200 hover:bg-gray-100 transition-all"
          >
            Close
          </button>
          <a
            href="/current-affairs"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                       text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)',
            }}
          >
            All Updates
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}