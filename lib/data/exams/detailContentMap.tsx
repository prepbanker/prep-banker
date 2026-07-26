// PATH: lib/data/exams/detailContentMap.tsx
import React from 'react';
import type { ExamDetailData } from '@/types/exam';
import { sbiPoData } from './sbi-po';
import { sbiPoSalaryContent } from './sbiPoSalary';
import { sbiPoMockTestContent } from './sbiPoMockTest';
import { sbiPoEnglishSectionalContent } from './sbiPoEnglishSectional';
import { sbiPoQuantSectionalContent } from './sbiPoQuantSectional';
import { sbiPoReasoningSectionalContent } from './sbiPoReasoningSectional';
import { sbiPoComparisonContent } from './sbiPoComparison';
import { sbiPoStudyPlanContent } from './sbiPoStudyPlan';
import { sbiPoEligibilityContent } from './sbiPoEligibility';
import { sbiPoExamAnalysisContent } from './sbiPoExamAnalysis';
import { sbiPoPrelimsExamAnalysisContent } from './sbiPoPrelimsExamAnalysis';
import { ibpsPoData } from './ibps-po';
import { ibpsPoSalaryContent } from './ibpsPoSalary';
import { ibpsPoMockTestContent } from './ibpsPoMockTest';
import { ibpsPoEnglishSectionalContent } from './ibpsPoEnglishSectional';
import { ibpsPoQuantSectionalContent } from './ibpsPoQuantSectional';
import { ibpsPoReasoningSectionalContent } from './ibpsPoReasoningSectional';
import { ibpsPoComparisonContent } from './ibpsPoComparison';
import { ibpsPoStudyPlanContent } from './ibpsPoStudyPlan';
import Link from 'next/link';
import { Calendar, CheckCircle2, Lightbulb } from 'lucide-react';
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
  metaTitle?: string;
  metaDescription?: string;
  customSchemas?: React.ReactNode;
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
    case 'eligibility': {
      if (examId === 'sbi-po') {
        return sbiPoEligibilityContent;
      }
      return {
        title: "IBPS PO Eligibility 2026: Age Limit, Qualification & Who Can Apply",
        overview: "To apply for IBPS PO 2026, you must be between 20 and 30 years old (General category), hold a graduation degree in any discipline from a recognised university, and be an Indian citizen. Final year students can apply provisionally. There is no minimum percentage requirement. Category-wise age relaxation applies — SC/ST get 5 years, OBC (NCL) get 3 years, PwBD get 10 years.",
        metaTitle: "IBPS PO Eligibility : Age, Qualification & Criteria",
        metaDescription: "Check IBPS PO 2026 eligibility — age limit 20–30 years, graduation required, Indian nationality. See relaxations, attempts limit & start your free mock test.",
        ctaText: "Start Free IBPS PO Mock Test",
        ctaHref: "https://app.prepgrind.com/signup/ibps-po",
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
                      "name": "Eligibility",
                      "item": "https://prepbanker.com/ibps-po/eligibility"
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
                  "name": "IBPS PO Eligibility 2026: Age Limit, Qualification & Criteria",
                  "description": "Complete IBPS PO 2026 eligibility criteria — age limit (20–30 years), educational qualification, nationality, category-wise age relaxation, attempts limit, and physical standards.",
                  "url": "https://prepbanker.com/ibps-po/eligibility",
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
                      { "@type": "ListItem", "position": 3, "name": "Eligibility", "item": "https://prepbanker.com/ibps-po/eligibility" }
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
                  "headline": "IBPS PO Eligibility 2026: Age Limit, Qualification, Nationality & Category Relaxations",
                  "description": "Updated IBPS PO 2026 eligibility guide covering age limit, educational qualification, nationality, category-wise relaxations, attempts limit, and how to check your eligibility.",
                  "url": "https://prepbanker.com/ibps-po/eligibility",
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
                  "mainEntityOfPage": "https://prepbanker.com/ibps-po/eligibility"
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
                  "description": "Full-length mock tests, sectional tests, PYQs, and DPPs for IBPS PO Prelims and Mains 2026 preparation on PrepBanker.",
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
                      "name": "What is the age limit for IBPS PO 2026?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IBPS PO 2026 age limit is 20 to 30 years for General category candidates. The candidate must have been born not earlier than 02.06.1996 and not later than 01.06.2006 (dates subject to official notification). Age relaxation applies: SC/ST get 5 years, OBC (Non-Creamy Layer) get 3 years, PwBD get 10 years, and Ex-Servicemen get additional relaxation as per government rules."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the educational qualification required for IBPS PO 2026?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Candidates must hold a degree (graduation) in any discipline from a university recognised by the Government of India or equivalent. Final year students can also apply provisionally, but must produce their degree certificate at the time of interview or joining. There is no minimum percentage requirement — any passing grade qualifies."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can a final year student apply for IBPS PO 2026?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Students in their final year of graduation can apply for IBPS PO 2026 provisionally. However, they must produce proof of passing their graduation (degree certificate or provisional certificate) at the time of interview or joining. If you cannot produce this document, your candidature is cancelled — even if you clear all exam stages."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How many times can I attempt IBPS PO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IBPS does not officially publish a fixed limit on the number of IBPS PO attempts. You can appear every year as long as you meet the age and educational eligibility criteria. The practical limit is your age window — General category candidates have a 10-year window (20–30 years), which allows roughly 7–9 attempts if you start at 21."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is there age relaxation for OBC candidates in IBPS PO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. OBC candidates (Non-Creamy Layer) get 3 years of age relaxation in IBPS PO, making their effective upper age limit 33 years. This relaxation is only applicable to candidates with a valid Non-Creamy Layer (NCL) OBC certificate issued on or after the date specified in the official notification. A general OBC certificate without NCL status does not qualify for relaxation."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the nationality requirement for IBPS PO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Candidates must be Indian citizens. Additionally, IBPS also accepts subjects of Nepal or Bhutan, Tibetan refugees who came to India before 01.01.1962 with the intention of permanently settling, and persons of Indian origin (PIO) who migrated from Pakistan, Burma, Sri Lanka, East African countries, or Vietnam — provided they have an eligibility certificate issued by the Government of India."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does IBPS PO require any specific computer knowledge?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. IBPS mandates that candidates must have a certificate or degree or diploma in computer operations or language, OR have studied computer or information technology as one of the subjects in their 10th/12th standard or degree-level education. Most graduates who studied in schools after 2000 automatically qualify, but check your marksheets to confirm."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the age limit for IBPS PO for SC and ST candidates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SC and ST candidates get 5 years of age relaxation in IBPS PO, making their effective upper age limit 35 years. Combined with the standard 20-year lower limit (which remains 20 for all categories), SC/ST candidates have a 15-year eligibility window, compared to 10 years for General candidates."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I apply for IBPS PO if I have a backlog in my degree?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IBPS notification requires you to hold a degree from a recognised university. Having backlogs that you have cleared by the time of joining should not be an issue as long as you can produce your degree certificate. However, if you still have active backlogs at the time of joining or interview, your candidature may be at risk. Clear all backlogs before the interview stage."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is PrepBanker free to use for IBPS PO preparation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "PrepBanker offers a free full-length IBPS PO Prelims mock test at app.prepgrind.com/register — no payment required. Additional mock tests, Mains tests, DPPs, and sectional tests are part of subscription plans. The free test is a complete exam simulation with detailed post-test analysis, strong enough to establish your baseline score before committing."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What documents do I need to carry for IBPS PO interview?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For the IBPS PO interview, carry: original degree certificate (or provisional), Class 10 marksheet as age proof, caste certificate (if applicable, issued by a competent authority), ID proof (Aadhaar/PAN/Passport), printout of the call letter, two passport-size photographs, and a computer literacy certificate. Carry both originals and self-attested photocopies of all documents."
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
            title: "IBPS PO 2026 — Eligibility Quick Snapshot",
            content: (
              <div className="space-y-4">
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Parameter</th>
                        <th className="px-4 py-2.5">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Exam Name</td>
                        <td className="px-4 py-3">IBPS CRP PO/MT (Probationary Officer / Management Trainee)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Conducting Body</td>
                        <td className="px-4 py-3">Institute of Banking Personnel Selection (IBPS)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Age Limit (General)</td>
                        <td className="px-4 py-3">20 to 30 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Upper Age Limit with SC/ST relaxation</td>
                        <td className="px-4 py-3">35 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Upper Age Limit with OBC (NCL) relaxation</td>
                        <td className="px-4 py-3">33 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Educational Qualification</td>
                        <td className="px-4 py-3">Graduation in any discipline (any percentage)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Computer Knowledge</td>
                        <td className="px-4 py-3">Mandatory (certificate, diploma, or as a studied subject)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Nationality</td>
                        <td className="px-4 py-3">Indian (plus specific categories of foreign nationals)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Attempts Limit</td>
                        <td className="px-4 py-3">No official cap; limited by age window</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "basic-criteria",
            title: "What Are the Basic IBPS PO Eligibility Criteria for 2026?",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Three conditions must all be true at the time of application:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                  <li><strong>Age:</strong> Between 20 and 30 years for General category (as on the cutoff date in the official notification)</li>
                  <li><strong>Education:</strong> Graduation in any discipline from a recognised university or institution</li>
                  <li><strong>Nationality:</strong> Indian citizen (or specific qualifying foreign national status)</li>
                </ol>
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  If you fail even one of these, your application will be rejected — regardless of how well you prepare. Check all three before registering.
                </p>
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  IBPS released the CRP PO/MT-XIV notification in 2025 with 5,208 vacancies. The 2026 notification is expected between July and September 2026. Eligibility criteria have remained consistent across cycles, but always verify against the official notification at ibps.in before applying.
                </p>
              </div>
            )
          },
          {
            id: "age-limit",
            title: "What Is the Age Limit for IBPS PO 2026?",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The age limit for IBPS PO 2026 is <strong>20 to 30 years</strong> for General/EWS category candidates, calculated as of the cutoff date specified in the official notification (typically June 1st of the notification year).
                </p>

                <h4 className="font-bold text-slate-850 text-sm sm:text-base text-[#1B6EB5]">Category-wise Age Limit and Relaxation</h4>
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Category</th>
                        <th className="px-4 py-2.5 text-center">Lower Age Limit</th>
                        <th className="px-4 py-2.5 text-center">Upper Age Limit</th>
                        <th className="px-4 py-2.5 text-center">Relaxation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-805">General / EWS</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">30 years</td>
                        <td className="px-4 py-3 text-center">Nil</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-805">OBC (Non-Creamy Layer)</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">33 years</td>
                        <td className="px-4 py-3 text-center">3 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-805">SC</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">35 years</td>
                        <td className="px-4 py-3 text-center">5 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-805">ST</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">35 years</td>
                        <td className="px-4 py-3 text-center">5 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">PwBD (General)</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">40 years</td>
                        <td className="px-4 py-3 text-center">10 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">PwBD (SC/ST)</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">45 years</td>
                        <td className="px-4 py-3 text-center">15 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Ex-Servicemen</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">As per DoPT norms</td>
                        <td className="px-4 py-3 text-center">Deduct military service + 3 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Widows / Divorced (Gen)</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">35 years</td>
                        <td className="px-4 py-3 text-center">5 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Widows / Divorced (SC/ST)</td>
                        <td className="px-4 py-3 text-center">20 years</td>
                        <td className="px-4 py-3 text-center">40 years</td>
                        <td className="px-4 py-3 text-center">10 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                  <strong>Important:</strong> Age relaxation for OBC candidates requires a valid <strong>Non-Creamy Layer (NCL)</strong> certificate. A general OBC certificate without NCL status will not qualify you for the relaxation. Ensure your certificate is issued by the competent authority (District Magistrate / SDO level), not just any government office.
                </p>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">How to Calculate Your Age Eligibility</h4>
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-3">
                    IBPS specifies the exact cutoff date in the official notification — typically phrased as: <em>&quot;Not below 20 years and not above 30 years — that is, a candidate must have been born not earlier than 02.06.1996 and not later than 01.06.2006 (both dates inclusive).&quot;</em>
                  </p>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Use the notified cutoff date (not today&apos;s date or exam date) for your calculation. If the notification says the cutoff is June 1, 2026:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-650 text-xs sm:text-sm mt-2">
                    <li>You must have been born on or before June 1, 2006 (to be at least 20)</li>
                    <li>You must have been born on or after June 2, 1996 (to be at most 30, for General)</li>
                  </ul>
                </div>

                <HighlightBox type="info" title="Pro Tip: Birthday Cutoff Verification">
                  If you&apos;re turning 30 in the same year as the notification, check whether your birthday falls before or after the cutoff date specified in the notification. Many students miss the cutoff by a few days — don&apos;t be one of them. Mark the exact date in the official notification, not an approximate.
                </HighlightBox>
              </div>
            )
          },
          {
            id: "educational-qualification",
            title: "What Is the Educational Qualification for IBPS PO 2026?",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The educational requirement for IBPS PO is a <strong>degree (graduation) in any discipline</strong> from a university recognised by the Government of India or an equivalent qualification approved by the Central Government.
                </p>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Key points:</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                    <li><strong>Any stream works</strong> — B.Sc, B.Com, B.A., B.Tech, BBA, BCA, LLB — all qualify.</li>
                    <li><strong>No minimum percentage</strong> — A pass in graduation is sufficient. 50%, 55%, 60% — IBPS does not specify any cutoff.</li>
                    <li><strong>Distance / correspondence degrees are valid</strong> — as long as the university is recognised by the UGC/AICTE/Government.</li>
                    <li><strong>Integrated courses (5-year degrees)</strong> count as graduation upon completion.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2 text-[#1B6EB5]">Can Final Year Students Apply?</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Yes. Students who are in their <strong>final year or final semester</strong> of graduation can apply provisionally. The condition: you must submit your degree or provisional certificate at the time of interview or before joining. If you cannot produce this document when required, your candidature is cancelled — even if you clear Prelims, Mains, and the Interview.
                  </p>
                </div>

                <HighlightBox type="info" title="Pro Tip: Provisional Certificate Planning">
                  If you&apos;re a final year student applying provisionally, don&apos;t wait for your university&apos;s formal convocation to get your certificate. Apply for a provisional certificate or result-cum-certificate immediately after your final exams. University offices often take weeks — plan ahead so you&apos;re not scrambling when the interview call arrives.
                </HighlightBox>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2 text-[#1B6EB5]">Does Your Graduation Percentage Matter for Cut-offs?</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Not for eligibility — but banks may ask during the Interview. A lower percentage isn&apos;t disqualifying, but some banks informally prefer candidates with 60%+ during the interview panel stage. This is not a documented rule. Focus on your Mains score first; graduation percentage is a minor factor at the Interview.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: "nationality-requirement",
            title: "What Is the Nationality Requirement for IBPS PO?",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  IBPS PO is primarily for <strong>Indian citizens</strong>, but the official notification also accepts candidates from the following categories (with an eligibility certificate issued by the Government of India):
                </p>

                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Category</th>
                        <th className="px-4 py-2.5">Condition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Indian Citizen</td>
                        <td className="px-4 py-3">Standard eligibility, no additional requirement</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Subject of Nepal</td>
                        <td className="px-4 py-3">Must be a citizen of Nepal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Subject of Bhutan</td>
                        <td className="px-4 py-3">Must be a citizen of Bhutan</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Tibetan Refugee</td>
                        <td className="px-4 py-3">Must have come to India before January 1, 1962, intending to permanently settle</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Person of Indian Origin (PIO)</td>
                        <td className="px-4 py-3">Must have migrated from Pakistan, Burma, Sri Lanka, East African countries (Kenya, Uganda, Tanzania), Zambia, Malawi, Zaire, Ethiopia, or Vietnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                  For the last four categories, a <strong>certificate of eligibility</strong> from the Government of India is mandatory and must be produced before appointment.
                </p>
              </div>
            )
          },
          {
            id: "computer-knowledge",
            title: "Is Computer Knowledge Mandatory for IBPS PO?",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Yes. IBPS PO has a mandatory computer knowledge requirement. A candidate must satisfy <strong>at least one</strong> of the following conditions:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                  <li>Hold a certificate, diploma, or degree in computer operations or any computer language from a recognised institution.</li>
                  <li>Have studied computer science or information technology as a subject at the 10th standard, 12th standard, or graduation level.</li>
                  <li>Have relevant work experience involving computer operations.</li>
                </ol>
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  For most graduates who passed their 10th or 12th after 2000, computer education was part of the standard curriculum — your marksheet will show &quot;Computer Science&quot; or &quot;IT&quot; as a subject. If it does, you&apos;re covered. If your degree had zero computer coursework and your school didn&apos;t teach computers, you should obtain a basic computer certificate (NIELIT&apos;s CCC certificate is widely accepted).
                </p>
              </div>
            )
          },
          {
            id: "attempts-limit",
            title: "How Many Times Can You Attempt IBPS PO?",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  IBPS does not formally cap the number of attempts for IBPS PO. Unlike UPSC (which limits attempts to 6 for General and 9 for OBC), IBPS allows you to attempt every year as long as you meet the age eligibility criteria.
                </p>
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Your practical attempt window is determined entirely by your age:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-650 text-xs sm:text-sm">
                  <li><strong>General/EWS:</strong> Age 20–30 = up to 10 annual attempts (if you start at 20)</li>
                  <li><strong>OBC (NCL):</strong> Age 20–33 = up to 13 annual attempts</li>
                  <li><strong>SC/ST:</strong> Age 20–35 = up to 15 annual attempts</li>
                </ul>
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  In practice, most successful IBPS PO selections happen within 2–4 attempts. Over 10 lakh students appear for IBPS PO Prelims each year — the number has ranged from 9.5 lakh to over 14 lakh across cycles. With ~5,000 vacancies and ~10+ lakh applicants, the selection ratio is roughly 0.05% — one of the most competitive exams in the country.
                </p>
              </div>
            )
          },
          {
            id: "ibps-vs-sbi",
            title: "IBPS PO Eligibility vs SBI PO Eligibility: Key Differences",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Students often prepare for both IBPS PO and SBI PO simultaneously. The eligibility criteria are largely similar but have a few important differences:
                </p>

                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Parameter</th>
                        <th className="px-4 py-2.5">IBPS PO 2026</th>
                        <th className="px-4 py-2.5">SBI PO 2026</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Age (General)</td>
                        <td className="px-4 py-3">20–30 years</td>
                        <td className="px-4 py-3">21–30 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Age (SC/ST)</td>
                        <td className="px-4 py-3">20–35 years</td>
                        <td className="px-4 py-3">21–35 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Age (OBC NCL)</td>
                        <td className="px-4 py-3">20–33 years</td>
                        <td className="px-4 py-3">21–33 years</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Minimum qualification</td>
                        <td className="px-4 py-3">Any graduation (any %)</td>
                        <td className="px-4 py-3">Any graduation (min 60% for Gen, 55% for SC/ST/PwBD)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Computer knowledge</td>
                        <td className="px-4 py-3">Mandatory (certificate/subject)</td>
                        <td className="px-4 py-3">Desirable, not mandatory</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">No. of vacancies (2025 cycle)</td>
                        <td className="px-4 py-3">5,208</td>
                        <td className="px-4 py-3">600</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Attempts limit</td>
                        <td className="px-4 py-3">No official cap</td>
                        <td className="px-4 py-3">No official cap</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Exam conducting body</td>
                        <td className="px-4 py-3">IBPS</td>
                        <td className="px-4 py-3">SBI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The most significant difference: <strong>SBI PO requires a minimum 60% in graduation</strong> for General candidates. IBPS PO has no such requirement. If your percentage is below 60%, focus more aggressively on IBPS PO.
                </p>
              </div>
            )
          },
          {
            id: "confirm-eligibility",
            title: "Step-by-Step: How to Confirm Your IBPS PO 2026 Eligibility",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Don&apos;t assume eligibility — verify it. Run through this checklist before filling the application form:
                </p>

                <div className="relative pl-6 border-l border-slate-200 py-2 space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Check your age limit",
                      desc: "Check your age against the official cutoff date in the IBPS PO 2026 notification. Use your 10th standard certificate as age proof — birth certificates are not accepted by most banks."
                    },
                    {
                      step: 2,
                      title: "Confirm university recognition",
                      desc: "Confirm your degree is from a recognised university. Check the UGC website (ugc.gov.in) if you're unsure about your university's recognition status. Distance education universities should be cross-checked with the DEB (Distance Education Bureau) list."
                    },
                    {
                      step: 3,
                      title: "Verify computer qualification",
                      desc: "Verify your computer qualification. Pull out your 10th, 12th, and graduation marksheets. If 'Computer Science', 'IT', or 'Informatics Practices' appears as a subject, you're covered. If not, get a NIELIT CCC certificate before applying."
                    },
                    {
                      step: 4,
                      title: "Confirm nationality documents",
                      desc: "Confirm nationality. Indian citizens need no additional document at the application stage. Non-citizen eligible candidates must arrange the Government of India eligibility certificate early — this takes time."
                    },
                    {
                      step: 5,
                      title: "Check caste certificate validity",
                      desc: "Check caste certificate validity (if applicable). For OBC candidates: ensure your certificate is Non-Creamy Layer and issued by a competent authority (District Magistrate / Sub-Divisional Officer level) after the date specified in the notification. Old or expired certificates will not be accepted."
                    },
                    {
                      step: 6,
                      title: "Check service/employer restrictions",
                      desc: "Check for any service/employer restrictions. Government employees (Central/State) must typically obtain a No Objection Certificate (NOC) from their current employer before applying for IBPS PO. Check your employment terms."
                    },
                    {
                      step: 7,
                      title: "Confirm current bank employment status",
                      desc: "Confirm you are not already a banking employee. Candidates already working as officers in IBPS-member banks are not eligible to apply. Clerks and sub-staff of these banks may apply, subject to their bank's internal rules."
                    }
                  ].map((item) => (
                    <div key={item.step} className="relative">
                      <div className="absolute -left-[35px] top-1.5 w-[18px] h-[18px] rounded-full bg-white border-2 border-[#1B6EB5] flex items-center justify-center font-bold text-xs text-[#1B6EB5]">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "prepbanker-usage",
            title: "How to Use PrepBanker After Confirming Your Eligibility",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Once you&apos;ve confirmed you&apos;re eligible for IBPS PO 2026, the next question is: where do you start your preparation? Here&apos;s how to use PrepBanker from day one:
                </p>

                <div className="grid grid-cols-1 gap-4 my-2">
                  {[
                    {
                      step: "Step 1",
                      title: "Take the free baseline mock test",
                      desc: "Visit app.prepgrind.com/register and attempt the free IBPS PO Prelims mock test. No payment, no lengthy signup. The result will tell you — honestly — where you stand. Most first-attempt students score 40–60 out of 100. That's normal. The point is to know your starting point, not to impress yourself."
                    },
                    {
                      step: "Step 2",
                      title: "Review your sectional breakdown",
                      desc: "PrepBanker's post-test dashboard shows accuracy %, average time per question, and topic-wise performance for all three Prelims sections. Identify your weakest section — that's where you start your topic-wise preparation."
                    },
                    {
                      step: "Step 3",
                      title: "Work through chapter-wise quizzes for weak topics",
                      desc: "Use PrepBanker's DPP (Daily Practice Problems) sets and chapter-wise quizzes. These are shorter than full mocks and more targeted — ideal for building skill before stamina. For example, if your Reasoning score is weak, start with the Puzzle & Seating Arrangement chapter quiz."
                    },
                    {
                      step: "Step 4",
                      title: "Attempt sectional tests",
                      desc: "Once you've covered a topic, test it under timed conditions with PrepBanker's sectional tests. The Prelims-format sectional test for Quantitative Aptitude, for example, replicates the 20-minute window with the same question distribution as the actual exam."
                    },
                    {
                      step: "Step 5",
                      title: "Move to full-length mocks 8–10 weeks before Prelims",
                      desc: "Attempt at least 2 full mocks per week, review every wrong answer, and track your score trend. Score improvement should be gradual — 5 mock tests with deep review beats 20 mocks with no analysis every time."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-xs transition-shadow">
                      <span className="text-xs font-bold text-[#1B6EB5] uppercase tracking-wider block mb-1">{item.step}</span>
                      <h4 className="font-extrabold text-slate-855 text-sm sm:text-base mb-1.5">{item.title}</h4>
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "explore-more",
            title: "Also Explore on PrepBanker",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Eligibility is step one. Here&apos;s what to do next:
                </p>
                <ul className="space-y-4 text-slate-655 text-xs sm:text-sm">
                  <li className="leading-relaxed">
                    Start your IBPS PO prep with a free <Link href="/ibps-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Mock Test</Link> — a complete 100-question, 60-minute Prelims simulation with sectional timers and instant score analysis. No cost, no commitment. Just a clear picture of where you stand.
                  </li>
                  <li className="leading-relaxed">
                    Check the <Link href="/ibps-po/exam-pattern" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Exam Pattern 2026</Link> page for a detailed section-wise breakdown of Prelims and Mains — marks distribution, time limits, negative marking rules, and how scores are calculated for the final merit list.
                  </li>
                  <li className="leading-relaxed">
                    Explore <Link href="/ibps-po/mains-mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Mock Tests</Link> once you&apos;ve cleared Prelims. These include the Descriptive Paper (Letter + Essay) with model answers from previous years.
                  </li>
                  <li className="leading-relaxed">
                    Sharpen your <Link href="/banking-awareness" className="font-bold text-[#1B6EB5] hover:underline">Banking Awareness &amp; GEBA</Link> with PrepBanker&apos;s monthly-updated quiz sets on RBI policies, government schemes, static banking GK, and financial news — crucial for the IBPS PO Mains General Economy section.
                  </li>
                  <li className="leading-relaxed">
                    If you&apos;re also targeting SBI PO, visit the <Link href="/sbi-po/eligibility" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Eligibility 2026</Link> page to compare criteria side by side and avoid surprises during form-filling for either exam.
                  </li>
                </ul>
              </div>
            )
          }
        ],
        faqs: [
          {
            q: "What is the age limit for IBPS PO 2026?",
            a: "The IBPS PO 2026 age limit is 20 to 30 years for General category candidates. The candidate must have been born not earlier than 02.06.1996 and not later than 01.06.2006 (dates subject to official notification). Age relaxation applies: SC/ST get 5 years, OBC (Non-Creamy Layer) get 3 years, PwBD get 10 years, and Ex-Servicemen get additional relaxation as per government rules."
          },
          {
            q: "What is the educational qualification required for IBPS PO 2026?",
            a: "Candidates must hold a degree (graduation) in any discipline from a university recognised by the Government of India or equivalent. Final year students can also apply provisionally, but must produce their degree certificate at the time of interview or joining. There is no minimum percentage requirement — any passing grade qualifies."
          },
          {
            q: "Can a final year student apply for IBPS PO 2026?",
            a: "Yes. Students in their final year of graduation can apply for IBPS PO 2026 provisionally. However, they must produce proof of passing their graduation (degree certificate or provisional certificate) at the time of interview or joining. If you cannot produce this document, your candidature is cancelled — even if you clear all exam stages."
          },
          {
            q: "How many times can I attempt IBPS PO?",
            a: "IBPS does not officially publish a fixed limit on the number of IBPS PO attempts. You can appear every year as long as you meet the age and educational eligibility criteria. The practical limit is your age window — General category candidates have a 10-year window (20–30 years), which allows roughly 7–9 attempts if you start at 21."
          },
          {
            q: "Is there age relaxation for OBC candidates in IBPS PO?",
            a: "Yes. OBC candidates (Non-Creamy Layer) get 3 years of age relaxation in IBPS PO, making their effective upper age limit 33 years. This relaxation is only applicable to candidates with a valid Non-Creamy Layer (NCL) OBC certificate issued on or after the date specified in the official notification. A general OBC certificate without NCL status does not qualify for relaxation."
          },
          {
            q: "What is the nationality requirement for IBPS PO?",
            a: "Candidates must be Indian citizens. Additionally, IBPS also accepts subjects of Nepal or Bhutan, Tibetan refugees who came to India before 01.01.1962 with the intention of permanently settling, and persons of Indian origin (PIO) who migrated from Pakistan, Burma, Sri Lanka, East African countries, or Vietnam — provided they have an eligibility certificate issued by the Government of India."
          },
          {
            q: "Does IBPS PO require any specific computer knowledge?",
            a: "Yes. IBPS mandates that candidates must have a certificate or degree or diploma in computer operations or language, OR have studied computer or information technology as one of the subjects in their 10th/12th standard or degree-level education. Most graduates who studied in schools after 2000 automatically qualify, but check your marksheets to confirm."
          },
          {
            q: "What is the age limit for IBPS PO for SC and ST candidates?",
            a: "SC and ST candidates get 5 years of age relaxation in IBPS PO, making their effective upper age limit 35 years. Combined with the standard 20-year lower limit (which remains 20 for all categories), SC/ST candidates have a 15-year eligibility window, compared to 10 years for General candidates."
          },
          {
            q: "Can I apply for IBPS PO if I have a backlog in my degree?",
            a: "The IBPS notification requires you to hold a degree from a recognised university. Having backlogs that you have cleared by the time of joining should not be an issue as long as you can produce your degree certificate. However, if you still have active backlogs at the time of joining or interview, your candidature may be at risk. Clear all backlogs before the interview stage."
          },
          {
            q: "Is PrepBanker free to use for IBPS PO preparation?",
            a: "PrepBanker offers a free full-length IBPS PO Prelims mock test at app.prepgrind.com/register — no payment required. Additional mock tests, Mains tests, DPPs, and sectional tests are part of subscription plans. The free test is a complete exam simulation with detailed post-test analysis, strong enough to establish your baseline score before committing."
          },
          {
            q: "What documents do I need to carry for IBPS PO interview?",
            a: "For the IBPS PO interview, carry: original degree certificate (or provisional), Class 10 marksheet as age proof, caste certificate (if applicable, issued by a competent authority), ID proof (Aadhaar/PAN/Passport), printout of the call letter, two passport-size photographs, and a computer literacy certificate. Carry both originals and self-attested photocopies of all documents."
          }
        ]
      };
    }

    case 'syllabus': {
      if (examId === 'sbi-po') {
        return {
          title: "SBI PO Syllabus 2026: Prelims & Mains Topic-Wise",
          overview: "Complete topic-wise syllabus for SBI PO 2026 covering English, Quantitative Aptitude, Reasoning, General Economy, Computer Aptitude and Descriptive writing.",
          metaTitle: "SBI PO Syllabus 2026: Prelims & Mains Topic-Wise PDF",
          metaDescription: "Complete SBI PO Syllabus 2026 for Prelims & Mains — topic-wise weightage for English, Quant, Reasoning, Banking Awareness & Descriptive test. PDF inside.",
          ctaText: "Attempt Free SBI PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/sbi-po",
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Syllabus", "item": "https://prepbanker.com/sbi-po/syllabus" }
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
                    "headline": "SBI PO Syllabus 2026: Prelims & Mains Topic-Wise",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/syllabus"
                  })
                }}
              />
              {/* LearningResource Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LearningResource",
                    "name": "SBI PO Syllabus 2026",
                    "description": "Complete topic-wise syllabus for SBI PO Prelims, Mains, Descriptive Test, Psychometric Test and Interview.",
                    "educationalLevel": "Competitive Banking Exam",
                    "teaches": [
                      "English Language",
                      "Quantitative Aptitude",
                      "Reasoning Ability",
                      "Data Analysis & Interpretation",
                      "Banking & Economy Awareness",
                      "Computer Aptitude",
                      "Descriptive Writing"
                    ],
                    "provider": { "@type": "Organization", "name": "PrepBanker", "url": "https://prepbanker.com" }
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
                        "name": "What is the syllabus for SBI PO Prelims 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI PO Prelims covers three sections: English Language, Quantitative Aptitude, and Reasoning Ability." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the syllabus for SBI PO Mains 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI PO Mains covers Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and English Language, plus a separate Descriptive Test." }
                      },
                      {
                        "@type": "Question",
                        "name": "Has the SBI PO Syllabus changed for 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The overall syllabus structure is unchanged; the main revision is the Descriptive Test marks being reduced from 50 to 30." }
                      },
                      {
                        "@type": "Question",
                        "name": "What topics are covered in the SBI PO Descriptive Test?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Email Writing, Situation Analysis Writing, and Report or Precis Writing." }
                      },
                      {
                        "@type": "Question",
                        "name": "Which is the highest-weightage topic in SBI PO Prelims Reasoning?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Puzzles and Seating Arrangement carry the highest weightage, typically 15 to 20 questions out of 30." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there a fixed syllabus for the SBI PO Interview?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, the interview has no fixed syllabus. It assesses banking awareness, current affairs, communication skills, and personal suitability for an officer role." }
                      },
                      {
                        "@type": "Question",
                        "name": "What does the SBI PO Computer Aptitude syllabus include?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Computer Fundamentals, Hardware, Software, Operating Systems, Networking, Internet, Cyber Security basics, MS Office, and Database basics." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many questions come from Data Interpretation in SBI PO Prelims?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Data Interpretation typically carries 10 to 15 questions in the Quantitative Aptitude section of Prelims." }
                      },
                      {
                        "@type": "Question",
                        "name": "What does the SBI PO Psychometric Test evaluate?",
                        "acceptedAnswer": { "@type": "Answer", "text": "It evaluates personality traits such as leadership, integrity, emotional intelligence, teamwork, decision-making, and adaptability." }
                      },
                      {
                        "@type": "Question",
                        "name": "Where can I download the SBI PO Syllabus 2026 PDF?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The complete topic-wise SBI PO Syllabus 2026 PDF is available for download directly on this page." }
                      }
                    ]
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "content-override",
              title: "",
              content: <></>
            }
          ],
          faqs: [
            { q: "What is the syllabus for SBI PO Prelims 2026?", a: "SBI PO Prelims covers three sections: English Language, Quantitative Aptitude, and Reasoning Ability." },
            { q: "What is the syllabus for SBI PO Mains 2026?", a: "SBI PO Mains covers Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and English Language, plus a separate Descriptive Test." },
            { q: "Has the SBI PO Syllabus changed for 2026?", a: "The overall syllabus structure is unchanged; the main revision is the Descriptive Test marks being reduced from 50 to 30." },
            { q: "What topics are covered in the SBI PO Descriptive Test?", a: "Email Writing, Situation Analysis Writing, and Report/Precis Writing." },
            { q: "Which is the highest-weightage topic in SBI PO Prelims Reasoning?", a: "Puzzles and Seating Arrangement carry the highest weightage, typically 15–20 questions out of 30." },
            { q: "Is there a fixed syllabus for the SBI PO Interview?", a: "No, the interview has no fixed syllabus — it assesses banking awareness, current affairs, communication skills, and personal suitability for an officer role." },
            { q: "What does the SBI PO Computer Aptitude syllabus include?", a: "Computer Fundamentals, Hardware, Software, Operating Systems, Networking, Internet, Cyber Security basics, MS Office, and Database basics." },
            { q: "How many questions come from Data Interpretation in SBI PO Prelims?", a: "Data Interpretation typically carries 10–15 questions in the Quantitative Aptitude section of Prelims." },
            { q: "What does the SBI PO Psychometric Test evaluate?", a: "It evaluates personality traits such as leadership, integrity, emotional intelligence, teamwork, decision-making, and adaptability — there's no right or wrong answer format." },
            { q: "Where can I download the SBI PO Syllabus 2026 PDF?", a: "The complete topic-wise SBI PO Syllabus 2026 PDF is available for download on this page." }
          ]
        };
      }

            if (examId === 'ibps-po') {
        return {
          title: "IBPS PO Syllabus 2026 — Complete Topic List for Prelims and Mains",
          overview: "The IBPS PO 2026 syllabus covers five subjects across two stages. Prelims tests English Language, Quantitative Aptitude, and Reasoning Ability — 100 marks in 60 minutes. Mains tests Reasoning & Computer Aptitude, English Language, Data Analysis & Interpretation, and General Economy & Banking Awareness — 200 marks in 3 hours — plus a 25-mark Descriptive paper. IBPS has not officially changed the core syllabus since 2015; topic difficulty and weightage shift, but the subject framework stays the same.",
          metaTitle: "IBPS PO Syllabus — Prelims & Mains Complete Topics",
          metaDescription: "IBPS PO syllabus 2026 for Prelims and Mains — complete topic list, section-wise weightage, exam pattern, and free mock tests to practise every topic on PrepBanker.",
          ctaText: "Download Syllabus & Start Practice",
          ctaHref: "https://app.prepgrind.com/signup/ibps-po",
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
                        "name": "IBPS PO Syllabus 2026",
                        "item": "https://prepbanker.com/ibps-po/syllabus"
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
                    "name": "IBPS PO Syllabus 2026 — Complete Prelims & Mains Topic List with Weightage",
                    "url": "https://prepbanker.com/ibps-po/syllabus",
                    "description": "Complete IBPS PO syllabus 2026 for Prelims and Mains — section-wise topic list, high-weightage areas, exam pattern, difficulty analysis, and preparation strategy for each subject.",
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
              {/* Article Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "IBPS PO Syllabus 2026 — Complete Prelims & Mains Topics, Weightage & Preparation Strategy",
                    "url": "https://prepbanker.com/ibps-po/syllabus",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "author": {
                      "@type": "Organization",
                      "name": "PrepBanker Editorial Team",
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
                    "description": "Topic-wise IBPS PO syllabus 2026 for Prelims and Mains — with high-weightage areas, section-by-section difficulty ratings, preparation order, and mock test strategy.",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://prepbanker.com/ibps-po/syllabus"
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
                        "name": "What is the complete syllabus for IBPS PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO 2026 syllabus covers three stages. Prelims: English Language (30 marks), Quantitative Aptitude (35 marks), Reasoning Ability (35 marks) — 100 marks total, 60 minutes. Mains: Reasoning & Computer Aptitude (60 marks), English Language (40 marks), Data Analysis & Interpretation (60 marks), General Economy & Banking Awareness (40 marks), plus a Descriptive English paper (25 marks)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Which topics are most important in IBPS PO Prelims?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "In Prelims, the highest-weightage topics are: Puzzles and Seating Arrangement (15–20 marks in Reasoning), Data Interpretation (10–15 marks in Quant), Reading Comprehension (10 marks in English), and Number Series or Simplification (5–8 marks in Quant). These four topic clusters alone account for 40–50% of the Prelims paper."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is the IBPS PO Mains syllabus much harder than Prelims?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes — significantly. Mains adds Computer Aptitude to Reasoning, upgrades Quant to full Data Analysis and Interpretation (complex DI sets), adds a Banking Awareness component to GA, and introduces a 25-mark Descriptive paper (essay + letter). The question difficulty increases, time pressure is higher, and sectional complexity is deeper."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What topics come under IBPS PO General Awareness in Mains?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO Mains GA covers: current affairs (last 6 months), RBI monetary policy and circulars, banking terminology (NPA, CASA, CRR, SLR, Basel norms), government schemes (PM Jan Dhan, Mudra Yojana), financial market basics (capital market, SEBI, stock exchanges), international organisations, and static GK (national parks, awards, summits, sports)."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is IBPS PO syllabus the same as SBI PO syllabus?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Largely similar, but with key differences. SBI PO Prelims has no sectional time limits (IBPS PO does — 20 minutes per section). SBI PO Mains has a Data Analysis section at higher difficulty and a different GA focus. SBI PO also includes a Group Exercise in final selection; IBPS PO uses only an Interview. Treat them as overlapping but not identical."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How many topics are there in IBPS PO Quantitative Aptitude?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO Quant syllabus covers approximately 15–18 topic areas: Data Interpretation, Number Series, Simplification/Approximation, Quadratic Equations, Ratio & Proportion, Percentage, Profit & Loss, Simple & Compound Interest, Time & Work, Time Speed Distance, Mixture & Alligation, Partnership, Average, Mensuration, Probability, and Permutation & Combination."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the IBPS PO Descriptive paper syllabus?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The IBPS PO Descriptive paper has 2 questions: one essay (250–300 words) and one letter (formal or informal, 150–200 words). Both are typed on a computer. Common essay topics include financial inclusion, digital banking, and economic policy. Letters include complaint letters, formal requests, and bank-customer correspondence. This paper carries 25 marks and has a 30-minute time limit."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I skip Computer Aptitude in IBPS PO Mains preparation?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No — Computer Aptitude is clubbed with Reasoning in Mains (combined 60 marks, 60 minutes). You cannot skip it without hurting your Reasoning score. However, Computer Aptitude in IBPS PO is not advanced — it covers basics: hardware, software, internet concepts, MS Office, networking, and abbreviations. 3–4 hours of focused study covers most of what IBPS asks."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Does IBPS PO syllabus change every year?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The core syllabus stays stable — IBPS has not officially revised the PO syllabus since 2015. What changes is question difficulty, topic weightage within sections, and the type of DI sets or Puzzle formats used. For 2026, no syllabus revision is expected. However, always check the official CRP PO/MT-XVI notification on ibps.in when released."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I use PrepBanker to practise IBPS PO syllabus topics for free?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. PrepBanker offers free mock tests, sectional tests, and topic-wise quizzes covering every part of the IBPS PO 2026 syllabus at app.prepgrind.com. After each test, you get a topic-level accuracy breakdown — so you can map your performance directly to the syllabus and identify exactly which chapters need more work."
                        }
                      }
                    ]
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
                    "name": "IBPS PO 2026 Complete Preparation — Mock Tests, Sectional Tests & Topic Quizzes",
                    "description": "Comprehensive IBPS PO 2026 preparation covering every syllabus topic — full-length Prelims and Mains mocks, subject-wise sectional tests, DPPs, and previous year question sets with analytics.",
                    "provider": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
                    },
                    "url": "https://prepbanker.com/ibps-po",
                    "educationalLevel": "Undergraduate",
                    "hasCourseInstance": {
                      "@type": "CourseInstance",
                      "courseMode": "online",
                      "inLanguage": "en-IN"
                    }
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "quick-snapshot",
              title: "IBPS PO 2026 — Syllabus Snapshot",
              content: (
                <div className="space-y-4">
                  <HighlightBox type="info" title="Syllabus Summary">
                    <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
                      <li><strong>Exam Name:</strong> IBPS CRP PO/MT-XVI</li>
                      <li><strong>Prelims Subjects:</strong> English Language, Quantitative Aptitude, Reasoning Ability</li>
                      <li><strong>Mains Subjects:</strong> Reasoning {"&"} Computer Aptitude, English Language, Data Analysis {"&"} Interpretation, General Economy {"&"} Banking Awareness</li>
                      <li><strong>Descriptive Paper:</strong> Essay + Letter (typed on computer)</li>
                      <li><strong>Official Syllabus Source:</strong> <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">ibps.in</a></li>
                    </ul>
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "prelims-syllabus",
              title: "What Is the IBPS PO Prelims Syllabus for 2026?",
              content: (
                <div className="space-y-5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Prelims is a qualifying stage. Your Prelims score is used only for shortlisting — it doesn&apos;t count in the final merit. That said, you need a clean Prelims performance because both the overall score and sectional cut-offs must be cleared.
                  </p>
                  <p>
                    Three sections, separately timed, 100 marks total:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">Questions</th>
                          <th className="px-4 py-2.5">Marks</th>
                          <th className="px-4 py-2.5">Time</th>
                          <th className="px-4 py-2.5">Difficulty</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                          <td className="px-4 py-3">30</td>
                          <td className="px-4 py-3">30</td>
                          <td className="px-4 py-3">20 minutes</td>
                          <td className="px-4 py-3">Easy to Moderate</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Quantitative Aptitude</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">20 minutes</td>
                          <td className="px-4 py-3">Moderate</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Reasoning Ability</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">20 minutes</td>
                          <td className="px-4 py-3">Moderate</td>
                        </tr>
                        <tr className="bg-slate-900 text-white font-bold">
                          <td className="px-4 py-3">Total</td>
                          <td className="px-4 py-3">100</td>
                          <td className="px-4 py-3">100</td>
                          <td className="px-4 py-3">60 minutes</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    The 20-minute sectional time limit is one of the biggest pain points for IBPS PO aspirants. You cannot carry unused time from one section to the next. This is different from SBI PO, where the entire 60 minutes is available across sections. The sectional clock forces you to make hard calls fast — especially in Reasoning, where a single complex puzzle can eat 10 minutes if you&apos;re not careful.
                  </p>

                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-4 mb-2">Prelims Quantitative Aptitude — Topic List</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Topic</th>
                          <th className="px-4 py-2.5">Approximate Questions</th>
                          <th className="px-4 py-2.5">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Data Interpretation (Table/Bar/Pie/Line)</td>
                          <td className="px-4 py-3">5–10</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Very High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Number Series</td>
                          <td className="px-4 py-3">5</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Simplification / Approximation</td>
                          <td className="px-4 py-3">5–7</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Quadratic Equations</td>
                          <td className="px-4 py-3">5</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Arithmetic (Profit/Loss, SI/CI, Time-Work, TSD, Percentage, Ratio)</td>
                          <td className="px-4 py-3">8–12</td>
                          <td className="px-4 py-3 text-amber-600 font-semibold">Medium–High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Miscellaneous (Mensuration, Mixture, Partnership, Average)</td>
                          <td className="px-4 py-3">3–5</td>
                          <td className="px-4 py-3 text-slate-500">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500">
                    Data Interpretation and Number Series appear in almost every IBPS PO Prelims paper. These two topics alone account for 30–40% of the Quant section. Master them first.
                  </p>

                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-4 mb-2">Prelims Reasoning Ability — Topic List</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Topic</th>
                          <th className="px-4 py-2.5">Approximate Questions</th>
                          <th className="px-4 py-2.5">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Puzzles (Floor-based, Month-based, Designation)</td>
                          <td className="px-4 py-3">10–15</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Very High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Seating Arrangement (Linear, Circular, Square)</td>
                          <td className="px-4 py-3">10–15</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Very High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Syllogisms</td>
                          <td className="px-4 py-3">3–5</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Inequalities</td>
                          <td className="px-4 py-3">3–5</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Blood Relations</td>
                          <td className="px-4 py-3">2–3</td>
                          <td className="px-4 py-3 text-slate-500">Medium</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Direction Sense</td>
                          <td className="px-4 py-3">2–3</td>
                          <td className="px-4 py-3 text-slate-500">Medium</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Coding-Decoding</td>
                          <td className="px-4 py-3">3–5</td>
                          <td className="px-4 py-3 text-slate-500">Medium</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Data Sufficiency</td>
                          <td className="px-4 py-3">2–3</td>
                          <td className="px-4 py-3 text-slate-400">Low–Medium</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Alphanumeric Series</td>
                          <td className="px-4 py-3">2–3</td>
                          <td className="px-4 py-3 text-slate-400">Low–Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500">
                    Puzzles and Seating Arrangement dominate Reasoning in both Prelims and Mains. In recent years (2022–2025), IBPS has placed 2–3 puzzle sets in Prelims worth 10–15 questions combined. If you can&apos;t solve puzzles under time pressure, your Reasoning score will be consistently below cut-off.
                  </p>

                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-4 mb-2">Prelims English Language — Topic List</h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Topic</th>
                          <th className="px-4 py-2.5">Approximate Questions</th>
                          <th className="px-4 py-2.5">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Reading Comprehension</td>
                          <td className="px-4 py-3">7–10</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Very High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Error Spotting / Sentence Correction</td>
                          <td className="px-4 py-3">5–8</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Para Jumbles</td>
                          <td className="px-4 py-3">5</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Fill in the Blanks (Single/Double)</td>
                          <td className="px-4 py-3">5–7</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">High</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Cloze Test</td>
                          <td className="px-4 py-3">5–7</td>
                          <td className="px-4 py-3 text-amber-600 font-semibold">Medium–High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Word Usage / Phrase Replacement</td>
                          <td className="px-4 py-3">3–5</td>
                          <td className="px-4 py-3 text-slate-500">Medium</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Sentence Rearrangement</td>
                          <td className="px-4 py-3">3–5</td>
                          <td className="px-4 py-3 text-slate-500">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500">
                    Reading Comprehension typically carries the most marks in English. Passages in IBPS PO are moderately complex — economic or social themes. Aim to finish RC in 8–10 minutes to leave enough time for grammar-based questions.
                  </p>

                  <HighlightBox type="info" title="Pro Tip">
                    In Prelims, the 20-minute Reasoning slot is where most students lose the section. Practise triage — scan all 5–6 sets at the start and pick the 2–3 easiest-looking ones first. Solving 25 questions correctly in 20 minutes beats attempting 35 and finishing 15. Always prioritise accuracy over attempts in a negatively-marked exam.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "mains-syllabus",
              title: "What Is the IBPS PO Mains Syllabus for 2026?",
              content: (
                <div className="space-y-5 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Mains is where the real competition happens. Your Mains score (weighted 80%) combined with your Interview score (weighted 20%) determines your final merit rank. Every mark matters here.
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
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
                          <td className="px-4 py-3 font-semibold text-slate-800">Reasoning {"&"} Computer Aptitude</td>
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
                          <td className="px-4 py-3 font-semibold text-slate-800">Data Analysis {"&"} Interpretation</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">60</td>
                          <td className="px-4 py-3">45 minutes</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">General Economy {"&"} Banking Awareness</td>
                          <td className="px-4 py-3">40</td>
                          <td className="px-4 py-3">40</td>
                          <td className="px-4 py-3">35 minutes</td>
                        </tr>
                        <tr className="bg-slate-100 font-bold text-slate-900">
                          <td className="px-4 py-3">Objective Total</td>
                          <td className="px-4 py-3">155</td>
                          <td className="px-4 py-3">200</td>
                          <td className="px-4 py-3">180 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">English Language — Descriptive</td>
                          <td className="px-4 py-3">2 (Essay + Letter)</td>
                          <td className="px-4 py-3">25</td>
                          <td className="px-4 py-3">30 minutes</td>
                        </tr>
                        <tr className="bg-slate-900 text-white font-bold">
                          <td className="px-4 py-3">Grand Total</td>
                          <td className="px-4 py-3">157</td>
                          <td className="px-4 py-3">225</td>
                          <td className="px-4 py-3">210 minutes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Note the asymmetry: Data Analysis {"&"} Interpretation carries 60 marks for 35 questions (highest per-question value), and Reasoning {"&"} Computer Aptitude also carries 60 marks for 45 questions. Getting these two sections right is the fastest way to a competitive Mains score.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3" style={{ gap: '1.125rem' }}>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200" style={{ padding: '1.25rem' }}>
                      <h5 className="font-bold text-slate-850 text-sm mb-2 text-[#1B6EB5]">Mains Reasoning {"&"} Computer Aptitude</h5>
                      <p className="text-xs font-semibold text-slate-700 mb-1">Reasoning (40–45 marks):</p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside mb-3">
                        <li>Puzzles — complex multi-variable sets (6 people, 3 attributes, floor + designation)</li>
                        <li>Seating Arrangement — circular with directions, square table with facing</li>
                        <li>Blood Relations — coded and logical</li>
                        <li>Input-Output — multi-step machine-based</li>
                        <li>Data Sufficiency (2-statement and 3-statement)</li>
                        <li>Logical Reasoning — cause-and-effect, course of action, statement-conclusion</li>
                        <li>Critical Reasoning (occasional)</li>
                      </ul>
                      <p className="text-xs font-semibold text-slate-700 mb-1">Computer Aptitude (15–20 marks):</p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>Computer hardware: CPU, RAM, ROM, storage devices</li>
                        <li>Software: OS types, application software, system software</li>
                        <li>Internet concepts: browsers, search engines, email protocols, cybersecurity basics</li>
                        <li>MS Office: Word, Excel, PowerPoint functions</li>
                        <li>Networking: LAN, WAN, MAN, IP addresses</li>
                        <li>Database basics: DBMS concepts</li>
                        <li>Computer abbreviations: HTML, HTTP, URL, USB, PDF, RAM, ROM, CPU, etc.</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200" style={{ padding: '1.25rem' }}>
                      <h5 className="font-bold text-slate-850 text-sm mb-2 text-[#1B6EB5]">Mains Data Analysis {"&"} Interpretation</h5>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        This section has the highest marks per question (60/35 = ~1.7 marks per correct answer). Every question carries more weight than any other section. Topics:
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside mb-4">
                        <li><strong>Data Interpretation Sets:</strong> Table, Bar chart, Pie chart, Line graph, Mixed (2 variables in one set), Caselet DI (paragraph-based data)</li>
                        <li><strong>Data Sufficiency:</strong> Banking-themed word problems with 2–3 conditions</li>
                        <li><strong>Quantity Comparison:</strong> Two quantities, determine which is greater</li>
                        <li><strong>Missing Data DI:</strong> Partially filled tables requiring calculation before answering</li>
                      </ul>
                      <p className="text-xs text-slate-655 font-normal">
                        Caselet DI is the hardest format and the most common one in recent IBPS PO Mains papers. Practising 4–5 caselet sets per week from Month 2 onwards is essential for anyone targeting a competitive Mains score.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3" style={{ gap: '1.125rem' }}>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200" style={{ padding: '1.25rem' }}>
                      <h5 className="font-bold text-slate-850 text-sm mb-2 text-[#1B6EB5]">Mains English Language</h5>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">Mains English is more complex than Prelims:</p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>Reading Comprehension (2 long passages, 8–10 questions each — inference, tone, meaning-based)</li>
                        <li>Error Spotting (phrase-level errors, not just word-level)</li>
                        <li>Para Jumbles and Para Completion</li>
                        <li>Sentence Connectors and Word Swap</li>
                        <li>Fill in the Blanks (contextual vocabulary)</li>
                        <li>Cloze Test (themed passages)</li>
                      </ul>
                      <p className="text-xs text-slate-600 mt-3">
                        The vocabulary demand in Mains is notably higher. Words like &quot;equivocal&quot;, &quot;perfunctory&quot;, &quot;ostensible&quot; appear regularly. Reading 2–3 articles from The Hindu or Mint daily for 3 months does more for your English score than any word list.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200" style={{ padding: '1.25rem' }}>
                      <h5 className="font-bold text-slate-850 text-sm mb-2 text-[#1B6EB5]">General Economy {"&"} Banking Awareness</h5>
                      <p className="text-xs font-semibold text-slate-700 mb-1">Current Affairs (last 6 months):</p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside mb-2">
                        <li>RBI monetary policy decisions (repo rate, reverse repo, CRR, SLR changes)</li>
                        <li>Government economic schemes (PMJDY, MUDRA, Startup India, PLI)</li>
                        <li>Union Budget highlights and major allocations</li>
                        <li>International organisations and summits (G20, IMF, World Bank, WTO)</li>
                        <li>National and international awards, sports achievements</li>
                      </ul>
                      <p className="text-xs font-semibold text-slate-700 mb-1">Static Banking Awareness:</p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>RBI structure and functions; commercial, cooperative banks, NBFCs</li>
                        <li>Banking instruments (cheque, DD, NEFT, RTGS, IMPS)</li>
                        <li>Basel norms (Basel I, II, III — tier 1 and tier 2 capital)</li>
                        <li>NPA (Non-Performing Assets) classification; Priority sector lending</li>
                        <li>Financial markets: capital market, money market, SEBI roles</li>
                        <li>Banking abbreviations: CASA, CIBIL, SWIFT, RTGS, NRE, NRO</li>
                      </ul>
                    </div>
                  </div>

                  <HighlightBox type="info" title="Pro Tip">
                    For GA, the 6-month window before Mains is what counts. Start a daily 20-minute current affairs habit from Day 1 of your preparation — don&apos;t defer it. Use a single reliable source: The Hindu&apos;s business section or RBI press releases. The students who crack IBPS PO Mains in the first attempt almost universally say consistent GA tracking (not cramming) was their biggest advantage.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "descriptive-syllabus",
              title: "IBPS PO Descriptive Paper — Syllabus and Strategy",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The Descriptive paper is where IBPS separates disciplined aspirants from unprepared ones. Most students discover this paper exists only after clearing Prelims — then scramble in the 4–6 weeks before Mains.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200" style={{ padding: '1.25rem' }}>
                      <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 text-[#1B6EB5]">Essay Writing</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        250–300 words on an assigned topic. Common themes include financial inclusion, digital banking, demonetisation impact, UPI growth, women entrepreneurship, and climate finance.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200" style={{ padding: '1.25rem' }}>
                      <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-1.5 text-[#1B6EB5]">Letter Writing</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        150–200 words. Could be a formal complaint, official request, or semi-formal letter. Banking and financial contexts are standard.
                      </p>
                    </div>
                  </div>
                  <p>
                    Both are typed on the computer at the Mains exam centre — not handwritten. Practice typing at 35–40 WPM well before the exam if you&apos;re not used to typing essay-length content under time pressure. Adherence to word limits, correct grammar, syntax, and logical flow are key factors in evaluation.
                  </p>
                </div>
              )
            },
            {
              id: "priority-order",
              title: "Topic-Wise Priority Order — Where to Start and What to Focus On",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Not all syllabus topics are equal. Here is the recommended preparation order based on marks-per-hour-of-study across five years of IBPS PO papers:
                  </p>
                  <ol className="list-decimal list-inside space-y-2.5 pl-3">
                    <li><strong>Puzzles {"&"} Seating Arrangement (Reasoning)</strong> — highest marks, highest frequency, highly improvable with practice.</li>
                    <li><strong>Data Interpretation (Quant/DA{"&"}I)</strong> — second highest marks, appears in both Prelims and Mains.</li>
                    <li><strong>Reading Comprehension (English)</strong> — high marks, non-negotiable for English qualification.</li>
                    <li><strong>Number Series {"&"} Simplification (Quant)</strong> — quick wins with formula mastery.</li>
                    <li><strong>Syllogisms {"&"} Inequalities (Reasoning)</strong> — fast, accurate, low time investment.</li>
                    <li><strong>Banking Awareness Static (GA)</strong> — one-time study, high recall value, low forgetting rate.</li>
                    <li><strong>Error Spotting {"&"} Para Jumbles (English)</strong> — grammar rules are finite; master them systematically.</li>
                    <li><strong>Arithmetic topics — Percentage, Profit {"&"} Loss, SI/CI (Quant)</strong> — moderate ROI, consistent presence.</li>
                    <li><strong>Computer Aptitude</strong> — low difficulty, low time investment, reliable marks.</li>
                    <li><strong>Current Affairs / GA</strong> — daily habit, not one-time study; start early, maintain consistency.</li>
                  </ol>
                </div>
              )
            },
            {
              id: "difference-table",
              title: "IBPS PO Syllabus vs SBI PO Syllabus — Key Differences",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Students preparing for both exams often ask whether the same preparation covers both. The answer is mostly yes — with important caveats.
                  </p>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm my-2">Prelims Exam Comparison:</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">IBPS PO Prelims</th>
                          <th className="px-4 py-2.5">SBI PO Prelims</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Sectional time limit</td>
                          <td className="px-4 py-3">Yes — 20 min per section</td>
                          <td className="px-4 py-3">No — free to use 60 min across all</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Total marks / questions</td>
                          <td className="px-4 py-3">100 / 100</td>
                          <td className="px-4 py-3">100 / 100</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Difficulty (Quant)</td>
                          <td className="px-4 py-3">Moderate</td>
                          <td className="px-4 py-3">Moderate–High</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Penalty for wrong answer</td>
                          <td className="px-4 py-3">0.25 marks</td>
                          <td className="px-4 py-3">0.25 marks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm my-2">Mains Exam Comparison:</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">IBPS PO Mains</th>
                          <th className="px-4 py-2.5">SBI PO Mains</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Data section name</td>
                          <td className="px-4 py-3">Data Analysis {"&"} Interpretation</td>
                          <td className="px-4 py-3">Data Analysis {"&"} Interpretation</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Reasoning + Computer</td>
                          <td className="px-4 py-3">Combined, 60 marks</td>
                          <td className="px-4 py-3">Combined, 60 marks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Descriptive paper</td>
                          <td className="px-4 py-3">Essay + Letter, 25 marks</td>
                          <td className="px-4 py-3">Essay + Letter, 50 marks</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Final selection</td>
                          <td className="px-4 py-3">Mains + Interview (80:20)</td>
                          <td className="px-4 py-3">Mains + Group Exercise + Interview</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    The biggest structural difference at Mains is the SBI PO descriptive paper carrying 50 marks versus IBPS PO&apos;s 25 marks — so descriptive writing matters twice as much in SBI PO. At Prelims, the sectional timer in IBPS PO is the key differentiator.
                  </p>
                </div>
              )
            },
            {
              id: "prepbanker-usage",
              title: "How to Use PrepBanker to Cover the IBPS PO 2026 Syllabus",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    PrepBanker is structured around the actual IBPS PO syllabus — not a generic banking exam syllabus. Here&apos;s how to use it from Day 1 to Mains:
                  </p>
                  <ol className="list-decimal list-inside space-y-3.5 pl-3 font-normal">
                    <li>
                      <strong>Register and take the diagnostic test first.</strong> Go to <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">app.prepgrind.com/register</a> and attempt a free full-length Prelims mock. Don&apos;t study anything beforehand — the diagnostic shows you your real baseline, topic by topic. The analytics dashboard maps your performance directly against the IBPS PO syllabus structure.
                    </li>
                    <li>
                      <strong>Use sectional tests topic by topic.</strong> PrepBanker&apos;s Reasoning sectional pack includes separate sets for Puzzles, Seating Arrangement, Syllogisms, and Input-Output — each calibrated to Prelims difficulty. The Quant sectional pack has 20+ DI sets and standalone arithmetic topic tests. Work through the syllabus topics in the priority order above, testing yourself as you go rather than reading passively.
                    </li>
                    <li>
                      <strong>Track syllabus coverage with the analytics dashboard.</strong> After each test, PrepBanker shows your accuracy by topic. You can see at a glance which syllabus chapters you&apos;ve tested, which you&apos;re strong in (above 80% accuracy), which are medium (60–80%), and which need urgent attention (below 60%). This is the closest thing to a personalised study plan.
                    </li>
                    <li>
                      <strong>Use DPPs for daily syllabus coverage.</strong> PrepBanker&apos;s Daily Practice Problems are topic-focused — 15–20 questions per session from a single syllabus area. This is the most efficient way to cover the entire syllabus systematically while maintaining daily practice discipline.
                    </li>
                    <li>
                      <strong>Shift to full mocks in the final 6 weeks.</strong> Once you&apos;ve covered the syllabus through sectional tests and DPPs, switch to full-length Prelims mocks (2 per week) to build exam-day stamina and section-switching speed. The goal is to simulate the real 20-minute-per-section pressure before you face it in the actual exam.
                    </li>
                  </ol>
                </div>
              )
            },
            {
              id: "also-explore",
              title: "Also Explore on PrepBanker",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Once you know the syllabus, the next step is practising every topic under timed, exam-like conditions.
                  </p>
                  <p>
                    Start with a free <a href="https://prepbanker.com/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Prelims Mock Test</a> to benchmark your current topic-wise coverage before you build a study plan. The post-test analytics show exactly which syllabus chapters need the most work.
                  </p>
                  <p>
                    For focused Reasoning practice, the <a href="https://prepbanker.com/ibps-po/reasoning-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Reasoning Sectional Test Series</a> covers every puzzle and seating arrangement format that has appeared in the last five years — with difficulty levels from Prelims-easy to Mains-hard so you can progress systematically.
                  </p>
                  <p>
                    The <a href="https://prepbanker.com/ibps-po/quant-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quant Sectional Tests</a> are built around DI sets and the arithmetic topics that consistently appear in both Prelims and Mains, with video explanations for every solution.
                  </p>
                  <p>
                    For current affairs and banking awareness, check out <a href="https://prepbanker.com/ibps-po/ga-quiz" className="font-bold text-[#1B6EB5] hover:underline">PrepBanker&apos;s GA Quiz Section</a> — daily and monthly current affairs quizzes mapped to the IBPS PO GA syllabus, with banking awareness capsules covering the full static syllabus.
                  </p>
                  <p>
                    The <a href="https://prepbanker.com/ibps-po/pyq" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO PYQ Sets</a> give you 5 years of actual Prelims and Mains questions in timed format — the most direct window into what IBPS repeats, what it changes, and what topics reliably carry the most weight.
                  </p>
                </div>
              )
            }
          ],
          faqs: [
            {
              q: "What is the complete syllabus for IBPS PO 2026?",
              a: "IBPS PO 2026 syllabus covers three stages. Prelims: English Language (30 marks), Quantitative Aptitude (35 marks), Reasoning Ability (35 marks) — 100 marks total, 60 minutes. Mains: Reasoning & Computer Aptitude (60 marks), English Language (40 marks), Data Analysis & Interpretation (60 marks), General Economy & Banking Awareness (40 marks), plus a Descriptive English paper (25 marks)."
            },
            {
              q: "Which topics are most important in IBPS PO Prelims?",
              a: "In Prelims, the highest-weightage topics are: Puzzles and Seating Arrangement (15–20 marks in Reasoning), Data Interpretation (10–15 marks in Quant), Reading Comprehension (10 marks in English), and Number Series or Simplification (5–8 marks in Quant). These four topic clusters alone account for 40–50% of the Prelims paper."
            },
            {
              q: "Is the IBPS PO Mains syllabus much harder than Prelims?",
              a: "Yes — significantly. Mains adds Computer Aptitude to Reasoning, upgrades Quant to full Data Analysis and Interpretation (complex DI sets), adds a Banking Awareness component to GA, and introduces a 25-mark Descriptive paper (essay + letter). The question difficulty increases, time pressure is higher, and sectional complexity is deeper."
            },
            {
              q: "What topics come under IBPS PO General Awareness in Mains?",
              a: "IBPS PO Mains GA covers: current affairs (last 6 months), RBI monetary policy and circulars, banking terminology (NPA, CASA, CRR, SLR, Basel norms), government schemes (PM Jan Dhan, Mudra Yojana), financial market basics (capital market, SEBI, stock exchanges), international organisations, and static GK (national parks, awards, summits, sports)."
            },
            {
              q: "Is IBPS PO syllabus the same as SBI PO syllabus?",
              a: "Largely similar, but with key differences. SBI PO Prelims has no sectional time limits (IBPS PO does — 20 minutes per section). SBI PO Mains has a Data Analysis section at higher difficulty and a different GA focus. SBI PO also includes a Group Exercise in final selection; IBPS PO uses only an Interview. Treat them as overlapping but not identical."
            },
            {
              q: "How many topics are there in IBPS PO Quantitative Aptitude?",
              a: "IBPS PO Quant syllabus covers approximately 15–18 topic areas: Data Interpretation, Number Series, Simplification/Approximation, Quadratic Equations, Ratio & Proportion, Percentage, Profit & Loss, Simple & Compound Interest, Time & Work, Time Speed Distance, Mixture & Alligation, Partnership, Average, Mensuration, Probability, and Permutation & Combination."
            },
            {
              q: "What is the IBPS PO Descriptive paper syllabus?",
              a: "The IBPS PO Descriptive paper has 2 questions: one essay (250–300 words) and one letter (formal or informal, 150–200 words). Both are typed on a computer. Common essay topics include financial inclusion, digital banking, and economic policy. Letters include complaint letters, formal requests, and bank-customer correspondence. This paper carries 25 marks and has a 30-minute time limit."
            },
            {
              q: "Can I skip Computer Aptitude in IBPS PO Mains preparation?",
              a: "No — Computer Aptitude is clubbed with Reasoning in Mains (combined 60 marks, 60 minutes). You cannot skip it without hurting your Reasoning score. However, Computer Aptitude in IBPS PO is not advanced — it covers basics: hardware, software, internet concepts, MS Office, networking, and abbreviations. 3–4 hours of focused study covers most of what IBPS asks."
            },
            {
              q: "Does IBPS PO syllabus change every year?",
              a: "The core syllabus stays stable — IBPS has not officially revised the PO syllabus since 2015. What changes is question difficulty, topic weightage within sections, and the type of DI sets or Puzzle formats used. For 2026, no syllabus revision is expected. However, always check the official CRP PO/MT-XVI notification on ibps.in when released."
            },
            {
              q: "Can I use PrepBanker to practise IBPS PO syllabus topics for free?",
              a: "Yes. PrepBanker offers free mock tests, sectional tests, and topic-wise quizzes covering every part of the IBPS PO 2026 syllabus at app.prepgrind.com. After each test, you get a topic-level accuracy breakdown — so you can map your performance directly to the syllabus and identify exactly which chapters need more work."
            }
          ]
        };
      } else {
        const syllabusData = {
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
          ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
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
    }

    case 'exam-pattern': {
      if (examId === 'sbi-po') {
        return {
          title: "SBI PO Exam Pattern 2026: Prelims, Mains & Interview",
          overview: "The SBI PO Exam Pattern 2026 consists of three stages: Prelims (100 marks, 1 hour), Mains (230 marks, 3 hours 30 minutes) — split into a 200-mark Objective Test and a 30-mark Descriptive Test — and Phase III (50 marks) covering a Psychometric Test, Group Exercise (20 marks), and Interview (30 marks). The Descriptive Test marks have been reduced from 50 to 30 for the 2026 recruitment cycle.",
          metaTitle: "SBI PO Exam Pattern 2026: Prelims & Mains",
          metaDescription: "SBI PO Exam Pattern 2026 — Prelims (100 marks), Mains (230 marks), Descriptive Test & Interview. Section-wise marks, duration & marking scheme here.",
          ctaText: "Attempt Free SBI PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/sbi-po",
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Exam Pattern", "item": "https://prepbanker.com/sbi-po/exam-pattern" }
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
                    "headline": "SBI PO Exam Pattern 2026: Prelims, Mains & Interview",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/exam-pattern"
                  })
                }}
              />
              {/* ItemList Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "SBI PO Exam Pattern 2026 Stages",
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Prelims", "description": "100 marks, 1 hour, qualifying only, no sectional cutoff" },
                      { "@type": "ListItem", "position": 2, "name": "Mains", "description": "230 marks (200 Objective + 30 Descriptive), 3 hours 30 minutes, sectional cutoff applies" },
                      { "@type": "ListItem", "position": 3, "name": "Phase III", "description": "50 marks: Psychometric Test (qualifying), Group Exercise (20), Interview (30)" }
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
                        "name": "What is the total marks for SBI PO Prelims 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI PO Prelims 2026 carries 100 marks across English Language, Quantitative Aptitude, and Reasoning Ability." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the total marks for SBI PO Mains 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI PO Mains 2026 carries 230 marks total: 200 for the Objective Test and 30 for the Descriptive Test." }
                      },
                      {
                        "@type": "Question",
                        "name": "What changed in the SBI PO Exam Pattern for 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The Descriptive Test marks were reduced from 50 to 30, bringing the Mains total down from 250 to 230. The Prelims pattern remained unchanged." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there negative marking in SBI PO exam?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, 0.25 marks are deducted for every wrong answer in the Prelims and Mains Objective Tests. There is no penalty for unattempted questions, and no negative marking in the Descriptive Test or Phase III." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there a sectional cutoff in SBI PO Prelims?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, there is no sectional cutoff in SBI PO Prelims. Only an overall cutoff applies." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there a sectional cutoff in SBI PO Mains?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, sectional cutoff applies to each section of the SBI PO Mains Objective Test." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many marks does the SBI PO Interview carry?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Personal Interview carries 30 marks, and the Group Exercise carries 20 marks, totaling 50 marks for Phase III." }
                      },
                      {
                        "@type": "Question",
                        "name": "Are SBI PO Prelims marks counted in the final merit list?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, SBI PO Prelims is purely qualifying in nature. Only Mains and Phase III marks count toward the final merit list." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the weightage given to Mains and Interview in SBI PO final selection?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Mains marks carry 75% weightage and Phase III, comprising Group Exercise and Interview, carries 25% weightage in the normalized final score." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many candidates are shortlisted for SBI PO Mains from Prelims?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Approximately 10 times the number of vacancies in each category are shortlisted for the Mains exam." }
                      }
                    ]
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "content-override",
              title: "",
              content: <></>
            }
          ],
          faqs: [
            { q: "What is the total marks for SBI PO Prelims 2026?", a: "SBI PO Prelims 2026 carries 100 marks across English Language, Quantitative Aptitude, and Reasoning Ability." },
            { q: "What is the total marks for SBI PO Mains 2026?", a: "SBI PO Mains 2026 carries 230 marks total: 200 for the Objective Test and 30 for the Descriptive Test." },
            { q: "What changed in the SBI PO Exam Pattern for 2026?", a: "The Descriptive Test marks were reduced from 50 to 30, bringing the Mains total down from 250 to 230. The Prelims pattern remained unchanged." },
            { q: "Is there negative marking in SBI PO exam?", a: "Yes, 0.25 marks are deducted for every wrong answer in the Prelims and Mains Objective Tests. There is no penalty for unattempted questions, and no negative marking in the Descriptive Test or Phase III." },
            { q: "Is there a sectional cutoff in SBI PO Prelims?", a: "No, there is no sectional cutoff in SBI PO Prelims. Only an overall cutoff applies." },
            { q: "Is there a sectional cutoff in SBI PO Mains?", a: "Yes, sectional cutoff applies to each section of the SBI PO Mains Objective Test." },
            { q: "How many marks does the SBI PO Interview carry?", a: "The SBI PO Personal Interview carries 30 marks, and the Group Exercise carries 20 marks, totaling 50 marks for Phase III." },
            { q: "Are SBI PO Prelims marks counted in the final merit list?", a: "No, SBI PO Prelims is purely qualifying in nature. Only Mains and Phase III marks count toward the final merit list." },
            { q: "What is the weightage given to Mains and Interview in SBI PO final selection?", a: "Mains marks carry 75% weightage and Phase III, comprising Group Exercise and Interview, carries 25% weightage in the normalized final score." },
            { q: "How many candidates are shortlisted for SBI PO Mains from Prelims?", a: "Approximately 10 times the number of vacancies in each category are shortlisted for the Mains exam." }
          ]
        };
      }

      if (examId === 'ibps-po') {
        return {
          title: "IBPS PO Exam Pattern 2026: Complete Guide to Sections, Marks & Selection Process",
          overview: "The IBPS PO 2026 exam follows a three-stage selection process: Prelims, Mains, and Interview. Prelims is a 100-mark qualifying test of 60 minutes. Mains has 200 objective marks plus a 25-mark descriptive paper, spread over 3 hours 30 minutes. Sectional time limits apply in both stages, and every wrong answer costs 0.25 marks. Prelims marks do not count in the final merit list.",
          metaTitle: "IBPS PO Exam Pattern : Sections, Marks & Syllabus",
          metaDescription: "IBPS PO 2026 exam pattern — Prelims has 100 marks in 60 min, Mains has 200+25 marks in 3 hrs 30 min. Check section-wise marks, negative marking & free mock tests.",
          ctaText: "Attempt Realistic CBT Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/ibps-po",
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
              id: "quick-snapshot",
              title: "IBPS PO 2026 — Quick Exam Snapshot",
              content: (
                <div className="space-y-4">
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Exam Name</td>
                          <td className="px-4 py-3">IBPS CRP PO/MT (Common Recruitment Process for Probationary Officers)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Conducting Body</td>
                          <td className="px-4 py-3">Institute of Banking Personnel Selection (IBPS)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Participating Banks</td>
                          <td className="px-4 py-3">11 Public Sector Banks (PNB, Bank of Baroda, Union Bank, Canara Bank, etc.)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Vacancies (2025 cycle)</td>
                          <td className="px-4 py-3">5,208 (2026 notification awaited)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Stages</td>
                          <td className="px-4 py-3">Prelims &rarr; Mains &rarr; Interview</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Prelims</td>
                          <td className="px-4 py-3">100 marks | 60 minutes | 100 questions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Mains (Objective)</td>
                          <td className="px-4 py-3">200 marks | 155 minutes | 155 questions</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Mains (Descriptive)</td>
                          <td className="px-4 py-3">25 marks | 30 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Interview</td>
                          <td className="px-4 py-3">100 marks</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Negative Marking</td>
                          <td className="px-4 py-3">0.25 marks per wrong answer (both Prelims and Mains)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Mode</td>
                          <td className="px-4 py-3">Online (Computer-Based Test)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Language</td>
                          <td className="px-4 py-3">English and Hindi (except English Language section)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            },

            {
              id: "prelims-pattern",
              title: "IBPS PO Prelims Exam Pattern 2026",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    IBPS PO Prelims is straightforward in structure. Three sections, 100 questions, 60 minutes — but with sectional time limits that make it harder than it looks.
                  </p>

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
                          <td className="px-4 py-3 font-semibold text-slate-850">English Language</td>
                          <td className="px-4 py-3">30</td>
                          <td className="px-4 py-3">30</td>
                          <td className="px-4 py-3">20 minutes</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Quantitative Aptitude</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">20 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Reasoning Ability</td>
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

                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Key rules for Prelims:</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                      <li>Each question carries 1 mark.</li>
                      <li>Wrong answers carry a penalty of <strong className="text-red-600">0.25 marks</strong>.</li>
                      <li>Unattempted questions carry no penalty.</li>
                      <li>Sectional time limits are enforced — you cannot carry over unused time from one section to another.</li>
                      <li>There is no sectional cutoff announced in advance; cutoffs are declared after the exam based on performance.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-2 text-[#1B6EB5]">
                      What the Sectional Time Limits Actually Mean
                    </h4>
                    <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                      20 minutes for English, 20 for Quant, 20 for Reasoning. That&apos;s 40 seconds per question on average. The moment you spend 3 minutes on a hard puzzle set in Reasoning, you&apos;ve eaten into 9 questions&apos; time. This is why Prelims preparation must focus on question selection — knowing which questions to skip is as important as knowing how to solve.
                    </p>
                  </div>

                  <HighlightBox type="info" title="Pro Tip: Optimal Attempt Order">
                    In Prelims, attempt English first if you&apos;re strong at it. English can often be solved faster, which gives you a psychological boost before tackling Quant and Reasoning. Build your own optimal order in mock tests — not someone else&apos;s.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "mains-pattern",
              title: "IBPS PO Mains Exam Pattern 2026",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    Mains is where preparation depth shows. The objective paper has 4 sections with individual time limits, and a separate 30-minute descriptive paper follows immediately after.
                  </p>

                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2 text-[#1B6EB5]">
                    IBPS PO Mains — Objective Paper Breakdown
                  </h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5 text-center">No. of Questions</th>
                          <th className="px-4 py-2.5 text-center">Maximum Marks</th>
                          <th className="px-4 py-2.5 text-center">Time Limit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-805">Reasoning &amp; Computer Aptitude</td>
                          <td className="px-4 py-3 text-center">45</td>
                          <td className="px-4 py-3 text-center">60</td>
                          <td className="px-4 py-3 text-center">60 minutes</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-805">English Language</td>
                          <td className="px-4 py-3 text-center">35</td>
                          <td className="px-4 py-3 text-center">40</td>
                          <td className="px-4 py-3 text-center">40 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-805">Data Analysis &amp; Interpretation</td>
                          <td className="px-4 py-3 text-center">35</td>
                          <td className="px-4 py-3 text-center">60</td>
                          <td className="px-4 py-3 text-center">45 minutes</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-855">General Economy &amp; Banking Awareness</td>
                          <td className="px-4 py-3 text-center">40</td>
                          <td className="px-4 py-3 text-center">40</td>
                          <td className="px-4 py-3 text-center">35 minutes</td>
                        </tr>
                        <tr className="bg-slate-100 font-bold text-slate-900">
                          <td className="px-4 py-3">Total (Objective)</td>
                          <td className="px-4 py-3 text-center">155</td>
                          <td className="px-4 py-3 text-center">200</td>
                          <td className="px-4 py-3 text-center">180 minutes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mt-4 mb-2 text-[#1B6EB5]">
                    IBPS PO Mains — Descriptive Paper
                  </h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Component</th>
                          <th className="px-4 py-2.5 text-center">Marks</th>
                          <th className="px-4 py-2.5 text-center">Time</th>
                          <th className="px-4 py-2.5">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Letter Writing</td>
                          <td className="px-4 py-3 text-center">12.5</td>
                          <td className="px-4 py-3 text-center" rowSpan={2}>30 minutes</td>
                          <td className="px-4 py-3">Formal or informal letter</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Essay Writing</td>
                          <td className="px-4 py-3 text-center">12.5</td>
                          <td className="px-4 py-3">Current affairs / banking topics</td>
                        </tr>
                        <tr className="bg-slate-100 font-bold text-slate-900">
                          <td className="px-4 py-3">Total (Descriptive)</td>
                          <td className="px-4 py-3 text-center">25</td>
                          <td className="px-4 py-3 text-center">30 minutes</td>
                          <td className="px-4 py-3">Typed on screen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Important Mains rules:</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                      <li>Negative marking is <strong className="text-red-600">0.25 marks per wrong answer</strong> for the objective paper.</li>
                      <li>The descriptive paper is in English only and must be typed (no handwriting).</li>
                      <li>Descriptive papers are evaluated only for candidates who clear the objective paper cutoff.</li>
                      <li>Mains score (objective + descriptive) carries <strong>80% weightage</strong> in the final merit list.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-2 text-[#1B6EB5]">
                      Understanding the Marks-to-Questions Ratio in Mains
                    </h4>
                    <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                      Notice that Reasoning (45 questions, 60 marks) and Data Analysis (35 questions, 60 marks) don&apos;t follow a 1:1 question-to-mark ratio. This means some questions in these sections carry more than 1 mark. Specifically, Data Analysis questions carry approximately 1.71 marks each on average. This changes your strategy — a single correct DA question is worth more than a correct English question.
                    </p>
                  </div>

                  <HighlightBox type="success" title="Pro Tip: Score Booster Section">
                    General Economy &amp; Banking Awareness (GEBA) is the easiest section to improve quickly. Students who start reading the RBI Monetary Policy, Budget highlights, and banking news 3 months before Mains gain a 30–35 mark advantage over those who start 1 month before. Treat GEBA as your score booster, not an afterthought.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "negative-marking",
              title: "How Marks Are Calculated: Negative Marking Explained",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    The 0.25 negative marking rule applies to both Prelims and Mains. Here&apos;s what that means in practice:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-650 text-xs sm:text-sm">
                    <li>Attempt 4 wrong answers = lose 1 mark (equivalent to 1 correct answer wiped out)</li>
                    <li>To &quot;break even&quot; on a guess, your probability of getting it right must be above 25%</li>
                    <li>With 2 options eliminated from a 5-option question, your probability becomes 33% — statistically worth attempting</li>
                    <li>With only 1 option eliminated, probability is 25% — you&apos;re at break-even, not ahead</li>
                  </ul>
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    Most serious aspirants target 85–90 attempts in Prelims out of 100, with 90%+ accuracy. Attempting everything blindly is how students score 60 when they could have scored 80.
                  </p>
                </div>
              )
            },
            {
              id: "mains-vs-prelims",
              title: "IBPS PO Mains vs Prelims: Key Differences at a Glance",
              content: (
                <div className="space-y-4">
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">Prelims</th>
                          <th className="px-4 py-2.5">Mains</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Total Marks</td>
                          <td className="px-4 py-3">100</td>
                          <td className="px-4 py-3">225 (200+25)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Total Time</td>
                          <td className="px-4 py-3">60 minutes</td>
                          <td className="px-4 py-3">210 minutes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">No. of Sections</td>
                          <td className="px-4 py-3">3</td>
                          <td className="px-4 py-3">4 (objective) + 1 (descriptive)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Counts in Merit?</td>
                          <td className="px-4 py-3">No (qualifying only)</td>
                          <td className="px-4 py-3">Yes (80% weight)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Descriptive Paper</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (Letter + Essay, 25 marks)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">Computer Aptitude</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (part of Reasoning section)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">DA/DI Section</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (35 questions, 60 marks)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-850">GEBA Section</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3">Yes (40 questions, 40 marks)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850">Difficulty Level</td>
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
              id: "interview-structure",
              title: "IBPS PO Interview: Structure and Weightage",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    The Interview round is conducted by the nodal bank in your preferred language. It is not just a formality — the 20% weightage it carries has affected final rankings significantly in previous cycles.
                  </p>

                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Final Merit Calculation:</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                      <li>Mains (Objective + Descriptive): <strong>80% weight</strong></li>
                      <li>Interview: <strong>20% weight</strong></li>
                      <li>Final score = (Mains score / 225 &times; 100 &times; 0.80) + (Interview score / 100 &times; 100 &times; 0.20)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-2 mb-2">Category-wise minimum qualifying marks in Interview:</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-650 text-xs sm:text-sm">
                      <li>General / EWS: 40 out of 100</li>
                      <li>SC / ST / OBC / PwBD: 35 out of 100</li>
                    </ul>
                  </div>

                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    In IBPS PO 2024, the final cut-off for General category was around 55–60 out of 100 on the combined merit score. Interview preparation — especially current affairs, banking knowledge, and communication — can be the difference between selection and missing by 0.5 marks.
                  </p>
                </div>
              )
            },
            {
              id: "difficulty-weightage",
              title: "Section-wise Difficulty Level and Topic Weightage",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    Understanding what actually appears in the exam is more useful than a generic syllabus list. Here&apos;s a realistic breakdown based on IBPS PO papers from the past 3–4 years:
                  </p>

                  <h4 className="font-bold text-slate-855 text-sm sm:text-base mb-2 text-[#1B6EB5]">
                    Prelims Topic Weightage
                  </h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">High-Weight Topics</th>
                          <th className="px-4 py-2.5 text-center">Approximate Questions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>Reasoning Ability</td>
                          <td className="px-4 py-3">Puzzles &amp; Seating Arrangement</td>
                          <td className="px-4 py-3 text-center">15–20</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Syllogisms, Inequalities, Direction, Coding</td>
                          <td className="px-4 py-3 text-center">10–15</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>Quantitative Aptitude</td>
                          <td className="px-4 py-3">Data Interpretation (1–2 sets)</td>
                          <td className="px-4 py-3 text-center">10–15</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Arithmetic (SI/CI, Time-Work, Ratio, Profit-Loss)</td>
                          <td className="px-4 py-3 text-center">15–20</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>English Language</td>
                          <td className="px-4 py-3">Reading Comprehension (1 passage)</td>
                          <td className="px-4 py-3 text-center">8–10</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Error Detection, Sentence Rearrangement, Fillers</td>
                          <td className="px-4 py-3 text-center">15–20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-bold text-slate-855 text-sm sm:text-base mt-4 mb-2 text-[#1B6EB5]">
                    Mains Topic Weightage
                  </h4>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">High-Weight Topics</th>
                          <th className="px-4 py-2.5 text-center">Approximate Questions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>Reasoning &amp; Computer Aptitude</td>
                          <td className="px-4 py-3">Complex Puzzles, Input-Output, Blood Relations</td>
                          <td className="px-4 py-3 text-center">25–30</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Computer Fundamentals (MS Office, Internet, OS)</td>
                          <td className="px-4 py-3 text-center">7–10</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>Data Analysis &amp; Interpretation</td>
                          <td className="px-4 py-3">4–5 DI sets (Caselet, Chart, Table)</td>
                          <td className="px-4 py-3 text-center">20–25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Arithmetic, Quantity Comparison</td>
                          <td className="px-4 py-3 text-center">10–12</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>English Language</td>
                          <td className="px-4 py-3">Reading Comprehension (2 passages)</td>
                          <td className="px-4 py-3 text-center">15–18</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Para Jumbles, Word Usage, Sentence Connectors</td>
                          <td className="px-4 py-3 text-center">10–15</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-850" rowSpan={2}>GEBA</td>
                          <td className="px-4 py-3">Banking Terms, RBI Policies, Financial News</td>
                          <td className="px-4 py-3 text-center">20–25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3">Static Banking (HQ, taglines, schemes)</td>
                          <td className="px-4 py-3 text-center">10–15</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            },

            {
              id: "prepbanker-usage",
              title: "How to Use PrepBanker for IBPS PO 2026 Preparation",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
                    PrepBanker is built specifically around the IBPS PO exam structure. Here&apos;s how to use it at each stage:
                  </p>
                  <div className="grid grid-cols-1 gap-4 my-2">
                    {[
                      {
                        step: "Step 1",
                        title: "Start with the free mock test",
                        desc: "Head to app.prepgrind.com/register and attempt the free IBPS PO Prelims mock. This gives you a baseline score and shows exactly which sections need the most attention."
                      },
                      {
                        step: "Step 2",
                        title: "Use chapter-wise quizzes for weak areas",
                        desc: "After your mock test, check your section-wise accuracy. If Reasoning accuracy is below 70%, go to PrepBanker's Reasoning section and work through puzzle-based DPPs by difficulty level (Easy → Medium → Hard)."
                      },
                      {
                        step: "Step 3",
                        title: "Attempt sectional tests",
                        desc: "Once you're comfortable with individual topics, move to full sectional tests. PrepBanker's Quant Sectional Test, for example, replicates the actual 20-minute Prelims format with the same question distribution as the official exam."
                      },
                      {
                        step: "Step 4",
                        title: "Track your score analytics",
                        desc: "PrepBanker's dashboard shows your accuracy %, average time per question, and performance by topic over time. Use this to spot trends — if your Reasoning score keeps dropping in mock tests 5 and 6, something specific is slipping."
                      },
                      {
                        step: "Step 5",
                        title: "Attempt full-length mocks with exam-like conditions",
                        desc: "Use PrepBanker's full-length IBPS PO Prelims and Mains mocks in a distraction-free environment. Sit at a desk, use a timer, and do not pause mid-test. The goal is to simulate actual exam conditions, not just practice questions."
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-xs transition-shadow">
                        <span className="text-xs font-bold text-[#1B6EB5] uppercase tracking-wider block mb-1">{item.step}</span>
                        <h4 className="font-extrabold text-slate-855 text-sm sm:text-base mb-1.5">{item.title}</h4>
                        <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            },
            {
              id: "historical-cutoffs",
              title: "IBPS PO Cut-offs: Historical Data",
              content: (
                <div className="space-y-4">
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">Vacancies</th>
                          <th className="px-4 py-2.5">Mains Cutoff (Gen, approx.)</th>
                          <th className="px-4 py-2.5">Final Cutoff (Gen, approx.)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-855">IBPS PO 2024</td>
                          <td className="px-4 py-3">~4,455</td>
                          <td className="px-4 py-3">72–76 / 200</td>
                          <td className="px-4 py-3">55–60 / 100 (combined)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-855">IBPS PO 2023</td>
                          <td className="px-4 py-3">3,049</td>
                          <td className="px-4 py-3">68–73 / 200</td>
                          <td className="px-4 py-3">52–57 / 100 (combined)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-855">IBPS PO 2022</td>
                          <td className="px-4 py-3">6,432</td>
                          <td className="px-4 py-3">75–80 / 200</td>
                          <td className="px-4 py-3">57–62 / 100 (combined)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-855">IBPS PO 2021</td>
                          <td className="px-4 py-3">4,135</td>
                          <td className="px-4 py-3">70–75 / 200</td>
                          <td className="px-4 py-3">53–58 / 100 (combined)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-855">IBPS PO 2020</td>
                          <td className="px-4 py-3">1,417</td>
                          <td className="px-4 py-3">65–70 / 200</td>
                          <td className="px-4 py-3">49–54 / 100 (combined)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-500 text-xs italic">
                    *Note: These are approximate figures based on widely reported cut-offs. Official IBPS cut-offs are published after each cycle on ibps.in. Reservation-category cutoffs are significantly lower.
                  </p>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Key insight from the data: cut-offs are closely tied to vacancy numbers. IBPS PO 2022, which had the highest vacancies (6,432), also had the highest Mains cut-off — counter-intuitive, but it reflects that more vacancies also meant more students attempting seriously. Aim for 85+ in Mains objective (excluding Descriptive) as your target, regardless of year.
                  </p>
                </div>
              )
            },
            {
              id: "explore-more",
              title: "Also Explore on PrepBanker",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Getting the exam pattern right is just the first step. Here&apos;s where to go next on PrepBanker:
                  </p>
                  <ul className="space-y-4 text-slate-655 text-xs sm:text-sm">
                    <li className="leading-relaxed">
                      Attempt a free <Link href="/ibps-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Mock Test</Link> — a full Prelims simulation with real-time sectional timers and detailed post-test analysis. If you haven&apos;t taken a baseline test yet, this is the most valuable 60 minutes you&apos;ll spend this week.
                    </li>
                    <li className="leading-relaxed">
                      Work through <Link href="/ibps-po/mains-mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Mock Tests</Link> once Prelims prep is locked in. These include the Descriptive Paper component, with model answers for Letter and Essay sections from previous years.
                    </li>
                    <li className="leading-relaxed">
                      If Data Analysis &amp; Interpretation is a weak spot, head to PrepBanker&apos;s <Link href="/ibps-po/data-interpretation" className="font-bold text-[#1B6EB5] hover:underline">DA/DI Chapter-wise Practice Sets</Link> — organized by question type (Caselet DI, Pie Chart, Missing Table) with increasing difficulty levels.
                    </li>
                    <li className="leading-relaxed">
                      Strengthen your General Economy &amp; Banking Awareness with PrepBanker&apos;s <Link href="/banking-awareness" className="font-bold text-[#1B6EB5] hover:underline">GEBA Practice Quizzes</Link>, which are updated monthly with RBI notifications, government schemes, and banking news.
                    </li>
                    <li className="leading-relaxed">
                      Also check the <Link href="/ibps-po/previous-year-papers" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Previous Year Question Papers</Link> section — solved PYQs from 2018 to 2024 with detailed explanation videos for every question.
                    </li>
                  </ul>
                </div>
              )
            }
          ],
          faqs: [
            {
              q: "What is the exam pattern for IBPS PO 2026?",
              a: "IBPS PO 2026 has three stages: Prelims (100 marks, 60 minutes), Mains (200 marks objective + 25 marks descriptive, 3 hours 30 minutes), and Interview (100 marks). Prelims has 3 sections — English, Quantitative Aptitude, and Reasoning. Mains has 4 objective sections plus a descriptive paper."
            },
            {
              q: "Is there negative marking in IBPS PO Prelims?",
              a: "Yes. In IBPS PO Prelims, each wrong answer carries a penalty of 0.25 marks (1/4th of the mark allotted). There is no penalty for unattempted questions. The same negative marking rule applies to IBPS PO Mains objective paper."
            },
            {
              q: "How many sections are there in IBPS PO Mains?",
              a: "IBPS PO Mains has 5 components: Reasoning & Computer Aptitude (45 questions, 60 marks, 60 min), English Language (35 questions, 40 marks, 40 min), Data Analysis & Interpretation (35 questions, 60 marks, 45 min), General Economy & Banking Awareness (40 questions, 40 marks, 35 min), and a Descriptive Paper in English (Letter + Essay, 25 marks, 30 min)."
            },
            {
              q: "What is the total marks and time limit for IBPS PO Mains 2026?",
              a: "IBPS PO Mains 2026 has a total of 225 marks — 200 marks for the objective paper and 25 marks for the descriptive paper. The total time allotted is 3 hours 30 minutes (200 minutes for objective + 30 minutes for descriptive)."
            },
            {
              q: "Does IBPS PO Prelims score count in the final merit list?",
              a: "No. IBPS PO Prelims is only a qualifying stage. The final merit list is based on Mains (objective + descriptive) and Interview scores combined. Prelims shortlists candidates for Mains but its marks are not added to the final score."
            },
            {
              q: "How many vacancies are expected in IBPS PO 2026?",
              a: "IBPS PO 2025 notified 5208 vacancies across 11 participating public sector banks. While the official IBPS PO 2026 notification is awaited, vacancy numbers are typically in the range of 4,000–6,000. Check the official IBPS website (ibps.in) for the exact 2026 notification."
            },
            {
              q: "Which section in IBPS PO Mains carries the most marks?",
              a: "Reasoning & Computer Aptitude and Data Analysis & Interpretation each carry 60 marks in IBPS PO Mains — the highest among objective sections. Combined, they account for 120 out of 200 objective marks, making them the most high-impact sections to prepare."
            },
            {
              q: "What is the weightage of Interview in IBPS PO selection?",
              a: "The Interview is worth 100 marks. In the final merit list, Mains carries 80% weightage and Interview carries 20% weightage. So even a strong Mains performance can be undercut by a poor interview — practice both equally."
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

      // SBI PO fallback
      const prelimsData = {
        phase: 'Preliminary Examination (Phase 1)',
        info: '60 Minutes • 100 Questions • 100 Marks',
        sections: [
          { subject: 'English Language', questions: 30, marks: 30, time: '20 Mins' },
          { subject: 'Quantitative Aptitude', questions: 35, marks: 35, time: '20 Mins' },
          { subject: 'Reasoning Ability', questions: 35, marks: 35, time: '20 Mins' }
        ],
        notes: [
          'Sectional time limits apply; you cannot switch sections mid-exam.',
          'No sectional cut-off score is applicable (only the overall cutoff determines Mains eligibility).',
          'A penalty of 0.25 (1/4th) marks is applied for each incorrect answer.'
        ]
      };

      const mainsData = {
        phase: 'Main Examination (Phase 2)',
        info: '180 Minutes (Objective) + 30 Minutes (Descriptive) • 250 Marks Total',
        sections: [
          { subject: 'Reasoning & Computer Aptitude', questions: 45, marks: 60, time: '60 Mins' },
          { subject: 'Data Analysis & Interpretation', questions: 35, marks: 60, time: '45 Mins' },
          { subject: 'English Language', questions: 35, marks: 40, time: '40 Mins' },
          { subject: 'General/Economy/Banking Awareness', questions: 40, marks: 40, time: '35 Mins' },
          { subject: 'Descriptive Test (Essay & Letter)', questions: 2, marks: 50, time: '30 Mins' }
        ],
        notes: [
          'Sectional timers apply; no switching between sections.',
          'Descriptive answers must be typed immediately. It holds a high weightage of 50 marks.',
          'A penalty of 0.25 (1/4th) marks applies to objective sections. Descriptive test has no negative marking.'
        ]
      };

      return {
        title: `SBI PO Exam Pattern & Phase Schemes 2026`,
        overview: `Understand the marks allotment, question types, time limits, and negative marking structure for the SBI PO Prelims, Mains, and Interview phases.`,
        ctaText: `Attempt Realistic CBT Mock Test`,
        ctaHref: 'https://app.prepgrind.com/signup/sbi-po',
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
            title: 'Phase 3: Group Exercises & Interview',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Candidates who qualify in the Phase 2 Mains exam are invited to the final evaluation round.
                </p>
                <div className="space-y-3">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    SBI PO Phase 3 is a comprehensive assessment split into two parts: Group Exercises (GD, role play, and group activities - 20 marks) and a Personal Interview (30 marks) for a total of 50 marks.
                  </p>
                  <HighlightBox type="info" title="Final Score Normalization Ratio">
                    The marks of the Main Exam and Phase 3 are combined and normalized in a <strong>75:25 ratio</strong>. The Preliminary Exam remains strictly qualifying and does not count towards the final ranking.
                  </HighlightBox>
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('pattern') || f.q.toLowerCase().includes('negative') || f.q.toLowerCase().includes('stage'))
      };
    }

    case 'salary': {
      if (examId === 'sbi-po') {
        return sbiPoSalaryContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoSalaryContent;
      }
      return undefined;
    }

    case 'cut-off':
    case 'cut-offs': {
      if (examId === 'sbi-po') {
        return {
          title: "SBI PO Cut Off 2026: Category-Wise Trend (2019–2025)",
          overview: "SBI PO Cut Off 2026 expected trends based on 2019–2025 data. Category-wise Prelims, Mains, Final & Interview cut off marks — full history at PrepBanker.",
          metaTitle: "SBI PO Cut Off 2026: Prelims, Mains & Final Trend",
          metaDescription: "SBI PO Cut Off 2026 expected trends based on 2019–2025 data. Category-wise Prelims, Mains, Final & Interview cut off marks — full history at PrepBanker.",
          ctaText: "Attempt Free SBI PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/sbi-po",
          customSchemas: (
            <>
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
                        "name": "What was the SBI PO Prelims cut off for General category in 2025?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Prelims Cut Off 2025 for the General category was 66.75 out of 100." }
                      },
                      {
                        "@type": "Question",
                        "name": "What was the SBI PO Mains cut off for General category in 2025?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Mains Cut Off 2025 for the General category was 75 out of 250." }
                      },
                      {
                        "@type": "Question",
                        "name": "What was the SBI PO Final cut off for General category in 2025?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Final Cut Off 2025 for the General category was 46.79 out of 100." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there a sectional cut off in SBI PO Prelims?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, there is no sectional cut off in SBI PO Prelims. Only an overall cut off applies." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there a sectional cut off in SBI PO Mains?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, sectional cut off applies to each objective section and the Descriptive Test in SBI PO Mains." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the ratio between Mains and Interview marks for SBI PO final selection?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Mains and Phase III, comprising Group Exercise and Interview, marks are combined at a 75:25 ratio for the final merit list." }
                      },
                      {
                        "@type": "Question",
                        "name": "Does SBI release state-wise cut off for PO recruitment?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, SBI PO is a nationwide exam with no state-wise vacancies, so only category-wise cut off is released, not state-wise." }
                      },
                      {
                        "@type": "Question",
                        "name": "What factors affect the SBI PO cut off each year?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Category-wise vacancy, exam difficulty level, number of candidates appearing per shift, and score normalization across shifts." }
                      },
                      {
                        "@type": "Question",
                        "name": "What were the SBI PO Interview qualifying marks in recent years?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Interview and Group Exercise qualifying marks have remained fairly constant: 20 out of 50 for General and EWS, and 17.50 out of 50 for other categories, across most recent years." }
                      },
                      {
                        "@type": "Question",
                        "name": "When will the SBI PO Cut Off 2026 be released?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI PO Cut Off 2026 will be released separately for Prelims, Mains, and Final selection, along with each stage's result." }
                      }
                    ]
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Cut Off", "item": "https://prepbanker.com/sbi-po/cut-off" }
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
                    "headline": "SBI PO Cut Off 2026: Category-Wise Trend (2019–2025)",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/cut-off"
                  })
                }}
              />
              {/* Dataset Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Dataset",
                    "name": "SBI PO Official Cut Off Trend (2019-2025)",
                    "description": "Category-wise SBI PO Prelims, Mains, Final, and Interview cut off marks from 2019 to 2025, used to estimate SBI PO Cut Off 2026.",
                    "creator": { "@type": "Organization", "name": "PrepBanker" },
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "variableMeasured": ["Prelims Cut Off", "Mains Cut Off", "Final Cut Off", "Interview Qualifying Marks"],
                    "temporalCoverage": "2019/2025"
                  })
                }}
              />
            </>
          ),
          subsections: [],
          faqs: []
        };
      }

      if (examId === 'ibps-po') {
        return {
          title: "IBPS PO Cut Off 2026 — Expected Marks, Previous Year Data & Safe Score Targets",
          overview: "The IBPS PO cut off for 2026 Prelims (General category) is expected to fall between 48 and 55 marks out of 100, based on a five-year trend. For Mains (out of 225), target 72–78 for General/UR. The 2025 Prelims cut off was 49.21 and Mains cut off peaked at 75.75. This page gives you every year's actual cut off — Prelims, Mains, and Final — so you can set the right target and stop guessing.",
          metaTitle: "IBPS PO Cut Off – Prelims, Mains & Previous Year Marks",
          metaDescription: "Check IBPS PO cut off 2026 expected marks, previous year Prelims & Mains cut offs (2021–2025) category-wise, section-wise trends, and safe score targets.",
          ctaText: "Compare Your Mock Marks Against Cutoffs",
          ctaHref: "https://prepbanker.com/ibps-po/mock-test",
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
                        "name": "IBPS PO Cut Off 2026",
                        "item": "https://prepbanker.com/ibps-po/cut-off"
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
                    "name": "IBPS PO Cut Off 2026 – Prelims, Mains & Previous Year Marks",
                    "url": "https://prepbanker.com/ibps-po/cut-off",
                    "description": "Complete IBPS PO cut off 2026 guide with previous year Prelims and Mains cut off data (2021–2025), category-wise and section-wise marks, expected cut off for 2026, and safe score targets.",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "inLanguage": "en-IN",
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
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
                    "headline": "IBPS PO Cut Off 2026 – Prelims, Mains, Section-wise & Previous Year Data",
                    "description": "Year-wise IBPS PO cut off analysis from 2021 to 2025, expected 2026 cut offs, category-wise and section-wise breakdown, and expert-backed safe score targets for Prelims and Mains.",
                    "url": "https://prepbanker.com/ibps-po/cut-off",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "author": {
                      "@type": "Organization",
                      "name": "PrepBanker Editorial Team",
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
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://prepbanker.com/ibps-po/cut-off"
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
                        "name": "What is the expected IBPS PO cut off for 2026 Prelims?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The expected IBPS PO Prelims cut off for 2026 General/UR category is between 48 and 54 marks out of 100, based on a 5-year trend. The exact cut off depends on exam difficulty, number of vacancies, and candidate performance. Targeting 55+ gives you a safe buffer above the qualifying threshold."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What was the IBPS PO Prelims cut off for General category in 2025?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The IBPS PO Prelims cut off for 2025 (General/UR/EWS/OBC) was 49.21 out of 100, released on 6th October 2025 along with the scorecard. The Prelims was held on 23rd and 24th August 2025 for 5208 vacancies under CRP PO/MT-XV."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the IBPS PO Mains cut off for General category?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The IBPS PO Mains cut off for the General/UR category has ranged from 63 to 83.5 over the past five years (out of 225). In 2025, the highest Mains cut off was 75.75 for UR and OBC. In 2024, it was 66.50. Aim for 75+ to stay above the cut off in most cycles."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How is the IBPS PO final cut off calculated?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The IBPS PO final cut off is based on a weighted combination of Mains (80% weightage) and Interview (20% weightage), normalized to a score out of 100. The final cut off for 2025 for UR category was 46.11 out of 100. This means Mains performance is the dominant factor in final selection."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Does IBPS PO have sectional cut off in Prelims?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. IBPS PO Prelims has both overall and sectional cut offs. In 2023, the General category sectional cut offs were: English – 11.50 out of 30, Quant – 7 out of 35, Reasoning – 10 out of 35. You must clear all three section-wise minimums and the overall cut off to qualify for Mains."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the IBPS PO cut off for SC and ST category?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "In 2025 Prelims, there is no separate SC/ST cut off data confirmed yet, but based on trends — in 2023 Prelims, SC cut off was 49 and ST was 43. In Mains 2023, SC cut off was 50.25 and ST was 41 out of 225. Reserved category cut offs are typically 5–15 marks lower than General."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is a safe score to target in IBPS PO 2026 Prelims?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Target 55–60 in Prelims (General/UR). The actual cut off typically lands between 48–54, so 55+ gives you a comfortable buffer. More importantly, aim for balance: clear each sectional minimum with margin. Weak in one section can eliminate you even if your overall score is strong."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Does the Prelims score count in the final IBPS PO merit list?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No. IBPS PO Prelims is purely qualifying. Once you clear Prelims, those marks are not added to your final score. Only Mains (80%) and Interview (20%) determine your merit rank and provisional allotment to participating banks. This is why Mains preparation is critical from day one."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the minimum interview score required in IBPS PO?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The IBPS PO interview is conducted for 100 marks. The minimum qualifying score is 40% (40 marks) for the General/EWS category and 35% (35 marks) for SC/ST/OBC/PwBD categories. Candidates who fail to meet this minimum are not considered for provisional allotment, regardless of Mains score."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How many mock tests should I take to ensure I cross the IBPS PO cut off?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Aiming for 20–25 full-length Prelims mocks and 8–10 Mains mocks is a practical benchmark. On PrepBanker, you can take free mock tests at app.prepgrind.com. The key is not just attempting them — spend equal time on analysis. Consistent mock scores 5–8 marks above target cut off indicate real readiness."
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
              title: "IBPS PO Cut Off — Quick Reference Snapshot",
              content: (
                <div className="space-y-4">
                  <HighlightBox type="info" title="Cut Off Summary">
                    <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
                      <li><strong>Exam Name:</strong> IBPS CRP PO/MT (Probationary Officer)</li>
                      <li><strong>Stages with Cut Offs:</strong> Prelims, Mains, Final (Interview-weighted)</li>
                      <li><strong>Final Cut Off Basis:</strong> Mains 80% + Interview 20%, normalized to 100</li>
                      <li><strong>2025 Prelims Cut Off (General/UR):</strong> 49.21 / 100</li>
                      <li><strong>2025 Mains Cut Off (General/UR):</strong> 75.75 / 225</li>
                      <li><strong>2025 Final Cut Off (UR):</strong> 46.11 / 100</li>
                      <li><strong>2024 Prelims Cut Off (General/UR):</strong> 48.50 / 100</li>
                      <li><strong>2024 Mains Cut Off (General/UR):</strong> 66.50 / 225</li>
                      <li><strong>Cut Off Released At:</strong> <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">ibps.in</a></li>
                    </ul>
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "interactive-cutoffs-section",
              title: "Interactive Category Cut-off Trends Switcher",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Use the category selection tabs below to view and compare the cut-off marks for General, OBC, SC, and ST candidates across the recent cycles.
                  </p>
                  <CutoffTrendsSwitcher cutoffs={exam.cutoffs} />
                </div>
              )
            },
            {
              id: "how-it-works",
              title: "What Is IBPS PO Cut Off and How Does It Actually Work?",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The IBPS PO cut off is the minimum score a candidate must achieve at each stage of the recruitment process to advance to the next. It is not a single number — it is a layered system that operates at three levels:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-3">
                    <li><strong>Level 1 — Prelims Cut Off:</strong> Released after the Preliminary exam results. This is both overall (out of 100) and section-wise. Miss either one, and you&apos;re out — even if your total score is fine.</li>
                    <li><strong>Level 2 — Mains Cut Off:</strong> Released after the Main exam results. Also category-wise and section-wise. This cut off is more important because it determines who goes to the interview round.</li>
                    <li><strong>Level 3 — Final / Provisional Allotment Cut Off:</strong> Released after interviews. This is the combined merit score (Mains 80% + Interview 20%), normalized to 100. This number decides which bank you get, or whether you get allotted at all.</li>
                  </ul>
                  <p>
                    One point that confuses many students: the Prelims cut off has no bearing on your final selection. Once you pass Prelims, those marks are discarded. Only Mains performance and interview carry forward.
                  </p>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-4">What Is Normalization and How Does It Affect Cut Offs?</h4>
                  <p>
                    IBPS PO is conducted in multiple shifts across two days. Different shifts may have slightly different difficulty levels. To ensure fairness, IBPS applies normalization — a statistical process that adjusts scores to account for shift-wise variation.
                  </p>
                  <p>
                    This is why two candidates who &quot;scored the same number of correct answers&quot; can end up with different normalized scores. Normalization typically benefits candidates who appeared in harder shifts. It also means the cut off released by IBPS is a normalized score, not a raw marks count.
                  </p>
                </div>
              )
            },
            {
              id: "prelims-cutoff-history",
              title: "IBPS PO Prelims Cut Off — Year-Wise Data (2021–2025)",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The Prelims cut off has fluctuated between 48.50 and 54.25 for General/UR category over the last five years. The highest point was 2023 (54.25), and the lowest was 2024 (48.50). Here is the full picture:
                  </p>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm my-2">Category-Wise Prelims Cut Off (Overall, Out of 100)</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">General/UR</th>
                          <th className="px-4 py-2.5">EWS</th>
                          <th className="px-4 py-2.5">OBC</th>
                          <th className="px-4 py-2.5">SC</th>
                          <th className="px-4 py-2.5">ST</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2025</td>
                          <td className="px-4 py-3">49.21</td>
                          <td className="px-4 py-3">49.21</td>
                          <td className="px-4 py-3">49.21</td>
                          <td className="px-4 py-3">~44–46*</td>
                          <td className="px-4 py-3">~38–42*</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-3">48.50</td>
                          <td className="px-4 py-3">48.50</td>
                          <td className="px-4 py-3">48.50</td>
                          <td className="px-4 py-3">~43–45*</td>
                          <td className="px-4 py-3">~37–40*</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                          <td className="px-4 py-3">54.25</td>
                          <td className="px-4 py-3">54.25</td>
                          <td className="px-4 py-3">54.25</td>
                          <td className="px-4 py-3">49.00</td>
                          <td className="px-4 py-3">43.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                          <td className="px-4 py-3">49.75</td>
                          <td className="px-4 py-3">49.75</td>
                          <td className="px-4 py-3">49.75</td>
                          <td className="px-4 py-3">46.75</td>
                          <td className="px-4 py-3">40.75</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                          <td className="px-4 py-3">50.50</td>
                          <td className="px-4 py-3">50.50</td>
                          <td className="px-4 py-3">50.50</td>
                          <td className="px-4 py-3">44.50</td>
                          <td className="px-4 py-3">38.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 italic mt-1 font-normal">
                    *2025 and 2024 SC/ST official figures aligned with overall patterns; exact category-wise figures to be confirmed from official scorecard.
                  </p>

                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm mt-4 mb-2">Section-Wise Prelims Cut Off — General Category (2023 Data)</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Section</th>
                          <th className="px-4 py-2.5">Max Marks</th>
                          <th className="px-4 py-2.5">Cut Off (General/UR)</th>
                          <th className="px-4 py-2.5">Cut Off (SC/ST/OBC/PwD)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">English Language</td>
                          <td className="px-4 py-3">30</td>
                          <td className="px-4 py-3">11.50</td>
                          <td className="px-4 py-3">8.25</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Quantitative Aptitude</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">7.00</td>
                          <td className="px-4 py-3">4.25</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Reasoning Ability</td>
                          <td className="px-4 py-3">35</td>
                          <td className="px-4 py-3">10.00</td>
                          <td className="px-4 py-3">5.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    These sectional minimums look low, but don&apos;t be misled. The real killer is attempting all three in 20 minutes each while also clearing the overall threshold. Students who get 60+ overall but fail to hit Quant&apos;s sectional minimum get eliminated. This happens more often than most people think.
                  </p>
                  <HighlightBox type="info" title="Pro Tip">
                    In mock tests, track your section-wise score specifically. A student who consistently scores 14/30 in English, 10/35 in Quant, and 28/35 in Reasoning has a Quant problem that their total score hides. Identify the hidden sectional weakness before the real exam does it for you.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "mains-cutoff-history",
              title: "IBPS PO Mains Cut Off — Year-Wise Data (2021–2025)",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The Mains cut off matters far more than Prelims because it directly gates you into the interview and ultimately into the final merit list. The cut off here is out of 225 marks (objective section only — the descriptive 25 marks are added separately for total Mains marks).
                  </p>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm my-2">Category-Wise Mains Cut Off (Out of 225)</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">General/UR</th>
                          <th className="px-4 py-2.5">EWS</th>
                          <th className="px-4 py-2.5">OBC</th>
                          <th className="px-4 py-2.5">SC</th>
                          <th className="px-4 py-2.5">ST</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2025</td>
                          <td className="px-4 py-3">75.75</td>
                          <td className="px-4 py-3">~73*</td>
                          <td className="px-4 py-3">75.75</td>
                          <td className="px-4 py-3">~58–62*</td>
                          <td className="px-4 py-3">~48–52*</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-3">66.50</td>
                          <td className="px-4 py-3">~64*</td>
                          <td className="px-4 py-3">~65*</td>
                          <td className="px-4 py-3">~52*</td>
                          <td className="px-4 py-3">~43*</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2023</td>
                          <td className="px-4 py-3">63.00</td>
                          <td className="px-4 py-3">61.00</td>
                          <td className="px-4 py-3">62.25</td>
                          <td className="px-4 py-3">50.25</td>
                          <td className="px-4 py-3">41.00</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2022</td>
                          <td className="px-4 py-3">71.25</td>
                          <td className="px-4 py-3">70.50</td>
                          <td className="px-4 py-3">69.75</td>
                          <td className="px-4 py-3">~58*</td>
                          <td className="px-4 py-3">~47*</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2021</td>
                          <td className="px-4 py-3">80.75</td>
                          <td className="px-4 py-3">~78*</td>
                          <td className="px-4 py-3">75.75</td>
                          <td className="px-4 py-3">65.50</td>
                          <td className="px-4 py-3">57.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 italic mt-1 font-normal">
                    *Figures marked with asterisk are based on multiple secondary sources and expert analysis; verify against official ibps.in scorecard for the respective year.
                  </p>
                  <p className="mt-3">
                    The 2025 Mains cut off (75.75) is the highest in three years — a notable spike from 2024&apos;s 66.50. This reflects both increased vacancies (5,208 in 2025 vs 3,955 in 2024) and a moderate-difficulty exam that allowed stronger candidates to score higher.
                  </p>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mt-4">What the Trend Tells You for 2026</h4>
                  <p>
                    The Mains cut off is not predictable in a straight line. It jumped from 63 (2023) to 66.50 (2024) to 75.75 (2025). For 2026, if vacancy count is similar to 2025 and exam difficulty is moderate, the cut off could hold in the <strong>72–78 range for General category</strong>.
                  </p>
                  <p>
                    Safe target for 2026 Mains: <strong>80+</strong> for General/UR. This gives you a 5–8 mark buffer above the likely cut off, accounting for shifts in difficulty or normalization outcome.
                  </p>
                </div>
              )
            },
            {
              id: "final-cutoff",
              title: "IBPS PO Final Cut Off — How Mains and Interview Combine",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    This is the cut off that most students don&apos;t fully understand — and it matters most.
                  </p>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">How the Final Score Is Calculated</h4>
                  <p>
                    After both Mains and the Interview are complete, IBPS calculates a composite score:
                  </p>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 my-2 text-center font-bold text-slate-800" style={{ padding: '1.25rem' }}>
                    Final Score = (Mains Score &times; 0.80) + (Interview Score &times; 0.20)
                  </div>
                  <p>
                    This combined score is then normalized to 100. The final cut off is released as a number out of 100, which is why it looks very different from the Mains marks.
                  </p>
                  <p>
                    <strong>Example:</strong> A candidate who scores 120/225 in Mains (53.3%) and 60/100 in Interview:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-3 text-xs sm:text-sm">
                    <li>Mains contribution: 53.3 &times; 0.80 = 42.67</li>
                    <li>Interview contribution: 60 &times; 0.20 = 12.00</li>
                    <li>Final score = 54.67 out of 100</li>
                  </ul>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm mt-4 mb-2">Final Cut Off Data (2024–2025)</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">UR/General</th>
                          <th className="px-4 py-2.5">EWS</th>
                          <th className="px-4 py-2.5">OBC</th>
                          <th className="px-4 py-2.5">SC</th>
                          <th className="px-4 py-2.5">ST</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">2025</td>
                          <td className="px-4 py-3">46.11</td>
                          <td className="px-4 py-3">43.64</td>
                          <td className="px-4 py-3">44.04</td>
                          <td className="px-4 py-3">~37*</td>
                          <td className="px-4 py-3">~30*</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">2024</td>
                          <td className="px-4 py-3">42.69</td>
                          <td className="px-4 py-3">~40*</td>
                          <td className="px-4 py-3">~41*</td>
                          <td className="px-4 py-3">~33*</td>
                          <td className="px-4 py-3">~27*</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    The key insight from these numbers: the final cut off appears low because it&apos;s on a different scale (out of 100, combined). A UR candidate at 46.11/100 final cut off typically had a Mains score somewhere around 75–90/225. Don&apos;t confuse the scales.
                  </p>
                </div>
              )
            },
            {
              id: 'cutoff-factors',
              title: "What Factors Drive IBPS PO Cut Off Up or Down?",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Every year, students ask: &quot;Why did the cut off go up this year?&quot; Or &quot;Why did it fall?&quot; Here are the five variables that IBPS (and analysts) watch:
                  </p>
                  <ol className="list-decimal list-inside space-y-2.5 pl-3">
                    <li><strong>Number of vacancies:</strong> More vacancies generally means the cut off holds steady or dips slightly, since a larger proportion of candidates clear. The jump from 3,955 (2024) to 5,208 (2025) vacancies contributed to more candidates being called for Mains, but the actual Mains cut off still rose because performance improved.</li>
                    <li><strong>Difficulty level of the exam:</strong> An easier paper means more candidates score higher, which pushes the cut off up. A harder paper distributes scores lower, pulling the cut off down.</li>
                    <li><strong>Number of applicants and those who appeared:</strong> IBPS PO draws lakhs of applicants annually. If a significantly higher percentage of registered candidates actually sit the exam (vs. absentees), competition intensifies.</li>
                    <li><strong>Normalization across shifts:</strong> A shift with unusual difficulty distribution can affect how normalized scores cluster around the cut off band.</li>
                    <li><strong>Reserve list activation:</strong> When vacancies aren&apos;t filled by the main merit list (due to rejections or document failures), IBPS activates a reserve list with a slightly lower cut off. Students close to the cut off should check both the main and reserve list cut offs.</li>
                  </ol>
                  <HighlightBox type="info" title="Pro Tip">
                    The reserve list is real and has helped many students who missed the main cut off by 1–3 marks get provisional allotment. Don&apos;t quit after the main result — always wait for the reserve list cut off release before concluding you missed out for the year.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: 'expected-cutoffs',
              title: "IBPS PO Expected Cut Off 2026 — What to Realistically Target",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The 2026 Prelims exam is scheduled for August 22–23, and Mains for October 4. With vacancies expected in the 4,000–6,000 range (based on 5-year trends), here is the realistic cut off range for 2026:
                  </p>
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm my-2">Expected Prelims Cut Off 2026 (Out of 100)</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Category</th>
                          <th className="px-4 py-2.5">Expected Range</th>
                          <th className="px-4 py-2.5">Safe Target</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">General / UR</td>
                          <td className="px-4 py-3">48–54</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">57+</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">EWS</td>
                          <td className="px-4 py-3">47–53</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">56+</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">OBC</td>
                          <td className="px-4 py-3">47–53</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">56+</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">SC</td>
                          <td className="px-4 py-3">42–48</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">52+</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">ST</td>
                          <td className="px-4 py-3">36–43</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">47+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm mt-4 mb-2">Expected Mains Cut Off 2026 (Out of 225)</h5>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Category</th>
                          <th className="px-4 py-2.5">Expected Range</th>
                          <th className="px-4 py-2.5">Safe Target</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">General / UR</td>
                          <td className="px-4 py-3">72–80</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">85+</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">EWS</td>
                          <td className="px-4 py-3">70–77</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">82+</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">OBC</td>
                          <td className="px-4 py-3">70–78</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">83+</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">SC</td>
                          <td className="px-4 py-3">56–64</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">68+</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">ST</td>
                          <td className="px-4 py-3">45–54</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">58+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    These ranges are estimates based on a straight 5-year trend analysis. If the 2026 exam is significantly easier than 2025, the cut off could cross 80 for General in Mains. If it&apos;s harder, it could fall back to 68–72. The safe target column adds a ~7–8 mark buffer to hedge against either scenario.
                  </p>
                </div>
              )
            },
            {
              id: 'prepbanker-usage',
              title: "How to Use PrepBanker to Consistently Score Above the IBPS PO Cut Off",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Understanding cut offs is one thing. Scoring above them consistently on exam day is a system, not a hope.
                  </p>
                  <ol className="list-decimal list-inside space-y-3.5 pl-3">
                    <li><strong>Establish your baseline.</strong> Register at <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">PrepBanker</a> and take your first full-length Prelims mock with zero preparation. Note your raw score and section-wise breakdown. Most first-timers score 28–45 out of 100. That&apos;s your starting point.</li>
                    <li><strong>Use sectional tests to close the gap section by section.</strong> If your Quant score is 8/35, you have a specific problem — not a general &quot;need to study more&quot; problem. Use PrepBanker&apos;s topic-wise Quant sets (Number Series, DI, Simplification) to drill the chapters where you&apos;re losing marks. The sectional timer replicates the 20-minute pressure of the real exam.</li>
                    <li><strong>Track section-wise accuracy in every mock, not just total score.</strong> PrepBanker&apos;s analytics show exactly which topics you&apos;re attempting incorrectly vs. leaving blank. Both are different problems — wrong answers cost 0.25 marks, while blanks cost zero. Knowing your risk profile helps you decide when to skip vs. attempt in the exam.</li>
                    <li><strong>Set a cut off buffer target, not the cut off itself.</strong> If the expected cut off is 52, your mock test target should be 60. Practice to 60 so that exam-day pressure (which drops performance by 5–10%) still keeps you above 52. Most students who &quot;just clear&quot; in mocks fail the real exam.</li>
                    <li><strong>Run Mains mocks in parallel from week 6 onwards.</strong> Don&apos;t wait for Prelims result to start Mains prep. Use PrepBanker&apos;s Mains mock tests with the descriptive component to get familiar with the 3.5-hour format. Students who start Mains mocks early score 8–12 marks higher than those who start post-Prelims result.</li>
                  </ol>
                </div>
              )
            },
            {
              id: 'ibps-vs-sbi',
              title: "IBPS PO Cut Off vs SBI PO Cut Off — Where Does the Bar Sit?",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    A lot of aspirants prepare for both exams simultaneously. Here&apos;s a direct comparison of cut off levels to calibrate your target:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">IBPS PO 2025</th>
                          <th className="px-4 py-2.5">SBI PO 2025</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Prelims Cut Off (General)</td>
                          <td className="px-4 py-3">49.21 / 100</td>
                          <td className="px-4 py-3">~57–62 / 100 (est.)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Mains Cut Off (General)</td>
                          <td className="px-4 py-3">75.75 / 225</td>
                          <td className="px-4 py-3">~75–85 / 200 (est.)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Mains Total Marks</td>
                          <td className="px-4 py-3">250 (obj+desc)</td>
                          <td className="px-4 py-3">250 (obj+desc)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-805">Interview Weightage</td>
                          <td className="px-4 py-3">20%</td>
                          <td className="px-4 py-3">Mandatory</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Final Cut Off Scale</td>
                          <td className="px-4 py-3">Out of 100</td>
                          <td className="px-4 py-3">Out of 100</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Vacancies (2025 cycle)</td>
                          <td className="px-4 py-3">5,208</td>
                          <td className="px-4 py-3">~600–1,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Cut Off Stability</td>
                          <td className="px-4 py-3">Moderate variance</td>
                          <td className="px-4 py-3">Higher variance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    SBI PO generally has a higher Prelims cut off because the exam is conducted by SBI itself, which attracts premium aspirants disproportionately. IBPS PO, despite covering 11 banks, actually has a more predictable cut off range over time. If you&apos;re clearing IBPS PO Mains comfortably, SBI PO is within reach — the syllabus overlap is 75%+.
                  </p>
                </div>
              )
            },
            {
              id: 'mock-analysis',
              title: "Step-by-Step: How to Analyze Your Mock Score Against the Cut Off",
              content: (
                <div className="space-y-4 text-slate-605 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    After every PrepBanker mock, follow this 7-step review framework to turn your score into actionable insight:
                  </p>
                  <ol className="list-decimal list-inside space-y-3.5 pl-3">
                    <li><strong>Check your total score</strong> and compare it against the target cut off band (not just the expected cut off — your personal buffer target).</li>
                    <li><strong>Go section-wise.</strong> Which section dragged your total down? Which carried you? A high Reasoning score masking a low Quant score is a time bomb.</li>
                    <li><strong>Categorize your wrong answers</strong> into: wrong concept, correct concept but calculation error, and ran out of time. Each type needs a different fix.</li>
                    <li><strong>Count your blank questions.</strong> If you left more than 12 questions blank in Prelims, time management is your primary problem — not concepts.</li>
                    <li><strong>Calculate your attempt-to-accuracy ratio.</strong> Attempted 75 questions, got 52 right = 69% accuracy. Below 75% accuracy in mocks means you&apos;re attempting too aggressively relative to your preparation level.</li>
                    <li><strong>Compare shift-difficulty estimates.</strong> PrepBanker&apos;s post-mock analysis shows how your score aligns with the estimated difficulty percentile. Use this to project your normalized score in a real multi-shift exam.</li>
                    <li><strong>Set a specific target for the next mock</strong> — not &quot;do better,&quot; but &quot;score 58 overall with &ge;13 in English and &ge;12 in Reasoning.&quot;</li>
                  </ol>
                  <p className="mt-3 text-xs text-slate-500 font-semibold italic">
                    This loop — mock, analyze, set target, repeat — is the actual preparation system. The tests are the data; the analysis is the work.
                  </p>
                </div>
              )
            },
            {
              id: 'also-explore',
              title: "Also Explore on PrepBanker",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Knowing the cut off gives you a target. Hitting it consistently requires structured practice. These PrepBanker resources connect directly to what this page covers:
                  </p>
                  <p>
                    Start with a <a href="https://prepbanker.com/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">Free IBPS PO Prelims Mock Test</a> — full-length, 3 sections, 20-minute timers, scored and analyzed immediately. See your baseline score before you set any cut off target.
                  </p>
                  <p>
                    To close your sectional gap, the <a href="https://prepbanker.com/ibps-po/quant-practice" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quant Practice Tests</a> cover every chapter that appears in both Prelims and Mains — from Simplification and Number Series to Data Interpretation and Quadratic Equations.
                  </p>
                  <p>
                    Once you cross Prelims, the <a href="https://prepbanker.com/ibps-po/mains-mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Mock Tests</a> include full-length objective + descriptive simulations. With the Mains cut off at 75.75 in 2025, you need real practice at the 3.5-hour format — starting from Prelims itself.
                  </p>
                  <p>
                    For context on where cut offs fit in the bigger exam timeline, the <a href="https://prepbanker.com/ibps-po/important-dates" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Important Dates 2026</a> page has every key deadline — notification, registration, exam dates, admit card, and result — in a single organized view.
                  </p>
                  <p>
                    And if you&apos;re also targeting SBI PO, the <a href="https://prepbanker.com/sbi-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Mock Tests</a> on PrepBanker share syllabus overlap with IBPS PO, helping you prepare for both simultaneously without doubling your effort.
                  </p>
                </div>
              )
            }
          ],
          faqs: [
            {
              q: "What is the expected IBPS PO cut off for 2026 Prelims?",
              a: "The expected IBPS PO Prelims cut off for 2026 General/UR category is between 48 and 54 marks out of 100, based on a 5-year trend. The exact cut off depends on exam difficulty, number of vacancies, and candidate performance. Targeting 55+ gives you a safe buffer above the qualifying threshold."
            },
            {
              q: "What was the IBPS PO Prelims cut off for General category in 2025?",
              a: "The IBPS PO Prelims cut off for 2025 (General/UR/EWS/OBC) was 49.21 out of 100, released on 6th October 2025 along with the scorecard. The Prelims was held on 23rd and 24th August 2025 for 5208 vacancies under CRP PO/MT-XV."
            },
            {
              q: "What is the IBPS PO Mains cut off for General category?",
              a: "The IBPS PO Mains cut off for the General/UR category has ranged from 63 to 83.5 over the past five years (out of 225). In 2025, the highest Mains cut off was 75.75 for UR and OBC. In 2024, it was 66.50. Aim for 75+ to stay above the cut off in most cycles."
            },
            {
              q: "How is the IBPS PO final cut off calculated?",
              a: "The IBPS PO final cut off is based on a weighted combination of Mains (80% weightage) and Interview (20% weightage), normalized to a score out of 100. The final cut off for 2025 for UR category was 46.11 out of 100. This means Mains performance is the dominant factor in final selection."
            },
            {
              q: "Does IBPS PO have sectional cut off in Prelims?",
              a: "Yes. IBPS PO Prelims has both overall and sectional cut offs. In 2023, the General category sectional cut offs were: English – 11.50 out of 30, Quant – 7 out of 35, Reasoning – 10 out of 35. You must clear all three section-wise minimums and the overall cut off to qualify for Mains."
            },
            {
              q: "What is the IBPS PO cut off for SC and ST category?",
              a: "In 2025 Prelims, there is no separate SC/ST cut off data confirmed yet, but based on trends — in 2023 Prelims, SC cut off was 49 and ST was 43. In Mains 2023, SC cut off was 50.25 and ST was 41 out of 225. Reserved category cut offs are typically 5–15 marks lower than General."
            },
            {
              q: "What is a safe score to target in IBPS PO 2026 Prelims?",
              a: "Target 55–60 in Prelims (General/UR). The actual cut off typically lands between 48–54, so 55+ gives you a comfortable buffer. More importantly, aim for balance: clear each sectional minimum with margin. Weak in one section can eliminate you even if your overall score is strong."
            },
            {
              q: "Does the Prelims score count in the final IBPS PO merit list?",
              a: "No. IBPS PO Prelims is purely qualifying. Once you clear Prelims, those marks are not added to your final score. Only Mains (80%) and Interview (20%) determine your merit rank and provisional allotment to participating banks. This is why Mains preparation is critical from day one."
            },
            {
              q: "What is the minimum interview score required in IBPS PO?",
              a: "The IBPS PO interview is conducted for 100 marks. The minimum qualifying score is 40% (40 marks) for the General/EWS category and 35% (35 marks) for SC/ST/OBC/PwBD categories. Candidates who fail to meet this minimum are not considered for provisional allotment, regardless of Mains score."
            },
            {
              q: "How many mock tests should I take to ensure I cross the IBPS PO cut off?",
              a: "Aiming for 20–25 full-length Prelims mocks and 8–10 Mains mocks is a practical benchmark. On PrepBanker, you can take free mock tests at app.prepgrind.com. The key is not just attempting them — spend equal time on analysis. Consistent mock scores 5–8 marks above target cut off indicate real readiness."
            }
          ]
        };
      }

      return {
        title: examId === 'sbi-po' ? 'SBI PO Previous Year Cut-off Marks (2018–2025)' : `${exam.shortName} Previous Year Cut-offs & Marks Trends`,
        overview: examId === 'sbi-po'
          ? 'Use these as your target scores. Consistently scoring above the General category cut-off in mocks = exam-ready.'
          : `To target a realistic score, candidates must evaluate previous years' category-wise cut-off trends. Inspect how competitive thresholds have fluctuated over the last three cycles for both Prelims and Mains.`,
        ctaText: `Compare Your Mock Marks Against Cutoffs`,
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
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
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
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
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
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
    }

    case 'important-dates':
    case 'dates': {
      if (examId === 'sbi-po') {
        return {
          title: "SBI PO Important Dates 2026: Complete Exam Schedule",
          overview: "Complete recruitment schedule for SBI PO 2026 covering notification release, admit card availability, exam dates, results, and interviews.",
          metaTitle: "SBI PO Important Dates 2026: Full Exam Schedule",
          metaDescription: "Complete SBI PO Important Dates 2026 — notification, admit card, prelims, mains, interview & final result timeline. Official schedule, updated daily.",
          ctaText: "Attempt Free SBI PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/sbi-po",
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Important Dates", "item": "https://prepbanker.com/sbi-po/important-dates" }
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
                    "headline": "SBI PO Important Dates 2026: Complete Exam Schedule",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/important-dates"
                  })
                }}
              />
              {/* Event Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "SBI PO Prelims Exam 2026",
                    "startDate": "2026-08-01",
                    "endDate": "2026-08-02",
                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                    "eventStatus": "https://schema.org/EventScheduled",
                    "location": {
                      "@type": "Place",
                      "address": { "@type": "PostalAddress", "addressCountry": "IN" }
                    },
                    "organizer": {
                      "@type": "Organization",
                      "name": "State Bank of India",
                      "url": "https://sbi.bank.in"
                    },
                    "description": "SBI PO Preliminary Examination 2026 for recruitment of 1,500 Probationary Officers under Advt No. CRPD/PO/2026-27/09."
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
                        "name": "What is the SBI PO Prelims exam date for 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Prelims exam is scheduled for 1 and 2 August 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "When was the SBI PO 2026 notification released?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO 2026 notification was released on 18 June 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "When was the SBI PO admit card released?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Prelims admit card was released on 22 July 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "When is the SBI PO Mains exam 2026 expected?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Mains exam is expected to be held in September 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "When will the SBI PO Prelims result be declared?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Prelims result is expected in August or September 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "When is the SBI PO interview expected to be held?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The Psychometric Test, Group Exercise, and Interview are expected in October or November 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "When will the SBI PO 2026 final result be announced?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO 2026 final result is expected in November or December 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "What was the last date to apply for SBI PO 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The last date to apply online for SBI PO 2026 was 8 July 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many stages are there in the SBI PO 2026 recruitment timeline?",
                        "acceptedAnswer": { "@type": "Answer", "text": "There are three main stages: Preliminary Exam, Main Exam, and Phase III covering the Psychometric Test, Group Exercise, and Interview." }
                      },
                      {
                        "@type": "Question",
                        "name": "Where can I check the latest official SBI PO exam dates?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The latest dates are published on the official SBI Careers website and updated on this page as soon as SBI confirms them." }
                      }
                    ]
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "content-override",
              title: "",
              content: <></>
            }
          ],
          faqs: [
            { q: "What is the SBI PO Prelims exam date for 2026?", a: "The SBI PO Prelims exam is scheduled for 1 and 2 August 2026." },
            { q: "When was the SBI PO 2026 notification released?", a: "The SBI PO 2026 notification was released on 18 June 2026." },
            { q: "When was the SBI PO admit card released?", a: "The SBI PO Prelims admit card was released on 22 July 2026." },
            { q: "When is the SBI PO Mains exam 2026 expected?", a: "The SBI PO Mains exam is expected to be held in September 2026." },
            { q: "When will the SBI PO Prelims result be declared?", a: "The SBI PO Prelims result is expected in August or September 2026." },
            { q: "When is the SBI PO interview expected to be held?", a: "The Psychometric Test, Group Exercise, and Interview are expected in October or November 2026." },
            { q: "When will the SBI PO 2026 final result be announced?", a: "The SBI PO 2026 final result is expected in November or December 2026." },
            { q: "What was the last date to apply for SBI PO 2026?", a: "The last date to apply online for SBI PO 2026 was 8 July 2026." },
            { q: "How many stages are there in the SBI PO 2026 recruitment timeline?", a: "There are three main stages: Preliminary Exam, Main Exam, and Phase III covering the Psychometric Test, Group Exercise, and Interview." },
            { q: "Where can I check the latest official SBI PO exam dates?", a: "The latest dates are published on the official SBI Careers website and updated on this page as soon as SBI confirms them." }
          ]
        };
      }

      const datesContentMap: Record<string, {
        description: string;
        checklist: string[];
        tip: string;
      }> = {
        'Official Notification Release': {
          description: 'The State Bank of India publishes the official advertisement detailing vacancies, exam structure, registration fee, eligible age limits, and reservation specifications.',
          checklist: [
            'Download and read the official notification PDF carefully.',
            'Verify the age limit cutoff date (usually April 1st).',
            'Check if you qualify under the educational criteria (final year students allowed).'
          ],
          tip: 'Do not rely on third-party blog summaries. Always read the official PDF yourself to clarify the Bank Preference guidelines, category definitions, and documentation rules.'
        },
        'Official Notification': {
          description: 'The Institute of Banking Personnel Selection publishes the official advertisement detailing vacancies, exam structure, registration fee, eligible age limits, and reservation specifications for 11 public sector banks.',
          checklist: [
            'Download and read the official notification PDF.',
            'Verify the age limit cutoff date.',
            'Confirm the bank-wise vacancy distribution.'
          ],
          tip: 'Review the bank preferences carefully. Once submitted, your order of preference for the 11 banks cannot be changed and determines your final allotment.'
        },
        'Online Application Opens': {
          description: 'The online registration portal opens on the official SBI site. Candidates can fill out the form, upload documents, select category, and pay fees.',
          checklist: [
            'Have marksheets, category certificates, and ID proof ready.',
            'Scan photograph, signature, left thumb impression, and handwritten declaration in exact dimensions.',
            'Ensure the spelling of your name matches your 10th standard certificate.'
          ],
          tip: 'Complete your registration in the first week. The server becomes extremely slow during the final days, causing transaction failures.'
        },
        'Application Start': {
          description: 'The online registration portal opens on the official IBPS site. Candidates can fill out the form, upload documents, select category, bank preferences, and pay fees.',
          checklist: [
            'Have marksheets, category certificates, and ID proof ready.',
            'Scan photograph, signature, left thumb impression, and handwritten declaration in exact dimensions.',
            'Formulate your bank preference list beforehand.'
          ],
          tip: 'Double-check your bank preference list before submitting. Higher-ranked banks should be placed first, even if they have fewer vacancies this year.'
        },
        'Application Deadline': {
          description: 'The final day to submit your online application and pay the application fee. No changes to the application form are permitted after this date.',
          checklist: [
            'Confirm payment status shows "Success" in the portal.',
            'Download and save the final submitted application form PDF.',
            'Double-check your registered email and phone number for confirmation.'
          ],
          tip: 'If your payment failed but money was deducted, wait 24-48 hours for the portal to update, or make a second payment. SBI typically refunds duplicate transaction fees.'
        },
        'Application Last Date': {
          description: 'The final day to submit your online application and pay the application fee. No changes to the application form are permitted after this date.',
          checklist: [
            'Confirm payment status shows "Success" in the portal.',
            'Download and save the final submitted application form PDF.',
            'Double-check your registered email and phone number for confirmation.'
          ],
          tip: 'Save a copy of the handwritten declaration you uploaded. You may need to verify your signature and handwriting matching at the exam center and interview stages.'
        },
        'Application Fee Payment Last Date': {
          description: 'The final date to pay the application fee online. This is usually the same as the application deadline.',
          checklist: [
            'Ensure the transaction status says "Success".',
            'Save the e-receipt generated by the bank.'
          ],
          tip: 'Always print the e-receipt. It serves as proof of payment if any dispute arises regarding your registration fee.'
        },
        'Prelims Admit Card Download': {
          description: 'Admit cards for Phase 1 are released online. They contain your exam center name, venue details, shift timing, and roll number.',
          checklist: [
            'Download and print two color copies of the call letter.',
            'Affix a passport-size photograph exactly matching the one uploaded.',
            'Check the location of your exam center on Google Maps beforehand.'
          ],
          tip: 'Check the reporting time carefully. Exam centers strictly close gates 15 minutes before the exam starts. Late entry is never permitted under any circumstances.'
        },
        'Admit Card (Prelims)': {
          description: 'Admit cards for Phase 1 are released online. They contain your exam center name, venue details, shift timing, and roll number.',
          checklist: [
            'Download and print two color copies of the call letter.',
            'Affix a passport-size photograph exactly matching the one uploaded.',
            'Check the location of your exam center on Google Maps beforehand.'
          ],
          tip: 'Check the reporting time carefully. Exam centers strictly close gates 15 minutes before the exam starts. Late entry is never permitted under any circumstances.'
        },
        'SBI PO Prelims Exam': {
          description: 'A 1-hour computer-based test comprising English (30 marks), Quantitative Aptitude (35 marks), and Reasoning Ability (35 marks).',
          checklist: [
            'Carry printed admit card with photo affixed.',
            'Bring original photo ID proof and a clear photocopy of it.',
            'Keep a blue/black ballpoint pen for rough sheets.'
          ],
          tip: 'Prelims is qualifying, so speed and accuracy are everything. If you get stuck on a puzzle or a DI set, skip it immediately. Do not spend more than 90 seconds on a single question.'
        },
        'Prelims Exam': {
          description: 'A 1-hour computer-based test comprising English (30 marks), Quantitative Aptitude (35 marks), and Reasoning Ability (35 marks) with sectional cutoffs.',
          checklist: [
            'Carry printed admit card with photo affixed.',
            'Bring original photo ID proof and a clear photocopy of it.',
            'Keep a blue/black ballpoint pen for rough sheets.'
          ],
          tip: 'Unlike SBI PO, IBPS PO has sectional cut-offs. Do not neglect English or Reasoning; you must clear the minimum qualifying marks in every section to pass the exam.'
        },
        'Prelims Result Declaration': {
          description: 'SBI publishes the list of roll numbers of candidates shortlisted for Phase 2 Mains (approx. 10 times the vacancy count).',
          checklist: [
            'Look up your roll number in the official PDF.',
            'Note your score and the category-wise cutoff marks.',
            'Begin full-length Mains mocks immediately if qualified.'
          ],
          tip: 'Do not wait for Prelims results to start preparing for Mains. The gap between Prelims results and Mains exam is usually less than 25 days, which is insufficient for General Awareness revision.'
        },
        'Prelims Result': {
          description: 'IBPS publishes the list of candidates shortlisted for Phase 2 Mains (approx. 10 times the vacancy count).',
          checklist: [
            'Look up your registration/roll number in the official result portal.',
            'Check the sectional and overall cut-off scores once scorecards are released.',
            'Begin full-length Mains mocks immediately.'
          ],
          tip: 'Mains syllabus is vast. General Awareness and Descriptive Writing require constant practice. Start revising static banking concepts immediately.'
        },
        'Mains Admit Card Download': {
          description: 'Phase 2 Mains admit cards are released for qualified candidates.',
          checklist: [
            'Download the Mains call letter and descriptive test guidelines.',
            'Locate the Mains exam venue (often in larger cities than Prelims).'
          ],
          tip: 'Read the descriptive test instructions. You will have to type your essay and letter on a computer keyboard immediately after the objective section.'
        },
        'SBI PO Mains Exam': {
          description: 'A 3.5-hour test: 3 hours objective (200 marks) + 30 minutes descriptive test (50 marks). This is the key score for your final merit listing.',
          checklist: [
            'Bring original ID proof and photocopies.',
            'Mentally prepare for high-difficulty puzzles and data interpretation caselets.'
          ],
          tip: 'The descriptive test requires good typing speed. Practice typing on a physical keyboard, not a laptop keypad, to ensure you can finish within 30 minutes.'
        },
        'Mains Exam': {
          description: 'A 3.5-hour test: 3 hours objective (200 marks) + 30 minutes descriptive test (25 marks). Marks scored in Mains determine your final merit listing.',
          checklist: [
            'Bring original ID proof and photocopies.',
            'Mentally prepare for high-difficulty data interpretation and logical reasoning questions.'
          ],
          tip: 'Descriptive test is key in IBPS PO. Formulating structured templates for letter writing and essay writing will help you score easily.'
        },
        'Mains Result Declaration': {
          description: 'List of candidates qualified for Phase 3 (Group Exercises & Interview) is published (approx. 3 times the vacancies).',
          checklist: [
            'Check your name/roll number in the selection PDF.',
            'Start preparing documentation: graduation certificates, character certificates, caste certificates.'
          ],
          tip: 'Get your bio-data form ready. Draft answers to standard interview questions like "Why banking?", "Tell us about yourself", and "How does your degree help in SBI?".'
        },
        'Mains Result': {
          description: 'List of candidates qualified for Phase 3 Personal Interview is published.',
          checklist: [
            'Check your roll number in the selection PDF.',
            'Start preparing documentation: graduation certificates, category certificates, character certificates.'
          ],
          tip: 'Keep your academic transcripts ready. Panels regularly ask about your graduation subjects, major projects, and post-graduation plans.'
        },
        'Group Exercise & Interview': {
          description: 'Assessment of communication, leadership, and banking knowledge. Consists of a Group Exercise/GD (20 marks) and Interview (30 marks).',
          checklist: [
            'Prepare formal business attire (suit/blazer/formal wear).',
            'Revise financial current affairs, RBI policies, and basic economics of the last 3 months.',
            'Participate in mock group discussions and interviews.'
          ],
          tip: 'In group exercises, focus on active listening and summarizing points rather than aggressive arguing. Panels look for collaboration and logical thinking.'
        },
        'Interview': {
          description: 'Personal interview (100 marks) conducted by a panel of senior banking officials. Focuses on banking awareness, current affairs, and personality assessment.',
          checklist: [
            'Prepare formal business attire.',
            'Revise financial current affairs, RBI policies, and basic economics of the last 3 months.',
            'Practice mock interviews to build confidence.'
          ],
          tip: 'In personal interviews, honesty is key. If you do not know the answer to a question, politely say "I am not aware of this, sir, but I will look it up." Do not try to guess or bluff.'
        },
        'Final Result & Merit List': {
          description: 'SBI publishes the list of provisionally selected candidates based on the 75:25 normalized weightage of Mains and Phase 3 scores.',
          checklist: [
            'Check the final list for your roll number.',
            'Receive the allotment letter and pre-recruitment medical guidelines.'
          ],
          tip: 'Celebrate your success and prepare for your intensive training module at the SBI local head office!'
        },
        'Final Result': {
          description: 'IBPS publishes the final allotment list of provisionally selected candidates based on the 80:20 normalized weightage of Mains and Interview scores.',
          checklist: [
            'Check the final list for your roll number and bank allotment.',
            'Receive the offer letter from your allotted bank.'
          ],
          tip: 'Congratulations! Get ready to join your allotted bank and begin your journey as a Probationary Officer.'
        }
      };

      const timelineEvents = exam.dates.map(d => {
        const rich = datesContentMap[d.event] || {
          description: `Important recruitment milestone for the ${exam.shortName} 2026 cycle. Please track dates on the official portal to ensure compliance.`,
          checklist: [],
          tip: ''
        };
        return {
          event: d.event,
          date: d.date,
          status: d.status as 'upcoming' | 'active' | 'closed',
          description: rich.description,
          checklist: rich.checklist,
          tip: rich.tip
        };
      });

      return {
        title: `${exam.shortName} Important Dates & Timeline 2026`,
        overview: `A complete calendar tracking notification release, online registration dates, admit card downloads, and exam milestones for ${exam.shortName} 2026.`,
        ctaText: `Download Important Exam Calendar`,
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
        subsections: [
          {
            id: 'timeline-vertical-pathway',
            title: 'Recruitment Calendar Timeline & Action Roadmap',
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                  Track the full lifecycle of the recruitment process below. Review the required checklists and expert tips for each milestone to keep your preparation perfectly aligned with key milestones.
                </p>
                <div className="relative pl-6 sm:pl-8 border-l border-slate-200 ml-4 space-y-12 my-8">
                  {timelineEvents.map((ev, idx) => {
                    const statusColors = {
                      upcoming: {
                        dot: 'bg-amber-400 border-amber-200 text-amber-900',
                        pill: 'bg-amber-50 text-amber-800 border-amber-200'
                      },
                      active: {
                        dot: 'bg-emerald-500 border-emerald-200 text-white animate-pulse',
                        pill: 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      },
                      closed: {
                        dot: 'bg-slate-300 border-slate-200 text-slate-600',
                        pill: 'bg-slate-100 text-slate-600 border-slate-200'
                      }
                    };
                    const colorScheme = statusColors[ev.status] || statusColors.upcoming;

                    return (
                      <div key={ev.event} className="relative">
                        {/* Circle Node on Left Line */}
                        <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-xs ${colorScheme.dot}`} />

                        <div className="space-y-3">
                          {/* Metadata Bar */}
                          <div className="flex items-center gap-2 flex-wrap text-xs font-bold">
                            <span className="inline-flex items-center gap-1 text-[#1B6EB5] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                              <Calendar size={12} />
                              {ev.date}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-md border text-xs uppercase tracking-wider ${colorScheme.pill}`}>
                              {ev.status}
                            </span>
                          </div>

                          {/* Event Title */}
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-800 leading-tight">
                            {ev.event}
                          </h4>

                          {/* Event Description */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                            {ev.description}
                          </p>

                          {/* Action Checklist */}
                          {ev.checklist.length > 0 && (
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 mt-2">
                              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Action Checklist</span>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                                {ev.checklist.map((item, cidx) => (
                                  <li key={cidx} className="flex gap-2 items-start font-normal">
                                    <CheckCircle2 size={14} className="text-green-600 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Topper Tip */}
                          {ev.tip && (
                            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl flex gap-3 items-start mt-2">
                              <Lightbulb size={18} className="text-[#D4A017] shrink-0 mt-0.5" />
                              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                                <span className="block font-bold text-slate-800 text-xs uppercase tracking-wider mb-0.5">Topper Advice</span>
                                {ev.tip}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('date') || f.q.toLowerCase().includes('recruitment') || f.q.toLowerCase().includes('official'))
      };
    }

    case 'study-plan':
    case 'strategy': {
      if (examId === 'sbi-po') {
        return sbiPoStudyPlanContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoStudyPlanContent;
      }
      return {
        title: `${exam.shortName} Preparation Strategy & Study Plan 2026`,
        overview: `A comprehensive 90-day step-by-step preparation plan crafted by banking toppers to build speed, accuracy, and clear section cut-offs.`,
        ctaText: `Take a Free Topic Diagnostic Test`,
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
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
                    <span className="inline-block text-xs font-bold text-slate-700 bg-white border border-slate-250 px-2 py-0.5 rounded">
                      Target: 22–25 attempts with 85–90% accuracy
                    </span>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-l-4 border-l-[var(--color-gold)]">
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1">Quantitative Aptitude (20 minutes)</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                      Start with Simplification (fastest marks). Move to Number Series, then Quadratic Equations. Attempt DI last — pick the easiest set first. Skip any question that takes more than 90 seconds.
                    </p>
                    <span className="inline-block text-xs font-bold text-slate-700 bg-white border border-slate-250 px-2 py-0.5 rounded">
                      Target: 22–25 attempts with 80%+ accuracy
                    </span>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-l-4 border-l-purple-500">
                    <h4 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1">Reasoning (20 minutes)</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                      Do not start with puzzles if they look complex — they can consume the entire slot. Start with Inequalities, Syllogisms, and Coding-Decoding. Attempt puzzles only if time permits.
                    </p>
                    <span className="inline-block text-xs font-bold text-slate-700 bg-white border border-slate-250 px-2 py-0.5 rounded">
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
                <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 pl-3 list-disc list-inside">
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

    case 'notification': {
      if (examId === 'sbi-po') {
        return {
          title: `SBI PO Notification 2026`,
          overview: `The State Bank of India (SBI) released the SBI PO Notification 2026 on 18 June 2026 under Advertisement No. CRPD/PO/2026-27/09, announcing 1,500 Probationary Officer (PO) vacancies. Selection is through Prelims → Mains → Interview, with the Prelims exam held on 1 & 2 August 2026.`,
          metaTitle: `SBI PO Notification 2026 PDF & Details`,
          metaDescription: `SBI PO 2026 Notification out. Check the official CRPD/PO/2026-27/09 notice, important dates timeline, eligibility, 1,500 vacancies breakdown & apply guide.`,
          ctaText: `Attempt Free SBI PO Mock Test`,
          ctaHref: `https://app.prepgrind.com/signup/sbi-po`,
          customSchemas: (
            <>
              {/* JobPosting Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "JobPosting",
                    "title": "Probationary Officer (PO) 2026",
                    "description": "State Bank of India (SBI) is recruiting 1,500 Probationary Officers under Advertisement No. CRPD/PO/2026-27/09. Selection through Prelims, Mains and Interview.",
                    "identifier": {
                      "@type": "PropertyValue",
                      "name": "SBI",
                      "value": "CRPD/PO/2026-27/09"
                    },
                    "datePosted": "2026-06-18",
                    "validThrough": "2026-07-08",
                    "employmentType": "FULL_TIME",
                    "hiringOrganization": {
                      "@type": "Organization",
                      "name": "State Bank of India",
                      "sameAs": "https://sbi.bank.in",
                      "logo": "https://prepbanker.com/images/sbi-logo.png"
                    },
                    "jobLocation": {
                      "@type": "Place",
                      "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "IN"
                      }
                    },
                    "totalJobOpenings": 1500,
                    "baseSalary": {
                      "@type": "MonetaryAmount",
                      "currency": "INR",
                      "value": {
                        "@type": "QuantitativeValue",
                        "minValue": 48480,
                        "unitText": "MONTH"
                      }
                    },
                    "educationRequirements": "Graduate in any discipline",
                    "experienceRequirements": "Freshers eligible"
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
                        "name": "When was the SBI PO Notification 2026 released?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "SBI released the PO Notification 2026 on 18 June 2026 under Advertisement No. CRPD/PO/2026-27/09."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How many vacancies are there in SBI PO Notification 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "SBI PO Notification 2026 announced 1,500 vacancies — 1,446 regular and 54 backlog posts."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the SBI PO Notification 2026 advertisement number?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The official advertisement number is CRPD/PO/2026-27/09."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What was the last date to apply for SBI PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The online application window closed on 8 July 2026."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the age limit in SBI PO Notification 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Candidates must be between 21 and 30 years of age as on 1 April 2026."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is the CIBIL/credit score clause applicable in SBI PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No, SBI removed the CIBIL clause from the official notification with immediate effect in July 2026."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the application fee for SBI PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "₹750 for General, EWS and OBC candidates; no fee for SC, ST and PwBD candidates."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How many applications did SBI receive for PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "SBI received 12,14,076 applications for the 2026 PO cycle, almost double the roughly 6 lakh received the previous year."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the selection process under SBI PO Notification 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Selection has three stages: Preliminary Exam, Main Exam, and Phase III covering a Psychometric Test, Group Exercise and Interview."
                        }
                      }
                    ]
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Notification", "item": "https://prepbanker.com/sbi-po/notification" }
                    ]
                  })
                }}
              />
              {/* Article / NewsArticle Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "SBI PO Notification 2026: Download PDF, Check Vacancy & Apply Online",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-24",
                    "author": {
                      "@type": "Organization",
                      "name": "PrepBanker"
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://prepbanker.com/images/logo.png"
                      }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/notification"
                  })
                }}
              />
              {/* Organization Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    "name": "PrepBanker",
                    "url": "https://prepbanker.com",
                    "logo": "https://prepbanker.com/images/logo.png",
                    "sameAs": [
                      "https://www.instagram.com/prepbanker2026"
                    ]
                  })
                }}
              />
            </>
          ),
          subsections: [],
          faqs: []
        };
      }
    }

    case 'admit-card': {
      if (examId === 'sbi-po') {
        return {
          title: `SBI PO Admit Card 2026: Download Prelims Call Letter`,
          overview: `SBI released the SBI PO Admit Card 2026 on 22 July 2026 on its official website, sbi.bank.in, for candidates appearing in the Preliminary Examination on 1 and 2 August 2026, held across 4 shifts each day. The admit card — also called the Prelims Call Letter or Hall Ticket — can be downloaded using a Registration Number/Roll Number and Password or Date of Birth. Around 12,14,076 candidates applied for this cycle. No admit card is sent by post or email; a printed copy plus a valid original photo ID is mandatory for exam-hall entry.`,
          metaTitle: `SBI PO Admit Card 2026 Out – Download Call Letter`,
          metaDescription: `SBI PO Admit Card 2026 released 22 July 2026 at sbi.bank.in for the Aug 1–2 Prelims exam. Direct download link, shift timings & exam-day checklist.`,
          ctaText: `Attempt Free SBI PO Mock Test`,
          ctaHref: `https://app.prepgrind.com/signup/sbi-po`,
          customSchemas: (
            <>
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
                        "name": "When was the SBI PO Admit Card 2026 released?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI released the PO Admit Card 2026 on 22 July 2026 at sbi.bank.in." }
                      },
                      {
                        "@type": "Question",
                        "name": "What are the login credentials to download the SBI PO Admit Card?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Registration Number or Roll Number along with Password or Date of Birth." }
                      },
                      {
                        "@type": "Question",
                        "name": "Will SBI send the admit card by post or email?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, the SBI PO Admit Card is available only in online mode and is not dispatched by post or email." }
                      },
                      {
                        "@type": "Question",
                        "name": "What documents must I carry along with the admit card?",
                        "acceptedAnswer": { "@type": "Answer", "text": "A printed copy of the admit card and one valid original photo ID such as Aadhaar, PAN, Passport, Voter ID, or Driving Licence." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is biometric verification done at the SBI PO exam centre?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, fingerprint biometric verification is conducted at most centres as part of identity checks before entry." }
                      },
                      {
                        "@type": "Question",
                        "name": "Are admit card links shared on WhatsApp or Telegram safe?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, these are commonly fake or phishing links. Download the admit card only from the official site, sbi.bank.in." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the best time to download the SBI PO Admit Card if the site is slow?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Early morning hours, roughly 5 AM to 7 AM IST, tend to have lower server traffic and faster downloads." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many shifts is the SBI PO Prelims exam conducted in?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SBI PO Prelims exam is conducted in 4 shifts per day on 1 and 2 August 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the handwriting sample on the SBI PO admit card?",
                        "acceptedAnswer": { "@type": "Answer", "text": "It is a short handwritten declaration candidates must complete at the centre within a fixed time slot before the exam begins, as printed on the admit card." }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I enter the exam centre after the gate closing time?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, entry is strictly denied after the gate closing time printed on the admit card." }
                      },
                      {
                        "@type": "Question",
                        "name": "What if my SBI PO Admit Card shows incorrect details?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Contact SBI recruitment authorities immediately, before the exam date, to get the error corrected." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is the SBI PO Admit Card the same as the hall ticket or call letter?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Admit Card, Hall Ticket, and Call Letter all refer to the same document issued by SBI for the Prelims exam." }
                      }
                    ]
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Admit Card", "item": "https://prepbanker.com/sbi-po/admit-card" }
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
                    "headline": "SBI PO Admit Card 2026: Download Prelims Call Letter",
                    "datePublished": "2026-07-22",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/admit-card"
                  })
                }}
              />
              {/* HowTo Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "How to Download SBI PO Admit Card 2026",
                    "step": [
                      { "@type": "HowToStep", "text": "Visit the official website sbi.bank.in." },
                      { "@type": "HowToStep", "text": "Click on Careers on the homepage." },
                      { "@type": "HowToStep", "text": "Click Join SBI, then select Current Openings." },
                      { "@type": "HowToStep", "text": "Open the listing for Recruitment of Probationary Officers (CRPD/PO/2026-27/09)." },
                      { "@type": "HowToStep", "text": "Click Call Letter for Prelims Exam." },
                      { "@type": "HowToStep", "text": "Enter Registration Number and Password or Date of Birth." },
                      { "@type": "HowToStep", "text": "Complete the captcha verification and submit." },
                      { "@type": "HowToStep", "text": "Download the admit card and print 2-3 copies for the exam day." }
                    ]
                  })
                }}
              />
            </>
          ),
          subsections: [
            { id: 'highlights', title: 'SBI PO Admit Card 2026: Key Highlights', content: <></> },
            { id: 'download-steps', title: 'How to Download SBI PO Admit Card 2026', content: <></> },
            { id: 'best-time', title: 'Best Time to Download Call Letter', content: <></> },
            { id: 'shift-timings', title: 'SBI PO Prelims Shift Timings 2026', content: <></> },
            { id: 'details-printed', title: 'Details Mentioned on the SBI PO Admit Card', content: <></> },
            { id: 'documents-required', title: 'Documents Required Along With Admit Card', content: <></> },
            { id: 'dos-donts', title: 'Do\'s and Don\'ts Guidelines', content: <></> },
            { id: 'exam-checklist', title: 'Exam Day Checklist', content: <></> },
            { id: 'common-issues', title: 'Common Issues While Downloading & Fixes', content: <></> },
            { id: 'live-updates', title: 'Latest Admit Card Updates (Live Log)', content: <></> }
          ],
          faqs: [
            { q: 'When was the SBI PO Admit Card 2026 released?', a: 'SBI released the PO Admit Card 2026 on 22 July 2026 at sbi.bank.in.' },
            { q: 'What are the login credentials to download the SBI PO Admit Card?', a: 'Registration Number/Roll Number along with Password or Date of Birth.' },
            { q: 'Will SBI send the admit card by post or email?', a: 'No — the SBI PO Admit Card is available only in online mode; it is not dispatched by post or email.' },
            { q: 'What documents must I carry along with the admit card?', a: 'A printed copy of the admit card and one valid original photo ID such as Aadhaar, PAN, Passport, Voter ID, or Driving Licence.' },
            { q: 'Is biometric verification done at the SBI PO exam centre?', a: 'Yes — fingerprint biometric verification is conducted at most centres as part of identity checks before entry.' },
            { q: 'Are admit card links shared on WhatsApp or Telegram safe?', a: 'No — these are commonly fake or phishing links; download the admit card only from the official site, sbi.bank.in.' },
            { q: 'What is the best time to download the SBI PO Admit Card if the site is slow?', a: 'Early morning hours, roughly 5 AM to 7 AM IST, tend to have lower server traffic and faster downloads.' },
            { q: 'How many shifts is the SBI PO Prelims exam conducted in?', a: 'The SBI PO Prelims exam is conducted in 4 shifts per day on 1 and 2 August 2026.' },
            { q: 'What is the handwriting sample on the SBI PO admit card?', a: 'It\'s a short handwritten declaration candidates must complete at the centre within a fixed time slot before the exam begins, as printed on the admit card.' },
            { q: 'Can I enter the exam centre after the gate closing time?', a: 'No — entry is strictly denied after the gate closing time printed on the admit card.' },
            { q: 'What if my SBI PO Admit Card shows incorrect details?', a: 'Contact SBI recruitment authorities immediately, before the exam date, to get the error corrected.' },
            { q: 'Is the SBI PO Admit Card the same as the hall ticket or call letter?', a: 'Yes — Admit Card, Hall Ticket, and Call Letter all refer to the same document issued by SBI for the Prelims exam.' }
          ]
        };
      }

      if (examId === 'ibps-po') {
        return {
          title: "IBPS PO Admit Card 2026 — Download Hall Ticket, Dates & Exam Day Rules",
          overview: "The IBPS PO admit card 2026 for Prelims will be available on ibps.in approximately 10–15 days before the October 2026 exam. To download it, you need your registration number and date of birth. No admit card is sent by post or email — every candidate must download and print it themselves. Entry without a printed copy is not permitted.",
          metaTitle: "IBPS PO Admit Card — Download Hall Ticket Now",
          metaDescription: "IBPS PO admit card 2026 is released on ibps.in. Download your Prelims & Mains hall ticket, check exam day rules, and attempt free mock tests on PrepBanker.",
          ctaText: "Start Free IBPS PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/ibps-po",
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
                        "name": "IBPS PO Admit Card 2026",
                        "item": "https://prepbanker.com/ibps-po/admit-card"
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
                    "name": "IBPS PO Admit Card 2026 — Download Hall Ticket, Exam Date & Rules",
                    "url": "https://prepbanker.com/ibps-po/admit-card",
                    "description": "Step-by-step guide to download IBPS PO admit card 2026 for Prelims and Mains. Covers release date, download process, exam day documents, and what to do if your hall ticket has errors.",
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
              {/* Article Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "IBPS PO Admit Card 2026 — How to Download, Exam Date & Documents Required",
                    "url": "https://prepbanker.com/ibps-po/admit-card",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "author": {
                      "@type": "Organization",
                      "name": "PrepBanker Editorial Team",
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
                    "description": "Complete guide to IBPS PO admit card 2026 — release dates for Prelims and Mains, step-by-step download process, documents to carry, and error correction steps.",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://prepbanker.com/ibps-po/admit-card"
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
                        "name": "When will the IBPS PO admit card 2026 be released?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The IBPS PO Prelims admit card 2026 is expected to be released approximately 10–15 days before the Prelims exam, which is scheduled for October 2026. Historically, IBPS releases the hall ticket on ibps.in without advance individual notice — candidates must check the official website regularly."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How do I download my IBPS PO 2026 admit card?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Visit ibps.in, click on 'CRP PO/MT-XVI' under the admit card section, enter your registration number (or roll number) and date of birth, verify the captcha, and download the PDF. Save it and take two colour printouts before your exam date."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What documents do I need to carry with the IBPS PO admit card?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Along with the printed admit card, carry one valid photo ID — Aadhaar card, PAN card, Voter ID, Passport, or Driving Licence. The photo on your ID must match the one on the admit card. Some centres also require a recent passport-size photograph. Check the specific instructions on your hall ticket."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "My IBPS PO admit card has a wrong name or photo — what do I do?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Contact IBPS immediately through the official helpdesk on ibps.in. Do not wait until exam day. Carry original documents with the correct information to the exam centre and report to the invigilator. IBPS typically allows candidates to write the exam with a note, pending correction — but you must report it proactively."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is the IBPS PO Prelims admit card the same as the Mains admit card?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No. IBPS issues separate admit cards for Prelims and Mains. The Mains admit card is released only to candidates who clear the Prelims cut-off. You cannot use your Prelims hall ticket for the Mains exam. Both admit cards are available separately on ibps.in."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I appear for IBPS PO exam without a printout of the admit card?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No. A physical printout of the admit card is mandatory. A digital copy on your phone is NOT accepted at the exam centre. Print at least two copies — one for the exam centre (they may retain it) and one for your own records. Use a colour printer for best results."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What time should I reach the IBPS PO exam centre?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Reach the exam centre at least 30–45 minutes before your reporting time. IBPS typically specifies a gate-closing time on the admit card — usually 30 minutes before the exam starts. Entry is strictly denied after gate closure, regardless of the reason."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I attempt IBPS PO mock tests for free on PrepBanker while waiting for the admit card?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. PrepBanker offers free IBPS PO Prelims and Mains mock tests at app.prepgrind.com — no payment required to get started. The waiting period between admit card release and exam day (usually 10–15 days) is ideal for intensive mock test practice. Don't let that window go to waste."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What items are not allowed inside the IBPS PO exam hall?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Mobile phones, smartwatches, calculators, Bluetooth devices, earphones, and any electronic gadget are strictly prohibited. Bags, food, and water bottles are generally not allowed inside the exam hall. Wear simple clothing — avoid clothing with large metal buttons or accessories that trigger security checks."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "I lost my IBPS PO admit card — can I get a duplicate?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. Since the admit card is a downloadable PDF, you can re-download it from ibps.in using your registration number and date of birth anytime before the exam. There is no physical dispatch — the file remains accessible on the portal until the exam cycle closes."
                        }
                      }
                    ]
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
                    "name": "IBPS PO 2026 Mock Test Series — Prelims & Mains",
                    "description": "Full-length Prelims and Mains mock tests, sectional tests, and topic-wise quizzes for IBPS PO 2026 preparation. Includes All India Rank, detailed analytics, and previous year question sets.",
                    "provider": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
                    },
                    "url": "https://prepbanker.com/ibps-po",
                    "educationalLevel": "Undergraduate",
                    "hasCourseInstance": {
                      "@type": "CourseInstance",
                      "courseMode": "online",
                      "inLanguage": "en-IN"
                    }
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "quick-facts",
              title: "IBPS PO 2026 — Admit Card Quick Reference",
              content: (
                <div className="space-y-4">
                  <HighlightBox type="info" title="Quick Summary">
                    <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
                      <li><strong>Exam Name:</strong> IBPS CRP PO/MT-XVI (Probationary Officers / Management Trainees)</li>
                      <li><strong>Conducting Body:</strong> Institute of Banking Personnel Selection (IBPS)</li>
                      <li><strong>Prelims Admit Card Release:</strong> ~10–15 days before Prelims (expected September 2026)</li>
                      <li><strong>Prelims Exam Date:</strong> October 2026 (expected)</li>
                      <li><strong>Mains Admit Card Release:</strong> ~10 days before Mains (for qualified candidates only)</li>
                      <li><strong>Mains Exam Date:</strong> November 2026 (expected)</li>
                      <li><strong>Admit Card Mode:</strong> Online only — download from <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">ibps.in</a></li>
                      <li><strong>Login Credentials:</strong> Registration Number + Date of Birth</li>
                      <li><strong>Official Website:</strong> <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">ibps.in</a></li>
                      <li><strong>Printout Required:</strong> Yes — colour printout mandatory</li>
                    </ul>
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "release-date",
              title: "When Will the IBPS PO 2026 Admit Card Be Released?",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    IBPS does not announce the exact admit card release date in advance — it simply appears on ibps.in a few weeks before the exam. Based on the pattern of past five years:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Exam Cycle</th>
                          <th className="px-4 py-2.5">Prelims Date</th>
                          <th className="px-4 py-2.5">Prelims Admit Card</th>
                          <th className="px-4 py-2.5">Mains Date</th>
                          <th className="px-4 py-2.5">Mains Admit Card</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XV (2025)</td>
                          <td className="px-4 py-3">October 2025</td>
                          <td className="px-4 py-3">~Sept 2025</td>
                          <td className="px-4 py-3">November 2025</td>
                          <td className="px-4 py-3">~Nov 2025</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XIV (2024)</td>
                          <td className="px-4 py-3">October 2024</td>
                          <td className="px-4 py-3">~Sept 2024</td>
                          <td className="px-4 py-3">November 2024</td>
                          <td className="px-4 py-3">~Nov 2024</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XIII (2023)</td>
                          <td className="px-4 py-3">September 2023</td>
                          <td className="px-4 py-3">~Sept 2023</td>
                          <td className="px-4 py-3">October 2023</td>
                          <td className="px-4 py-3">~Oct 2023</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XII (2022)</td>
                          <td className="px-4 py-3">October 2022</td>
                          <td className="px-4 py-3">~Sept 2022</td>
                          <td className="px-4 py-3">November 2022</td>
                          <td className="px-4 py-3">~Nov 2022</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XI (2021)</td>
                          <td className="px-4 py-3">October 2021</td>
                          <td className="px-4 py-3">~Oct 2021</td>
                          <td className="px-4 py-3">November 2021</td>
                          <td className="px-4 py-3">~Nov 2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-3 font-normal">
                    For CRP PO/MT-XVI (2026), the Prelims admit card is expected in <strong>September 2026</strong> and Mains admit card in <strong>November 2026</strong>, issued only to candidates who qualify Prelims.
                  </p>
                  <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed mb-3 font-normal">
                    There are <strong>two separate admit cards</strong> — one for Prelims and one for Mains. You cannot carry the Prelims hall ticket to the Mains exam.
                  </p>
                  <HighlightBox type="info" title="Pro Tip">
                    Don&apos;t rely on news websites or WhatsApp forwards to tell you when the admit card is live. Set a daily reminder to check ibps.in starting from the first week of September 2026. IBPS goes live without any prior announcement, and centres sometimes get filled early if you delay downloading.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "download-steps",
              title: "How to Download IBPS PO Admit Card 2026 — Step by Step",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    The download process is straightforward but has a few steps where students trip up — particularly around which link to click and what credentials to enter.
                  </p>
                  <ol className="list-decimal list-inside space-y-2.5 pl-3">
                    <li>Open your browser and go to the official IBPS website: <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">ibps.in</a></li>
                    <li>On the homepage, look for the &quot;Click here to Download Online Examination Call Letter&quot; link under the CRP PO/MT-XVI banner. IBPS uses the term &quot;call letter&quot; — it means the same as admit card or hall ticket.</li>
                    <li>Click the link. A new page opens asking for your credentials.</li>
                    <li>Enter your <strong>Registration Number</strong> (from your application confirmation) and your <strong>Date of Birth</strong> (in DD/MM/YYYY format).</li>
                    <li>Enter the <strong>captcha code</strong> displayed on screen correctly. This step fails most students — refresh if the captcha is unclear.</li>
                    <li>Click <strong>Submit / Login</strong>.</li>
                    <li>Your admit card appears on screen as a PDF.</li>
                    <li>Verify all details — name, photograph, exam date, centre address, reporting time.</li>
                    <li>Click <strong>Download</strong> and save the PDF to your device.</li>
                    <li>Print <strong>two copies</strong> in colour. Colour printing is important because your photograph must be clearly visible — black and white prints are sometimes rejected at strict centres.</li>
                  </ol>
                  <HighlightBox type="info" title="Pro Tip">
                    Save your registration number and date of birth in a notes app on your phone right now — before you need them. Every year, students panic because they applied months ago and can&apos;t find their confirmation email. The IBPS registration confirmation email is your single most important document during the admit card phase.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "card-details",
              title: "What Details Are on the IBPS PO 2026 Admit Card?",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Your hall ticket contains everything you need to report to the right place at the right time. Here is what to look for and verify:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2 text-[#1B6EB5]">Personal Details</h5>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>Candidate&apos;s full name (must match your application form exactly)</li>
                        <li>Roll number / registration number</li>
                        <li>Photograph and signature (must be clearly visible)</li>
                        <li>Category (General / OBC / SC / ST / EWS / PwD)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2 text-[#1B6EB5]">Exam Details</h5>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>Exam name and cycle (CRP PO/MT-XVI)</li>
                        <li>Exam type (Prelims or Mains)</li>
                        <li>Exam date and day</li>
                        <li>Reporting time and gate-closing time</li>
                        <li>Language of exam</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2 text-[#1B6EB5]">Centre Details</h5>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>Name of the exam centre</li>
                        <li>Full address with landmark</li>
                        <li>Venue code</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    Check every single field. If anything is wrong — particularly your name, photograph, or exam centre — contact IBPS immediately through the official helpdesk at ibps.in. Do not assume it will be resolved on exam day.
                  </p>
                </div>
              )
            },
            {
              id: "documents-to-carry",
              title: "Documents to Carry to the IBPS PO 2026 Exam",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Showing up without the right documents means you won&apos;t be allowed inside, regardless of your preparation. Here is the complete checklist:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Document</th>
                          <th className="px-4 py-2.5">Mandatory?</th>
                          <th className="px-4 py-2.5">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Printed admit card (colour)</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Yes — always</td>
                          <td className="px-4 py-3">Carry 2 copies</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">One original photo ID</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Yes — always</td>
                          <td className="px-4 py-3">Must be government-issued</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Passport-size photographs</td>
                          <td className="px-4 py-3 text-emerald-600 font-bold">Yes</td>
                          <td className="px-4 py-3">As specified on admit card (usually 1–2, same as application photo)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">PwD certificate</td>
                          <td className="px-4 py-3 text-slate-500">Only for PwD candidates</td>
                          <td className="px-4 py-3">Original or attested copy</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Scribe request form</td>
                          <td className="px-4 py-3 text-slate-500">Only if scribe approved</td>
                          <td className="px-4 py-3">Carry approval letter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-2">Accepted Photo ID Proofs:</h5>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2">Any one of the following is valid:</p>
                    <ul className="text-xs sm:text-sm text-slate-605 space-y-1.5 pl-3 list-disc list-inside font-normal">
                      <li>Aadhaar Card (with name and photo clearly visible)</li>
                      <li>PAN Card</li>
                      <li>Voter ID Card</li>
                      <li>Passport</li>
                      <li>Driving Licence</li>
                      <li>Bank Passbook with photo</li>
                      <li>College / University ID (check if IBPS accepts this in the specific cycle)</li>
                    </ul>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    The name on your photo ID must match the name on the admit card. A minor spelling variation (e.g., &quot;Mohammed&quot; vs &quot;Mohammad&quot;) can be flagged — carry a document that shows both spellings or a gazette notification if your name is legally different.
                  </p>
                </div>
              )
            },
            {
              id: "prohibited-items",
              title: "What Is Not Allowed Inside the IBPS PO Exam Hall?",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Security at IBPS exam centres is strict. Being unfamiliar with what&apos;s prohibited can cost you time, stress, or entry itself.
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Prohibited Item</th>
                          <th className="px-4 py-2.5">Why It Matters</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-655">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Mobile phones (including feature phones)</td>
                          <td className="px-4 py-3">Complete ban — leave it at home or in the car</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Smartwatches, fitness bands</td>
                          <td className="px-4 py-3">Any wrist device except a plain analog watch</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Bluetooth earphones / earbuds</td>
                          <td className="px-4 py-3">Even if switched off — not allowed</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Calculator or electronic diary</td>
                          <td className="px-4 py-3">No computing devices of any kind</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Bags, backpacks, purses</td>
                          <td className="px-4 py-3">No storage allowed inside the hall</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Food and water bottles</td>
                          <td className="px-4 py-3">Some centres allow water in transparent bottles — check your admit card</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Rough paper or stationery from home</td>
                          <td className="px-4 py-3">Provided by the centre; don&apos;t bring your own</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    Wear simple clothing. Avoid jackets with multiple pockets, metallic accessories, and belts with large buckles — security checks are thorough at many centres.
                  </p>
                </div>
              )
            },
            {
              id: "error-correction",
              title: "What to Do If Your IBPS PO Admit Card Has Errors",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    This is the most stressful situation candidates face — and it happens more often than you think. Here is exactly what to do, in order:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 pl-3">
                    <li><strong>Don&apos;t panic.</strong> IBPS has a correction mechanism and candidates are generally not barred for errors that were present in the original application.</li>
                    <li><strong>Check your original application form.</strong> If the error is in the application itself (you typed your name wrong), note that. If the error is new (correct on application, wrong on hall ticket), that&apos;s an IBPS system error.</li>
                    <li><strong>Contact IBPS helpdesk immediately.</strong> The official IBPS helpdesk number and email are listed on ibps.in. Response times are typically 2–5 working days.</li>
                    <li><strong>Carry supporting documents to the exam.</strong> Bring your original application confirmation, photo ID, and any other document that supports the correct information.</li>
                    <li><strong>Report to the invigilator before the exam starts.</strong> Show them the discrepancy and your supporting documents. Most centres have a protocol for this.</li>
                    <li><strong>Do not skip the exam.</strong> Attempting the exam under the wrong admit card details (with the invigilator&apos;s note) is better than an absent mark.</li>
                  </ol>
                </div>
              )
            },
            {
              id: "last-days-strategy",
              title: "The 10 Days Before the Exam — How to Make Them Count",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The period between admit card download and exam day is typically 10–15 days. Most students waste it in anxiety. Here&apos;s what to actually do:
                  </p>
                  <ol className="list-decimal list-inside space-y-3.5 pl-3">
                    <li><strong>Download and print the admit card on Day 1.</strong> Don&apos;t keep it pending.</li>
                    <li><strong>Do a physical reconnaissance of your exam centre</strong> if it&apos;s within your city. Know the route, travel time, and parking situation.</li>
                    <li><strong>Shift to full mock test mode.</strong> Take one full-length Prelims mock test every day or every alternate day. Focus on speed and accuracy, not new topics.</li>
                    <li><strong>Review each mock test the same day</strong> — identify where you lost marks (careless errors vs knowledge gaps) and fix one thing per day.</li>
                    <li><strong>Stop learning new topics</strong> in the final 7 days. Revise formulas, shortcuts, and error-prone areas only.</li>
                    <li><strong>Prepare your exam-day kit</strong> 2 days before: printed admit card, photo ID, photographs, stationery (if allowed), and comfortable clothing.</li>
                    <li><strong>Sleep at least 7 hours the night before.</strong> This is not optional — reaction time and accuracy degrade sharply with poor sleep.</li>
                  </ol>
                </div>
              )
            },
            {
              id: "exam-day-timeline",
              title: "IBPS PO 2026 Exam Day — Complete Timeline",
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Knowing the exact sequence of events on exam day reduces anxiety significantly.
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Time Before Start</th>
                          <th className="px-4 py-2.5">What Happens</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">45–60 minutes before</td>
                          <td className="px-4 py-3">Reach exam centre, complete security check</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">30 minutes before</td>
                          <td className="px-4 py-3">Document verification, biometric registration</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">15–20 minutes before</td>
                          <td className="px-4 py-3">Seated at computer terminal, on-screen instructions begin</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">5 minutes before</td>
                          <td className="px-4 py-3">Read instructions, set up for exam</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Exam start</td>
                          <td className="px-4 py-3">60-minute clock begins (Prelims)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">After last section ends</td>
                          <td className="px-4 py-3">Submit exam, collect rough sheet if applicable</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Exit</td>
                          <td className="px-4 py-3">Collect any centre-retained documents</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    The exam is entirely computer-based. There is no OMR sheet. You navigate between questions using on-screen arrows, and you can mark questions for review and return to them within the same section&apos;s time slot.
                  </p>
                </div>
              )
            },
            {
              id: "prepbanker-usage",
              title: "How to Use PrepBanker During the Admit Card Window",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The 10–15 days between receiving your admit card and sitting the exam are the highest-leverage prep window you have. PrepBanker is built to make every one of those days count.
                  </p>
                  <div className="space-y-3.5 pl-3 font-normal">
                    <p>
                      <strong>Start with a full-length timed mock.</strong> Go to <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">app.prepgrind.com/register</a> and attempt a complete IBPS PO Prelims mock — 100 questions, 60 minutes, exact exam pattern. This tells you where you stand right now.
                    </p>
                    <p>
                      <strong>Use the performance analytics dashboard.</strong> After each mock, PrepBanker breaks down your accuracy by topic and section, shows time spent per question, and gives you an All India Rank. This is the data you need to prioritise your final days — not a gut feeling about your weak areas.
                    </p>
                    <p>
                      <strong>Target sectional tests for weak spots.</strong> If your Reasoning accuracy drops below 70% in the mock, jump into PrepBanker&apos;s Reasoning sectional tests — specifically Puzzles and Seating Arrangements, which account for 15+ questions in Mains. Drill one topic per day.
                    </p>
                    <p>
                      <strong>Use DPPs for daily consistency.</strong> On days when you can&apos;t sit for a full 60-minute mock (travel, fatigue, errands), use PrepBanker&apos;s Daily Practice Problems — 15–20 focused questions that take under 30 minutes. Consistency matters more than occasional marathon sessions in the final stretch.
                    </p>
                    <p>
                      <strong>Track improvement across attempts.</strong> Your PrepBanker dashboard shows your score trajectory across all mock attempts. If you&apos;re improving even 2–3 marks per mock, you&apos;re on the right track. The goal is not a perfect score — it&apos;s to be above the cut-off with enough buffer for error.
                    </p>
                  </div>
                </div>
              )
            },
            {
              id: "also-explore",
              title: "Also Explore on PrepBanker",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    If you&apos;ve downloaded your admit card and are now focused on preparation, here&apos;s where to go next on PrepBanker:
                  </p>
                  <p>
                    Attempt the best place to start your final sprint is with a full <a href="https://prepbanker.com/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Free Mock Test — Prelims Pattern</a>. This full-length test mirrors the exact difficulty, question types, and time pressure of the October exam — use it to set your baseline score and identify which sections need the most attention in your remaining days.
                  </p>
             
                  <p>
                    The <a href="https://app.prepgrind.com/register" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quant Sectional Test Series</a> is built around DI sets from the last four years of actual papers. If Data Interpretation is your weak link, this is the fastest way to build both speed and accuracy before the exam.
                  </p>
                  <p>
                    Check the <a href="https://prepbanker.com/ibps-po/notification" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Notification 2026 page</a> for the full exam calendar, eligibility details, vacancy breakdown, and selection process — useful if you need to cross-check any details while reviewing your admit card.
                  </p>
                  <p>
                    Finally, the <a href="https://app.prepgrind.com/register" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO PYQ Sets (Previous Year Questions)</a> give you actual questions from the last five years of Prelims and Mains exams — the single most reliable signal of what IBPS is likely to ask again in 2026.
                  </p>
                </div>
              )
            }
          ],
          faqs: [
            {
              q: "When will the IBPS PO admit card 2026 be released?",
              a: "The IBPS PO Prelims admit card 2026 is expected in September 2026, approximately 10–15 days before the October exam. IBPS does not announce the exact date in advance — the hall ticket simply goes live on ibps.in. Check the official website daily from the first week of September. The Mains admit card is issued separately, only to Prelims qualifiers, in November 2026."
            },
            {
              q: "How do I download the IBPS PO 2026 hall ticket?",
              a: "Go to ibps.in, find the CRP PO/MT-XVI admit card link, and log in using your registration number and date of birth. Download the PDF and print two colour copies. The process takes under 5 minutes — the only common failure point is an unreadable captcha, which you can refresh. Save your login credentials before the admit card window opens."
            },
            {
              q: "What documents do I need to carry with the IBPS PO admit card?",
              a: "Carry the printed admit card (colour) and one original government-issued photo ID — Aadhaar, PAN, Voter ID, Passport, or Driving Licence. Most exam cycles also require 1–2 passport-size photographs identical to the one on your application. Check the specific instructions printed on your own admit card, as requirements can vary slightly by cycle."
            },
            {
              q: "My IBPS PO admit card has a wrong name or photo — what do I do?",
              a: "Contact the IBPS helpdesk on ibps.in immediately — don't wait for exam day. Carry your original supporting documents (application confirmation, photo ID) to the exam centre and inform the invigilator before the exam starts. Attempting the exam with a note from the invigilator is far better than skipping it. IBPS generally allows the exam while the correction is pending."
            },
            {
              q: "Is the IBPS PO Prelims admit card the same as the Mains admit card?",
              a: "No — they are two separate documents. IBPS issues the Prelims admit card first. After Prelims results, a fresh Mains admit card is issued only to shortlisted candidates. You cannot use the Prelims hall ticket for the Mains exam. Both are downloaded from ibps.in using the same credentials but through different links specific to each stage."
            },
            {
              q: "Can I carry my phone or smartwatch to the IBPS PO exam?",
              a: "No. Mobile phones, smartwatches, fitness trackers, Bluetooth earphones, and all electronic gadgets are strictly prohibited inside the exam hall. Leave your phone in your vehicle or at home — there is no facility to deposit it at most centres. A plain analog watch (without any smart features) is generally permitted."
            },
            {
              q: "What if I forget to print the admit card before the exam?",
              a: "Entry to the IBPS PO exam is not allowed without a physical printout. A digital copy on your phone is not accepted. Re-download the admit card from ibps.in and print it at the nearest print shop before your reporting time. If your exam is early morning, print it the night before — don't leave it to the last hour."
            },
            {
              q: "Can I attempt IBPS PO mock tests on PrepBanker for free during the admit card window?",
              a: "Yes. PrepBanker offers full-length IBPS PO Prelims and Mains mock tests for free at app.prepgrind.com. The 10–15 days between your admit card download and the actual exam are the most productive prep window — use them for intensive mock testing rather than passive revision. No payment is required to get started."
            },
            {
              q: "How many days before the exam does the IBPS PO admit card come out?",
              a: "Historically, IBPS releases the Prelims admit card 10–15 days before the exam. For the 2024 cycle (CRP XIV), the admit card was live approximately 12 days before Prelims. For 2023 (CRP XIII), it was about 10 days before. Set reminders to check ibps.in daily from 3 weeks before your expected exam date — this gives you enough buffer to resolve any download issues."
            },
            {
              q: "Which is better — checking for IBPS PO admit card updates on PrepBanker or Testbook?",
              a: "For admit card download, always go to the official source — ibps.in — directly. Third-party sites including PrepBanker, Testbook, and others can alert you when the link is live, but they cannot provide the actual admit card file. PrepBanker's IBPS PO hub keeps the direct ibps.in link updated and alerts students when it goes live. For mock tests and preparation during the admit card window, PrepBanker's analytics and test quality are a strong advantage over generic platforms."
            }
          ]
        };
      }

      return {
        title: `${exam.shortName} Admit Card 2026`,
        overview: `Download dates, download steps, and guidelines for the ${exam.shortName} Prelims & Mains examination call letters.`,
        ctaText: 'Start Preparing for Exam',
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
        subsections: [
          {
            id: 'admit-card-steps',
            title: 'How to Download Admit Card',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Admit cards are released 10-14 days before the exam date. Follow these steps to download your copy:
                </p>
                <ul className="text-xs sm:text-sm text-slate-655 space-y-2 pl-3 list-decimal list-inside">
                  <li>Visit the official portal ({isIbps ? 'ibps.in' : 'sbi.co.in/careers'}).</li>
                  <li>Click on the Recruitment link for Probationary Officers 2026.</li>
                  <li>Enter your Registration Number / Roll Number and Password / Date of Birth.</li>
                  <li>Fill in the verification Captcha and click Login.</li>
                  <li>Download and print at least two copies of the admit card.</li>
                </ul>
              </div>
            )
          },
          {
            id: 'exam-day-documents',
            title: 'Required Exam Day Documents',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Candidates must carry the following documents to the test center. Failing to produce them will result in disqualification:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-850 text-xs sm:text-sm mb-1">Mandatory Documents</h5>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Printed Admit Card (with passport photo affixed)</li>
                      <li>Original Photo ID Card (Aadhaar, PAN, Passport, etc.)</li>
                      <li>One clear photocopy of the Photo ID</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-1">Additional Items</h5>
                    <ul className="text-xs text-slate-605 space-y-1 list-disc list-inside">
                      <li>Two additional passport-sized photos</li>
                      <li>Simple blue or black ballpoint pen</li>
                      <li>Personal water bottle (transparent)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('admit') || f.q.toLowerCase().includes('exam') || f.q.toLowerCase().includes('document'))
      };
    }

    case 'vacancy': {
      if (examId === 'sbi-po') {
        return {
          title: `SBI PO Vacancy 2026: 1,500 Probationary Officer Posts`,
          overview: `The SBI PO Vacancy 2026 stands at 1,500 Probationary Officer posts, announced by the State Bank of India under Advertisement No. CRPD/PO/2026-27/09. Of these, 1,446 are regular vacancies and 54 are backlog vacancies, carried forward from previous recruitment cycles. This is nearly 3 times the vacancy count released in 2025 (541 posts), making 2026 one of the largest SBI PO hiring cycles in recent years. Vacancies are further divided across UR, SC, ST, OBC, and EWS categories, with a separate horizontal reservation of 61 posts for PwBD (Persons with Benchmark Disabilities) candidates.`,
          metaTitle: `SBI PO Vacancy 2026: 1500 Posts Breakup`,
          metaDescription: `SBI PO Vacancy 2026 stands at 1,500 posts — 1,446 regular + 54 backlog. Check category-wise, PwBD & state-wise vacancy breakup here at PrepBanker.`,
          ctaText: `Attempt Free SBI PO Mock Test`,
          ctaHref: `https://app.prepgrind.com/signup/sbi-po`,
          customSchemas: (
            <>
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
                        "name": "How many total vacancies are there in SBI PO 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "SBI PO Vacancy 2026 stands at 1,500 posts." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many regular and backlog vacancies are there in SBI PO 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Of the 1,500 total posts, 1,446 are regular vacancies and 54 are backlog vacancies." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the SBI PO vacancy for the UR category in 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The UR (Unreserved) category has 588 vacancies in SBI PO 2026." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the SBI PO vacancy for the OBC category in 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The OBC category has 390 vacancies in SBI PO 2026, all regular." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many PwBD vacancies are there in SBI PO 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "There are 61 PwBD vacancies in total: 15 for VI, 16 for HI, 14 for LD, and 16 for D&E categories, reserved horizontally." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is the SBI PO 2026 vacancy higher than 2025?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, SBI PO Vacancy 2026 of 1,500 posts is nearly 3 times higher than SBI PO Vacancy 2025 of 541 posts." }
                      },
                      {
                        "@type": "Question",
                        "name": "Are SBI PO 2026 vacancy numbers final?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, vacancy numbers are provisional and may vary based on the Bank's actual requirement at the time of final allotment." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the SBI PO SC category vacancy in 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The SC category has 234 total vacancies: 216 regular and 18 backlog." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the SBI PO ST category vacancy in 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The ST category has 144 total vacancies: 108 regular and 36 backlog." }
                      },
                      {
                        "@type": "Question",
                        "name": "Does PwBD reservation apply on top of category vacancies?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, PwBD reservation is horizontal, meaning PwBD vacancies are counted within the respective social category rather than added on top of it." }
                      }
                    ]
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Vacancy", "item": "https://prepbanker.com/sbi-po/vacancy" }
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
                    "headline": "SBI PO Vacancy 2026: 1,500 Probationary Officer Posts",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/vacancy"
                  })
                }}
              />
              {/* Dataset Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Dataset",
                    "name": "SBI PO Vacancy 2026 Category-Wise Breakup",
                    "description": "Category-wise and PwBD-wise vacancy breakup for SBI Probationary Officer Recruitment 2026 (Advt No. CRPD/PO/2026-27/09).",
                    "creator": { "@type": "Organization", "name": "PrepBanker" },
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "variableMeasured": ["Total Vacancies", "Regular Vacancies", "Backlog Vacancies", "PwBD Vacancies"]
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: 'content-override',
              title: '',
              content: <></>
            }
          ],
          faqs: [
            {
              q: "How many total vacancies are there in SBI PO 2026?",
              a: "SBI PO Vacancy 2026 stands at 1,500 posts."
            }
          ]
        };
      }

      if (examId === 'ibps-po') {
        return {
          title: "IBPS PO Vacancy 2026 — Total Posts, Bank-Wise & State-Wise Breakdown",
          overview: "The IBPS PO 2026 vacancy count will be officially confirmed in the CRP PO/MT-XVI notification expected in July 2026 on ibps.in. Based on the trend of the last five cycles, total vacancies are projected at 4,500–5,500 posts across 11 participating public sector banks. Punjab National Bank and Bank of Baroda have historically contributed the most seats. Category-wise reservation follows the GoI formula: General 40%, OBC 27%, SC 15%, ST 7.5%, EWS 10%.",
          metaTitle: "IBPS PO Vacancy — Total Posts, Bank-Wise & State-Wise",
          metaDescription: "IBPS PO vacancy 2026 details — total posts, bank-wise breakdown, state-wise distribution, category-wise seats, and free mock tests to start your prep today.",
          ctaText: "Start Free IBPS PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/ibps-po",
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
                        "name": "IBPS PO Vacancy 2026",
                        "item": "https://prepbanker.com/ibps-po/vacancy"
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
                    "name": "IBPS PO Vacancy 2026 — Total Posts, Bank-Wise & State-Wise Breakdown",
                    "url": "https://prepbanker.com/ibps-po/vacancy",
                    "description": "Complete IBPS PO vacancy 2026 details — total posts across 11 banks, bank-wise breakdown, state-wise distribution, category-wise reservation, and year-on-year vacancy trends.",
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
              {/* Article Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "IBPS PO Vacancy 2026 — Total Posts, Bank-Wise, State-Wise & Category-Wise Breakdown",
                    "url": "https://prepbanker.com/ibps-po/vacancy",
                    "datePublished": "2026-05-01",
                    "dateModified": "2026-06-12",
                    "author": {
                      "@type": "Organization",
                      "name": "PrepBanker Editorial Team",
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
                    "description": "Detailed IBPS PO vacancy 2026 guide — total vacancies, bank-wise and state-wise breakdown, category reservation, year-on-year trends, and what vacancy numbers mean for your preparation strategy.",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://prepbanker.com/ibps-po/vacancy"
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
                        "name": "How many vacancies are there in IBPS PO 2026?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The exact IBPS PO 2026 vacancy count will be confirmed in the official CRP PO/MT-XVI notification expected in July 2026. Based on trends, the total is expected to be in the range of 4,500–5,500 posts across 11 participating public sector banks. IBPS PO 2025 (CRP XV) had approximately 4,800 vacancies."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Which bank has the most vacancies in IBPS PO?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Punjab National Bank and Bank of Baroda consistently contribute the highest number of vacancies in IBPS PO. In recent cycles, PNB and Bank of Baroda each advertised 600–900 posts, making them the top two contributors. Union Bank of India and Canara Bank also routinely feature among the top four."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the category-wise vacancy breakdown in IBPS PO?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO follows the Government of India reservation policy: General (UR) 40%, OBC 27%, SC 15%, ST 7.5%, and EWS 10%. Within these, a horizontal reservation of 4% applies for PwD candidates across all categories. Exact numbers are published bank-wise in the official notification."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is IBPS PO vacancy increasing or decreasing over the years?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "IBPS PO vacancies peaked at 8,010 in 2019, then dropped sharply after PSB mergers (10 banks consolidated into 4). Since 2021, vacancies have stabilised at 3,500–5,000 per year. A gradual uptick is visible as merged banks rebuild headcount — 2025 had ~4,800 vs 3,517 in 2023."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Does vacancy number affect how hard it is to clear IBPS PO?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes, directly. Fewer vacancies mean the cut-off rises because the same number of serious candidates compete for fewer seats. In 2023 when vacancies dropped to 3,517, General category Prelims cut-offs rose to 62+. In 2022 with 6,432 vacancies, cut-offs were lower at 52–55. More vacancies = more breathing room."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I choose which bank I want to join in IBPS PO?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "You can indicate preferences, but final allotment depends on your merit rank, vacancies available in preferred banks, and your home state. IBPS uses a provisional allotment process — higher merit rank gives you better bank and state options. You cannot guarantee a specific bank, but top rankers get first pick."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Which state has the most IBPS PO vacancies?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "States with large populations and many bank branches — Uttar Pradesh, Maharashtra, Rajasthan, Tamil Nadu, and West Bengal — typically get the highest absolute vacancy numbers. However, competition is also heaviest in these states. Smaller states like Uttarakhand or Himachal Pradesh have fewer vacancies but proportionally lower competition."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Do IBPS PO vacancies include backlog reservations?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. IBPS PO notifications often include backlog vacancies for SC, ST, and OBC categories from previous unfilled cycles. These are added to the current cycle's vacancies and can meaningfully increase total posts for reserved categories. The exact backlog count is announced in the official notification each year."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How does IBPS PO vacancy affect my preparation strategy?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "When vacancies are lower (under 4,000), aim for a buffer of 8–10 marks above last year's cut-off — the margin for error shrinks. When vacancies are higher (5,000+), focus on qualifying all sections cleanly rather than chasing a very high total. In either case, mock test analytics are the fastest way to calibrate your target score."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Can I attempt free IBPS PO mock tests on PrepBanker?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes. PrepBanker offers free full-length IBPS PO Prelims and Mains mock tests at app.prepgrind.com. After each test, you get section-wise accuracy, time analysis, topic-wise breakdown, and All India Rank — all without any payment. Registering takes under 2 minutes."
                        }
                      }
                    ]
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
                    "name": "IBPS PO 2026 Mock Test Series — Prelims & Mains",
                    "description": "Full-length Prelims and Mains mock tests, sectional tests, and topic-wise quizzes for IBPS PO 2026 preparation. Includes All India Rank, performance analytics, and PYQ sets.",
                    "provider": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "url": "https://prepbanker.com"
                    },
                    "url": "https://prepbanker.com/ibps-po",
                    "educationalLevel": "Undergraduate",
                    "hasCourseInstance": {
                      "@type": "CourseInstance",
                      "courseMode": "online",
                      "inLanguage": "en-IN"
                    }
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "quick-snapshot",
              title: "IBPS PO 2026 — Vacancy Quick Snapshot",
              content: (
                <div className="space-y-4">
                  <HighlightBox type="info" title="Quick Summary">
                    <ul className="text-xs sm:text-sm text-slate-655 space-y-2.5 my-2 font-normal">
                      <li><strong>Exam Name:</strong> IBPS CRP PO/MT-XVI (Probationary Officers / Management Trainees)</li>
                      <li><strong>Conducting Body:</strong> Institute of Banking Personnel Selection (IBPS)</li>
                      <li><strong>Participating Banks:</strong> 11 public sector banks</li>
                      <li><strong>Expected Total Vacancies:</strong> 4,500–5,500 posts (projected; official figure in July 2026 notification)</li>
                      <li><strong>Last Cycle Vacancy (CRP XV / 2025):</strong> ~4,800 posts</li>
                      <li><strong>Highest Single-Year Vacancy:</strong> 8,010 posts (CRP IX / 2019)</li>
                      <li><strong>Reservation Policy:</strong> General 40% | OBC 27% | SC 15% | ST 7.5% | EWS 10%</li>
                      <li><strong>PwD Horizontal Reservation:</strong> 4% across all categories</li>
                      <li><strong>Notification Expected:</strong> July 2026</li>
                      <li><strong>Official Website:</strong> <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">ibps.in</a></li>
                    </ul>
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "expected-vacancy",
              title: "How Many Vacancies Are There in IBPS PO 2026?",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The official vacancy number for IBPS PO 2026 will be published in the CRP PO/MT-XVI notification on ibps.in. Until then, the most reliable estimate comes from the five-year trend.
                  </p>
                  <p>
                    Here is the year-on-year vacancy data:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Exam Cycle</th>
                          <th className="px-4 py-2.5">Year</th>
                          <th className="px-4 py-2.5">Total Vacancies</th>
                          <th className="px-4 py-2.5">Approx. Applicants</th>
                          <th className="px-4 py-2.5">Competition Ratio</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XVI</td>
                          <td className="px-4 py-3">2026</td>
                          <td className="px-4 py-3">~4,500–5,500 (projected)</td>
                          <td className="px-4 py-3">~8–9 lakh</td>
                          <td className="px-4 py-3">~170–200 per seat</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XV</td>
                          <td className="px-4 py-3">2025</td>
                          <td className="px-4 py-3">~4,800</td>
                          <td className="px-4 py-3">~8 lakh</td>
                          <td className="px-4 py-3">~167 per seat</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XIV</td>
                          <td className="px-4 py-3">2024</td>
                          <td className="px-4 py-3">4,455</td>
                          <td className="px-4 py-3">~7.5 lakh</td>
                          <td className="px-4 py-3">~168 per seat</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XIII</td>
                          <td className="px-4 py-3">2023</td>
                          <td className="px-4 py-3">3,517</td>
                          <td className="px-4 py-3">~8.2 lakh</td>
                          <td className="px-4 py-3">~233 per seat</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XII</td>
                          <td className="px-4 py-3">2022</td>
                          <td className="px-4 py-3">6,432</td>
                          <td className="px-4 py-3">~10 lakh</td>
                          <td className="px-4 py-3">~155 per seat</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-XI</td>
                          <td className="px-4 py-3">2021</td>
                          <td className="px-4 py-3">4,135</td>
                          <td className="px-4 py-3">~12.5 lakh</td>
                          <td className="px-4 py-3">~302 per seat</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">CRP PO/MT-IX</td>
                          <td className="px-4 py-3">2019</td>
                          <td className="px-4 py-3">8,010</td>
                          <td className="px-4 py-3">~20 lakh</td>
                          <td className="px-4 py-3">~250 per seat</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Two things stand out from this data. First, raw vacancy numbers don&apos;t tell the full story — the competition ratio (applicants per seat) matters more. 2023 had fewer vacancies but also fewer serious candidates appearing. Second, vacancies have stabilised after the PSB consolidation period (2019–2021) when 10 public sector banks were merged into 4. The merged banks are now rebuilding headcount, which is why vacancies have risen from 3,517 in 2023 to ~4,800 in 2025.
                  </p>
                  <HighlightBox type="info" title="Pro Tip">
                    Don&apos;t decide whether to &quot;seriously prepare&quot; based on vacancy numbers alone. The real competition in any IBPS PO cycle is among students who score above 55 in Prelims — that pool is roughly 2–3 lakh, regardless of whether 4,000 or 7,000 seats are on offer. Your target should always be the top 1–1.5% of serious aspirants, not the top X% of all registrations.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "bank-wise",
              title: "IBPS PO 2026 Bank-Wise Vacancy Breakdown",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    IBPS distributes vacancies across 11 participating public sector banks. The exact bank-wise split for 2026 will be in the official notification, but the distribution pattern has been consistent over the years.
                  </p>
                  <p>
                    Here is the indicative bank-wise vacancy range based on CRP XIV (2024) and CRP XV (2025) data:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Bank</th>
                          <th className="px-4 py-2.5">CRP XIV (2024)</th>
                          <th className="px-4 py-2.5">CRP XV (2025, est.)</th>
                          <th className="px-4 py-2.5">Expected Range 2026</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Punjab National Bank</td>
                          <td className="px-4 py-3">~900</td>
                          <td className="px-4 py-3">~950</td>
                          <td className="px-4 py-3">850–1,000</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Bank of Baroda</td>
                          <td className="px-4 py-3">~700</td>
                          <td className="px-4 py-3">~750</td>
                          <td className="px-4 py-3">700–900</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Union Bank of India</td>
                          <td className="px-4 py-3">~600</td>
                          <td className="px-4 py-3">~620</td>
                          <td className="px-4 py-3">600–750</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Canara Bank</td>
                          <td className="px-4 py-3">~500</td>
                          <td className="px-4 py-3">~520</td>
                          <td className="px-4 py-3">500–650</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Bank of India</td>
                          <td className="px-4 py-3">~400</td>
                          <td className="px-4 py-3">~420</td>
                          <td className="px-4 py-3">400–500</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Indian Bank</td>
                          <td className="px-4 py-3">~350</td>
                          <td className="px-4 py-3">~360</td>
                          <td className="px-4 py-3">350–450</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Bank of Maharashtra</td>
                          <td className="px-4 py-3">~300</td>
                          <td className="px-4 py-3">~310</td>
                          <td className="px-4 py-3">280–380</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Central Bank of India</td>
                          <td className="px-4 py-3">~280</td>
                          <td className="px-4 py-3">~290</td>
                          <td className="px-4 py-3">270–370</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Indian Overseas Bank</td>
                          <td className="px-4 py-3">~200</td>
                          <td className="px-4 py-3">~210</td>
                          <td className="px-4 py-3">200–280</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">UCO Bank</td>
                          <td className="px-4 py-3">~150</td>
                          <td className="px-4 py-3">~165</td>
                          <td className="px-4 py-3">150–220</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Punjab &amp; Sind Bank</td>
                          <td className="px-4 py-3">~75</td>
                          <td className="px-4 py-3">~85</td>
                          <td className="px-4 py-3">75–120</td>
                        </tr>
                        <tr className="bg-slate-900 text-white font-bold">
                          <td className="px-4 py-3 font-semibold">Total</td>
                          <td className="px-4 py-3">4,455</td>
                          <td className="px-4 py-3">~4,800</td>
                          <td className="px-4 py-3">~4,500–5,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Punjab National Bank is consistently the largest recruiter due to its extensive branch network (over 10,000 branches across India as of 2025). Bank of Baroda, after its merger with Dena Bank and Vijaya Bank in 2019, significantly expanded its hiring. Punjab {"&"} Sind Bank has the smallest footprint and therefore contributes the fewest posts.
                  </p>
                  <HighlightBox type="info" title="Pro Tip">
                    If your home state preference or career goal involves a specific bank, check that bank&apos;s vacancy numbers carefully. A student aiming for Bank of Maharashtra (which has strong presence in Maharashtra, Goa, and parts of Karnataka) but scoring in the middle of the merit list may not get their preferred posting. The higher your rank, the more control you have over bank and state allocation.
                  </HighlightBox>
                </div>
              )
            },
            {
              id: "category-reservation",
              title: "Category-Wise IBPS PO 2026 Vacancy Reservation",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    All 11 participating banks follow the Government of India&apos;s reservation policy. Here is how a hypothetical total of 5,000 vacancies breaks down by category:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Category</th>
                          <th className="px-4 py-2.5">Reservation %</th>
                          <th className="px-4 py-2.5">Approximate Posts (of 5,000)</th>
                          <th className="px-4 py-2.5">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">General / Unreserved (UR)</td>
                          <td className="px-4 py-3">40%</td>
                          <td className="px-4 py-3">~2,000</td>
                          <td className="px-4 py-3">Open to all candidates</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Other Backward Class (OBC)</td>
                          <td className="px-4 py-3">27%</td>
                          <td className="px-4 py-3">~1,350</td>
                          <td className="px-4 py-3">Non-Creamy Layer only</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Scheduled Caste (SC)</td>
                          <td className="px-4 py-3">15%</td>
                          <td className="px-4 py-3">~750</td>
                          <td className="px-4 py-3">Certificate from competent authority</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Scheduled Tribe (ST)</td>
                          <td className="px-4 py-3">7.5%</td>
                          <td className="px-4 py-3">~375</td>
                          <td className="px-4 py-3">Certificate from competent authority</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Economically Weaker Section (EWS)</td>
                          <td className="px-4 py-3">10%</td>
                          <td className="px-4 py-3">~500</td>
                          <td className="px-4 py-3">Income {"&"} asset certificate required</td>
                        </tr>
                        <tr className="bg-slate-900 text-white font-bold">
                          <td className="px-4 py-3">Total</td>
                          <td className="px-4 py-3">100%</td>
                          <td className="px-4 py-3">~5,000</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Additionally, <strong>4% horizontal reservation</strong> applies for Persons with Disabilities (PwD), spread across all categories. Specific PwD sub-categories (locomotor, visual, hearing, intellectual) are defined in the official notification.
                  </p>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-4 mb-2">What &quot;Backlog Vacancies&quot; Mean</h4>
                  <p>
                    If a reserved category vacancy was advertised in a previous IBPS PO cycle but went unfilled (because no eligible candidate in that category met the cut-off), it carries forward as a &quot;backlog&quot; vacancy. These appear in the current cycle&apos;s notification as additional posts for that category. In high-backlog years, SC and ST category candidates can find meaningful extra seats.
                  </p>
                </div>
              )
            },
            {
              id: "state-wise",
              title: "IBPS PO 2026 State-Wise Vacancy Distribution",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    IBPS allocates vacancies bank-by-bank across states and union territories. Each bank distributes its total posts based on branch presence, regional staffing needs, and workforce demographics. The official state-wise breakdown comes with the notification.
                  </p>
                  <p>
                    Historically, states with the highest vacancy counts:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">State / UT</th>
                          <th className="px-4 py-2.5">Reason for High Vacancy</th>
                          <th className="px-4 py-2.5">Banks with Strong Presence</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Uttar Pradesh</td>
                          <td className="px-4 py-3">Largest state by population; dense rural branch network</td>
                          <td className="px-4 py-3">PNB, Bank of Baroda, Union Bank</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Maharashtra</td>
                          <td className="px-4 py-3">Large urban banking market; Mumbai as financial hub</td>
                          <td className="px-4 py-3">Bank of Maharashtra, Union Bank, Bank of Baroda</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">Rajasthan</td>
                          <td className="px-4 py-3">Large rural branch footprint; strong PSB presence</td>
                          <td className="px-4 py-3">Bank of Baroda, Central Bank, UCO Bank</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Tamil Nadu</td>
                          <td className="px-4 py-3">High banking density; major IOB and Indian Bank base</td>
                          <td className="px-4 py-3">Indian Overseas Bank, Indian Bank, Canara Bank</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">West Bengal</td>
                          <td className="px-4 py-3">Dense rural banking; UCO Bank headquarters</td>
                          <td className="px-4 py-3">UCO Bank, Central Bank, PNB</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">Karnataka</td>
                          <td className="px-4 py-3">Strong Canara Bank presence; growing urban market</td>
                          <td className="px-4 py-3">Canara Bank, Union Bank, Bank of India</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Students often ask whether they should attempt the exam targeting a specific state. The honest answer: your state preference is honoured only to the extent that vacancies exist there in your category and your rank is high enough to get that posting. Securing a top-300 rank gives you genuine choice. Below that, you take what the allotment gives you.
                  </p>
                </div>
              )
            },
            {
              id: "why-dropped",
              title: "Why Vacancy Numbers Dropped After 2019 — and What's Happening Now",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    The sharp decline in IBPS PO vacancies from 8,010 in 2019 to 4,135 in 2021 confused many students. Here&apos;s the explanation:
                  </p>
                  <p>
                    Between 2019 and 2020, the Government of India executed a major consolidation of public sector banks:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-3">
                    <li><strong>Oriental Bank of Commerce + United Bank → Punjab National Bank</strong></li>
                    <li><strong>Syndicate Bank → Canara Bank</strong></li>
                    <li><strong>Allahabad Bank → Indian Bank</strong></li>
                    <li><strong>Andhra Bank + Corporation Bank → Union Bank of India</strong></li>
                    <li><strong>Dena Bank + Vijaya Bank → Bank of Baroda</strong> (2019)</li>
                  </ul>
                  <p>
                    This reduced the number of participating IBPS banks from 20 to 11 and eliminated massive overlap in staffing needs. The merged entities had excess staff at the point of merger. Naturally, hiring slowed.
                  </p>
                  <p>
                    From 2022 onwards, the merged banks began expanding again. Branch networks grew, digital banking required new officers, and attrition created fresh demand. The vacancy trajectory since 2022 has been upward: 6,432 → 4,455 → ~4,800 → projected 4,500–5,500 for 2026. The 2022 spike was temporary (pending retirements cleared in bulk); the 2023 dip was a recalibration. The trend from 2024 onwards points to a stable 4,500–5,500 range annually.
                  </p>
                </div>
              )
            },
            {
              id: "prep-strategy",
              title: "How Vacancy Numbers Should Shape Your Preparation Strategy",
              content: (
                <div className="space-y-6 text-slate-655 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Vacancy numbers affect two things directly: your target score and your time allocation.
                  </p>
                  <div>
                    <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-1">When Vacancies Are Low (Under 4,000)</h4>
                    <p>
                      Cut-offs rise because fewer candidates qualify for interview proportionally. In 2023, the General category Mains cut-off touched 47–50 out of 200 — a seemingly low number, but one that requires near-perfect accuracy given negative marking. In low-vacancy years:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-3 text-xs text-slate-500">
                      <li>Set your Prelims target at 70+ (not just 65)</li>
                      <li>Don&apos;t rely on weak sections dragging you across the line</li>
                      <li>Spend extra time on GA — it&apos;s the differentiator at Mains</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-1">When Vacancies Are High (Above 5,000)</h4>
                    <p>
                      The cut-off drops, but the total number of shortlisted candidates for interview also increases — meaning Mains becomes more competitive relatively. Focus shifts to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-3 text-xs text-slate-500">
                      <li>Clean section-wise qualification (don&apos;t leave any section below cut-off)</li>
                      <li>Interview preparation starts earlier (more candidates clear Mains)</li>
                      <li>GA consistency matters more than ever for Mains</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">The Preparation Constant</h4>
                    <p>
                      Regardless of vacancy numbers, the following preparation approach works every year:
                    </p>
                    <ol className="list-decimal list-inside space-y-2.5 pl-3">
                      <li><strong>Assess your baseline</strong> — take a full-length Prelims mock before study. Your score tells you how far you are from the cut-off, not how much you &quot;know.&quot;</li>
                      <li><strong>Set a section-wise target</strong> — work backwards from the expected cut-off. If the target is 65 total, plan 22/30 in English, 22/35 in Reasoning, 21/35 in Quant.</li>
                      <li><strong>Mock test every week</strong> — at least 2 full Prelims mocks per week during peak prep. Track accuracy, not just score.</li>
                      <li><strong>Analyse before the next mock</strong> — identify your 3 highest-loss topics per section after each mock and drill those specifically.</li>
                      <li><strong>Attempt Mains-level tests from Month 2</strong> — even if your Prelims date is 3 months away. DI sets and complex puzzles take weeks to get comfortable with.</li>
                      <li><strong>Maintain GA from Day 1</strong> — 30 minutes of current affairs daily. This is the section most students leave for last and then panic about.</li>
                      <li><strong>Build the descriptive writing habit</strong> — write one essay and one letter every week from Month 2. You&apos;ll be grateful for this in the final two weeks before Mains.</li>
                    </ol>
                  </div>
                </div>
              )
            },
            {
              id: "prepbanker-usage",
              title: "How to Use PrepBanker to Prepare for IBPS PO 2026",
              content: (
                <div className="space-y-4 text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    PrepBanker gives you the tools to translate vacancy data into a specific, measurable preparation plan — not just awareness of how many seats exist.
                  </p>
                  <ol className="list-decimal list-inside space-y-3.5 pl-3 font-normal">
                    <li>
                      <strong>Step 1 — Register and take a diagnostic mock.</strong> Go to <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">app.prepgrind.com/register</a> and attempt a free full-length IBPS PO Prelims mock. This is your baseline. It shows you exactly where you stand against the expected cut-off for 2026.
                    </li>
                    <li>
                      <strong>Step 2 — Set your personalised target.</strong> Based on the vacancy projection (4,500–5,500 posts, General cut-off likely 63–68 in Prelims), work out what score you need in each section. PrepBanker&apos;s analytics dashboard shows your section-wise gap from the target score, so you know exactly where to invest time.
                    </li>
                    <li>
                      <strong>Step 3 — Drill weak sections with targeted tests.</strong> PrepBanker&apos;s sectional tests cover every topic in Quant, Reasoning, and English with difficulty levels calibrated to actual IBPS PO papers. If DI sets are dropping your Quant score, the Quant sectional pack has 20+ DI-focused sets — each with detailed video solutions.
                    </li>
                    <li>
                      <strong>Step 4 — Use DPPs for daily discipline.</strong> Daily Practice Problems take 20–30 minutes and cover 15–20 questions from a focused topic. They&apos;re short enough to fit into any schedule and consistent enough to build the speed and accuracy that cut-offs demand.
                    </li>
                    <li>
                      <strong>Step 5 — Track your progress over time.</strong> PrepBanker&apos;s dashboard shows your mock test score trajectory, accuracy by topic, and time spent per question across all attempts. When vacancies are tight, this data is what tells you whether your prep trajectory will get you above cut-off — with enough time to correct course if it won&apos;t.
                    </li>
                  </ol>
                </div>
              )
            },
            {
              id: "also-explore",
              title: "Also Explore on PrepBanker",
              content: (
                <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p>
                    Understanding the vacancy picture is the first step — preparation is what converts that awareness into a seat.
                  </p>
                  <p>
                    Start your IBPS PO 2026 prep with a free <a href="https://prepbanker.com/ibps-po/mock-test" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Prelims Mock Test</a>. This test is calibrated to the difficulty and pattern of recent IBPS PO papers — it&apos;s the fastest way to benchmark your current level against the projected 2026 cut-off.
                  </p>
                  <p>
                    For complete details on the exam calendar, eligibility, and selection process, visit the <a href="https://prepbanker.com/ibps-po/notification" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Notification 2026 page</a> — it covers everything from application dates to final merit list publication.
                  </p>
                  <p>
                    If you want to know when and how to download your hall ticket, the <a href="https://prepbanker.com/ibps-po/admit-card" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Admit Card 2026 page</a> walks through the download process, required documents, and what to do if your admit card has errors.
                  </p>
                  <p>
                    Weak in Quantitative Aptitude? The <a href="https://prepbanker.com/ibps-po/quant-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Quant Sectional Test Series</a> is built around DI sets and arithmetic topics from the last four years of actual Mains papers — the exact questions that push most aspirants below cut-off.
                  </p>
                  <p>
                    Finally, the <a href="https://app.prepgrind.com/register" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Previous Year Question Sets</a> give you five years of Prelims and Mains papers in timed test format — the most direct signal of what IBPS is likely to repeat or vary in 2026.
                  </p>
                </div>
              )
            }
          ],
          faqs: [
            {
              q: "How many vacancies are there in IBPS PO 2026?",
              a: "The official IBPS PO 2026 vacancy count will be published in the CRP PO/MT-XVI notification expected in July 2026 on ibps.in. Based on the five-year trend, total vacancies are projected at 4,500–5,500 posts across 11 participating banks. CRP XV (2025) had approximately 4,800 posts. Bookmark this page for the official update when the notification is released."
            },
            {
              q: "Which bank has the most vacancies in IBPS PO 2026?",
              a: "Punjab National Bank and Bank of Baroda consistently contribute the highest vacancy numbers in IBPS PO. In CRP XIV (2024), PNB advertised approximately 900 posts and Bank of Baroda around 700 — together accounting for over 35% of total vacancies. Union Bank of India and Canara Bank are typically the third and fourth largest contributors."
            },
            {
              q: "Is IBPS PO vacancy increasing or decreasing in 2026?",
              a: "After the sharp post-merger drop from 8,010 (2019) to 3,517 (2023), vacancies have been recovering. CRP XIV (2024) had 4,455 posts, and CRP XV (2025) had approximately 4,800. For 2026, the trend points to 4,500–5,500 posts — a stable or modest increase. The PSB consolidation phase is over, and merged banks are rebuilding their officer cadre."
            },
            {
              q: "What is the category-wise vacancy breakdown in IBPS PO 2026?",
              a: "IBPS PO follows GoI reservation norms: General (UR) 40%, OBC 27%, SC 15%, ST 7.5%, and EWS 10%. On a base of 5,000 posts, this translates to roughly 2,000 General, 1,350 OBC, 750 SC, 375 ST, and 500 EWS seats. A 4% horizontal PwD reservation cuts across all categories. Backlog vacancies for SC/ST are included in the official notification."
            },
            {
              q: "Which state has the most IBPS PO vacancies?",
              a: "Uttar Pradesh, Maharashtra, Rajasthan, Tamil Nadu, and West Bengal consistently receive the highest vacancy counts due to large population bases and dense branch networks. However, high absolute vacancies in large states also mean higher absolute competition. Smaller states like Uttarakhand or Himachal Pradesh have fewer seats but proportionally fewer strong candidates competing for them."
            },
            {
              q: "Can I choose my preferred bank in IBPS PO?",
              a: "You can state bank and state preferences, but final allotment depends on your merit rank and vacancy availability. IBPS uses a computer-generated provisional allotment — candidates with higher ranks get first access to preferred bank and state combinations. A rank in the top 10% of qualifiers gives you realistic bank choice. Below that, you take what remains after higher-ranked candidates are allotted."
            },
            {
              q: "Does low vacancy in IBPS PO mean lower chances of selection?",
              a: "Not necessarily proportionally — but it does raise the cut-off. When vacancies dropped to 3,517 in 2023, the General Prelims cut-off rose to 62+. With higher vacancies (like the 6,432 in 2022), cut-offs fell to 52–55. Fewer seats mean less margin for error in each section. The safest strategy regardless of vacancy count: aim for a 7–10 mark buffer above last year's cut-off."
            },
            {
              q: "Are IBPS PO vacancies advertised in all states?",
              a: "IBPS PO vacancies are distributed across most states and union territories, but not all banks have branches everywhere. For example, Bank of Maharashtra has limited presence outside western and southern India, so its vacancies are concentrated in Maharashtra, Goa, and Karnataka. Punjab &amp; Sind Bank's vacancies are heavily weighted towards Punjab and northern states. The official notification lists vacancies by bank and state."
            },
            {
              q: "Do backlog vacancies increase my chances in IBPS PO?",
              a: "Yes, if you belong to a reserved category with pending backlog. IBPS adds unfilled vacancies from previous cycles to the current notification — this increases total available seats for affected categories. SC and ST candidates benefit most from backlog additions. The official notification breaks down current vs. backlog vacancy numbers per bank and category."
            },
            {
              q: "Can I attempt free IBPS PO mock tests on PrepBanker while waiting for the notification?",
              a: "Yes. PrepBanker offers free full-length IBPS PO Prelims and Mains mock tests at app.prepgrind.com/register — no payment required. Starting mock tests now (even before the notification) is the best use of time. Prelims pattern and difficulty are predictable — use these months to build speed and accuracy before the official exam window opens."
            }
          ]
        };
      } else {
        return {
          title: `${exam.shortName} Vacancy 2026`,
          overview: `Category-wise vacancy distribution, reservation details, and participating banks list for ${exam.shortName} 2026.`,
          ctaText: 'Check Eligibility & Apply',
          ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
          subsections: [
            {
              id: 'vacancy-table',
              title: 'Expected Category-wise Vacancies',
              content: (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    Below is the expected distribution of vacancies for the 2026 recruitment drive:
                  </p>
                  <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                    <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="px-4 py-2.5">Category</th>
                          <th className="px-4 py-2.5">Estimated Vacancies</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">General (UR)</td>
                          <td className="px-4 py-3">{isIbps ? '1,400+' : '810+'}</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">OBC (NCL)</td>
                          <td className="px-4 py-3">{isIbps ? '950+' : '540+'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">SC</td>
                          <td className="px-4 py-3">{isIbps ? '520+' : '300+'}</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                          <td className="px-4 py-3 font-semibold text-slate-800">ST</td>
                          <td className="px-4 py-3">{isIbps ? '260+' : '150+'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-slate-800">EWS</td>
                          <td className="px-4 py-3">{isIbps ? '350+' : '200+'}</td>
                        </tr>
                        <tr className="bg-slate-900 text-white font-bold">
                          <td className="px-4 py-3">Total expected</td>
                          <td className="px-4 py-3">{isIbps ? '3,500+ vacancies' : '2,000+ vacancies'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            },
            {
              id: 'participating-institutions',
              title: isIbps ? 'Participating Banks' : 'Posting Circles',
              content: (
                <div className="space-y-4">
                  {isIbps ? (
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      A total of 11 nationalized public sector banks participate in the recruitment. The banks include Punjab National Bank, Canara Bank, Union Bank of India, Bank of India, Bank of Baroda, and Indian Bank.
                    </p>
                  ) : (
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Selected officers are posted across SBI circles in India. Initial postings usually start with rural/semi-urban branches for branch operations exposure during the 2-year probation period.
                    </p>
                  )}
                </div>
              )
            }
          ],
          faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('vacancy') || f.q.toLowerCase().includes('vacancies') || f.q.toLowerCase().includes('where'))
        };
      }
    }

    case 'selection-process': {
      if (examId === 'sbi-po') {
        return {
          title: "SBI PO Selection Process 2026: Prelims to Final Merit List",
          overview: "The SBI PO Selection Process 2026 consists of three stages: Preliminary Examination (qualifying only), Main Examination (objective + descriptive, merit-counting), and Phase III covering a Psychometric Test, Group Exercise, and Interview. Approximately 10 times the number of vacancies in each category are shortlisted from Prelims to Mains, and roughly 3 times the number of vacancies are shortlisted from Mains to the Interview stage. The final merit list is based on normalized Mains and Phase III scores combined at a 75:25 ratio — Prelims marks are not counted at all.",
          metaTitle: "SBI PO Selection Process 2026: Stages & Rules",
          metaDescription: "SBI PO Selection Process 2026 — Prelims, Mains, Psychometric Test, Group Exercise & Interview. Shortlisting ratios, final merit & documents needed.",
          ctaText: "Attempt Free SBI PO Mock Test",
          ctaHref: "https://app.prepgrind.com/signup/sbi-po",
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
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prepbanker.com/" },
                      { "@type": "ListItem", "position": 2, "name": "SBI PO", "item": "https://prepbanker.com/sbi-po" },
                      { "@type": "ListItem", "position": 3, "name": "Selection Process", "item": "https://prepbanker.com/sbi-po/selection-process" }
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
                    "headline": "SBI PO Selection Process 2026: Prelims to Final Merit List",
                    "datePublished": "2026-06-18",
                    "dateModified": "2026-07-25",
                    "author": { "@type": "Organization", "name": "PrepBanker" },
                    "publisher": {
                      "@type": "Organization",
                      "name": "PrepBanker",
                      "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
                    },
                    "mainEntityOfPage": "https://prepbanker.com/sbi-po/selection-process"
                  })
                }}
              />
              {/* HowTo Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "SBI PO Selection Process 2026: Step-by-Step",
                    "step": [
                      { "@type": "HowToStep", "text": "Submit the online application with the applicable fee." },
                      { "@type": "HowToStep", "text": "Download the admit card using Registration Number and Password/DOB." },
                      { "@type": "HowToStep", "text": "Appear for the Preliminary Examination." },
                      { "@type": "HowToStep", "text": "Check the Prelims result; qualified candidates are shortlisted for Mains." },
                      { "@type": "HowToStep", "text": "Download the Mains admit card and appear for the Main Examination." },
                      { "@type": "HowToStep", "text": "Check the Mains result; qualified candidates are shortlisted for Phase III." },
                      { "@type": "HowToStep", "text": "Appear for the Psychometric Test, Group Exercise, and Interview." },
                      { "@type": "HowToStep", "text": "Complete document verification with all required certificates." },
                      { "@type": "HowToStep", "text": "Check the final result and merit list, released category-wise." }
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
                        "name": "What are the stages of SBI PO Selection Process 2026?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Preliminary Exam, Main Exam, and Phase III covering Psychometric Test, Group Exercise, and Interview." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many candidates are shortlisted from Prelims to Mains?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Approximately 10 times the number of vacancies in each category are shortlisted for Mains." }
                      },
                      {
                        "@type": "Question",
                        "name": "How many candidates are shortlisted from Mains to Interview?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Approximately 3 times the number of vacancies in each category are shortlisted for the Interview stage." }
                      },
                      {
                        "@type": "Question",
                        "name": "Are SBI PO Prelims marks counted in the final selection?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, Prelims marks are not included in the final merit list. Prelims is purely qualifying in nature." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the weightage of Mains and Interview in SBI PO final selection?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Mains carries 75% weightage and Phase III, comprising Group Exercise and Interview, carries 25% weightage in the normalized final score." }
                      },
                      {
                        "@type": "Question",
                        "name": "What does the SBI PO Psychometric Test evaluate?",
                        "acceptedAnswer": { "@type": "Answer", "text": "It evaluates personality traits and behavioral patterns, with findings shared with the interview panel. There are no separate marks for this component." }
                      },
                      {
                        "@type": "Question",
                        "name": "What documents are needed for SBI PO document verification?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Interview admit card, proof of date of birth, application form copy, photo ID, educational documents, and category or age relaxation certificates where applicable." }
                      },
                      {
                        "@type": "Question",
                        "name": "Is the SBI PO result sent by post?",
                        "acceptedAnswer": { "@type": "Answer", "text": "No, SBI PO results are released online only in PDF or merit-list format. No hard copy is sent by post." }
                      },
                      {
                        "@type": "Question",
                        "name": "What is the difference between the Group Exercise and the Interview in SBI PO?",
                        "acceptedAnswer": { "@type": "Answer", "text": "The Group Exercise, worth 20 marks, assesses teamwork and communication in a group setting, while the Personal Interview, worth 30 marks, evaluates individual communication, banking awareness, and overall suitability." }
                      },
                      {
                        "@type": "Question",
                        "name": "How is the SBI PO final merit list prepared?",
                        "acceptedAnswer": { "@type": "Answer", "text": "By combining normalized Main Examination and Phase III scores at a 75:25 ratio, then ranking candidates category-wise based on available vacancies." }
                      }
                    ]
                  })
                }}
              />
            </>
          ),
          subsections: [
            {
              id: "content-override",
              title: "",
              content: <></>
            }
          ],
          faqs: [
            { q: "What are the stages of SBI PO Selection Process 2026?", a: "Preliminary Exam, Main Exam, and Phase III covering Psychometric Test, Group Exercise, and Interview." },
            { q: "How many candidates are shortlisted from Prelims to Mains?", a: "Approximately 10 times the number of vacancies in each category are shortlisted for Mains." },
            { q: "How many candidates are shortlisted from Mains to Interview?", a: "Approximately 3 times the number of vacancies in each category are shortlisted for the Interview stage." },
            { q: "Are SBI PO Prelims marks counted in the final selection?", a: "No, Prelims marks are not included in the final merit list; Prelims is purely qualifying." },
            { q: "What is the weightage of Mains and Interview in SBI PO final selection?", a: "Mains carries 75% weightage and Phase III (Group Exercise + Interview) carries 25% weightage in the normalized final score." },
            { q: "What does the SBI PO Psychometric Test evaluate?", a: "It evaluates personality traits and behavioral patterns, with findings shared with the interview panel; there are no separate marks for this component." },
            { q: "What documents are needed for SBI PO document verification?", a: "Interview admit card, proof of date of birth, application form copy, photo ID, educational documents, and category/relaxation-related certificates where applicable." },
            { q: "Is the SBI PO result sent by post?", a: "No, SBI PO results are released online only, in PDF/merit-list format; no hard copy is sent by post." },
            { q: "What is the difference between the Group Exercise and the Interview in SBI PO?", a: "The Group Exercise (20 marks) assesses teamwork and communication in a group setting, while the Personal Interview (30 marks) evaluates individual communication, banking awareness, and overall suitability." },
            { q: "How is the SBI PO final merit list prepared?", a: "By combining normalized Main Examination and Phase III scores at a 75:25 ratio, then ranking candidates category-wise based on available vacancies." }
          ]
        };
      }

      // IBPS PO Custom Selection Process Page Content
      return {
        title: "IBPS PO Selection Process 2026 — Every Stage, Every Rule, No Gaps",
        overview: "The IBPS PO 2026 selection process has three stages: Preliminary Examination, Main Examination, and Interview. Prelims is qualifying only — it does not count in your final score. Only Mains (80% weightage) and Interview (20%) determine your merit rank and bank allotment. The entire process, from notification to provisional allotment, runs over approximately 9–10 months.",
        ctaText: "Start Free IBPS PO Mock Test",
        ctaHref: "https://app.prepgrind.com/signup/ibps-po",
        metaTitle: "IBPS PO Selection Process – All Stages Explained",
        metaDescription: "Understand the IBPS PO 2026 selection process — Prelims, Mains, Interview, and provisional allotment. Stage-wise marks, cut offs, and prep tips in one page.",
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
                      "name": "IBPS PO Selection Process 2026",
                      "item": "https://prepbanker.com/ibps-po/selection-process"
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
                  "name": "IBPS PO Selection Process 2026 – All Stages Explained",
                  "url": "https://prepbanker.com/ibps-po/selection-process",
                  "description": "Complete guide to the IBPS PO 2026 selection process — covering Prelims, Mains (objective + descriptive), Interview, document verification, and provisional allotment, with stage-wise marks, cut offs, and strategy.",
                  "datePublished": "2026-05-01",
                  "dateModified": "2026-06-12",
                  "inLanguage": "en-IN",
                  "publisher": {
                    "@type": "Organization",
                    "name": "PrepBanker",
                    "url": "https://prepbanker.com"
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
                  "headline": "IBPS PO Selection Process 2026 – Prelims, Mains, Interview & Allotment Explained",
                  "description": "Stage-by-stage breakdown of the IBPS PO 2026 selection process with exam patterns, cut off logic, merit list calculation formula, and preparation strategy for each phase.",
                  "url": "https://prepbanker.com/ibps-po/selection-process",
                  "datePublished": "2026-05-01",
                  "dateModified": "2026-06-12",
                  "author": {
                    "@type": "Organization",
                    "name": "PrepBanker Editorial Team",
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
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://prepbanker.com/ibps-po/selection-process"
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
                      "name": "How many stages are there in IBPS PO selection process?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IBPS PO selection process has three stages: Preliminary Examination (qualifying), Main Examination (objective + descriptive), and Interview. After all three stages, provisional allotment is done based on a combined merit score of Mains (80%) and Interview (20%), normalized to 100. Document verification runs parallel to the process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does IBPS PO Prelims score count in the final selection?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. IBPS PO Prelims is purely qualifying in nature. You must clear the Prelims cut off (overall and section-wise) to advance to Mains, but once you do, those marks are not added to your final merit score. Only Mains (80%) and Interview (20%) determine your final rank and bank allotment."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the merit list formula for IBPS PO final selection?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IBPS PO final merit score is calculated as: (Mains score / 225 × 80) + (Interview score / 100 × 20), giving a combined score normalized to 100. Candidates are ranked category-wise and state-wise in descending order. Bank preference is considered but allotment is based on merit and vacancy availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the minimum interview score required in IBPS PO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IBPS PO interview is conducted for 100 marks. The minimum qualifying score is 40% (40 marks) for General/EWS candidates and 35% (35 marks) for SC/ST/OBC/PwBD candidates. Candidates who score below this minimum are not considered for provisional allotment, regardless of how high their Mains score was."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How many banks participate in IBPS PO recruitment?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "11 public sector banks participate in IBPS PO recruitment: Bank of Baroda, Bank of India, Bank of Maharashtra, Canara Bank, Central Bank of India, Indian Bank, Indian Overseas Bank, Punjab National Bank, Punjab & Sind Bank, UCO Bank, and Union Bank of India. SBI and RBI are not part of IBPS PO."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What documents are required for IBPS PO interview and verification?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Required documents include: original graduation certificate or marksheet, valid photo ID (Aadhaar/PAN/Passport/Voter ID), category certificate (if applicable), birth certificate or class 10 marksheet for DOB proof, caste/disability certificate if claiming reservation, and recent passport-size photographs. Discrepancies in documents can lead to disqualification even post-selection."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I choose which bank I get allotted in IBPS PO?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can indicate bank preferences during the application process, but allotment is based on your merit rank, category, and vacancy availability in the banks you prefer. There is no guarantee of getting your first-choice bank. High rankers in the merit list get to exercise preference effectively; lower rankers get whatever vacancies remain."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How is IBPS PO different from SBI PO selection process?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both follow Prelims → Mains → Interview, but IBPS PO recruits for 11 PSBs while SBI PO recruits for SBI only. SBI PO has Group Exercises in addition to the interview. IBPS PO merit is Mains 80% + Interview 20%; SBI PO uses a similar but internally calibrated formula. IBPS PO typically has more vacancies and slightly more predictable cut offs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is pre-exam training in IBPS PO and who is eligible?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pre-Exam Training (PET) is a free coaching session arranged by IBPS before the Prelims, typically for SC/ST candidates and religious minority candidates. It lasts a few days and covers exam basics and strategies. Participation is optional but recommended for first-time aspirants from these categories."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is PrepBanker free to use for IBPS PO selection process preparation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Register free at app.prepgrind.com to access IBPS PO Prelims and Mains mock tests at no charge. Free access includes full-length tests, sectional timers, and performance analytics. You can practice for every stage of the selection process — from Prelims speed drills to Mains descriptive prep — without any upfront payment."
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
            title: "IBPS PO 2026 — Selection Process Snapshot",
            content: (
              <div className="space-y-4">
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Parameter</th>
                        <th className="px-4 py-2.5">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-655">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Exam Name</td>
                        <td className="px-4 py-3">IBPS CRP PO/MT-XVI (Probationary Officer / Management Trainee)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Conducting Body</td>
                        <td className="px-4 py-3">Institute of Banking Personnel Selection (IBPS)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Number of Stages</td>
                        <td className="px-4 py-3">3 (Prelims &rarr; Mains &rarr; Interview)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Prelims Date</td>
                        <td className="px-4 py-3">22nd &amp; 23rd August 2026</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Mains Date</td>
                        <td className="px-4 py-3">4th October 2026</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Prelims Marks</td>
                        <td className="px-4 py-3">100 (qualifying only — not added to merit)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Mains Marks</td>
                        <td className="px-4 py-3">225 (Objective) + 25 (Descriptive) = 250</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Interview Marks</td>
                        <td className="px-4 py-3">100</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Final Merit Formula</td>
                        <td className="px-4 py-3">Mains 80% + Interview 20% (normalized to 100)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Official Website</td>
                        <td className="px-4 py-3"><a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-[#1B6EB5] hover:underline font-semibold">ibps.in</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "stages-overview",
            title: "What Is the IBPS PO Selection Process — Overview of All 3 Stages",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The IBPS PO recruitment cycle (officially called CRP PO/MT) follows a fixed three-stage structure. Each stage is a gate. Clear one to enter the next. Fail one and you exit the cycle for that year.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1B6EB5]/5 border border-[#1B6EB5]/20 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B6EB5]/5 rounded-bl-full -mr-6 -mt-6"></div>
                    <span className="text-xs font-bold text-[#1B6EB5] uppercase tracking-wider block mb-2">Stage 1</span>
                    <h4 className="font-extrabold text-slate-850 text-base mb-2">Preliminary Exam</h4>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      A 1-hour, 100-mark Computer Based Test (CBT) with three sections. Purely qualifying in nature. Marks do not affect final selection.
                    </p>
                  </div>

                  <div className="bg-[#1B6EB5]/5 border border-[#1B6EB5]/20 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B6EB5]/5 rounded-bl-full -mr-6 -mt-6"></div>
                    <span className="text-xs font-bold text-[#1B6EB5] uppercase tracking-wider block mb-2">Stage 2</span>
                    <h4 className="font-extrabold text-slate-850 text-base mb-2">Main Examination</h4>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      A 3-hour objective paper (225 marks) plus a 30-minute descriptive paper (25 marks). This is the base of your final selection (80% weight).
                    </p>
                  </div>

                  <div className="bg-[#1B6EB5]/5 border border-[#1B6EB5]/20 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B6EB5]/5 rounded-bl-full -mr-6 -mt-6"></div>
                    <span className="text-xs font-bold text-[#1B6EB5] uppercase tracking-wider block mb-2">Stage 3</span>
                    <h4 className="font-extrabold text-slate-850 text-base mb-2">Personal Interview</h4>
                    <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                      A personal interview conducted by a panel. Carries 100 marks, contributing 20% to the final combined normalized score.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">Post-Stage &rarr; Document Verification &amp; Provisional Allotment</h4>
                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                    After the interview, candidates who clear the final cut off are provisionally allotted to one of the 11 participating banks based on merit rank, category, and stated bank preferences.
                  </p>
                </div>

                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Understanding the architecture of this process — which stage matters how much — is the single most important strategic insight for any IBPS PO aspirant.
                </p>
              </div>
            )
          },
          {
            id: "stage-1-prelims",
            title: "Stage 1: IBPS PO Preliminary Examination — Pattern, Cut Off, and What It Really Means",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The Prelims is a 1-hour Computer Based Test held in multiple shifts across two days. For 2026, the confirmed dates are <strong>22nd and 23rd August 2026</strong>.
                </p>

                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Section</th>
                        <th className="px-4 py-2.5 text-center">Number of Questions</th>
                        <th className="px-4 py-2.5 text-center">Maximum Marks</th>
                        <th className="px-4 py-2.5 text-center">Time Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-655">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">English Language</td>
                        <td className="px-4 py-3 text-center">30</td>
                        <td className="px-4 py-3 text-center">30</td>
                        <td className="px-4 py-3 text-center">20 minutes</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Quantitative Aptitude</td>
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center">20 minutes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Reasoning Ability</td>
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center">20 minutes</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="px-4 py-3 text-[#1B6EB5]">Total</td>
                        <td className="px-4 py-3 text-center text-[#1B6EB5]">100</td>
                        <td className="px-4 py-3 text-center text-[#1B6EB5]">100</td>
                        <td className="px-4 py-3 text-center text-[#1B6EB5]">60 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2 text-slate-655 text-xs sm:text-sm">
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base">Key Rules:</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Each section has a <strong>separate, fixed 20-minute clock</strong>. You cannot carry over unused time to another section.</li>
                    <li><strong>Negative marking:</strong> 0.25 marks deducted per wrong answer. No penalty for unattempted questions.</li>
                    <li>Both an <strong>overall cut off and a sectional cut off</strong> apply. You must clear both to qualify for Mains.</li>
                    <li>Results and scorecards are released with cut off marks, typically within 5–6 weeks of the exam.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">How Difficult Is Prelims?</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    The 2025 IBPS PO Prelims cut off for the General/UR category was <strong>49.21 out of 100</strong>. In 2023, it peaked at <strong>54.25</strong>. In 2024, it dropped to <strong>48.50</strong>. The 5-year range for General is roughly 48–55. These numbers look manageable — but sectional time limits make the exam brutally tough for unprepared candidates. Scoring 50 in 60 minutes across three separate timed sections is harder than it looks on paper.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">What Prelims Is NOT</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    This bears repeating because students waste months optimizing for the wrong thing: Prelims marks <strong>do not count in your final merit</strong>. Not one bit. A student who scores 92/100 in Prelims and a student who scores 51/100 both enter Mains on equal footing. Prelims is purely a filter. Pass it cleanly, then focus everything on Mains.
                  </p>
                </div>

                <HighlightBox type="info" title="Pro Tip: Score Optimization Strategy">
                  Don&apos;t attempt to maximize your Prelims score at the cost of Mains preparation. Your target in Prelims should be: clear sectional cut offs comfortably + stay 5–7 marks above the overall expected cut off. That&apos;s it. Every hour beyond that threshold is better spent on Mains preparation, which is where your rank actually gets determined.
                </HighlightBox>
              </div>
            )
          },
          {
            id: "stage-2-mains",
            title: "Stage 2: IBPS PO Main Examination — Where Selection Is Really Decided",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The Mains exam is the heart of the IBPS PO selection process. For 2026, the confirmed date is <strong>4th October 2026</strong>. Only candidates who clear the Prelims cut off appear for Mains. The number of candidates called is typically 10–20 times the number of vacancies.
                </p>

                <h4 className="font-bold text-slate-850 text-sm sm:text-base text-[#1B6EB5] mb-2">Mains Objective Paper Pattern</h4>
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Section</th>
                        <th className="px-4 py-2.5 text-center">Questions</th>
                        <th className="px-4 py-2.5 text-center">Marks</th>
                        <th className="px-4 py-2.5 text-center">Time Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-655">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Reasoning &amp; Computer Aptitude</td>
                        <td className="px-4 py-3 text-center">45</td>
                        <td className="px-4 py-3 text-center">60</td>
                        <td className="px-4 py-3 text-center">60 minutes</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center">60</td>
                        <td className="px-4 py-3 text-center">45 minutes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">General Economy / Banking Awareness</td>
                        <td className="px-4 py-3 text-center">40</td>
                        <td className="px-4 py-3 text-center">40</td>
                        <td className="px-4 py-3 text-center">35 minutes</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">English Language</td>
                        <td className="px-4 py-3 text-center">35</td>
                        <td className="px-4 py-3 text-center">40</td>
                        <td className="px-4 py-3 text-center">40 minutes</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="px-4 py-3 text-[#1B6EB5]">Objective Total</td>
                        <td className="px-4 py-3 text-center text-[#1B6EB5]">155</td>
                        <td className="px-4 py-3 text-center text-[#1B6EB5]">200</td>
                        <td className="px-4 py-3 text-center text-[#1B6EB5]">3 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-slate-850 text-sm sm:text-base text-[#1B6EB5] mb-2">Mains Descriptive Paper Pattern</h4>
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Component</th>
                        <th className="px-4 py-2.5 text-center">Marks</th>
                        <th className="px-4 py-2.5 text-center">Time Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-655">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Essay Writing (1 essay) &amp; Letter Writing (1 letter)</td>
                        <td className="px-4 py-3 text-center">25</td>
                        <td className="px-4 py-3 text-center">30 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                  The descriptive paper is conducted immediately after the objective paper using the same computer interface. You type — not handwrite — your essay and letter.
                </p>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">What Is Sectional Cut Off in Mains?</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Yes, sectional cut offs apply in Mains too, for the objective sections. You must clear both the overall Mains cut off and the section-wise minimums to qualify for the interview. In 2023, the Mains cut off for General/UR was <strong>63 out of 225</strong>. In 2024, it dropped to <strong>66.50</strong>. In 2025, the Mains cut off jumped to <strong>75.75</strong> for UR/OBC — the highest in three years.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">How Much Does Each Section Carry?</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    Notice the weightage asymmetry: Reasoning (60 marks) and Data Analysis (60 marks) together account for 120 out of 200 objective marks — 60% of the objective score. Banking Awareness (40) and English (40) make up the other 40%. General Economy/Banking Awareness is often the most scoring section for prepared candidates because it has minimal negative-marking risk (you either know it or leave it).
                  </p>
                </div>

                <HighlightBox type="info" title="Pro Tip: Descriptive Section Typing Practice">
                  The descriptive component trips up even strong students who have never practiced typing an essay in 15–18 minutes. Start typing practice essays from week 6 of preparation onwards. Target 200–250 words for the essay and 150–180 words for the letter. Speed matters, but clarity matters more — evaluators aren&apos;t looking for literature, they&apos;re looking for coherent, grammatically correct structure.
                </HighlightBox>
              </div>
            )
          },
          {
            id: "stage-3-interview",
            title: "Stage 3: IBPS PO Interview — Marks, Format, and What Panelists Actually Look For",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  After Mains results are declared (typically November–December), candidates who clear the Mains cut off are called for the Personal Interview round. Interviews are conducted at designated centres, usually January–February.
                </p>

                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Parameter</th>
                        <th className="px-4 py-2.5">Detail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-655">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Total Marks</td>
                        <td className="px-4 py-3">100</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Minimum Qualifying (General/EWS)</td>
                        <td className="px-4 py-3">40% (40 marks)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Minimum Qualifying (SC/ST/OBC/PwBD)</td>
                        <td className="px-4 py-3">35% (35 marks)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Duration</td>
                        <td className="px-4 py-3">15–25 minutes (approximate)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Panel Composition</td>
                        <td className="px-4 py-3">3–5 members (IBPS officials + bank representatives)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Format</td>
                        <td className="px-4 py-3">Personal interview, no group exercise</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Weightage in Final Score</td>
                        <td className="px-4 py-3">20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base">What Do IBPS PO Interviewers Ask?</h4>
                  <p>The interview is not a knowledge test in the way Mains is. The panel evaluates:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-655">
                    <li><strong>Banking and financial awareness:</strong> Basic concepts of banking operations, RBI policies, current banking sector news.</li>
                    <li><strong>Subject knowledge related to your graduation:</strong> If you have an Economics degree, expect macro/micro questions. Engineering graduates may get questions linking technology to banking.</li>
                    <li><strong>Communication and composure:</strong> How clearly you articulate, how you handle pressure, whether you can hold a coherent conversation.</li>
                    <li><strong>Self-awareness:</strong> &quot;Why banking?&quot;, &quot;Why this bank?&quot;, &quot;What are your strengths and weaknesses?&quot; — these are standard and must be prepared.</li>
                    <li><strong>Current affairs:</strong> Last 3–6 months of major economic/financial developments.</li>
                  </ul>
                  <p>
                    Failing the interview minimum (40% for General) is uncommon but happens. Candidates with excellent Mains scores but poor interview performance can still get allotted — the 80:20 formula means Mains dominates. But scoring only 40–45/100 in the interview when you could have scored 65–70 with preparation is a costly miss.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-1.5">Pre-Exam Training (PET) — What It Is and Who Qualifies</h4>
                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                    Before the Prelims, IBPS conducts optional Pre-Exam Training (PET) for candidates belonging to SC/ST categories and religious minority communities. PET is a free, multi-day orientation session that covers exam strategy, basic conceptual revision, and test-taking guidance. It is not mandatory but is recommended for first-time aspirants from these categories. A separate call letter is issued for PET.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: "merit-list",
            title: "How the IBPS PO Final Merit List Is Prepared",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  This section answers the question most students get wrong: &quot;How does IBPS actually rank candidates?&quot;
                </p>

                <div className="bg-[#1B6EB5]/5 border border-[#1B6EB5]/20 rounded-2xl p-5">
                  <h4 className="font-extrabold text-[#1B6EB5] text-sm sm:text-base uppercase tracking-wider mb-2">The Merit Calculation Formula</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed mb-4">
                    After the interview, IBPS computes a <strong>combined score out of 100</strong> for every candidate:
                  </p>
                  <div className="bg-white px-5 py-4 rounded-xl border border-slate-200 text-center font-mono text-[#1B6EB5] text-sm sm:text-lg font-bold mb-4">
                    Final Score = (Mains Marks / 225) &times; 80 + (Interview Marks / 100) &times; 20
                  </div>
                  <div className="text-slate-655 text-xs sm:text-sm space-y-2">
                    <p><strong>Worked example:</strong> A candidate scores 90/225 in Mains and 65/100 in Interview.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Mains component: (90/225) &times; 80 = 32.00</li>
                      <li>Interview component: (65/100) &times; 20 = 13.00</li>
                      <li className="font-bold text-[#1B6EB5]">Final Score: 45.00 / 100</li>
                    </ul>
                    <p className="mt-2 text-slate-655 leading-relaxed">
                      Compare this to the 2025 final cut off for UR/General: <strong>46.11 / 100</strong>. That candidate just missed. A score of 100/225 in Mains (instead of 90) with the same interview performance would have pushed them to 48.44 — safely above.
                    </p>
                  </div>
                </div>

                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  This illustrates the central lesson of IBPS PO preparation: <strong>every mark in Mains is worth 0.355 points in the final score</strong>. Every extra mark in the interview is worth 0.20 points. The marginal return on Mains preparation is 75% higher than on interview preparation. Spend your time accordingly.
                </p>

                <div>
                  <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">How Bank Allotment Works</h4>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                    The final merit list is prepared <strong>category-wise and state-wise</strong>, in descending order of final scores. Candidates at the top get to exercise bank preferences. IBPS tries to match bank preferences with available vacancies. If your preferred bank has no remaining vacancy in your category, you are allotted the next bank with an opening in descending preference order.
                  </p>
                  <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed mt-2">
                    There is no guarantee of preferred bank allotment. High-ranking candidates have a significantly better chance of landing their first-choice bank.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: "ibps-vs-sbi",
            title: "IBPS PO vs SBI PO Selection Process — Key Differences",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Many students prepare for both simultaneously. Here&apos;s how the two selection processes compare:
                </p>

                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Parameter</th>
                        <th className="px-4 py-2.5">IBPS PO 2026</th>
                        <th className="px-4 py-2.5">SBI PO 2026</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-655">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Stages</td>
                        <td className="px-4 py-3">Prelims &rarr; Mains &rarr; Interview</td>
                        <td className="px-4 py-3">Prelims &rarr; Mains &rarr; Interview + Group Exercise</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Conducting Body</td>
                        <td className="px-4 py-3">IBPS (for 11 PSBs)</td>
                        <td className="px-4 py-3">State Bank of India (internal)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Prelims Marks</td>
                        <td className="px-4 py-3">100 (qualifying only)</td>
                        <td className="px-4 py-3">100 (qualifying only)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Mains Total Marks</td>
                        <td className="px-4 py-3">250 (225 obj + 25 desc)</td>
                        <td className="px-4 py-3">250 (200 obj + 50 desc)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Interview Marks</td>
                        <td className="px-4 py-3">100 (20% of final)</td>
                        <td className="px-4 py-3">30 (required)</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Group Exercise</td>
                        <td className="px-4 py-3">Not applicable</td>
                        <td className="px-4 py-3">Yes (30 marks)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Vacancies (2025 cycle)</td>
                        <td className="px-4 py-3">5,208</td>
                        <td className="px-4 py-3">~600–1,000</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Merit Formula</td>
                        <td className="px-4 py-3">Mains 80% + Interview 20%</td>
                        <td className="px-4 py-3">Mains + GE + Interview (internal)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-850">Bank Options</td>
                        <td className="px-4 py-3">Choose from 11 PSBs</td>
                        <td className="px-4 py-3">SBI only</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-850">Notification Frequency</td>
                        <td className="px-4 py-3">Annual (CRP cycle)</td>
                        <td className="px-4 py-3">Annual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  The most important structural difference: SBI PO has Group Exercise as an additional selection layer. IBPS PO does not. If you&apos;re strong in one-on-one interviews but less comfortable in group discussions, IBPS PO is the more favorable path.
                </p>
              </div>
            )
          },
          {
            id: "prep-plan",
            title: "Step-by-Step: How to Prepare for Each Stage of the IBPS PO Selection Process",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  A structured approach that runs all three stages in parallel — not sequentially — gives the best results. Here is a stage-wise preparation plan mapped to the 2026 timeline:
                </p>

                <div className="relative border-l-2 border-[#1B6EB5]/30 pl-6 space-y-6 ml-4">
                  {[
                    {
                      step: 1,
                      title: "Now to mid-July (Syllabus + Chapter Completion)",
                      desc: "Complete the full Prelims syllabus — Quant, Reasoning, English. Run at least 3–4 full Prelims mocks. Simultaneously, start Banking Awareness (GA) preparation, which feeds into Mains Stage 2. Don't delay GA for \"after Prelims\" — 40 marks of Mains depend on consistent GA prep over months."
                    },
                    {
                      step: 2,
                      title: "Mid-July to August 21 (Prelims Intensification)",
                      desc: "Full mock tests daily or on alternate days. Deep analysis after every mock. Fix sectional accuracy issues. Set a target 5–7 marks above the expected cut off, not equal to it. Freeze all new concept learning by August 15 — only revision from that point."
                    },
                    {
                      step: 3,
                      title: "August 22–23 (Prelims Exam)",
                      desc: "Execute. Do not introduce any new material the night before. Trust your mocks. On exam day, follow the sectional timer discipline absolutely — never borrow mental time from another section."
                    },
                    {
                      step: 4,
                      title: "August 24 to mid-September (Mains Acceleration)",
                      desc: "Once Prelims is done, shift 100% to Mains. This is roughly 40–45 days before the October 4 Mains. Focus on DI (Data Interpretation), Reasoning puzzles, and the descriptive component. Attempt at least 6–8 full Mains mocks in this window."
                    },
                    {
                      step: 5,
                      title: "Post-Mains to Interview (Strategy + Awareness)",
                      desc: "After October 4, results typically come in November–December. Use this period productively: current affairs deep-dive (RBI policy, banking sector news), self-introduction practice, graduation subject revision, and mock interviews. Candidates who treat this period as a vacation are often the ones who clear Mains but fumble the interview."
                    },
                    {
                      step: 6,
                      title: "Interview Week (Mindset + Documents)",
                      desc: "Organize all original documents, have photocopies in a labeled folder, and get one full mock interview done with a senior or mentor. Aim for 70+ in the interview, not just clearing the 40-mark minimum. Every extra interview mark is free marks at 20% weightage."
                    }
                  ].map((item) => (
                    <div key={item.step} className="relative">
                      <div className="absolute -left-[35px] top-1.5 w-[18px] h-[18px] rounded-full bg-white border-2 border-[#1B6EB5] flex items-center justify-center font-bold text-xs text-[#1B6EB5]">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "prepbanker-usage",
            title: "How to Use PrepBanker for Every Stage of the IBPS PO Selection Process",
            content: (
              <div className="space-y-6">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  PrepBanker is designed around exactly this three-stage structure. Here is how to use it for each phase.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      label: "For Prelims",
                      desc: "Register free at app.prepgrind.com/register and start with a diagnostic full-length Prelims mock. The platform sets a 20-minute clock per section, replicating exact exam conditions. After the test, the analytics dashboard shows your section-wise score, time per question, and accuracy ratio."
                    },
                    {
                      label: "For Mains — Objective",
                      desc: "PrepBanker's Mains mocks cover all five sections with the correct time allocations — 60 minutes for Reasoning, 45 for DI, 35 for GA, 40 for English. Running full Mains mocks (not just sectional tests) is the only way to understand how your performance degrades over 3 hours of sustained concentration."
                    },
                    {
                      label: "For Mains — Descriptive",
                      desc: "Use PrepBanker's DPP (Daily Practice Problems) sets to practice essay and letter topics from recent years. Banking sector reform essays, RBI policy letters, and economic development themes are recurring patterns. Practice typing under the 30-minute limit from week 6 of Mains prep."
                    },
                    {
                      label: "For GA / Banking Awareness",
                      desc: "PrepBanker's GA sectional tests cover static banking knowledge (RBI acts, financial terms, banking history) and current affairs topics simultaneously. A 15-minute GA sectional test every alternate day, starting 3 months before Mains, is the most efficient preparation path for this section."
                    },
                    {
                      label: "For Post-Mains Interview Prep",
                      desc: "Use the PYQ (Previous Year Question) sets to review the types of banking and current affairs questions asked in IBPS PO interviews. Reviewing what panelists have asked in past cycles significantly reduces interview surprise."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-xs transition-shadow">
                      <span className="text-xs font-bold text-[#1B6EB5] uppercase tracking-wider block mb-1">{item.label}</span>
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "explore-more",
            title: "Also Explore on PrepBanker",
            content: (
              <div className="space-y-4">
                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">
                  Every stage of the IBPS PO selection process requires a different type of practice. These PrepBanker resources map directly to the stages covered on this page.
                </p>
                <ul className="space-y-4 text-slate-655 text-xs sm:text-sm">
                  <li className="leading-relaxed">
                    Start your IBPS PO prep with a free <Link href="/ibps-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Mock Test</Link> — a complete 100-question, 60-minute Prelims simulation with sectional timers and instant score analysis. No cost, no commitment. Just a clear picture of where you stand.
                  </li>
                  <li className="leading-relaxed">
                    For Mains preparation, the <Link href="/ibps-po/mains-mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Mains Full Mock Tests</Link> replicate the complete 3-hour 30-minute format — objective plus descriptive, in sequence. Start these from week 5 of your preparation, not after Prelims results.
                  </li>
                  <li className="leading-relaxed">
                    To understand the score you need to clear each stage, visit the <Link href="/ibps-po/cut-off" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Cut Off 2026</Link> page — it has year-wise Prelims and Mains cut off data for all categories, with expected ranges for 2026.
                  </li>
                  <li className="leading-relaxed">
                    To track the notification, registration deadline, admit card dates, and result timelines, the <Link href="/ibps-po/important-dates" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Important Dates 2026</Link> page keeps every deadline in one organized view.
                  </li>
                  <li className="leading-relaxed">
                    For targeted sectional improvement, the <Link href="/ibps-po/reasoning-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Reasoning Practice Sets</Link> and <Link href="/ibps-po/quant-tests" className="font-bold text-[#1B6EB5] hover:underline">Quant Sectional Tests</Link> cover the chapters that carry the most weight in both Prelims and Mains — so your practice directly serves both stages.
                  </li>
                </ul>
              </div>
            )
          }
        ],
        faqs: [
          {
            q: "How many stages are there in IBPS PO selection process?",
            a: "The IBPS PO selection process has three stages: Preliminary Examination (qualifying), Main Examination (objective + descriptive), and Interview. After all three, provisional allotment is done to one of 11 participating public sector banks based on a combined merit score of Mains (80%) and Interview (20%), normalized to 100. Document verification runs parallel to the final stage."
          },
          {
            q: "Does IBPS PO Prelims score count in the final merit list?",
            a: "No, not at all. IBPS PO Prelims is purely qualifying. Once you clear the Prelims cut off (overall and section-wise), those marks are completely discarded. Only your Mains score (80% weightage) and Interview score (20% weightage) go into the final combined merit score. A candidate who barely clears Prelims has the same chance in Mains as one who topped the qualifying round."
          },
          {
            q: "What is the formula for IBPS PO final merit score calculation?",
            a: "The formula is: Final Score = (Mains Marks / 225 &times; 80) + (Interview Marks / 100 &times; 20). This gives a score out of 100. The 2025 final cut off for General/UR was 46.11/100. So a candidate scoring 90/225 in Mains and 65/100 in Interview gets a final score of 32 + 13 = 45 — just below the 2025 cut off. Every Mains mark is worth 0.355 final points."
          },
          {
            q: "What happens after clearing IBPS PO Mains exam?",
            a: "After Mains, IBPS releases the result and scorecard (typically November–December). Candidates who clear the Mains cut off receive interview call letters, usually in December–January. Interviews are held at designated centres in January–February. After interviews, the final merit list is prepared and provisional allotment to one of the 11 participating banks is announced, usually by April."
          },
          {
            q: "What is the minimum score required to qualify IBPS PO interview?",
            a: "The IBPS PO interview is held for 100 marks. Minimum qualifying score is 40% — that&apos;s 40 marks for General/EWS candidates, and 35% (35 marks) for SC/ST/OBC/PwBD candidates. Falling below this minimum disqualifies a candidate from provisional allotment even if their Mains score was excellent. The interview carries 20% of the final merit, so preparation here pays real returns."
          },
          {
            q: "What is pre-exam training in IBPS PO and who is eligible for it?",
            a: "Pre-Exam Training (PET) is a free preparatory session arranged by IBPS before the Prelims exam. Eligibility is typically limited to SC/ST candidates and religious minority candidates. It runs for a few days and covers exam strategy and basic concepts. Participation is voluntary but can be useful for first-time aspirants. A separate call letter must be downloaded from ibps.in to attend PET."
          },
          {
            q: "How does IBPS PO bank allotment work after final selection?",
            a: "Candidates express bank preferences during the online application. After the final merit list is prepared, allotment is done in descending merit order — higher-ranked candidates get better choice fulfillment. If your preferred bank has vacancies in your category, you get allotted there. If not, the next bank on your preference list with available vacancies is assigned. There is no guarantee of first-choice bank allotment."
          },
          {
            q: "How is IBPS PO selection process different from SBI PO?",
            a: "The core difference is scope and structure. IBPS PO recruits for 11 public sector banks; SBI PO recruits only for SBI. SBI PO adds a Group Exercise (30 marks) alongside the interview, which IBPS PO does not have. IBPS PO typically has significantly more vacancies (5,208 in 2025 vs SBI PO&apos;s 600–1,000). Both use Prelims as qualifying, but SBI PO&apos;s interview stage is more layered."
          },
          {
            q: "How many candidates are shortlisted for IBPS PO Mains from Prelims?",
            a: "IBPS typically shortlists approximately 10–15 times the number of vacancies for the Mains examination. For the 2025 cycle with 5,208 vacancies, roughly 50,000–75,000 candidates were called for Mains. The exact multiplier varies. Similarly, for the Interview stage, approximately 3 times the vacancy count is shortlisted from Mains — so around 15,000–20,000 for a 5,000-vacancy cycle."
          },
          {
            q: "Is PrepBanker&apos;s platform useful for IBPS PO interview preparation too?",
            a: "Yes. PrepBanker&apos;s PYQ (Previous Year Question) sets include interview-related banking awareness questions asked in past IBPS PO cycles. The GA sectional tests build the current affairs and static banking knowledge base that interview panelists frequently test. Register free at app.prepgrind.com to access these resources alongside Prelims and Mains mock tests — no payment required to start."
          }
        ]
      };
    }

    case 'mock-tests': {
      if (examId === 'sbi-po') {
        return sbiPoMockTestContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoMockTestContent;
      }

      return {
        title: `${exam.shortName} Mock Tests — Practice Series`,
        overview: `Challenge yourself with PrepBanker's full-length mock tests, practice sectional quizzes, and analyze your performance.`,
        ctaText: 'Access Free Mock Tests',
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
        subsections: [
          {
            id: 'mock-features',
            title: 'PrepBanker Mock Test Features',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Our mock tests replicate the real Computer-Based Test (CBT) environment. This helps you build pacing strategies, increase typing speeds, and manage stress:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-1 text-[#1B6EB5]">Real-time Pacing Dashboard</h5>
                    <p className="text-xs text-slate-650">Sectional timers and interface elements mimic actual IBPS/SBI client software screens.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-1 text-[#1B6EB5]">AI Performance Analytics</h5>
                    <p className="text-xs text-slate-650">Identifies chapters where you commit maximum errors or waste too much time.</p>
                  </div>
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('mock') || f.q.toLowerCase().includes('free') || f.q.toLowerCase().includes('test'))
      };
    }

    case 'english-tests':
    case 'english-sectional-test': {
      if (examId === 'sbi-po') {
        return sbiPoEnglishSectionalContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoEnglishSectionalContent;
      }

      return {
        title: `${exam.shortName} English Language Sectional Mock Tests`,
        overview: `Optimize your score in the English Language section with high-quality practice questions and reading comprehension strategies.`,
        ctaText: 'Start English Test',
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
        subsections: [
          {
            id: 'english-weightage',
            title: 'English Language Syllabus & Weightage',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  The English Language section comprises 30 questions in Prelims and 35 questions in Mains. Focus on reading speed and core grammatical rules.
                </p>
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[400px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Topic</th>
                        <th className="px-4 py-2.5">Average Weightage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Reading Comprehension</td>
                        <td className="px-4 py-3">8–10 Questions</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Error Spotting & Sentence Correction</td>
                        <td className="px-4 py-3">5 Questions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Cloze Test / Fillers</td>
                        <td className="px-4 py-3">5 Questions</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Para Jumbles</td>
                        <td className="px-4 py-3">5 Questions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('english') || f.q.toLowerCase().includes('rc') || f.q.toLowerCase().includes('syllabus'))
      };
    }

    case 'quant-tests':
    case 'quantitative-aptitude-test': {
      if (examId === 'sbi-po') {
        return sbiPoQuantSectionalContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoQuantSectionalContent;
      }

      return {
        title: `${exam.shortName} Quantitative Aptitude Practice Tests`,
        overview: `Boost your calculation speed and master data interpretation (DI) sets with sectional practice questions.`,
        ctaText: 'Start Quant Test',
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
        subsections: [
          {
            id: 'quant-weightage',
            title: 'Quantitative Aptitude Syllabus & Weightage',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Quant carries 35 questions in Prelims. In Mains, it focuses heavily on Data Analysis and Interpretation.
                </p>
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[400px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Topic</th>
                        <th className="px-4 py-2.5">Average Weightage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Data Interpretation (DI)</td>
                        <td className="px-4 py-3">10–15 Questions</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Number Series & Quadratic Equations</td>
                        <td className="px-4 py-3">5–10 Questions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Arithmetic Word Problems</td>
                        <td className="px-4 py-3">10 Questions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('quant') || f.q.toLowerCase().includes('di') || f.q.toLowerCase().includes('math'))
      };
    }

    case 'reasoning-tests':
    case 'reasoning-ability-test': {
      if (examId === 'sbi-po') {
        return sbiPoReasoningSectionalContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoReasoningSectionalContent;
      }

      return {
        title: `${exam.shortName} Reasoning Ability Practice Tests`,
        overview: `Develop logical deduction habits and master puzzles and seating arrangement configurations.`,
        ctaText: 'Start Reasoning Test',
        ctaHref: examId === 'sbi-po' ? 'https://app.prepgrind.com/signup/sbi-po' : 'https://app.prepgrind.com/signup/ibps-po',
        subsections: [
          {
            id: 'reasoning-weightage',
            title: 'Reasoning Syllabus & Weightage',
            content: (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Reasoning consists of 35 questions in Prelims. Puzzles and seating arrangements form the major bulk of this section.
                </p>
                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">
                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[400px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="px-4 py-2.5">Topic</th>
                        <th className="px-4 py-2.5">Average Weightage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Puzzles & Seating Arrangements</td>
                        <td className="px-4 py-3">15–20 Questions</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="px-4 py-3 font-semibold text-slate-800">Syllogisms & Inequalities</td>
                        <td className="px-4 py-3">5–8 Questions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-800">Coding-Decoding & Input-Output</td>
                        <td className="px-4 py-3">5 Questions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
        ],
        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('reasoning') || f.q.toLowerCase().includes('puzzle') || f.q.toLowerCase().includes('computer'))
      };
    }

    case 'sbi-po-vs-ibps-po':
    case 'comparison': {
      if (examId === 'sbi-po') {
        return sbiPoComparisonContent;
      }
      if (examId === 'ibps-po') {
        return ibpsPoComparisonContent;
      }
      return undefined;
    }

    case 'exam-analysis': {
      if (examId === 'sbi-po') {
        return sbiPoExamAnalysisContent;
      }
      return {
        title: "IBPS PO Exam Analysis 2026: Shift-wise Difficulty & Good Attempts",
        overview: "Get live, shift-wise IBPS PO 2026 Prelims exam analysis right here on exam day. Track sectional difficulty levels, subject weightage, and expected good attempts.",
        ctaText: "Practice IBPS PO Mock Tests",
        ctaHref: "https://app.prepgrind.com/signup/ibps-po",
        subsections: [
          {
            id: "live-updates-ibps",
            title: "IBPS PO Prelims 2026 Shift-Wise Live Analysis (Upcoming)",
            content: (
              <p className="text-slate-650 text-sm leading-relaxed">
                The IBPS PO 2026 Prelims exam will take place later this year. Live shift analysis, topic weightage, and difficulty reviews will be published within 1-2 hours of each shift ending.
              </p>
            )
          }
        ],
        faqs: []
      };
    }

    case 'prelims-exam-analysis': {
      if (examId === 'sbi-po') {
        return sbiPoPrelimsExamAnalysisContent;
      }
      return undefined;
    }

    default:
      return undefined;
  }
}
