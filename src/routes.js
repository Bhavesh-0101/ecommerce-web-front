import React from "react";
import { Routes, Route } from "react-router-dom"
import ProductList from "./Component/ProductList";

function Routers() {
    return (
        <Routes>
            <Route path={"/"} element={<ProductList/>}/>
        </Routes>
    )
}

export default Routers