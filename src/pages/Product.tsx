import { useState, useEffect } from "react";
import { TpyeProduct } from "../components/types/Columns";
import SearchField from "./Search";
import {
  BACKEND_URL_DEVELOPMENT,
  BACKEND_URL_PRODUCTION,
} from "../properties/application";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;

type ProductProps = {
  itemInSearch: string;
};

export const Product: React.FC<ProductProps> = ({ itemInSearch }) => {
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
    fetch(backendUrl + `/product?product=${itemInSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [itemInSearch]);

  return <SearchField products={products} />;
};
export default TpyeProduct;
