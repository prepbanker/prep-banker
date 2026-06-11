import React from 'react';
import Link from 'next/link';
import { HighlightBox } from '@/components/sections/exams/DetailComponents';
import type { DetailSectionContent } from './detailContentMap';

export const sbiPoSalaryContent: DetailSectionContent = {
  title: "SBI PO Salary 2026: In-Hand Pay, Allowances, and Perks Explained",
  overview: "An SBI PO's starting basic pay in 2026 is ₹41,960 per month under the JMG Scale I pay structure. After adding Dearness Allowance (DA), House Rent Allowance (HRA), and other components — and accounting for NPS and tax deductions — the in-hand salary comes to approximately ₹52,000–₹58,000 per month depending on posting city. The gross annual CTC is approximately ₹8.20–₹10 lakh.",
  ctaText: "Explore Mock Tests to Crack SBI PO",
  ctaHref: "https://app.prepgrind.com/register",
  metaTitle: "SBI PO Salary 2026: In-Hand Pay, Allowances & Perks",
  metaDescription: "SBI PO salary in 2026 starts at ₹41,960/month basic. See full in-hand pay, allowances, perks, and how salary grows after probation. Free mock tests on PrepBanker.",
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
                "name": "SBI PO Salary 2026",
                "item": "https://app.prepbanker.com/sbi-po/salary"
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
            "name": "SBI PO Salary 2026: In-Hand Pay, Allowances & Perks",
            "url": "https://app.prepbanker.com/sbi-po/salary",
            "description": "Complete breakdown of SBI PO salary in 2026 — basic pay, DA, HRA, in-hand amount, CTC, perks, and how salary grows over time.",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "WebSite",
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
            "headline": "SBI PO Salary 2026: In-Hand Pay, Allowances & Perks",
            "url": "https://app.prepbanker.com/sbi-po/salary",
            "datePublished": "2026-05-01",
            "dateModified": "2026-06-11",
            "author": {
              "@type": "Organization",
              "name": "PrepBanker",
              "url": "https://app.prepbanker.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PrepBanker",
              "logo": {
                "@type": "ImageObject",
                "url": "https://app.prepbanker.com/logo.png"
              }
            },
            "description": "Complete breakdown of SBI PO salary in 2026 — basic pay, DA, HRA, in-hand amount, CTC, perks, and how salary grows over time.",
            "mainEntityOfPage": "https://app.prepbanker.com/sbi-po/salary",
            "keywords": "SBI PO salary 2026, SBI PO in-hand salary, SBI PO pay scale, SBI PO allowances, SBI PO CTC"
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
                "name": "What is the in-hand salary of SBI PO per month in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An SBI PO's in-hand salary in 2026 is approximately ₹52,000–₹58,000 per month depending on posting city. The basic pay starts at ₹41,960 and after adding DA (currently around 46%), HRA (based on city), and other allowances — and deducting NPS, income tax, and professional tax — the net take-home lands in this range."
                }
              },
              {
                "@type": "Question",
                "name": "What is the SBI PO pay scale in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The SBI PO pay scale is ₹41,960–₹1,29,100 under the JMG Scale I structure. The starting basic pay is ₹41,960 per month. Salary rises through annual increments of ₹1,500 (first 7 years) and ₹1,740 (next 2 years) before the scale tops out or the officer gets promoted to the next grade."
                }
              },
              {
                "@type": "Question",
                "name": "What is the total CTC of SBI PO per year?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The gross annual CTC of an SBI PO is approximately ₹8.20–₹10 lakh per annum, factoring in basic pay, DA, HRA, medical allowances, and NPS employer contribution. When perks like subsidised loans, LFC, and staff quarters are monetised, the total compensation value can exceed ₹12–14 lakh annually for a metro posting."
                }
              },
              {
                "@type": "Question",
                "name": "What allowances does an SBI PO get?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI POs receive Dearness Allowance (DA, revised quarterly), House Rent Allowance (HRA, based on posting city), City Compensatory Allowance (CCA), Special Allowance, Medical Aid, Leave Travel Concession (LTC/LFC), and Furniture Allowance. Staff welfare fund and festival advance are also available. These allowances collectively often exceed the basic pay itself."
                }
              },
              {
                "@type": "Question",
                "name": "Is SBI PO salary better than IBPS PO salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO and IBPS PO start at the same basic pay scale of ₹41,960 (JMG Scale I). However, SBI POs generally receive a higher Special Allowance and better perks — especially subsidised home loans, car loans at concessional rates, and staff quarters in many postings. Over a 5–10 year career, SBI PO tends to offer a higher effective compensation."
                }
              },
              {
                "@type": "Question",
                "name": "How much does an SBI PO earn after 5 years?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After 5 years, an SBI PO's basic pay rises to approximately ₹49,460 due to annual increments of ₹1,500. With revised DA and HRA, the gross monthly pay would be in the range of ₹72,000–₹80,000. If promoted to MMGS II (Manager) within 5–7 years, the new basic pay scale starts at ₹64,820, significantly boosting total compensation."
                }
              },
              {
                "@type": "Question",
                "name": "Does SBI PO get a home loan benefit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. SBI POs are eligible for home loans at concessional interest rates — typically 1–2% below the applicable retail rate for staff members. This is one of the most financially significant perks of the job. For a ₹50 lakh home loan, a 1.5% rate reduction saves approximately ₹35,000–₹45,000 per year in interest, adding substantial long-term value to the job."
                }
              },
              {
                "@type": "Question",
                "name": "What deductions are made from SBI PO salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI PO salary deductions include: NPS (National Pension System) contribution at 10% of basic + DA, income tax (based on slab), professional tax (state-specific, typically ₹200/month), and union/welfare fund contributions. The total deductions usually range from ₹8,000–₹14,000 per month, which is why gross and in-hand salary differ noticeably."
                }
              },
              {
                "@type": "Question",
                "name": "What is the SBI PO probation period salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "During the 2-year probation period, the SBI PO receives the same starting salary — basic pay of ₹41,960 plus all applicable allowances. There is no separate 'trainee stipend'. The full JMG Scale I pay structure applies from Day 1 of joining. Probation confirmation does not trigger a salary hike; the annual increment cycle governs pay growth."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a pension for SBI PO employees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SBI POs who joined after April 2010 are covered under the National Pension System (NPS), not the old defined-benefit pension. Both the employee (10% of basic + DA) and SBI (14% of basic + DA) contribute to the NPS corpus monthly. Employees who joined before April 2010 are still covered under the older SBI pension regulations."
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
      title: "SBI PO 2026 — Salary Quick Snapshot",
      content: (
        <div className="space-y-4">
          <HighlightBox type="info" title="Quick Summary">
            <ul className="text-xs sm:text-sm text-slate-650 space-y-2.5 my-2 font-normal">
              <li><strong>Post:</strong> Probationary Officer (PO) — Junior Management Grade Scale I (JMG Scale I)</li>
              <li><strong>Starting Basic Pay:</strong> ₹41,960/month</li>
              <li><strong>Pay Scale:</strong> ₹41,960 – ₹1,29,100</li>
              <li><strong>Approximate In-Hand Salary:</strong> ₹52,000–₹58,000/month (varies by city)</li>
              <li><strong>Approximate Gross CTC:</strong> ₹8.20–₹10 LPA</li>
              <li><strong>Dearness Allowance (DA):</strong> ~46% of basic (revised quarterly by IBA)</li>
              <li><strong>HRA:</strong> 9–10% of basic (rural) to 15% (metro), varies by city tier</li>
              <li><strong>NPS Deduction:</strong> 10% of Basic + DA (employee contribution)</li>
              <li><strong>Probation Period:</strong> 2 years</li>
              <li><strong>Promotion to MMGS II:</strong> Typically 3–7 years via Fast Track or JMGS-I merit list</li>
            </ul>
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'salary-structure',
      title: "What Is the SBI PO Salary Structure in 2026?",
      content: (
        <div className="space-y-5">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Understanding SBI PO salary requires looking at it in three layers: <strong>basic pay</strong>, <strong>allowances on top</strong>, and <strong>deductions from gross</strong>. Each layer affects the final number significantly.
          </p>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Basic Pay and Annual Increments</h4>
            <p className="mb-3 text-slate-600 text-xs sm:text-sm">
              The starting basic pay is <strong>₹41,960 per month</strong>. This is fixed by the 11th Bipartite Settlement between Indian Banks' Association (IBA) and bank employee unions — the most recent settlement covering 2022–2027.
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
                    <td className="px-4 py-3">₹41,960</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Years 1–7 (7 increments)</td>
                    <td className="px-4 py-3">₹1,500/year</td>
                    <td className="px-4 py-3">Up to ~₹52,460</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Years 8–9 (2 increments)</td>
                    <td className="px-4 py-3">₹1,740/year</td>
                    <td className="px-4 py-3">Up to ~₹55,940</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Scale Cap (JMGS I)</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">₹1,29,100 (long-run max)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-550 leading-relaxed font-normal">
              This progression is slow in the early years — which is why promotion to MMGS II (Manager) is financially the most impactful milestone. Most SBI POs who stay on the fast track get promoted within 5–7 years, which resets their pay scale at a much higher base.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Dearness Allowance (DA)</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              DA is revised every quarter (February, May, August, November) by IBA based on the All India Consumer Price Index. As of early 2026, DA for public sector bank officers is approximately <strong>46% of basic pay</strong>. For a starting basic of ₹41,960, this adds roughly <strong>₹19,300/month</strong> to gross salary.
            </p>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              DA is fully taxable and forms a large portion of gross pay. It also forms the base for NPS deduction calculation, which matters for understanding your actual take-home.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">House Rent Allowance (HRA)</h4>
            <p className="mb-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              HRA depends on the city of posting:
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
                    <td className="px-4 py-3 font-semibold text-slate-800">Tier I (Metro)</td>
                    <td className="px-4 py-3">Mumbai, Delhi, Chennai, Kolkata</td>
                    <td className="px-4 py-3">15%</td>
                    <td className="px-4 py-3">~₹6,294/month</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Tier II (Big City)</td>
                    <td className="px-4 py-3">Pune, Hyderabad, Bengaluru, Ahmedabad</td>
                    <td className="px-4 py-3">12%</td>
                    <td className="px-4 py-3">~₹5,035/month</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Tier III (Others)</td>
                    <td className="px-4 py-3">Smaller cities, semi-urban</td>
                    <td className="px-4 py-3">9%</td>
                    <td className="px-4 py-3">~₹3,776/month</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Tier IV (Rural/Very Small)</td>
                    <td className="px-4 py-3">Rural postings</td>
                    <td className="px-4 py-3">7.5%</td>
                    <td className="px-4 py-3">~₹3,147/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-550 italic">
              *Note: If SBI provides staff quarters, HRA is not paid — a key factor to understand for total compensation.*
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'in-hand-salary',
      title: "What Is the SBI PO In-Hand Salary After All Deductions?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Most salary articles throw gross CTC at you. What you actually receive in your bank account is the net/in-hand figure. Here's a realistic breakdown for a metro posting at starting pay:
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[400px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Component</th>
                  <th className="px-4 py-2.5">Amount (₹/month)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Basic Pay</td>
                  <td className="px-4 py-3">41,960</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Dearness Allowance (~46%)</td>
                  <td className="px-4 py-3">19,302</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">HRA (Metro, 15%)</td>
                  <td className="px-4 py-3">6,294</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance</td>
                  <td className="px-4 py-3">~4,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">City Compensatory Allowance</td>
                  <td className="px-4 py-3">~870</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Medical Aid</td>
                  <td className="px-4 py-3">~350</td>
                </tr>
                <tr className="font-bold text-slate-900 bg-slate-100/70">
                  <td className="px-4 py-3 font-bold text-slate-800">Gross Salary (approx.)</td>
                  <td className="px-4 py-3 font-bold">~73,276</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-slate-500 italic font-semibold">Deductions</td>
                  <td className="px-4 py-2"></td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">NPS (Employee, 10% of Basic + DA)</td>
                  <td className="px-4 py-3">~6,126</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Income Tax (approx. New Regime)</td>
                  <td className="px-4 py-3">~4,500–6,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Professional Tax</td>
                  <td className="px-4 py-3">~200</td>
                </tr>
                <tr className="font-bold text-slate-900 bg-slate-100/70">
                  <td className="px-4 py-3 font-bold text-slate-800">Total Deductions</td>
                  <td className="px-4 py-3 font-bold">~11,000–12,500</td>
                </tr>
                <tr className="font-black text-white bg-[#1B6EB5]">
                  <td className="px-4 py-3 font-extrabold">Net In-Hand Salary (Metro)</td>
                  <td className="px-4 py-3 font-extrabold">~₹60,500–₹62,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            For non-metro postings, HRA and CCA are lower, pulling in-hand down to the ₹52,000–₹56,000 range.
          </p>
          <HighlightBox type="success" title="Pro Tip: Special Allowance Comparison">
            The Special Allowance component is where SBI tends to be more generous than IBPS PO banks. For the same basic pay scale, an SBI PO typically takes home ₹2,000–₹4,000 more per month than an officer at a nationalised bank, purely due to a higher Special Allowance percentage negotiated in SBI's internal agreements.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'perks-benefits',
      title: "What Perks and Benefits Does an SBI PO Get Beyond Salary?",
      content: (
        <div className="space-y-5">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The monthly in-hand number tells only part of the story. The perks attached to an SBI PO position are financially significant and are often underrepresented in salary discussions.
          </p>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Loan Benefits (Most Valuable Perk)</h4>
            <p className="mb-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              SBI staff are eligible for loans at concessional interest rates:
            </p>
            <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="px-4 py-2.5">Loan Type</th>
                    <th className="px-4 py-2.5">Concession over Regular Rate</th>
                    <th className="px-4 py-2.5">Approximate Saving</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-650">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Home Loan</td>
                    <td className="px-4 py-3">1–1.5% below retail rate</td>
                    <td className="px-4 py-3">₹30,000–₹50,000/year on ₹50L loan</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Car Loan</td>
                    <td className="px-4 py-3">0.50–1% below retail rate</td>
                    <td className="px-4 py-3">₹8,000–₹15,000/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-800">Personal Loan</td>
                    <td className="px-4 py-3">Lower rate + higher eligibility</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-800">Festival Advance</td>
                    <td className="px-4 py-3">Interest-free advance</td>
                    <td className="px-4 py-3">Small but useful</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              For a 20-year home loan of ₹60 lakh, a 1.5% rate reduction amounts to a saving of <strong>₹7–8 lakh over the loan tenure</strong> — a benefit that significantly exceeds many annual bonuses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Other Notable Perks</h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-650 space-y-2">
              <li><strong>Leave Fare Concession (LFC/LTC):</strong> Travel allowance for self and family once every 2 years; can be used for domestic travel.</li>
              <li><strong>Medical Benefits:</strong> Reimbursement of medical expenses for self and dependents; covers hospitalisation.</li>
              <li><strong>Furniture Allowance:</strong> One-time or periodic allowance to furnish leased accommodation.</li>
              <li><strong>Staff Quarters:</strong> In many locations (especially semi-urban and rural), SBI provides subsidised staff accommodation. This effectively saves ₹8,000–₹20,000/month in rent — comparable to a salary boost.</li>
              <li><strong>Newspaper Allowance:</strong> Small but adds up.</li>
              <li><strong>Reimbursement of Professional Membership Fees:</strong> For relevant finance/banking certifications.</li>
              <li><strong>Children's Education Allowance:</strong> Partial reimbursement for school fees.</li>
            </ul>
          </div>

          <HighlightBox type="info" title="Pro Tip: Monetising the Perks">
            When comparing SBI PO to private sector jobs or other government jobs, always monetise the perks — especially the home loan concession, staff quarters, and medical benefits. A ₹58,000 in-hand salary with free accommodation and a concessional home loan is functionally equivalent to a ₹75,000–₹80,000 package in the private sector without benefits, in tier-2 cities.
          </HighlightBox>
        </div>
      )
    },
    {
      id: 'salary-growth',
      title: "How Does SBI PO Salary Grow Over Time?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Growth happens through two mechanisms: annual increments within the same scale, and promotions to higher scales.
          </p>
          <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-655 space-y-2 pl-3">
            <li><strong>Year 1–3 (Probationary Officer, JMGS I):</strong> Basic grows by ₹1,500/year. Your primary focus is clearing probation, performing well in the job, and, if eligible, appearing for the promotion exam.</li>
            <li><strong>Year 3–7 (Senior Officer in JMGS I or promotion to MMGS II):</strong> SBI's internal promotion process has both Fast Track and Normal track. Fast Track promotion to MMGS II can happen in as few as 3 years for top performers.</li>
            <li><strong>MMGS II (Manager):</strong> Basic pay scale starts at ₹64,820. This is a significant jump — the gross monthly salary at MMGS II start is roughly ₹95,000–₹1,05,000 including DA, HRA, and allowances.</li>
            <li><strong>MMGS III (Senior Manager):</strong> Basic from ₹76,010. Gross salary crosses ₹1.2 lakh/month.</li>
            <li><strong>SMGS IV (Chief Manager) and above:</strong> Senior leadership roles; basic from ₹89,890 and upward.</li>
          </ol>

          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[450px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Grade</th>
                  <th className="px-4 py-2.5">Scale</th>
                  <th className="px-4 py-2.5">Starting Basic Pay</th>
                  <th className="px-4 py-2.5">Approx. Gross Monthly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Probationary Officer</td>
                  <td className="px-4 py-3">JMGS I</td>
                  <td className="px-4 py-3">₹41,960</td>
                  <td className="px-4 py-3">~₹73,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Officer (confirmed)</td>
                  <td className="px-4 py-3">JMGS I (after increments)</td>
                  <td className="px-4 py-3">₹43,460–₹55,940</td>
                  <td className="px-4 py-3">~₹76,000–₹90,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Manager</td>
                  <td className="px-4 py-3">MMGS II</td>
                  <td className="px-4 py-3">₹64,820</td>
                  <td className="px-4 py-3">~₹1,00,000–₹1,10,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Senior Manager</td>
                  <td className="px-4 py-3">MMGS III</td>
                  <td className="px-4 py-3">₹76,010</td>
                  <td className="px-4 py-3">~₹1,18,000–₹1,30,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Chief Manager</td>
                  <td className="px-4 py-3">SMGS IV</td>
                  <td className="px-4 py-3">₹89,890</td>
                  <td className="px-4 py-3">~₹1,35,000–₹1,50,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'sbi-vs-ibps-po',
      title: "SBI PO Salary vs IBPS PO Salary: How Do They Compare?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            This is one of the most searched questions by aspirants deciding which exam to prioritise.
          </p>
          <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-3">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="px-4 py-2.5">Parameter</th>
                  <th className="px-4 py-2.5">SBI PO</th>
                  <th className="px-4 py-2.5">IBPS PO (Nationalised Banks)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-650">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Starting Basic Pay</td>
                  <td className="px-4 py-3">₹41,960</td>
                  <td className="px-4 py-3">₹41,960</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Pay Scale</td>
                  <td className="px-4 py-3">JMGS I: ₹41,960–₹1,29,100</td>
                  <td className="px-4 py-3">JMG Scale I: ₹41,960–₹1,29,100</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Special Allowance</td>
                  <td className="px-4 py-3">Higher (SBI-specific rate)</td>
                  <td className="px-4 py-3">Standard IBA rate</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Approx. In-Hand (Metro)</td>
                  <td className="px-4 py-3">₹60,000–₹62,000</td>
                  <td className="px-4 py-3">₹56,000–₹60,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Home Loan Concession</td>
                  <td className="px-4 py-3">Yes (SBI staff rate)</td>
                  <td className="px-4 py-3">Yes (respective bank's staff rate)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Staff Quarters</td>
                  <td className="px-4 py-3">Available at many postings</td>
                  <td className="px-4 py-3">Available at many postings</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Promotion Speed</td>
                  <td className="px-4 py-3">Generally faster via internal exams</td>
                  <td className="px-4 py-3">Varies by bank</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">Job Stability</td>
                  <td className="px-4 py-3">Extremely high</td>
                  <td className="px-4 py-3">Extremely high</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-800">Brand Recognition</td>
                  <td className="px-4 py-3">Higher (SBI is India's largest bank)</td>
                  <td className="px-4 py-3">Good, varies by bank</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-semibold text-[#1B6EB5] text-xs sm:text-sm">
            Bottom line: Same pay scale on paper, but SBI PO edges ahead on Special Allowance, loan concessions (SBI's retail rates are often industry benchmarks), and career brand value. If you clear both, SBI PO is almost universally the preferred offer.
          </p>
        </div>
      )
    },
    {
      id: 'probation-salary',
      title: "What Is the SBI PO Salary During Probation?",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            A common confusion: many aspirants wonder if probation comes with a reduced "trainee stipend". It does not.
          </p>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            From Day 1 of joining, an SBI PO receives the full <strong>JMG Scale I basic pay of ₹41,960</strong> plus all applicable allowances. There is no separate stipend structure. The 2-year probation period simply governs whether you are confirmed in the role — it does not affect pay.
          </p>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            The only financial implication of probation is that NPS contributions are compulsorily deducted (same as confirmed employees), and your annual increment clock starts from the date of joining — not from the date of confirmation.
          </p>
        </div>
      )
    },
    {
      id: 'salary-deductions',
      title: "SBI PO Salary Deductions: What Gets Cut Every Month?",
      content: (
        <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
          <p>
            Understanding deductions prevents unpleasant surprises in your first salary slip:
          </p>
          <ul className="list-decimal list-inside space-y-3 pl-3">
            <li>
              <strong>NPS (Employee Contribution):</strong> 10% of Basic + DA. At starting pay, this is approximately <strong>₹6,100–₹6,300/month</strong>. This amount goes into your NPS Tier I account — locked until retirement (with some exceptions).
            </li>
            <li>
              <strong>NPS (Employer Contribution):</strong> SBI contributes 14% of Basic + DA. This is not a deduction from your salary — it's an additional benefit. But it's worth knowing as it compounds your retirement corpus significantly.
            </li>
            <li>
              <strong>Income Tax:</strong> Depends on your tax regime choice and applicable slab. Under the new regime with standard deduction, an SBI PO starting at ₹41,960 basic will typically pay <strong>₹4,000–₹6,000/month</strong> in TDS.
            </li>
            <li>
              <strong>Professional Tax:</strong> Varies by state. In Maharashtra, it's ₹200/month for salary above ₹20,000. Most other states have similar nominal amounts.
            </li>
            <li>
              <strong>Recovery of Festival Advance:</strong> If you've taken an advance, the EMI recovery shows as a monthly deduction.
            </li>
            <li>
              <strong>Union Membership (optional):</strong> A small monthly fee if you choose to join the officers' union.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'prepbanker-guide',
      title: "How to Use PrepBanker to Land the SBI PO Job — and That Salary",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Knowing the salary is the motivation. PrepBanker is the engine that gets you there. Here's how to use the platform from Day 1 of preparation:
          </p>
          <div className="space-y-3 font-normal text-slate-600 text-xs sm:text-sm leading-relaxed">
            <p>
              <strong>Step 1 — Start with a diagnostic mock.</strong><br />
              <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1B6EB5] hover:underline">Register on PrepBanker for free</a> and attempt a full SBI PO Prelims mock. Don't worry about your score — this is your baseline. The analytics will show you exactly which sections and topics need the most work.
            </p>
            <p>
              <strong>Step 2 — Build section-by-section with chapter-wise quizzes.</strong><br />
              PrepBanker's chapter-wise practice sets cover every Prelims and Mains topic — from Number Series and Simplification to Coding-Decoding and RC passages. Use these daily to build accuracy before attempting full mocks.
            </p>
            <p>
              <strong>Step 3 — Move to full-length Prelims mock series.</strong><br />
              Once your basics are solid, switch to timed full-length mocks. PrepBanker's mocks simulate the exact sectional time limits and difficulty distribution of SBI PO Prelims. The post-mock analysis shows your time-per-question, accuracy by topic, and rank among peers.
            </p>
            <p>
              <strong>Step 4 — Shift to Mains mocks after Prelims.</strong><br />
              The jump from Prelims to Mains difficulty is steep. PrepBanker's SBI PO Mains mocks include the Descriptive Paper with prompt practice — so you're not encountering the essay format for the first time on exam day.
            </p>
            <p>
              <strong>Step 5 — Track your improvement weekly.</strong><br />
              PrepBanker's progress dashboard shows your mock score trend over time. A consistent upward accuracy trend (even when absolute scores plateau) is the real signal that your preparation is working.
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
            Understanding SBI PO salary is the "why" — these pages on PrepBanker will help you build the "how":
          </p>
          <p>
            Attempt a <Link href="/quiz" className="font-bold text-[#1B6EB5] hover:underline">free full-length SBI PO Prelims Mock Test</Link> — benchmark your current preparation level with a realistic, timed test that mirrors the actual exam difficulty and interface.
          </p>
          <p>
            Read the complete <Link href="/sbi-po/selection-process" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Selection Process 2026</Link> page to understand all three stages — Prelims, Mains, and GE + Interview — and what each stage requires from you strategically.
          </p>
          <p>
            Check the <Link href="/sbi-po/exam-pattern" className="font-bold text-[#1B6EB5] hover:underline">SBI PO Exam Pattern and Syllabus 2026</Link> for a section-wise breakdown of topics, marks distribution, and time allocation so your preparation is aligned with what the exam actually tests.
          </p>
          <p>
            Compare the <Link href="/sbi-po/vs-sbi-clerk" className="font-bold text-[#1B6EB5] hover:underline">SBI PO vs SBI Clerk Salary and Career Growth</Link> if you're deciding between the two posts — the salary gap and career trajectory differ significantly beyond the first year.
          </p>
          <p>
            If you're also targeting IBPS, the <Link href="/ibps-po/salary" className="font-bold text-[#1B6EB5] hover:underline">IBPS PO Salary 2026</Link> page has the same structured breakdown so you can compare the two offers side by side with real numbers.
          </p>
          <p>
            Strengthen your <Link href="/banking-awareness/quizzes" className="font-bold text-[#1B6EB5] hover:underline">Banking Awareness preparation</Link> with chapter-wise quizzes covering RBI policy, government schemes, and financial terms — a high-scoring area in Mains that most aspirants underinvest in.
          </p>
        </div>
      )
    }
  ],
  faqs: [
    {
      q: "What is the in-hand salary of SBI PO per month in 2026?",
      a: "An SBI PO's in-hand (net take-home) salary in 2026 is approximately ₹52,000–₹62,000 per month, depending on the city of posting. Metro postings (Mumbai, Delhi) yield higher HRA and CCA, pushing in-hand to the upper end. The gross salary at starting basic is approximately ₹73,000–₹75,000; deductions for NPS (₹6,100), income tax, and professional tax bring net pay to this range."
    },
    {
      q: "What is the SBI PO pay scale in 2026?",
      a: "The SBI PO pay scale is ₹41,960 – ₹1,29,100 under JMG Scale I. The starting basic pay is ₹41,960. Annual increments of ₹1,500 apply for the first 7 years, followed by ₹1,740 for the next 2 years. The scale ceiling of ₹1,29,100 is reached only after all increments within JMGS I — in practice, most officers get promoted to MMGS II (Manager) well before that."
    },
    {
      q: "What is the total CTC of an SBI PO per year?",
      a: "The total gross CTC of an SBI PO is approximately ₹8.20–₹10 lakh per annum in monetary terms. When non-monetary perks are monetised — subsidised home loan interest saving, staff quarters (worth ₹8,000–₹20,000/month in rent), medical reimbursement, and LTC — the effective annual compensation can exceed ₹12–14 lakh for officers posted in metro cities."
    },
    {
      q: "What allowances does an SBI PO get?",
      a: "SBI POs receive Dearness Allowance (DA, ~46% of basic, revised quarterly), House Rent Allowance (HRA, 7.5–15% of basic based on city), City Compensatory Allowance (CCA), Special Allowance, Medical Aid, Leave Travel Concession (LFC), Furniture Allowance, and Children's Education Allowance. DA alone adds ₹19,000+ per month at starting basic pay, making allowances a substantial part of total compensation."
    },
    {
      q: "Is SBI PO salary better than IBPS PO salary?",
      a: "Both start at the same basic pay scale of ₹41,960 (JMG Scale I). However, SBI PO pays a higher Special Allowance and offers better loan concessions — SBI being India's largest bank, its staff interest rate on home loans is often the most competitive available. Over a 5–10 year career, SBI PO generally offers higher effective compensation due to faster promotions and superior perks structure."
    },
    {
      q: "How much does an SBI PO earn after 5 years?",
      a: "After 5 annual increments of ₹1,500, the basic pay rises to approximately ₹49,460. With revised DA and HRA, gross monthly salary would be roughly ₹82,000–₹90,000. If promoted to MMGS II (Manager) within 5 years via Fast Track — which is possible for strong performers — the new basic starts at ₹64,820, with gross crossing ₹1 lakh per month."
    },
    {
      q: "Does SBI PO get a home loan at a lower interest rate?",
      a: "Yes. SBI staff home loans are sanctioned at a concessional interest rate — typically 1–1.5% below the applicable retail lending rate. For a ₹50 lakh home loan over 20 years, this saves approximately ₹6–8 lakh in total interest payments. This is one of the most financially significant benefits and is a major factor in SBI PO's long-term compensation advantage over comparable private sector roles."
    },
    {
      q: "What deductions are made from SBI PO salary?",
      a: "Monthly deductions include: NPS employee contribution (10% of basic + DA, ~₹6,100–₹6,300), income tax via TDS (~₹4,000–₹6,000 depending on regime and declarations), professional tax (~₹200, state-dependent), and optional union membership fees. Total deductions typically range from ₹10,500–₹13,000 per month, which is why there is a notable gap between gross (~₹73,000) and net in-hand (~₹60,000) salary."
    },
    {
      q: "What is the SBI PO salary during probation?",
      a: "SBI POs receive the full JMG Scale I salary from Day 1 of joining — there is no separate trainee stipend or reduced probation pay. The starting basic of ₹41,960 plus all applicable allowances apply immediately. The 2-year probation period only governs confirmation in the role; it does not affect the salary structure, increments, or any allowance eligibility."
    },
    {
      q: "Is there a pension for SBI PO employees who join in 2026?",
      a: "Officers joining SBI in 2026 are covered under the National Pension System (NPS), not the old defined-benefit pension. The employee contributes 10% of Basic + DA monthly, and SBI contributes 14% as employer share. This NPS corpus grows with market-linked returns and is partially withdrawable at retirement. Officers who joined SBI before April 2010 are still under the old pension regulations."
    },
    {
      q: "How does SBI PO salary compare to private bank jobs like HDFC or ICICI?",
      a: "At the entry level, top private bank management trainee roles at HDFC, ICICI, or Axis may offer a similar or slightly higher CTC (₹8–12 lakh). However, SBI PO offers significantly better job security, no performance pressure on targets, defined increments, pension (NPS), medical benefits, and concessional loans. The lifestyle and work-life balance comparison strongly favours SBI PO over private bank sales-track roles, especially outside metro cities."
    }
  ]
};
