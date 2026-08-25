// PATH: scripts/verify-headers-manifest.js
const http = require('http');

function get(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks).toString('utf8')
        });
      });
    }).on('error', (err) => {
      resolve({
        statusCode: 'error',
        error: err.message
      });
    });
  });
}

async function run() {
  console.log('=== VERIFYING HEADERS AND PWA MANIFEST ===');
  
  // 1. Check Homepage for CSP headers
  const home = await get('http://localhost:3000/');
  console.log('\n--- Homepage Response ---');
  console.log('Status Code:', home.statusCode);
  if (home.headers) {
    console.log('Content-Security-Policy-Report-Only:', home.headers['content-security-policy-report-only']);
    console.log('X-Content-Type-Options:', home.headers['x-content-type-options']);
    console.log('X-Frame-Options:', home.headers['x-frame-options']);
    console.log('Referrer-Policy:', home.headers['referrer-policy']);
    console.log('Permissions-Policy:', home.headers['permissions-policy']);
  } else {
    console.log('Error:', home.error);
  }

  // 2. Check /manifest.webmanifest
  const manifest = await get('http://localhost:3000/manifest.webmanifest');
  console.log('\n--- Manifest Response ---');
  console.log('Status Code:', manifest.statusCode);
  if (manifest.headers) {
    console.log('Content-Type:', manifest.headers['content-type']);
  }
  if (manifest.body) {
    try {
      const json = JSON.parse(manifest.body);
      console.log('JSON Valid: Yes');
      console.log('Name:', json.name);
      console.log('Short Name:', json.short_name);
      console.log('Display:', json.display);
      console.log('Theme Color:', json.theme_color);
      console.log('Icons Count:', json.icons?.length);
      console.log('Icons details:', JSON.stringify(json.icons, null, 2));
    } catch (e) {
      console.log('JSON Valid: No');
      console.log('Body snippet:', manifest.body.slice(0, 300));
    }
  }
}

run();
