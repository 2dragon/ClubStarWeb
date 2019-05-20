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
  {
    path: '/Clubhonor',
    // model:[],
    name: 'Clubhonor',
    component: () => import('./pages/Clubhonor'),
  },
  {
    path: '/Forum',
    // model:[],
    name: 'Forum',
    component: () => import('./pages/Forum'),
  },
  {
    path: '/Notices',
    // model:[],
    name: 'Notices',
    component: () => import('./pages/Notices'),
  },
  {
    path: '/ClubActivity',
    // model:[],
    name: 'ClubActivity',
    component: () => import('./pages/ClubActivity'),
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
export {RouteConfig};
