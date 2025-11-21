"use client";
import React, { useState } from 'react';
import { pantryItems, pantryLastModified } from '@/data/pantry';
import { getIngredientName } from '@/data/ingredients'

export default function PantryList() {

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