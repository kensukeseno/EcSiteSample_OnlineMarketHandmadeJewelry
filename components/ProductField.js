import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Col } from "react-bootstrap";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const ProductField = ({ product, onPurchaseChange: handlePurchaseChange, }) => {
    const PurchaseNum = ({ product }) => {
        const [value, setValue] = useState(1);
        const purchase = {
            product: product,
            purchaseAmmount: value,
        };
        return (_jsxs("li", Object.assign({ style: {
                display: "flex",
                alignItems: "center",
            } }, { children: [_jsx("input", { style: {
                        width: "30%",
                        height: "70%",
                        textAlign: "center",
                        padding: "0px",
                    }, type: "number", min: "1", max: product.ammount, defaultValue: "1", onChange: (event) => setValue(event.target.valueAsNumber) }), _jsx("button", Object.assign({ type: "button", className: "btn", style: { padding: "2px" }, onClick: () => handlePurchaseChange(purchase) }, { children: _jsx(ShoppingCartCheckoutIcon, {}) }))] })));
    };
    return (_jsx(Col, Object.assign({ as: "li", style: { listStyle: "none" } }, { children: _jsxs("div", Object.assign({ style: {
                border: "solid",
                borderColor: "#DDDDDD",
                borderWidth: "0.5px",
                borderRadius: "10px",
            } }, { children: [_jsx("img", { className: "img-fluid", title: product.product + " pic", src: `data:image/jpeg;base64,${product.photo}`, style: { padding: "8px 4px 0px 4px" } }), _jsxs("div", Object.assign({ style: { padding: "0px 4px 0px 4px" } }, { children: [_jsx("li", Object.assign({ style: { fontSize: "1.2em", fontWeight: "500" } }, { children: product.product })), _jsxs("li", Object.assign({ style: { fontSize: "0.9em" } }, { children: ["Price: ", product.price, " jpy"] })), _jsxs("li", Object.assign({ style: { fontSize: "0.9em" } }, { children: ["Remaining: ", product.ammount] })), _jsx(PurchaseNum, { product: product })] }))] })) }), product.productId));
};
export default ProductField;
