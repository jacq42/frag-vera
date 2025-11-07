import { Recipe } from '@/types/recipe';
import { FridgeItem } from '@/types/fridge';

export class SimpleMatchingService {

    static matchRecipes(
        recipes: Recipe[],
        fridgeItems: FridgeItem[]
    ): number[] {
        return [1]
    }
}
