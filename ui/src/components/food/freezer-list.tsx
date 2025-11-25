"use client";
import React, { useState } from 'react';
import { FreezerService } from '@/services/freezerService';
import { IngredientService } from '@/services/ingredientService';

export default function FreezerList() {

    const freezerItems = FreezerService.getAll();
    const freezerLastModified = FreezerService.getLastModified();

    const getIngredientName = (id: IngredientId): string => {
        return IngredientService.getIngredientName(id);
    }

    return (
        <div className="">
            <div className="">
                <div className="">Aktualisiert: {freezerLastModified}</div>
                <ul className="mt-4">
                    {freezerItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};