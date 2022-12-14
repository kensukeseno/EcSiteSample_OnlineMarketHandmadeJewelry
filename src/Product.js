"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const ProductTable_1 = __importDefault(require("./Components/ProductTable"));
function Product() {
    const search = (0, react_router_dom_1.useLocation)().search;
    const name = new URLSearchParams(search).get("name");
    console.log(name);
    const [products, setProducts] = (0, react_1.useState)([
        {
            product: "load",
            photo: "load",
            price: "load",
        },
    ]);
    (0, react_1.useEffect)(() => {
        fetch(`/product?artist=${name}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ProductTable_1.default, { data: products }) }) }));
}
exports.Product = Product;
exports.default = Product;
