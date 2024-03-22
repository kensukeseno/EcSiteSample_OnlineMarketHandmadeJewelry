import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  BACKEND_URL_DEVELOPMENT,
  BACKEND_URL_PRODUCTION,
} from "../../properties/application";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? BACKEND_URL_DEVELOPMENT
    : BACKEND_URL_PRODUCTION;

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
    fetch(backendUrl + "/login?username=" + userName + "&password=" + password)
      .then((res) => res.json())
      .then((data: { result: string }) => {
        if (data.result === "success") {
          setLoginUser(userName);
          setLoginState(true);
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

export default Login;
