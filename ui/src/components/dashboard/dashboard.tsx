import React from 'react';
import RecipeTeaser from '@/components/recipe/recipe-teaser';
import FoodTeaser from '@/components/food/food-teaser';
import SearchResult from '@/components/search/search-result';

export default function Dashboard() {

    return (
        <div>
            <div className="">
                <p>
                    Entdecke eine Welt voller kulinarischer Möglichkeiten! Mit deiner digitalen Rezeptsammlung kannst du nicht nur
                    Lieblingsrezepte speichern und organisieren, sondern auch neue Inspirationen finden,
                    die perfekt zu deinen vorhandenen Lebensmitteln passen.
                </p>
            </div>
            <div className="flex items-center items-stretch justify-center space-x-8 pt-16">
                <RecipeTeaser />
                <FoodTeaser />
            </div>
            <div className="flex items-center items-stretch justify-center space-x-8 pt-16">
                <SearchResult />
            </div>
        </div>
    );
};