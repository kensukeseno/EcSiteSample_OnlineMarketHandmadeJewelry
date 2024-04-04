"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ArtistField_1 = __importDefault(require("../components/ArtistField"));
const application_1 = require("../properties/application");
const backendUrl = process.env.NODE_ENV === "development"
    ? application_1.BACKEND_URL_DEVELOPMENT
    : application_1.BACKEND_URL_PRODUCTION;
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
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)(ArtistField_1.default, { artistProducts: artists, onPurchaseChange: handlePurchaseChange }));
};
exports.Home = Home;
exports.default = exports.Home;
