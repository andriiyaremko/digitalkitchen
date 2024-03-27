import axios from "axios";

export type Ingredient = {
    id:string;
    value:string;
    productId:string;
    recipeId:string;
}

export type Recipe = {
    id: string;
    name:string;
    image?:string;
    category:string;
    description:string;
    time:string;
    author:string;
    ingredients:Ingredient[];
}

const URL = 'http://localhost:8080/api/recipe'

const ProductApi = {
    create(recipe: Recipe){
        return axios.post(URL, recipe)
            .then((response) => response.data);
    },
    getRecipes(){
        return axios.get(URL)
            .then((response) => response.data);
    },
    delete(id:string){
        return axios.delete(`${URL}/${id}`);
    },
    update(recipe: Recipe){
        return axios.put(URL, recipe)
            .then((response) => response.data);
    },
    findById(id:string){
        return axios.get(`${URL}/${id}`)
            .then((response) =>response.data)
    }
}

export default ProductApi