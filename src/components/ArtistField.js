"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const Stack_1 = __importDefault(require("react-bootstrap/Stack"));
const ProductFieldCarousel_1 = __importDefault(require("./ProductFieldCarousel"));
const ArtistField = ({ artistProducts }) => {
    const productList = artistProducts.map((products) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, Object.assign({ className: "list-group-item", style: { display: "flex" } }, { children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, Object.assign({ as: "ul", xs: 6, sm: 3, md: 3, style: {
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px 6px",
                    listStyle: "none",
                } }, { children: [(0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-monospace text-uppercase font-weight-bold", style: { fontSize: "1.5em" } }, { children: [products.artist.name, "'s Art"] })), (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-center" }, { children: [(0, jsx_runtime_1.jsx)("img", { style: { display: "block" }, className: "w-100", title: products.artist.name + " pic", src: `data:image/jpeg;base64 ,${products.artist.photo}` }), (0, jsx_runtime_1.jsxs)("p", { children: ["ARTIST: ", products.artist.name] })] }))] })), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ style: {
                    padding: "0px 0px",
                } }, { children: (0, jsx_runtime_1.jsx)(ProductFieldCarousel_1.default, { products: products.productEntityList }) }))] }), products.artist.artistId)
    // </ul>
    ));
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, Object.assign({ gap: 3, className: "list-group", as: "ul" }, { children: productList })));
};
exports.default = ArtistField;
