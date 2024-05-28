import axios from "axios";

export type User ={
    id:string;
    password:string;
    firstname:string;
    lastname:string;
    email:string;
    role:"USER" | "ADMIN";
}


const URL = 'http://localhost:8080/api/users';

const UserApi = {
    create(user: User){
        return axios.post(URL, user)
            .then((response) => response.data);
    },
    getUsers(){
        return axios.get(URL)
            .then((response) => response.data);
    },
    delete(id:string){
        return axios.delete(`${URL}/${id}`);
    },
    update(user: User){
        return axios.put(URL, user)
            .then((response) => response.data);
    },
    login(email: string, password: string){
        return axios.post(`${URL}/login`,{email:email, password:password})
            .then((response) => response.data);
    }
}

export default UserApi;
