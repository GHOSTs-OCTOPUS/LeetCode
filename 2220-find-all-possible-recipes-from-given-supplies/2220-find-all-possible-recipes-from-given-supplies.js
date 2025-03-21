var findAllRecipes = function(recipes, ingredients, supplies) {
    let availableSupplies = new Set(supplies);
    let recipeToIngredients = new Map();
    let visited = new Map();
    let result = [];

    for (let i = 0; i < recipes.length; i++) {
        recipeToIngredients.set(recipes[i], ingredients[i]);
    }

    const canMake = (recipe) => {
        if (visited.has(recipe)) {
            return visited.get(recipe) === 1;
        }

        if (availableSupplies.has(recipe)) {
            return true;
        }

        if (!recipeToIngredients.has(recipe)) {
            return false;
        }

        visited.set(recipe, 0);

        for (let ingredient of recipeToIngredients.get(recipe)) {
            if (!canMake(ingredient)) {
                visited.set(recipe, -1);
                return false;
            }
        }

        visited.set(recipe, 1);
        result.push(recipe);
        return true;
    };

    for (let recipe of recipes) {
        canMake(recipe);
    }

    return result;
};