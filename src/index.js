import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ModalContext from "./context/modal-context";

ReactDOM.render(
  <React.StrictMode>
    <ModalContext>
      <App />
    </ModalContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
