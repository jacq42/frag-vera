import React from 'react';
import Button from '../button/button';

export default function RecipeTeaser() {

    return (
        <div className="flex-1 border-solid border-1 p-8">
            <h2 className="text-xl font-bold pb-4">Rezeptsammlung</h2>
            <p className="pb-8">
                Verwalte deine Lieblingsrezepte
            </p>
            <Button href="/recipe" title="Kochbuch ansehen" />
        </div>
    );
};