import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import HeaderContainer from "../containers/HeaderContainer"
import LockContainer from "../containers/LockContainer"

const App = () => (
    <div>
        <HeaderContainer/>
        <Switch>
        <Route path="/about-us" render={() => (
            <h3>
                CasaIQ - A Smart Home Solution Custom-built for Apartments,
                Condos, and Multifamily Real Estate..
            </h3>
        )} />
        <Route path="/device/:deviceName" component={LockContainer} />
        </Switch>
    </div>
) 

export default App