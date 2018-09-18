import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ServerHeader extends Component {
  constructor(props){
    super(props);
    if (props.loading) return null;
    this.state={
      name: props.currentServer.name,
      photoFile: null,
      photoUrl: props.currentServer.photoUrl,
    }
    this.toggle = false;
    this.toggleServerInfo = this.toggleServerInfo.bind(this);
    this.ServerInfo = this.ServerInfo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }



  componentWillReceiveProps(nextProps){
    const that = this;
    if (nextProps.match.params.serverId !== this.props.match.params.serverId){
      this.props.updateLoading(true);
      this.props.fetchServers();
      this.props
        .fetchServer(nextProps.match.params.serverId)
        .then(payload => {
          that.setState({
            name: payload.server.name,
            photoUrl: payload.server.photoUrl
          })
        })
        .then(() => that.props.updateLoading(false));
    }
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
    // this.setState({ name: e.currentTarget.value });
  }

  toggleServerInfo(){
    this.toggle = !this.toggle;
  }

  handleFile(e) {
    e.preventDefault()
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ PhotoUrl: "", PhotoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', this.state.name);
    formData.append('id', this.props.currentServer.id);
    if (this.state.photoFile) {
      formData.append('server[photo]', this.state.photoFile);
    }
    this.props.updateServer(formData)
    .then(() => this.props.fetchServer(this.props.currentServer.id))
    .then(() => this.toggleServerInfo())
  }

  handleRemove(e){
    e.preventDefault();
    const that = this;
    if (this.props.currentServer.adminId === this.props.currentUser.id) {
      this.props.updateLoading(true);
      this.props.deleteServer(that.props.currentServer.id)
      .then(()=> { that.props.history.push(`/`)})
      .then(() => that.props.updateLoading(false));
    } else {
      this.props.updateLoading(true);
      this.props.deleteServerMembership(this.props.serverMembership)
      .then(() => {that.props.history.push(`/`)})
      .then(() => that.props.updateLoading(false));
    }
  }

  ServerInfo(){
    const { currentUser, currentServer, errors } = this.props;
    let admin = (
      <div>
        <div onClick={(e) => this.toggleServerInfo(e)} className='close-server-dropdown'></div>
        <div className='server-dropdown'>
          <h1>Server Info</h1>
          <div className='edit-server-errors'>
            <ul>
              {errors.server.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <ul>
              {errors.membership.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <input
            type="text"
            autoFocus="true"
            className='dropdown-input'
            onChange={(e) => this.updateState(e)}
            value={this.state.name} />
          <div className='server-dropdown-photo'>
            <label
              className="server-photo-input-label"
              htmlFor="server-photo-input">
              <div>
                <img src={this.state.photoUrl} alt={`${this.state.name}'s icon`} />
                <input
                  type="file"
                  id="server-photo-input"
                  onChange={(e)=>this.handleFile(e)}
                  accept="image/*"/>
              </div>
            </label>
          </div>
          <div className='dropdown-buttons'>
            <button className="edit-submit" onClick={e => this.handleSubmit(e)}>Save</button>
            <button className='delete-submit' onClick={e => this.handleRemove(e)}>Delete</button>
          </div>
        </div>
      </div>
    );
    let member = (
      <div>
        <div onClick={(e) => this.toggleServerInfo(e)} className='close-server-dropdown'></div>
        <div className='server-dropdown'>
          <h1>Server Info</h1>
          <h2>{currentServer.name}</h2>
        
          <div className='server-dropdown-photo'>
            <img src={currentServer.photoUrl} 
            alt={`${currentServer.name}'s icon`} />
          </div>
          <button className='delete-submit leave-server-submit' onClick={this.handleRemove}>Leave Server</button>
        </div>
      </div>
    )
    return currentServer.adminId === currentUser.id ? admin : member;
  }

  render() {
    if (this.props.loading) return null;
    const { currentUser, currentServer, openModal, deleteServer} = this.props;
    return (
      <div className='server-info'>
        <h1>{currentServer.name}</h1>
        <div className="server-edit">
          <i onClick={() => this.toggleServerInfo()} className={this.toggle  ? "fa fa-times" : "fa fa-chevron-down"} aria-hidden="true"></i>
          {this.toggle ? this.ServerInfo() : null}
        </div>
      </div>
    )
  }

}




export default withRouter(ServerHeader);


  // componentDidMount() {
  //   const that = this;
  //   this.props.updateLoading(true);
  //   debugger
  //   this.props.fetchServers()
  //   .then(() => {
  //     debugger
  //   })
  //   this.props.fetchServer(that.props.match.params.serverId)
  //     .then(payload => (that.setState({ name: payload.server.name, photoUrl: payload.server.photoUrl })))
  //     .then(() => that.props.updateLoading(false));
  //   this.props.removeServerErrors();
  //   this.props.removeServerMembershipErrors();
  // }