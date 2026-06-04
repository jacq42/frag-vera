"use client";
import React, {useState} from 'react';
import {IngredientService} from '@/services/ingredientService';

interface FreezerAddProps {
    onAdded?: () => void;
}

export default function FreezerAdd({ onAdded }: FreezerAddProps) {

    const locationId: LocationId = "FREEZER";

    const [selectedIngredientId, setSelectedIngredientId] = useState<string>("");
    const [selectedUnitId, setSelectedUnitId] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const getAllUnits = (): Unit[] => {
        return IngredientService.getAllUnits();
    }

    const getAllIngredientsByLocation = (locationId: LocationId): Ingredient[] => {
        return IngredientService.getAllIngredientsByLocation(locationId);
    }

    const addItem = async () => {
        if (!selectedIngredientId || !selectedUnitId || !amount) {
            setMessage("Bitte Zutat, Einheit und Menge angeben.");
            return;
        }

        const ingredient = getAllIngredientsByLocation(locationId).find((item) => item.id === selectedIngredientId);
        const unit = getAllUnits().find((u) => u.id === selectedUnitId);

        if (!ingredient || !unit) {
            setMessage("Ungültige Zutat oder Einheit.");
            return;
        }

        try {
            const response = await fetch('/api/freezer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: ingredient.id, amount, unit: unit.shortName }),
            });

            if (response.ok) {
                setMessage(`✓ ${amount} ${unit.shortName} ${ingredient.name} eingefroren.`);
                setSelectedIngredientId("");
                setSelectedUnitId("");
                setAmount("");
                onAdded?.();
            } else {
                setMessage("Fehler beim Speichern.");
            }
        } catch (err) {
            setMessage("Fehler beim Speichern.");
        }
    }

    return (
        <div className="pb-8">
            <div className="pb-8">
                <select
                    className="bg-gray-800 border border-gray-300 rounded p-2"
                    value={selectedIngredientId}
                    onChange={(e) => setSelectedIngredientId(e.target.value)}
                >
                    <option value="">-- Was hast du im Tiefkühler? --</option>
                    {[...getAllIngredientsByLocation(locationId)].sort((a, b) => a.name.localeCompare(b.name, 'de', { sensitivity: 'base' })).map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
                <select
                    className="bg-gray-800 border border-gray-300 rounded p-2 ml-4"
                    value={selectedUnitId}
                    onChange={(e) => setSelectedUnitId(e.target.value)}
                >
                    <option value="">-- Einheit wählen --</option>
                    {getAllUnits().map((unit) => (
                        <option key={unit.id} value={unit.id}>{unit.name} ({unit.shortName})</option>
                    ))}
                </select>
                <input
                    type="number"
                    placeholder="Menge"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 rounded p-2 ml-4 w-24"
                />
                <button onClick={addItem}
                    className="bg-[#438951] hover:bg-white text-white hover:text-[#438951] font-bold py-2 px-4 rounded ml-4"
                >
                    Einfrieren
                </button>
            </div>
            {message && <p className="text-sm mt-2">{message}</p>}
        </div>
    );
};