"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const ShoppingCart_1 = __importDefault(require("@mui/icons-material/ShoppingCart"));
const react_1 = require("react");
const react_responsive_1 = require("react-responsive");
const Sidebar_1 = __importDefault(require("../components/header/Sidebar"));
const backendUrl = process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
    : process.env.REACT_APP_BACKEND_URL_PRODUCTION;
const Header = ({ loginState, setLoginState, setItemInSearch, }) => {
    const [loginModalShow, setLoginModalShow] = (0, react_1.useState)(false);
    const handleLoginModalClose = () => {
        setLoginModalShow(false);
    };
    const handleLoginModalShow = () => {
        setLoginModalShow(true);
    };
    const [signupModalShow, setSignupModalShow] = (0, react_1.useState)(false);
    const handleSignupModalClose = () => {
        setSignupModalShow(false);
    };
    const handleSignupModalShow = () => {
        setSignupModalShow(true);
    };
    const [loginUser, setLoginUser] = (0, react_1.useState)("Guest");
    const [inputItem, setInputItem] = (0, react_1.useState)("");
    const onLogout = () => {
        fetch(backendUrl + "/logout").then(() => {
            setLoginUser("Guest");
            setLoginState(false);
        });
    };
    const isDesktopOrLaptop = (0, react_responsive_1.useMediaQuery)({
        query: "(min-width: 768px)",
    });
    const isTabletOrMobile = (0, react_responsive_1.useMediaQuery)({ query: "(max-width: 768px)" });
    return ((0, jsx_runtime_1.jsxs)("header", Object.assign({ className: "fixed-top  w-100 d-flex justify-content-between align-items-center", style: { height: "40px" } }, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: "/", style: { display: "inline-block" } }, { children: [isDesktopOrLaptop && ((0, jsx_runtime_1.jsx)("img", { className: "w-100 bg-transparent", style: { height: "40px", objectFit: "contain" }, src: `${process.env.PUBLIC_URL}/logo.jpg` })), isTabletOrMobile && ((0, jsx_runtime_1.jsx)("img", { className: "w-100 bg-transparent", style: { height: "40px", objectFit: "contain" }, src: `${process.env.PUBLIC_URL}/logo_small.jpg` }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "text-center w-50 p-0", style: {
                    display: "inline-block",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: [(0, jsx_runtime_1.jsx)("input", { style: { width: "80%", height: "30px" }, type: "text", name: "product", placeholder: "Search Items", value: inputItem, onChange: (e) => setInputItem(e.target.value) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/product" }, { children: (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "\uF002", style: {
                                width: "20%",
                                fontFamily: "FontAwesome",
                            }, onClick: () => {
                                setItemInSearch(inputItem);
                                setInputItem("");
                            } }) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center p-0", style: {
                    display: "inline-block",
                    justifyContent: "right",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/cart" }, { children: (0, jsx_runtime_1.jsx)(ShoppingCart_1.default, { style: { color: "white" } }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center p-0", style: {
                    display: "inline-block",
                    justifyContent: "left",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, { loginModalShow: loginModalShow, signupModalShow: signupModalShow, loginState: loginState, loginUser: loginUser, onLoginModalShow: handleLoginModalShow, onLoginModalClose: handleLoginModalClose, onSignupModalShow: handleSignupModalShow, onSignupModalClose: handleSignupModalClose, setLoginState: setLoginState, setLoginUser: setLoginUser, onLogout: onLogout }) }))] })));
};
exports.default = Header;
