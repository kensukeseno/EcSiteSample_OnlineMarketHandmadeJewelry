import { PurchaseInfo } from "../components/types/Columns";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { useState } from "react";

type CartProps = {
  purchases: PurchaseInfo[];
  purchaseSum: { num: number; price: number };
  onPurchaseChange: (props: { purchase: PurchaseInfo }) => void;
};

export const Cart: React.FC<CartProps> = ({
  purchases,
  purchaseSum: purchseSum,
  onPurchaseChange,
}) => {
  const nullConverter = (num: number | "load") => {
    if (num === "load") {
      return (num = 0);
    } else {
      return num;
    }
  };

  const productList = purchases.map((purchase) => (
    <Col
      md={4}
      key={purchase.product.productId}
      style={{ listStyle: "none", textAlign: "center" }}
    >
      <img
        className="img-fluid"
        src={`data:image/jpeg;base64,${purchase.product.photo}`}
      />
      <li>{purchase.product.product}</li>
      <li>PRICE: {nullConverter(purchase.product.price)} jpy</li>
      <li>AMMOUNT: {purchase.purchaseAmmount}</li>
      <li>
        TOTAL PRICE:
        {nullConverter(purchase.product.price) * purchase.purchaseAmmount}
      </li>
    </Col>
  ));

  const CartBody = () => {
    if (purchases.length === 0) {
      return (
        <div className="fs-1 text-center fw-normal">Your Cart is empty</div>
      );
    } else {
      return (
        <Container>
          <Row>
            <Col md={9}>
              <Row>{productList}</Row>
            </Col>
            <Stack
              as={Col}
              gap={2}
              className="mt-5"
              md={3}
              style={{ height: "fit-content" }}
            >
              <Button
                className="w-100 font-weight-bold"
                variant="primary"
                style={{ borderRadius: "0px" }}
              >
                Proceed to Buy
              </Button>
              <div className="fw-bold">
                ITEMS
                <span style={{ color: "red" }}> {purchseSum.num}</span>
              </div>
              <div className="fw-bold">
                TOTAL
                <span style={{ color: "red" }}> {purchseSum.price} JPY</span>
              </div>
              <div style={{ height: "12px", backgroundColor: "#0d6efd" }}></div>
            </Stack>
          </Row>
        </Container>
      );
    }
  };

  return (
    <>
      <CartBody />
    </>
  );
};

export default Cart;
