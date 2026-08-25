// PATH: scripts/parse-accessibility-violations.js
const fs = require('fs');
const path = require('path');

const FILES = [
  { name: 'Homepage', file: 'homepage.json' },
  { name: 'SBI PO Guide', file: 'sbi-po-guide.json' },
  { name: 'Blog Post', file: 'blog-post.json' },
  { name: 'Mock Test Interface', file: 'mock-test-interface.json' }
];

const resultsDir = path.join(__dirname, '../lh-results');

function analyzeFile(name, filename) {
  const filePath = path.join(resultsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);
  
  console.log(`\n========================================`);
  console.log(`ACCESSIBILITY AUDIT FOR: ${name}`);
  console.log(`Category Score: ${Math.round(data.categories.accessibility.score * 100)}`);
  console.log(`========================================`);
  
  const accessibilityRefs = data.categories.accessibility.auditRefs;
  let violationCount = 0;
  
  accessibilityRefs.forEach(ref => {
    const audit = data.audits[ref.id];
    if (audit && audit.score !== null && audit.score < 1) {
      violationCount++;
      const severity = ref.group === 'a11y-color-contrast' ? 'Serious/Critical' : 'Varies';
      // Axe rules usually map to severity in description or we can print impact
      console.log(`\nViolation #${violationCount}: [${audit.id}]`);
      console.log(`  Title: ${audit.title}`);
      console.log(`  Description: ${audit.description}`);
      if (audit.displayValue) {
        console.log(`  Display Value: ${audit.displayValue}`);
      }
      if (audit.details && audit.details.items) {
        console.log(`  Failing Elements count: ${audit.details.items.length}`);
        audit.details.items.slice(0, 3).forEach((item, idx) => {
          if (item.node) {
            console.log(`    ${idx + 1}: ${item.node.snippet} (Selector: ${item.node.selector})`);
          }
        });
      }
    }
  });
  
  if (violationCount === 0) {
    console.log('No accessibility violations found!');
  }
}

FILES.forEach(f => analyzeFile(f.name, f.file));
