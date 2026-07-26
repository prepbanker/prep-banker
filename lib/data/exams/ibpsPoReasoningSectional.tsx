import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const ibpsPoReasoningSectionalContent: DetailSectionContent = {
  title: "IBPS PO Reasoning Ability Test 2026 – Attempt Free Sectional Mock",
  overview: "The IBPS PO Reasoning Ability section in Prelims has 35 questions worth 35 marks, completed in exactly 20 minutes. This page gives you free sectional mock tests built on the 2026 exam pattern, topic-wise practice sets for puzzles and seating arrangements, and a preparation strategy that tells you exactly where to spend your time.",
  ctaText: "Start Free IBPS PO Reasoning Ability Test",
  ctaHref: "https://app.prepgrind.com/signup/ibps-po",
  metaTitle: "IBPS PO Reasoning Ability Test – Free Sectional Mock",
  metaDescription: "Attempt free IBPS PO Reasoning Ability sectional tests for 2026. 35 questions, 20 minutes, real exam pattern. Master puzzles, syllogisms and seating arrangements.",
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com" },
              { "@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po" },
              { "@type": "ListItem", "position": 3, "name": "Reasoning Ability Test", "item": "https://prepbanker.com/ibps-po/reasoning-ability-test" }
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
            "name": "IBPS PO Reasoning Ability Test 2026 – Free Sectional Mock",
            "url": "https://prepbanker.com/ibps-po/reasoning-ability-test",
            "description": "Attempt free IBPS PO Reasoning Ability sectional tests for 2026. 35 questions, 20 minutes, real exam pattern. Master puzzles, syllogisms, and seating arrangements.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "inLanguage": "en-IN",
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com",
              "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/logo.png" }
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
            "name": "IBPS PO Reasoning Ability Sectional Test 2026",
            "description": "A full-length sectional mock test for IBPS PO Prelims Reasoning Ability — 35 questions in 20 minutes, built on the latest IBPS exam pattern including puzzles, seating arrangements, syllogisms, and coding-decoding.",
            "url": "https://prepbanker.com/ibps-po/reasoning-ability-test",
            "educationalLevel": "Undergraduate",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "about": { "@type": "Thing", "name": "IBPS PO Reasoning Ability" },
            "provider": { "@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com" }
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
            "name": "IBPS PO Reasoning Ability Complete Preparation 2026",
            "description": "Comprehensive preparation for IBPS PO Reasoning Ability covering Prelims and Mains — sectional tests, chapter-wise quizzes, DPPs, and PYQ practice sets for puzzles, seating arrangements, syllogisms, and all high-weightage topics.",
            "url": "https://prepbanker.com/ibps-po/reasoning-ability-test",
            "provider": { "@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com" },
            "educationalLevel": "Competitive Exam",
            "inLanguage": "en-IN",
            "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Online", "startDate": "2026-05-01" }
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
                "name": "How many questions are in IBPS PO Reasoning Ability?",
                "acceptedAnswer": { "@type": "Answer", "text": "The IBPS PO Prelims Reasoning Ability section has 35 questions for 35 marks, completed in 20 minutes. In IBPS PO Mains, Reasoning is combined with Computer Aptitude for 45 questions worth 60 marks with a 60-minute time limit." }
              },
              {
                "@type": "Question",
                "name": "Which topics are most important for IBPS PO Reasoning 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "The highest-weightage topics are Puzzles and Seating Arrangements (15–20 questions), Syllogisms (3–5), Inequalities (3–5), Direction Sense (2–3), and Blood Relations (2–3). Puzzles alone account for 43–57% of the section." }
              },
              {
                "@type": "Question",
                "name": "Is IBPS PO Reasoning harder than SBI PO Reasoning?",
                "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO Reasoning has a more predictable format than SBI PO. SBI PO introduces unconventional puzzle types and coded variants more frequently. Students who have prepared for SBI PO difficulty typically find IBPS PO Reasoning more manageable." }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker's IBPS PO Reasoning test free?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. PrepBanker offers free access to select IBPS PO Reasoning Ability sectional tests. Full platform access including DPPs, chapter-wise quizzes, and PYQ sets is available after free registration at app.prepgrind.com." }
              },
              {
                "@type": "Question",
                "name": "How do I solve puzzles faster in IBPS PO Reasoning?",
                "acceptedAnswer": { "@type": "Answer", "text": "Draw your template before reading clues, process definite clues first, and use conditional clues last. Practicing 5–7 puzzles daily for 3 weeks consistently reduces solving time by 30–40%. Build a format-specific template for linear, circular, and floor puzzle types." }
              },
              {
                "@type": "Question",
                "name": "What was the IBPS PO Reasoning sectional cut-off in 2024?",
                "acceptedAnswer": { "@type": "Answer", "text": "The IBPS PO Prelims 2024 sectional cut-off for Reasoning Ability ranged from approximately 8.50 to 12.75 marks for General category candidates, varying by state. These figures are from IBPS's official result notification." }
              },
              {
                "@type": "Question",
                "name": "How much time should I spend on puzzles in IBPS PO Reasoning?",
                "acceptedAnswer": { "@type": "Answer", "text": "Allocate 10–12 minutes to Puzzle and Seating Arrangement sets. Spend the first 6–8 minutes on Syllogisms, Inequalities, Direction Sense, and Blood Relations to secure quick marks. Attempt puzzles second, starting with the simplest set." }
              },
              {
                "@type": "Question",
                "name": "Can I attempt IBPS PO Reasoning tests on my mobile phone?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. PrepBanker's test interface is fully mobile-responsive. All Reasoning Ability sectional tests, chapter-wise quizzes, and analytics work on any smartphone browser without an app download. The interface replicates the actual IBPS PO CBT layout." }
              },
              {
                "@type": "Question",
                "name": "What score in IBPS PO Reasoning is considered competitive?",
                "acceptedAnswer": { "@type": "Answer", "text": "Scoring 25–30 out of 35 in IBPS PO Reasoning Prelims is competitive. Students who crack 2–3 puzzle sets (10–15 marks) plus all individual question types typically hit this range. Use PrepBanker's percentile ranking as a benchmark." }
              },
              {
                "@type": "Question",
                "name": "How many puzzle sets appear in IBPS PO Reasoning Prelims?",
                "acceptedAnswer": { "@type": "Answer", "text": "IBPS PO Prelims typically features 3–4 Puzzle and Seating Arrangement sets with 4–5 questions each. Common formats include linear arrangements, circular seating, floor-based puzzles, and multi-variable designation or box puzzles. Multi-variable formats have appeared more frequently since 2022." }
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
      title: "Quick Exam Snapshot — IBPS PO Reasoning Ability 2026",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary Specifications">
            <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
              <li><strong>Exam Name:</strong> IBPS PO (Probationary Officer)</li>
              <li><strong>Conducting Body:</strong> Institute of Banking Personnel Selection (IBPS)</li>
              <li><strong>Expected Vacancies (2026):</strong> ~4,000–5,000 (IBPS PO 2025 had 4,455 vacancies)</li>
              <li><strong>Prelims Exam Date (Expected):</strong> October 2026</li>
              <li><strong>Section (Prelims):</strong> Reasoning Ability — 35 Questions | 35 Marks | 20 Minutes</li>
              <li><strong>Section (Mains):</strong> Reasoning & Computer Aptitude — 45 Questions | 60 Marks | 60 Minutes</li>
              <li><strong>Negative Marking:</strong> −0.25 per wrong answer</li>
              <li><strong>Mode:</strong> Online (Computer-Based Test)</li>
              <li><strong>Sectional Timer:</strong> Yes — time cannot be transferred between sections</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'section-overview',
      title: "What Does the IBPS PO Reasoning Ability Section Actually Look Like?",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Most students underestimate the Reasoning section until they sit in front of a live 20-minute timer with 35 questions and three unsolved puzzle sets staring back at them. Understanding the structure in advance is the first step to not freezing up.
          </p>
          <p>
            IBPS PO Prelims runs three sections back-to-back, each with its own locked timer. Reasoning Ability is typically attempted second or third. Once the 20 minutes ends, the screen moves forward — there's no going back.
          </p>

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Prelims Exam Structure</h4>
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
              <tbody className="divide-y divide-slate-100 text-slate-655">
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

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Mains Exam Structure (Reasoning Component)</h4>
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
              <tbody className="divide-y divide-slate-100 text-slate-655">
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
            In Mains, Reasoning is combined with Computer Aptitude, and questions shift toward more complex multi-condition puzzles, input-output, and direction-based problems. The difficulty increase from Prelims to Mains is significant — Prelims is where you qualify, but Mains is where you compete.
          </p>
        </div>
      )
    },
    {
      id: 'topic-weightage',
      title: "Which Topics Actually Appear in IBPS PO Reasoning 2026?",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            This is the question that separates students who prepare efficiently from those who spread themselves too thin across every Reasoning topic in every textbook. IBPS PO has a fairly stable Reasoning blueprint — here's what the last five cycles tell us:
          </p>
          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Topic-Wise Weightage — IBPS PO Reasoning Ability Prelims</h4>
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
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Puzzles & Seating Arrangements</td>
                  <td className="px-4 py-3">15–20</td>
                  <td className="px-4 py-3">15–20</td>
                  <td className="px-4 py-3 text-red-650 font-semibold">Medium–High</td>
                  <td className="px-4 py-3 text-red-650 font-bold">🔴 Critical</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Syllogisms</td>
                  <td className="px-4 py-3">3–5</td>
                  <td className="px-4 py-3">3–5</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Easy–Medium</td>
                  <td className="px-4 py-3 text-red-650 font-bold">🔴 Critical</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Inequalities (Direct/Coded)</td>
                  <td className="px-4 py-3">3–5</td>
                  <td className="px-4 py-3">3–5</td>
                  <td className="px-4 py-3 text-green-650 font-semibold">Easy</td>
                  <td className="px-4 py-3 text-red-650 font-bold">🔴 Critical</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Direction Sense</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3 text-amber-650 font-semibold">Easy–Medium</td>
                  <td className="px-4 py-3 text-amber-650 font-bold">🟡 High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Blood Relations</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Easy–Medium</td>
                  <td className="px-4 py-3 text-amber-600 font-bold">🟡 High</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Coding-Decoding</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Medium</td>
                  <td className="px-4 py-3 text-amber-600 font-bold">🟡 High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Alphanumeric Series</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3">2–3</td>
                  <td className="px-4 py-3 text-green-650 font-semibold">Easy</td>
                  <td className="px-4 py-3 text-green-650 font-bold">🟢 Moderate</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Order & Ranking</td>
                  <td className="px-4 py-3">1–2</td>
                  <td className="px-4 py-3">1–2</td>
                  <td className="px-4 py-3 text-green-655 font-semibold">Easy</td>
                  <td className="px-4 py-3 text-green-650 font-bold">🟢 Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Miscellaneous</td>
                  <td className="px-4 py-3">0–2</td>
                  <td className="px-4 py-3">0–2</td>
                  <td className="px-4 py-3 text-slate-500">Medium</td>
                  <td className="px-4 py-3 text-slate-500 font-bold">🟢 Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Puzzles and Seating Arrangements alone account for 43–57% of the entire Reasoning section. Solving 3 out of 4 puzzle sets correctly puts you at 12–15 marks — already above the sectional cut-off in most states before you've answered a single individual question type.
          </p>

          <HighlightBox type="info" title="Pro Tip: Not all puzzle types are equally difficult">
            Linear arrangements (single row) are the fastest — most students can complete them in 3–4 minutes. Floor-based puzzles are medium. Circular + multi-variable combo puzzles are the hardest. In an exam setting, read the first line of each puzzle set before deciding which to attempt first. Skip the most complex set if you're running low on time — attempt it only after securing marks from all other question types.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'cutoffs-history',
      title: "IBPS PO Reasoning Cut-Off: What Score Do You Need to Clear Prelims?",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Here are the verified sectional and overall cut-offs from recent IBPS PO Prelims cycles for General category candidates:
          </p>
          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">IBPS PO Prelims Cut-Off History — Reasoning Ability (General Category)</h4>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Year</th>
                  <th className="px-4 py-2.5">Sectional Cut-Off (Reasoning)</th>
                  <th className="px-4 py-2.5">Overall Prelims Cut-Off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                  <td className="px-4 py-3">8.50 – 12.75</td>
                  <td className="px-4 py-3">56.25 – 66.75</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                  <td className="px-4 py-3">7.75 – 11.50</td>
                  <td className="px-4 py-3">52.00 – 63.50</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                  <td className="px-4 py-3">8.00 – 12.00</td>
                  <td className="px-4 py-3">54.75 – 65.00</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                  <td className="px-4 py-3">7.50 – 11.25</td>
                  <td className="px-4 py-3">50.00 – 62.25</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">2020</td>
                  <td className="px-4 py-3">6.50 – 9.75</td>
                  <td className="px-4 py-3">46.00 – 58.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 italic">
            *(Cut-offs vary by state and category. SC, ST, OBC, EWS cut-offs are lower. Source: IBPS official result notifications.)*
          </p>

          <p>
            The sectional cut-off for Reasoning is around 8–13 marks — clearing the floor isn't the challenge. The real competition is pushing your Reasoning score to 25+ so your overall Prelims score stays competitive among the 13+ lakh students who appear each year.
          </p>

          <p>
            With approximately 4,455 vacancies in the 2025 cycle and over 13 lakh applicants, the effective selection ratio is roughly 1 in 30. Every mark in Reasoning — a section where most students score similarly — can be the deciding factor.
          </p>
        </div>
      )
    },
    {
      id: 'preparation-strategy',
      title: "How to Prepare for IBPS PO Reasoning Ability: A Topic-First Strategy",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            The biggest mistake students make with Reasoning is treating it like a subject you can "study." Reasoning is a skill built through repeated pattern exposure. The more puzzle types you've seen and solved before the exam, the faster you'll be when you encounter them under pressure.
          </p>

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">7-Week IBPS PO Reasoning Preparation Plan</h4>
          <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Week 1: Individual Question Types.</strong> Start with the fastest topics: Syllogisms, Inequalities (direct and coded), Alphanumeric Series, Order & Ranking, and Direction Sense. These 10–12 questions in the exam take under 6 minutes if you've drilled the rules. Get these to automatic-response level before touching a single puzzle.
            </p>
            <p>
              <strong>Week 2: Blood Relations + Coding-Decoding.</strong> Both appear consistently and reward rule-based practice. Blood Relations via family tree diagrams and Coding-Decoding via pattern logic take 1–2 minutes each. Attempt 20–30 questions per topic until the solution method feels automatic.
            </p>
            <p>
              <strong>Week 3–4: Linear and Floor Puzzles.</strong> Move into Puzzle and Seating Arrangement practice. Start with single-row linear arrangements. Solve 5–7 daily. Progress to double-row (north-south facing), then floor-based puzzles. Focus on building your template-drawing speed — the diagram comes before the clues, every time.
            </p>
            <p>
              <strong>Week 5: Circular Seating + Multi-Variable Puzzles.</strong> These are the hardest formats. Circular seating (with and without directions) and multi-condition variable puzzles (profession + city + floor combined) need two focused weeks. The goal is not comfort — it's not losing marks on them.
            </p>
            <p>
              <strong>Week 6: Full Sectional Tests.</strong> Attempt one 35-question, 20-minute Reasoning sectional test on PrepBanker every day. Review every mistake. Categorize errors: concept gap, misread clue, or time-pressure mistake. Each needs a different fix.
            </p>
            <p>
              <strong>Week 7: PYQ Sets + Full Mocks.</strong> Solve actual IBPS PO previous year Reasoning sets to calibrate your preparation against real exam difficulty. Run 2–3 full mock tests to finalize your personal attempt order under live conditions.
            </p>
          </div>

          <HighlightBox type="info" title="Pro Tip: Attempt Order">
            Your attempt order in Reasoning matters more than in any other section. The recommended sequence: Inequalities → Syllogisms → Direction Sense / Blood Relations → Alphanumeric Series → Coding-Decoding → Puzzles (simplest first, hardest last). This approach secures 12–15 marks from quick-win question types before you open a single puzzle set — which means you're already above the sectional cut-off before the hard part begins.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'puzzle-problem',
      title: "The Puzzle Problem: Why Most Students Lose Marks in IBPS PO Reasoning",
      content: (
        <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Puzzles are where Reasoning prep either comes together or falls apart. Students who struggle with puzzles almost always share one of three specific problems — and each has a specific fix.
          </p>

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Problem 1: Reading Clues Without a Template</h4>
          <p>
            Many students read all the clues first, then try to construct a table from memory. This wastes 60–90 seconds and increases the risk of misplacement. The fix: always draw your template (rows, columns, labels) before reading the first clue. For a 7-person linear arrangement, draw 7 boxes numbered 1–7 before anything else.
          </p>

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Problem 2: Attempting the Hardest Puzzle First</h4>
          <p>
            The 3–4 puzzle sets in IBPS PO are not equal in difficulty. A 5-person single-row puzzle with direct clues can be solved in 3 minutes. A 7-entity multi-variable puzzle with conditional clues might take 8 minutes — or be unsolvable under pressure. Scan the first two lines of each puzzle set before deciding your order.
          </p>

          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Problem 3: No Skip Threshold</h4>
          <p>
            Students who haven't decided in advance when to abandon a puzzle tend to keep trying until time runs out. Set a personal rule: if you haven't placed at least 3 entities within 2 minutes of starting a puzzle, mark the questions as attempted-but-uncertain and move on. This is not giving up — it's protecting marks you can still earn.
          </p>
        </div>
      )
    },
    {
      id: 'sbi-vs-ibps',
      title: "IBPS PO Reasoning vs SBI PO Reasoning: What's Actually Different?",
      content: (
        <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
          <h4 className="font-bold text-slate-800 text-sm sm:text-base text-[#1B6EB5]">Difficulty and Pattern Comparison</h4>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">IBPS PO Reasoning</th>
                  <th className="px-4 py-2.5">SBI PO Reasoning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims Questions</td>
                  <td className="px-4 py-3">35</td>
                  <td className="px-4 py-3">35</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Time</td>
                  <td className="px-4 py-3">20 minutes</td>
                  <td className="px-4 py-3">20 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Puzzle Sets per Paper</td>
                  <td className="px-4 py-3">3–4</td>
                  <td className="px-4 py-3">3–5</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Pattern Predictability</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">High</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Medium</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">New/Unconventional Types</td>
                  <td className="px-4 py-3">Rare</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">More frequent</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Puzzle Complexity</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">Medium–High</td>
                  <td className="px-4 py-3 text-red-600 font-semibold">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Syllogism Format</td>
                  <td className="px-4 py-3">Standard 2–3 statement</td>
                  <td className="px-4 py-3 text-slate-800">Standard + coded variants</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Overall Difficulty Trend</td>
                  <td className="px-4 py-3">Gradually rising</td>
                  <td className="px-4 py-3 text-red-650 font-semibold">Sharply rising</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            IBPS PO Reasoning is more formulaic. If you've solved enough IBPS PO PYQs, the new puzzles feel familiar. SBI PO has a history of introducing formats students haven't seen before — which makes the first read of a puzzle set disorienting. Students who prepare for SBI PO difficulty and then attempt IBPS PO tend to find Reasoning more manageable. The core skill — fast, structured puzzle solving — is the same either way.
          </p>
        </div>
      )
    },
    {
      id: 'how-to-use-prepbanker',
      title: "How to Use PrepBanker for IBPS PO Reasoning Ability Preparation",
      content: (
        <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            PrepBanker is built around one principle: every test you attempt should teach you something specific, not just add to a count of tests done. Here's how to use the platform effectively for Reasoning prep:
          </p>
          <div className="space-y-3 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Diagnostic test first.</strong><br />
              Register on PrepBanker and attempt one full IBPS PO Reasoning sectional test without preparation. Don't worry about the score. The point is to see which question types you're avoiding, which puzzles you couldn't crack, and how time management held up under the 20-minute pressure. This baseline is your starting point.
            </p>
            <p>
              <strong>Step 2 — Chapter-wise quizzes by topic.</strong><br />
              After your diagnostic, the analytics will show where you dropped marks. Use PrepBanker's chapter-wise Reasoning quizzes to target those exact topics. If Floor Puzzles were your weakest area, spend 3–4 days doing only Floor Puzzle quizzes — 15–20 questions per session — before returning to a full sectional test.
            </p>
            <p>
              <strong>Step 3 — Daily Practice Problems for consistency.</strong><br />
              PrepBanker's DPPs are released in alignment with current IBPS PO patterns. Attempting the Reasoning DPP each day (10–15 questions in 10–12 minutes) builds the daily habit of structured problem-solving that makes puzzle-solving feel like muscle memory by exam time.
            </p>
            <p>
              <strong>Step 4 — Sectional mocks with timer discipline.</strong><br />
              From Week 6 onward, shift to timed 35-question sectional mocks. After each mock, review: (a) which question types you attempted first, (b) how much time you spent per type, and (c) which puzzle sets you solved vs. skipped. This data helps you refine your attempt strategy, not just your knowledge.
            </p>
            <p>
              <strong>Step 5 — PYQ sets in the final two weeks.</strong><br />
              Attempt PrepBanker's IBPS PO Previous Year Reasoning sets from the last 4–5 cycles. Real exam questions calibrate your expectations better than any practice set. Pay attention to recurring puzzle configurations — certain formats (8-person circular + 3 professions) have appeared multiple times across IBPS PO papers.
            </p>
          </div>
          <p className="mt-4">
            <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">
              Start Your Free IBPS PO Reasoning Test Now →
            </a>
          </p>
        </div>
      )
    },
    {
      id: 'explore-more',
      title: "Also Explore on PrepBanker",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Reasoning Ability is one of three Prelims sections you need to clear. Here's what to explore next for a complete IBPS PO preparation strategy:
          </p>
          <p>
            Attempt the <Link href="/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free Full-Length IBPS PO Mock Test</Link> to practice all three Prelims sections — Reasoning, Quant, and English — in sequence with live sectional timers. A full mock gives you real data on how your time management holds across all three sections together, not just Reasoning in isolation.
          </p>
          <p>
            If Quantitative Aptitude is your next focus, the <Link href="/ibps-po/quantitative-aptitude-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quantitative Aptitude Test</Link> page has a complete topic-wise strategy, DI preparation guide, and sectional mocks built on the same 20-minute format.
          </p>
          <p>
            Students targeting both IBPS PO and SBI PO can use the <Link href="/sbi-po/reasoning-ability-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Reasoning Ability Test</Link> to challenge themselves with harder puzzle variants. The difficulty gap between the two exams becomes immediately clear when you attempt both on PrepBanker.
          </p>
          <p>
            For focused puzzle-only practice, the <Link href="/reasoning/puzzles-seating-arrangements" className="font-bold text-[#1B6EB5] hover:underline">Reasoning Puzzles Chapter-wise Quiz</Link> section breaks practice down by format — Linear, Circular, Floor, Box, and Multi-Variable — so you can drill the specific puzzle type you struggle with most without attempting a full 35-question mock.
          </p>
          <p>
            Access the <Link href="/ibps-po/reasoning-previous-year-questions" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Reasoning PYQ Set</Link> to attempt actual questions from IBPS PO Prelims papers from 2019–2024. Solving real exam questions is the most accurate calibration of where your preparation stands.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "How many questions are in IBPS PO Reasoning Ability?",
      a: "The IBPS PO Prelims Reasoning Ability section has 35 questions for 35 marks, completed in 20 minutes. In IBPS PO Mains, Reasoning is combined with Computer Aptitude for 45 questions worth 60 marks with a 60-minute time limit."
    },
    {
      q: "Which topics are most important for IBPS PO Reasoning 2026?",
      a: "The highest-weightage topics are Puzzles and Seating Arrangements (15–20 questions), Syllogisms (3–5), Inequalities (3–5), Direction Sense (2–3), and Blood Relations (2–3). Puzzles alone account for 43–57% of the section."
    },
    {
      q: "Is IBPS PO Reasoning harder than SBI PO Reasoning?",
      a: "IBPS PO Reasoning has a more predictable format than SBI PO. SBI PO introduces unconventional puzzle types and coded variants more frequently. Students who have prepared for SBI PO difficulty typically find IBPS PO Reasoning more manageable."
    },
    {
      q: "Is PrepBanker's IBPS PO Reasoning test free?",
      a: "Yes. PrepBanker offers free access to select IBPS PO Reasoning Ability sectional tests. Full platform access including DPPs, chapter-wise quizzes, and PYQ sets is available after free registration at app.prepgrind.com."
    },
    {
      q: "How do I solve puzzles faster in IBPS PO Reasoning?",
      a: "Draw your template before reading clues, process definite clues first, and use conditional clues last. Practicing 5–7 puzzles daily for 3 weeks consistently reduces solving time by 30–40%. Build a format-specific template for linear, circular, and floor puzzle types."
    },
    {
      q: "What was the IBPS PO Reasoning sectional cut-off in 2024?",
      a: "The IBPS PO Prelims 2024 sectional cut-off for Reasoning Ability ranged from approximately 8.50 to 12.75 marks for General category candidates, varying by state. These figures are from IBPS's official result notification."
    },
    {
      q: "How much time should I spend on puzzles in IBPS PO Reasoning?",
      a: "Allocate 10–12 minutes to Puzzle and Seating Arrangement sets. Spend the first 6–8 minutes on Syllogisms, Inequalities, Direction Sense, and Blood Relations to secure quick marks. Attempt puzzles second, starting with the simplest set."
    },
    {
      q: "Can I attempt IBPS PO Reasoning tests on my mobile phone?",
      a: "Yes. PrepBanker's test interface is fully mobile-responsive. All Reasoning Ability sectional tests, chapter-wise quizzes, and analytics work on any smartphone browser without an app download. The interface replicates the actual IBPS PO CBT layout."
    },
    {
      q: "What score in IBPS PO Reasoning is considered competitive?",
      a: "Scoring 25–30 out of 35 in IBPS PO Reasoning Prelims is competitive. Students who crack 2–3 puzzle sets (10–15 marks) plus all individual question types typically hit this range. Use PrepBanker's percentile ranking as a benchmark."
    },
    {
      q: "How many puzzle sets appear in IBPS PO Reasoning Prelims?",
      a: "IBPS PO Prelims typically features 3–4 Puzzle and Seating Arrangement sets with 4–5 questions each. Common formats include linear arrangements, circular seating, floor-based puzzles, and multi-variable designation or box puzzles. Multi-variable formats have appeared more frequently since 2022."
    }
  ]
};

