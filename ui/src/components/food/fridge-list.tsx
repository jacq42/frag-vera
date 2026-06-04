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
                <table className="w-full text-left border-collapse mt-4">
                    <thead>
                        <tr className="border-b border-gray-300 text-gray-500 text-sm">
                            <th className="py-2 pr-4">Zutat</th>
                            <th className="py-2 pr-4">Menge</th>
                            <th className="py-2">Einheit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...fridgeItems].sort((a, b) => getIngredientName(a.id).localeCompare(getIngredientName(b.id), 'de', { sensitivity: 'base' })).map((item) => (
                            <tr key={item.id} className="border-b border-gray-100">
                                <td className="py-2 pr-4 font-medium">{getIngredientName(item.id)}</td>
                                <td className="py-2 pr-4">{item.amount}</td>
                                <td className="py-2">{item.unit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};