// PATH: scripts/measure-image-sizes.js
const http = require('http');

const IMAGES = [
  { name: 'SBI PO Login (PNG)', url: 'http://localhost:3000/_next/image?url=%2Fimages%2Fsbi-po-login.png&w=1024&q=75', originalSize: 452528 },
  { name: 'IBPS PO Card (JPEG)', url: 'http://localhost:3000/_next/image?url=%2Fimages%2Fibps-po-card.jpeg&w=1024&q=75', originalSize: 331999 }
];

function fetchMetadata(img, acceptHeader) {
  return new Promise((resolve) => {
    const options = {
      headers: {
        'Accept': acceptHeader
      }
    };
    http.get(img.url, options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => {
        chunks.push(chunk);
      });
      res.on('end', () => {
        const body = Buffer.concat(chunks);
        resolve({
          name: img.name,
          originalSize: img.originalSize,
          status: res.statusCode,
          contentType: res.headers['content-type'] || 'unknown',
          optimizedSize: body.length
        });
      });
    }).on('error', (err) => {
      resolve({
        name: img.name,
        originalSize: img.originalSize,
        status: 'error',
        contentType: 'unknown',
        optimizedSize: 0,
        error: err.message
      });
    });
  });
}

async function run() {
  console.log('=== Image Optimization Verification ===');
  
  // Test with AVIF first
  console.log('\n--- Client requesting image/avif ---');
  for (const img of IMAGES) {
    const res = await fetchMetadata(img, 'image/avif,image/webp,*/*');
    if (res.status !== 200) {
      console.log(`${res.name}: Error (Status Code ${res.status})`);
    } else {
      const reduction = ((res.originalSize - res.optimizedSize) / res.originalSize * 100).toFixed(1);
      console.log(`${res.name}:\n  Served Type: ${res.contentType}\n  Original: ${(res.originalSize / 1024).toFixed(1)} KB\n  Optimized: ${(res.optimizedSize / 1024).toFixed(1)} KB\n  Reduction: ${reduction}%\n`);
    }
  }

  // Test with WebP
  console.log('\n--- Client requesting image/webp ---');
  for (const img of IMAGES) {
    const res = await fetchMetadata(img, 'image/webp,*/*');
    if (res.status !== 200) {
      console.log(`${res.name}: Error (Status Code ${res.status})`);
    } else {
      const reduction = ((res.originalSize - res.optimizedSize) / res.originalSize * 100).toFixed(1);
      console.log(`${res.name}:\n  Served Type: ${res.contentType}\n  Original: ${(res.originalSize / 1024).toFixed(1)} KB\n  Optimized: ${(res.optimizedSize / 1024).toFixed(1)} KB\n  Reduction: ${reduction}%\n`);
    }
  }
}

run();
