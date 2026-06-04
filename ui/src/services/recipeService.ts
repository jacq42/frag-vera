import {Recipe} from '@/types';

export class RecipeService {

    static async getAll(): Promise<Recipe[]> {
        const response = await fetch('/api/express/recipes');
        if (!response.ok) throw new Error('Failed to fetch recipes');
        return response.json();
    }

    static async getOne(id: string): Promise<Recipe> {
        const response = await fetch(`/api/express/recipes/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch recipe ${id}`);
        return response.json();
    }

}