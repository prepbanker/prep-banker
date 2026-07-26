// PATH: lib/data/exams/sbiPoEligibility.tsx
import React from 'react';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoEligibilityContent: DetailSectionContent = {
  title: "SBI PO Eligibility Criteria 2026",
  overview: "To be eligible for SBI PO 2026, a candidate must be an Indian citizen (or fall under specific eligible categories from Nepal, Bhutan, or as a person of Indian origin), be between 21 and 30 years of age as on 1 April 2026, and hold a graduation degree in any discipline from a recognised university as on 30 September 2026. Age relaxation is available for reserved categories, ranging from 3 years for OBC to 15 years for PwBD (SC/ST) candidates. The maximum number of attempts is 6 for General/EWS and 9 for OBC/PwBD (General/OBC), with no restriction for SC/ST candidates.",
  ctaText: "Check SBI PO Notification",
  ctaHref: "/sbi-po/notification",
  metaTitle: "SBI PO Eligibility Criteria 2026: Age & Rules",
  metaDescription: "SBI PO Eligibility Criteria 2026 — age limit 21-30 years, graduation qualification, nationality rules & number of attempts. Full details here.",
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
              { "@type": "ListItem", "position": 3, "name": "Eligibility", "item": "https://prepbanker.com/sbi-po/eligibility" }
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
            "headline": "SBI PO Eligibility Criteria 2026",
            "datePublished": "2026-06-18",
            "dateModified": "2026-07-25",
            "author": { "@type": "Organization", "name": "PrepBanker" },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "logo": { "@type": "ImageObject", "url": "https://prepbanker.com/images/logo.png" }
            },
            "mainEntityOfPage": "https://prepbanker.com/sbi-po/eligibility"
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
                "name": "What is the age limit for SBI PO 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Candidates must be between 21 and 30 years of age as on 1 April 2026." }
              },
              {
                "@type": "Question",
                "name": "What is the educational qualification required for SBI PO 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "A graduation degree in any discipline from a recognised university, as on 30 September 2026." }
              },
              {
                "@type": "Question",
                "name": "How many attempts are allowed for SBI PO General category?",
                "acceptedAnswer": { "@type": "Answer", "text": "General and EWS candidates are allowed a maximum of 6 attempts." }
              },
              {
                "@type": "Question",
                "name": "Is there a limit on attempts for SC/ST candidates in SBI PO?",
                "acceptedAnswer": { "@type": "Answer", "text": "No, there is no restriction on the number of attempts for SC and ST candidates." }
              },
              {
                "@type": "Question",
                "name": "Can final-year students apply for SBI PO 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, final-year or final-semester students can apply provisionally, but must provide proof of graduation by 30 September 2026 if called for interview." }
              },
              {
                "@type": "Question",
                "name": "What is the age relaxation for OBC candidates in SBI PO?",
                "acceptedAnswer": { "@type": "Answer", "text": "OBC candidates in the non-creamy layer get an age relaxation of 3 years." }
              },
              {
                "@type": "Question",
                "name": "Is prior work experience required for SBI PO?",
                "acceptedAnswer": { "@type": "Answer", "text": "No, SBI PO has no experience requirement. Freshers with a graduation degree are fully eligible." }
              },
              {
                "@type": "Question",
                "name": "Does appearing in SBI PO Prelims count as an attempt?",
                "acceptedAnswer": { "@type": "Answer", "text": "No, appearing only in the Preliminary exam does not count as an attempt. Appearing in the Mains exam does count." }
              },
              {
                "@type": "Question",
                "name": "Is a candidate below 60% graduation marks eligible for SBI PO?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, candidates with a percentage below 60% are still eligible to apply." }
              },
              {
                "@type": "Question",
                "name": "What nationality is required to apply for SBI PO?",
                "acceptedAnswer": { "@type": "Answer", "text": "Candidates must be Indian citizens, or fall under specific eligible categories such as subjects of Nepal or Bhutan, Tibetan refugees who arrived before 1962, or persons of Indian origin from specified countries, with a Government of India eligibility certificate." }
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
    { q: "What is the age limit for SBI PO 2026?", a: "Candidates must be between 21 and 30 years of age as on 1 April 2026." },
    { q: "What is the educational qualification required for SBI PO 2026?", a: "A graduation degree in any discipline from a recognised university, as on 30 September 2026." },
    { q: "How many attempts are allowed for SBI PO General category?", a: "General/EWS candidates are allowed a maximum of 6 attempts." },
    { q: "Is there a limit on attempts for SC/ST candidates in SBI PO?", a: "No, there is no restriction on the number of attempts for SC/ST candidates." },
    { q: "Can final-year students apply for SBI PO 2026?", a: "Yes, final-year/semester students can apply provisionally, but must provide proof of graduation by 30 September 2026 if called for interview." },
    { q: "What is the age relaxation for OBC candidates in SBI PO?", a: "OBC (Non-Creamy Layer) candidates get an age relaxation of 3 years." },
    { q: "Is prior work experience required for SBI PO?", a: "No, SBI PO has no experience requirement — freshers with a graduation degree are fully eligible." },
    { q: "Does appearing in SBI PO Prelims count as an attempt?", a: "No, appearing only in the Preliminary exam does not count as an attempt; appearing in the Mains exam does." },
    { q: "Is a candidate below 60% graduation marks eligible for SBI PO?", a: "Yes, candidates with a percentage below 60% are still eligible to apply." },
    { q: "What nationality is required to apply for SBI PO?", a: "Candidates must be Indian citizens, or fall under specific eligible categories such as subjects of Nepal/Bhutan, Tibetan refugees (pre-1962), or persons of Indian origin from specified countries, with a Government of India eligibility certificate." }
  ]
};
