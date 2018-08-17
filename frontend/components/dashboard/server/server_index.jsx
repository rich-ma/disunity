import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ServerIndexItem from './server_index_item';

class ServerIndex extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  componentDidMount(){
    this.props.updateLoading(true);
    this.props.fetchServers()
    .then(()=>this.props.updateLoading(false))
  }

  componentWillReceiveProps(newProps){
    debugger;
  }

  static getDerivedStateFromProps(props, state){
    if (props.servers.length === state.servers.length){
      return state;
    }
    return props;
  }

  render() {
    if (this.props.loading) {
      return(
        <div align="center" className="cssload-fond">
          <div className="cssload-container-general">
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_1"> </div></div>
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_2"> </div></div>
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_3"> </div></div>
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_4"> </div></div>
          </div>
        </div>
      )
    }
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