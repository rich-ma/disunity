import React from 'react';
import { Link, Route } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="splash-nav-left">
      <i className="fab fa-discord" alt="disunity logo">Dis/Unity</i>
      <ul>
        <li><Link to='/'>Download</Link></li>
        <li><Link to='/'>Nitro</Link></li>
        <li><Link to='/'>Jobs</Link></li>
        <li><Link to='/'>Developers</Link></li>
        <li><Link to='/'>Community</Link></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>Support</Link></li>
      </ul>
    </nav>
    <nav className="splash-nav-right">
    
      <a href="http://cdn.earthporm.com/wp-content/uploads/2015/08/booby-bird.jpg">
        <i className="fab fa-github-square"></i></a>
      <a href="http://cdn.earthporm.com/wp-content/uploads/2015/08/booby-bird.jpg">
        <i className="fab fa-facebook-square"></i></a>
      <a href="http://cdn.earthporm.com/wp-content/uploads/2015/08/booby-bird.jpg">
        <i className="fab fa-linkedin"></i></a>
    </nav>
  </header>
);

export default Header;