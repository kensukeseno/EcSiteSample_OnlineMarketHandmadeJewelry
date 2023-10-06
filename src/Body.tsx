import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { PurchaseInfo } from "./Types/Columns";
import { useState } from "react";

export function Body() {
  const [purchases, setPurchases] = useState<PurchaseInfo[]>([]);
  const [purchaseSum, setPurchaseSum] = useState<{
    num: number;
    price: number;
  }>({ num: 0, price: 0 });

  const handlePurchaseChange = (props: { purchase: PurchaseInfo }) => {
    let newPurchaseflag = true;
    purchases.map((p) => {
      if (p.product.productId === props.purchase.product.productId) {
        p.purchaseAmmount += props.purchase.purchaseAmmount;
        newPurchaseflag = false;
      }
    });
    if (newPurchaseflag) {
      setPurchases((prevPurchase) => [...prevPurchase, props.purchase]);
    }
    purshcaseSum();
  };

  const purshcaseSum = () => {
    let itemCount = 0;
    let priceCount = 0;
    purchases.map((p) => {
      itemCount += p.purchaseAmmount;
      if (p.product.price === "load") throw new Error("Not number");
      priceCount += p.product.price * p.purchaseAmmount;
    });
    setPurchaseSum({ num: itemCount, price: priceCount });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home onPurchaseChange={handlePurchaseChange} />}
      />
      <Route
        path="/product"
        element={<Product onPurchaseChange={handlePurchaseChange} />}
      />
      <Route
        path="/cart"
        element={
          <Cart
            purchases={purchases}
            purchaseSum={purchaseSum}
            onPurchaseChange={handlePurchaseChange}
          />
        }
      />
    </Routes>
  );
}

export default Body;
