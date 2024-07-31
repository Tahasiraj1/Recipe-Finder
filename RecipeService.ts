import { Recipe } from "./recipe.js";

export class RecipeService {
    private recipes: Recipe[] = [
        {
            id: 1,
            name: "Pasta",
            ingredients: ["pasta", "tomato", "basil"],
            instructions: "Boil pasta. Make sauce. Mix together.",
            isFavourite: false,
        },
        {
            id: 2,
            name: "Salad",
            ingredients: ["lettuce", "tomato", "cucumber"],
            instructions: "Chop vegetables. Mix together",
            isFavourite: false,
        },
    ];

    searchRecipes(ingredient: string): Recipe[] {
        return this.recipes.filter(recipe => 
            recipe.ingredients.includes(ingredient)
        );
    }

    getRecipeById(id: number): Recipe | undefined {
        return this.recipes.find(recipe => recipe.id === id);
    }

    toggleFavourite(id: number): void {
        const recipe = this.getRecipeById(id);
        if(recipe) {
            recipe.isFavourite = !recipe.isFavourite;
        }
    }

    getFavouriteRecipes(): Recipe[] {
        return this.recipes.filter(recipe => recipe.isFavourite);
    }
}