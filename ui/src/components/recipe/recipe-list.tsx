"use client";
import React, { useState } from 'react';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

export default function RecipeList() {

    const [selectedRecipeId, setSelectedRecipeId] = useState<string>('');

    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

    const handleRecipeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRecipeId(event.target.value);
    };

    return (
        <div className="pb-8">
            <div className="pb-8">
                <select className="border border-gray-300 rounded p-2"
                    value={selectedRecipeId}
                    onChange={handleRecipeChange}>
                    <option key="0" value="0">-- Wähle ein Rezept --</option>
                    {recipes.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                    ))}
                </select>
            </div>
            <div>
            {selectedRecipe ? (
                <div className="">
                    <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>
                    <p>Quelle: {selectedRecipe.source}</p>
                    <p>Bewertung: {selectedRecipe.rating} / 5</p>
                    <p>Zutaten:</p>
                    <ul className="pl-12 list-disc">
                    {selectedRecipe.ingredients.map((ingredient) => (
                        <li>{ingredient.quantity} {ingredient.unit} <span className="font-bold">{ingredient.name}</span></li>
                    ))}
                    </ul>
                </div>
            ) : (
                <p className="text-gray-500">Bitte wähle ein Rezept aus der Liste.</p>
            )}
            </div>
        </div>
    );
};