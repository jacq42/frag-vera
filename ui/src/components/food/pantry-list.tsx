"use client";
import React, { useState } from 'react';
import { PantryService } from '@/services/pantryService';
import { IngredientService } from '@/services/ingredientService';

export default function PantryList() {

    const pantryItems = PantryService.getAll();
    const pantryLastModified = PantryService.getLastModified();

    const getIngredientName = (id: IngredientId): string => {
        return IngredientService.getIngredientName(id);
    }

    return (
        <div className="">
            <div className="">
                <div className="">Aktualisiert: {pantryLastModified}</div>
                <ul className="mt-4">
                    {pantryItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};