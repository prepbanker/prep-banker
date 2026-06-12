const fs = require('fs');
const readline = require('readline');

const targetSteps = [237, 277, 306, 310];

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
      fs.writeFileSync(`step_${step}.txt`, JSON.stringify(obj, null, 2), 'utf8');
      console.log(`Saved step_${step}.txt`);
    }
  }
}

processLineByLine();
