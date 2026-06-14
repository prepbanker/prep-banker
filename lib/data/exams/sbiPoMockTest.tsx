import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoMockTestContent: DetailSectionContent = {
  title: "SBI PO Mock Test 2026: Free Full-Length Prelims and Mains Tests",
  overview: "PrepBanker's SBI PO mock test series for 2026 includes full-length Prelims tests (100 questions, 60 minutes) and Mains tests (155 questions + Descriptive, 3 hours 30 minutes) — all matching the official SBI PO exam pattern. Free tests are available on registration. Each mock comes with section-wise analytics, question-level solutions, and an all-India percentile rank.",
  ctaText: "Attempt Free SBI PO Mock Test",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "SBI PO Mock Test 2026: Free Full-Length Tests Online",
  metaDescription: "Attempt free SBI PO mock tests 2026 on PrepBanker. Exam-pattern Prelims and Mains tests with detailed analytics, solutions, and rank. Start free today.",
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
                "item": "https://app.prepbanker.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "SBI PO",
                "item": "https://app.prepbanker.com/sbi-po"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SBI PO Mock Test 2026",
                "item": "https://app.prepbanker.com/sbi-po/mock-test"
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
            "name": "SBI PO Mock Test 2026: Free Full-Length Tests Online",
            "url": "https://app.prepbanker.com/sbi-po/mock-test",
            "description": "Attempt free SBI PO mock tests 2026 on PrepBanker — full-length Prelims and Mains tests with section-wise analytics, detailed solutions, and all-India rank.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "WebSite",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com"
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
            "name": "SBI PO Mock Test 2026",
            "url": "https://app.prepbanker.com/sbi-po/mock-test",
            "description": "Full-length SBI PO Prelims and Mains mock tests for 2026 exam preparation — 100 questions (Prelims) and 155 + Descriptive (Mains), with detailed solutions and section-wise performance analytics.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "educationalLevel": "Graduate",
            "about": {
              "@type": "Thing",
              "name": "SBI Probationary Officer Exam 2026"
            },
            "provider": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com"
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
            "name": "SBI PO 2026 Mock Test Series",
            "url": "https://app.prepbanker.com/sbi-po/mock-test",
            "description": "Complete SBI PO 2026 mock test series covering Prelims and Mains — exam-pattern tests, sectional tests, chapter-wise quizzes, and PYQ sets with detailed performance analytics.",
            "provider": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online",
              "inLanguage": "en-IN"
            },
            "datePublished": "2026-05-01",
            "educationalCredentialAwarded": "SBI PO Exam Preparation Certificate",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "description": "Free SBI PO mock tests available on registration"
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
                "name": "Are PrepBanker SBI PO mock tests free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PrepBanker offers free SBI PO mock tests on registration. The free tests include full-length Prelims mocks with section-wise analytics and detailed solutions. Premium plans unlock the full Prelims + Mains test series, sectional tests, chapter-wise quizzes, DPPs, and PYQ sets. Register at app.prepgrind.com/register to access free tests immediately."
                }
              },
              {
                "@type": "Question",
                "name": "How many mock tests should I attempt for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For SBI PO Prelims, attempt at least 15–20 full-length mocks before the exam. For Mains, 8–12 full-length mocks are sufficient if each is followed by thorough analysis. Quality of analysis matters more than quantity of attempts — a student who revises every mock deeply will outperform one who attempts 30 mocks without reviewing mistakes."
                }
              },
              {
                "@type": "Question",
                "name": "How similar are PrepBanker SBI PO mock tests to the actual exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PrepBanker SBI PO mocks replicate the actual exam's question distribution, difficulty gradient, sectional time limits, and interface as closely as possible. The question bank is built from PYQ analysis and follows SBI's documented exam pattern. No mock series can guarantee 100% replication, but PrepBanker's mocks are designed to produce reliable score predictability."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best time to start SBI PO mock tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start full-length mock tests after completing at least 70% of your Prelims syllabus — typically 6–8 weeks before the exam. Starting too early wastes a mock; starting too late leaves no time to apply learnings. Sectional tests and chapter quizzes can start from Day 1 of preparation, before you're ready for full mocks."
                }
              },
              {
                "@type": "Question",
                "name": "How do I analyse my SBI PO mock test results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After every mock, review: (1) section-wise accuracy — where did you drop marks?, (2) time spent per question and per section, (3) types of errors — silly mistake, concept gap, or never studied?, (4) topics where your accuracy is below 60%, and (5) questions you skipped vs attempted. Spend 1.5x the test time on analysis for every mock you attempt."
                }
              },
              {
                "@type": "Question",
                "name": "Is one mock test per day enough for SBI PO preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No — one full-length mock per day is too many unless it's the final 2 weeks before the exam. Attempting a full mock takes 1 hour; analysing it properly takes 1.5–2 hours. Daily mocks leave no time for concept revision, which is what actually improves your score. 3–4 mocks per week, each followed by deep analysis, is the optimal cadence."
                }
              },
              {
                "@type": "Question",
                "name": "Which is better for SBI PO mock tests — PrepBanker or Testbook?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both platforms offer SBI PO mocks, but PrepBanker is built exclusively for banking exams — which means tighter calibration of question difficulty, banking-specific GA coverage, and detailed solution explanations tailored to this exam's patterns. The best approach is to try PrepBanker's free mock and evaluate the explanation quality and interface yourself before committing to a paid plan."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to attempt SBI PO Mains mock tests separately?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. SBI PO Mains is fundamentally different from Prelims — longer questions, higher difficulty, a 3-hour duration, and a Descriptive Paper component. Students who only practise Prelims mocks often struggle significantly in Mains. Start Mains-level practice after Prelims result, aiming for at least 8–10 full-length Mains mocks before the actual exam."
                }
              },
              {
                "@type": "Question",
                "name": "What score in SBI PO mock tests means I'm ready for the actual exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Consistently scoring 70+ out of 100 in Prelims mocks (with at least 5 mocks at that level) suggests you're in the safe zone. For Mains, crossing 130+ out of 200 on the objective paper consistently is a strong indicator. More importantly, watch your percentile rank — a score that puts you in the top 15–20% of mock takers is a good readiness signal."
                }
              },
              {
                "@type": "Question",
                "name": "Can SBI PO mock tests be attempted on mobile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PrepBanker's mock tests are mobile-responsive and can be attempted on any smartphone or tablet browser. However, for SBI PO Mains practice — especially the Descriptive Paper — a laptop or desktop is strongly recommended. The actual SBI PO exam is conducted on desktop computers, so at least some of your mocks should be attempted on a similar setup."
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
            "headline": "SBI PO Mock Test 2026: Free Full-Length Tests Online",
            "url": "https://app.prepbanker.com/sbi-po/mock-test",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "logo": {
                "@type": "ImageObject",
                "url": "https://app.prepbanker.com/logo.png"
              }
            },
            "description": "Complete guide to SBI PO mock tests 2026 — how many to attempt, how to analyse results, free vs paid options, and platform-specific guidance for Prelims and Mains.",
            "mainEntityOfPage": "https://app.prepbanker.com/sbi-po/mock-test",
            "keywords": "SBI PO mock test 2026, free SBI PO mock test, SBI PO Prelims mock, SBI PO Mains mock, best mock test SBI PO"
          })
        }}
      />
    </>
  ),
  subsections: [
    {
      id: 'quick-reference',
      title: "SBI PO 2026 — Mock Test Quick Reference",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary Specs">
            <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 my-2 font-normal">
              <li><strong>Exam:</strong> State Bank of India Probationary Officer (SBI PO) 2026</li>
              <li><strong>Prelims:</strong> 100 Questions | 100 Marks | 60 Minutes | 3 Sections</li>
              <li><strong>Mains:</strong> 155 Questions (Objective) + 50 Marks (Descriptive) | 3.5 Hours | 4 Sections</li>
              <li><strong>Negative Marking:</strong> 0.25 per wrong answer (both stages)</li>
              <li><strong>Sectional Time Limits:</strong> Yes — fixed per section in both Prelims and Mains</li>
              <li><strong>PrepBanker Free Tests:</strong> Available on registration</li>
              <li><strong>Analytics:</strong> Section-wise score, time-per-question, topic accuracy, percentile rank</li>
              <li><strong>Difficulty Calibration:</strong> Based on SBI PO PYQs (2018–2025)</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'importance-of-mocks',
      title: "Why Mock Tests Matter More Than Any Other Preparation Resource",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Most students treat mock tests as something you do "after you've studied everything." That instinct is backwards.
          </p>
          <p>
            Mock tests do three things that notes and videos cannot:
          </p>
          <p>
            <strong>First, they show you where you actually stand</strong> — not where you think you stand. The gap between perceived and actual performance is one of the biggest reasons students are surprised on exam day. A mock test closes that gap brutally and usefully.
          </p>
          <p>
            <strong>Second, they build exam temperament.</strong> SBI PO Prelims runs at 1 minute per question across three sections with fixed time splits. No amount of topic study builds the habit of moving on when you're stuck, managing the clock, and staying composed through a bad patch. Only timed practice does that.
          </p>
          <p>
            <strong>Third, they generate data about your weak areas.</strong> After 10 mocks, patterns emerge. If you're losing 8–10 marks every time in the last 15 minutes of Reasoning, that's not bad luck — it's a pacing issue, and it's fixable. But you'd never know it without the data.
          </p>
          <p>
            Over <strong>20 lakh students</strong> appear for SBI PO each year for approximately <strong>600–2,000 vacancies</strong>. At that selection ratio, the difference between clearing and not clearing is often 3–5 marks — equivalent to 2–3 questions. Mock test practice is where those marks are found and secured.
          </p>
        </div>
      )
    },
    {
      id: 'mock-pattern',
      title: "What Does the SBI PO 2026 Mock Test Pattern Look Like?",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">SBI PO Prelims Mock Test Pattern</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Section</th>
                    <th className="px-4 py-2.5">No. of Questions</th>
                    <th className="px-4 py-2.5">Maximum Marks</th>
                    <th className="px-4 py-2.5">Time Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">30</td>
                    <td className="px-4 py-3">20 minutes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Quantitative Aptitude</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">20 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reasoning Ability</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">20 minutes</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-slate-900">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">60 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-550 leading-relaxed font-normal">
              <strong>Key feature:</strong> Each section has a strict, independent time limit. You cannot transfer unused time between sections. Practising within these time constraints is only possible through mock tests — it cannot be replicated by solving questions from a book.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">SBI PO Mains Mock Test Pattern</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Section</th>
                    <th className="px-4 py-2.5">No. of Questions</th>
                    <th className="px-4 py-2.5">Maximum Marks</th>
                    <th className="px-4 py-2.5">Time Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reasoning & Computer Aptitude</td>
                    <td className="px-4 py-3">45</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">60 minutes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Data Analysis & Interpretation</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">45 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">General/Economy/Banking Awareness</td>
                    <td className="px-4 py-3">40</td>
                    <td className="px-4 py-3">40</td>
                    <td className="px-4 py-3">35 minutes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                    <td className="px-4 py-3">35</td>
                    <td className="px-4 py-3">40</td>
                    <td className="px-4 py-3">40 minutes</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-slate-900">
                    <td className="px-4 py-3">Objective Total</td>
                    <td className="px-4 py-3">155</td>
                    <td className="px-4 py-3">200</td>
                    <td className="px-4 py-3">180 minutes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Descriptive (Letter + Essay)</td>
                    <td className="px-4 py-3">2 questions</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">30 minutes</td>
                  </tr>
                  <tr className="bg-slate-200 font-bold text-slate-900">
                    <td className="px-4 py-3">Grand Total</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">250</td>
                    <td className="px-4 py-3">210 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-550 leading-relaxed font-normal">
              The jump in difficulty, question complexity, and duration from Prelims to Mains is substantial. Students who skip Mains mock practice almost always report being overwhelmed by the actual exam format.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'mock-volume',
      title: "How Many Mock Tests Should You Attempt for SBI PO 2026?",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            There is no universal answer — it depends on your current preparation level and how far the exam is. But here is a practical framework that works:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h5 className="font-bold text-[#1B6EB5] text-sm sm:text-base mb-2">For SBI PO Prelims</h5>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-650">
                <li><strong>6–8 weeks out:</strong> 1–2 mocks per week, heavy analysis after each</li>
                <li><strong>4–6 weeks out:</strong> 2–3 mocks per week, still spending 1.5x test time on analysis</li>
                <li><strong>Final 2 weeks:</strong> Up to 1 mock per day, lighter analysis, more focus on maintaining speed and accuracy</li>
                <li><strong>Total recommended:</strong> 15–20 full-length Prelims mocks</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h5 className="font-bold text-[#1B6EB5] text-sm sm:text-base mb-2">For SBI PO Mains</h5>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-655">
                <li><strong>4–6 weeks post-Prelims result:</strong> 2 mocks per week</li>
                <li><strong>Final 2 weeks before Mains:</strong> 3–4 mocks per week</li>
                <li><strong>Total recommended:</strong> 8–12 full-length Mains mocks (including Descriptive practice)</li>
              </ul>
            </div>
          </div>

          <HighlightBox type="info" title="Pro Tip: Diagnostic vs Performance">
            The biggest mistake serious aspirants make is treating mock tests like a performance event rather than a diagnostic tool. Your mock score matters far less than what you learn from it. A student who scores 58/100 in a mock and spends 90 minutes analysing every error will improve faster than one who scores 72/100 and moves on without review.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'test-types',
      title: "What Types of Tests Does PrepBanker Offer for SBI PO 2026?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            PrepBanker's SBI PO test series is structured to support every phase of preparation:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Test Type</th>
                  <th className="px-4 py-2.5">What It Covers</th>
                  <th className="px-4 py-2.5">Best Used When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Full-Length Prelims Mock</td>
                  <td className="px-4 py-3">All 3 sections, 100 Qs, 60 min, with rank</td>
                  <td className="px-4 py-3">6–8 weeks before Prelims</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Full-Length Mains Mock</td>
                  <td className="px-4 py-3">All 4 sections + Descriptive, 3.5 hrs</td>
                  <td className="px-4 py-3">After Prelims result</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Sectional Tests (Prelims)</td>
                  <td className="px-4 py-3">One section at a time — QA, Reasoning, or English</td>
                  <td className="px-4 py-3">Daily practice, foundation phase</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Sectional Tests (Mains)</td>
                  <td className="px-4 py-3">DI, Reasoning & Computer, GA, English</td>
                  <td className="px-4 py-3">Targeted Mains prep</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Chapter-wise Quizzes</td>
                  <td className="px-4 py-3">Single topic (e.g., Syllogisms, Number Series)</td>
                  <td className="px-4 py-3">Topic revision, skill building</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">DPP (Daily Practice Problems)</td>
                  <td className="px-4 py-3">Mixed topic daily set, 15–20 questions</td>
                  <td className="px-4 py-3">Consistent daily practice</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">PYQ Sets</td>
                  <td className="px-4 py-3">Previous year questions (2018–2025)</td>
                  <td className="px-4 py-3">Pattern analysis, accuracy building</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'mock-analysis',
      title: "How to Analyse a Mock Test: The 6-Step Process That Actually Works",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Attempting a mock test is the easy part. The analysis is where preparation actually happens. Here is a structured approach:
          </p>
          <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Record your raw score and section-wise breakdown.</strong><br />
              Before doing anything else, note: total attempted, total correct, total wrong, and net score for each section. Do this immediately after the test so you remember your exam experience clearly.
            </p>
            <p>
              <strong>Step 2 — Go through every wrong answer — without skipping.</strong><br />
              For each wrong answer, identify the reason: was it a concept you never studied, a concept you know but applied wrong, or a silly mistake (misread, miscalculation)? These three error types require different fixes.
            </p>
            <p>
              <strong>Step 3 — Go through every question you skipped.</strong><br />
              Skipping questions is a strategy, but you need to know if you're skipping solvable questions out of fear or genuinely hard questions out of good judgment. Track this pattern across 3–4 mocks.
            </p>
            <p>
              <strong>Step 4 — Check your time splits.</strong><br />
              PrepBanker's analytics show time-per-question across the test. Identify if you're spending too long on early questions (which compresses time for later, often easier ones), or if any section consistently runs over its allocated time.
            </p>
            <p>
              <strong>Step 5 — Build a personal error log.</strong><br />
              Keep a notebook or document where you write down question types you consistently get wrong. After 5–6 mocks, this log becomes your most targeted revision resource — far more useful than re-reading chapters.
            </p>
            <p>
              <strong>Step 6 — Set one specific improvement goal for the next mock.</strong><br />
              Not "score higher" — something concrete like "spend no more than 90 seconds on any single Reasoning question" or "attempt all 30 English questions before time is up." Specific, behavioural targets produce measurable improvement.
            </p>
          </div>

          <HighlightBox type="success" title="Pro Tip: Colour-code errors">
            Colour-code your wrong answers: Red = concept gap (needs study), Yellow = application error (needs practice), Green = silly mistake (needs attention). After 5 mocks, if you still have mostly Red, your study plan needs restructuring. If you have mostly Green, your content knowledge is solid — you need to slow down and be more careful, not study more.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'platform-comparison',
      title: "Choosing Between SBI PO Mock Test Platforms: What to Look For",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Not all mock test platforms are equal. Here is what actually matters when evaluating one:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Feature</th>
                  <th className="px-4 py-2.5">Why It Matters</th>
                  <th className="px-4 py-2.5">PrepBanker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Exam-accurate pattern</td>
                  <td className="px-4 py-3">Wrong pattern = false confidence</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Matches SBI PO official pattern</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Sectional time enforcement</td>
                  <td className="px-4 py-3">Real exam has hard time limits</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Strict sectional timers</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Detailed solutions</td>
                  <td className="px-4 py-3">Learning happens in solutions, not scores</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Step-by-step with shortcuts</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Section-wise analytics</td>
                  <td className="px-4 py-3">You need to know where you lost marks</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Per-section accuracy + time</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">All-India rank/percentile</td>
                  <td className="px-4 py-3">Tells you where you stand vs real competition</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Included in every mock</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains mock with Descriptive</td>
                  <td className="px-4 py-3">Prelims-only platforms leave you underprepared</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Full Mains including essay prompt</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Banking-specific GA questions</td>
                  <td className="px-4 py-3">Generic GA misses banking current affairs</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Banking + Economy focused</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Free tests available</td>
                  <td className="px-4 py-3">You should evaluate before paying</td>
                  <td className="px-4 py-3 text-[#1B6EB5] font-semibold">✓ Free tests on registration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'prepbanker-flow',
      title: "How to Use PrepBanker for SBI PO Mock Test Preparation",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            PrepBanker is built specifically for banking exam aspirants. Here is the practical flow from registration to result improvement:
          </p>
          <div className="space-y-3 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Register and attempt the first free mock.</strong><br />
              <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">Create your account on PrepBanker</a>. Don't wait until you've studied everything. The first mock is a diagnostic — it shows you your starting point across all three Prelims sections. Your score right now is irrelevant; your section-wise breakdown is everything.
            </p>
            <p>
              <strong>Step 2 — Use sectional tests to fix your weak areas.</strong><br />
              After your diagnostic mock, identify your weakest section. Switch to PrepBanker's sectional tests — 20–30 question sets focussed on one section at a time. These are faster to attempt, allow deeper topic focus, and build the accuracy habit before full mocks.
            </p>
            <p>
              <strong>Step 3 — Return to full mocks on a schedule.</strong><br />
              Once your basics are solid (typically 4–6 weeks into preparation), move to full-length mock tests 2–3 times per week. PrepBanker's test interface mirrors the SBI PO exam — independent sectional timers, same question format, no calculator. Each completed mock populates your analytics dashboard with score trends, time analysis, and topic-wise accuracy.
            </p>
            <p>
              <strong>Step 4 — Use the error log feature.</strong><br />
              PrepBanker's solutions section lets you bookmark questions you got wrong or found difficult. Build your review queue and revisit these questions every 3–4 days. Repetition of your specific error types is the fastest route to accuracy improvement.
            </p>
            <p>
              <strong>Step 5 — Switch to Mains mocks after Prelims.</strong><br />
              PrepBanker's Mains mock series includes the full objective paper plus a Descriptive prompt. Practice typing your essays and letters under timed conditions from your first Mains mock — the Descriptive Paper is computer-typed in the actual exam, and keyboard speed + coherent structure under time pressure needs practice.
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
            SBI PO mock tests are the core — these related resources on PrepBanker will make sure every dimension of your preparation is covered:
          </p>
          <p>
            Read the complete <Link href="/sbi-po/selection-process" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Selection Process 2026</Link> to understand what happens at Prelims, Mains, and the Group Exercise + Interview — so your mock test practice is aligned with what each stage actually demands.
          </p>
          <p>
            Check the <Link href="/sbi-po/exam-pattern" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Exam Pattern and Syllabus 2026</Link> for a full section-wise and topic-wise breakdown — the most effective mock test practice is targeted practice, and that requires knowing the syllabus precisely.
          </p>
          <p>
            Explore <Link href="/sbi-po/previous-year-papers" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Previous Year Question Papers (2018–2025)</Link> — attempting PYQs alongside mocks shows you how real exam questions are worded, which is different from how most books phrase problems.
          </p>
          <p>
            Sharpen your weakest section with <Link href="/banking-awareness/quizzes" className="font-bold text-[#1B6EB5] hover:underline">Banking Awareness Chapter-wise Quizzes</Link> — GA is the section most students underinvest in and is often the difference-maker in Mains cut-offs.
          </p>
          <p>
            If you're also preparing for IBPS, the <Link href="/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mock Test 2026</Link> series follows the same structured format — attempting both helps you benchmark your preparation across two major banking exams simultaneously.
          </p>
          <p>
            Attempt <Link href="/sbi-clerk/mock-test" className="font-bold text-[#1B6EB5] hover:underline">SBI Clerk Mock Tests</Link> to build speed and accuracy at a slightly lower difficulty level — useful early in the cycle before you're ready for full SBI PO mocks.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "Are PrepBanker SBI PO mock tests free?",
      a: "Yes, PrepBanker offers free SBI PO mock tests on registration — no credit card required. Free tests include full-length Prelims mocks with section-wise analytics and detailed solutions. Premium plans unlock the complete Prelims + Mains series, sectional tests, chapter quizzes, DPPs, and PYQ sets. Register here to start for free immediately."
    },
    {
      q: "How many mock tests should I attempt for SBI PO 2026?",
      a: "For Prelims, aim for 15–20 full-length mocks before the exam. For Mains, 8–12 mocks are sufficient if each is analysed thoroughly. Quality matters more than quantity — a student who reviews every mock for 90 minutes will consistently outperform one who attempts 30 mocks without analysis. Sectional tests and chapter quizzes can run in parallel throughout."
    },
    {
      q: "How similar are PrepBanker SBI PO mock tests to the actual exam?",
      a: "PrepBanker's SBI PO mocks are built on PYQ analysis (2018–2025) and calibrated to match the official exam's question distribution, difficulty gradient, and sectional time enforcement. The test interface mirrors the actual exam format. While no mock series can replicate the exact exam questions, PrepBanker's mocks are specifically designed to produce reliable score predictability within 5–8 marks of actual performance."
    },
    {
      q: "What is the best time to start SBI PO mock tests?",
      a: "Start full-length mocks after completing roughly 70% of your Prelims syllabus — typically 6–8 weeks before the exam. Starting earlier wastes a mock before your knowledge base is solid. Sectional tests and chapter-wise quizzes can and should start from Day 1 of preparation. The first mock should feel hard — that discomfort is the information you need."
    },
    {
      q: "How do I analyse my SBI PO mock test result properly?",
      a: "After every mock: (1) record section-wise score and accuracy, (2) review every wrong answer and classify the error type — concept gap, wrong application, or silly mistake, (3) review every skipped question, (4) check your time splits per section using the analytics dashboard, (5) identify 1–2 specific topics to revise before your next mock. Spend at least 60–90 minutes on post-mock analysis."
    },
    {
      q: "Is one SBI PO mock test per day enough?",
      a: "One full mock per day is too many except in the final 10 days. Proper analysis of one mock takes 1.5–2 hours — doing a mock daily leaves no time for revision. The optimal rhythm is 3–4 mocks per week during the intensive phase, each followed by thorough review. In the final week, you can increase frequency, with lighter analysis focused on maintaining speed and confidence."
    },
    {
      q: "Which is better for SBI PO mock tests — PrepBanker or Testbook?",
      a: "Both offer SBI PO content, but PrepBanker is designed exclusively for banking exams — meaning the difficulty calibration, banking awareness question quality, and solution explanation depth are specifically tuned to SBI PO patterns. Try PrepBanker's free mock first and evaluate the quality of solutions and post-mock analytics before deciding. Exam-specific calibration matters far more than platform size."
    },
    {
      q: "Do I need separate Mains mock tests or will Prelims practice carry over?",
      a: "Mains mock tests are essential and cannot be substituted by Prelims practice. SBI PO Mains has a 3.5-hour duration, significantly harder Reasoning puzzles and DI sets, a Banking Awareness section, and a 30-minute Descriptive Paper — none of which appear in Prelims. Students who skip Mains mocks consistently underperform in the actual Mains exam. Start Mains mocks immediately after Prelims results are declared."
    },
    {
      q: "What score in SBI PO mock tests means I'm ready?",
      a: "Consistently scoring 70+ out of 100 in Prelims mocks (across at least 5 consecutive mocks) indicates exam readiness at the Prelims stage. For Mains, crossing 130+ out of 200 on the objective paper consistently is a strong signal. More reliable than the absolute score is your percentile rank — placing in the top 15–20% of mock takers in a large-scale test series is a solid readiness indicator."
    },
    {
      q: "Can I attempt SBI PO mock tests on mobile?",
      a: "Yes, PrepBanker's mocks are mobile-responsive and work on any smartphone browser. For Prelims practice, mobile is perfectly usable. For Mains mock tests — especially Descriptive Paper practice — a laptop or desktop is strongly recommended, since the actual SBI PO exam is conducted on a computer. At minimum, do 4–5 Prelims mocks on a desktop setup to build familiarity with the actual exam environment."
    },
    {
      q: "How is PrepBanker's SBI PO mock test series structured — how many tests are included?",
      a: "PrepBanker's SBI PO series includes full-length Prelims mocks, full-length Mains mocks (with Descriptive), section-wise tests for all Prelims and Mains sections, chapter-wise quizzes for every topic, daily DPPs, and PYQ sets from 2018–2025. Free tests are available on registration; the complete series is accessible under PrepBanker's paid plan. Check the current test count on the platform as it updates regularly."
    }
  ]
};
