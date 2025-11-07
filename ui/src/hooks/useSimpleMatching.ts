import { useState, useCallback } from 'react';
import { Recipe } from '@/types/recipe';
import { FridgeItem } from '@/types/fridge';
import { MatchResult, MatchingOptions } from '@/types/matching';
import { SimpleMatchingService } from '@/services/simpleMatchingService';

export function useSimpleMatching() {
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const performMatching = useCallback((
    recipes: Recipe[],
    fridgeItems: FridgeItem[],
    options?: MatchingOptions
  ) => {
    setIsLoading(true);

    setTimeout(() => {
      const results = SimpleMatchingService.matchRecipes(
        recipes,
        fridgeItems
      );
      setMatches(results);
      setIsLoading(false);
    }, 0);
  }, []);

  return {
    matches,
    isLoading,
    performMatching
  };
}