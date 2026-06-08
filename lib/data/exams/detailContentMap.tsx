// PATH: lib/data/exams/detailContentMap.tsx
import React from 'react';
import { CheckCircle2, ChevronRight, Award, Trophy, BookOpen, Clock, FileText } from 'lucide-react';
import type { ExamDetailData } from '@/types/exam';
import { sbiPoData } from './sbi-po';
import { ibpsPoData } from './ibps-po';
import {
  HighlightBox,
  InteractiveSyllabus,
  DatesTimeline,
  CareerRoadmap,
  InteractivePattern,
  CutoffTrendsSwitcher,
  StrategyRoadmap
} from '@/components/sections/exams/DetailComponents';

export interface Subsection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface DetailSectionContent {
  title: string;
  overview: string;
  ctaText: string;
  ctaHref: string;
  subsections: Subsection[];
  faqs: { q: string; a: string }[];
}

export function getExamData(examId: string): ExamDetailData | undefined {
  if (examId === 'sbi-po') return sbiPoData;
  if (examId === 'ibps-po') return ibpsPoData;
  return undefined;
}

export function getDetailedSectionContent(examId: string, sectionSlug: string): DetailSectionContent | undefined {
  const exam = getExamData(examId);
  if (!exam) return undefined;

  const isIbps = examId === 'ibps-po';

  switch (sectionSlug) {
    case 'eligibility':
      return {
        title: `${exam.shortName} Eligibility Criteria 2026`,
        overview: examId === 'sbi-po'
          ? `Before you start your preparation, confirm you meet the eligibility requirements for SBI PO 2026.`
          : `To apply for the prestigious ${exam.shortName} 2026 recruitment drive, candidates must satisfy the detailed eligibility criteria defined by the conducting body. This includes academic qualification, strict age brackets, nationality regulations, and attempt restrictions. Review the detailed parameters below before registering.`,
        ctaText: `Start Free ${exam.shortName} Mock Test`,
        ctaHref: 'https://app.prepgrind.com/register',
        subsections: examId === 'sbi-po' ? [
          {
            id: 'education',
            title: 'Educational Qualification',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  A graduate degree in any discipline from a recognised university or equivalent qualification recognised by the Central Government is required. Final year students who expect to complete graduation before the joining date are also eligible to apply.
                </p>
              </div>
            )
          },
          {
            id: 'age-limit',
            title: 'Age Limit',
            content: (
              <div className="space-y-4">
                <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-3 font-semibold">
                  Note: Age is calculated as of 1st April 2026.
                </p>
                <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Category</th>
                        <th className="px-4 py-2.5">Minimum Age</th>
                        <th className="px-4 py-2.5">Maximum Age</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">General / UR</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">30 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">OBC (Non-Creamy Layer)</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">33 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">SC / ST</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">35 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">EWS</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">30 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD (General/EWS)</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">40 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD (OBC)</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">43 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD (SC/ST)</td>
                        <td className="px-4 py-3">21 years</td>
                        <td className="px-4 py-3">45 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Ex-Servicemen</td>
                        <td className="px-4 py-3">As per govt norms</td>
                        <td className="px-4 py-3">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: 'attempts',
            title: 'Number of Attempts',
            content: (
              <div className="space-y-4">
                <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Category</th>
                        <th className="px-4 py-2.5">Maximum Attempts</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">General / EWS</td>
                        <td className="px-4 py-3">4</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">OBC (Non-Creamy Layer)</td>
                        <td className="px-4 py-3">7</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">SC / ST</td>
                        <td className="px-4 py-3">Unlimited (within age limit)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD</td>
                        <td className="px-4 py-3">Unlimited (within age limit)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
        ] : [
          {
            id: 'education',
            title: 'Educational Qualification & Guidelines',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Candidates must hold a graduation degree in any discipline (such as B.A., B.Sc., B.Com., B.Tech., or equivalent) from a university recognised by the Government of India or any equivalent qualification recognised as such by the Central Government. 
                </p>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  During online registration, candidates must specify the exact percentage marks obtained in graduation, calculated to two decimals. If your university uses CGPA/OGPA, you must convert it to percentage marks based on your university rules before filling in the application form.
                </p>
                <HighlightBox type="info" title="Final Year / Semester Students Guidelines">
                  Candidates who are in the final year or semester of their graduation may also apply provisionally. However, their selection is subject to the condition that, if called for the interview or document verification, they must produce authentic proof of having passed the graduation examination on or before the specified cutoff date (typically by August/September of the recruitment cycle).
                </HighlightBox>
              </div>
            )
          },
          {
            id: 'age-limit',
            title: 'Age Limit & Category Relaxations',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  As of the official notification cutoff date, the age of the candidate must lie within the specified limits. For General (UR) and EWS candidates, the age must be between <strong>{isIbps ? '20 and 30' : '21 and 30'} years</strong> (both dates inclusive).
                </p>
                <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Category</th>
                        <th className="px-4 py-2.5">Age Relaxation</th>
                        <th className="px-4 py-2.5">Maximum Eligible Age</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">General / EWS (UR)</td>
                        <td className="px-4 py-3">No Relaxation</td>
                        <td className="px-4 py-3">30 Years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">OBC (Non-Creamy Layer)</td>
                        <td className="px-4 py-3">3 Years</td>
                        <td className="px-4 py-3">33 Years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">SC / ST</td>
                        <td className="px-4 py-3">5 Years</td>
                        <td className="px-4 py-3">35 Years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD (General/EWS)</td>
                        <td className="px-4 py-3">10 Years</td>
                        <td className="px-4 py-3">40 Years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD (OBC-NCL)</td>
                        <td className="px-4 py-3">13 Years</td>
                        <td className="px-4 py-3">43 Years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">PwBD (SC/ST)</td>
                        <td className="px-4 py-3">15 Years</td>
                        <td className="px-4 py-3">45 Years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Ex-Servicemen / Commissioned Officers</td>
                        <td className="px-4 py-3">5 Years</td>
                        <td className="px-4 py-3">35 Years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <HighlightBox type="warning" title="Documentary Proof for Age Relaxation">
                  Candidates seeking age relaxation must produce genuine certificates (caste, disability, or discharge certificate) issued by competent authorities in the format prescribed by the Government of India. These certificates will be thoroughly checked during document verification.
                </HighlightBox>
              </div>
            )
          },
          {
            id: 'attempts-nationality',
            title: 'Nationality & Selection Attempt Boundaries',
            content: (
              <div className="space-y-4">
                <h4 className="font-bold text-slate-850 text-sm sm:text-base">Nationality Regulations</h4>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  A candidate applying for this post must be either: (a) a Citizen of India, (b) a Subject of Nepal, (c) a Subject of Bhutan, or (d) a Tibetan refugee who came to India before January 1, 1962, with the intention of permanently settling in India. Migrants from Pakistan, Burma, Sri Lanka, East African countries, and Vietnam who have permanently settled in India are also eligible, provided they hold a certificate of eligibility issued by the Government of India.
                </p>
                <h4 className="font-bold text-slate-850 text-sm sm:text-base mt-4">Number of Permissible Attempts</h4>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {isIbps 
                    ? "Unlike SBI, the Institute of Banking Personnel Selection (IBPS) does not impose any upper limit on the number of attempts for the IBPS PO exam. Candidates can apply and sit for the exam as many times as they wish, provided they remain within the prescribed age limit and meet the basic educational criteria."
                    : "State Bank of India (SBI) enforces a maximum cap on the number of attempts for the SBI PO exam. For the General and EWS categories, the limit is 4 attempts. For General (PwD), EWS (PwD), OBC, and OBC (PwD) candidates, the limit is 7 attempts. Candidates belonging to SC/ST categories have no limit on the number of attempts. Note that appearing in the Preliminary Exam is NOT counted as an attempt; attempts are counted only if the candidate sits for the Main Examination (Phase 2)."
                  }
                </p>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('eligibility') || f.q.toLowerCase().includes('attempt') || f.q.toLowerCase().includes('fresher'))
      };


    case 'syllabus': {
        const syllabusData = examId === 'sbi-po' ? {
          subjects: [
            {
              id: 'english',
              name: 'English Language',
              topics: [
                { name: 'Reading Comprehension', weightage: '10 Questions', advice: 'Practice scientific, economic, and philosophy-based passages. Focus on inference, tone, and contextual synonyms.' },
                { name: 'Cloze Test & Fillers', weightage: '5 Questions', advice: 'Revise vocabulary, collocations, and contextual fit. Single and double filler questions are common.' },
                { name: 'Error Spotting & Sentence Correction', weightage: '5 Questions', advice: 'Revise subject-verb agreement, pronouns, conditional clauses, prepositions, and standard syntax.' },
                { name: 'Para Jumbles & Rearrangement', weightage: '5 Questions', advice: 'Find opening sentences, identify transition signals and link pronouns to nouns.' },
                { name: 'Sentence Completion & Columns', weightage: '3-5 Questions', advice: 'Focus on logical completions and column matching exercises.' }
              ]
            },
            {
              id: 'quant',
              name: 'Data Analysis & Interpretation',
              topics: [
                { name: 'Data Interpretation (DI)', weightage: '15-20 Questions', advice: 'Master Caselets, Missing DI, Radar charts, and combined charts. Focus on percentage, average, and ratio calculations.' },
                { name: 'Number Series & Quadratic Equations', weightage: '5 Questions', advice: 'Learn patterns for wrong and missing numbers. Practice fast quadratic factorization.' },
                { name: 'Arithmetic Word Problems', weightage: '8-10 Questions', advice: 'Do not skip! Focus on Time & Work, Speed/Distance, Profit/Loss, SI/CI, Probability, and Mixtures.' },
                { name: 'Data Sufficiency', weightage: '5 Questions', advice: 'Verify mathematical sufficiency of data sets. Essential for Mains.' }
              ]
            },
            {
              id: 'reasoning',
              name: 'Reasoning & Computer Aptitude',
              topics: [
                { name: 'Puzzles & Seating Arrangements', weightage: '15-20 Questions', advice: 'Solve circular, linear, matrix, box, floor, and scheduling puzzles with 2-3 variables daily.' },
                { name: 'Syllogisms & Inequalities', weightage: '5 Questions', advice: 'Master Venn diagrams (Only a few cases) and direct comparative inequalities.' },
                { name: 'Coding-Decoding & Machine Input-Output', weightage: '5 Questions', advice: 'Understand conditional coding and mechanical shifting patterns.' },
                { name: 'Critical / Logical Reasoning', weightage: '5-8 Questions', advice: 'Study assumptions, course of action, arguments, and cause/effect. High weightage in Mains.' },
                { name: 'Computer Aptitude', weightage: '2-4 Questions', advice: 'Understand networking basics, internet protocols, logic gates, binary math, and MS Office.' }
              ]
            },
            {
              id: 'general-awareness',
              name: 'General/Economy/Banking Awareness',
              topics: [
                { name: 'Banking Awareness', weightage: '35-40%', advice: 'RBI guidelines, policies, rates, financial inclusion schemes, banking history, and tags.' },
                { name: 'Current Affairs', weightage: '25-30%', advice: 'Focus on national & international events of the last 6 months.' },
                { name: 'Static GK & Economy', weightage: '15-20%', advice: 'Cover capitals, currencies, headquarters, and Union Budget/Economic Survey highlights.' }
              ]
            }
          ]
        } : {
          subjects: [
            {
              id: 'english',
              name: 'English Language',
              topics: [
                { name: 'Reading Comprehension', weightage: '8-10 Questions', advice: 'Read national newspapers (e.g., The Hindu, Indian Express) editorials daily. Practice summarizing the main theme and identifying the tone of the passage.' },
                { name: 'Cloze Test & Fillers', weightage: '5 Questions', advice: 'Focus on vocabulary in context and parts of speech. Practice eliminating choices that are grammatically incorrect.' },
                { name: 'Error Spotting & Sentence Correction', weightage: '5 Questions', advice: 'Revise core English grammar rules, specifically subject-verb agreement, modifiers, tenses, and prepositions.' },
                { name: 'Para Jumbles', weightage: '5 Questions', advice: 'Identify opening statements and logical links between consecutive sentences (e.g., pronoun-noun references or chronological sequence).' },
                { name: 'Word Association & Column Match', weightage: '3-5 Questions', advice: 'Practice matching sentence fragments logically. Focus on vocabulary maps and context clues.' }
              ]
            },
            {
              id: 'quant',
              name: isIbps ? 'Quantitative Aptitude' : 'Data Analysis & Interpretation',
              topics: [
                { name: 'Data Interpretation (DI)', weightage: '10-15 Questions', advice: 'Master percentage calculations, ratios, and averages. Practice bar charts, line graphs, pie charts, tabular data, and radar diagrams.' },
                { name: 'Number Series & Quadratic Equations', weightage: '5 Questions', advice: 'Practice standard patterns (squares, cubes, arithmetic progressions, alternate series) and basic factorization techniques daily.' },
                { name: 'Arithmetic Word Problems', weightage: '10 Questions', advice: 'Do not skip arithmetic. Focus on high-yielding chapters like Time & Work, Speed-Distance-Time, Profit & Loss, Simple & Compound Interest, and Probability.' },
                { name: 'Caselet DI', weightage: '5 Questions', advice: 'Practice converting paragraph-based descriptive data into structured tables using Venn diagrams and equations.' }
              ]
            },
            {
              id: 'reasoning',
              name: 'Reasoning & Computer Aptitude',
              topics: [
                { name: 'Puzzles & Seating Arrangements', weightage: '15-20 Questions', advice: 'Practice daily. Master floor puzzles, box configurations, month-day scheduling, linear rows, circular loops, and matrix arrangements with multiple parameters.' },
                { name: 'Syllogisms & Inequalities', weightage: '5-8 Questions', advice: 'Use Venn diagrams for syllogisms (especially "only a few" cases) and direct inequality priority charts to solve these quickly.' },
                { name: 'Direction Sense & Blood Relations', weightage: '5 Questions', advice: 'Draw clean family trees and direction maps step-by-step to avoid confusion on complex nested relationships.' },
                { name: 'Input-Output & Coding-Decoding', weightage: '5 Questions', advice: 'Understand machine sorting logic. For coding-decoding, practice Chinese coding and new pattern conditional codes.' },
                { name: 'Critical / Logical Reasoning', weightage: '5-8 Questions', advice: 'Practice identifying assumptions, strengthening/weakening arguments, and course of action questions. Highly critical for the Mains exam.' },
                { name: 'Computer Aptitude', weightage: '2-4 Questions (Mains)', advice: 'Cover binary conversions, flowcharts, logic gates, operating systems, networking basics, and keyboard shortcut standards.' }
              ]
            },
            {
              id: 'general-awareness',
              name: 'General & Banking Awareness',
              topics: [
                { name: 'Current Affairs', weightage: '15-20 Questions (Mains)', advice: 'Study the last 6 months of national and international news. Pay close attention to cabinet decisions, summits, MoUs, awards, and sports.' },
                { name: 'Banking & Financial GK', weightage: '8-10 Questions (Mains)', advice: 'Learn banking terms (NPA, PCA, CRAR, PSL, KYC). Study monetary policy tools, capital market regulators, and historical banking milestones.' },
                { name: 'RBI Policies & Functions', weightage: '5 Questions (Mains)', advice: 'Understand the role of RBI as lender of last resort, monetary policy committees, sovereign gold bonds, and digital currency mandates.' },
                { name: 'Government Economic Schemes', weightage: '5-8 Questions (Mains)', advice: 'Memorize launch dates, eligibility rules, funding allocations, and target beneficiaries for PMJDY, PMJJBY, PMSBY, APY, and related schemes.' }
              ]
            }
          ]
        };
  
        return {
          title: `${exam.shortName} Syllabus & Subject Topics 2026`,
          overview: `A comprehensive breakdown of the subjects and topics covered in the ${exam.shortName} Prelims and Mains exams. Start aligning your study plan with the official exam guidelines.`,
          ctaText: `Download Syllabus & Start Practice`,
          ctaHref: 'https://app.prepgrind.com/register',
          subsections: [
            {
              id: 'interactive-syllabus-section',
              title: 'Interactive Topic & Weightage Explorer',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Select a subject from the selector tabs below to inspect core chapters, expected question volumes, and specific advice from toppers to streamline your study routine.
                  </p>
                  <InteractiveSyllabus data={syllabusData} />
                </div>
              )
            },
            {
              id: 'descriptive-syllabus',
              title: 'Descriptive Writing Syllabus (Mains Phase)',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Immediately following the objective Mains test, candidates must take the descriptive writing test. This part evaluates English language drafting proficiency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2 text-[#1B6EB5]">
                        Letter Writing {examId === 'sbi-po' ? '(1 Question, 25 Marks)' : '(Approx. 150 Words)'}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {examId === 'sbi-po'
                          ? 'Formal & Informal Letters. Banking and economic topics, or standard service request letters. Word limit: ~250 words.'
                          : 'Candidates will choose from formal letters (e.g., writing to bank authorities to block credit cards, requesting education loans, or applying for bank accounts) or informal letters (e.g., congratulating friends, writing to family, or sharing career plans).'
                        }
                      </p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2 text-[#1B6EB5]">
                        Essay Writing {examId === 'sbi-po' ? '(1 Question, 25 Marks)' : '(Approx. 250 Words)'}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {examId === 'sbi-po'
                          ? 'Focuses on banking & economic topics, social issues, or current affairs-based prompts. Word limit: ~300 words.'
                          : 'Focuses on banking, economics, and contemporary social trends. Common essay themes include digital payment safety, mergers of public sector banks, monetary policy changes, cryptocurrency benefits, and the impact of automation on job security.'
                        }
                      </p>
                    </div>
                  </div>
                  <HighlightBox type="success" title="Topper Typing Tips & Best Practices">
                    Always practice typing essay drafts on a physical desktop QWERTY keyboard. The computer keys at exam centers are typically stiffer than laptop keyboards. Maintain strict word limits and divide paragraphs logically with correct syntax.
                  </HighlightBox>
                </div>
              )
            }
          ],
          faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('syllabus') || f.q.toLowerCase().includes('computer'))
        };
      }

    case 'exam-pattern': {
        const prelimsData = {
          phase: 'Preliminary Examination (Phase 1)',
          info: '60 Minutes • 100 Questions • 100 Marks',
          sections: [
            { subject: 'English Language', questions: 30, marks: 30, time: '20 Mins' },
            { subject: 'Quantitative Aptitude', questions: 35, marks: 35, time: '20 Mins' },
            { subject: 'Reasoning Ability', questions: 35, marks: 35, time: '20 Mins' }
          ],
          notes: isIbps 
            ? [
                'Sectional time limits apply; you cannot jump between sections.',
                'Candidates must clear both the individual sectional cut-offs and the overall cutoff score.',
                'A penalty of 0.25 (1/4th) marks is applied for each incorrect answer.'
              ]
            : [
                'Sectional time limits apply; you cannot switch sections mid-exam.',
                'No sectional cut-off score is applicable (only the overall cutoff determines Mains eligibility).',
                'A penalty of 0.25 (1/4th) marks is applied for each incorrect answer.'
              ]
        };

        const mainsData = {
          phase: 'Main Examination (Phase 2)',
          info: isIbps 
            ? '180 Minutes (Objective) + 30 Minutes (Descriptive) • 225 Marks Total'
            : '180 Minutes (Objective) + 30 Minutes (Descriptive) • 250 Marks Total',
          sections: isIbps
            ? [
                { subject: 'Reasoning & Computer Aptitude', questions: 45, marks: 60, time: '60 Mins' },
                { subject: 'Data Analysis & Interpretation', questions: 35, marks: 60, time: '45 Mins' },
                { subject: 'English Language', questions: 35, marks: 40, time: '40 Mins' },
                { subject: 'General, Economy & Banking Awareness', questions: 40, marks: 40, time: '35 Mins' },
                { subject: 'Descriptive Test (Essay & Letter)', questions: 2, marks: 25, time: '30 Mins' }
              ]
            : [
                { subject: 'Reasoning & Computer Aptitude', questions: 45, marks: 60, time: '60 Mins' },
                { subject: 'Data Analysis & Interpretation', questions: 35, marks: 60, time: '45 Mins' },
                { subject: 'English Language', questions: 35, marks: 40, time: '40 Mins' },
                { subject: 'General/Economy/Banking Awareness', questions: 40, marks: 40, time: '35 Mins' },
                { subject: 'Descriptive Test (Essay & Letter)', questions: 2, marks: 50, time: '30 Mins' }
              ],
          notes: isIbps
            ? [
                'Sectional timers apply; switching sections is not allowed.',
                'Candidates must type their descriptive answers using a keyboard immediately after completing the objective test.',
                'A penalty of 0.25 (1/4th) marks applies to objective sections. Descriptive test has no negative marking.'
              ]
            : [
                'Sectional timers apply; no switching between sections.',
                'Descriptive answers must be typed immediately. It holds a high weightage of 50 marks.',
                'A penalty of 0.25 (1/4th) marks applies to objective sections. Descriptive test has no negative marking.'
              ]
        };

        return {
          title: `${exam.shortName} Exam Pattern & Phase Schemes 2026`,
          overview: `Understand the marks allotment, question types, time limits, and negative marking structure for the ${exam.shortName} Prelims, Mains, and Interview phases.`,
          ctaText: `Attempt Realistic CBT Mock Test`,
          ctaHref: 'https://app.prepgrind.com/register',
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
                </div>
              )
            },
            {
              id: 'interview-merit',
              title: isIbps ? 'Phase 3: Personal Interview' : 'Phase 3: Group Exercises & Interview',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Candidates who qualify in the Phase 2 Mains exam are invited to the final evaluation round.
                  </p>
                  {isIbps ? (
                    <div className="space-y-3">
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                        The Personal Interview is conducted by participating public sector banks and coordinated by IBPS. The total score for the interview is 100 marks. The minimum qualifying marks in the interview are 40% for General/EWS candidates, and 35% for SC/ST/OBC/PwD candidates.
                      </p>
                      <HighlightBox type="info" title="Final Score Normalization Ratio">
                        The weightage of the Main Exam and the Interview is normalized in an <strong>80:20 ratio</strong>. The marks obtained in the Preliminary Exam are not added to the final merit list.
                      </HighlightBox>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                        SBI PO Phase 3 is a comprehensive assessment split into two parts: Group Exercises (GD, role play, and group activities - 20 marks) and a Personal Interview (30 marks) for a total of 50 marks.
                      </p>
                      <HighlightBox type="info" title="Final Score Normalization Ratio">
                        The marks of the Main Exam and Phase 3 are combined and normalized in a <strong>75:25 ratio</strong>. The Preliminary Exam remains strictly qualifying and does not count towards the final ranking.
                      </HighlightBox>
                    </div>
                  )}
                </div>
              )
            }
          ],
          faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('pattern') || f.q.toLowerCase().includes('negative') || f.q.toLowerCase().includes('stage'))
        };
      }

    case 'salary': {
        const careerSteps = examId === 'sbi-po' ? [
          {
            scale: '0 – 2 years',
            role: 'Probationary Officer → Junior Management Grade Scale I',
            pay: '₹10–12 LPA',
            timeframe: '0 - 2 Years (Probation)',
            responsibilities: 'Undergo probation and training. Perform basic branch banking duties.'
          },
          {
            scale: '2 – 5 years',
            role: 'Assistant Manager (JMGS I)',
            pay: '₹12–15 LPA',
            timeframe: '2 - 5 Years',
            responsibilities: 'Core branch credit and retail banking operations management.'
          },
          {
            scale: '5 – 8 years',
            role: 'Deputy Manager (MMGS Scale II)',
            pay: '₹16–20 LPA',
            timeframe: '5 - 8 Years',
            responsibilities: 'Operational lead or manager in small/medium branch operations.'
          },
          {
            scale: '8 – 13 years',
            role: 'Manager (MMGS Scale III)',
            pay: '₹22–28 LPA',
            timeframe: '8 - 13 Years',
            responsibilities: 'Head of credit or branch manager at urban/metro locations.'
          },
          {
            scale: '13 – 18 years',
            role: 'Senior Manager (SMGS Scale IV)',
            pay: '₹30–38 LPA',
            timeframe: '13 - 18 Years',
            responsibilities: 'Departmental head in regional or circle offices.'
          },
          {
            scale: '18 – 23 years',
            role: 'Chief Manager (SMGS Scale V)',
            pay: '₹42–52 LPA',
            timeframe: '18 - 23 Years',
            responsibilities: 'Operational controls, circle leadership, and regional coordination.'
          },
          {
            scale: '23+ years',
            role: 'AGM / DGM / GM / ED / MD & CEO',
            pay: '₹60 LPA+',
            timeframe: '23+ Years',
            responsibilities: 'Executive leadership at corporate and national level.'
          }
        ] : [
          {
            scale: 'Scale I',
            role: 'Probationary Officer (Assistant Manager)',
            pay: exam.salary.basic,
            timeframe: '2 Years (Probation Period)',
            responsibilities: 'Undergoing practical branch training across retail banking, deposits, loan operations, currency vaults, and basic customer relation management. Empowered to sign off on day-to-day transactions under joint authority.'
          },
          {
            scale: 'Scale II',
            role: 'Manager',
            pay: isIbps ? '₹48,170 basic / ~₹75,000 gross' : '₹48,170 basic / ~₹82,000 gross',
            timeframe: '2 to 3 Years after Scale I',
            responsibilities: 'Heads small branches or acts as division manager in medium-sized city branches. Responsible for credit disbursement, business targets compliance, and handling customer complaints.'
          },
          {
            scale: 'Scale III',
            role: 'Senior Manager',
            pay: isIbps ? '₹63,840 basic / ~₹98,000 gross' : '₹63,840 basic / ~₹1,05,000 gross',
            timeframe: '3 Years after Scale II',
            responsibilities: 'Manages large-scale municipal or urban branches. Tasks center on micro, small & medium enterprises (MSME) loan sanctions, treasury support, and staff supervision.'
          },
          {
            scale: 'Scale IV',
            role: 'Chief Manager',
            pay: isIbps ? '₹76,010 basic / ~₹1,20,000 gross' : '₹76,010 basic / ~₹1,30,000 gross',
            timeframe: '3 to 4 Years after Scale III',
            responsibilities: 'Functional heads of key departments at regional or zonal offices. Exercises higher financial sanction powers for commercial credit limits.'
          },
          {
            scale: 'Scale V',
            role: 'Assistant General Manager (AGM)',
            pay: isIbps ? '₹89,890 basic / ~₹1,50,000 gross' : '₹89,890 basic / ~₹1,65,000 gross',
            timeframe: '4 Years after Scale IV',
            responsibilities: 'Heading smaller regional offices or acting as second-in-command in major circles. Guides regional credit committees and audits operations.'
          },
          {
            scale: 'Scale VI',
            role: 'Deputy General Manager (DGM)',
            pay: isIbps ? '₹1,04,240 basic / ~₹1,85,000 gross' : '₹1,04,240 basic / ~₹2,05,000 gross',
            timeframe: '3 to 5 Years after Scale V',
            responsibilities: 'Heads circle offices or controls vertical sectors (e.g., Retail, Agriculture, Digital Banking) at corporate center level.'
          },
          {
            scale: 'Scale VII',
            role: 'General Manager (GM)',
            pay: isIbps ? '₹1,16,120 basic / ~₹2,20,000 gross' : '₹1,16,120 basic / ~₹2,40,000 gross',
            timeframe: 'Performance & Seniority based selection',
            responsibilities: 'Top operational tier under the board of directors. Directs major circle expansions, outlines credit-risk limits, and influences national policy standards.'
          }
        ];

        return {
          title: `${exam.shortName} Salary Structure, Allowances & Career 2026`,
          overview: `Complete breakdown of basic pay, allowances, first-year CTC, in-hand earnings, and promotional career growth path for ${exam.shortName} officers.`,
          ctaText: `Explore Mock Tests to Crack ${exam.shortName}`,
          ctaHref: 'https://app.prepgrind.com/register',
          subsections: [
            {
              id: 'pay-scale',
              title: 'Detailed Salary Component & Gross CTC Breakdown',
              content: examId === 'sbi-po' ? (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-3">
                    SBI PO monthly pay scale has starting basic pay of ₹41,960 with standard increments. Gross metro city package ranges between ₹82,000 and ₹95,000 per month.
                  </p>
                  <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Component</th>
                          <th className="px-4 py-2.5">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Basic Pay (Scale I)</td>
                          <td className="px-4 py-3">₹41,960</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Dearness Allowance (DA)</td>
                          <td className="px-4 py-3">~₹17,200</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">House Rent Allowance — Metro</td>
                          <td className="px-4 py-3">₹9,030</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">House Rent Allowance — Urban</td>
                          <td className="px-4 py-3">₹6,300</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">House Rent Allowance — Semi-urban</td>
                          <td className="px-4 py-3">₹4,500</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance</td>
                          <td className="px-4 py-3">₹5,500</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Transport Allowance</td>
                          <td className="px-4 py-3">₹1,200</td>
                        </tr>
                        <tr className="bg-slate-50/50 font-bold text-slate-900">
                          <td className="px-4 py-3">Gross Monthly (Metro)</td>
                          <td className="px-4 py-3">~₹82,000 – ₹95,000</td>
                        </tr>
                        <tr className="font-bold text-slate-900">
                          <td className="px-4 py-3">Gross Monthly (Non-metro)</td>
                          <td className="px-4 py-3">~₹63,000 – ₹72,000</td>
                        </tr>
                        <tr className="bg-slate-50/50 font-bold text-slate-900">
                          <td className="px-4 py-3">Annual CTC (approx.)</td>
                          <td className="px-4 py-3">₹10 – 12 LPA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Probationary Officers enjoy one of the most premium entry-level packages in public sector undertakings. Starting base pay and gross salary in metro cities are detailed below:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:shadow-xs transition-shadow">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Initial Basic Pay</span>
                      <span className="block text-xl sm:text-2xl font-black text-slate-850 mt-1">{exam.salary.basic}</span>
                      <span className="block text-[10px] text-slate-400 mt-1 font-medium">As per Bipartite Settlement</span>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:shadow-xs transition-shadow">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">Metro Gross Salary</span>
                      <span className="block text-xl sm:text-2xl font-black text-slate-850 mt-1">{exam.salary.gross}</span>
                      <span className="block text-[10px] text-slate-400 mt-1 font-medium">Inclusive of basic allowances</span>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:shadow-xs transition-shadow">
                      <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">First Year Gross CTC</span>
                      <span className="block text-xl sm:text-2xl font-black text-slate-850 mt-1">{exam.salary.ctc}</span>
                      <span className="block text-[10px] text-slate-400 mt-1 font-medium">Including lease & bonus perks</span>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: 'allowances-perks',
              title: 'Allowances, Subsidies & Hidden Benefits',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Apart from the cash basic components, officers are entitled to various monthly allowances and annual subsidized allowances that boost their real income significantly.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                      <h4 className="font-extrabold text-slate-850 text-sm sm:text-base mb-3 border-b border-slate-50 pb-1 flex items-center gap-1.5 text-[#1B6EB5]">
                        Monthly Allowances
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5">
                        {exam.salary.allowances.map(allowance => (
                          <li key={allowance} className="flex gap-2 items-start font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 shrink-0" />
                            <span>{allowance}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
                      <h4 className="font-extrabold text-slate-850 text-sm sm:text-base mb-3 border-b border-slate-50 pb-1 flex items-center gap-1.5 text-[#1B6EB5]">
                        Subsidized Perks & Facilities
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-605 space-y-2.5">
                        {exam.salary.perks.map(perk => (
                          <li key={perk} className="flex gap-2 items-start font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: 'promotions-hierarchy',
              title: 'Interactive Career Scale & Promotions Explorer',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {examId === 'sbi-po'
                      ? "SBI offers the fastest promotion cycle among all PSU banks. Officers who clear internal promotion exams can reach Scale III in 5 years instead of 8."
                      : "The promotion policy in public sector banking is structured and highly meritocratic. Candidates can advance via fast-track channels (written exam + interview) or standard seniority routes."
                    }
                  </p>
                  <CareerRoadmap steps={careerSteps} />
                </div>
              )
            }
          ],
          faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('salary') || f.q.toLowerCase().includes('perk') || f.q.toLowerCase().includes('allotment'))
        };
      }

    case 'cut-offs':
      return {
        title: examId === 'sbi-po' ? 'SBI PO Previous Year Cut-off Marks (2018–2025)' : `${exam.shortName} Previous Year Cut-offs & Marks Trends`,
        overview: examId === 'sbi-po'
          ? 'Use these as your target scores. Consistently scoring above the General category cut-off in mocks = exam-ready.'
          : `To target a realistic score, candidates must evaluate previous years' category-wise cut-off trends. Inspect how competitive thresholds have fluctuated over the last three cycles for both Prelims and Mains.`,
        ctaText: `Compare Your Mock Marks Against Cutoffs`,
        ctaHref: 'https://app.prepgrind.com/register',
        subsections: examId === 'sbi-po' ? [
          {
            id: 'interactive-cutoffs-section',
            title: 'Interactive Category Cut-off Trends Switcher',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Use the category selection tabs below to view and compare the cut-off marks for General, OBC, SC, and ST candidates across the last cycles.
                </p>
                <CutoffTrendsSwitcher cutoffs={exam.cutoffs} />
              </div>
            )
          },
          {
            id: 'detailed-tables',
            title: 'SBI PO Previous Year Cut-off Tables (2018–2024)',
            content: (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Prelims Cut-off (Out of 100)</h4>
                  <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">General</th>
                          <th className="px-4 py-2.5">OBC</th>
                          <th className="px-4 py-2.5">SC</th>
                          <th className="px-4 py-2.5">ST</th>
                          <th className="px-4 py-2.5">EWS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-3">62.50</td>
                          <td className="px-4 py-3">59.00</td>
                          <td className="px-4 py-3">52.50</td>
                          <td className="px-4 py-3">46.00</td>
                          <td className="px-4 py-3">58.25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                          <td className="px-4 py-3">60.75</td>
                          <td className="px-4 py-3">57.50</td>
                          <td className="px-4 py-3">50.00</td>
                          <td className="px-4 py-3">44.50</td>
                          <td className="px-4 py-3">56.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                          <td className="px-4 py-3">58.00</td>
                          <td className="px-4 py-3">55.25</td>
                          <td className="px-4 py-3">48.75</td>
                          <td className="px-4 py-3">42.00</td>
                          <td className="px-4 py-3">54.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                          <td className="px-4 py-3">55.50</td>
                          <td className="px-4 py-3">52.75</td>
                          <td className="px-4 py-3">46.50</td>
                          <td className="px-4 py-3">40.00</td>
                          <td className="px-4 py-3">52.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2019</td>
                          <td className="px-4 py-3">59.75</td>
                          <td className="px-4 py-3">56.50</td>
                          <td className="px-4 py-3">50.25</td>
                          <td className="px-4 py-3">44.00</td>
                          <td className="px-4 py-3">—</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2018</td>
                          <td className="px-4 py-3">57.25</td>
                          <td className="px-4 py-3">54.00</td>
                          <td className="px-4 py-3">48.00</td>
                          <td className="px-4 py-3">41.50</td>
                          <td className="px-4 py-3">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Mains Cut-off (Out of 200 Objective)</h4>
                  <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">General</th>
                          <th className="px-4 py-2.5">OBC</th>
                          <th className="px-4 py-2.5">SC</th>
                          <th className="px-4 py-2.5">ST</th>
                          <th className="px-4 py-2.5">EWS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-3">89.47</td>
                          <td className="px-4 py-3">83.10</td>
                          <td className="px-4 py-3">72.40</td>
                          <td className="px-4 py-3">64.20</td>
                          <td className="px-4 py-3">81.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                          <td className="px-4 py-3">86.20</td>
                          <td className="px-4 py-3">80.50</td>
                          <td className="px-4 py-3">70.00</td>
                          <td className="px-4 py-3">61.75</td>
                          <td className="px-4 py-3">78.25</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                          <td className="px-4 py-3">84.10</td>
                          <td className="px-4 py-3">78.30</td>
                          <td className="px-4 py-3">67.80</td>
                          <td className="px-4 py-3">59.50</td>
                          <td className="px-4 py-3">76.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                          <td className="px-4 py-3">81.50</td>
                          <td className="px-4 py-3">75.80</td>
                          <td className="px-4 py-3">65.00</td>
                          <td className="px-4 py-3">57.25</td>
                          <td className="px-4 py-3">74.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2019</td>
                          <td className="px-4 py-3">78.90</td>
                          <td className="px-4 py-3">72.50</td>
                          <td className="px-4 py-3">62.75</td>
                          <td className="px-4 py-3">55.00</td>
                          <td className="px-4 py-3">—</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2018</td>
                          <td className="px-4 py-3">76.25</td>
                          <td className="px-4 py-3">70.00</td>
                          <td className="px-4 py-3">60.50</td>
                          <td className="px-4 py-3">53.00</td>
                          <td className="px-4 py-3">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <HighlightBox type="info" title="Key Observation">
                  The General cut-off has risen by ~6 marks over 6 years in Prelims and ~13 marks in Mains. Aim for 72+ in Prelims and 100+ in Mains to be safe across all categories.
                </HighlightBox>
              </div>
            )
          }
        ] : [
          {
            id: 'interactive-cutoffs-section',
            title: 'Interactive Category Cut-off Trends Switcher',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Use the category selection tabs below to view and compare the cut-off marks for General, OBC, SC, and ST candidates across the 2024, 2023, and 2022 recruitment cycles.
                </p>
                <CutoffTrendsSwitcher cutoffs={exam.cutoffs} />
              </div>
            )
          },
          {
            id: 'cutoff-factors',
            title: 'Key Factors Influencing Annual Cut-offs',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Cut-off marks are not static and are newly determined at each stage of the recruitment process. The primary variables influencing the qualifying score include:
                </p>
                <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 pl-3 list-disc list-inside">
                  <li><strong>Total Vacancies:</strong> Higher vacancy counts generally lead to slightly lower cut-offs, whereas reduced vacancies raise competition thresholds.</li>
                  <li><strong>Exam Difficulty Level:</strong> A tougher question paper shifts the marks distribution curve downwards, lowering the cut-off, while easier shifts push cut-offs up.</li>
                  <li><strong>Candidate Turnout Ratio:</strong> The ratio of total candidates sitting for the exam relative to the vacancies directly impacts the competitive percentile.</li>
                </ul>
                {isIbps ? (
                  <HighlightBox type="warning" title="Sectional Cut-offs Apply for IBPS PO">
                    Unlike SBI PO, the IBPS PO exam enforces <strong>both sectional and overall cut-offs</strong> in both Prelims and Mains. If you fail to clear the cutoff in even one section (e.g. English), you will not qualify for the next stage, regardless of how high your overall aggregate score is.
                  </HighlightBox>
                ) : (
                  <HighlightBox type="warning" title="No Sectional Cut-offs for SBI PO">
                    State Bank of India has **abolished sectional cut-offs** for the SBI PO exam. Selection is based purely on the aggregate overall score. This allows candidates with strong performance in specific subjects to qualify even if they score poorly in another section.
                  </HighlightBox>
                )}
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('cutoff') || f.q.toLowerCase().includes('attempts') || f.q.toLowerCase().includes('score'))
      };

    case 'dates': {
        const eventDetailsMap: Record<string, string> = {
          'Official Notification': `The official notification is released by the conducting body. It contains critical information regarding category-wise vacancies, reservation guidelines, participating bank branches, detailed eligibility requirements, exam centers, and standard application fees. Make sure to download and review the official PDF carefully before registering.`,
          'Application Start': `The online registration portal opens on the official site. Candidates must fill out their personal details, educational qualifications, select their preferred banks in order of priority, and pay the registration fees online.`,
          'Application Last Date': `The final day to submit your online application and pay the application fee. No changes to the application form are permitted after this date. Ensure you print a copy of your completed application for future reference.`,
          'Admit Card (Prelims)': `The admit card/call letter for the Phase 1 Preliminary online exam is released. Candidates must download it and verify their test center address, reporting time, and roll number. Ensure you carry a printed copy and original ID proof.`,
          'Prelims Exam': `The Phase 1 online objective test containing English, Quantitative Aptitude, and Reasoning sections is conducted across multiple shifts nationwide. Focus on accuracy to clear the qualifying cut-offs.`,
          'Prelims Result': `Results for Phase 1 are announced. Shortlisted candidates who clear the cut-off qualify to take the Mains exam. Scorecards with category-wise marks are typically published within 7-10 days.`,
          'Mains Exam': `The Phase 2 Main exam (Objective + Descriptive) is conducted. This is the most crucial stage as these marks form the major component of the final selection merit list. Prepare for descriptive typing on a physical keyboard.`,
          'Interview': `Personal interview conducted by a panel of senior banking officers. Questions cover banking awareness, current financial issues, personal background, and general knowledge. Dress professionally and remain confident.`,
          'Group Exercise & Interview': `SBI Phase 3 includes Group Exercises (Group Discussion/Prioritization - 20 marks) and a Personal Interview (30 marks). Simulating group discussion panels beforehand is highly recommended.`,
          'Final Result': `The final provisional allotment merit list is declared by normalizing and combining Mains and Interview/GE scores. Successful candidates receive their allotment orders at participating public sector bank branches.`
        };

        const timelineEvents = exam.dates.map(d => ({
          event: d.event,
          date: d.date,
          status: d.status as 'upcoming' | 'active' | 'closed',
          details: eventDetailsMap[d.event] || `Important recruitment milestone for the ${exam.shortName} 2026 cycle. Please track dates on the official portal to ensure compliance with conducting guidelines.`
        }));

        return {
          title: `${exam.shortName} Important Dates & Timeline 2026`,
          overview: `A complete calendar tracking notification release, online registration dates, admit card downloads, and exam milestones for ${exam.shortName} 2026.`,
          ctaText: `Download Important Exam Calendar`,
          ctaHref: 'https://app.prepgrind.com/register',
          subsections: [
            {
              id: 'interactive-timeline-section',
              title: 'Interactive Recruitment Calendar Timeline',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Track dates and plan your preparation milestones using the interactive timeline below. Click on any event to see targeted guidelines and checklist tips.
                  </p>
                  <DatesTimeline events={timelineEvents} />
                </div>
              )
            }
          ],
          faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('date') || f.q.toLowerCase().includes('recruitment') || f.q.toLowerCase().includes('official'))
        };
      }

    case 'strategy': {
        return {
          title: `${exam.shortName} Preparation Strategy & Study Plan 2026`,
          overview: `A comprehensive 90-day step-by-step preparation plan crafted by banking toppers to build speed, accuracy, and clear section cut-offs.`,
          ctaText: `Take a Free Topic Diagnostic Test`,
          ctaHref: 'https://app.prepgrind.com/register',
          subsections: examId === 'sbi-po' ? [
            {
              id: 'interactive-roadmap-section',
              title: 'Interactive 90-Day Topper Study Plan',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Click through the strategic preparation phases below to explore core milestones, daily targets, and mock frequency plans recommended by successful candidates.
                  </p>
                  <StrategyRoadmap phases={exam.strategy} />
                </div>
              )
            },
            {
              id: 'section-time-strategy',
              title: 'Section-wise Time Strategy for SBI PO Prelims',
              content: (
                <div className="space-y-5">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-3">
                    Since sections are individually timed at 20 minutes each, you need a clear attempt strategy for each.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-l-4 border-l-[#1B6EB5]">
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1">English (20 minutes)</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                        Start with Fill in the Blanks and Error Detection — they are the fastest. Attempt Cloze Test next. Save RC for last — read the questions first, then find answers in the passage.
                      </p>
                      <span className="inline-block text-[11px] font-bold text-slate-700 bg-white border border-slate-250 px-2 py-0.5 rounded">
                        Target: 22–25 attempts with 85–90% accuracy
                      </span>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-l-4 border-l-[var(--color-gold)]">
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1">Quantitative Aptitude (20 minutes)</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                        Start with Simplification (fastest marks). Move to Number Series, then Quadratic Equations. Attempt DI last — pick the easiest set first. Skip any question that takes more than 90 seconds.
                      </p>
                      <span className="inline-block text-[11px] font-bold text-slate-700 bg-white border border-slate-250 px-2 py-0.5 rounded">
                        Target: 22–25 attempts with 80%+ accuracy
                      </span>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-l-4 border-l-purple-500">
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1">Reasoning (20 minutes)</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                        Do not start with puzzles if they look complex — they can consume the entire slot. Start with Inequalities, Syllogisms, and Coding-Decoding. Attempt puzzles only if time permits.
                      </p>
                      <span className="inline-block text-[11px] font-bold text-slate-700 bg-white border border-slate-250 px-2 py-0.5 rounded">
                        Target: 22–25 attempts with 85%+ accuracy
                      </span>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: 'mock-analysis-strategy',
              title: 'Strategic Mock Test Analysis Method',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Simply taking mock tests is not enough to clear the highly competitive thresholds. You must adopt a rigorous post-test analysis strategy.
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 pl-3 list-disc list-inside">
                    <li><strong>Classify Errors:</strong> Divide wrong attempts into three categories: Conceptual Gaps, Silly Mistakes/Calculation Errors, and Time Management Issues.</li>
                    <li><strong>Re-attempt Offline:</strong> Before reading the step-by-step solutions, try to solve the incorrect and skipped questions again without a timer.</li>
                    <li><strong>Monitor Your Percentile:</strong> Do not obsess over raw marks, as paper difficulty changes. Aim for a consistent **90+ percentile** in your practice mocks.</li>
                  </ul>
                  <HighlightBox type="success" title="The Topper's Mock Analysis Habit">
                    Dedicate 2 hours to analyze every 1-hour preliminary mock test. Maintain a dedicated correction notebook to record difficult logic, puzzle conditions, or tricky arithmetic equations you failed to crack during the test.
                  </HighlightBox>
                </div>
              )
            }
          ] : [
            {
              id: 'interactive-roadmap-section',
              title: 'Interactive 90-Day topper Study Plan',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Click through the strategic preparation phases below to explore core milestones, daily targets, and mock frequency plans recommended by successful candidates.
                  </p>
                  <StrategyRoadmap phases={exam.strategy} />
                </div>
              )
            },
            {
              id: 'mock-analysis-strategy',
              title: 'Strategic Mock Test Analysis Method',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Simply taking mock tests is not enough to clear the highly competitive thresholds. You must adopt a rigorous post-test analysis strategy.
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 pl-3 list-disc list-inside">
                    <li><strong>Classify Errors:</strong> Divide wrong attempts into three categories: Conceptual Gaps, Silly Mistakes/Calculation Errors, and Time Management Issues.</li>
                    <li><strong>Re-attempt Offline:</strong> Before reading the step-by-step solutions, try to solve the incorrect and skipped questions again without a timer.</li>
                    <li><strong>Monitor Your Percentile:</strong> Do not obsess over raw marks, as paper difficulty changes. Aim for a consistent **90+ percentile** in your practice mocks.</li>
                  </ul>
                  <HighlightBox type="success" title="The Topper's Mock Analysis Habit">
                    Dedicate 2 hours to analyze every 1-hour preliminary mock test. Maintain a dedicated correction notebook to record difficult logic, puzzle conditions, or tricky arithmetic equations you failed to crack during the test.
                  </HighlightBox>
                </div>
              )
            }
          ],
          faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('prepare') || f.q.toLowerCase().includes('descriptive') || f.q.toLowerCase().includes('study'))
        };
      }

    default:
      return undefined;
  }
}
