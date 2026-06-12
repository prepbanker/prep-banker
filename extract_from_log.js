const fs = require('fs');
const readline = require('readline');

async function extractContent() {
  const logFile = 'C:\\Users\\G M TECHNOSYS\\.gemini\\antigravity-ide\\brain\\7e6d6f3b-3a20-482f-a51c-0d24d1c2fc93\\.system_generated\\logs\\transcript.jsonl';
  
  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let step = 0;
  let cutoffContent = null;
  let datesContent = null;

  for await (const line of rl) {
    step++;
    let obj;
    try { obj = JSON.parse(line); } catch(e) { continue; }
    if (!obj.tool_calls) continue;

    for (const tc of obj.tool_calls) {
      // Step 392: write_to_file with cutoff_replacement.txt
      if (step === 392 && tc.name === 'write_to_file') {
        let raw = tc.args.CodeContent;
        // The CodeContent itself is a JSON-encoded string (double-escaped)
        // It looks like: "\"case 'cut-off':\\n ..."
        // We need to JSON.parse it to get the actual code
        if (raw && raw.startsWith('"')) {
          try {
            cutoffContent = JSON.parse(raw);
            console.log('Extracted cutoff content from step 392, length:', cutoffContent.length);
          } catch(e) {
            console.log('Failed to parse cutoff content:', e.message);
            // Try without outer quotes
            cutoffContent = raw.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
            console.log('Fallback cutoff content length:', cutoffContent.length);
          }
        }
      }
      
      // Step 352: write_to_file with dates_replacement.txt
      if (step === 352 && tc.name === 'write_to_file') {
        let raw = tc.args.CodeContent;
        if (raw && raw.startsWith('"')) {
          try {
            datesContent = JSON.parse(raw);
            console.log('Extracted dates content from step 352, length:', datesContent.length);
          } catch(e) {
            console.log('Failed to parse dates content:', e.message);
            datesContent = raw.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
            console.log('Fallback dates content length:', datesContent.length);
          }
        }
      }
    }
  }

  if (cutoffContent) {
    fs.writeFileSync('cutoff_recovered.txt', cutoffContent, 'utf8');
    console.log('\nCutoff content saved to cutoff_recovered.txt');
    console.log('First 300 chars:', cutoffContent.substring(0, 300));
  } else {
    console.log('\nFailed to extract cutoff content!');
  }

  if (datesContent) {
    fs.writeFileSync('dates_recovered.txt', datesContent, 'utf8');
    console.log('\nDates content saved to dates_recovered.txt');
    console.log('First 300 chars:', datesContent.substring(0, 300));
  } else {
    console.log('\nFailed to extract dates content!');
  }
}

extractContent().catch(console.error);
