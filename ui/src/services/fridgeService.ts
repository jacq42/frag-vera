import {
    FridgeItem
} from '@/types';
import { fridgeItems, fridgeLastModified } from '@/data/fridge';

export class FridgeService {

    static getAll(): FridgeItem[] {
        return fridgeItems;
    }

    static getLastModified(): string {
        return fridgeLastModified
    }

}