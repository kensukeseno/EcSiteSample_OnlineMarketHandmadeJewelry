import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Product, PurchaseInfo } from "./Types/Columns";
import ProductFiled from "./Components/ProductField";

type Props = {
  onPurchaseChange: (props: { purchase: PurchaseInfo }) => void;
};

export function Product(props: Props) {
  const search = useLocation().search;
  const product = new URLSearchParams(search).get("product");

  const [products, setProducts] = useState<Product[]>([
    {
      product: "load",
      ammount: "load",
      photo: "load",
      productId: "load",
      price: "load",
      artistId: "load",
    },
  ]);
  const [listLen, setListLen] = useState(0);
  const [nowPosition, setNowPosition] = useState(0);
  const showListLen: number = 3;
  const [modifiedProducts, setModifiedProducts] = useState<Product[]>([
    {
      product: "load",
      ammount: "load",
      photo: "load",
      productId: "load",
      price: "load",
      artistId: "load",
    },
  ]);

  useEffect(() => {
    fetch(`/product?product=${product}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setListLen(data.length);
        console.log("a");
      });
  }, []);

  return (
    <>
      {/* <ProductFiled
        products={products}
        handlePurchaseChange={props.onPurchaseChange}
      /> */}
      <div>{listLen}</div>
    </>
  );
}
export default Product;
