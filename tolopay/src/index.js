import React from "react";
import ReactDOM from "react-dom/client";
// import Reset from "./Pages/EmailReset";
import App from "./App";
import {ContextProvider} from './context/Context';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Reset /> */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
