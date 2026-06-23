import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoEnglishSectionalContent: DetailSectionContent = {
  title: "SBI PO English Sectional Test 2026: Free Topic-wise Practice Tests",
  overview: "PrepBanker's SBI PO English Language sectional tests cover all topics in the Prelims and Mains English section — Reading Comprehension, Cloze Test, Error Spotting, Para Jumbles, Sentence Improvement, and Vocabulary. The Prelims English section is 30 questions, 30 marks, 20 minutes with a strict sectional timer. Free tests are available on registration, with detailed solutions after every attempt.",
  ctaText: "Start Free SBI PO English Sectional Test",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "SBI PO English Sectional Test : Free Practice Tests",
  metaDescription: "Practise SBI PO English Language with free sectional tests on PrepBanker. RC, cloze, error spotting, para jumbles — topic-wise tests with solutions. Start free.",
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
                "name": "SBI PO",
                "item": "https://prepbanker.com/sbi-po"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SBI PO Mock Tests",
                "item": "https://prepbanker.com/sbi-po/mock-test"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "SBI PO English Sectional Test 2026",
                "item": "https://prepbanker.com/sbi-po/english-sectional-test"
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
            "name": "SBI PO English Sectional Test 2026: Free Practice Tests",
            "url": "https://prepbanker.com/sbi-po/english-sectional-test",
            "description": "Free SBI PO English Language sectional tests for 2026 — topic-wise practice for Reading Comprehension, Cloze Test, Error Spotting, Para Jumbles, and more. Detailed solutions and analytics included.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "WebSite",
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
            "name": "SBI PO English Language Sectional Test 2026",
            "url": "https://prepbanker.com/sbi-po/english-sectional-test",
            "description": "Sectional practice tests for the SBI PO English Language section — covering Reading Comprehension, Cloze Test, Error Spotting, Sentence Improvement, Para Jumbles, Fill in the Blanks, and Vocabulary.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "educationalLevel": "Graduate",
            "about": {
              "@type": "Thing",
              "name": "SBI PO English Language Section 2026"
            },
            "provider": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            }
          })
        }}
      />
      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "SBI PO English Language Section — Sectional Test Series 2026",
            "url": "https://prepbanker.com/sbi-po/english-sectional-test",
            "description": "Complete sectional test series for SBI PO English Language 2026 — topic-wise tests, full-section timed tests, PYQ-based sets, and detailed solutions for Prelims and Mains English preparation.",
            "provider": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online",
              "inLanguage": "en-IN"
            },
            "datePublished": "2026-05-01",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "description": "Free English sectional tests available on registration"
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
                "name": "How many questions are there in the SBI PO English section?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In SBI PO Prelims, the English Language section has 30 questions for 30 marks, with a fixed time limit of 20 minutes. In SBI PO Mains, the English Language section has 35 questions for 40 marks, with a 40-minute time limit. Both stages carry negative marking of 0.25 marks per wrong answer."
                }
              },
              {
                "@type": "Question",
                "name": "What topics come in the SBI PO English section?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO English Language section covers: Reading Comprehension (RC), Cloze Test, Error Spotting, Sentence Improvement or Correction, Para Jumbles (sentence rearrangement), Fill in the Blanks (single and double), Vocabulary-based questions (synonyms, antonyms, word usage), and occasionally Word Swap or Odd Sentence Out. RC consistently carries the highest weightage at 7–10 questions per Prelims paper."
                }
              },
              {
                "@type": "Question",
                "name": "What is the SBI PO English section cut off?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The official SBI PO English sectional cut off is not published in advance. Based on historical trends, the General category English sectional cut off in Prelims has been approximately 7–9 marks out of 30. However, to remain competitive for the overall cut off, scoring 20+ in English (out of 30) is recommended — not just clearing the minimum threshold."
                }
              },
              {
                "@type": "Question",
                "name": "Is SBI PO English section tough for Hindi medium students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The SBI PO English section can be challenging for Hindi medium students, especially Reading Comprehension and vocabulary questions. However, with structured practice — starting from grammar basics, then cloze tests, then RC — it becomes manageable. Many Hindi medium students score 20+ in Prelims English within 2–3 months of consistent sectional test practice."
                }
              },
              {
                "@type": "Question",
                "name": "Are PrepBanker SBI PO English sectional tests free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PrepBanker offers free SBI PO English sectional tests on registration. Free access includes topic-wise tests with detailed solutions. Premium plans unlock the full sectional test series with timed full-section tests, additional PYQ-based sets, and cross-section performance analytics. Register at app.prepgrind.com/register to start for free."
                }
              },
              {
                "@type": "Question",
                "name": "How much time should I spend on the English section in SBI PO Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The SBI PO Prelims English section has a strict 20-minute time limit. The recommended time split: Reading Comprehension (7–8 minutes for one passage), Cloze Test (3–4 minutes), Grammar-based questions (5–6 minutes), and Para Jumbles (2–3 minutes). Leaving 1 minute for review is advisable. Going over 20 minutes is not possible — the section auto-submits."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between SBI PO Prelims English and Mains English?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO Prelims English is 30 questions / 30 marks / 20 minutes — focused on speed and accuracy across standard question types. Mains English is 35 questions / 40 marks / 40 minutes — more conceptually demanding, with longer RC passages, more complex grammar questions, and occasionally new question formats. Mains also carries a separate 50-mark Descriptive Paper (essay and letter)."
                }
              },
              {
                "@type": "Question",
                "name": "How do I improve my Reading Comprehension score for SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To improve RC for SBI PO: (1) Read one editorial daily from The Hindu or Mint to build reading speed and vocabulary in context. (2) Practise skimming the passage first, then reading questions. (3) In the exam, answer vocabulary and inference questions first (fastest) before factual detail questions. (4) Attempt at least 3 RC passages per week in timed practice."
                }
              },
              {
                "@type": "Question",
                "name": "Which English topics should I prioritise for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Priority order for SBI PO English 2026: (1) Reading Comprehension — highest question count, 7–10 questions per paper. (2) Cloze Test — 5–7 questions, predictable format. (3) Error Spotting / Sentence Correction — 4–6 questions. (4) Para Jumbles — 4–5 questions. (5) Fill in the Blanks and Vocabulary — 3–5 questions. RC + Cloze alone can get you 12–17 marks."
                }
              },
              {
                "@type": "Question",
                "name": "How many sectional tests should I attempt for SBI PO English?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aim for at least 20–25 topic-wise English tests (5 per major topic) before switching to full-section timed tests. Then attempt 10–15 full 20-minute English sectional tests before Prelims. Quality of analysis matters — spending 15 minutes reviewing solutions after a 20-minute test is not optional; it's the core of improvement."
                }
              }
            ]
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
            "headline": "SBI PO English Sectional Test 2026: Free Practice Tests",
            "url": "https://prepbanker.com/sbi-po/english-sectional-test",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker",
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
            "description": "Complete guide to SBI PO English Language sectional test preparation — topic weightage, strategy, sectional cut offs, and how to use PrepBanker's topic-wise tests.",
            "mainEntityOfPage": "https://prepbanker.com/sbi-po/english-sectional-test",
            "keywords": "SBI PO English sectional test 2026, SBI PO English language practice, SBI PO reading comprehension, SBI PO English cut off, SBI PO English preparation"
          })
        }}
      />
    </>
  ),
  subsections: [
    {
      id: 'quick-reference',
      title: "SBI PO English Language — Quick Section Snapshot",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary Specifications">
            <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
              <li><strong>Section Name:</strong> English Language</li>
              <li><strong>Prelims:</strong> 30 Questions | 30 Marks | 20 Minutes (fixed, no carryover)</li>
              <li><strong>Mains Objective:</strong> 35 Questions | 40 Marks | 40 Minutes</li>
              <li><strong>Mains Descriptive:</strong> Letter + Essay | 50 Marks | 30 Minutes</li>
              <li><strong>Negative Marking:</strong> 0.25 per wrong answer (Prelims + Mains objective)</li>
              <li><strong>Approximate Sectional Cut Off (General, Prelims):</strong> 7–9 marks (historical)</li>
              <li><strong>Competitive Target Score (Prelims):</strong> 22–26 out of 30</li>
              <li><strong>Key Topics:</strong> RC, Cloze Test, Error Spotting, Para Jumbles, Fill in the Blanks</li>
              <li><strong>PrepBanker Tests:</strong> Topic-wise + Full Section + Timed | Free on registration</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'section-mismanagement',
      title: "Why the English Section Is Both the Easiest and Most Mismanaged Part of SBI PO Prelims",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            English is the only section in SBI PO Prelims where most students have some baseline ability — and yet it's consistently one of the biggest sources of mark loss. The reason is not difficulty. It's mismanagement.
          </p>
          <p>
            With only <strong>20 minutes for 30 questions</strong>, you're working at 40 seconds per question on average. Most students who score poorly in English don't score poorly because they don't know grammar. They score poorly because they spend 9–10 minutes on one RC passage, leaving 10 minutes to rush through 20 grammar and vocabulary questions. Speed discipline within the section is as important as the content knowledge itself.
          </p>
          <p>
            Over <strong>20 lakh students</strong> appear for SBI PO each year. The General category English sectional cut off in Prelims has historically been around <strong>7–9 marks out of 30</strong> — a low bar to clear. But clearing the cut off is not the goal. Scoring <strong>22–26 out of 30</strong> is the target that puts you in a competitive overall total. The students who clear SBI PO don't just cross the sectional minimum — they score well above it.
          </p>
        </div>
      )
    },
    {
      id: 'topic-breakdown',
      title: "What Are the Topics in the SBI PO English Language Section?",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">SBI PO Prelims: English Topic Breakdown</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Topic</th>
                    <th className="px-4 py-2.5">Approx. Questions (Prelims)</th>
                    <th className="px-4 py-2.5">Marks</th>
                    <th className="px-4 py-2.5">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reading Comprehension (RC)</td>
                    <td className="px-4 py-3">7–10</td>
                    <td className="px-4 py-3">7–10</td>
                    <td className="px-4 py-3 text-red-650 font-semibold">Medium–High</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Cloze Test</td>
                    <td className="px-4 py-3">5–7</td>
                    <td className="px-4 py-3">5–7</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Easy–Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Error Spotting / Sentence Correction</td>
                    <td className="px-4 py-3">4–6</td>
                    <td className="px-4 py-3">4–6</td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">Medium</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Para Jumbles (Sentence Rearrangement)</td>
                    <td className="px-4 py-3">4–5</td>
                    <td className="px-4 py-3">4–5</td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Fill in the Blanks (Single/Double)</td>
                    <td className="px-4 py-3">3–5</td>
                    <td className="px-4 py-3">3–5</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Easy–Medium</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Vocabulary (Synonyms/Antonyms/Word Usage)</td>
                    <td className="px-4 py-3">2–4</td>
                    <td className="px-4 py-3">2–4</td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Miscellaneous (Word Swap, Odd Sentence)</td>
                    <td className="px-4 py-3">0–3</td>
                    <td className="px-4 py-3">0–3</td>
                    <td className="px-4 py-3 text-red-650 font-semibold">Medium–High</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-550 leading-relaxed font-normal">
              *Note: Topic distribution varies by year. SBI occasionally introduces new question formats — 2019 introduced "Word Swap" prominently; 2022 featured more inference-heavy RC questions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">SBI PO Mains: English Section Differences</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              The Mains English section (35 questions, 40 marks, 40 minutes) is more demanding in two ways:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-650 pl-3 mb-3">
              <li><strong>RC passages are longer and more abstract</strong> — often from finance, economics, or social policy, requiring inference and tone identification rather than direct recall.</li>
              <li><strong>Grammar questions are higher-order</strong> — Error spotting in Mains involves complex sentences with multiple potential errors; Para Jumbles may have 6-sentence sets instead of 5.</li>
            </ol>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              The Mains section also leads into the <strong>Descriptive Paper</strong> (50 marks, 30 minutes) — a typed essay and letter. Students who build strong English fundamentals through sectional practice find the Descriptive Paper significantly easier to handle.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'topic-strategy',
      title: "Topic-wise Weightage and Strategy for SBI PO English 2026",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Reading Comprehension: The Section-Maker</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              RC carries the highest weightage in SBI PO English — <strong>7–10 questions per Prelims paper</strong>, typically from one passage of 450–550 words. RC questions fall into four types: Direct/Factual, Inference-based, Vocabulary in context, and Title/Theme.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              <strong>Strategy:</strong> Read the questions before the passage. This primes your brain to look for specific information as you read, saving the time of re-reading. Tackle vocabulary-in-context and factual questions first; leave inference and theme questions for last.
            </p>
            <HighlightBox type="info" title="Pro Tip: Skimming Passages">
              Don't attempt to read the full RC passage word-by-word in 20-minute Prelims. Read the first and last paragraph carefully (where the main idea usually sits), then skim the middle paragraphs for structural signposts (however, therefore, in contrast, consequently). For most Prelims RC questions, this is sufficient — deep reading is a Mains habit, not a Prelims one.
            </HighlightBox>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Cloze Test: The Reliable Scorer</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              The Cloze Test — a passage with 5–7 blanks to fill — is the most consistent topic in SBI PO English. The difficulty has been steady across years. These questions reward students who read newspapers regularly; the vocabulary and tone of Cloze passages often mirrors editorial writing.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              SBI PO Cloze Tests have shifted in recent years from single-blank to <strong>contextual fill-in</strong> formats where all four options are grammatically correct but only one fits the passage's meaning and flow. This makes it less about grammar and more about reading comprehension at the sentence level.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Error Spotting and Sentence Correction</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              These questions test grammar knowledge — subject-verb agreement, tense consistency, pronoun usage, preposition accuracy, and articles. In Prelims, errors are usually at the clause level. In Mains, errors can be subtle — a misplaced modifier, a redundant word, or an incorrect comparative form.
            </p>
            <p className="text-slate-605 text-xs sm:text-sm leading-relaxed mb-3">
              <strong>Common traps:</strong> Collective nouns (singular vs plural?), either/neither constructions, dangling modifiers, and "between" vs "among" usage in complex sentences.
            </p>
            <HighlightBox type="success" title="Pro Tip: Error Log">
              Build a personal error log from your sectional test attempts. After 10 Error Spotting tests, you'll find that you're making the same 3–4 grammar mistakes repeatedly. Fixing those 3–4 specific patterns is worth more than generic grammar revision. Most students who struggle with Error Spotting have a small but consistent set of blind spots — find yours.
            </HighlightBox>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Para Jumbles: Pure Logic</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
              Para Jumbles (sentence rearrangement) are popular with students who aren't confident in grammar — because they require logical flow analysis, not linguistic knowledge. The correct sequence is the one where each sentence connects logically to the next.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>Solving Para Jumbles in order:</strong> (1) Find the mandatory first sentence (introduction of main subject). (2) Find the mandatory last sentence (conclusion). (3) Identify pairs that must be adjacent. (4) Eliminate options that violate pairs. (5) Re-read sequence aloud to check flow.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Fill in the Blanks and Vocabulary</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Double blanks require both options to be logically consistent. Vocabulary questions (synonyms, antonyms, word usage) are increasingly context-based — SBI is less interested in vocabulary in isolation and more interested in correct usage inside regulatory policy sentences. Practise vocabulary in context, not from word lists.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'prelims-vs-mains',
      title: "SBI PO English Prelims vs Mains: Side-by-Side Comparison",
      content: (
        <div className="space-y-4">
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">Prelims English</th>
                  <th className="px-4 py-2.5">Mains English (Objective)</th>
                  <th className="px-4 py-2.5">Mains Descriptive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Questions / Marks</td>
                  <td className="px-4 py-3">30 / 30</td>
                  <td className="px-4 py-3">35 / 40</td>
                  <td className="px-4 py-3">2 questions / 50</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Time</td>
                  <td className="px-4 py-3">20 minutes</td>
                  <td className="px-4 py-3">40 minutes</td>
                  <td className="px-4 py-3">30 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">RC Passage Length</td>
                  <td className="px-4 py-3">450–550 words</td>
                  <td className="px-4 py-3">600–750 words</td>
                  <td className="px-4 py-3">N/A</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Grammar Complexity</td>
                  <td className="px-4 py-3">Standard</td>
                  <td className="px-4 py-3">Advanced</td>
                  <td className="px-4 py-3">Tested through writing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Question Format</td>
                  <td className="px-4 py-3">MCQ</td>
                  <td className="px-4 py-3">MCQ</td>
                  <td className="px-4 py-3">Typed (essay + letter)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Negative Marking</td>
                  <td className="px-4 py-3">0.25</td>
                  <td className="px-4 py-3">0.25</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Key Topics</td>
                  <td className="px-4 py-3">RC, Cloze, Error Spotting</td>
                  <td className="px-4 py-3">RC, Error Spotting, Para Jumbles</td>
                  <td className="px-4 py-3">Essay writing, Formal/Informal Letter</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Counts in Merit?</td>
                  <td className="px-4 py-3">No (screening only)</td>
                  <td className="px-4 py-3">Yes (200 marks total)</td>
                  <td className="px-4 py-3">Yes (part of 200 marks)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'preparation-plan',
      title: "How to Prepare for SBI PO English Section: A Stage-by-Stage Plan",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Effective English preparation follows a clear progression — from building the foundation to exam-condition practice:
          </p>
          <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Grammar fundamentals.</strong><br />
              Cover subject-verb agreement, tenses, prepositions, articles, and pronoun usage from a standard grammar reference. Don't spend more than 2 weeks here — you're building a base, not becoming a linguist.
            </p>
            <p>
              <strong>Step 2 — Topic-wise tests on PrepBanker.</strong><br />
              Start with Cloze Test and Fill in the Blanks (easiest topics to improve quickly), then move to Error Spotting and Para Jumbles. Attempt 2–3 topic-wise tests per day. Review solutions after every test.
            </p>
            <p>
              <strong>Step 3 — Start daily newspaper reading.</strong><br />
              15 minutes on one editorial from The Hindu, Mint, or The Indian Express. Don't look up every unknown word — try to infer meaning from context first. This is exactly what SBI PO tests.
            </p>
            <p>
              <strong>Step 4 — Full 20-minute English sectional tests.</strong><br />
              Attempt the full 30-question section under the 20-minute timer. Track your section score and time usage. Identify which topic type is costing you the most marks.
            </p>
            <p>
              <strong>Step 5 — Mock test integration.</strong><br />
              English sectional practice should now run in parallel with full Prelims mock tests. Use sectional scores from mocks to validate whether your topic-wise improvements are translating.
            </p>
            <p>
              <strong>Step 6 — Descriptive practice.</strong><br />
              Once Prelims is cleared, add daily essay and letter writing — one of each, every day. Start with 250 words and work up to 350 for essays. Focus on structure (intro → 2–3 argument paragraphs → conclusion) before worrying about vocabulary.
            </p>
            <p>
              <strong>Step 7 — Maintain, don't overload.</strong><br />
              Attempt 1 English sectional test per day, but keep it to 20 minutes of practice and 15 minutes of review. No new topics. Build confidence, not anxiety.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'prepbanker-flow',
      title: "How to Use PrepBanker for SBI PO English Sectional Preparation",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            PrepBanker's English section practice is structured to take you from topic-level basics to exam-condition performance. Here is how to navigate it:
          </p>
          <div className="space-y-3 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Register and attempt a diagnostic English test.</strong><br />
              <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">Create your free PrepBanker account</a> and attempt a full 30-question English sectional test. Don't review anything beforehand. Your first test shows you your real starting level across all question types — RC, Cloze, Grammar, Para Jumbles — before any targeted practice.
            </p>
            <p>
              <strong>Step 2 — Use topic-wise tests to fix specific weaknesses.</strong><br />
              After the diagnostic, your score breakdown will show which topics cost you the most marks. If Error Spotting is your weak point, go to PrepBanker's Error Spotting quiz bank. Each quiz is 10–15 questions, timed, with detailed grammar explanations in the solutions. Fix one topic at a time rather than doing mixed practice before your fundamentals are solid.
            </p>
            <p>
              <strong>Step 3 — Progress to timed full-section tests.</strong><br />
              Once your topic accuracy improves, switch to PrepBanker's full 20-minute English sectional tests. These enforce the actual exam's time pressure and question mix. After each test, the analytics dashboard shows your time spent per question type — the most common insight students get is that they're allocating disproportionate time to RC and rushing grammar questions where they actually have higher accuracy.
            </p>
            <p>
              <strong>Step 4 — Track your trend, not just your score.</strong><br />
              PrepBanker's performance dashboard plots your English scores over time. A score of 18/30 on Day 1 that rises to 24/30 by Week 4 is exactly the trajectory to aim for. Watch your accuracy by topic alongside raw score — accuracy improvement in your previously weak topics is the real signal.
            </p>
            <p>
              <strong>Step 5 — Integrate with full mocks.</strong><br />
              Once your English sectional scores are consistently above 22/30, shift to attempting English as part of full Prelims mocks. The context of a full 60-minute test — where English is one of three time-pressured sections — changes how you manage the section. Your sectional practice has built the accuracy; full mock practice builds the composure.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'explore-more',
      title: "Also Explore on PrepBanker",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Strong English performance starts with sectional practice — these pages will complete your SBI PO 2026 preparation:
          </p>
          <p>
            Attempt a <Link href="/sbi-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">free full-length SBI PO Prelims Mock Test</Link> to see how your English sectional performance integrates with Quantitative Aptitude and Reasoning under the full 60-minute pressure — the section timer dynamic changes your strategy.
          </p>
          <p>
            Practise <Link href="/sbi-po/quant-sectional-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Quantitative Aptitude Sectional Tests</Link> to build the speed and accuracy in your other time-pressured Prelims section — strong QA performance takes the pressure off English, and vice versa.
          </p>
          <p>
            Explore <Link href="/sbi-po/reasoning-sectional-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Reasoning Sectional Tests</Link> — Reasoning and English are the two sections where consistency across attempts matters most; both reward structured practice over cramming.
          </p>
          <p>
            Build your vocabulary and reading speed with <Link href="/banking-awareness/quizzes" className="font-bold text-[#1B6EB5] hover:underline">Banking Awareness Chapter-wise Quizzes</Link> — Banking GA and English both benefit from regular reading of financial and economic content, and the quiz format tests your retention.
          </p>
          <p>
            Check the complete <Link href="/sbi-po/exam-pattern" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Exam Pattern and Syllabus 2026</Link> to see exactly how English fits into the full exam structure across Prelims, Mains Objective, and Mains Descriptive — so your preparation covers every level of the section.
          </p>
          <p>
            For Mains-specific preparation, the <Link href="/sbi-po/mains-english-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Mains English Sectional Test</Link> series covers the harder RC passages, advanced grammar formats, and Descriptive Paper prompts that appear in the second stage.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "How many questions are there in the SBI PO English section?",
      a: "In SBI PO Prelims, the English Language section has 30 questions for 30 marks, with a fixed time limit of 20 minutes. In SBI PO Mains, the English Language section has 35 questions for 40 marks, with a 40-minute time limit. Both stages carry negative marking of 0.25 marks per wrong answer."
    },
    {
      q: "What topics come in the SBI PO English section?",
      a: "SBI PO English Language section covers: Reading Comprehension (RC), Cloze Test, Error Spotting, Sentence Improvement or Correction, Para Jumbles (sentence rearrangement), Fill in the Blanks (single and double), Vocabulary-based questions (synonyms, antonyms, word usage), and occasionally Word Swap or Odd Sentence Out. RC consistently carries the highest weightage at 7–10 questions per Prelims paper."
    },
    {
      q: "What is the SBI PO English section cut off?",
      a: "The official SBI PO English sectional cut off is not published in advance. Based on historical trends, the General category English sectional cut off in Prelims has been approximately 7–9 marks out of 30. However, to remain competitive for the overall cut off, scoring 20+ in English (out of 30) is recommended — not just clearing the minimum threshold."
    },
    {
      q: "Is SBI PO English section tough for Hindi medium students?",
      a: "The SBI PO English section can be challenging for Hindi medium students, especially Reading Comprehension and vocabulary questions. However, with structured practice — starting from grammar basics, then cloze tests, then RC — it becomes manageable. Many Hindi medium students score 20+ in Prelims English within 2–3 months of consistent sectional test practice."
    },
    {
      q: "Are PrepBanker SBI PO English sectional tests free?",
      a: "Yes, PrepBanker offers free SBI PO English sectional tests on registration. Free access includes topic-wise tests with detailed solutions. Premium plans unlock the full sectional test series with timed full-section tests, additional PYQ-based sets, and cross-section performance analytics. Register at app.prepgrind.com/register to start for free."
    },
    {
      q: "How much time should I spend on the English section in SBI PO Prelims?",
      a: "The SBI PO Prelims English section has a strict 20-minute time limit. The recommended time split: Reading Comprehension (7–8 minutes for one passage), Cloze Test (3–4 minutes), Grammar-based questions (5–6 minutes), and Para Jumbles (2–3 minutes). Leaving 1 minute for review is advisable. Going over 20 minutes is not possible — the section auto-submits."
    },
    {
      q: "What is the difference between SBI PO Prelims English and Mains English?",
      a: "SBI PO Prelims English is 30 questions / 30 marks / 20 minutes — focused on speed and accuracy across standard question types. Mains English is 35 questions / 40 marks / 40 minutes — more conceptually demanding, with longer RC passages, more complex grammar questions, and occasionally new question formats. Mains also carries a separate 50-mark Descriptive Paper (essay and letter)."
    },
    {
      q: "How do I improve my Reading Comprehension score for SBI PO?",
      a: "To improve RC for SBI PO: (1) Read one editorial daily from The Hindu or Mint to build reading speed and vocabulary in context. (2) Practise skimming the passage first, then reading questions. (3) In the exam, answer vocabulary and inference questions first (fastest) before factual detail questions. (4) Attempt at least 3 RC passages per week in timed practice."
    },
    {
      q: "Which English topics should I prioritise for SBI PO 2026?",
      a: "Priority order for SBI PO English 2026: (1) Reading Comprehension — highest question count, 7–10 questions per paper. (2) Cloze Test — 5–7 questions, predictable format. (3) Error Spotting / Sentence Correction — 4–6 questions. (4) Para Jumbles — 4–5 questions. (5) Fill in the Blanks and Vocabulary — 3–5 questions. RC + Cloze alone can get you 12–17 marks."
    },
    {
      q: "How many sectional tests should I attempt for SBI PO English?",
      a: "Aim for at least 20–25 topic-wise English tests (5 per major topic) before switching to full-section timed tests. Then attempt 10–15 full 20-minute English sectional tests before Prelims. Quality of analysis matters — spending 15 minutes reviewing solutions after a 20-minute test is not optional; it's the core of improvement."
    }
  ]
};

