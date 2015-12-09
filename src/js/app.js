import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Sidebar from './components/public/sidebar';
import Home from './components/public/home';
import Login from './components/public/login';
import Register from './components/public/register';
import FAQ from './components/public/faq'
import Dashboard from './components/moderator/dashboard';
import CreateAuction from './components/moderator/createAuction';
import ItemView from './components/moderator/dashboardItemView';
import CreateItem from './components/moderator/createitem'

ReactDOM.render((
  <Router>
    <Route path="/" component={Sidebar}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="faq" component={FAQ}/>
    </Route>
    <Route path='/dashboard' component={Dashboard}>
      <IndexRoute component={ItemView} />
      <Route path='/createauction' component={CreateAuction}/>
      <Route path='/createitem' component={CreateItem} />
    </Route>
  </Router>
), document.getElementById('app'));
