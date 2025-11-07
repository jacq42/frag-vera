"use client";
import React, { useState } from 'react';
import { freezerItems } from '@/data/freezer';
import { getIngredientName } from '@/data/ingredients'

export default function FreezerList() {

    return (
        <div className="pb-8">
            <div className="pb-8">
                <ul className="">
                    {freezerItems.map((item) => (
                        <li>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};