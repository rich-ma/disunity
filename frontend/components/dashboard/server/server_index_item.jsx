import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerIndexItem = ({server}) => (
  <li>
    <NavLink className='server-link' to={`/servers/${server.id}`} activeClassName="server-link-selected">
      <div className="server-link-div"></div>
      <img src={server.photoUrl} alt={`${server.name}'s icon`}/>
    </NavLink>
  </li>
);

export default ServerIndexItem;