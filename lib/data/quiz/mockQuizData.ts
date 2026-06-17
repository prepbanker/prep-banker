// PATH: lib/data/quiz/mockQuizData.ts
import { QuizDataset } from '@/types/quiz.types';
import engData from './mock-test-data-eng.json';
import hindiData from './mock-test-data-hindi.json';

export const mockQuizData: QuizDataset = {
  examTypes: engData.examTypes as any[],
  sections: engData.sections as any[],
  questionSets: {
    ...engData.questionSets,
    ...hindiData
  } as any
};
