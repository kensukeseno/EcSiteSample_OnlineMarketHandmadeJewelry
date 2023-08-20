"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
function Product(props) {
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
    const [listLen, setListLen] = (0, react_1.useState)(0);
    const [nowPosition, setNowPosition] = (0, react_1.useState)(0);
    const showListLen = 3;
    const [modifiedProducts, setModifiedProducts] = (0, react_1.useState)([
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
        fetch(`/product?product=${product}`)
            .then((res) => res.json())
            .then((data) => {
            setProducts(data);
            setListLen(data.length);
            console.log("a");
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { children: listLen }) }));
}
exports.Product = Product;
