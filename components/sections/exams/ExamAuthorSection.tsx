// PATH: components/sections/exams/ExamAuthorSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ShieldCheck, ExternalLink } from 'lucide-react';
import { authors } from '@/lib/data/authors';

interface ExamAuthorSectionProps {
  examId: string;
  nextReviewDate?: string;
}

export default function ExamAuthorSection({ examId, nextReviewDate }: ExamAuthorSectionProps) {
  const [lastUpdated, setLastUpdated] = useState('July 10, 2026');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setLastUpdated(formattedDate);
  }, []);

  const author = authors['yashraj-deshmukh'];
  const reviewer = authors['divya-bhosale'];

  // Resolve next review date based on exam type
  const resolvedNextReview = nextReviewDate || (
    examId === 'sbi-po'
      ? 'August 2026 (admit card release)'
      : 'August 22, 2026 (admit card release)'
  );

  return (
    <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs mt-10 font-sans">

      {/* 1. Header Verification Row */}
      <div className="flex items-center gap-2 pb-4 border-b border-slate-150/70">
        <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
        <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
          PrepBanker Editorial & Verification Standards
        </span>
      </div>

      {/* 2. Content Grid (Flat columns, no nested container boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">

        {/* Author Column */}
        <div className="space-y-4">
          <div>
            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Written By
            </span>
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-50 border border-slate-200 shrink-0">
                {author.avatar ? (
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-extrabold bg-blue-50 text-[var(--color-blue)]">
                    YD
                  </div>
                )}
              </div>

              {/* Identity & Credentials */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Link
                    href={`/author/${author.slug}`}
                    className="font-extrabold text-slate-900 hover:text-[var(--color-blue)] hover:underline text-base leading-tight no-underline flex items-center gap-1"
                  >
                    {author.name}
                    <ExternalLink size={12} className="opacity-60" />
                  </Link>
                  {author.linkedin && (
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-[#0077B5] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-[11px] font-bold text-slate-500 leading-tight">
                  {author.title}
                </p>
                <p className="text-[10px] font-extrabold text-[var(--color-blue)]">
                  Cleared IBPS PO (2021) • 7+ Years Experience • Verified 500+ mock papers
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {author.bio}
          </p>
        </div>

        {/* Reviewer Column */}
        <div className="space-y-4 md:border-l md:border-slate-150/70 md:pl-8">
          <div>
            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Reviewed By
            </span>
            <div className="flex items-center gap-4">
              {/* Initials Circle */}
              <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-slate-500 shrink-0">
                DB
              </div>

              {/* Identity & Credentials */}
              <div className="space-y-1">
                <Link
                  href={`/author/${reviewer.slug}`}
                  className="font-extrabold text-slate-900 hover:text-[var(--color-blue)] hover:underline text-base leading-tight no-underline flex items-center gap-1"
                >
                  {reviewer.name}
                  <ExternalLink size={12} className="opacity-60" />
                </Link>
                <p className="text-[11px] font-bold text-slate-500 leading-tight">
                  {reviewer.title}
                </p>
                <p className="text-[10px] font-extrabold text-[var(--color-gold)]">
                  IDBI Junior Assistant Manager • Bank of Maharashtra Customer Service Associate via IBPS PO
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {reviewer.bio}
          </p>
        </div>

      </div>

      {/* 3. Footer Metadata Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 mt-6 border-t border-slate-150/70 text-xs text-slate-500 font-semibold">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-[var(--color-blue)]" />
          <span>Last updated: <strong className="text-slate-800 font-extrabold">{lastUpdated}</strong></span>
        </div>
        <div>
          <span>Next scheduled review: <strong className="text-slate-800 font-extrabold">{resolvedNextReview}</strong></span>
        </div>
      </div>

    </section>
  );
}
