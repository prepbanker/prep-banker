// PATH: scripts/find-blog-html-link.js
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../.next/server/app/blogs/sbi-po-2026-complete-preparation-guide.html');
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const index = content.indexOf('facebook.com');
  if (index !== -1) {
    console.log(content.slice(index - 100, index + 300));
  } else {
    console.log('facebook.com not found');
  }
} else {
  console.log('file not found:', file);
}
