import { jsx as _jsx } from "react/jsx-runtime";
import ProductField from "../components/ProductField";
const SearchField = ({ products, onPurchaseChange: handlePurchaseChange, }) => {
    if (products.length === 0) {
        return _jsx("div", Object.assign({ className: "fs-1 text-center fw-normal" }, { children: "NO ITEM FOUND" }));
    }
    else {
        return (_jsx("div", Object.assign({ style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                backgroundColor: "white",
                padding: "20px",
                justifyContent: "center",
            } }, { children: products.map((product) => (_jsx("div", Object.assign({ className: "search-container" }, { children: _jsx(ProductField, { product: product, onPurchaseChange: handlePurchaseChange }) })))) })));
    }
};
export default SearchField;
