"use client";
import React, { useState } from 'react';
import { pantryItems } from '@/data/pantry';
import { getIngredientName } from '@/data/ingredients'

export default function PantryList() {

    return (
        <div className="pb-8">
            <div className="pb-8">
                <ul className="">
                    {pantryItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};