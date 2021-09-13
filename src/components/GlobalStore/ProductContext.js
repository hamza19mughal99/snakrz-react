import React, { createContext } from 'react';
import { Menu } from "../Restaurant/MenuData";

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    console.log(Menu)
    return (
        <>
            <ProductContext.Provider value={
               {menu: [...Menu]}
            }>
               {props.children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider;