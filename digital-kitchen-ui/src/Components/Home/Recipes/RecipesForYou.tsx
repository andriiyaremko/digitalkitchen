import React, {useContext} from "react";
import RecipesContext from "../../Recipes/RecipesContext";
import {Card} from "antd";
import {useNavigate} from "react-router-dom";

const RecipesForYou = () => {
    const { recipes} = useContext(RecipesContext);

    const navigate = useNavigate();

    return (
        <div style={{display: "flex", gap: '50px', flexWrap: 'wrap', marginTop:"50px"}}>
            {recipes.slice(0, recipes.length > 2 ? 2 : recipes.length).map(recipe => {
                    return (
                        <Card
                            key={recipe.id}
                            style={{width: "30%", cursor: 'pointer'}}
                            onClick={() => navigate(`/recipes/${recipe.id}`)}
                            title={
                                <img style={{width: '100%'}} src={recipe.image} alt=""/>
                            }
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    {recipe.name}
                                </div>
                                <div>
                                    {recipe.time} minutes
                                </div>
                            </div>
                        </Card>
                    )
            })
            }
        </div>
    )
}

export default RecipesForYou