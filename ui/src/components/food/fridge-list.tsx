"use client";
import React, { useState } from 'react';
import { FridgeService } from '@/services/fridgeService';
import { IngredientService } from '@/services/ingredientService';

export default function FridgeList() {

    const fridgeItems = FridgeService.getAll();
    const fridgeLastModified = FridgeService.getLastModified();

    const getIngredientName = (id: IngredientId): string => {
        return IngredientService.getIngredientName(id);
    }

    return (
        <div className="">
            <div className="">
                <div className="">Aktualisiert: {fridgeLastModified}</div>
                <ul className="mt-4">
                    {fridgeItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};