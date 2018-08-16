import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.addChannel = this.addChannel.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchServers();
  // }

  static getDerivedStateFromProps(props, state) {
    if (props.channels.length === state.channels.length) {
      return state;
    }
    return props;
  }

  add

  render() {
    const { currentUser, currentServer, channels, deleteChannel, updateChannel } = this.props;
    const admin = (currentServer.adminId === currentUser.id ? true : false);
    if (channels === undefined) return null;

    return (
      <div className='channel-index-container'>
        <div className='channel-index-header'>
          <h3>Text Channels</h3>
          { currentServer.adminId === currentUser.id ? this.addChannel() : null }
        </div>
        <ul className='channel-index-list'>
          {channels.map(channel =>(
            <ChannelIndexItem key={channel.id} channel={channel} 
            deleteChannel={deleteChannel} updateChannel={updateChannel} admin={admin} server={currentServer}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(ChannelIndex);