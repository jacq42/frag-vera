import {
    FreezerItem
} from '@/types';
import { freezerItems, freezerLastModified } from '@/data/freezer';

export class FreezerService {

    static getAll(): FreezerItem[] {
        return freezerItems;
    }

    static getLastModified(): string {
        return freezerLastModified
    }

}