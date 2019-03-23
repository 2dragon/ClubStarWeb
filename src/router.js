import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
