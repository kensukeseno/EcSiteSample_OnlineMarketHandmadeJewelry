import React from "react";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { TypeArtistProduct, TypeProductInCart } from "./types/Columns";
import ProductFieldCarousel from "./ProductFieldCarousel";

type ArtistFieldProps = {
  artistProducts: TypeArtistProduct[];
  onPurchaseChange: (purchase: TypeProductInCart) => void;
};

const ArtistField: React.FC<ArtistFieldProps> = ({
  artistProducts,
  onPurchaseChange: handlePurchaseChange,
}) => {
  const productList = artistProducts.map((products) => (
    // <ul
    //   className="list-group-item"
    //   key={products.artist.artistId}
    //   // style={{ margin: "0px 10px" }}
    // >
    <Row
      className="list-group-item"
      key={products.artist.artistId}
      style={{ display: "flex" }}
    >
      <Col
        as="ul"
        xs={6}
        sm={3}
        md={3}
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 6px",
          listStyle: "none",
        }}
      >
        <li
          className="text-monospace text-uppercase font-weight-bold"
          style={{ fontSize: "1.5em" }}
        >
          {products.artist.name}'s Art
        </li>
        <li className="text-center">
          <img
            style={{ display: "block" }}
            className="w-100"
            title={products.artist.name + " pic"}
            src={`data:image/jpeg;base64 ,${products.artist.photo}`}
          />
          <p>ARTIST: {products.artist.name}</p>
        </li>
      </Col>
      <Col
        style={{
          padding: "0px 0px",
        }}
      >
        <ProductFieldCarousel
          products={products.productEntityList}
          onPurchaseChange={handlePurchaseChange}
        />
      </Col>
    </Row>
    // </ul>
  ));
  return (
    <Stack gap={3} className="list-group" as="ul">
      {productList}
    </Stack>
  );
};

export default ArtistField;
