import React from "react";
import { useSelector } from "react-redux";
const ProductList=()=>{
    debugger;
    const userData = useSelector(state => state.loggedUserData);
    const loggeduserData=userData[0];
    return(
        <>
            <h1>Product listing element</h1>
            <h3>{loggeduserData.name}</h3>
        </>
    )
}
export default ProductList