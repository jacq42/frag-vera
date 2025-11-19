import itemsBaking from './ingredients_baking.json';
import itemsBeverages from './ingredients_beverages.json';
import itemsDairy from './ingredients_dairy.json';
import itemsDefault from './ingredients_default.json';
import itemsFish from './ingredients_fish.json';
import itemsGrain from './ingredients_grain.json';
import itemsHerbs from './ingredients_herbs.json';
import itemsSpices from './ingredients_spices.json';
import itemsVegetables from './ingredients_vegetables.json';
import unitItems from './units.json';
import type { Ingredient, Unit } from '@/types/ingredients.ts';

export const INGREDIENTS = [
    ...itemsBeverages.items,
    ...itemsBaking.items,
    ...itemsDairy.items,
    ...itemsDefault.items,
    ...itemsFish.items,
    ...itemsGrain.items,
    ...itemsHerbs.items,
    ...itemsSpices.items,
    ...itemsVegetables.items
];

export const UNITS = unitItems;

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

export const getUnitById = (unitId: string): Unit | undefined => {
    return UNITS.find(unit => unit.id === unitId);
}

export const getUnitName = (unitId: string): string => {
    return getUnitById(unitId)?.name || unitId;
}

export const getUnitShortName = (unitId: string): string => {
    return getUnitById(unitId)?.shortName || unitId;
}

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
    return UNITS.find(u => u.id === unitId);
}