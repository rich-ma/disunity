import React from 'react';
import { Link } from 'react-router-dom';



const Homepage = ({ currentUser, logout }) => {
  const dashboard = () => (
    <div>
    </div>
  );
  const splash = () => (
    <div>
    <Route path='/' component={Header}/>
    <Route path='/' component={Splash}/>
    <Route path='/' component={Footer}/>
    </div>
  );

  return currentUser ? home() : welcome();
};


export default Homepage;
