// PATH: lib/data/current-affairs/faqs.ts
// ─────────────────────────────────────────
// Current Affairs FAQs — add new entries without touching UI
// ─────────────────────────────────────────
import type { CAFAQ } from '../../../types/current-affairs';

export const CA_FAQS: CAFAQ[] = [
  {
    id: 'ca-faq-01',
    question: 'Why are current affairs important for SBI PO and IBPS PO exams?',
    answer:
      'Current affairs constitute 40–50 questions in the Mains examination across all banking exams. The General Awareness (GA) section — covering Banking Awareness, RBI policy, government schemes, economy, international affairs, and static GK — is a key differentiator between candidates with similar Quant and Reasoning scores. Strong current affairs preparation can add 35–40 marks in Mains, often making the difference between selection and rejection.',
  },
  {
    id: 'ca-faq-02',
    question: 'How many months of current affairs should I study for SBI PO and IBPS PO?',
    answer:
      'For any banking exam, you should cover the last 6 months of current affairs before the Mains exam, with special emphasis on the last 3 months. For the General Awareness section, static banking topics (RBI, functions, key rates) are perennial — study those alongside current affairs. Focus on: RBI monetary policy decisions, major government schemes, important index rankings, banking sector news, and significant international agreements.',
  },
  {
    id: 'ca-faq-03',
    question: 'What categories of current affairs are most important for banking exams?',
    answer:
      'In order of weightage: (1) Banking Awareness & RBI Updates — most heavily tested; (2) Economy & Finance (GDP, inflation, forex, budget highlights); (3) Government Schemes (PM Kisan, PMAY, Jan Dhan); (4) Reports & Indexes (GII, SDG Index, World Bank reports); (5) Awards & Honours (Padma Awards, national/international prizes); (6) International Affairs (bilateral treaties, summits); (7) Important Days (especially those linked to banking/finance). Static GK on RBI and banking terms is tested every year.',
  },
  {
    id: 'ca-faq-04',
    question: 'What is the current repo rate set by RBI?',
    answer:
      'The RBI\'s Monetary Policy Committee (MPC) has kept the repo rate unchanged at 6.5% as of May 2026 — the sixth consecutive pause since April 2023. Other key rates: Reverse Repo Rate: 3.35%, Marginal Standing Facility (MSF) Rate: 6.75%, Standing Deposit Facility (SDF) Rate: 6.25%, Bank Rate: 6.75%, CRR: 4%, SLR: 18%. These rates are frequently asked in the GA section — memorise them updated from every MPC decision.',
  },
  {
    id: 'ca-faq-05',
    question: 'Who is the current Governor of the Reserve Bank of India?',
    answer:
      'The current (26th) Governor of the Reserve Bank of India is Sanjay Malhotra, who assumed office on December 11, 2024, succeeding Shaktikanta Das (25th Governor, 2018–2024). Malhotra was previously the Revenue Secretary in the Ministry of Finance. The RBI Governor serves a 3-year term, extendable by the Government of India. Key past governors frequently asked in exams: Raghuram Rajan (23rd), Y.V. Reddy (21st), C.D. Deshmukh (first Indian Governor, 1943).',
  },
  {
    id: 'ca-faq-06',
    question: 'What is the difference between CRR and SLR?',
    answer:
      'CRR (Cash Reserve Ratio) is the percentage of a bank\'s Net Demand and Time Liabilities (NDTL) that must be maintained as cash with the RBI — currently 4%. No interest is earned on CRR. SLR (Statutory Liquidity Ratio) is the percentage of NDTL (currently 18%) that must be maintained in liquid assets — gold, cash (other than CRR), or approved government/state development loan securities. Interest is earned on SLR securities. CRR controls money supply directly; SLR ensures banks have a liquidity buffer and supports government borrowing.',
  },
  {
    id: 'ca-faq-07',
    question: 'What is UPI and how does it work? Why is it relevant for banking exams?',
    answer:
      'Unified Payments Interface (UPI) is a real-time interbank payment system developed by NPCI (National Payments Corporation of India) that facilitates instant money transfers between bank accounts using mobile phones. Key facts for exams: launched 2016; processes 14 billion transactions/month (May 2026); single-day record: 620 million transactions; India has 46% share of global real-time transactions. UPI variants tested: UPI-Lite (low-value offline), UPI-Lite X (offline NFC), UPI 123Pay (feature phone USSD), UPI One World (international travelers). Operated by NPCI; governed by RBI.',
  },
  {
    id: 'ca-faq-08',
    question: 'What is a Central Bank Digital Currency (CBDC) and what is India\'s Digital Rupee?',
    answer:
      "A CBDC is a digital form of a country's sovereign fiat currency, issued and backed by the central bank — unlike cryptocurrencies which are decentralised and private. India's Digital Rupee (e₹) is issued by RBI and has the same legal tender status as physical currency but bears no interest. India launched the e₹ Wholesale (for interbank settlements) in November 2022 and the e₹ Retail (for public transactions) in December 2022. As of 2026, the retail pilot covers 50 cities and all scheduled commercial banks. Key feature: programmable money — allowing earmarked government welfare transfers.",
  },
  {
    id: 'ca-faq-09',
    question: 'What is the Pradhan Mantri Jan Dhan Yojana (PMJDY)?',
    answer:
      'PMJDY is India\'s financial inclusion flagship scheme launched on August 28, 2014, by PM Narendra Modi. It aims to provide universal banking access to every household. Key features: zero-balance savings account, RuPay debit card, ₹1 lakh accident insurance cover, ₹10,000 overdraft facility (for eligible account holders), direct benefit transfers (DBT). Current status (May 2026): 53+ crore accounts opened; ₹2.3 lakh crore deposits; 53% women beneficiaries; 67% accounts in rural/semi-urban areas. PMJDY is the world\'s largest financial inclusion initiative.',
  },
  {
    id: 'ca-faq-10',
    question: 'What are Non-Performing Assets (NPAs) and how do they affect banks?',
    answer:
      'An NPA (Non-Performing Asset) is a loan or advance where interest or principal payment has been overdue for more than 90 days for term loans. Classifications: Substandard (NPA < 12 months), Doubtful (NPA 12–36 months), Loss Asset (NPA > 36 months, or irrecoverable). Higher NPAs reduce a bank\'s profitability (provisions erode income), weaken capital adequacy (CRAR falls), and restrict fresh lending. India\'s banking system\'s Gross NPA ratio has improved from a peak of 11.2% (FY2018) to 2.8% (FY2026), with SBI\'s GNPA at a 12-year low of 2.1%.',
  },
  {
    id: 'ca-faq-11',
    question: 'What is the difference between Repo Rate and Reverse Repo Rate?',
    answer:
      'Repo Rate (6.5%) is the rate at which the RBI lends short-term funds to commercial banks (against government securities as collateral). Higher repo rate → banks\' borrowing costs rise → credit becomes expensive → inflation cools. Reverse Repo Rate (3.35%) is the rate at which the RBI borrows from commercial banks (banks park excess funds with RBI). The RBI replaced the Reverse Repo Rate as the primary liquidity tool with the Standing Deposit Facility (SDF) Rate (6.25%) in April 2022 — SDF allows RBI to absorb liquidity without giving collateral. Both are still tested in exams.',
  },
  {
    id: 'ca-faq-12',
    question: 'What is India\'s current GDP growth rate and who sets/publishes it?',
    answer:
      'India\'s GDP growth rate for FY2026 has been revised upward to 7.2% by the IMF (International Monetary Fund), making India the world\'s fastest-growing major economy for the third consecutive year. India\'s GDP is measured by the National Statistical Office (NSO) under MoSPI using two methods: production (value-added by agriculture, industry, services) and expenditure (consumption + investment + government spending + exports - imports). India\'s nominal GDP stands at approximately ₹326 lakh crore (~$3.9 trillion). Major global institutions publishing India growth forecasts: IMF, World Bank, ADB, RBI, OECD.',
  },
  {
    id: 'ca-faq-13',
    question: 'What is the Account Aggregator (AA) framework in India?',
    answer:
      'The Account Aggregator (AA) framework, launched in August 2021 by the RBI, is a consent-based financial data-sharing system that allows individuals to securely share their financial data (bank statements, tax records, insurance, investments) with lenders — with full control and explicit consent at every step. AAs are RBI-licensed entities and act as data intermediaries (not data handlers). The AA framework has facilitated over $120 billion in MSME credit assessments, dramatically reducing reliance on physical document verification and collateral. Major AAs: CAMS Finserv, Finvu, OneMoney, NESL.',
  },
  {
    id: 'ca-faq-14',
    question: 'How should I prepare current affairs for banking exams efficiently?',
    answer:
      'Optimal strategy: (1) Read PrepBanker\'s daily current affairs (10 mins/day) — focus on High-importance items and Banking/RBI/Economy categories; (2) Maintain a personal notes file with key rates, index rankings, and scheme details; (3) Revise monthly compilations for last-minute preparation — these condense 30 days into 15-minute reads; (4) Attempt daily quizzes to retain what you\'ve read; (5) Focus on "Quick Facts" — exam questions often ask specific numbers (rates, ranks, amounts); (6) Build a static GK base on RBI, SEBI, IRDAI, PFRDA, and key banking terms — these repeat every year.',
  },
  {
    id: 'ca-faq-15',
    question: 'What are the Basel III norms and why are they tested in banking exams?',
    answer:
      'Basel III is the third accord of the Basel Committee on Banking Supervision (BCBS) — an international regulatory framework enhancing bank capital adequacy, liquidity, and leverage standards after the 2008 Global Financial Crisis. Key Basel III requirements implemented by RBI: (1) Minimum CET1 (Common Equity Tier 1) capital: 5.5% of RWA; (2) Minimum Tier-1 capital: 7% of RWA; (3) Minimum CRAR: 9% + 2.5% Conservation Buffer = 11.5% (RBI mandates); (4) Leverage Ratio: minimum 3%; (5) LCR (Liquidity Coverage Ratio): banks must hold enough High-Quality Liquid Assets (HQLA) to survive 30-day stress. RBI implemented Basel III from FY2013, with full compliance by March 2019.',
  },
  {
    id: 'ca-faq-16',
    question: 'What is the Insolvency and Bankruptcy Code (IBC) and its relevance to banking?',
    answer:
      'The Insolvency and Bankruptcy Code (IBC), 2016, is India\'s consolidated framework for time-bound resolution of insolvency and bankruptcy for companies and individuals. For banking: when a corporate borrower defaults, banks (as financial creditors) can initiate insolvency proceedings at the National Company Law Tribunal (NCLT). Key timelines: 180 days for resolution (extendable by 90 days), plus 30-day liquidation initiation. The Committee of Creditors (CoC), dominated by banks, approves resolution plans. IBC has helped banks recover ₹3.4 lakh crore since 2016. IBBI (Insolvency and Bankruptcy Board of India) regulates the IBC process.',
  },
  {
    id: 'ca-faq-17',
    question: 'What are Priority Sector Lending (PSL) norms for banks?',
    answer:
      'Priority Sector Lending (PSL) requires banks to lend specified percentages of Adjusted Net Bank Credit (ANBC) to priority sectors. For domestic commercial banks: 40% of ANBC must go to priority sectors. Sub-targets: Agriculture (18% of ANBC, including 10% for small/marginal farmers), MSME (7.5%), Weaker Sections (12%), Renewable Energy (target: ₹30 crore per borrower). If banks fall short of PSL targets, they must invest shortfall amount in RIDF (Rural Infrastructure Development Fund) with NABARD at below-market interest rates — an implicit penalty. Foreign banks with <20 branches: 40% PSL target; those with 20+ branches: same as domestic banks.',
  },
  {
    id: 'ca-faq-18',
    question: 'What is the role of NABARD, SIDBI, and NHB in India\'s financial system?',
    answer:
      'These are India\'s three major Development Finance Institutions (DFIs): NABARD (National Bank for Agriculture and Rural Development): established 1982; apex bank for agricultural credit and rural development; administers RIDF; supervises Rural Cooperative Banks and RRBs; HQ: Mumbai. SIDBI (Small Industries Development Bank of India): established 1990; principal DFI for MSME finance; also administers Credit Guarantee Fund Trust for MSEs (CGTMSE); HQ: Lucknow. NHB (National Housing Bank): established 1988; apex regulator and re-financier for housing finance companies (HFCs); wholly owned by RBI; administers PMAY rural credit subsidy; HQ: New Delhi. All three are wholly/majority owned by Government of India/RBI.',
  },
  {
    id: 'ca-faq-19',
    question: 'What is Financial Inclusion and what are India\'s key initiatives?',
    answer:
      'Financial inclusion means ensuring all individuals and businesses have access to useful and affordable financial products and services — transactions, payments, savings, credit, and insurance. India\'s key financial inclusion initiatives: PMJDY (Jan Dhan Yojana): zero-balance accounts; 53 crore accounts; PM Suraksha Bima Yojana (PMSBY): accident insurance ₹2 lakh at ₹20/year; PM Jeevan Jyoti Bima Yojana (PMJJBY): life cover ₹2 lakh at ₹436/year; Atal Pension Yojana (APY): pension for unorganised sector; Mudra Yojana: collateral-free loans for micro enterprises up to ₹10 lakh; Business Correspondent (BC) network: banking agents in rural areas. India topped the G20 Financial Inclusion Index 2026.',
  },
  {
    id: 'ca-faq-20',
    question: 'What is SEBI and how is it different from RBI?',
    answer:
      'SEBI (Securities and Exchange Board of India) is India\'s capital markets regulator, established in 1988 and given statutory powers under SEBI Act, 1992. SEBI regulates: stock exchanges (NSE, BSE), mutual funds, brokers, investment advisers, depositories (CDSL, NSDL), FPIs, and REITs. RBI regulates: banks, NBFCs, payment systems, forex, government securities, and India\'s monetary policy. Key differences: RBI is India\'s monetary authority and lender of last resort; SEBI is a market regulator ensuring fair, transparent capital markets. RBI Governor is appointed by GoI on Cabinet Committee recommendation; SEBI Chairperson is also GoI-appointed. Current SEBI Chairperson: Tuhin Kanta Pandey (2024-present).',
  },
];