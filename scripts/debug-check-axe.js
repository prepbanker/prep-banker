// PATH: scripts/debug-check-axe.js
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../.next/server/app/blogs/sbi-po-2026-complete-preparation-guide.html');
const content = fs.readFileSync(file, 'utf8');

const linkRegex = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
let match;
let count = 0;
while ((match = linkRegex.exec(content)) !== null) {
  const attrs = match[1];
  const innerHtml = match[2].trim();
  
  if (attrs.includes('facebook')) {
    count++;
    const hasAriaLabel = /\baria-label=/i.test(attrs) || /\baria-labelledby=/i.test(attrs);
    const textContent = innerHtml.replace(/<svg\b[\s\S]*?<\/svg>/gi, '').replace(/<[^>]*>/g, '').trim();
    
    console.log(`Match #${count}:`);
    console.log(`  hasAriaLabel:`, hasAriaLabel);
    console.log(`  innerHtml length:`, innerHtml.length);
    console.log(`  textContent:`, JSON.stringify(textContent));
    console.log(`  textContent is empty:`, !textContent);
  }
}
