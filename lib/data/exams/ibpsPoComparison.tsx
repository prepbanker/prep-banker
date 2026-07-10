import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const ibpsPoComparisonContent: DetailSectionContent = {
  title: "IBPS PO vs SBI PO 2026 — Which Exam Should You Target?",
  overview: "Both IBPS PO and SBI PO are Probationary Officer exams for public sector banking careers in India, but they differ significantly in difficulty, salary, vacancies, exam pattern, and career trajectory. IBPS PO recruits for 11 public sector banks simultaneously. SBI PO recruits only for State Bank of India — but with higher pay, greater prestige, and faster career growth.",
  ctaText: "Register Free and Start Mock Tests for IBPS PO + SBI PO →",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "IBPS PO vs SBI PO – Key Differences Explained",
  metaDescription: "IBPS PO vs SBI PO 2026: compare exam pattern, difficulty, salary, vacancies, and cut-offs side by side. Find out which exam to attempt first and how to prepare.",
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
              { "@type": "ListItem", "position": 3, "name": "IBPS PO vs SBI PO", "item": "https://prepbanker.com/ibps-po/ibps-po-vs-sbi-po" }
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
            "name": "IBPS PO vs SBI PO 2026 – Key Differences Explained",
            "url": "https://prepbanker.com/ibps-po/ibps-po-vs-sbi-po",
            "description": "IBPS PO vs SBI PO 2026: compare exam pattern, difficulty, salary, vacancies, and cut-offs side by side. Find out which exam to attempt first and how to prepare.",
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
            "headline": "IBPS PO vs SBI PO 2026 – Key Differences Explained",
            "description": "A complete comparison of IBPS PO and SBI PO — exam pattern, difficulty, salary, vacancies, cut-offs, and which to attempt first.",
            "url": "https://prepbanker.com/ibps-po/ibps-po-vs-sbi-po",
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
            "about": [
              { "@type": "Thing", "name": "IBPS PO" },
              { "@type": "Thing", "name": "SBI PO" }
            ]
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
                "name": "Which is harder — IBPS PO or SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO is generally considered harder than IBPS PO. SBI PO Prelims and Mains both feature more unconventional question types, higher difficulty DI sets, and a subjective descriptive paper in Mains. IBPS PO follows a more predictable pattern. Both exams share the same core syllabus, but SBI PO demands a higher accuracy threshold."
                }
              },
              {
                "@type": "Question",
                "name": "Which has more vacancies — IBPS PO or SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IBPS PO typically has more vacancies. IBPS PO 2025 had 4,455 vacancies across 11 public sector banks. SBI PO 2024 had approximately 2,200 vacancies in a single bank. However, SBI PO is considered more prestigious, so competition per vacancy is higher for SBI PO."
                }
              },
              {
                "@type": "Question",
                "name": "Is SBI PO salary better than IBPS PO salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO has a higher starting salary. SBI PO (Junior Management Grade Scale I) starts at approximately ₹48,480 basic pay with a CTC of ₹21.97 lakh per annum (Mumbai centre). IBPS PO (Scale I Officer) starts at approximately ₹36,000 basic pay with a CTC of around ₹7.5–8.2 lakh per annum, varying by bank."
                }
              },
              {
                "@type": "Question",
                "name": "Can I prepare for IBPS PO and SBI PO together?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the core syllabus for Prelims (Quant, Reasoning, English) is nearly identical. Most students prepare for both simultaneously. The key difference is in Mains: SBI PO Mains includes a 50-mark descriptive paper (Letter + Essay writing) that IBPS PO does not, so add that to your SBI PO preparation separately."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between IBPS PO and SBI PO exam pattern?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both have a 3-stage process: Prelims, Mains, and Interview. IBPS PO Prelims is 100 marks in 60 minutes; SBI PO Prelims is 100 marks in 60 minutes — identical. IBPS PO Mains is 200 marks (objective only); SBI PO Mains is 250 marks including a 50-mark descriptive paper. SBI PO also includes a Group Exercise round."
                }
              },
              {
                "@type": "Question",
                "name": "Which exam should a fresher attempt first — IBPS PO or SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most coaches recommend attempting SBI PO first. SBI PO has an earlier notification cycle (typically April–May) and its higher difficulty means that if you prepare seriously for SBI PO, IBPS PO (notified in August) becomes more manageable. It also gives you live exam experience before IBPS PO Prelims."
                }
              },
              {
                "@type": "Question",
                "name": "Does IBPS PO have a descriptive paper like SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. IBPS PO Mains is entirely objective (MCQ-based) across 4 sections for 200 marks. SBI PO Mains includes a 50-mark descriptive paper — a 30-minute English writing test covering Letter Writing and Essay. This is a significant structural difference that requires separate preparation for SBI PO aspirants."
                }
              },
              {
                "@type": "Question",
                "name": "What is the age limit for IBPS PO vs SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both exams have the same age eligibility: 20–30 years for General category candidates. Standard relaxations apply — 3 years for OBC, 5 years for SC/ST, 10 years for PwBD candidates. The age is calculated as of a reference date specified in the official notification for each cycle."
                }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker's IBPS PO vs SBI PO mock test free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker offers free mock tests for both IBPS PO and SBI PO, including full-length Prelims and Mains mocks built on each exam's specific pattern. Registration at app.prepgrind.com gives you access to free tests. Separate SBI PO mocks include the descriptive paper simulation."
                }
              },
              {
                "@type": "Question",
                "name": "Which exam has a better posting location — IBPS PO or SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO postings are generally in larger urban centers since SBI has a massive presence in metro and Tier-1 cities. IBPS PO postings depend on the allotted bank — some like Bank of Baroda and Canara Bank have strong urban networks, while others post extensively in rural and semi-urban branches."
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
      id: "quick-snapshot",
      title: "Quick Comparison Snapshot — IBPS PO vs SBI PO 2026",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The core parameter comparisons between IBPS PO and SBI PO recruitments are summarized in the side-by-side snapshot table below:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">IBPS PO</th>
                  <th className="px-4 py-2.5">SBI PO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Conducting Body</td>
                  <td className="px-4 py-3">IBPS</td>
                  <td className="px-4 py-3">SBI (self-conducted)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Banks Covered</td>
                  <td className="px-4 py-3">11 public sector banks</td>
                  <td className="px-4 py-3">State Bank of India only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Expected Vacancies (2026)</td>
                  <td className="px-4 py-3">~4,000–5,000</td>
                  <td className="px-4 py-3">~2,000–2,500</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims Pattern</td>
                  <td className="px-4 py-3">100 marks / 60 min</td>
                  <td className="px-4 py-3">100 marks / 60 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains Pattern</td>
                  <td className="px-4 py-3">200 marks (objective)</td>
                  <td className="px-4 py-3">250 marks (obj + descriptive)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Interview</td>
                  <td className="px-4 py-3">Yes (100 marks)</td>
                  <td className="px-4 py-3">Yes + Group Exercise</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Starting Salary (approx.)</td>
                  <td className="px-4 py-3">₹7.5–8.2 LPA</td>
                  <td className="px-4 py-3">₹8.2–8.9 LPA</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Notification (Expected 2026)</td>
                  <td className="px-4 py-3">August 2026</td>
                  <td className="px-4 py-3">April–May 2026</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Age Limit</td>
                  <td className="px-4 py-3">20–30 years</td>
                  <td className="px-4 py-3">20–30 years</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Negative Marking</td>
                  <td className="px-4 py-3">−0.25 per wrong answer</td>
                  <td className="px-4 py-3">−0.25 per wrong answer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "exam-pattern",
      title: "IBPS PO vs SBI PO: Exam Pattern Compared Side by Side",
      content: (
        <div className="space-y-6">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            The Prelims stage for both exams is structurally identical — 100 questions, 100 marks, 60 minutes, three sections with individual timers. But Mains is where the exams diverge sharply.
          </p>

          <div>
            <h3 className="text-base font-bold text-slate-800 mb-3">Prelims Pattern — IBPS PO vs SBI PO</h3>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Section</th>
                    <th className="px-4 py-2.5">IBPS PO Prelims</th>
                    <th className="px-4 py-2.5">SBI PO Prelims</th>
                    <th className="px-4 py-2.5">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                    <td className="px-4 py-3">30 Q / 30 marks</td>
                    <td className="px-4 py-3">30 Q / 30 marks</td>
                    <td className="px-4 py-3">20 min</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Quantitative Aptitude</td>
                    <td className="px-4 py-3">35 Q / 35 marks</td>
                    <td className="px-4 py-3">35 Q / 35 marks</td>
                    <td className="px-4 py-3">20 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reasoning Ability</td>
                    <td className="px-4 py-3">35 Q / 35 marks</td>
                    <td className="px-4 py-3">35 Q / 35 marks</td>
                    <td className="px-4 py-3">20 min</td>
                  </tr>
                  <tr className="bg-slate-900 text-white font-bold">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">100 Q / 100 marks</td>
                    <td className="px-4 py-3">100 Q / 100 marks</td>
                    <td className="px-4 py-3">60 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              The Prelims pattern is a mirror image. Same sections, same question counts, same time limits, same negative marking. If you're preparing for one, you're simultaneously preparing for the other's Prelims.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-800 mb-3">Mains Pattern — IBPS PO vs SBI PO</h3>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Section</th>
                    <th className="px-4 py-2.5">IBPS PO Mains</th>
                    <th className="px-4 py-2.5">SBI PO Mains</th>
                    <th className="px-4 py-2.5">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reasoning & Computer Aptitude</td>
                    <td className="px-4 py-3">45 Q / 60 marks</td>
                    <td className="px-4 py-3">45 Q / 60 marks</td>
                    <td className="px-4 py-3">60 min</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Data Analysis & Interpretation</td>
                    <td className="px-4 py-3">35 Q / 60 marks</td>
                    <td className="px-4 py-3">35 Q / 60 marks</td>
                    <td className="px-4 py-3">45 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">General, Economy & Banking Awareness</td>
                    <td className="px-4 py-3">40 Q / 40 marks</td>
                    <td className="px-4 py-3">40 Q / 40 marks</td>
                    <td className="px-4 py-3">35 min</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                    <td className="px-4 py-3">35 Q / 40 marks</td>
                    <td className="px-4 py-3">35 Q / 40 marks</td>
                    <td className="px-4 py-3">40 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Descriptive Paper</td>
                    <td className="px-4 py-3">Not present</td>
                    <td className="px-4 py-3">2 Q / 50 marks</td>
                    <td className="px-4 py-3">30 min</td>
                  </tr>
                  <tr className="bg-slate-900 text-white font-bold">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">155 Q / 200 marks</td>
                    <td className="px-4 py-3">157 Q / 250 marks</td>
                    <td className="px-4 py-3">180 / 210 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              The 50-mark descriptive paper is the biggest structural difference. SBI PO Mains requires a 30-minute English writing test immediately after the objective paper — typically one letter (formal or informal) and one essay. No such component exists in IBPS PO Mains. If you're targeting SBI PO, descriptive writing practice is non-negotiable from Day 1 of Mains prep.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-800 mb-3">Final Selection Process</h3>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Stage</th>
                    <th className="px-4 py-2.5">IBPS PO</th>
                    <th className="px-4 py-2.5">SBI PO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Prelims</td>
                    <td className="px-4 py-3">Qualifying</td>
                    <td className="px-4 py-3">Qualifying</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Mains</td>
                    <td className="px-4 py-3">Merit-based shortlisting</td>
                    <td className="px-4 py-3">Merit-based shortlisting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Group Exercise</td>
                    <td className="px-4 py-3">Not present</td>
                    <td className="px-4 py-3">Yes (Group Discussion format)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Interview</td>
                    <td className="px-4 py-3">100 marks</td>
                    <td className="px-4 py-3">30 marks</td>
                  </tr>
                  <tr className="bg-slate-900 text-white font-bold">
                    <td className="px-4 py-3">Final Merit</td>
                    <td className="px-4 py-3">Mains + Interview</td>
                    <td className="px-4 py-3">Mains + GE + Interview</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
              SBI PO adds a Group Exercise (GE) round between Mains and Interview. This is essentially a Group Discussion where 8–10 candidates discuss a banking or current affairs topic. IBPS PO has no equivalent round.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "difficulty-level",
      title: "Which Is Harder — IBPS PO or SBI PO?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            This is the most searched question among students preparing for both, and the honest answer is: <strong>SBI PO is harder, consistently and meaningfully.</strong>
          </p>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Why SBI PO Is Harder</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              The difficulty gap shows up at every stage. In Prelims, the overall structure looks the same, but SBI PO questions — especially in Quant DI and Reasoning puzzles — tend to be a notch harder and include unconventional formats that haven't appeared in IBPS PO papers. SBI PO has historically introduced new question types (caselet DI, coded inequalities, complex input-output variants) in Prelims before they migrate to IBPS PO papers a cycle or two later.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              In Mains, the difficulty escalates further. SBI PO Mains DI sets are data-heavy, multi-step, and often require combining two data sources. The Reasoning section includes more complex puzzles with 3–4 variables. And then there's the descriptive paper — a genuinely differentiating component that tests written communication, which many Quant-strong students struggle with.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">IBPS PO vs SBI PO — Prelims Cut-Off Comparison (General Category)</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Year</th>
                    <th className="px-4 py-2.5">IBPS PO Overall Prelims Cut-Off</th>
                    <th className="px-4 py-2.5">SBI PO Overall Prelims Cut-Off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                    <td className="px-4 py-3">56.25 – 66.75</td>
                    <td className="px-4 py-3">62.00 – 72.50</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                    <td className="px-4 py-3">52.00 – 63.50</td>
                    <td className="px-4 py-3">58.75 – 70.25</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                    <td className="px-4 py-3">54.75 – 65.00</td>
                    <td className="px-4 py-3">60.50 – 71.00</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                    <td className="px-4 py-3">50.00 – 62.25</td>
                    <td className="px-4 py-3">57.00 – 69.50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">2020</td>
                    <td className="px-4 py-3">46.00 – 58.50</td>
                    <td className="px-4 py-3">53.25 – 65.75</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              *Cut-offs vary by state and category. Source: Official IBPS and SBI result notifications.
            </p>
          </div>

          <HighlightBox type="success" title="Pro Tip">
            Use SBI PO as your benchmark exam and IBPS PO as your target exam. Prepare to the standard required to crack SBI PO — if you achieve that, you'll clear IBPS PO more comfortably. Students who do it the other way (prepare for IBPS PO difficulty and then attempt SBI PO) often find SBI PO's Mains and descriptive paper a rude shock.
          </HighlightBox>
        </div>
      )
    },
    {
      id: "salary",
      title: "IBPS PO vs SBI PO Salary: What Do You Actually Earn?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            Salary is a key decision factor for most students, and the gap between IBPS PO and SBI PO is real — both in starting pay and in long-term growth.
          </p>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Salary Comparison — IBPS PO vs SBI PO (2026)</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Component</th>
                    <th className="px-4 py-2.5">IBPS PO (Scale I Officer)</th>
                    <th className="px-4 py-2.5">SBI PO (JMGS-I)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Basic Pay</td>
                    <td className="px-4 py-3">~₹36,000/month</td>
                    <td className="px-4 py-3">~₹48,480/month</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">DA (Dearness Allowance)</td>
                    <td className="px-4 py-3">~₹15,000–18,000</td>
                    <td className="px-4 py-3">~₹17,000–20,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">HRA (City-based)</td>
                    <td className="px-4 py-3">₹2,700–5,400</td>
                    <td className="px-4 py-3">₹3,000–6,300</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance</td>
                    <td className="px-4 py-3">~₹5,000</td>
                    <td className="px-4 py-3">~₹6,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Gross In-Hand</td>
                    <td className="px-4 py-3">~₹52,000–62,000</td>
                    <td className="px-4 py-3">~₹60,000–70,000</td>
                  </tr>
                  <tr className="bg-slate-900 text-white font-bold">
                    <td className="px-4 py-3">Approx. Annual CTC</td>
                    <td className="px-4 py-3">~₹7.5–8.2 LPA</td>
                    <td className="px-4 py-3">~₹8.2–8.9 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              *Figures are approximate. Exact salary varies by bank for IBPS PO and by city type. DA is revised quarterly by IBA.
            </p>
            <p className="text-slate-650 text-sm leading-relaxed mt-3">
              The monthly in-hand difference is approximately ₹8,000–12,000 in favor of SBI PO — which compounds significantly over a career. Beyond starting salary, SBI PO officers benefit from SBI's larger internal promotion pipeline, faster movement to Scale II (Senior Manager), and access to SBI's staff home loan and car loan schemes at heavily subsidized rates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "career-growth",
      title: "IBPS PO vs SBI PO: Career Growth and Job Profile",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            Salary is one part of the comparison. Career trajectory is another — and here the differences are more nuanced.
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">IBPS PO</th>
                  <th className="px-4 py-2.5">SBI PO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Entry Grade</td>
                  <td className="px-4 py-3">Scale I (Officer)</td>
                  <td className="px-4 py-3">JMGS-I (Junior Management)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">First Promotion (to Scale II)</td>
                  <td className="px-4 py-3">3–5 years typically</td>
                  <td className="px-4 py-3">3–4 years typically</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Top of the pyramid</td>
                  <td className="px-4 py-3">CMD of respective bank</td>
                  <td className="px-4 py-3">Chairman of SBI</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Inter-bank transfer</td>
                  <td className="px-4 py-3">Not applicable</td>
                  <td className="px-4 py-3">Internal SBI transfers only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Bank brand recognition</td>
                  <td className="px-4 py-3">Varies (PNB, BOB, Canara, etc.)</td>
                  <td className="px-4 py-3">SBI — strongest brand</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">NPA / work pressure</td>
                  <td className="px-4 py-3">Varies by bank</td>
                  <td className="px-4 py-3">High in some branches</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Urban vs rural posting</td>
                  <td className="px-4 py-3">Depends on allotted bank</td>
                  <td className="px-4 py-3">More urban centers available</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-650 text-sm leading-relaxed">
            SBI PO has a clear advantage in brand prestige and the internal growth pipeline. State Bank of India is India's largest public sector bank by assets, with over 22,000 branches — which means internal transfer options and career mobility are significantly better than most IBPS-allocated banks.
          </p>
          <p className="text-slate-650 text-sm leading-relaxed">
            ...
          </p>
          <p className="text-slate-650 text-sm leading-relaxed">
            That said, IBPS PO is not a consolation prize. Banks like Bank of Baroda, Canara Bank, and Punjab National Bank offer strong career paths, particularly if you're posted to metro branches. And for students who don't clear SBI PO's higher difficulty threshold, IBPS PO is a genuinely strong career option.
          </p>
        </div>
      )
    },
    {
      id: "which-exam-first",
      title: "Which Exam Should You Attempt First?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            This is the second-most common question students ask, and the answer has a clear logic.
          </p>
          <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Attempt SBI PO First — Here's Why</h4>
          <ol className="list-decimal list-inside space-y-2.5 text-slate-650 text-sm leading-relaxed pl-3 font-normal">
            <li><strong>SBI PO notification comes first.</strong> SBI PO typically releases its notification in April–May and conducts Prelims in June–July. IBPS PO notification comes in August–September with Prelims in October. This means SBI PO Prelims happens 3–4 months before IBPS PO Prelims.</li>
            <li><strong>Preparing for SBI PO difficulty makes IBPS PO easier.</strong> A student who trains seriously for SBI PO — including Mains-level DI, descriptive writing, and the Group Exercise — will find IBPS PO more manageable. The reverse is not consistently true.</li>
            <li><strong>You get live exam experience.</strong> Attempting SBI PO Prelims before IBPS PO gives you real CBT experience — how your fingers move on the keyboard, how the 20-minute sectional timer feels, how your mind handles exam pressure. That experience is worth more than five additional mock tests.</li>
            <li><strong>Descriptive prep has no downside.</strong> The Letter + Essay writing practice you do for SBI PO Mains sharpens your English language skills, which benefits your IBPS PO English section too.</li>
            <li><strong>Both exams have the same Prelims syllabus.</strong> There's no syllabus conflict. The same Quant, Reasoning, and English preparation covers both Prelims stages completely.</li>
          </ol>
          <HighlightBox type="info" title="Pro Tip">
            If you're a first-year aspirant, create a combined preparation schedule that treats the SBI PO standard as your target level and the IBPS PO standard as your floor. Attempt all relevant sectional mocks on PrepBanker under both exam patterns so you experience the difficulty gap firsthand — not just read about it.
          </HighlightBox>
        </div>
      )
    },
    {
      id: "prepbanker-usage",
      title: "How to Use PrepBanker to Prepare for Both IBPS PO and SBI PO",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            PrepBanker is structured to support combined IBPS PO + SBI PO preparation without doubling your workload, because the core preparation is shared — only the Mains strategy diverges.
          </p>
          <div className="space-y-3.5 text-slate-650 text-sm leading-relaxed pl-3 font-normal">
            <p>
              <strong>Step 1 — Use the IBPS PO and SBI PO mock test series separately.</strong><br />
              Both are available on PrepBanker. The Prelims mocks are near-identical in structure but calibrated to each exam's difficulty level. Start with IBPS PO Prelims mocks to build baseline confidence, then shift to SBI PO Prelims mocks to stress-test yourself against harder questions.
            </p>
            <p>
              <strong>Step 2 — Sectional tests cover both exams simultaneously.</strong><br />
              The Quantitative Aptitude, Reasoning Ability, and English Language sectional tests on PrepBanker are built at a difficulty level that serves both IBPS PO and SBI PO preparation. There's no need to do separate sectional tests for each exam at the Prelims level.
            </p>
            <p>
              <strong>Step 3 — Use chapter-wise quizzes to fill topic gaps.</strong><br />
              PrepBanker's chapter-wise quizzes for DI, Puzzles, Cloze Test, and other high-weightage topics let you drill the formats that appear in both exams without sitting through a full 60-minute mock every time.
            </p>
            <p>
              <strong>Step 4 — Switch to SBI PO Mains mocks for the descriptive component.</strong><br />
              When you shift your preparation to Mains, use PrepBanker's SBI PO Mains mock tests — which include a timed descriptive writing simulation — to practice Letter and Essay writing alongside the objective paper. This is the one area where your preparation must be exam-specific.
            </p>
            <p>
              <strong>Step 5 — Review performance analytics across both exam patterns.</strong><br />
              PrepBanker's analytics show your topic-wise accuracy, time-per-question, and percentile ranking. Cross-referencing your performance on IBPS PO mocks vs. SBI PO mocks gives you a real-time difficulty calibration — you can see exactly where the gap is and what to fix.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "explore-more",
      title: "Also Explore on PrepBanker",
      content: (
        <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed">
          <p>
            This comparison gives you the strategic picture. These pages on PrepBanker give you the practical tools to act on it:
          </p>
          <p>
            Attempt the <Link href="/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free Full-Length IBPS PO Mock Test</Link> to experience the actual Prelims pattern — 100 questions, 60 minutes, three sectional timers. This is the fastest way to benchmark where you currently stand on IBPS PO difficulty.
          </p>
          <p>
            For SBI PO-specific practice, the <Link href="/sbi-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free SBI PO Full Mock Test</Link> is built to SBI's harder difficulty standard — including more complex DI sets and unconventional Reasoning formats that mirror what SBI PO Prelims has delivered in recent years.
          </p>
          <p>
            If the Quantitative Aptitude section is your concern, compare how IBPS PO and SBI PO Quant differ in practice by attempting both the <Link href="/ibps-po/quantitative-aptitude-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quantitative Aptitude Sectional Test</Link> and the <Link href="/sbi-po/quantitative-aptitude-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Quantitative Aptitude Sectional Test</Link> back-to-back. The difficulty gap becomes immediately tangible.
          </p>
          <p>
            The <Link href="/ibps-po/reasoning-ability-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Reasoning Ability Test</Link> and <Link href="/sbi-po/reasoning-ability-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Reasoning Ability Test</Link> are equally useful for side-by-side comparison — particularly for puzzle formats, where the two exams diverge most visibly.
          </p>
          <p>
            For students focused on Mains preparation, the <Link href="/sbi-po/descriptive-paper" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Descriptive Paper Practice</Link> page covers Letter Writing and Essay formats, sample answers, and a timed writing simulation — the one component that exists only in SBI PO Mains.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "Which is harder — IBPS PO or SBI PO?",
      a: "SBI PO is consistently harder than IBPS PO. SBI PO Prelims and Mains feature more complex DI sets, unconventional puzzle variants, and a 50-mark descriptive paper in Mains that IBPS PO does not have. SBI PO Prelims cut-offs have been 5–8 marks higher than IBPS PO across every recent cycle, reflecting both higher difficulty and a more competitive applicant pool."
    },
    {
      q: "Which has more vacancies — IBPS PO or SBI PO?",
      a: "IBPS PO has more vacancies. IBPS PO 2025 had 4,455 vacancies across 11 public sector banks. SBI PO 2024 had approximately 2,200 vacancies in a single bank. However, because SBI PO is more prestigious, competition per vacancy is higher. More total vacancies in IBPS PO means a relatively better selection probability for candidates of equal preparation."
    },
    {
      q: "Is SBI PO salary higher than IBPS PO?",
      a: "Yes. SBI PO starts at approximately ₹48,480 basic pay with a gross monthly in-hand of ₹71,000–75,000 and a CTC of ₹21.97 lakh. IBPS PO starts at approximately ₹36,000 basic pay with a gross of ₹52,000–62,000 and a CTC of ₹7.5–8.2 LPA. The gap is significant, and it widens with promotions."
    },
    {
      q: "Can I prepare for IBPS PO and SBI PO at the same time?",
      a: "Yes — Prelims preparation is almost entirely shared. The Quantitative Aptitude, Reasoning Ability, and English Language syllabus is identical for both Prelims stages. The divergence starts at Mains: SBI PO has a 50-mark descriptive paper (Letter + Essay writing) and a Group Exercise round that IBPS PO does not. Add descriptive writing practice to your schedule specifically for SBI PO Mains."
    },
    {
      q: "What is the main difference between IBPS PO and SBI PO exam pattern?",
      a: "The Prelims pattern is identical — 100 questions, 100 marks, 60 minutes, three sections. The key differences are at Mains: SBI PO Mains includes a 50-mark descriptive paper (30 minutes) that IBPS PO does not have. SBI PO's final selection also includes a Group Exercise round. IBPS PO Interview is worth 100 marks; SBI PO Interview is worth 30 marks within a combined GE + Interview score."
    },
    {
      q: "Which exam should a fresher target first — IBPS PO or SBI PO?",
      a: "Most preparation coaches recommend targeting SBI PO first, since its notification and exam dates come earlier in the calendar year (April–June vs. August–October for IBPS PO). Preparing seriously for SBI PO's higher difficulty standard gives you a preparation advantage when IBPS PO arrives. It also provides live exam experience before your IBPS PO attempt, which is undervalued by most first-time aspirants."
    },
    {
      q: "Does IBPS PO have a descriptive paper like SBI PO?",
      a: "No. IBPS PO Mains is entirely objective — 155 questions, 200 marks, across four sections. SBI PO Mains includes a 50-mark descriptive paper immediately after the objective paper — typically one formal or informal letter and one essay, completed in 30 minutes. This makes SBI PO Mains meaningfully more demanding for students who are stronger in Quant and Reasoning than in written English."
    },
    {
      q: "What is the age limit for IBPS PO and SBI PO?",
      a: "Both exams set the same age eligibility: 20–30 years for General category candidates. Standard relaxations apply: 3 years for OBC (non-creamy layer), 5 years for SC/ST, 10 years for PwBD. Age is calculated as of a reference date specified in each cycle's official notification — typically the start date of the application window."
    },
    {
      q: "Is PrepBanker's mock test free for both IBPS PO and SBI PO?",
      a: "Yes. PrepBanker offers free mock tests for both IBPS PO and SBI PO — including Prelims and Mains mocks built on each exam's specific pattern. Registration at app.prepgrind.com is free. SBI PO mocks on PrepBanker include the descriptive paper simulation alongside the objective Mains mock, which is something most free platforms don't provide."
    },
    {
      q: "Which exam has better job security and career growth?",
      a: "Both offer permanent government employment with strong job security. Career growth is faster at SBI due to its larger promotion pipeline and internal transfer mobility across 22,000+ branches. IBPS PO officers in banks like Bank of Baroda and Canara Bank also have strong growth tracks. The difference is in brand prestige and salary ceiling — SBI PO has a higher ceiling at both senior and executive management levels."
    },
    {
      q: "How many students appear for IBPS PO vs SBI PO each year?",
      a: "IBPS PO attracts approximately 13–15 lakh registered applicants per cycle, of which roughly 9–10 lakh actually appear for Prelims. SBI PO attracts approximately 20–25 lakh registered applicants, with roughly 14–16 lakh appearing — making it one of the most attempted banking exams in India. The higher SBI PO applicant count reflects its prestige, and it directly pushes cut-offs higher."
    }
  ]
};

