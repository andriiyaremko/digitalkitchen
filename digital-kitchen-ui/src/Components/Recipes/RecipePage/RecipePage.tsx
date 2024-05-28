import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import RecipeApi, {Recipe} from "../../../Api/RecipeApi";
import {ClockCircleFilled, InfoCircleFilled, ReconciliationFilled} from "@ant-design/icons";
import CategoryContext from "../../Settings/SettingsPages/Category/CategoryContext";
import './RecipePage.css'
import {Avatar, List} from "antd";
import ProductsContext from "../../Settings/SettingsPages/Product/ProductContext";
import {Rating} from "react-simple-star-rating";
import CommentsList from "../../Comments/CommentsList";
import NewComment from "../../Comments/NewComment";
import CommentsContext from "../../Comments/CommentsContext";
import CommentsApi from "../../../Api/CommentsApi";

const RecipePage = () => {

    const {recipeId} = useParams();
    const {categories} = useContext(CategoryContext);
    const {products} = useContext(ProductsContext);
    const {comments, setComments} = useContext(CommentsContext);

    const [calories, setCalories] = useState<number>(0);

    const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

    const [rating, setRating] = useState(0);

    useEffect(() => {
        RecipeApi.findById(recipeId!)
            .then(setRecipe)
    }, [recipeId]);

    useEffect(() => {
        let calories = recipe?.ingredients.reduce((acc, ingredient) => {
                return acc + Number(products.find(product => product.id === ingredient.productId)?.calories)/ Number(ingredient.value);
            },0);
        setCalories(calories || 0)
    }, [recipe]);

    useEffect(() => {
        if(recipeId){
            CommentsApi.getCommentsForRecipe(recipeId)
                .then(setComments)
        }
    }, [recipeId]);

    useEffect(() => {
        let rating = comments.reduce((acc, comment) =>{
            return acc + comment.rating;
        },0);
        setRating(rating / comments.length);
    }, [comments]);

    return (
        <div style={{backgroundColor:'#fff'}}>
            <h1>{recipe?.name}</h1>
            <Rating
                readonly={true}
                initialValue={rating || 0}
            />
            <div className='recipe-header'>
                <div className={'recipe-header-start'}>
                    <div className='recipe-information'>
                        <div className="recipe-info-block">
                            <Avatar style={{backgroundColor: '#7265e6', verticalAlign: 'middle'}} size="large" gap={4}>
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
                            <ReconciliationFilled style={{color: 'black'}}/>
                            <div className={'recipe-info-text'}>
                                <div>CALORIES</div>
                                <div>149</div>
                            </div>
                        </div>
                        <div className="recipe-info-block">
                            <InfoCircleFilled style={{color: 'black'}}/>
                            <div className={'recipe-info-text'}>
                                <div>{categories.find(cat => cat.id === recipe?.categoryId || '')?.name}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <pre  className='recipe-description'>
                            {`${recipe?.description}`}
                        </pre>
                    </div>
                </div>
                <div>
                    <img src={recipe?.image || "https://www.allrecipes.com/thmb/bpSBhLU5kqX-NIUqMNouJ3RdmoM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7546484_Bruschetta-Chicken-Pasta-Salad_Thedailygourmet_4x3-3f223c15733f4e9bba86e43803278cf7.jpg"} alt={recipe?.name}/>
                </div>
            </div>
            <div className={'recipe-ingredients'}>
                <h1>Ingredients</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={recipe?.ingredients}
                    renderItem={(item, index) => {
                        let product = products.find(product => product.id === item.productId);
                        return (<List.Item id={index.toString()}>
                            <List.Item.Meta
                                title={product?.name}
                                description={item.value + " " + product?.unit}
                            />
                        </List.Item>)
                    }}
                />
            </div>
            <NewComment recipeId={recipeId!}/>
            <CommentsList/>
        </div>
    );
}

export default RecipePage;