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
                <table className="w-full text-left border-collapse mt-4">
                    <thead>
                        <tr className="border-b border-gray-300 text-gray-500 text-sm">
                            <th className="py-2 pr-4">Zutat</th>
                            <th className="py-2 pr-4">Menge</th>
                            <th className="py-2">Einheit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...pantryItems].sort((a, b) => getIngredientName(a.id).localeCompare(getIngredientName(b.id), 'de', { sensitivity: 'base' })).map((item) => (
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