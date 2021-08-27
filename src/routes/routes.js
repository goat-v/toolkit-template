import React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Alert from "../containers/Alert"
import Trend from "../containers/Trend"

import Header from "../components/Header"

const Routes = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Link to="/">Alert</Link>
        <Link to="/trend">Trend</Link>

        <Switch>
          <Route exact path="/" component={Alert} />
          <Route exact path="/trend" component={Trend} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes