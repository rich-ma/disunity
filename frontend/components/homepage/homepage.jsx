import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './header';
import Splash from './splash';
import Footer from './footer';
import ServerIndexContainer from '../dashboard/server/server_index_container';

const Homepage = ({ currentUser }) => {
  const dashboard = () => (
    <div className='dashboard-container'>
      <div className='server-index-col'>
        {/* home, server indexcontainer, add server button */}
        
        <img className="home-link" src="https://www.shareicon.net/data/512x512/2017/06/21/887435_logo_512x512.png" alt=""/>
        <span className='home-server-span'></span>
        
        <Route path='/' component={ServerIndexContainer} />
      
      </div>

      <div className='server-channel-col'>
        {/* server name, channelIndex, UserInfo */}
      </div>
      <div>
        <header className='dashboard-header'> </header>
        <div className='channel-users-container'>
          <div className='channel-message-col'>
            {/*messageIndex, messageForm */}
          </div>

          <div className='server-users-col'>
            {/* search, info */}
          </div>
        </div>
      </div>
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

