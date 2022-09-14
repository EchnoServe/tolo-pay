import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboaard from "./Pages/Dashboaard";
import Transfer from "./Pages/Transfer";
import Setting from "./Pages/Setting";
import PayBill from "./Pages/PayBill";

const Routes = () => {
    return (
        <Switch>
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
        </Switch>
    );
};

export default Routes;
