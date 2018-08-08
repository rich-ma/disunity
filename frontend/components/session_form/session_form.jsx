import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const welcome = this.props.formType === 'login' ? (
      <div className="session-form-title">
        <h2>Welcome back!</h2>
        <p>We're so excited to see you again!</p>
      </div>
    ) : (
      <div className="session-form-title">
        <h2>Create an account</h2>
      </div>
    ); //end welcome
    
    const usernameField = this.props.formType === 'login' ? null : (
      <label>USERNAME
        <br/>
        <input type="text" value={this.state.username}
          onChange={this.update('username')}
          className="session-input"/>
          <br/>
      </label>
    ); //end username

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          {welcome}
          <br/>
         
          {this.renderErrors()}
          <div className="session-form">
            <br/>
            <label>EMAIL
              <br/>
              <input type="text" value={this.state.email}
                onChange={this.update('email')}
                className="session-input" />
            </label>
            <br/>
            {usernameField}
            <label>PASSWORD
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType === 'login' ? 'login' : 'continue'} />
          </div>
        </form>
        {(this.props.formType === 'login' ? "Need an account? " : null)}{this.props.navLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);
