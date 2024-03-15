import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TpyeProduct, TypeProductInCart } from "../components/types/Columns";
import SearchField from "./Search";
import {
  BACKEND_URL_DEVELOPMENT,
  BACKEND_URL_PRODUCTION,
} from "../properties/application";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;

type ProductProps = { onPurchaseChange: (purchase: TypeProductInCart) => void };

export const Product: React.FC<ProductProps> = ({
  onPurchaseChange: handlePurchaseChange,
}) => {
  const search = useLocation().search;
  const product = new URLSearchParams(search).get("product");

  const [products, setProducts] = useState<TpyeProduct[]>([
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
    fetch(backendUrl + `/product?product=${product}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <SearchField
        products={products}
        onPurchaseChange={handlePurchaseChange}
      />
    </>
  );
};
export default TpyeProduct;
