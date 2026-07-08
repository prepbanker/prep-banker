// PATH: lib/data/quiz/topics-sbi-po.ts
import { Subtopic } from '@/types/quiz.types';

export const sbiPoTopics: Record<'quant' | 'reasoning' | 'english', Record<string, Subtopic[]>> = {
  reasoning: {
    "Puzzles": [
      { id: "floor-puzzle", name: "Floor Puzzle", hasQuestions: true },
      { id: "box-puzzle", name: "Box Puzzle", hasQuestions: true },
      { id: "month-puzzle", name: "Month Puzzle", hasQuestions: false },
      { id: "day-puzzle", name: "Day Puzzle", hasQuestions: false },
      { id: "scheduling-puzzle", name: "Scheduling Puzzle", hasQuestions: false },
      { id: "distribution-puzzle", name: "Distribution Puzzle", hasQuestions: false },
      { id: "comparison-puzzle", name: "Comparison Puzzle", hasQuestions: false },
      { id: "age-based-puzzle", name: "Age-Based Puzzle", hasQuestions: false },
      { id: "mixed-puzzle", name: "Mixed Puzzle", hasQuestions: false }
    ],
    "Seating Arrangement": [
      { id: "linear-arrangement", name: "Linear Arrangement", hasQuestions: true },
      { id: "circular-arrangement", name: "Circular Arrangement", hasQuestions: false },
      { id: "polygon-arrangement", name: "Polygon Arrangement", hasQuestions: false }
    ],
    "Syllogism": [
      { id: "basic-syllogism", name: "Basic Syllogism", hasQuestions: true },
      { id: "only-a-few", name: "Only A Few", hasQuestions: false },
      { id: "possibility-cases", name: "Possibility Cases", hasQuestions: false },
      { id: "reverse-syllogism", name: "Reverse Syllogism", hasQuestions: false }
    ],
    "Inequality": [
      { id: "direct-inequality", name: "Direct Inequality", hasQuestions: false },
      { id: "coded-inequality", name: "Coded Inequality", hasQuestions: false }
    ],
    "Coding-Decoding": [
      { id: "letter-coding", name: "Letter Coding", hasQuestions: false },
      { id: "number-coding", name: "Number Coding", hasQuestions: false },
      { id: "symbol-coding", name: "Symbol Coding", hasQuestions: false },
      { id: "chinese-coding", name: "Chinese Coding", hasQuestions: false },
      { id: "mixed-coding", name: "Mixed Coding", hasQuestions: false }
    ],
    "Blood Relations": [
      { id: "family-tree", name: "Family Tree", hasQuestions: false },
      { id: "coded-blood-relation", name: "Coded Blood Relation", hasQuestions: false },
      { id: "puzzle-based-blood-relation", name: "Puzzle Based Blood Relation", hasQuestions: false }
    ],
    "Direction Sense": [
      { id: "distance-direction", name: "Distance & Direction", hasQuestions: false },
      { id: "coordinate-direction", name: "Coordinate Direction", hasQuestions: false },
      { id: "shadow-based-direction", name: "Shadow Based Direction", hasQuestions: false }
    ],
    "Order & Ranking": [
      { id: "linear-ranking", name: "Linear Ranking", hasQuestions: false },
      { id: "circular-ranking", name: "Circular Ranking", hasQuestions: false },
      { id: "height-ranking", name: "Height Ranking", hasQuestions: false },
      { id: "age-ranking", name: "Age Ranking", hasQuestions: false }
    ],
    "Alphabet & Word Based": [
      { id: "alphabet-series", name: "Alphabet Series", hasQuestions: false },
      { id: "word-formation", name: "Word Formation", hasQuestions: false },
      { id: "alphabet-position", name: "Alphabet Position", hasQuestions: false },
      { id: "alphabet-pair", name: "Alphabet Pair", hasQuestions: false },
      { id: "alphabet-rearrangement", name: "Alphabet Rearrangement", hasQuestions: false }
    ],
    "Alphanumeric Series": [
      { id: "missing-series", name: "Missing Series", hasQuestions: false },
      { id: "mixed-series", name: "Mixed Series", hasQuestions: false },
      { id: "symbol-series", name: "Symbol Series", hasQuestions: false }
    ],
    "Miscellaneous Reasoning": [
      { id: "logical-sequence", name: "Logical Sequence", hasQuestions: false },
      { id: "odd-one-out", name: "Odd One Out", hasQuestions: false },
      { id: "classification", name: "Classification", hasQuestions: false }
    ]
  },
  quant: {
    "Simplification": [
      { id: "bodmas", name: "BODMAS", hasQuestions: false },
      { id: "fractions", name: "Fractions", hasQuestions: false },
      { id: "decimals", name: "Decimals", hasQuestions: false },
      { id: "percentages-simp", name: "Percentages", hasQuestions: false },
      { id: "square-roots", name: "Square Roots", hasQuestions: false },
      { id: "cube-roots", name: "Cube Roots", hasQuestions: false }
    ],
    "Approximation": [
      { id: "decimal-approximation", name: "Decimal Approximation", hasQuestions: false },
      { id: "fraction-approximation", name: "Fraction Approximation", hasQuestions: false },
      { id: "percentage-approximation", name: "Percentage Approximation", hasQuestions: false }
    ],
    "Number Series": [
      { id: "missing-number-series", name: "Missing Number Series", hasQuestions: true },
      { id: "wrong-number-series", name: "Wrong Number Series", hasQuestions: false }
    ],
    "Quadratic Equations": [
      { id: "quadratic-equations", name: "Factorization", hasQuestions: false },
      { id: "value-comparison", name: "Value Comparison", hasQuestions: false },
      { id: "root-comparison", name: "Root Comparison", hasQuestions: false }
    ],
    "Data Interpretation": [
      { id: "table-di", name: "Table DI", hasQuestions: false },
      { id: "bar-graph-di", name: "Bar Graph DI", hasQuestions: true },
      { id: "line-graph-di", name: "Line Graph DI", hasQuestions: false },
      { id: "pie-chart-di", name: "Pie Chart DI", hasQuestions: true },
      { id: "caselet-di", name: "Caselet DI", hasQuestions: false },
      { id: "missing-di", name: "Missing DI", hasQuestions: false },
      { id: "mixed-graph-di", name: "Mixed Graph DI", hasQuestions: false }
    ],
    "Arithmetic": [
      { id: "percentage", name: "Percentage", hasQuestions: false },
      { id: "ratio-proportion", name: "Ratio & Proportion", hasQuestions: false },
      { id: "average", name: "Average", hasQuestions: false },
      { id: "profit-loss", name: "Profit & Loss", hasQuestions: false },
      { id: "discount", name: "Discount", hasQuestions: false },
      { id: "marked-price", name: "Marked Price", hasQuestions: false },
      { id: "successive-discount", name: "Successive Discount", hasQuestions: false },
      { id: "simple-compound-interest", name: "Simple Interest", hasQuestions: true },
      { id: "compound-interest", name: "Compound Interest", hasQuestions: false },
      { id: "partnership", name: "Partnership", hasQuestions: false },
      { id: "mixture-alligation", name: "Mixture & Alligation", hasQuestions: false },
      { id: "time-work", name: "Time & Work", hasQuestions: false },
      { id: "pipes-cisterns", name: "Pipes & Cisterns", hasQuestions: false },
      { id: "work-efficiency", name: "Work Efficiency", hasQuestions: false },
      { id: "time-speed-distance", name: "Time Speed & Distance", hasQuestions: false },
      { id: "boats-streams", name: "Boats & Streams", hasQuestions: false },
      { id: "trains", name: "Trains", hasQuestions: false },
      { id: "relative-speed", name: "Relative Speed", hasQuestions: false },
      { id: "ages", name: "Ages", hasQuestions: false },
      { id: "mensuration", name: "Mensuration", hasQuestions: false },
      { id: "probability", name: "Probability", hasQuestions: false }
    ]
  },
  english: {
    "Reading Comprehension": [
      { id: "reading-comprehension", name: "Factual RC", hasQuestions: true },
      { id: "inference-rc", name: "Inference RC", hasQuestions: false },
      { id: "vocab-rc", name: "Vocabulary Based RC", hasQuestions: false },
      { id: "tone-rc", name: "Tone Based RC", hasQuestions: false },
      { id: "theme-rc", name: "Theme Based RC", hasQuestions: false }
    ],
    "Cloze Test": [
      { id: "traditional-cloze", name: "Traditional Cloze", hasQuestions: false },
      { id: "new-pattern-cloze", name: "New Pattern Cloze", hasQuestions: false }
    ],
    "Error Detection": [
      { id: "error-detection", name: "Subject Verb Agreement", hasQuestions: true },
      { id: "tenses-err", name: "Tenses", hasQuestions: false },
      { id: "articles-err", name: "Articles", hasQuestions: false },
      { id: "prepositions-err", name: "Prepositions", hasQuestions: false },
      { id: "pronouns-err", name: "Pronouns", hasQuestions: false },
      { id: "conjunctions-err", name: "Conjunctions", hasQuestions: false },
      { id: "adjectives-adverbs-err", name: "Adjectives & Adverbs", hasQuestions: false },
      { id: "parallelism-err", name: "Parallelism", hasQuestions: false },
      { id: "misc-grammar", name: "Miscellaneous Grammar", hasQuestions: false }
    ],
    "Fill in the Blanks": [
      { id: "single-blank", name: "Single Blank", hasQuestions: false },
      { id: "double-blank", name: "Double Blank", hasQuestions: false },
      { id: "triple-blank", name: "Triple Blank", hasQuestions: false }
    ],
    "Para Jumbles": [
      { id: "sentence-rearrangement", name: "Sentence Rearrangement", hasQuestions: false },
      { id: "paragraph-rearrangement", name: "Paragraph Rearrangement", hasQuestions: false }
    ],
    "Word Swap": [
      { id: "single-word-swap", name: "Single Word Swap", hasQuestions: false },
      { id: "multiple-word-swap", name: "Multiple Word Swap", hasQuestions: false }
    ],
    "Phrase Replacement": [
      { id: "phrase-grammar", name: "Grammar Based", hasQuestions: false },
      { id: "phrase-context", name: "Context Based", hasQuestions: false }
    ],
    "Sentence Improvement": [
      { id: "grammar-improvement", name: "Grammar Improvement", hasQuestions: false },
      { id: "vocabulary-improvement", name: "Vocabulary Improvement", hasQuestions: false }
    ],
    "Match the Column": [
      { id: "sentence-matching", name: "Sentence Matching", hasQuestions: false },
      { id: "phrase-matching", name: "Phrase Matching", hasQuestions: false }
    ],
    "Connectors": [
      { id: "logical-connectors", name: "Logical Connectors", hasQuestions: false },
      { id: "sentence-connectors", name: "Sentence Connectors", hasQuestions: false }
    ],
    "Vocabulary": [
      { id: "synonyms", name: "Synonyms", hasQuestions: false },
      { id: "antonyms", name: "Antonyms", hasQuestions: false },
      { id: "idioms-phrases", name: "Idioms & Phrases", hasQuestions: false },
      { id: "one-word-substitution", name: "One Word Substitution", hasQuestions: false },
      { id: "spellings", name: "Spellings", hasQuestions: false },
      { id: "homophones", name: "Homophones", hasQuestions: false },
      { id: "confusing-words", name: "Confusing Words", hasQuestions: false }
    ],
    "Grammar": [
      { id: "noun", name: "Noun", hasQuestions: false },
      { id: "pronoun", name: "Pronoun", hasQuestions: false },
      { id: "verb", name: "Verb", hasQuestions: false },
      { id: "adjective", name: "Adjective", hasQuestions: false },
      { id: "adverb", name: "Adverb", hasQuestions: false },
      { id: "tenses-g", name: "Tenses", hasQuestions: false },
      { id: "subject-verb-agreement-g", name: "Subject Verb Agreement", hasQuestions: false },
      { id: "articles-g", name: "Articles", hasQuestions: false },
      { id: "prepositions-g", name: "Prepositions", hasQuestions: false },
      { id: "conjunctions-g", name: "Conjunctions", hasQuestions: false },
      { id: "modals-g", name: "Modals", hasQuestions: false },
      { id: "active-passive-g", name: "Active & Passive Basics", hasQuestions: false },
      { id: "direct-indirect-g", name: "Direct & Indirect Basics", hasQuestions: false }
    ]
  }
};
