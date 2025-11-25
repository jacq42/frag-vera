"use client";
import React, { useState } from 'react';
import { IngredientService } from '@/services/ingredientService';

export default function FridgeAdd() {

    const locationId: LocationId = "FRIDGE";

    const getAllUnits = (): Unit[] => {
        return IngredientService.getAllUnits();
    }

    const getAllIngredientsByLocation = (locationId: LocationId): Ingredient[] => {
        return IngredientService.getAllIngredientsByLocation(locationId);
    }

    const addItem = () => {
        // TODO Hier weiter
        const ingredient = getAllIngredientsByLocation(locationId).find((item) => item.id === "MILCH");
        const amount = 2;
        const unit = getAllUnits().find((unit) => unit.id === "Fl.");
        console.log("Reingestellt: ", amount, unit.shortName, ingredient.name);
    }

    return (
        <div className="pb-8">
            <div className="pb-8">
                <select className="bg-gray-800 border border-gray-300 rounded p-2">
                    <option key="0" value="0">-- Was hast du im Kühlschrank? --</option>
                    {getAllIngredientsByLocation(locationId).map((item) => (
                        <option key={item.id}>{item.name}</option>
                    ))}
                </select>
                <select className="bg-gray-800 border border-gray-300 rounded p-2 ml-4">
                    <option key="0" value="0">-- Zuerst die Zutat wählen --</option>
                    {getAllUnits().map((unit) => (
                        <option key={unit.id}>{unit.name} ({unit.shortName})</option>
                    ))}
                </select>
                <input type="text"
                    className="border border-gray-300 rounded p-2 ml-4"/>
                <button onClick={addItem}
                    className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 rounded ml-4"
                >
                    Reinstellen
                </button>
            </div>
        </div>
    );
};