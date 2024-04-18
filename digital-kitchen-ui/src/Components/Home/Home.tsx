import React from "react";
import CaterogyList from "./Categories/CaterogyList";
import RecipesForYou from "./Recipes/RecipesForYou";

const Home = () => {

    return (
        <div>
            <CaterogyList/>
            <h2 style={{marginTop:"100px"}}>Recipes for you</h2>
            <RecipesForYou/>
        </div>
    );
}

export default Home;