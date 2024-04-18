import React, {useContext, useEffect} from 'react';
import Header from  "./Components/Header/Header";
import "./App.css";
import CategoryContext from "./Components/Settings/SettingsPages/Category/CategoryContext";
import CategoryApi from "./Api/CategoryApi";
import {useUserStore} from "./Store/userStore";
import Login from "./Components/Login/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import RouterTabs from "./Components/Routes/RouterTabs";
import Settings from "./Components/Settings/Settings";
import CreateUser from "./Components/Login/Authorization/CreateUser";
import Home from "./Components/Home/Home";
import Recipes from "./Components/Recipes/Recipes";
import AllCategoriesList from "./Components/Home/Categories/AllCategoriesList";
import ProductsContext from "./Components/Settings/SettingsPages/Product/ProductContext";
import ProductApi from "./Api/ProductApi";
import RecipeApi from "./Api/RecipeApi";
import RecipesContext from "./Components/Recipes/RecipesContext";
import RecipePage from "./Components/Recipes/RecipePage/RecipePage";
import UsersContext from "./Components/Users/UsersContext";
import UserApi from "./Api/UserApi";

function App() {

    const {setCategories} = useContext(CategoryContext);
    const {setProducts} = useContext(ProductsContext);
    const {setRecipes} = useContext(RecipesContext);
    const {setUsers} = useContext(UsersContext);
    const {user} = useUserStore();

    useEffect(() => {
        UserApi.getUsers().then(setUsers);
        CategoryApi.getCategories().then(setCategories);
        ProductApi.getProducts().then(setProducts);
        RecipeApi.getRecipes().then(setRecipes);
    }, []);

    return (
        <>
            <Header />
            <BrowserRouter>
                {user && <RouterTabs/>}
                {user ? <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/recipes/:recipeId" element={<RecipePage/>}/>
                    <Route path="/home/categories" element={<AllCategoriesList/>}/>
                    {user?.role === 'ADMIN' ? <Route path="/settings" element={<Settings/>}/> : null}
                    <Route path="*" element={<Navigate to={'/home'}/>}/>
                </Routes>
                : <Routes>
                    <Route path="*" element={<Login/>}/>
                    <Route path="/create user" element={<CreateUser/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </>
    );
}

export default App;
