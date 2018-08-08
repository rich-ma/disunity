import React from 'react';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import SessionContainer from './session_form/login_form_container';
import CreateUserContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <h1>Dis/Unity</h1>
    <Switch>
      <AuthRoute exact path='/login' component={SessionContainer} /> 
      <AuthRoute exact path='/signup' component={CreateUserContainer} /> 
      <Route exact path='/' component={SplashContainer} /> 
    </Switch>
  </div>
);

export default App;

/*

<ProtectedRoute exact route='/servers/:serverId/:' 
  component={DashboardContainer} /> 
<ProtectedRoute exact route='/servers' 
  component={DashboardContainer} /> 

*/


