export interface Recipe {
  id: string;
  title: string;
  rating: number;
  source: string;
  ingredients?: Ingredient[];
  tags?: string[];
}