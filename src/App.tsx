import React from 'react';
import "antd/dist/antd.css";
import "./index.css";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Extends from "./components/extends/exstend";

import Todo from "./components/todo/todo";

declare var confirm: (question: string) => boolean

export interface TodoInterface {
    title: string,
    id: string | number,
    completed: boolean;
}

interface RootState {
    toolkit: any,
    count: number
}



const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Extends}/>
                <Route path={'/todo'} component={Todo}/>
            </Switch>
        </BrowserRouter>)

};

export default App;
