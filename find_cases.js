const fs = require('fs');
const file = 'd:/Demo-Project-Docs/PracticeProjects/prep-banker/lib/data/exams/detailContentMap.tsx';
const content = fs.readFileSync(file, 'utf8');

const results = [];
const lines = content.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.includes("ibps-po") || line.includes("case '") || line.includes("case \"")) {
    results.push(`Line ${idx + 1}: ${line.trim()}`);
  }
});

fs.writeFileSync('ibps_search_results.txt', results.join('\n'), 'utf8');
console.log("Search complete");
