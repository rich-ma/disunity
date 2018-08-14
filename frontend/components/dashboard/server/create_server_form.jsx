import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photoFile: null
    };

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.removeServerErrors();
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', this.state.name);
    formData.append('server[admin_id]', this.props.currentUser.id);
    if (this.state.photoFile) {
      formData.append('server[photo]', this.state.photoFile);
    }
    this.props.createServer(formData)
      .then(payload => {
        return this.props.createServerMembership(payload.server);
      })
      .then(payload => {
        debugger
        this.props.history.push(`/channels/${payload.serverId}`)
      }) 
      .then(() => this.props.closeModal());
  }

  handleFile(e) {
    e.preventDefault()
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  render() {
    const photoFileName = this.state.photoFile ? `Uploaded ${this.state.photoFile.name}` : "";

    return (
      <div className="create-server-form-container">
          <h1>Create your server</h1>

          <p>
            By creating a server, you will have access to free text chat to use amongst your friends.
          </p>

          <div className='create-server-errors'>
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

        <form className="create-server-form" onSubmit={this.handleSubmit}>
            <label>
              <h2>SERVER NAME</h2>
              <input
                type="text"
                placeholder="Enter a server name"
                autoFocus="true"
                className = 'create-server-input'
                onChange={(e) => this.updateState(e)}
                value={this.state.name} />
            </label>
            <div className='create-submits'>
              <label
                className="server-photo-input-label"
                htmlFor="server-photo-input">
                <div>
                  <p>Change<br/>Icon</p>
              <input
                type="file"
                id="server-photo-input"
                onChange={this.handleFile}
                accept="image/*" />
                </div>
              </label>

                <div className="server-photo-filename">{photoFileName}</div>
                <input className='create-server-submit' type="submit" value='Create'/>
             
            </div>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateServerForm);
