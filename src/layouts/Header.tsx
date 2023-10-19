import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function ErrorEvaluate() {
  if (window.location.search === "?error") {
    return true;
  } else {
    return false;
  }
}

function ErrorMessage() {
  if (ErrorEvaluate()) {
    return <p>username or password is incorrect</p>;
  } else {
    return <></>;
  }
}

type LoginProps = {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
};

const Login: React.FC<LoginProps> = ({ show, handleClose }) => {
  return (
    <>
      Login
      <div onClick={(e) => e.stopPropagation()}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ErrorMessage />
            <form action="/login" method="post">
              <div>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div>
                <input type="password" name="password" placeholder="password" />
              </div>
              <input type="submit" value="go" />
            </form>
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

export function Header() {
  const [show, setShow] = useState(ErrorEvaluate());
  const handleClose = () => {
    setShow(false);
    console.log(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log(true);
  };
  return (
    <Row className="fixed-top bg-light">
      <Col xs={3}>
        <Link to="/">
          <img
            className="w-100 bg-transparent"
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
          />
        </Link>
      </Col>
      <Col
        className="text-center"
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form className="w-100" action="/product" method="get">
          <input
            style={{ width: "90%" }}
            type="text"
            name="product"
            placeholder="search items"
          />
          <input
            type="submit"
            value="&#xf002;"
            style={{
              fontFamily: "FontAwesome",
            }}
          />
        </form>
      </Col>
      <Col
        xs={1}
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} size="2x" color="#00bfff" />
        </Link>
      </Col>
      <Col
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <DropdownButton
          align="end"
          title="Account"
          id="dropdown-menu-align-end"
        >
          <Dropdown.Item eventKey="1" onClick={handleShow}>
            <Login
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">Create Account</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  );
}

export default Header;
