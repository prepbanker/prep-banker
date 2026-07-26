// PATH: lib/data/exams/sbiPoStudyPlan.tsx
import React from 'react';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoStudyPlanContent: DetailSectionContent = {
  title: "SBI PO Study Plan 2026 — A Day-Wise Roadmap to Crack the Exam",
  overview: "Not another topic list — a phase-by-phase schedule that tells you what to study each week, how many mocks to take each month, and when to start revision, descriptive practice, and interview prep.",
  ctaText: "Attempt Free Topic Diagnostic Test",
  ctaHref: "https://app.prepgrind.com/signup/sbi-po",
  metaTitle: "SBI PO Study Plan 2026: Roadmap",
  metaDescription: "SBI PO Study Plan 2026 — a day-wise roadmap from foundation to Mains, with subject time allocation, mock test frequency, and a revision system.",
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
              { "@type": "ListItem", "position": 3, "name": "Study Plan", "item": "https://prepbanker.com/sbi-po/study-plan" }
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
            "name": "SBI PO Study Plan 2026 — Day-Wise Roadmap to Crack the Exam",
            "url": "https://prepbanker.com/sbi-po/study-plan",
            "description": "SBI PO Study Plan 2026 — a day-wise roadmap from foundation to Mains, with subject time allocation, mock test frequency, and a revision system.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-07-26",
            "isPartOf": {
              "@type": "WebSite",
              "name": "PrepBanker",
              "url": "https://prepbanker.com"
            }
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
            "name": "How to Prepare for SBI PO 2026",
            "description": "A phase-by-phase SBI PO study plan covering Foundation, Strengthening, and Mock/Revision phases with subject time allocation and mock test frequency.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Foundation Phase",
                "text": "Spend weeks 1-4 building core concepts in basic Quant, basic Reasoning, and English grammar fundamentals, with one sectional test per week."
              },
              {
                "@type": "HowToStep",
                "name": "Strengthening Phase",
                "text": "Spend weeks 5-8 on Data Interpretation, Puzzles & Seating Arrangement, and Reading Comprehension, increasing to 2-3 sectional tests per week."
              },
              {
                "@type": "HowToStep",
                "name": "Mock & Revision Phase",
                "text": "In the final month before Prelims, shift entirely to full-length mocks and error-notebook revision, moving to one full mock daily in the last two weeks."
              },
              {
                "@type": "HowToStep",
                "name": "Mains Parallel Track",
                "text": "From week one, dedicate one session per week to Mains-level Reasoning, advanced DI, and descriptive writing so Mains preparation isn't compressed into the gap after Prelims."
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
                "name": "What is the best study plan for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best SBI PO study plan follows three phases — a Foundation phase for core concepts, a Strengthening phase focused on high-weightage topics like Data Interpretation and Puzzles, and a final Mock phase built entirely around full-length tests and error analysis rather than new topics."
                }
              },
              {
                "@type": "Question",
                "name": "How many months are needed to prepare for SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most candidates need 3–4 months of consistent preparation for SBI PO Prelims and Mains combined, though a compressed 30-day plan is possible by focusing only on the highest-weightage topics."
                }
              },
              {
                "@type": "Question",
                "name": "How many mock tests should I take before SBI PO Prelims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aspirants should aim for 15 to 20 full-length mock tests before SBI PO Prelims, increasing to one mock daily in the final two weeks before the exam."
                }
              },
              {
                "@type": "Question",
                "name": "Should I start Mains preparation before the Prelims result is out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, starting Mains-level practice in parallel with Prelims preparation — even just one session a week — helps avoid losing the roughly one-month gap between Prelims and Mains to a standing start."
                }
              },
              {
                "@type": "Question",
                "name": "How many hours should I study daily for SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Full-time aspirants typically study 7 to 9 hours daily for SBI PO, while working professionals can prepare effectively with 3 to 4 focused hours daily if followed consistently."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most important habit for cracking SBI PO in the first attempt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reviewing every mock test's wrong answers through a structured error-notebook system is considered the most important habit for cracking SBI PO in the first attempt, since it converts practice into a measurable score improvement."
                }
              },
              {
                "@type": "Question",
                "name": "Should I start descriptive paper practice early in SBI PO preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, starting descriptive paper practice — one essay and one letter or report per week — from the beginning of preparation is recommended, since candidates who delay it often lose easy marks in Mains."
                }
              },
              {
                "@type": "Question",
                "name": "When should current affairs preparation start for SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Current affairs preparation should start from day one of SBI PO preparation rather than being left for the final month, since General Awareness carries a significant share of Mains marks."
                }
              },
              {
                "@type": "Question",
                "name": "Is accuracy or attempt count more important in SBI PO mocks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Accuracy is generally considered more important than attempt count in SBI PO mocks, since a high number of rushed attempts with silly mistakes typically scores lower than a smaller number of carefully solved, accurate attempts."
                }
              },
              {
                "@type": "Question",
                "name": "What should the last 15 days before SBI PO Prelims focus on?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The last 15 days before SBI PO Prelims should focus on daily full-length mocks and revision of already-identified weak areas, with no new topics introduced this close to the exam."
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
      id: "content-override",
      title: "",
      content: <></>
    }
  ],
  faqs: [
    { q: "What is the best study plan for SBI PO 2026?", a: "The best SBI PO study plan follows three phases — a Foundation phase for core concepts, a Strengthening phase focused on high-weightage topics like Data Interpretation and Puzzles, and a final Mock phase built entirely around full-length tests and error analysis rather than new topics." },
    { q: "How many months are needed to prepare for SBI PO?", a: "Most candidates need 3–4 months of consistent preparation for SBI PO Prelims and Mains combined, though a compressed 30-day plan is possible by focusing only on the highest-weightage topics." },
    { q: "How many mock tests should I take before SBI PO Prelims?", a: "Aspirants should aim for 15 to 20 full-length mock tests before SBI PO Prelims, increasing to one mock daily in the final two weeks before the exam." },
    { q: "Should I start Mains preparation before the Prelims result is out?", a: "Yes, starting Mains-level practice in parallel with Prelims preparation — even just one session a week — helps avoid losing the roughly one-month gap between Prelims and Mains to a standing start." },
    { q: "How many hours should I study daily for SBI PO?", a: "Full-time aspirants typically study 7 to 9 hours daily for SBI PO, while working professionals can prepare effectively with 3 to 4 focused hours daily if followed consistently." },
    { q: "What is the most important habit for cracking SBI PO in the first attempt?", a: "Reviewing every mock test's wrong answers through a structured error-notebook system is considered the most important habit for cracking SBI PO in the first attempt, since it converts practice into a measurable score improvement." },
    { q: "Should I start descriptive paper practice early in SBI PO preparation?", a: "Yes, starting descriptive paper practice — one essay and one letter or report per week — from the beginning of preparation is recommended, since candidates who delay it often lose easy marks in Mains." },
    { q: "When should current affairs preparation start for SBI PO?", a: "Current affairs preparation should start from day one of SBI PO preparation rather than being left for the final month, since General Awareness carries a significant share of Mains marks." },
    { q: "Is accuracy or attempt count more important in SBI PO mocks?", a: "Accuracy is generally considered more important than attempt count in SBI PO mocks, since a high number of rushed attempts with silly mistakes typically scores lower than a smaller number of carefully solved, accurate attempts." },
    { q: "What should the last 15 days before SBI PO Prelims focus on?", a: "The last 15 days before SBI PO Prelims should focus on daily full-length mocks and revision of already-identified weak areas, with no new topics introduced this close to the exam." }
  ]
};
