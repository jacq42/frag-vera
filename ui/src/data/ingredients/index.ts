import ingredientsData from './ingredients.json';
import type { Ingredient } from '@/types/ingredients.ts';

export const INGREDIENTS = ingredientsData.ingredients;

export const getIngredientById = (id: IngredientId): Ingredient | undefined => {
  return INGREDIENTS.find(ing => ing.id === id);
};

export const getIngredientName = (id: IngredientId): string => {
  return getIngredientById(id)?.name || id;
};