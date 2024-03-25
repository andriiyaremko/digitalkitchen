import React, {createContext, useState} from "react";
import {Category} from "../../../../Api/CategoryApi";



export type CategoryContextType = {
    categories: Category[],
    setCategories: (categories:Category[]) => void
}

const CategoryContext = createContext<CategoryContextType>(undefined!);

export const CategoryProvider = ({children}: { children: JSX.Element }) => {
    const [categories, setCategories] = useState<Category[]>([]);

    return (
        <CategoryContext.Provider value={{categories, setCategories}}>{children}</CategoryContext.Provider>
    );
}

export default CategoryContext;