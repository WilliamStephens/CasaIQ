import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import deviceApp from "./reducers"

let store = createStore(deviceApp)

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Component />
        </Router>
      </AppContainer>
    </Provider>,
    document.querySelector('#app')
  )

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => render(App))
} 