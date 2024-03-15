import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import ProductFieldCarousel from "./ProductFieldCarousel";
const ArtistField = ({ artistProducts, onPurchaseChange: handlePurchaseChange, }) => {
    const productList = artistProducts.map((products) => (
    // <ul
    //   className="list-group-item"
    //   key={products.artist.artistId}
    //   // style={{ margin: "0px 10px" }}
    // >
    _jsxs(Row, Object.assign({ className: "list-group-item", style: { display: "flex" } }, { children: [_jsxs(Col, Object.assign({ as: "ul", xs: 6, sm: 3, md: 3, style: {
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px 6px",
                    listStyle: "none",
                } }, { children: [_jsxs("li", Object.assign({ className: "text-monospace text-uppercase font-weight-bold", style: { fontSize: "1.5em" } }, { children: [products.artist.name, "'s Art"] })), _jsxs("li", Object.assign({ className: "text-center" }, { children: [_jsx("img", { style: { display: "block" }, className: "w-100", title: products.artist.name + " pic", src: `data:image/jpeg;base64 ,${products.artist.photo}` }), _jsxs("p", { children: ["ARTIST: ", products.artist.name] })] }))] })), _jsx(Col, Object.assign({ style: {
                    padding: "0px 0px",
                } }, { children: _jsx(ProductFieldCarousel, { products: products.productEntityList, onPurchaseChange: handlePurchaseChange }) }))] }), products.artist.artistId)
    // </ul>
    ));
    return (_jsx(Stack, Object.assign({ gap: 3, className: "list-group", as: "ul" }, { children: productList })));
};
export default ArtistField;
