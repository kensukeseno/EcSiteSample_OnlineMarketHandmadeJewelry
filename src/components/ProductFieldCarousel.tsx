import React from "react";
import { TpyeProduct, TypeProductInCart } from "./types/Columns";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductField from "./ProductField";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

type ProductFiledProps = {
  products: TpyeProduct[];
  onPurchaseChange: (purchase: TypeProductInCart) => void;
};

const ProductFieldCarousel: React.FC<ProductFiledProps> = ({
  products,
  onPurchaseChange: handlePurchaseChange,
}) => {
  return (
    <Carousel responsive={responsive}>
      {products.map((product) => (
        <ProductField
          key={product.productId}
          product={product}
          onPurchaseChange={handlePurchaseChange}
        />
      ))}
    </Carousel>
  );
};

export default ProductFieldCarousel;
