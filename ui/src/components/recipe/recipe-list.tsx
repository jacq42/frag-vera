"use client";
import React, {useEffect, useState} from 'react';
import {Recipe} from '@/types/recipes';
import {RecipeService} from '@/services/recipeService';
import {IngredientService} from '@/services/ingredientService';

export default function RecipeList() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        RecipeService.getAll().then(setRecipes);
    }, []);

    const allTags = Array.from(new Set(recipes.flatMap(r => r.tags))).sort((a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }));
    const filteredRecipes = selectedTag ? recipes.filter(r => r.tags.includes(selectedTag)) : recipes;

    const getIngredientName = (id: IngredientId): string => {
        return IngredientService.getIngredientName(id);
    }

    const getUnitShortName = (unitId: string): string => {
        return IngredientService.getUnitShortName(unitId);
    }

    return (
        <div className="pb-8">

            {/* Tag filter */}
            <div className="pb-4">
                <select
                    className="bg-gray-800 border border-gray-300 rounded p-2"
                    value={selectedTag}
                    onChange={(e) => { setSelectedTag(e.target.value); setSelectedRecipe(null); }}
                >
                    <option value="">-- Alle Tags --</option>
                    {allTags.map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
                <span className="ml-4 text-sm text-gray-500">{filteredRecipes.length} Rezepte</span>
            </div>

            {/* Recipe table */}
            <table className="w-full text-left border-collapse mb-8">
                <thead>
                    <tr className="border-b border-gray-300 text-gray-500 text-sm">
                        <th className="py-2 pr-4">Titel</th>
                        <th className="py-2 pr-4">Tags</th>
                        <th className="py-2">⭐</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecipes.map((recipe) => (
                        <tr
                            key={recipe.id}
                            onClick={() => setSelectedRecipe(selectedRecipe?.id === recipe.id ? null : recipe)}
                            className={`border-b border-gray-100 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedRecipe?.id === recipe.id ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : ''}`}
                        >
                            <td className="py-2 pr-4">{recipe.title}</td>
                            <td className="py-2 pr-4">
                                {recipe.tags.map((tag) => (
                                    <span key={tag} className="bg-cyan-600 text-white text-xs rounded px-2 py-0.5 mr-1">{tag}</span>
                                ))}
                            </td>
                            <td className="py-2">{recipe.rating.toFixed(1)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Recipe detail */}
            {selectedRecipe ? (
                <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">{selectedRecipe.title}</h2>
                    {selectedRecipe.link
                        ? <p className="mb-1">Quelle: <a href={selectedRecipe.link} target="_blank" className="underline">{selectedRecipe.source}</a></p>
                        : <p className="mb-1">Quelle: {selectedRecipe.source}</p>
                    }
                    <p className="mb-4">Bewertung: {selectedRecipe.rating} / 5</p>
                    <p className="font-semibold mb-2">Zutaten:</p>
                    <ul className="pl-6 list-disc mb-4">
                        {selectedRecipe.ingredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.amount} {getUnitShortName(ingredient.unit)} <span className="font-bold">{getIngredientName(ingredient.id)}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {selectedRecipe.tags.map((tag) => (
                            <span key={tag} className="bg-cyan-600 text-white text-xs rounded px-2 py-0.5 mr-1">{tag}</span>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-gray-500">Klicke auf ein Rezept für Details.</p>
            )}
        </div>
    );
};