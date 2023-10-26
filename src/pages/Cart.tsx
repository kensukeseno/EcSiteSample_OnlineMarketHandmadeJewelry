import { ProductInCart } from "../components/types/Columns";
import { Col, Row, Stack } from "react-bootstrap";

type CartProps = {
  purchases: ProductInCart[];
  purchaseSum: { num: number; price: number };
  onPurchaseChange: (props: { purchase: ProductInCart }) => void;
  onPurchaseDelete: (deleteIndex: number) => void;
};

export const Cart: React.FC<CartProps> = ({
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
      style={{ listStyle: "none", textAlign: "center" }}
    >
      <img
        className="img-fluid"
        src={`data:image/jpeg;base64,${key.product.photo}`}
      />
      <li>{key.product.product}</li>
      <li>PRICE: {nullConverter(key.product.price)} jpy</li>
      <li>AMMOUNT: {key.purchaseAmmount}</li>
      <li>
        TOTAL PRICE:
        {nullConverter(key.product.price) * key.purchaseAmmount}
      </li>
      <button
        type="button"
        className="btn btn btn-outline-dark"
        style={{ padding: "2px" }}
        onClick={() => {
          onPurchaseDelete(index);
        }}
      >
        delete
      </button>
    </Col>
  ));

  const CartBody = () => {
    if (purchases.length === 0) {
      return (
        <div className="fs-1 text-center fw-normal">Your Cart is empty</div>
      );
    } else {
      return (
        <Row>
          <Col md={9} sm={8} xs={4} className="border rounded-1 p-2">
            <Row>{productList}</Row>
          </Col>
          <Stack
            as={Col}
            gap={2}
            className="mx-3 p-0"
            md={2}
            sm={3}
            xs={6}
            style={{
              height: "fit-content",
              position: "fixed",
              top: "75px",
              right: "20px",
            }}
          >
            <div className="px-1" style={{ color: "gray" }}>
              ITEMS {purchseSum.num}
            </div>
            <div className="px-1" style={{ color: "gray" }}>
              TOTAL {purchseSum.price} JPY
            </div>
            <a className="btn btn-outline-secondary w-100 py-1" href="/pay">
              Proceed to Buy
            </a>
          </Stack>
        </Row>
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
