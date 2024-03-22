"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Search_1 = __importDefault(require("./Search"));
const application_1 = require("../properties/application");
const backendUrl = process.env.NODE_ENV === "development"
    ? application_1.BACKEND_URL_DEVELOPMENT
    : application_1.BACKEND_URL_PRODUCTION;
const Product = ({ onPurchaseChange: handlePurchaseChange, }) => {
    const search = (0, react_router_dom_1.useLocation)().search;
    const product = new URLSearchParams(search).get("product");
    const [products, setProducts] = (0, react_1.useState)([
        {
            product: "load",
            ammount: "load",
            photo: "load",
            productId: "load",
            price: "load",
            artistId: "load",
        },
    ]);
    (0, react_1.useEffect)(() => {
        fetch(backendUrl + `/product?product=${product}`)
            .then((res) => res.json())
            .then((data) => {
            setProducts(data);
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Search_1.default, { products: products, onPurchaseChange: handlePurchaseChange }) }));
};
exports.Product = Product;
