"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
// import Accordion from "react-bootstrap/Accordion";
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
const DropdownButton_1 = __importDefault(require("react-bootstrap/DropdownButton"));
const react_responsive_1 = require("react-responsive");
// Login modal
const Login = ({ show, handleClose, setLoginUser, setLoginState, }) => {
    const [userName, setUserName] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    };
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    const onLogin = () => {
        // When login is successful, display username and set login state to true
        fetch("/login?username=" + userName + "&password=" + password, {
            method: "post",
            body: "",
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.result === "success") {
                setLoginUser(userName);
                setLoginState(true);
                handleClose();
            }
            else if (data.result === "fail") {
                setLoginErrorState(true);
            }
        });
    };
    // Login error state
    const [loginErrorState, setLoginErrorState] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Login", (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: (e) => e.stopPropagation() }, { children: (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({ show: show, onHide: handleClose }, { children: [(0, jsx_runtime_1.jsx)(Modal_1.default.Header, Object.assign({ closeButton: true }, { children: (0, jsx_runtime_1.jsx)(Modal_1.default.Title, { children: "LOGIN" }) })), (0, jsx_runtime_1.jsxs)(Modal_1.default.Body, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { display: loginErrorState ? "block" : "none" } }, { children: "username or password is incorrect" })), (0, jsx_runtime_1.jsx)("input", { onChange: userNameHandler, type: "text", name: "username", placeholder: "username" }), (0, jsx_runtime_1.jsx)("input", { onChange: passwordHandler, type: "password", name: "password", placeholder: "password" }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Go", onClick: () => {
                                        onLogin();
                                    } })] }), (0, jsx_runtime_1.jsx)(Modal_1.default.Footer, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "secondary", onClick: handleClose }, { children: "Close" })) })] })) }))] }));
};
// Signup modal
const Signup = ({ show, handleClose, setLoginUser, setLoginState, }) => {
    const [userName, setUserName] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    };
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    // Resister new account, diplay username and set login state to true
    const onResister = () => {
        fetch("/resister?username=" + userName + "&password=" + password);
        setLoginUser(userName);
        setLoginState(true);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Sign Up", (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: (e) => e.stopPropagation() }, { children: (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({ show: show, onHide: handleClose }, { children: [(0, jsx_runtime_1.jsx)(Modal_1.default.Header, Object.assign({ closeButton: true }, { children: (0, jsx_runtime_1.jsx)(Modal_1.default.Title, { children: "Sign Up" }) })), (0, jsx_runtime_1.jsxs)(Modal_1.default.Body, { children: [(0, jsx_runtime_1.jsx)("input", { onChange: userNameHandler, type: "text", name: "username", placeholder: "username" }), (0, jsx_runtime_1.jsx)("input", { onChange: passwordHandler, type: "password", name: "password", placeholder: "password" }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Go", onClick: () => {
                                        onResister();
                                        handleClose();
                                    } })] }), (0, jsx_runtime_1.jsx)(Modal_1.default.Footer, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "secondary", onClick: handleClose }, { children: "Close" })) })] })) }))] }));
};
function Header() {
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
    const onLogout = () => {
        fetch("/logout").then(() => {
            setLoginUser("Guest");
            setLoginState(false);
        });
    };
    const [loginState, setLoginState] = (0, react_1.useState)(false);
    const isDesktopOrLaptop = (0, react_responsive_1.useMediaQuery)({
        query: "(min-width: 800px)",
    });
    const isTabletOrMobile = (0, react_responsive_1.useMediaQuery)({ query: "(max-width: 800px)" });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "fixed-top bg-light  w-100 d-flex justify-content-between align-items-center", style: { height: "40px" } }, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: "/", style: { display: "inline-block" } }, { children: [isDesktopOrLaptop && ((0, jsx_runtime_1.jsx)("img", { className: "w-100 bg-transparent", style: { height: "40px", objectFit: "contain" }, src: `${process.env.PUBLIC_URL}/logo.jpg` })), isTabletOrMobile && ((0, jsx_runtime_1.jsx)("img", { className: "w-100 bg-transparent", style: { height: "40px", objectFit: "contain" }, src: `${process.env.PUBLIC_URL}/logo_no_text.jpg` }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center w-50 p-0", style: {
                    display: "inline-block",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ className: "w-100", action: "/product", method: "get" }, { children: [(0, jsx_runtime_1.jsx)("input", { style: { width: "80%" }, type: "text", name: "product", placeholder: "search items" }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "\uF002", style: {
                                fontFamily: "FontAwesome",
                                width: "20%",
                            } })] })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center p-0", style: {
                    display: "inline-block",
                    justifyContent: "right",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/cart" }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCartShopping, size: "2x", color: "#00bfff" }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center p-0", style: {
                    display: "inline-block",
                    justifyContent: "left",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsxs)(DropdownButton_1.default, Object.assign({ align: "end", title: loginUser, id: "dropdown-menu-align-end" }, { children: [(0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "1", onClick: handleLoginModalShow, style: { display: loginState ? "none" : "block" } }, { children: (0, jsx_runtime_1.jsx)(Login, { show: loginModalShow, handleClose: handleLoginModalClose, handleShow: handleLoginModalShow, setLoginUser: setLoginUser, setLoginState: setLoginState }) })), (0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "2", onClick: handleSignupModalShow, style: { display: loginState ? "none" : "block" } }, { children: (0, jsx_runtime_1.jsx)(Signup, { show: signupModalShow, handleClose: handleSignupModalClose, handleShow: handleSignupModalShow, setLoginUser: setLoginUser, setLoginState: setLoginState }) })), (0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "3", onClick: onLogout, style: { display: loginState ? "block" : "none" } }, { children: "Logout" }))] })) }))] })));
}
exports.Header = Header;
exports.default = Header;
