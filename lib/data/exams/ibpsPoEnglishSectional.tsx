import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const ibpsPoEnglishSectionalContent: DetailSectionContent = {
  title: "IBPS PO English Sectional Test 2026 — Practice Free, Score Higher in 20 Minutes",
  overview: "The IBPS PO English Language section has 30 questions for 30 marks in exactly 20 minutes — a fixed, separate timer that cannot borrow time from Quant or Reasoning. The sectional cut off for General/UR category was 11.50 out of 30 in 2023. Practice the exact pattern now with PrepBanker's free timed English sectional tests, built on real IBPS PO question types and difficulty levels.",
  ctaText: "Start Free IBPS PO English Sectional Test",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "IBPS PO English Sectional Test – Practice Free Online",
  metaDescription: "Attempt free IBPS PO English sectional tests 2026 — Reading Comprehension, Cloze Test, Error Spotting & more. 20-minute timer, instant score, detailed solutions.",
  customSchemas: (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://prepbanker.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "IBPS PO",
                "item": "https://prepbanker.com/ibps-po"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "IBPS PO English Sectional Test",
                "item": "https://prepbanker.com/ibps-po/english-sectional-test"
              }
            ]
          })
        }}
      />
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "IBPS PO English Sectional Test 2026 – Practice Free Online",
            "url": "https://prepbanker.com/ibps-po/english-sectional-test",
            "description": "Free IBPS PO English Language sectional tests for 2026 — 30 questions in 20 minutes, covering Reading Comprehension, Cloze Test, Error Spotting, Sentence Rearrangement, and more. Instant score, section-wise analytics, and detailed solutions.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "inLanguage": "en-IN",
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            }
          })
        }}
      />
      {/* Quiz Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "IBPS PO English Language Sectional Test 2026",
            "description": "Practice IBPS PO English Language sectional tests with 30 questions in 20 minutes. Covers Reading Comprehension, Cloze Test, Error Spotting, Sentence Rearrangement, and Fill in the Blanks — matching exact IBPS PO Prelims pattern.",
            "url": "https://prepbanker.com/ibps-po/english-sectional-test",
            "educationalLevel": "Competitive Exam",
            "about": {
              "@type": "Thing",
              "name": "IBPS PO English Language Section"
            },
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "provider": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            }
          })
        }}
      />
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IBPS PO English Sectional Test 2026 – Topics, Pattern, Cut Off & Preparation Strategy",
            "description": "Complete guide to IBPS PO English Language section — topic-wise weightage, cut off marks, preparation strategy, and free sectional tests with 20-minute timed practice.",
            "url": "https://prepbanker.com/ibps-po/english-sectional-test",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker Editorial Team",
              "url": "https://prepbanker.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "logo": {
                "@type": "ImageObject",
                "url": "https://prepbanker.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://prepbanker.com/ibps-po/english-sectional-test"
            }
          })
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many questions are there in IBPS PO English section?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The IBPS PO Prelims English Language section has 30 questions for 30 marks, with a dedicated 20-minute time limit. In Mains, the English Language section has 35 questions for 40 marks with a 40-minute time limit. There is negative marking of 0.25 marks per wrong answer in both stages."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cut off for English section in IBPS PO Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The IBPS PO Prelims English section cut off for the General/UR category has been around 11.50 out of 30 in recent cycles (2023 data). For SC/ST/OBC/PwBD categories, the sectional cut off was 8.25 out of 30. These are minimum qualifying marks — scoring near the cut off leaves you exposed to the overall cut off pressure."
                }
              },
              {
                "@type": "Question",
                "name": "Which topics come in IBPS PO English language section?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IBPS PO English Language section covers: Reading Comprehension (10 questions typically), Cloze Test (5–7 questions), Error Spotting/Sentence Correction (4–5 questions), Sentence Rearrangement/Para Jumbles (5 questions), Fill in the Blanks (3–4 questions), and occasionally Word Usage or Phrase Replacement. Reading Comprehension alone accounts for 30–35% of the section."
                }
              },
              {
                "@type": "Question",
                "name": "How to score 20+ in IBPS PO English section in 20 minutes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Attempt Cloze Test, Error Spotting, and Fill in the Blanks first — these are fastest per mark. Save Reading Comprehension for last if you're a slow reader. Never spend more than 90 seconds on any single question. Eliminate wrong options to improve accuracy on guesses. Target 22–25 attempts with 85%+ accuracy rather than 30 attempts with 65% accuracy."
                }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker's IBPS PO English sectional test free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Register free at app.prepgrind.com to access IBPS PO English sectional tests at no cost. Each test has 30 questions in a 20-minute timed format matching the real Prelims pattern. After submitting, you get instant scores, topic-wise accuracy breakdown, and detailed solutions for every question — all without any payment."
                }
              },
              {
                "@type": "Question",
                "name": "Is IBPS PO English section hard for non-English medium students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The section is moderate in difficulty for most candidates, but it creates genuine challenges for students who studied in Hindi or regional language medium schools. The good news: the questions test applied grammar and comprehension — not advanced vocabulary. 45–60 days of structured practice focusing on Cloze Tests and RC passages builds enough competency to clear the sectional cut off and score 18–22 comfortably."
                }
              },
              {
                "@type": "Question",
                "name": "How much time should I practice IBPS PO English every day?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "30–45 minutes daily is enough if the time is structured: 15 minutes on RC passages (1 per day), 10 minutes on one grammar topic (rotating), and 10–15 minutes on a timed Cloze Test or Error Spotting set. Consistency matters more than duration. Six weeks of this routine can take an average scorer from 12–14 to 20–24 in the section."
                }
              },
              {
                "@type": "Question",
                "name": "Is IBPS PO English harder than SBI PO English section?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO English is generally considered slightly more difficult — the RC passages are denser, vocabulary questions are less predictable, and the Mains descriptive component is more demanding. IBPS PO English is more pattern-driven and formula-able. If you can consistently score 20+ in IBPS PO English mocks, you likely have the foundation to score 18+ in SBI PO as well."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best order to attempt IBPS PO English section?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recommended order: (1) Cloze Test — fastest marks, 2–3 minutes. (2) Error Spotting — fixed pattern, 3–4 minutes. (3) Fill in the Blanks — short, decisive, 2 minutes. (4) Sentence Rearrangement — 4–5 minutes. (5) Reading Comprehension last — 7–9 minutes for 10 questions. This order protects your score if time runs out before you finish RC."
                }
              },
              {
                "@type": "Question",
                "name": "Do IBPS PO English sectional tests on PrepBanker match the real exam pattern?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker's IBPS PO English sectional tests are built on the exact Prelims pattern: 30 questions, 20-minute timed format, with negative marking enabled (0.25 per wrong). Topics are weighted to match IBPS's historical question distribution — roughly 10 RC questions, 6 Cloze Test, 5 Error Spotting, 5 Para Jumbles, and 4 Fill in the Blanks."
                }
              }
            ]
          })
        }}
      />
    </>
  ),
  subsections: [
    {
      id: 'quick-reference',
      title: "IBPS PO English Language — Quick Section Snapshot",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary Specifications">
            <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
              <li><strong>Section Name:</strong> English Language</li>
              <li><strong>Prelims Format:</strong> 30 Questions | 30 Marks (1 mark each) | 20 Minutes (fixed, no carryover)</li>
              <li><strong>Mains Format:</strong> 35 Questions | 40 Marks | 40 Minutes</li>
              <li><strong>Descriptive Stage:</strong> Letter + Essay | 25 Marks | 30 Minutes</li>
              <li><strong>Negative Marking:</strong> 0.25 per wrong answer (Prelims + Mains objective)</li>
              <li><strong>Sectional Cut Off (General, 2023):</strong> 11.50 / 30</li>
              <li><strong>Sectional Cut Off (SC/ST/OBC/PwD, 2023):</strong> 8.25 / 30</li>
              <li><strong>Recommended Attempt Target:</strong> 22–26 questions with 85%+ accuracy</li>
              <li><strong>PrepBanker Tests:</strong> Timed Sectional Tests | Free on registration</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'section-mismanagement',
      title: "Why the English Section Is Both the Easiest and Most Mismanaged Part of IBPS PO Prelims",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Reading notes and watching videos builds knowledge. Mock tests build exam performance. These are not the same thing.
          </p>
          <p>
            The English Language section in IBPS PO Prelims is a 30-question, 20-minute sprint. The clock is not shared — once your Reasoning or Quant time ends, the English timer starts (or vice versa, depending on section order on your day). You cannot skip to English early or stay in it late.
          </p>
          <p>
            The section tests three underlying skills:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-650 text-xs sm:text-sm">
            <li><strong>Reading speed and comprehension</strong> — for RC passages and Cloze Tests</li>
            <li><strong>Applied grammar</strong> — for Error Spotting and Sentence Correction</li>
            <li><strong>Logical word sense</strong> — for Fill in the Blanks and Word Usage</li>
          </ul>
          <p>
            Importantly, it does not test deep vocabulary or advanced grammar theory. Students who fail this section usually fail it because of <strong>time mismanagement</strong> — not because they lack English knowledge. They spend 8–9 minutes on a single RC passage and don't finish the section. Managing 20 minutes across 30 questions (40 seconds average per question) is a skill that only comes from timed practice.
          </p>
        </div>
      )
    },
    {
      id: 'topic-breakdown',
      title: "What Are the Topics in the IBPS PO English Language Section?",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">IBPS PO Prelims: English Topic Breakdown</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#1B6EB5] text-white font-bold">
                    <th className="px-4 py-2.5">Topic</th>
                    <th className="px-4 py-2.5">Typical Questions</th>
                    <th className="px-4 py-2.5">Marks</th>
                    <th className="px-4 py-2.5">Time Needed</th>
                    <th className="px-4 py-2.5">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reading Comprehension</td>
                    <td className="px-4 py-3">8–10</td>
                    <td className="px-4 py-3">8–10</td>
                    <td className="px-4 py-3">7–9 min</td>
                    <td className="px-4 py-3 text-red-650 font-semibold">Moderate–High</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Cloze Test</td>
                    <td className="px-4 py-3">5–7</td>
                    <td className="px-4 py-3">5–7</td>
                    <td className="px-4 py-3">3–4 min</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Error Spotting / Spotting the Error</td>
                    <td className="px-4 py-3">4–5</td>
                    <td className="px-4 py-3">4–5</td>
                    <td className="px-4 py-3">3–4 min</td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">Moderate</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Sentence Rearrangement / Para Jumbles</td>
                    <td className="px-4 py-3">4–5</td>
                    <td className="px-4 py-3">4–5</td>
                    <td className="px-4 py-3">4–5 min</td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">Moderate–High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Fill in the Blanks</td>
                    <td className="px-4 py-3">3–4</td>
                    <td className="px-4 py-3">3–4</td>
                    <td className="px-4 py-3">2–3 min</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Easy–Moderate</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Word Usage / Phrase Replacement</td>
                    <td className="px-4 py-3">2–4</td>
                    <td className="px-4 py-3">2–4</td>
                    <td className="px-4 py-3">2–3 min</td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">Moderate</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-slate-900">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">20 min</td>
                    <td className="px-4 py-3 text-slate-800">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-555 leading-relaxed font-normal">
              *Question distribution varies year to year. IBPS has occasionally replaced one topic type with another (e.g., Sentence Connectors instead of Cloze Test). Preparing all standard topics eliminates surprise.
            </p>
          </div>
        </div>
      )
    }
  ,
  {
    id: 'topic-strategy',
    title: "Topic-wise Strategy for IBPS PO English",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Reading Comprehension — The High-Stakes, High-Time Topic</h4>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed mb-3">
            RC is the most marks-heavy topic and the biggest time risk. IBPS PO Prelims typically has one passage of 400–600 words with 8–10 questions. The passage is usually from finance, economics, social policy, or general awareness themes — not literary prose.
          </p>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed mb-3">
            The questions cover: main idea, inference, vocabulary in context, author's tone, and factual details. Students who read the questions before the passage can reduce reading time by 30–40% — you only read for what the questions ask.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Cloze Test — The Most Efficient Marks in the Section</h4>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed mb-3">
            Cloze Tests present a passage with 5–7 blanks. Each blank has 4–5 options. The answer requires understanding the flow of the passage and choosing the word that fits grammatically and contextually.
          </p>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
            Cloze Tests are the fastest marks-per-minute topic in the English section. A prepared student completes 6 Cloze questions in under 3.5 minutes at 85%+ accuracy. They should always be attempted before RC.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Error Spotting — Pattern Recognition, Not Deep Grammar</h4>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed mb-3">
            Modern IBPS PO Error Spotting questions are mostly sentence-level. A sentence is divided into parts, and you identify which part has the grammatical error. The most commonly tested errors are: subject-verb agreement, tense inconsistency, article usage (a/an/the), preposition misuse, and pronoun-antecedent mismatch.
          </p>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
            Students who try to recall grammar rules from memory during the exam are slower than students who recognize error patterns from practice. Pattern recognition — built through repeated practice sets — is faster and more reliable than theory recall under pressure.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'cut-off-analysis',
    title: "What Is the IBPS PO English Section Cut Off — and Why the Real Target Is Much Higher",
    content: (
      <div className="space-y-4 text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
        <p>
          The minimum sectional cut off for English in IBPS PO Prelims has been around <strong>11.50 out of 30</strong> for General/UR category (2023 data). For reserved categories (SC/ST/OBC/PwBD), it was <strong>8.25 out of 30</strong>.
        </p>
        <p>
          These numbers look easy. They're not the real benchmark.
        </p>
        <p>
          Here's why: clearing 11.50/30 in English while also clearing 10/35 in Reasoning and 7/35 in Quant — simultaneously staying above the <strong>overall cut off of 49.21</strong> (2025 General) — is harder than each cut off looks in isolation. Students who target 11.50 in English typically leave themselves no buffer for the overall score. Any section where you scrape the minimum puts you at risk of failing the overall cut off.
        </p>
        <p>
          <strong>Realistic target:</strong> 20–24 out of 30 in English. This gives you room to breathe on overall cut-off math, and it's consistently achievable with 6–8 weeks of structured practice.
        </p>
        <HighlightBox type="info" title="Pro Tip: Know When to Stop">
          Never attempt all 30 questions in the English section under time pressure. If you've attempted 25 questions and have 2 minutes left, don't rush through the remaining 5. Rushed attempts in English produce wrong answers, which cost 0.25 each. Leaving 5 questions blank costs zero. Know when to stop.
        </HighlightBox>
      </div>
    )
  },
  {
    id: 'prelims-vs-mains',
    title: "IBPS PO Mains English — How It Differs from Prelims",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          The Mains English section is a separate, more demanding test. It has <strong>35 questions for 40 marks</strong> in <strong>40 minutes</strong> — note that marks per question are not uniform (some questions carry 1 mark, some carry 1.5).
        </p>
        <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-[#1B6EB5] text-white font-bold">
                <th className="px-4 py-2.5">Parameter</th>
                <th className="px-4 py-2.5">Prelims English</th>
                <th className="px-4 py-2.5">Mains English (Objective)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-650">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-855">Questions</td>
                <td className="px-4 py-3">30</td>
                <td className="px-4 py-3">35</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-855">Marks</td>
                <td className="px-4 py-3">30</td>
                <td className="px-4 py-3">40</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-855">Time</td>
                <td className="px-4 py-3">20 minutes</td>
                <td className="px-4 py-3">40 minutes</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-855">Difficulty</td>
                <td className="px-4 py-3">Moderate</td>
                <td className="px-4 py-3">Moderate–High</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-855">RC Passage Length</td>
                <td className="px-4 py-3">400–600 words</td>
                <td className="px-4 py-3">600–900 words</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-855">Vocabulary Depth</td>
                <td className="px-4 py-3">Basic–Moderate</td>
                <td className="px-4 py-3">Moderate–High</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-855">Marks Per Question</td>
                <td className="px-4 py-3">1 (uniform)</td>
                <td className="px-4 py-3">Mixed (1 and 1.5)</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-855">Sectional Cut Off (General)</td>
                <td className="px-4 py-3">~11.50 / 30</td>
                <td className="px-4 py-3">Separate cut off applies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
          The Mains also includes a <strong>Descriptive Paper</strong> — 2 questions (1 essay, 1 letter) for 25 marks in 30 minutes. This is not covered in sectional tests on this page but is covered separately in PrepBanker's Mains practice module.
        </p>
      </div>
    )
  },
  {
    id: 'preparation-plan',
    title: "How to Prepare for IBPS PO English Section — A Topic-Priority Strategy",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
          Most students waste time preparing English in a random order. Here is a priority-ordered approach built around marks-per-effort and time-per-question efficiency:
        </p>
        <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
          <p>
            <strong>Step 1 — Master Cloze Test first.</strong><br />
            It's the highest marks-per-minute topic. Practice 2–3 Cloze Test sets daily. Focus on reading contextual flow, not just individual word choices. By end of Week 2, you should complete any 6-question Cloze Test in under 3.5 minutes with 80%+ accuracy.
          </p>
          <p>
            <strong>Step 2 — Build Error Spotting pattern recognition.</strong><br />
            Do not study grammar textbooks. Instead, attempt 10–15 error-spotting sentences per day and review the explanation for every single wrong answer. The patterns repeat. After 100–150 practice sentences, you'll recognize the 8–10 recurring error types automatically.
          </p>
          <p>
            <strong>Step 3 — RC passage practice with strategy.</strong><br />
            Read one 500-word RC passage per day — always against the clock. Practice reading questions before the passage to focus your reading. Time your attempts: target 10 RC questions in 8 minutes. Don't aim for perfection; aim for decisive, informed choices.
          </p>
          <p>
            <strong>Step 4 — Para Jumbles and Sentence Rearrangement.</strong><br />
            These test logical sequencing. Find the opener sentence (no pronoun reference, no connective, presents a new idea), find the closer (concludes, refers back, gives result), and build the sequence from ends inward. Practice 3–4 sets daily.
          </p>
          <p>
            <strong>Step 5 — Fill in the Blanks and Word Usage.</strong><br />
            These are the quickest wins. Read good quality English editorial writing (Economic Times, The Hindu) for 15 minutes a day to passively build contextual word sense. Pair this with 5–10 FIB practice questions per day.
          </p>
          <p>
            <strong>Step 6 — Full sectional tests under real conditions.</strong><br />
            Attempt PrepBanker's timed English sectional tests: 30 questions, 20 minutes, negative marking active. After every test, review every wrong answer before looking at your total score. The review is the work — the test is just the data.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'time-management',
    title: "The 20-Minute Time Management Framework for IBPS PO English",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          Time management in the English section is not about speed-reading. It's about knowing exactly how many minutes each topic deserves and cutting losses without hesitation.
        </p>
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          Here is the optimal attempt sequence and time budget:
        </p>
        <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-[#1B6EB5] text-white font-bold">
                <th className="px-4 py-2.5">Attempt Order</th>
                <th className="px-4 py-2.5">Topic</th>
                <th className="px-4 py-2.5">Target Time</th>
                <th className="px-4 py-2.5">Target Questions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-650">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-850">1st</td>
                <td className="px-4 py-3">Cloze Test</td>
                <td className="px-4 py-3">3–4 min</td>
                <td className="px-4 py-3">6–7 questions</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-855">2nd</td>
                <td className="px-4 py-3">Error Spotting</td>
                <td className="px-4 py-3">3–4 min</td>
                <td className="px-4 py-3">4–5 questions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-855">3rd</td>
                <td className="px-4 py-3">Fill in the Blanks</td>
                <td className="px-4 py-3">2–3 min</td>
                <td className="px-4 py-3">3–4 questions</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-855">4th</td>
                <td className="px-4 py-3">Para Jumbles</td>
                <td className="px-4 py-3">4–5 min</td>
                <td className="px-4 py-3">4–5 questions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-855">5th</td>
                <td className="px-4 py-3">Reading Comprehension</td>
                <td className="px-4 py-3">6–8 min</td>
                <td className="px-4 py-3">8–10 questions</td>
              </tr>
              <tr className="bg-slate-100 font-bold text-slate-900">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">18–24 min</td>
                <td className="px-4 py-3">25–31 questions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <HighlightBox type="info" title="Pro Tip: Mark for Review">
          Mark difficult RC questions for review rather than spending extra time on them in the first pass. Move through all RC questions once at a brisk pace, answer the clear ones, and return to ambiguous ones in remaining time. This single habit can add 2–3 correct answers per test compared to getting stuck on question 3 for 3 minutes.
        </HighlightBox>
      </div>
    )
  },
  {
    id: 'common-mistakes',
    title: "Common Mistakes Students Make in IBPS PO English Section",
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
        <p>
          These are the actual errors that cost marks — from real patterns seen in test performance data:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-655">
          <li><strong>Mistake 1: Reading the RC passage before the questions.</strong> Many students read the full 500-word passage before even looking at the questions. Half that reading ends up irrelevant. Read questions first, then scan the passage purposefully.</li>
          <li><strong>Mistake 2: Over-relying on &quot;sounds right&quot; for grammar questions.</strong> Error Spotting and Sentence Correction require knowing why an option is right or wrong. &quot;sounds right&quot; fails for students whose spoken English follows non-standard patterns. Learn the underlying rule for every error type you encounter in practice.</li>
          <li><strong>Mistake 3: Attempting all 30 under time pressure.</strong> Rushing the last 5 questions in 90 seconds produces low accuracy. A rushed wrong answer costs 0.25; an unattempted question costs zero. Know when to stop attempting.</li>
          <li><strong>Mistake 4: Ignoring the descriptive component until after Prelims.</strong> For Mains aspirants, the descriptive essay and letter contribute 25 marks to a 250-mark paper — 10% of your Mains score. Students who treat it as an afterthought regularly score 12–15/25 when 19–22 was achievable with 4 weeks of practice.</li>
          <li><strong>Mistake 5: Practicing without the timer on.</strong> Accuracy without speed is useless in a 20-minute section. Every English practice session from Week 3 onwards should be timed. Untimed practice builds a false sense of readiness.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'how-to-use-prepbanker',
    title: "How to Use PrepBanker's IBPS PO English Sectional Tests",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          PrepBanker's English sectional tests are built specifically for the 20-minute Prelims format. Here is how to use the platform for maximum improvement:
        </p>
        <div className="space-y-3 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed pl-3">
          <p>
            <strong>Step 1 — Register and take a baseline test.</strong><br />
            Visit <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">PrepBanker</a> and attempt one English sectional test with no preparation adjustment. This diagnostic gives you your starting accuracy per topic and your section-completion rate under the timer. Most first-attempt scores fall between 10–16 out of 30.
          </p>
          <p>
            <strong>Step 2 — Analyze topic-wise, not just total score.</strong><br />
            PrepBanker's post-test dashboard breaks down your score by topic — RC, Cloze, Error Spotting, and others. If you're scoring 7/10 in Cloze but 2/8 in RC, that's a specific problem with a specific solution. Don't average it out; fix the gap.
          </p>
          <p>
            <strong>Step 3 — Use chapter-wise practice sets between sectional tests.</strong><br />
            Between full sectional tests, use PrepBanker's topic-level English sets — RC-only sets, Error Spotting drills, and Para Jumble practice. These let you isolate and fix one skill at a time before re-testing under full-section conditions.
          </p>
          <p>
            <strong>Step 4 — Retake the same test type after one week of targeted practice.</strong><br />
            After working specifically on RC for 7 days, take another full English sectional test. Compare your RC subscore between the first and second attempt. Measurable improvement in one topic per week is realistic and motivating.
          </p>
          <p>
            <strong>Step 5 — Track your per-question time.</strong><br />
            PrepBanker logs time-per-question for every test. Review this after each attempt to see where time is being lost. Students who spend 4 minutes on a single RC question while solving all other questions in 30 seconds have a time distribution problem, not a knowledge problem.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'sectional-vs-mock',
    title: "IBPS PO English Sectional Test vs Full Mock Test — When to Use Which",
    content: (
      <div className="space-y-4">
        <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-[#1B6EB5] text-white font-bold">
                <th className="px-4 py-2.5">Criterion</th>
                <th className="px-4 py-2.5">English Sectional Test</th>
                <th className="px-4 py-2.5">Full Mock Test</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-650">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Duration</td>
                <td className="px-4 py-3">20 minutes</td>
                <td className="px-4 py-3">60 minutes</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-800">Sections Covered</td>
                <td className="px-4 py-3">English only</td>
                <td className="px-4 py-3">Quant + Reasoning + English</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Best Used For</td>
                <td className="px-4 py-3">Topic-specific drilling and accuracy improvement</td>
                <td className="px-4 py-3">Simulating real exam conditions</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-800">Frequency</td>
                <td className="px-4 py-3">Daily or alternate day (early prep)</td>
                <td className="px-4 py-3">3–4 times per week (final 4 weeks)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Fatigue Factor</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">High (mirrors real exam fatigue)</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-semibold text-slate-800">Score Meaning</td>
                <td className="px-4 py-3">Section accuracy only</td>
                <td className="px-4 py-3">Real Prelims score estimate</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Analytics Depth</td>
                <td className="px-4 py-3">Deep (topic-level)</td>
                <td className="px-4 py-3">Broad (section-level + overall)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 'also-explore',
    title: "Also Explore on PrepBanker",
    content: (
      <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
        <p>
          Scoring well in English is one part of clearing IBPS PO Prelims. These PrepBanker resources cover the rest of the preparation picture:
        </p>
        <p>
          Take the <Link href="/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free IBPS PO Full Prelims Mock Test</Link> to practice English, Quant, and Reasoning back-to-back under full exam conditions. Full mocks train you for the stamina and time management that sectional tests alone cannot replicate.
        </p>
        <p>
          The <Link href="/ibps-po/quant-sectional-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quantitative Aptitude Sectional Test</Link> covers the 35-question, 20-minute Quant section in the same isolated-timer format. If Quant is your weaker section, start there and use English sectional tests for maintenance.
        </p>
        <p>
          For Mains-level English preparation, the <Link href="/ibps-po/mains-mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Mock Tests</Link> include the full 35-question objective English section plus the descriptive essay and letter writing component — all in one timed simulation.
        </p>
        <p>
          To understand what score you need to clear the English sectional cut off and the overall Prelims cut off, visit the <Link href="/ibps-po/cut-off" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Cut Off 2026</Link> page for year-wise category-wise data and expected 2026 benchmarks.
        </p>
        <p>
          If you're also preparing for SBI PO, the <Link href="/sbi-po/english-sectional-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO English Sectional Tests</Link> on PrepBanker use the same core skill set but slightly higher difficulty, helping you calibrate upward from the IBPS PO baseline.
        </p>
      </div>
    )
  }
],
  faqs: [
    {
      q: "How many questions are there in IBPS PO English section?",
      a: "The IBPS PO Prelims English Language section has 30 questions for 30 marks, with a dedicated 20-minute time limit. In Mains, the English Language section has 35 questions for 40 marks with a 40-minute time limit. There is negative marking of 0.25 marks per wrong answer in both stages."
    },
    {
      q: "What is the cut off for English section in IBPS PO Prelims?",
      a: "The IBPS PO Prelims English section cut off for the General/UR category has been around 11.50 out of 30 in recent cycles (2023 data). For SC/ST/OBC/PwBD categories, the sectional cut off was 8.25 out of 30. These are minimum qualifying marks — scoring near the cut off leaves you exposed to the overall cut off pressure."
    },
    {
      q: "Which topics come in IBPS PO English language section?",
      a: "IBPS PO English Language section covers: Reading Comprehension (10 questions typically), Cloze Test (5–7 questions), Error Spotting/Sentence Correction (4–5 questions), Sentence Rearrangement/Para Jumbles (5 questions), Fill in the Blanks (3–4 questions), and occasionally Word Usage or Phrase Replacement. Reading Comprehension alone accounts for 30–35% of the section."
    },
    {
      q: "How to score 20+ in IBPS PO English section in 20 minutes?",
      a: "Attempt Cloze Test, Error Spotting, and Fill in the Blanks first — these are fastest per mark. Save Reading Comprehension for last if you're a slow reader. Never spend more than 90 seconds on any single question. Eliminate wrong options to improve accuracy on guesses. Target 22–25 attempts with 85%+ accuracy rather than 30 attempts with 65% accuracy."
    },
    {
      q: "Is PrepBanker's IBPS PO English sectional test free?",
      a: "Yes. Register free at app.prepgrind.com to access IBPS PO English sectional tests at no cost. Each test has 30 questions in a 20-minute timed format matching the real Prelims pattern. After submitting, you get instant scores, topic-wise accuracy breakdown, and detailed solutions for every question — all without any payment."
    },
    {
      q: "Is IBPS PO English section hard for non-English medium students?",
      a: "The section is moderate in difficulty for most candidates, but it creates genuine challenges for students who studied in Hindi or regional language medium schools. The good news: the questions test applied grammar and comprehension — not advanced vocabulary. 45–60 days of structured practice focusing on Cloze Tests and RC passages builds enough competency to clear the sectional cut off and score 18–22 comfortably."
    },
    {
      q: "How much time should I practice IBPS PO English every day?",
      a: "30–45 minutes daily is enough if the time is structured: 15 minutes on RC passages (1 per day), 10 minutes on one grammar topic (rotating), and 10–15 minutes on a timed Cloze Test or Error Spotting set. Consistency matters more than duration. Six weeks of this routine can take an average scorer from 12–14 to 20–24 in the section."
    },
    {
      q: "Is IBPS PO English harder than SBI PO English section?",
      a: "SBI PO English is generally considered slightly more difficult — the RC passages are denser, vocabulary questions are less predictable, and the Mains descriptive component is more demanding. IBPS PO English is more pattern-driven and formula-able. If you can consistently score 20+ in IBPS PO English mocks, you likely have the foundation to score 18+ in SBI PO as well."
    },
    {
      q: "What is the best order to attempt IBPS PO English section?",
      a: "Recommended order: (1) Cloze Test — fastest marks, 2–3 minutes. (2) Error Spotting — fixed pattern, 3–4 minutes. (3) Fill in the Blanks — short, decisive, 2 minutes. (4) Sentence Rearrangement — 4–5 minutes. (5) Reading Comprehension last — 7–9 minutes for 10 questions. This order protects your score if time runs out before you finish RC."
    },
    {
      q: "Do IBPS PO English sectional tests on PrepBanker match the real exam pattern?",
      a: "Yes. PrepBanker's IBPS PO English sectional tests are built on the exact Prelims pattern: 30 questions, 20-minute timed format, with negative marking enabled (0.25 per wrong). Topics are weighted to match IBPS's historical question distribution — roughly 10 RC questions, 6 Cloze Test, 5 Error Spotting, 5 Para Jumbles, and 4 Fill in the Blanks."
    }
  ]
};
