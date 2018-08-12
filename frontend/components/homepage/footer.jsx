import React from 'react';
import { Link, Route } from 'react-router-dom';

const Footer = () => (
  <div className='footer-container'>
    <div className='footer-bar'></div>
    <div className='footer'>
      <div className="footer-left">
        <h1>Ready to try Discord? It's free!</h1>
        <p>JOIN OVER 150 MILLION PLAYERS TODAY</p>
      </div>
      <div className="footer-right">
        <Link className="footer-signup" to="/signup">Sign Up Now</Link>
      </div>
    </div>
  </div>
)

export default Footer;