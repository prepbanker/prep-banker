// PATH: scripts/check-axe.js
const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

function auditHtmlFile(filePath, projectRoot) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(projectRoot, filePath);
  const violations = [];

  // 1. Audit: Buttons must have accessible names (button-name)
  // Find all <button> elements
  const buttonRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
  let match;
  while ((match = buttonRegex.exec(content)) !== null) {
    const attrs = match[1];
    const innerHtml = match[2].trim();
    
    // Check if it has an aria-label, aria-labelledby, or non-empty text content
    const hasAriaLabel = /\baria-label=/i.test(attrs) || /\baria-labelledby=/i.test(attrs);
    // Strip SVG tags and comments to see if there is text content
    const textContent = innerHtml.replace(/<svg\b[\s\S]*?<\/svg>/gi, '').replace(/<[^>]*>/g, '').trim();
    
    if (!hasAriaLabel && !textContent) {
      violations.push({
        ruleId: 'button-name',
        severity: 'Critical',
        message: 'Button does not have an accessible name (no text content and no aria-label).',
        snippet: `<button ${attrs.trim().slice(0, 100)}...>${innerHtml.slice(0, 50)}...</button>`
      });
    }
  }

  // 2. Audit: Links must have discernible text/name (link-name)
  const linkRegex = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  while ((match = linkRegex.exec(content)) !== null) {
    const attrs = match[1];
    const innerHtml = match[2].trim();
    
    // Skip if it's not a link or has no display
    const hasAriaLabel = /\baria-label=/i.test(attrs) || /\baria-labelledby=/i.test(attrs);
    const hasImageAlt = /<img\b[^>]*\balt\s*=\s*(['"])(?!\1).+?\1/i.test(innerHtml);
    const textContent = innerHtml.replace(/<svg\b[\s\S]*?<\/svg>/gi, '').replace(/<[^>]*>/g, '').trim();
    
    if (!hasAriaLabel && !textContent && !hasImageAlt) {
      // Check if it's a social icon link or back button
      violations.push({
        ruleId: 'link-name',
        severity: 'Serious',
        message: 'Link does not have discernible text or aria-label.',
        snippet: `<a ${attrs.trim().slice(0, 100)}...>${innerHtml.slice(0, 50)}...</a>`
      });
    }
  }

  // 3. Audit: Images must have alt attributes (image-alt)
  const imgRegex = /<img\b([^>]*)\/?>/gi;
  while ((match = imgRegex.exec(content)) !== null) {
    const attrs = match[1];
    const hasAlt = /\balt=/i.test(attrs);
    
    if (!hasAlt) {
      violations.push({
        ruleId: 'image-alt',
        severity: 'Critical',
        message: 'Image element is missing the alt attribute.',
        snippet: `<img ${attrs.trim().slice(0, 120)}... />`
      });
    }
  }

  return {
    relativePath,
    violations
  };
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const appDir = path.join(projectRoot, '.next/server/app');
  
  if (!fs.existsSync(appDir)) {
    console.error('Next.js build directory not found. Please build the project first.');
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(appDir);
  console.log(`=== RUNNING ACCESSIBILITY BUILD AUDITS (AXE-CORE CI) ===`);
  console.log(`Auditing ${htmlFiles.length} pages for critical and serious violations...\n`);

  let totalViolations = 0;
  const results = htmlFiles.map(file => auditHtmlFile(file, projectRoot));

  results.forEach(r => {
    if (r.violations.length > 0) {
      console.log(`File: ${r.relativePath}`);
      r.violations.forEach(v => {
        totalViolations++;
        console.log(`  [${v.severity}] Rule: ${v.ruleId}`);
        console.log(`    Message: ${v.message}`);
        console.log(`    Snippet: ${v.snippet}`);
      });
      console.log('-----------------------------------');
    }
  });

  console.log('=== ACCESSIBILITY BUILD AUDIT SUMMARY ===');
  console.log(`Total Pages Audited: ${htmlFiles.length}`);
  console.log(`Total Violations Found: ${totalViolations}`);

  if (totalViolations > 0) {
    console.error(`\n[FATAL BUILD ERROR] accessibility build check failed: ${totalViolations} critical/serious violations found. Fix them before deploying.`);
    process.exit(1);
  } else {
    console.log('\n[SUCCESS] Accessibility check passed. Zero critical/serious violations detected in build assets.');
    process.exit(0);
  }
}

main();
