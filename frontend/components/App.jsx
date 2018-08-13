import React from 'react';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import SessionContainer from './session_form/login_form_container';
import CreateUserContainer from './session_form/signup_form_container';
import HomepageContainer from './homepage/homepage_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './dashboard/modal/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path='/login' component={SessionContainer} /> 
      <AuthRoute exact path='/signup' component={CreateUserContainer} /> 
      <Route path='/' component={HomepageContainer} /> 
    </Switch>
  </div>
);

export default App;

/*

<ProtectedRoute exact route='/servers/:serverId/:channelId' 
  component={DashboardContainer} /> 
<ProtectedRoute exact route='/servers' 
  component={DashboardContainer} /> 

*/


