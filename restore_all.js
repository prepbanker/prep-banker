const fs = require('fs');
const readline = require('readline');

async function restore() {
  const logFile = 'C:\\Users\\G M TECHNOSYS\\.gemini\\antigravity-ide\\brain\\7e6d6f3b-3a20-482f-a51c-0d24d1c2fc93\\.system_generated\\logs\\transcript.jsonl';
  const targetFile = 'd:/Demo-Project-Docs/PracticeProjects/prep-banker/lib/data/exams/detailContentMap.tsx';

  // Read clean content first
  let content = fs.readFileSync(targetFile, 'utf8');
  console.log("Starting lines count:", content.split('\n').length);

  // We will read transcript.jsonl line by line
  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let step = 0;
  let datesReplacementText = "";
  let cutoffReplacementText = "";

  for await (const line of rl) {
    step++;
    const obj = JSON.parse(line);
    if (!obj.tool_calls) continue;

    for (const tc of obj.tool_calls) {
      const target = tc.args.TargetFile || tc.args.Target || "";

      // 1. Notification (Step 58)
      if (step === 58 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        content = content.replace(targetText, replText);
        console.log("Applied Step 58 (Notification)");
      }

      // 2. Admit Card (Step 130)
      if (step === 130 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        content = content.replace(targetText, replText);
        console.log("Applied Step 130 (Admit Card)");
      }

      // 3. Vacancy (Step 178)
      if (step === 178 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        content = content.replace(targetText, replText);
        console.log("Applied Step 178 (Vacancy)");
      }

      // 4. Syllabus (Step 277)
      if (step === 277 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        content = content.replace(targetText, replText);
        console.log("Applied Step 277 (Syllabus)");
      }

      // 5. Important Dates replacement text (Step 352)
      if (step === 352 && tc.name === 'write_to_file') {
        datesReplacementText = tc.args.CodeContent;
        console.log("Extracted Dates replacement text from Step 352");
      }

      // 6. Cutoff replacement text (Step 392)
      if (step === 392 && tc.name === 'write_to_file') {
        cutoffReplacementText = tc.args.CodeContent;
        console.log("Extracted Cutoff replacement text from Step 392");
      }
    }
  }

  // Now perform the Dates and Cutoff replacements.
  // Let's find the targets for dates and cutoff.
  // For dates, the target is the default case block for 'important-dates':
  const datesTarget = `    case 'important-dates':\n    case 'dates': {\n      return {\n        title: \`\${exam.shortName} Important Dates 2026\`,\n        overview: \`Important dates, timeline, and schedule for \${exam.shortName} 2026.\`,\n        ctaText: 'View Recruitment Timeline',\n        ctaHref: 'https://app.prepgrind.com/register',\n        subsections: [\n          {\n            id: 'dates-table',\n            title: 'Recruitment Schedule',\n            content: (\n              <div className="space-y-4">\n                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">\n                  Below are the expected dates for the 2026 recruitment process:\n                </p>\n                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">\n                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[500px]">\n                    <thead>\n                      <tr className="bg-slate-900 text-white font-bold">\n                        <th className="px-4 py-2.5">Event</th>\n                        <th className="px-4 py-2.5">Indicative Date</th>\n                      </tr>\n                    </thead>\n                    <tbody className="divide-y divide-slate-100 text-slate-655">\n                      <tr>\n                        <td className="px-4 py-3 font-semibold text-slate-800">Online Registration Opens</td>\n                        <td className="px-4 py-3">{isIbps ? \'August 2026\' : \'April 2026\'}</td>\n                      </tr>\n                      <tr className="bg-slate-50/50">\n                        <td className="px-4 py-3 font-semibold text-slate-800">Prelims Examination</td>\n                        <td className="px-4 py-3">{isIbps ? \'October 2026\' : \'June 2026\'}</td>\n                      </tr>\n                      <tr>\n                        <td className="px-4 py-3 font-semibold text-slate-800">Mains Examination</td>\n                        <td className="px-4 py-3">{isIbps ? \'November 2026\' : \'August 2026\'}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            )\n          }\n        ],\n        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes(\'date\') || f.q.toLowerCase().includes(\'dates\') || f.q.toLowerCase().includes(\'when\'))\n      };\n    }`;

  if (content.includes(datesTarget)) {
    content = content.replace(datesTarget, datesReplacementText);
    console.log("Successfully replaced Dates block.");
  } else {
    console.error("Could not find datesTarget in content!");
  }

  // For cutoff, the target is the default case block for 'cut-off':
  const cutoffTarget = `    case 'cut-off':\n    case 'cut-offs':\n      return {\n        title: examId === 'sbi-po' ? 'SBI PO Previous Year Cut-off Marks (2018–2025)' : \`\${exam.shortName} Previous Year Cut-offs & Marks Trends\`,\n        overview: examId === 'sbi-po'\n          ? 'Use these as your target scores. Consistently scoring above the General category cut-off in mocks = exam-ready.'\n          : \`To target a realistic score, candidates must evaluate previous years' category-wise cut-off trends. Inspect how competitive thresholds have fluctuated over the last three cycles for both Prelims and Mains.\`,\n        ctaText: \`Compare Your Mock Marks Against Cutoffs\`,\n        ctaHref: 'https://app.prepgrind.com/register',\n        subsections: examId === 'sbi-po' ? [\n          {\n            id: 'cutoff-trends-interactive',\n            title: 'Interactive Cut-off Trends Switcher',\n            content: (\n              <div className="space-y-4">\n                <p className="text-slate-655 text-sm sm:text-[15px] leading-relaxed">\n                  Inspect category-wise marks and dynamic line charts by toggling between Prelims (Phase 1) and Mains (Phase 2) in the switch control below.\n                </p>\n                <CutoffTrendsSwitcher />\n              </div>\n            )\n          }\n        ] : [\n          {\n            id: 'cutoff-trends',\n            title: 'General Category Cut-off History',\n            content: (\n              <div className="space-y-4">\n                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">\n                  Historical cut-off marks are a key tool to calibrate your preparation level. Focus on clearing the category score with a safe margin in practice mocks.\n                </p>\n                <div className="w-full overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs my-2">\n                  <table className="w-full text-left text-sm sm:text-base border-collapse min-w-[400px]">\n                    <thead>\n                      <tr className="bg-slate-900 text-white font-bold">\n                        <th className="px-4 py-2.5">Exam Stage</th>\n                        <th className="px-4 py-2.5">General (UR) Cut-off Range</th>\n                      </tr>\n                    </thead>\n                    <tbody className="divide-y divide-slate-100 text-slate-650">\n                      <tr>\n                        <td className="px-4 py-3 font-semibold text-slate-800">Preliminary Exam (Out of 100)</td>\n                        <td className="px-4 py-3">{isIbps ? \'49–58 marks\' : \'52–63 marks\'}</td>\n                      </tr>\n                      <tr className="bg-slate-50/50">\n                        <td className="px-4 py-3 font-semibold text-slate-800">Main Exam (Out of 250)</td>\n                        <td className="px-4 py-3">{isIbps ? \'71–83 marks\' : \'78–89 marks\'}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            )\n          }\n        ],\n        faqs: exam.examFaqs.filter(f => f.q.toLowerCase().includes('cutoff') || f.q.toLowerCase().includes('attempts') || f.q.toLowerCase().includes('score'))\n      };`;

  if (content.includes(cutoffTarget)) {
    content = content.replace(cutoffTarget, cutoffReplacementText);
    console.log("Successfully replaced Cutoff block.");
  } else {
    console.error("Could not find cutoffTarget in content!");
  }

  // Write the final content back to file
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log("File written. Final lines count:", content.split('\n').length);
}

restore();
