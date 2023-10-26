"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const Cart = ({ purchases, purchaseSum: purchseSum, onPurchaseDelete, }) => {
    const nullConverter = (num) => {
        if (num === "load") {
            return (num = 0);
        }
        else {
            return num;
        }
    };
    const productList = purchases.map((key, index) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, Object.assign({ md: 4, sm: 6, xs: 12, style: { listStyle: "none", textAlign: "center" } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "img-fluid", src: `data:image/jpeg;base64,${key.product.photo}` }), (0, jsx_runtime_1.jsx)("li", { children: key.product.product }), (0, jsx_runtime_1.jsxs)("li", { children: ["PRICE: ", nullConverter(key.product.price), " jpy"] }), (0, jsx_runtime_1.jsxs)("li", { children: ["AMMOUNT: ", key.purchaseAmmount] }), (0, jsx_runtime_1.jsxs)("li", { children: ["TOTAL PRICE:", nullConverter(key.product.price) * key.purchaseAmmount] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn btn btn-outline-dark", style: { padding: "2px" }, onClick: () => {
                    onPurchaseDelete(index);
                } }, { children: "delete" }))] }), key.product.productId)));
    const CartBody = () => {
        if (purchases.length === 0) {
            return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-1 text-center fw-normal" }, { children: "Your Cart is empty" })));
        }
        else {
            return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ md: 9, sm: 8, xs: 4, className: "border rounded-1 p-2" }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { children: productList }) })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Stack, Object.assign({ as: react_bootstrap_1.Col, gap: 2, className: "mx-3 p-0", md: 2, sm: 3, xs: 6, style: {
                            height: "fit-content",
                            position: "fixed",
                            top: "75px",
                            right: "20px",
                        } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "px-1", style: { color: "gray" } }, { children: ["ITEMS ", purchseSum.num] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "px-1", style: { color: "gray" } }, { children: ["TOTAL ", purchseSum.price, " JPY"] })), (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "btn btn-outline-secondary w-100 py-1", href: "/pay" }, { children: "Proceed to Buy" }))] }))] }));
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(CartBody, {}) }));
};
exports.Cart = Cart;
exports.default = exports.Cart;
