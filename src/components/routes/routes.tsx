import {BrowserRouter, Route, Switch} from "react-router-dom";
import Extends from "../extends/exstend";
import React from "react";
import App from "../../App";


    <Switch>
        <Route path={'/'} exact component={Extends} />
        {/*<Route path={'/todo'} exact component={App}/>*/}
    </Switch>
