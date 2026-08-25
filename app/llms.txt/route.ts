// PATH: app/llms.txt/route.ts
import { NextResponse } from 'next/server';
import { sbiPoData } from '@/lib/data/exams/sbi-po';
import { ibpsPoData } from '@/lib/data/exams/ibps-po';

export async function GET() {
  const description = "PrepBanker is a specialized banking exam preparation platform offering structured study guides, detailed exam analysis, and mock tests for SBI PO and IBPS PO candidates. The platform provides sectional practice tests, detailed syllabus breakdowns, and cut-off trends spanning from 2019 to 2025 to support systematic exam preparation.";

  const exams = [sbiPoData, ibpsPoData];

  let content = `# PrepBanker\n> ${description}\n\n## Exam guides\n`;
  for (const e of exams) {
    // Generate a simple, clean, neutral one-line description
    let shortDesc = e.overview || e.description;
    // Strip superlatives if any (sbi-po has most prestigious, let's keep it very clean and factual)
    if (e.id === 'sbi-po') {
      shortDesc = "A national-level banking recruitment exam preparation guide for State Bank of India Probationary Officers, featuring syllabus breakdowns, cut-offs, and strategies.";
    } else if (e.id === 'ibps-po') {
      shortDesc = "A comprehensive preparation guide for the Institute of Banking Personnel Selection Probationary Officer exam across 11 public sector banks.";
    } else {
      if (shortDesc.includes('.')) {
        shortDesc = shortDesc.split('.')[0] + '.';
      }
    }
    content += `- [${e.shortName}](https://prepbanker.com/${e.id}): ${shortDesc}\n`;
  }

  content += `
## Comparisons
- [SBI PO vs IBPS PO](https://prepbanker.com/sbi-po/comparison): Side-by-side comparison of vacancies, salary, career progression, and selection difficulty.

## Mock tests and practice
- [SBI PO Mock Tests](https://prepbanker.com/sbi-po/mock-tests): Section-wise and full-length simulated tests for SBI PO Prelims and Mains.
- [IBPS PO Mock Tests](https://prepbanker.com/ibps-po/mock-tests): Section-wise and full-length simulated tests for IBPS PO Prelims and Mains.

## Current affairs
- [Current Affairs](https://prepbanker.com/current-affairs): Daily financial news and general awareness updates curated for banking aspirants.

## Data
- [Data Hub](https://prepbanker.com/data): Centralized hub for banking exam datasets and historical cut-offs.

## About
- [About Us](https://prepbanker.com/about): Our founding story, mission, team structure, and registered entity details.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
