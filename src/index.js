"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const Header_1 = __importDefault(require("./layouts/Header"));
const Body_1 = __importDefault(require("./routes/Body"));
require("./assets/css/index.css");
const react_router_dom_1 = require("react-router-dom");
const Container_1 = __importDefault(require("react-bootstrap/Container"));
function index() {
    function Root() {
        const [loginState, setLoginState] = (0, react_1.useState)(false);
        const [itemInSearch, setItemInSearch] = (0, react_1.useState)("");
        return ((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, { loginState: loginState, setLoginState: setLoginState, setItemInSearch: setItemInSearch }), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { marginTop: "80px" } }, { children: (0, jsx_runtime_1.jsx)(Body_1.default, { loginState: loginState, itemInSearch: itemInSearch }) }))] }) }) }));
    }
    const rootElement = document.getElementById("root");
    if (!rootElement)
        throw new Error("Failed to find the root element");
    const root = client_1.default.createRoot(rootElement);
    root.render((0, jsx_runtime_1.jsx)(Root, {}));
}
index();
