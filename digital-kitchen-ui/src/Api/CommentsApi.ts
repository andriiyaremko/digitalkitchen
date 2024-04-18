import axios from "axios";

export type Comment = {
    id:string;
    text:string;
    recipeId:string;
    authorId:string;
    rating: number;
}

const URL = 'http://localhost:8080/api/comments';

const CommentsApi ={
    create(comment:Comment){
        return axios.post(URL,comment)
            .then((response) => response.data);
    },
    getCommentsForRecipe(id:string){
        return axios.get(`${URL}/${id}`)
            .then((response) => response.data);
    },
    delete(id:string){
        axios.delete(`${URL}/${id}`);
    }
}

export default CommentsApi;