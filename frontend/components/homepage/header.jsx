import React from 'react';
import { Link, Route } from 'react-router-dom';

const Header = () => (
  <header className="homepage-nav">
    <nav className="homepage-nav-left">
      <div className="homepage-logo">
        <i className="fab fa-discord" alt="disunity logo"></i>
        &nbsp;
          <p>DisUnity</p>
      </div>
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
    <nav className="homepage-nav-right">
      <a href="http://cdn.earthporm.com/wp-content/uploads/2015/08/booby-bird.jpg">
        <i class="fab fa-github-alt"></i></a>
      <a href="http://cdn.earthporm.com/wp-content/uploads/2015/08/booby-bird.jpg">
        <i className="fab fa-linkedin"></i></a>
      <a href="http://cdn.earthporm.com/wp-content/uploads/2015/08/booby-bird.jpg">
        <i class="fas fa-envelope"></i></a>
        <div>
        <Link className="header-login" to="/login">Login</Link>
        </div>
    </nav>
  </header>
);

export default Header;