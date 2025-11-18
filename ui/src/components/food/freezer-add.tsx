"use client";
import React, { useState } from 'react';
import { getAllIngredientsByLocation, getAllUnits } from '@/data/ingredients'

export default function FreezerAdd() {

    const locationId: LocationId = "FREEZER";

    return (
        <div className="pb-8">
            <div className="pb-8">
                <select className="bg-gray-800 border border-gray-300 rounded p-2">
                    <option key="0" value="0">-- Was hast du im Tiefkühler? --</option>
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
            </div>
        </div>
    );
};