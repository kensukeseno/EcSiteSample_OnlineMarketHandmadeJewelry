import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Login from "./Login";
import Signup from "./Signup";
const Sidebar = ({ loginModalShow, signupModalShow, loginState, loginUser, onLoginModalShow: handleLoginModalShow, onLoginModalClose: handleLoginModalClose, onSignupModalShow: handleSignupModalShow, onSignupModalClose: handleSignupModalClose, setLoginUser: setLoginUser, setLoginState: setLoginState, onLogout: onLogout, }) => {
    return (_jsxs(DropdownButton, Object.assign({ align: "end", title: loginUser, id: "dropdown-menu-align-end" }, { children: [_jsx(Dropdown.Item, Object.assign({ eventKey: "1", onClick: handleLoginModalShow, style: { display: loginState ? "none" : "block" } }, { children: _jsx(Login, { show: loginModalShow, handleClose: handleLoginModalClose, handleShow: handleLoginModalShow, setLoginUser: setLoginUser, setLoginState: setLoginState }) })), _jsx(Dropdown.Item, Object.assign({ eventKey: "2", onClick: handleSignupModalShow, style: { display: loginState ? "none" : "block" } }, { children: _jsx(Signup, { show: signupModalShow, handleClose: handleSignupModalClose, handleShow: handleSignupModalShow, setLoginUser: setLoginUser, setLoginState: setLoginState }) })), _jsx(Dropdown.Item, Object.assign({ eventKey: "3", onClick: onLogout, style: { display: loginState ? "block" : "none" } }, { children: "Logout" }))] })));
};
export default Sidebar;
