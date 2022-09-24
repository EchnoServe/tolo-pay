import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Pages/login_page/LoginPage";
import Create from "./Pages/createAccount/CreateAccount";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

// reportWebVitals();
