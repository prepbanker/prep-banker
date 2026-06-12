const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\G M TECHNOSYS\\.gemini\\antigravity-ide\\brain\\7e6d6f3b-3a20-482f-a51c-0d24d1c2fc93\\.system_generated\\logs\\transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let step = 0;
  for await (const line of rl) {
    step++;
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      obj.tool_calls.forEach((tc) => {
        const target = tc.args.TargetFile || tc.args.Target || "";
        if (target.includes('detailContentMap.tsx')) {
          console.log(`Step ${step} (${tc.name}):`);
          console.log(`  Instruction: ${tc.args.Instruction}`);
          console.log(`  Description: ${tc.args.Description}`);
          // Print StartLine, EndLine, TargetContent, ReplacementContent if they exist
          if (tc.args.StartLine) console.log(`  Lines: ${tc.args.StartLine} - ${tc.args.EndLine}`);
          if (tc.args.TargetContent) console.log(`  Target Content length: ${tc.args.TargetContent.length}`);
          if (tc.args.ReplacementContent) console.log(`  Replacement Content length: ${tc.args.ReplacementContent.length}`);
          if (tc.args.CodeContent) console.log(`  Code Content length: ${tc.args.CodeContent.length}`);
          if (tc.args.ReplacementChunks) console.log(`  Replacement Chunks count: ${tc.args.ReplacementChunks.length}`);
        }
      });
    }
  }
}

processLineByLine();
