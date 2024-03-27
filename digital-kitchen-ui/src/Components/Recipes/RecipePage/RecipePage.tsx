import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import RecipeApi, {Recipe} from "../../../Api/RecipeApi";
import {ClockCircleFilled, InfoCircleFilled} from "@ant-design/icons";
import CategoryContext from "../../Settings/SettingsPages/Category/CategoryContext";
import './RecipePage.css'
import {Avatar, List} from "antd";
import ProductsContext from "../../Settings/SettingsPages/Product/ProductContext";

const RecipePage = () => {

    const {recipeId} = useParams();
    const {categories} =useContext(CategoryContext);
    const {products} = useContext(ProductsContext);

    const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

    useEffect(() => {
        RecipeApi.findById(recipeId || '')
            .then(data =>{setRecipe(data)})
    }, [recipeId]);


    return (
        <div>
            <h1>{recipe?.name}</h1>
            <div className='recipe-information'>
                <div className="recipe-info-block">
                    <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size="large" gap={4}>
                        Andrii
                    </Avatar>
                </div>
                <div className="recipe-info-block">
                    <ClockCircleFilled style={{color: 'black'}}/>
                    <div className={'recipe-info-text'}>
                        <div>COOK TIME</div>
                        <div>{recipe?.time} minutes</div>
                    </div>
                </div>
                <div className="recipe-info-block">
                    <InfoCircleFilled style={{color: 'black'}}/>
                    <div className={'recipe-info-text'}>
                        <div>{categories.find(cat => cat.id === recipe?.category || '')?.name}</div>
                    </div>
                </div>
            </div>
            <div className='recipe-description'>
                {recipe?.description}
            </div>
            <div className={'recipe-ingredients'}>
                <h1>Ingredients</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={recipe?.ingredients}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                title={products.find(product=> product.id === item.productId)?.name}
                                description={item.value}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default RecipePage;