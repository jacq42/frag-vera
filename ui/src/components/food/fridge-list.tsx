"use client";
import React, { useState } from 'react';
import { fridgeItems, fridgeLastModified } from '@/data/fridge';
import { getIngredientName } from '@/data/ingredients'

export default function FridgeList() {

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