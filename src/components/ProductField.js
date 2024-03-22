"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const ShoppingCartCheckout_1 = __importDefault(require("@mui/icons-material/ShoppingCartCheckout"));
const ProductField = ({ product, onPurchaseChange: handlePurchaseChange, }) => {
    const PurchaseNum = ({ product }) => {
        const [value, setValue] = (0, react_1.useState)(1);
        const purchase = {
            product: product,
            purchaseAmmount: value,
        };
        return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ style: {
                display: "flex",
                alignItems: "center",
            } }, { children: [(0, jsx_runtime_1.jsx)("input", { style: {
                        width: "30%",
                        height: "70%",
                        textAlign: "center",
                        padding: "0px",
                    }, type: "number", min: "1", max: product.ammount, defaultValue: "1", onChange: (event) => setValue(event.target.valueAsNumber) }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn", style: { padding: "2px" }, onClick: () => handlePurchaseChange(purchase) }, { children: (0, jsx_runtime_1.jsx)(ShoppingCartCheckout_1.default, {}) }))] })));
    };
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ as: "li", style: { listStyle: "none" } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                border: "solid",
                borderColor: "#DDDDDD",
                borderWidth: "0.5px",
                borderRadius: "10px",
            } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "img-fluid", title: product.product + " pic", src: `data:image/jpeg;base64,${product.photo}`, style: { padding: "8px 4px 0px 4px" } }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { padding: "0px 4px 0px 4px" } }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ style: { fontSize: "1.2em", fontWeight: "500" } }, { children: product.product })), (0, jsx_runtime_1.jsxs)("li", Object.assign({ style: { fontSize: "0.9em" } }, { children: ["Price: ", product.price, " jpy"] })), (0, jsx_runtime_1.jsxs)("li", Object.assign({ style: { fontSize: "0.9em" } }, { children: ["Remaining: ", product.ammount] })), (0, jsx_runtime_1.jsx)(PurchaseNum, { product: product })] }))] })) }), product.productId));
};
exports.default = ProductField;
