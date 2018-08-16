import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class ChannelIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      channel: this.props.channel
    }

    this.toggleChannelInfo = this.toggleChannelInfo.bind(this);
    this.ChannelInfo = this.ChannelInfo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ channel: { name: e.currentTarget.value } });
  }

  toggleChannelInfo() {
    this.setState({ toggle: !this.state.toggle });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateChannel(this.state.channel);
  }

  handleRemove(e){
    const serverId = this.state.channel.serverId;
    e.preventDefault();
    // if (this.props.currentServer.adminId === this.props.currentUser.id) {
      this.props.deleteChannel(this.state.channel.id)
        .then(() => this.props.history.push(`/servers/${serverId}`))
    // } else {
    //   this.props.deleteServerMembership(this.props.serverMembership)
    //     .then(() => { this.props.history.push(`/`) })
    // }
  }

  ChannelInfo(){
    const { channel } = this.props;
    if (channel === undefined) return null;
    return(
      <div className='channel-dropdown'>
        <h1>Channel Info</h1>
        <input
          type="text"
          autoFocus="true"
          className='dropdown-input'
          onChange={(e) => this.updateState(e)}
          value={this.state.channel.name} />
        <div className='dropdown-buttons'>
          <button className="edit-submit" onClick={this.handleSubmit}>Save</button>
          <button className='delete-submit' onClick={this.handleRemove}>Delete</button>
        </div>
      </div>
    )
  }

  render(){
    return (
      <li className='channel-index-item'>
        <NavLink className='server-link' to={`/servers/${this.props.server.id}`} activeClassName="server-link-selected"></NavLink>

        {this.props.admin ? 
          <i onClick={(e) => this.toggleChannelInfo(e)} className="fas fa-cog" aria-hidden="true"></i> 
          : null}
        {this.state.toggle ? this.ChannelInfo() : null}
      </li>
    )
  }
}

export default withRouter(ChannelIndexItem);