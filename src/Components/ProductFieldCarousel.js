"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_multi_carousel_1 = __importDefault(require("react-multi-carousel"));
require("react-multi-carousel/lib/styles.css");
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
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const ProductFieldCarousel = ({ products, handlePurchaseChange, }) => {
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
            } }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn btn btn-outline-dark", style: { padding: "2px" }, onClick: () => handlePurchaseChange({ purchase }) }, { children: "Add to Cart" })), (0, jsx_runtime_1.jsx)("input", { className: "ml-1", style: { width: "25%", textAlign: "center" }, type: "number", min: "1", max: props.product.ammount, defaultValue: "1", onChange: (event) => setValue(event.target.valueAsNumber) })] })));
    };
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { children: (0, jsx_runtime_1.jsx)(react_multi_carousel_1.default, Object.assign({ responsive: responsive }, { children: products.map((product) => ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ style: {
                    listStyle: "none",
                    textAlign: "center",
                } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "img-fluid", title: product.product + " pic", src: `data:image/jpeg;base64,${product.photo}` }), (0, jsx_runtime_1.jsx)("li", { children: product.product }), (0, jsx_runtime_1.jsxs)("li", { children: ["PRICE: ", product.price, " jpy"] }), (0, jsx_runtime_1.jsxs)("li", { children: ["REMAINING: ", product.ammount] }), (0, jsx_runtime_1.jsx)(PurchaseNum, { product: product })] }), product.productId))) })) }));
};
exports.default = ProductFieldCarousel;
