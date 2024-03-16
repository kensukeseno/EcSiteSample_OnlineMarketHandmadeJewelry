import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BACKEND_URL_DEVELOPMENT, BACKEND_URL_PRODUCTION, } from "../../properties/application";
const backendUrl = process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;
//  Signup modal
const Signup = ({ show, handleClose, setLoginUser, setLoginState, }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
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
    return (_jsxs(_Fragment, { children: ["Sign Up", _jsx("div", Object.assign({ onClick: (e) => e.stopPropagation() }, { children: _jsxs(Modal, Object.assign({ show: show, onHide: handleClose }, { children: [_jsx(Modal.Header, Object.assign({ closeButton: true }, { children: _jsx(Modal.Title, { children: "Sign Up" }) })), _jsxs(Modal.Body, { children: [_jsx("input", { onChange: userNameHandler, type: "text", name: "username", placeholder: "username" }), _jsx("input", { onChange: passwordHandler, type: "password", name: "password", placeholder: "password" }), _jsx("input", { type: "submit", value: "Go", onClick: () => {
                                        onResister();
                                        handleClose();
                                    } })] }), _jsx(Modal.Footer, { children: _jsx(Button, Object.assign({ variant: "secondary", onClick: handleClose }, { children: "Close" })) })] })) }))] }));
};
export default Signup;
