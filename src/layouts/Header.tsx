import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import { useMediaQuery } from "react-responsive";

type LoginProps = {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
  setLoginUser: (loginUser: string) => void;
  setLoginState: (loginState: boolean) => void;
};

// Login modal
const Login: React.FC<LoginProps> = ({
  show,
  handleClose,
  setLoginUser,
  setLoginState,
}) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userNameHandler = (event: any) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const onLogin = () => {
    // When login is successful, display username and set login state to true
    fetch("/login?username=" + userName + "&password=" + password, {
      method: "post",
      body: "",
    })
      .then((res) => res.json())
      .then((data: Result) => {
        if (data.result === "success") {
          setLoginUser(userName);
          setLoginState(true);
          handleClose();
        } else if (data.result === "fail") {
          setLoginErrorState(true);
        }
      });
  };

  // Login error state
  const [loginErrorState, setLoginErrorState] = useState<boolean>(false);

  return (
    <>
      Login
      <div onClick={(e) => e.stopPropagation()}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: loginErrorState ? "block" : "none" }}>
              username or password is incorrect
            </div>
            <input
              onChange={userNameHandler}
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              onChange={passwordHandler}
              type="password"
              name="password"
              placeholder="password"
            />
            <input
              type="submit"
              value="Go"
              onClick={() => {
                onLogin();
              }}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

// Signup modal
const Signup: React.FC<LoginProps> = ({
  show,
  handleClose,
  setLoginUser,
  setLoginState,
}) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userNameHandler = (event: any) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  // Resister new account, diplay username and set login state to true
  const onResister = () => {
    fetch("/resister?username=" + userName + "&password=" + password);
    setLoginUser(userName);
    setLoginState(true);
  };

  return (
    <>
      Sign Up
      <div onClick={(e) => e.stopPropagation()}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              onChange={userNameHandler}
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              onChange={passwordHandler}
              type="password"
              name="password"
              placeholder="password"
            />
            <input
              type="submit"
              value="Go"
              onClick={() => {
                onResister();
                handleClose();
              }}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

type Result = { result: string };

export function Header() {
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
    fetch("/logout").then(() => {
      setLoginUser("Guest");
      setLoginState(false);
    });
  };

  const [loginState, setLoginState] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div
      className="fixed-top bg-light  w-100 d-flex justify-content-between align-items-center"
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
            src={`${process.env.PUBLIC_URL}/logo_no_text.jpg`}
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
            style={{ width: "80%" }}
            type="text"
            name="product"
            placeholder="search items"
          />
          <input
            type="submit"
            value="&#xf002;"
            style={{
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
          <FontAwesomeIcon icon={faCartShopping} size="2x" color="#00bfff" />
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
        <DropdownButton
          align="end"
          title={loginUser}
          id="dropdown-menu-align-end"
        >
          <Dropdown.Item
            eventKey="1"
            onClick={handleLoginModalShow}
            style={{ display: loginState ? "none" : "block" }}
          >
            <Login
              show={loginModalShow}
              handleClose={handleLoginModalClose}
              handleShow={handleLoginModalShow}
              setLoginUser={setLoginUser}
              setLoginState={setLoginState}
            />
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={handleSignupModalShow}
            style={{ display: loginState ? "none" : "block" }}
          >
            <Signup
              show={signupModalShow}
              handleClose={handleSignupModalClose}
              handleShow={handleSignupModalShow}
              setLoginUser={setLoginUser}
              setLoginState={setLoginState}
            />
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="3"
            onClick={onLogout}
            style={{ display: loginState ? "block" : "none" }}
          >
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default Header;
