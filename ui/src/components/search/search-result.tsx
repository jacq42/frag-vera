"use client";
import React, { useState } from 'react';
import { recipes } from '@/data/recipes';
import { fridgeItems } from '@/data/fridge';
import { SimpleMatchingService } from '@/services/simpleMatchingService';
import { Recipe } from '@/types/recipe';
import { MatchResult } from '@/types/matching';

export default function SearchResult() {

    const [matches, setMatches] = useState<Recipe[]>(recipes[0]);

    const handleMatch = () => {
        console.log("recipes: " + recipes)
        console.log("l = " + matches.length)
        const results = SimpleMatchingService.matchRecipes(
          recipes,
          fridgeItems
        );
    console.log("found: " + results)
        setMatches(results);
    };

    return (
        <div className="flex-1 border-solid border-1 p-8 text-center">
            <button onClick={handleMatch}
                className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 rounded"
            >
                Überasche mich!
            </button>
            <div className="pt-8">
                {matches.length > 0 && (
                    <div className="text-center text-gray-500 py-12">
                        Guten Appetit!
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