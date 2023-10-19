import { useState, useEffect } from "react";
import ArtistField from "../components/ArtistField";
import {
  ArtistProduct,
  Product,
  PurchaseInfo,
} from "../components/types/Columns";

type HomeProps = {
  onPurchaseChange: (props: { purchase: PurchaseInfo }) => void;
};

export const Home: React.FC<HomeProps> = ({
  onPurchaseChange: handlePurchaseChange,
}) => {
  const [artists, setArtists] = useState<ArtistProduct[]>([
    {
      artist: { name: "load", photo: "load", artistId: "load" },
      productEntityList: [
        {
          product: "load",
          ammount: "load",
          photo: "load",
          productId: "load",
          price: "load",
          artistId: "load",
        },
      ],
    },
  ]);
  type Position = { artist: string; position: number };

  const [nowPosition, setNowPosition] = useState<Position[]>([
    { artist: "load", position: 0 },
  ]);
  const showListLen: number = 3;
  const [modifiedArtists, setModifiedArtists] = useState<ArtistProduct[]>([
    {
      artist: { name: "load", photo: "load", artistId: "load" },
      productEntityList: [
        {
          product: "load",
          ammount: "load",
          photo: "load",
          productId: "load",
          price: "load",
          artistId: "load",
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("/productByArtist")
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setNowPosition(
          data.map((artistProduct: ArtistProduct) => {
            let positionInfo = {
              artist: artistProduct.artist.name,
              position: 0,
            };
            return positionInfo;
          })
        );
        setModifiedArtists(
          data.map((artistProduct: ArtistProduct) => {
            let modArtistProduct: ArtistProduct = {
              artist: { name: "load", photo: "load", artistId: "load" },
              productEntityList: [
                {
                  product: "load",
                  ammount: "load",
                  photo: "load",
                  productId: "load",
                  price: "load",
                  artistId: "load",
                },
              ],
            };

            modArtistProduct.artist = artistProduct.artist;
            modArtistProduct.productEntityList =
              artistProduct.productEntityList.slice(0, showListLen);
            return modArtistProduct;
          })
        );
      });
  }, []);

  return (
    <ArtistField
      artistProducts={modifiedArtists}
      handlePurchaseChange={handlePurchaseChange}
    />
  );
};

export default Home;
