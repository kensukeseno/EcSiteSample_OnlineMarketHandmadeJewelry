import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const backendUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
    : process.env.REACT_APP_BACKEND_URL_PRODUCTION;

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
    fetch(
      backendUrl + "/login" + "?username=" + userName + "&password=" + password,
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: "",
      }
    )
      .then((res) => res.json())
      .then((data: { result: string }) => {
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
            {loginErrorState && (
              <p style={{ color: "red" }}>Username or password is incorrect.</p>
            )}
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

export default Login;
