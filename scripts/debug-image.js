// PATH: scripts/debug-image.js
const http = require('http');

const url = 'http://localhost:3000/_next/image?url=%2Fimages%2Fsbi-po-login.png&w=1080&q=75';

http.get(url, { headers: { 'Accept': 'image/webp,*/*' } }, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  const chunks = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    console.log('Body Length:', Buffer.concat(chunks).length);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
