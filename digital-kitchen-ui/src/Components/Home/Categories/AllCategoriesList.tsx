import React, {useContext} from "react";
import CategoryContext from "../../Settings/SettingsPages/Category/CategoryContext";
import Category from "./Category";

const AllCategoriesList = () => {
    const {categories} = useContext(CategoryContext)
    return (
        <div className='category-block'>
            <div className='category-block-header'>
                <h2>Categories</h2>
            </div>
            <div className='category-list'>
                {
                    categories.map(cat =>{
                        return (<Category name={cat.name} description={cat.name}/>)
                    })
                }
            </div>
        </div>
    );
}

export default AllCategoriesList;