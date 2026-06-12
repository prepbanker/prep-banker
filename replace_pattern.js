const fs = require('fs');
const file = 'd:/Demo-Project-Docs/PracticeProjects/prep-banker/lib/data/exams/detailContentMap.tsx';
const content = fs.readFileSync(file, 'utf8');

// We will replace the block from `case 'exam-pattern': {` to the next case (or the end of this case).
// Let's locate the exact target content first.
const startTag = "    case 'exam-pattern': {";
const endTag = "    case 'salary': {";

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find case 'exam-pattern' or case 'salary'");
  process.exit(1);
}

const originalCaseBlock = content.substring(startIndex, endIndex);

const newCaseBlock = `    case 'exam-pattern': {
      if (examId === 'ibps-po') {
        const prelimsData = {
          phase: 'Preliminary Examination (Phase 1)',
          info: '60 Minutes • 100 Questions • 100 Marks',
          sections: [
            { subject: 'English Language', questions: 30, marks: 30, time: '20 Mins' },
            { subject: 'Quantitative Aptitude', questions: 35, marks: 35, time: '20 Mins' },
            { subject: 'Reasoning Ability', questions: 35, marks: 35, time: '20 Mins' }
          ],
          notes: [
            'Sectional time limits apply; you cannot jump between sections.',
            'Candidates must clear both the individual sectional cut-offs and the overall cutoff score.',
            'A penalty of 0.25 (1/4th) marks is applied for each incorrect answer.'
          ]
        };

        const mainsData = {
          phase: 'Main Examination (Phase 2)',
          info: '180 Minutes (Objective) + 30 Minutes (Descriptive) • 225 Marks Total',
          sections: [
            { subject: 'Reasoning & Computer Aptitude', questions: 45, marks: 60, time: '60 Mins' },
            { subject: 'Data Analysis & Interpretation', questions: 35, marks: 60, time: '45 Mins' },
            { subject: 'English Language', questions: 35, marks: 40, time: '40 Mins' },
            { subject: 'General, Economy & Banking Awareness', questions: 40, marks: 40, time: '35 Mins' },
            { subject: 'Descriptive Test (Essay & Letter)', questions: 2, marks: 25, time: '30 Mins' }
          ],
          notes: [
            'Sectional timers apply; switching sections is not allowed.',
            'Candidates must type their descriptive answers using a keyboard immediately after completing the objective test.',
            'A penalty of 0.25 (1/4th) marks applies to objective sections. Descriptive test has no negative marking.'
          ]
        };

        return {
          title: \`IBPS PO Exam Pattern 2026: Complete Guide to Sections, Marks & Selection Process\`,
          overview: \`The IBPS PO 2026 exam follows a three-stage selection process: Prelims, Mains, and Interview. Prelims is a 100-mark qualifying test of 60 minutes. Mains has 200 objective marks plus a 25-mark descriptive paper, spread over 3 hours 30 minutes. Sectional time limits apply in both stages, and every wrong answer costs 0.25 marks. Prelims marks do not count in the final merit list.\`,
          metaTitle: \`IBPS PO Exam Pattern : Sections, Marks & Syllabus\`,
          metaDescription: \`IBPS PO 2026 exam pattern — Prelims has 100 marks in 60 min, Mains has 200+25 marks in 3 hrs 30 min. Check section-wise marks, negative marking & free mock tests.\`,
          ctaText: \`Attempt Realistic CBT Mock Test\`,
          ctaHref: \`https://prepbanker.com/ibps-po/mock-tests\`,
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
                        "name": "Exam Pattern",
                        "item": "https://prepbanker.com/ibps-po/exam-pattern"
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
                    "name": "IBPS PO Exam Pattern 2026: Sections, Marks & Syllabus",
                    "description": "Complete IBPS PO 2026 exam pattern covering Prelims and Mains structure, section-wise marks, time limits, negative marking rules, and free mock tests on PrepBanker.",
                    "url": "https://prepbanker.com/ibps-po/exam-pattern",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "inLanguage": "en-IN",
                    "isPartOf": {
                      "@type": "WebSite",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
                    },
                    "breadcrumb": {
                      "@type": "BreadcrumbList",
                      "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com" },
                        { "@type": "ListItem", "position": 2, "name": "IBPS PO", "item": "https://prepbanker.com/ibps-po" },
                        { "@type": "ListItem", "position": 3, "name": "Exam Pattern", "item": "https://prepbanker.com/ibps-po/exam-pattern" }
                      ]
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
                    "headline": "IBPS PO Exam Pattern 2026: Sections, Marks, Time Limits & Syllabus",
                    "description": "Updated IBPS PO 2026 exam pattern with complete Prelims and Mains breakdown, section-wise marks distribution, negative marking rules, and preparation strategy.",
                    "url": "https://prepbanker.com/ibps-po/exam-pattern",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "author": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://prepbanker.com/logo.png"
                      }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/ibps-po/exam-pattern"
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
                    "name": "IBPS PO 2026 Exam Preparation",
                    "description": "Full-length mock tests, sectional tests, PYQs, and DPPs for IBPS PO Prelims and Mains 2026 preparation.",
                    "provider": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
                    },
                    "url": "https://prepbanker.com/ibps-po",
                    "educationalLevel": "Undergraduate",
                    "hasCourseInstance": [
                      {
                        "@type": "CourseInstance",
                        "name": "IBPS PO Prelims Mock Tests",
                        "courseMode": "Online"
                      },
                      {
                        "@type": "CourseInstance",
                        "name": "IBPS PO Mains Mock Tests",
                        "courseMode": "Online"
                      }
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
                        "name": "What is the exam pattern for IBPS PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO 2026 has three stages: Prelims (100 marks, 60 minutes), Mains (200 marks objective + 25 marks descriptive, 3 hours 30 minutes), and Interview (100 marks). Prelims has 3 sections — English, Quantitative Aptitude, and Reasoning. Mains has 4 objective sections plus a descriptive paper."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there negative marking in IBPS PO Prelims?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. In IBPS PO Prelims, each wrong answer carries a penalty of 0.25 marks (1/4th of the mark allotted). There is no penalty for unattempted questions. The same negative marking rule applies to IBPS PO Mains objective paper."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How many sections are there in IBPS PO Mains?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO Mains has 5 components: Reasoning & Computer Aptitude (45 questions, 60 marks, 60 min), English Language (35 questions, 40 marks, 40 min), Data Analysis & Interpretation (35 questions, 60 marks, 45 min), General Economy & Banking Awareness (40 questions, 40 marks, 35 min), and a Descriptive Paper in English (Letter + Essay, 25 marks, 30 min)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the total marks and time limit for IBPS PO Mains 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO Mains 2026 has a total of 225 marks — 200 marks for the objective paper and 25 marks for the descriptive paper. The total time allotted is 3 hours 30 minutes (200 minutes for objective + 30 minutes for descriptive)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Does IBPS PO Prelims score count in the final merit list?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No. IBPS PO Prelims is only a qualifying stage. The final merit list is based on Mains (objective + descriptive) and Interview scores combined. Prelims shortlists candidates for Mains but its marks are not added to the final score."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How many vacancies are expected in IBPS PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO 2025 notified 5208 vacancies across 11 participating public sector banks. While the official IBPS PO 2026 notification is awaited, vacancy numbers are typically in the range of 4,000–6,000. Check the official IBPS website (ibps.in) for the exact 2026 notification."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Which section in IBPS PO Mains carries the most marks?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Reasoning & Computer Aptitude and Data Analysis & Interpretation each carry 60 marks in IBPS PO Mains — the highest among objective sections. Combined, they account for 120 out of 200 objective marks, making them the most high-impact sections to prepare."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the weightage of Interview in IBPS PO selection?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The Interview is worth 100 marks. In the final merit list, Mains carries 80% weightage and Interview carries 20% weightage. So even a strong Mains performance can be undercut by a poor interview — practice both equally."
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
              id: 'exam-phases-interactive',
              title: 'Interactive Selection Process & Sectional Timings',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Toggle between Prelims (Phase 1) and Mains (Phase 2) in the tab switcher below to review the detailed sections, question ratios, marks distribution, and timing caps.
                  </p>
                  <InteractivePattern prelims={prelimsData} mains={mainsData} />
                  
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-4">
                    Key details for the IBPS CRP PO/MT-XVI exam cycle at a glance:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Exam Name</td>
                          <td className="px-4 py-3">IBPS CRP PO/MT (Common Recruitment Process for Probationary Officers)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Conducting Body</td>
                          <td className="px-4 py-3">Institute of Banking Personnel Selection (IBPS)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Participating Banks</td>
                          <td className="px-4 py-3">11 Public Sector Banks (PNB, Bank of Baroda, Union Bank, Canara Bank, etc.)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Vacancies (2025 cycle)</td>
                          <td className="px-4 py-3">5,208 (2026 notification awaited)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Stages</td>
                          <td className="px-4 py-3">Prelims &rarr; Mains &rarr; Interview</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Prelims</td>
                          <td className="px-4 py-3">100 marks | 60 minutes | 100 questions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Mains (Objective)</td>
                          <td className="px-4 py-3">200 marks | 155 minutes | 155 questions</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Mains (Descriptive)</td>
                          <td className="px-4 py-3">25 marks | 30 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Interview</td>
                          <td className="px-4 py-3">100 marks</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Negative Marking</td>
                          <td className="px-4 py-3">0.25 marks per wrong answer (both Prelims and Mains)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Mode</td>
                          <td className="px-4 py-3">Online (Computer-Based Test)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Language</td>
                          <td className="px-4 py-3">English and Hindi (except English Language section)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            },
            {
              id: 'selection-process',
              title: 'What Is the IBPS PO 2026 Selection Process?',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    IBPS PO selection happens in three phases. Understanding how they connect is more important than memorizing individual section names.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li><strong>Phase 1 — Prelims:</strong> This is the screening round. About 15–20 lakh students appear for Prelims each year. IBPS shortlists roughly 10x the number of vacancies for Mains. So if there are 5,000 vacancies, expect around 50,000 students to clear Prelims. Your Prelims score does not count in the final merit — it only decides whether you get a Mains hall ticket.</li>
                    <li><strong>Phase 2 — Mains:</strong> This is the actual battle. Mains has an objective paper (200 marks) and a descriptive paper (25 marks). Both happen on the same day — objective first, then descriptive. Mains marks carry 80% weight in the final score.</li>
                    <li><strong>Phase 3 — Interview:</strong> Conducted by nodal banks. Carries 100 marks but contributes only 20% to the final merit. Minimum qualifying marks in the interview differ by category.</li>
                  </ul>
                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Why the Three-Stage Structure Matters for Your Prep</h4>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Many students prepare for Prelims and Mains the same way. That&apos;s a mistake. Prelims rewards speed and accuracy — you need to clear sectional cutoffs fast. Mains rewards depth, especially in Data Analysis and Reasoning. Treat them as two different exams that happen to share a syllabus.
                  </p>
                </div>
              )
            },
            {
              id: 'prelims-exam-pattern',
              title: 'IBPS PO Prelims Exam Pattern 2026',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    IBPS PO Prelims is straightforward in structure. Three sections, 100 questions, 60 minutes — but with sectional time limits that make it harder than it looks.
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">No. of Questions</th>
                          <th className="px-4 py-2.5">Maximum Marks</th>
                          <th className="px-4 py-2.5">Time Limit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
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
                        <tr className="bg-slate-50/50 font-bold text-slate-900">
                          <td className="px-4 py-3">Total</td>
                          <td className="px-4 py-3">100</td>
                          <td className="px-4 py-3">100</td>
                          <td className="px-4 py-3">60 minutes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Key rules for Prelims:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li>Each question carries 1 mark.</li>
                    <li>Wrong answers carry a penalty of <strong>0.25 marks</strong>.</li>
                    <li>Unattempted questions carry no penalty.</li>
                    <li>Sectional time limits are enforced — you cannot carry over unused time from one section to another.</li>
                    <li>There is no sectional cutoff announced in advance; cutoffs are declared after the exam based on performance.</li>
                  </ul>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">What the Sectional Time Limits Actually Mean</h4>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    20 minutes for English, 20 for Quant, 20 for Reasoning. That&apos;s 40 seconds per question on average. The moment you spend 3 minutes on a hard puzzle set in Reasoning, you&apos;ve eaten into 9 questions&apos; time. This is why Prelims preparation must focus on question selection — knowing which questions to skip is as important as knowing how to solve.
                  </p>

                  <HighlightBox type="info" title="Pro Tip: Question Selection Strategy">
                    In Prelims, attempt English first if you&apos;re strong at it. English can often be solved faster, which gives you a psychological boost before tackling Quant and Reasoning. Build your own optimal order in mock tests — not someone else&apos;s.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: 'mains-exam-pattern',
              title: 'IBPS PO Mains Exam Pattern 2026',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Mains is where preparation depth shows. The objective paper has 4 sections with individual time limits, and a separate 30-minute descriptive paper follows immediately after.
                  </p>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">IBPS PO Mains — Objective Paper Breakdown</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">No. of Questions</th>
                          <th className="px-4 py-2.5">Maximum Marks</th>
                          <th className="px-4 py-2.5">Time Limit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Reasoning &amp; Computer Aptitude</td>
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
                          <td className="px-4 py-3 font-semibold text-slate-800">Data Analysis &amp; Interpretation</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">60</td>
                          <td className="px-4 py-3">45 minutes</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">General Economy &amp; Banking Awareness</td>
                          <td className="px-4 py-3">40</td>
                          <td className="px-4 py-3">40</td>
                          <td className="px-4 py-3">35 minutes</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-3">Total (Objective)</td>
                          <td className="px-4 py-3">155</td>
                          <td className="px-4 py-3">200</td>
                          <td className="px-4 py-3">180 minutes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">IBPS PO Mains — Descriptive Paper</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Component</th>
                          <th className="px-4 py-2.5">Marks</th>
                          <th className="px-4 py-2.5">Time</th>
                          <th className="px-4 py-2.5">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Letter Writing</td>
                          <td className="px-4 py-3">12.5</td>
                          <td className="px-4 py-3" rowSpan={2}>30 minutes</td>
                          <td className="px-4 py-3">Formal or informal letter</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Essay Writing</td>
                          <td className="px-4 py-3">12.5</td>
                          <td className="px-4 py-3">Current affairs / banking topics</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-3">Total (Descriptive)</td>
                          <td className="px-4 py-3">25</td>
                          <td className="px-4 py-3">30 minutes</td>
                          <td className="px-4 py-3">Typed on screen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Important Mains rules:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li>Negative marking is <strong>0.25 marks per wrong answer</strong> for the objective paper.</li>
                    <li>The descriptive paper is in English only and must be typed (no handwriting).</li>
                    <li>Descriptive papers are evaluated only for candidates who clear the objective paper cutoff.</li>
                    <li>Mains score (objective + descriptive) carries <strong>80% weightage</strong> in the final merit list.</li>
                  </ul>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Understanding the Marks-to-Questions Ratio in Mains</h4>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Notice that Reasoning (45 questions, 60 marks) and Data Analysis (35 questions, 60 marks) don&apos;t follow a 1:1 question-to-mark ratio. This means some questions in these sections carry more than 1 mark. Specifically, Data Analysis questions carry approximately 1.71 marks each on average. This changes your strategy — a single correct DA question is worth more than a correct English question.
                  </p>

                  <HighlightBox type="info" title="Pro Tip: General Awareness Strategy">
                    General Economy &amp; Banking Awareness (GEBA) is the easiest section to improve quickly. Students who start reading the RBI Monetary Policy, Budget highlights, and banking news 3 months before Mains gain a 30–35 mark advantage over those who start 1 month before. Treat GEBA as your score booster, not an afterthought.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: 'negative-marking',
              title: 'How Marks Are Calculated: Negative Marking Explained',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    The 0.25 negative marking rule applies to both Prelims and Mains. Here&apos;s what that means in practice:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li>Attempt 4 wrong answers = lose 1 mark (equivalent to 1 correct answer wiped out).</li>
                    <li>To &quot;break even&quot; on a guess, your probability of getting it right must be above 25%.</li>
                    <li>With 2 options eliminated from a 5-option question, your probability becomes 33% — statistically worth attempting.</li>
                    <li>With only 1 option eliminated, probability is 25% — you&apos;re at break-even, not ahead.</li>
                  </ul>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Most serious aspirants target 85–90 attempts in Prelims out of 100, with 90%+ accuracy. Attempting everything blindly is how students score 60 when they could have scored 80.
                  </p>
                </div>
              )
            },
            {
              id: 'mains-vs-prelims',
              title: 'IBPS PO Mains vs Prelims: Key Differences at a Glance',
              content: (
                <div className="space-y-4">
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">Prelims</th>
                          <th className="px-4 py-2.5">Mains</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Total Marks</td>
                          <td className="px-4 py-3">100</td>
                          <td className="px-4 py-3">225 (200+25)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Total Time</td>
                          <td className="px-4 py-3">60 minutes</td>
                          <td className="px-4 py-3">210 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">No. of Sections</td>
                          <td className="px-4 py-3">3</td>
                          <td className="px-4 py-3">4 (objective) + 1 (descriptive)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Counts in Merit?</td>
                          <td className="px-4 py-3">No (qualifying only)</td>
                          <td className="px-4 py-3">Yes (80% weight)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Descriptive Paper</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (Letter + Essay, 25 marks)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Computer Aptitude</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (part of Reasoning section)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">DA/DI Section</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (35 questions, 60 marks)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">GEBA Section</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (40 questions, 40 marks)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Difficulty Level</td>
                          <td className="px-4 py-3">Moderate</td>
                          <td className="px-4 py-3">Moderate to High</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            },
            {
              id: 'interview-structure',
              title: 'IBPS PO Interview: Structure and Weightage',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    The Interview round is conducted by the nodal bank in your preferred language. It is not just a formality — the 20% weightage it carries has affected final rankings significantly in previous cycles.
                  </p>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Final Merit Calculation:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li>Mains (Objective + Descriptive): <strong>80% weight</strong></li>
                    <li>Interview: <strong>20% weight</strong></li>
                    <li>Final score = (Mains score / 225 &times; 100 &times; 0.80) + (Interview score / 100 &times; 100 &times; 0.20)</li>
                  </ul>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Category-wise minimum qualifying marks in Interview:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li>General / EWS: 40 out of 100</li>
                    <li>SC / ST / OBC / PwBD: 35 out of 100</li>
                  </ul>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    In IBPS PO 2024, the final cut-off for General category was around 55–60 out of 100 on the combined merit score. Interview preparation — especially current affairs, banking knowledge, and communication — can be the difference between selection and missing by 0.5 marks.
                  </p>
                </div>
              )
            },
            {
              id: 'difficulty-weightage',
              title: 'Section-wise Difficulty Level and Topic Weightage',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Understanding what actually appears in the exam is more useful than a generic syllabus list. Here&apos;s a realistic breakdown based on IBPS PO papers from the past 3–4 years:
                  </p>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Prelims Topic Weightage</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">High-Weight Topics</th>
                          <th className="px-4 py-2.5">Approximate Questions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>Reasoning Ability</td>
                          <td className="px-4 py-3">Puzzles &amp; Seating Arrangement</td>
                          <td className="px-4 py-3">15–20</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Syllogisms, Inequalities, Direction, Coding</td>
                          <td className="px-4 py-3">10–15</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>Quantitative Aptitude</td>
                          <td className="px-4 py-3">Data Interpretation (1–2 sets)</td>
                          <td className="px-4 py-3">10–15</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Arithmetic (SI/CI, Time-Work, Ratio, Profit-Loss)</td>
                          <td className="px-4 py-3">15–20</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>English Language</td>
                          <td className="px-4 py-3">Reading Comprehension (1 passage)</td>
                          <td className="px-4 py-3">8–10</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Error Detection, Sentence Rearrangement, Fillers</td>
                          <td className="px-4 py-3">15–20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-bold text-slate-800 text-[17px] mt-4 mb-2">Mains Topic Weightage</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">High-Weight Topics</th>
                          <th className="px-4 py-2.5">Approximate Questions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>Reasoning &amp; Computer Aptitude</td>
                          <td className="px-4 py-3">Complex Puzzles, Input-Output, Blood Relations</td>
                          <td className="px-4 py-3">25–30</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Computer Fundamentals (MS Office, Internet, OS)</td>
                          <td className="px-4 py-3">7–10</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>Data Analysis &amp; Interpretation</td>
                          <td className="px-4 py-3">4–5 DI sets (Caselet, Chart, Table)</td>
                          <td className="px-4 py-3">20–25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Arithmetic, Quantity Comparison</td>
                          <td className="px-4 py-3">10–12</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>English Language</td>
                          <td className="px-4 py-3">Reading Comprehension (2 passages)</td>
                          <td className="px-4 py-3">15–18</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Para Jumbles, Word Usage, Sentence Connectors</td>
                          <td className="px-4 py-3">10–15</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800" rowSpan={2}>General Economy &amp; Banking Awareness</td>
                          <td className="px-4 py-3">Banking Terms, RBI Policies, Financial News</td>
                          <td className="px-4 py-3">20–25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Static Banking (HQ, taglines, schemes)</td>
                          <td className="px-4 py-3">10–15</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            },
            {
              id: 'prep-strategy',
              title: 'IBPS PO 2026 Preparation Strategy: A Section-wise Roadmap',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Follow this in order. Don&apos;t jump ahead until you&apos;ve locked in the earlier steps.
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm sm:text-[15px]">
                    <li><strong>Understand the exam pattern thoroughly</strong> (you&apos;re doing this now). Know the time limits, marks, and negative marking rules cold before you touch a mock test.</li>
                    <li><strong>Build topic-wise fundamentals first.</strong> Spend 6–8 weeks on core topics: Arithmetic (Quant), Puzzles (Reasoning), RC and Grammar rules (English). Don&apos;t attempt full mocks during this phase — it builds bad habits before good ones.</li>
                    <li><strong>Attempt sectional tests by topic.</strong> On PrepBanker, attempt chapter-wise quizzes and DPPs for each topic before moving on. Sectional tests show you where you are on each topic — full mocks can mask weak topics with strong ones.</li>
                    <li><strong>Start full-length mock tests at the 60-day mark.</strong> Attempt at least 2 Prelims mocks per week. Review every single wrong answer — not just the ones you guessed, but especially the ones you were confident about and got wrong. Those are your blind spots.</li>
                    <li><strong>Switch to Mains mocks 30 days before Mains.</strong> Mains requires a completely different pacing strategy. Practice with the correct time limits. Never attempt Mains mocks in parts — always the full 3.5 hours in one sitting.</li>
                    <li><strong>Work on Descriptive Paper 3 weeks before Mains.</strong> Write 2 letters and 2 essays per week. Get your typing speed to at least 25–30 WPM on a standard keyboard. Speed matters here.</li>
                    <li><strong>Last 10 days: revision and light mock tests.</strong> No new topics. Revise Banking Awareness notes daily. Attempt one mock every 2 days to stay sharp without burning out.</li>
                    <li><strong>Interview prep starts the moment Mains ends.</strong> Don&apos;t wait for results. If you&apos;ve appeared for Mains, start reading current affairs, your college background, and your home state&apos;s banking profile.</li>
                  </ol>
                </div>
              )
            },
            {
              id: 'prepbanker-usage',
              title: 'How to Use PrepBanker for IBPS PO 2026 Preparation',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    PrepBanker is built specifically around the IBPS PO exam structure. Here&apos;s how to use it at each stage:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm sm:text-[15px]">
                    <li><strong>Step 1 — Start with the free mock test.</strong> Head to <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-bold">app.prepgrind.com/register</a> and attempt the free IBPS PO Prelims mock. This gives you a baseline score and shows exactly which sections need the most attention.</li>
                    <li><strong>Step 2 — Use chapter-wise quizzes for weak areas.</strong> After your mock test, check your section-wise accuracy. If Reasoning accuracy is below 70%, go to PrepBanker&apos;s Reasoning section and work through puzzle-based DPPs by difficulty level (Easy &rarr; Medium &rarr; Hard).</li>
                    <li><strong>Step 3 — Attempt sectional tests.</strong> Once you&apos;re comfortable with individual topics, move to full sectional tests. PrepBanker&apos;s Quant Sectional Test, for example, replicates the actual 20-minute Prelims format with the same question distribution as the official exam.</li>
                    <li><strong>Step 4 — Track your score analytics.</strong> PrepBanker&apos;s dashboard shows your accuracy %, average time per question, and performance by topic over time. Use this to spot trends — if your Reasoning score keeps dropping in mock tests 5 and 6, something specific is slipping.</li>
                    <li><strong>Step 5 — Attempt full-length mocks with exam-like conditions.</strong> Use PrepBanker&apos;s full-length IBPS PO Prelims and Mains mocks in a distraction-free environment. Sit at a desk, use a timer, and do not pause mid-test. The goal is to simulate actual exam conditions, not just practice questions.</li>
                  </ol>
                </div>
              )
            },
            {
              id: 'cutoff-history',
              title: 'IBPS PO Cut-offs: Historical Data',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Cut-offs vary by year, vacancy count, category, and paper difficulty. Here&apos;s the trend for IBPS PO Mains (final overall cut-off for General category):
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">Vacancies</th>
                          <th className="px-4 py-2.5">Mains Cutoff (Gen, approx.)</th>
                          <th className="px-4 py-2.5">Final Cutoff (Gen, approx.)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">IBPS PO 2024</td>
                          <td className="px-4 py-3">~4,455</td>
                          <td className="px-4 py-3">72–76 / 200</td>
                          <td className="px-4 py-3">55–60 / 100 (combined)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">IBPS PO 2023</td>
                          <td className="px-4 py-3">3,049</td>
                          <td className="px-4 py-3">68–73 / 200</td>
                          <td className="px-4 py-3">52–57 / 100 (combined)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">IBPS PO 2022</td>
                          <td className="px-4 py-3">6,432</td>
                          <td className="px-4 py-3">75–80 / 200</td>
                          <td className="px-4 py-3">57–62 / 100 (combined)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">IBPS PO 2021</td>
                          <td className="px-4 py-3">4,135</td>
                          <td className="px-4 py-3">70–75 / 200</td>
                          <td className="px-4 py-3">53–58 / 100 (combined)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">IBPS PO 2020</td>
                          <td className="px-4 py-3">1,417</td>
                          <td className="px-4 py-3">65–70 / 200</td>
                          <td className="px-4 py-3">49–54 / 100 (combined)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-500 text-xs italic my-2">
                    *Note: These are approximate figures based on widely reported cut-offs. Official IBPS cut-offs are published after each cycle on ibps.in. Reservation-category cutoffs are significantly lower.*
                  </p>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-semibold mt-4">
                    Key insight from the data:
                  </p>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Cut-offs are closely tied to vacancy numbers. IBPS PO 2022, which had the highest vacancies (6,432), also had the highest Mains cut-off — counter-intuitive, but it reflects that more vacancies also meant more students attempting seriously. Aim for 85+ in Mains objective (excluding Descriptive) as your target, regardless of year.
                  </p>
                </div>
              )
            },
            {
              id: 'explore-more',
              title: 'Also Explore on PrepBanker',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Getting the exam pattern right is just the first step. Here&apos;s where to go next on PrepBanker:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-[15px]">
                    <li>Attempt a free <a href="https://prepbanker.com/ibps-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Mock Test</a> — a full Prelims simulation with real-time sectional timers and detailed post-test analysis. If you haven&apos;t taken a baseline test yet, this is the most valuable 60 minutes you&apos;ll spend this week.</li>
                    <li>Work through <a href="https://prepbanker.com/ibps-po/mains-mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Mock Tests</a> once Prelims prep is locked in. These include the Descriptive Paper component, with model answers for Letter and Essay sections from previous years.</li>
                    <li>If Data Analysis &amp; Interpretation is a weak spot, head to PrepBanker&apos;s <a href="https://prepbanker.com/ibps-po/data-interpretation" className="font-bold text-[#1B6EB5] hover:underline">DA/DI Chapter-wise Practice Sets</a> — organized by question type (Caselet DI, Pie Chart, Missing Table) with increasing difficulty levels.</li>
                    <li>Strengthen your General Economy &amp; Banking Awareness with PrepBanker&apos;s <a href="https://prepbanker.com/banking-awareness" className="font-bold text-[#1B6EB5] hover:underline">GEBA Practice Quizzes</a>, which are updated monthly with RBI notifications, government schemes, and banking news.</li>
                    <li>Also check the <a href="https://prepbanker.com/ibps-po/previous-year-papers" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Previous Year Question Papers</a> section — solved PYQs from 2018 to 2024 with detailed explanation videos for every question.</li>
                  </ul>
                </div>
              )
            }
          ],
          faqs: [
            {
              q: "What is the exam pattern for IBPS PO 2026?",
              a: "IBPS PO 2026 has three stages: Prelims (100 marks, 60 minutes, 3 sections), Mains (200 marks objective + 25 marks descriptive, 3 hours 30 minutes, 4+1 sections), and Interview (100 marks). Prelims is qualifying only. Final merit is calculated from Mains (80%) and Interview (20%). Negative marking of 0.25 applies in both Prelims and Mains."
            },
            {
              q: "Is there negative marking in IBPS PO Prelims?",
              a: "Yes. Every wrong answer in IBPS PO Prelims results in a deduction of 0.25 marks. There is no penalty for skipping a question. The same 0.25 negative marking applies to IBPS PO Mains objective paper. This makes question selection — knowing when to attempt and when to skip — a critical part of exam strategy."
            },
            {
              q: "How many sections are there in IBPS PO Mains?",
              a: "IBPS PO Mains has 5 components: four objective sections (Reasoning & Computer Aptitude, English Language, Data Analysis & Interpretation, General Economy & Banking Awareness) totalling 200 marks, and one Descriptive Paper (Letter + Essay) worth 25 marks. Each objective section has its own time limit. The descriptive paper is attempted immediately after the objective paper."
            },
            {
              q: "What is the total marks and time limit for IBPS PO Mains 2026?",
              a: "IBPS PO Mains has a total of 225 marks — 200 for the objective paper and 25 for the descriptive paper. The total time is 3 hours 30 minutes: 3 hours for the objective paper (with individual sectional time limits) and 30 minutes for the descriptive paper."
            },
            {
              q: "Does IBPS PO Prelims score count in the final merit list?",
              a: "No. IBPS PO Prelims is only a screening/qualifying stage. Its marks are not included in the final merit list. Only Mains scores (objective + descriptive) and Interview scores contribute to the final ranking. Prelims only determines whether you get shortlisted to appear for Mains."
            },
            {
              q: "How many vacancies are expected in IBPS PO 2026?",
              a: "The official IBPS PO 2026 notification has not been released yet. Based on previous years, IBPS PO 2025 announced 5,208 vacancies across 11 public sector banks. The 2026 cycle is expected to be in the same range. Check ibps.in for the official notification, which is typically released between July and September."
            },
            {
              q: "Which section in IBPS PO Mains carries the most marks?",
              a: "Both Reasoning & Computer Aptitude and Data Analysis & Interpretation carry 60 marks each — the highest among all sections in IBPS PO Mains. Together they account for 120 out of 200 objective marks. These two sections should get the most prep time, especially since DA/DI questions carry more than 1 mark each on average."
            },
            {
              q: "What is the weightage of Interview in IBPS PO selection?",
              a: "The Interview carries 100 marks but contributes only 20% to the final merit score. Mains (objective + descriptive) contributes 80%. General category candidates must score a minimum of 40/100 in the Interview to qualify; SC/ST/OBC/PwBD candidates need 35/100. Even a small interview score difference can affect final selection given how competitive the cut-offs are."
            },
            {
              q: "Is IBPS PO harder than SBI PO?",
              a: "Both exams are comparable in difficulty. SBI PO Prelims is marginally easier but SBI Mains is considered tougher due to more complex puzzle sets and a stricter Descriptive Paper evaluation. IBPS PO typically sees more applicants (~10 lakh more than SBI PO) and lower vacancies in some years, making the effective competition harder. If you're serious about banking, prepare for both simultaneously since the syllabus overlaps almost entirely."
            },
            {
              q: "Are PrepBanker mock tests free?",
              a: "PrepBanker offers a free full-length IBPS PO Prelims mock test without any signup barrier at app.prepgrind.com/register. Additional full-length tests, Mains mocks, DPPs, and sectional tests are available in the platform's subscription plans. The free test is enough to get a genuine baseline score and identify your weakest section before committing."
            },
            {
              q: "What topics should I focus on for IBPS PO Descriptive Paper?",
              a: "The Descriptive Paper tests Letter Writing and Essay Writing in English. Letters are typically formal (complaint letter, application) or semi-formal. Essays cover banking and economic topics — budget highlights, RBI policy, financial inclusion, digital payments, etc. The key prep tip: practice typing at 25–30 WPM, maintain a structured format (intro-body-conclusion for essays), and stay updated on the last 3–4 months of banking news."
            },
            {
              q: "How many mock tests should I attempt before IBPS PO Prelims?",
              a: "The minimum recommended is 15 full-length Prelims mocks, with at least 10 Mains mocks for the Mains stage. More important than the number is post-test analysis — reviewing every wrong answer, noting recurring error types, and retesting those topics. Students who attempt 30 mocks with no analysis consistently underperform against students who attempt 15 mocks with deep review."
            }
          ]
        };
      }

`;

// Perform the replacement
const updatedContent = content.replace(originalCaseBlock, newCaseBlock + originalCaseBlock);
fs.writeFileSync(file, updatedContent, 'utf8');
console.log("Replacement completed successfully.");
