// PATH: scripts/run-lighthouse-audits.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PAGES = [
  { name: 'Homepage', url: 'http://localhost:3000/' },
  { name: 'SBI PO Guide', url: 'http://localhost:3000/sbi-po' },
  { name: 'SBI PO Salary', url: 'http://localhost:3000/sbi-po/salary' },
  { name: 'Blog Post', url: 'http://localhost:3000/blogs/sbi-po-2026-complete-preparation-guide' },
  { name: 'Current Affairs', url: 'http://localhost:3000/current-affairs/ca-rbi-01' },
  { name: 'Mock Test Interface', url: 'http://localhost:3000/quiz/practice/sbi-po/quantitative-aptitude/arithmetic/percentage' }
];

const resultsDir = path.join(__dirname, '../lh-results');
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

async function run() {
  console.log('=== RUNNING LIGHTHOUSE AUDITS (MOBILE) ===');
  
  const reportRows = [];

  for (const page of PAGES) {
    const filename = page.name.toLowerCase().replace(/\s+/g, '-');
    const jsonPath = path.join(resultsDir, `${filename}.json`);
    
    console.log(`Auditing ${page.name} (${page.url})...`);
    
    try {
      // Run Lighthouse CLI mobile throttled
      const cmd = `npx lighthouse ${page.url} --chrome-flags="--headless --no-sandbox --disable-gpu" --output=json --output-path=${jsonPath} --form-factor=mobile --throttling-method=simulate`;
      execSync(cmd, { stdio: 'ignore' });
      
      const jsonContent = fs.readFileSync(jsonPath, 'utf8');
      const data = JSON.parse(jsonContent);
      
      const perf = Math.round(data.categories.performance.score * 100);
      const acc = Math.round(data.categories.accessibility.score * 100);
      const bp = Math.round(data.categories['best-practices']?.score * 100 || 0);
      const seo = Math.round(data.categories.seo.score * 100);
      
      const fcp = data.audits['first-contentful-paint'].displayValue;
      const lcp = data.audits['largest-contentful-paint'].displayValue;
      const tbt = data.audits['total-blocking-time'].displayValue;
      const cls = data.audits['cumulative-layout-shift'].displayValue;
      const speedIndex = data.audits['speed-index'].displayValue;
      const tti = data.audits['interactive'].displayValue;
      
      reportRows.push({
        name: page.name,
        perf, acc, bp, seo,
        fcp, lcp, tbt, cls, speedIndex, tti
      });
      
      console.log(`  Done. Perf: ${perf}, Acc: ${acc}, Best Practices: ${bp}, SEO: ${seo}`);
    } catch (err) {
      console.error(`  Error auditing ${page.name}:`, err.message);
    }
  }

  // Print markdown table
  console.log('\n=== LIGHTHOUSE MOBILE BASELINE REPORT ===\n');
  console.log('| Page | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index | TTI |');
  console.log('| :--- | :---: | :---: | :---: | :---: | :--- | :--- | :--- | :--- | :--- | :--- |');
  for (const row of reportRows) {
    console.log(`| ${row.name} | ${row.perf} | ${row.acc} | ${row.bp} | ${row.seo} | ${row.fcp} | ${row.lcp} | ${row.tbt} | ${row.cls} | ${row.speedIndex} | ${row.tti} |`);
  }
}

run();
