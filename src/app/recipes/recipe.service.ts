import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Spare Ribs',
      'Dry rub spare ribs with salad',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
      [
        new Ingredient('Pork ribs', 1),
        new Ingredient('Dry rub spices', 1),
        new Ingredient('Tomatoes', 2)
      ]
    )
  ];

  getRecipes() {
    // Returns a copy of the original array to avoid mutation
    return this.recipes.slice();
  }
}
