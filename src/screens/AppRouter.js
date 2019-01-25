import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/UI/Header";
import HomePage from "./HomePage";
import FruitsPage from "./FruitsPage";
import SquishPage from "./SquishPage";
import AboutPage from "./AboutPage";
import NoPage from "./NoPage";
import List from "../components/UI/List";
import ModalResult from "../utils/ModalResult";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/list" component={List} />
        <Route path="/fruits" component={FruitsPage} />
        <Route path="/squish" component={SquishPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NoPage} />
      </Switch>
      <ModalResult />
    </div>
  </BrowserRouter>
);

export default AppRouter;
