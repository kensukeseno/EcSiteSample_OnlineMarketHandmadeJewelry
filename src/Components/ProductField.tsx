import React from "react";
import { Product, ProductInCart } from "./types/Columns";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

type ProductFiledProps = {
  products: Product[];
  handlePurchaseChange: (
    props: { purchase: ProductInCart },
    addOrDelete: string
  ) => void;
};

const ProductFiled: React.FC<ProductFiledProps> = ({
  products,
  handlePurchaseChange,
}) => {
  const PurchaseNum = (props: { product: Product }) => {
    const [value, setValue] = useState<number>(1);
    const purchase: ProductInCart = {
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
          onClick={() => handlePurchaseChange({ purchase }, "add")}
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

  if (products.length === 0) {
    return <div className="fs-1 text-center fw-normal">NO ITEM FOUND</div>;
  } else {
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
  }
};

export default ProductFiled;
