"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const ProductFiled = ({ products, handlePurchaseChange, }) => {
    const PurchaseNum = (props) => {
        const [value, setValue] = (0, react_1.useState)(1);
        const purchase = {
            product: props.product,
            purchaseAmmount: value,
        };
        return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn btn btn-outline-dark", style: { padding: "2px" }, onClick: () => handlePurchaseChange({ purchase }, "add") }, { children: "Add to Cart" })), (0, jsx_runtime_1.jsx)("input", { className: "ml-1", style: { width: "25%", textAlign: "center" }, type: "number", min: "1", max: props.product.ammount, defaultValue: "1", onChange: (event) => setValue(event.target.valueAsNumber) })] })));
    };
    if (products.length === 0) {
        return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-1 text-center fw-normal" }, { children: "NO ITEM FOUND" }));
    }
    else {
        return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { children: products.map((product) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, Object.assign({ as: "ul", md: 4, style: { listStyle: "none", textAlign: "center" } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "img-fluid", title: product.product + " pic", src: `data:image/jpeg;base64,${product.photo}` }), (0, jsx_runtime_1.jsx)("li", { children: product.product }), (0, jsx_runtime_1.jsxs)("li", { children: ["PRICE: ", product.price, " jpy"] }), (0, jsx_runtime_1.jsxs)("li", { children: ["REMAINING: ", product.ammount] }), (0, jsx_runtime_1.jsx)(PurchaseNum, { product: product })] }), product.productId))) }));
    }
};
exports.default = ProductFiled;
