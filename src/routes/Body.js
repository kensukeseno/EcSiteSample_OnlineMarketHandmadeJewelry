"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("../pages/Home");
const Product_1 = require("../pages/Product");
const Cart_1 = require("../pages/Cart");
const Pay_1 = require("../pages/Pay");
const react_1 = require("react");
function Body() {
    const [productsInCart, setProductsInCart] = (0, react_1.useState)([]);
    const [cart, setCart] = (0, react_1.useState)({ num: 0, price: 0 });
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
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: { fontSize: "15px" } }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.Home, { onPurchaseChange: handlePurchaseChange }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product", element: (0, jsx_runtime_1.jsx)(Product_1.Product, { onPurchaseChange: handlePurchaseChange }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart", element: (0, jsx_runtime_1.jsx)(Cart_1.Cart, { purchases: productsInCart, purchaseSum: cart, onPurchaseDelete: handlePurchaseDelete }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/pay", element: (0, jsx_runtime_1.jsx)(Pay_1.Pay, {}) })] }) })));
}
exports.Body = Body;
exports.default = Body;
