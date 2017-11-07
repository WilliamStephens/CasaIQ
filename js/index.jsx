import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import deviceApp from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  deviceApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-undef
);
/* eslint-enable */

const root = document.querySelector('#app'); // eslint-disable-line no-undef

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Component />
        </Router>
      </AppContainer>
    </Provider>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}
