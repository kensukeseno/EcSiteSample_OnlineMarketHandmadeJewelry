import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { TypeCart } from "../components/types/Types";

export const Cart: React.FC<TypeCart> = ({
  setProductsInCart,
  loginState,
  purchases,
  purchaseSum: purchseSum,
  onPurchaseDelete,
}) => {
  const nullConverter = (num: number | "load") => {
    if (num === "load") {
      return (num = 0);
    } else {
      return num;
    }
  };

  const productList = purchases.map((key, index) => (
    <Col
      md={4}
      sm={6}
      xs={12}
      key={key.product.productId}
      style={{
        listStyle: "none",
        textAlign: "left",
      }}
    >
      <img
        className="img-fluid"
        src={`data:image/jpeg;base64,${key.product.photo}`}
      />
      <li>{key.product.product}</li>
      <li>Price: {nullConverter(key.product.price)} jpy</li>
      <li>Ammount: {key.purchaseAmmount}</li>
      <li>
        Total Price:
        {nullConverter(key.product.price) * key.purchaseAmmount}
      </li>
      <button
        type="button"
        className="btn"
        style={{ padding: "2px", float: "right" }}
        onClick={() => {
          onPurchaseDelete(index);
        }}
      >
        <DeleteSharpIcon />
      </button>
    </Col>
  ));

  const CartBody = () => {
    if (purchases.length === 0) {
      return (
        <div
          className="fs-1 text-center fw-normal"
          style={{ color: "#2994dc" }}
        >
          No Item in Cart
        </div>
      );
    } else {
      return (
        <Row>
          <Col
            md={8}
            sm={8}
            xs={6}
            className="border rounded-1 p-2"
            style={{ backgroundColor: "white" }}
          >
            <Row>{productList}</Row>
          </Col>
          <Col
            className="mx-3"
            md={3}
            sm={3}
            xs={5}
            style={{
              height: "fit-content",
              position: "fixed",
              top: "80px",
              right: "5px",
              backgroundColor: "white",
              padding: "5px 5px",
              borderRadius: "4px",
            }}
          >
            <div className="px-1">Items {purchseSum.num}</div>
            <div className="px-1">Total {purchseSum.price} JPY</div>
            {loginState ? (
              <Link
                to="/pay"
                className="btn btn-outline-secondary w-100 py-1"
                style={{
                  color: "#0D9276",
                  borderColor: "#0D9276",
                  borderWidth: "2px",
                  margin: "10px 0 10px 0",
                }}
                onClick={() => setProductsInCart([])}
              >
                Proceed to Buy
              </Link>
            ) : (
              <AlertDismissible />
            )}
          </Col>
        </Row>
      );
    }
  };

  function AlertDismissible() {
    const [show, setShow] = useState(false);

    return (
      <>
        <Alert show={show} variant="success">
          <p>Please sign in before you continue shopping</p>
        </Alert>
        {!show && (
          <p
            className="btn btn-outline-secondary w-100 py-1"
            style={{
              color: "#0D9276",
              borderColor: "#0D9276",
              borderWidth: "2px",
              margin: "10px 0 10px 0",
            }}
            onClick={() => setShow(true)}
          >
            Proceed to Buy
          </p>
        )}
      </>
    );
  }

  return <CartBody />;
};

export default Cart;
