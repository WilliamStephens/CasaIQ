import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from './components/App'
import { createStore } from "redux"
import { Provider } from "react-redux";

const rootElement = document.querySelector('#app');

let store = createStore(() => "not implemented!")

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Component />
        </Router>
      </AppContainer>
    </Provider>,
    rootElement
  );

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
} 