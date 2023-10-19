import React from "react";
import { Product, PurchaseInfo } from "./types/Columns";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

type ProductFiledProps = {
  products: Product[];
  handlePurchaseChange: (props: { purchase: PurchaseInfo }) => void;
};

const ProductFiled: React.FC<ProductFiledProps> = ({
  products,
  handlePurchaseChange,
}) => {
  const PurchaseNum = (props: { product: Product }) => {
    const [value, setValue] = useState<number>(1);
    const purchase: PurchaseInfo = {
      product: props.product,
      purchaseAmmount: value,
    };

    return (
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          className="btn btn btn-outline-dark"
          style={{ padding: "2px" }}
          onClick={() => handlePurchaseChange({ purchase })}
        >
          Add to Cart
        </button>
        <input
          className="ml-1"
          style={{ width: "25%", textAlign: "center" }}
          type="number"
          min="1"
          max={props.product.ammount}
          defaultValue="1"
          onChange={(event) => setValue(event.target.valueAsNumber)}
        ></input>
      </li>
    );
  };

  return (
    <Row>
      {products.map((product) => (
        <Col
          as="ul"
          md={4}
          key={product.productId}
          style={{ listStyle: "none", textAlign: "center" }}
        >
          <img
            className="img-fluid"
            title={product.product + " pic"}
            src={`data:image/jpeg;base64,${product.photo}`}
          />
          <li>{product.product}</li>
          <li>PRICE: {product.price} jpy</li>
          <li>REMAINING: {product.ammount}</li>
          <PurchaseNum product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductFiled;
