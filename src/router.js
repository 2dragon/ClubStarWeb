import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Register from './pages/Register';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
