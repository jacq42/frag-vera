"use client";
import React, {useEffect, useState} from 'react';
import {FridgeItem} from '@/types';
import {IngredientService} from '@/services/ingredientService';

interface FridgeListProps {
    refreshKey?: number;
}

export default function FridgeList({ refreshKey }: FridgeListProps) {

    const [fridgeItems, setFridgeItems] = useState<FridgeItem[]>([]);
    const [lastModified, setLastModified] = useState<string>("");

    useEffect(() => {
        fetch('/api/fridge')
            .then((res) => res.json())
            .then((data) => {
                setFridgeItems(data.items ?? []);
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
                    {fridgeItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};