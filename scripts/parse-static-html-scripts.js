// PATH: scripts/parse-static-html-scripts.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../.next/server/app/index.html');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}. Make sure to run 'npm run build' first.`);
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
const srcRegex = /src=["']([^"']+)["']/i;
let match;
const scripts = [];
while ((match = scriptRegex.exec(html)) !== null) {
  const tag = match[0];
  const content = match[1];
  const srcMatch = srcRegex.exec(tag);
  const src = srcMatch ? srcMatch[1] : 'Inline Script';
  scripts.push({ tag, src, contentLength: content.length });
}

console.log(`Total Script Tags Found in Statically Built Index Page: ${scripts.length}`);
scripts.forEach((s, i) => {
  console.log(`${i + 1}: src="${s.src}" (length: ${s.contentLength} bytes)`);
  if (s.src === 'Inline Script') {
    console.log(`   Snippet: ${s.tag.slice(0, 100).replace(/\n/g, ' ')}...`);
  }
});
