import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../components/header/Sidebar";
import {
  BACKEND_URL_DEVELOPMENT,
  BACKEND_URL_PRODUCTION,
} from "../properties/application";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;

const Header = () => {
  const [loginModalShow, setLoginModalShow] = useState<boolean>(false);
  const handleLoginModalClose = () => {
    setLoginModalShow(false);
  };
  const handleLoginModalShow = () => {
    setLoginModalShow(true);
  };

  const [signupModalShow, setSignupModalShow] = useState<boolean>(false);
  const handleSignupModalClose = () => {
    setSignupModalShow(false);
  };
  const handleSignupModalShow = () => {
    setSignupModalShow(true);
  };

  const [loginUser, setLoginUser] = useState<string>("Guest");

  const onLogout = () => {
    fetch(backendUrl + "/logout").then(() => {
      setLoginUser("Guest");
      setLoginState(false);
    });
  };

  const [loginState, setLoginState] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header
      className="fixed-top  w-100 d-flex justify-content-between align-items-center"
      style={{ height: "40px" }}
    >
      <Link to="/" style={{ display: "inline-block" }}>
        {isDesktopOrLaptop && (
          <img
            className="w-100 bg-transparent"
            style={{ height: "40px", objectFit: "contain" }}
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
          />
        )}
        {isTabletOrMobile && (
          <img
            className="w-100 bg-transparent"
            style={{ height: "40px", objectFit: "contain" }}
            src={`${process.env.PUBLIC_URL}/logo_small.jpg`}
          />
        )}
      </Link>
      <div
        className="text-center w-50 p-0"
        style={{
          display: "inline-block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form className="w-100" action="/product" method="get">
          <input
            style={{ width: "80%", height: "30px" }}
            type="text"
            name="product"
            placeholder="Search Items"
          />
          <input
            type="submit"
            value="&#xf002;"
            style={{
              backgroundColor: "#FFF6E9",
              padding: "1px 2px",
              height: "30px",
              borderWidth: "1px",
              fontFamily: "FontAwesome",
              width: "20%",
            }}
          />
        </form>
      </div>
      <div
        className="text-center p-0"
        style={{
          display: "inline-block",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Link to="/cart">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Link>
      </div>
      <div
        className="text-center p-0"
        style={{
          display: "inline-block",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Sidebar
          loginModalShow={loginModalShow}
          signupModalShow={signupModalShow}
          loginState={loginState}
          loginUser={loginUser}
          onLoginModalShow={handleLoginModalShow}
          onLoginModalClose={handleLoginModalClose}
          onSignupModalShow={handleSignupModalShow}
          onSignupModalClose={handleSignupModalClose}
          setLoginState={setLoginState}
          setLoginUser={setLoginUser}
          onLogout={onLogout}
        />
      </div>
    </header>
  );
};

export default Header;
