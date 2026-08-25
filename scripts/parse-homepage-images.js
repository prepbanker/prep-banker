// PATH: scripts/parse-homepage-images.js
const http = require('http');

http.get('http://localhost:3000/', (res) => {
  let html = '';
  res.on('data', (chunk) => {
    html += chunk;
  });
  res.on('end', () => {
    // Search for any img tags
    const imgRegex = /<img\b[^>]*>/gi;
    let match;
    const imgs = [];
    while ((match = imgRegex.exec(html)) !== null) {
      imgs.push(match[0]);
    }
    console.log(`Total <img> tags on homepage: ${imgs.length}`);
    imgs.forEach((img, i) => {
      console.log(`${i + 1}: ${img}`);
    });

    // Search for any PNG references
    const pngRegex = /[^"'\s>]+\.png/gi;
    const pngs = html.match(pngRegex) || [];
    const uniquePngs = [...new Set(pngs)];
    console.log(`\nTotal unique PNG references on homepage: ${uniquePngs.length}`);
    uniquePngs.forEach((png, i) => {
      console.log(`${i + 1}: ${png}`);
    });
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
