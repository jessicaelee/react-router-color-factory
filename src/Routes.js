import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Colors from "./Colors"
import ColorDetails from "./ColorDetails"
import ColorForm from './ColorForm'

function Routes() {
    return (
        <Switch>
            <Route exact path="/colors"> <Colors /> </Route>
            <Route exact path="/colors/new"> <ColorForm /></Route>
            <Route exact path="/colors/:color"> <ColorDetails /></Route>
            <Redirect to="/colors" />
        </Switch>
    );
};

export default Routes;