// PATH: scripts/parse-scripts.js
const http = require('http');

http.get('http://localhost:3000/', (res) => {
  let html = '';
  res.on('data', (chunk) => {
    html += chunk;
  });
  res.on('end', () => {
    // Parse script tags
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

    console.log(`Total Script Tags Found: ${scripts.length}`);
    scripts.forEach((s, i) => {
      console.log(`${i + 1}: src="${s.src}" (length: ${s.contentLength} bytes)`);
      if (s.src === 'Inline Script') {
        console.log(`   Snippet: ${s.tag.slice(0, 100).replace(/\n/g, ' ')}...`);
      }
    });
  });
}).on('error', (err) => {
  console.error('Error fetching homepage:', err.message);
});
