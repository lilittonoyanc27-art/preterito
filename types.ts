/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'theory' | 'quiz';

export interface QuizQuestion {
  id: number;
  sentence: string; 
  options: string[];
  correctAnswer: string;
  translation: string;
}

export interface ConjugationRow {
  pronoun: string;
  haber: string;
  participio: string;
}

export interface ConjugationTable {
  title: string;
  rows: ConjugationRow[];
}

export interface TheoryPoint {
  title: string;
  content?: string;
  conjugationTables?: ConjugationTable[];
  markers?: string[];
  rules?: string[];
}
