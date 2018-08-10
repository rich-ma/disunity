import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerIndexItem = ({server}) => (
  <NavLink className='server-link' to={`/servers/${server.id}`} activeClassName="server-link-selected">
    <div classname="server-link-div"></div>
    <img src={server.icon_url} alt={`${server.name}'s icon`}/>
    </NavLink>
);

export default ServerIndexItem;