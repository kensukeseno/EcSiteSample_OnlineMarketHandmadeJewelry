"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Dropdown_1 = __importDefault(require("react-bootstrap/Dropdown"));
const DropdownButton_1 = __importDefault(require("react-bootstrap/DropdownButton"));
const Login_1 = __importDefault(require("./Login"));
const Signup_1 = __importDefault(require("./Signup"));
const Sidebar = ({ loginModalShow, signupModalShow, loginState, loginUser, onLoginModalShow: handleLoginModalShow, onLoginModalClose: handleLoginModalClose, onSignupModalShow: handleSignupModalShow, onSignupModalClose: handleSignupModalClose, setLoginUser: setLoginUser, setLoginState: setLoginState, onLogout: onLogout, }) => {
    return ((0, jsx_runtime_1.jsxs)(DropdownButton_1.default, Object.assign({ align: "end", title: loginUser, id: "dropdown-menu-align-end" }, { children: [(0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "1", onClick: handleLoginModalShow, style: { display: loginState ? "none" : "block" } }, { children: (0, jsx_runtime_1.jsx)(Login_1.default, { show: loginModalShow, handleClose: handleLoginModalClose, handleShow: handleLoginModalShow, setLoginUser: setLoginUser, setLoginState: setLoginState }) })), (0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "2", onClick: handleSignupModalShow, style: { display: loginState ? "none" : "block" } }, { children: (0, jsx_runtime_1.jsx)(Signup_1.default, { show: signupModalShow, handleClose: handleSignupModalClose, handleShow: handleSignupModalShow, setLoginUser: setLoginUser, setLoginState: setLoginState }) })), (0, jsx_runtime_1.jsx)(Dropdown_1.default.Item, Object.assign({ eventKey: "3", onClick: onLogout, style: { display: loginState ? "block" : "none" } }, { children: "Logout" }))] })));
};
exports.default = Sidebar;
