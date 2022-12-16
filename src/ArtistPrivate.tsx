import { useState, useEffect } from "react";
import ProductTable from "./Components/ProductTable";

export type Cols = {
  photo: string;
  product: string;
  price: number | "load";
};

export function ArtistPrivate() {
  const [products, setProducts] = useState<Cols[]>([
    {
      photo: "load",
      product: "load",
      price: "load",
    },
  ]);

  useEffect(() => {
    fetch("/artistPrivate")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <form action="http://localhost:8080/logout">
        <button type="submit">logout</button>
      </form>
      <div>
        <div>
          <ProductTable data={products} />
        </div>
      </div>
    </div>
  );
}

export default ArtistPrivate;
