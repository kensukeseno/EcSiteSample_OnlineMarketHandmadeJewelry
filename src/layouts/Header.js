import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../components/header/Sidebar";
import { BACKEND_URL_DEVELOPMENT, BACKEND_URL_PRODUCTION, } from "../properties/application";
const backendUrl = process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;
const Header = () => {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const handleLoginModalClose = () => {
        setLoginModalShow(false);
    };
    const handleLoginModalShow = () => {
        setLoginModalShow(true);
    };
    const [signupModalShow, setSignupModalShow] = useState(false);
    const handleSignupModalClose = () => {
        setSignupModalShow(false);
    };
    const handleSignupModalShow = () => {
        setSignupModalShow(true);
    };
    const [loginUser, setLoginUser] = useState("Guest");
    const onLogout = () => {
        fetch(backendUrl + "/logout").then(() => {
            setLoginUser("Guest");
            setLoginState(false);
        });
    };
    const [loginState, setLoginState] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 768px)",
    });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (_jsxs("header", Object.assign({ className: "fixed-top  w-100 d-flex justify-content-between align-items-center", style: { height: "40px" } }, { children: [_jsxs(Link, Object.assign({ to: "/", style: { display: "inline-block" } }, { children: [isDesktopOrLaptop && (_jsx("img", { className: "w-100 bg-transparent", style: { height: "40px", objectFit: "contain" }, src: `${process.env.PUBLIC_URL}/logo.jpg` })), isTabletOrMobile && (_jsx("img", { className: "w-100 bg-transparent", style: { height: "40px", objectFit: "contain" }, src: `${process.env.PUBLIC_URL}/logo_small.jpg` }))] })), _jsx("div", Object.assign({ className: "text-center w-50 p-0", style: {
                    display: "inline-block",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: _jsxs("form", Object.assign({ className: "w-100", action: "/product", method: "get" }, { children: [_jsx("input", { style: { width: "80%", height: "30px" }, type: "text", name: "product", placeholder: "Search Items" }), _jsx("input", { type: "submit", value: "\uF002", style: {
                                backgroundColor: "#FFF6E9",
                                padding: "1px 2px",
                                height: "30px",
                                borderWidth: "1px",
                                fontFamily: "FontAwesome",
                                width: "20%",
                            } })] })) })), _jsx("div", Object.assign({ className: "text-center p-0", style: {
                    display: "inline-block",
                    justifyContent: "right",
                    alignItems: "center",
                } }, { children: _jsx(Link, Object.assign({ to: "/cart" }, { children: _jsx(ShoppingCartIcon, { style: { color: "white" } }) })) })), _jsx("div", Object.assign({ className: "text-center p-0", style: {
                    display: "inline-block",
                    justifyContent: "left",
                    alignItems: "center",
                } }, { children: _jsx(Sidebar, { loginModalShow: loginModalShow, signupModalShow: signupModalShow, loginState: loginState, loginUser: loginUser, onLoginModalShow: handleLoginModalShow, onLoginModalClose: handleLoginModalClose, onSignupModalShow: handleSignupModalShow, onSignupModalClose: handleSignupModalClose, setLoginState: setLoginState, setLoginUser: setLoginUser, onLogout: onLogout }) }))] })));
};
export default Header;
