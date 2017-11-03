import React, { Component } from 'react'
import Header from "./header/Header"
import { Switch, Route } from "react-router-dom"

const App = () => (
    <div>
        <Header/>
        <Switch>
        <Route path="/about-us" render={() => (
            <h3>
                CasaIQ - A Smart Home Solution Custom-built for Apartments,
                Condos, and Multifamily Real Estate..
            </h3>
        )} />
        </Switch>
    </div>
) 

export default App