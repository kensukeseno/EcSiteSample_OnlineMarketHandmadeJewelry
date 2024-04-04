import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./layouts/Header";
import Body from "./routes/Body";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";

function index() {
  function Root() {
    const [loginState, setLoginState] = useState<boolean>(false);
    const [itemInSearch, setItemInSearch] = useState<string>("");
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Container>
            <Header
              loginState={loginState}
              setLoginState={setLoginState}
              setItemInSearch={setItemInSearch}
            />
            <div style={{ marginTop: "80px" }}>
              <Body loginState={loginState} itemInSearch={itemInSearch} />
            </div>
          </Container>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Failed to find the root element");
  const root = ReactDOM.createRoot(rootElement);

  root.render(<Root />);
}

index();
