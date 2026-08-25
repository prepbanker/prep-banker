// PATH: scripts/analyze-html-size.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../.next/server/app/index.html');
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('Total HTML size:', (content.length / 1024).toFixed(2), 'KB');
  
  // Find all script tags
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  let scriptCount = 0;
  let totalScriptSize = 0;
  let rscScriptSize = 0;
  let largestScripts = [];
  
  while ((match = scriptRegex.exec(content)) !== null) {
    scriptCount++;
    const attrs = match[1];
    const scriptBody = match[2];
    const size = scriptBody.length;
    totalScriptSize += size + 17 + attrs.length; // Approximate tag size
    
    if (scriptBody.includes('__next_f') || scriptBody.includes('self.__next_f')) {
      rscScriptSize += size;
    }
    
    largestScripts.push({
      index: scriptCount,
      attrs: attrs.slice(0, 100),
      size: (size / 1024).toFixed(2) + ' KB',
      sizeBytes: size,
      snippet: scriptBody.slice(0, 100)
    });
  }
  
  console.log('Total script tags count:', scriptCount);
  console.log('Total scripts size:', (totalScriptSize / 1024).toFixed(2), 'KB');
  console.log('Total RSC payload size:', (rscScriptSize / 1024).toFixed(2), 'KB');
  
  largestScripts.sort((a, b) => b.sizeBytes - a.sizeBytes);
  console.log('\n--- Top 5 Largest Scripts ---');
  largestScripts.slice(0, 5).forEach((s) => {
    console.log(`Script #${s.index} (${s.attrs}): Size ${s.size}`);
    console.log(`  Snippet: ${s.snippet}`);
  });
  
  // Measure body size without scripts
  const bodyWithoutScripts = content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  console.log('\nHTML size without script tags:', (bodyWithoutScripts.length / 1024).toFixed(2), 'KB');
} else {
  console.log('index.html not found');
}
