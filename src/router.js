import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Forgetpsd from './pages/Forgetpsd';
import Resetpsd from './pages/Resetpsd';
import Personal from './pages/Personal';
import Createclub from './pages/Createclub';
import Allclub from './pages/Allclub';
import Manage from './pages/Manage';
import ClubActivity from './pages/ClubActivity';
import Test from './pages/Test';
import Forum from './pages/Forum';
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
        <Route path="/Createclub" exact component={Createclub} />
        <Route path="/Allclub" exact component={Allclub} />
        <Route path="/Manage" exact component={Manage} />
        <Route path="/ClubActivity" exact component={ClubActivity} />
        <Route path="/Test" exact component={Test} />
        <Route path="/Forum" exact component={Forum} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;


// import React from 'react';
// import { Router, Route, Switch } from 'dva/router';


// const RouteArray = [
//   {
//     path: '/',
//     // component: IndexPage,
//     component: require('./pages/IndexPage'),
//   },
//   {
//     path: '/Register',
//     component: require('./pages/Register'),
//   },
//   {
//     path: '/Login',
//     component: require('./pages/Login'),
//   },
//   {
//     path: '/Home',
//     component: require('./pages/Home'),
//   },
//   {
//     path: '/Forgetpsd',
//     component: require('./pages/Forgetpsd'),
//   },
//   {
//     path: '/Resetpsd',
//     component: require('./pages/Resetpsd'),
//   },
//   {
//     path: '/Personal',
//     component: require('./pages/Personal'),
//   },
//   {
//     path: '/Createclub',
//     component: require('./pages/Createclub'),
//   },
//   {
//     path: '/Allclub',
//     component: require('./pages/Allclub'),
//   },
//   {
//     path: '/Manage',
//     component: require('./pages/Manage'),
//   },
//   {
//     path: '/Test',
//     component: require('./pages/Test'),
//   }
// ]
// function x() {
//   for (let ARouteArray of RouteArray) {
//     <Route path={ARouteArray.path} component={ARouteArray.component} />
//   }
// }
// function RouterConfig({ history }) {

//   return (
//     <Router history={history}>
//       <Switch>
//         {x}
//       </Switch>
//     </Router>
//   );
// }

// export default RouterConfig;
