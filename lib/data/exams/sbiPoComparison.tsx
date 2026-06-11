import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoComparisonContent: DetailSectionContent = {
  title: "SBI PO vs IBPS PO 2026 – What's the Real Difference?",
  overview: "SBI PO and IBPS PO are both Probationary Officer exams for public sector banks, but they are not the same exam. SBI PO is conducted by SBI for its own branches, pays more, has fewer vacancies, and is harder. IBPS PO is conducted by IBPS for 11+ other public sector banks, has 5–6x more vacancies, and is slightly easier. Both are worth attempting — and their syllabi overlap enough that preparing for one covers roughly 90% of the other.",
  ctaText: "Start Free SBI PO vs IBPS PO Prep",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "SBI PO vs IBPS PO – Exam Difference Explained",
  metaDescription: "SBI PO vs IBPS PO 2026: compare salary, exam pattern, difficulty, cut-offs, and vacancies. Find which exam to prioritise and start free mock tests.",
  customSchemas: (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SBI PO vs IBPS PO 2026 – Exam Difference Explained",
            "url": "https://app.prepbanker.com/sbi-po/sbi-po-vs-ibps-po",
            "description": "Complete SBI PO vs IBPS PO 2026 comparison — salary, exam pattern, difficulty, vacancies, cut-offs, and which exam to prioritise for banking aspirants.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "inLanguage": "en-IN",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://app.prepbanker.com" },
                { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://app.prepbanker.com/sbi-po" },
                { "@type": "ListItem", "position": 3, "name": "SBI PO vs IBPS PO", "item": "https://app.prepbanker.com/sbi-po/sbi-po-vs-ibps-po" }
              ]
            }
          })
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://app.prepbanker.com" },
              { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://app.prepbanker.com/sbi-po" },
              { "@type": "ListItem", "position": 3, "name": "SBI PO vs IBPS PO 2026", "item": "https://app.prepbanker.com/sbi-po/sbi-po-vs-ibps-po" }
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
            "headline": "SBI PO vs IBPS PO 2026 – Complete Exam Comparison",
            "description": "Detailed comparison of SBI PO and IBPS PO 2026 covering exam pattern, difficulty, salary, vacancies, cut-offs, and preparation strategy for banking aspirants.",
            "url": "https://app.prepbanker.com/sbi-po/sbi-po-vs-ibps-po",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "inLanguage": "en-IN",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker Expert Team",
              "url": "https://app.prepbanker.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://app.prepbanker.com/assets/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://app.prepbanker.com/sbi-po/sbi-po-vs-ibps-po"
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
                "name": "What is the main difference between SBI PO and IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO is conducted by the State Bank of India for SBI's own PO vacancies, while IBPS PO is conducted by the Institute of Banking Personnel Selection for 11+ public sector banks excluding SBI. SBI PO typically offers a higher starting salary, fewer vacancies, and slightly harder exams. Both are for the same Probationary Officer role."
                }
              },
              {
                "@type": "Question",
                "name": "Which exam is harder — SBI PO or IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO is generally considered harder than IBPS PO. The Prelims difficulty is slightly higher for SBI PO, especially in Reasoning (more complex puzzles) and Quant (harder DI sets). The Mains exam is significantly harder for SBI PO, with a more complex General Awareness section and tougher Data Analysis questions."
                }
              },
              {
                "@type": "Question",
                "name": "Which has better salary — SBI PO or IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO has a higher starting salary. An SBI PO's basic pay starts at ₹41,960/month (JMG Scale I) with a gross CTC of approximately ₹8–8.5 lakh per annum including allowances. IBPS PO basic pay starts at ₹36,000/month with a gross CTC of approximately ₹6.5–7.5 lakh per annum, varying by bank and posting location."
                }
              },
              {
                "@type": "Question",
                "name": "Can I prepare for SBI PO and IBPS PO together?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The syllabi overlap by roughly 85–90%. Both share the same Prelims topics (Quant, Reasoning, English). For Mains, SBI PO has slightly harder Data Analysis and a tougher GA section. Preparing for SBI PO standard automatically covers IBPS PO — just add IBPS-specific mock tests 4–5 weeks before the IBPS exam."
                }
              },
              {
                "@type": "Question",
                "name": "How many vacancies are there in SBI PO vs IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO 2026 is expected to announce approximately 600 vacancies (as per historical trend). IBPS PO consistently announces more — typically 3,500–4,500 vacancies across 11+ public sector banks. IBPS PO therefore has significantly more seats, making it statistically easier to get selected in terms of competition per vacancy."
                }
              },
              {
                "@type": "Question",
                "name": "Is the SBI PO interview harder than IBPS PO interview?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI's Group Exercise and Interview (Phase 3) is considered more rigorous than IBPS PO's interview. SBI's process includes a Group Discussion/Group Exercise round before the personal interview, which IBPS PO does not have. SBI interviewers tend to probe banking knowledge and situational judgment more deeply."
                }
              },
              {
                "@type": "Question",
                "name": "Which exam should I attempt first — SBI PO or IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If both exams fall in the same year, attempt SBI PO first if it's scheduled earlier and your preparation is strong. SBI PO preparation builds a strong foundation for IBPS PO. If you're a first-time aspirant, many coaching experts recommend attempting IBPS PO first to gain exam experience before facing the tougher SBI PO."
                }
              },
              {
                "@type": "Question",
                "name": "What is the exam pattern difference between SBI PO and IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both have 3-stage selection: Prelims, Mains, and Interview. SBI PO Prelims has 100 questions in 60 minutes; IBPS PO Prelims is identical. SBI PO Mains has 155 questions in 180 minutes plus a descriptive paper; IBPS PO Mains is similar. SBI PO adds a Group Exercise before the interview; IBPS PO does not."
                }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker useful for both SBI PO and IBPS PO preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker offers separate test series for SBI PO and IBPS PO, with mock tests calibrated to each exam's specific difficulty and pattern. Since the syllabi overlap heavily, completing the SBI PO test series on PrepBanker gives you a strong base for IBPS PO. Both series are accessible after free registration."
                }
              },
              {
                "@type": "Question",
                "name": "What is the posting difference between SBI PO and IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO officers are posted in SBI branches anywhere in India, including remote areas and rural postings in the first few years. IBPS PO officers are posted in one of 11+ public sector banks based on preference and allotment. SBI is one of the largest bank networks in the world with over 22,000 branches."
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
      id: 'quick-snapshot',
      title: "Quick Snapshot: SBI PO vs IBPS PO at a Glance",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The core parameter comparisons between SBI PO and IBPS PO recruitments are summarized in the side-by-side snapshot table below:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">SBI PO 2026</th>
                  <th className="px-4 py-2.5">IBPS PO 2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Conducting Body</td>
                  <td className="px-4 py-3">State Bank of India</td>
                  <td className="px-4 py-3">Institute of Banking Personnel Selection</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Banks Covered</td>
                  <td className="px-4 py-3">SBI only</td>
                  <td className="px-4 py-3">11+ public sector banks</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Expected Vacancies</td>
                  <td className="px-4 py-3">~600</td>
                  <td className="px-4 py-3">~3,500–4,500</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Starting Basic Pay</td>
                  <td className="px-4 py-3">₹41,960/month</td>
                  <td className="px-4 py-3">₹36,000/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Exam Stages</td>
                  <td className="px-4 py-3">Prelims + Mains + GE & Interview</td>
                  <td className="px-4 py-3">Prelims + Mains + Interview</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims Pattern</td>
                  <td className="px-4 py-3">100 Qs / 60 min</td>
                  <td className="px-4 py-3">100 Qs / 60 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains Pattern</td>
                  <td className="px-4 py-3">155 Qs + Descriptive / 180+30 min</td>
                  <td className="px-4 py-3">155 Qs + Descriptive / 180+30 min</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Overall Difficulty</td>
                  <td className="px-4 py-3">Higher</td>
                  <td className="px-4 py-3">Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Notification (Expected)</td>
                  <td className="px-4 py-3">July–August 2026</td>
                  <td className="px-4 py-3">August–September 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'exam-pattern-comparison',
      title: "SBI PO vs IBPS PO: Exam Pattern Comparison",
      content: (
        <div className="space-y-6">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            At the surface level, both exams look almost identical — three-stage selection, same Prelims structure, similar Mains format. The differences are in the details, and those details matter significantly for your preparation.
          </p>

          <div>
            <h3 className="text-lg font-bold text-slate-850 mb-3">Prelims: Nearly Identical</h3>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Parameter</th>
                    <th className="px-4 py-2.5">SBI PO Prelims</th>
                    <th className="px-4 py-2.5">IBPS PO Prelims</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                    <td className="px-4 py-3">30 Qs / 20 min / 30 marks</td>
                    <td className="px-4 py-3">30 Qs / 20 min / 30 marks</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Quantitative Aptitude</td>
                    <td className="px-4 py-3">35 Qs / 20 min / 35 marks</td>
                    <td className="px-4 py-3">35 Qs / 20 min / 35 marks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reasoning Ability</td>
                    <td className="px-4 py-3">35 Qs / 20 min / 35 marks</td>
                    <td className="px-4 py-3">35 Qs / 20 min / 35 marks</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Total</td>
                    <td className="px-4 py-3">100 Qs / 60 min / 100 marks</td>
                    <td className="px-4 py-3">100 Qs / 60 min / 100 marks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Negative Marking</td>
                    <td className="px-4 py-3">0.25 per wrong</td>
                    <td className="px-4 py-3">0.25 per wrong</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Sectional Time Limit</td>
                    <td className="px-4 py-3">Yes (20 min each)</td>
                    <td className="px-4 py-3">Yes (20 min each)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              The Prelims structure is identical on paper. The difference is difficulty calibration — SBI PO Prelims questions, particularly in Reasoning and Quant, tend to be slightly more complex. A paper that scores 28/35 in IBPS PO Reasoning might have scored 24/35 in SBI PO Reasoning if the same student attempted both.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-850 mb-3">Mains: Where the Gap Widens</h3>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs mb-3">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Parameter</th>
                    <th className="px-4 py-2.5">SBI PO Mains</th>
                    <th className="px-4 py-2.5">IBPS PO Mains</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Reasoning & Computer Aptitude</td>
                    <td className="px-4 py-3">45 Qs / 60 min / 60 marks</td>
                    <td className="px-4 py-3">45 Qs / 60 min / 60 marks</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Data Analysis & Interpretation</td>
                    <td className="px-4 py-3">35 Qs / 45 min / 60 marks</td>
                    <td className="px-4 py-3">35 Qs / 45 min / 60 marks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">General/Economy/Banking Awareness</td>
                    <td className="px-4 py-3">40 Qs / 35 min / 40 marks</td>
                    <td className="px-4 py-3">40 Qs / 35 min / 40 marks</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                    <td className="px-4 py-3">35 Qs / 40 min / 40 marks</td>
                    <td className="px-4 py-3">35 Qs / 40 min / 40 marks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Descriptive (Letter + Essay)</td>
                    <td className="px-4 py-3">2 Qs / 30 min / 50 marks</td>
                    <td className="px-4 py-3">2 Qs / 30 min / 25 marks</td>
                  </tr>
                  <tr className="bg-slate-550 font-bold bg-slate-100">
                    <td className="px-4 py-3 text-slate-900">Total</td>
                    <td className="px-4 py-3 text-slate-900">155 Qs + Descriptive / 210 min</td>
                    <td className="px-4 py-3 text-slate-900">155 Qs + Descriptive / 210 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              The most significant Mains difference: <strong>SBI PO's Descriptive paper carries 50 marks vs IBPS PO's 25 marks</strong>. This means strong letter-writing and essay-writing skills matter twice as much for SBI PO Mains. Many students who clear SBI PO Mains objective paper lose marks here.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-850 mb-3">Phase 3: Selection Process</h3>
            <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
              SBI PO has a <strong>Group Exercise (GE) + Personal Interview</strong> as Phase 3. IBPS PO has only a Personal Interview. SBI's Group Exercise is a scored component — performance in this round directly affects the final merit list. IBPS PO's final merit list is based on Mains + Interview only.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'salary-career-growth',
      title: "SBI PO vs IBPS PO: Salary and Career Growth",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
            This is the question that matters most after &quot;which exam do I clear.&quot; The answer is clear: SBI PO pays more and offers a stronger long-term trajectory.
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Component</th>
                  <th className="px-4 py-2.5">SBI PO (JMG Scale I)</th>
                  <th className="px-4 py-2.5">IBPS PO (JMG Scale I)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Basic Pay</td>
                  <td className="px-4 py-3">₹41,960/month</td>
                  <td className="px-4 py-3">₹36,000/month</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">DA (Dearness Allowance)</td>
                  <td className="px-4 py-3">As per govt rates</td>
                  <td className="px-4 py-3">As per govt rates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">HRA</td>
                  <td className="px-4 py-3">7–9% of basic (location-based)</td>
                  <td className="px-4 py-3">7–9% of basic (location-based)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance</td>
                  <td className="px-4 py-3">~₹5,400/month</td>
                  <td className="px-4 py-3">~₹4,300/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Gross Monthly In-Hand (approx.)</td>
                  <td className="px-4 py-3">₹65,000–₹75,000</td>
                  <td className="px-4 py-3">₹55,000–₹65,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Annual CTC (approx.)</td>
                  <td className="px-4 py-3">₹8–8.5 lakh</td>
                  <td className="px-4 py-3">₹6.5–7.5 lakh</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Increment Basis</td>
                  <td className="px-4 py-3">Fixed slab + performance</td>
                  <td className="px-4 py-3">Fixed slab</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Career Progression Path</td>
                  <td className="px-4 py-3">AGM → DGM → GM → DMD → MD</td>
                  <td className="px-4 py-3">Chief Manager → AGM → DGM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-550 text-xs italic">
            Note: Actual in-hand salary varies based on posting city (metro/non-metro/rural), family status, and current DA rates. The figures above are approximate for 2025–26.
          </p>
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
            The SBI salary advantage is meaningful: approximately ₹10,000–₹15,000 more per month at entry level, compounding significantly with promotions. SBI also has a broader network (22,000+ branches across India) meaning more internal transfer opportunities and faster exposure to large-value transactions.
          </p>
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
            That said, IBPS PO in top PSU banks like Bank of Baroda, Punjab National Bank, or Canara Bank also offers strong career trajectories and steady promotions.
          </p>
          <HighlightBox type="info" title="Pro Tip">
            Don't make your exam priority decision purely based on the current salary gap. SBI PO's promotion track to AGM level (Assistant General Manager) is typically 10–12 years with good performance — and at that level, the compensation differential over IBPS PO officers in equivalent roles becomes even more pronounced.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'difficulty-level',
      title: "SBI PO vs IBPS PO: Difficulty Level",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
            Aspirants often ask which exam is harder. Below is a structured difficulty level breakdown across different parameters:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Aspect</th>
                  <th className="px-4 py-2.5">SBI PO</th>
                  <th className="px-4 py-2.5">IBPS PO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims Overall</td>
                  <td className="px-4 py-3 text-red-650 font-medium">Slightly Harder</td>
                  <td className="px-4 py-3 text-amber-600 font-medium">Moderate</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims Quant</td>
                  <td className="px-4 py-3">Moderate–Hard</td>
                  <td className="px-4 py-3">Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims Reasoning</td>
                  <td className="px-4 py-3">Moderate–Hard</td>
                  <td className="px-4 py-3">Moderate</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Prelims English</td>
                  <td className="px-4 py-3">Moderate</td>
                  <td className="px-4 py-3">Easy–Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains Quant / DA</td>
                  <td className="px-4 py-3 text-red-650 font-semibold">Hard</td>
                  <td className="px-4 py-3">Moderate–Hard</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains Reasoning</td>
                  <td className="px-4 py-3 text-red-650 font-semibold">Hard</td>
                  <td className="px-4 py-3">Moderate–Hard</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains English</td>
                  <td className="px-4 py-3">Moderate–Hard</td>
                  <td className="px-4 py-3">Moderate</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Mains GA / Banking Awareness</td>
                  <td className="px-4 py-3 text-red-650 font-semibold">Hard</td>
                  <td className="px-4 py-3">Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Descriptive Paper Weight</td>
                  <td className="px-4 py-3 font-semibold">High (50 marks)</td>
                  <td className="px-4 py-3">Moderate (25 marks)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Phase 3 Complexity</td>
                  <td className="px-4 py-3 font-semibold text-red-650">High (GE + Interview)</td>
                  <td className="px-4 py-3">Moderate (Interview only)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2 text-slate-650 text-sm leading-relaxed">
            <h4 className="font-bold text-slate-850">Why is SBI PO harder? Three reasons:</h4>
            <ol className="list-decimal list-inside space-y-2 pl-3">
              <li>SBI sets its own exam independently, while IBPS coordinates across multiple banks and tends toward moderate calibration for broader selection fairness.</li>
              <li>SBI's Data Analysis and Interpretation in Mains has historically featured more complex Caselet DI and Mixed DI sets.</li>
              <li>The Banking Awareness component in SBI PO Mains goes deeper into SBI-specific policies, schemes, and financial data — which IBPS PO doesn't test at that depth.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'vacancies-competition',
      title: "SBI PO vs IBPS PO: Vacancies and Competition",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            The historical data on vacancies and number of applicants highlights the selection pressure:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Year</th>
                  <th className="px-4 py-2.5">SBI PO Vacancies</th>
                  <th className="px-4 py-2.5">IBPS PO Vacancies</th>
                  <th className="px-4 py-2.5">SBI PO Applicants</th>
                  <th className="px-4 py-2.5">IBPS PO Applicants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                  <td className="px-4 py-3">~600</td>
                  <td className="px-4 py-3">~3,995</td>
                  <td className="px-4 py-3">~7.5 lakh</td>
                  <td className="px-4 py-3">~12 lakh+</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                  <td className="px-4 py-3">~2,000</td>
                  <td className="px-4 py-3">~3,517</td>
                  <td className="px-4 py-3">~10 lakh+</td>
                  <td className="px-4 py-3">~12 lakh+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                  <td className="px-4 py-3">~1,673</td>
                  <td className="px-4 py-3">~6,432</td>
                  <td className="px-4 py-3">~8 lakh+</td>
                  <td className="px-4 py-3">~13 lakh+</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                  <td className="px-4 py-3">~2,056</td>
                  <td className="px-4 py-3">~4,135</td>
                  <td className="px-4 py-3">~9 lakh+</td>
                  <td className="px-4 py-3">~12 lakh+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">2019</td>
                  <td className="px-4 py-3">~2,000</td>
                  <td className="px-4 py-3">~4,336</td>
                  <td className="px-4 py-3">~8.5 lakh</td>
                  <td className="px-4 py-3">~11 lakh+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-550 text-xs italic">
            Sources: SBI official notifications, IBPS official notifications.
          </p>
          <div className="space-y-3 text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            <h4 className="font-bold text-slate-850">Two observations from this data:</h4>
            <p>
              <strong>Vacancy volatility:</strong> SBI PO vacancies fluctuate significantly year to year (600 in 2024 vs 2,000 in 2023). IBPS PO is more consistent. This means a year like 2024 is particularly competitive for SBI PO — roughly 7.5 lakh candidates for 600 posts puts the selection ratio at approximately 1:125.
            </p>
            <p>
              <strong>IBPS PO is statistically easier to clear on competition alone.</strong> With 3,500–4,500 vacancies and 12+ lakh applicants, the selection ratio is roughly 1:30 to 1:35. SBI PO in lean-vacancy years can be 1:100 to 1:125.
            </p>
          </div>
          <HighlightBox type="info" title="Pro Tip">
            In years when SBI PO vacancies are low (like the ~600 in 2024), treat SBI PO as a stretch target and IBPS PO as your primary goal. In high-vacancy years (2,000+), prioritising SBI PO preparation makes more strategic sense. Check both official notifications before finalising your preparation timeline.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'prepare-both-together',
      title: "Should You Prepare for Both SBI PO and IBPS PO Together?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
            The short answer is yes — and here's why it works in practice.
          </p>
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
            The Prelims syllabus is identical. The Mains syllabus overlaps by roughly 85%. The additional effort to cover both is genuinely marginal — perhaps 10–15% more preparation time to account for SBI-specific GA content and Mains difficulty calibration.
          </p>
          <div className="space-y-3 text-slate-655 text-xs sm:text-sm leading-relaxed pl-3 font-normal">
            <p>
              <strong>1. Build your foundation on SBI PO standard.</strong><br />
              SBI PO is harder. Preparing to SBI PO Mains level gives you comfortable headroom for IBPS PO at every stage.
            </p>
            <p>
              <strong>2. Use SBI PO mock tests for daily practice.</strong><br />
              PrepBanker's SBI PO mock tests are calibrated to SBI's difficulty. Consistent performance on these builds the skill ceiling you need.
            </p>
            <p>
              <strong>3. Attempt IBPS PO-specific sectional tests 4–5 weeks before IBPS Prelims.</strong><br />
              This acclimatises you to IBPS's slightly different question style, particularly in Reasoning and English.
            </p>
            <p>
              <strong>4. Maintain a single GA preparation stream.</strong><br />
              Both exams test Banking Awareness and Current Affairs. One reading source (a banking current affairs app or monthly magazine) serves both. SBI PO additionally tests SBI-specific policies — add a dedicated SBI GK module 3–4 weeks before SBI Mains.
            </p>
            <p>
              <strong>5. Don't split your mock tests evenly.</strong><br />
              If IBPS PO is two months after SBI PO, spend 80% of your mock test time on SBI PO pattern until SBI Prelims, then transition.
            </p>
            <p>
              <strong>6. Plan around notification dates.</strong><br />
              SBI PO notification typically comes in July–August; IBPS PO notification in August–September. The Prelims are usually spaced 2–3 months apart, which gives you recovery and transition time.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'posting-culture-career',
      title: "Posting, Work Culture, and Long-Term Career: An Honest View",
      content: (
        <div className="space-y-5 text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Most comparison articles skip this. Here's what actually matters for students thinking beyond the selection stage.
          </p>

          <div>
            <h4 className="font-bold text-slate-850 mb-1">SBI PO Posting</h4>
            <p>
              SBI has 22,000+ branches across India, including a significant presence in semi-urban and rural areas. First postings are often outside metro cities — sometimes in districts, smaller towns, or even rural branches. This is intentional; SBI rotates officers through varied postings to build breadth of experience.
            </p>
            <p className="mt-2">
              Promotions within SBI are structured and relatively merit-based. SBI officers who perform well in internal exams (JAIIB, CAIIB) and receive good performance ratings can reach Deputy Manager (Scale II) in 3–4 years.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-850 mb-1">IBPS PO Posting</h4>
            <p>
              IBPS PO officers are allotted to one of the participating banks based on preference and merit. Popular bank preferences include Bank of Baroda, Canara Bank, and Punjab National Bank — both for culture and location preference. The allotment process means you don't always get your preferred bank, but you do get to submit preferences.
            </p>
            <p className="mt-2">
              Posting locations across IBPS banks are similarly spread across urban and semi-urban areas, with rural postings during early career stages.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-850 mb-1">Which Has Better Work-Life Balance?</h4>
            <p>
              This varies significantly by posting location and branch type rather than by exam. A metro posting in either SBI or an IBPS bank tends to be busier than a rural posting. Neither exam inherently guarantees better work-life balance — that's determined by your specific branch posting and manager.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'prepbanker-usage',
      title: "How to Use PrepBanker for SBI PO and IBPS PO Preparation",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            PrepBanker is structured to support both exams from a single platform, with separate test series calibrated to each exam's difficulty.
          </p>
          <div className="space-y-3 text-slate-655 text-xs sm:text-sm leading-relaxed pl-3 font-normal">
            <p>
              <strong>Step 1 — Register once, access both.</strong><br />
              Register at <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">app.prepgrind.com/register</a>. Your account gives you access to both SBI PO and IBPS PO test series. No separate registration needed for each exam.
            </p>
            <p>
              <strong>Step 2 — Start with SBI PO Prelims sectional tests.</strong><br />
              Even if IBPS PO is your primary target, starting with SBI PO sectional tests trains you at a slightly higher difficulty ceiling. The PrepBanker dashboard shows your topic-wise accuracy across Quant, Reasoning, and English separately.
            </p>
            <p>
              <strong>Step 3 — Use the exam comparison feature.</strong><br />
              PrepBanker's score comparison tool lets you see how your mock test performance translates across SBI PO and IBPS PO scoring standards — useful for understanding whether you're closer to clearing one exam's cut-off vs the other.
            </p>
            <p>
              <strong>Step 4 — Switch to IBPS PO mocks 4 weeks before IBPS Prelims.</strong><br />
              The platform lets you toggle between exam-specific full mocks. IBPS PO mocks are separately calibrated for IBPS's question style and difficulty distribution — not just relabelled SBI PO tests.
            </p>
            <p>
              <strong>Step 5 — Track dual-exam progress in one dashboard.</strong><br />
              PrepBanker's preparation tracker shows your mock test history, accuracy trends, and weak areas for both exams in a single view. This is particularly useful when preparing for both exams simultaneously — you can see whether your Reasoning accuracy gap is a general skill issue or exam-specific.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'explore-more',
      title: "Also Explore on PrepBanker",
      content: (
        <div className="space-y-4 text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            A candidate's prep is most effective when balancing all aspects of the SBI PO and IBPS PO selection tracks. Explore these key sections to round out your study strategy:
          </p>
          <p>
            Check the complete <Link href="/sbi-po/salary" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Salary and Allowances Guide</Link> to understand in-hand pay structures, special allowances, and JMG Scale I career paths in detail.
          </p>
          <p>
            Review the updated <Link href="/sbi-po/syllabus" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Syllabus and Exam Pattern</Link> to ensure you map out all Prelims and Mains topics, including descriptive writing sections.
          </p>
          <p>
            Attempt a <Link href="/sbi-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">free full-length SBI PO Mock Test</Link> to evaluate your speed and accuracy in a simulated test environment matching the actual exam parameters.
          </p>
          <p>
            Understand the stage-wise marks breakdown and interview rounds in the <Link href="/sbi-po/selection-process" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Selection Process overview</Link> to align your preparation targets.
          </p>
          <p>
            Analyze previous cut-off scores in the <Link href="/sbi-po/cut-off" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Cut-offs dashboard</Link> to establish realistic milestones for your mock test practice.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "What is the main difference between SBI PO and IBPS PO?",
      a: "SBI PO is conducted by the State Bank of India for SBI's own PO vacancies, while IBPS PO is conducted by the Institute of Banking Personnel Selection for 11+ public sector banks excluding SBI. SBI PO typically offers a higher starting salary, fewer vacancies, and slightly harder exams. Both are for the same Probationary Officer role."
    },
    {
      q: "Which exam is harder — SBI PO or IBPS PO?",
      a: "SBI PO is generally considered harder than IBPS PO. The Prelims difficulty is slightly higher for SBI PO, especially in Reasoning (more complex puzzles) and Quant (harder DI sets). The Mains exam is significantly harder for SBI PO, with a more complex General Awareness section and tougher Data Analysis questions."
    },
    {
      q: "Which has better salary — SBI PO or IBPS PO?",
      a: "SBI PO has a higher starting salary. An SBI PO's basic pay starts at ₹41,960/month (JMG Scale I) with a gross CTC of approximately ₹8–8.5 lakh per annum including allowances. IBPS PO basic pay starts at ₹36,000/month with a gross CTC of approximately ₹6.5–7.5 lakh per annum, varying by bank and posting location."
    },
    {
      q: "Can I prepare for SBI PO and IBPS PO together?",
      a: "Yes. The syllabi overlap by roughly 85–90%. Both share the same Prelims topics (Quant, Reasoning, English). For Mains, SBI PO has slightly harder Data Analysis and a tougher GA section. Preparing for SBI PO standard automatically covers IBPS PO — just add IBPS-specific mock tests 4–5 weeks before the IBPS exam."
    },
    {
      q: "How many vacancies are there in SBI PO vs IBPS PO?",
      a: "SBI PO 2026 is expected to announce approximately 600 vacancies (as per historical trend). IBPS PO consistently announces more — typically 3,500–4,500 vacancies across 11+ public sector banks. IBPS PO therefore has significantly more seats, making it statistically easier to get selected in terms of competition per vacancy."
    },
    {
      q: "Is the SBI PO interview harder than IBPS PO interview?",
      a: "SBI's Group Exercise and Interview (Phase 3) is considered more rigorous than IBPS PO's interview. SBI's process includes a Group Discussion/Group Exercise round before the personal interview, which IBPS PO does not have. SBI interviewers tend to probe banking knowledge and situational judgment more deeply."
    },
    {
      q: "Which exam should I attempt first — SBI PO or IBPS PO?",
      a: "If both exams fall in the same year, attempt SBI PO first if it's scheduled earlier and your preparation is strong. SBI PO preparation builds a strong foundation for IBPS PO. If you're a first-time aspirant, many coaching experts recommend attempting IBPS PO first to gain exam experience before facing the tougher SBI PO."
    },
    {
      q: "What is the exam pattern difference between SBI PO and IBPS PO?",
      a: "Both have 3-stage selection: Prelims, Mains, and Interview. SBI PO Prelims has 100 questions in 60 minutes; IBPS PO Prelims is identical. SBI PO Mains has 155 questions in 180 minutes plus a descriptive paper; IBPS PO Mains is similar. SBI PO adds a Group Exercise before the interview; IBPS PO does not."
    },
    {
      q: "Is PrepBanker useful for both SBI PO and IBPS PO preparation?",
      a: "Yes. PrepBanker offers separate test series for SBI PO and IBPS PO, with mock tests calibrated to each exam's specific difficulty and pattern. Since the syllabi overlap heavily, completing the SBI PO test series on PrepBanker gives you a strong base for IBPS PO. Both series are accessible after free registration."
    },
    {
      q: "What is the posting difference between SBI PO and IBPS PO?",
      a: "SBI PO officers are posted in SBI branches anywhere in India, including remote areas and rural postings in the first few years. IBPS PO officers are posted in one of 11+ public sector banks based on preference and allotment. SBI is one of the largest bank networks in the world with over 22,000 branches."
    }
  ]
};
