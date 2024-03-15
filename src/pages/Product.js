import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchField from "./Search";
import { BACKEND_URL_DEVELOPMENT, BACKEND_URL_PRODUCTION, } from "../properties/application";
const backendUrl = process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;
export const Product = ({ onPurchaseChange: handlePurchaseChange, }) => {
    const search = useLocation().search;
    const product = new URLSearchParams(search).get("product");
    const [products, setProducts] = useState([
        {
            product: "load",
            ammount: "load",
            photo: "load",
            productId: "load",
            price: "load",
            artistId: "load",
        },
    ]);
    useEffect(() => {
        fetch(backendUrl + `/product?product=${product}`)
            .then((res) => res.json())
            .then((data) => {
            setProducts(data);
        });
    }, []);
    return (_jsx(_Fragment, { children: _jsx(SearchField, { products: products, onPurchaseChange: handlePurchaseChange }) }));
};
