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
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import AllCategoriesList from "./Components/Home/Categories/AllCategoriesList";
import ProductsContext from "./Components/Settings/SettingsPages/Product/ProductContext";
import ProductApi from "./Api/ProductApi";
import RecipeApi from "./Api/RecipeApi";
import RecipesContext from "./Components/Recipes/RecipesContext";

function App() {

    const {setCategories} = useContext(CategoryContext);
    const {setProducts} = useContext(ProductsContext);
    const {setRecipes} = useContext(RecipesContext)
    const {user} = useUserStore();


    useEffect(() => {
        CategoryApi.getCategories().then(setCategories);
        ProductApi.getProducts().then(setProducts);
        RecipeApi.getRecipes().then(setRecipes);
    }, []);

    return (
        <>
            <Header />
            <BrowserRouter>
                {user && <RouterTabs/>}
                <Routes>
                    <Route path="/login" element={user ? <Navigate to={'/'}/> : <Login />} />
                    <Route path="/create user" element={<CreateUser/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="/allcategories" element={<AllCategoriesList/>}/>
                    {user?.role === 'ADMIN' ? <Route path="/settings" element={<Settings/>}/> : null}
                    <Route path="*" element={user ? <Navigate to={'/home'}/> :<Navigate to={'/login'}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
