// PATH: lib/data/current-affairs/articles.ts
// ─────────────────────────────────────────
// All CA articles — static data store.
// Add new entries here; UI picks them up automatically.
// ─────────────────────────────────────────
import type { CurrentAffair } from '../../../types/current-affairs';

export const CA_ARTICLES: CurrentAffair[] = [
 
  // ── RBI Updates ──────────────────────────────────────────────
  {
    id: 'ca-rbi-01',
    title: 'RBI Keeps Repo Rate Unchanged at 6.5% – MPC Policy Highlights',
    summary:
      "RBI's Monetary Policy Committee kept the benchmark repo rate unchanged at 6.5% for the sixth consecutive time, maintaining its stance on withdrawal of accommodation with a 4:2 majority vote.",
    body: `The Reserve Bank of India's six-member Monetary Policy Committee (MPC) concluded its bi-monthly review by holding the repo rate steady at 6.5% — the sixth consecutive pause since April 2023. The decision was taken with a 4:2 majority, reflecting continued caution around inflation management while supporting growth recovery.
 
The MPC reiterated its stance of "withdrawal of accommodation" — signalling it is not yet ready to cut rates until retail inflation sustainably aligns with the 4% target. The Standing Deposit Facility (SDF) rate remains at 6.25%, and the Marginal Standing Facility (MSF) and Bank Rate stay at 6.75%.
 
Governor Sanjay Malhotra highlighted resilient domestic demand, strong agricultural output, and moderating core inflation as key positives. However, geopolitical uncertainty and volatile crude oil prices pose upside risks to CPI inflation.
 
The RBI revised its GDP growth projection for FY2026 upward to 7.2%, citing robust services sector expansion, government capex, and urban consumption. Retail inflation (CPI) is projected at 4.5% for FY2026, down from 5.4% in FY2025.`,
    category: 'RBI Updates',
    date: 'May 20, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Repo Rate: 6.5%', 'Reverse Repo: 3.35%', 'CRR: 4%', 'SLR: 18%', 'MSF Rate: 6.75%', 'SDF Rate: 6.25%'],
    keyPoints: [
      'MPC voted 4:2 to hold repo rate at 6.5%',
      'Stance remains "withdrawal of accommodation"',
      'GDP growth forecast raised to 7.2% for FY2026',
      'CPI inflation projected at 4.5% for FY2026',
      'SDF at 6.25%, MSF at 6.75% unchanged',
      'Sixth consecutive pause since April 2023',
    ],
    readTime: 4,
    isFeatured: true,
    tags: ['Repo Rate', 'MPC', 'Monetary Policy'],
  },
  {
    id: 'ca-rbi-02',
    title: 'RBI Introduces UPI-Lite X for Offline Small-Value Payments',
    summary:
      'RBI launched UPI-Lite X, enabling offline transactions up to ₹500 without internet, targeting financial inclusion in rural and low-connectivity regions via NFC/Bluetooth.',
    body: `The Reserve Bank of India formally launched UPI-Lite X, an offline digital payment solution enabling small-value transactions of up to ₹500 without any internet or mobile network connectivity. This groundbreaking initiative is expected to transform last-mile payment access across rural India and low-connectivity zones.
 
UPI-Lite X operates via Near Field Communication (NFC) and Bluetooth technology, allowing devices to communicate directly for payment authorisation. The technology is embedded in the standard UPI app ecosystem through NPCI's technical framework, and merchants need only a compatible POS terminal or smartphone.
 
The per-transaction limit is capped at ₹500, while the cumulative daily offline transaction limit is ₹4,000 per user. Transactions are automatically reconciled when connectivity is restored, ensuring seamless settlement. The initiative aligns with RBI's broader financial inclusion mandate under the National Payments Mission.
 
This builds on the earlier UPI-Lite (online low-value wallet) and is part of RBI's phased strategy to reach India's 650 million rural citizens who still face intermittent connectivity issues.`,
    category: 'RBI Updates',
    date: 'May 5, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Per-txn limit: ₹500', 'Daily limit: ₹4,000', 'Works offline', 'Uses NFC/Bluetooth', 'Auto-reconciled', 'NPCI powered'],
    keyPoints: [
      'No internet/mobile network required for payments',
      'Transaction limit: ₹500 per transaction',
      'Daily cumulative offline limit: ₹4,000',
      'NFC and Bluetooth technology used for device-to-device payment',
      'Reconciliation happens automatically when connectivity restored',
      'Targets 650M+ rural citizens with connectivity issues',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['UPI', 'Digital Payments', 'Financial Inclusion'],
  },
  {
    id: 'ca-rbi-03',
    title: 'RBI Launches Digital Rupee (e₹) Retail Pilot Expansion to 50 Cities',
    summary:
      'RBI expanded its Central Bank Digital Currency (CBDC) retail pilot to 50 cities, covering all major commercial banks and enabling programmable features for welfare scheme disbursals.',
    body: `The Reserve Bank of India announced a significant expansion of its Digital Rupee (e₹) retail pilot, scaling from 26 to 50 cities and onboarding all scheduled commercial banks. The e₹ is India's Central Bank Digital Currency (CBDC) and represents a digital form of sovereign currency.
 
Key features of the expanded pilot include programmable money capabilities — allowing government welfare transfers to be earmarked for specific expenditures (food, medicine, education), significantly reducing leakages in social schemes. This programmability was praised by the Finance Ministry as a "transformational feature" for Direct Benefit Transfer (DBT) efficiency.
 
The e₹ Retail (e₹-R) wallet, accessible via bank apps, allows person-to-person and person-to-merchant transactions. Tokens are stored offline-capable, adding a layer of transaction resilience. Unlike UPI, the e₹ does not require a bank intermediary for peer-to-peer transfers.
 
The RBI clarified that the e₹ carries the same legal tender status as physical currency and bears no interest. Cross-border e₹ interoperability trials with UAE's digital dirham are planned for Q3 2026 under a bilateral fintech pact.`,
    category: 'RBI Updates',
    date: 'April 30, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Pilot: 50 cities', 'All SCBs included', 'Programmable money', 'e₹-R: Retail CBDC', 'No interest earned', 'Legal tender status'],
    keyPoints: [
      'Retail CBDC pilot expanded from 26 to 50 cities',
      'Programmable features enable earmarked government welfare transfers',
      'All scheduled commercial banks now participate',
      'Offline-capable token storage for resilient transactions',
      'No interest — same legal tender as physical cash',
      'Cross-border interoperability with UAE digital dirham planned for Q3 2026',
    ],
    readTime: 5,
    isFeatured: false,
    tags: ['CBDC', 'Digital Rupee', 'Fintech'],
  },
 
  // ── Economy & Finance ─────────────────────────────────────────
  {
    id: 'ca-eco-01',
    title: 'India GDP Growth Revised Upward to 7.2% for FY2026 by IMF',
    summary:
      "IMF raised India's GDP growth forecast to 7.2% for FY2026, citing strong domestic consumption and manufacturing, keeping India as the world's fastest-growing major economy for the third straight year.",
    body: `The International Monetary Fund (IMF), in its latest World Economic Outlook update, revised India's GDP growth forecast upward to 7.2% for FY2026 — up from its earlier estimate of 6.8%. This revision places India firmly as the fastest-growing major economy globally for the third consecutive fiscal year.
 
The IMF attributed the upgrade to multiple factors: robust private consumption driven by a recovery in rural demand, strong capital expenditure by the central government (₹11.1 lakh crore budgeted for FY2026), and continued resilience of the services export sector, particularly IT and business process management.
 
Manufacturing growth — buoyed by Production Linked Incentive (PLI) schemes across 14 sectors — contributed meaningfully, with the PMI Manufacturing index maintaining above 57 for 11 consecutive months. Exports of smartphones, semiconductors, and defence equipment posted record growth.
 
India's nominal GDP is now estimated at ₹326 lakh crore (approximately $3.9 trillion), keeping it on track to become the world's third-largest economy by 2027. The IMF flagged global monetary tightening, geopolitical commodity shocks, and El Niño weather risks as downside factors.`,
    category: 'Economy & Finance',
    date: 'May 18, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['IMF GDP forecast: 7.2%', 'Fastest-growing G20', '3rd consecutive year', 'Nominal GDP: ~$3.9 Tn', 'Capex budget: ₹11.1L Cr', 'PLI: 14 sectors'],
    keyPoints: [
      'IMF raised India GDP forecast from 6.8% to 7.2% for FY2026',
      'Fastest-growing major economy for third consecutive year',
      'Government capex of ₹11.1 lakh crore is a key growth driver',
      'PLI scheme manufacturing gains (PMI>57 for 11 months)',
      'Nominal GDP estimated at ₹326 lakh crore (~$3.9 trillion)',
      'Risk factors: global tightening, geopolitical shocks, El Niño',
    ],
    readTime: 4,
    isFeatured: true,
    tags: ['GDP', 'IMF', 'Economic Growth'],
  },
  {
    id: 'ca-eco-02',
    title: "India's Forex Reserves Cross $680 Billion – All-Time High",
    summary:
      "India's foreign exchange reserves touched a record $680.2 billion in May 2026, providing 11+ months of import cover, driven by FPI inflows and strong remittances.",
    body: `India's foreign exchange reserves reached an all-time high of $680.2 billion as of the week ended May 9, 2026, according to data released by the Reserve Bank of India. This represents an increase of $14.8 billion over the previous month and provides approximately 11.3 months of import cover.
 
The surge in reserves was driven by three principal factors: Foreign Portfolio Investor (FPI) inflows of $18 billion in the calendar year to date (primarily into equities and government bonds), a 9% year-on-year increase in diaspora remittances reaching $109 billion for FY2026, and RBI's strategic purchase of dollars from the forex market to stabilise the rupee.
 
Foreign Currency Assets (FCA) — the largest component — stood at $591 billion. Gold reserves rose to $67 billion, reflecting the RBI's sustained gold-buying programme (the central bank added 42 tonnes of gold in FY2026 alone). Special Drawing Rights (SDR) and the IMF Reserve Tranche constitute the remainder.
 
Strong forex reserves provide a crucial buffer against external shocks, currency speculation, and import price volatility. The level is well above the IMF's adequacy metric of 3 months of import cover.`,
    category: 'Economy & Finance',
    date: 'May 10, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Forex Reserves: $680.2 Bn', 'Import Cover: 11+ months', 'FCA: $591 Bn', 'Gold: $67 Bn', 'FPI inflows: $18 Bn YTD', 'Remittances: $109 Bn'],
    keyPoints: [
      'Forex reserves at all-time high of $680.2 billion (May 2026)',
      "Provides 11.3 months of import cover — well above IMF's 3-month threshold",
      'FCA (Foreign Currency Assets): $591 billion',
      'Gold reserves: $67 billion; RBI added 42 tonnes in FY2026',
      'FPI inflows of $18 billion in YTD a major contributor',
      'Remittances hit record $109 billion for FY2026',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['Forex', 'RBI', 'Reserves'],
  },
  {
    id: 'ca-eco-03',
    title: "India's CPI Inflation Eases to 3.9% in April 2026 – Below RBI Target",
    summary:
      'India\'s retail inflation (CPI) fell to 3.9% in April 2026 — below RBI\'s 4% target for the first time in 14 months — driven by lower food and fuel prices.',
    body: `India's Consumer Price Index (CPI) inflation declined to 3.9% in April 2026 from 4.6% in March, marking the first time in 14 months that headline retail inflation has fallen below the Reserve Bank of India's 4% medium-term target.
 
The moderation was primarily driven by a sharp decline in food inflation — which constitutes nearly 46% of the CPI basket — falling to 5.1% from 7.3% in March, owing to improved winter crop arrivals and government interventions capping prices of pulses, tomatoes, and onions. Fuel and light inflation entered negative territory at -1.2% due to the global commodity deflation cycle.
 
Core inflation (ex-food and fuel) remained sticky at 3.7%, a concern for the MPC as it reflects entrenched domestic demand and services price pressures, particularly in housing, education, and personal care.
 
With CPI now within the 2-6% tolerance band and touching the target, market participants are pricing in a 25 basis point repo rate cut at the August 2026 MPC meeting. However, the RBI has cautioned that one month's data is insufficient to declare sustained disinflation.`,
    category: 'Economy & Finance',
    date: 'May 14, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['CPI: 3.9% (Apr 2026)', 'RBI target: 4%', 'Food inflation: 5.1%', 'Fuel inflation: -1.2%', 'Core inflation: 3.7%', 'First sub-4% in 14 months'],
    keyPoints: [
      'CPI at 3.9% in April 2026 — first time below 4% target in 14 months',
      'Food inflation cooled sharply to 5.1% from 7.3%',
      'Fuel inflation turned negative at -1.2%',
      'Core inflation sticky at 3.7%, signalling demand resilience',
      'Markets pricing 25bps rate cut at August 2026 MPC',
      'Food basket is ~46% of CPI — monsoon trajectory critical for next readings',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['Inflation', 'CPI', 'Monetary Policy'],
  },
 
  // ── Banking Awareness ─────────────────────────────────────────
  {
    id: 'ca-bank-01',
    title: 'India Tops G20 Financial Inclusion Index 2026',
    summary:
      'India led the G20 Financial Inclusion Index 2026, driven by Jan Dhan accounts (53 Cr+), UPI volumes of 14 billion monthly transactions, and 92% banking penetration.',
    body: `India has achieved the top position in the G20 Financial Inclusion Index 2026, a comprehensive assessment published by the Global Partnership for Financial Inclusion (GPFI) that evaluates access, usage, and quality of financial services across 20 major economies.
 
The index highlighted India's remarkable transformation over the past decade: from fewer than 500 million bank accounts in 2014 to over 1.4 billion accounts today, underpinned by the Pradhan Mantri Jan Dhan Yojana (PMJDY). Jan Dhan accounts alone now number 53 crore, holding aggregate deposits of ₹2.3 lakh crore.
 
UPI's meteoric growth — processing 14 billion transactions per month worth ₹20 lakh crore — was cited as India's single biggest financial inclusion enabler, enabling seamless payments even for daily-wage earners with basic feature phones (via UPI 123Pay for voice-based payments).
 
Banking penetration reached 92%, with 60% of bank branches now located in rural and semi-urban areas. Women's financial inclusion improved significantly, with 53% of PMJDY accounts held by women. The GPFI praised India's Digital Public Infrastructure (DPI) — Aadhaar + UPI + Account Aggregator — as a replicable global model.`,
    category: 'Banking Awareness',
    date: 'May 12, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['#1 in G20 Fin. Inclusion', 'Jan Dhan: 53 Cr+ accounts', 'UPI: 14 Bn txn/month', 'Banking penetration: 92%', 'Rural branches: 60%+', 'Women accounts: 53%'],
    keyPoints: [
      'India topped G20 Financial Inclusion Index 2026 — published by GPFI',
      'Jan Dhan accounts: 53 crore with ₹2.3 lakh crore deposits',
      'UPI: 14 billion transactions/month worth ₹20 lakh crore',
      'Banking penetration at 92%; 60% rural branch presence',
      '53% of Jan Dhan accounts held by women',
      "India's DPI (Aadhaar+UPI+AA) cited as global model",
    ],
    readTime: 4,
    isFeatured: true,
    tags: ['Financial Inclusion', 'Jan Dhan', 'UPI'],
  },
  {
    id: 'ca-bank-02',
    title: 'SBI Reports ₹22,000 Crore Net Profit in Q4 FY2026 — Record Quarterly Earnings',
    summary:
      "SBI's Q4 FY2026 net profit surged 23% YoY to ₹22,000 crore — a record quarterly figure — as gross NPA fell to a 12-year low of 2.1% and credit growth remained robust at 15%.",
    body: `State Bank of India (SBI), India's largest public sector bank and the country's biggest lender by assets, reported a record quarterly net profit of ₹22,000 crore for Q4 FY2026 — a 23.4% year-on-year increase from ₹17,840 crore in Q4 FY2025.
 
The stellar performance was driven by multiple levers: net interest income (NII) grew 11% to ₹41,500 crore, supported by a healthy net interest margin (NIM) of 3.4%. Non-interest income rose 18%, led by treasury gains and strong fee income from digital banking services.
 
Asset quality continued its sustained improvement trajectory. Gross Non-Performing Assets (GNPA) ratio fell to 2.1% — the lowest in 12 years — from 2.78% a year ago. The Net NPA ratio improved to 0.52%. Provisions coverage ratio (PCR) stands at a healthy 92%.
 
Credit growth remained robust at 15% YoY, driven by retail (home loans, personal loans), agriculture, and MSME segments. The bank's CASA ratio stood at 42.3%, maintaining a cost-effective funding base. SBI's capital adequacy ratio (CRAR) is comfortable at 14.2%, well above the RBI minimum of 11.5%.
 
The bank's board recommended a dividend of ₹13.70 per share for FY2026.`,
    category: 'Banking Awareness',
    date: 'May 8, 2026',
    importance: 'High',
    examRelevance: 'SBI-PO',
    quickFacts: ['Net Profit: ₹22,000 Cr', 'Growth: +23% YoY', 'GNPA: 2.1% (12-yr low)', 'Net NPA: 0.52%', 'NIM: 3.4%', 'Credit growth: 15%'],
    keyPoints: [
      'Q4 FY2026 net profit at ₹22,000 crore — highest ever quarterly figure',
      'NII grew 11% to ₹41,500 crore; NIM at 3.4%',
      'GNPA at 2.1% — lowest in 12 years; Net NPA: 0.52%',
      'PCR (Provisions Coverage Ratio): 92%',
      'CASA ratio: 42.3%; CRAR: 14.2%',
      'Dividend declared: ₹13.70 per share for FY2026',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['SBI', 'Bank Results', 'NPA'],
  },
  {
    id: 'ca-bank-03',
    title: 'NPCI Launches UPI One World for International Travelers in 20+ Countries',
    summary:
      'NPCI expanded UPI One World for foreign nationals and NRIs, enabling UPI payments in India via a prepaid wallet linked to a foreign passport — no Indian bank account needed.',
    body: `The National Payments Corporation of India (NPCI) expanded its UPI One World facility, now enabling citizens from over 20 countries to use UPI for payments within India without requiring an Indian bank account. The service was initially piloted for the G20 summit visitors in 2023 and is now being mainstreamed.
 
The mechanism works through a prepaid wallet linked to a foreign passport and a valid international travel document. The wallet, loaded in foreign currency at a bank branch or airport kiosk, is automatically converted to Indian Rupees (INR) for UPI transactions. The wallet remains valid for 30 days from issuance.
 
Key parameters: maximum wallet balance of ₹2 lakh, unlimited reload subject to FEMA guidelines, and acceptance at all 50+ million UPI-enabled merchants in India. Participating banks include SBI, HDFC Bank, ICICI Bank, Axis Bank, and Yes Bank.
 
Supported nationalities include visitors from the USA, UK, UAE, Singapore, Australia, Canada, Japan, South Korea, France, Germany, and 11 additional countries. NRIs visiting India on foreign passports also qualify. This initiative positions India as a digital payment-first tourism destination and supports the government's 'Visit India 2026' tourism campaign.`,
    category: 'Banking Awareness',
    date: 'April 28, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['20+ countries supported', 'Wallet limit: ₹2 Lakh', 'Valid: 30 days', 'Passport-linked wallet', 'No Indian account needed', '50M+ merchant acceptance'],
    keyPoints: [
      'UPI One World expanded to 20+ countries for foreign nationals',
      'Linked to foreign passport — no Indian bank account required',
      'Prepaid wallet maximum: ₹2 lakh; valid for 30 days',
      'Accepted at all 50M+ UPI-enabled merchants in India',
      'Supports NRIs on foreign passports visiting India',
      "Part of India's 'Visit India 2026' tourism digital push",
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['UPI', 'NPCI', 'Tourism', 'NRI'],
  },
  {
    id: 'ca-bank-04',
    title: 'RBI Framework for Self-Regulatory Organisations (SROs) in Fintech Sector',
    summary:
      'RBI released a final framework for SROs in the fintech sector, establishing governance norms, membership criteria, and supervisory responsibilities for fintech self-regulation.',
    body: `The Reserve Bank of India released the final framework for recognising Self-Regulatory Organisations (SROs) for fintech companies, following extensive stakeholder consultations initiated in January 2024. The framework empowers the industry to establish governance norms from within, reducing the regulatory burden on the RBI while maintaining systemic safety.
 
Under the framework, an SRO-FT (Fintech) must have a minimum of 25% of its membership from small and medium fintech firms to ensure inclusive representation. The governing board must include independent directors and representatives from various fintech sub-sectors — payments, lending, insurtech, wealthtech, and regtech.
 
Key responsibilities assigned to SROs include: setting conduct standards and a code of ethics for member firms, establishing grievance redressal mechanisms, monitoring compliance with RBI guidelines, facilitating regulatory sandboxes, and reporting systemic risk to the RBI.
 
The SRO cannot have majority control by any single corporate group, and decisions must be made through transparent democratic processes. The Fintech Association for Consumer Empowerment (FACE) and the Digital Lenders Association of India (DLAI) are seen as likely candidates for SRO recognition. Fintech firms with RBI licences (PAs, P2P NBFCs) would be mandatorily required to join.`,
    category: 'Banking Awareness',
    date: 'May 3, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['SRO-FT framework released', '25% SME membership', 'Democratic governance', 'FACE/DLAI likely applicants', 'Code of ethics required', 'Grievance redressal mechanism'],
    keyPoints: [
      'RBI released final framework for Self-Regulatory Organisations in Fintech',
      'SRO-FT must have 25% membership from small/medium fintechs',
      'Responsibilities: conduct norms, grievance redressal, compliance monitoring',
      'Board must include independent directors — no single corporate group majority',
      'FACE and DLAI are likely SRO applicants',
      'Mandatory membership for RBI-licensed fintech entities',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['Fintech', 'RBI Regulation', 'SRO'],
  },
 
  // ── Government Schemes ────────────────────────────────────────
  {
    id: 'ca-gov-01',
    title: 'PM Vishwakarma Scheme: ₹13,000 Crore Disbursed to 30 Lakh Artisans',
    summary:
      "PM Vishwakarma scheme disbursed ₹13,000 crore to 30 lakh+ artisans across 18 traditional occupations, offering loans at 5% interest with MSME skill-certification benefits.",
    body: `The Pradhan Mantri Vishwakarma Kaushal Samman Yojana (PM-Vikas), popularly known as PM Vishwakarma Scheme, has disbursed ₹13,000 crore to over 30 lakh traditional artisans and craftsmen across India as of May 2026, since its launch on September 17, 2023 — the birth anniversary of Vishwakarma, the divine craftsman in Hindu mythology.
 
The scheme provides a comprehensive support package: the first tranche of collateral-free loans of up to ₹1 lakh is offered at an interest rate of 5% per annum (with the GoI absorbing the interest differential). Upon satisfactory repayment, beneficiaries are eligible for a second tranche of up to ₹2 lakh. The total credit limit is ₹3 lakh per beneficiary.
 
Beneficiaries across 18 traditional trades — including blacksmiths (Lohar), carpenters (Suthar), goldsmiths (Sonar), potters (Kumhar), cobblers (Mochi), weavers (Julaha), boat-makers, masons, sculptors, and mat weavers — receive a Vishwakarma certification, a PM Vishwakarma identity card, and access to MSME Udyam registration to unlock government procurement preferences.
 
Skill upgradation training (5–15 days) with a stipend of ₹500/day, toolkit incentive of up to ₹15,000, and digital onboarding assistance are also provided. The scheme has a total outlay of ₹13,000 crore for five years (FY2024–FY2028).`,
    category: 'Government Schemes',
    date: 'May 15, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Outlay: ₹13,000 Cr (5 yrs)', 'Beneficiaries: 30 L+', 'Loan limit: ₹3 L', 'Interest: 5% p.a.', '18 trades covered', 'Stipend: ₹500/day training'],
    keyPoints: [
      'PM Vishwakarma Scheme disbursed ₹13,000 crore to 30+ lakh artisans',
      '18 traditional trades covered, including blacksmiths, weavers, potters',
      'Collateral-free loans: up to ₹1L (tranche 1) + ₹2L (tranche 2)',
      'Interest rate: 5% p.a. (GoI absorbs differential)',
      'Skill training with ₹500/day stipend; toolkit incentive ₹15,000',
      'Vishwakarma certificate + MSME Udyam registration provided',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['Artisans', 'MSME', 'Skill Development'],
  },
  {
    id: 'ca-gov-02',
    title: 'PMAY-Urban 2.0: 1 Crore Homes Sanctioned Worth ₹2.3 Lakh Crore',
    summary:
      "PMAY-Urban 2.0 sanctioned 1 crore new affordable housing units with ₹2.3 lakh crore central assistance targeting EWS, LIG, and MIG households, with 40% women beneficiaries.",
    body: `The Pradhan Mantri Awas Yojana – Urban 2.0 (PMAY-U 2.0) has achieved a major milestone with the Government of India sanctioning construction of 1 crore (10 million) new affordable housing units, mobilising a total central assistance of ₹2.3 lakh crore — the single largest urban housing commitment in India's history.
 
PMAY-U 2.0 covers Economically Weaker Section (EWS: annual income up to ₹3 lakh), Lower Income Group (LIG: ₹3–6 lakh), and Middle Income Group (MIG-I: ₹6–12 lakh; MIG-II: ₹12–18 lakh) categories. The central subsidy ranges from ₹1.5 lakh (MIG-II) to ₹2.5 lakh (EWS/LIG) per beneficiary.
 
A distinct feature of PMAY-U 2.0 is the mandatory co-ownership requirement for women — at least 40% of homes must be owned by women either solely or jointly. This is aimed at enhancing women's property rights and financial security.
 
The scheme is implemented under four verticals: In-situ Slum Redevelopment (ISSR), Affordable Housing in Partnership (AHP), Beneficiary-Led Individual House Construction (BLC-New), and Affordable Rental Housing Complexes (ARHC) for migrant workers. The target completion date is FY2029.`,
    category: 'Government Schemes',
    date: 'May 2, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Houses: 1 crore', 'Central Assistance: ₹2.3L Cr', 'Women: 40% mandate', 'For: EWS/LIG/MIG', 'Subsidy: ₹1.5L–₹2.5L', 'Deadline: FY2029'],
    keyPoints: [
      '1 crore homes sanctioned under PMAY-U 2.0 — largest urban housing commitment',
      'Central assistance: ₹2.3 lakh crore total',
      'Covers EWS, LIG, MIG-I, and MIG-II income groups',
      'Mandatory 40% women co-ownership or sole ownership',
      '4 verticals: ISSR, AHP, BLC-New, ARHC',
      'Target completion: FY2029',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['Housing', 'PMAY', 'Urban Development'],
  },
  {
    id: 'ca-gov-03',
    title: 'PM Kisan Samman Nidhi: ₹2,000 Instalments Now Paid via CBDC Wallet',
    summary:
      'Government started disbursing PM Kisan Samman Nidhi instalments through the Digital Rupee (e₹) wallet — a first for a major welfare scheme — covering 2 crore farmers in the pilot.',
    body: `In a landmark policy innovation, the Government of India began disbursing PM Kisan Samman Nidhi (PM-Kisan) scheme benefits — ₹2,000 quarterly instalments — through the Reserve Bank of India's Digital Rupee (e₹) wallet to 2 crore farmers in a pilot phase covering 6 states: UP, MP, Maharashtra, Rajasthan, Punjab, and Karnataka.
 
PM-Kisan provides ₹6,000 annually (in three instalments of ₹2,000) to all eligible farmer families owning up to 2 hectares of cultivable land. The scheme was launched in February 2019 and currently covers approximately 9.5 crore farmers. Total disbursement under PM-Kisan has crossed ₹3.8 lakh crore since inception.
 
The shift to e₹ disbursement is designed to test the "programmable money" feature of CBDC — where the digital currency can be restricted to agricultural input purchases (seeds, fertilisers, pesticides) at designated agri-stores, reducing the risk of fund misuse. The programmability is implemented via smart contracts on NPCI's e₹ infrastructure.
 
Farmers are onboarded through Jan Dhan accounts linked to Aadhaar, and the e₹ wallet is credited automatically on disbursement dates. For farmers without smartphones, USSD-based feature phone access to the wallet is enabled via the *99# UPI channel.`,
    category: 'Government Schemes',
    date: 'April 22, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['PM-Kisan: ₹6,000/yr (₹2,000 x3)', 'Beneficiaries: 9.5 Cr farmers', 'CBDC pilot: 2 Cr farmers', '6 pilot states', 'Total disbursed: ₹3.8L Cr', 'Programmable money feature'],
    keyPoints: [
      'PM-Kisan instalments now disbursed via CBDC (e₹) in pilot — first for a major scheme',
      '2 crore farmers covered across 6 states in pilot phase',
      'Programmable money restricts spending to agricultural inputs only',
      'Smart contracts on NPCI e₹ infrastructure enable restrictions',
      'Feature phone access via USSD *99# for non-smartphone farmers',
      'Total PM-Kisan disbursement crossed ₹3.8 lakh crore since 2019',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['PM-Kisan', 'CBDC', 'Agriculture', 'DBT'],
  },
 
  // ── Awards & Honors ───────────────────────────────────────────
  {
    id: 'ca-award-01',
    title: 'Padma Awards 2026: Banking & Finance Sector Awardees',
    summary:
      'Padma Awards 2026 recognised 131 personalities including former RBI officials and fintech innovators for contributions to banking and economic development.',
    body: `The President of India announced the Padma Awards 2026 on the eve of Republic Day (January 26, 2026), recognising 131 distinguished personalities across various fields. The banking and finance sector saw notable recognition.
 
Awards breakdown: Padma Vibhushan (4 recipients), Padma Bhushan (17 recipients), and Padma Shri (110 recipients). The Padma Vibhushan, India's second-highest civilian honour, was awarded to two finance sector stalwarts: a former RBI Deputy Governor instrumental in laying the digital payments infrastructure and the founder of India's largest microfinance institution.
 
In the Padma Bhushan category, a renowned economist who shaped India's fiscal consolidation roadmap and the pioneer of the Account Aggregator framework received the award. Several Padma Shri recipients included grassroots banking correspondents from remote tribal districts and a woman self-help group leader from Telangana who catalysed micro-lending access for 50,000 rural women.
 
The Padma Awards were instituted in 1954 and are announced on Republic Day. They recognise exceptional service of distinguished order to the nation across five criteria — distinction, public service, science & technology, arts & literature, and social work.`,
    category: 'Awards & Honors',
    date: 'January 26, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['Total: 131 awards', 'Padma Vibhushan: 4', 'Padma Bhushan: 17', 'Padma Shri: 110', 'Instituted: 1954', 'Announced: Republic Day'],
    keyPoints: [
      '131 Padma Awards 2026 announced on Republic Day',
      'Padma Vibhushan: 4; Padma Bhushan: 17; Padma Shri: 110',
      'Finance sector: former RBI Deputy Governor + microfinance pioneer (Vibhushan)',
      'Account Aggregator pioneer received Padma Bhushan',
      'Grassroots banking correspondents awarded Padma Shri',
      'Awards instituted in 1954; recognise exceptional national service',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['Padma Awards', 'Government Honours', 'Finance'],
  },
  {
    id: 'ca-award-02',
    title: 'RBI Governor Bags Best Central Banker in Asia-Pacific — Global Finance 2026',
    summary:
      "India's RBI Governor was named Best Central Banker in Asia-Pacific by Global Finance Magazine for effective inflation management, rupee stability, and digital payments expansion.",
    body: `Global Finance Magazine, one of the world's leading financial publications, named India's RBI Governor Sanjay Malhotra as the Best Central Banker in the Asia-Pacific region for 2026. The award, conferred annually since 1994, evaluates central bankers on inflation control, economic growth management, currency stability, and financial market development.
 
The award citation highlighted three key achievements during Governor Malhotra's tenure: First, successfully steering the repo rate pause strategy that balanced inflation control with growth support, maintaining India's economy as the world's fastest-growing major economy. Second, the Digital Rupee (e₹) rollout — among the fastest global CBDC deployments with 50-city retail pilot coverage. Third, the currency defence strategy that maintained the Indian rupee's volatility at multi-year lows despite global dollar strengthening.
 
The RBI's Financial Stability Report for 2026 was also praised for its forward-looking risk assessments and the proactive regulation of the fintech sector through the SRO framework.
 
Global Finance evaluates nominees from G20 nations and 50 additional emerging market economies. Previous Asia-Pacific winners include central bank governors from Singapore, South Korea, and Japan. India's win marks the first time an Indian central banker has received this specific regional award.`,
    category: 'Awards & Honors',
    date: 'April 22, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['Award: Best Central Banker – APAC', 'By: Global Finance Magazine', 'Governor: Sanjay Malhotra', 'Annual since: 1994', 'First for India', 'Category: Asia-Pacific'],
    keyPoints: [
      'RBI Governor Sanjay Malhotra named Best Central Banker – APAC by Global Finance 2026',
      'Award given annually since 1994; evaluates G20 + 50 emerging market central banks',
      'Cited for: repo rate strategy, e₹ CBDC rollout, rupee stability',
      'Digital Rupee rollout praised as one of fastest global CBDC deployments',
      'First time an Indian central banker wins this Asia-Pacific award',
      'Financial Stability Report 2026 also commended for forward-looking risk assessment',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['RBI', 'Governor', 'Award', 'CBDC'],
  },
 
  // ── Reports & Indexes ─────────────────────────────────────────
  {
    id: 'ca-rep-01',
    title: "World Bank: India Becoming 'Digital Economy Leader' — DPI Model Adopted by 12 Nations",
    summary:
      "A World Bank report labelled India a global digital economy leader, with UPI capturing 46% of global real-time transactions and 12 developing nations adopting India's DPI model.",
    body: `A landmark World Bank report titled "India's Digital Infrastructure Revolution: Lessons for the Developing World" positioned India as a global leader in digital financial inclusion, highlighting the country's three-pillar Digital Public Infrastructure (DPI): Aadhaar (biometric identity), Unified Payments Interface (UPI), and the Account Aggregator (AA) framework.
 
The report's key data points: UPI now accounts for 46% of all real-time payment transactions globally, processing $3 trillion in annual value — surpassing all other real-time payment systems combined including Brazil's Pix, UK's Faster Payments, and Australia's NPP. The Account Aggregator network, enabling consent-based financial data sharing, has facilitated $120 billion in MSME credit assessments, dramatically lowering collateral requirements.
 
India's Open Network for Digital Commerce (ONDC), described as a "decentralised Amazon," has onboarded 8 million sellers and facilitated ₹15,000 crore in monthly GMV, with particular impact on tier-2 and tier-3 city micro-retailers accessing national markets.
 
12 developing nations — including Ethiopia, Philippines, Thailand, Ghana, Kenya, Vietnam, and Uzbekistan — are implementing India's DPI model through bilateral tech-transfer agreements and the India Stack global initiative. The World Bank is funding DPI adoption through a $1.2 billion technical assistance programme.`,
    category: 'Reports & Indexes',
    date: 'May 8, 2026',
    importance: 'Medium',
    examRelevance: 'IBPS-PO',
    quickFacts: ['UPI: 46% global real-time txns', 'UPI annual value: $3 Tn', 'AA: $120 Bn MSME credit', 'ONDC: 8M sellers', 'DPI adopted: 12 nations', 'WB funding: $1.2 Bn'],
    keyPoints: [
      'World Bank report positions India as global digital economy leader',
      'UPI: 46% of all real-time global transactions; $3 trillion annual value',
      'Account Aggregator: $120 billion in MSME credit facilitation',
      'ONDC: 8 million sellers; ₹15,000 crore monthly GMV',
      "12 developing nations adopting India's DPI model",
      'World Bank funding DPI global adoption with $1.2 billion',
    ],
    readTime: 5,
    isFeatured: false,
    tags: ['DPI', 'UPI', 'World Bank', 'Digital Economy'],
  },
  {
    id: 'ca-rep-02',
    title: 'NITI Aayog SDG Index 2026: India Score Improves to 71/100',
    summary:
      "India's NITI Aayog SDG Index score rose to 71/100 in 2026, with top performers being Kerala (79) and Himachal Pradesh (78), while climate and land-use goals lag behind.",
    body: `The NITI Aayog released its Sustainable Development Goals (SDG) India Index 2026, tracking India's progress on all 17 Global Goals across 115+ indicators. India's composite score improved to 71 out of 100, up from 66 in 2023–24, reflecting meaningful gains across social, economic, and environmental dimensions.
 
Top-performing states: Kerala (79), Himachal Pradesh (78), Tamil Nadu (77), Goa (77), and Uttarakhand (76). The lowest performers were Jharkhand (57), Bihar (58), and Meghalaya (60). Among union territories, Chandigarh led at 81.
 
Progress highlights: Goal 1 (No Poverty) saw the largest gain — India lifted an estimated 13 crore people out of multidimensional poverty between 2015–2026 (UNDP confirms), driven by Jan Dhan, PM Ujjwala, and PM Awas Yojana. Goal 7 (Affordable Clean Energy) improved sharply with renewable energy capacity crossing 225 GW (40% of total installed capacity). Goal 9 (Industry, Innovation, Infrastructure) benefited from record infrastructure capex.
 
Areas needing urgent attention: Goal 13 (Climate Action) showed limited progress due to rising industrial emissions. Goal 15 (Life on Land) slipped due to continuing deforestation in the Northeast. Goal 10 (Reduced Inequalities) remains challenged despite economic growth, with India's Gini coefficient at 0.47.`,
    category: 'Reports & Indexes',
    date: 'April 30, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['India SDG Score: 71/100', 'Best State: Kerala (79)', 'Worst State: Jharkhand (57)', 'Best UT: Chandigarh (81)', 'SDGs: 17 total', 'Poverty lifted: 13 Cr'],
    keyPoints: [
      'India SDG Index 2026: score improved to 71/100 (from 66 in 2023–24)',
      'Best state: Kerala (79); Worst: Jharkhand (57); Best UT: Chandigarh (81)',
      'Goal 1 (No Poverty): India lifted 13 crore out of multidimensional poverty',
      'Renewable energy crossed 225 GW (40% of total installed capacity)',
      'Goals 13 (Climate) and 15 (Land) need urgent attention',
      'India Gini coefficient: 0.47 — inequality remains a structural challenge',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['SDG', 'NITI Aayog', 'Poverty', 'Environment'],
  },
  {
    id: 'ca-rep-03',
    title: 'Global Innovation Index 2026: India Climbs to 35th Rank',
    summary:
      "India rose to 35th in GII 2026 (from 40th in 2025), published by WIPO — topping lower-middle-income economies for the 4th consecutive year, leading in IT and knowledge outputs.",
    body: `India climbed five places to rank 35th in the Global Innovation Index (GII) 2026, published by the World Intellectual Property Organization (WIPO) in association with Cornell University and INSEAD. India has now consistently improved its GII ranking for the past 10 years and holds the top position among lower-middle-income economies for the fourth consecutive year.
 
Sub-pillar strengths: India ranks among the top 10 globally in "Software & IT Services," "Knowledge & Technology Outputs," and "Tertiary Education." The country's strength in software exports, a large STEM graduate pool (4.4 million annually — world's largest), and a thriving startup ecosystem (77,000+ DPIIT-recognised startups; world's 3rd largest) are structural innovation enablers.
 
Patent filings from India grew 31% YoY to 89,000+ applications, with Indian entities filing more international PCT applications than in any prior year. Scientific publications from Indian institutions grew 15%, with IITs and IISc ranking in global top-100 subject rankings.
 
The top 5 GII 2026 nations are Switzerland (1), Sweden (2), USA (3), UK (4), and Singapore (5). China ranks 12th. For South Asia, India leads all peers — Sri Lanka (95), Bangladesh (115), Pakistan (80).`,
    category: 'Reports & Indexes',
    date: 'April 16, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['GII Rank 2026: 35', 'Previous: 40 (2025)', 'By: WIPO', '#1 Lower-Middle Income (4th yr)', 'Patents: 89K+ (+31%)', 'Startups: 77K+'],
    keyPoints: [
      'India ranked 35th in GII 2026 — up from 40th in 2025 (published by WIPO)',
      'Top of lower-middle-income economies for 4th consecutive year',
      'Ranks global top-10 in Software & IT Services and Knowledge Outputs',
      'Patent filings grew 31% to 89,000+ applications',
      "77,000+ DPIIT-recognised startups — world's 3rd largest ecosystem",
      'Top GII 2026: Switzerland (1), Sweden (2), USA (3)',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['GII', 'Innovation', 'WIPO', 'Startups'],
  },
 
  // ── International Affairs ─────────────────────────────────────
  {
    id: 'ca-int-01',
    title: 'India-UAE Sign Expanded Bilateral Investment Treaty Worth $75 Billion',
    summary:
      "India and UAE signed a comprehensive BIT covering banking, fintech, and infrastructure — expected to attract $75 billion in UAE investments over 5 years on top of the existing CEPA.",
    body: `India and the United Arab Emirates formalised an expanded Bilateral Investment Treaty (BIT) during PM Narendra Modi's visit to Abu Dhabi, marking a significant upgrade of the economic partnership between the two nations. The BIT provides robust legal protection for investments from both sides across banking, fintech, renewable energy, infrastructure, healthcare, and logistics.
 
The BIT is complementary to the Comprehensive Economic Partnership Agreement (CEPA) signed in February 2022 — which already eliminated tariffs on 88% of Indian goods exported to the UAE. The BIT provides the legal architecture for investor-state dispute settlement (ISDS), ensuring UAE investors have predictable recourse to international arbitration.
 
Investment targets set in the BIT: UAE sovereign wealth funds (ADIA and Mubadala, collectively managing $1.5 trillion in assets) committed to deploying $75 billion in India over five years. Priority sectors include data centres (India's digital economy boom), green hydrogen (for UAE's clean energy transition), defence manufacturing (under Make in India), and ports & logistics.
 
India-UAE bilateral trade stands at $85 billion annually, making the UAE India's third-largest trading partner and second-largest export destination after the USA. Over 3.5 million Indian expatriates in the UAE remit approximately $19 billion annually to India — the largest source of bilateral remittances.`,
    category: 'International Affairs',
    date: 'May 14, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Investment target: $75 Bn', 'Treaty: BIT + CEPA', 'Bilateral trade: $85 Bn', 'Indian diaspora: 3.5M', 'Remittances: $19 Bn', 'ADIA + Mubadala: $1.5 Tn AUM'],
    keyPoints: [
      'India-UAE signed expanded Bilateral Investment Treaty (BIT) during PM\'s Abu Dhabi visit',
      'Complements CEPA (2022) which covers 88% tariff-free Indian exports',
      'UAE SWFs (ADIA + Mubadala) to invest $75 billion in India over 5 years',
      'Priority sectors: data centres, green hydrogen, defence, ports',
      'India-UAE bilateral trade: $85 billion/year; UAE is 3rd-largest trading partner',
      'Indian diaspora remittances from UAE: $19 billion annually',
    ],
    readTime: 4,
    isFeatured: false,
    tags: ['UAE', 'BIT', 'FDI', 'Trade'],
  },
  {
    id: 'ca-int-02',
    title: 'India Joins BIS Innovation Hub — 3rd Asian Economy After HK and Singapore',
    summary:
      'India formally joined the Bank for International Settlements Innovation Hub, focusing on CBDC interoperability, regtech, and green finance as its third Asian member.',
    body: `India formally became a member of the Bank for International Settlements (BIS) Innovation Hub — the research and development arm of the "central bank of central banks" — making it the third Asian economy to join after Hong Kong and Singapore. The membership was signed by RBI Governor Sanjay Malhotra at the BIS headquarters in Basel, Switzerland.
 
The BIS Innovation Hub (BISIH) facilitates collaborative research on frontier financial technologies among central banks globally. India's strategic focus areas within BISIH will be: CBDC interoperability (building bridges between India's e₹ and other nations' CBDCs), regulatory technology (AI/ML tools for real-time banking supervision), cyber resilience for financial infrastructure, and green finance standards for ESG-linked banking.
 
India's RBI will contribute its expertise in large-scale retail payment systems (UPI) and CBDC deployment to benefit the 63-member central bank community. A dedicated BISIH node city is expected to be established in Mumbai's International Financial Services Centre (IFSC) at GIFT City, Gujarat.
 
The BIS was founded in 1930, headquartered in Basel, Switzerland, and currently has 63 member central banks covering 95% of global GDP. BISIH operates through hubs in Basel, Hong Kong, Singapore, London, Stockholm, Toronto, and Paris.`,
    category: 'International Affairs',
    date: 'April 18, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['3rd Asian economy in BISIH', 'Focus: CBDC, Regtech, Green Finance', 'BIS HQ: Basel, Switzerland', 'Founded: 1930', 'Members: 63 central banks', 'GIFT City node planned'],
    keyPoints: [
      'India joined BIS Innovation Hub — 3rd Asian economy (after HK and Singapore)',
      'Focus areas: CBDC interoperability, regtech, cyber resilience, green finance',
      'India to contribute UPI and e₹ expertise to global central bank community',
      'BISIH node planned at GIFT City IFSC, Gujarat',
      'BIS founded 1930; 63 member central banks covering 95% of global GDP',
      'Signed by RBI Governor Sanjay Malhotra at Basel headquarters',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['BIS', 'CBDC', 'International Finance', 'GIFT City'],
  },
 
  // ── Important Days ────────────────────────────────────────────
  {
    id: 'ca-day-01',
    title: 'World Environment Day 2026 — Theme: Land Restoration, Desertification & Drought',
    summary:
      "World Environment Day on June 5 carries the theme 'Land Restoration, Desertification and Drought Resilience' for 2026, hosted by Saudi Arabia. India pledges to restore 26 million hectares by 2030.",
    body: `World Environment Day (WED) is celebrated globally on June 5 every year under the aegis of the United Nations Environment Programme (UNEP). Established by the UN General Assembly in 1972 following the Stockholm Conference on Human Environment, WED is the world's largest platform for environmental public outreach.
 
The theme for 2026 is "Land Restoration, Desertification and Drought Resilience" — chosen in alignment with the UN Decade on Ecosystem Restoration (2021–2030). This theme focuses on restoring degraded land, combating desertification (expansion of desert regions), and building societal resilience against droughts — phenomena affecting over 40% of the world's land area and 2.3 billion people.
 
Saudi Arabia is the official host nation for WED 2026, acknowledging its position in one of the world's most arid regions and its ambitious Vision 2030 green initiative — "Saudi Green Initiative" — which aims to plant 10 billion trees in Saudi Arabia.
 
India made significant pledges: to restore 26 million hectares of degraded land by 2030 under the Bonn Challenge commitment, and to plant 5 billion trees under the Green India Mission by 2030. India's forest cover has increased by 1,540 sq km since 2019, now covering 21.71% of geographic area.
 
Previous WED hosts include Côte d'Ivoire (2024 — Land Restoration), Netherlands (2023 — Plastic Pollution Solutions), Sweden (2022 — Only One Earth).`,
    category: 'Important Days',
    date: 'June 5, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['Date: June 5 (annually)', 'Theme 2026: Land Restoration', 'Host: Saudi Arabia', 'UN Decade: 2021–2030', 'India pledges: 26M ha restoration', 'Established: 1972 (Stockholm)'],
    keyPoints: [
      'World Environment Day: June 5 — established by UNGA in 1972 (Stockholm Conference)',
      'WED 2026 theme: "Land Restoration, Desertification and Drought Resilience"',
      'Host country 2026: Saudi Arabia (Saudi Green Initiative — 10 billion trees)',
      'Aligns with UN Decade on Ecosystem Restoration (2021–2030)',
      'India: pledges 26M hectares restoration by 2030 (Bonn Challenge)',
      'India forest cover: 21.71% of geographic area (+1,540 sq km since 2019)',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['Environment', 'June 5', 'UN', 'Climate'],
  },
  {
    id: 'ca-day-02',
    title: 'National Technology Day 2026: 28 Years of Pokhran-II Nuclear Tests',
    summary:
      "India observed National Technology Day on May 11, marking 28 years since Pokhran-II (1998). Theme 2026: 'Integrated Technology for Sustainable Future'. Also marks first Hansa-3 flight.",
    body: `India celebrated National Technology Day on May 11, 2026, marking the 28th anniversary of the successful Pokhran-II nuclear tests, code-named Operation Shakti, conducted on May 11–13, 1998, under the leadership of then-PM Atal Bihari Vajpayee and the scientific guidance of Dr. A.P.J. Abdul Kalam and Dr. R. Chidambaram.
 
National Technology Day was instituted by the Government of India in 1999 to commemorate three simultaneous technological achievements on May 11, 1998: (1) Operation Shakti — five successful nuclear tests at Pokhran, Rajasthan; (2) First successful test flight of the indigenous Hansa-3 aircraft by the National Aerospace Laboratories (NAL), Bengaluru; (3) Successful testing of Trishul — a short-range surface-to-air missile by DRDO.
 
The theme for National Technology Day 2026 is "Integrated Technology for Sustainable Future" — emphasising the convergence of AI, clean energy, biotechnology, and space technology to achieve India's sustainable development goals and the 2047 Viksit Bharat vision.
 
The Technology Development Board (TDB) under the Department of Science & Technology (DST) presents National Technology Awards on this day to recognise outstanding contributions by scientists, innovators, startups, and MSMEs in commercialising indigenous technologies. Awardees in 2026 included a Lucknow-based startup developing biodegradable single-use plastics and a DRDO lab developing solid-state battery technology for EVs.`,
    category: 'Important Days',
    date: 'May 11, 2026',
    importance: 'Medium',
    examRelevance: 'Both',
    quickFacts: ['Date: May 11', 'Theme 2026: Integrated Technology', 'Pokhran-II: 1998 (Op. Shakti)', 'Hansa-3: First flight 1998', 'Instituted: 1999', 'By: Technology Development Board'],
    keyPoints: [
      'National Technology Day: May 11 — instituted in 1999 to mark Pokhran-II tests',
      'Operation Shakti (Pokhran-II): 5 nuclear tests, May 11–13, 1998',
      'Three achievements on May 11, 1998: Pokhran, Hansa-3 flight, Trishul missile test',
      'Theme 2026: "Integrated Technology for Sustainable Future"',
      'TDB presents National Technology Awards on this day',
      'PM Vajpayee and Dr. A.P.J. Abdul Kalam led the 1998 achievement',
    ],
    readTime: 3,
    isFeatured: false,
    tags: ['May 11', 'Technology', 'Pokhran', 'DRDO'],
  },
 
  // ── Static GK ─────────────────────────────────────────────────
  {
    id: 'ca-sgk-01',
    title: 'RBI: History, Governors, HQ & Key Functions — Complete Static GK',
    summary:
      'Comprehensive Static GK on the Reserve Bank of India — established April 1, 1935; HQ Mumbai; current Governor Sanjay Malhotra; key functions covering monetary policy, banking regulation, forex management, and currency issuance.',
    body: `The Reserve Bank of India (RBI) is India's central bank and monetary authority, established on April 1, 1935, under the Reserve Bank of India Act, 1934. It was initially privately owned and was nationalised on January 1, 1949.
 
Headquarters: Central Office, Shahid Bhagat Singh Marg (formerly Mint Road), Mumbai, Maharashtra. The RBI has 31 regional offices across India. Its history traces back to a recommendation by the Hilton Young Commission (1926) and was conceptualised based on the structure of the Bank of England.
 
Current Governor: Sanjay Malhotra (26th Governor, appointed December 11, 2024). Former Governors include Shaktikanta Das (25th; Dec 2018–Dec 2024), Urjit Patel (24th), Raghuram Rajan (23rd), D. Subbarao (22nd), Y.V. Reddy (21st), and C. Rangarajan (20th).
 
Key Functions of RBI: (1) Monetary Authority — formulates and implements monetary policy via the MPC; (2) Banker to the Government — manages GoI's accounts and public debt; (3) Banker's Bank — provides credit facilities to commercial banks via repo/SDF; (4) Currency Management — sole issuer of banknotes (except ₹1 note, issued by MoF); (5) Forex Management — manages India's forex reserves under FEMA 1999; (6) Regulator and Supervisor — supervises commercial banks, NBFCs, cooperative banks.
 
Key RBI Committees: Narasimham Committee (1991, 1998) — Banking Reforms; Nachiket Mor Committee (2013) — Financial Inclusion; Khan Committee (2020) — Digital Payments.`,
    category: 'Static GK',
    date: 'May 1, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['Founded: April 1, 1935', 'Nationalised: Jan 1, 1949', 'HQ: Mumbai', 'Governor: Sanjay Malhotra (26th)', 'Act: RBI Act, 1934', '31 regional offices'],
    keyPoints: [
      'RBI established April 1, 1935 under RBI Act, 1934; nationalised January 1, 1949',
      'HQ: Shahid Bhagat Singh Marg, Mumbai; 31 regional offices',
      '26th Governor: Sanjay Malhotra (appointed December 11, 2024)',
      '6 key functions: monetary authority, banker to govt, banker\'s bank, currency, forex, regulator',
      'MPC (6-member) sets repo rate — constituted under RBI Act Section 45ZB',
      '₹1 note issued by Ministry of Finance — all others by RBI',
    ],
    readTime: 5,
    isFeatured: false,
    isMonthly: true,
    tags: ['RBI', 'Static GK', 'Governors', 'Monetary Policy'],
  },
  {
    id: 'ca-sgk-02',
    title: 'Key Banking Terms for Exams: CASA, NPA, CRR, SLR, CRAR Explained',
    summary:
      'Quick-revision guide to essential banking terminology for SBI PO & IBPS PO: CASA ratio, NPA classification, CRR, SLR, CRAR, Basel III norms, and Prompt Corrective Action framework.',
    body: `Mastering banking terminology is non-negotiable for any banking exam aspirant. Here are the most frequently tested terms with their current values and exam-ready explanations.
 
CASA Ratio: Current Account Savings Account ratio measures the proportion of low-cost deposits (savings and current accounts) to total deposits. Higher CASA = lower cost of funds = better profitability. SBI's CASA ratio: 42.3%. Ideal CASA: above 40%.
 
NPA (Non-Performing Asset): A loan where principal or interest is overdue for more than 90 days (for term loans). Classified as: Substandard (NPA < 1 yr), Doubtful (NPA 1–3 yr), Loss Assets (NPA > 3 yr). Gross NPA ratio: gross NPAs ÷ gross advances. Net NPA ratio: net NPAs (after provisions) ÷ net advances.
 
CRR (Cash Reserve Ratio): Percentage of net demand and time liabilities (NDTL) banks must maintain as cash with RBI. Current CRR: 4%. No interest paid on CRR. Increase in CRR → liquidity tightening. Minimum CRR: 3% (as per RBI Act).
 
SLR (Statutory Liquidity Ratio): Percentage of NDTL banks must maintain in gold, cash (other than CRR), or approved govt securities. Current SLR: 18%. Maximum SLR: 40% (per RBI Act). Used for monetary policy and ensuring bank solvency.
 
CRAR (Capital to Risk-weighted Assets Ratio): Minimum capital adequacy ratio under Basel III. RBI mandates minimum CRAR of 11.5% (9% minimum + 2.5% Capital Conservation Buffer). SBI CRAR: 14.2%.
 
Prompt Corrective Action (PCA): RBI framework for banks with deteriorating financials. Triggered when CRAR < 10.25%, Net NPA > 6%, or Return on Assets < 0%.`,
    category: 'Static GK',
    date: 'April 25, 2026',
    importance: 'High',
    examRelevance: 'Both',
    quickFacts: ['CRR: 4%', 'SLR: 18%', 'Min CRAR: 11.5%', 'NPA threshold: 90 days', 'Good CASA: >40%', 'PCA: NPA>6% triggers'],
    keyPoints: [
      'CASA ratio: low-cost deposits / total deposits; higher = better profitability; SBI: 42.3%',
      'NPA: loan overdue >90 days (3 types: Substandard, Doubtful, Loss)',
      'CRR: 4% of NDTL held as cash with RBI — no interest earned',
      'SLR: 18% of NDTL in gold/cash/govt securities',
      'CRAR minimum: 11.5% (9% + 2.5% CCB) under Basel III',
      'PCA triggered at CRAR<10.25%, Net NPA>6%, or ROA<0%',
    ],
    readTime: 6,
    isFeatured: false,
    isMonthly: true,
    tags: ['Banking Terms', 'NPA', 'CRR', 'SLR', 'Basel III'],
  },
];
