// PATH: scripts/measure-ttfb.js
const http = require('http');

const URLS = [
  'http://localhost:3000/',
  'http://localhost:3000/sbi-po',
  'http://localhost:3000/current-affairs',
  'http://localhost:3000/quiz',
  'http://localhost:3000/quiz/practice/sbi-po/quantitative-aptitude/arithmetic/percentage'
];

function measure(url) {
  return new Promise((resolve) => {
    const startTime = process.hrtime();
    const req = http.get(url, (res) => {
      res.once('readable', () => {
        const diff = process.hrtime(startTime);
        const ttfbMs = (diff[0] * 1e9 + diff[1]) / 1e6;
        resolve({
          url,
          status: res.statusCode,
          cacheControl: res.headers['cache-control'] || 'none',
          ttfbMs: ttfbMs.toFixed(2)
        });
      });
      res.resume();
    });
    req.on('error', (err) => {
      resolve({
        url,
        status: 'error',
        cacheControl: 'none',
        ttfbMs: 'N/A',
        error: err.message
      });
    });
  });
}

async function run() {
  console.log('=== TTFB and Cache-Control Measurement ===');
  for (const url of URLS) {
    const result = await measure(url);
    if (result.status === 'error') {
      console.log(`URL: ${result.url}\n  Status: ${result.status} (${result.error})\n`);
    } else {
      console.log(`URL: ${result.url}\n  Status: ${result.status}\n  Cache-Control: ${result.cacheControl}\n  TTFB: ${result.ttfbMs} ms\n`);
    }
  }
}

run();
