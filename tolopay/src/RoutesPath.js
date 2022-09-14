import React from "react";
// import { Route, Switch } from "react-router-dom";
import { Route,  BrowserRouter as Routes } from 'react-router-dom'  

import Dashboaard from "./Pages/Dashboaard";
import Transfer from "./Pages/Transfer";
import Setting from "./Pages/Setting";
import PayBill from "./Pages/PayBill";

const RoutesPath = () => {
    return (
        <Routes>
            <Route exact path="/">
                <Dashboaard />
            </Route>
            <Route exact path="/transfer">
                < Transfer />
            </Route>
            <Route exact path="/paybill">
                <PayBill />
            </Route>
            <Route exact path="/setting">
                <Setting />
            </Route>
        </Routes>
    );
};

export default RoutesPath;
