import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class ChannelIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      name: this.props.channel.name,
      server_id: this.props.channel.serverId,
      id: this.props.channel.id
    }

    this.toggleChannelInfo = this.toggleChannelInfo.bind(this);
    this.ChannelInfo = this.ChannelInfo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  toggleChannelInfo() {
    this.setState({ toggle: !this.state.toggle });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateChannel(this.state);
  }

  handleRemove(e){
    e.preventDefault();
      this.props.deleteChannel(this.state.id).then(() => this.props.history.push(`/servers/${this.state.serverId}`))
  }

  ChannelInfo(){
    // if (this.props.loading) return null;
    const { channel } = this.props;
    // if (channel === undefined) return null;
    
    return(
      <div>
        <div onClick={(e) => this.toggleChannelInfo(e)}  className='close-channel-dropdown'></div>
        <div className='channel-dropdown'>
          <h1>Channel Info</h1>
          <input
            type="text"
            autoFocus="true"
            className='dropdown-input'
            onChange={(e) => this.updateState(e)}
            value={this.state.name} />
          <div className='dropdown-buttons'>
            <button className="edit-submit" onClick={this.handleSubmit}>Save</button>
            <button className='delete-submit' onClick={this.handleRemove}>Delete</button>
          </div>
        </div>
    </div>
    )
  }

  render(){
    return (
      <NavLink className='channel-link channel-index-item' 
        to={`/servers/${this.props.server.id}/${this.state.id}`} activeClassName="channel-link-selected">
        <i className="fas fa-hashtag">&nbsp;</i>
        <p>{this.state.name}</p>
        {this.props.admin ? 
          <i onClick={(e) => this.toggleChannelInfo(e)} className="fas fa-cog" aria-hidden="true"></i> 
          : <span></span>}
        {this.state.toggle ? this.ChannelInfo() : null}
      </NavLink>

    )
  }
}

export default withRouter(ChannelIndexItem);