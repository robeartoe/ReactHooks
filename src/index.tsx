import React from 'react';
import ReactDOM from 'react-dom';
import {default as DimensionsHook} from './dimensionsHook';
import {default as GenericHook} from './genericHook'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
          <Route path="/dimensions-hook">
            <DimensionsHook />
          </Route>
          <Route path="/generic-hook">
            <GenericHook />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
