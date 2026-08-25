// scripts/check-headings.js
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

  const headingRegex = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  const headings = [];

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1], 10),
      text: match[2].replace(/<[^>]*>/g, '').trim().slice(0, 60)
    });
  }

  const h1Count = headings.filter(h => h.level === 1).length;
  const skippedLevels = [];
  
  let prevLevel = 0;
  for (let i = 0; i < headings.length; i++) {
    const current = headings[i];
    if (i === 0 && current.level !== 1) {
      skippedLevels.push({
        message: `First heading is H${current.level} instead of H1`,
        heading: current
      });
    } else if (i > 0 && current.level > prevLevel + 1) {
      skippedLevels.push({
        message: `Skips from H${prevLevel} to H${current.level}`,
        prevHeading: headings[i - 1],
        heading: current
      });
    }
    prevLevel = current.level;
  }

  return {
    relativePath,
    h1Count,
    headings,
    skippedLevels
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
  console.log(`Found ${htmlFiles.length} HTML files to audit heading outline...\n`);

  const results = htmlFiles.map(file => auditHtmlFile(file, projectRoot));

  let failed = false;
  let multipleH1Count = 0;
  let skippedHeadingPagesCount = 0;

  results.forEach(r => {
    let pageHasError = false;
    let pageMessages = [];

    if (r.h1Count > 1) {
      multipleH1Count++;
      failed = true;
      pageHasError = true;
      pageMessages.push(`  [ERROR] Multiple H1 tags found (${r.h1Count})`);
    }

    if (r.skippedLevels.length > 0) {
      skippedHeadingPagesCount++;
      pageMessages.push(`  [WARNING] Skipped heading levels:`);
      r.skippedLevels.forEach(err => {
        if (err.prevHeading) {
          pageMessages.push(`    - ${err.message}: "${err.prevHeading.text}" -> "${err.heading.text}"`);
        } else {
          pageMessages.push(`    - ${err.message}: "${err.heading.text}"`);
        }
      });
    }

    if (pageHasError || r.skippedLevels.length > 0) {
      console.log(`File: ${r.relativePath}`);
      pageMessages.forEach(msg => console.log(msg));
      console.log('-----------------------------------');
    }
  });

  console.log('\n=== HEADING AUDIT SUMMARY ===');
  console.log(`Total Pages Audited: ${htmlFiles.length}`);
  console.log(`Pages with H1 errors (Failed): ${multipleH1Count}`);
  console.log(`Pages with skipped heading levels (Warnings): ${skippedHeadingPagesCount}`);

  if (failed) {
    console.error('\n[FATAL BUILD ERROR] Heading structure check failed. More than one H1 tag detected on some pages.');
    process.exit(1);
  } else {
    console.log('\n[SUCCESS] Heading structure check passed. All pages have exactly zero or one H1 tag.');
    process.exit(0);
  }
}

main();
