"use client";
import React, { useState } from 'react';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipes';
import { getIngredientName, getUnitShortName } from '@/data/ingredients'

export default function RecipeList() {

    const [selectedRecipeId, setSelectedRecipeId] = useState<string>('');

    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

    const handleRecipeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRecipeId(event.target.value);
    };

    const tagsAsString = (tags: string[]): string => {
        return tags.join(", ");
    }

    return (
        <div className="pb-8">
            <div className="pb-8">
                <select className="bg-gray-800 border border-gray-300 rounded p-2"
                    value={selectedRecipeId}
                    onChange={handleRecipeChange}>
                    <option key="0" value="0">-- Wähle ein Rezept --</option>
                    {recipes.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>{recipe.title}</option>
                    ))}
                </select>
            </div>
            <div>
            {selectedRecipe ? (
                <div className="">
                    <h2 className="text-2xl font-bold mb-4">{selectedRecipe.title}</h2>
                    {selectedRecipe.link && <p>Quelle: <a href={selectedRecipe.link} target="_blank">{selectedRecipe.source}</a></p>}
                    {!selectedRecipe.link && <p>Quelle: {selectedRecipe.source}</p>}
                    <p>Bewertung: {selectedRecipe.rating} / 5</p>
                    <p>Zutaten:</p>
                    <ul className="pl-12 list-disc">
                    {selectedRecipe.ingredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.amount} {getUnitShortName(ingredient.unit)} <span className="font-bold">{getIngredientName(ingredient.id)}</span></li>
                    ))}
                    </ul>
                    <p className="pt-4">Tags:
                    {selectedRecipe.tags.map((tag) => (
                        <span key={tag}
                            className="bg-cyan-600 border border-gray-300 rounded mx-2 px-2">{tag}</span>
                    ))}
                    </p>
                </div>
            ) : (
                <p className="text-gray-500 pt-12">Bitte wähle ein Rezept aus der Liste.</p>
            )}
            </div>
        </div>
    );
};