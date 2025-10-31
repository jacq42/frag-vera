import React from 'react';
import RecipeTeaser from '@/components/recipe/recipe-teaser';
import FoodTeaser from '@/components/food/food-teaser';

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
                <div className="flex-1 border-solid border-1 p-8 text-center">
                    <button className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 rounded">
                        Überasch mich!
                    </button>
                    <p className="pt-8">
                        Hier findest du meinen Vorschlag.
                    </p>
                </div>
            </div>
        </div>
    );
};