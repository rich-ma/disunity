import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './header';
import Splash from './splash';
import Footer from './footer';
import ServerIndexContainer from '../dashboard/server/server_index_container';



const Homepage = ({ currentUser, logout }) => {
  const dashboard = () => (
    <div className='dashboard-container'>
      <div className='server-index-col'>
        {/* home, server indexcontainer, add server button */}
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


      <p>Hello {currentUser.username}</p>
      <button onClick={(e) => logout(e)}>CLICK ME DAVID</button>
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

