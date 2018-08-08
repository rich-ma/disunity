import React from 'react';
import { Switch } from 'react-router-dom';
import HomepageContainer from './homepage/homepage_container';

const App = () => (
  <div>
    <h1>Dis/Unity</h1>
    <Switch>
      <ProtectRoute route='/servers/:serverId/:' 
        component={DashboardContainer} /> 
      <ProtectRoute route='/servers' 
        component={DashboardContainer} /> 
      <AuthRoute route='/login' component={SessionContainer} /> 
      <AuthRoute route='/signup' component={CreateUserContainer} /> 
      <AuthRoute route='/' component={SplashContainer} /> 
    </Switch>
  </div>
);

export default App;

/*
in SplashContainer


*/


