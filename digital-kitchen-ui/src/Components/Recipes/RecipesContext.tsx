import React, {createContext, useState} from "react";
import {Recipe} from "../../Api/RecipeApi";

export type RecipeContextType = {
    recipes: Recipe[],
    setRecipes: (recipes:Recipe[]) => void
}

const RecipeContext = createContext<RecipeContextType>(undefined!);

export const RecipeProvider = ({children}: { children: JSX.Element }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    return (
        <RecipeContext.Provider value={{recipes, setRecipes}}>{children}</RecipeContext.Provider>
    );
}

export default RecipeContext;