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

type SignupProps = {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
  setLoginUser: (loginUser: string) => void;
  setLoginState: (loginState: boolean) => void;
};

//  Signup modal
const Signup: React.FC<SignupProps> = ({
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
    fetch(
      backendUrl + "/resister?username=" + userName + "&password=" + password
    );
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

export default Signup;
