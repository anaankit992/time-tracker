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
        <Route path="/" history={history} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
