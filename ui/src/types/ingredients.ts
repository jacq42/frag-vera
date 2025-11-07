export interface Ingredient {
    id: string;
    name: string;
    amount: string;
    category: string;
    defaultUnit: string;
    unit: string;
}

export type IngredientId = string; // z.B. "TOMATOES", "CHEESE"