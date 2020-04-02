import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

// import { Container } from './styles';

const routes = () => (
  <BrowserRouter>
    <Switch>

    <Route exact path="/" component={Home} />

    </Switch>
  </BrowserRouter>
);

export default routes;
