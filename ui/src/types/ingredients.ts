export interface Ingredient {
    id: string;
    name: string;
    amount: string;
    category: string;
    defaultUnit: string;
    unit: string;
    locationId?: LocationId;
}

export interface Unit {
    id: string;
    name: string;
    shortName: string;
}

export type IngredientId = string; // z.B. "TOMATOES", "CHEESE"
export type LocationId = string; // z.B. "PANTRY", "FREEZER", "FRIDGE"