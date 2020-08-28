import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../../ui/Header/Header'
import HomePage from '../../pages/HomePage/HomePage'
import FruitsPage from '../../pages/FruitsPage/FruitsPage'
import SquishPage from '../../pages/SquishPage/SquishPage'
import AboutPage from '../../pages/AboutPage/AboutPage'
// import NoPage from '../pages/NoPage'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/fruits" component={FruitsPage} />
      <Route path="/squish" component={SquishPage} />
      <Route path="/about" component={AboutPage} />
      {/* 
        
        <Route component={NoPage} /> */}
    </Switch>
  </BrowserRouter>
)

export default AppRouter
