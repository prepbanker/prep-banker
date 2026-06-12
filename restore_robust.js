const fs = require('fs');
const readline = require('readline');

async function restore() {
  const logFile = 'C:\\Users\\G M TECHNOSYS\\.gemini\\antigravity-ide\\brain\\7e6d6f3b-3a20-482f-a51c-0d24d1c2fc93\\.system_generated\\logs\\transcript.jsonl';
  const targetFile = 'd:/Demo-Project-Docs/PracticeProjects/prep-banker/lib/data/exams/detailContentMap.tsx';

  // Read clean content first
  let content = fs.readFileSync(targetFile, 'utf8');

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
        // Normalize line endings for replacement
        const normContent = content.replace(/\r?\n/g, '\n');
        const normTarget = targetText.replace(/\r?\n/g, '\n');
        const normRepl = replText.replace(/\r?\n/g, '\n');
        if (normContent.includes(normTarget)) {
          content = normContent.replace(normTarget, normRepl);
          console.log("Applied Step 58 (Notification)");
        } else {
          console.error("Could not apply Step 58 (Notification) - target not found");
        }
      }

      // 2. Admit Card (Step 130)
      if (step === 130 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        const normContent = content.replace(/\r?\n/g, '\n');
        const normTarget = targetText.replace(/\r?\n/g, '\n');
        const normRepl = replText.replace(/\r?\n/g, '\n');
        if (normContent.includes(normTarget)) {
          content = normContent.replace(normTarget, normRepl);
          console.log("Applied Step 130 (Admit Card)");
        } else {
          console.error("Could not apply Step 130 (Admit Card) - target not found");
        }
      }

      // 3. Vacancy (Step 178)
      if (step === 178 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        const normContent = content.replace(/\r?\n/g, '\n');
        const normTarget = targetText.replace(/\r?\n/g, '\n');
        const normRepl = replText.replace(/\r?\n/g, '\n');
        if (normContent.includes(normTarget)) {
          content = normContent.replace(normTarget, normRepl);
          console.log("Applied Step 178 (Vacancy)");
        } else {
          console.error("Could not apply Step 178 (Vacancy) - target not found");
        }
      }

      // 4. Syllabus (Step 277)
      if (step === 277 && tc.name === 'replace_file_content') {
        const targetText = tc.args.TargetContent;
        const replText = tc.args.ReplacementContent;
        const normContent = content.replace(/\r?\n/g, '\n');
        const normTarget = targetText.replace(/\r?\n/g, '\n');
        const normRepl = replText.replace(/\r?\n/g, '\n');
        if (normContent.includes(normTarget)) {
          content = normContent.replace(normTarget, normRepl);
          console.log("Applied Step 277 (Syllabus)");
        } else {
          console.error("Could not apply Step 277 (Syllabus) - target not found");
        }
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

  // Normalize current content line endings
  content = content.replace(/\r?\n/g, '\n');

  // Let's do robust index-based replacement for Cut-off and Important Dates
  
  // A. Cut-off Case replacement
  const cutoffStartTag = "    case 'cut-off':\n    case 'cut-offs':";
  const cutoffEndTag = "    case 'important-dates':";
  
  const cutoffStartIdx = content.indexOf(cutoffStartTag);
  const cutoffEndIdx = content.indexOf(cutoffEndTag);
  
  if (cutoffStartIdx !== -1 && cutoffEndIdx !== -1) {
    const originalCutoffBlock = content.substring(cutoffStartIdx, cutoffEndIdx);
    content = content.replace(originalCutoffBlock, cutoffReplacementText.replace(/\r?\n/g, '\n') + "\n\n");
    console.log("Successfully replaced Cut-off block using index matching.");
  } else {
    console.error("Could not find Cut-off start/end tags!", cutoffStartIdx, cutoffEndIdx);
  }

  // B. Important Dates Case replacement
  const datesStartTag = "    case 'important-dates':\n    case 'dates': {";
  const datesEndTag = "    case 'study-plan':";
  
  const datesStartIdx = content.indexOf(datesStartTag);
  const datesEndIdx = content.indexOf(datesEndTag);
  
  if (datesStartIdx !== -1 && datesEndIdx !== -1) {
    const originalDatesBlock = content.substring(datesStartIdx, datesEndIdx);
    content = content.replace(originalDatesBlock, datesReplacementText.replace(/\r?\n/g, '\n') + "\n\n");
    console.log("Successfully replaced Important Dates block using index matching.");
  } else {
    console.error("Could not find Important Dates start/end tags!", datesStartIdx, datesEndIdx);
  }

  // Write the final content back to file
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log("File written. Final lines count:", content.split('\n').length);
}

restore();
