"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("./Home");
const Product_1 = require("./Product");
const Cart_1 = require("./Cart");
const react_1 = require("react");
function Body() {
    const [purchases, setPurchases] = (0, react_1.useState)([]);
    const [purchaseSum, setPurchaseSum] = (0, react_1.useState)({ num: 0, price: 0 });
    const handlePurchaseChange = (props) => {
        let newPurchaseflag = true;
        purchases.map((p) => {
            if (p.product.productId === props.purchase.product.productId) {
                p.purchaseAmmount += props.purchase.purchaseAmmount;
                newPurchaseflag = false;
            }
        });
        if (newPurchaseflag) {
            setPurchases((prevPurchase) => [...prevPurchase, props.purchase]);
        }
        purshcaseSum();
    };
    const purshcaseSum = () => {
        let itemCount = 0;
        let priceCount = 0;
        purchases.map((p) => {
            itemCount += p.purchaseAmmount;
            if (p.product.price === "load")
                throw new Error("Not number");
            priceCount += p.product.price * p.purchaseAmmount;
        });
        setPurchaseSum({ num: itemCount, price: priceCount });
    };
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.Home, { onPurchaseChange: handlePurchaseChange }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product", element: (0, jsx_runtime_1.jsx)(Product_1.Product, { onPurchaseChange: handlePurchaseChange }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart", element: (0, jsx_runtime_1.jsx)(Cart_1.Cart, { purchases: purchases, purchaseSum: purchaseSum, onPurchaseChange: handlePurchaseChange }) })] }));
}
exports.Body = Body;
exports.default = Body;
