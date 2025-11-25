import {
    Recipe
} from '@/types';
import { recipes } from '@/data/recipes';

export class RecipeService {

    static getAll(): Recipe[] {
        return recipes;
    }

}