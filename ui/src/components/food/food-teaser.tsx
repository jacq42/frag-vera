import React from 'react';
import Button from '../button/button';

export default function FoodTeaser() {

    return (
        <div className="flex-1 border-solid border-1 p-8">
            <h2 className="text-xl font-bold pb-4">Lebensmittelverwaltung</h2>
            <p className="pb-8">
                Wirf einen Blick in deinen Kühlschrank
            </p>
            <Button href="/fridge" title="Kühlschrank öffnen" />
            <Button href="/freezer" title="Tiefkühler öffnen" />
        </div>
    );
};