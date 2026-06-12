const fs = require('fs');
const readline = require('readline');

const targetSteps = [237, 277, 306, 310, 320, 322, 352, 354, 392, 394];

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\G M TECHNOSYS\\.gemini\\antigravity-ide\\brain\\7e6d6f3b-3a20-482f-a51c-0d24d1c2fc93\\.system_generated\\logs\\transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let step = 0;
  for await (const line of rl) {
    step++;
    if (targetSteps.includes(step)) {
      const obj = JSON.parse(line);
      console.log(`=== STEP ${step} ===`);
      console.log(`Source: ${obj.source}, Type: ${obj.type}, Status: ${obj.status}`);
      if (obj.tool_calls) {
        obj.tool_calls.forEach((tc, tcIdx) => {
          console.log(`Tool Call ${tcIdx}: ${tc.name}`);
          console.log(`Arguments:`, JSON.stringify(tc.args, null, 2));
        });
      }
    }
  }
}

processLineByLine();
