// PATH: scripts/find-blog-html-link2.js
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../.next/server/app/blogs/sbi-po-2026-complete-preparation-guide.html');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  let index = -1;
  const regex = /facebook/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    console.log('Match found at index:', match.index);
    console.log(content.slice(match.index - 50, match.index + 200));
  }
} else {
  console.log('file not found:', file);
}
