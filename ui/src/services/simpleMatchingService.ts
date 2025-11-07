import { Recipe } from '@/types/recipe';
import { FridgeItem } from '@/types/fridge';
//import { MatchResult } from '@/types/matching';

export class SimpleMatchingService {

    static matchRecipes(
        recipes: Recipe[],
        fridgeItems: FridgeItem[]
    ): Recipe[] {
        //const dummyMatch = MatchResult(matchScore = 100)
        return recipes[0]
    }

//     static matchRecipes(
//         recipes: Recipe[],
//         fridgeItems: FridgeItem[],
//         options?: MatchingOptions
//     ): MatchResult[] {
//         const availableIngredientIds = new Set(
//             fridgeItems.map(item => item.ingredientId)
//         );
//         const matches = recipes.map(recipe =>
//             this.matchSingleRecipe(recipe, availableIngredientIds)
//         );
//         return this.filterAndSort(matches, options);
//     }
}
