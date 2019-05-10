import React from 'react';
import { Router, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';

const RouteConfig = [
  {
    path: '/',
    // model: [],
    component: () => import('./pages/IndexPage'),
  },
  {
    path: '/Home',
    // model: [],
    name: 'Home',
    component: () => import('./pages/Home'),
  },
  {
    path: '/Forgetpsd',
    // model: [],
    name: 'Forgetpsd',
    component: () => import('./pages/Forgetpsd'),
  },
  {
    path: '/Resetpsd',
    // model: [],
    name: 'Resetpsd',
    component: () => import('./pages/Resetpsd'),
  },
  {
    path: '/Personal',
    // model: [],
    name: 'Personal',
    component: () => import('./pages/Personal'),
  },
  {
    path: '/Createclub',
    // model: [],
    name: 'Createclub',
    component: () => import('./pages/Createclub'),
  },
  {
    path: '/Allclub',
    // model: [],
    name: 'Allclub',
    component: () => import('./pages/Allclub'),
  },
  {
    path: '/Manage',
    // model: [],
    name: 'Manage',
    component: () => import('./pages/Manage'),
  },
  {
    path: '/Test',
    // model: [],
    name: 'Test',
    component: () => import('./pages/Test'),
  },
  {
    path: '/Login',
    // model: [],
    name: 'Login',
    component: () => import('./pages/Login'),
  },
  {
    path: '/Register',
    // model:[],
    name: 'Register',
    component: () => import('./pages/Register'),
  },
]

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {
          // map() 方法返回一个新数组，不会改变原始数组。数组中的元素为原始数组元素调用函数处理后的值。
          RouteConfig.map(({ path,name, ...dynamics }) =>
            (
              <Route path={path} key={name} exact component={dynamic({ app, ...dynamics })} />
            )
          )
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
// import React from 'react';
// import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './pages/IndexPage';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Forgetpsd from './pages/Forgetpsd';
// import Resetpsd from './pages/Resetpsd';
// import Personal from './pages/Personal';
// import Createclub from './pages/Createclub';
// import Allclub from './pages/Allclub';
// import Manage from './pages/Manage';
// import ClubActivity from './pages/ClubActivity';
// import Test from './pages/Test';
// import Forum from './pages/Forum';
// import Clubhonor from './pages/Clubhonor';
// import Notices from './pages/Notices';

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//         <Route path="/Register" exact component={Register} />
//         <Route path="/Login" exact component={Login} />
//         <Route path="/Home" exact component={Home} />
//         <Route path="/Forgetpsd" exact component={Forgetpsd} />
//         <Route path="/Resetpsd" exact component={Resetpsd} />
//         <Route path="/Personal" exact component={Personal} />
//         <Route path="/Createclub" exact component={Createclub} />
//         <Route path="/Allclub" exact component={Allclub} />
//         <Route path="/Manage" exact component={Manage} />
//         <Route path="/ClubActivity" exact component={ClubActivity} />
//         <Route path="/Test" exact component={Test} />
//         <Route path="/Forum" exact component={Forum} />
//         <Route path="/Clubhonor" exact component={Clubhonor} />
//         <Route path="/Notices" exact component={Notices} />
//       </Switch>
//     </Router>
//   );
// }

// export default RouterConfig;

