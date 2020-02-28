import React from 'react'
import Home from './components/Home'
import {Edit} from './components/Edit'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/edit/:id' component={Edit} />
        </Switch>
      </Router>
    </Provider>
  )
}
