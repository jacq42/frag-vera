import ingredientsData from './ingredients.json';
import unitItems from './units.json';
import type { Ingredient, Unit } from '@/types/ingredients.ts';

export const INGREDIENTS = ingredientsData.ingredients;

export const getAllIngredients = (): Ingredient[] => {
    return INGREDIENTS;
};

export const getAllIngredientsByLocation = (locationId: LocationId): Ingredient[] => {
    console.log("get ingredient by location {}", locationId);
    const filteredItems = INGREDIENTS.filter(item => item.locationId === locationId || item.locationId === undefined);
    console.log("found {}", JSON.stringify(filteredItems));
    return filteredItems;
};

export const getIngredientById = (id: IngredientId): Ingredient | undefined => {
    console.debug("get ingredient by id {}", id);
    return INGREDIENTS.find(item => item.id === id);
};

export const getIngredientName = (id: IngredientId): string => {
    return getIngredientById(id)?.name || id;
};

export const getAllUnits = (): Unit[] => {
    let units = [];
    INGREDIENTS.map((item) => {
        if (!units.find(u => u.id === item.defaultUnit)) {
            units.push(convertToUnit(item.defaultUnit));
        }
    });
    return units;
}

const convertToUnit = (unitId: string): Unit => {
    return unitItems.find(u => u.id === unitId);
}