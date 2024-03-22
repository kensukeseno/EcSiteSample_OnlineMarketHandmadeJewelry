"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const Header_1 = __importDefault(require("./layouts/Header"));
const Body_1 = __importDefault(require("./routes/Body"));
require("./assets/css/index.css");
const react_router_dom_1 = require("react-router-dom");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
function index() {
    const rootElement = document.getElementById("root");
    if (!rootElement)
        throw new Error("Failed to find the root element");
    const root = client_1.default.createRoot(rootElement);
    root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { marginTop: "80px" } }, { children: (0, jsx_runtime_1.jsx)(Body_1.default, {}) }))] }) }) }));
}
index();
