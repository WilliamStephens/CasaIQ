import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import DeviceContainer from '../containers/DeviceContainer';

const App = () => (
  <div className="container">
    <section className="hero is-primary is-bold is-medium">
      <HeaderContainer />
    </section>
    <Switch>
      <Route exact path="/" />
      <Route
        path="/about-us"
        render={() => (
          <div className="box has-text-centered">
            <h3>
                CasaIQ - A Smart Home Solution Custom-built for Apartments, Condos,
                and Multifamily Real Estate..
            </h3>
          </div>
        )}
      />
      <Route path="/device/:deviceName" component={DeviceContainer} />
    </Switch>
  </div>
);

export default App;
