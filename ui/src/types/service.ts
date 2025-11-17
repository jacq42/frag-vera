export interface ServiceResult {
  id: string;
}

export interface DetailedMatchResult {
  recipe: Recipe;
  rank: number;                    // Position in der Liste (1-5)
  availableIngredients: string[];  // IDs der vorhandenen Zutaten
  missingIngredients: string[];    // IDs der fehlenden Zutaten
  matchPercentage: number;         // 0-100
  isFullMatch: boolean;            // Alle Zutaten vorhanden?
}
