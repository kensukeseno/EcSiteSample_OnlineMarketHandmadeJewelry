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
const react_bootstrap_1 = require("react-bootstrap");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
const DropdownButton_1 = __importDefault(require("react-bootstrap/DropdownButton"));
function ErrorEvaluate() {
    if (window.location.search === "?error") {
        return true;
    }
    else {
        return false;
    }
}
function ErrorMessage() {
    if (ErrorEvaluate()) {
        return (0, jsx_runtime_1.jsx)("p", { children: "username or password is incorrect" });
    }
    else {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
}
const Login = ({ show, handleClose, handleShow }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Login", (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: (e) => e.stopPropagation() }, { children: (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({ show: show, onHide: handleClose }, { children: [(0, jsx_runtime_1.jsx)(Modal_1.default.Header, Object.assign({ closeButton: true }, { children: (0, jsx_runtime_1.jsx)(Modal_1.default.Title, { children: "LOGIN" }) })), (0, jsx_runtime_1.jsxs)(Modal_1.default.Body, { children: [(0, jsx_runtime_1.jsx)(ErrorMessage, {}), (0, jsx_runtime_1.jsxs)("form", Object.assign({ action: "/login", method: "post" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", name: "username", placeholder: "username" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", placeholder: "password" }) }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "go" })] }))] }), (0, jsx_runtime_1.jsx)(Modal_1.default.Footer, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "secondary", onClick: handleClose }, { children: "Close" })) })] })) }))] }));
};
function Header() {
    const [show, setShow] = (0, react_1.useState)(ErrorEvaluate());
    const handleClose = () => {
        setShow(false);
        console.log(false);
    };
    const handleShow = () => {
        setShow(true);
        console.log(true);
    };
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, Object.assign({ className: "fixed-top bg-light" }, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ xs: 3 }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "w-100 bg-transparent", src: `${process.env.PUBLIC_URL}/logo.jpg` }) })) })), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ className: "text-center", xs: 6, style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ className: "w-100", action: "/product", method: "get" }, { children: [(0, jsx_runtime_1.jsx)("input", { style: { width: "90%" }, type: "text", name: "product", placeholder: "search items" }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "\uF002", style: {
                                fontFamily: "FontAwesome",
                            } })] })) })), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ xs: 1, className: "text-center", style: {
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/cart" }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCartShopping, size: "2x", color: "#00bfff" }) })) })), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, Object.assign({ className: "text-center", style: {
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                } }, { children: (0, jsx_runtime_1.jsxs)(DropdownButton_1.default, Object.assign({ align: "end", title: "Account", id: "dropdown-menu-align-end" }, { children: [(0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "1", onClick: handleShow }, { children: (0, jsx_runtime_1.jsx)(Login, { show: show, handleClose: handleClose, handleShow: handleShow }) })), (0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "2" }, { children: "Create Account" }))] })) }))] })));
}
exports.Header = Header;
exports.default = Header;
