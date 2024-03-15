import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layouts/Header";
import Body from "./routes/Body";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
function index() {
    const rootElement = document.getElementById("root");
    if (!rootElement)
        throw new Error("Failed to find the root element");
    const root = ReactDOM.createRoot(rootElement);
    root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsxs(Container, { children: [_jsx(Header, {}), _jsx("div", Object.assign({ style: { marginTop: "80px" } }, { children: _jsx(Body, {}) }))] }) }) }));
}
index();
