"use client";
import React, {useEffect, useState} from 'react';
import {FreezerItem} from '@/types';
import {IngredientService} from '@/services/ingredientService';

interface FreezerListProps {
    refreshKey?: number;
}

export default function FreezerList({ refreshKey }: FreezerListProps) {

    const [freezerItems, setFreezerItems] = useState<FreezerItem[]>([]);
    const [lastModified, setLastModified] = useState<string>("");

    useEffect(() => {
        fetch('/api/freezer')
            .then((res) => res.json())
            .then((data) => {
                setFreezerItems(data.items ?? []);
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
                    {freezerItems.map((item) => (
                        <li key={item.id}>{getIngredientName(item.id)}: {item.amount} {item.unit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};