"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_multi_carousel_1 = __importDefault(require("react-multi-carousel"));
require("react-multi-carousel/lib/styles.css");
const ProductField_1 = __importDefault(require("./ProductField"));
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 576 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
    },
};
const ProductFieldCarousel = ({ products, onPurchaseChange: handlePurchaseChange, }) => {
    return ((0, jsx_runtime_1.jsx)(react_multi_carousel_1.default, Object.assign({ responsive: responsive }, { children: products.map((product) => ((0, jsx_runtime_1.jsx)(ProductField_1.default, { product: product, onPurchaseChange: handlePurchaseChange }))) })));
};
exports.default = ProductFieldCarousel;
