interface Recipe {
  id: string;
  title: string;
  rating: number;
  source: string;
  ingredients?: Ingredient[];
  tags?: string[];
}

interface Ingredient {
    name: string;
    quantity: string;
    unit: string;
}