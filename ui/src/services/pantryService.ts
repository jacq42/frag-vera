import {
    PantryItem
} from '@/types';
import { pantryItems, pantryLastModified } from '@/data/pantry';

export class PantryService {

    static getAll(): PantryItem[] {
        return pantryItems;
    }

    static getLastModified(): string {
        return pantryLastModified
    }

}