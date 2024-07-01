import React, {createContext, useState} from "react";
import {Recipe} from "../../Api/RecipeApi";

export type RecipeContextType = {
    recipes: Recipe[],
    setRecipes: (recipes:Recipe[]) => void,
    favorites: favoriteRecipes[],
    setFavorites: (favorite: favoriteRecipes[]) => void,
}

export type favoriteRecipes = {
    id: string,
    recipeId: string,
    personId: string,
}
const RecipeContext = createContext<RecipeContextType>(undefined!);

export const RecipeProvider = ({children}: { children: JSX.Element }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [favorites, setFavorites] = useState<favoriteRecipes[]>([]);

    return (
        <RecipeContext.Provider value={{recipes, setRecipes, favorites, setFavorites}}>{children}</RecipeContext.Provider>
    );
}

export default RecipeContext;