import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      server_id: props.serverId,
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.clearChannelErrors();
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state)
      .then(payload => {
        this.props.history.push(`/servers/${payload.channel.serverId}/${payload.channel.id}`)})
      .then(() => this.props.closeModal());
  }

  render() {

    return(
      <div className='create-channel-form-container'>
        <h1>CREATE A CHANNEL</h1>
        <div className='create-channel-errors'>
          <ul>
            {this.props.errors.server.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>

          <ul>
            {this.props.errors.channel.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <label>
          CHANNEL NAME
          <input
            type="text"
            placeholder="Enter a channel name"
            autoFocus="true"
            className='create-channel-input'
            onChange={(e) => this.updateState(e)}
            value={this.state.name} />
        </label>
        <div className='create-channel-footer'>
          <button className='create-channel-submit' onClick={this.handleSubmit}>Create Channel</button>
        </div>
      </div>

    )
  }

}

export default withRouter(CreateChannelForm);