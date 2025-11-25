"use client";
import React, { useState } from 'react';
import { Recipe, DetailedMatchResult } from '@/types';
import { SimpleMatchingService } from '@/services/simpleMatchingService';
import { RecipeService } from '@/services/recipeService';
import { FridgeService } from '@/services/fridgeService';
import { FreezerService } from '@/services/freezerService';
import { PantryService } from '@/services/pantryService';
import { IngredientService } from '@/services/ingredientService';

export default function SearchResult() {

    const recipes = RecipeService.getAll();
    const fridgeItems = FridgeService.getAll();
    const freezerItems = FreezerService.getAll();
    const pantryItems = PantryService.getAll();

    const [matches, setMatches] = useState<DetailedMatchResult[]>([]);

    const handleMatch = (filterByTag: string) => {
        console.log("recipes: " + recipes)
        console.log("l = " + matches.length)
        const results = SimpleMatchingService.matchRecipes(
            filterByTag,
            recipes,
            fridgeItems,
            freezerItems,
            pantryItems,
        );

        console.log("Output Results:", results.length);
        console.log("Erstes Result:", results[0]);
        console.log("Erstes Result Recipe:", results[0]?.recipe);
        console.log("Erstes Result Recipe Name:", results[0]?.recipe.title);
        console.log("Recipe Properties:", results[0]?.recipe ? Object.keys(results[0].recipe) : 'none');
        console.log("=== DEBUG END ===");
        setMatches(results);
    };

    const handleMatchCooking = () => {
        handleMatch("Hauptspeise");
    }

    const handleMatchBaking = () => {
        handleMatch("Backen");
    }

    const ingredientList = (ingredientIds: string[]): string => {
        const list = ingredientIds.map((id) => {
            return IngredientService.getIngredientName(id);
        });
        return list.join(", ");
    };

    return (
        <div className="flex-1 border-solid border-1 p-8 text-center">
            <button onClick={handleMatchCooking}
                className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 rounded"
            >
                Was koche ich heute?
            </button>
            <button onClick={handleMatchBaking}
                className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 ml-4 rounded"
            >
                Was backe ich heute?
            </button>
            <div className="pt-8">
                {matches.length > 0 && (
                    <div className="text-center text-gray-500 py-12">
                        Guten Appetit!<br />
                        <div className="space-y-4">
                        {matches.map((match, index) => (
                            <div
                                key={match.recipe.id}
                                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-left"
                            >

                                {/* Ranking Badge */}
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <span className="inline-block bg-[#438951] text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                                            #{index + 1}
                                        </span>
                                        <h3 className="inline text-xl font-bold text-gray-800">
                                            {match.recipe.title}
                                        </h3>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-500 text-lg">⭐</span>
                                        <span className="font-semibold text-gray-700">
                                            {match.recipe.rating.toFixed(1)}
                                        </span>
                                    </div>
                                </div>

                                {/* Zutaten-Info */}
                                {match.availableIngredients && match.availableIngredients.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-3">
                                        📋 {match.availableIngredients.length} Zutaten vorhanden: {ingredientList(match.availableIngredients)}
                                    </div>
                                )}
                                {match.missingIngredients && match.missingIngredients.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-3">
                                        📋 {match.missingIngredients.length} Zutaten fehlen: {ingredientList(match.missingIngredients)}
                                    </div>
                                )}

                                {/* Source */}
                                <div className="text-xs text-gray-500">
                                    {match.recipe.link && <span>Quelle: <a href={match.recipe.link} target="_blank">{match.recipe.source}</a></span>}
                                    {!match.recipe.link && <span>Quelle: {match.recipe.source}</span>}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                )}

                {matches.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                      Hier findest du meinen Vorschlag.
                    </div>
                )}
            </div>
        </div>
    );
};