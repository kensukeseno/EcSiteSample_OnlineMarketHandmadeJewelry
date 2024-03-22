"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const DeleteSharp_1 = __importDefault(require("@mui/icons-material/DeleteSharp"));
const Cart = ({ purchases, purchaseSum: purchseSum, onPurchaseDelete, }) => {
    const nullConverter = (num) => {
        if (num === "load") {
            return (num = 0);
        }
        else {
            return num;
        }
    };
    const productList = purchases.map((key, index) => ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, Object.assign({ md: 4, sm: 6, xs: 12, style: {
            listStyle: "none",
            textAlign: "left",
        } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "img-fluid", src: `data:image/jpeg;base64,${key.product.photo}` }), (0, jsx_runtime_1.jsx)("li", { children: key.product.product }), (0, jsx_runtime_1.jsxs)("li", { children: ["Price: ", nullConverter(key.product.price), " jpy"] }), (0, jsx_runtime_1.jsxs)("li", { children: ["Ammount: ", key.purchaseAmmount] }), (0, jsx_runtime_1.jsxs)("li", { children: ["Total Price:", nullConverter(key.product.price) * key.purchaseAmmount] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn", style: { padding: "2px", float: "right" }, onClick: () => {
                    onPurchaseDelete(index);
                } }, { children: (0, jsx_runtime_1.jsx)(DeleteSharp_1.default, {}) }))] }), key.product.productId)));
    const CartBody = () => {
        if (purchases.length === 0) {
            return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-1 text-center fw-normal", style: { color: "#2994dc" } }, { children: "No Item in Cart" })));
        }
        else {
            return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ md: 8, sm: 8, xs: 6, className: "border rounded-1 p-2", style: { backgroundColor: "white" } }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { children: productList }) })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, Object.assign({ className: "mx-3", md: 3, sm: 3, xs: 5, style: {
                            height: "fit-content",
                            position: "fixed",
                            top: "80px",
                            right: "5px",
                            backgroundColor: "white",
                            padding: "5px 5px",
                            borderRadius: "4px",
                        } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "px-1" }, { children: ["Items ", purchseSum.num] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "px-1" }, { children: ["Total ", purchseSum.price, " JPY"] })), (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "btn btn-outline-secondary w-100 py-1", style: {
                                    color: "#0D9276",
                                    borderColor: "#0D9276",
                                    borderWidth: "2px",
                                }, href: "/pay" }, { children: "Proceed to Buy" }))] }))] }));
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(CartBody, {}) }));
};
exports.Cart = Cart;
exports.default = exports.Cart;
