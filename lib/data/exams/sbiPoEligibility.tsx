import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoEligibilityContent: DetailSectionContent = {
  title: "SBI PO Eligibility 2026: Age Limit, Educational Qualification & Number of Attempts",
  overview: "To be eligible for SBI PO 2026, you need to be 21–30 years old as on the cut-off date in the official notification, hold a graduation degree in any discipline from a recognised university, and be an Indian citizen (or meet the specified nationality conditions). There is no minimum percentage requirement. Final year students can apply provisionally.",
  ctaText: "Start Free SBI PO Mock Test",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "SBI PO Eligibility 2026: Age, Qualification & Attempts",
  metaDescription: "SBI PO Eligibility 2026 — age 21–30 years, any graduation degree. Check category-wise age relaxation, attempt limits & who can apply. Start free mock test now.",
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
                "item": "https://app.prepbanker.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "SBI PO",
                "item": "https://app.prepbanker.com/sbi-po"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SBI PO Eligibility 2026",
                "item": "https://app.prepbanker.com/sbi-po/eligibility"
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
            "name": "SBI PO Eligibility 2026: Age Limit, Educational Qualification & Number of Attempts",
            "url": "https://app.prepbanker.com/sbi-po/eligibility",
            "description": "Complete SBI PO Eligibility Criteria 2026 — age limit 21–30 years, any graduation degree, category-wise age relaxation, attempt limits, nationality, and application conditions.",
            "inLanguage": "en-IN",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com"
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
            "headline": "SBI PO Eligibility 2026: Age Limit, Qualification, Attempts & Who Can Apply",
            "url": "https://app.prepbanker.com/sbi-po/eligibility",
            "description": "Detailed SBI PO 2026 eligibility breakdown — age 21–30, any graduation stream, category-wise age relaxation, attempt limits (4 for General, 7 for OBC, unlimited for SC/ST), and final year student rules.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker Editorial Team",
              "url": "https://app.prepbanker.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://app.prepbanker.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://app.prepbanker.com/sbi-po/eligibility"
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
                "name": "What is the age limit for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The SBI PO 2026 age limit is 21 to 30 years as on the cut-off date in the official notification (typically April 1 of the exam year). With category relaxations: OBC candidates can be up to 33 years, SC/ST up to 35 years, and PwD candidates get an additional 10–15 years depending on category. The exact cut-off date will be confirmed in the 2026 notification."
                }
              },
              {
                "@type": "Question",
                "name": "What is the educational qualification required for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Candidates must hold a graduation degree in any discipline from a recognised university or an equivalent qualification approved by the Central Government. There is no minimum percentage requirement — 40%, 55%, or 70%, all are acceptable. Final year students can apply provisionally but must produce proof of graduation before the interview stage."
                }
              },
              {
                "@type": "Question",
                "name": "Can a final year student apply for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Final year students can apply for SBI PO 2026 provisionally. If shortlisted for the interview, they must submit proof of passing their graduation exam by the date specified in the notification. Candidates who cannot produce the graduation certificate at the interview stage will be disqualified from the selection process."
                }
              },
              {
                "@type": "Question",
                "name": "How many attempts are allowed in SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The SBI PO attempt limit is category-wise: General and EWS candidates get 4 attempts maximum; OBC, General (PwBD), and EWS (PwBD) candidates get 7 attempts. SC, ST, SC (PwBD), and ST (PwBD) candidates have no restriction on attempts. Appearing in Prelims — even if you do not clear it — counts as one attempt."
                }
              },
              {
                "@type": "Question",
                "name": "Is 60% marks in graduation required for SBI PO 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. There is no minimum percentage requirement for SBI PO 2026. Any graduate from a recognised university is eligible, regardless of percentage. SBI only checks that you hold a valid graduation degree. Even candidates with 40–50% aggregate in graduation are fully eligible to apply and appear for the exam."
                }
              },
              {
                "@type": "Question",
                "name": "Who is eligible for SBI PO based on nationality?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO is open to: (a) Indian citizens, (b) subjects of Nepal or Bhutan, (c) Tibetan refugees who came to India before January 1, 1962 with the intention of permanent settlement, and (d) persons of Indian origin who have migrated from specified countries (Pakistan, Burma, Sri Lanka, etc.) with the intention of permanently settling in India, subject to government-issued certificates."
                }
              },
              {
                "@type": "Question",
                "name": "Can I apply for SBI PO if I am from OBC creamy layer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. OBC benefits (age relaxation, reservation) are available only to OBC Non-Creamy Layer (NCL) candidates. If you belong to OBC but fall within the creamy layer, you must apply as a General category candidate without OBC relaxation. A valid OBC Non-Creamy Layer certificate issued by a competent authority is required during application and verification."
                }
              },
              {
                "@type": "Question",
                "name": "Can I apply for SBI PO if I have a loan default or bad CIBIL record?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. SBI explicitly states that candidates with a record of default in repayment of loans or credit card dues, or against whose name adverse CIBIL or external agency reports exist, are not eligible for SBI PO appointment. This is a less-discussed but important eligibility condition. Clean up any outstanding dues before applying."
                }
              },
              {
                "@type": "Question",
                "name": "What is the age limit for SBI PO for Ex-Servicemen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ex-Servicemen (ECOs/SSCOs) get 5 years of age relaxation over the General category upper limit of 30 years, making their effective maximum age 35 years. The exact relaxation is calculated based on the period of service rendered. Supporting discharge certificates from the armed forces are required during document verification."
                }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker's SBI PO mock test free for eligible candidates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Once you confirm your eligibility, PrepBanker's free full-length SBI PO Prelims mock test is available at app.prepgrind.com/register — no payment required. The test follows the 2026 exam pattern with section-wise 20-minute timers. It gives you a real performance report immediately after submission so you can benchmark your starting score."
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
      id: 'eligibility-snapshot',
      title: "📌 SBI PO 2026 — Eligibility Snapshot",
      content: (
        <div className="space-y-4">
          <p className="text-slate-650 text-sm sm:text-[15px] leading-relaxed">
            The fundamental parameters governing SBI PO eligibility are outlined in the quick snapshot specifications table below:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Exam Name</td>
                  <td className="px-4 py-3">SBI Probationary Officer (SBI PO) 2026</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Conducting Body</td>
                  <td className="px-4 py-3">State Bank of India (SBI)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Minimum Age</td>
                  <td className="px-4 py-3">21 years</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Maximum Age</td>
                  <td className="px-4 py-3">30 years (General/EWS) | relaxation for reserved categories</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Age Cut-Off Date</td>
                  <td className="px-4 py-3">As specified in the official notification (typically April 1)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Educational Qualification</td>
                  <td className="px-4 py-3">Graduation in any discipline from a recognised university</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Minimum Marks Required</td>
                  <td className="px-4 py-3">None — any percentage is acceptable</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Final Year Students</td>
                  <td className="px-4 py-3">Eligible to apply provisionally</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Nationality</td>
                  <td className="px-4 py-3">Indian citizen (or specified equivalents)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Max Attempts (General/EWS)</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Max Attempts (OBC)</td>
                  <td className="px-4 py-3">7</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Max Attempts (SC/ST)</td>
                  <td className="px-4 py-3">No limit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Application Fee</td>
                  <td className="px-4 py-3">₹750 (General/OBC/EWS) | Nil (SC/ST/PwD)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Official Site</td>
                  <td className="px-4 py-3">sbi.co.in/web/careers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'age-limit',
      title: "What Is the Age Limit for SBI PO 2026?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The SBI PO 2026 age limit is <strong>21 years (minimum) to 30 years (maximum)</strong> as on the cut-off date given in the official notification. SBI typically uses April 1 of the exam year as the age calculation date. For 2026, this means:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-3 text-slate-650 text-xs sm:text-sm">
            <li><strong>Lower limit:</strong> Born on or before <strong>April 1, 2005</strong> (you must be at least 21 by the cut-off date)</li>
            <li><strong>Upper limit:</strong> Born on or after <strong>April 2, 1996</strong> (General/EWS, before relaxation)</li>
          </ul>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The exact birth-date range will be confirmed in the official 2026 notification PDF.
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Category</th>
                  <th className="px-4 py-2.5">Age Relaxation</th>
                  <th className="px-4 py-2.5">Effective Upper Age Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">General / EWS</td>
                  <td className="px-4 py-3">No relaxation</td>
                  <td className="px-4 py-3">30 years</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">OBC (Non-Creamy Layer)</td>
                  <td className="px-4 py-3">+ 3 years</td>
                  <td className="px-4 py-3">33 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">SC / ST</td>
                  <td className="px-4 py-3">+ 5 years</td>
                  <td className="px-4 py-3">35 years</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">PwBD — General / EWS</td>
                  <td className="px-4 py-3">+ 10 years</td>
                  <td className="px-4 py-3">40 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">PwBD — OBC</td>
                  <td className="px-4 py-3">+ 13 years</td>
                  <td className="px-4 py-3">43 years</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">PwBD — SC / ST</td>
                  <td className="px-4 py-3">+ 15 years</td>
                  <td className="px-4 py-3">45 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Ex-Servicemen (ECOs / SSCOs)</td>
                  <td className="px-4 py-3">+ 5 years</td>
                  <td className="px-4 py-3">35 years</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">J&K domicile (1980–1989 period)</td>
                  <td className="px-4 py-3">+ 5 years</td>
                  <td className="px-4 py-3">35 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong>How SBI counts age:</strong> The age is not calculated on the date of your application. It is calculated as of the <strong>cut-off date given in the notification</strong> — typically April 1. If you turn 30 on April 2, you are still eligible for that year's cycle. If you turned 31 on March 25, you are not.
          </p>
          <HighlightBox type="info" title="Pro Tip">
            If you are 29 years old and this is potentially your last attempt as a General category candidate (since you only get 4 attempts), treat this cycle with everything you have. Appear serious from the first mock test. Candidates who use their final attempt casually and then scramble regret it far more than those who gave 100% in earlier attempts.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'qualification',
      title: "What Is the Educational Qualification for SBI PO 2026?",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            This is one of the most searched questions — and the answer is simpler than most candidates expect.
          </p>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-semibold">
            Minimum requirement: A Bachelor's degree (graduation) in any discipline from a recognised university or an equivalent qualification approved by the Central Government.
          </p>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            That's it. Your stream does not matter. Your percentage does not matter. Whether you studied Arts, Commerce, Science, Engineering, Law, or Medicine — all are equally eligible.
          </p>

          <div>
            <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-2">Eligible Degrees for SBI PO 2026</h4>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-sm border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Degree Type</th>
                    <th className="px-4 py-2.5">Eligible?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-655">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">B.A. / B.Com / B.Sc (any stream)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">B.Tech / B.E. (Engineering)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">BBA / BCA / BHM</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">LLB / LLM (Law)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">MBBS / BDS (Medical)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Chartered Accountant (CA)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Cost Accountant (ICMA/CMA)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Integrated Dual Degree (IDD)</td>
                    <td className="px-4 py-3 text-green-650 font-semibold">Yes (must be completed by specified date)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Diploma (without a full degree)</td>
                    <td className="px-4 py-3 text-red-650 font-semibold">No</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">12th Pass (without graduation)</td>
                    <td className="px-4 py-3 text-red-650 font-semibold">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-1">Is 60% in Graduation Required?</h4>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              No. SBI does not mention any minimum percentage in the official notification. A candidate with 45% aggregate and a candidate with 85% aggregate are on the same footing when it comes to eligibility. The cut off that matters is not in your marksheet — it's in the exam.
            </p>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-2">
              This is a common myth that keeps some candidates from even applying. Don't let your graduation percentage disqualify you from a process that never asked for it.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-850 text-sm sm:text-base mb-1">Can Final Year Students Apply?</h4>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Yes — with one important condition. If you are currently in the final year or final semester of graduation, you can apply for SBI PO 2026 <strong>provisionally</strong>. However:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-3 text-slate-655 text-xs sm:text-sm">
              <li>If shortlisted for the interview (Phase 3), you must produce your graduation <strong>pass certificate or provisional degree certificate</strong> before or at the time of the interview</li>
              <li>Candidates holding an Integrated Dual Degree (IDD) must complete the IDD degree by the date specified in the notification</li>
              <li>Students who cannot furnish proof of graduation at the interview stage are disqualified</li>
            </ul>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-2">
              <strong>Practical implication:</strong> Start your exam preparation now, even if your final exams are a few months away. The Prelims and Mains will likely happen before your graduation results are out — you sit both exams, and only produce the certificate at the interview stage.
            </p>
            <HighlightBox type="info" title="Pro Tip">
              If you are a final year student, attempt the SBI PO exam this year even though it is provisional. This is because: (a) it counts as one attempt only if you appear in Prelims, (b) it gives you real exam experience at zero additional risk, and (c) clearing the exam while still in college removes one of the biggest regrets many aspirants carry — "I should have started earlier."
            </HighlightBox>
          </div>
        </div>
      )
    },
    {
      id: 'attempts',
      title: "How Many Attempts Are Allowed in SBI PO 2026?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            SBI PO has an explicit cap on the number of attempts, unlike IBPS PO (which has no attempt limit). This is one of the most critical eligibility conditions that candidates underestimate until it is too late.
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-4">
            <table className="w-full text-left text-sm border-collapse min-w-[400px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Category</th>
                  <th className="px-4 py-2.5">Maximum Attempts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">General</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">EWS (Economically Weaker Section)</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">General (PwBD)</td>
                  <td className="px-4 py-3">7</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">EWS (PwBD)</td>
                  <td className="px-4 py-3">7</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">OBC (Non-Creamy Layer)</td>
                  <td className="px-4 py-3">7</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">OBC (PwBD)</td>
                  <td className="px-4 py-3">7</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">SC</td>
                  <td className="px-4 py-3">No restriction</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">SC (PwBD)</td>
                  <td className="px-4 py-3">No restriction</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">ST</td>
                  <td className="px-4 py-3">No restriction</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">ST (PwBD)</td>
                  <td className="px-4 py-3">No restriction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2 text-slate-650 text-sm leading-relaxed">
            <h4 className="font-bold text-slate-850">What Counts as One Attempt?</h4>
            <p>
              Appearing in the <strong>Prelims exam</strong> counts as one attempt — even if you score 0 or are absent for some sections. Registering and paying the application fee but <strong>not appearing</strong> does not count as an attempt.
            </p>
            <p>
              This distinction matters. If you apply but fall sick on exam day and cannot appear, that cycle does not consume one of your 4 attempts. But if you appear for even one section of Prelims, the attempt is used.
            </p>
            <h4 className="font-bold text-slate-850 mt-4">Strategic Implication of the Attempt Limit</h4>
            <p>
              For General category candidates with 4 attempts, the math is straightforward. If you start at age 22, your 4 attempts could potentially span ages 22–25 (approximately), well within the 30-year age ceiling. But if you start at 27, 3 failed attempts leave you with exactly one shot at 29–30. The attempt ceiling bites hardest for candidates who delay starting.
            </p>
            <p>
              SBI PO's attempt limit is also why the exam rewards consistent, structured preparation over cramming before each cycle. Candidates who take a mock test in January, identify weak areas, plug the gaps, and retest in March are far better positioned than someone who reads &quot;SBI PO syllabus&quot; for the first time in May.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'nationality',
      title: "Nationality Criteria for SBI PO 2026",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            SBI PO is open to more than just Indian citizens, though the vast majority of applicants will fall under the Indian citizen category.
          </p>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The following categories are eligible:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-655 text-xs sm:text-sm pl-3">
            <li><strong>Citizen of India</strong> — the primary category</li>
            <li><strong>Subject of Nepal or Bhutan</strong> — citizens of India's immediate neighbors with historical ties</li>
            <li><strong>Tibetan refugee</strong> who came to India before January 1, 1962, with the intention of permanent settlement</li>
            <li><strong>Person of Indian origin</strong> who migrated from Pakistan, Burma, Sri Lanka, Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire, Ethiopia, or Vietnam with the intention of permanently settling in India — subject to a certificate of eligibility from the Government of India</li>
          </ol>
          <p className="text-slate-650 text-sm leading-relaxed mt-2">
            Candidates in categories 2–4 must obtain a <strong>certificate of eligibility</strong> from the Government of India and produce it during the application or document verification process. Without this certificate, they cannot be appointed even if they clear all exam stages.
          </p>
        </div>
      )
    },
    {
      id: 'credit-history',
      title: "Credit History and Other Disqualification Conditions",
      content: (
        <div className="space-y-4 text-slate-650 text-sm sm:text-[15px] leading-relaxed">
          <p>
            This is a condition that almost no competitor page mentions prominently, and it catches candidates by surprise at the appointment stage.
          </p>
          <h4 className="font-bold text-slate-850">CIBIL and Loan Default Rule</h4>
          <p className="font-semibold text-slate-800">
            SBI explicitly states: candidates with a record of default in repayment of loans or credit card dues, or against whose name adverse CIBIL or external agency reports exist, are not eligible for appointment.
          </p>
          <p>
            This means:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-3 text-xs sm:text-sm text-slate-655">
            <li>Even if you clear Prelims, Mains, and the Interview with flying colours, SBI verifies your credit history before issuing an appointment letter</li>
            <li>Outstanding education loan defaults, unpaid credit card dues, or any active NPA (Non-Performing Asset) in your name can disqualify you at the final stage</li>
            <li>This applies not just at appointment but also at the time of joining — SBI conducts background checks during onboarding</li>
          </ul>
          <p className="mt-2">
            If you have any overdue loans or credit card balances, clear them as soon as possible. A clean CIBIL score is as much a part of your SBI PO readiness as your Quantitative Aptitude score.
          </p>
        </div>
      )
    },
    {
      id: 'required-documents',
      title: "Documents Required to Prove SBI PO Eligibility",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Collecting documents early saves the last-minute scramble. Here is what to keep ready:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-655 text-xs sm:text-sm pl-3">
            <li><strong>Age proof</strong> — 10th mark sheet or birth certificate (either is acceptable; the 10th mark sheet is the most commonly used)</li>
            <li><strong>Graduation degree / mark sheets</strong> — all semester or year-wise mark sheets, plus the provisional or final degree certificate</li>
            <li><strong>Category certificate</strong> — caste certificate for OBC/SC/ST; Income and Asset Certificate for EWS (in the Government of India prescribed format, issued by a Competent Authority)</li>
            <li><strong>OBC Non-Creamy Layer certificate</strong> — must be current and recent; some SBI cycles specify the certificate cannot be more than 6 months old at the time of interview</li>
            <li><strong>PwBD certificate</strong> — issued by a government-recognized medical board specifying the type and extent of disability</li>
            <li><strong>Ex-Servicemen discharge certificate</strong> — service certificate from the Armed Forces confirming period of service</li>
            <li><strong>Passport-size photograph and signature</strong> — scanned copies in specified dimensions for the online application; originals at the interview</li>
            <li><strong>Photo ID proof</strong> — Aadhaar, PAN card, Passport, or Voter ID</li>
          </ol>
        </div>
      )
    },
    {
      id: 'prepbanker-usage',
      title: "How to Use PrepBanker Once You Confirm Your SBI PO 2026 Eligibility",
      content: (
        <div className="space-y-4 text-slate-650 text-sm sm:text-[15px] leading-relaxed font-normal">
          <p>
            Confirming eligibility is step one. Step two is converting that eligibility into preparation that actually moves your score. PrepBanker is built to close that gap as quickly as possible.
          </p>
          <div className="space-y-3 font-normal text-slate-655 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Start with the free Prelims mock.</strong><br />
              Register at <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">app.prepgrind.com/register</a> and take PrepBanker's free full-length SBI PO Prelims test before doing anything else. Your first score — however uncomfortable — tells you more than any study plan can. You will immediately see which of the three sections (English, Quant, Reasoning) needs the most work.
            </p>
            <p>
              <strong>Use sectional tests to drill specific sections.</strong><br />
              If your Reasoning score in the mock is 15/30, the problem is almost certainly Puzzles and Seating Arrangement — the highest-weightage topic in that section. PrepBanker's chapter-wise Reasoning tests let you practice only Puzzles for 20 minutes, exactly matching the actual Prelims section duration.
            </p>
            <p>
              <strong>Build a preparation plan around your attempt count.</strong><br />
              If you are a General/EWS candidate with 4 attempts, PrepBanker's dashboard helps you track improvement across mock attempts. A disciplined candidate can see a 10–15 mark improvement over 4–5 mocks. If you are in the first attempt and scoring 55–60, that is a recoverable gap with 3–4 weeks of focused sectional practice.
            </p>
            <p>
              <strong>Prepare Mains from day one.</strong><br />
              Don't wait for your Prelims result to start Mains prep. The gap between Prelims result and Mains exam is typically 2–3 weeks — enough time only for final revision, not fresh learning. PrepBanker's Mains mock tests include the full descriptive paper and section-wise analysis for all four Mains sections.
            </p>
            <p>
              <strong>Track your improvement honestly.</strong><br />
              PrepBanker's score history graph shows your performance trend across every test. Upward trend over 5+ mocks is the best predictor of actual exam performance. Flat or declining trend is a signal to change your study approach, not attempt more tests.
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
            Eligibility confirmed — now the preparation begins.
          </p>
          <p>
            The <Link href="/sbi-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">Free SBI PO Mock Test</Link> series is the fastest way to benchmark your starting position. It follows the 2026 pattern exactly — with a strict section-wise timer. Attempt it today, not after "one more week of study."
          </p>
          <p>
            Understanding eligibility is more useful when you also understand what the exam tests. The <Link href="/sbi-po/exam-pattern" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Exam Pattern and Syllabus page</Link> breaks down every section, marks, and time limit — Prelims and Mains — so you know what you are preparing for.
          </p>
          <p>
            Once you start mock testing, you need a target to aim for. The <Link href="/sbi-po/cut-off" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Cut Off page</Link> gives you category-wise historical cut-offs from 2022–2025, so you know exactly how much buffer above the cut-off your mock scores represent.
          </p>
          <p>
            Preparing for multiple banking exams this cycle? The <Link href="/sbi-po/sbi-po-vs-ibps-po" className="font-bold text-[#1B6EB5] hover:underline">SBI PO vs IBPS PO Comparison Guide</Link> shows where IBPS PO differs from SBI PO — particularly the important contrast on attempt limits — so you can manage both applications without confusion.
          </p>
          <p>
            Notification just released? The <Link href="/sbi-po/important-dates" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Important Dates page</Link> tracks every deadline — application open and close dates, Prelims admit card, Mains date, and result — so you never miss a window.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "What is the age limit for SBI PO 2026?",
      a: "The SBI PO 2026 age limit is 21 to 30 years as on the cut-off date in the official notification (typically April 1 of the exam year). With category relaxations: OBC candidates can be up to 33 years, SC/ST up to 35 years, and PwD candidates get an additional 10–15 years depending on category. The exact cut-off date will be confirmed in the 2026 notification."
    },
    {
      q: "What is the educational qualification required for SBI PO 2026?",
      a: "Candidates must hold a graduation degree in any discipline from a recognised university or an equivalent qualification approved by the Central Government. There is no minimum percentage requirement — 40%, 55%, or 70%, all are acceptable. Final year students can apply provisionally but must produce proof of graduation before the interview stage."
    },
    {
      q: "Can a final year student apply for SBI PO 2026?",
      a: "Yes. Final year students can apply for SBI PO 2026 provisionally. If shortlisted for the interview, they must submit proof of passing their graduation exam by the date specified in the notification. Candidates who cannot produce the graduation certificate at the interview stage will be disqualified from the selection process."
    },
    {
      q: "How many attempts are allowed in SBI PO?",
      a: "The SBI PO attempt limit is category-wise: General and EWS candidates get 4 attempts maximum; OBC, General (PwBD), and EWS (PwBD) candidates get 7 attempts. SC, ST, SC (PwBD), and ST (PwBD) candidates have no restriction on attempts. Appearing in Prelims — even if you do not clear it — counts as one attempt."
    },
    {
      q: "Is 60% marks in graduation required for SBI PO 2026?",
      a: "No. There is no minimum percentage requirement for SBI PO 2026. Any graduate from a recognised university is eligible, regardless of percentage. SBI only checks that you hold a valid graduation degree. Even candidates with 40–50% aggregate in graduation are fully eligible to apply and appear for the exam."
    },
    {
      q: "Who is eligible for SBI PO based on nationality?",
      a: "SBI PO is open to: (a) Indian citizens, (b) subjects of Nepal or Bhutan, (c) Tibetan refugees who came to India before January 1, 1962 with the intention of permanent settlement, and (d) persons of Indian origin who have migrated from specified countries (Pakistan, Burma, Sri Lanka, etc.) with the intention of permanently settling in India, subject to government-issued certificates."
    },
    {
      q: "Can I apply for SBI PO if I am from OBC creamy layer?",
      a: "No. OBC benefits (age relaxation, reservation) are available only to OBC Non-Creamy Layer (NCL) candidates. If you belong to OBC but fall within the creamy layer, you must apply as a General category candidate without OBC relaxation. A valid OBC Non-Creamy Layer certificate issued by a competent authority is required during application and verification."
    },
    {
      q: "Can I apply for SBI PO if I have a loan default or bad CIBIL record?",
      a: "No. SBI explicitly states that candidates with a record of default in repayment of loans or credit card dues, or against whose name adverse CIBIL or external agency reports exist, are not eligible for SBI PO appointment. This is a less-discussed but important eligibility condition. Clean up any outstanding dues before applying."
    },
    {
      q: "What is the age limit for SBI PO for Ex-Servicemen?",
      a: "Ex-Servicemen (ECOs/SSCOs) get 5 years of age relaxation over the General category upper limit of 30 years, making their effective maximum age 35 years. The exact relaxation is calculated based on the period of service rendered. Supporting discharge certificates from the armed forces are required during document verification."
    },
    {
      q: "Is PrepBanker's SBI PO mock test free for eligible candidates?",
      a: "Yes. Once you confirm your eligibility, PrepBanker's free full-length SBI PO Prelims mock test is available at app.prepgrind.com/register — no payment required. The test follows the 2026 exam pattern with section-wise 20-minute timers. It gives you a real performance report immediately after submission so you can benchmark your starting score."
    }
  ]
};
