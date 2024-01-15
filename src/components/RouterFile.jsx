import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import RequireAuth from "./RequireAuth";

const RouterFile = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default RouterFile
