export interface Ingredient {
    id: string;
    name: string;
    amount: string;
    category: string;
    defaultUnit: string;
    unit: string;
}

export interface Unit {
    id: string;
    name: string;
    shortName: string;
}

export type IngredientId = string; // z.B. "TOMATOES", "CHEESE"