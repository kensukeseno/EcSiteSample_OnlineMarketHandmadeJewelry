"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const backendUrl = process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
    : process.env.REACT_APP_BACKEND_URL_PRODUCTION;
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
        fetch(backendUrl + "/resister?username=" + userName + "&password=" + password, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.result === "success") {
                setSignErrorState(false);
                setLoginUser(userName);
                setLoginState(true);
                handleClose();
            }
            else if (data.result === "fail") {
                setSignErrorState(true);
            }
        });
    };
    // Login error state
    const [signinErrorState, setSignErrorState] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Sign Up", (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: (e) => e.stopPropagation() }, { children: (0, jsx_runtime_1.jsxs)(Modal_1.default, Object.assign({ show: show, onHide: handleClose }, { children: [(0, jsx_runtime_1.jsx)(Modal_1.default.Header, Object.assign({ closeButton: true }, { children: (0, jsx_runtime_1.jsx)(Modal_1.default.Title, { children: "Sign Up" }) })), (0, jsx_runtime_1.jsxs)(Modal_1.default.Body, { children: [signinErrorState && ((0, jsx_runtime_1.jsx)("p", Object.assign({ style: { color: "red" } }, { children: "Failed to sing up. Please try again with a different username." }))), (0, jsx_runtime_1.jsx)("input", { onChange: userNameHandler, type: "text", name: "username", placeholder: "username" }), (0, jsx_runtime_1.jsx)("input", { onChange: passwordHandler, type: "password", name: "password", placeholder: "password" }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Go", onClick: () => {
                                        onResister();
                                    } })] }), (0, jsx_runtime_1.jsx)(Modal_1.default.Footer, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "secondary", onClick: handleClose }, { children: "Close" })) })] })) }))] }));
};
exports.default = Signup;
