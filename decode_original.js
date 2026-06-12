const fs = require('fs');
const { execSync } = require('child_process');

// git show outputs in UTF-16 LE when piped via PowerShell - read with buffer
const buf = fs.readFileSync('detailContentMap_original.tsx');

// Detect encoding: UTF-16 LE has BOM FF FE
let content;
if (buf[0] === 0xFF && buf[1] === 0xFE) {
  content = buf.toString('utf16le');
  console.log('Detected UTF-16 LE encoding');
} else {
  content = buf.toString('utf8');
  console.log('Detected UTF-8 encoding');
}

// Normalize line endings
content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
// Remove BOM if present
content = content.replace(/^\uFEFF/, '');

const lines = content.split('\n');
console.log('Total lines:', lines.length);

const results = [];
lines.forEach((l, i) => {
  const t = l.trim();
  if (t.startsWith("case '") || t.startsWith('case "') || t.includes("case 'cut-off'") || t.includes("case 'important-dates'")) {
    results.push(`${i+1}: ${l.substring(0, 100)}`);
  }
});
console.log('Case lines found:', results.length);
console.log(results.join('\n'));

// Save as UTF-8 for further use
fs.writeFileSync('detailContentMap_original_utf8.tsx', content, 'utf8');
console.log('Saved UTF-8 version');
