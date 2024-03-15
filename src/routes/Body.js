import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Pay } from "../pages/Pay";
import { useState } from "react";
export function Body() {
    const [productsInCart, setProductsInCart] = useState([]);
    const [cart, setCart] = useState({ num: 0, price: 0 });
    // This method is called when a new item is added to cart
    const handlePurchaseChange = (purchase) => {
        let newPurchaseflag = true;
        productsInCart.map((p) => {
            // If the same item is already in cart, add the number of products
            // If not, add the new item as a new item in the list
            if (p.product.productId === purchase.product.productId) {
                p.purchaseAmmount += purchase.purchaseAmmount;
                newPurchaseflag = false;
            }
        });
        if (newPurchaseflag) {
            setProductsInCart((prevPurchase) => [...prevPurchase, purchase]);
        }
        // Update cart infomation
        if (purchase.product.price === "load")
            throw new Error("Not number");
        setCart({
            num: cart.num + purchase.purchaseAmmount,
            price: cart.price + purchase.purchaseAmmount * purchase.product.price,
        });
    };
    // Delete product in cart (one kind at a time)
    const handlePurchaseDelete = (deleteIndex) => {
        let deleteItemNum = productsInCart[deleteIndex].purchaseAmmount;
        let deleteItemPrice;
        const deletedArr = productsInCart.filter((key, index) => {
            if (index === deleteIndex) {
                deleteItemNum = key.purchaseAmmount;
                if (key.product.price === "load")
                    throw new Error("Not number");
                deleteItemPrice = key.product.price * key.purchaseAmmount;
                setCart({
                    num: cart.num - deleteItemNum,
                    price: cart.price - deleteItemPrice,
                });
            }
            else {
                return key;
            }
        });
        setProductsInCart(deletedArr);
    };
    return (_jsx("div", Object.assign({ style: { fontSize: "15px" } }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, { onPurchaseChange: handlePurchaseChange }) }), _jsx(Route, { path: "/product", element: _jsx(Product, { onPurchaseChange: handlePurchaseChange }) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, { purchases: productsInCart, purchaseSum: cart, onPurchaseDelete: handlePurchaseDelete }) }), _jsx(Route, { path: "/pay", element: _jsx(Pay, {}) })] }) })));
}
export default Body;
