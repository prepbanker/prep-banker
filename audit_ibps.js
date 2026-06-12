const fs = require('fs');
const c = fs.readFileSync('lib/data/exams/detailContentMap.tsx', 'utf8');

const sections = ['notification', 'admit-card', 'vacancy', 'syllabus', 'cut-off', 'important-dates'];

sections.forEach(s => {
  const caseIdx = c.indexOf(`case '${s}'`);
  if (caseIdx === -1) { console.log(s + ': CASE NOT FOUND'); return; }
  
  // Look for ibps-po branch within next 8000 chars of this case
  const window = c.substring(caseIdx, caseIdx + 8000);
  const hasIbps = window.includes("ibps-po");
  const ibpsIdx = c.indexOf("ibps-po", caseIdx);
  
  // Find the next case after this one to limit our search
  const nextCaseIdx = c.indexOf("    case '", caseIdx + 10);
  const withinBlock = ibpsIdx < nextCaseIdx && ibpsIdx > caseIdx;
  
  console.log(`${s}: case at line ~${c.substring(0, caseIdx).split('\n').length}, ibps-po ${withinBlock ? 'FOUND (IBPS PO specific content present)' : 'NOT FOUND (generic only)'}`);
});
