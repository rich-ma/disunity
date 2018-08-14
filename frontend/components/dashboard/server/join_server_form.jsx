import React from 'react';
import { withRouter } from 'react-router-dom';

class JoinServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeServerMembershipErrors();
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let membership;
    this.props.createServerMembership(this.state)
      .then(payload => {
        membership = payload.membership;

        this.props.fetchServers()
          .then(() => this.props.closeModal())
          .then(() => this.props.history.push(`/channels/${membership.serverId}`))
      });
  }

  render() {
    return (
      <div className="join-server-form-container">
        <h1 className='join-server-title'>JOIN A SERVER</h1>
        <p>Enter the name of the server<br/>you want to join below:</p>

        <div className='join-server-errors'>
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

        <form onSubmit={this.handleSubmit}>
          <input
            className="join-server-input"
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
            autoFocus="true" 
            placeholder="Enter a server name"/>
        </form>

        <button className="join-server-submit" onClick={this.handleSubmit}>Join</button>

      </div>
    )
  }
}

export default withRouter(JoinServerForm);
