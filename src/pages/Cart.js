import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
export const Cart = ({ purchases, purchaseSum: purchseSum, onPurchaseDelete, }) => {
    const nullConverter = (num) => {
        if (num === "load") {
            return (num = 0);
        }
        else {
            return num;
        }
    };
    const productList = purchases.map((key, index) => (_jsxs(Col, Object.assign({ md: 4, sm: 6, xs: 12, style: {
            listStyle: "none",
            textAlign: "left",
        } }, { children: [_jsx("img", { className: "img-fluid", src: `data:image/jpeg;base64,${key.product.photo}` }), _jsx("li", { children: key.product.product }), _jsxs("li", { children: ["Price: ", nullConverter(key.product.price), " jpy"] }), _jsxs("li", { children: ["Ammount: ", key.purchaseAmmount] }), _jsxs("li", { children: ["Total Price:", nullConverter(key.product.price) * key.purchaseAmmount] }), _jsx("button", Object.assign({ type: "button", className: "btn", style: { padding: "2px", float: "right" }, onClick: () => {
                    onPurchaseDelete(index);
                } }, { children: _jsx(DeleteSharpIcon, {}) }))] }), key.product.productId)));
    const CartBody = () => {
        if (purchases.length === 0) {
            return (_jsx("div", Object.assign({ className: "fs-1 text-center fw-normal", style: { color: "#2994dc" } }, { children: "No Item in Cart" })));
        }
        else {
            return (_jsxs(Row, { children: [_jsx(Col, Object.assign({ md: 8, sm: 8, xs: 6, className: "border rounded-1 p-2", style: { backgroundColor: "white" } }, { children: _jsx(Row, { children: productList }) })), _jsxs(Col, Object.assign({ className: "mx-3", md: 3, sm: 3, xs: 5, style: {
                            height: "fit-content",
                            position: "fixed",
                            top: "80px",
                            right: "5px",
                            backgroundColor: "white",
                            padding: "5px 5px",
                            borderRadius: "4px",
                        } }, { children: [_jsxs("div", Object.assign({ className: "px-1" }, { children: ["Items ", purchseSum.num] })), _jsxs("div", Object.assign({ className: "px-1" }, { children: ["Total ", purchseSum.price, " JPY"] })), _jsx("a", Object.assign({ className: "btn btn-outline-secondary w-100 py-1", style: {
                                    color: "#0D9276",
                                    borderColor: "#0D9276",
                                    borderWidth: "2px",
                                }, href: "/pay" }, { children: "Proceed to Buy" }))] }))] }));
        }
    };
    return (_jsx(_Fragment, { children: _jsx(CartBody, {}) }));
};
export default Cart;
