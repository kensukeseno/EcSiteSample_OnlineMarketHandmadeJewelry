import { useState, useEffect } from "react";
import { TypeProduct } from "../components/types/Types";
import SearchField from "./Search";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
    : process.env.REACT_APP_BACKEND_URL_PRODUCTION;

export const Product: React.FC<{ itemInSearch: string }> = ({
  itemInSearch,
}) => {
  const [products, setProducts] = useState<TypeProduct[]>([
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
export default TypeProduct;
