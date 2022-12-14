import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductTable from "./Components/ProductTable";

export type Cols = {
  product: string;
  photo: string;
  price: number | "load";
};

export function Product() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  console.log(name);

  const [products, setProducts] = useState<Cols[]>([
    {
      product: "load",
      photo: "load",
      price: "load",
    },
  ]);

  useEffect(() => {
    fetch(`/product?artist=${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div>
        <ProductTable data={products} />
      </div>
    </div>
  );
}
export default Product;
