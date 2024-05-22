import React from "react";
import { TypeSearch } from "../components/types/Types";
import ProductField from "../components/ProductField";

const SearchField: React.FC<TypeSearch> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="fs-1 text-center fw-normal" style={{ color: "#2994dc" }}>
        NO ITEM FOUND
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          backgroundColor: "white",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div className="search-container" key={product.productId}>
            <ProductField product={product} />
          </div>
        ))}
      </div>
    );
  }
};

export default SearchField;
