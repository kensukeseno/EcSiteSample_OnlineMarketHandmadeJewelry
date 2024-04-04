import { useState, useEffect } from "react";
import ArtistField from "../components/ArtistField";
import {
  TypeArtistProduct,
  TypeProductInCart,
} from "../components/types/Columns";
import {
  BACKEND_URL_DEVELOPMENT,
  BACKEND_URL_PRODUCTION,
} from "../properties/application";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;

type HomeProps = {
  onPurchaseChange: (purchase: TypeProductInCart) => void;
};

export const Home: React.FC<HomeProps> = ({
  onPurchaseChange: handlePurchaseChange,
}) => {
  const [artists, setArtists] = useState<TypeArtistProduct[]>([
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
    fetch(backendUrl + "/productByArtist", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
      });
  }, []);

  return (
    <ArtistField
      artistProducts={artists}
      onPurchaseChange={handlePurchaseChange}
    />
  );
};

export default Home;
