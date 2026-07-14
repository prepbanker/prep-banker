// PATH: lib/data/exams/sbiPoExamAnalysis.tsx
import React from 'react';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoExamAnalysisContent: DetailSectionContent = {
  title: "SBI PO Exam Analysis 2026: Shift-wise Difficulty, Good Attempts & Trends",
  overview: "Get the most accurate, live, and shift-wise SBI PO 2026 Prelims and Mains exam analysis right here on exam day. Track sectional difficulty levels, subject weightage, student feedback, and expected good attempts. In the meantime, use our detailed analysis of the SBI PO 2025 exam as a baseline reference for your preparation.",
  ctaText: "Practice SBI PO Memory Based Papers",
  ctaHref: "/sbi-po-previous-year-question-papers",
  metaTitle: "SBI PO Exam Analysis 2026: Shift-wise Difficulty & Attempts",
  metaDescription: "Get live SBI PO Exam Analysis 2026 for all shifts. Check section-wise difficulty, topic weightage, good attempts & reference analysis of SBI PO 2025.",
  customSchemas: (
    <>
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
                "name": "Exam Analysis",
                "item": "https://prepbanker.com/sbi-po/exam-analysis"
              }
            ]
          })
        }}
      />
    </>
  ),
  subsections: [
    {
      id: "live-updates-2026",
      title: "SBI PO Prelims 2026 Shift-Wise Live Analysis (Upcoming)",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm leading-relaxed">
            The SBI PO 2026 Prelims exam is tentatively scheduled for <strong>August/September 2026</strong>. On exam day, our subject-matter experts and students will provide a detailed, shift-by-shift live breakdown of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
            <li><strong>Shift 1, Shift 2, Shift 3, and Shift 4</strong> difficulty ratings.</li>
            <li>Good attempts calculated based on student responses.</li>
            <li>Sectional weightage of puzzles, seating arrangements, DI, and grammar questions.</li>
            <li>Expected cut-offs based on the papers' difficulty trajectory.</li>
          </ul>
          <div className="bg-red-50/50 border border-red-150 p-4.5 rounded-xl text-xs sm:text-sm text-red-900 leading-relaxed">
            <strong>📅 Bookmark this page:</strong> We publish shift analyses within 1 hour of each session ending, using feedback from over 5,000+ test-takers in our banking prep groups.
          </div>
        </div>
      )
    },
    {
      id: "analysis-25-reference",
      title: "SBI PO Prelims 2025 Analysis Summary (For Reference)",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm leading-relaxed">
            The SBI PO Prelims 2025 exam took place across multiple shifts. Candidates rated the overall paper as <strong>moderate</strong> but highlighted that time management in the Reasoning and Quant sections was exceptionally challenging.
          </p>
          
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Section</th>
                  <th className="px-4 py-2.5">Difficulty Level</th>
                  <th className="px-4 py-2.5">Good Attempts</th>
                  <th className="px-4 py-2.5">Key Observation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Reasoning Ability</td>
                  <td className="px-4 py-3">Moderate to Difficult</td>
                  <td className="px-4 py-3">22–26</td>
                  <td className="px-4 py-3">Circular arrangements and floor-based puzzles were highly time-consuming.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Quantitative Aptitude</td>
                  <td className="px-4 py-3">Moderate</td>
                  <td className="px-4 py-3">20–24</td>
                  <td className="px-4 py-3">DI sets required heavy calculation. Arithmetic word problems were average.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                  <td className="px-4 py-3">Easy to Moderate</td>
                  <td className="px-4 py-3">22–27</td>
                  <td className="px-4 py-3">Reading comprehension, Cloze test, and error-spotting were straightforward.</td>
                </tr>
                <tr className="bg-slate-900/5 font-semibold text-slate-900">
                  <td className="px-4 py-3">Overall</td>
                  <td className="px-4 py-3">Moderate</td>
                  <td className="px-4 py-3">65–72</td>
                  <td className="px-4 py-3">Effective selection of questions determined candidate selection.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-150 p-4.5 rounded-xl text-xs text-slate-700 space-y-1">
            <strong>Key Strategy Takeaway:</strong> Puzzles make up 20–22 of the 35 Reasoning marks. Since there are no sectional cutoffs in SBI PO Prelims, maximizing scores in English and Quant is crucial, but clearing overall cut-offs requires solid execution in Reasoning.
          </div>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "Does SBI PO have sectional cut-offs in 2026?",
      a: "No. Unlike IBPS PO, the State Bank of India does not apply sectional cut-offs in either the Prelims or Mains exam. Candidates are shortlisted for the next stage based purely on their overall cumulative score."
    },
    {
      q: "When will the SBI PO 2026 Exam Analysis be published?",
      a: "Our subject experts will publish live analysis, good attempts, and exam patterns for each shift within 1 to 2 hours of the shift ending on the day of the exam."
    },
    {
      q: "What is a good score in SBI PO Prelims?",
      a: "A good score depends on the difficulty of the paper, but historical trends suggest that scoring between 65 and 72 is generally safe for the general category."
    }
  ]
};
