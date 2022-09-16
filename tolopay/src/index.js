import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CreateAccount from "./Pages/createAccount/CreateAccount";
import Qr from "./Pages/qr/Qr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CreateAccount />
    <Qr />
  </React.StrictMode>
);

reportWebVitals();
