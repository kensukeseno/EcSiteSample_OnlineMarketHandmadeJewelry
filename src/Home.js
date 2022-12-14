"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ArtistTable_1 = __importDefault(require("./Components/ArtistTable"));
function Home() {
    const [artists, setArtists] = (0, react_1.useState)([
        {
            name: "load",
            photo: "load",
            base: "load",
            productList: "load",
        },
    ]);
    (0, react_1.useEffect)(() => {
        fetch("/homeArtist")
            .then((res) => res.json())
            .then((data) => setArtists(data));
        fetch("/artistPrivate").then((res) => res.json());
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ArtistTable_1.default, { data: artists }) }) }));
}
exports.Home = Home;
exports.default = Home;
