import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// import { Container } from './styles';

const routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default routes;
