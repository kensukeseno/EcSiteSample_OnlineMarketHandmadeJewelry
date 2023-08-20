"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ArtistField_1 = __importDefault(require("./Components/ArtistField"));
const Home = ({ onPurchaseChange: handlePurchaseChange, }) => {
    const [artists, setArtists] = (0, react_1.useState)([
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
    const [nowPosition, setNowPosition] = (0, react_1.useState)([
        { artist: "load", position: 0 },
    ]);
    const showListLen = 3;
    const [modifiedArtists, setModifiedArtists] = (0, react_1.useState)([
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
    (0, react_1.useEffect)(() => {
        fetch("/productByArtist")
            .then((res) => res.json())
            .then((data) => {
            setArtists(data);
            setNowPosition(data.map((artistProduct) => {
                let positionInfo = {
                    artist: artistProduct.artist.name,
                    position: 0,
                };
                return positionInfo;
            }));
            setModifiedArtists(data.map((artistProduct) => {
                let modArtistProduct = {
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
            }));
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(ArtistField_1.default, { artistProducts: modifiedArtists, handlePurchaseChange: handlePurchaseChange }));
};
exports.Home = Home;
exports.default = exports.Home;
