import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./layouts/Header";
import Body from "./routes/Body";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";

function index() {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Failed to find the root element");
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Container>
          <Header />
          <div style={{ marginTop: "80px" }}>
            <Body />
          </div>
        </Container>
      </BrowserRouter>
    </React.StrictMode>
  );
}

index();
