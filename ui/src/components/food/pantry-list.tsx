"use client";
import React, {useEffect, useState} from 'react';
import {PantryItem} from '@/types';
import {IngredientService} from '@/services/ingredientService';

interface PantryListProps {
    refreshKey?: number;
}

export default function PantryList({ refreshKey }: PantryListProps) {

    const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);
    const [lastModified, setLastModified] = useState<string>("");

    useEffect(() => {
        fetch('/api/pantry')
            .then((res) => res.json())
            .then((data) => {
                setPantryItems(data.items ?? []);
                setLastModified(data.lastModified ?? "");
            });
    }, [refreshKey]);

    const getIngredientName = (id: IngredientId): string => {
        return IngredientService.getIngredientName(id);
    }

    return (
        <div className="">
            <div className="">
                <div className="">Aktualisiert: {lastModified}</div>
                <ul className="mt-4">
                    {pantryItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};