"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistPrivate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProductTable_1 = __importDefault(require("./Components/ProductTable"));
function ArtistPrivate() {
    const [products, setProducts] = (0, react_1.useState)([
        {
            photo: "load",
            product: "load",
            price: "load",
        },
    ]);
    (0, react_1.useEffect)(() => {
        fetch("/artistPrivate")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("form", Object.assign({ action: "http://localhost:8080/logout" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit" }, { children: "logout" })) })), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ProductTable_1.default, { data: products }) }) })] }));
}
exports.ArtistPrivate = ArtistPrivate;
exports.default = ArtistPrivate;
