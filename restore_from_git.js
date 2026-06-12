const fs = require('fs');

const originalFile = 'detailContentMap_original_utf8.tsx';
const currentFile = 'lib/data/exams/detailContentMap.tsx';

const original = fs.readFileSync(originalFile, 'utf8').replace(/\r\n/g, '\n');
const current = fs.readFileSync(currentFile, 'utf8').replace(/\r\n/g, '\n');

// Extract block between two markers in original
function extractBlock(content, startTag, endTag) {
  const startIdx = content.indexOf(startTag);
  if (startIdx === -1) { console.error('Could not find startTag:', JSON.stringify(startTag)); return null; }
  const endIdx = content.indexOf(endTag, startIdx);
  if (endIdx === -1) { console.error('Could not find endTag:', JSON.stringify(endTag)); return null; }
  return content.substring(startIdx, endIdx);
}

const cutoffStartTag = "    case 'cut-off':";
const cutoffEndTag   = "    case 'important-dates':";
const datesStartTag  = "    case 'important-dates':";
const datesEndTag    = "    case 'study-plan':";

const originalCutoffBlock = extractBlock(original, cutoffStartTag, cutoffEndTag);
const originalDatesBlock  = extractBlock(original, datesStartTag, datesEndTag);

if (!originalCutoffBlock) { console.error('Failed to extract original cut-off block'); process.exit(1); }
if (!originalDatesBlock)  { console.error('Failed to extract original dates block');  process.exit(1); }

console.log('Original cut-off block length:', originalCutoffBlock.length);
console.log('Original cut-off block (first 150):', originalCutoffBlock.substring(0, 150));
console.log('');
console.log('Original dates block length:', originalDatesBlock.length);
console.log('Original dates block (first 150):', originalDatesBlock.substring(0, 150));

// Now find the broken region in the CURRENT file.
// After fix_string_blocks.js, the current file has:
//   "case 'cut-off':" (without leading 4 spaces - they got stripped)
// Let's search for either variant
let cutoffIdxCurrent = current.indexOf("    case 'cut-off':");
if (cutoffIdxCurrent === -1) {
  cutoffIdxCurrent = current.indexOf("case 'cut-off':"); // no leading spaces
  console.log('Found cut-off without leading spaces at:', cutoffIdxCurrent);
} else {
  console.log('Found cut-off with leading spaces at:', cutoffIdxCurrent);
}

let studyPlanIdxCurrent = current.indexOf("    case 'study-plan':");
if (studyPlanIdxCurrent === -1) studyPlanIdxCurrent = current.indexOf("case 'study-plan':");
console.log('Found study-plan at:', studyPlanIdxCurrent);

if (cutoffIdxCurrent === -1 || studyPlanIdxCurrent === -1) {
  console.error('Could not find cut-off or study-plan markers in current file');
  process.exit(1);
}

// Replace everything from cutoff start to study-plan start with the original blocks
const beforeCutoff = current.substring(0, cutoffIdxCurrent);
const afterDates   = current.substring(studyPlanIdxCurrent);

console.log('\nBefore cutoff (last 100):', JSON.stringify(beforeCutoff.slice(-100)));
console.log('After dates (first 100):',  afterDates.substring(0, 100));

const newContent = beforeCutoff
  + originalCutoffBlock
  + '\n\n'
  + originalDatesBlock
  + '\n\n'
  + afterDates;

console.log('\nNew content lines:', newContent.split('\n').length);
console.log('New content bytes:', newContent.length);

// Backup
fs.writeFileSync(currentFile + '.backup_pre_restore', current, 'utf8');

fs.writeFileSync(currentFile, newContent, 'utf8');
console.log('\nFile successfully restored!');
console.log('Note: cut-off and important-dates blocks are now the original generic versions.');
console.log('IBPS PO-specific customizations for those sections need to be re-added.');
