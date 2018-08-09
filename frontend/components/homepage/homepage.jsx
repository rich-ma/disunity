import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './header';
import Splash from './splash';
import Footer from './footer';



const Homepage = ({ currentUser }) => {
  const dashboard = () => (
    <div>
      <p>Hello {currentUser.username}</p>
    </div>
  );
  const splash = () => (
    <div className="homepage-container">
      <Route path='/' component={Header}/>
      <Route path='/' component={Splash}/>
      <Route path='/' component={Footer}/>
    </div>
  );
  
  return currentUser ? dashboard() : splash();
};


export default Homepage;

