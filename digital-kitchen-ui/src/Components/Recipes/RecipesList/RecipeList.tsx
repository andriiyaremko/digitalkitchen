import "../Recipe.css";

import React, {useContext, useEffect, useState} from "react";
import RecipesContext from "../RecipesContext";
import {Card} from "antd";
import {useNavigate, useSearchParams} from "react-router-dom";
import RecipeApi, {Recipe} from "../../../Api/RecipeApi";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {useUserStore} from "../../../Store/userStore";

const RecipeList = () => {

    const {recipes, favorites, setFavorites} = useContext(RecipesContext);
    const {user} = useUserStore();
    const navigate = useNavigate();

    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");

    useEffect(() => {
        if (category){
            setFilteredRecipes(recipes.filter(rec => rec.categoryId === category))
        }else setFilteredRecipes(recipes);
    }, [recipes]);

    return (
        <div style={{display:"flex", gap:'50px', flexWrap:'wrap'}}>
            {filteredRecipes.map(recipe => {
                return (

                    <Card
                        key={recipe.id}
                        style={{width: "30%", cursor: 'pointer'}}
                        onClick={() => navigate(`/recipes/${recipe.id}`)}
                        title={
                            <>
                                <img style={{width: '100%'}}
                                     src={recipe?.image || "https://www.allrecipes.com/thmb/bpSBhLU5kqX-NIUqMNouJ3RdmoM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7546484_Bruschetta-Chicken-Pasta-Salad_Thedailygourmet_4x3-3f223c15733f4e9bba86e43803278cf7.jpg"}
                                     alt=""
                                />
                                {favorites.find(rec=> rec.recipeId === recipe?.id) ? <HeartFilled
                                    style={{
                                        position:'absolute',
                                        top:"10px",
                                        right:"10px",
                                        zIndex:"100",
                                        color:"red",
                                        fontSize: "40px",
                                        cursor: "pointer",
                                    }}
                                /> : <HeartOutlined
                                    style={{
                                        position:'absolute',
                                        top:"10px",
                                        right:"10px",
                                        zIndex:"100",
                                        color:"red",
                                        fontSize: "40px",
                                        cursor: "pointer"
                                    }}
                                />}
                            </>
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
            })}
        </div>
    );
}

export default RecipeList;