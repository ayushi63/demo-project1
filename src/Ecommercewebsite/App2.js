import React from "react";
import Dashbord from "./Dashbord";
import Footer from "./Footer"; 
import Header from "./Header";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App2() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/:id" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App2;