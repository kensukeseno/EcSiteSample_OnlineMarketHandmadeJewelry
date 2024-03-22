"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const application_1 = require("../../properties/application");
const backendUrl = process.env.NODE_ENV === "development"
    ? application_1.BACKEND_URL_DEVELOPMENT
    : application_1.BACKEND_URL_PRODUCTION;
//  Signup modal
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
        fetch(backendUrl + "/resister?username=" + userName + "&password=" + password);
        setLoginUser(userName);
        setLoginState(true);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Sign Up", (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: (e) => e.stopPropagation() }, { children: (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({ show: show, onHide: handleClose }, { children: [(0, jsx_runtime_1.jsx)(Modal_1.default.Header, Object.assign({ closeButton: true }, { children: (0, jsx_runtime_1.jsx)(Modal_1.default.Title, { children: "Sign Up" }) })), (0, jsx_runtime_1.jsxs)(Modal_1.default.Body, { children: [(0, jsx_runtime_1.jsx)("input", { onChange: userNameHandler, type: "text", name: "username", placeholder: "username" }), (0, jsx_runtime_1.jsx)("input", { onChange: passwordHandler, type: "password", name: "password", placeholder: "password" }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Go", onClick: () => {
                                        onResister();
                                        handleClose();
                                    } })] }), (0, jsx_runtime_1.jsx)(Modal_1.default.Footer, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "secondary", onClick: handleClose }, { children: "Close" })) })] })) }))] }));
};
exports.default = Signup;
