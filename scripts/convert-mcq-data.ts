// PATH: scripts/convert-mcq-data.ts
import * as fs from 'fs';
import * as path from 'path';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanExplanation(text: string): string {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('---')) return false;
      if (trimmed.startsWith('===') || trimmed.startsWith('═══')) return false;
      if (/END OF QUESTION/i.test(trimmed)) return false;
      return true;
    })
    .join('\n')
    .trim();
}

function cleanDirections(text: string): string {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('---')) return false;
      if (trimmed.startsWith('===') || trimmed.startsWith('═══')) return false;
      return true;
    })
    .join('\n')
    .trim();
}

// Target JSON schema interfaces
interface Question {
  id: number;
  text: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  diagram?: string;
}

interface Group {
  directions?: string;
  diagram?: string;
  questions: Question[];
}

interface Section {
  level: "easy" | "medium" | "hard";
  range: string;
  groups: Group[];
}

interface MCQSet {
  exam: string;
  subject: string;
  topic: string;
  subtopic: string;
  totalQuestions: number;
  sections: Section[];
}

const sourceBaseDir = path.join(process.cwd(), 'mcq-data');
const targetBaseDir = path.join(process.cwd(), 'lib', 'data', 'mcq');
const assetsBaseDir = path.join(process.cwd(), 'public', 'mcq-assets');

// Walk source directory tree
function walk(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith('.txt')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

console.log(`Scanning source MCQ directory: ${sourceBaseDir}...`);
const txtFiles = walk(sourceBaseDir);
console.log(`Found ${txtFiles.length} raw MCQ text files.`);

const manifestEntries: { key: string; jsonPath: string }[] = [];

for (const txtPath of txtFiles) {
  // Determine relative parts from file path
  const relativeFromBase = path.relative(sourceBaseDir, txtPath);
  const parts = relativeFromBase.split(path.sep);
  if (parts.length < 4) {
    console.warn(`[WARN] Skipping file due to unexpected folder structure: ${txtPath}`);
    continue;
  }

  const examRaw = parts[0];
  const subjectRaw = parts[1];
  const topicRaw = parts[2];
  const subtopicRaw = parts[3];

  const exam = slugify(examRaw);
  const subject = slugify(subjectRaw);
  const topic = slugify(topicRaw);
  const subtopic = slugify(subtopicRaw);

  const key = `${exam}/${subject}/${topic}/${subtopic}`;
  console.log(`Processing subtopic: ${key}`);

  // Create local folders in target and assets
  const targetDir = path.join(targetBaseDir, exam, subject, topic);
  const assetsDir = path.join(assetsBaseDir, exam, subject, topic, subtopic);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.mkdirSync(assetsDir, { recursive: true });

  const rawContent = fs.readFileSync(txtPath, 'utf8');

  // Strip summary or end blocks to avoid parsing issues
  const cleanContent = rawContent.split(/END OF QUESTION/i)[0];

  const lines = cleanContent.split(/\r?\n/);

  // Group parsing at the file level
  interface TempGroup {
    directionsLines: string[];
    questionBlocks: string[][];
  }

  const tempGroups: TempGroup[] = [];
  let currentTempGroup: TempGroup = { directionsLines: [], questionBlocks: [] };
  tempGroups.push(currentTempGroup);

  let currentQuestionLines: string[] | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    // Skip decorative lines
    if (/SECTION \d+:\s*(EASY|MEDIUM|HARD)/i.test(trimmed)) continue;
    if (/^════/i.test(trimmed)) continue;
    if (/^----/i.test(trimmed)) continue;

    const isDirections = /^Directions\s*\(Q\d+/i.test(trimmed);
    if (isDirections) {
      currentTempGroup = { directionsLines: [line], questionBlocks: [] };
      tempGroups.push(currentTempGroup);
      currentQuestionLines = null;
      continue;
    }

    const isQuestionStart = /^Q\d+\./i.test(trimmed);
    if (isQuestionStart) {
      currentQuestionLines = [line];
      currentTempGroup.questionBlocks.push(currentQuestionLines);
      continue;
    }

    if (currentQuestionLines) {
      currentQuestionLines.push(line);
    } else {
      currentTempGroup.directionsLines.push(line);
    }
  }

  // Filter out empty groups
  const validTempGroups = tempGroups.filter(g => g.questionBlocks.length > 0);

  const allQuestionsParsed: any[] = [];

  for (const tGroup of validTempGroups) {
    let directionsText = tGroup.directionsLines.join('\n').trim();
    
    // Parse shared diagram reference in directions
    let groupDiagram: string | undefined = undefined;
    const diagMatch = directionsText.match(/\[Refer\s+to\s+diagram:\s*(Q\d+\.svg)\]/i);
    if (diagMatch) {
      groupDiagram = diagMatch[1];
      directionsText = directionsText.replace(/\[Refer\s+to\s+diagram:\s*Q\d+\.svg\]/gi, '');
    }

    directionsText = cleanDirections(directionsText);

    // Remove the prefix "Directions (Qx-Qy): " from clean text if it starts with it
    directionsText = directionsText.replace(/^Directions\s*\(Q\d+[\-–—]Q\d+\)\s*:\s*/i, '');
    directionsText = directionsText.replace(/^Directions\s*\(Q\d+\)\s*:\s*/i, '');

    // Resolve and copy Group diagram if present
    let resolvedGroupDiagramPath: string | undefined = undefined;
    if (groupDiagram) {
      const srcSvgPath = path.join(path.dirname(txtPath), 'SVG', groupDiagram);
      if (fs.existsSync(srcSvgPath)) {
        const destSvgPath = path.join(assetsDir, groupDiagram);
        fs.copyFileSync(srcSvgPath, destSvgPath);
        resolvedGroupDiagramPath = `/mcq-assets/${exam}/${subject}/${topic}/${subtopic}/${groupDiagram}`;
      } else {
        // Fallback check: try in SVG subfolder case-insensitively
        const svgDir = path.join(path.dirname(txtPath), 'SVG');
        if (fs.existsSync(svgDir)) {
          const files = fs.readdirSync(svgDir);
          const matchedFile = files.find(f => f.toLowerCase() === groupDiagram!.toLowerCase());
          if (matchedFile) {
            const destSvgPath = path.join(assetsDir, matchedFile);
            fs.copyFileSync(path.join(svgDir, matchedFile), destSvgPath);
            resolvedGroupDiagramPath = `/mcq-assets/${exam}/${subject}/${topic}/${subtopic}/${matchedFile}`;
          }
        }
      }
    }

    for (const block of tGroup.questionBlocks) {
      const blockText = block.join('\n');
      
      // Question ID
      const idMatch = blockText.match(/^Q(\d+)\./i);
      if (!idMatch) continue;
      const id = parseInt(idMatch[1]);

      // Question diagram reference
      let questionDiagram: string | undefined = undefined;
      const qDiagMatch = blockText.match(/\[Refer\s+to\s+diagram:\s*(Q\d+\.svg)\]/i);
      if (qDiagMatch) {
        questionDiagram = qDiagMatch[1];
      }

      // Copy Question-specific diagram if present
      let resolvedQuestionDiagramPath: string | undefined = undefined;
      if (questionDiagram) {
        const srcSvgPath = path.join(path.dirname(txtPath), 'SVG', questionDiagram);
        if (fs.existsSync(srcSvgPath)) {
          const destSvgPath = path.join(assetsDir, questionDiagram);
          fs.copyFileSync(srcSvgPath, destSvgPath);
          resolvedQuestionDiagramPath = `/mcq-assets/${exam}/${subject}/${topic}/${subtopic}/${questionDiagram}`;
        } else {
          // Fallback case-insensitive check
          const svgDir = path.join(path.dirname(txtPath), 'SVG');
          if (fs.existsSync(svgDir)) {
            const files = fs.readdirSync(svgDir);
            const matchedFile = files.find(f => f.toLowerCase() === questionDiagram!.toLowerCase());
            if (matchedFile) {
              const destSvgPath = path.join(assetsDir, matchedFile);
              fs.copyFileSync(path.join(svgDir, matchedFile), destSvgPath);
              resolvedQuestionDiagramPath = `/mcq-assets/${exam}/${subject}/${topic}/${subtopic}/${matchedFile}`;
            }
          }
        }
      }

      // Strip markers to clean question text body
      let questionCleanText = blockText.replace(/^Q\d+\.\s*/i, '');
      questionCleanText = questionCleanText.replace(/\[Refer\s+to\s+diagram:\s*Q\d+\.svg\]/gi, '');

      // Extract Options
      const optionStartIndex = questionCleanText.search(/^\(([A-E])\)/im);
      let text = optionStartIndex !== -1 ? questionCleanText.slice(0, optionStartIndex) : questionCleanText;
      text = text.trim();

      const optionMatches = [...questionCleanText.matchAll(/^\(([A-E])\)\s*(.*)/gim)];
      const options = optionMatches.map(m => ({
        label: m[1].toUpperCase(),
        text: m[2].trim()
      }));

      // Correct Answer
      const answerMatch = questionCleanText.match(/^Answer:\s*([A-E])\b/im);
      if (!answerMatch) {
        console.warn(`[WARN] Question Q${id} in ${key} is missing Answer letter!`);
      }
      const correctAnswer = answerMatch ? answerMatch[1].trim().toUpperCase() : '';

      // Explanation
      const expMatch = questionCleanText.match(/Explanation:\s*([\s\S]*?)(?=(?:^Answer:|^Explanation:|^Q\d+\.|$))/im);
      let explanation = expMatch ? expMatch[1].trim() : '';
      explanation = cleanExplanation(explanation);

      // Determine difficulty level dynamically from question number (1-15 format)
      let difficulty: "easy" | "medium" | "hard" = "easy";
      if (id >= 6 && id <= 10) {
        difficulty = "medium";
      } else if (id >= 11) {
        difficulty = "hard";
      }

      allQuestionsParsed.push({
        id,
        text,
        options,
        correctAnswer,
        explanation,
        difficulty,
        parentDirections: directionsText,
        parentDiagram: resolvedGroupDiagramPath,
        ...(resolvedQuestionDiagramPath && { diagram: resolvedQuestionDiagramPath })
      });
    }
  }

  // De-duplicate parsed questions by keeping only the last occurrence of each ID (useful for developer notes/rewrites)
  const deDuplicatedQuestions: any[] = [];
  const seenIds = new Set<number>();
  for (let i = allQuestionsParsed.length - 1; i >= 0; i--) {
    const q = allQuestionsParsed[i];
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      deDuplicatedQuestions.unshift(q);
    } else {
      console.log(`[INFO] Removing duplicate/older question Q${q.id} in ${key}`);
    }
  }

  // Reconstruct sections based on Q1-Q5 (easy), Q6-Q10 (medium), Q11-Q15 (hard) ranges
  const sections: Section[] = [];
  const totalQuestionsCount = deDuplicatedQuestions.length;

  const ranges: { level: "easy" | "medium" | "hard"; min: number; max: number }[] = [
    { level: "easy", min: 1, max: 5 },
    { level: "medium", min: 6, max: 10 },
    { level: "hard", min: 11, max: 999 }
  ];

  for (const range of ranges) {
    const levelQuestions = deDuplicatedQuestions.filter(q => q.id >= range.min && q.id <= range.max);
    if (levelQuestions.length === 0) continue;

    // Group questions by directions / group diagram reference
    const groupKeyMap = new Map<string, { directions?: string; diagram?: string; questions: Question[] }>();
    
    for (const q of levelQuestions) {
      const groupKey = `${q.parentDirections || ''}||${q.parentDiagram || ''}`;
      if (!groupKeyMap.has(groupKey)) {
        groupKeyMap.set(groupKey, {
          ...(q.parentDirections && { directions: q.parentDirections }),
          ...(q.parentDiagram && { diagram: q.parentDiagram }),
          questions: []
        });
      }

      const finalQuestion: Question = {
        id: q.id,
        text: q.text,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        ...(q.diagram && { diagram: q.diagram })
      };

      groupKeyMap.get(groupKey)!.questions.push(finalQuestion);
    }

    const minId = Math.min(...levelQuestions.map(q => q.id));
    const maxId = Math.max(...levelQuestions.map(q => q.id));

    sections.push({
      level: range.level,
      range: `Q${minId}-Q${maxId}`,
      groups: Array.from(groupKeyMap.values())
    });
  }

  const mcqSet: MCQSet = {
    exam,
    subject,
    topic,
    subtopic,
    totalQuestions: totalQuestionsCount,
    sections
  };

  const outputJsonPath = path.join(targetDir, `${subtopic}.json`);
  fs.writeFileSync(outputJsonPath, JSON.stringify(mcqSet, null, 2), 'utf8');

  // Record for sitemap / manifest loader mapping
  if (!manifestEntries.some(e => e.key === key)) {
    manifestEntries.push({
      key,
      jsonPath: `./${exam}/${subject}/${topic}/${subtopic}.json`
    });
  }
}

// Generate lib/data/mcq/index.ts manifest file
const manifestLines: string[] = [
  `// PATH: lib/data/mcq/index.ts`,
  `// This file is auto-generated by scripts/convert-mcq-data.ts. Do not edit.`,
  ``,
  `export const mcqManifest: Record<string, () => Promise<{ default: any }>> = {`
];

for (const entry of manifestEntries) {
  const forwardSlashPath = entry.jsonPath.replace(/\\/g, '/');
  manifestLines.push(`  "${entry.key}": () => import('${forwardSlashPath}'),`);
}

manifestLines.push(`};`);
manifestLines.push(``);

fs.writeFileSync(path.join(targetBaseDir, 'index.ts'), manifestLines.join('\n'), 'utf8');
console.log(`Auto-generated manifest index file at lib/data/mcq/index.ts successfully.`);
console.log(`Conversion completed! processed ${manifestEntries.length} JSON datasets.`);
