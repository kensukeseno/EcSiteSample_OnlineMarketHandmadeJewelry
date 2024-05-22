import React, { useState, useContext } from "react";
import {
  TypeProduct,
  TypeProductInCart,
  TypeProductField,
  TypePurchaseNum,
} from "./types/Types";
import { Col } from "react-bootstrap";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { HandlePurchaseChangeContext } from "../routes/Body";

const ProductField: React.FC<TypeProductField> = ({ product }) => {
  const handlePurchaseChange = useContext(HandlePurchaseChangeContext);
  const PurchaseNum: React.FC<TypePurchaseNum> = ({ product }) => {
    const [value, setValue] = useState<number>(1);
    const purchase: TypeProductInCart = {
      product: product,
      purchaseAmmount: value,
    };

    return (
      <li
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "30%",
            height: "70%",
            textAlign: "center",
            padding: "0px",
          }}
          type="number"
          min="1"
          max={product.ammount}
          defaultValue="1"
          onChange={(event) => setValue(event.target.valueAsNumber)}
        ></input>
        <button
          type="button"
          className="btn"
          style={{ padding: "2px" }}
          onClick={() => handlePurchaseChange(purchase)}
        >
          <ShoppingCartCheckoutIcon />
        </button>
      </li>
    );
  };
  return (
    <Col style={{ listStyle: "none" }}>
      <div
        style={{
          border: "solid",
          borderColor: "#DDDDDD",
          borderWidth: "0.5px",
          borderRadius: "10px",
        }}
      >
        <img
          className="img-fluid"
          title={product.product + " pic"}
          src={`data:image/jpeg;base64,${product.photo}`}
          style={{ padding: "8px 4px 0px 4px" }}
        />
        <ul style={{ padding: "0px 4px 0px 4px", listStyleType: "none" }}>
          <li style={{ fontSize: "1.2em", fontWeight: "500" }}>
            {product.product}
          </li>
          <li style={{ fontSize: "0.9em" }}>Price: {product.price} jpy</li>
          <li style={{ fontSize: "0.9em" }}>Remaining: {product.ammount}</li>
          <PurchaseNum product={product} />
        </ul>
      </div>
    </Col>
  );
};

export default ProductField;
