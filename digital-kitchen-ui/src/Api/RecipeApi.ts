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
    categoryId:string;
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
    },
    findFavorites(id:string){
        return axios.get(`${URL}/favorite/${id}`)
            .then((response) =>response.data)
    },
    addToFavorite(data:{id:string, recipeId:string, personId:string}){
        return axios.post(`${URL}/favorite`, data)
            .then((response) =>response.data)
    },
    removeFromFavorite(id:string){
        return axios.delete(`${URL}/favorite/${id}`);
    }
}

export default ProductApi