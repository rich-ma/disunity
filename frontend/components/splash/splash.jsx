import React from 'react';
import { Link } from 'react-router-dom';



const Homepage = ({ currentUser, logout }) => {
  const dashboard = () => (
    <div>
      <p>Hell {currentUser.username}</p>
    </div>
  );
  const splash = () => (
    <div>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
  
  return currentUser ? dashboard() : splash();
};


export default Homepage;
/*
<Route path='/' component={Header}/>
<Route path='/' component={Splash}/>
<Route path='/' component={Footer}/>
*/