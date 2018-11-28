import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from '../Login/Login';
import Dashboard from '../Home/Dashboard.jsx';

class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        );
    }
}

export default RouterURL;