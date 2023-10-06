"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const Stack_1 = __importDefault(require("react-bootstrap/Stack"));
const ProductFieldCarousel_1 = __importDefault(require("./ProductFieldCarousel"));
const ArtistField = ({ artistProducts, handlePurchaseChange, }) => {
    const productList = artistProducts.map((products) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "list-group-item list-group-item-light" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "text-monospace text-uppercase font-weight-bold", style: { fontSize: "1.5em" } }, { children: [products.artist.name, "'s section"] })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ xs: 4, style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "text-center" }, { children: [(0, jsx_runtime_1.jsx)("img", { style: { display: "block" }, className: "w-100", title: products.artist.name + " pic", src: `data:image/jpeg;base64 ,${products.artist.photo}` }), (0, jsx_runtime_1.jsxs)("p", { children: ["ARTIST: ", products.artist.name] })] })) })), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsx)(ProductFieldCarousel_1.default, { products: products.productEntityList, handlePurchaseChange: handlePurchaseChange }) })] })] }), products.artist.artistId)));
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, Object.assign({ gap: 3, className: "list-group", as: "ul" }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "list-group" }, { children: productList })) })));
};
exports.default = ArtistField;
