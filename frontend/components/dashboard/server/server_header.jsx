import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ServerHeader extends Component {

  constructor(props){
    super(props);

    this.state = this.props.currentServer;
    this.state.toggle = true;

    this.toggleServerInfo = this.toggleServerInfo.bind(this);
    this.ServerInfo = this.ServerInfo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount(){
    this.props.removeServerErrors();
    this.props.removeServerMembershipErrors();
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  toggleServerInfo(){
    this.setState({ toggle: !this.state.toggle });
  }

  handleFile(e) {
    e.preventDefault()
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', this.state.name);
    formData.append('id', this.props.currentServer.id);
    if (this.state.photoFile) {
      formData.append('server[photo]', this.state.photoFile);
    }
    this.props.updateServer(formData);
  }

  handleRemove(e){
    e.preventDefault();
    this.props.deleteServer(this.props.currentServer.id)
    then(()=> {
      this.props.history.push(`/`)
    }) 
  }

  ServerInfo(){
    const { currentUser, currentServer, errors } = this.props;
    
    let admin = (
      <div className='server-dropdown'>
        <h1>Server Info</h1>
        <div className='edit-server-errors'>
          <ul>
            {this.props.errors.server.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <ul>
            {this.props.errors.membership.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          autoFocus="true"
          className='server-dropdown-input'
          onChange={(e) => this.updateState(e)}
          value={this.state.name} />
        <div className='server-dropdown-photo'>
          <label
            className="server-photo-input-label"
            htmlFor="server-photo-input">
            <div>
              <img src={currentServer.photoUrl} alt={`${currentServer.name}'s icon`} />
              <input
                type="file"
                id="server-photo-input"
                onChange={this.handleFile}
                accept="image/*"/>
            </div>
          </label>
        </div>
        <div>
          <button className="edit-server-submit" onClick={this.handleSubmit}>Save</button>
          <button className='delete-server-submit' onClick={this.handleRemove}>Delete</button>
        </div>
      </div>
    );
    let member = (
      <div className='Server-dropdown'>

      </div>
    )
    return currentServer.adminId === currentUser.id ? admin : member;
  }

  render() {
    const { currentUser, currentServer, openModal, deleteServer} = this.props;
    if (currentServer === undefined) return null;
    return (
      <div className='server-info'>
        <h1>{currentServer.name}</h1>
        <div className="server-edit">
          <i onClick={(e) => this.toggleServerInfo(e)} className="fa fa-chevron-down" aria-hidden="true"></i>
          {this.state.toggle ? this.ServerInfo() : null}
        </div>
      </div>
    )
  }

}




export default withRouter(ServerHeader);