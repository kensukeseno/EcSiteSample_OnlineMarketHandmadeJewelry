import React from "react";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { ArtistProduct, PurchaseInfo } from "../Types/Columns";
import ProductFieldCarousel from "./ProductFieldCarousel";

type ArtistFieldProps = {
  artistProducts: ArtistProduct[];
  handlePurchaseChange: (props: { purchase: PurchaseInfo }) => void;
};

const ArtistField: React.FC<ArtistFieldProps> = ({
  artistProducts,
  handlePurchaseChange,
}) => {
  const productList = artistProducts.map((products) => (
    <li
      className="list-group-item list-group-item-light"
      key={products.artist.artistId}
    >
      <div
        className="text-monospace text-uppercase font-weight-bold"
        style={{ fontSize: "1.5em" }}
      >
        {products.artist.name}'s section
      </div>
      <Row>
        <Col
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center">
            <img
              style={{ display: "block" }}
              className="w-100"
              title={products.artist.name + " pic"}
              src={`data:image/jpeg;base64 ,${products.artist.photo}`}
            />
            <p>ARTIST: {products.artist.name}</p>
          </div>
        </Col>
        <Col>
          <ProductFieldCarousel
            products={products.productEntityList}
            handlePurchaseChange={handlePurchaseChange}
          />
        </Col>
      </Row>
    </li>
  ));
  return (
    <Stack gap={3} className="list-group" as="ul">
      <ul className="list-group">{productList}</ul>
    </Stack>
  );
};

export default ArtistField;
