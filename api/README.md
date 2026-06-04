# API

Express REST API for frag-vera, bootstrapped with [`express-generator`](https://expressjs.com/en/starter/generator.html).

> Reference: [Express with TypeScript](https://www.bezkoder.com/express-typescript-example/)

---

## Getting Started

Install dependencies:

```bash
npm install
```

Build and start the server:

```bash
npm run start       # build + run
npm run dev         # run pre-built version only
```

The API runs on **http://localhost:8080**.

---

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/recipes` | List all recipes |
| GET | `/api/recipes/:id` | Get a single recipe |

---

## Adding a new Recipe

### 1. Provide a recipe URL

Provide a recipe URL (e.g. from [Chefkoch.de](https://www.chefkoch.de)) to GitHub Copilot. Copilot will:

1. Fetch the page and extract the structured recipe data (title, ingredients, rating).
2. Map each ingredient to a normalized `SCREAMING_SNAKE_CASE` id (e.g. `KAROTTE`, `OLIVENOEL`).
3. Create the next free JSON file in `src/data/recipes/` (e.g. `recipe0014.json`):

```json
{
  "id": "0014",
  "title": "Mein neues Rezept",
  "tags": ["Hauptspeise", "Vegan"],
  "rating": 4.0,
  "source": "Chefkoch.de",
  "link": "https://www.chefkoch.de/rezepte/...",
  "ingredients": [
    { "id": "KAROTTE", "amount": "3", "unit": "Stk." },
    { "id": "SALZ", "amount": "1", "unit": "Prise" }
  ]
}
```

> Ingredient `id` values must exist in `ui/src/data/ingredients/`.

---

### 2. Check & update ingredients

Every ingredient `id` used in the recipe must be present in one of the ingredient files in `ui/src/data/ingredients/`:

| File | Category |
|------|----------|
| `ingredients_default.json` | Basics (oil, salt, vinegar, …) |
| `ingredients_vegetables.json` | Vegetables & fruit |
| `ingredients_dairy.json` | Dairy products |
| `ingredients_grain.json` | Grains & pasta |
| `ingredients_herbs.json` | Fresh & dried herbs |
| `ingredients_spices.json` | Spices |
| `ingredients_baking.json` | Baking ingredients & doughs |
| `ingredients_fish.json` | Fish & seafood |
| `ingredients_beverages.json` | Beverages |

Each entry follows this structure:

```json
{
  "id": "KAROTTE",
  "name": "Karotte",
  "category": "Gemüse",
  "defaultUnit": "Stk.",
  "locationId": "FRIDGE"
}
```

Valid `locationId` values: `FRIDGE`, `FREEZER`, `PANTRY`, `GARDEN`, `UNKNOWN`.

If an ingredient is missing, add it to the most appropriate file before registering the recipe.

---

### 3. Check & update units

The `defaultUnit` of every ingredient and the `unit` field of every recipe ingredient must be a valid unit `id` defined in `ui/src/data/ingredients/units.json`.

Current valid units:

| id | Name |
|----|------|
| `g` | Gramm |
| `kg` | Kilogramm |
| `ml` | Milliliter |
| `l` | Liter |
| `Stk.` | Stück |
| `Pck.` | Packung |
| `Dose` | Dose |
| `Glas` | Glas |
| `Bund` | Bund |
| `EL` | Esslöffel |
| `TL` | Teelöffel |
| `Prise` | Prise |
| `Zehe` | Zehe |
| `nB` | nach Bedarf |
| `zA` | zur Ansicht |
| `Fl.` | Flasche |

If a new unit is needed, add it to `units.json` first:

```json
{
  "id": "Bund",
  "name": "Bund",
  "shortName": "Bd."
}
```

---

### 4. Register the recipe

Add the import and array entry in `src/data/recipes/index.ts`:

```ts
import recipe0014 from './recipe0014.json';

export const recipes = [
  // ...existing entries...
  recipe0014,
];
```

---

### 5. Rebuild & restart

```bash
npm run start
```
