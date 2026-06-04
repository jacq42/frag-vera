# Agent Instructions

This file instructs AI coding agents (e.g. GitHub Copilot) on how to work in this repository.

---

## Project Overview

**Frag Vera** is a menu planning application that helps users decide what to cook based on available ingredients and dietary preferences.

### Repository Structure

```
frag-vera/
├── api/          # REST API (Express + TypeScript)
└── ui/           # Frontend (Next.js + React + Tailwind CSS)
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| API | Node.js, Express 4, TypeScript 5 |
| Frontend | Next.js 16, React 19, Tailwind CSS 4 |
| Data | Static JSON files (no database) |
| Language | TypeScript throughout |

### Key Data Locations

| Path | Contents |
|------|---------|
| `api/src/data/recipes/` | Recipe JSON files + `index.ts` registry |
| `ui/src/data/ingredients/` | Ingredient lists per category + `units.json` |
| `ui/src/data/recipes/` | UI-side recipe data |
| `ui/src/types/` | Shared TypeScript types |
| `ui/src/services/` | Service layer for data access |

### Conventions

- **Ingredient IDs** use `SCREAMING_SNAKE_CASE` with German umlauts replaced: `ä→AE`, `ö→OE`, `ü→UE`, `ß→SS` (e.g. `Olivenöl` → `OLIVENOEL`).
- **Units** must always reference a valid `id` from `ui/src/data/ingredients/units.json`.
- **Recipe IDs** are zero-padded 4-digit numbers (e.g. `"0013"`).
- All source files are **TypeScript**; do not create plain `.js` files in `src/`.
- The API must be rebuilt (`npm run start` in `api/`) after any changes to `src/`.

---

## Importing a Recipe

When the user provides a recipe URL (e.g. from Chefkoch.de), execute the following steps **in order without asking for confirmation**:

### Step 1 – Fetch & parse the recipe

- Fetch the URL using `curl` and extract the structured data from the page:
  - Recipe title
  - Ingredient list (amount, unit, name)
  - Rating value and count
- Map each ingredient name to a normalized `SCREAMING_SNAKE_CASE` id (e.g. `Olivenöl` → `OLIVENOEL`, `Frühlingszwiebeln` → `FRUEHLINGSZWIEBEL`).

### Step 2 – Determine the next recipe ID

- Check `api/src/data/recipes/` for the highest existing recipe number.
- Use the next number, zero-padded to 4 digits (e.g. `recipe0014.json`).

### Step 3 – Create the recipe JSON

Create `api/src/data/recipes/recipeXXXX.json` with this structure:

```json
{
  "id": "XXXX",
  "title": "...",
  "tags": ["..."],
  "rating": 0.0,
  "source": "Chefkoch.de",
  "link": "https://...",
  "ingredients": [
    { "id": "INGREDIENT_ID", "amount": "...", "unit": "..." }
  ]
}
```

- Use only unit `id` values defined in `ui/src/data/ingredients/units.json`.
- If no specific amount is given, use `""` for amount and `"nB"` for unit.

### Step 4 – Check & update ingredients

- Read all `ui/src/data/ingredients/ingredients_*.json` files and collect existing `id` values.
- For every ingredient `id` in the new recipe that is **not yet listed**, add it to the most appropriate file:

| File | Use for |
|------|---------|
| `ingredients_default.json` | Basics (oil, salt, sugar, vinegar, …) |
| `ingredients_vegetables.json` | Vegetables & fruit |
| `ingredients_dairy.json` | Dairy & cheese |
| `ingredients_grain.json` | Grains, rice, pasta |
| `ingredients_herbs.json` | Fresh & dried herbs |
| `ingredients_spices.json` | Spices & seasonings |
| `ingredients_baking.json` | Baking ingredients & ready-made doughs |
| `ingredients_fish.json` | Fish & seafood |
| `ingredients_beverages.json` | Beverages |

Each new ingredient entry must follow this structure:

```json
{
  "id": "INGREDIENT_ID",
  "name": "Lesbarer Name",
  "category": "Kategorie",
  "defaultUnit": "<valid unit id>",
  "locationId": "FRIDGE|FREEZER|PANTRY|GARDEN|UNKNOWN"
}
```

### Step 5 – Check & update units

- Read `ui/src/data/ingredients/units.json`.
- Verify that every `defaultUnit` of newly added ingredients is listed there.
- If a unit is missing, add it to `units.json`:

```json
{
  "id": "Bund",
  "name": "Bund",
  "shortName": "Bd."
}
```

### Step 6 – Register the recipe

Add the import and array entry in `api/src/data/recipes/index.ts`:

```ts
import recipeXXXX from './recipeXXXX.json';

export const recipes = [
  // ...existing entries...
  recipeXXXX,
];
```

### Step 7 – Report

After all steps are done, summarize:
- The created recipe file and its metadata (title, rating, number of ingredients).
- All newly added ingredients per file.
- Any newly added units.
- All ingredients that were already present.

