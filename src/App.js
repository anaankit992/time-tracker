import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import history from './utils/history';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/">
          <Home  history={history} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
