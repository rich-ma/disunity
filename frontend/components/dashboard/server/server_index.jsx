import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ServerIndexItem from './server_index_item';

class ServerIndex extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }


  componentDidMount(){
    this.props.fetchServers();
  }

  static getDerivedStateFromProps(props, state){
    if (props.servers.length === state.servers.length){
      return state;
    }
    return props;
  }

  render() {
    if (this.state.servers === undefined) return null;

    return (
      <div className='server-index-container'>
        <ul className='server-index-list'>
        {this.state.servers.map(server => (
          <ServerIndexItem key={server.id} server={server} />
        ))}
          <li className="server-new"
            onClick={() => this.props.openModal('newServer')}><i className="fas fa-plus"></i></li>
        </ul>
      </div>
    )
  }
}

export default ServerIndex;