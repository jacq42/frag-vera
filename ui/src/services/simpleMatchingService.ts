import {
    Recipe,
    FridgeItem,
    FreezerItem,
    PantryItem,
    DetailedMatchResult
} from '@/types';

interface RecipeMatch {
  recipe: Recipe;
  availableCount: number;      // Anzahl vorhandener Zutaten
  missingCount: number;         // Anzahl fehlender Zutaten
  totalCount: number;           // Gesamtzahl Zutaten im Rezept
  rating: number;               // Original Rating des Rezepts
}

export class SimpleMatchingService {

    static matchRecipes(
        recipes: Recipe[],
        fridgeItems: FridgeItem[],
        freezerItems: FreezerItem[],
        pantryItems: PantryItem[],
    ): DetailedMatchResult[] {
        console.log("Try to find a match");
        // 1. Erstelle Set aller verfügbaren Zutaten-IDs
        const availableIngredientIds = this.getAvailableIngredientIds(
          fridgeItems,
          freezerItems,
          pantryItems,
        );

        // 2. Berechne Matches für alle Rezepte
        const matches: RecipeMatch[] = recipes.map(recipe =>
          this.calculateMatch(recipe, availableIngredientIds)
        );

        // 3. Sortiere nach:
        //    - Primär: Anzahl verfügbarer Zutaten (mehr ist besser)
        //    - Sekundär: Anzahl fehlender Zutaten (weniger ist besser)
        //    - Tertiär: Rating (höher ist besser)
        const sorted = matches.sort((a, b) => {
          // Primär: Mehr verfügbare Zutaten = besser
          if (a.availableCount !== b.availableCount) {
            return b.availableCount - a.availableCount;
          }

          // Sekundär: Weniger fehlende Zutaten = besser
          if (a.missingCount !== b.missingCount) {
            return a.missingCount - b.missingCount;
          }

          // Tertiär: Höheres Rating = besser
          return b.rating - a.rating;
        });

        // 4. Nimm nur die Top 5
        const topMatches = sorted.slice(0, 5);

        // 5. Gib nur die Recipe-Objekte zurück
        return topMatches.map((match, index) => {
          const available: string[] = [];
          const missing: string[] = [];

          if (match.recipe.ingredients) {
            match.recipe.ingredients.forEach(ingredient => {
              if (availableIngredientIds.has(ingredient.id)) {
                available.push(ingredient.id);
              } else {
                missing.push(ingredient.id);
              }
            });
          }

          const totalIngredients = match.recipe.ingredients?.length || 0;
          const matchPercentage = totalIngredients > 0 ? (available.length / totalIngredients) * 100 : 0;

          return {
            recipe: match.recipe,
            rank: index + 1,
            availableIngredients: available,
            missingIngredients: missing,
            matchPercentage: Math.round(matchPercentage),
            isFullMatch: missing.length === 0
          };
        });
    }

    private static getAvailableIngredientIds(
        fridgeItems: FridgeItem[],
        freezerItems: FreezerItem[],
        pantryItems: PantryItem[],
    ): Set<string> {
        const ids = new Set<string>();

        fridgeItems.forEach(item => {
          ids.add(item.id);
        });

        freezerItems.forEach(item => {
          ids.add(item.id);
        });

        pantryItems.forEach(item => {
          ids.add(item.id);
        });

        return ids;
    }

    private static calculateMatch(
        recipe: Recipe,
        availableIngredientIds: Set<string>
    ): RecipeMatch {
        if (!recipe.ingredients || recipe.ingredients.length === 0) {
          return {
            recipe,
            availableCount: 0,
            missingCount: 0,
            totalCount: 0,
            rating: recipe.rating
          };
        }

        let availableCount = 0;
        let missingCount = 0;

        recipe.ingredients.forEach(ingredient => {
          if (availableIngredientIds.has(ingredient.id)) {
            availableCount++;
          } else {
            missingCount++;
          }
        });

        return {
          recipe,
          availableCount,
          missingCount,
          totalCount: recipe.ingredients.length,
          rating: recipe.rating
        };
    }
}

