export interface Recipe {
  id: string;
  title: string;
  tags?: string[];
  rating: number;
  source: string;
  link?: string;
  ingredients?: Ingredient[];
}