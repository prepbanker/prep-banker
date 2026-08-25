import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const ibpsPoSalaryContent: DetailSectionContent = {
  title: "IBPS PO Salary 2026: In-Hand Pay, Allowances & What You Actually Take Home",
  overview: "An IBPS PO officer's in-hand salary in 2026 is approximately ₹36,000 to ₹42,000 per month, depending on the posting city. The basic pay at joining is ₹23,700. Add Dearness Allowance, HRA, and Special Allowance — gross salary comes to ₹52,000–₹55,000. After NPS deductions and professional tax, the net take-home lands in the ₹36,000–₹42,000 range.",
  ctaText: "Start Free IBPS PO Mock Test",
  ctaHref: "https://app.prepgrind.com/signup/ibps-po",
  metaTitle: "IBPS PO Salary : In-Hand Pay, Allowances & Perks",
  metaDescription: "IBPS PO 2026 salary starts at ₹36,000–₹42,000 in-hand per month. See basic pay, DA, HRA, allowances, perks, and how salary grows with promotions.",
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
                "name": "Salary",
                "item": "https://prepbanker.com/ibps-po/salary"
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
            "name": "IBPS PO Salary 2026: In-Hand Pay, Allowances & Perks",
            "description": "Complete IBPS PO 2026 salary breakdown — basic pay, DA, HRA, special allowance, in-hand salary range, deductions, perks, and salary growth after promotions.",
            "url": "https://prepbanker.com/ibps-po/salary",
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
                { "@type": "ListItem", "position": 3, "name": "Salary", "item": "https://prepbanker.com/ibps-po/salary" }
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
            "headline": "IBPS PO Salary 2026: In-Hand Pay, Allowances, Perks & Promotion-wise Growth",
            "description": "Updated IBPS PO 2026 salary guide with complete breakdown of basic pay, DA, HRA, special allowances, deductions, net in-hand salary, and career growth salary at each promotion level.",
            "url": "https://prepbanker.com/ibps-po/salary",
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
            "mainEntityOfPage": "https://prepbanker.com/ibps-po/salary"
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
                "name": "What is the in-hand salary of IBPS PO per month?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The in-hand salary of an IBPS PO officer ranges from approximately ₹36,000 to ₹42,000 per month depending on the posting city. Metro city postings receive higher HRA (9% of basic pay), which pushes the take-home higher. The gross salary (before deductions) is around ₹52,000–₹55,000. Deductions include NPS contribution, professional tax, and insurance premium."
                }
              },
              {
                "@type": "Question",
                "name": "What is the basic pay of IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The basic pay of an IBPS PO (Scale I officer) is ₹23,700 per month at the time of joining. The pay scale is ₹23700–980/7–30560–1145/2–32850–1310/7–42020, meaning the basic pay increases by ₹980 annually for the first 7 years, then by ₹1,145 for the next 2 years, and ₹1,310 for the final 7 years within Scale I."
                }
              },
              {
                "@type": "Question",
                "name": "What are the perks and allowances given to IBPS PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IBPS PO officers receive: Dearness Allowance (DA, revised quarterly), House Rent Allowance (HRA, 7–9% of basic based on city), Special Allowance, City Compensatory Allowance (CCA), medical aid, leased accommodation or furniture allowance, travel allowance, newspaper reimbursement, and staff loan at subsidised interest rates. Petrol reimbursement and mobile phone allowance are also provided in many banks."
                }
              },
              {
                "@type": "Question",
                "name": "How much does an IBPS PO earn after all deductions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After deductions (NPS at 10% of basic+DA, professional tax ₹200/month, group insurance ~₹100–200/month), the net in-hand salary for an IBPS PO in a metro city is approximately ₹38,000–₹42,000 per month. In non-metro cities, lower HRA reduces take-home to roughly ₹34,000–₹38,000. These figures are approximate and vary by bank and city."
                }
              },
              {
                "@type": "Question",
                "name": "What is the IBPS PO salary growth after promotion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IBPS PO officers are promoted through Scale II (Manager), Scale III (Senior Manager), Scale IV (Chief Manager), Scale V (AGM), Scale VI (DGM), and Scale VII (GM). At Scale II, in-hand salary reaches ₹48,000–₹55,000. At Scale III (Senior Manager), it crosses ₹60,000. By Scale V (AGM), monthly take-home can reach ₹90,000–₹1,00,000+."
                }
              },
              {
                "@type": "Question",
                "name": "Is IBPS PO salary better than SBI PO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO has a slightly higher starting basic pay (₹27,620 vs ₹23,700 for IBPS PO). SBI PO's in-hand salary is approximately ₹42,000–₹52,000 per month — marginally higher than IBPS PO. However, IBPS PO offers placement across 11 banks with varied locations and growth paths. Both offer broadly comparable compensation; SBI has an edge in basic pay and brand recognition."
                }
              },
              {
                "@type": "Question",
                "name": "Do IBPS PO officers get a home loan at lower interest rates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. IBPS PO officers (and all bank employees) are eligible for staff housing loans at significantly concessional interest rates — typically 2–3% below the prevailing retail rate. For a ₹30 lakh home loan, this translates to EMI savings of ₹6,000–₹10,000 per month compared to what a non-bank employee would pay. This benefit substantially increases the effective value of the compensation package."
                }
              },
              {
                "@type": "Question",
                "name": "What is the pay scale for IBPS PO Scale I?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The IBPS PO Scale I pay scale is ₹23700–980/7–30560–1145/2–32850–1310/7–42020. This means: starting basic pay ₹23,700; annual increment of ₹980 for 7 years (reaching ₹30,560); then ₹1,145 for 2 years (reaching ₹32,850); then ₹1,310 for 7 years (reaching ₹42,020). The entire Scale I progression takes approximately 16 years."
                }
              },
              {
                "@type": "Question",
                "name": "What deductions are made from IBPS PO salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard monthly deductions from IBPS PO gross salary include: NPS (National Pension System) contribution at 10% of basic pay + DA; professional tax (~₹200/month, varies by state); group insurance premium (~₹100–200/month); and income tax (if applicable, based on total annual income). Recovery of any staff loans taken is also deducted directly from salary."
                }
              },
              {
                "@type": "Question",
                "name": "Is PrepBanker free for IBPS PO mock tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. PrepBanker offers one free full-length IBPS PO Prelims mock test at app.prepgrind.com/signup/ibps-po — no payment or credit card needed. The free test includes real-time sectional timers, score analysis, accuracy breakdown, and topic-wise performance. Additional full mocks, Mains tests, and DPPs are part of paid plans."
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
      title: "IBPS PO 2026 — Salary Quick Snapshot",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary">
            <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 my-2 font-normal">
              <li><strong>Post:</strong> Probationary Officer / Junior Management Grade Scale I</li>
              <li><strong>Basic Pay at Joining:</strong> ₹23,700 per month</li>
              <li><strong>Pay Scale:</strong> ₹23700–980/7–30560–1145/2–32850–1310/7–42020</li>
              <li><strong>Gross Salary (approx.):</strong> ₹52,000–₹55,000 per month</li>
              <li><strong>In-hand Salary (approx.):</strong> ₹36,000–₹42,000 per month (city-dependent)</li>
              <li><strong>Dearness Allowance:</strong> Revised quarterly; approx. 46–50% of basic pay (2025 rate)</li>
              <li><strong>HRA:</strong> 7% (rural/semi-urban), 8% (urban), 9% (metro) of basic pay</li>
              <li><strong>Pension:</strong> National Pension System (NPS) — 10% of basic+DA contributed by employee</li>
              <li><strong>Annual Increment:</strong> ₹980 per year for first 7 years in Scale I</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'salary-structure',
      title: "What Is the IBPS PO Salary Structure in 2026?",
      content: (
        <div className="space-y-5">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The IBPS PO salary is not just a single number — it's a package built from several components, each calculated differently. Understanding each component helps you estimate your actual take-home accurately, not just the gross figure.
          </p>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Basic Pay and Annual Increments</div>
            <p className="mb-3 text-slate-600 text-xs sm:text-sm">
              The starting basic pay for IBPS PO (Scale I) is <strong>₹23,700 per month</strong>. This is the foundation on which every other allowance is calculated. Basic pay increases annually through the pay scale progression:
            </p>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Increment Staggered</th>
                    <th className="px-4 py-2.5">Increment Amount</th>
                    <th className="px-4 py-2.5">After Increment Basic Pay (Approx.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Start (Year 0)</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">₹23,700</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Years 1–7 (7 increments)</td>
                    <td className="px-4 py-3">₹980/year</td>
                    <td className="px-4 py-3">Up to ~₹30,560</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Years 8–9 (2 increments)</td>
                    <td className="px-4 py-3">₹1,145/year</td>
                    <td className="px-4 py-3">Up to ~₹32,850</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Scale Cap (Scale I)</td>
                    <td className="px-4 py-3">₹1,310/year (for 7 years)</td>
                    <td className="px-4 py-3">₹42,020 (long-run max)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Dearness Allowance (DA)</div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              DA is calculated as a percentage of basic pay and is revised every quarter (January, April, July, October) based on the Consumer Price Index (CPI). As of late 2025, DA for public sector bank employees was approximately <strong>46–50% of basic pay</strong>. At ₹23,700 basic pay and 48% DA, this adds about <strong>₹11,376/month</strong>.
            </p>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">House Rent Allowance (HRA)</div>
            <p className="mb-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              HRA depends on the city tier of your posting:
            </p>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">City Tier</th>
                    <th className="px-4 py-2.5">Cities Covered (Examples)</th>
                    <th className="px-4 py-2.5">HRA Rate (% of Basic)</th>
                    <th className="px-4 py-2.5">HRA Amount at Starting Basic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Metro</td>
                    <td className="px-4 py-3">Mumbai, Delhi, Chennai, Kolkata, Bengaluru, Hyderabad</td>
                    <td className="px-4 py-3">9%</td>
                    <td className="px-4 py-3">~₹2,133/month</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Urban</td>
                    <td className="px-4 py-3">Population 5 lakh+</td>
                    <td className="px-4 py-3">8%</td>
                    <td className="px-4 py-3">~₹1,896/month</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Semi-Urban / Rural</td>
                    <td className="px-4 py-3">Smaller towns, rural branches</td>
                    <td className="px-4 py-3">7%</td>
                    <td className="px-4 py-3">~₹1,659/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-550 leading-relaxed font-normal">
              This is why two IBPS PO officers at the same scale earn different take-home amounts. A posting in Mumbai gives ₹474/month more HRA than a posting in a Tier-2 city — small in absolute terms, but it compounds over years.
            </p>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Special Allowance & City Compensatory Allowance (CCA)</div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>Special Allowance:</strong> A fixed percentage of basic pay, revised periodically. This typically adds <strong>₹5,000–₹7,500/month</strong> depending on the bank.
            </p>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>City Compensatory Allowance (CCA):</strong> Provided for postings in specified cities and typically ranges from <strong>₹540 to ₹870 per month</strong> based on city category.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'in-hand-salary',
      title: "IBPS PO Gross Salary vs In-Hand Salary: Complete Breakdown",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Here is the full monthly salary calculation for an IBPS PO officer at the entry level (basic pay ₹23,700), broken down by city category:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Salary Component</th>
                  <th className="px-4 py-2.5">Metro City</th>
                  <th className="px-4 py-2.5">Urban City</th>
                  <th className="px-4 py-2.5">Semi-Urban / Rural</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Basic Pay</td>
                  <td className="px-4 py-3">₹23,700</td>
                  <td className="px-4 py-3">₹23,700</td>
                  <td className="px-4 py-3">₹23,700</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Dearness Allowance (48%)</td>
                  <td className="px-4 py-3">₹11,376</td>
                  <td className="px-4 py-3">₹11,376</td>
                  <td className="px-4 py-3">₹11,376</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">HRA (9% / 8% / 7%)</td>
                  <td className="px-4 py-3">₹2,133</td>
                  <td className="px-4 py-3">₹1,896</td>
                  <td className="px-4 py-3">₹1,659</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance (~24%)</td>
                  <td className="px-4 py-3">₹5,688</td>
                  <td className="px-4 py-3">₹5,688</td>
                  <td className="px-4 py-3">₹5,688</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">CCA</td>
                  <td className="px-4 py-3">₹870</td>
                  <td className="px-4 py-3">₹540</td>
                  <td className="px-4 py-3">Nil</td>
                </tr>
                <tr className="font-bold text-slate-900 bg-slate-100/70">
                  <td className="px-4 py-3 font-bold text-slate-800">Gross Salary (approx.)</td>
                  <td className="px-4 py-3 font-bold">₹43,767</td>
                  <td className="px-4 py-3 font-bold">₹43,200</td>
                  <td className="px-4 py-3 font-bold">₹42,423</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-slate-500 italic font-semibold">Deductions</td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2"></td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">NPS Deduction (10% of Basic+DA)</td>
                  <td className="px-4 py-3">−₹3,508</td>
                  <td className="px-4 py-3">−₹3,508</td>
                  <td className="px-4 py-3">−₹3,508</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Professional Tax</td>
                  <td className="px-4 py-3">−₹200</td>
                  <td className="px-4 py-3">−₹200</td>
                  <td className="px-4 py-3">−₹200</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Group Insurance</td>
                  <td className="px-4 py-3">−₹150</td>
                  <td className="px-4 py-3">−₹150</td>
                  <td className="px-4 py-3">−₹150</td>
                </tr>
                <tr className="font-black text-white bg-slate-900">
                  <td className="px-4 py-3 font-extrabold">Net In-Hand Salary (approx.)</td>
                  <td className="px-4 py-3 font-extrabold">₹39,909</td>
                  <td className="px-4 py-3 font-extrabold">₹39,342</td>
                  <td className="px-4 py-3 font-extrabold">₹38,565</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-550 text-xs italic font-normal">
            *Note: DA rate is approximate based on 2025 figures and is subject to quarterly revision. Special Allowance rates vary by bank. These figures are indicative — your actual salary will be confirmed by your bank's HR at the time of joining.*
          </p>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            The gross salary figures above (₹42,000–₹44,000) are lower than the ₹52,000–₹55,000 cited in the snapshot. The higher range applies once DA is at a higher revision level or after the first annual increment kicks in — DA revisions happen quarterly and the figures above reflect the 2025 midpoint estimate.
          </p>
          <HighlightBox type="success" title="Pro Tip: The NPS Wealth Accumulation Effect">
            When evaluating the IBPS PO offer, don't just look at the take-home salary. The NPS deduction of ~₹3,500/month comes back to you as a retirement corpus (the government also contributes 14% of your basic+DA). Over 25 years of service, the NPS accumulation alone can exceed ₹1.5–2 crore — it's a salary component, not just a cut.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'perks-benefits',
      title: "What Perks and Allowances Do IBPS PO Officers Get Beyond Salary?",
      content: (
        <div className="space-y-5">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The monthly salary is only one part of the total compensation. IBPS PO officers receive a significant set of non-cash benefits that add substantial value:
          </p>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Accommodation</div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Officers posted in metro and urban areas are typically provided bank leased accommodation or a furniture allowance (₹1,00,000–₹1,50,000) to furnish a self-arranged home.
            </p>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Staff Loans at Concessional Rates</div>
            <p className="mb-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              This is one of the most financially significant perks. Bank employees (including IBPS PO officers) can avail:
            </p>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Loan Type</th>
                    <th className="px-4 py-2.5">Concession over Regular Rate</th>
                    <th className="px-4 py-2.5">Approximate Saving / Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Home Loan</td>
                    <td className="px-4 py-3">2–3% below retail rate</td>
                    <td className="px-4 py-3">₹5,000–₹7,000/month saving in EMI on a ₹30L loan</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Car Loan</td>
                    <td className="px-4 py-3">Concessional staff rate</td>
                    <td className="px-4 py-3">Variable savings</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Personal Loan & Overdraft</td>
                    <td className="px-4 py-3">Subsidised staff rates</td>
                    <td className="px-4 py-3">Highly flexible borrowing rates</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              On a ₹30 lakh home loan at 5.5% (staff rate) vs 8.5% (retail rate), the monthly EMI difference is approximately ₹5,000–₹7,000. Over a 20-year loan tenure, that's a saving of ₹12–17 lakh.
            </p>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Medical & Leave Benefits</div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>Medical Benefits:</strong> IBPS PO officers and their dependants are covered under the bank's medical aid scheme. Hospitalisation reimbursement, outdoor treatment, and specialist consultations are typically covered — the exact limits vary by bank.
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-650 space-y-1.5 mt-2.5">
              <li><strong>Casual Leave:</strong> 12 days per year</li>
              <li><strong>Medical Leave:</strong> 30 days per year (fully paid)</li>
              <li><strong>Privilege/Earned Leave:</strong> Accumulated at 1 day per 11 days worked</li>
              <li><strong>Maternity Leave:</strong> 6 months (fully paid) as per government norms</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">Other Miscellaneous Perks</div>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-650 space-y-1.5">
              <li>Newspaper/magazine subscription reimbursement</li>
              <li>Mobile phone allowance or reimbursement (bank-dependent)</li>
              <li>Petrol/travel reimbursement for official use</li>
              <li>Club membership in some banks</li>
              <li>Annual uniform/dress allowance</li>
            </ul>
          </div>

          <HighlightBox type="info" title="Pro Tip: Look Beyond Take-Home">
            When comparing banking offers, include the total value of concessional staff loans, medical coverage, and accommodation perks. These non-cash benefits add substantial weight to your real net worth.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'salary-growth',
      title: "IBPS PO Salary Growth: What Happens After Promotion?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The IBPS PO entry level is Scale I (JMG — Junior Management Grade). From here, officers can be promoted through six more scales over their career. The salary at each level increases substantially:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Scale</th>
                  <th className="px-4 py-2.5">Designation</th>
                  <th className="px-4 py-2.5">Approx. Basic Pay</th>
                  <th className="px-4 py-2.5">Approx. In-Hand Salary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale I</td>
                  <td className="px-4 py-3">Probationary Officer / Officer</td>
                  <td className="px-4 py-3">₹23,700–₹42,020</td>
                  <td className="px-4 py-3">₹36,000–₹55,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale II</td>
                  <td className="px-4 py-3">Manager</td>
                  <td className="px-4 py-3">₹31,705–₹45,950</td>
                  <td className="px-4 py-3">₹48,000–₹62,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale III</td>
                  <td className="px-4 py-3">Senior Manager</td>
                  <td className="px-4 py-3">₹42,020–₹51,490</td>
                  <td className="px-4 py-3">₹62,000–₹78,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale IV</td>
                  <td className="px-4 py-3">Chief Manager</td>
                  <td className="px-4 py-3">₹50,030–₹59,170</td>
                  <td className="px-4 py-3">₹78,000–₹92,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale V</td>
                  <td className="px-4 py-3">Assistant General Manager (AGM)</td>
                  <td className="px-4 py-3">₹59,170–₹66,070</td>
                  <td className="px-4 py-3">₹90,000–₹1,08,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale VI</td>
                  <td className="px-4 py-3">Deputy General Manager (DGM)</td>
                  <td className="px-4 py-3">₹68,680–₹76,520</td>
                  <td className="px-4 py-3">₹1,08,000–₹1,25,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Scale VII</td>
                  <td className="px-4 py-3">General Manager (GM)</td>
                  <td className="px-4 py-3">₹76,520–₹84,360</td>
                  <td className="px-4 py-3">₹1,20,000–₹1,45,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-550 text-xs italic font-normal mb-3">
            *These are approximate ranges based on IBA wage revision settlements as of 2025. Actual figures vary by bank and individual DA rates at time of promotion.*
          </p>

          <div className="font-bold text-slate-800 text-sm sm:text-base mb-2">How Fast Can You Get Promoted?</div>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed mb-3">
            Promotions in public sector banks work on a combination of seniority, performance appraisal (APAR score), and the number of vacancies available at the next level. A typical trajectory for a high-performing officer:
          </p>
          <ul className="list-disc list-inside text-xs sm:text-sm text-slate-650 space-y-1 pl-3">
            <li><strong>Scale I → Scale II:</strong> 3–4 years with good performance</li>
            <li><strong>Scale II → Scale III:</strong> 4–5 years</li>
            <li><strong>Scale III → Scale IV:</strong> 4–5 years</li>
            <li><strong>Scale IV and above:</strong> 3–5 years per level</li>
          </ul>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
            An officer who joins at 24 and performs consistently can realistically reach Scale IV or V (Chief Manager or AGM level) by age 40–45, with a take-home of ₹80,000–₹1,00,000+ per month plus the compounding perks at each level.
          </p>
        </div>
      )
    },
    {
      id: 'salary-comparison',
      title: "IBPS PO Salary vs SBI PO Salary vs RBI Grade B Salary",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            One of the most common questions students ask before choosing which exam to target is how the compensation compares. Here's a direct comparison:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">IBPS PO</th>
                  <th className="px-4 py-2.5">SBI PO</th>
                  <th className="px-4 py-2.5">RBI Grade B</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Starting Basic Pay</td>
                  <td className="px-4 py-3">₹23,700</td>
                  <td className="px-4 py-3">₹27,620</td>
                  <td className="px-4 py-3">₹35,150</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Approx. In-Hand (Joining)</td>
                  <td className="px-4 py-3">₹36,000–₹42,000</td>
                  <td className="px-4 py-3">₹42,000–₹52,000</td>
                  <td className="px-4 py-3">₹65,000–₹75,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">DA Rate</td>
                  <td className="px-4 py-3">~48% of basic (quarterly)</td>
                  <td className="px-4 py-3">~48% of basic (quarterly)</td>
                  <td className="px-4 py-3">Higher (RBI DA formula)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">HRA</td>
                  <td className="px-4 py-3">7–9% of basic</td>
                  <td className="px-4 py-3">7–9% of basic</td>
                  <td className="px-4 py-3">Higher (city-based, %)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Staff Home Loan Rate</td>
                  <td className="px-4 py-3">2–3% below retail</td>
                  <td className="px-4 py-3">2–3% below retail</td>
                  <td className="px-4 py-3">Highly concessional</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Annual Increment</td>
                  <td className="px-4 py-3">₹980 (first 7 yrs)</td>
                  <td className="px-4 py-3">Higher (SBI scale)</td>
                  <td className="px-4 py-3">Higher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Promotion Speed</td>
                  <td className="px-4 py-3">Moderate</td>
                  <td className="px-4 py-3">Moderate</td>
                  <td className="px-4 py-3">Faster (smaller org)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">NPS / Pension</td>
                  <td className="px-4 py-3">NPS (10% + 14% govt)</td>
                  <td className="px-4 py-3">NPS (10% + 14% govt)</td>
                  <td className="px-4 py-3">NPS (10% + 14% govt)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Transfer Frequency</td>
                  <td className="px-4 py-3">High (across 11 banks)</td>
                  <td className="px-4 py-3">High (across India)</td>
                  <td className="px-4 py-3">Low (RBI offices only)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Brand / Status</td>
                  <td className="px-4 py-3">Strong (PSB)</td>
                  <td className="px-4 py-3">Strongest PSB</td>
                  <td className="px-4 py-3">Premium (central bank)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-605 text-xs sm:text-sm leading-relaxed mb-3">
            The gap between IBPS PO and RBI Grade B is significant — approximately ₹25,000–₹35,000 more in-hand per month at entry level. RBI Grade B is, by most measures, the most coveted banking job in India. The exam difficulty reflects this — RBI Grade B has a Phase II (ESI + Finance & Management) that requires economics and finance knowledge at a near-postgraduate level.
          </p>
          <p className="text-slate-605 text-xs sm:text-sm leading-relaxed mb-3">
            If compensation is the primary driver, target RBI Grade B alongside IBPS PO. If stability and a large vacancy pool matter more, IBPS PO's 5,208 vacancies across 11 banks offer far better selection probability.
          </p>
          <HighlightBox type="success" title="Pro Tip: Factor in the Location & Loan Savings">
            Don't fall into the trap of comparing gross salary figures across exams without accounting for city of posting. An IBPS PO officer posted in Mumbai with a staff home loan saving ₹7,000/month in EMI + leased accommodation can effectively net more financial benefit than an RBI officer in a smaller city. Look at the total compensation package, not just the take-home number.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'salary-deductions',
      title: "What Deductions Are Made from IBPS PO Salary?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Understanding deductions prevents the common shock of "my salary was supposed to be ₹52,000 but I got only ₹38,000." Here's exactly what gets deducted:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Deduction</th>
                  <th className="px-4 py-2.5">Basis</th>
                  <th className="px-4 py-2.5">Approximate Monthly Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">NPS (Employee Contribution)</td>
                  <td className="px-4 py-3">10% of Basic Pay + DA</td>
                  <td className="px-4 py-3">₹3,500–₹4,200</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Professional Tax</td>
                  <td className="px-4 py-3">State government levy</td>
                  <td className="px-4 py-3">₹150–₹200 (state-dependent)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Group Insurance Premium</td>
                  <td className="px-4 py-3">Fixed per bank</td>
                  <td className="px-4 py-3">₹100–₹250</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Income Tax (TDS)</td>
                  <td className="px-4 py-3">Based on annual income slab</td>
                  <td className="px-4 py-3">Nil for most entry-level officers (₹36k/month is below ₹7L annual threshold under new regime)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Staff Loan EMI (if availed)</td>
                  <td className="px-4 py-3">Based on loan amount</td>
                  <td className="px-4 py-3">Variable</td>
                </tr>
                <tr className="font-bold text-slate-900 bg-slate-100/70">
                  <td className="px-4 py-3 font-bold text-slate-800">Total Typical Deductions</td>
                  <td className="px-4 py-3 font-bold"></td>
                  <td className="px-4 py-3 font-bold">₹3,800–₹4,700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Most entry-level IBPS PO officers fall below the ₹7 lakh annual income threshold under the new income tax regime, which means <strong>zero income tax</strong> for the first 1–2 years of service. This changes after DA revisions and annual increments push gross salary above the threshold. Consult a CA once your CTC crosses ₹8–9 lakh annually.
          </p>
        </div>
      )
    },
    {
      id: 'prepbanker-guide',
      title: "How PrepBanker Helps You Clear IBPS PO and Earn This Salary",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
            The salary figures above become real only when you clear the exam. Here's how to use PrepBanker at each stage of your IBPS PO preparation:
          </p>
          <div className="space-y-3.5 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed pl-3">
            <p>
              <strong>Step 1 — Start free, start now.</strong><br />
              Register at <a href="https://app.prepgrind.com/signup/ibps-po" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">app.prepgrind.com/signup/ibps-po</a> and attempt the free IBPS PO Prelims mock test. No payment needed. Your score on this test tells you honestly how far you are from a qualifying score of ~70–75 out of 100.
            </p>
            <p>
              <strong>Step 2 — Identify your three weakest topics.</strong><br />
              PrepBanker's post-test analysis breaks down your accuracy by topic — not just by section. If your Puzzle accuracy is 40% but your Inequality accuracy is 80%, don't waste time on Inequalities. Go straight to PrepBanker's Puzzle DPPs.
            </p>
            <p>
              <strong>Step 3 — Use chapter-wise quizzes before full mocks.</strong><br />
              PrepBanker's chapter-wise practice sets for Quantitative Aptitude, Reasoning, and English follow the actual exam's difficulty distribution. Work through these at the topic level before you attempt another full-length test.
            </p>
            <p>
              <strong>Step 4 — Simulate exam conditions with timed sectionals.</strong><br />
              PrepBanker's sectional tests mirror the exact 20-minute window for each Prelims section. Practice the 20-minute constraint until it feels natural — students who fail Prelims usually lose because of time, not knowledge.
            </p>
            <p>
              <strong>Step 5 — Track progress across mocks.</strong><br />
              PrepBanker's dashboard shows your score trend across all attempted tests. Consistent improvement from mock to mock — even by 2–3 marks each time — is a reliable predictor of actual exam performance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'explore-more',
      title: "Also Explore on PrepBanker",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
          <p>
            Understanding the salary is motivating — now build the preparation that earns it.
          </p>
          <p>
            Attempt a free <Link href="/ibps-po/mock-tests" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Full-Length Mock Test</Link> and get your baseline score in 60 minutes. See exactly where you stand before building a prep plan around weakness areas.
          </p>
          <p>
            Review the <Link href="/ibps-po/exam-pattern" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Exam Pattern 2026</Link> page for the complete section-wise marks breakdown, time limits, negative marking rules, and how Prelims, Mains, and Interview contribute to your final score.
          </p>
          <p>
            Check <Link href="/ibps-po/eligibility" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Eligibility 2026</Link> to confirm your age, graduation degree, and category-wise relaxation before registering for the exam — especially the computer knowledge requirement that many candidates overlook.
          </p>
          <p>
            Strengthen your weakest section with PrepBanker's <Link href="/ibps-po/quant-sectional" className="font-bold text-[#1B6EB5] hover:underline">Quantitative Aptitude Sectional Tests</Link> — 20-minute timed sets that replicate the actual Prelims format and give you accuracy + time-per-question analytics.
          </p>
          <p>
            Compare the complete selection process at the <Link href="/ibps-po/notification" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Notification 2026</Link> page — vacancy distribution across banks, official dates, and how to fill the online application form without errors.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "What is the in-hand salary of IBPS PO per month?",
      a: "The in-hand salary of an IBPS PO at the time of joining is approximately ₹36,000–₹42,000 per month depending on posting city. Metro city postings get 9% HRA on basic pay, pushing take-home higher. Gross salary (before deductions) is around ₹43,000–₹55,000. Key deductions are NPS contribution (~₹3,500), professional tax (~₹200), and group insurance (~₹150)."
    },
    {
      q: "What is the basic pay of IBPS PO?",
      a: "The basic pay of an IBPS PO (Scale I) at joining is ₹23,700 per month. The official pay scale is ₹23700–980/7–30560–1145/2–32850–1310/7–42020, meaning annual increments of ₹980 for 7 years, then ₹1,145 for 2 years, then ₹1,310 for 7 more years — all within Scale I, before any promotion."
    },
    {
      q: "What are the perks and allowances given to IBPS PO?",
      a: "IBPS PO perks include: Dearness Allowance (DA, revised quarterly), House Rent Allowance (HRA, 7–9% of basic), Special Allowance, City Compensatory Allowance, leased accommodation or furniture allowance, medical aid scheme, staff home/car loans at 2–3% below retail rates, casual and medical leave, newspaper reimbursement, and mobile phone allowance (bank-dependent). Together, these add ₹15,000–₹25,000+ in effective monthly value."
    },
    {
      q: "How much does an IBPS PO earn after all deductions?",
      a: "After NPS (10% of basic+DA ≈ ₹3,500/month), professional tax (~₹200/month), and group insurance (~₹150/month), net in-hand salary for a metro-posted IBPS PO is approximately ₹38,000–₹42,000 per month. Most entry-level IBPS PO officers pay zero income tax under the new tax regime since their annual income falls below the ₹7 lakh threshold."
    },
    {
      q: "What is the IBPS PO salary growth after promotion?",
      a: "Each promotion brings a significant salary jump. At Scale II (Manager), in-hand salary reaches ₹48,000–₹62,000. At Scale III (Senior Manager), it crosses ₹62,000–₹78,000. By Scale V (AGM), take-home can reach ₹90,000–₹1,08,000/month. An officer joining at 24 can realistically reach Scale IV–V level by age 40–45 with consistent performance."
    },
    {
      q: "Is IBPS PO salary better than SBI PO?",
      a: "SBI PO has a higher starting basic pay (₹27,620 vs ₹23,700) and higher in-hand salary at joining (₹42,000–₹52,000 vs ₹36,000–₹42,000). However, IBPS PO offers 5,208 vacancies vs SBI PO's ~600 — nearly 9 times more seats. If compensation is the primary goal, SBI PO pays more. If selection probability matters, IBPS PO offers significantly better odds."
    },
    {
      q: "Do IBPS PO officers get a home loan at lower interest rates?",
      a: "Yes. Bank employees, including IBPS PO officers, are eligible for staff housing loans at 2–3% below the prevailing retail rate. On a ₹30 lakh loan, this saves approximately ₹5,000–₹7,000 per month in EMI versus a non-bank employee. Over a 20-year tenure, the total saving can exceed ₹12–17 lakh — one of the most valuable non-cash benefits of a banking career."
    },
    {
      q: "What is the pay scale for IBPS PO Scale I?",
      a: "The IBPS PO Scale I pay scale is ₹23700–980/7–30560–1145/2–32850–1310/7–42020. Starting at ₹23,700, annual increments of ₹980 are applied for the first 7 years, followed by ₹1,145 for 2 years, and ₹1,310 for 7 more years — bringing Scale I maximum to ₹42,020. Total Scale I progression takes approximately 16 years without promotion."
    },
    {
      q: "What deductions are made from IBPS PO salary?",
      a: "Standard monthly deductions from IBPS PO salary include: NPS employee contribution at 10% of basic pay + DA (approximately ₹3,500/month at entry level); professional tax (~₹200/month, state-specific); group insurance premium (~₹100–250/month); and income tax TDS if annual income exceeds ₹7 lakh (rare at entry level under new tax regime). Staff loan EMI deductions apply if loans are availed."
    },
    {
      q: "Is PrepBanker free for IBPS PO mock tests?",
      a: "PrepBanker offers one free full-length IBPS PO Prelims mock test at app.prepgrind.com/signup/ibps-po — no payment or credit card required. It includes real-time sectional timers, instant score analysis, accuracy breakdown by topic, and performance comparison. Additional full mocks, Mains tests, sectional tests, and DPPs are part of the paid subscription."
    }
  ]
};

