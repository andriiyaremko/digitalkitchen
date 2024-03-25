import axios from "axios";

export type Product = {
    id: string;
    name:string;
    image?: string;
    categoryId:string;
    unit:string;
}

const URL = 'http://localhost:8080/api/product'

const ProductApi = {
    create(ingredient: Product){
        return axios.post(URL, ingredient)
            .then((response) => response.data);
    },
    getProducts(){
        return axios.get(URL)
            .then((response) => response.data);
    },
    delete(id:string){
        return axios.delete(`${URL}/${id}`);
    },
}

export default ProductApi