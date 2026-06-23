import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const ibpsPoStudyPlanContent: DetailSectionContent = {
  title: "IBPS PO Study Plan 2026 – Complete 3-Month Preparation Guide",
  overview: "A focused 3-month IBPS PO study plan covering all five sections — Quantitative Aptitude, Reasoning Ability, English Language, General Awareness, and Computer Knowledge — is enough to clear Prelims and position yourself strongly for Mains. This guide gives you a week-wise schedule, daily hour allocation, topic priority order, and a mock test strategy built around the 2026 exam pattern.",
  ctaText: "Register Free and Start Your IBPS PO Preparation →",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "IBPS PO Study Plan – 3-Month Preparation Guide",
  metaDescription: "Follow this IBPS PO study plan 2026 to prepare for Prelims and Mains in 90 days. Week-wise schedule, topic priority, mock test strategy, and daily routine included.",
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
              { "@type": "ListItem", "position": 3, "name": "IBPS PO Study Plan 2026", "item": "https://prepbanker.com/ibps-po/study-plan" }
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
            "name": "IBPS PO Study Plan 2026 – 3-Month Preparation Guide",
            "url": "https://prepbanker.com/ibps-po/study-plan",
            "description": "Follow this IBPS PO study plan 2026 to prepare for Prelims and Mains in 90 days. Week-wise schedule, topic priority, mock test strategy, and daily routine included.",
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
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IBPS PO Study Plan 2026 – 3-Month Preparation Guide",
            "description": "A complete 90-day IBPS PO study plan covering Prelims and Mains — week-wise topic schedule, daily study hours, mock test strategy, and subject-wise preparation approach.",
            "url": "https://prepbanker.com/ibps-po/study-plan",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-12",
            "inLanguage": "en-IN",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://prepbanker.com",
              "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/logo.png" }
            },
            "about": { "@type": "Thing", "name": "IBPS PO Preparation" }
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
            "name": "IBPS PO Complete Preparation Plan 2026",
            "description": "A structured 90-day IBPS PO preparation course covering Quantitative Aptitude, Reasoning Ability, English Language, General Awareness, and Computer Knowledge — with daily schedules, mock test integration, and subject-wise strategy.",
            "url": "https://prepbanker.com/ibps-po/study-plan",
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
                "name": "How many months does it take to prepare for IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "3 months (90 days) is sufficient to prepare for IBPS PO Prelims from scratch if you study 5–7 hours daily with a structured plan. Students with prior banking exam preparation can be exam-ready in 6–8 weeks. For Mains, add another 4–6 weeks of focused preparation after Prelims results."
                }
              },
              {
                "@type": "Question",
                "name": "How many hours should I study for IBPS PO every day?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "5–7 hours per day is the recommended range for serious IBPS PO aspirants. This breaks down as: 2 hours of concept study, 1.5 hours of practice (DPPs or chapter quizzes), 1 hour of current affairs and GA, and 30–60 minutes of mock test review on days you attempt a test. Working professionals can manage with 3–4 focused hours daily."
                }
              },
              {
                "@type": "Question",
                "name": "Which subject should I start with for IBPS PO preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start with your weakest subject — the one that will cost you the most marks if left unattended. For most students, this is Quantitative Aptitude. Within Quant, start with Simplification and Number Series since these are the fastest marks to secure. Don't start with Data Interpretation — tackle it after building arithmetic foundations."
                }
              },
              {
                "@type": "Question",
                "name": "When should I start attempting mock tests for IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start sectional mocks from Week 4–5 of your preparation, once you've covered at least 2–3 topics per section. Full-length Prelims mocks should begin by Week 7–8. Many students make the mistake of attempting full mocks too early (before any foundation) or too late (only in the final week). PrepBanker's analytics help you time this correctly."
                }
              },
              {
                "@type": "Question",
                "name": "Is 3 months enough to crack IBPS PO Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — 3 months is enough to clear IBPS PO Prelims for most motivated candidates studying 5+ hours daily. The syllabus is finite and the pattern is predictable. What 3 months cannot guarantee is clearing the overall cut-off without consistent mock test practice and post-mock analysis. Syllabus coverage alone does not equal exam readiness."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best study plan for IBPS PO for working professionals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Working professionals should follow a 4–5 month plan with 3–4 hours daily. Use mornings (5:30–7:30 AM) for concept study, lunch breaks for GA revision (15–20 min), and evenings for practice sets and DPPs. Attempt one sectional test on weekends. PrepBanker's mobile-responsive platform lets you practice during commutes using chapter-wise quizzes."
                }
              },
              {
                "@type": "Question",
                "name": "Which topics should I focus on most in IBPS PO Quant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Data Interpretation (8–10 questions), Simplification/Approximation (5–7 questions), Number Series (5 questions), and Quadratic Equations (5 questions) together account for roughly 23–27 of the 35 Quant questions. Master these four before spending time on low-weightage topics like Mensuration or Permutation and Combination."
                }
              },
              {
                "@type": "Question",
                "name": "How should I prepare for IBPS PO General Awareness?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IBPS PO GA in Mains focuses on Banking & Financial Awareness (60%) and Static GK + Current Affairs (40%). Read The Hindu or Economic Times headlines daily (15 minutes), maintain a monthly current affairs capsule, and revise banking terminology weekly. Start GA preparation from Day 1 — it cannot be crammed in the last week."
                }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker's IBPS PO study plan material free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker offers free access to IBPS PO sectional tests, DPPs, and chapter-wise quizzes after free registration at app.prepgrind.com. The study plan on this page is completely free. Full mock test series access and PYQ sets are available within the platform at no cost for initial tests."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do differently in the last 30 days before IBPS PO Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In the final 30 days: attempt 2–3 full Prelims mocks per week, spend 60–90 minutes reviewing each mock analytically (not just checking scores), revise your personal error log, stop starting new topics, and do one PYQ set per week. Reduce new content to 20% of your study time — the remaining 80% should be practice and revision."
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
      id: 'snapshot-and-time',
      title: "How Much Time Do You Actually Need to Prepare for IBPS PO?",
      content: (
        <div className="space-y-4 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>Let&apos;s be honest about this before anything else. The answer depends on your starting point.</p>
          <p>
            <strong>If you&apos;re a fresher with no prior banking exam prep:</strong> 90 days (3 months) at 5–7 hours daily is the minimum to cover the Prelims syllabus properly and attempt enough mocks to build exam-day confidence.
          </p>
          <p>
            <strong>If you&apos;ve attempted IBPS PO or SBI PO before:</strong> 6–8 weeks of focused preparation, with more time on mocks and less on concept study, is often enough.
          </p>
          <p>
            <strong>If you&apos;re a working professional:</strong> Extend to 4–5 months with 3–4 focused hours daily. The total study hours are what matter, not the number of days.
          </p>
          <p>
            The IBPS PO Prelims syllabus is finite and highly predictable. Over 13 lakh students appeared for IBPS PO Prelims in the 2024 cycle, but the students who clear it share one consistent trait: they moved from passive study to active testing earlier than their peers.
          </p>

          <HighlightBox type="info" title="IBPS PO 2026 — Exam Snapshot">
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-1 font-normal text-slate-655">
              <li><strong>Exam Name:</strong> IBPS PO (Probationary Officer)</li>
              <li><strong>Conducting Body:</strong> Institute of Banking Personnel Selection (IBPS)</li>
              <li><strong>Expected Vacancies (2026):</strong> ~4,000–5,000 (IBPS PO 2025 had 4,455 vacancies)</li>
              <li><strong>Expected Notification:</strong> August 2026</li>
              <li><strong>Prelims Expected:</strong> October 2026 | <strong>Mains Expected:</strong> November–December 2026</li>
              <li><strong>Prelims Pattern:</strong> 100 Q / 100 Marks / 60 Minutes (3 sections, individual timers)</li>
              <li><strong>Mains Pattern:</strong> 155 Q / 200 Marks / 180 Minutes (4 sections, individual timers)</li>
              <li><strong>Negative Marking:</strong> −0.25 per wrong answer (both stages)</li>
              <li><strong>Interview:</strong> 100 marks (final stage after Mains)</li>
              <li><strong>Total Applicants (2024 cycle):</strong> ~13–14 lakh appeared for Prelims</li>
            </ul>
          </HighlightBox>

          <h3 className="font-bold text-slate-850 text-base sm:text-lg mt-5 mb-3 text-[#1B6EB5]">Daily Study Hours Allocation</h3>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Study Phase</th>
                  <th className="px-4 py-2.5">Daily Hours</th>
                  <th className="px-4 py-2.5">Key Activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Concept Building (Weeks 1–5)</td>
                  <td className="px-4 py-3">5–6 hours</td>
                  <td className="px-4 py-3">Topic study, concept notes, formula revision</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Mixed Practice (Weeks 6–9)</td>
                  <td className="px-4 py-3">6–7 hours</td>
                  <td className="px-4 py-3">Sectional mocks, chapter quizzes, DPPs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Full Mock Phase (Weeks 10–12)</td>
                  <td className="px-4 py-3">6–8 hours</td>
                  <td className="px-4 py-3">Full mocks, deep review, weak topic revision</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Final Week</td>
                  <td className="px-4 py-3">4–5 hours</td>
                  <td className="px-4 py-3">Revision only, PYQs, light mocks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'week-by-week-schedule',
      title: "The 3-Month IBPS PO Study Plan: Week-by-Week Breakdown",
      content: (
        <div className="space-y-6 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            This plan assumes you&apos;re starting from scratch with a Prelims target. The structure is front-loaded on concept building and transitions into mock-heavy practice from Week 6 onward — which mirrors how toppers actually prepare.
          </p>

          <div>
            <h3 className="font-bold text-slate-850 text-base mb-3 text-[#1B6EB5]">Month 1 (Weeks 1–4): Foundation Building</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 1 — Quantitative Aptitude: Fast-Mark Topics</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Simplification and Approximation (BODMAS, surds, indices)</li>
                  <li>Number Series (missing term, wrong term)</li>
                  <li>Quadratic Equations</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Spend 2 hours on Quant daily this week. Attempt 30–40 practice questions per topic. These three topics together account for 15–17 Quant marks in Prelims and are the most time-efficient to master.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 2 — Quantitative Aptitude: Core Arithmetic</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Percentage, Profit &amp; Loss, Discount</li>
                  <li>Simple Interest and Compound Interest</li>
                  <li>Ratio &amp; Proportion, Partnership</li>
                  <li>Time &amp; Work, Pipes &amp; Cisterns</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  These topics form the backbone of both standalone word problems and DI caselets. Don&apos;t rush them.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 3 — Reasoning Ability: Individual Question Types</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Syllogisms (standard + possibility cases)</li>
                  <li>Inequalities (direct and coded)</li>
                  <li>Direction Sense, Blood Relations</li>
                  <li>Alphanumeric Series, Order &amp; Ranking, Coding-Decoding</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  These 10–12 individual questions in Reasoning can be completed in under 6 minutes if you&apos;ve drilled the rules. Lock them in before touching puzzles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 4 — English Language: Core Topics</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Reading Comprehension (RC) — inference, vocabulary, tone</li>
                  <li>Cloze Test — contextual vocabulary, grammar patterns</li>
                  <li>Error Detection (phrase/sentence level)</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  English is often treated as an afterthought. Don&apos;t. 30 marks in Prelims is too large to leave to chance.
                </p>
              </div>
            </div>

            <HighlightBox type="success" title="Pro Tip: General Awareness Routine">
              End every day in Weeks 1–4 with 15 minutes of Current Affairs reading — a single news source, headlines only. GA cannot be crammed in the last week of Mains prep. Starting Day 1 means you&apos;ll have a running 90-day bank of events by the time Mains arrives. Students who skip GA in the first two months consistently fail Mains despite strong Prelims scores.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-bold text-slate-850 text-base mb-3 text-[#1B6EB5]">Month 2 (Weeks 5–8): Skill Building + Sectional Testing</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 5 — DI + Puzzle Introduction</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Data Interpretation: Tabular DI, Bar Graph, Line Graph</li>
                  <li>Reasoning Puzzles: Single-row linear arrangements, floor-based puzzles</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  DI and Puzzles together can account for 23–30 marks in Prelims. Start with the simplest formats first — tabular DI and linear arrangements — before moving to mixed/caselet DI and multi-variable puzzles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 6 — Advanced DI + Complex Puzzles</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Data Interpretation: Pie Charts, Caselet DI, Mixed Graph DI</li>
                  <li>Reasoning Puzzles: Circular seating (with/without directions), multi-variable puzzles</li>
                  <li><strong>Begin:</strong> Sectional mock tests (one per day for Quant and Reasoning alternately)</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  This is the hardest week of the plan. Complex DI and multi-variable puzzles demand sustained focus. Reduce GA revision to 10 minutes daily this week if needed — but don&apos;t drop it entirely.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 7 — English Language: Advanced Topics</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Para Jumbles (sentence rearrangement)</li>
                  <li>Sentence Completion and Fillers (single and double)</li>
                  <li>Reading Comprehension with inference-heavy passages</li>
                  <li>Miscellaneous: Paragraph Summary, Column-based questions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 8 — Computer Knowledge + GA Push</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Computer Awareness: Hardware/Software basics, Computer abbreviations, Input/Output devices, MS Office, Internet &amp; Networking, Shortcut keys</li>
                  <li>General Awareness: Banking &amp; Financial Awareness revision (RBI, SEBI, NABARD functions, key rates, recent policy changes)</li>
                  <li><strong>Attempt:</strong> 2–3 full-length Prelims mock tests this week</li>
                </ul>
              </div>
            </div>

            <HighlightBox type="success" title="Pro Tip: Computer Knowledge Strategy">
              Computer Knowledge is the most predictable section in IBPS PO Mains — the same set of 200–300 facts appears across cycles. Build a one-page cheat sheet of computer abbreviations (RAM, ROM, CPU, URL, HTTP, SQL, HTML) and shortcut keys (Ctrl+Z, Ctrl+S, etc.) and revise it every third day. Students who spend even 20 minutes daily on Computer Awareness for 4 weeks can expect 8–10 correct answers out of 10 in the Mains section.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-bold text-slate-850 text-base mb-3 text-[#1B6EB5]">Month 3 (Weeks 9–12): Mock-Heavy Consolidation</h3>
            <p className="mb-3">
              This is the most important month. You&apos;ve built your foundation. Now you test it, break it, and fix the breaks.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 9 — Full Mock Rollout</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Attempt 1 full Prelims mock every 2 days</li>
                  <li>Spend equal time on mock review as on the mock itself (minimum 45 minutes post-test analysis)</li>
                  <li>Identify your top 3 weakest question types. Drill those specifically with chapter-wise quizzes.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 10 — Targeted Revision</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Revisit all topics where accuracy was below 60% across your last 5 sectional tests</li>
                  <li>Attempt PYQ sets from IBPS PO 2022–2024 for Quant and Reasoning</li>
                  <li><strong>Continue:</strong> 3–4 full mocks this week</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 11 — Speed and Strategy Optimization</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>Practice time-boxing: set a 2-minute limit for individual Reasoning questions, 8-minute limit for DI sets</li>
                  <li>Work on your personal attempt order for each section (which question type you enter first, which you skip)</li>
                  <li>Attempt 2–3 full mocks under exam conditions — no phone, no breaks, same time of day as your actual exam slot</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-[15px] mb-1">Week 12 — Final Revision + Maintenance</h4>
                <ul className="list-disc list-inside space-y-1 pl-3 text-slate-600">
                  <li>No new topics. Zero exceptions.</li>
                  <li>Revise your personal error log (all mistakes from previous mocks, categorized by type)</li>
                  <li>Attempt 2 mocks for confidence maintenance, not to improve scores</li>
                  <li>Spend 30 minutes daily on GA and Banking Awareness revision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'section-topic-priority',
      title: "Section-Wise Topic Priority for IBPS PO Prelims",
      content: (
        <div className="space-y-4 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            Not all topics deserve equal time. This priority framework is built on actual question frequency from the last five IBPS PO cycles.
          </p>

          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Section</th>
                  <th className="px-4 py-2.5">Topic</th>
                  <th className="px-4 py-2.5">Avg. Questions</th>
                  <th className="px-4 py-2.5">Priority</th>
                  <th className="px-4 py-2.5">Suggested Weeks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">Quant</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Data Interpretation</td>
                  <td className="px-4 py-3">8–10</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Weeks 5–6</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-850">Quant</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Simplification / Approximation</td>
                  <td className="px-4 py-3">5–7</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 1</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">Quant</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Number Series</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 1</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-850">Quant</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Quadratic Equations</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 1</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">Quant</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Arithmetic Word Problems</td>
                  <td className="px-4 py-3">6–8</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      🟡 High
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 2</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-850">Reasoning</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Puzzles &amp; Seating Arrangements</td>
                  <td className="px-4 py-3">15–20</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Weeks 5–6</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">Reasoning</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Syllogisms</td>
                  <td className="px-4 py-3">3–5</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 3</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-850">Reasoning</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Inequalities</td>
                  <td className="px-4 py-3">3–5</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 3</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">Reasoning</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Direction Sense / Blood Relations</td>
                  <td className="px-4 py-3">4–6</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      🟡 High
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 3</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-850">English</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Reading Comprehension</td>
                  <td className="px-4 py-3">8–10</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 4</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">English</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Cloze Test</td>
                  <td className="px-4 py-3">5–7</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                      🔴 Critical
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 4</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-850">English</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Error Detection</td>
                  <td className="px-4 py-3">5–7</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      🟡 High
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 7</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-850">English</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Para Jumbles / Fillers</td>
                  <td className="px-4 py-3">5–7</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      🟡 High
                    </span>
                  </td>
                  <td className="px-4 py-3">Week 7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'mock-test-integration',
      title: "How to Integrate Mock Tests Into Your IBPS PO Study Plan",
      content: (
        <div className="space-y-6 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            Mock tests are not a measurement tool — they&apos;re a training tool. The difference between students who clear IBPS PO and those who don&apos;t often comes down to how they use their mocks, not how many they attempt.
          </p>

          <div>
            <h3 className="font-bold text-slate-850 text-base mb-2 text-[#1B6EB5]">The Right Mock Test Cadence</h3>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-650 pl-3">
              <li>
                <strong>Weeks 1–4:</strong> No full mocks. Sectional quizzes only (10–15 questions per topic after each study session).
              </li>
              <li>
                <strong>Week 5:</strong> Attempt your first sectional mock (Quant or Reasoning, 35 questions in 20 minutes). Don&apos;t judge your score — note which question types you avoided or got wrong.
              </li>
              <li>
                <strong>Weeks 6–8:</strong> One sectional mock per day, rotating across all three Prelims sections. Review immediately after each mock. Keep a running error log.
              </li>
              <li>
                <strong>Week 8:</strong> First full Prelims mock. The goal is to experience the 60-minute three-section flow, not to score high.
              </li>
              <li>
                <strong>Weeks 9–11:</strong> 3–4 full Prelims mocks per week. Spend as much time on post-mock analysis as the mock itself. Percentile tracking on PrepBanker tells you where you stand against active test-takers.
              </li>
              <li>
                <strong>Week 12:</strong> 2 mocks for maintenance. Prioritize revision over new mocks in the final 5 days.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-slate-850 text-base mb-2 text-[#1B6EB5]">How to Analyse a Mock Properly</h3>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-650 pl-3">
              <li>
                <strong>Categorize every wrong answer</strong> — concept gap, calculation error, misread question, time pressure, or careless mistake. Each type needs a different fix.
              </li>
              <li>
                <strong>Calculate your accuracy per topic type</strong> — not your total score. A total score of 22/35 with 90% accuracy on DI but 40% accuracy on Number Series tells you exactly what to revise.
              </li>
              <li>
                <strong>Check your time-per-question-type</strong> — use PrepBanker&apos;s per-question time analytics. If you&apos;re spending 4 minutes on a Simplification question, that&apos;s a calculation speed problem, not a concept problem.
              </li>
              <li>
                <strong>Review solutions for every wrong answer</strong> — not just the ones you found hard. Sometimes you got a question wrong using a correct method but made a calculation error that a faster approach would have avoided.
              </li>
              <li>
                <strong>Update your weak topic list</strong> — keep this document live. After 5 mocks, a clear pattern of consistent problem areas will emerge. That list is your revision roadmap for Month 3.
              </li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'daily-schedule',
      title: "What Does a Good IBPS PO Daily Study Schedule Look Like?",
      content: (
        <div className="space-y-4 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            Here&apos;s a sample daily schedule that balances concept study, active practice, and GA — the three pillars of IBPS PO preparation.
          </p>

          <h3 className="font-bold text-slate-850 text-base mb-2 text-[#1B6EB5]">Sample Daily Schedule (Weeks 1–5, Concept Phase)</h3>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Time</th>
                  <th className="px-4 py-2.5">Activity</th>
                  <th className="px-4 py-2.5">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">6:00 – 7:30 AM</td>
                  <td className="px-4 py-3">Concept Study (Quant or Reasoning topic)</td>
                  <td className="px-4 py-3">90 min</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">7:30 – 8:00 AM</td>
                  <td className="px-4 py-3">Practice Questions (30–40 Qs on yesterday&apos;s topic)</td>
                  <td className="px-4 py-3">30 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">8:00 – 9:00 AM</td>
                  <td className="px-4 py-3">Break / Morning routine</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">9:00 – 10:30 AM</td>
                  <td className="px-4 py-3">English concept + RC practice</td>
                  <td className="px-4 py-3">90 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">10:30 – 11:00 AM</td>
                  <td className="px-4 py-3">Current Affairs reading (newspaper headlines)</td>
                  <td className="px-4 py-3">30 min</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">11:00 AM – 12:30 PM</td>
                  <td className="px-4 py-3">DPP attempt on PrepBanker</td>
                  <td className="px-4 py-3">90 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">12:30 – 2:00 PM</td>
                  <td className="px-4 py-3">Lunch + Rest</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">2:00 – 3:30 PM</td>
                  <td className="px-4 py-3">Previous day&apos;s concept revision + formula drilling</td>
                  <td className="px-4 py-3">90 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">3:30 – 5:00 PM</td>
                  <td className="px-4 py-3">Chapter-wise quiz on PrepBanker</td>
                  <td className="px-4 py-3">90 min</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">5:00 – 7:00 PM</td>
                  <td className="px-4 py-3">Break / Personal time</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">7:00 – 8:00 PM</td>
                  <td className="px-4 py-3">Banking &amp; GA revision</td>
                  <td className="px-4 py-3">60 min</td>
                </tr>
                <tr className="bg-slate-900 text-white font-bold">
                  <td className="px-4 py-3">Total Study Time</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">~6 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 italic mt-1">
            During Weeks 9–12, replace 90 minutes of concept study with full mock attempts or post-mock analysis, keeping the total study time similar.
          </p>
        </div>
      )
    },
    {
      id: 'prepbanker-integration',
      title: "How to Use PrepBanker for Your IBPS PO Study Plan",
      content: (
        <div className="space-y-4 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            PrepBanker is structured to match each phase of the preparation journey — not just the mock test phase. Here&apos;s how to integrate the platform with this study plan:
          </p>

          <div className="space-y-4 pl-3">
            <div>
              <p>
                <strong>Weeks 1–5: Use chapter-wise quizzes after every concept session.</strong> After studying a Quant topic like Percentages, immediately attempt 20–30 questions from PrepBanker&apos;s Percentages chapter quiz. This active recall within 30 minutes of studying a concept dramatically improves retention compared to re-reading notes.
              </p>
            </div>
            <div>
              <p>
                <strong>Weeks 5–8: Use DPPs as your daily practice anchor.</strong> PrepBanker&apos;s Daily Practice Problems are released in alignment with IBPS PO patterns. Treating the DPP as a non-negotiable daily task — even on days when you feel unprepared — builds the exam-day habit of showing up regardless of confidence level.
              </p>
            </div>
            <div>
              <p>
                <strong>Weeks 6–10: Use sectional mocks to calibrate your attempt strategy.</strong> The 35-question, 20-minute sectional tests on PrepBanker train you to make real-time decisions about which questions to attempt and which to skip. PrepBanker&apos;s analytics show your time-per-question for each question type — use this data to identify where you&apos;re spending disproportionate time.
              </p>
            </div>
            <div>
              <p>
                <strong>Weeks 9–12: Use full mock analytics for percentile tracking.</strong> PrepBanker displays your percentile ranking among all students who&apos;ve attempted the same mock. This is more useful than your raw score because it shows you where you stand in the real competition pool, not against a static answer key.
              </p>
            </div>
            <div>
              <p>
                <strong>Final 2 weeks: Use PYQ sets for difficulty calibration.</strong> Attempt PrepBanker&apos;s IBPS PO Previous Year Question sets from 2021–2024. Real exam questions give you the most accurate sense of what IBPS PO actually asks — more accurate than any test-series question written to simulate the exam.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <a
              href="https://app.prepgrind.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-[#1B6EB5] hover:bg-[#15548B] transition-colors"
            >
              Register Free and Start Your IBPS PO Preparation →
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'explore-more',
      title: "Also Explore on PrepBanker",
      content: (
        <div className="space-y-4 font-normal text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            This study plan tells you what to study and when. These pages give you the tools to execute it:
          </p>
          <p>
            Start with a <Link href="/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free Full-Length IBPS PO Mock Test</Link> to get your baseline score before committing to this plan. Knowing where you currently stand on all three Prelims sections shapes which weeks of this plan need the most time from you personally.
          </p>
          <p>
            For focused sectional practice, the <Link href="/ibps-po/quantitative-aptitude-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quantitative Aptitude Sectional Test</Link> and the <Link href="/ibps-po/reasoning-ability-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Reasoning Ability Sectional Test</Link> are the two most important practice tools for Weeks 5–8 of this plan. Both are built on the actual 35-question, 20-minute format.
          </p>
          <p>
            Once you&apos;ve cleared Prelims, the <Link href="/ibps-po/mains-mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Mock Test</Link> takes you through the full 155-question, 3-hour Mains format — including the heavier DI sets and the combined Reasoning + Computer Aptitude section that trips up many Prelims qualifiers.
          </p>
          <p>
            For daily GA revision, the <Link href="/banking-awareness/quiz" className="font-bold text-[#1B6EB5] hover:underline">Banking Awareness Quiz</Link> gives you 10–15 question daily sets covering RBI policy, recent bank mergers, financial terminology, and current events — exactly the content that appears in IBPS PO Mains GA section.
          </p>
          <p>
            Finally, use the <Link href="/ibps-po/previous-year-questions" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO PYQ Sets</Link> in Weeks 10–11 to calibrate your preparation against real exam questions from 2020–2024. No mock test fully replicates the feel of a real IBPS PO paper — previous year sets come closest.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "How many months does it take to prepare for IBPS PO?",
      a: "3 months (90 days) is sufficient for IBPS PO Prelims if you study 5–7 hours daily with a structured plan. Students with prior banking exam preparation can be Prelims-ready in 6–8 weeks. For Mains, add 4–6 weeks of focused preparation after Prelims results are declared. Working professionals typically need 4–5 months with 3–4 daily study hours."
    },
    {
      q: "How many hours should I study daily for IBPS PO?",
      a: "5–7 hours per day is the recommended range for serious IBPS PO aspirants. This breaks down as: 2 hours concept study, 1.5 hours chapter quizzes or DPPs, 1 hour GA/Current Affairs, and 30–60 minutes of mock review on test days. Working professionals can achieve exam readiness with 3–4 genuinely focused hours rather than 8 distracted hours."
    },
    {
      q: "Which subject should I start studying first for IBPS PO?",
      a: "Start with your weakest subject — the one that will cost you the most marks if left unattended. For most students, this is Quantitative Aptitude. Within Quant, begin with Simplification and Number Series since they give the fastest marks for time invested. Don't start with Data Interpretation — tackle it only after building strong arithmetic foundations in Weeks 1–2."
    },
    {
      q: "When should I start attempting mock tests for IBPS PO?",
      a: "Start sectional mocks from Week 5 once you've covered at least 2–3 topics per section. Full-length Prelims mocks should begin by Week 8. Many students make the mistake of attempting full mocks too early (before any concept foundation) or too late (only in the last week). PrepBanker's analytics help you track accuracy improvement over time, making mock timing more strategic."
    },
    {
      q: "Is 3 months enough to crack IBPS PO Prelims?",
      a: "Yes — 3 months is enough to clear IBPS PO Prelims for most motivated candidates studying 5+ hours daily. The syllabus is finite and the pattern is highly predictable. What 3 months cannot guarantee is clearing the overall cut-off without consistent mock test practice and thorough post-mock analysis. The IBPS PO 2024 overall Prelims cut-off ranged from 56.25 to 66.75 for General category — achievable with structured preparation."
    },
    {
      q: "What is the best study plan for IBPS PO for working professionals?",
      a: "Working professionals should use a 4–5 month plan with 3–4 focused hours daily. Use mornings (5:30–7:30 AM) for concept study, lunch breaks for 15-minute GA revision, and evenings for chapter quizzes and DPPs. Attempt one sectional test on weekends and one full mock every two weeks. PrepBanker's mobile-responsive platform supports commute-time practice through short chapter quizzes."
    },
    {
      q: "Which topics should I focus on most in IBPS PO Quant?",
      a: "Data Interpretation (8–10 questions), Simplification and Approximation (5–7 questions), Number Series (5 questions), and Quadratic Equations (5 questions) collectively account for 23–27 of the 35 Quant questions in Prelims. Master these four topic groups first. Only after these are solid should you spend time on lower-weightage topics like Mensuration, Permutation and Combination, or Probability."
    },
    {
      q: "How should I prepare for IBPS PO General Awareness?",
      a: "IBPS PO Mains GA focuses 60% on Banking and Financial Awareness and 40% on Static GK and Current Affairs. Read headlines daily (15 minutes — The Hindu or Financial Express), maintain a monthly current affairs PDF, and revise banking terminology weekly (repo rate, CRR, SLR, RBI governor, recent bank mergers). Start from Day 1 — GA cannot be crammed effectively in the final week."
    },
    {
      q: "Is PrepBanker's IBPS PO study plan and mock test free?",
      a: "Yes. PrepBanker offers free access to IBPS PO sectional tests, DPPs, and chapter-wise quizzes after free registration at app.prepgrind.com. The study plan on this page is completely free to follow. Full mock test series access is available within the platform — initial tests are free, and the registration process takes under 2 minutes."
    },
    {
      q: "What should I do in the last 30 days before IBPS PO Prelims?",
      a: "In the final 30 days: attempt 2–3 full Prelims mocks per week, spend 60–90 minutes reviewing each mock (not just checking the score), revise your personal error log weekly, and stop starting new topics. Do one PYQ set per week. Reduce new content to 20% of your study time — the remaining 80% should be active practice and revision of what you already know."
    },
    {
      q: "How is the IBPS PO Prelims score calculated?",
      a: "Each correct answer in IBPS PO Prelims earns 1 mark. Each wrong answer deducts 0.25 marks. Unattempted questions carry no penalty. The total is 100 marks across three sections (English: 30, Quant: 35, Reasoning: 35). Both sectional cut-offs and an overall cut-off must be cleared simultaneously — clearing only two out of three sectional cut-offs results in disqualification regardless of total score."
    }
  ]
};

