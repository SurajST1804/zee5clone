import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import DropDownApiProvider from "./Components/ContentApis/DropDownApi";
import "./zee5.css";
import store from "./Redux/Store/index";
ReactDOM.render(
  <Provider store={store}>
    <DropDownApiProvider>
      <App />
    </DropDownApiProvider>
  </Provider>,
  document.getElementById("root")
);
