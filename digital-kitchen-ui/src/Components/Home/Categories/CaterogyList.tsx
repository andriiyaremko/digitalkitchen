import './Category.css'

import React, {useContext} from "react";
import CategoryContext from "../../Settings/SettingsPages/Category/CategoryContext";
import Category from "./Category";
import {Button} from "antd";
import {Link} from "react-router-dom";

const CaterogyList = () => {
    const {categories} = useContext(CategoryContext)
    return (
        <div className='category-block'>
            <div className='category-block-header'>
                <h2>Categories</h2>
                <Link to={'/allcategories'}>
                    <Button className='category-header-link'>View All Categories</Button>
                </Link>
            </div>
            <div className='category-list'>
                {
                    categories.slice(0, categories.length > 5 ? 5 : categories.length).map(cat =>{
                        return (<Category name={cat.name} description={cat.name}/>)
                    })
                }
            </div>
        </div>
    );
}

export default CaterogyList;