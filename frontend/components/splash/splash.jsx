import React from 'react';
import { Link } from 'react-router-dom';



const Homepage = ({ currentUser, logout }) => {
  const dashboard = () => (
    <div>
      <p>test1</p>
    </div>
  );
  const splash = () => (
    <div>
      <p>test2</p>
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