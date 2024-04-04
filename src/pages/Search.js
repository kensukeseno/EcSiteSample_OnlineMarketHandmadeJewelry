"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ProductField_1 = __importDefault(require("../components/ProductField"));
const SearchField = ({ products, onPurchaseChange: handlePurchaseChange, }) => {
    if (products.length === 0) {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-1 text-center fw-normal", style: { color: "#2994dc" } }, { children: "NO ITEM FOUND" })));
    }
    else {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                backgroundColor: "white",
                padding: "20px",
                justifyContent: "center",
            } }, { children: products.map((product) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "search-container" }, { children: (0, jsx_runtime_1.jsx)(ProductField_1.default, { product: product, onPurchaseChange: handlePurchaseChange }) }), product.productId))) })));
    }
};
exports.default = SearchField;
