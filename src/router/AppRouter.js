import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import FruitsPage from '../components/FruitsPage';
import AboutPage from '../components/AboutPage';
import NoPage from '../components/NoPage';
import List from '../components/List';

export default class AppRouter extends React.Component {
    render() {
      return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/list" component={List} />
                    <Route path="/fruits" component={FruitsPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={NoPage} />
                </Switch>
            </div>
        </BrowserRouter>
      );
    }
}
