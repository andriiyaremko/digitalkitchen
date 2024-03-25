import React, {useContext} from "react";
import RecipesContext from "../RecipesContext";
import {Card} from "antd";

const RecipeList = () => {

    const {recipes} = useContext(RecipesContext)

    return (
        <div style={{display:"flex", gap:'50px', flexWrap:'wrap'}}>
            {recipes.map(recipe => {
                return (
                    <Card key={recipe.id} style={{width:"30%"}} title={recipe.name}>
                        {recipe.description}
                    </Card>
                )
            })}
        </div>
    );
}

export default RecipeList;