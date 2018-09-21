import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.addChannel = this.addChannel.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  addChannel(server) {
    return (
      <div
        className="channel-new"
        onClick={() => this.props.openModal("newChannel", server)}
      >
        <i className="fas fa-plus" />
      </div>
    );
  }

  componentDidMount() {
    this.props.updateLoading(true);
    this.props.fetchServers()
      .then(() => this.props.updateLoading(false))
  }

  render() {
    if (this.props.loading) return null;
    const {
      currentUser,
      currentServer,
      channels,
      deleteChannel,
      updateChannel,
      updateLoading,
      fetchServers,
      loading
    } = this.props;
    const admin = currentServer.adminId === currentUser.id ? true : false;

    return (
      <div className="channel-index-container">
        <div className="channel-index-header">
          <p>Text Channels</p>
          {currentServer.adminId === currentUser.id
            ? this.addChannel(currentServer)
            : null}
        </div>
        <ul className="channel-index-list">
          {channels.map(channel => (
            <ChannelIndexItem
              key={channel.id}
              channel={channel}
              deleteChannel={deleteChannel}
              updateChannel={updateChannel}
              admin={admin}
              server={currentServer}
              updateLoading={updateLoading} 
              fetchServers={fetchServers}
              loading={loading}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChannelIndex);
