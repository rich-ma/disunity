import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ServerIndexItem from './server_index_item';

class ServerIndex extends Component {

  componentDidMount(){
    this.props.fetchServers();
  }

  render() {
    const { servers, openModal } = this.props;
    
    return (
      <div className='server-index-container'>
        <ul className='server-index-list'>
        {servers.map(server => (
          <ServerIndexItem key={server.id} server={server} />
        ))}
          <li className="server-new"
            onClick={() => openModal('newServer')}><i className="fas fa-plus"></i></li>
        </ul>
      </div>
    )
  }
}

export default ServerIndex;