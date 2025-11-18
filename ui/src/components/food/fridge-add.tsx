"use client";
import React, { useState } from 'react';
import { fridgeItems } from '@/data/fridge';
import { getAllIngredients, getAllUnits } from '@/data/ingredients'

export default function FridgeAdd() {

    return (
        <div className="pb-8">
            <div className="pb-8">
                <select className="border border-gray-300 rounded p-2">
                    <option key="0" value="0">-- Was hast du im Kühlschrank? --</option>
                    {getAllIngredients().map((item) => (
                        <option key={item.id}>{item.name}</option>
                    ))}
                </select>
                <select className="border border-gray-300 rounded p-2">
                    <option key="0" value="0">-- Zuerst die Zutat wählen --</option>
                    {getAllUnits().map((unit) => (
                        <option key={unit.id}>{unit.name} ({unit.shortName})</option>
                    ))}
                </select>
            </div>
        </div>
    );
};