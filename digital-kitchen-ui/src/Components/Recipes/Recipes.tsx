import "./Recipe.css"

import React, {useState} from "react";
import RecipeList from "./RecipesList/RecipeList";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import RecipeModal from "./RecipeModal/RecipeModal";

const Recipes = () => {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='recipe-header'>
                <h1>Recipes</h1>
                <Button type='primary' onClick={() => setOpen(true)}>
                    <PlusOutlined/>
                    New
                </Button>
            </div>
            <RecipeList/>
            <RecipeModal open={open} onDone={()=>setOpen(false)}/>
        </div>
    );
}

export default Recipes;