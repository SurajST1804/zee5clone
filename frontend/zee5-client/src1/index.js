import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DropDownAPiProvider from "./ContextApis/DropDownApi";
import "./zee5.css";

ReactDOM.render(
  <DropDownAPiProvider>
    <App />
  </DropDownAPiProvider>,
  document.getElementById("root")
);
