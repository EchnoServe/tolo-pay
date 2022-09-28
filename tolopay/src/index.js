import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WalletToWallet from "./Components/Dashboard/components/Table";
import App from "./App"
import {ContextProvider} from './context/Context'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);

// reportWebVitals();
