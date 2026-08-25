// PATH: scripts/verify-homepage-dom.js
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
  console.log('=== VERIFYING OPTIMIZED HOMEPAGE DOM ===');
  
  const res = await get('http://localhost:3001/');
  console.log('Status Code:', res.statusCode);
  if (res.body) {
    const rawLen = res.body.length;
    console.log('Raw HTML size:', (rawLen / 1024).toFixed(2), 'KB');
    
    // Check if expected components are in page (or their dynamically imported loaders)
    const hasHeader = res.body.includes('<header');
    const hasFooter = res.body.includes('<footer');
    const hasHero = res.body.includes('aria-label="Hero section"');
    const hasHighlights = res.body.includes('SBI PO &amp; IBPS PO Exam Highlights 2026');
    const hasCalendar = res.body.includes('Exam Timeline');
    
    console.log('Rendered Header:', hasHeader ? 'Yes' : 'No');
    console.log('Rendered Footer:', hasFooter ? 'Yes' : 'No');
    console.log('Rendered Hero Section:', hasHero ? 'Yes' : 'No');
    console.log('Rendered Highlights Section:', hasHighlights ? 'Yes' : 'No');
    
    // Wait, since Calendar and Comparison and WhyPrepBanker are dynamically loaded with ssr: false,
    // they should NOT be in the server-rendered HTML content!
    const inHTMLCalendar = res.body.includes('SBI PO &amp; IBPS PO 2026 Exam Calendar');
    const inHTMLComparison = res.body.includes('SBI PO vs IBPS PO Comparison');
    const inHTMLTrending = res.body.includes('Trending Test Series Slider');
    const inHTMLLive = res.body.includes('Live Tests');
    const inHTMLFAQ = res.body.includes('Frequently Asked Questions');
    
    console.log('Calendar in Server HTML (expected NO):', inHTMLCalendar ? 'Yes' : 'No');
    console.log('Comparison in Server HTML (expected NO):', inHTMLComparison ? 'Yes' : 'No');
    console.log('Trending in Server HTML (expected NO):', inHTMLTrending ? 'Yes' : 'No');
    console.log('Live in Server HTML (expected NO):', inHTMLLive ? 'Yes' : 'No');
    console.log('FAQ in Server HTML (expected NO):', inHTMLFAQ ? 'Yes' : 'No');
    
    // Check if GA4 lazyOnload tags are present
    const hasGA4 = res.body.includes('G-C4MJ8ENML7');
    console.log('Google Analytics tag present:', hasGA4 ? 'Yes' : 'No');
  } else {
    console.log('Error:', res.error);
  }
}

run();
