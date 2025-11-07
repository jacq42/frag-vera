"use client";
import React, { useState } from 'react';
import { fridgeItems } from '@/data/fridge';
import { getIngredientName } from '@/data/ingredients'

export default function FridgeList() {

    return (
        <div className="pb-8">
            <div className="pb-8">
                <ul className="">
                    {fridgeItems.map((item) => (
                        <li>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};