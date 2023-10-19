"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const Cart = ({ purchases, purchaseSum: purchseSum, }) => {
    const nullConverter = (num) => {
        if (num === "load") {
            return (num = 0);
        }
        else {
            return num;
        }
    };
    const productList = purchases.map((purchase) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, Object.assign({ md: 4, style: { listStyle: "none", textAlign: "center" } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "img-fluid", src: `data:image/jpeg;base64,${purchase.product.photo}` }), (0, jsx_runtime_1.jsx)("li", { children: purchase.product.product }), (0, jsx_runtime_1.jsxs)("li", { children: ["PRICE: ", nullConverter(purchase.product.price), " jpy"] }), (0, jsx_runtime_1.jsxs)("li", { children: ["AMMOUNT: ", purchase.purchaseAmmount] }), (0, jsx_runtime_1.jsxs)("li", { children: ["TOTAL PRICE:", nullConverter(purchase.product.price) * purchase.purchaseAmmount] })] }), purchase.product.productId)));
    const CartBody = () => {
        if (purchases.length === 0) {
            return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-1 text-center fw-normal" }, { children: "Your Cart is empty" })));
        }
        else {
            return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ md: 9 }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { children: productList }) })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Stack, Object.assign({ as: react_bootstrap_1.Col, gap: 2, className: "mt-5", md: 3, style: { height: "fit-content" } }, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, Object.assign({ className: "w-100 font-weight-bold", variant: "primary", style: { borderRadius: "0px" } }, { children: "Proceed to Buy" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "fw-bold" }, { children: ["ITEMS", (0, jsx_runtime_1.jsxs)("span", Object.assign({ style: { color: "red" } }, { children: [" ", purchseSum.num] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "fw-bold" }, { children: ["TOTAL", (0, jsx_runtime_1.jsxs)("span", Object.assign({ style: { color: "red" } }, { children: [" ", purchseSum.price, " JPY"] }))] })), (0, jsx_runtime_1.jsx)("div", { style: { height: "12px", backgroundColor: "#0d6efd" } })] }))] }) }));
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(CartBody, {}) }));
};
exports.Cart = Cart;
exports.default = exports.Cart;
