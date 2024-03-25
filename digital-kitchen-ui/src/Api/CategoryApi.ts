import axios from "axios";

export type Category = {
    id: string;
    name:string;
}

const URL = 'http://localhost:8080/api/category'

const CategoryApi = {
    create(category: Category){
        return axios.post(URL, category)
            .then((response) => response.data);
    },
    getCategories(){
        return axios.get(URL)
            .then((response) => response.data);
    },
    delete(id:string){
        return axios.delete(`${URL}/${id}`);
    },
    update(category: Category){
        return axios.put(URL, category)
            .then((response) => response.data);
    },
}

export default CategoryApi