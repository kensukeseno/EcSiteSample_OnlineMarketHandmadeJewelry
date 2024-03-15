import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import ArtistField from "../components/ArtistField";
import { BACKEND_URL_DEVELOPMENT, BACKEND_URL_PRODUCTION, } from "../properties/application";
const backendUrl = process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;
export const Home = ({ onPurchaseChange: handlePurchaseChange, }) => {
    const [artists, setArtists] = useState([
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
        fetch(backendUrl + "/productByArtist")
            .then((res) => res.json())
            .then((data) => {
            setArtists(data);
        });
    }, []);
    return (_jsx(ArtistField, { artistProducts: artists, onPurchaseChange: handlePurchaseChange }));
};
export default Home;
