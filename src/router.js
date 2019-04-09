import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Forgetpsd from './pages/Forgetpsd';
import Resetpsd from './pages/Resetpsd';
import Personal from './pages/Personal';



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Forgetpsd" exact component={Forgetpsd} />
        <Route path="/Resetpsd" exact component={Resetpsd} />
        <Route path="/Personal" exact component={Personal} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
