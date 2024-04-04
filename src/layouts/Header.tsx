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

type headerType = {
  loginState: boolean;
  setLoginState: (loginState: boolean) => void;
  setItemInSearch: (itemInSearch: string) => void;
};

const Header: React.FC<headerType> = ({
  loginState,
  setLoginState,
  setItemInSearch,
}) => {
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

  const [inputItem, setInputItem] = useState<string>("");

  const onLogout = () => {
    fetch(backendUrl + "/logout").then(() => {
      setLoginUser("Guest");
      setLoginState(false);
    });
  };

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
        <input
          style={{ width: "80%", height: "30px" }}
          type="text"
          name="product"
          placeholder="Search Items"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <Link to="/product">
          <input
            type="submit"
            value="&#xf002;"
            style={{
              width: "20%",
              fontFamily: "FontAwesome",
            }}
            onClick={() => {
              setItemInSearch(inputItem);
              setInputItem("");
            }}
          />
        </Link>
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
