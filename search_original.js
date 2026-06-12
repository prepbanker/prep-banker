const fs = require('fs');
const c = fs.readFileSync('detailContentMap_original.tsx', 'utf8');
const lines = c.split('\n');
const results = [];
lines.forEach((l, i) => {
  if (l.includes("case '") || l.includes('case "')) {
    results.push(`${i+1}: ${l.trim().substring(0, 100)}`);
  }
});
console.log(results.join('\n'));
console.log('\nTotal case lines:', results.length);
