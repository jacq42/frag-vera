# Frag Vera

## Purpose

The purpose of this application is to help users by planing their menus. What to eat today?

## Local Setup

Both the API and the UI must be running at the same time.

### 1. Start the API

```bash
cd api
npm install
npm run start     # build + run on http://localhost:8080
```

### 2. Start the UI

Open a second terminal:

```bash
cd ui
npm install
npm run dev       # development server on http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Requirements

- Collection of recipes or meals with list of ingredients
  - See [API README](api/README.md)
- Content of refrigerator, freezer or pantry
  - Update via UI
- List of restaurants *(future release)*
- List of favorite meals per person *(future release)*
- Dietary restrictions *(future release)*
- Allergies *(future release)*
- Remember what leftovers are left for how many people *(future release)*

## Request

- "What to cook today?", "What should I bake?"
- "Create a menu plan for the next 7 days"
- "Generate a shopping list with missing ingredients"
