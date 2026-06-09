// PATH: app/current-affairs/[id]/CADetailContentClient.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Calendar,
  User,
  Clock,
  Share2,
  Download,
  Check,
  Link2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Zap,
  Award,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import type { CurrentAffair } from '@/types/current-affairs';
import { getCategoryStyle } from '@/lib/data/current-affairs/categories';
import { getArticleImage } from '@/components/sections/current-affairs/cards/CACard';

interface Props {
  article: CurrentAffair;
  prevArticle: CurrentAffair | null;
  nextArticle: CurrentAffair | null;
  similarArticles: CurrentAffair[];
  faqs: { id: string; question: string; answer: string }[];
}

export default function CADetailContentClient({
  article,
  prevArticle,
  nextArticle,
  similarArticles,
  faqs,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('intro');

  const imageUrl = getArticleImage(article);

  // Generate page URL for sharing
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = encodeURIComponent(article.title);

  // Copy link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Setup intersection observer to highlight active ToC item on scroll
  useEffect(() => {
    const sections = ['intro', 'body-content', 'highlights', 'key-points', 'exam-relevance', 'faqs-section'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, {
        rootMargin: '-10% 0px -70% 0px'
      });

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [article.id]);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  // Theming gradients based on category
  const gradients: Record<string, string> = {
    'RBI Updates': 'from-[#0F2027] via-[#203A43] to-[#2C5364]',
    'Banking Awareness': 'from-[#1e3c72] to-[#2a5298]',
    'Economy & Finance': 'from-[#24C6DC] to-[#514A9D]',
    'Government Schemes': 'from-[#F3904F] to-[#3B4371]',
    'International Affairs': 'from-[#11998e] to-[#38ef7d]',
    'Static GK': 'from-[#8A2387] via-[#E94057] to-[#F27121]'
  };
  const gradient = gradients[article.category] ?? 'from-slate-800 to-slate-900';

  return (
    <div className="space-y-0">

      {/* ─── PAGE HEADER (Light Background) ─── */}
      <header className="bg-slate-100/60 border-b border-slate-200/80 py-8 sm:py-10">
        <div className="container-custom space-y-5">
          {/* Breadcrumbs */}
          <nav className="text-xs font-semibold text-slate-500 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
            <span className="text-slate-300">&gt;</span>
            <Link href="/current-affairs" className="hover:text-[var(--color-blue)] transition-colors">Current Affairs</Link>
            <span className="text-slate-300">&gt;</span>
            <span className="text-slate-800 font-bold truncate max-w-xs">{article.category}</span>
          </nav>

          {/* H1 Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--color-navy)] leading-snug tracking-tight max-w-4xl">
            {article.title}
          </h1>

          {/* Meta Details & CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/60 pt-4 mt-2">

            {/* Posted info */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-400" />
                By GA Editorial Team
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {article.readTime} Min Read
              </span>
            </div>

            {/* Share / PDF actions */}
            <div className="flex flex-wrap items-center gap-2">

              {/* Social sharing links */}
              <div className="flex items-center gap-2 border-r border-slate-200 pr-3 mr-1">
                <span className="text-[10px] uppercase font-extrabold text-slate-400 mr-1 hidden lg:inline flex-shrink-0">Share</span>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-all"
                  title="Share on WhatsApp"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-blue-600 rounded-lg transition-all"
                  title="Share on Facebook"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/facebook.svg" alt="Facebook" className="w-4 h-4" />
                </a>

                {/* Twitter / X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-slate-200 hover:border-slate-800 hover:bg-slate-50 text-slate-800 rounded-lg transition-all"
                  title="Share on Twitter/X"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/twitter.svg" alt="Twitter/X" className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-slate-200 hover:border-blue-700 hover:bg-blue-50 text-blue-700 rounded-lg transition-all"
                  title="Share on LinkedIn"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                </a>

                {/* Copy link */}
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-white border border-slate-200 hover:border-slate-800 hover:bg-slate-50 text-slate-700 rounded-lg transition-all flex items-center gap-1.5 relative"
                  title="Copy Link URL"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-650" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/images/icons/copylink.svg" alt="Copy Link" className="w-4 h-4" />
                  )}
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded shadow-md whitespace-nowrap z-50">
                      Copied!
                    </span>
                  )}
                </button>
              </div>

              {/* Download PDF button */}
              <a
                href="https://app.prepgrind.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-navy)] rounded-lg hover:opacity-95 shadow-sm active:scale-95 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF Notes
              </a>

            </div>
          </div>
        </div>
      </header>

      {/* ─── MAIN ARTICLE BODY LAYOUT (Two columns) ─── */}
      <div className="container-custom py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT: Main article content */}
          <article className="w-full lg:w-3/4 flex flex-col gap-8">

            {/* Featured Image */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm max-h-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={article.title}
                loading="lazy"
                className="w-full h-auto max-h-[420px] object-cover object-center"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.jpg'; }}
              />
            </div>

            {/* Introduction block */}
            <section id="intro" className="space-y-4 scroll-mt-[200px]">
              <h2 className="text-base font-extrabold text-[var(--color-navy)] uppercase tracking-wider border-l-4 border-[var(--color-blue)] pl-3">
                Overview & Summary
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 border border-slate-150 p-5 rounded-2xl shadow-sm">
                {article.summary}
              </p>
            </section>

            {/* Detailed Analysis (body paragraphs) */}
            <section id="body-content" className="space-y-4 scroll-mt-[200px]">
              <h2 className="text-base font-extrabold text-[var(--color-navy)] uppercase tracking-wider border-l-4 border-[var(--color-blue)] pl-3">
                Detailed Analysis
              </h2>
              <div className="text-sm text-slate-655 leading-relaxed space-y-4">
                {article.body.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="text-slate-600 bg-white border border-slate-100 p-5 rounded-2xl leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Important Highlights (quick facts) */}
            {article.quickFacts && article.quickFacts.length > 0 && (
              <section id="highlights" className="space-y-4 scroll-mt-[200px]">
                <h2 className="text-base font-extrabold text-[var(--color-navy)] uppercase tracking-wider border-l-4 border-[var(--color-blue)] pl-3">
                  Important Highlights
                </h2>
                <div className="bg-amber-50/20 border border-amber-100/60 p-6 rounded-2xl space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-150 px-2 py-0.5 rounded">Quick Reference Key Facts</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {article.quickFacts.map((fact: string, i: number) => (
                      <div key={i} className="bg-white border border-slate-100 p-3.5 rounded-xl flex items-center gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-amber-50 text-amber-500 rounded text-[9px] font-black">✓</span>
                        <span className="text-xs font-bold text-slate-700">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Key Points Summary */}
            {article.keyPoints && article.keyPoints.length > 0 && (
              <section id="key-points" className="space-y-4 scroll-mt-[200px]">
                <h2 className="text-base font-extrabold text-[var(--color-navy)] uppercase tracking-wider border-l-4 border-[var(--color-blue)] pl-3">
                  Key Points Summary
                </h2>
                <div className="bg-white border border-slate-150 p-6 rounded-2xl shadow-sm space-y-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-blue)] bg-blue-50 px-2.5 py-0.5 rounded">Core Takeaways</span>
                  <ul className="space-y-3.5">
                    {article.keyPoints.map((point: string, i: number) => (
                      <li key={i} className="flex gap-3 text-xs text-slate-655 leading-relaxed items-start">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Exam Relevance Section */}
            <section id="exam-relevance" className="space-y-4 scroll-mt-[200px]">
              <h2 className="text-base font-extrabold text-[var(--color-navy)] uppercase tracking-wider border-l-4 border-[var(--color-blue)] pl-3">
                Exam Relevance
              </h2>
              <div className="bg-indigo-50/20 border border-indigo-100 p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-150 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Relevance: {article.examRelevance === 'Both' ? 'SBI PO & IBPS PO' : article.examRelevance.replace('-', ' ')}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    This update is highly testable in General / Banking Awareness sections of Mains. Questions typically query specific percentages, values, scheme limits, and target deadlines mentioned in the key facts. Ensure you memorize these stats for the written paper as well as personal interviews.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── EMBEDDED CTA BLOCK ─── */}
            <section className="bg-[#07102A] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-slate-800 shadow-md">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="inline-flex text-[9px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 uppercase tracking-widest">Interactive Practice</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-100">
                    Test your recall capacity on this article
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Instantly attempt topic-specific practice quizzes designed to reinforce the details, percentages, and figures from this article.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0">
                  <Link
                    href="/quiz"
                    className="px-5 py-2.5 bg-gradient-to-r from-[var(--color-blue)] to-[#1483D6] text-white text-xs font-extrabold rounded-lg hover:opacity-95 text-center shadow-sm"
                  >
                    Practice Quiz
                  </Link>
                  <Link
                    href="/live-tests"
                    className="px-5 py-2.5 bg-white text-slate-900 text-xs font-extrabold rounded-lg hover:bg-slate-50 text-center"
                  >
                    Start Free Test
                  </Link>
                </div>
              </div>
              {/* Backlight Decoration */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-[var(--color-blue)]/10 rounded-full blur-2xl pointer-events-none" />
            </section>

            {/* FAQ section */}
            <section id="faqs-section" className="space-y-4 scroll-mt-[200px]">
              <h2 className="text-base font-extrabold text-[var(--color-navy)] uppercase tracking-wider border-l-4 border-[var(--color-blue)] pl-3">
                Related FAQs
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => {
                  const isOpen = activeFAQ === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`border rounded-2xl bg-white transition-all ${isOpen ? 'border-[var(--color-blue)] shadow-sm' : 'border-slate-150 hover:border-slate-300'
                        }`}
                    >
                      <button
                        onClick={() => setActiveFAQ(isOpen ? null : faq.id)}
                        className="w-full px-5 py-4 text-left flex justify-between items-start gap-4 font-bold text-slate-800 text-xs sm:text-sm"
                      >
                        <span className="flex gap-2">
                          <HelpCircle className="w-4 h-4 text-[var(--color-blue)] flex-shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 mt-0.5 transition-transform ${isOpen ? 'rotate-180 text-[var(--color-blue)]' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 pl-11 text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ─── NEXT & PREV ARTICLE NAVIGATION ─── */}
            <nav className="flex justify-between items-center gap-4 border-t border-b border-slate-200/80 py-4 mt-6">
              {prevArticle ? (
                <Link
                  href={`/current-affairs/${prevArticle.id}`}
                  className="flex items-center gap-2 group text-left max-w-[45%]"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Previous</span>
                    <span className="text-[11px] font-bold text-slate-800 line-clamp-1 group-hover:text-[var(--color-blue)] transition-colors">{prevArticle.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="w-10" />
              )}

              {nextArticle ? (
                <Link
                  href={`/current-affairs/${nextArticle.id}`}
                  className="flex items-center gap-2 group text-right justify-end max-w-[45%]"
                >
                  <div className="order-2 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className="order-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Next Article</span>
                    <span className="text-[11px] font-bold text-slate-800 line-clamp-1 group-hover:text-[var(--color-blue)] transition-colors">{nextArticle.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="w-10" />
              )}
            </nav>

            {/* ─── SIMILAR ARTICLES CARDS ─── */}
            <section className="space-y-5">
              <h3 className="text-sm font-extrabold text-[var(--color-navy)] uppercase tracking-wide">
                Similar Current Affairs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {similarArticles.map(art => (
                  <div key={art.id} className="bg-white border border-slate-150 p-4 rounded-xl flex flex-col justify-between hover:shadow-sm hover:border-[var(--color-blue)]/30 transition-all group">
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-[var(--color-blue)] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                        {art.category}
                      </span>
                      <h4 className="text-[11.5px] font-extrabold text-slate-800 leading-snug group-hover:text-[var(--color-blue)] transition-colors line-clamp-2">
                        <Link href={`/current-affairs/${art.id}`}>{art.title}</Link>
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold block mt-4">{art.date}</span>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* RIGHT: Sticky Sidebar (ToC & related updates) */}
          <aside className="w-full lg:w-1/4 lg:max-w-[300px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-[128px] self-start">

            {/* Table of Contents Box */}
            <div className="bg-white p-5 border border-slate-200 shadow-sm rounded-2xl space-y-4">
              <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
                Table of Contents
              </h3>

              <ul className="space-y-3">
                {[
                  { id: 'intro', label: '1. Overview Summary' },
                  { id: 'body-content', label: '2. Detailed Analysis' },
                  { id: 'highlights', label: '3. Key Highlights' },
                  { id: 'key-points', label: '4. Summary Points' },
                  { id: 'exam-relevance', label: '5. Exam Relevance' },
                  { id: 'faqs-section', label: '6. Related FAQs' }
                ].map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <li key={sec.id}>
                      <button
                        onClick={() => handleScrollTo(sec.id)}
                        className={`text-left text-xs font-semibold hover:text-[var(--color-blue)] transition-colors ${isActive ? 'text-[var(--color-blue)] font-bold border-l-2 border-[var(--color-blue)] pl-2' : 'text-slate-500 pl-2'
                          }`}
                      >
                        {sec.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Practice resources links */}
            <div className="bg-white p-5 border border-slate-200 shadow-sm rounded-2xl space-y-4">
              <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
                Important Resources
              </h3>

              <ul className="space-y-3.5">
                {[
                  { label: 'Start Free Mocks', href: '/quiz' },
                  { label: 'Attempt Live Tests', href: '/live-tests' },
                  { label: 'Download Notes PDF', href: 'https://app.prepgrind.com/register' },
                  { label: 'Explore Syllabus Info', href: '/exams' }
                ].map((res, i) => (
                  <li key={i}>
                    <a
                      href={res.href}
                      target={res.href.startsWith('http') ? '_blank' : undefined}
                      rel={res.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs font-bold text-slate-650 hover:text-[var(--color-blue)] flex items-center justify-between group"
                    >
                      <span>{res.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--color-blue)] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related updates with gradient indicators */}
            <div className="bg-white p-5 border border-slate-200 shadow-sm rounded-2xl space-y-4">
              <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
                Related Updates
              </h3>

              <div className="space-y-4">
                {similarArticles.map((art) => {
                  const catGrad = gradients[art.category] ?? 'from-slate-800 to-slate-900';
                  return (
                    <div key={art.id} className="flex gap-3 items-start group">
                      <div className={`w-3.5 h-3.5 rounded bg-gradient-to-br ${catGrad} flex-shrink-0 mt-1`} />
                      <div className="space-y-1">
                        <h4 className="text-[11.5px] font-bold text-slate-700 leading-snug group-hover:text-[var(--color-blue)] transition-colors">
                          <Link href={`/current-affairs/${art.id}`}>{art.title}</Link>
                        </h4>
                        <span className="text-[9px] font-bold text-slate-400 block">{art.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </aside>

        </div>
      </div>

    </div>
  );
}
