import {
    Ingredient,
    Unit
} from '@/types';
import {
    getAllIngredientsByLocation,
    getIngredientName,
    getAllUnits,
    getUnitShortName,
} from '@/data/ingredients'

export class IngredientService {

    static getAllUnits(): Unit[] {
        return getAllUnits();
    }

    static getUnitShortName(unitId: string): string {
        return getUnitShortName(unitId);
    }

    static getAllIngredientsByLocation(locationId: LocationId): Ingredient[] {
        return getAllIngredientsByLocation(locationId);
    }

    static getIngredientName(id: IngredientId): string {
        return getIngredientName(id);
    }
}