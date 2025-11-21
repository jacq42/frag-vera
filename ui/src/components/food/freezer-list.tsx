"use client";
import React, { useState } from 'react';
import { freezerItems, freezerLastModified } from '@/data/freezer';
import { getIngredientName } from '@/data/ingredients'

export default function FreezerList() {

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