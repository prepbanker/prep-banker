import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const ibpsPoQuantSectionalContent: DetailSectionContent = {
  title: "IBPS PO Quantitative Aptitude Test 2026 – Attempt Free Sectional Mock",
  overview: "The IBPS PO Quantitative Aptitude section in Prelims has 35 questions worth 35 marks, to be completed in exactly 20 minutes. This page gives you free sectional mock tests built on the latest 2026 exam pattern, chapter-wise practice, PYQ sets, and a topic-wise preparation strategy used by students who've cleared the cutoff.",
  ctaText: "Start Free IBPS PO Quantitative Aptitude Test",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "IBPS PO Quantitative Aptitude Test 2026 – Free Sectional Mock",
  metaDescription: "Attempt free IBPS PO Quantitative Aptitude sectional tests for 2026. 35 questions, 20 minutes, real exam pattern. Identify weak topics and improve your score.",
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
                "name": "Quantitative Aptitude Test",
                "item": "https://prepbanker.com/ibps-po/quantitative-aptitude-test"
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
            "name": "IBPS PO Quantitative Aptitude Test 2026 – Free Sectional Mock",
            "url": "https://prepbanker.com/ibps-po/quantitative-aptitude-test",
            "description": "Attempt free IBPS PO Quantitative Aptitude sectional tests for 2026. 35 questions, 20 minutes, real exam pattern. Identify weak topics and improve your score.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "inLanguage": "en-IN",
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://prepbanker.com/logo.png"
              }
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
            "name": "IBPS PO Quantitative Aptitude Sectional Test 2026",
            "description": "A full-length sectional mock test for IBPS PO Prelims Quantitative Aptitude section — 35 questions in 20 minutes, modeled on the latest IBPS exam pattern.",
            "url": "https://prepbanker.com/ibps-po/quantitative-aptitude-test",
            "educationalLevel": "Undergraduate",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "about": {
              "@type": "Thing",
              "name": "IBPS PO Quantitative Aptitude"
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
            "name": "IBPS PO Quantitative Aptitude Complete Preparation 2026",
            "description": "Comprehensive preparation for IBPS PO Quantitative Aptitude covering Prelims and Mains — sectional tests, chapter-wise quizzes, DPPs, and PYQ practice sets.",
            "url": "https://prepbanker.com/ibps-po/quantitative-aptitude-test",
            "provider": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            },
            "educationalLevel": "Competitive Exam",
            "inLanguage": "en-IN",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online",
              "startDate": "2026-05-01"
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
                "name": "How many questions are there in IBPS PO Quantitative Aptitude?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In IBPS PO Prelims, the Quantitative Aptitude section has 35 questions for 35 marks, to be attempted in 20 minutes. In IBPS PO Mains, the Data Analysis & Interpretation section has 35 questions for 60 marks with a 45-minute time limit."
                }
              },
              {
                "@type": "Question",
                "name": "What are the most important topics for IBPS PO Quant 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The highest-weightage topics for IBPS PO Quant Prelims are Data Interpretation (8–10 questions), Simplification/Approximation (5–7 questions), Number Series (5 questions), Quadratic Equations (5 questions), and Arithmetic Word Problems including Time & Work, Profit & Loss, SI & CI."
                }
              },
              {
                "@type": "Question",
                "name": "Is IBPS PO Quant free on PrepBanker?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker offers free access to select IBPS PO Quantitative Aptitude sectional tests. Full test series access, including all DPPs, chapter-wise quizzes, and PYQ sets, is available after registration at app.prepgrind.com."
                }
              },
              {
                "@type": "Question",
                "name": "What was the IBPS PO Quant cut-off in Prelims 2024?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The IBPS PO Prelims 2024 sectional cut-off for Quantitative Aptitude was approximately 7.25–10.50 marks (varies by category and state). The overall Prelims cut-off ranged from 56.25 to 66.75 out of 100 across general category candidates in different states."
                }
              },
              {
                "@type": "Question",
                "name": "How is IBPS PO Quant different from SBI PO Quant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IBPS PO Quant is generally considered slightly more predictable in its pattern than SBI PO Quant. SBI PO has introduced puzzle-based DI and unconventional arithmetic in recent years. IBPS PO tends to follow a more established format, though the difficulty level has been rising each year."
                }
              },
              {
                "@type": "Question",
                "name": "How much time should I spend on IBPS PO Quant in Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each section in IBPS PO Prelims has a dedicated 20-minute timer — you cannot transfer time between sections. Within the 20 minutes, the recommended split is: 2–3 minutes on Simplification, 4–5 minutes on Number Series and Quadratic Equations, and 8–10 minutes on Data Interpretation sets."
                }
              },
              {
                "@type": "Question",
                "name": "How many mock tests does PrepBanker have for IBPS PO Quant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PrepBanker offers multiple sectional tests for IBPS PO Quantitative Aptitude, including topic-wise chapter tests, full sectional mocks, DPPs, and PYQ sets from previous IBPS PO exams. The exact count of tests is updated regularly as new tests are added each cycle."
                }
              },
              {
                "@type": "Question",
                "name": "Can I attempt IBPS PO Quant test on mobile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker's test interface is fully mobile-responsive. You can attempt Quantitative Aptitude sectional tests, review solutions, and check your performance analytics on any smartphone browser without needing to install an app."
                }
              },
              {
                "@type": "Question",
                "name": "What score is considered good in IBPS PO Quant Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Scoring 22–28 out of 35 in IBPS PO Quant Prelims is considered competitive. Consistently scoring above 25 puts you comfortably above the sectional cut-off in most states. On PrepBanker mock tests, compare your score against the 70th percentile of all test-takers as a performance benchmark."
                }
              },
              {
                "@type": "Question",
                "name": "Does IBPS PO have negative marking in Quant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. IBPS PO has a penalty of 0.25 marks for every wrong answer in both Prelims and Mains. There is no negative marking for unattempted questions. In Quantitative Aptitude, avoid guessing on complex DI questions — skip and revisit if time permits."
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
      id: 'quick-facts',
      title: "Quick Facts — IBPS PO Quantitative Aptitude 2026",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary Specifications">
            <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
              <li><strong>Exam Name:</strong> IBPS PO (Institute of Banking Personnel Selection — Probationary Officer)</li>
              <li><strong>Conducting Body:</strong> Institute of Banking Personnel Selection (IBPS)</li>
              <li><strong>Expected Vacancies (2026):</strong> ~4,000–5,000 (IBPS PO 2025 had 4,455 vacancies)</li>
              <li><strong>Notification Expected:</strong> July–August 2026</li>
              <li><strong>Prelims Exam Date (Expected):</strong> October 2026</li>
              <li><strong>Section:</strong> Quantitative Aptitude (Prelims) | Data Analysis & Interpretation (Mains)</li>
              <li><strong>Questions (Prelims):</strong> 35 | <strong>Marks:</strong> 35 | <strong>Time:</strong> 20 minutes</li>
              <li><strong>Questions (Mains):</strong> 35 | <strong>Marks:</strong> 60 | <strong>Time:</strong> 45 minutes</li>
              <li><strong>Negative Marking:</strong> -0.25 per wrong answer</li>
              <li><strong>Mode:</strong> Online (CBT)</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'section-overview',
      title: "What Does the IBPS PO Quantitative Aptitude Section Actually Look Like?",
      content: (
        <div className="space-y-4 text-slate-605 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Most students approach the Quant section with anxiety and leave with regret — not because it's too hard, but because they didn't know the structure well enough to pace themselves. Let's fix that.
          </p>
          <p>
            IBPS PO Prelims runs three sections in sequence, each with its own dedicated timer. You get exactly 20 minutes for Quantitative Aptitude. Once the timer for that section ends, you cannot go back.
          </p>

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Prelims Section Breakdown</h4>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Section</th>
                  <th className="px-4 py-2.5">Questions</th>
                  <th className="px-4 py-2.5">Marks</th>
                  <th className="px-4 py-2.5">Time</th>
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

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Mains Section Breakdown</h4>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Section</th>
                  <th className="px-4 py-2.5">Questions</th>
                  <th className="px-4 py-2.5">Marks</th>
                  <th className="px-4 py-2.5">Time</th>
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
                  <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                  <td className="px-4 py-3">35</td>
                  <td className="px-4 py-3">40</td>
                  <td className="px-4 py-3">40 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Data Analysis & Interpretation</td>
                  <td className="px-4 py-3">35</td>
                  <td className="px-4 py-3">60</td>
                  <td className="px-4 py-3">45 minutes</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">General, Economy & Banking Awareness</td>
                  <td className="px-4 py-3">40</td>
                  <td className="px-4 py-3">40</td>
                  <td className="px-4 py-3">35 minutes</td>
                </tr>
                <tr className="bg-slate-100 font-bold text-slate-900">
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3">155</td>
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">3 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The Quant section in Mains becomes Data Analysis & Interpretation — the same core skills, but heavier on complex multi-set DI, caselet-based problems, and higher-order arithmetic.
          </p>
        </div>
      )
    },
    {
      id: 'topic-weightage',
      title: "Which Topics Carry the Most Weight in IBPS PO Quant 2026?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            Based on the last five IBPS PO cycles, the topic distribution in Quantitative Aptitude Prelims has been remarkably consistent. Here's the breakdown every serious aspirant should memorize:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Topic</th>
                  <th className="px-4 py-2.5">Avg. Questions</th>
                  <th className="px-4 py-2.5">Marks</th>
                  <th className="px-4 py-2.5">Difficulty</th>
                  <th className="px-4 py-2.5">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Data Interpretation (Tables, Bar, Pie, Line)</td>
                  <td className="px-4 py-3">8–10</td>
                  <td className="px-4 py-3">8–10</td>
                  <td className="px-4 py-3">Medium–High</td>
                  <td className="px-4 py-3 text-red-600 font-bold">Critical</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Simplification / Approximation</td>
                  <td className="px-4 py-3">5–7</td>
                  <td className="px-4 py-3">5–7</td>
                  <td className="px-4 py-3">Easy–Medium</td>
                  <td className="px-4 py-3 text-red-600 font-bold">Critical</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Number Series (Missing/Wrong)</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3 text-red-600 font-bold">Critical</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Quadratic Equations</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">Easy–Medium</td>
                  <td className="px-4 py-3 text-amber-600 font-bold">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Arithmetic Word Problems (Time-Work, CI/SI, P&L, Ratio)</td>
                  <td className="px-4 py-3">6–8</td>
                  <td className="px-4 py-3">6–8</td>
                  <td className="px-4 py-3">Medium–High</td>
                  <td className="px-4 py-3 text-amber-600 font-bold">High</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Miscellaneous (Mensuration, Permutation, Probability)</td>
                  <td className="px-4 py-3">2–4</td>
                  <td className="px-4 py-3">2–4</td>
                  <td className="px-4 py-3">High</td>
                  <td className="px-4 py-3 text-green-600 font-bold">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
            Data Interpretation alone can make or break your Prelims attempt. Students who master DI — especially Tabular DI and Mixed Graph DI — can secure 8–10 marks in 8–10 minutes, leaving the remaining 10 minutes for the easier topics.
          </p>
          <HighlightBox type="info" title="Pro Tip: Attack Order">
            Do not start the Quant section with DI. Open with Simplification and Quadratic Equations to build momentum and bank quick marks first. Attempt DI second, when your calculation speed is warmed up. This sequencing alone can add 3–5 marks to your score.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'cutoffs-history',
      title: "IBPS PO Quant Prelims Cut-Off: What Score Do You Actually Need?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-605 text-sm sm:text-[15px] leading-relaxed">
            Here are the verified sectional and overall cut-offs from recent IBPS PO cycles:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Year</th>
                  <th className="px-4 py-2.5">Sectional Cut-Off (Quant)</th>
                  <th className="px-4 py-2.5">Overall Cut-Off (General)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-805">2024</td>
                  <td className="px-4 py-3">7.25 – 10.50</td>
                  <td className="px-4 py-3">56.25 – 66.75</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-805">2023</td>
                  <td className="px-4 py-3">6.50 – 9.75</td>
                  <td className="px-4 py-3">52.00 – 63.50</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-805">2022</td>
                  <td className="px-4 py-3">7.00 – 10.25</td>
                  <td className="px-4 py-3">54.75 – 65.00</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-805">2021</td>
                  <td className="px-4 py-3">6.75 – 9.50</td>
                  <td className="px-4 py-3">50.00 – 62.25</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-805">2020</td>
                  <td className="px-4 py-3">5.75 – 8.50</td>
                  <td className="px-4 py-3">46.00 – 58.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-550 leading-relaxed font-normal">
            *(Cut-offs vary by state and category. OBC, SC, ST cut-offs are lower. Source: IBPS official result notifications.)*
          </p>
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
            Two things to note here. First, the sectional cut-off for Quant looks deceptively low — but the actual competition is in the overall cut-off. Second, if you're targeting Mains, scoring between 22–28 in Quant keeps you comfortably in the race. Anything above 28 is genuinely competitive.
          </p>
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
            Over 13 lakh students appeared for IBPS PO Prelims in 2024. With 4,455 vacancies, the selection ratio is roughly 1 in 30 — which means every mark in Quant counts.
          </p>
        </div>
      )
    },
    {
      id: 'preparation-strategy',
      title: "How to Prepare for IBPS PO Quantitative Aptitude: A Topic-First Strategy",
      content: (
        <div className="space-y-4">
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
            Generic advice like &quot;practice daily&quot; doesn't help when you have 45 days left. Here's a structured approach that prioritizes ROI — the topics that give you the most marks per hour of practice.
          </p>
          <h4 className="font-bold text-slate-805 text-sm sm:text-base text-[#1B6EB5]">8-Week IBPS PO Quant Preparation Plan</h4>
          <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Week 1–2: Foundation Topics</strong><br />
              Simplification, Approximation, Number Series, Quadratic Equations. These four topics together account for 15–17 questions. Master them first. Speed here = time for DI later.
            </p>
            <p>
              <strong>Week 3–4: Core Arithmetic</strong><br />
              Percentage, Profit & Loss, Simple & Compound Interest, Ratio & Proportion, Time & Work, Pipes & Cisterns. These are the backbone of both standalone word problems and DI caselets.
            </p>
            <p>
              <strong>Week 5: Data Interpretation</strong><br />
              Start with Tabular DI (easiest format), then Bar and Line Graphs, then Pie Charts, then Mixed/Caselet DI (hardest). Practice calculating with percentage tricks and approximation instead of long division.
            </p>
            <p>
              <strong>Week 6: Sectional Tests</strong><br />
              Attempt one IBPS PO Quant sectional test every day on PrepBanker. Do not skip the analysis phase. Identify which topic type you're getting wrong most — that is your next revision target.
            </p>
            <p>
              <strong>Week 7: Weak Topic Revisit + PYQ Sets</strong><br />
              Go back to your bottom two topics and drill chapter-wise quizzes. Simultaneously, start attempting actual IBPS PO PYQ sets to calibrate real exam difficulty.
            </p>
            <p>
              <strong>Week 8: Full Mock + Time Trials</strong><br />
              Attempt 2–3 full IBPS PO mock tests with the actual 20-minute Quant timer. Train your brain for the pressure of a live sectional clock.
            </p>
          </div>
          <HighlightBox type="info" title="Pro Tip: Calculation Speed">
            Your calculation speed is the single biggest differentiator in Quant. Students who memorize squares up to 30, cubes up to 20, multiplication tables up to 25, and basic fraction-to-percentage equivalents (like 1/6 = 16.67%) can solve DI questions 40–50% faster. Spend 15 minutes a day for the first 3 weeks on calculation drills before your regular practice. This investment pays off from Week 4 onward.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'sbi-vs-ibps',
      title: "IBPS PO Quant vs SBI PO Quant: Which Is Harder?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-605 text-sm sm:text-[15px] leading-relaxed font-normal">
            This is one of the most common questions among students appearing for both exams. Here's an honest comparison:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">IBPS PO Quant</th>
                  <th className="px-4 py-2.5">SBI PO Quant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-855">Prelims Questions</td>
                  <td className="px-4 py-3">35</td>
                  <td className="px-4 py-3">35</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-855">Time</td>
                  <td className="px-4 py-3">20 minutes</td>
                  <td className="px-4 py-3">20 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-855">Pattern Predictability</td>
                  <td className="px-4 py-3 text-green-655 font-semibold">High (consistent)</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Medium (can surprise)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-855">DI Complexity</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Medium–High</td>
                  <td className="px-4 py-3 text-red-600 font-semibold">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-855">Arithmetic Weightage</td>
                  <td className="px-4 py-3 text-slate-850">Medium</td>
                  <td className="px-4 py-3 text-slate-850">Medium–High</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-855">Recent Difficulty Trend</td>
                  <td className="px-4 py-3">Gradually rising</td>
                  <td className="px-4 py-3">Sharply rising</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-855">Number Series Style</td>
                  <td className="px-4 py-3 text-slate-850">Standard (missing/wrong)</td>
                  <td className="px-4 py-3 text-slate-850">More complex variants</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-855">Cut-off Trend</td>
                  <td className="px-4 py-3">Stable</td>
                  <td className="px-4 py-3">More volatile</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
            <strong>Bottom line:</strong> IBPS PO Quant has a more stable, predictable pattern. SBI PO has pushed boundaries in recent years with unconventional DI formats and data-heavy caselets. Preparing for SBI PO first and then attempting IBPS PO gives you a strategy edge — the reverse doesn't work as well.
          </p>
        </div>
      )
    },
    {
      id: 'mock-attempt-strategy',
      title: "How to Attempt an IBPS PO Quant Sectional Test Effectively",
      content: (
        <div className="space-y-4">
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
            Sitting down and &quot;trying your best&quot; is not a strategy. Here's how to turn every sectional test on PrepBanker into a targeted improvement session:
          </p>
          <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>1. Set up the environment</strong><br />
              Clear your desk, keep a rough sheet handy, and start the timer with zero distractions. Treat every mock like it's the real exam.
            </p>
            <p>
              <strong>2. Follow the section-entry sequence</strong><br />
              Enter the Quant section with a clear attack order in mind: Simplification → Quadratic Equations → Number Series → Word Problems → DI (or DI last if you're slower at it).
            </p>
            <p>
              <strong>3. Mark, skip, return</strong><br />
              Questions you're unsure about should be flagged and skipped immediately. Spending 4 minutes on one DI question you're stuck on kills your entire section score.
            </p>
            <p>
              <strong>4. Attempt, don't guess randomly</strong><br />
              With -0.25 negative marking, only attempt a question if you can narrow it down to 2 options. Random five-option guessing has a negative expected value.
            </p>
            <p>
              <strong>5. Review your score analytically, not emotionally</strong><br />
              After the test, open your answer sheet. For every wrong answer, ask: Was this a concept error? A calculation error? A misread? Or a time-pressure mistake? These four categories require four different fixes.
            </p>
            <p>
              <strong>6. Update your weak topic list</strong><br />
              Keep a running note of which question types you're consistently missing. After 5 sectional tests, a clear pattern will emerge. That pattern is your revision roadmap.
            </p>
            <p>
              <strong>7. Retry failed question types</strong><br />
              Don't just move to the next mock. Go to PrepBanker's chapter-wise quizzes for the topic you failed, attempt 20–30 questions, then come back to a fresh mock the next day.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'how-to-use-prepbanker',
      title: "How to Use PrepBanker for IBPS PO Quantitative Aptitude Preparation",
      content: (
        <div className="space-y-4">
          <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
            PrepBanker is designed around one idea: practicing without analyzing is just wasting time. Here's exactly how to use the platform for Quant prep:
          </p>
          <div className="space-y-3.5 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Diagnostic test first.</strong><br />
              Register on PrepBanker and attempt one IBPS PO Quant sectional test without preparation. This gives you a baseline score and shows you where you currently stand relative to other students attempting the same test.
            </p>
            <p>
              <strong>Step 2 — Chapter-wise quizzes for weak topics.</strong><br />
              After your diagnostic, head to the IBPS PO Quant chapter section. If DI was your lowest-scoring area, spend the first week doing DI chapter quizzes — Tables, Bar Graphs, Pie Charts — one format at a time.
            </p>
            <p>
              <strong>Step 3 — Daily Practice Problems (DPPs).</strong><br />
              PrepBanker releases DPPs that mirror the style and difficulty of the latest IBPS PO pattern. Attempt the DPP for whichever topic you studied that day. This spaced repetition approach is what makes concepts stick under exam pressure.
            </p>
            <p>
              <strong>Step 4 — Full sectional mocks with analytics.</strong><br />
              Once you've covered core topics, shift to full 35-question, 20-minute sectional mocks. PrepBanker's analytics show your topic-wise accuracy, time-per-question, and percentile ranking against all users — use this data to decide what to revise next.
            </p>
            <p>
              <strong>Step 5 — PYQ sets before the exam.</strong><br />
              In your final two weeks, use PrepBanker's IBPS PO Previous Year Question sets. These are real questions from past papers, grouped by year. Solving PYQs tells you the exact difficulty level you'll face and reveals recurring question types that keep appearing across years.
            </p>
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
            Quantitative Aptitude is one piece of the IBPS PO puzzle. Here's what to explore next on PrepBanker to build a complete preparation strategy:
          </p>
          <p>
            Attempt a <Link href="/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free Full-Length IBPS PO Mock Test</Link> that covers all three Prelims sections together — Quant, Reasoning, and English — with a live timer and detailed post-test analysis. This is the closest simulation of the actual exam environment.
          </p>
          <p>
            If Reasoning is your next weak spot, the <Link href="/ibps-po/reasoning-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Reasoning Sectional Test</Link> page gives you the same structured practice, with puzzles, seating arrangements, and syllogisms in IBPS-specific formats.
          </p>
          <p>
            Students preparing for SBI PO alongside IBPS PO will find the <Link href="/sbi-po/quantitative-aptitude-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Quantitative Aptitude Test</Link> page useful for comparing difficulty levels and attempting SBI-style DI and arithmetic questions.
          </p>
          <p>
            For daily revision, the <Link href="/quant/chapter-wise" className="font-bold text-[#1B6EB5] hover:underline">Quantitative Aptitude Chapter-wise Quizzes</Link> section breaks down every Quant topic — from Number Systems to Probability — into short, targeted 10-question practice sets you can complete in under 15 minutes.
          </p>
          <p>
            Finally, check out the <Link href="/ibps-po/previous-year-questions" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO PYQ (Previous Year Questions) Set</Link> to practice with actual past paper questions, understand what the exam has historically tested, and calibrate your preparation to the real standard.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "How many questions are there in IBPS PO Quantitative Aptitude?",
      a: "In IBPS PO Prelims, the Quantitative Aptitude section has 35 questions for 35 marks, to be attempted in 20 minutes. In IBPS PO Mains, the Data Analysis & Interpretation section has 35 questions for 60 marks with a 45-minute time limit."
    },
    {
      q: "What are the most important topics for IBPS PO Quant 2026?",
      a: "The highest-weightage topics for IBPS PO Quant Prelims are Data Interpretation (8–10 questions), Simplification/Approximation (5–7 questions), Number Series (5 questions), Quadratic Equations (5 questions), and Arithmetic Word Problems including Time & Work, Profit & Loss, SI & CI."
    },
    {
      q: "Is IBPS PO Quant free on PrepBanker?",
      a: "Yes. PrepBanker offers free access to select IBPS PO Quantitative Aptitude sectional tests. Full test series access, including all DPPs, chapter-wise quizzes, and PYQ sets, is available after registration at app.prepgrind.com."
    },
    {
      q: "What was the IBPS PO Quant cut-off in Prelims 2024?",
      a: "The IBPS PO Prelims 2024 sectional cut-off for Quantitative Aptitude was approximately 7.25–10.50 marks (varies by category and state). The overall Prelims cut-off ranged from 56.25 to 66.75 out of 100 across general category candidates in different states."
    },
    {
      q: "How is IBPS PO Quant different from SBI PO Quant?",
      a: "IBPS PO Quant is generally considered slightly more predictable in its pattern than SBI PO Quant. SBI PO has introduced puzzle-based DI and unconventional arithmetic in recent years. IBPS PO tends to follow a more established format, though the difficulty level has been rising each year."
    },
    {
      q: "How much time should I spend on IBPS PO Quant in Prelims?",
      a: "Each section in IBPS PO Prelims has a dedicated 20-minute timer — you cannot transfer time between sections. Within the 20 minutes, the recommended split is: 2–3 minutes on Simplification, 4–5 minutes on Number Series and Quadratic Equations, and 8–10 minutes on Data Interpretation sets."
    },
    {
      q: "How many mock tests does PrepBanker have for IBPS PO Quant?",
      a: "PrepBanker offers multiple sectional tests for IBPS PO Quantitative Aptitude, including topic-wise chapter tests, full sectional mocks, DPPs, and PYQ sets from previous IBPS PO exams. The exact count of tests is updated regularly as new tests are added each cycle."
    },
    {
      q: "Can I attempt IBPS PO Quant test on mobile?",
      a: "Yes. PrepBanker's test interface is fully mobile-responsive. You can attempt Quantitative Aptitude sectional tests, review solutions, and check your performance analytics on any smartphone browser without needing to install an app."
    },
    {
      q: "What score is considered good in IBPS PO Quant Prelims?",
      a: "Scoring 22–28 out of 35 in IBPS PO Quant Prelims is considered competitive. Consistently scoring above 25 puts you comfortably above the sectional cut-off in most states. On PrepBanker mock tests, compare your score against the 70th percentile of all test-takers as a performance benchmark."
    },
    {
      q: "Does IBPS PO have negative marking in Quant?",
      a: "Yes. IBPS PO has a penalty of 0.25 marks for every wrong answer in both Prelims and Mains. There is no negative marking for unattempted questions. In Quantitative Aptitude, avoid guessing on complex DI questions — skip and revisit if time permits."
    }
  ]
};
