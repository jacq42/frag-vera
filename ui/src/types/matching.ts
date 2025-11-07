export interface MatchResult {
//   recipe: Recipe;
//   matchPercentage: number;
  matchScore: number;  // 0-100
//   availableIngredients: string[];
//   missingIngredients: string[];
//   canCook: boolean;  // true wenn alle Zutaten vorhanden
}

// export interface MatchingOptions {
//   minMatchPercentage?: number;  // Nur Rezepte über X% anzeigen
//   sortBy?: 'percentage' | 'missing' | 'name';
//   includePartialMatches?: boolean;
// }