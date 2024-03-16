import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Login from "./Login";
import Signup from "./Signup";

type SidebarProps = {
  loginModalShow: boolean;
  signupModalShow: boolean;
  loginState: boolean;
  loginUser: string;
  onLoginModalShow: () => void;
  onLoginModalClose: () => void;
  onSignupModalShow: () => void;
  onSignupModalClose: () => void;
  setLoginUser: (userName: string) => void;
  setLoginState: (loginState: boolean) => void;
  onLogout: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  loginModalShow,
  signupModalShow,
  loginState,
  loginUser,
  onLoginModalShow: handleLoginModalShow,
  onLoginModalClose: handleLoginModalClose,
  onSignupModalShow: handleSignupModalShow,
  onSignupModalClose: handleSignupModalClose,
  setLoginUser: setLoginUser,
  setLoginState: setLoginState,
  onLogout: onLogout,
}) => {
  return (
    <DropdownButton align="end" title={loginUser} id="dropdown-menu-align-end">
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
  );
};

export default Sidebar;
