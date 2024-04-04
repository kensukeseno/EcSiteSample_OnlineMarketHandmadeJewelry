import React from "react";
import {
  TpyeProduct as TypeProduct,
  TypeProductInCart,
} from "../components/types/Columns";
import ProductField from "../components/ProductField";

type SearchProps = {
  products: TypeProduct[];
  onPurchaseChange: (purchase: TypeProductInCart) => void;
};

const SearchField: React.FC<SearchProps> = ({
  products,
  onPurchaseChange: handlePurchaseChange,
}) => {
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
            <ProductField
              product={product}
              onPurchaseChange={handlePurchaseChange}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default SearchField;
