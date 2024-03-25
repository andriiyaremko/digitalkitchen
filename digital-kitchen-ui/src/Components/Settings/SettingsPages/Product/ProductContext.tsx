import React, {createContext, useState} from "react";
import {Product} from "../../../../Api/ProductApi";

export type ProductsContextType = {
    products: Product[],
    setProducts: (categories:Product[]) => void
}

const ProductsContext = createContext<ProductsContextType>(undefined!);

export const IngredientsProvider = ({children}: { children: JSX.Element }) => {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>{children}</ProductsContext.Provider>
    );
}

export default ProductsContext;