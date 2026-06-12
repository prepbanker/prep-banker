const fs = require('fs');

const targetFile = 'd:/Demo-Project-Docs/PracticeProjects/prep-banker/lib/data/exams/detailContentMap.tsx';

let content = fs.readFileSync(targetFile, 'utf8');

// Normalize line endings
content = content.replace(/\r\n/g, '\n');

const lines = content.split('\n');

console.log('Total lines:', lines.length);
console.log('Line 1504 starts with:', lines[1503].substring(0, 80));
console.log('Line 1505 starts with:', lines[1504] ? lines[1504].substring(0, 80) : '<empty>');
console.log('Line 1507 starts with:', lines[1506].substring(0, 80));

// Collect all the "string block" lines (lines that start with a double quote and contain escaped code)
// We know lines 1504, 1505, 1507, 1508 are the problem lines (0-indexed: 1503, 1504, 1506, 1507)

// Strategy: find blocks that are single-line strings containing \n-escaped code
// They look like: "case 'cut-off':\n    case 'cut-offs': {\n ... "
// We need to unescape them into real code.

function unescapeStringBlock(str) {
  // Remove surrounding quotes if present
  let s = str.trim();
  if (s.startsWith('"') && s.endsWith('"')) {
    s = s.slice(1, -1);
  } else if (s.startsWith('"')) {
    // Multi-line string block that got split - this is harder
    s = s.slice(1);
  }
  // Unescape the string: \n -> newline, \" -> ", \\ -> \
  // But NOT backtick template literals inside - those are already unescaped
  // We need to process character by character
  let result = '';
  let i = 0;
  while (i < s.length) {
    if (s[i] === '\\' && i + 1 < s.length) {
      const next = s[i + 1];
      if (next === 'n') { result += '\n'; i += 2; }
      else if (next === '"') { result += '"'; i += 2; }
      else if (next === '\\') { result += '\\'; i += 2; }
      else if (next === 't') { result += '\t'; i += 2; }
      else if (next === 'r') { result += '\r'; i += 2; }
      else { result += s[i]; i++; }
    } else {
      result += s[i];
      i++;
    }
  }
  return result;
}

// Find the range of problematic lines by detecting lines that are pure string literals
// (start with optional whitespace then a double-quote and contain \n escape sequences)
let newLines = [];
let i = 0;
let fixCount = 0;

while (i < lines.length) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Detect a line that is an escaped string block (starts with " and is a code block)
  // The tell-tale sign: starts with "case ' or "case " at the very beginning
  if (trimmed.startsWith('"case \'') || trimmed.startsWith('"case "')) {
    console.log(`Found escaped string block at line ${i + 1}`);
    
    // Collect all consecutive lines that are part of this string block
    // (until we hit a line that is a normal code line or empty)
    let blockStr = '';
    let j = i;
    
    // Collect lines while they look like continuation of the string block
    // A string block line either:
    // - starts with a quote character (first line)
    // - is a <truncated ...> marker line (skip/ignore)
    // - is an empty line after the block ends
    while (j < lines.length) {
      const l = lines[j];
      const lt = l.trim();
      if (lt.startsWith('<truncated')) {
        // Skip truncated marker - this means the actual content is in a scratch file
        console.log(`  Skipping truncated marker at line ${j + 1}`);
        j++;
        // Add a placeholder comment so we know this was truncated
        blockStr += '\n/* TRUNCATED CONTENT - see scratch file */\n';
        continue;
      }
      if (j === i) {
        // First line of the block - always include
        blockStr += lt;
        j++;
      } else if (lt === '') {
        // Empty line signals end of block
        j++;
        break;
      } else if (!lt.startsWith('"case ') && !lt.startsWith('case ') && !lt.startsWith('    case ')) {
        // Not a case block start, might be continuation
        // Include it if previous was also a block line
        blockStr += lt;
        j++;
      } else {
        break;
      }
    }
    
    // Now unescape blockStr
    const unescaped = unescapeStringBlock(blockStr);
    console.log(`  Unescaped block (first 200 chars): ${unescaped.substring(0, 200)}`);
    
    // Push unescaped lines
    const unescapedLines = unescaped.split('\n');
    for (const ul of unescapedLines) {
      newLines.push(ul);
    }
    fixCount++;
    i = j; // Skip the original block lines
  } else {
    newLines.push(line);
    i++;
  }
}

console.log(`\nFixed ${fixCount} string block(s).`);
console.log(`Original line count: ${lines.length}, New line count: ${newLines.length}`);

const newContent = newLines.join('\n');

// Write to a backup first
fs.writeFileSync(targetFile + '.backup_before_fix', content, 'utf8');
console.log('Backup saved to:', targetFile + '.backup_before_fix');

fs.writeFileSync(targetFile, newContent, 'utf8');
console.log('Fix applied to:', targetFile);
