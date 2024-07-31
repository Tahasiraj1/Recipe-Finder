import { RecipeService } from "./recipeservice.js";

const recipeService = new RecipeService();


// Search for recipes by ingredient
const searchIngredient = "tomato";
const recipes = recipeService.searchRecipes(searchIngredient);
console.log(`Recipes with ${searchIngredient}:`, recipes);


// View details of a specific recipe
const recipeId = 1;
const recipe = recipeService.getRecipeById(recipeId);
if(recipe) {
    console.log(`Details of recipe with id ${recipeId}`, recipe);
}


// Toggle favorite status of a recipe
recipeService.toggleFavourite(recipeId);


// View favorite recipes
const favouriteRecipes = recipeService.getFavouriteRecipes();
console.log("Favourite Recipes:", favouriteRecipes);
